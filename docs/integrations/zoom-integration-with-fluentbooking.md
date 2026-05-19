---
title: Zoom Integration with FluentBooking
description: Add Zoom meeting links to bookings automatically. Connect your Zoom account and create meetings for each appointment in FluentBooking.
---

# Zoom Integration with FluentBooking

Zoom integration simplifies the process of scheduling and handling online meetings, offering audio, chat, and video call options.

To integrate Zoom with FluentBoooking you need to follow some straightforward steps described in this guideline.

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/Yg8JXqnaQbg" title="Zoom Integration with FluentBooking" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Setting Up Zoom Integration

To connect your FluentBooking with Zoom you need some credentials. First, go to your [Zoom Marketplace](https://marketplace.zoom.us/) and log in or create a new account.

## Create Zoom App

You have to create a Zoom App in order to get the credentials for the integration. On the top right side, you will find the **Develop** button hover over the button and you will find the **Build App** option click on it.

![Create Zoom App](/images/integrations/zoom-integration-with-fluentbooking/zoom-app-building-scaled.webp)

Here you need to select the app type **Server-to-Sever OAuth App** then click on the **Create** button.

![Create App](/images/integrations/zoom-integration-with-fluentbooking/zoom-server-selection-scaled-2.webp)

Now give a name to your App then click on the **Create** button.

![Create Button](/images/integrations/zoom-integration-with-fluentbooking/zoom-app-name--scaled-3.webp)

### App Credentials

Now you will be taken to the **App Credential** page where you will get the App credentials. At this time you can **copy the credentials** to **FluentBooking** but that doesn’t complete the process, so **keep the copied credential in the clipboard for later use**.

![App Credentials](/images/integrations/zoom-integration-with-fluentbooking/3-4.webp)

### Information

On the Information page, there are some mandatory fields those are **Basic Information** Fields **App Name**, **Short Description**, **Company Name**, and **Developer Contact Information (*****Name, Email*****)**. You have to give this information and then click on the continue button.

![Developer Contact Information ](/images/integrations/zoom-integration-with-fluentbooking/4-3.webp)

### Feature

In the feature section, you don’t need to change anything so you can simply skip the feature section.

![Faeture Section](/images/integrations/zoom-integration-with-fluentbooking/feature-.webp)


### Scopes

Here you have to add four scopes. Click on the **Add Scopes** button and a pop-up will come up.

![Add Scopes](/images/integrations/zoom-integration-with-fluentbooking/app-marketplac.webp)

Select the following scopes from the **Meeting** and **User** Scopes then click on the **Done** button and continue:

From **Meeting** go to **View and manage all user meetings** and select these three scopes:

 - ***Delete a Meeting (meeting:delete:meeting:admin)***
 - ***Update a Meeting (meeting:update:meeting:admin)***
 - ***Create a meeting for a user (meeting:write:meeting:admin)***

From **User** go to **View all User information** then select-
 - ***View a user (user:read:user:admin).***

![Zoom Scope Adding](/images/integrations/zoom-integration-with-fluentbooking/zoom-scope-adding-2-scaled.webp)

### Activation

Once you have completed the above steps the Activation step will come. Simply click on the **Activate your app** button. This completes the process of creating a Zoom app.

![Activation](/images/integrations/zoom-integration-with-fluentbooking/activation-6.webp)

## Configuring Zoom With FluentBooking

After creating the Zoom app properly now you can connect your Zoom with FluentBooking. Go to FluentBooking Dashboard and navigate to **Settings > Zoom** and you will see the button **Connect Your Zoom Account** click on the button.

![Configuring Zoom With FluentBooking](/images/integrations/zoom-integration-with-fluentbooking/configure-zoom-7.webp)

Now a popup will appear paste your **copied** Zoom App **credentials** here and click on **Save & Validate Credentials.**

![Save & Validate Credentials](/images/integrations/zoom-integration-with-fluentbooking/validate-8.webp)

FluentBooking and Zoom are successfully connected, you can see the connected host here. If you want to connect another user account of FluentBooking with Zoom click the **Add New User Account** button.

To connect another user account of FluentBooking with Zoom you need to create another app from another Zoom account and then repeat the same process to connect with Zoom.

![Connect with Zoom](/images/integrations/zoom-integration-with-fluentbooking/9.webp)

## Zoom Integration From Host Setting

You can also set up Zoom from your host settings. Go to **Booking Calendars** of FluentBooking and click the **Host Settings** button on the host/calendar’s profile.

![Host Settings](/images/integrations/zoom-integration-with-fluentbooking/calendars-fluentbooking-1-3.webp)

Now go to the **Zoom Integration** and press the **Connect with Zoom Account** button.

![Connect with Zoom Account](/images/integrations/zoom-integration-with-fluentbooking/host-setting.webp)

Now a popup will appear in the same way for your Zoom App **credentials** here paste your **copied** credentials here and click on **Save & Validate Credentials.**

![Save & Validate Credentials](/images/integrations/zoom-integration-with-fluentbooking/host-settings-2.webp)

## Add Zoom to the Event

Now at the **Event Location**, you will find the Zoom video for your meeting.

![Add Zoom to the Event](/images/integrations/zoom-integration-with-fluentbooking/slot-settings-fluentbooking-15-1.webp)

The host of the Fluentbooking and the attendees will receive the **Zoom video link** with the notification **mail**. Also, you will see your meetings in your Zoom account just like the screenshot below:

![Zoom video link](/images/integrations/zoom-integration-with-fluentbooking/4d470267-0140-4a15-b0c1-c2686af946b7.webp)



