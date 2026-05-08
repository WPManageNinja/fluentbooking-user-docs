---
description: Scaffold a new FluentBooking documentation page and wire it into the sidebar
argument-hint: <section/slug> "<Page Title>" "<meta description>"
allowed-tools: Read, Edit, Write, Bash
---

You are an expert technical writer creating a new FluentBooking documentation page.

The user has provided: $ARGUMENTS

Parse the arguments as:
- **Arg 1** — file path relative to `docs/`, e.g. `integrations/my-tool-integration-with-fluentbooking`
- **Arg 2** — page title (quoted string), e.g. `"My Tool Integration with FluentBooking"`
- **Arg 3** — meta description (quoted string, one sentence)

If any argument is missing, ask the user for it before proceeding.

---

## Your tasks

### 1. Create the markdown file

Create `docs/{arg1}.md` with this structure:

```markdown
---
title: {arg2}
description: {arg3}
---

# {arg2}

{One intro paragraph: what this page covers, what the reader will be able to do after following it.}

## Prerequisites

> {Any Pro requirement or dependency — remove this section if not applicable.}

## {First Major Step or Section}

{Step-by-step instructions. Use numbered lists for sequential actions. Bold every UI element name.}

## {Next Section}

{Continue as needed.}
```

Rules for the content you write:
- Imperative mood for all steps ("Go to", "Click", "Enter", "Select")
- Active voice, second person ("you")
- Present tense
- Bold all UI element names: **Settings**, **Save**, etc.
- WordPress admin nav paths use →: **Fluent Booking → Settings → Integrations**
- No filler ("simply", "just", "easily")
- No intro sentence that restates the H1
- No trailing "That's it!" summary unless the page is longer than ~500 words

### 2. Add a sidebar entry

Read `.vitepress/config.js` and add a new entry in the correct `items` array for the section that matches the file's folder. Determine the correct section by matching the folder name to the sidebar sections defined in the config.

Entry format:
```js
{ text: '{arg2 shortened to 4–6 words}', link: '/{arg1}' },
```

Place it in logical reading order within its section (alphabetical within a group, or after the most closely related existing entry).

### 3. Report what was done

Output:
- File created: `docs/{arg1}.md`
- Sidebar entry added in: `.vitepress/config.js` under {section name}
- Prompt: "Add screenshots and a YouTube embed once the video is ready. Image path pattern: `/images/{folder}/{slug}/{filename}.webp`"
