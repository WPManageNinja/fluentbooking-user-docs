import { defineConfig } from 'vitepress'
import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { zoomablePlugin } from './theme/markdown-plugin-zoomable'

const brand = '/FluentBooking-brand'

// Production origin. Must match where the site is actually served — a canonical or a
// social-card URL on any other host points at a 404, which is enough for a scraper to
// drop the preview entirely.
const SITE_ORIGIN = 'https://docs.fluentbooking.com'

/**
 * Per-page link-preview cards.
 *
 * `scripts/generate-featured-images.mjs` renders a branded 1200x630 PNG carrying each
 * page's own title into `docs/public/images/featured/<slug>.png`, which the publicDir
 * serves at `/images/featured/<slug>.png`.
 *
 * NAMING RULE — kept in sync with that script: the `rewrites` below strip the section
 * folder from every URL, so `pageData.relativePath` arrives here already flattened to
 * `<slug>.md` and the card is named after that same slug.
 *
 * Anything without a generated card falls back to `default.png`, which the generator
 * also emits — so a shared link is never left with no preview at all.
 */
const FEATURED_DIR = join(
  dirname(fileURLToPath(import.meta.url)),
  '..',
  'docs',
  'public',
  'images',
  'featured'
)

function featuredImageFor(relativePath) {
  const name = `${relativePath.replace(/\.md$/, '')}.png`
  const file = existsSync(join(FEATURED_DIR, name)) ? name : 'default.png'
  return `${SITE_ORIGIN}/images/featured/${file}`
}

const sidebar = [
  {
    text: 'Getting Started',
    collapsible: true,
    collapsed: false,
    items: [
      { text: 'What is FluentBooking', link: '/introduction-to-fluentbooking' },
      { text: 'Install & Activate', link: '/install-activate-and-update-fluentbooking' },
      { text: 'Install FluentBooking Pro', link: '/how-to-install-activate-fluent-booking' },
      { text: 'Dashboard Overview', link: '/dashboard-overview' },
      { text: 'Add Booking Form to Your Site', link: '/add-booking-form-to-site' },
      { text: 'Create a Team Booking Page', link: '/create-team-booking-page' },
      { text: 'Glossary', link: '/fluentbooking-glossary' },
    ],
  },
  {
    text: 'Hosts & Team',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Create a Host', link: '/how-to-create-a-new-host' },
      { text: 'Team Permissions & Access', link: '/host-user-access-management' },
      { text: 'Host Profile Settings', link: '/host-settings' },
      { text: 'Host Landing Page', link: '/how-to-enable-landing-page-for-your-host' },
    ],
  },
  {
    text: 'Event Types',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Create a Booking Event', link: '/how-to-create-new-events' },
      { text: 'Recurring Events', link: '/set-recurring-events' },
      { text: 'Round Robin Events', link: '/how-to-set-round-robin-bookings' },
      { text: 'Single One-off Event', link: '/single-one-off-event' },
      { text: 'Group One-off Event', link: '/group-one-off-event' },
      { text: 'Collective Booking Event', link: '/collective-booking-event' },
    ],
  },
  {
    text: 'Event Settings',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Edit Event Details', link: '/how-to-modify-event-details' },
      { text: 'Advanced Event Settings', link: '/how-to-set-booking-advanced-settings' },
      { text: 'Booking Form Questions', link: '/how-to-set-booking-questions' },
      { text: 'Booking Limits & Rules', link: '/how-to-set-booking-limits' },
      { text: 'Email Notifications', link: '/email-notifications-for-events' },
    ],
  },
  {
    text: 'Availability',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'How Availability Works', link: '/availability-management' },
      { text: 'Create Availability Schedules', link: '/configure-availability' },
      { text: 'Assign a Booking Schedule', link: '/how-to-create-a-booking-schedule' },
    ],
  },
  {
    text: 'Manage Bookings',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'View All Bookings', link: '/booking-details' },
      { text: 'Create Booking Manually', link: '/create-booking-manually' },
      { text: 'Cancel a Booking', link: '/how-to-cancel-a-booking' },
    ],
  },
  {
    text: 'Payments & Coupons',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Set Up Payments', link: '/how-to-take-payment-in-bookings' },
      { text: 'Multiple Pricing Options', link: '/take-multi-payments' },
      { text: 'Offline Payments', link: '/offline-payment-for-booking' },
      { text: 'Stripe', link: '/stripe-integration-with-fluent-booking' },
      { text: 'PayPal', link: '/paypal-integration-with-fluentbooking' },
      { text: 'Create & Manage Coupons', link: '/how-to-create-and-manage-payment-coupons' },
      { text: 'Customize the Coupon Field', link: '/customize-the-coupon-field-on-your-booking-form' },
      { text: 'Share a Coupon Link', link: '/how-to-generate-a-coupon-link' },
    ],
  },
  {
    text: 'Integrations',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Integrations Overview', link: '/integrations-overview' },
      { text: 'Google Calendar & Meet', link: '/google-calendar-meet-integration-with-fluent-booking' },
      { text: 'Outlook Calendar', link: '/outlook-calendar-integration-with-fluent-booking' },
      { text: 'Apple Calendar', link: '/apple-calendar-integration-with-fluent-booking' },
      { text: 'Nextcloud Calendar', link: '/nextcloud-calendar-integration-with-fluentbooking' },
      { text: 'Zoom', link: '/zoom-integration-with-fluentbooking' },
      { text: 'FluentCRM', link: '/fluentcrm-integration-with-fluentbooking' },
      { text: 'Fluent Forms', link: '/fluent-form-integration-with-fluentbooking' },
      { text: 'FluentBoards', link: '/fluentboards-integration-with-fluentbooking' },
      { text: 'Elementor', link: '/elementor-integration-with-fluentbooking' },
      { text: 'WooCommerce', link: '/woocommerce-integration-with-fluentbooking' },
      { text: 'FluentCart', link: '/fluentcart-integration-with-fluentbooking' },
      { text: 'Twilio SMS & WhatsApp', link: '/twilio-integration-with-fluentbooking' },
      { text: 'Webhooks', link: '/webhook-integration-with-fluentbooking' },
    ],
  },
  {
    text: 'Add to Your Site',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Shortcodes', link: '/fluentbooking-shortcodes' },
      { text: 'Gutenberg Blocks', link: '/gutenberg-blocks' },
      { text: 'Embed with HTML', link: '/how-to-embed-booking-calendar-using-html' },
      { text: 'Clean Up Booking URLs', link: '/how-to-prettify-landing-page-url' },
    ],
  },
  {
    text: 'Site Settings',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Email & Notifications', link: '/global-email-settings' },
      { text: 'Booking Summary Report', link: '/how-to-set-booking-summary-email' },
      { text: 'Frontend Booking Panel', link: '/fluentbooking-frontend-panel' },
      { text: 'MCP for AI Agents', link: '/mcp-for-ai-agents' },
    ],
  },
  {
    text: 'Advanced Features',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Import, Export & Clone Events', link: '/import-export-and-clone-events' },
      { text: 'Pre-Fill Booking Forms via URL', link: '/pre-fill-booking-form-url' },
      { text: 'UTM Tracking for Bookings', link: '/utm-tracking-for-bookings' },
    ],
  },
  {
    text: 'Help & Support',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Common Issues & FAQs', link: '/common-issues-and-faqs' },
      { text: 'How to Get Support', link: '/best-practices-and-get-help' },
      { text: 'Changelog', link: '/changelog' },
    ],
  },
]

export default defineConfig({
  srcDir: 'docs',
  base: '/',
  cleanUrls: true,
  rewrites: {
    'getting-started/:page': ':page',
    'host-events/:page': ':page',
    'availability/:page': ':page',
    'bookings/:page': ':page',
    'payments/:page': ':page',
    'integrations/:page': ':page',
    'global-settings/:page': ':page',
    'miscellaneous/:page': ':page',
    'troubleshooting/:page': ':page',
  },
  title: 'FluentBooking',
  description: 'The Ultimate WordPress Solution for Appointment Booking',
  ignoreDeadLinks: true,
  markdown: {
    config: (md) => {
      md.use(zoomablePlugin)
    },
  },
  head: [
    ['link', { rel: 'icon', href: `${brand}/Icon/PNGs/fluentbooking_primary_icon.png`, type: 'image/png' }],
    ['link', { rel: 'apple-touch-icon', href: `${brand}/Icon/PNGs/fluentbooking_primary_icon.png` }],

    // Open Graph / Twitter values that never vary per page. The per-page ones —
    // og:title, og:description, og:url, og:image and the canonical — are built in
    // `transformHead` below. Do NOT add og:image or a canonical back here: scrapers
    // take the first tag they find, so a static og:image would shadow every per-page
    // card, and a static canonical would point every page at one URL.
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'FluentBooking Documentation' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],

  /**
   * VitePress emits none of these on its own: a canonical URL, or the Open Graph /
   * Twitter tags a link preview is built from. Without them a shared doc link renders
   * as a bare URL, and nothing tells search engines which URL is authoritative.
   */
  transformHead({ pageData, siteData }) {
    // The 404 page is reachable at every bad URL, so it must not claim a canonical of
    // its own or be shared as a card.
    if (pageData.relativePath === '404.md') return []

    // `relativePath` is already the REWRITTEN (flattened) path, so it matches the
    // public URL — see the `rewrites` option above.
    const slug = pageData.relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
    const url = `${SITE_ORIGIN}/${slug}`

    const title = pageData.frontmatter.title || pageData.title || siteData.title
    const description =
      pageData.frontmatter.description || pageData.description || siteData.description
    const image = featuredImageFor(pageData.relativePath)

    return [
      ['link', { rel: 'canonical', href: url }],

      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:image', content: image }],
      ['meta', { property: 'og:image:alt', content: title }],

      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ['meta', { name: 'twitter:image', content: image }],
    ]
  },
  themeConfig: {
    logo: {
      src: `${brand}/Icon/PNGs/fluentbooking_primary_icon.png`,
      alt: '',
      dark: `${brand}/Icon/PNGs/fluentbooking_monotone_light_icon.png`,
    },
    siteTitle: 'FluentBooking',
    nav: [
      { text: 'User Docs', link: '/' },
      { text: 'Try It Free', link: 'https://try.wpmanageninja.com/?products=fluent-booking', target: '_blank' },
      { text: 'Dev Docs', link: 'https://developers.fluentbooking.com/', target: '_blank' },
      { text: 'Changelog', link: '/changelog' },
      { text: 'Website', link: 'https://fluentbooking.com', target: '_blank' },
    ],
    sidebar,
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
    footer: {
      copyright: 'Copyright © 2026 FluentBooking',
    },
  },
})
