---
layout: post
title: "Hummingbird v2 now has an official public Figma file"
subtitle: "The reference design file for PrestaShop's default theme is now publicly available including inspect components, tokens, and layouts to build on top of Hummingbird with confidence."
date:   2026-06-24
authors: [ hwaseonchoi ]
icon: icon-leaf
tags: [ theme, design ]
opengraph_image: /assets/images/theme/banner-ps-project.png
twitter_image: /assets/images/theme/banner-ps-project.png
---

Hummingbird v2 has been PrestaShop's default theme since 9.1. If you've been building a child theme or customizing it, you may have been working from the code alone, or from an unofficial Figma file shared in the community. That changes today.

We're publishing the official Figma file for Hummingbird v2: [**HUMMINGBIRD (new)**](https://www.figma.com/design/ZlLqiOjTVXVlVu49sSsD8P/HUMMINGBIRD--new-?node-id=0-1&p=f).

### What's in the file

The file is the source of truth for Hummingbird's UI: components, design tokens, spacing rules, and page-level layouts. Whether you're building a child theme, adapting the front office for a specific merchant need, or contributing back to the theme itself, this is the reference you can now rely on.

**Note that the desktop version is complete, while the mobile layouts are still a work in progress.** We'll keep the file updated as coverage expands.

### Why it matters for theme developers

Until now, developers building on top of Hummingbird had to reverse-engineer design decisions from the SCSS and templates or trust community-shared files that weren't always up to date. Having a single, maintained, public file means:

- you can inspect the intended design before touching the code
- you can align your customizations with the actual component structure
- you have a shared reference when discussing UI changes in issues or pull requests

### How to use it

The file is open for public viewing. Open it in Figma, use the inspect panel to check spacing, typography, and color tokens.
