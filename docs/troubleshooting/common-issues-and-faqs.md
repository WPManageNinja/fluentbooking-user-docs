---
title: Common Issues & FAQs
description: Solutions to frequent FluentBooking issues—payments, booking form, calendar sync, availability, emails—and general troubleshooting tips. Check this guide before contacting support.
---

# Common Issues & FAQs

This section provides solutions to frequently encountered issues and answers to common questions about FluentBooking. If you're experiencing a problem, check this guide first before reaching out for direct support.

## Frequently Asked Questions

**Q: Why are my PayPal/Stripe payments not going through in Live mode?**

**A:**

- **Check API Credentials:** Ensure you have entered your Live credentials (API keys/secrets) correctly in FluentBooking. Go to **Payment Settings** for your event or the global payment module and verify **Stripe Settings** or **PayPal Settings**.
- **Enable Payment for the Event:** Make sure the event has **Payment** enabled and the correct payment method (Stripe, PayPal, or Offline) is configured. See [Take Payment in Bookings](/how-to-take-payment-in-bookings).
- **Configure Webhooks (for Stripe):** For Stripe, it's critical that you have correctly configured the Webhook URL in your Stripe Dashboard as instructed in the [Stripe Integration](/stripe-integration-with-fluent-booking) documentation.
- **Order / Test Mode:** If you use WooCommerce or another cart, ensure the store is set to Live mode so payments process correctly.

**Q: My booking form is not showing on my WordPress page.**

**A:**

- **Add Block or Shortcode:** Ensure the booking form block or shortcode is added to your page. Use the FluentBooking block (Gutenberg) or the correct [shortcode](/fluentbooking-shortcodes) for your calendar or event.
- **Check Event & Availability:** Confirm the event is published and has [availability configured](/configure-availability). If there are no available slots, the calendar may appear empty or not load.
- **Correct Calendar/Event:** Verify you are embedding the right calendar or event ID. See [Add Booking Form to Your Site](/add-booking-form-to-site).

**Q: Calendar or meetings are not syncing with Google Calendar, Outlook, or Zoom.**

**A:**

- **Reconnect Integration:** In FluentBooking, go to the relevant integration (e.g. [Google Calendar & Meet](/google-calendar-meet-integration-with-fluent-booking), [Outlook](/outlook-calendar-integration-with-fluent-booking), [Zoom](/zoom-integration-with-fluentbooking)) and ensure the calendar or app is connected and authorized.
- **Check Permissions:** For Google/Outlook, re-authorize if you see permission errors. For Zoom, verify your Zoom app credentials and that the correct calendar is selected for the host.
- **Webhook or Sync Status:** Some integrations rely on webhooks or periodic sync. Check the integration docs for any required webhook URL or sync settings.

**Q: No time slots are showing, or availability seems wrong.**

**A:**

- **Set Availability:** Each host must have [availability configured](/configure-availability). Go to **Availability** for the host and ensure weekly schedule and dates are set.
- **Time Zone:** Confirm the host and event time zones match your expectations. Incorrect time zones can make slots appear in the wrong hours or disappear.
- **Booking Limits & Cut-off:** Check [Booking Limits](/how-to-set-booking-limits) and minimum notice/cut-off settings. They can hide slots that are too close or past the allowed window.
- **Event Settings:** Ensure the event is assigned to the correct host and that the event’s own availability or date range isn’t restricting slots.

**Q: Confirmation or reminder emails are not being sent.**

**A:**

- **Global Email Settings:** Ensure [Global Email Settings](/global-email-settings) are configured and that the “From” address and mail method (e.g. WordPress default or SMTP) are correct.
- **Event-Level Notifications:** For booking confirmations and reminders, check [Email Notifications](/email-notifications-for-events) and [Booking Summary Email](/how-to-set-booking-summary-email) for the event.
- **Spam / Deliverability:** Ask customers to check spam folders. If using SMTP, verify credentials and that your server allows outbound mail.

**Q: I can’t find my FluentBooking menu or dashboard.**

**A:**

- **User Role:** Confirm your WordPress user has a role that can access FluentBooking (typically Administrator, or a custom role with the right capabilities).
- **Plugin Active:** Ensure FluentBooking is installed and activated. See [Install, Activate & Update](/install-activate-and-update-fluentbooking).
- **Host Access:** If you use [Host & User Access](/host-user-access-management), ensure your user is assigned to the correct calendars/hosts if access is restricted.

## General Troubleshooting Tips

- **Check System Status:** Use WordPress **Tools** or any “Site Health” / diagnostic tool to ensure PHP, memory, and required extensions are in good shape.
- **Deactivate Conflicts:** Temporarily deactivate other plugins one by one (especially other booking or calendar plugins) to check for conflicts that might cause unexpected behavior.
- **Clear Caches:** If you use a caching or performance plugin, clear cache after changing FluentBooking settings or embedding the booking form.
- **Review Logs:** If FluentBooking or your host provides logs, check for “Warning” or “Failed” entries related to payments, webhooks, or email.

For more help, see [How to Get Support](/best-practices-and-get-help).
