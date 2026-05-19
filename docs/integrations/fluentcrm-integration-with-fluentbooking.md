---
title: FluentCRM Integration with FluentBooking
description: Connect FluentBooking with FluentCRM for email automation, tags, and contact sync. Automate follow-ups from bookings.
---

# FluentCRM integration with FluentBooking

[FluentCRM](https://fluentcrm.com/) is a WordPress email marketing automation plugin that streamlines lead management, email campaigns, automatic sequences, learner and affiliate handling, and user activity tracking.

This integration between FluentCRM and FluentBooking simplifies the process of adding event attendees to your FluentCRM customer list for business growth and marketing lead collection.

## Integration Steps

Follow these straightforward steps to integrate FluentCRM with FluentBooking:

### Access FluentBooking

- Head to your FluentBooking **dashboard**.
- Navigate to **Booking Calendars** to find your booking events.
- Select the specific event you want to integrate with FluentCRM and click **Edit**.

![Access FluentBooking](/images/integrations/fluentcrm-integration-with-fluentbooking/calendars-fluentbooking-1.webp)

### Set Up FluentCRM Integration

On the event edit page, go to the left sidebar and select **Integrations**. Now click on **Add New Integration** and choose **FluentCRM Integration**.

![Add New Integration](/images/integrations/fluentcrm-integration-with-fluentbooking/add-new-integration-2.webp)

### FluentCRM Integration Feeds

You can customize your integration feed using the following settings:

 * **Feed Name:** Assign a unique title to your integration feed for easy identification.
 * **Map Primary Fields:** Align your FluentCRM Fields (Email Address, First Name, Last Name) with the corresponding Booking Fields (e.g., <span v-pre>`{{guest.first_name}}`</span>, <span v-pre>`{{guest.last_name}}`</span>).

![Customize your Integration](/images/integrations/fluentcrm-integration-with-fluentbooking/mapping-field-4.webp)

 * **Other Fields:** Use the Field Label and Field Value selectors to map additional custom data using dynamic shortcodes.
 * **FluentCRM Lists:** Select one or more existing customer lists to which your attendees will be added.
 * **Contact Tags:** Assign specific tags to attendees to segment them within your CRM.
 * **Automation Options:** Fine-tune contact behavior with dedicated checkboxes:
    * **Skip if contact already exists in FluentCRM:** Prevents duplicate entries.
    * **Skip name update if existing contact have old data:** Protects existing contact information from being overwritten.
    * **Enable Double opt-in for new contacts:** Sends a confirmation email to new subscribers.
    * **Enable Force Subscribe:** Forcibly updates a contact to "Subscribed" status regardless of their previous state.
* **Event Trigger:** Select which booking actions will fire this integration feed. You can choose from **Booking Confirmed, Completed, Canceled, Rescheduled, Rejected, or No Show**.
* **Remove Contact Tags:** Choose specific tags to be automatically removed from a contact when the selected trigger occurs.
* **Status:** Toggle the Enable This feed checkbox to activate or deactivate the integration.

After configuring these settings, click the **Save Feed** button to finalize your integration.


![Enable this Feed](/images/integrations/fluentcrm-integration-with-fluentbooking/integration-feed-3.webp)

## Automation Setup in FluentCRM

To create a new automation in FluentCRM, go to the **FluentCRM Dashboard** and click on the **Automations** section from the top navigation menu. Then click **New Automation**.

A popup window will appear. From the sidebar, select **Booking**, then choose a trigger to define when the automation should start.

#### Available triggers include:

 * **New Booking:** Runs the automation when a new booking is confirmed.
 * **Booking Cancelled:** Runs the automation when a booking is canceled.
 * **Booking Complete:** Runs the automation when a booking is marked as completed, either manually or automatically.
 * **Booking Rescheduled:** Runs the automation when an existing booking is moved to a new date or time.
 * **Booking No Show:** Runs the automation when a booking is marked as no-show by the host.

After selecting a trigger, click the **Continue** button to start setting up the funnel.


![Automation](/images/integrations/fluentcrm-integration-with-fluentbooking/automation-funnel-7.webp)


In the next popup, configure the funnel settings:

 * **Automation Name:** Displays the automation name. You can edit it if needed.
 * **Internal Description:** Add an internal note or description for the automation.
 * **Booking Calendar:** Select the booking calendar you created earlier.
 * **Subscription Status:** Choose which contact status will be included in the automation. Available options are Subscribed, Unsubscribed, and Pending.
 * **Conditions:** **Enable** the checkbox to run the automation only once per contact. If unchecked, the automation can run multiple times when new matching data is detected. 

![Setup Automation](/images/integrations/fluentcrm-integration-with-fluentbooking/funnel-8.webp)

### Viewing Synced Data

Once the integration is active: 

You can view attendees’ FluentCRM data inside the **Booking Details** page.

![booking details](/images/integrations/fluentcrm-integration-with-fluentbooking/booking-details-5.webp)

Booking information will also appear in the attendee’s **FluentCRM Contact Profile**.

![FluentCRM Profile](/images/integrations/fluentcrm-integration-with-fluentbooking/crm-contact-6.webp)
