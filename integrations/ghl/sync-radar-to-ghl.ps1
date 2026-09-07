[CmdletBinding()]
param(
    [string]$LocationId = "n9t85IRP5gN1w0PH48wK",
    [string]$SourceRepository = "henriquecastregrini-sudo/automatrix-news-radar-live",
    [string]$SourcePath = "data/radar.json"
)

$ErrorActionPreference = "Stop"
$OutputDirectory = $PSScriptRoot
$RepositorySchema = "custom_objects.radar_repository"
$NewsSchema = "custom_objects.radar_news"

function Assert-Command {
    param([Parameter(Mandatory)][string]$Name)

    if (-not (Get-Command $Name -ErrorAction SilentlyContinue)) {
        throw "Required command '$Name' was not found in PATH."
    }
}

function Convert-ToRadarDate {
    param($Value)

    if (-not $Value) { return $null }
    return ([DateTimeOffset]::Parse(
        [string]$Value,
        [Globalization.CultureInfo]::InvariantCulture,
        [Globalization.DateTimeStyles]::RoundtripKind
    )).ToLocalTime().ToString("dd/MM/yyyy HH:mm:ss")
}

function Join-RadarValues {
    param($Values)

    if (-not $Values) { return $null }
    return (($Values | ForEach-Object { [string]$_ }) -join " | ")
}

function Join-RadarLinks {
    param($Values)

    if (-not $Values) { return $null }
    return (($Values | ForEach-Object {
        if ($_.label -and $_.url) { return "$($_.label) [$($_.url)]" }
        if ($_.url) { return [string]$_.url }
        return [string]$_
    }) -join " | ")
}

function Join-SocialProof {
    param($Values)

    if (-not $Values) { return $null }
    return (($Values | ForEach-Object {
        $prefix = if ($_.platform) { "$($_.platform): " } else { "" }
        if ($_.label -and $_.url) { return "$prefix$($_.label) [$($_.url)]" }
        if ($_.url) { return "$prefix$($_.url)" }
        return [string]$_
    }) -join " | ")
}

function Remove-NullProperties {
    param([Parameter(Mandatory)][System.Collections.IDictionary]$Properties)

    $clean = [ordered]@{}
    foreach ($entry in $Properties.GetEnumerator()) {
        if ($null -ne $entry.Value -and [string]$entry.Value -ne "") {
            $clean[$entry.Key] = $entry.Value
        }
    }
    return $clean
}

function Invoke-GhlApi {
    param(
        [Parameter(Mandatory)][string[]]$Arguments,
        [Parameter(Mandatory)]$Body
    )

    $bodyFile = Join-Path ([IO.Path]::GetTempPath()) ("ghl-radar-{0}.json" -f [guid]::NewGuid())
    try {
        $Body | ConvertTo-Json -Depth 20 -Compress | Set-Content -LiteralPath $bodyFile -Encoding utf8NoBOM
        $raw = & ghl --json api @Arguments --body-file $bodyFile
        if ($LASTEXITCODE -ne 0) {
            throw "GHL command failed: ghl api $($Arguments -join ' ')"
        }
        return ($raw | ConvertFrom-Json)
    }
    finally {
        Remove-Item -LiteralPath $bodyFile -Force -ErrorAction SilentlyContinue
    }
}

function Get-GhlRecords {
    param([Parameter(Mandatory)][string]$Schema)

    $body = [ordered]@{
        locationId = $LocationId
        page = 1
        pageLimit = 100
        query = ""
        searchAfter = @()
    }
    return (Invoke-GhlApi -Arguments @("objects", "search-object-records", "--schema-key", $Schema) -Body $body).records
}

function Sync-GhlRecords {
    param(
        [Parameter(Mandatory)][string]$Schema,
        [Parameter(Mandatory)][array]$Items,
        [Parameter(Mandatory)][string]$IdentityProperty
    )

    $existing = Get-GhlRecords -Schema $Schema
    $byIdentity = @{}
    foreach ($record in $existing) {
        $identity = [string]$record.properties.$IdentityProperty
        if ($identity) { $byIdentity[$identity.ToLowerInvariant()] = $record }
    }

    $created = 0
    $updated = 0
    foreach ($item in $Items) {
        $identity = [string]$item[$IdentityProperty]
        $properties = Remove-NullProperties -Properties $item
        $key = $identity.ToLowerInvariant()

        if ($byIdentity.ContainsKey($key)) {
            $recordId = $byIdentity[$key].id
            $body = [ordered]@{ properties = $properties }
            Invoke-GhlApi -Arguments @(
                "objects", "update-object-record",
                "--schema-key", $Schema,
                "--id", $recordId,
                "--location-id", $LocationId
            ) -Body $body | Out-Null
            $updated++
        }
        else {
            $body = [ordered]@{ locationId = $LocationId; properties = $properties }
            Invoke-GhlApi -Arguments @("objects", "create-object-record", "--schema-key", $Schema) -Body $body | Out-Null
            $created++
        }
    }

    return [pscustomobject]@{ schema = $Schema; created = $created; updated = $updated; total = $Items.Count }
}

Assert-Command -Name gh
Assert-Command -Name ghl

$sourceEndpoint = "repos/$SourceRepository/contents/$SourcePath"
$rawRadar = & gh api -H "Accept: application/vnd.github.raw+json" $sourceEndpoint
if ($LASTEXITCODE -ne 0 -or -not $rawRadar) {
    throw "Could not download $SourcePath from $SourceRepository. Check 'gh auth status'."
}

$radar = $rawRadar | ConvertFrom-Json
$rawRadar | Set-Content -LiteralPath (Join-Path $OutputDirectory "radar-source.json") -Encoding utf8NoBOM
$generatedAt = Convert-ToRadarDate $radar.generatedAt

$repositoryRows = foreach ($repo in $radar.repos) {
    [ordered]@{
        repository = [string]$repo.repo
        title = [string]$repo.title
        github_url = [string]$repo.url
        rank = [int]$repo.rank
        topic_type = [string]$repo.type
        editorial_status = [string]$repo.status
        hook = [string]$repo.hook
        viral_thesis = [string]$repo.thesis
        stars = [int64]$repo.stars
        forks = [int64]$repo.forks
        open_issues = [int64]$repo.issues
        language = [string]$repo.language
        pushed_at = Convert-ToRadarDate $repo.pushedAt
        pushed_label = [string]$repo.pushedLabel
        trending_stars_today = if ($null -ne $repo.trendingStarsToday) { [int64]$repo.trendingStarsToday } else { $null }
        editorial_score = [int]$repo.score
        social_status = [string]$repo.socialStatus
        broll = Join-RadarValues $repo.broll
        social_proof = Join-SocialProof $repo.social
        source_urls = Join-RadarLinks $repo.sources
        radar_updated_at = $generatedAt
    }
}

$newsRows = foreach ($news in $radar.news) {
    [ordered]@{
        title = [string]$news.title
        url = [string]$news.url
        source = [string]$news.source
        published_at = Convert-ToRadarDate $news.publishedAt
        points = [int64]$news.points
        comments = [int64]$news.comments
        radar_updated_at = $generatedAt
    }
}

$repositoryRows | ForEach-Object { [pscustomobject]$_ } |
    Export-Csv -LiteralPath (Join-Path $OutputDirectory "radar-repositories.csv") -NoTypeInformation -Encoding utf8
$newsRows | ForEach-Object { [pscustomobject]$_ } |
    Export-Csv -LiteralPath (Join-Path $OutputDirectory "radar-news.csv") -NoTypeInformation -Encoding utf8
$radar.trending | Export-Csv -LiteralPath (Join-Path $OutputDirectory "radar-trending.csv") -NoTypeInformation -Encoding utf8
$radar.sources | Export-Csv -LiteralPath (Join-Path $OutputDirectory "radar-sources.csv") -NoTypeInformation -Encoding utf8

$repoResult = Sync-GhlRecords -Schema $RepositorySchema -Items $repositoryRows -IdentityProperty "repository"
$newsResult = Sync-GhlRecords -Schema $NewsSchema -Items $newsRows -IdentityProperty "url"

[pscustomobject]@{
    sourceGeneratedAt = $radar.generatedAt
    repositories = $repoResult
    news = $newsResult
    csvDirectory = $OutputDirectory
} | ConvertTo-Json -Depth 5
