---
name: writing-new-fluentbooking-doc
description: Use this skill when the user asks to write a new FluentBooking documentation page — phrases like "write a doc for X", "add a documentation page for X", "document the X feature", "create a how-to for X", "new doc page for X". Guides Claude to produce a page that matches the existing 60 pages in tone, frontmatter, heading structure, image conventions, and sidebar wiring.
---

# Writing a new FluentBooking doc page

A new doc page touches **three** places in the repo:

1. A new `.md` file under `docs/<section>/`
2. A new screenshot folder under `docs/public/images/<section>/<page-slug>/`
3. A new sidebar entry in `docs/.vitepress/config.js`

Skip any of the three and the page won't be discoverable or won't render properly.

## Step 1 — Pick the section folder and archetype

Section folders (`docs/<section>/`):

| Folder | What lives here |
| ------ | --------------- |
| `getting-started/` | Install/activate, onboarding, intro pages |
| `host-events/` | Hosts, event types, booking config, notifications |
| `availability/` | Availability/schedule management |
| `bookings/` | Booking list, manual create, cancel |
| `payments/` | Payment gateways, coupons, offline |
| `integrations/` | External services (Zoom, Google, FluentCRM, etc.) |
| `global-settings/` | Site-wide email, host, frontend panel settings |
| `miscellaneous/` | Shortcodes, embedding, URL tricks, import/export |
| `troubleshooting/` | FAQs, best practices, get help |

Then pick the archetype — the page skeleton differs by type:

- **Intro / overview** → start with a tagline, "Why X?", benefits, "Get Started in Minutes"
- **How-to / feature** → numbered task sections, screenshot per step, ends in **Save Changes**
- **Integration** → use the dedicated `new-fluentbooking-integration` skill instead
- **Settings page** → enable-the-module section, then sub-settings with bullet descriptions
- **Troubleshooting / FAQ** → "Frequently Asked Questions" with Q:/A: format
- **Reference / list** → defined-list style (code item — description), code blocks for examples

## Step 2 — Name the file

- Kebab-case, lowercase, no spaces
- Use `how-to-<verb>-<feature>.md` for action-focused pages (matches majority)
- Some pages drop the `how-to-` prefix (e.g. `single-one-off-event.md`) — fine
- Integration pages: see the `new-fluentbooking-integration` skill

## Step 3 — Frontmatter

Exactly two fields. No others.

```yaml
---
title: <Title-Cased Page Name>
description: <60–100 chars. One sentence. Used for meta tags and search.>
---
```

Examples from existing pages:

```yaml
title: Create New Events
description: Define event types (one-to-one or group), duration, and booking flow. Learn how to create new booking events in FluentBooking.
```

```yaml
title: Customizing the Coupon Field on Your Booking Form
description: Change the coupon field label, helper text, and visibility on the booking form. Match your brand and reduce booker confusion.
```

## Step 4 — Page skeletons (copy and fill)

### How-to / feature page

```md
---
title: <Feature Title>
description: <60–100 char one-liner about what the user achieves>
---

# <Feature Title>

<1–2 sentence opener: what this is + why it matters. Friendly but professional.>

In this guide, we'll walk you through <X>. Let's get started!

::: tip Important
Before <doing this>, make sure you've already <prerequisite> — see [<linked doc title>](/<section>/<linked-slug>).
:::

## <First Task Section>

<1–2 sentence intro to the step.>

To <action>, go to the **<UI Menu Path>** section and click the **<Button Label>** button.

![<Descriptive alt text>](/images/<section>/<page-slug>/<screenshot-name>.webp)

## <Next Task Section>

<Instruction paragraph. Use bold for UI labels:>
A pop-up will appear, giving you the choice between **<Option A>** and **<Option B>**. Select your preferred option.

![<Alt>](/images/<section>/<page-slug>/<screenshot>.webp)

### <Sub-step if needed (H3)>

<Sub-step instructions.>

Once you've configured <summary>, click the **Save Changes** button.
```

### Intro / overview page

```md
---
title: Introduction to <Feature/Product>
description: <60–100 chars>
---

# <Feature/Product Name>

<Tagline — 1 sentence on what this is.>

## Why <Feature>?

- <Benefit 1>
- <Benefit 2>
- <Benefit 3>

## <Benefit Group H2>

<Paragraph explaining the benefit.>
- <Detail bullet>
- <Detail bullet>

## Get Started in Minutes

New here? Follow this path:

1. **[<Step 1 Title>](/<section>/<slug>)** — short description.
2. **[<Step 2 Title>](/<section>/<slug>)** — short description.
3. **[<Step 3 Title>](/<section>/<slug>)** — short description.

Need help? Check **[<Troubleshooting Title>](/troubleshooting/<slug>)** or reach the team via **[<Support Title>](/troubleshooting/<slug>)**.

Welcome aboard — <enthusiastic 1-line closing>.
```

### Settings page

```md
---
title: <Settings Domain>
description: <60–100 chars>
---

# <Settings Domain>

<1-sentence description of what this settings page controls.>

## Enable the <Feature> Module

Before you can <use feature>, you must first <prerequisite>.

Start by going to the **<Menu Path>** section. Under **<Submenu>**, select **<Option>**, and you will see **<Setting Name>**. Now, switch on **<Toggle>**.

After that, configure the following:

- **<Setting Name>:** Description of what it does.
- **<Setting Name>:** Description.
- **<Setting Name>:** Description.

Once done, click the **Save Settings** button.

## <Next Settings Group>

<Repeat the pattern: intro sentence, instruction, optional bullet list of fields.>
```

### Troubleshooting / FAQ page

```md
---
title: <Troubleshooting Topic>
description: <60–100 chars>
---

# <Topic Title>

<1-sentence meta description of what this page solves.>

## Frequently Asked Questions

**Q: <User question phrased naturally>?**

**A:**
- **<Cause 1>:** <Solution or explanation>.
- **<Cause 2>:** <Solution>. See [<Related Doc>](/<section>/<slug>).
- **<Cause 3>:** <Solution>.

**Q: <Next question>?**

**A:** <Paragraph-form answer.> See [<Related Doc>](/<section>/<slug>).

## General Troubleshooting Tips

- **<Tip 1>:** <Explanation>.
- **<Tip 2>:** <Explanation>.
- **<Tip 3>:** <Explanation>.

For more help, see [<Get Help Title>](/troubleshooting/best-practices-and-get-help).
```

### Reference / list page

```md
---
title: <Reference Topic>
description: <60–100 chars>
---

# <Reference Topic>

<1-sentence purpose statement.>

## <Action Section>

To <use these items>:

Go to **<UI Location>** and <step>.

## Available <Items>

These are the available <items>:

- `<item_1>` — short description.
- `<item_2>` — short description.

Use the following exactly as shown:

\`\`\`
<example_code_1>
\`\`\`

### <Use-Case Subheading>

<Use-case description.>

\`\`\`
<example_code>
\`\`\`

**Parameters:**

- **<param_1>:** Description.
- **<param_2>:** Description.
```

## Step 5 — Tone rules (10 must-follow)

1. **2nd person.** "you", "your" — never "the user", "one".
2. **Imperative-first sentences.** "To create…, go to **X**…" (not "You can create…").
3. **Bold UI labels in exact Title Case.** `**New Event Type**`, `**Save Changes**`, `**Calendars**` — match the UI string letter-for-letter.
4. **No contractions inside step instructions.** "you have to" (not "you've to"). Contractions allowed in introductory and closing prose ("let's get started", "we'll walk you").
5. **Prerequisites in a `::: tip Important` block at the top**, with a link to the prior doc.
6. **Numbered lists for ordered steps; bullets for traits/options/fields.**
7. **One screenshot per task step**, embedded immediately after the instruction. Alt text = descriptive sentence, not just the filename.
8. **Section headings: Title Case, action-oriented.** "Choose Events Type", "Configure the Coupon Text" — not "Configuration" alone.
9. **Closing line:** either "Once you've configured X, click the **Save Settings** button." OR "See [<Doc Title>](/<path>)."
10. **Cross-link phrasing:** "See [Title](/path)" or inline "Click the **<Button>** button" with a link if the button takes you to another doc page.

## Step 6 — Screenshots

Create the folder up front (even if empty initially — user will drop files):

```
docs/public/images/<section>/<page-slug>/
```

Where `<page-slug>` = filename without `.md`. Embed with absolute path:

```md
![<descriptive alt>](/images/<section>/<page-slug>/<screenshot>.webp)
```

Rules:
- **WebP preferred** — match the 80% norm
- Alt text mirrors the surrounding instruction (e.g. `Create a New Event` for the button-click screenshot)
- Many existing filenames end `-scaled.webp` (WordPress remnant) — fine to keep

If the user hasn't provided screenshots, leave placeholder image links and tell them which files to drop in which folder.

## Step 7 — Add the sidebar entry

Open `docs/.vitepress/config.js`. The `sidebar` array has 10 groups. Push your new entry into the right group's `items` array:

```js
{ text: '<Short Sidebar Label>', link: '/<section>/<filename-without-md>' }
```

Sidebar group ≠ folder name in 4 cases — pick the right group:

| Sidebar group | Folder(s) it pulls from |
| ------------- | ----------------------- |
| Getting Started | `getting-started/` |
| Hosts & Events | `host-events/` |
| **Availability** | `availability/` + 1 from `host-events/` |
| Bookings | `bookings/` |
| Payments & Coupons | `payments/` |
| Integrations | `integrations/` |
| **Settings** | `global-settings/` |
| **Shortcodes & Embedding** | subset of `miscellaneous/` |
| **Advanced** | another subset of `miscellaneous/` |
| Troubleshooting & Support | `troubleshooting/` |

Sidebar text style: ≤24 chars, Title Case, action-oriented or noun phrase. Don't repeat the section name.

## Step 8 — Verify locally

```bash
npm run docs:dev
```

Open `http://localhost:5173`, navigate to the new page from the sidebar, check:
- Sidebar entry shows up under the right group
- H1 renders, frontmatter title shows in browser tab
- All `![alt](/images/...)` paths resolve (no broken-image icons)
- Internal links work (note: every in-content link opens in a new tab — that's intentional, not a bug)
- `:::` callout blocks render as colored boxes

`ignoreDeadLinks: true` means the build won't fail on a broken internal link — you have to click through.

## Anti-patterns (do NOT do these)

- ❌ Code blocks for prose — this is a user manual, not API reference
- ❌ Raw HTML (`<div>`, `<br>`) except the existing `<div class="video-container">` pattern in integration pages
- ❌ Custom Vue components — none registered in the theme
- ❌ More than 3 heading levels
- ❌ Missing H1 in body (frontmatter title alone isn't enough — repeat it as `# Title`)
- ❌ Contractions inside numbered step text
- ❌ Generic alt text like "screenshot" or "image1"
- ❌ Adding the page file without a sidebar entry (it'll be orphaned)
- ❌ Adding a sidebar entry without the page file (404 from sidebar)
- ❌ Image path that doesn't mirror `<section>/<page-slug>/`

## Reference: existing pages to use as templates

- How-to: `docs/host-events/how-to-create-new-events.md`
- Intro: `docs/getting-started/introduction-to-fluentbooking.md`
- Settings: `docs/payments/how-to-take-payment-in-bookings.md`
- Troubleshooting: `docs/troubleshooting/common-issues-and-faqs.md`
- Reference: `docs/miscellaneous/fluentbooking-shortcodes.md`

When in doubt, read the closest existing page in the same section and mirror its structure.
