---
title: FluentBooking Integration with Elementor
description: Connect FluentBooking to Elementor and embed Calendar Event, Bookings, and Calendar widgets on any page.
---

# FluentBooking Integration with Elementor

FluentBooking integrates with **Elementor**, so you can place booking calendars, host profiles, and booking lists inside the page layouts you already design. No custom code is required—open the Elementor editor, drag a FluentBooking widget into a section, and publish.

Elementor exposes **three FluentBooking widgets** in the left-hand elements panel under the **FluentBooking** block:

1. **Calendar Event** — booking calendar for one event
2. **Bookings** — front-end list of scheduled appointments
3. **Calendar** — host profile with multiple bookable events

In this guide, you learn how to add and configure each widget on your WordPress pages and posts.

::: tip Important
Before adding a widget, make sure you have created at least one [host](/how-to-create-a-new-host) and [booking event](/how-to-create-new-events) in FluentBooking.
:::

## Calendar Event Widget

The **Calendar Event** widget displays the booking calendar for one specific event. Use it on dedicated landing pages for a single service, strategy call, or appointment type.

### How to Configure

1. Drag the **Calendar Event** widget into your layout block.

![Calendar Event widget](/images/integrations/elementor-integration-with-fluentbooking/calendar-event-1.webp)

2. In the left settings panel under **Content**, use the **Select Event** dropdown to choose your event (for example, **SEO Update Monthly**).
3. **Show Host Info:** Toggle **Show** or **Hide** to display or remove the host profile picture and name above the scheduling calendar.
4. **Color Schema:** Choose **Light** or **Dark** to match your page design.


![Select Event settings](/images/integrations/elementor-integration-with-fluentbooking/select-event-2.webp)

## Bookings Widget

The **Bookings** widget displays a dynamic front-end dashboard with an overview of scheduled bookings. Users or administrators can check booking statuses from a centralized page layout.

### How to Configure

1. Drag the **Bookings** widget into your section container.

![Bookings widget settings](/images/integrations/elementor-integration-with-fluentbooking/bookings-3.webp)

2. **Select Calendars:** Leave empty to show bookings across all calendars, or select specific calendars.
3. **Title and No Booking Title:** Customize section headers directly, or use the built-in **Write with AI** tool to generate text variations.
4. **Default Period and status filters:** Use the **Default Period** dropdown to set time constraints. Toggle **Show Filter** and **Show Pagination** so users can browse **Upcoming**, **Completed**, **Pending**, or **Cancelled** appointments.
5. **Per Page:** Adjust the range slider to define how many records appear per page.

![Select Calendars](/images/integrations/elementor-integration-with-fluentbooking/select-calendar-4.webp)

## Calendar Widget

The **Calendar** widget displays a profile-style overview of an individual host, listing all active public booking events assigned to that profile.

### How to Configure

1. Drag the **Calendar** widget onto your page canvas.

![Calendar widget content](/images/integrations/elementor-integration-with-fluentbooking/calendar-5.webp)

2. Under **Content**, set custom text headings, descriptions, or upload a custom **Header Image**.
3. **Select Calendar:** Pick the primary host profile calendar.
4. **Select Events:** Choose which event cards appear under the host profile. Visitors can click **Book Now** next to an event to view available booking dates.

![Calendar widget on the front end](/images/integrations/elementor-integration-with-fluentbooking/calendar-6.webp)

::: tip Note
All three widgets work with the base version of Elementor, so you can publish availability on any custom page or layout section without extra setup.
:::
