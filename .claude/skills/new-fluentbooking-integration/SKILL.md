---
name: new-fluentbooking-integration
description: Use this skill when the user asks to document a new third-party integration for FluentBooking — phrases like "document the X integration", "add a doc for the X integration", "write integration docs for X", "create an integration page for X". Integration pages follow a strict, recurring template across 12 existing pages; this skill enforces that template.
---

# New FluentBooking integration page

12 integration pages already exist in `docs/integrations/` (Google Calendar, Zoom, Outlook, Apple, Nextcloud, FluentCRM, Fluent Forms, FluentBoards, WooCommerce, FluentCart, Twilio, Webhooks). They share an almost identical structure. A new integration page must match.

This skill is more prescriptive than `writing-new-fluentbooking-doc` because the template is tighter.

## Step 1 — Filename

Pattern (strict):

```
<service>-integration-with-fluentbooking.md
```

Rules:
- Lowercase, kebab-case
- `<service>` is the brand name lowercased (e.g. `zoom`, `fluentcrm`, `woocommerce`, `apple-calendar`, `outlook-calendar`)
- Suffix is **always** `-integration-with-fluentbooking.md` — **no extra hyphen in "fluentbooking"**

⚠️ **Do NOT use the form `<service>-integration-with-fluent-booking.md`** (hyphenated "fluent-booking"). An orphan file `next-cloud-calendar-integration-with-fluent-booking.md` already exists in the repo from this mistake and is not in the sidebar. Don't repeat it.

Place at: `docs/integrations/<service>-integration-with-fluentbooking.md`

## Step 2 — Frontmatter

```yaml
---
title: <Service> Integration with FluentBooking
description: <60–100 chars. One sentence on what the integration enables and the user benefit.>
---
```

Example:

```yaml
title: Zoom Integration with FluentBooking
description: Auto-generate Zoom meeting links for every booking. Connect FluentBooking to Zoom in a few clicks and let bookers join instantly.
```

## Step 3 — Page skeleton (copy and fill)

```md
---
title: <Service> Integration with FluentBooking
description: <60–100 chars>
---

# <Service> Integration with FluentBooking

<1-sentence intro: what the integration does>. <Why integrate — 1–2 sentences on user benefit>.

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/<VIDEO_ID>" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Setting Up <Service> Integration

To connect your FluentBooking with <Service>, you need <credentials/account>. First, go to **<Service Dashboard URL>** and <prepare credentials>.

![<descriptive alt>](/images/integrations/<service>-integration-with-fluentbooking/<screenshot>.webp)

## Create <Service> App

You have to create a <Service> App in order to get the credentials. On the **<Service Developer Portal>**, you will find the **<Button/Menu Label>** option to create a new app.

![<alt>](/images/integrations/<service>-integration-with-fluentbooking/<screenshot>.webp)

### Information

On the Information page, there are some mandatory fields — **<Field Group>**. You have to give this information and then click the **Continue** button.

- **<Field>:** <what to enter>
- **<Field>:** <what to enter>
- **<Field>:** <what to enter>

![<alt>](/images/integrations/<service>-integration-with-fluentbooking/<screenshot>.webp)

### Scopes

Set the following scopes / permissions:

- `<scope_1>`
- `<scope_2>`
- `<scope_3>`

![<alt>](/images/integrations/<service>-integration-with-fluentbooking/<screenshot>.webp)

### Redirect URL

Add the following redirect URL in the <Service> app settings:

```
https://<your-site>.com/wp-admin/admin.php?page=fluent-booking#/settings/integrations
```

(Replace `<your-site>` with your actual domain.)

## Configuring <Service> With FluentBooking

Now that the <Service> app is ready, connect it to FluentBooking.

Go to **Settings → Integrations** in your FluentBooking dashboard. Find the **<Service>** card and click **Configure**.

![<alt>](/images/integrations/<service>-integration-with-fluentbooking/<screenshot>.webp)

Paste the **<Credential 1>** and **<Credential 2>** you copied from the <Service> app, then click the **Save Changes** button.

![<alt>](/images/integrations/<service>-integration-with-fluentbooking/<screenshot>.webp)

## Using <Service> in Your Bookings

Once connected, <Service> becomes available as a <meeting location / CRM destination / payment method / etc.> when you create or edit an event.

<1–2 sentences on where it shows up in the UI.>

![<alt>](/images/integrations/<service>-integration-with-fluentbooking/<screenshot>.webp)

For event-level configuration, see [Modify Event Details](/host-events/how-to-modify-event-details).
```

Notes on the skeleton:
- The `<div class="video-container">` block is **only** included if a YouTube tutorial exists. The custom CSS in `docs/.vitepress/theme/style.css` makes it responsive 16:9. If no video, omit the block entirely — don't leave an empty container.
- "Create <Service> App" + sub-H3s (Information / Scopes / Redirect URL) apply to OAuth integrations (Zoom, Google, Outlook, Apple). For non-OAuth integrations (FluentCRM, FluentBoards, Fluent Forms — same-company plugins), skip that whole section and go straight from "Setting Up" to "Configuring".
- "Using <Service> in Your Bookings" is the recommended closer. Some existing pages omit it — fine, but it helps the reader.

## Step 4 — Screenshots folder

Create up front:

```
docs/public/images/integrations/<service>-integration-with-fluentbooking/
```

Folder name must match the page slug exactly. WebP format. Descriptive kebab-case filenames.

Typical screenshots needed:
- The service's dashboard / "Create App" button
- The service's app credentials page (with sensitive data redacted)
- FluentBooking's Settings → Integrations page (showing the service card)
- The configure modal with the credentials pasted
- The success state

## Step 5 — Sidebar entry

Open `docs/.vitepress/config.js`. Find the **Integrations** group in the `sidebar` array and push:

```js
{ text: '<Service>', link: '/integrations/<service>-integration-with-fluentbooking' },
```

Sidebar text rules:
- Use the brand name as commonly known (e.g. `Zoom`, `Google Calendar & Meet`, `Twilio SMS & WhatsApp`)
- Title Case, ≤24 chars
- **Link omits `.md`** (`cleanUrls: true`)

Ordering inside the group: roughly by category (calendars first, then internal Fluent products, then commerce, then comms, then webhooks). Place new entries in the matching cluster.

## Step 6 — Tone rules (integration-specific)

Same 10 tone rules as `writing-new-fluentbooking-doc`, plus:

- **Opening:** state the value prop in the first 2 sentences. "Zoom Integration with FluentBooking lets you generate Zoom links automatically for every booking. Your customers join the call without manual scheduling, and you save the back-and-forth."
- **"Setting Up <Service> Integration" is always the first H2** — don't deviate.
- **OAuth detail in H3s under "Create <Service> App"** (Information / Scopes / Redirect URL). Each H3 has 1 short paragraph + a screenshot.
- **End with a forward link** to the event config doc: `See [Modify Event Details](/host-events/how-to-modify-event-details).` (or a more specific doc if the integration touches a specific area like payments).
- **Use the exact service brand name** as their marketing uses it (`Google Meet`, not `Google meet` or `GMeet`; `WhatsApp`, not `Whatsapp`).

## Step 7 — Verify

```bash
npm run docs:dev
```

Open `http://localhost:5173/integrations/<service>-integration-with-fluentbooking`. Check:
- Page appears in the sidebar under **Integrations**
- Video container (if present) renders 16:9 and embeds the iframe
- All screenshots load
- The closing cross-link works (note: opens in a new tab — expected)

Then visually compare to an existing integration page (e.g. `/integrations/zoom-integration-with-fluentbooking`) to confirm structure matches.

## Reference: best existing template

Use `docs/integrations/zoom-integration-with-fluentbooking.md` as the gold-standard template. When the user adds a new integration, read that file first and mirror its structure section-by-section.

For internal-Fluent integrations (FluentCRM, FluentBoards, Fluent Forms), use `docs/integrations/fluentcrm-integration-with-fluentbooking.md` as the simpler template (no Create-App / Scopes section).

## Anti-patterns (do NOT do these)

- ❌ Filename ending in `-with-fluent-booking.md` (hyphenated) — use `-with-fluentbooking.md`
- ❌ Title using `Integration` ahead of the service name (use `<Service> Integration with FluentBooking`, not `Integration with <Service>`)
- ❌ Skipping the `## Setting Up` and `## Configuring` H2s — those names are repeated across all 12 existing integrations and aid scanning
- ❌ Embedding the YouTube iframe without the `<div class="video-container">` wrapper (it won't be responsive)
- ❌ Adding the page without a sidebar entry — orphan files happen, and one already exists
- ❌ Inline `<img>` HTML for screenshots — use `![alt](/images/...)` markdown
- ❌ Using a different screenshots folder name than the page slug
