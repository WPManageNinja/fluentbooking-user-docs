---
name: updating-fluentbooking-doc
description: Use this skill when the user asks to update, fix, revise, or extend an existing FluentBooking doc page — phrases like "update the X doc", "fix the X page", "revise X documentation", "add a section to X", "swap the screenshot in X", "rewrite the intro of X". Steers Claude to make minimal, on-tone edits without disturbing the existing structure.
---

# Updating an existing FluentBooking doc page

The goal is **minimal, surgical edits** that preserve the page's existing voice. The 60 existing pages have a consistent tone; an update should be invisible — a reader should not be able to tell which paragraph was changed.

## Step 1 — Find the page

Don't guess the filename. Look it up:

1. Open `docs/.vitepress/config.js` — sidebar entries map sidebar text → page slug
2. OR `ls docs/<section>/` for the relevant section folder
3. The page lives at `docs/<section>/<slug>.md`

If you're not sure which section, recall:

| Topic | Section folder |
| ----- | -------------- |
| Install, dashboard, onboarding | `getting-started/` |
| Hosts, event creation, notifications | `host-events/` |
| Schedule, availability rules | `availability/` |
| Booking list, manual create/cancel | `bookings/` |
| Payments, gateways, coupons | `payments/` |
| External services (Zoom, Google, etc.) | `integrations/` |
| Global email, host, frontend settings | `global-settings/` |
| Shortcodes, embeds, URL tricks, import/export | `miscellaneous/` |
| FAQs, common issues | `troubleshooting/` |

## Step 2 — Read the page in full before editing

Even for a one-line fix. You need to:
- Match the surrounding voice (some pages are slightly warmer than others)
- Confirm the section structure (don't accidentally split a logical group)
- See which UI labels are bolded and how — be consistent

## Step 3 — Preserve rules

These are non-negotiable on an update:

- **Keep the frontmatter shape** — exactly `title` + `description`. Don't add fields.
- **Keep the in-body H1.** Even if you think the frontmatter title is enough, the H1 is required and matches the existing 60 pages.
- **Keep heading depth ≤ 3.** If you need a 4th level, restructure into a new H2.
- **Don't reformat unrelated paragraphs.** Edit only what the user asked about. A typo fix is a typo fix — not a "while I'm here, let me clean up that paragraph" moment.
- **Don't switch list styles.** If a section uses numbered steps, keep numbered. If bullets, keep bullets.
- **Don't add a TOC** — VitePress generates the right-hand outline automatically.

## Step 4 — Common-edit recipes

### Typo or phrasing tweak

Edit in place. No other changes. Use the Edit tool with a tight `old_string` / `new_string` (one sentence at most).

### Add a new section (H2) to an existing page

1. Decide where it fits in the existing flow — usually between two existing H2s following the natural step order
2. Add a new H2 with Title Case, action-oriented heading
3. Open with 1–2 sentences explaining the step
4. Use imperative instructions with bold UI labels
5. Add a screenshot at `docs/public/images/<section>/<page-slug>/<new-screenshot>.webp` and embed it after the instruction

Match the pattern:

```md
## <New Section Title>

<1-sentence intro to the step.>

To <action>, go to **<UI Path>** and click the **<Button>** button.

![<descriptive alt>](/images/<section>/<page-slug>/<screenshot>.webp)
```

### Replace a screenshot

If keeping the same filename:
- Drop the new `.webp` at the existing path → done. No markdown change needed.

If renaming the screenshot:
- Drop the new file with the new name
- `grep -r "<old-filename>" docs/` to find every reference
- Update all references in one edit

### Add an internal link

Inline phrasing:

```md
See [<Doc Title>](/<section>/<filename-without-md>).
```

Or, embedded in a sentence:

```md
Before <doing this>, you should already have <prerequisite> — see [<Doc Title>](/<section>/<slug>).
```

Rules:
- No `.md` extension (`cleanUrls: true`)
- Linked title matches the target page's sidebar text or H1, not a generic "click here"
- All in-content links open in a new tab automatically — don't add `target="_blank"` manually

### Update for a feature/UI change

When the plugin UI changes (button renamed, menu moved):

1. Scan the page for the stale bold UI label(s)
2. Replace each occurrence with the new label
3. Update the surrounding screenshot if it shows the old UI — see the "replace screenshot" recipe
4. Don't change unrelated text just because you're already editing the file

### Rewrite an intro paragraph

The intro (between H1 and first H2) sets the tone for the page. Match the existing pattern:

- Sentence 1: what this is + 1 phrase on why
- Sentence 2 (optional): "In this guide, we'll walk you through X." or similar
- Closing line: "Let's get started!" (optional, friendly)

Don't go longer than 3 sentences in the intro.

## Step 5 — Tone-preservation rules

Even when adding content, match the existing voice:

- **2nd person.** "you"/"your". The page is already in 2nd person — keep it that way.
- **Imperative-first sentences** for instructions.
- **Bold for UI labels**, exact Title Case as the UI shows them.
- **No contractions inside step instructions** (allow them in intros/closings).
- **Prerequisites in `::: tip Important`** if you're adding a new feature that depends on a prior setup.
- Don't introduce a new container type (no `:::warning` or `:::danger`) unless the page already uses one.

## Step 6 — Verify

```bash
npm run docs:dev
```

Open `http://localhost:5173/<section>/<slug>` and:
- Check the edited section renders correctly
- All images load (broken-image icon = bad path)
- Internal links go to the right pages (open in a new tab — expected)
- Sidebar still shows the page under the right group
- Right-hand outline reflects any new H2/H3 you added

`ignoreDeadLinks: true` will hide broken links from the build — you must click them.

## Step 7 — Commit

Short imperative, matching repo style:

```
update <Page Title>
```

Examples from recent history: `update introduction`, `update Create a Booking Availability`. No conventional-commits prefixes.

Stage only the files you touched. Don't `git add -A` (risks `.DS_Store` and `dist/`).

## Anti-patterns (do NOT do these)

- ❌ Bulk reformatting unrelated sections "while you're in there"
- ❌ Renaming the file (breaks the sidebar link, breaks inbound links from other docs)
- ❌ Changing the frontmatter title without also updating the sidebar text
- ❌ Adding new fields to the frontmatter (no `author`, `date`, `tags` — only `title` + `description`)
- ❌ Introducing a new tone (formal/casual swing) mid-page
- ❌ Adding HTML or Vue components — stick to markdown + VitePress containers
- ❌ Editing image filenames in bulk to "normalize" them (paths baked into pages — same goes for `-scaled.webp` suffixes)
- ❌ Trusting the build to catch a broken link — `ignoreDeadLinks: true` means you must click-test

## When to use `writing-new-fluentbooking-doc` instead

If the "update" actually creates a new conceptual page (new feature with no existing page), prefer the new-doc skill. Updates ≈ ≤ 50% of the page changes.

For new integration pages specifically, use `new-fluentbooking-integration`.
