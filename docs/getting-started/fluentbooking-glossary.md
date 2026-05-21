---
title: FluentBooking Glossary
description: A to Z definitions of every key term, feature, and concept in FluentBooking.
---

# FluentBooking Glossary

A quick-reference guide to every key term, feature, and concept you will encounter while using FluentBooking. Terms are listed A to Z. Click the linked pages to learn more about each feature.

## A

* **Approval Required**: A setting that places new bookings in a "Pending" state until the host manually approves or rejects them. When enabled, the attendee receives a confirmation email only after you approve the booking. Configure it under [Advanced Event Settings](/how-to-set-booking-advanced-settings).


* **Availability Schedule**: A reusable template that defines the days and times a host accepts bookings. A host can have multiple named schedules (for example, "Weekdays" and "Weekends") and assign one schedule per event. See [Create Availability Schedules](/configure-availability).


## B

* **Board (FluentBoards)**: A project board inside the FluentBoards plugin. When you configure a FluentBoards integration, you select which board new tasks are added to. See [FluentBoards Integration](/fluentboards-integration-with-fluentbooking).

* **Booking**: A confirmed appointment between a host and an attendee. A booking has a status (Scheduled, Pending, Completed, Cancelled, or No Show) and stores the attendee's details, meeting time, and any custom question answers.

* **Booking Event**: A named, configurable service or meeting type inside a calendar — for example, "30-Minute Consultation" or "Group Onboarding Call." Each booking event has its own duration, availability, questions, price, and notifications. See [Create a Booking Event](/how-to-create-new-events).

* **Booking Form**: The public-facing form attendees complete to schedule a meeting. It shows available time slots and collects the attendee's information and any custom [questions](/how-to-set-booking-questions) you have configured.

* **Booking Limits**: Rules that control how many bookings can be made per day, per week, or within a rolling window. Also covers minimum and maximum notice periods that restrict how far in advance (or how last-minute) a booking can be made. See [Booking Limits & Rules](/how-to-set-booking-limits).

* **Booking Schedule**: The availability schedule assigned to a specific event. An event uses its assigned booking schedule to determine which time slots are shown to attendees. See [Assign a Booking Schedule](/how-to-create-a-booking-schedule).

* **Booking Summary Report**: A periodic email digest sent to site administrators or host managers that summarises recent booking activity (total bookings, cancellations, upcoming meetings). Configure it under [Booking Summary Report](/how-to-set-booking-summary-email).


## C

* **CalDAV**: An internet standard protocol used to sync calendar events between servers and clients. FluentBooking uses CalDAV to connect with [Nextcloud Calendar](/nextcloud-calendar-integration-with-fluentbooking).

* **Calendar**: The top-level container for a host's booking events in FluentBooking. A calendar is associated with one host and can hold multiple booking events. The calendar has its own public landing page URL and can be embedded on your WordPress site. See [Create a Host](/how-to-create-a-new-host).

* **Cancellation**: The action of cancelling a scheduled booking. FluentBooking can send cancellation notification emails to both the host and the attendee. Either party can cancel a booking, subject to any cancellation rules you have set. See [Cancel a Booking](/how-to-cancel-a-booking).

* **Collective Booking Event**: An event type that requires all assigned hosts to be simultaneously available before a time slot is offered to the attendee. Useful for panel interviews or multi-person meetings. See [Collective Booking Event](/collective-booking-event).

* **Coupon**: A discount code that reduces the price of a paid booking event. Coupons support fixed-amount and percentage discounts, usage limits, expiry dates, and per-event restrictions. See [Create & Manage Coupons](/how-to-create-and-manage-payment-coupons).


## D

* **Dashboard**: The main admin screen in FluentBooking. It shows upcoming meetings, recent booking activity, total bookings, cancellations, and trends at a glance. See [Dashboard Overview](/dashboard-overview).

* **Date Override**: An exception to a host's regular weekly availability schedule for one or more specific calendar dates — for example, marking a holiday as unavailable or opening up extra slots on a specific day. Configured inside [Create Availability Schedules](/configure-availability).

* **Duration**: The length of time a booking event lasts (for example, 30 minutes or 1 hour). You can offer multiple duration options for a single event using [Multiple Pricing Options](/take-multi-payments).


## E

* **Email Notifications**: Automated emails triggered by booking lifecycle events (new booking, cancellation, reschedule, reminder). Each event has its own notification settings for both the host and the attendee. See [Email Notifications](/email-notifications-for-events).

* **Event Trigger**: The booking lifecycle stage (New Booking, Booking Cancelled, Booking Rescheduled, etc.) that activates an integration feed. You select the trigger when configuring integrations such as [FluentCRM](/fluentcrm-integration-with-fluentbooking) or [Webhooks](/webhook-integration-with-fluentbooking).


## F

* **Feed**: A single configured integration rule inside FluentBooking — for example, one FluentCRM feed that adds contacts to a list on every new booking, or one Webhook feed that posts data to an external URL on cancellation. An event can have multiple feeds for the same integration. 

* **FluentBooking Pro**: The premium version of FluentBooking that unlocks payments, advanced integrations, round robin, collective events, and more. See [Install FluentBooking Pro](/how-to-install-activate-fluent-booking).

* **FluentCart**: WPManageNinja's e-commerce plugin. You can use [FluentCart as a payment method](/fluentcart-integration-with-fluentbooking) for paid booking events.

* **FluentCRM**: WPManageNinja's CRM and marketing automation plugin. The [FluentCRM integration](/fluentcrm-integration-with-fluentbooking) lets you add booking attendees to lists, apply tags, and trigger automations based on booking events.

* **Frontend Panel**: A self-service dashboard accessible from the front end of your WordPress site (outside the admin area) that lets hosts view and manage their own bookings without needing WordPress admin access. See [Frontend Booking Panel](/fluentbooking-frontend-panel).


## G

* **Global Email Settings**: Site-wide configuration for the sender name, sender email address, reply-to address, and email footer used across all booking notification emails. See [Email & Notification Settings](/global-email-settings).

* **Global Payment Module**: The master switch that enables payment functionality across your entire FluentBooking installation. You must turn it on before configuring Stripe, PayPal, WooCommerce, or FluentCart as payment methods. See [Set Up Payments](/how-to-take-payment-in-bookings).

* **Group One-off Event**: A one-time event that accepts multiple attendees simultaneously up to a configured guest limit — for example, a webinar or workshop on a specific date. See [Group One-off Event](/group-one-off-event).

* **Guest**: An additional attendee added to a booking beyond the primary person booking. Enable the **Add Guests** option in event settings to allow attendees to bring additional guests.

* **Gutenberg Block**: A native WordPress block editor element provided by FluentBooking for embedding a booking calendar or event on any page or post without writing code. See [Gutenberg Blocks](/gutenberg-blocks).


## H

* **Host**: The person in your WordPress site who receives bookings. A host has their own calendar, availability schedule, and booking events. Each host is linked to a WordPress user account. See [Create a Host](/how-to-create-a-new-host).

* **Host Profile Settings**: Per-host configuration including display name, bio, avatar, phone number, and public slug. See [Host Profile Settings](/host-settings).


## I

* **Integration Feed**: A configured rule inside a booking event that connects to a third-party service and triggers an action (such as creating a CRM contact, posting a webhook, or creating a task) when a booking lifecycle event occurs. See the [Integrations](/google-calendar-meet-integration-with-fluent-booking) section.


## L

* **Landing Page**: A standalone public URL associated with a host or team. Attendees can view and book available events directly from the landing page. See [Host Landing Page](/how-to-enable-landing-page-for-your-host) and [Create a Team Booking Page](/create-team-booking-page).

* **Lists (FluentCRM)**: Subscriber lists inside FluentCRM. The FluentCRM integration feed lets you automatically add booking attendees to one or more lists. See [FluentCRM Integration](/fluentcrm-integration-with-fluentbooking).


## M

* **Manual Booking**: A booking created by an admin or host directly from the FluentBooking dashboard, rather than by an attendee filling out the public booking form. See [Create Booking Manually](/create-booking-manually).

* **Maximum Notice**: The furthest date in the future that an attendee can book an event. Setting a maximum notice (for example, 60 days) prevents bookings too far in advance. Configure it in [Booking Limits & Rules](/how-to-set-booking-limits).

* **Minimum Notice**: The shortest gap allowed between now and the booking time. For example, a minimum notice of 24 hours means attendees cannot book a meeting starting within the next 24 hours. Also called cut-off time. Configure it in [Booking Limits & Rules](/how-to-set-booking-limits).

* **Multi-Payment / Multiple Pricing**: A feature that lets you offer several price and duration combinations on a single booking event — for example, "30 min / $50" and "60 min / $90." See [Multiple Pricing Options](/take-multi-payments).


## N

* **Nextcloud Calendar**: An open-source, self-hosted calendar server. FluentBooking can sync bookings to a Nextcloud calendar over CalDAV. See [Nextcloud Calendar Integration](/nextcloud-calendar-integration-with-fluentbooking).

* **Notification**: An automated message (email or SMS) sent to the host, attendee, or additional recipients when a booking event occurs (new booking, cancellation, reschedule, reminder, etc.). See [Email Notifications](/email-notifications-for-events).


## O

* **OAuth**: An open authorization standard used to securely connect FluentBooking with Google Calendar, Outlook Calendar, and Zoom without sharing passwords. When you connect an integration you are taken through an OAuth consent screen to grant access.

* **Offline Payment**: A payment method where the attendee is shown your payment instructions (bank transfer, cash, etc.) and pays outside of FluentBooking. The booking is created immediately; you manually mark it as paid later. See [Offline Payments](/offline-payment-for-booking).


## P

* **Payment Gateway**: A third-party service that processes online payments. FluentBooking supports [Stripe](/stripe-integration-with-fluent-booking) and [PayPal](/paypal-integration-with-fluentbooking) as built-in payment gateways, plus [WooCommerce](/woocommerce-integration-with-fluentbooking) and [FluentCart](/fluentcart-integration-with-fluentbooking) for commerce-based checkouts.

* **Pre-fill URL**: A booking page URL with query parameters that automatically populate specific form fields when the page loads — for example, pre-filling the attendee's name and email from a CRM link. See [Pre-Fill Booking Forms via URL](/pre-fill-booking-form-url).


## Q

* **Question**: A custom field added to a booking form to collect specific information from the attendee for example, "What topics would you like to discuss?" Questions support text, textarea, number, phone, dropdown, radio button, and checkbox field types. See [Booking Form Questions](/how-to-set-booking-questions).

## R

* **Recurring Event**: A booking event that repeats on a set schedule. Attendees book the series at once and attend multiple sessions. FluentBooking supports strict (all sessions required) and flexible (attend any sessions) recurring modes. See [Recurring Events](/set-recurring-events).

* **Redirect URL**: The page URL a visitor is sent to after completing a booking instead of the default confirmation message. Useful for sending attendees to a custom thank-you page or external onboarding flow. Configure it in [Advanced Event Settings](/how-to-set-booking-advanced-settings).

* **Reminder**: A notification sent to the host or attendee a set amount of time before a scheduled meeting starts. Reminders can be sent by email or SMS (via Twilio). See [Email Notifications](/email-notifications-for-events).

* **Reschedule**: Moving an existing confirmed booking to a new date and time. FluentBooking sends a rescheduling notification email when a booking is rescheduled.

* **Round Robin**: An event type that automatically distributes incoming bookings among multiple hosts in turn — ensuring an even workload. Only hosts with matching availability at the requested time are eligible for the next assignment. See [Round Robin Events](/how-to-set-round-robin-bookings).

## S

* **Shortcode**: A WordPress text snippet (for example, `[fluentbooking_calendar id="1"]`) that embeds a booking calendar or single event on any WordPress page or post. See [Shortcodes](/fluentbooking-shortcodes).

* **Single One-off Event**: A one-time event slot for a single attendee on a specific date and time — for example, a specific demo session you schedule and share the link for. See [Single One-off Event](/single-one-off-event).

* **Slug**: The URL-friendly text identifier for a calendar, booking event, or team page. For example, a host with slug `dr-jane` has a landing page at `yourdomain.com/booking/dr-jane`. You set the slug in host and calendar settings.

* **Stripe**: A widely used online payment gateway. FluentBooking's Stripe integration lets you accept credit and debit card payments for paid booking events. See [Stripe Integration](/stripe-integration-with-fluent-booking).


## T

* **Tags (FluentCRM)**: Labels you can automatically apply to a CRM contact when a booking event occurs (new booking, cancellation, etc.). Set up tag actions inside a [FluentCRM integration](/fluentcrm-integration-with-fluentbooking) feed.

* **Team Booking Page**: A single public landing page that lists all hosts in your installation, letting visitors browse hosts and book with any of them from one URL. See [Create a Team Booking Page](/create-team-booking-page).

* **Timezone Lock**: A setting that prevents attendees from changing the timezone display on the booking form. Useful when your events are always held in a specific physical location. Configure it in [Advanced Event Settings](/how-to-set-booking-advanced-settings).

* **Trigger**: The booking lifecycle event (New Booking, Booking Cancelled, Booking Rescheduled, Booking Completed, No Show) that activates an integration feed or sends a notification. You select triggers when configuring [email notifications](/email-notifications-for-events) and [integration feeds](/fluentcrm-integration-with-fluentbooking).

* **Twilio**: A cloud communication platform. FluentBooking's [Twilio integration](/twilio-integration-with-fluentbooking) enables SMS and WhatsApp notifications to hosts and attendees triggered by booking events.

## U

* **UTM Parameters**: URL query strings (utm_source, utm_medium, utm_campaign, utm_content, utm_term) appended to your booking page URLs to track which marketing channels drive bookings. FluentBooking captures and stores UTM data on each booking record. See [UTM Tracking for Bookings](/utm-tracking-for-bookings).


## W

* **Webhook**: An HTTP callback that sends real-time booking data to an external URL when a booking event occurs. Use webhooks to connect FluentBooking to any third-party system that accepts HTTP POST requests. See [Webhook Integration](/webhook-integration-with-fluentbooking).

* **WooCommerce**: A popular WordPress e-commerce plugin. FluentBooking can route payments through the WooCommerce checkout flow, letting you use any WooCommerce-compatible payment gateway. See [WooCommerce Integration](/woocommerce-integration-with-fluentbooking).

* **Working Hours**: The time blocks within an Availability Schedule during which a host is available for bookings — for example, Monday to Friday, 9 AM to 5 PM. See [Create Availability Schedules](/configure-availability).


## Z

* **Zoom**: A video conferencing platform. FluentBooking's [Zoom integration](/zoom-integration-with-fluentbooking) automatically generates a unique Zoom meeting link for each booking and includes it in the confirmation email sent to both the host and the attendee.
