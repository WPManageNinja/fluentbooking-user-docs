# FluentBooking User Docs — Claude Guidelines

## Project Overview

VitePress documentation site for **FluentBooking**, a native WordPress scheduling plugin by WPManageNinja. Content lives in `docs/`, config in `.vitepress/config.js`.

**Dev commands**
```
npm run docs:dev      # local dev server
npm run docs:build    # production build
npm run docs:preview  # preview build output
```

---

## Project Structure

```
.vitepress/
  config.js           ← sidebar, nav, site metadata (edit here to add pages)
  theme/
    index.js
    style.css
docs/
  index.md            ← homepage (hero + feature cards)
  changelog.md
  getting-started/
  host-events/
  availability/
  bookings/
  payments/
  integrations/
  global-settings/
  miscellaneous/
  troubleshooting/
```

**Sidebar is defined in `.vitepress/config.js`** — every new page needs a matching entry added there.

---

## File & Folder Naming

- All lowercase, words separated by hyphens: `how-to-create-a-new-host.md`
- Folder names match the sidebar section they belong to (see above)
- Image path pattern: `/images/{folder}/{slug}/{filename}.webp`
  - Example: `/images/integrations/zoom-integration-with-fluentbooking/connect-zoom-01.webp`

---

## Markdown Conventions

### Frontmatter (required on every page)
```yaml
---
title: Short, keyword-rich title (used in <title> and sidebar)
description: One sentence summarising what the page covers (used in meta description).
---
```

### Page structure
```
# Page Title          ← matches `title` in frontmatter, sentence case

One intro paragraph — what this page covers and why it matters.

[optional video embed]
[optional Pro callout]

## Section Heading    ← H2 for major steps/topics
...

## Section Heading
...
```

### YouTube video embed
```html
<div class="video-container">
  <iframe src="https://www.youtube.com/embed/{VIDEO_ID}" title="{title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
```
Place immediately after the intro paragraph when a tutorial video exists.

### Pro feature callout
```markdown
> The {Feature Name} feature is only available in FluentBooking Pro. You'll need the [FluentBooking Pro](https://fluentbooking.com/pricing/) plugin to access this feature.
```
Use when an entire page or a major section requires the Pro plugin.

### Images
```markdown
![alt text describing the screenshot](/images/{folder}/{slug}/{filename}.webp)
```
- Use descriptive alt text (what the screenshot shows, not just "screenshot")
- All images are `.webp`

### UI element references
- Bold every UI element name: **Settings**, **Save Changes**, **Connect with Stripe**
- Navigation paths use `→`: go to **Fluent Booking → Settings → Payment**

### Internal links
Use root-relative paths without `.md` extension:
```markdown
[Create a New Host](/host-events/how-to-create-a-new-host)
[Payment Module](/payments/how-to-take-payment-in-bookings#enable-the-global-payment-module)
```

### Blockquotes for notes/tips
```markdown
> **Note:** Short clarification the reader needs before proceeding.
```

---

## Writing Style (Technical Writer Standards)

### Voice & tone
- **Second person, active voice.** Address the reader as "you". "Click **Save**" not "The Save button should be clicked."
- **Imperative mood for instructions.** Lead steps with a verb: "Go to...", "Click...", "Enter...", "Select..."
- **Plain language.** Avoid jargon when a simpler word works. Avoid filler phrases like "simply", "just", "easily", "straightforward".
- **Present tense.** "FluentBooking syncs your calendar" not "FluentBooking will sync your calendar."

### Structure
- One idea per paragraph. Short paragraphs (2–4 sentences max in prose sections).
- Use numbered lists for sequential steps. Use bullet lists for non-ordered items or feature lists.
- H2 for major topics. H3 only when a subsection genuinely needs a heading. Never use H4+.
- Every page must make sense standalone — include context, don't assume the reader came from another page.

### Step-by-step instructions
- Number each distinct action.
- Group tightly related micro-actions into one step (e.g., "Enter your API key and click **Save**").
- End with what the user should see/expect after completing the steps.

### What NOT to do
- Do not write "In this article, we will..." or "In this tutorial, we will cover..." — get straight to the content.
- Do not repeat the page title verbatim as the first sentence.
- Do not add a summary section at the end ("That's it! You've successfully...") unless the page is long enough that a recap adds value.
- Do not pad content. Every sentence must earn its place.
- Do not use marketing language ("powerful", "amazing", "best-in-class") in instructional content.

---

## Adding a New Page — Checklist

1. Create `docs/{section}/{slug}.md` with correct frontmatter.
2. Add a sidebar entry in `.vitepress/config.js` under the correct section:
   ```js
   { text: 'Display Name', link: '/{section}/{slug}' }
   ```
3. Write the page following the structure and style above.
4. Reference it from related pages where relevant (cross-links).

---

## Sidebar Sections (in order)

| Section key | `collapsed` default |
|---|---|
| Getting Started | `false` (expanded) |
| Hosts & Events | `true` |
| Availability | `true` |
| Bookings | `true` |
| Payments & Coupons | `true` |
| Integrations | `true` |
| Settings | `true` |
| Shortcodes & Embedding | `true` |
| Advanced | `true` |
| Troubleshooting & Support | `true` |

---

## Brand Notes

- Product name: **FluentBooking** (one word, capital F, capital B)
- Pro version: **FluentBooking Pro**
- Company: **WPManageNinja**
- Related products: Fluent Forms, FluentCRM, FluentBoards, FluentCart, Fluent Support
- Plugin menu path in WordPress: **Fluent Booking** (with space, that's the WP admin menu label)
