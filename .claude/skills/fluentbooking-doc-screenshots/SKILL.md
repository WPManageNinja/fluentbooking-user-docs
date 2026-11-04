---
name: fluentbooking-doc-screenshots
description: Take, annotate, and place consistent screenshots of the FluentBooking admin and booking pages for the docs. Use when the user asks to "take screenshots", "add images", "capture the UI", "update the screenshot", or when a doc page needs an image of a FluentBooking screen. Covers the headless-Chrome runner (scripts/screenshots/shoot.cjs), JSON shot plans, crop/arrow/naming rules, and verification. Ported from the FluentCart docs process.
---

# FluentBooking Doc Screenshots

Every screenshot is taken by a script, never by hand, so images are reproducible and share the same framing, scale, and arrow style.

## Facts

| Thing | Value |
| --- | --- |
| Dev site | `http://localhost:10053` (Local site `fcrmv3`), login `admin` / `admin`. Override with `FB_SITE`, `FB_USER`, `FB_PASS`. |
| Plugin code | `~/Local Sites/fcrmv3/app/public/wp-content/plugins/fluent-booking` and `fluent-booking-pro`. |
| Admin route | `{"admin": "/settings/spam-protection"}` opens `admin.php?page=fluent-booking#/settings/spam-protection`. Routes are in `assets/admin/app.js`. |
| App root | `.fconnector_app`, positioned 160px from the left and 32px from the top. |
| Booking page | `/?fluent-booking=calendar&host=<host>&event=<event>` |
| Runner | `npm run shots -- scripts/screenshots/plans/<plan>.json [--only=name1,name2]`. The step vocabulary is at the top of `scripts/screenshots/shoot.cjs`. |
| Browser | Headless real Google Chrome through `playwright-core`. |
| Output | `docs/public/images/<section>/<page-slug>/<name>.webp`. Raw PNGs go to `scripts/screenshots/raw/` (gitignored). |
| Scale | Viewport 1600 CSS px wide, device scale 2. Do not resize the output. |
| Arrow colour | `#2563eb` with a white halo, set in `lib/annotate.cjs`. |

Do not use the Claude-in-Chrome extension, remote devices, or macOS `screencapture`.

## Workflow

1. **List the shots from the doc.** One image per step that involves a click, placed right after that sentence. Field-reference images get one image per section and no arrow.
2. **Write the plan** at `scripts/screenshots/plans/<page>.json`, copying the closest existing plan. Use `kebab-case` names with no numbers or dates.
3. **Clip.** Use `"app"` when the sidebar location matters, or `{"element": "<sel>", "pad": 24}` for a card or section. FluentBooking settings use Element Plus form items, so the `rows` and `{row: ...}` helpers (which look for `.setting-label`) do not apply on most screens. Use `crop` to trim empty space.
4. **Arrows.** At most one per image, with no label, only where the sentence says to click or select. `from` is the side with empty space.
5. **Data.** Fill fields with plausible sample data and do not save unless the shot requires it. Never use real customer data or real API keys.
6. **Run, then open every `.webp` with Read.** Check for no WP chrome or notices, nothing cut mid-word, the arrow tip outside the control, and the right state. Fix the plan and re-run with `--only=`. Do not hand-edit images.
7. **Place in markdown** with descriptive alt text, following the writing skills.
8. **Leave the site as you found it.** Record any setting before you change it, restore it afterwards, and confirm the restored value. Never submit a real booking.

Keep plan files in `scripts/screenshots/plans/` so the shots can be re-run on the next release.

## Hard rules

- Never invent UI. If a control cannot be found, stop and tell the user.
- Never crop out part of a control to make an arrow fit. Move the arrow.
- If the runner cannot do something, extend `lib/harness.cjs` and keep the plan declarative.
