---
title: Prettify Landing Page URL
description: Make FluentBooking landing page URLs clean and readable (e.g. /booking/host-slug/). Add code to wp-config.php.
---

# Prettify Landing Page URL

Usually, the landing page URL comes like this:

```
https://fb.pennito.com/?fluent-booking=calendar&host=reachkamrul
```

You can prettify the URL like the below:

```
https://fb.pennito.com/booking/reachkamrul/
```

To do this, you need to add this piece of code inside your **wp-config.php** file. Just before "`/* That's all, stop editing! Happy publishing. */` "

```php
define('FLUENT_BOOKING_LANDING_SLUG', 'booking');
```
You can see this image below:

![Prettify Landing Page URL](/images/miscellaneous/how-to-prettify-landing-page-url/ssss.webp)
