---
title: MCP for AI Agents
description: Connect FluentBooking to Claude, Cursor, and other AI clients with the built-in MCP server.
---

# MCP for AI Agents

FluentBooking includes a built-in **MCP (Model Context Protocol)** server that connects your booking data to AI clients like **Claude Code, Claude Desktop, Cursor, and OpenAI Codex**. Once it is set up, your AI assistant can look up bookings, answer availability questions, book an appointment on behalf of an attendee, work out why an event type is showing no slots, and run booking reports — all inside an ordinary conversation.

Think of MCP as a bridge between your AI client and FluentBooking. Instead of opening the admin and clicking around, the AI calls the same code paths you would, through a secure endpoint on your own site. There is no third-party proxy, no extra service to host, and no API keys to manage outside WordPress.

In this guide, we'll walk you through installing the adapter, enabling the server, connecting your AI client, and understanding exactly what the agent can and cannot do. Let's get started!

::: tip Important
The MCP server ships **switched off**. It also requires **WordPress 6.9 or newer** and a separate MCP adapter plugin, because FluentBooking does not bundle one. Only site administrators can change these settings.
:::

## Install an MCP Adapter

FluentBooking exposes its tools through the WordPress Abilities API, which needs an adapter plugin to speak MCP.

To get started, navigate to FluentBooking and click on **Settings** in the navbar. From the left sidebar, select **MCP for AI Agents**.

If no adapter is present, the page shows a **No MCP adapter found** notice. You have two options:

- **FluentHub (recommended):** Bundles the adapter and works across the whole Fluent product family. Download it from [https://static.wpmanageninja.com/fluent-toolkit.zip](https://static.wpmanageninja.com/fluent-toolkit.zip) and upload the ZIP via **Plugins → Add New → Upload Plugin**.
- **MCP Adapter plugin:** The standalone adapter, if you prefer to keep things minimal.

![No MCP adapter found notice on the MCP for AI Agents settings page](/images/global-settings/mcp-for-ai-agents/fb-mcp-1.webp)

Once the adapter is active, refresh the **MCP for AI Agents** page and the notice disappears.

## Enable the MCP Server

With the adapter in place, switch on the **Enable the FluentBooking MCP server** toggle at the top of the page.

The page then expands to show what a connected client is allowed to do, the endpoint URL, and your toolset choices.

![MCP for AI Agents page with the enable toggle switched on](/images/global-settings/mcp-for-ai-agents/fb-mcp-2.webp)

::: tip Important
A connected client authenticates as **one WordPress user** and inherits that account's FluentBooking permissions — no more, no less. Within those permissions it can read attendee names, email addresses, phone numbers, and booking form answers, and it can create, reschedule, and cancel bookings. Connect the account you would be comfortable handing those actions to.
:::

If you ever want to cut off every connected AI client at once, switch this toggle back off. The endpoint stops responding to MCP requests immediately.

## Copy the Endpoint URL

The **Endpoint URL** field shows the address your AI client connects to. It looks like this:

```
https://your-site.com/wp-json/fluent-booking/mcp
```

Click the **Copy** button next to the field to grab it in one click. You will paste this into your AI client in a moment.

## Choose Your Toolsets

Every tool you expose stays loaded in the agent's context for the whole conversation, so FluentBooking lets you enable only the groups you actually need. Under **Toolsets**, tick the ones you want:

- **Core:** Bookings, availability, event types, diagnostics, and reporting. Always on and cannot be switched off — 9 tools, about 3.3k tokens of context.
- **Scheduling setup:** Lets the agent create and edit event types and availability schedules — 4 tools, about 1.2k tokens.
- **Payments:** Lets the agent read booking orders and transactions. Requires **FluentBooking Pro** — 1 tool, about 0.3k tokens.

Below the list, the page tells you exactly what you are exposing, for example *"Currently exposing 9 tools, about 3.3k tokens."*

![Toolsets section showing Core, Scheduling setup, and Payments checkboxes](/images/global-settings/mcp-for-ai-agents/fb-mcp-3.webp)

Once you have chosen your toolsets, click the **Save Settings** button.

::: tip Important
Leave **Scheduling setup** and **Payments** off unless you need them. A smaller toolset means a cheaper, faster, and more accurate agent — and it removes the ability to edit your event types entirely, rather than relying on the agent to behave.
:::

## Generate a WordPress Application Password

AI clients sign in using a **WordPress Application Password**. This is built into WordPress 5.6 and later, so no extra plugin is needed. Each application gets its own password, which means you can revoke a single AI client without touching your main login.

The hint under the Endpoint URL field links straight to the right screen. To create a password:

1. In WordPress admin, go to **Users → Profile** and scroll down to the **Application Passwords** section.
2. Enter a name that identifies the connection, for example `Claude Code` or `Cursor`. This name appears in the table afterward so you can tell connections apart.
3. Click **Add Application Password**.
4. WordPress generates a one-time password formatted like `xxxx xxxx xxxx xxxx xxxx xxxx`. Click **Copy** and save it somewhere safe.

![WordPress profile page showing the New Application Password Name field](/images/global-settings/mcp-for-ai-agents/fb-mcp-4.webp)

![WordPress profile page showing the newly generated application password](/images/global-settings/mcp-for-ai-agents/fb-mcp-5.webp)

::: tip Important
The password is shown **only once** and cannot be retrieved later. If you lose it before saving, revoke it from the same table and generate a fresh one.
:::

## Connect Your AI Client

Your AI client needs three things: the endpoint URL, the transport type (`http`), and an `Authorization: Basic` header built from your username and application password.

### Encode Your Credentials

The `Basic` header carries your username and application password as a single base64 string. To generate it, open Terminal on macOS or Linux and run:

```bash
printf 'YOUR_USERNAME:xxxx xxxx xxxx xxxx xxxx xxxx' | base64
```

On Windows, open PowerShell and run:

```powershell
[Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes('YOUR_USERNAME:xxxx xxxx xxxx xxxx xxxx xxxx'))
```

Replace `YOUR_USERNAME` with your WordPress username and the `xxxx` blocks with the application password you just copied. The result is the value you paste after `Basic ` in every snippet below.

::: tip Important
The encoded string is your login credentials in a thin disguise. Treat it like a password: never paste it into a public repository, a shared chat, or a screenshot.
:::

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

**2. Add the server.** Run this from any folder, replacing the placeholders with your own values:

```bash
claude mcp add \
  --transport http \
  fluent-booking https://your-site.com/wp-json/fluent-booking/mcp \
  --header "Authorization: Basic <encoded-credentials>"
```

**3. Start Claude Code** by running `claude`, then type `/mcp` to see your connected servers. **fluent-booking** appears in the list with all its tools.

![Claude Code showing fluent-booking connected in the MCP server list](/images/global-settings/mcp-for-ai-agents/fb-mcp-6.webp)

::: tip Important
Claude Code stores this per project folder by default. To use FluentBooking from any folder on your computer, add `--scope user` to the end of the command.
:::

### Connecting Cursor

**1. Open Cursor's MCP settings.** Open the command palette, search for **Cursor Settings**, then go to **Tools & MCPs** in the left sidebar. Under **Installed MCP Servers**, click **New MCP Server**.

**2. Paste the configuration into `mcp.json`:**

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

![Cursor Tools and MCPs panel showing fluent-booking connected with its tool list](/images/global-settings/mcp-for-ai-agents/fb-mcp-7.webp)

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

Any MCP-compliant client works. Point it at your **Endpoint URL**, set the transport to streamable HTTP, and pass the `Authorization: Basic` header exactly as generated.

## Verify the Connection

Open your AI client and ask it something only FluentBooking would know. For example:

> *"Show me my bookings for next week."*

The agent calls your endpoint, fetches the data, and replies with your actual bookings — attendee name, event type, host, time, and status.

![AI client returning a list of upcoming FluentBooking bookings in a table](/images/global-settings/mcp-for-ai-agents/fb-mcp-8.webp)

If you see real bookings in the reply, your connection is live and authenticated.

## What Your AI Agent Can Do

Once connected, your AI client gets up to **14 FluentBooking tools**, of which **9 are on by default**. You do not call these by name — the AI picks the right tool based on what you ask in plain language. The sections below list each one with the parameters it accepts, so you can see exactly what a connected agent is able to read and change.

Every tool wraps a code path the admin or the public booking page already uses. There is no separate MCP logic that could drift from what your site actually does.

## Core Toolset

Always on and cannot be switched off. Nine tools covering bookings, slots, event types, diagnostics, and reporting.

### Get booking context

`fluent-booking/get-booking-context` · read only · no parameters

The agent's orientation call, and the one it makes first. Returns who it is authenticated as, what it is permitted to do, the site timezone and current time, the valid values for every filter used elsewhere, headline booking counts, and short reference lists of hosts, calendars, and event types.

### List bookings

`fluent-booking/list-bookings` · read only

Lists bookings as one compact row each. Results use the same filters as the admin booking list, so what the agent sees always matches what you see.

- **period** — `upcoming`, `completed`, `pending`, `cancelled`, `all`, `no_show`, or `latest_bookings`. Defaults to `upcoming`.
- **status** — Filter by raw status values instead of a period bucket.
- **calendar_id**, **event_id**, **event_type**, **host_id** — Narrow to a calendar, event type, or host.
- **email** — Exact attendee email match.
- **search** — Free-text search across attendee name, email, and phone.
- **from**, **to** — Booking date range, `Y-m-d`.
- **timezone** — IANA timezone the local times are returned in. Defaults to the site timezone.
- **group_bookings** — Collapses group bookings to one row, matching the admin list. Default `true`.
- **include_pii** — Returns unmasked attendee emails. Requires read access to all bookings.
- **page**, **per_page** — Default 20 per page, maximum 100.

::: tip Important
Attendee email addresses are **masked by default** in list results. The agent only sees them in full when it explicitly asks for `include_pii` and the connected account has read access to all bookings.
:::

### Get booking

`fluent-booking/get-booking` · read only

Full detail for one booking, including attendee contact details, location, status history, and cancellation reason.

- **booking_id** or **hash** — Identify the booking either way.
- **include** — Extra sections to load: `custom_fields`, `attendees`, `hosts`, `activities`. Each one costs an extra query, so the agent asks only for what it needs.
- **timezone** — IANA timezone for the local times in the response.

### Get available slots

`fluent-booking/get-available-slots` · read only

Bookable times for an event type, keyed by date. This runs the same engine as the public booking page, so the answer can never disagree with your site.

- **event_id** — Required. The event type to check.
- **from**, **to** — Date range, `Y-m-d`. Defaults to today through 14 days out, 62 days maximum.
- **start_time** — Check one specific slot instead of a range, `Y-m-d H:i:s`.
- **timezone** — IANA timezone the times are returned in.
- **duration** — Minutes, for event types that offer several.
- **host_id** — Restrict to one host on a team event.

### Create booking

`fluent-booking/create-booking` · write · destructive

Books a slot on an attendee's behalf. Availability is re-checked at the moment of writing, and everyone is emailed exactly as they would be for a self-service booking.

- **event_id**, **start_time**, **name**, **email** — Required. `start_time` is local wall-clock time, `Y-m-d H:i:s`, with no offset or `Z` suffix.
- **timezone** — IANA timezone the attendee is booking in.
- **phone**, **message** — The attendee's number and their note to the host.
- **internal_note** — Host-only note, never shown to the attendee.
- **duration** — Minutes, when the event type offers a choice.
- **host_id** — Pin a specific host. Round robin events pick one automatically when this is omitted.
- **location_type**, **location_description** — Only when the event type offers several locations. The description is required for `phone_guest` and `in_person_guest`.
- **custom_fields** — Answers to the event type's booking fields, keyed by field name.
- **guests** — Additional guests, as email strings or name and email pairs. Group events seat each guest separately.
- **send_notifications** — Default `true`. Set `false` to create the booking without emailing anyone.
- **dry_run**, **confirm_token**, **idempotency_key** — See [How the Agent Is Kept Safe](#how-the-agent-is-kept-safe).

### Manage booking

`fluent-booking/manage-booking` · write · destructive

Acts on an existing booking. Requires **booking_id** and **action**.

- **action** — One of `reschedule`, `cancel`, `confirm`, `reject`, `complete`, `no_show`, `update_details`, or `resend_email`.
- **start_time**, **timezone**, **host_id** — For `reschedule`.
- **reason** — Why. Stored on the booking and included in the cancellation, rejection, or reschedule email.
- **fields** — For `update_details`. Any of first name, last name, email, phone, internal note.
- **recipient** — For `resend_email`. Either `guest` or `host`. Defaults to `guest`.
- **refund_payment** — For `cancel` and `reject` only. Default `false`, so money never moves as a side effect.
- **send_notifications**, **dry_run**, **confirm_token**, **idempotency_key** — As above.

`reschedule`, `cancel`, and `reject` are destructive and require a confirmation token from a dry run.

### Diagnose availability

`fluent-booking/diagnose-availability` · read only

Explains *why* an event type is or is not offering slots. Returns every rule that can remove slots along with its configured value, then attributes each empty date to the specific rule responsible. Takes **event_id** plus an optional date range, **timezone**, and **host_id**.

This is the fastest way to answer the single most common booking support question. Instead of checking the schedule, the buffers, the notice period, and the caps one by one, you ask once and get the answer with the culprit named.

### Get event types

`fluent-booking/get-event-types` · read only

Lists bookable event types, or returns one event type's full configuration — durations, location, availability, booking limits, buffers, and questions — when **event_id** is given.

- **calendar_id**, **host_id** — Filter by calendar, or by the host who owns the event type.
- **event_type**, **status** (`active` or `draft`), **search** — Further filters.
- **page**, **per_page** — Default 25 per page, maximum 100.

### Query bookings

`fluent-booking/query-bookings` · read only

Aggregates bookings by one or two dimensions and returns totals only, never booking rows. No raw SQL is ever accepted.

- **group_by** — One or two of `status`, `event`, `event_type`, `host`, `calendar`, `source`, `country`, `day`, `month`, `weekday`, `hour`. Omit for a single total over the whole range.
- **metrics** — Any of `count`, `distinct_attendees`, `total_minutes`, `no_show_rate`, `cancellation_rate`. Defaults to `count`. Rates are fractions between 0 and 1.
- **date_field** — Which timestamp the range reads: `start_time` is when the meeting is, `created_at` is when it was booked.
- **from**, **to** — `Y-m-d`, inclusive. Defaults to the last 30 days, 366 days maximum.
- **timezone** — IANA zone the day, weekday, and hour buckets are expressed in.
- **filters** — Narrow the set before grouping, by status, event, calendar, host, event type, or source.
- **having** — Drop small groups, for example only those with 5 or more bookings.
- **order_by**, **order**, **limit** — Default 50 groups, maximum 200.

**Example prompts for the Core toolset:**

- *"Which of my event types had the highest no-show rate last month?"*
- *"Why is the 30-minute Discovery Call showing no slots next Tuesday?"*
- *"Book john@example.com into a 30-minute Discovery Call next Tuesday at 2pm London time."*
- *"How many total meeting minutes did each host have last week?"*
- *"Show me the cancellation rate by weekday for the last quarter."*

## Scheduling Setup Toolset

Off by default. Four tools that let the agent change how you are bookable.

### Manage event type

`fluent-booking/manage-event-type` · write · destructive

Creates, edits, duplicates, activates, deactivates, or deletes an event type. Requires **action**.

- **action** — `create`, `update`, `duplicate`, `activate`, `deactivate`, or `delete`.
- **event_id** — Required for everything except `create`.
- **calendar_id** — Required for `create`.
- **section** — For `update`. Which group of settings the fields belong to: `details`, `availability`, `limits`, or `booking_fields`. Edits are sectioned the same way the admin saves them, so the agent sends only the section it is changing.
- **fields** — The settings to write.
- **force** — For `delete`. Deletes even though future bookings exist. Those bookings are deleted with it.
- **dry_run**, **confirm_token** — `delete` requires a confirmation token.

### Get availability

`fluent-booking/get-availability` · read only

Lists availability schedules, or returns one in full when **schedule_id** is given. Hours come back in the schedule's own timezone unless you pass a **timezone**, and **host_id** limits the list to one host.

### Manage availability

`fluent-booking/manage-availability` · write · destructive

Creates, renames, edits, clones, sets as default, or deletes an availability schedule. Requires **action**.

- **action** — `create`, `update`, `rename`, `clone`, `set_default`, or `delete`.
- **schedule_id** — Required for everything except `create`.
- **title** — Required for `create` and `rename`.
- **weekly_schedules** — For `update`. Keyed Sunday through Saturday, each with its enabled state and time slots in 24-hour format. **This replaces the whole weekly grid.**
- **date_overrides** — For `update`. Per-date exceptions, replacing all existing overrides.
- **timezone**, **dry_run**, **confirm_token** — `update` and `delete` both require a confirmation token, and `delete` refuses a schedule still in use.

### List reference data

`fluent-booking/list-reference-data` · read only

The lookup lists that get-booking-context leaves out on larger sites. Requires **kinds**, any of `hosts`, `calendars`, `location_providers`, `booking_fields`, or `availability_schedules`. Booking fields are per event type, so that kind also needs **event_id**.

**Example prompts for the Scheduling toolset:**

- *"Add a 15-minute buffer after every meeting on my Consultation event type."*
- *"Duplicate my Discovery Call event type and set the duration to 45 minutes."*
- *"Deactivate every draft event type on the Sales calendar."*

## Payments Toolset

Off by default and requires **FluentBooking Pro**. One read-only tool.

### Get payments

`fluent-booking/get-payments` · read only

Lists booking orders with filters, or returns one order in full with its transactions and the booking it belongs to when **order_id** is given.

- **booking_id** — Orders belonging to one booking.
- **status** — Filter by order status, for example paid, draft, or refunded.
- **payment_method** — For example stripe, paypal, or offline.
- **from**, **to** — Orders created within this date range, `Y-m-d`.
- **page**, **per_page** — Default 20 per page, maximum 100.

Refunds deliberately stay with your payment gateway. The agent can read money, not move it — the one exception is a refund attached to a cancellation through **Manage booking**, which you have to ask for explicitly.

**Example prompt:**

- *"Show me every unpaid order for bookings made this month."*

## Ready-Made Prompts

Alongside the tools, the server ships three guided prompts your client can invoke directly. A prompt is a ready-written procedure: instead of hoping the agent chooses the right sequence of tools, you invoke the prompt and it follows a known-good routine.

- **Daily briefing** (`fluent-booking/daily-briefing`) — Summarizes a day's schedule: what is booked, what needs a decision, and what changed. Takes an optional **date** (defaults to today), **host_id** to brief for one host only, and **timezone**.
- **Troubleshoot an event type** (`fluent-booking/troubleshoot-event`) — Works out why an event type is showing no slots, or the wrong ones, and says what to change. Requires **event_id**, and takes an optional **complaint** — what the operator or attendee actually reported, in their own words — plus a **from** and **to** date range.
- **Weekly report** (`fluent-booking/weekly-report`) — A week's booking numbers, with the comparison and the caveats that make them trustworthy. Takes an optional **from** and **to** date range, defaulting to the last 7 days.

In Claude Code and Claude Desktop these appear in the slash command or prompt picker once the server is connected.

## How the Agent Is Kept Safe

Every write the agent makes goes through the same guardrails a human would hit, plus a few built specifically for agents:

- **Permissions come from the account, not the agent.** The client inherits exactly the FluentBooking permissions of the WordPress user whose application password it holds. A read-only account never even sees the write tools.
- **Preview before commit.** Destructive actions support a dry run that changes nothing, so an agent can show you what would happen before anything is written.
- **Confirmation is bound to the exact change.** A confirmation token is tied both to the booking's current state and to the parameters that were previewed, so a token minted by previewing one change cannot be used to commit a different one.
- **Retries do not double-book.** Idempotency keys mean a retried request returns the recorded result instead of creating a second booking.
- **Silent operations stay silent, but reminders survive.** The agent can create or reschedule a booking without sending a confirmation email, while calendar sync, CRM triggers, and webhooks still run — and the attendee still gets their day-before reminder.

## Revoke or Disable Access

Application Passwords are scoped to a single connection, so revoking one only disconnects that AI client. Your main WordPress login and any other connected apps stay untouched.

- **Revoke one AI client:** Go to **Users → Profile → Application Passwords**, find the row by name, and click **Revoke**.
- **Disable MCP entirely:** Switch off the **Enable the FluentBooking MCP server** toggle on the settings page. The endpoint stops responding immediately.
- **Reduce what the agent can do:** Untick **Scheduling setup** or **Payments** under **Toolsets** and click **Save Settings**. Those tools disappear from the client on its next connection.
- **Rotate credentials:** Revoke the old application password, generate a fresh one, re-encode it, and update your AI client's configuration.

::: tip Important
Give each AI client its own Application Password — one for Cursor, one for Claude Desktop, and so on. That way you can revoke a single client without breaking the others.
:::

## Frequently Asked Questions

**Q: The page says "No MCP adapter found" even after installing the plugin. What now?**

**A:**
- **Check the WordPress version.** The Abilities API requires **WordPress 6.9 or newer**.
- **Check the plugin is active.** Go to **Plugins** and confirm **FluentHub** or the **MCP Adapter** plugin is both installed and **Active**.
- **Hard-refresh the settings page.** The adapter check runs when the page loads.

**Q: My AI client says "Unauthorized". What is wrong?**

**A:** The username or application password is wrong, or the base64 encoding picked up a stray character. Generate a fresh application password, re-encode it, and paste the new header into your client. Make sure you encoded `username:password` with a colon and no line break.

**Q: The FluentBooking tools do not appear in my AI client.**

**A:** Restart the client fully after adding the server. Closing the window is usually not enough — quit Claude Desktop from the menu bar or system tray and reopen it. Also confirm the **Enable the FluentBooking MCP server** toggle is on.

**Q: Claude Desktop or Codex shows a "server failed to start" error.**

**A:** Node.js is probably missing. Run `node -v` in your terminal. If you get "command not found", install the LTS release from [nodejs.org](https://nodejs.org) and restart the client.

**Q: It works locally but not in production.**

**A:** Confirm the **Endpoint URL** uses the same scheme (`http` or `https`) and domain your AI client is configured with. WordPress Application Passwords also require HTTPS and a reachable REST API at `/wp-json/`.

**Q: Can the agent see bookings that belong to other hosts?**

**A:** Only if the WordPress account it is connected as can see them. The MCP server uses the same host and team permissions as the admin dashboard. See [Team Permissions & Access](/host-user-access-management).

**Q: Can I stop the agent from editing my event types?**

**A:** Yes. Leave the **Scheduling setup** toolset unticked. Those tools are never registered, so the agent cannot call them at all.

For more help, see [Best Practices and Get Help](/best-practices-and-get-help).
