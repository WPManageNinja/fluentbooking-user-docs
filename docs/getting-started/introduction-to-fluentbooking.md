---
title: What is FluentBooking
description: A complete overview of FluentBooking—the native WordPress scheduling plugin for appointments, group events, payments, and team bookings. Free vs Pro at a glance.
---

# What is FluentBooking

**FluentBooking** is a native WordPress appointment-scheduling plugin built and maintained by the WPManageNinja team (the makers of Fluent Forms, FluentCRM, and Fluent Support). It lets you run consultations, sales calls, webinars, group classes, and team events directly from your own site no monthly per-seat fees, no third-party SaaS, and no booking data leaving your server.

This page is a guided tour of what FluentBooking does, how its pieces fit together, and where to go next for setup. If you just want to install the plugin and get going, jump straight to [Install & Activate FluentBooking](/install-activate-and-update-fluentbooking).

## Who FluentBooking is for

FluentBooking is designed for anyone who needs to accept appointments on a WordPress site:

- **Solo consultants and coaches:** Run 1:1 calls, intake sessions, and follow-ups from a single calendar.
- **Agencies and teams:** Distribute bookings across team members with [round-robin](/how-to-set-round-robin-bookings) or [collective](/collective-booking-event) events.
- **Course creators and trainers:** Offer [group classes](/group-one-off-event), workshops, or [multi-session packages](/set-recurring-events).
- **Service businesses:** Sell paid sessions through [Stripe](/stripe-integration-with-fluent-booking), [PayPal](/paypal-integration-with-fluentbooking), [WooCommerce](/woocommerce-integration-with-fluentbooking), or [FluentCart](/fluentcart-integration-with-fluentbooking).
- **SaaS and high-ticket sales teams:** Capture leads with [Fluent Forms](/fluent-form-integration-with-fluentbooking), route them with [round-robin](/how-to-set-round-robin-bookings), and follow up via [FluentCRM](/fluentcrm-integration-with-fluentbooking).

## What sets FluentBooking apart

- **100% WordPress-native.** Your data lives in your database. No outside accounts to manage, no per-user pricing.
- **Lightweight and fast.** A modern Vue.js admin without bloating your site.
- **Unlimited hosts, events, and bookings** on every plan.
- **Backed by the WPManageNinja ecosystem.** Deep integrations with [Fluent Forms](/fluent-form-integration-with-fluentbooking), [FluentCRM](/fluentcrm-integration-with-fluentbooking), [FluentBoards](/fluentboards-integration-with-fluentbooking), and [FluentCart](/fluentcart-integration-with-fluentbooking).

## Core building blocks

FluentBooking is organized around four primary concepts. Understanding how they fit together makes everything else faster to learn.

| Building block | What it is | Set it up |
|---|---|---|
| **Host** | The person (or shared calendar) who accepts bookings. Each host has their own public slug and weekly schedule. | [Create a Host](/how-to-create-a-new-host) |
| **Event type** | What guests are actually booking—a 30-minute consult, a group class, a paid coaching session. Belongs to one or more hosts. | [Create a Booking Event](/how-to-create-new-events) |
| **Availability schedule** | The weekly hours when bookings are allowed, plus date-specific overrides. Reusable across events. | [How Availability Works](/availability-management) |
| **Booking** | A single confirmed appointment between a guest and a host on a chosen slot. | [View All Bookings](/booking-details) |

## Event types FluentBooking supports

FluentBooking covers just about every booking pattern you would actually use in a real business. Whether you run 1:1 calls or coordinate a panel interview, there is a built-in event type for it.

- **[One-to-One](/how-to-create-new-events):** The classic format. One guest books one host for a single slot. Best for discovery calls, coaching sessions, intake meetings, and demos.
- **[Group Events](/group-one-off-event):** One host, many guests. Use this for webinars, online classes, or workshops where you set a capacity limit and let people fill the seats.
- **[Round Robin](/how-to-set-round-robin-bookings):** Hand each booking to whichever team member is most available. This is the sales-team favorite because it keeps lead distribution fair and avoids the "first to respond wins" scramble.
- **[Collective](/collective-booking-event):** Pull two or more hosts into the same meeting automatically. Useful for panel interviews, joint sales pitches, or any call where the guest needs to meet your full team at once.
- **[Recurring Events](/set-recurring-events):** Sell a multi-session package as a single booking. The guest picks the start date once, and the whole series gets locked in—coaching programs, 6-week courses, weekly therapy, that kind of thing.
- **[Single One-off Event](/single-one-off-event)** and **[Group One-off Event](/group-one-off-event):** Tied to a specific date. Great for a launch webinar, a Saturday workshop, or a guest masterclass that runs once and does not repeat.

## Availability and scheduling controls

Once you have a host and an event type set up, the next question is *when* people can actually book. FluentBooking gives you several layers of control so your calendar never gets pushed past what you can handle.

- **[Availability Schedules](/configure-availability):** Reusable weekly templates—your default "9 to 5, Monday through Friday" hours, or a separate "weekends only" schedule for a side project. Build them once and attach them to as many hosts or events as you want.
- **[Booking Schedule per Event](/how-to-create-a-booking-schedule):** Override the host-level schedule for a specific event. For example, your discovery calls might be open every weekday, but your strategy sessions only on Tuesdays.
- **[Booking Limits and Rules](/how-to-set-booking-limits):** The guardrails that keep your day sane. Add buffer time between meetings, require a minimum notice (e.g. "no bookings less than 2 hours out"), cap how many bookings can land per day or week, and decide how far into the future people can book.
- **[Advanced Event Settings](/how-to-set-booking-advanced-settings):** Fine-tune what happens around the booking—post-booking redirects, custom confirmation pages, cancellation behavior, and how the landing page looks.
- **Date Overrides:** Pop in a one-off change without touching your weekly schedule. Block out a holiday, close early on a specific Friday, or add extra hours for a busy launch week.

## Booking-form questions and notifications

Customize what guests see while booking, and what everyone receives after the booking lands.

- **[Booking Form Questions](/how-to-set-booking-questions):** Add the custom fields you actually need—a phone number, a preferred topic, a "tell us about your project" text area. Each event can carry its own set of questions, so you don't ask first-time clients the same things as repeat customers.
- **[Email Notifications](/email-notifications-for-events):** Per-event templates for the confirmation email, reminders before the meeting, reschedule notices, and cancellations. Edit the wording, the timing, and who receives them—no code required.
- **[Global Email Settings](/global-email-settings):** The site-wide defaults—sender name, sender address, and the branding that goes out on every notification. Set this once and every event inherits from it.
- **[Booking Summary Report](/how-to-set-booking-summary-email):** A daily or weekly digest emailed to each host, summing up what is on their plate. Helpful for teammates who don't live inside the WordPress admin.

## Managing your bookings

Once bookings start coming in, you don't need to chase them across calendars and inboxes. Everything lives on one screen.

- **[View All Bookings](/booking-details):** A single dashboard for every appointment you have. Filter by host, status, date range, or guest, and open any booking to see the full details, payment history, and notes.
- **[Create a Booking Manually](/create-booking-manually):** Add a booking on a guest's behalf. Handy when someone calls or emails you, and for migrating bookings over from another tool.
- **[Cancel a Booking](/how-to-cancel-a-booking):** Cancel cleanly with a guest-facing reason. The cancellation email goes out automatically, and any connected calendar event is removed at the same time.

## Putting the booking calendar on your site

Once the calendar is configured, you have four ways to actually show it to visitors. Pick whichever fits how you build pages on your site.

- **[Shortcodes](/fluentbooking-shortcodes):** The classic WordPress way. Paste a shortcode into any page, post, sidebar, or page-builder block and you get a live booking widget. There is a shortcode for a single event, a host's full calendar, and a team page.
- **[Gutenberg Blocks](/gutenberg-blocks):** Native blocks for the modern WordPress editor. Pick the FluentBooking block, choose what to display, and you are done—no shortcode syntax required.
- **[HTML Embed](/how-to-embed-booking-calendar-using-html):** A copy-paste embed code that works on any site, not just WordPress. Drop it on a landing page, a partner's site, or any marketing platform that supports custom HTML.
- **[Host Landing Page](/how-to-enable-landing-page-for-your-host):** A standalone public URL for each host (something like `yoursite.com/your-name`). The cleanest option for sharing in email signatures and link-in-bio profiles.

If you have multiple hosts working together, build a [Team Booking Page](/create-team-booking-page) so visitors can pick the right person from a single grid. And if you want the URLs to look tidy, you can [clean up the booking-page URL](/how-to-prettify-landing-page-url) for sharing in emails and ads.

## Payments and coupons (Pro)

FluentBooking Pro turns the booking calendar into a paid checkout. Guests pick a slot, pay, and the booking only gets confirmed once payment clears.

- **[Set Up the Payment Module](/how-to-take-payment-in-bookings):** The master switch. Enable this first—every payment method and the coupon system depend on it.
- **[Multiple Pricing Options](/take-multi-payments):** Charge different amounts for different session lengths. A 30-minute consult at one price, a 60-minute deep dive at another, all from the same event.
- **[Stripe](/stripe-integration-with-fluent-booking):** Accept credit and debit cards through Stripe's hosted checkout. The most common setup for online businesses.
- **[PayPal](/paypal-integration-with-fluentbooking):** For audiences that prefer PayPal, or markets where it converts better than card payments.
- **[Offline Payment](/offline-payment-for-booking):** Let guests reserve a slot and pay you outside the system—cash, bank transfer, or invoice after the meeting.
- **[Create & Manage Coupons](/how-to-create-and-manage-payment-coupons):** Run discount codes for promos, returning clients, or partner referrals. Set expiry dates, usage limits, and per-event rules.
- **[Coupon Field on the Booking Form](/customize-the-coupon-field-on-your-booking-form):** Show a coupon input on the booking form so guests can type a code at checkout.
- **[Coupon Link Generator](/how-to-generate-a-coupon-link):** Share a single link that already has the discount applied—no typing required.

## Integrations

FluentBooking Pro plugs into the tools you already use, so bookings don't sit in a silo. Head to the [Integrations Overview](/integrations-overview) for the full setup map, or jump straight to the integration you need below.

**Calendar sync (so you never get double-booked):**

- **[Google Calendar & Meet](/google-calendar-meet-integration-with-fluent-booking):** Two-way sync with Google Calendar, plus auto-generated Google Meet links on every booking.
- **[Outlook Calendar](/outlook-calendar-integration-with-fluent-booking):** The same two-way sync for Microsoft 365 and Outlook users.
- **[Apple Calendar](/apple-calendar-integration-with-fluent-booking):** Connect iCloud calendars using an app-specific password.
- **[Nextcloud Calendar](/nextcloud-calendar-integration-with-fluentbooking):** For self-hosted Nextcloud setups using CalDAV.

**Video meetings (join links generated automatically):**

- **[Zoom](/zoom-integration-with-fluentbooking):** Create a unique Zoom meeting for every booking and include the join link in the confirmation email.
- **Google Meet:** Bundled with the Google Calendar integration above—no separate setup needed.

**Marketing, CRM, and workflow:**

- **[FluentCRM](/fluentcrm-integration-with-fluentbooking):** Auto-tag contacts, trigger email sequences, and segment your list based on which event they booked.
- **[Fluent Forms](/fluent-form-integration-with-fluentbooking):** Capture richer booking data with conditional fields, file uploads, or any other Fluent Forms feature you already use.
- **[FluentBoards](/fluentboards-integration-with-fluentbooking):** Turn each booking into a project task automatically. Useful for onboarding, follow-ups, and post-meeting deliverables.

**Commerce:**

- **[WooCommerce](/woocommerce-integration-with-fluentbooking):** Sell bookings as WooCommerce products so you can use the WooCommerce checkout, coupons, and reporting you already have set up.
- **[FluentCart](/fluentcart-integration-with-fluentbooking):** Same idea, using FluentCart instead—lighter and more tightly integrated for shops already in the WPManageNinja ecosystem.

**Communication and automation:**

- **[Twilio SMS & WhatsApp](/twilio-integration-with-fluentbooking):** Send booking confirmations and reminders by text or WhatsApp message, in addition to (or instead of) email.
- **[Webhooks](/webhook-integration-with-fluentbooking):** Push booking events to any external endpoint—your data warehouse, a Slack channel, an internal API. Anything that speaks HTTP.

## Admin and team controls

Once your bookings are running, you will want to keep team access tight and let each host manage their own work.

- **[Host Profile Settings](/host-settings):** Avatar, bio, and branding shown on each host's public landing page. This is what guests see before they click "book."
- **[Team Permissions & Access](/host-user-access-management):** Decide which WordPress users can manage which hosts. Useful for agencies and multi-host teams where you don't want everyone seeing everyone's calendar.
- **[Frontend Booking Panel](/fluentbooking-frontend-panel):** Let hosts manage their own bookings from the public side of your site, without needing WordPress admin access.

## Advanced workflows

These are the power-user features. Reach for them once you have the basics dialed in.

- **[Import, Export & Clone Events](/import-export-and-clone-events):** Duplicate a fully-configured event with one click, or move it between sites. Handy for staging-to-production workflows and agencies reusing the same setup across clients.
- **[Pre-Fill Booking Forms via URL](/pre-fill-booking-form-url):** Send personalized booking links that already have the guest's name, email, or answers filled in. Cuts down the friction at the booking step.
- **[UTM Tracking for Bookings](/utm-tracking-for-bookings):** Capture UTM parameters on every booking so you can attribute revenue back to the ad, email, or campaign that produced it.

## Get started in minutes

Haven't installed the plugin yet? This is the fastest path from zero to a live booking page:

1. **[Install, Activate & Update](/install-activate-and-update-fluentbooking):** Get the plugin running on your WordPress site.
2. **[Dashboard Overview](/dashboard-overview):** Get a feel for where each feature lives in the FluentBooking admin.
3. **[Create a Host](/how-to-create-a-new-host):** Add the calendar that will accept bookings.
4. **[Create a Booking Event](/how-to-create-new-events):** Define what people can actually book—the format, the duration, the questions.
5. **[Configure Availability](/configure-availability):** Set your weekly hours so guests only see slots that work for you.
6. **[Add the Booking Form to Your Site](/add-booking-form-to-site):** Share the calendar with the world.

If you are setting up a team, add a [Team Booking Page](/create-team-booking-page) once your hosts are in place.

## Where to get help

- **[Common Issues & FAQs](/common-issues-and-faqs)** — Quick answers to the questions we hear most often.
- **[How to Get Support](/best-practices-and-get-help)** — Where to file a ticket and what to include.
- **[Changelog](/changelog)** — What shipped in the latest releases.
