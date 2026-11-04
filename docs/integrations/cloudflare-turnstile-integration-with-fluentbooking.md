---
title: Cloudflare Turnstile Integration with FluentBooking
description: Add Cloudflare Turnstile to your booking forms and block spam bookings from bots.
---

# Cloudflare Turnstile Integration with FluentBooking

Cloudflare Turnstile adds a bot check to every FluentBooking booking form, and FluentBooking blocks any booking that does not pass the check. Your calendars stay free of spam bookings, and your visitors never have to solve a puzzle.

In this guide, we'll walk you through creating your Turnstile keys and connecting them to FluentBooking. Let's get started!

::: tip Important
Spam Protection is only available in **FluentBooking Pro**. You will need the [FluentBooking Pro](https://fluentbooking.com/pricing/) plugin to use this feature. You will also need a Cloudflare account, which you can create on the [Cloudflare sign-up page](https://dash.cloudflare.com/sign-up). If you prefer to use Google, see [Google reCAPTCHA Integration with FluentBooking](/google-recaptcha-integration-with-fluentbooking).
:::

## Setting Up Cloudflare Turnstile Integration

To connect Turnstile with FluentBooking, you need a **Site Key** and a **Secret Key** from a Turnstile widget. You create the widget in your Cloudflare dashboard, then paste both keys into FluentBooking.

## Create Cloudflare Turnstile Keys

To create your keys, log in to the [Cloudflare dashboard](https://dash.cloudflare.com/?to=/:account/turnstile), go to **Turnstile** from the left-side menu, and click the **Add widget** button.

![Add widget button in the Cloudflare Turnstile dashboard](/images/integrations/cloudflare-turnstile-integration-with-fluentbooking/add-widget-button.webp)

Next, enter a **Name** that helps you recognize this website later, and click **+ Add Hostnames** to register your domain.

![Naming the widget and adding hostnames in Cloudflare Turnstile](/images/integrations/cloudflare-turnstile-integration-with-fluentbooking/add-widget-hostname.webp)

Enter the domain where your booking forms appear in the **Add a Custom Hostname** field and click the **Add** button. Your domain appears under **Selected Hostnames**. Then, click the **Add** button below it.

![Adding a custom hostname to the Turnstile widget](/images/integrations/cloudflare-turnstile-integration-with-fluentbooking/add-hostname.webp)

Now, choose your **Widget Mode** and **Pre-clearance** options, and click the **Create** button.

![Choosing the widget mode and clicking Create](/images/integrations/cloudflare-turnstile-integration-with-fluentbooking/create-widget.webp)

Cloudflare now shows your keys. Copy the **Site Key** and the **Secret Key**, and keep them ready for the next step.

![Copying the Site Key and Secret Key from Cloudflare Turnstile](/images/integrations/cloudflare-turnstile-integration-with-fluentbooking/copy-site-secret-key.webp)

## Configuring Cloudflare Turnstile With FluentBooking

Now that your keys are ready, connect them to FluentBooking.

### Open the Spam Protection Settings

To open the settings, go to **Settings** in your FluentBooking dashboard and click **Spam Protection** in the left sidebar.

![Spam Protection item in the FluentBooking settings sidebar](/images/integrations/cloudflare-turnstile-integration-with-fluentbooking/spam-protection-menu.webp)

Then, switch on the **Spam Protection** toggle at the top of the card.

![Turning on the Spam Protection toggle](/images/integrations/cloudflare-turnstile-integration-with-fluentbooking/enable-spam-protection.webp)

### Select Cloudflare Turnstile

Under **Provider**, select **Cloudflare Turnstile**. FluentBooking uses one provider at a time for all of your booking forms.

![Selecting Cloudflare Turnstile as the provider](/images/integrations/cloudflare-turnstile-integration-with-fluentbooking/turnstile-provider.webp)

### Enter Your Keys

Paste the keys you copied from Cloudflare into the matching fields:

- **Site Key:** Paste the Site Key from your Turnstile widget.
- **Secret Key:** Paste the Secret Key from your Turnstile widget.

![Site Key and Secret Key fields for Cloudflare Turnstile](/images/integrations/cloudflare-turnstile-integration-with-fluentbooking/turnstile-keys.webp)

### Verify Your Keys

To test your keys, click the **Verify Keys** button. FluentBooking asks Cloudflare for a token and checks both keys with it, so your domain must already be on the widget. Complete the Turnstile widget if it asks you to.

When the keys work, the message **Cloudflare accepted both keys.** appears next to the button.

![A successful key check after clicking Verify Keys](/images/integrations/cloudflare-turnstile-integration-with-fluentbooking/turnstile-verify-keys.webp)

### Save Your Settings

If you want logged-in users to book without the check, tick **Skip the check for logged-in users**. Turn this on only if visitors cannot create accounts themselves, because a bot with an account would skip the check too.

Finally, click the **Save Settings** button.

![The Skip the check for logged-in users option and the Save Settings button](/images/integrations/cloudflare-turnstile-integration-with-fluentbooking/turnstile-save-settings.webp)

## Using Cloudflare Turnstile in Your Bookings

Once you save your settings, the check runs on every booking form on your site. You do not have to change anything on your individual events.

Visitors see the Turnstile widget on the booking form, right before they confirm.

![The Cloudflare Turnstile widget on a booking form](/images/integrations/cloudflare-turnstile-integration-with-fluentbooking/turnstile-booking-form.webp)

The check only applies to new bookings. A visitor rescheduling an existing booking does not have to pass it again.

## Troubleshooting Cloudflare Turnstile

- **Verify Keys says FluentBooking could not get a token from Cloudflare:** Check the Site Key, and make sure your domain is on the widget in your Cloudflare dashboard.
- **Verify Keys says Cloudflare refused the Secret Key or the token:** Copy both keys again, and make sure they come from the same Turnstile widget.
- **A visitor sees "The security check did not load":** The check could not load in the visitor's browser. Ask them to refresh the page or turn off their ad blocker.
- **A visitor sees "The security check expired":** The token timed out while the form was open. Ask them to try again.
- **A notice on your dashboard says Cloudflare Turnstile refused the secret key:** Open **Spam Protection** and save the correct keys.

::: tip Important
FluentBooking does not stop taking bookings if Cloudflare is unreachable or your Secret Key is wrong. Bookings are accepted without the check until Cloudflare answers again, so an outage never blocks your visitors. This means a wrong Secret Key leaves your forms unprotected, so always use **Verify Keys** after you change your keys, and act on the dashboard notice if you see it.
:::

For more ways to control who can book and how often, see [Booking Limits & Rules](/how-to-set-booking-limits).
