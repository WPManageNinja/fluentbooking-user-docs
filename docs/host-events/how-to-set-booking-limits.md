---
title: Booking Limits & Rules
description: Control how far ahead guests can book and how many bookings per person or day. Configure booking limits in FluentBooking.
---

# Booking Limits & Rules

FluentBooking provides a helpful feature to incorporate breaks between your booked events. You can set various limits according to your preferences. This guide explains the limit feature in FluentBooking in more detail.

::: tip Important
This page assumes you have already [created a booking event](/how-to-create-new-events).
:::

## Before the Event

You can allocate a break time before the start of your meeting using FluentBooking. Simply input the desired break duration into the meeting settings.

### After the Event

Similarly, you can also schedule a break time after your meeting concludes. Specify the break duration in the designated field for post-event breaks.

### Minimum Notice

Invitees cannot schedule any meetings within the specified notice period. For instance, if set to 1 hour, scheduling a meeting within the next hour is not permitted.

### Time-slot Intervals

Tailor your meeting time by cropping or extending it with the time slot interval option.

For example, it has a 30-minute interval that's why it shows 2:00 -> 2:30 if it was 10 minutes interval then it would be 2:00 -> 2:10, 2:10 -> 2:20, etc.


![Time-slot Intervals](/images/host-events/how-to-set-booking-limits/limit-settings-fluentbooking-scaled.webp)

### Limit Booking Frequency

Decide how often an event can be booked with this feature. You can set limits for daily, weekly, or monthly bookings.

### Limit Booking Duration

Define the total attending time for your booking to restrict the duration of the event.

![Limit Booking Duration](/images/host-events/how-to-set-booking-limits/image-2.webp)

### Lock Timezone on Booking Page

Enabling the **Lock Timezone on Booking Page** option on the booking page will set your chosen timezone and prevent attendees from making changes. Simply select the specific timezone you wish to use from the dropdown menu. This feature is especially helpful for in-person events.


![Lock Timezone on Booking Page](/images/host-events/how-to-set-booking-limits/limit-settings-fluentbooking-1.webp)

### Rate Limiting

FluentBooking includes automatic per-IP rate limiting on public booking endpoints to protect your site from spam and abuse. The limits are applied automatically — no configuration is required:

 * **Scheduling a meeting** — maximum 15 requests per 60 seconds per IP address.
 * **Cancelling a meeting** — maximum 15 requests per 60 seconds per IP address.
 * **Loading available dates** — maximum 30 requests per 60 seconds per IP address.
 * **File uploads** — maximum 30 requests per 60 seconds per IP address (Pro).

If a visitor exceeds the limit, the request is blocked until the window resets. This protection runs silently in the background and does not affect normal attendee usage.
