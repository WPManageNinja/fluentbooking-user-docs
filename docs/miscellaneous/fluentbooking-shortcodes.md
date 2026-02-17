---
title: FluentBooking Shortcodes
description: Use shortcodes to embed booking forms, calendars, team events, and the frontend panel. Full list and parameters in FluentBooking.
---

# FluentBooking Shortcodes

A shortcode is a simple snippet of code that you can place anywhere on your website. When viewed on the front end, this code is replaced with dynamic content, such as a booking calendar. FluentBooking provides custom shortcodes that seamlessly integrate powerful booking features into your site.

This guide walks you through the available shortcodes and shows you how to use them effectively to enhance your website's functionality.

## Add Shortcodes to Your Website

To integrate shortcodes into your website’s front end:

Go to your WordPress dashboard and click on **Pages** or **Posts** from the left sidebar. Select the specific page or post where you want to add the shortcode or create a new page. After that:

- Click on the **(+) Add Block** button.
- Search for "Shortcode" and select the **Shortcode** block.
- Paste the shortcode into the block and save the changes.

Once done, the booking events will appear on the front end of your website.

![Add Shortcodes to Your Website](/images/miscellaneous/fluentbooking-shortcodes/ShortCode-Forntend-3-scaled.webp)

## Shortcodes

These are the available shortcodes:

- `[fluent_booking]` — Add a booking event
- `[fluent_booking_calendar]` — Display calendar and events
- `[fluent_booking_team]` — Display team events
- `[fluent_booking_lists]` — Display bookings for logged-in users
- `[fluent_booking_panel]` — Embed the booking frontend panel


### Adding a Booking Event

To display booking events on your WordPress site, use the following shortcode. Copy it and paste it into the desired page or post.

For example, you can add the shortcode to your website's front end with specific parameters like this:

```
[fluent_booking id="68" theme="dark" disable_author="yes"]
```

In this example:

- **fluent_booking** is the shortcode used to embed a booking form.
- **id="123"** specifies the unique ID of the booking form you want to display.

This will render the selected booking form on your site’s front end, allowing users to interact with it. You can adjust the parameters to match the form, calendar, or service you wish to display.

**Parameters:**

- **id:** Specify the booking event ID.
- **theme:** Choose between light or dark themes.
- **disable_author:** Hide the author's details if set to yes.

### Displaying Calendars and Events

To showcase your booking calendars and associated events, use this shortcode. Add it to a page and customize the parameters as needed.

For example:

```
[fluent_booking_calendar calendar_id="38" event_ids="68, 79" hide_info="true" title="" description="" logo=""]
```

**Parameters:**

- **calendar_id:** ID of the calendar to display.
- **event_ids:** A comma-separated list of event IDs.
- **hide_info:** Set to true to hide additional event information.
- **title, description, logo:** Customize the calendar's display settings.

### Displaying Team Events

To show team-specific events, use this shortcode. Add it to your front-end page and customize the parameters.

For example:

```
[fluent_booking_team event_ids="68, 139, 158, 131, 149" title="" description="" logo_url=""]
```

**Parameters:**

- **event_ids:** List of team event IDs to display.
- **title, description, logo_url:** Personalize the team events display.

### **Displaying Bookings for Logged-In Users**

Logged-in users can view their bookings using this shortcode. Customize the parameters to control the displayed details:

For example:

```
[fluent_booking_lists title="" filter="show" pagination="show" period="upcoming" per_page="10" no_bookings="No bookings found"]
```

**Parameters:**

- **title:** Title for the booking list.
- **filter:** Show filters for bookings (show or hide).
- **pagination:** Enable or disable pagination.
- **period:** Specify booking periods (e.g., upcoming).
- **per_page:** Set the number of bookings to display per page.
- **no_bookings:** Message to display if no bookings are found.

### Embedding a Booking Frontend Panel

This shortcode is designed to display a comprehensive booking management frontend panel on your website. It provides users with a centralized interface to view, manage, and track their bookings. This shortcode is particularly useful for logged-in users who need a way to interact with their booking details.

```
[fluent_booking_panel]
```

## How to Find the Event or Calendar ID

To locate the ID for an event or calendar go to the specific event in the Fluent Booking dashboard. Click on the **Share** button. In the event sharing options, you’ll find the shortcode containing the Event ID.

![How to Find the Event or Calendar ID](/images/miscellaneous/fluentbooking-shortcodes/Claender-ID-1-scaled.webp)

## How to Find the Calendar ID or Event ID

To locate the specific Calendar ID or Event ID for a booking in Fluent Booking, follow these steps:

In your Fluent Booking dashboard, click on **Calendar** from the navigation bar. Locate the booking event for which you need the ID.

Open the edit page for the desired event.

Look at the URL in your browser. The IDs are part of the URL structure:

- The first ID after "calendar" in the URL slug is the **Calendar ID**.
- The next ID represents the **Booking/Event ID**.

You can refer to the following example screenshot to identify the Calendar ID and Booking/Event ID easily.

![Edit Page](/images/miscellaneous/fluentbooking-shortcodes/Claender-ID-2-scaled.webp)

If you have any questions, suggestions, or need further assistance regarding this documentation, please don’t hesitate to [contact us](https://wpmanageninja.com/support-tickets/). We’re here to help!
