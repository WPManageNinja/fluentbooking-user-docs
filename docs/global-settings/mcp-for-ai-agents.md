---
title: MCP for AI Agents
description: Connect FluentBooking to Claude, Cursor, and other AI clients with the built-in MCP server.
---

# MCP for AI Agents

FluentBooking includes a built-in **MCP (Model Context Protocol)** server that connects your booking data to AI clients like **Claude Code, Claude Desktop, Cursor, and OpenAI Codex**. Once it is set up, your AI assistant can look up bookings, answer availability questions, book an appointment on behalf of an attendee, work out why an event type is showing no slots, and run booking reports — all inside an ordinary conversation.

Think of MCP as a bridge between your AI client and FluentBooking. Instead of opening the admin and clicking around, the AI calls the same code paths you would, through a secure endpoint on your own site. There is no third-party proxy, no extra service to host, and no API keys to manage outside WordPress.

In this guide, we'll walk you through enabling the server, installing the adapter, connecting your AI client, and understanding exactly what the agent can and cannot do. Let's get started!

::: tip Important
The MCP server ships **switched off**. It also needs the **FluentHub** adapter plugin, which you can install in one click from the settings page, on **WordPress 6.9 or newer**. Only site administrators can change these settings.
:::

## Step 1: Enable the MCP Server

To get started, navigate to FluentBooking and click on **Settings** in the navbar. From the left sidebar, select **MCP for AI Agents**. Everything you need lives on this one page.

Switch on the **Enable the FluentBooking MCP server** toggle. The badge in the top-right corner tells you where the server stands at a glance:

- **Disabled** — the server is switched off and the endpoint does not respond.
- **Adapter Required** — the server is on, but the MCP adapter is not installed yet.
- **Connected** — the server is on, the adapter is active, and your tools are live.

![MCP for AI Agents settings page with the Disabled badge and the enable toggle](/images/global-settings/mcp-for-ai-agents/fluentbooking-mcp-1.webp)

::: tip Important
A connected client authenticates as **one WordPress user** and inherits that account's FluentBooking permissions — no more, no less. Within those permissions it can read attendee names, email addresses, phone numbers, and booking form answers, and it can create, reschedule, and cancel bookings. Connect the account you would be comfortable handing those actions to.
:::

If you ever want to cut off every connected AI client at once, switch this toggle back off. The endpoint stops responding to MCP requests immediately.

## Step 2: Install FluentHub

FluentBooking ships the AI agent tools, but they only become available once an MCP adapter is installed and active. **FluentHub** bundles that adapter, and you can install it without leaving the page.

In the **Status** panel, click the **Install FluentHub** button. WordPress installs and activates the plugin in the background, then the page refreshes into the connected state.

![Status panel showing the Adapter Required badge and the Install FluentHub button](/images/global-settings/mcp-for-ai-agents/fluentbooking-mcp-2.webp)

::: tip Important
Prefer to install it yourself? Download FluentHub from [https://static.wpmanageninja.com/fluent-toolkit.zip](https://static.wpmanageninja.com/fluent-toolkit.zip) and upload the ZIP via **Plugins → Add New → Upload Plugin**. The standalone **MCP Adapter** plugin works too. Either way, the adapter needs **WordPress 6.9 or newer**.
:::

## Step 3: Confirm the Status Panel

Once the adapter is active, the **Status** panel shows three details worth keeping handy:

| Field | What it shows |
| --- | --- |
| **Adapter** | The installed FluentHub version, for example `FluentHub 2.1.1`, with a green **Connected** badge. |
| **Endpoint URL** | The address your AI client connects to, usually `https://your-site.com/wp-json/fluent-booking/mcp`. Click **Copy** to grab it in one click. |
| **Tools available** | How many MCP tools are exposed right now. The line underneath notes when FluentBooking Pro tools are included. |

![Status panel showing FluentHub connected, the endpoint URL, and 14 tools available](/images/global-settings/mcp-for-ai-agents/fluentbooking-mcp-3.webp)

A green **Connected** badge in the top-right of the page is your confirmation that the adapter is talking to FluentBooking correctly.

## Step 4: Choose Your Toolsets

Every tool you expose stays loaded in the agent's context for the whole conversation, so FluentBooking lets you enable only the groups you actually need. Under **Toolsets**, tick the ones you want:

- **Core:** Bookings, availability, event types, diagnostics, and reporting. Always on — 9 tools, about 3.8k tokens of context.
- **Scheduling setup:** Lets the agent create and edit event types and availability schedules — 4 tools, about 1.5k tokens.
- **Payments:** Lets the agent read booking orders and transactions. Requires **FluentBooking Pro** — 1 tool, about 378 tokens.

Below the list, the page tells you exactly what you are exposing, for example *"Currently exposing 14 tools, about 5.7k tokens."*

Once you have chosen your toolsets, click the **Save Settings** button.

::: tip Important
Leave **Scheduling setup** and **Payments** off unless you need them. A smaller toolset means a cheaper, faster, and more accurate agent — and it removes the ability to edit your event types entirely, rather than relying on the agent to behave.
:::

## Step 5: Generate a WordPress Application Password

AI clients sign in using a **WordPress Application Password**. This is built into WordPress 5.6 and later, so no extra plugin is needed. Each application gets its own password, which means you can revoke a single AI client without touching your main login.

The **Connect a client** panel links straight to the right screen, so you do not have to go looking for it.

![Connect a client panel with the Open profile Application Passwords link highlighted](/images/global-settings/mcp-for-ai-agents/fluentbooking-mcp-4.webp)

To create a password:

1. Click **Open profile → Application Passwords**, or go to **Users → Profile** and scroll down to the **Application Passwords** section.
2. Enter a name that identifies the connection, for example `Claude Code` or `Cursor`. This name appears in the table afterward so you can tell connections apart.
3. Click **Add Application Password**.
4. WordPress generates a one-time password formatted like `xxxx xxxx xxxx xxxx xxxx xxxx`. Click **Copy** and save it somewhere safe.

![WordPress Application Passwords screen showing a newly generated password with the Copy button](/images/global-settings/mcp-for-ai-agents/fluentbooking-mcp-5.webp)

::: tip Important
The password is shown **only once** and cannot be retrieved later. If you lose it before saving, revoke it from the same table and generate a fresh one.
:::

## Step 6: Copy Your Connection Snippet

Back on **MCP for AI Agents**, scroll to the **Connect a client** panel. FluentBooking encodes your credentials for you and fills in a ready-to-paste snippet for whichever AI client you pick.

1. In the first field, type the WordPress username you generated the password for.
2. Paste the **Application password** into the second field. Spaces are fine either way.
3. Pick the tab matching your AI client: **Claude Code**, **OpenAI Codex**, **Cursor**, **Other**, or **Claude Desktop**.
4. Click **Copy snippet**.

![Connect a client panel with credentials filled in and the Copy snippet button](/images/global-settings/mcp-for-ai-agents/fluentbooking-mcp-6.webp)

::: tip Important
The generated snippet already contains your encoded credentials. Treat it like a password: never paste it into a public repository, a shared chat, or a screenshot.
:::

## Connect Your AI Client

With your snippet copied, paste it where your client expects an MCP server. The sections below cover each client, and the snippets shown are the shape FluentBooking generates — always use your own copied version rather than retyping these.

### Before You Start: Node.js and npx

Some clients need **Node.js** (which includes `npx`) installed on your computer:

| Client | Needs Node.js/npx? |
| --- | --- |
| **Claude Code** | Yes — the client itself installs through npm. |
| **Claude Desktop** | Yes — it reaches your site through a small `npx` helper. |
| **OpenAI Codex** | Yes, if your configuration uses `npx`. |
| **Cursor** | No — it connects to the URL directly. |

To check whether you already have it, open Terminal or Command Prompt and run:

```bash
node -v
```

If you see a version number like `v20.11.0`, you are set. If you get "command not found", download the **LTS** installer from [nodejs.org](https://nodejs.org), run it, then close and reopen your terminal.

### The Easiest Way: Let Your AI Agent Set It Up

If editing configuration files is not your thing, skip it. Open **Claude Code**, **Claude Desktop**, or **Cursor** in any folder on your computer and ask the AI to do the setup for you. It knows where its own config file lives, it can create the file if it does not exist, and it can install anything that is missing along the way.

Paste a prompt like this:

> *"Set up this MCP server for me. First check whether Node.js and npx are installed and install them if they are not. Then add this configuration to your MCP config file, and tell me if I need to restart anything afterward:"*
>
> *(paste your snippet here)*

The agent handles the file paths, the JSON formatting, and the restart instructions. You just confirm when it asks.

::: tip Important
Your snippet contains your login credentials. Only do this in an AI client running on your own computer, and never in a shared or public workspace.
:::

### Connecting Claude Code

Claude Code is the terminal version of Claude, so its setup is a command you run rather than a file you edit. This is the quickest option.

**1. Install Claude Code** if you do not have it yet:

```bash
npm install -g @anthropic-ai/claude-code
```

**2. Paste your snippet into the terminal and press Enter.** You can run it from any folder. It takes the shape below, with your own site and credentials already filled in:

```bash
claude mcp add --transport http fluent-booking https://your-site.com/wp-json/fluent-booking/mcp --header "Authorization: Basic <encoded-credentials>"
```

Claude Code confirms with **Added and connected** and shows the server marked as connected.

![Claude Code terminal showing the fluent-booking MCP server added and connected](/images/global-settings/mcp-for-ai-agents/fluentbooking-mcp-7.webp)

**3. Restart Claude Code, or start a new session.** The tools are written to your configuration immediately, but they are not loaded into the session you are already in. After restarting, the `mcp__fluent-booking__*` tools are available. Type `/mcp` at any time to see your connected servers.

::: tip Important
Claude Code stores this per project folder by default. To use FluentBooking from any folder on your computer, add `--scope user` to the end of the command.
:::

### Connecting Cursor

**1. Open Cursor's MCP settings.** Open the command palette, search for **Cursor Settings**, then go to **Tools & MCPs** in the left sidebar. Under **Installed MCP Servers**, click **New MCP Server**.

**2. Paste your snippet from the Cursor tab into `mcp.json`.** It takes this shape:

```json
{
  "mcpServers": {
    "fluent-booking": {
      "url": "https://your-site.com/wp-json/fluent-booking/mcp",
      "type": "http",
      "headers": {
        "Authorization": "Basic <encoded-credentials>"
      }
    }
  }
}
```

**3. Save and reload Cursor.** Open **Tools & MCPs** again and **fluent-booking** appears in your Installed MCP Servers list with its tools underneath.

### Connecting Claude Desktop

**1. Open the config file from inside Claude Desktop.** Go to **Settings → Developer → Edit Config**. Claude Desktop creates the file if it does not exist yet and shows you where it lives:

- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

**2. Open the file in a plain text editor** — TextEdit on macOS or Notepad on Windows both work.

**3. Paste the configuration:**

```json
{
  "mcpServers": {
    "fluent-booking": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://your-site.com/wp-json/fluent-booking/mcp",
        "--header",
        "Authorization: Basic <encoded-credentials>"
      ]
    }
  }
}
```

Where you paste it depends on what is already in the file:

- **The file is empty, or contains just `{}`** — delete whatever is there and paste the whole block in.
- **The file already has other MCP servers** — do not paste the whole thing, or you will wipe them out. Copy only the `"fluent-booking": { ... }` part and add it inside the existing `"mcpServers"` block, with a comma after the entry above it.

**4. Save the file and fully quit Claude Desktop**, then open it again. Closing the window is not enough: quit it from the menu bar on macOS or the system tray on Windows.

**5. Check the connection.** Look for the tools or connectors icon in the message box. **fluent-booking** appears there with its tools listed.

::: tip Important
This file must stay valid JSON. A missing or extra comma stops Claude Desktop from loading any of your servers. If Claude Desktop starts without your tools, a punctuation slip is the usual reason — paste the file into your AI agent and ask it to check the syntax.
:::

### Connecting OpenAI Codex

Codex keeps its MCP servers in `~/.codex/config.toml`, written in TOML rather than JSON.

**1. Open `~/.codex/config.toml`.** If the file or the `.codex` folder does not exist, create it. On macOS, press <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>G</kbd> in Finder and type `~/.codex` to get there.

**2. Paste this at the end of the file.** TOML blocks stack one after another, so you can add it below whatever is already there:

```toml
[mcp_servers.fluent-booking]
command = "npx"
args = [
  "-y",
  "mcp-remote",
  "https://your-site.com/wp-json/fluent-booking/mcp",
  "--header",
  "Authorization: Basic <encoded-credentials>"
]
```

**3. Save the file and restart Codex.** Your FluentBooking tools are available in the next session.

### Other MCP Clients

The **Other** tab gives you a generic configuration block you can adapt for any MCP-compliant client. Point it at your **Endpoint URL**, set the transport to streamable HTTP, and pass the `Authorization: Basic` header exactly as generated.

## Verify the Connection

Open your AI client and ask it something only FluentBooking would know. For example:

> *"Show me my bookings for next week."*

The agent calls your endpoint, fetches the data, and replies with your actual bookings — attendee name, event type, host, time, and status.

If you see real bookings in the reply, your connection is live and authenticated.

## What Your AI Agent Can Do

Once connected, your AI client gets up to **14 FluentBooking tools**, of which **9 are on by default**. You never call these by name. You ask a question in your own words, and the agent picks the tool that answers it.

The easiest way to think about them is as the things you would otherwise do by clicking: looking up a booking, checking what times are free, booking someone in, working out why a page shows no slots, pulling a report. Every tool runs the same code the admin screens and the public booking page already run, so an agent can never tell you something your site would not.

## Core Toolset

Always on. These nine arrive the moment you connect.

### Getting its bearings

`fluent-booking/get-booking-context`

Before it answers anything, the agent needs to know whose site it is on, what it is allowed to do, what today's date is, and what your hosts and event types are called. This tool tells it all of that in one go.

You will never ask for this directly — the agent calls it on its own, usually as its first move. It is the reason you can say *"next Tuesday"* or *"the Discovery Call"* and have the agent land on the right day and the right event type without you spelling anything out.

### Finding bookings

`fluent-booking/list-bookings`

Searches your bookings and returns a short summary of each one. It uses exactly the same filters as the **Bookings** screen in the admin, so what the agent finds always matches what you would see yourself.

You can narrow by upcoming, completed, pending, cancelled, or no-show; by calendar, event type, or host; by a date range; or by searching an attendee's name, email, or phone.

Ask for things like:

- *"What is on my calendar next week?"*
- *"Show me every cancelled booking from last month."*
- *"Has anyone from acme.com booked with us recently?"*

::: tip Important
Attendee email addresses come back **masked by default**. The agent can only see them in full if it explicitly asks for them, and only when the connected account has permission to read all bookings.
:::

### Looking at one booking in detail

`fluent-booking/get-booking`

Opens a single booking properly: who booked, their contact details, the location, where the booking currently stands, and why it was cancelled if it was.

The agent can also pull in the extras when they matter — the answers to your booking form questions, any additional guests, the assigned hosts, and the full activity timeline of everything that has happened to that booking.

Ask for things like:

- *"What did Sarah put in the booking form for Thursday's call?"*
- *"Show me the full history of booking #482 — who changed what, and when."*

### Checking what times are free

`fluent-booking/get-available-slots`

Returns the bookable times for an event type, day by day, in whatever timezone you ask for. It can look across a range of up to 62 days, or answer a straight yes or no about one specific time.

This runs the very same availability engine as your public booking page. If the agent says 2pm Tuesday is free, your booking page is offering 2pm Tuesday.

Ask for things like:

- *"When is my next free 30-minute slot?"*
- *"Is 3pm on Friday still open for the Strategy Session?"*
- *"What do I have free next week, in New York time?"*

### Booking someone in

`fluent-booking/create-booking`

Books a slot on an attendee's behalf — the equivalent of taking a booking over the phone and entering it yourself.

It behaves exactly like a real booking. Confirmation emails go out, calendar events are created, your integrations fire, and reminders are scheduled. The agent can add extra guests, fill in your booking form answers, attach a note that only the host sees, and pin a specific host on a team event.

If you are entering a booking you already agreed with someone directly, you can ask the agent to add it **without notifying anyone**. The attendee still gets their reminder before the meeting — only the confirmation is skipped.

Ask for things like:

- *"Book john@example.com into a 30-minute Discovery Call next Tuesday at 2pm London time."*
- *"Add Maria to Thursday's group workshop and bring two guests with her."*

### Changing a booking

`fluent-booking/manage-booking`

Everything you would do to a booking that already exists: reschedule it, cancel it, confirm or reject a pending request, mark it complete or a no-show, correct the attendee's details, or resend the confirmation email.

Cancelling and rejecting can include a reason, which is stored on the booking and included in the email the attendee receives.

Ask for things like:

- *"Move tomorrow's 10am call to Thursday at the same time."*
- *"Cancel Friday's session and tell them I am unwell."*
- *"Mark yesterday's 3pm as a no-show."*
- *"Resend the confirmation for booking #390 to the host."*

::: tip Important
Cancelling a booking does **not** refund it unless you say so. Money never moves as a side effect of a schedule change — you have to ask for the refund explicitly.
:::

### Working out why slots are missing

`fluent-booking/diagnose-availability`

This is the one that saves the most time. Given an event type and a date range, it walks every rule that could be hiding your slots — the event's status, the host's timezone, the weekly schedule, date overrides, buffers, minimum notice, daily and weekly caps, how far ahead people can book, existing bookings, calendar conflicts, and team host availability — then tells you which rule emptied which day.

Instead of opening six settings screens and guessing, you ask once and get the culprit named.

Ask for things like:

- *"Why is the Discovery Call showing no slots next week?"*
- *"My client says Fridays never appear. What is going on?"*
- *"Why does the first available slot not show until Thursday?"*

### Reading event type settings

`fluent-booking/get-event-types`

Lists your event types, or opens one up in full — its durations, location, availability schedule, booking limits, buffers, and the questions it asks. Useful on its own, and the thing the agent checks before it changes anything.

Ask for things like:

- *"Which of my event types are still drafts?"*
- *"What buffer and notice period does the Consultation use?"*

### Answering questions with numbers

`fluent-booking/query-bookings`

Your reporting tool. It counts and groups bookings so the agent can answer questions about patterns rather than individual meetings.

It can group by up to two of: status, event type, individual event, host, calendar, booking source, country, day, month, weekday, or hour of day. And it can measure: how many bookings, how many distinct attendees, total meeting minutes, no-show rate, and cancellation rate.

It returns **totals only, never individual bookings**, and it covers up to a year at a time.

Ask for things like:

- *"How many total meeting minutes did each host have last month?"*
- *"Which event types get cancelled most?"*
- *"What time of day do people actually book?"*
- *"Compare this month's bookings to last month's, by host."*

## Scheduling Setup Toolset

Off by default. These four let the agent change **how you are bookable**, not just what is booked. Turn this on only if you want that.

### Editing event types

`fluent-booking/manage-event-type`

Creates, edits, duplicates, activates, deactivates, or deletes an event type. Edits are grouped the same way the admin screens save them — details, availability, limits, and booking questions — so the agent changes one area at a time and leaves the rest alone.

Ask for things like:

- *"Add a 15-minute buffer after every Consultation."*
- *"Duplicate the Discovery Call and make the copy 45 minutes."*
- *"Deactivate every draft event type on the Sales calendar."*

::: tip Important
Deleting an event type is permanent and takes **every booking on it** — past, cancelled, and upcoming — along with their activity history and payment records. The agent refuses to delete an event type that has any bookings at all unless you insist. Changes to availability and limits also need your confirmation before they are applied.
:::

### Reading availability schedules

`fluent-booking/get-availability`

Shows the availability schedules behind your event types: the weekly hours and any date-specific exceptions, in the timezone of your choosing.

Ask for things like:

- *"What hours does my Default schedule cover on Fridays?"*
- *"Which days have I blocked off in December?"*

### Editing availability schedules

`fluent-booking/manage-availability`

Creates, renames, edits, clones, sets a default, or deletes an availability schedule.

Ask for things like:

- *"Clone my Default schedule and call it Summer Hours."*
- *"Block out the 22nd and 23rd of December."*

::: tip Important
Editing a schedule's weekly hours **replaces the whole week**, not just the day you mentioned. The agent is required to show you the new grid and get your confirmation before saving. Deleting a schedule that an event type still uses is refused outright.
:::

### Looking up hosts, calendars, and field names

`fluent-booking/list-reference-data`

A lookup helper for larger sites. When you have more hosts, calendars, or event types than fit into the agent's opening summary, this fetches the specific list it needs — hosts, calendars, location providers, an event type's booking questions, or your availability schedules.

You will rarely ask for this by name. The agent reaches for it when it needs an exact name or ID before doing something else.

## Payments Toolset

Off by default and requires **FluentBooking Pro**. One tool, and it only reads.

### Reading orders and payments

`fluent-booking/get-payments`

Lists the orders behind your paid bookings, or opens one order in full with its transactions and the booking it belongs to. You can filter by status, payment method, date range, or a specific booking.

Ask for things like:

- *"Show me every unpaid order from this month."*
- *"How much has come through Stripe this quarter?"*
- *"What did booking #517 actually pay, and when?"*

::: tip Important
This tool cannot move money. Refunds stay with your payment gateway and with the admin screens — the only exception is a refund attached to a cancellation, which you have to request explicitly.
:::

## Ready-Made Prompts

Alongside the tools, the server ships three guided prompts your client can invoke directly. A prompt is a ready-written procedure: rather than hoping the agent picks a good sequence of tools, you invoke the prompt and it follows a routine that is already known to work.

- **Daily briefing** — Summarizes a day's schedule: what is booked, what needs a decision, and what changed. Defaults to today, and can be narrowed to one host or reported in a specific timezone.
- **Troubleshoot an event type** — Works out why an event type is showing no slots, or the wrong ones, and says what to change. You can pass along what the attendee actually reported, in their own words, which helps it aim at the right problem.
- **Weekly report** — A week's booking numbers, with the comparison against the previous week and the caveats that make the figures trustworthy. Defaults to the last 7 days.

In Claude Code and Claude Desktop these appear in the slash command or prompt picker once the server is connected.

## How the Agent Is Kept Safe

Every change the agent makes goes through the same guardrails a person would hit, plus a few built specifically for agents:

- **Permissions come from the account, not the agent.** A connected client inherits exactly the FluentBooking permissions of the WordPress user whose application password it holds. If that account cannot see other hosts' bookings, neither can the agent. If it has no write access, the write tools are never even offered.
- **It shows you the change before it makes it.** Anything destructive is previewed first: the agent describes exactly what would happen, and nothing is written until you approve it.
- **Your approval is tied to that exact change.** The confirmation covers both the booking's current state and the specific change you were shown. An agent cannot get your approval for one thing and then do another.
- **Retries do not double-book.** If a request times out and the agent tries again, it gets the original result back rather than creating a second booking.
- **Silent changes still remind the attendee.** When you ask for a booking to be created or moved without notifying anyone, that suppresses the confirmation — by email or SMS — for that action only. The attendee still receives their reminder before the meeting.

## Revoke or Disable Access

Application Passwords are scoped to a single connection, so revoking one only disconnects that AI client. Your main WordPress login and any other connected apps stay untouched.

- **Revoke one AI client:** Go to **Users → Profile → Application Passwords**, find the row by name, and click **Revoke**.
- **Disable MCP entirely:** Switch off the **Enable the FluentBooking MCP server** toggle on the settings page. The endpoint stops responding immediately.
- **Reduce what the agent can do:** Untick **Scheduling setup** or **Payments** under **Toolsets** and click **Save Settings**. Those tools disappear from the client on its next connection.
- **Rotate credentials:** Revoke the old application password, generate a fresh one, then re-copy the snippet from the **Connect a client** panel and paste it back into your AI client.

::: tip Important
Give each AI client its own Application Password — one for Cursor, one for Claude Desktop, and so on. That way you can revoke a single client without breaking the others.
:::

## Frequently Asked Questions

**Q: The badge still shows "Adapter Required" after installing FluentHub. What now?**

**A:**
- **Hard-refresh the settings page.** The adapter check runs when the page loads.
- **Check the plugin is active.** Go to **Plugins** and confirm **FluentHub** or the **MCP Adapter** plugin is both installed and **Active**.
- **Check the WordPress version.** The Abilities API requires **WordPress 6.9 or newer**.

**Q: Tools available shows 0. What did I miss?**

**A:** The **Enable the FluentBooking MCP server** toggle is most likely off. Switch it on and the count refreshes as soon as the adapter reconnects.

**Q: My AI client says "Unauthorized". What is wrong?**

**A:** The username or application password is wrong. Generate a fresh application password, paste it back into the **Connect a client** panel along with your username, click **Copy snippet** again, and replace the old configuration in your client with the new snippet.

**Q: The FluentBooking tools do not appear in my AI client.**

**A:** Restart the client fully after adding the server. Claude Code writes the configuration immediately but does not load the tools into the session you are already in, so restart it or start a new session. For Claude Desktop, closing the window is not enough — quit it from the menu bar or system tray and reopen it. Also confirm the **Enable the FluentBooking MCP server** toggle is on.

**Q: Claude Desktop or Codex shows a "server failed to start" error.**

**A:** Node.js is probably missing. Run `node -v` in your terminal. If you get "command not found", install the LTS release from [nodejs.org](https://nodejs.org) and restart the client.

**Q: It works locally but not in production.**

**A:** Confirm the **Endpoint URL** uses the same scheme (`http` or `https`) and domain your AI client is configured with. WordPress Application Passwords also require HTTPS and a reachable REST API at `/wp-json/`.

**Q: Can the agent see bookings that belong to other hosts?**

**A:** Only if the WordPress account it is connected as can see them. The MCP server uses the same host and team permissions as the admin dashboard. See [Team Permissions & Access](/host-user-access-management).

**Q: Can I stop the agent from editing my event types?**

**A:** Yes. Leave the **Scheduling setup** toolset unticked. Those tools are never registered, so the agent cannot call them at all.

For more help, see [Best Practices and Get Help](/best-practices-and-get-help).
