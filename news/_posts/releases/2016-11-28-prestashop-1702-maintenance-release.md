---
layout: post
title:  "Release of PrestaShop 1.7.0.2"
subtitle: "Maintenance version of the 1.7.0.x branch"
date:   2016-11-28 09:10:11
author: xavierborderie
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.0.x
---

PrestaShop 1.7.0.5 is now available. This maintenance release closes 13 of the most pressing issues reported since v1.7.0.0

More than a year ago, we announced that we wanted to [release more regular and focused patch versions](http://build.prestashop.com/news/more-focused-patch-versions/) for 1.6 (and eventually 1.7), and that's exactly what we are currently doing: packing a few specific fixes (in order to limit regression potential) in regular releases. All this is done thanks in no small part to [our SemVer-like versioning](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/) and the 1-Click Upgrade module (update it!).

We are therefore happy to deliver the second "patch" release of PrestaShop 1.7.0.0. Version 1.7 of PrestaShop continues to be explored by the community, and we keep working at fixing critical and blocking issues in 1.7 with regular releases. Prepare yourself to see more patch releases in the coming weeks while we review the feedback from the community!

[Download 1.7.0.2 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

<div class="alert alert-important" role="alert">
Want to upgrade using the 1-Click Upgrade module? Make sure to upgrade the module itself first! This way you will have access to a new, 1.7-specific channel, which makes upgrading safer for merchants. Upgrading from 1.7.0.0 to 1.7.0.2 should be smooth as silk -- but do a safety backup anyway :)
</div>

Here are the changes:

 - Back Office:
   - Bug fix:
     - [7070](https://github.com/PrestaShop/PrestaShop/pull/7070): Fixed bulk actions affecting single products
     - [7058](https://github.com/PrestaShop/PrestaShop/pull/7058): Disable FK checks during DB export
     - [7063](https://github.com/PrestaShop/PrestaShop/pull/7063): Fix related product removal
     - [7008](https://github.com/PrestaShop/PrestaShop/pull/7008): Display preview button on 13 inches
     - [6958](https://github.com/PrestaShop/PrestaShop/pull/6958): Fix email preview in translation page

 - Front Office:
   - Bug fix:
     - [7027](https://github.com/PrestaShop/PrestaShop/pull/7027): Filtered embedded product properties
     - [7043](https://github.com/PrestaShop/PrestaShop/pull/7043): Add download link for virtual products

 - Core:
   - Improvement:
     - [7022](https://github.com/PrestaShop/PrestaShop/pull/7022): Allowed to add remote assets
   - Bug fix:
     - [7038](https://github.com/PrestaShop/PrestaShop/pull/7038): Send email in English if current language don't have email template
     - [7026](https://github.com/PrestaShop/PrestaShop/pull/7026): Protect translations display
     - [7033](https://github.com/PrestaShop/PrestaShop/pull/7033): Use the locale to fallback on the good one in CLDR Repository
     - [6986](https://github.com/PrestaShop/PrestaShop/pull/6986): Fix sprintf condition
     - [7054](https://github.com/PrestaShop/PrestaShop/pull/7054): Fix Cookie standalone mode

The [PrestaShop 1.7.0.2 changelog](https://www.prestashop.com/en/developers-versions/changelog/1.7.0.2-stable) is available.

Since version 1.7.0.2 is a "patch" update to version 1.7.0.0, upgrading from that version will be easy: features will work better, and modules & themes which worked fine on 1.7.0.0 will work just as well with 1.7.0.2.
