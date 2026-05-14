---
title: Google Calendar & Meet Integration with FluentBooking
description: Sync bookings with Google Calendar and auto-create Google Meet links. Two-way sync and conflict checking in FluentBooking.
---

# Google Calendar/Meet integration with FluentBooking

FluentBooking offers seamless integration with your Google Calendar and Google Meet, making your scheduling experience even more efficient and effective. There are two ways to integrate Google Calendar with FluentBooking. We'll show you both.

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/MVTqroAwtP4" title="Google Calendar/Meet integration with FluentBooking" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Default Verified App

Unlike any other WordPress appointment plugin, we have a default verified app to integrate Google Calendar.

To use this, go to **Settings** and switch to **Google Calendar/Meet**. Then, choose **Default Verified App** and set your caching time. The recommended setting is 5 minutes however, you can set any duration.

![fluentbooking google calendar integration](/images/integrations/google-calendar-meet-integration-with-fluent-booking/fluentbooking-global-setting-1.webp)

In the **Calendars** section, select the host you want to sync booking events for on Google Calendar/Meet. If you don't have a host, check out our [Documentation](/how-to-create-a-new-host) for guidance on creating one. 

Now, go to the **Host Settings > Remote Calendar** of that host and click **Connect with Google Calendar/Meet**.

To sync your host's FluentBooking events with their Google Calendar/Meet, add your host's Google Account.

![fluentbooking google calendar integration](/images/integrations/google-calendar-meet-integration-with-fluent-booking/connect-with-google-calendar-2.webp)

Then, give FluentBooking the necessary permissions and click the **Continue** button.

![fluentbooking google calendar permissions](/images/integrations/google-calendar-meet-integration-with-fluent-booking/permission-3.webp)

That's it, that's all you need to integrate Google Calendar with FluentBooking! Now you can choose your calendar and check conflicts to prevent double bookings.

![conflict checking](/images/integrations/google-calendar-meet-integration-with-fluent-booking/remote-calendar-sync-settings-4.webp)


## Own App (Not Recommended)

Alternatively, you can use our own app to integrate Google Calendar. Here are the steps below:

## Create or Select Project

First, go to the [Google Cloud Console](https://console.cloud.google.com/) and here you have to select a project. You can create a new project too.

![Google Cloude Console](/images/integrations/google-calendar-meet-integration-with-fluent-booking/welcome-_-google-cloud-console-1.webp)

For creating a new project click on the **New Project** button here.

![Create a New Project](/images/integrations/google-calendar-meet-integration-with-fluent-booking/welcome-_-google-cloud-console-2.webp)

Give a name to your project and press the **Create** button.

![Create](/images/integrations/google-calendar-meet-integration-with-fluent-booking/new-project-_-google-cloud-console-3.webp)

You will see a project create confirmation on your notification panel. Now select your project here.

![Create Confirmation](/images/integrations/google-calendar-meet-integration-with-fluent-booking/welcome-_-google-cloud-console-4.webp)


## Configuring 0Auth Consent

Go to the **APIs & Services** and select the **OAuth consent screen**

![Configuring 0Auth Consent](/images/integrations/google-calendar-meet-integration-with-fluent-booking/dashboard-_-fluent-booking-test-_-google-cloud-console-5.webp)

Here you have to select the **Internal** user type and click on the **Create** button.

>[!Note]
> If you're not using Google Workspace, select **External** User. Please be aware that the **External** user type app may break integration with **FluentBooking** in one to two weeks.


![API Service](/images/integrations/google-calendar-meet-integration-with-fluent-booking/apis-services-_-fluent-booking-_-google-cloud-console.webp)

Here you will see four steps to complete the OAuth consent screen. In the first step, you have to give the App name, User Support Email, Authorized domain, and Developer Contact information then click on the **Save & Continue** button.

You can simply **Save and Continue** the other three steps.

![Save & Continue](/images/integrations/google-calendar-meet-integration-with-fluent-booking/edit-app-registration-_-apis-services-_-fluent-booking-test-_-google-cloud-console-7.webp)

After completing the above steps you have to publish the app. Just click on the **Publish App** button.

![Publish App](/images/integrations/google-calendar-meet-integration-with-fluent-booking/apis-services-_-f-booking-_-google-cloud-console.webp)

## Enabling Google Calendar API

Now go to the **Library** and enable the **Google Calendar API**.

![Google Calendar API](/images/integrations/google-calendar-meet-integration-with-fluent-booking/apis-services-_-apis-services-_-f-booking-_-google-cloud-console.webp)

Here search for the Google Calendar API and simply enable it.

![Google Calendar API](/images/integrations/google-calendar-meet-integration-with-fluent-booking/drift-video-3815274-3919835-1697199093.webp)

## Create Credentials

Now go to your project and select **Create Credentials > OAuth client ID**

![Create Credentials](/images/integrations/google-calendar-meet-integration-with-fluent-booking/credentials-_-apis-services-_-fluent-booking-test-_-google-cloud-console-12.webp)

Here you need to create a web application to get your credentials.

![Create a Web Application](/images/integrations/google-calendar-meet-integration-with-fluent-booking/create-oauth-client-id-_-apis-services-_-fluent-booking-test-_-google-cloud-console-13.webp)

Now you need the Authorized redirect URL of FluentBooking. Go to **Settings > Google Calendar** of your FluentBooking plugin and you will get the redirect URL.

![Get Ridirect URL](/images/integrations/google-calendar-meet-integration-with-fluent-booking/configure-google-fluentbooking-1-1.webp)

**Copy the URL** and paste it into the **Authorized redirect URL** field.

After that click on the **Create** button and a pop-up will show up with the necessary credentials.


![Create button](/images/integrations/google-calendar-meet-integration-with-fluent-booking/create-oauth-client-id-_-apis-services-_-fluent-booking-test-_-google-cloud-console-14.webp)

Copy the **Client ID** and **Client Secret** from here.

![Copy Client ID & Secret](/images/integrations/google-calendar-meet-integration-with-fluent-booking/credentials-_-apis-services-_-fluent-booking-test-_-google-cloud-console-21.webp)

## Configuring Admin Google Calendar

You must have to add an Admin Google Calender/Meet account in FluentBooking in order to use Google Calender/Meet integration.


To add an Admin Google Calender Account go to your FluentBooking plugin **Settings > Google Calendar** and paste the **Credentials** (*Client ID, Client Secret*) to integrate FluentBooking with Google Calendar/Meet. Click on the **Save Google API Configuration** button and you will see a **Success** notification.

>[!Note]
> To synchronize your booking events with Google Calendar/Meet you have to connect your Google account to host profiles.

![Configuring Admin Google Calendar](/images/integrations/google-calendar-meet-integration-with-fluent-booking/configure-google-fluentbooking-2.webp)


## Configuring Host Google Calendar

After setting up an **Admin Google Calendar** account you will be able to add a Google Calendar/Meet account for every individual host also the hosts can add their own Google Account to synchronize their booking events with their Google Calendar/Meet.*You don't need to re-configure **Google OAuth Credentials** to add a Google account for each host, as you have already connected the authenticator app*. Hosts can add multiple Google accounts to manage their booking events.


To synchronize your booking events with Google Calendar/Meet you need to connect a Google account of yours. Go to **Calenders > Host Settings > Remote Calendars** now select the **Connect with Google Calendar/Meet** button.

![Connect with Google Calendar/Meet](/images/integrations/google-calendar-meet-integration-with-fluent-booking/booking-types-fluentbooking-1.webp)

You have to log in or select the account you want to synchronize your FluentBooking events.

![FluentBooking Events](/images/integrations/google-calendar-meet-integration-with-fluent-booking/sign-in-google-accounts.webp)

You will see a warning saying, "Google hasn't verified this app". Just click on "Advanced" just like in the screenshot below:

![Advanced Option](/images/integrations/google-calendar-meet-integration-with-fluent-booking/google-warning-one.webp)

Now click on "Go to {yourWebsite.com}" and it will take you to the next step.

![Synchronize Your Booking Events](/images/integrations/google-calendar-meet-integration-with-fluent-booking/google-warning-two.webp)

Lastly, select **all checkboxes** then click on Continue and your integration will be completely done.

![All Checkbox](/images/integrations/google-calendar-meet-integration-with-fluent-booking/sign-in-google-accounts-2-2.webp)

Congrats! You have successfully completed your integration with Google Calendar/Meet. Now Select the **Remote Calendar** and Enable it just like the below:

![Remote Calendar](/images/integrations/google-calendar-meet-integration-with-fluent-booking/booking-types-fluentbooking-1-2.webp)

Your bookings can be found on your Google Calendar, just like in the below screenshot:

![Google Calendar](/images/integrations/google-calendar-meet-integration-with-fluent-booking/fb-calendar.webp)
