---
title: Changelog
description: Latest FluentBooking updates—new features, bug fixes, and improvements. Stay up to date with the changelog.
---

# Changelog

Stay updated with the latest improvements, new features, bug fixes, and performance enhancements in FluentBooking.

## FluentBooking v2.1.0

*Released on May 12, 2026*

::: code-group

```markdown [✨ Newly Added]
• Introduced: Bookings CSV Export with Filter Hooks
• Added: Persist Author and Status Filters in Local Storage
• Added: FluentCart Slot Icon and Unified Event Price Source
• Added: Uploaded File Cleanup on Booking Deletion
• Added: Recurring Default Occurrence Filter
• Added: No-Show Option to FluentCRM Event Trigger Feed
• Added: Disable Start Date Option in Fluent Boards Integration
• Added: PHP 8.4 Compatibility Support
```

```markdown [🚀 Improvements]
• Improved: Scheduler Performance with Batched Writes and Bounded Sweeps
• Improved: Aggregate SQL for Report Stats and Widget Numbers
• Improved: Batched User Lookups in Team and Zoom Listings
• Improved: Calendar Deeplink Body Renders with Proper Line Breaks
```

```markdown [🔒 Security]
• Security: Authorization Hardened Across Calendars, Events and Integrations
• Security: OAuth State Validated Against Current User
• Security: Ownership Proof for File Delete
• Security: ICS Description and Location Output Escaped Against Injection
```

```markdown [🐞 Bug fixes]
• Fixed: Host CSV Export Column Mismatch and Null Transaction Crash
• Fixed: Apple Calendar Event Renders with Host Timezone
• Fixed: Outlook Add-to-Calendar Wrong Time and Missing Details
• Fixed: FluentCart Checkout Split First/Last Name Prefill
• Fixed: FluentCart Checkout Conflict with Woo Flow
• Fixed: Stripe Sub-cent Truncation and Coupon Amount Conversion
• Fixed: Date Field Not Selectable on iPhone
• Fixed: Webhook Selected Fields Missing Source URL Option
• Fixed: System-Expired Pending Bookings Fire auto_cancelled Hook
• Fixed: Report Next-Meetings Ordering and Per-Group Identity
• Fixed: No-Availability Flash on Auto-Advancing to Next Month
• Fixed: Slot Booking View Fallthrough to Host Page
• Fixed: Multi-Time, Multi-Guest, Cart and Calendar Null Safety
• Fixed: Imported Calendar Required Fields Validation
• Fixed: Integration Enabled Flag Preserved on Save
• Fixed: Minor Dark Mode and Responsive Issue
```

:::


## FluentBooking v2.0.05

*Released on February 17, 2026*

::: code-group

```markdown [✨ Newly Added]
• Added: File Upload Option in Admin Booking
• Added: Rate Limit in Meeting Scheduling
```

```markdown [🐞 Bug fixes]
• Fixed: Data Import/Export Security Vulnerability
• Fixed: User Phone and Address Security Vulnerability
• Fixed: Multi-field Not Showing in Manual Booking
• Fixed: Coupon Issue with Multi-Duration Events
• Fixed: Event Time Not Showing in One-off Event Landing
• Fixed: Cancelled Booking Report
```

```markdown [🚀 Improvements]
• Improved: Minor UI-UX and Dark Mode
```

:::


## FluentBooking v2.0.01

*Released on January 12, 2026*

::: code-group

```markdown [✨ Newly Added]
• Added: All Bookings Shortcode
• Added: Recurring Booking Support in Admin Booking
```

```markdown [🚀 Improvements]
• Improved: Dark Mode and Overall Responsiveness
```

```markdown [🐞 Bug fixes]
• Fixed: Calendar Shortcode Showing Disabled Events
• Fixed: Paid Events Not Working in Admin Booking
• Fixed: Recurring Booking Issue with Group Events
• Fixed: Group Booking Status not Updating
• Fixed: Date Field Formatting Issue
```

:::


## FluentBooking v2.0.0

*Released on January 1, 2026*

::: code-group

```markdown [✨ Newly Added]
• Introduced: Recurring Event
• Introduced: Admin Panel Dark Mode
• Added: Super Admin User Capability
• Added: Require All Occurrence Feature
• Added: Support for Paid Bookings as Free Using 100% Coupon
```

```markdown [🚀 Improvements]
• Improved: Overall UI/UX and Responsiveness
```

```markdown [🐞 Bug fixes]
• Fixed: Issue Selecting FluentCart Private Products
• Fixed: Florida's New Phone Area Code Validation Issue
• Fixed: Custom Date Formatting Issue
• Fixed: Order Item Details not Showing in Confirmation
```

:::


## FluentBooking v1.10.01

*Released on November 28, 2025*

::: code-group

```markdown [🐞 Bug fixes]
• Hotfix: UTM Content Not Found Issue
```

:::


## FluentBooking v1.10.0

*Released on November 27, 2025*

::: code-group

```markdown [✨ Newly Added]
• Introduced: Monetize Bookings with FluentCart
• Introduced: Embed Calendar Feature
• Added: Host Calendar Share Option
• Added: Internal Note in Group Meetings
• Added: Missing Translation Strings
• Added: Stripe Refund Option in Calendar View
• Added: IP Address in Booking Details
• Added: Onboarding with Recommended Features
• Added: Hook to Add Booking Column in CRM Contact
• Added: FluentCart and SMTP in Global Modules
```

```markdown [🐞 Bug fixes]
• Fixed: Issue with Advanced Date Format
• Fixed: Advanced Settings Not Saving in Import Calendar
• Fixed: Calendar Import Permission Check Security Issue
• Fixed: Offline Payment Auto Cancellation Issue with Requires Confirmation
```

:::


## FluentBooking v1.9.11

*Released on September 8, 2025*

::: code-group

```markdown [🐞 Bug fixes]
• Hotfix: Fixed Issue with UTM Content
```

:::


## FluentBooking v1.9.10

*Released on September 4, 2025*

::: code-group

```markdown [✨ Newly Added]
• Added: Option to Delete Completed Bookings
• Added: UTM Content Support in Booking Params
• Added: UTM Tracking Fields Mapping with CRM
• Added: Auto-Skip to Next Month if No Availability
```

```markdown [🐞 Bug fixes]
• Fixed: One-off Event UI Issue
• Fixed: Availability Sorting Issue
• Fixed: Deleted User Not Removed from Team
• Fixed: Missing First Slot in First Month (New York)
• Fixed: Coupon Usage Not Updating on Auto-Cancelled Bookings
• Fixed: Custom Field Issue with Special Characters in Labels
```

:::


## FluentBooking v1.9.0

*Released on August 28, 2025*

::: code-group

```markdown [✨ Newly Added]
• Introduced Coupon Module
• Introduced UTM Tracking for Bookings
• Redesigned Payment Configuration
• Added: Currency Format and Position Settings
• Added: Total Guest Count Shortcode
• Added: Previous Booking Time Shortcode for Rescheduled Booking
• Added: Reschedule & Rejected Event Triggers for CRM Integration
• Added: Support for Multiple Calendar Blocks on Same Page
• Added: Multiple Team Blocks Support on Same Page
• Added: Hook for Paginations
• Added: Default Booking Filter Hook
• Added: Spanish Language Files for FluentBookingPro
• Added: Missing Translations
• Applied Time Format in Manual Booking
```

```markdown [🐞 Bug fixes]
• Resolved: Multi Booking Issue with Remote Calendars
• Fixed: Temp File for ICS Attachment Not Deleting
• Fixed: Some Country Flags Not Displaying in Phone Field
• Fixed: Issue with Missing Slots for Certain Availability Periods
• Fixed: Issue with Stripe Refund
• Fixed: Multiple Reminder Email for Group Event
• Fixed: Date Format Issue with Shortcode
• Fixed: Custom Date Field Format Issue
• Fixed: Email Summary Sending Twice Issue
```

:::


## FluentBooking v1.8.0

*Released on April 24, 2025*

::: code-group

```markdown [✨ Newly Added]
• New: Introduced Calendar View
```

```markdown [🚀 Improvements]
• Resolved Text Domain Warning
• Resolved Issue with FluentForm Field Mapping
```

```markdown [🐞 Bug fixes]
• Fixed: Last Day of the Month Not Displaying Issue
• Fixed: Outlook Holiday Not Syncing Issue
• Fixed: Delete Calendar/Event Permission Issue
• Fixed: Last Name Not Generating for Additional Guests in Group Events
• Fixed: Offline Payment Not Displaying When Stripe or PayPal Are Disabled
```

:::


## FluentBooking v1.7.2

*Released on April 9, 2025*

::: code-group

```markdown [🚀 Improvements]
• Security: Updated Framework Library
```

```markdown [🐞 Bug fixes]
• Fixed: Offline Payment Status Not Updating Issue
```

:::


## FluentBooking v1.7.0

*Released on April 8, 2025*

::: code-group

```markdown [✨ Newly Added]
• Added: Offline Payment Option
• Added: Team Event Filter in All Meetings
• Added: Remove Calendar and Feature Image Buttons
• Added: Support for Other Languages in Add Question
• Added: Hooks to Update Location Details and Event Title Heading Tag
• Added: Missing Translations
• Sync Apple Calendar Event Travel Time
• Updated Host for Round Robin Meeting Rescheduling
```

```markdown [🐞 Bug fixes]
• Fixed: Online Meeting URL Not Showing in Manual Bookings
• Fixed: Add Calendar UI Issue for RTL Layouts
• Fixed: Fluent Forms Calendar UI Issue with Conditional Logic
• Fixed: Calendar UI Issue in Conversational Forms
• Fixed: Wrong Admin URL in Shortcode Issue
• Resolved: Multi-Booking Issue with WooCommerce
• Resolved: Melbourne Timezone Offset Issue
• Resolved: Payment Not Paid Issue for Decimal Amounts
• Resolved: Duplicate Event Creation Issue with Google Calendar
```

:::


## FluentBooking v1.6.0

*Released on January 1, 2025*

::: code-group

```markdown [✨ Newly Added]
• Collective Event Type enabling many-to-one meetings
• New Terms & Conditions field for better compliance
• Enhanced calendar features with HTML support in event descriptions
• Flexible date field controls with min/max date options
• Hidden fields now available in link generation
• Custom event time formats
• New hook for back button customization
• Additional translation strings
• Manual booking intervals updated to 5-minute increments
```

```markdown [🚀 Improvements]
• Improved guest booking information capture
• All booking times now display in the local timezone
• Improved Outlook calendar syncing
• Enhanced booking activity descriptions
• Smarter sorting for completed and cancelled bookings
• Improved mobile rendering for conversational forms
• Better UI/UX across the platform
```

```markdown [🐞 Bug fixes]
• Resolved: Rescheduling and Twilio connection issues
• Fixed: NextCloud calendar event creation
• Resolved: DST checking for Dublin timezone
• Fixed: Various calendar permission and display issues
• Addressed: ICS file attachment problems
```

:::


## FluentBooking v1.5.25

*Released on October 22, 2024*

::: code-group

```markdown [✨ Newly Added]
• Added: Italian and German Language
• Added: Missing Translations
```

```markdown [🐞 Bug fixes]
• Resolved: Response Not Valid Error
• Fixed: Reply To Email Not Pulling Issue
• Fixed: Manual Booking Issue with Number Field
• Fixed: Selected Events Not Displaying in Elementor Settings
• Fixed: Calendar Block Not Scrolling to Event
```

:::


## FluentBooking v1.5.24

*Released on October 4, 2024*

::: code-group

```markdown [🐞 Bug fixes]
• Hotfix: Resolved Issue with Multiple Bookings Across Different Months
```

:::


## FluentBooking v1.5.23

*Released on October 4, 2024*

::: code-group

```markdown [🐞 Bug fixes]
• Hotfix: Resolved Minor UI Styling Glitches
```

:::


## FluentBooking v1.5.22

*Released on October 3, 2024*

::: code-group

```markdown [✨ Newly Added]
• Elementor Integration Available for Free Version
• Added: File Input Field in Booking Question
• Added: Hidden Input Field in Booking Question
• Updated: Checkbox Field Value to Yes/No
• Updated: Heading h1, h2 to h3, h4 for Fluent Form
```

```markdown [🐞 Bug fixes]
• Fixed: About Field Always Showing in Manual Booking
• Fixed: Empty Title Rendering in Booking Lists
• Fixed: Slot Overlap Issue When using Custom Duration
• Fixed: Integration Not Checking Event Trigger Issue
• Fixed: Expired Calendar Showing Issue in Elementor
```

:::


## FluentBooking v1.5.20

*Released on August 23, 2024*

::: code-group

```markdown [✨ Newly Added]
• New: Multiple Bookings at Once
• New: Submit Button Text Changing Option
• Added: Duration in Zoom Meeting
• Added: Payment Info In Calendar Event Lists
• Added: Location and Description in Calendar Block
• New: Reorder Calendar Event
• New: Calendar Import/Export
• New: Book Multiple Spots at Once
• New: Generate Booking Link
• Added: Fluent Board Task to CRM Contact
• Formatted: Custom Duration
```

```markdown [🚀 Improvements]
• Improved: Lots of UI/UX
```

```markdown [🐞 Bug fixes]
• Fixed: Nextcloud Calendar Sync Issue
• Fixed: Group Booking Cancellation Issue with Google Calendar
• Fixed: SVG Not Showing in Email
• Fixed: Deleted Event's Calendar Not Appearing Issue
```

:::


## FluentBooking v1.5.11

*Released on August 2, 2024*

::: code-group

```markdown [✨ Newly Added]
• Added: Location Info in Host View
• Added: Description in One-off Group Event
• Improved: Conference Location Selection
• Updated: Payment Methods UI
```

```markdown [🐞 Bug fixes]
• Fixed: Holiday Not Syncing Issue
• Fixed: Booked Group Slot Not Disappearing on Unavailable Dates
```

:::


## FluentBooking v1.5.0

*Released on July 16, 2024*

::: code-group

```markdown [✨ Newly Added]
• New: Implemented Single Event Feature (One-to-One/Group)
• New: Front-end Panel
• Added: Clone Option of Email, SMS, Webhook and Integration Settings
• Added: Fluent Board Due Date based Meeting Date Option
• Added: Filter by Calendar Types
• Added: Calendar Query Parameter - Time
• Added: Duration Labels According to the Duration Hook
```

```markdown [🚀 Improvements]
• Improved: Round Robin Scheduling
• Lots of UI-UX Improvements
```

```markdown [🐞 Bug fixes]
• Fixed: Round Robin Day Light Saving Issue
• Fixed: Issue with Elementor Integration
```

:::


## FluentBooking v1.4.3

*Released on June 16, 2024*

::: code-group

```markdown [✨ Newly Added]
• Assign: Other Team Members to Team Events
```

```markdown [🐞 Bug fixes]
• Fixed: Conflict With WP Fusion
```

:::


## FluentBooking v1.4.2

*Released on June 14, 2024*

::: code-group

```markdown [✨ Newly Added]
• New: FluentBoards Integration
• New: Elementor Integration
• New: Fluent Booking Calendar Shortcode
• New: Reschedule and Cancel Event Triggers in Webhook Feeds
• Assign: Team Member Option When Creating Team Meeting
• Added: Calendar Event Search Option
• Added: Full RTL Support
• Applied: Redirection Url in Woo Booking
• Applied: Jump to the Next Available Slot Within Date Ranges
```

```markdown [🐞 Bug fixes]
• Fixed: Round Robin Issue with Unavailable Date
• Fixed: Question Fields Not Moving Issue
• Fixed: Require Confirmation Not Working With Fluent Forms
```

:::


## FluentBooking v1.4.1

*Released on May 28, 2024*

::: code-group

```markdown [✨ Newly Added]
• Added: Attendees can not cancel/reschedule before the meeting starts
• Added: New field - Booking Title with smartcodes option
• Added: Permission denied message input field
• Added: Cancellation and reschedule input fields
• Added: Missing textarea field in manual booking
• Added: Default duration of multi-duration event in URL parameters
```

```markdown [🚀 Improvements]
• Improved: Logged-in user bookings responsiveness
```

```markdown [🐞 Bug fixes]
• Fixed: Pending bookings not showing for admins
• Fixed: Approval email sending issue with WooCommerce
• Fixed: Summary report day not showing
• Fixed: Team block missing description issue
```

:::


## FluentBooking v1.4.0

*Released on May 20, 2024*

::: code-group

```markdown [✨ Newly Added]
• New: Gutenberg Block - Logged-in user bookings
• New: Smartcode - Add booking to calendar
• Implemented: Booking confirmation requires a feature
• Google Calendar additional settings
• Clone meetings from other hosts
• New: Smartcode - ability to format date field
• Added: ICS file attachment option
• Added: Invitee email edit option for admin
• Added: Option to use custom phone field for sending SMS
• Added: Help message field in custom fields
• Added: Format field for date
• Updated: Group event title for remote group events
• Added: Missing translation strings to improve UI
```

```markdown [🐞 Bug fixes]
• Resolved: Nextcloud Calendar sync issue
• Fixed: Issue with event details for long descriptions
• Fixed: Email sent from Fluent SMTP instead of the default From address of FluentBooking
• Fixed: Meeting rescheduled permission issue for admin
• Corrected: Display of available days for rescheduled group events syncing with Google Calendar
• Fixed: Stripe payment issue when the event was set in other languages
• Resolved: Availability issues for the booking calendar
• Fixed: Gutenberg block's primary color not reflecting across the booking calendar
```

:::


## FluentBooking v1.3.1

*Released on April 10, 2024*

::: code-group

```markdown [✨ Newly Added]
• Displayed: Woo product price on the booking page
```

```markdown [🐞 Bug fixes]
• Fixed: Stripe payment issue with shortcode
• Fixed: Gutenberg block's back-to-team button issue
• Fixed: Minor typo
```

:::


## FluentBooking v1.3.0

*Released on April 3, 2024*

::: code-group

```markdown [✨ Newly Added]
• New: Gutenberg Block - FluentBooking Calendar
• Added: Multi-payment Option Based on Meeting Duration
• Implemented: PayPal Integration
• Added: Stripe Refund Option for Admin
• Mark as Paid Option for Admin
• Custom Redirect URL on Paid Bookings
• Catching Time in Apple Calendar & NextCloud Calendar
• Added: New Shortcode - Full Start and End Date Time
• Added: Booking Rescheduled Trigger
```

```markdown [🚀 Improvements]
• Resolved: Daylight Saving Time Issue with Europe Timezones
• Improved: UI
```

```markdown [🐞 Bug fixes]
• Fixed: Group Event Double Slot Appears Issue
• Fixed: Availability Permission Issue
```

:::


## FluentBooking v1.2.63

*Released on February 26, 2024*

::: code-group

```markdown [🐞 Bug fixes]
• Daylight saving time fix
• Fixed: Issues with multi-hour slot availability
• Resolved: Minor UI issues
```

:::


## FluentBooking v1.2.62

*Released on February 10, 2024*

::: code-group

```markdown [🐞 Bug fixes]
• Reverting: Daylight Saving Time Fix
```

:::


## FluentBooking v1.2.61

*Released on February 9, 2024*

::: code-group

```markdown [✨ Newly Added]
• Implemented: Timezone Lock Feature
```

```markdown [🐞 Bug fixes]
• Fixed: Issue With Daylight Saving Time
• Fixed: Booking Summary Email Issue
```

:::


## FluentBooking v1.2.60

*Released on February 6, 2024*

::: code-group

```markdown [✨ Newly Added]
• Added: Booking type filter in booking listing
• Allow: Author to update timezone
• Added: Event slug update ability
• Added: No availability behavior on schedule meeting
• Displayed: Error messages on the booking form
```

```markdown [🚀 Improvements]
• Improved: Frontend accessibility - achieve 100% score in lighthouse report
• RTL support
• Improved: All cleanups
• Improved: UI-UX
```

```markdown [🐞 Bug fixes]
• Fixed: Booking date mismatch issue
• Fixed: Cutout time issue of availabilities
```

:::


## FluentBooking v1.2.52

*Released on January 26, 2024*

::: code-group

```markdown [✨ Newly Added]
• Added: Calendar Avatar on Round Robin
• Added: A few missing translation
• Updated: Buffer Time by host
```

```markdown [🐞 Bug fixes]
• Fixed: Fluent booking menu not showing issue
• Improved: Host/Team Member Searching
• Fixed: Date Override issue
• Fixed: Conference options not coming in new event location issue
• Fixed: Issue with deleted Availability
• Fixed: Issue with deleted Calendar Event
• Fixed: Double event created issue
```

:::


## FluentBooking v1.2.51

*Released on January 17, 2024*

::: code-group

```markdown [🐞 Bug fixes]
• Fixed: Manual Booking Issue with Google Calendar
• Fixed: Calendar Event Permission Issue
```

:::


## FluentBooking v1.2.50

*Released on January 15, 2024*

::: code-group

```markdown [✨ Newly Added]
• Arrange: Round Robin Meetings
• Invite: Additional Guests Field
• Multi-select Field Form Field
• Custom Date Field in Form Builder
```

```markdown [🚀 Improvements]
• Internal Improvements & Bug Fixes
```

:::


## FluentBooking v1.2.41

*Released on December 14, 2023*

::: code-group

```markdown [✨ Newly Added]
• Nextcloud Calendar Integration
• Redirection Option After Booking
• New: Custom Field Types in Question Settings
• Multiple Meeting Duration
• Manual Booking Add from Admin Panel
```

```markdown [🐞 Bug fixes]
• Fixed: Issues with Fluent Forms Integration
• Other Improvements & Bug Fixes
```

:::


## FluentBooking v1.2.3

*Released on November 24, 2023*

::: code-group

```markdown [✨ Newly Added]
• Added: Privacy Flag for Google Calendar Integration
• Added: Padding to Fluent Forms Block
```

```markdown [🐞 Bug fixes]
• Fixed: Integration Settings
• Fix: Apple Calendar Integration Issue
```

:::


## FluentBooking v1.2.2

*Released on November 24, 2023*

::: code-group

```markdown [✨ Newly Added]
• Apple Calendar Integration
• Microsoft Teams Support
• One-click Google Calendar Integration
• Dark Mode
• Control: Booking Frequency and Duration
• Reschedule or Cancel Group Meeting
• Added: Default Country for Phone Field
```

```markdown [🐞 Bug fixes]
• Improvements and Bug Fixes
```

:::


## FluentBooking v1.2.1

*Released on November 14, 2023*

::: code-group

```markdown [✨ Newly Added]
• Added: Validation for Location Fields
```

```markdown [🐞 Bug fixes]
• Fixed: Location issue for Google Meet
```

:::


## FluentBooking v1.2.0

*Released on November 14, 2023*

::: code-group

```markdown [✨ Newly Added]
• Added: Outlook integration
• Added: Team Block
• Ajax-based Landing Page
• More translation strings added
• Added: Pretty URL for Landing Pages
```

```markdown [🐞 Bug fixes]
• Fixed: All day and recurring events for Google Calendar sync issue
```

:::


## FluentBooking v1.1.0

*Released on November 2, 2023*

::: code-group

```markdown [✨ Newly Added]
• Added: WooCommerce Checkout Integration
• Added: Deep integration with FluentCRM
• Personalization shortcodes for FluentCRM Automation
• Fluent Forms Conversational Form support
• One-Click Clone Calendar Events
• Added: Missing translation strings
```

```markdown [🐞 Bug fixes]
• All reported bugs were fixed & other improvements
```

:::


## FluentBooking v1.0.7

*Released on October 31, 2023*

::: code-group

```markdown [✨ Newly Added]
• Added: Missing Translation Strings
• Added: French Translation File (Thanks to Ricardo Da Silva) - 85% Coverage
```

```markdown [🐞 Bug fixes]
• Fixed: Timezone issue for end of the month/year
• Responsive Issue fixed
```

:::


## FluentBooking v1.0.6

*Released on October 26, 2023*

::: code-group

```markdown [✨ Newly Added]
• Twilio Integration for SMS & WhatsApp Notification
• Added: Buffer Time before & after the booking slots
• Translation-Ready - 100% string coverage for translation
• Added: Booking delete option for Admin
• Added: Booking Reschedule option for Admin
• Show message if Google Calendar API got disconnected
• Added: Support for past recurring events for Google Calendars Sync
```

```markdown [🚀 Improvements]
• Fluent Forms Integration Improved
• UI Improvements
```

:::


## FluentBooking v1.0.5

*Released on October 22, 2023*

::: code-group

```markdown [🐞 Bug fixes]
• Fix: Google Access Token issue
```

:::


## FluentBooking v1.0.3

*Released on October 20, 2023*

::: code-group

```markdown [✨ Newly Added]
• Added: Email Notification on Booking Reschedule
• Added: Time Format Pre-Selected based on settings
• Added: Current date highlighted on the calendar
```

```markdown [🚀 Improvements]
• Minor UI Improvements
```

```markdown [🐞 Bug fixes]
• Fixed: Zoom Link issue with Google Calendar
```

:::


## FluentBooking v1.0.1

*Released on October 19, 2023*

::: code-group

```markdown [✨ Newly Added]
• Added: External Location details like Zoom / Custom Address / Phone Number to Google Calendar
• Added: Caching time settings for Google Calendar event conflict check
• Added: Block Options to customize the calendar & booking form
• Set default 12h / 24h time format from settings
```

```markdown [🐞 Bug fixes]
• Fixed: Multiple Locations selection issue
• Fixed: Timezone issue on Availability
• Fixed: Reminder Email Notification
```

:::


## FluentBooking v1.0.0

*Released on October 18, 2023*

::: code-group

```markdown [✨ Newly Added]
• Initial release
```

:::
