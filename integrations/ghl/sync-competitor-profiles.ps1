[CmdletBinding()]
param(
    [string]$LocationId = "n9t85IRP5gN1w0PH48wK",
    [string]$SeedFile = (Join-Path $PSScriptRoot "..\..\data\competitor-profiles-seed.json")
)

$ErrorActionPreference = "Stop"
$Schema = "custom_objects.competitor_profile"

function Invoke-GhlApi {
    param(
        [Parameter(Mandatory)][string[]]$Arguments,
        [Parameter(Mandatory)]$Body
    )

    $bodyFile = Join-Path ([IO.Path]::GetTempPath()) ("ghl-competitor-{0}.json" -f [guid]::NewGuid())
    try {
        $Body | ConvertTo-Json -Depth 12 -Compress | Set-Content -LiteralPath $bodyFile -Encoding utf8NoBOM
        $raw = & ghl --json api @Arguments --body-file $bodyFile
        if ($LASTEXITCODE -ne 0) {
            throw "GHL command failed: ghl api $($Arguments -join ' ')"
        }
        $response = $raw | ConvertFrom-Json
        if ($response.error) {
            throw "GHL API error: $($response.error | ConvertTo-Json -Compress)"
        }
        return $response
    }
    finally {
        Remove-Item -LiteralPath $bodyFile -Force -ErrorAction SilentlyContinue
    }
}

if (-not (Get-Command ghl -ErrorAction SilentlyContinue)) {
    throw "The authenticated GHL CLI was not found in PATH."
}
if (-not (Test-Path -LiteralPath $SeedFile)) {
    throw "Seed file not found: $SeedFile"
}

$seed = Get-Content -Raw -LiteralPath $SeedFile | ConvertFrom-Json
$searchBody = [ordered]@{
    locationId = $LocationId
    page = 1
    pageLimit = 100
    query = ""
    searchAfter = @()
}
$existing = (Invoke-GhlApi -Arguments @("objects", "search-object-records", "--schema-key", $Schema) -Body $searchBody).records
$byName = @{}
foreach ($record in $existing) {
    $name = [string]$record.properties.name
    if ($name) { $byName[$name.ToLowerInvariant()] = $record }
}

$created = 0
$updated = 0
foreach ($profile in $seed.profiles) {
    $properties = [ordered]@{
        name = [string]$profile.name
        category = [string]$profile.category
        platforms = [string]$profile.platforms
        angle = [string]$profile.angle
        profile_status = [string]$profile.profileStatus
        source_date = "2026-08-24"
        source = [string]$seed.source
    }
    if ($profile.profileUrl) { $properties.profile_url = [string]$profile.profileUrl }
    if ($profile.referencePostUrl) { $properties.reference_post_url = [string]$profile.referencePostUrl }
    if ($null -ne $profile.snapshotLikes) { $properties.snapshot_likes = [int64]$profile.snapshotLikes }
    if ($null -ne $profile.snapshotComments) { $properties.snapshot_comments = [int64]$profile.snapshotComments }

    $key = ([string]$profile.name).ToLowerInvariant()
    if ($byName.ContainsKey($key)) {
        Invoke-GhlApi -Arguments @(
            "objects", "update-object-record",
            "--schema-key", $Schema,
            "--id", $byName[$key].id,
            "--location-id", $LocationId
        ) -Body ([ordered]@{ properties = $properties }) | Out-Null
        $updated++
    }
    else {
        Invoke-GhlApi -Arguments @(
            "objects", "create-object-record",
            "--schema-key", $Schema
        ) -Body ([ordered]@{ locationId = $LocationId; properties = $properties }) | Out-Null
        $created++
    }
}

[pscustomobject]@{
    schema = $Schema
    sourceProfiles = @($seed.profiles).Count
    created = $created
    updated = $updated
} | ConvertTo-Json
