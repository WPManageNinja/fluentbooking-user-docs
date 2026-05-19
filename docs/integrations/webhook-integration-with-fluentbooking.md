---
title: Webhook Integration with FluentBooking
description: Send booking data to any API via webhooks. Integrate FluentBooking with external tools and platforms.
---

# Webhook Integration with FluentBooking

FluentBooking's robust webhook features allow you to easily share your booking events with any web API endpoint. As a result, your FluentBooking experience will be more flexible and versatile since you can easily exchange and integrate your booking data with various platforms.

## Steps to Configure Webhook

Select the **Booking Calendars** from the FluentBooking dashboard. Go to the particular booking event, then click the **Edit** button.

![Steps to Configure Webhook](/images/integrations/webhook-integration-with-fluentbooking/image-1.webp)

On the left sidebar, you will see the **Webhook Feeds** for this particular booking. Next,click on the **Add New Webhook** button.

![Add New Webhook](/images/integrations/webhook-integration-with-fluentbooking/image-3.webp)

## Configure the Webhook

 * **Name:** Enter a feed name to identify this setup uniquely.
 * **Request URL:** Enter the URL to be used in the Webhook request (the Webhook recipient URL).
 * **Request Method:** Select the HTTP method used for the webhook request. Choose from GET, POST, PUT, PATCH, or DELETE here.
 * **Request Format:** Select the format for the webhook request. Select between **FORM** and **JSON** from the drop-down menu.
 * **Request Header:** Select if any headers should be sent with the webhook request.
 * **Request Body:** Select if all fields or select fields should be sent with the webhook request.
 * **Event Triggers:** Choose the event triggers that best suit your needs. You have the flexibility to select from the options *Booking Confirmed*,*Booking Canceled, and Booking Completed* based on your specific requirements.

Finally, check "**Enable this webhook feed**" and click on **Save Feed** when the configuration is done.

![Configure the Webhook](/images/integrations/webhook-integration-with-fluentbooking/webhook-e1697456020798.webp)
