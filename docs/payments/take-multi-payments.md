---
title: Multiple Pricing Options
description: Charge different prices by meeting duration. Let clients choose session length and pay accordingly in FluentBooking.
---

# Multiple Pricing Options

FluentBooking allows you to charge multiple pricing options for a booking based on the meeting duration, ensuring you get paid fairly for your time. It also gives your clients the flexibility to choose their preferred session length of a booking service.

This article will guide you through the process of setting up the **Multi-Payments** feature in the **Booking Event**.

::: tip Important
Before configuring multiple pricing options, make sure the global [Payment Module](/how-to-take-payment-in-bookings#enable-the-global-payment-module) is enabled and at least one payment platform (Stripe, PayPal, or Offline) is configured.
:::

## Enable Payment Modules

Before starting the process of adding the multi-payment feature in booking services, make sure that your payment modules are enabled.

Plus, to collect payments through booking, ensure the payment platforms are configured with FluentBooking as well.

To learn more detailed guidelines about **Enabling Payment Modules** and **Configuring Payment Platforms**, refer to the following documentation.

- [Stripe Integration with FluentBooking](/stripe-integration-with-fluent-booking)
- [PayPal Integration with FluentBooking](/paypal-integration-with-fluentbooking)

## Set up Multi-Payments in a Booking Event

First, go to **Calendars** from the **WordPress Left Sidebar** or the **FluentBooking Navbar**, select the **Booking Event** where you want to add the multi-payment option, and click the **Edit** button on the right.

> If you do not have any existing booking **Event**, read this [Documentation](/how-to-create-new-events) to create a new one. Plus, to create a new booking **Calendar**, read this [Documentation](/how-to-create-a-new-host).

![Set up Multi-Payments in a Booking Event](/images/payments/take-multi-payments/1.-open-desired-calender-scaled.webp)

Once you are on your desired booking event, open the **Event Details** option from the left menu, scroll down to **Meeting Duration**, and turn on the **Allow Attendee to select duration** toggle.

![Enable Multiple Meeting Duration](/images/payments/take-multi-payments/2.-enable-multiple-meeting-duration-scaled.webp)

Now, you will get two options for setting up the Meeting Duration. These are:

- **Available Durations**: Using this option, you can select your desired time sessions for your booking from the dropdown list by clicking the **Arrow Icon** on the right side. For example, I set three different time durations (35, 45, and 60 minutes).

- **Default Durations**: Here, you can set one time duration as a default duration (i.e., when the clients will open the booking link, the default duration will automatically be selected, which they can change later if needed).

Once you complete the setup, click the **Save Changes** button to save all your changes.

![Setting up the Meeting Duration](/images/payments/take-multi-payments/3.-save-changes--scaled.webp)

### Configure Payment Settings

Now, go to **Payment Settings** option in the left menu, and check the “**Enable this event as Paid and collect payment on booking**” box.

![Configure Payment Settings](/images/payments/take-multi-payments/4.-enable-payment-settings-scaled.webp)

Then, check the “**Enable multiple payment options based on duration**” box.

![Enable multiple payment options based on duration](/images/payments/take-multi-payments/5.-enable-mutiple-payment-options-based-on-meeting-duration-scaled.webp)

Finally, the option will appear to set up multi-payments.

- **Checkout Method**: Here, you can select the Payment Method through which you want to collect the payments from your client. For example, I selected Stripe as the payment method.

- **Booking Payment Items**: Here, you can set different prices for each time duration to the corresponding fields under the **Amount** column.

Once you are done, click the **Save Changes** button, and the multi-payments feature will be added to the booking event.

Additionally, click the **Share** button to view the functionalities of this multi-payment feature.

![Multi-payment](/images/payments/take-multi-payments/6.-setup-multiple-payments-and-share-scaled.webp)

### Preview of Multi-Payment Feature

Once you click the **Share** button, you will get four options to display your booking events on the front-end of the WordPress Site. To learn more about this, read this [Documentation](/add-booking-form-to-site).

For example, I use the **Landing Page** option to show you the preview of this feature. To learn more about the **Landing Page**, read this [Documentation](/how-to-enable-landing-page-for-your-host).

![Multi-Payment Feature](/images/payments/take-multi-payments/7.-landing-page-and-view-button.webp)

Finally, you can see in the gif below that the event offers three different booking options with their set pricing based on meeting duration.

![Event Preview](/images/payments/take-multi-payments/8.-calender-preview-gif.gif)

Once you book the schedule and complete the process, you will see a confirmation message with the joining link of the booking as shown in the screenshot below.

Also, you will get the same booking information in your email through which you booked the event.

![Meeting Schedule Confirmation message](/images/payments/take-multi-payments/9.-metting-schduled-confirmation-message.webp)
