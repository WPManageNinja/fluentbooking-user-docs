---
title: Pre-Fill Booking Forms via URL
description: Pre-fill booking fields via URL parameters—name, email, date, questions, UTM. Create personalized booking links in FluentBooking.
---

# Pre-Fill Booking Forms via URL

Using URL parameters allows you to generate a unique URL for your users that pre-fills specific booking fields, such as their name, email, preferred date, answers to custom questions, or any UTM Source, for them. This feature is ideal for creating personalized invitation links, streamlining the booking process from other forms, or guiding users to a specific time slot.

In this article, we’ll guide you through the step-by-step process of creating these custom URLs using the Generate Link feature.

#### Supported Variables

You can use these variables to pass event and invitee information directly into the URL. These parameters allow you to pre-fill the form data:

 - Date (Format: YYYY-MM-DD)
 - Month (Format: YYYY-MM)
 - Invitee Name
 - Invitee Email
 - Booking Questions
 - UTM Source
 - any Booking Fields

## Generating a Link with Pre-filled Parameters

The easiest way to create these URLs is by using the built-in **Generate Link** feature in your FluentBooking dashboard.

* **Access the Booking Calendar:** Go to **Calendars** in your dashboard and locate the specific Booking Event you want to share.
* **Open Sharing Options:** Click the **Share** button associated with that event. A pop-up window will appear.
* **Select the Generate Link Tab:** Inside the pop-up, click on the **Generate Link** tab.
* **Choose Page Type:** From the "Page Type" options, select **Landing Page**. This ensures the link directs users to the standalone booking page.
* **Add Parameters (Field and Value):** In the parameter section, you can map specific data:
   - **Field:** Select the data point you want to pre-fill (e.g.,*Date*,*Name*, or a*Question*).
   - **Value:** Enter the specific information you want to appear in that field (e.g.,*2023-11-07*or*John Doe*).

**Add Multiple Parameters:** If you want to pass multiple pieces of data (for example, both a Date and an Email), click the **Plus (+)** icon to add another row for fields and values.

**Copy the Link:** Once configured, click the **Copy** button next to the generated URL.
[]

![Copy Link](/images/miscellaneous/pre-fill-booking-form-url/date-scaled-1.webp)

**How it works for the user:** When a visitor clicks this link, the booking form will automatically load with the fields you configured already filled in. For example, if you mapped a specific date, that date will be pre-selected on the calendar when the page loads.

![How Works for user](/images/miscellaneous/pre-fill-booking-form-url/url-2-scaled.webp)


#### Understanding the URL Structure

If you prefer to manually construct the URL or understand how the **Generate Link** feature structures it, here is how the parameters are formatted.

**Locate your Landing Page URL:** A standard URL looks like this:

`https://fb.pennito.com/?fluent-booking=calendar&host=reachkamrul&event=60min`

**Add a Single Parameter (e.g., Date):** Append the & symbol followed by the parameter name and value:

`https://fb.pennito.com/?fluent-booking=calendar&host=reachkamrul&event=60min&date=2023-11-07`

**Add Multiple Parameters:** Add & before every new parameter you wish to include:

`https://fb.pennito.com/?fluent-booking=calendar&host=reachkamrul&event=60min&date=2023-11-07&invitee_name=Kevin Miller&invitee_email=kevin@wpmanageninja.com`

## Pre-filling Booking Questions

You can also pre-fill answers for custom Booking Questions you have set up for your event.

> To learn how to create these questions first, please read our documentation on [**How to Set Booking Questions**](/host-events/how-to-set-booking-questions).

In the **Generate Link** tab, look at the **Field** dropdown. Select the specific question you want to answer (e.g., "What is your company website?"). In the **Value** box, type the answer you want to pre-fill. **Copy** the generated URL.
    
![Booking Questions](/images/miscellaneous/pre-fill-booking-form-url/question-scaled-3.webp)

When the user visits this link, that specific question will already be answered in the form.

![specific question ](/images/miscellaneous/pre-fill-booking-form-url/question-2-scaled.webp)

## Adding UTM Source Parameters

Passing UTM data works the same way as Booking Questions and standard fields.

Select the specific **UTM parameter** (e.g., utm_source) from the **Field** dropdown. **Enter** your source name (e.g., newsletter) in the **Value** box.

> For a deeper dive into tracking, please read our documentation on [**UTM Tracking for Bookings**](/miscellaneous/utm-tracking-for-bookings).

![Adding UTM Source Parameters](/images/miscellaneous/pre-fill-booking-form-url/utm-source-scaled-5.webp)

And that’s how you can pass default booking information to the URL! By using these parameters, you can offer a smoother, faster booking experience for your clients.

If you have any further questions, concerns, or suggestions about this documentation, please don’t hesitate to reach out to [us](https://wpmanageninja.com/account/dashboard/).
