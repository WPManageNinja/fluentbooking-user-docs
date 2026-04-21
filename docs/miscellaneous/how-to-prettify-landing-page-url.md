---
title: Prettify Landing Page URL
description: Make FluentBooking landing page URLs clean and readable (e.g. /booking/host-slug/). Add code to wp-config.php.
---

# Prettify Landing Page URL

By default, the FluentBooking landing page URL follows a query-based structure, such as:

```
https://fb.pennito.com/?fluent-booking=calendar&host=reachkamrul
```

You can prettify this URL to make it cleaner and more professional, like this:

```
https://fb.pennito.com/booking/reachkamrul/
```
This article will guide you through the simple steps to customize your landing page slug using your site's configuration file.

## Adding the Configuration Code

To change your URL structure, you need to define a landing slug in your WordPress configuration. Follow these steps:

 1. Access your website's root directory using an FTP client or your hosting File Manager.
 2. Locate and open the **wp-config.php** file for editing.
 3. Scroll down to the bottom of the file and find the line that says:
```
/* That's all, stop editing! Happy publishing. */
```
 4. Just before that line, paste the following piece of code:

```php
define('FLUENT_BOOKING_LANDING_SLUG', 'booking');
```
You can see this image below:

![Prettify Landing Page URL](/images/miscellaneous/how-to-prettify-landing-page-url/ssss.webp)

 5. **Save** the changes to your file.

Once you have saved the file, your landing page URLs will automatically update to the new, "pretty" format using the slug you defined (in this case, "booking"). You can replace `'booking'` in the code with any word you prefer, such as `'appointments'` or `'schedule'`.

Congratulations, you have successfully prettified your landing page URLs!