---
layout: post
title:  "PrestaShop 9.0.2-2.1: what happened and why the version looks different"
subtitle: "A transparency update about an installer-blocking issue and our Classic version numbering"
opengraph_image: /assets/images/theme/banner-ps-project.png
twitter_image: /assets/images/theme/banner-ps-project.png
date: 2025-12-16
authors: [ PrestaShop ]
icon: icon-info
tags:
- "9.0"
- "9.0.x"
- "version"
- "patch"
- "maintenance"
- "releases"
---

Some of you hit an unexpected issue when installing **PrestaShop 9.0.2** from prestashop.com, and some also noticed a slightly unusual version number: 9.0.2-2.1, which has been used since the start of PrestaShop 9 but hadn’t been explicitly explained until now.

This post is not release notes. It's a transparency update: what happened, what we changed in response, and what we're doing to reduce the chance of a similar incident.

## A blocking installation issue reported by the community

A community [report on GitHub](https://github.com/PrestaShop/PrestaShop/issues/40314) described a problem during a fresh installation of PrestaShop 9.0.2. The installer got stuck while installing the [**ps_checkout**](https://github.com/PrestaShopCorp/ps_checkout) module and failed with this SQL error:

`SQLSTATE[42S22]: Column not found: 1054 Unknown column 'mc.id' in 'on clause'`

At that point, the installation could not complete unless **ps_checkout** was manually unchecked in the module selection step. 

Thank you to everyone who reported, reproduced, and shared details quickly - this kind of vigilance helps us react fast and improve quality.

## Why it happened

After investigation, we confirmed the issue was triggered only in a specific scenario: when the shop was installed for a country using a currency that is not supported by PrestaShop Checkout. In that case, ps_checkout ran into a faulty SQL query and the installer stopped.

The root cause was inside **ps_checkout** (not the PrestaShop Core), but because the Classic installer installs bundled modules during setup, the impact was immediate and blocking.

## What we did to fix it

We reproduced the issue internally, identified the fix in ps_checkout, and worked on it right away. The corrected module version was then included in a refreshed Classic package so that new installations from [prestashop.com](https://prestashop.com/versions) would no longer fail in this scenario.

In other words: the goal was to restore a smooth out-of-the-box installation experience, without asking users to know which module to disable to finish the installer.

## Why the download says "PrestaShop 9.0.2-2.1"

When downloading PrestaShop from prestashop.com, you may notice 9.0.2-2.1 rather than just 9.0.2. This is expected and has been the case since PrestaShop 9.

Starting with PrestaShop 9,the **Classic distribution** follows a versioning convention that separates the version of the **Core** from the version of the **Classic package content** (mainly the bundled module set and their updates). The format is:

**A.B.C-D.E**

Where **A.B.C** is the PrestaShop Core version, and **D.E** tracks the evolution of the Classic distribution content.

So in this case:

**9.0.2** is still the Core version.  
**-2.1** indicates a Classic distribution update that shipped updated module content, without a new Core release.

That is exactly what happened here, and why the Classic version increment became more visible: the Core stayed the same, while Classic needed a patched module version to prevent the installer from blocking.

You can find the complete explanation and examples in the dedicated documentation [https://github.com/PrestaShopCorp/prestashop-classic/wiki/Classic-version-numbers](https://github.com/PrestaShopCorp/prestashop-classic/wiki/Classic-version-numbers).

## What we will improve

This incident also highlighted a gap in our QA coverage which we've already identified, and we will improve the validation steps so that issues like this are caught earlier.

We're sorry this reached you in a public download, and we're taking the learnings seriously.

## Thank you

PrestaShop gets stronger thanks to its community. Thanks again for the fast, detailed report and for helping us keep PrestaShop 9 reliable for merchants and developers.
