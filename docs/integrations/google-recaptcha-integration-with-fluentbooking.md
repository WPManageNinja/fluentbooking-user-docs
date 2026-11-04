---
title: Google reCAPTCHA Integration with FluentBooking
description: Add Google reCAPTCHA v3 or v2 to your booking forms and block spam bookings from bots.
---

# Google reCAPTCHA Integration with FluentBooking

Google reCAPTCHA adds a bot check to every FluentBooking booking form, and FluentBooking blocks any booking that does not pass the check. Your calendars stay free of spam bookings, and real visitors can still book in a few clicks.

In this guide, we'll walk you through creating your reCAPTCHA keys and connecting them to FluentBooking. Let's get started!

::: tip Important
Spam Protection is only available in **FluentBooking Pro**. You will need the [FluentBooking Pro](https://fluentbooking.com/pricing/) plugin to use this feature. You will also need a Google account to create your keys. If you prefer not to use Google, see [Cloudflare Turnstile Integration with FluentBooking](/cloudflare-turnstile-integration-with-fluentbooking).
:::

## Setting Up Google reCAPTCHA Integration

FluentBooking supports two versions of reCAPTCHA. Decide which one you want before you create your keys, because each version uses different keys.

- **Version 3:** Works in the background and gives each visitor a score. The visitor does nothing, and FluentBooking blocks a booking when the score is too low.
- **Version 2:** Shows the "I am not a robot" tickbox on the booking form. The visitor ticks the box before booking.

## Create Google reCAPTCHA Keys

To create your keys, go to the [Google reCAPTCHA admin console](https://www.google.com/recaptcha/admin/) and click the **Plus Icon**.

![Plus icon in the Google reCAPTCHA admin console](/images/integrations/google-recaptcha-integration-with-fluentbooking/plus-icon.webp)

Next, fill in the registration form:

- **Label:** Enter a name that helps you recognize this website later.
- **reCAPTCHA type:** Select **Score based (v3)** for Version 3 or **Challenge (v2)** for Version 2.
- **Domains:** Enter the domain of the website where your booking forms appear.
- **Google Cloud Platform:** Choose a project from the dropdown if you are asked to.

Once you have filled in the form, click the **SUBMIT** button.

![Registering a new site in the Google reCAPTCHA admin console](/images/integrations/google-recaptcha-integration-with-fluentbooking/register-new-site.webp)

Google now shows your keys. Click **COPY SITE KEY** and **COPY SECRET KEY** to copy them, and keep them ready for the next step.

![Copying the Site Key and Secret Key from Google reCAPTCHA](/images/integrations/google-recaptcha-integration-with-fluentbooking/copy-site-secret-key.webp)

## Configuring Google reCAPTCHA With FluentBooking

Now that your keys are ready, connect them to FluentBooking.

### Open the Spam Protection Settings

To open the settings, go to **Settings** in your FluentBooking dashboard and click **Spam Protection** in the left sidebar.

![Spam Protection item in the FluentBooking settings sidebar](/images/integrations/google-recaptcha-integration-with-fluentbooking/spam-protection-menu.webp)

Then, switch on the **Spam Protection** toggle at the top of the card.

![Turning on the Spam Protection toggle](/images/integrations/google-recaptcha-integration-with-fluentbooking/enable-spam-protection.webp)

### Select Google reCAPTCHA

Under **Provider**, select **Google reCAPTCHA**. FluentBooking uses one provider at a time for all of your booking forms.

![Selecting Google reCAPTCHA as the provider](/images/integrations/google-recaptcha-integration-with-fluentbooking/recaptcha-provider.webp)

### Enter Your Keys

Under **reCAPTCHA Version**, select the same version you chose in the Google reCAPTCHA admin console, then paste your keys.

For **Version 3**, configure the following:

- **Site Key:** Paste the Site Key you copied from Google.
- **Secret Key:** Paste the Secret Key you copied from Google.
- **Score Threshold:** Set the lowest score a visitor needs to book. Google scores each visitor from 0.0 to 1.0, and FluentBooking blocks a booking below this score. The default is 0.5.

![Site Key, Secret Key, and Score Threshold fields for reCAPTCHA Version 3](/images/integrations/google-recaptcha-integration-with-fluentbooking/recaptcha-v3-keys.webp)

For **Version 2**, click **Version 2** and paste your **Site Key** and **Secret Key**. This version has no score, so the **Score Threshold** option does not appear.

![Site Key and Secret Key fields for reCAPTCHA Version 2](/images/integrations/google-recaptcha-integration-with-fluentbooking/recaptcha-v2-keys.webp)

### Verify Your Keys

To test your keys, click the **Verify Keys** button. FluentBooking asks Google for a token and checks both keys with it, so your domain must already be on the key. If you use Version 2, a tickbox appears with the message **Tick the box to finish the test.** Tick the box to continue.

When the keys work, the message **Google accepted both keys.** appears next to the button. With Version 3, the message also includes the score Google returned.

![A successful key check after clicking Verify Keys](/images/integrations/google-recaptcha-integration-with-fluentbooking/recaptcha-verify-keys.webp)

### Save Your Settings

If you want logged-in users to book without the check, tick **Skip the check for logged-in users**. Turn this on only if visitors cannot create accounts themselves, because a bot with an account would skip the check too.

Finally, click the **Save Settings** button.

![The Skip the check for logged-in users option and the Save Settings button](/images/integrations/google-recaptcha-integration-with-fluentbooking/recaptcha-save-settings.webp)

## Using Google reCAPTCHA in Your Bookings

Once you save your settings, the check runs on every booking form on your site. You do not have to change anything on your individual events.

With **Version 2**, visitors see the tickbox on the booking form, right above the **Schedule Meeting** button. With **Version 3**, the check runs without asking visitors to do anything.

![The reCAPTCHA Version 2 tickbox on a booking form](/images/integrations/google-recaptcha-integration-with-fluentbooking/recaptcha-v2-booking-form.webp)

The check only applies to new bookings. A visitor rescheduling an existing booking does not have to pass it again.

## Troubleshooting Google reCAPTCHA

- **Verify Keys says FluentBooking could not get a token from Google:** Check the Site Key, and make sure your domain is on the key in the Google reCAPTCHA admin console.
- **Verify Keys says Google refused the Secret Key or the token:** Copy both keys again, and make sure they come from the same reCAPTCHA key and match the version you selected.
- **Verify Keys says Google answered for a different action:** Use a key that is not shared with another form or plugin.
- **A visitor sees "The security check did not load":** The check could not load in the visitor's browser. Ask them to refresh the page or turn off their ad blocker.
- **Real visitors are blocked with "The security check failed":** If you use Version 3, lower the **Score Threshold**.
- **A notice on your dashboard says Google reCAPTCHA refused the secret key:** Open **Spam Protection** and save the correct keys.

::: tip Important
FluentBooking does not stop taking bookings if Google is unreachable or your Secret Key is wrong. Bookings are accepted without the check until Google answers again, so an outage never blocks your visitors. This means a wrong Secret Key leaves your forms unprotected, so always use **Verify Keys** after you change your keys, and act on the dashboard notice if you see it.
:::

For more ways to control who can book and how often, see [Booking Limits & Rules](/how-to-set-booking-limits).
