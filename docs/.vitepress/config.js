import { defineConfig } from 'vitepress'

const brand = '/FluentBooking-brand'

const sidebar = [
  {
    text: 'Getting Started',
    collapsible: true,
    collapsed: false,
    items: [
      { text: 'What is FluentBooking', link: '/getting-started/introduction-to-fluentbooking' },
      { text: 'Install & Activate', link: '/getting-started/install-activate-and-update-fluentbooking' },
      { text: 'Install FluentBooking Pro', link: '/getting-started/how-to-install-activate-fluent-booking' },
      { text: 'Dashboard Overview', link: '/getting-started/dashboard-overview' },
      { text: 'Add Booking Form to Your Site', link: '/getting-started/add-booking-form-to-site' },
      { text: 'Create a Team Booking Page', link: '/getting-started/create-team-booking-page' },
    ],
  },
  {
    text: 'Hosts & Team',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Create a Host', link: '/host-events/how-to-create-a-new-host' },
      { text: 'Team Permissions & Access', link: '/host-events/host-user-access-management' },
      { text: 'Host Profile Settings', link: '/global-settings/host-settings' },
      { text: 'Host Landing Page', link: '/host-events/how-to-enable-landing-page-for-your-host' },
    ],
  },
  {
    text: 'Event Types',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Create a Booking Event', link: '/host-events/how-to-create-new-events' },
      { text: 'Recurring Events', link: '/host-events/set-recurring-events' },
      { text: 'Round Robin Events', link: '/host-events/how-to-set-round-robin-bookings' },
      { text: 'Single One-off Event', link: '/host-events/single-one-off-event' },
      { text: 'Group One-off Event', link: '/host-events/group-one-off-event' },
      { text: 'Collective Booking Event', link: '/host-events/collective-booking-event' },
    ],
  },
  {
    text: 'Event Settings',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Edit Event Details', link: '/host-events/how-to-modify-event-details' },
      { text: 'Advanced Event Settings', link: '/host-events/how-to-set-booking-advanced-settings' },
      { text: 'Booking Form Questions', link: '/host-events/how-to-set-booking-questions' },
      { text: 'Booking Limits & Rules', link: '/host-events/how-to-set-booking-limits' },
      { text: 'Email Notifications', link: '/host-events/email-notifications-for-events' },
    ],
  },
  {
    text: 'Availability',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'How Availability Works', link: '/availability/availability-management' },
      { text: 'Create Availability Schedules', link: '/availability/configure-availability' },
      { text: 'Assign a Booking Schedule', link: '/host-events/how-to-create-a-booking-schedule' },
    ],
  },
  {
    text: 'Manage Bookings',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'View All Bookings', link: '/bookings/booking-details' },
      { text: 'Create Booking Manually', link: '/bookings/create-booking-manually' },
      { text: 'Cancel a Booking', link: '/bookings/how-to-cancel-a-booking' },
    ],
  },
  {
    text: 'Payments & Coupons',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Set Up Payments', link: '/payments/how-to-take-payment-in-bookings' },
      { text: 'Multiple Pricing Options', link: '/payments/take-multi-payments' },
      { text: 'Offline Payments', link: '/payments/offline-payment-for-booking' },
      { text: 'Stripe', link: '/payments/stripe-integration-with-fluent-booking' },
      { text: 'PayPal', link: '/payments/paypal-integration-with-fluentbooking' },
      { text: 'Create & Manage Coupons', link: '/payments/how-to-create-and-manage-payment-coupons' },
      { text: 'Customize the Coupon Field', link: '/payments/customize-the-coupon-field-on-your-booking-form' },
      { text: 'Share a Coupon Link', link: '/payments/how-to-generate-a-coupon-link' },
    ],
  },
  {
    text: 'Integrations',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Google Calendar & Meet', link: '/integrations/google-calendar-meet-integration-with-fluent-booking' },
      { text: 'Outlook Calendar', link: '/integrations/outlook-calendar-integration-with-fluent-booking' },
      { text: 'Apple Calendar', link: '/integrations/apple-calendar-integration-with-fluent-booking' },
      { text: 'Nextcloud Calendar', link: '/integrations/nextcloud-calendar-integration-with-fluentbooking' },
      { text: 'Zoom', link: '/integrations/zoom-integration-with-fluentbooking' },
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
    text: 'Add to Your Site',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Shortcodes', link: '/miscellaneous/fluentbooking-shortcodes' },
      { text: 'Gutenberg Blocks', link: '/miscellaneous/gutenberg-blocks' },
      { text: 'Embed with HTML', link: '/miscellaneous/how-to-embed-booking-calendar-using-html' },
      { text: 'Clean Up Booking URLs', link: '/miscellaneous/how-to-prettify-landing-page-url' },
    ],
  },
  {
    text: 'Site Settings',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Email & Notifications', link: '/global-settings/global-email-settings' },
      { text: 'Booking Summary Report', link: '/host-events/how-to-set-booking-summary-email' },
      { text: 'Frontend Booking Panel', link: '/global-settings/fluentbooking-frontend-panel' },
    ],
  },
  {
    text: 'Advanced Features',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'Import, Export & Clone Events', link: '/miscellaneous/import-export-and-clone-events' },
      { text: 'Pre-Fill Booking Forms via URL', link: '/miscellaneous/pre-fill-booking-form-url' },
      { text: 'UTM Tracking for Bookings', link: '/miscellaneous/utm-tracking-for-bookings' },
    ],
  },
  {
    text: 'Help & Support',
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
