import { defineConfig } from 'vitepress'

const brand = '/FluentBooking-brand'

// Sidebar: collapsible categories (expand/collapse like FluentCart). Order = user journey.
const sidebar = [
  {
    text: 'Getting Started',
    collapsible: true,
    collapsed: false,
    items: [
      { text: 'Introduction to FluentBooking', link: '/getting-started/introduction-to-fluentbooking' },
      { text: 'Install, Activate & Update', link: '/getting-started/install-activate-and-update-fluentbooking' },
      { text: 'Install FluentBooking Pro', link: '/getting-started/how-to-install-activate-fluent-booking' },
      { text: 'Dashboard Overview', link: '/getting-started/dashboard-overview' },
      { text: 'Add Booking Form to Site', link: '/getting-started/add-your-booking-form-to-the-wordpress-sites-front-end' },
      { text: 'Enable Team Page', link: '/getting-started/enabling-team-page-in-wordpress-front-end' },
    ],
  },
  {
    text: 'Hosts & Events',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Create a New Host', link: '/host-events/how-to-create-a-new-host' },
      { text: 'Host & User Access', link: '/host-events/host-user-access-management' },
      { text: 'Create New Events', link: '/host-events/how-to-create-new-events' },
      { text: 'Recurring Events', link: '/host-events/set-recurring-events' },
      { text: 'Round Robin Bookings', link: '/host-events/how-to-set-round-robin-bookings' },
      { text: 'Single One-off Event', link: '/host-events/single-one-off-event' },
      { text: 'Group One-off Event', link: '/host-events/group-one-off-event' },
      { text: 'Collective Booking Event', link: '/host-events/collective-booking-event' },
      { text: 'Modify Event Details', link: '/host-events/how-to-modify-event-details' },
      { text: 'Booking Advanced Settings', link: '/host-events/how-to-set-booking-advanced-settings' },
      { text: 'Booking Questions', link: '/host-events/how-to-set-booking-questions' },
      { text: 'Booking Limits', link: '/host-events/how-to-set-booking-limits' },
      { text: 'Booking Email Notifications', link: '/host-events/how-to-set-email-notifications-for-a-booking' },
      { text: 'Booking Summary Email', link: '/host-events/how-to-set-booking-summary-email' },
      { text: 'Enable Host Landing Page', link: '/host-events/how-to-enable-landing-page-for-your-host' },
    ],
  },
  {
    text: 'Availability',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Availability Management', link: '/availability/availability-management' },
      { text: 'Configure Availability', link: '/availability/configure-availability' },
      { text: 'Create Booking Schedule', link: '/host-events/how-to-create-a-booking-schedule' },
    ],
  },
  {
    text: 'Bookings',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Booking Details', link: '/bookings/booking-details' },
      { text: 'Create Booking Manually', link: '/bookings/create-booking-manually' },
      { text: 'Cancel a Booking', link: '/bookings/how-to-cancel-a-booking' },
    ],
  },
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
      { text: 'Create & Manage Coupons', link: '/payments/how-to-create-and-manage-payment-coupons' },
      { text: 'Customize Coupon Field', link: '/payments/customize-the-coupon-field-on-your-booking-form' },
      { text: 'Generate Coupon Link', link: '/payments/how-to-generate-a-coupon-link' },
    ],
  },
  {
    text: 'Integrations',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Google Calendar & Meet', link: '/integrations/google-calendar-meet-integration-with-fluent-booking' },
      { text: 'Zoom', link: '/integrations/zoom-integration-with-fluentbooking' },
      { text: 'Outlook Calendar', link: '/integrations/outlook-calendar-integration-with-fluent-booking' },
      { text: 'Apple Calendar', link: '/integrations/apple-calendar-integration-with-fluent-booking' },
      { text: 'Nextcloud Calendar', link: '/integrations/next-cloud-calendar-integration-with-fluent-booking' },
      { text: 'FluentCRM', link: '/integrations/fluentcrm-integration-with-fluentbooking' },
      { text: 'Fluent Forms', link: '/integrations/fluent-form-integration-with-fluentbooking' },
      { text: 'FluentBoards', link: '/integrations/fluentboards-integration-with-fluentbooking' },
      { text: 'WooCommerce', link: '/integrations/woocommerce-integration-with-fluentbooking' },
      { text: 'FluentCart', link: '/integrations/fluentcart-integration-with-fluentbooking' },
      { text: 'Twilio SMS & WhatsApp', link: '/integrations/twilio-integration-with-fluentbooking' },
      { text: 'Webhooks', link: '/integrations/webhook-integration-with-fluentbooking' },
    ],
  },
  {
    text: 'Settings',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Email & Notifications', link: '/global-settings/global-email-settings' },
      { text: 'Host Settings', link: '/global-settings/host-settings' },
      { text: 'Frontend Panel', link: '/global-settings/fluentbooking-frontend-panel' },
    ],
  },
  {
    text: 'Shortcodes & Embedding',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Shortcodes', link: '/miscellaneous/fluentbooking-shortcodes' },
      { text: 'Gutenberg Blocks', link: '/miscellaneous/gutenberg-blocks' },
      { text: 'Embed Calendar (HTML)', link: '/miscellaneous/how-to-embed-booking-calendar-using-html' },
      { text: 'Prettify Landing Page URLs', link: '/miscellaneous/how-to-prettify-landing-page-url' },
    ],
  },
  {
    text: 'Advanced',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Import, Export & Clone Events', link: '/miscellaneous/import-export-and-clone-events' },
      { text: 'Default Booking Info in URL', link: '/miscellaneous/pass-default-booking-information-to-the-url' },
      { text: 'UTM Tracking', link: '/miscellaneous/utm-tracking-for-bookings' },
    ],
  },
  {
    text: 'Troubleshooting & Support',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Common Issues & FAQs', link: '/troubleshooting/common-issues-and-faqs' },
      { text: 'Best Practices & Get Help', link: '/troubleshooting/best-practices-and-get-help' },
    ],
  },
]

export default defineConfig({
  base: '/',
  cleanUrls: true,
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
      { text: 'Dev Docs', link: 'https://fluentbooking.com', target: '_blank' },
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
