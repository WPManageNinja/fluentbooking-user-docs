---
title: Reschedule a Booking
description: Move a booking to a new date and time without leaving the FluentBooking admin. Pick a slot, add a reason, and save.
---

# Reschedule a Booking

When an attendee requests a new meeting time, there is no need to make them go through the public booking process again. FluentBooking allows hosts and site administrators to reschedule appointments directly from the WordPress admin dashboard.

::: tip Important
This page assumes you already know how to find a booking — see [View All Bookings](/booking-details).
:::

## Accessing the Reschedule Option

1. Navigate to your **FluentBooking** dashboard and click on **Bookings** from the top menu bar.   
2. Locate the specific appointment you need to update from your bookings list.   
3. Click to open the detailed booking view (e.g., Growth Strategy Discovery Call).   
4. In the top-right corner of the dark meeting header banner, click the **three-dot** action menu **(⋮)**.
5. Select **Reschedule** from the dropdown menu options.

![Reschedule Option](/images/bookings/how-to-reschedule-a-booking/reschedule-option-1.webp)

## Configuring the New Booking Schedule

Once selected, the **Reschedule Booking** popup modal will appear on your screen. It will display an informational banner indicating the current scheduled slot.

Review and update the following settings:

 * **Invitee Details:** The modal will display the invitee's name and contact email address for verification.  
 * **Attendee's Timezone:** Use the dropdown menu to adjust or verify the attendee's active timezone. The dialog also indicates the current date and time in that specific timezone for easy reference.   
 * **Ignore Availability:** **Check** this box if you need to schedule an appointment outside the host's standard working hours or preset calendar limits.   
 * **Select Date:** Enter or pick the new date for the appointment using the date picker field.   
 * **Select Time:** Choose the new start time slot from the dropdown list.   
 * **Rescheduling Reason (Optional):** Enter an explanation for the schedule change in the text field. This note can be shared directly with the attendee via automated reschedule notifications.

## Confirming the Reschedule

1. Double-check the updated date, time, and timezone.   
2. Click the dark **Reschedule** button at the bottom right of the modal to confirm.   
3. The booking will update immediately, the activity timeline will log the changes, and automated rescheduling confirmation emails will be dispatched to the respective parties. 

![Reschedule Modal](/images/bookings/how-to-reschedule-a-booking/reschedule-modal-2.webp)

## Who Can Reschedule a Booking

Rescheduling from the admin follows the same permission used to create a booking. If a team member has **Read & Write Access to All Bookings** (or manages their own calendar's bookings), they can reschedule those bookings without any separate setting. See [Team Permissions & Access](/host-user-access-management) to review or change what a team member can do.

To cancel a booking instead of moving it, see [Cancel a Booking](/how-to-cancel-a-booking).
