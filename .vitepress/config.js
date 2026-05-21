import { defineConfig } from 'vitepress'

const brand = '/FluentBooking-brand'

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
      { text: 'Google Calendar & Meet', link: '/google-calendar-meet-integration-with-fluent-booking' },
      { text: 'Outlook Calendar', link: '/outlook-calendar-integration-with-fluent-booking' },
      { text: 'Apple Calendar', link: '/apple-calendar-integration-with-fluent-booking' },
      { text: 'Nextcloud Calendar', link: '/nextcloud-calendar-integration-with-fluentbooking' },
      { text: 'Zoom', link: '/zoom-integration-with-fluentbooking' },
      { text: 'FluentCRM', link: '/fluentcrm-integration-with-fluentbooking' },
      { text: 'Fluent Forms', link: '/fluent-form-integration-with-fluentbooking' },
      { text: 'FluentBoards', link: '/fluentboards-integration-with-fluentbooking' },
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
  head: [
    ['link', { rel: 'icon', href: `${brand}/Icon/PNGs/fluentbooking_primary_icon.png`, type: 'image/png' }],
    ['link', { rel: 'apple-touch-icon', href: `${brand}/Icon/PNGs/fluentbooking_primary_icon.png` }],
  ],
  themeConfig: {
    logo: {
      src: `${brand}/Icon/PNGs/fluentbooking_primary_icon.png`,
      alt: '',
      dark: `${brand}/Icon/PNGs/fluentbooking_monotone_light_icon.png`,
    },
    siteTitle: 'FluentBooking',
    nav: [
      { text: 'User Docs', link: '/' },
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
