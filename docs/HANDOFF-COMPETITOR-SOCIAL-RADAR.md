# Handoff: Competitor and Social Radar

Updated: 2026-09-07

## Objective

Extend the Automatrix GitHub/news radar into a competitor-content radar that tracks public profiles and posts, stores time-series metrics, and compares competitor performance with Automatrix content.

## Current state

- GitHub collection is active through `scripts/collect-radar.mjs`.
- Active sources: GitHub API, GitHub Trending, and Hacker News/Algolia.
- The collector runs at 08:00, 14:00, and 20:00 America/Sao_Paulo.
- GHL already contains `Radar Repositories` and `Radar News` custom objects.
- GHL sync tooling and CSV snapshots are under `integrations/ghl/`.
- Social evidence in `data/radar.json` is currently a set of manually curated YouTube references. It is not continuous profile monitoring.
- Instagram and TikTok links in the radar are searches, not collected metrics.

## Historical source list

The structured seed is in `data/competitor-profiles-seed.json`.

Direct competitors:

- Alura
- Rocketseat
- DIO
- Hashtag Treinamentos
- EBAC
- Curso em Video
- Data Science Academy
- Trybe
- B7Web
- DevMedia

Creator/reference accounts:

- Fireship
- NetworkChuck
- Cole Medin
- AI Jason
- Matt Wolfe
- Traversy Media
- Web Dev Simplified
- Code With Harry
- Bro Code
- The Coding Train
- drcintas

`drcintas` is the only historical Instagram reference with a verified post URL. The recorded snapshot had 269 likes and 312 comments at the time of the original analysis.

## Available local capabilities

- `automatrix-radar-ui`: dashboard and editorial ranking rules.
- `competitor-profiling`: website, positioning, pricing, SEO, and review dossiers.
- `content-research-pipeline`: profile/post collection, media download, transcription, frame extraction, and analysis.
- `instagram-downloader`: downloads an individual public Instagram post or Reel.
- `social`: listening sources, target-account lists, RSS, Reddit, HN, and Bluesky.
- `yt-dlp` and FFmpeg are installed.
- Apify CLI/token and YouTube API key were not configured on 2026-09-07.

## GHL model

Created or planned custom objects:

- `custom_objects.radar_repository`: repository and editorial signals.
- `custom_objects.radar_news`: external news.
- `custom_objects.competitor_profile`: competitor/creator registry and latest profile metrics.

The next two tables should be created when automated post collection starts:

- `Competitor Posts`: one record per public post/video.
- `Metric Snapshots`: one record per post/profile observation, preserving history.

Do not store time-series measurements only on the profile record. Snapshots are required to calculate velocity and growth.

## Metrics to collect

Profile:

- followers/subscribers;
- total posts/videos;
- follower growth;
- posting frequency;
- platform and canonical profile URL.

Post:

- published time, format, duration, caption/title, topic, hook, CTA;
- views, likes, comments, shares, saves when publicly available;
- engagement per view;
- views per follower;
- 24-hour and 7-day velocity;
- performance versus the profile median;
- source URL and collection timestamp.

## Safe continuation prompt

Use this in a new Codex session:

```text
Continue the Automatrix competitor/social radar from docs/HANDOFF-COMPETITOR-SOCIAL-RADAR.md in the repository henriquecastregrini-sudo/automatrix-news-radar-live. Read data/competitor-profiles-seed.json and inspect the current GHL custom objects before changing anything. Resolve official profile URLs with evidence, never invent handles, then implement Competitor Posts and Metric Snapshots with idempotent upserts. Keep raw platform metrics separate from editorial scores and do not expose credentials.
```

## Immediate next action

Resolve and verify official YouTube, Instagram, and TikTok profile URLs for the seed list. Start collection with YouTube RSS/`yt-dlp`. Instagram/TikTok bulk collection requires an authenticated, policy-compliant collector; individual public Instagram links can already be downloaded.
