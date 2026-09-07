# GoHighLevel integration

Automatrix GHL location: `n9t85IRP5gN1w0PH48wK`.

No credentials are stored in this directory. The scripts use the authenticated local `ghl` CLI profile.

## Custom objects

- `custom_objects.radar_repository`
- `custom_objects.radar_news`
- `custom_objects.competitor_profile`

## Commands

```powershell
.\integrations\ghl\sync-radar-to-ghl.ps1
.\integrations\ghl\sync-competitor-profiles.ps1
```

Both synchronizers are idempotent: existing records are updated by their stable identity and missing records are created. They do not delete records.

The profile metric field is named `follower_count` because `followers` is reserved by GHL for record followers.

## CSV fallback

CSV snapshots can be imported with Create + Update. Use repository/name or URL as the deduplication field and do not enable update-empty-values unless clearing a value is intentional.
