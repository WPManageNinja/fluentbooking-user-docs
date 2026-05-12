---
name: editing-fluentbooking-sidebar
description: Use this skill when the user asks to change the sidebar or top nav of the FluentBooking docs site — phrases like "add a sidebar entry for X", "reorder the sidebar", "rename the X sidebar group", "remove Y from the sidebar", "add to the nav bar", "change the search button text". All sidebar/nav config lives in docs/.vitepress/config.js — this skill respects the group ↔ folder quirks.
---

# Editing the FluentBooking sidebar / nav

Everything about the left sidebar, top nav, search, footer, and favicon lives in a single file:

**`docs/.vitepress/config.js`**

There is no separate sidebar file, no per-section index, no auto-generation. The `sidebar` array is hand-curated.

## The sidebar shape

```js
const sidebar = [
  {
    text: '<Group Label>',
    collapsible: true,
    collapsed: <true|false>,    // only "Getting Started" is collapsed: false
    items: [
      { text: '<Short Label>', link: '/<section>/<filename-without-md>' },
      ...
    ],
  },
  ...
]
```

10 groups exist today. The first ("Getting Started") starts expanded. All others start collapsed.

## Group ↔ folder mapping (the key quirk)

Sidebar group label is NOT always the same as the folder name. When you add or move an entry, pick the right group:

| # | Sidebar group | Folder(s) it pulls from | Item count today |
| - | ------------- | ----------------------- | ---------------- |
| 1 | Getting Started | `getting-started/` | 6 |
| 2 | Hosts & Events | `host-events/` | 15 |
| 3 | **Availability** | `availability/` (2) + `host-events/how-to-create-a-booking-schedule` (1) | 3 |
| 4 | Bookings | `bookings/` | 3 |
| 5 | Payments & Coupons | `payments/` | 8 |
| 6 | Integrations | `integrations/` | 12 |
| 7 | **Settings** | `global-settings/` | 3 |
| 8 | **Shortcodes & Embedding** | subset of `miscellaneous/` | 4 |
| 9 | **Advanced** | another subset of `miscellaneous/` | 3 |
| 10 | Troubleshooting & Support | `troubleshooting/` | 2 |

The 4 quirky cases (bolded above):
- **Availability** sidebar group includes one page from `host-events/`
- **Settings** sidebar group maps to folder `global-settings/`
- **Shortcodes & Embedding** + **Advanced** both pull from `miscellaneous/` (split by topic, not folder)

## Recipe: add a sidebar item

1. Decide the right sidebar **group** (use the table above — based on topic, not folder)
2. Inside that group's `items` array, add at the right position:

```js
{ text: '<Short Label>', link: '/<section>/<filename-without-md>' },
```

Rules:
- `link` is the URL path. `<section>` is the **folder name**, not the sidebar group name. No `.md` extension (`cleanUrls: true`).
- `text` is the sidebar label: short (≤24 chars), Title Case, action-oriented or a noun phrase. Don't repeat the section name. Examples: `Create New Events`, `Stripe Integration`, `Booking Limits`.
- Position: order inside a group follows user journey / logical grouping. Place a new item near similar items.

Example — adding a doc page `docs/payments/how-to-issue-refunds.md` to the **Payments & Coupons** group:

```js
{
  text: 'Payments & Coupons',
  collapsible: true,
  collapsed: true,
  items: [
    { text: 'Take Payment in Bookings', link: '/payments/how-to-take-payment-in-bookings' },
    { text: 'Multi-Payments', link: '/payments/take-multi-payments' },
    { text: 'Offline Payment', link: '/payments/offline-payment-for-booking' },
    { text: 'Stripe Integration', link: '/payments/stripe-integration-with-fluent-booking' },
    { text: 'PayPal Integration', link: '/payments/paypal-integration-with-fluentbooking' },
    { text: 'Issue Refunds', link: '/payments/how-to-issue-refunds' },   // new entry
    { text: 'Create & Manage Coupons', link: '/payments/how-to-create-and-manage-payment-coupons' },
    ...
  ],
},
```

## Recipe: remove a sidebar item

Delete the matching `{ text, link }` object from the items array. The `.md` file itself stays on disk unless the user also asks to delete the page — removing only from sidebar leaves the page reachable by URL but hidden from navigation.

## Recipe: rename a group

Edit only the `text:` field of the group object. No other file references the group label, so this is a 1-line change.

```js
// before
{ text: 'Settings', ... }
// after
{ text: 'Site Settings', ... }
```

## Recipe: reorder

- **Within a group:** move the `{ text, link }` objects up/down inside `items`.
- **Reorder groups:** move the group object up/down in the top-level `sidebar` array. Current order = user journey (intro → setup → daily use → settings → advanced → troubleshooting). Preserve this when reordering unless the user explicitly wants a different flow.

## Recipe: change `collapsed:` default

Only "Getting Started" has `collapsed: false`. To expand a different group by default, change its `collapsed: true` → `collapsed: false`. Don't set multiple groups to `false` simultaneously without asking — sidebar would be visually heavy.

## Top nav bar

4 items, defined in `themeConfig.nav`:

```js
nav: [
  { text: 'User Docs', link: '/' },
  { text: 'Dev Docs', link: 'https://fluentbooking.com', target: '_blank' },
  { text: 'Changelog', link: '/changelog' },
  { text: 'Website', link: 'https://fluentbooking.com', target: '_blank' },
],
```

Rules:
- External links use `target: '_blank'`. Internal links omit it (internal nav stays in the same tab — note: this is different from in-content links inside `.vp-doc`, which the theme forces to `_blank`).
- `Changelog` points at `docs/changelog.md` via `/changelog` (clean URL).
- Keep the list short — 4 items today, don't bloat.

## Search

Local provider (no Algolia). Custom button text "Search Documentation":

```js
search: {
  provider: 'local',
  options: {
    locales: {
      root: {
        translations: {
          button: {
            buttonText: 'Search Documentation',
            buttonAriaLabel: 'Search Documentation',
          },
        },
      },
    },
  },
},
```

To switch to Algolia, change `provider: 'algolia'` and add `appId` / `apiKey` / `indexName`. Not currently needed — local provider indexes all 60 pages fine.

## Footer / favicon / logo

In the same `themeConfig`:

```js
logo: {
  src: `${brand}/Icon/PNGs/fluentbooking_primary_icon.png`,
  alt: '',
  dark: `${brand}/Icon/PNGs/fluentbooking_monotone_light_icon.png`,
},
siteTitle: 'FluentBooking',
footer: {
  copyright: 'Copyright © 2026 FluentBooking',
},
```

`const brand = '/FluentBooking-brand'` at the top of the file. The favicon (in `head` tags) uses the same path. Swapping branding = replace files under `docs/public/FluentBooking-brand/Icon/PNGs/` with the same filenames, OR change the `brand` const and update all 4 references.

## Verify

```bash
npm run docs:dev
```

Open `http://localhost:5173`:
- Left sidebar shows the change (new entry / renamed group / new order)
- Click the new entry — it should resolve (no 404)
- All other entries still work
- Top nav still shows 4 items
- Search button shows custom text

`ignoreDeadLinks: true` won't catch a typo in a sidebar `link`. Click-test.

## Anti-patterns (do NOT do these)

- ❌ Putting `.md` in a sidebar `link` field — `cleanUrls: true` means URLs omit `.md`
- ❌ Using the folder name as the sidebar group label without checking — Settings ≠ global-settings, Shortcodes & Embedding ≠ miscellaneous
- ❌ Splitting one folder across two sidebar groups arbitrarily — only `miscellaneous/` does this today (split into Shortcodes & Embedding + Advanced) and it's deliberate
- ❌ Adding the same page to two sidebar groups (will confuse navigation)
- ❌ Setting `collapsed: false` on multiple groups (visual clutter)
- ❌ Renaming a sidebar group + leaving the `link` paths stale — folder paths don't change when the group label changes (they're independent)
- ❌ Adding to the top nav for a page that already has a sidebar entry (nav is for cross-section landing pages, not individual docs)
