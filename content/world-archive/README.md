# World archive (Verasanth)

**Routes:** `/verasanth/archive` and `/verasanth/archive/[section]`

## Layout

- **`lib/world-archive.ts`** — Section manifest (`ARCHIVE_SECTIONS`). Add a row, then add a matching `app/verasanth/archive/[slug]/page.tsx`.
- **`content/world-archive/`** — Data-only modules (guild cards, races, fragments). Prefer new JSON/TS files over growing a single page component.
- **`components/world-archive/`** — Shared UI (catalog grid, sidebar nav).

## Guild fiction

MDX remains under `content/{guild}/`. URLs stay `/verasanth/[guild]` and `/verasanth/[guild]/[slug]`.

## Optional next steps

- Split long race entries into `/verasanth/archive/races/[id]`.
- Move `content/verasanth-instincts-lore.ts` beside other archive data when instincts gain per-page lore.
