---
title: Twilio SMS & WhatsApp Integration with FluentBooking
description: Send booking notifications via SMS and WhatsApp with Twilio. Connect Twilio and configure messaging in FluentBooking.
---

# Twilio/SMS/WhatsApp Integration with FluentBooking

[Twilio](https://www.twilio.com/en-us) is a powerful communication platform that allows messaging and other communication methods into their systems and applications. FluentBooking integrates with Twilio to send notifications via SMS/WhatsApp for booking events.


This guide explains how to integrate Twilio with FluentBooking to send event notifications via SMS and WhatsApp.


## **Configure FluentBooking Integration with Twilio**/SMS


To begin integrating Twilio with FluentBooking, follow these steps:


Start by navigating to the FluentBooking**Settings**and look for the**SMS**by Twiliowhere you can configure Twilio integration.


![](/images/integrations/twilio-integration-with-fluentbooking/new-1.png)


## **Retrieve Twilio Credentials**


To obtain the necessary credentials from Twilio, go to your [Twilio account](https://www.twilio.com/login).


On your Twilio account's homepage, you will find the Twilio Number and the credentials you need. Copy the following information from the**Account Info**section:**Account SID**,**Auth Token**, and**My Twilio phone number**.


![](/images/integrations/twilio-integration-with-fluentbooking/1-4.png)


Paste the copied credentials into the designated fields on the FluentBooking Twilio configuration page. Afterward, click the**Save Settings**button to store this information.


![](/images/integrations/twilio-integration-with-fluentbooking/New-2.png)


## **Setting Up WhatsApp Sandbox for FluentBooking**


To receive notifications via WhatsApp you have set up WhatsApp sandbox in Twilio. Follow the below steps to complete the process.


### **Connect to Sandbox**


In the left-hand sidebar of the Twilio Console, click on**Messaging**. Select**Send a WhatsApp Message**to access the WhatsApp Sandbox setup.


Twilio will provide you with a**WhatsApp number and a code**. These are necessary for sandbox activation.


![](/images/integrations/twilio-integration-with-fluentbooking/1-6.png)


Create a new contact on your personal WhatsApp account using the provided WhatsApp number and send the code you got from Twilio.


![](/images/integrations/twilio-integration-with-fluentbooking/2-6.png)


### **Business Initiated Message**


Now you can send your business template notification message to your WhatsApp number here.


![](/images/integrations/twilio-integration-with-fluentbooking/3-7.png)


### **User-Initiated Conversation**


In this step, reply to the notification from Twilio, which will appear as another**Message**notification in the Twilio WhatsApp Sandbox.


![](/images/integrations/twilio-integration-with-fluentbooking/4-5.png)


### **Wrapping Up**


Once you have completed the previous steps, click**Next step**. You will be guided to a completion page, confirming that the configuration of your WhatsApp Sandbox is done.


![](/images/integrations/twilio-integration-with-fluentbooking/5-3.png)


By following these steps, you will have successfully set up the WhatsApp Sandbox.


## **Setting Up SMS Notifications via Twilio**


Now that you have integrated Twilio, you can set up SMS/WhatsApp notifications for your events. Visit the FluentBooking**Dashboard**and go to the**Calendars**.


You have the flexibility to change the SMS/WhatsApp notification settings for existing bookings or create new event types.


![](/images/integrations/twilio-integration-with-fluentbooking/3-6.png)


You can personalize your SMS/WhatsApp notifications by specifying when to send them and editing the content.


![](/images/integrations/twilio-integration-with-fluentbooking/4-4.png)


If desired, you can select the default**Host Number**or you can give a**Custom Number**to receive notifications and create custom SMS messages. Also, you can include various shortcodes for additional customization, click on the three-dot button to get the shortcodes. Select the**Send**option that you want to receive notification via SMS or WhatsApp and then click the**Save SMS**button.


![](/images/integrations/twilio-integration-with-fluentbooking/new-3-1.png)


With these simple steps, you've successfully integrated Twilio into FluentBooking and configured SMS/WhatsApp notifications for your events. If you have any further questions or need assistance with Twilio Integration, please don't hesitate to [contact us](https://wpmanageninja.com/account/dashboard/).
