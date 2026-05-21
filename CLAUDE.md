# FluentBooking Documentation — Claude Guide

VitePress user-doc site for **FluentBooking**, a WordPress appointment-booking plugin. Single dev dep: `vitepress ^1.0.0`. ES module project (`"type": "module"`). 60 doc pages across 9 section folders.

## Commands

```bash
npm run docs:dev      # local server at http://localhost:5173 — always use to verify edits
npm run docs:build    # static build → docs/.vitepress/dist/ (gitignored)
npm run docs:preview  # serve the built output
```

## Repo layout

```
docs/
  index.md                  # home page (layout: home, hero + 9 feature cards)
  changelog.md              # linked from nav bar
  README.md
  .vitepress/
    config.js               # site config + sidebar (single source of truth)
    theme/
      index.js              # custom theme (Layout + styles; default VitePress link behavior)
      style.css             # brand color #2563eb + video container
    dist/                   # build output (gitignored)
    cache/                  # gitignored
  <section>/                # 9 section folders, flat — NO per-section index.md
    *.md                    # 60 doc pages total
  public/
    FluentBooking-brand/    # Icon/ and Logo/ — referenced absolutely; do NOT rename
    images/                 # screenshots organized: <section>/<page-slug>/<name>.webp
```

## Section folders → sidebar groups

The sidebar in `docs/.vitepress/config.js` has 10 groups. Group labels do NOT always match folder names — when adding a page, look up the right group:

| Sidebar group              | Folder(s) it links into |
| -------------------------- | ----------------------- |
| Getting Started            | `getting-started/` |
| Hosts & Events             | `host-events/` |
| **Availability**           | `availability/` + 1 page from `host-events/` (`how-to-create-a-booking-schedule`) |
| Bookings                   | `bookings/` |
| Payments & Coupons         | `payments/` |
| Integrations               | `integrations/` |
| **Settings**               | `global-settings/` |
| **Shortcodes & Embedding** | subset of `miscellaneous/` |
| **Advanced**               | another subset of `miscellaneous/` |
| Troubleshooting & Support  | `troubleshooting/` |

## Writing conventions

- **Frontmatter:** exactly two fields — `title` (matches in-body H1) and `description` (60–100 chars)
- **Heading depth:** max 3. H1 repeats title in-body. H2 = task section. H3 = sub-step.
- **Voice:** 2nd person ("you"), imperative-first ("To create…, go to **Calendars**…"). No contractions inside step instructions. Conversational closings allowed.
- **UI labels:** always **bold**, exact Title Case as the UI shows them (e.g. `**New Event Type**`, `**Save Changes**`)
- **Callouts:** lead pages with `::: tip Important` for prerequisites, link back to the prior doc. No `::: warning` / `::: danger` in use.
- **Images:** `![descriptive alt](/images/<section>/<page-slug>/<name>.webp)` — absolute path, webp preferred
- **Internal links:** `[Title](/<section>/<filename-without-.md>)` — no extension (`cleanUrls: true`)
- **Lists:** numbered for ordered task sequences; bullets for features, options, field descriptions

## Asset conventions

- Screenshots go in `docs/public/images/<section>/<page-slug>/<descriptive-kebab>.webp`
- **WebP preferred** (~80% of existing assets). PNG and GIF acceptable when webp isn't feasible.
- Don't move or rename anything under `docs/public/FluentBooking-brand/` — paths are hard-coded in `config.js`
- Many existing filenames end in `-scaled.webp` (WordPress upload remnant) — fine to keep, don't normalize en masse

## Skills

Project-specific skills live in `.claude/skills/` and auto-load on matching prompts:

- **writing-new-fluentbooking-doc** — write a brand-new doc page (any archetype)
- **updating-fluentbooking-doc** — edit an existing page on-tone
- **new-fluentbooking-integration** — strict template for `<service>-integration-with-fluentbooking.md`
- **editing-fluentbooking-sidebar** — edit `docs/.vitepress/config.js` correctly

Open the matching skill before drafting content.

## Things to avoid

- Don't commit `.DS_Store`, `node_modules/`, or `docs/.vitepress/dist/` (gitignored — never force-add)
- Don't add new top-level dependencies — VitePress only
- Don't register Vue components or add HTML containers (none in use today)
- Don't run a global formatter (no `.prettierrc` / `.editorconfig` — match the surrounding file)
- Don't trust the build to catch broken links — `ignoreDeadLinks: true` in config. Click-test in `docs:dev`.
- Don't normalize image filenames in bulk — paths are baked into `.md` files
- Don't create `next-cloud-...` style hyphenated integration filenames — use `<service>-integration-with-fluentbooking.md` (one orphan already exists; don't add a second)

## Commit style

Short imperative. Examples from recent history:
- `update introduction`
- `update Create a Booking Availability`
- `Zoom Integration with FluentBooking`

No conventional-commits prefixes (`feat:`, `fix:`). No issue numbers. 3–6 words.

## Quick references

- Sidebar / config / nav / search → `docs/.vitepress/config.js`
- Brand color / link target → `docs/.vitepress/theme/`
- Find a page slug → check `docs/.vitepress/config.js` sidebar
- Home page → `docs/index.md` (`layout: home` — don't change)
- Changelog → `docs/changelog.md`
