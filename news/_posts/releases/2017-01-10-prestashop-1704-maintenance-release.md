---
layout: post
title:  "Release of PrestaShop 1.7.0.4"
subtitle: "Maintenance version of the 1.7.0.x branch"
date:   2017-01-10 09:10:11
author: xavierborderie
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.0.x
---

PrestaShop 1.7.0.4 is now available. This maintenance release closes [29 of the most pressing issues](https://github.com/PrestaShop/PrestaShop/milestone/16?closed=1) reported since v1.7.0.0 was released.

The new version is within our plan to [release more regular and focused patch versions](http://build.prestashop.com/news/more-focused-patch-versions/): packing a few specific fixes (in order to limit regression potential) in regular releases. All this is done thanks in no small part to [our SemVer-like versioning](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/) and the 1-Click Upgrade module (update it if you haven't already done it for 1.7.0.2!).

We are therefore happy to deliver the fourth "patch" release of PrestaShop 1.7.0.0. Version 1.7 of PrestaShop continues to be explored by the community, and we keep working at fixing critical and major issues that were discovered since the release of v1.7.0.0, making regular fixes to the codebase. Prepare yourself to see more patch releases in the coming weeks while we review the feedback from the community!

[Download 1.7.0.4 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

<div class="alert alert-important" role="alert">
Want to upgrade using the 1-Click Upgrade module? Make sure to upgrade the module itself first! This way you will have access to a new, 1.7-specific channel, which makes upgrading safer for merchants. Upgrading from 1.7.0.0 to 1.7.0.4 should be smooth as silk -- but do a safety backup anyway :)
</div>

Here are the changes:

- Back office:
   - Bug fixes:
     - [7303](https://github.com/PrestaShop/PrestaShop/pull/7303) Add some test before use finfo
     - [7292](https://github.com/PrestaShop/PrestaShop/pull/7292) Fix log page email hint
     - [7295](https://github.com/PrestaShop/PrestaShop/pull/7295) Fix the customer thread timeline display
     - [7118](https://github.com/PrestaShop/PrestaShop/pull/7118) Add parent menu permission if sub-menu is selected
     - [7252](https://github.com/PrestaShop/PrestaShop/pull/7252) Fix product page ajax calls when url contains numbers
     - [7193](https://github.com/PrestaShop/PrestaShop/pull/7193) Fix modules translation form
     - [7271](https://github.com/PrestaShop/PrestaShop/pull/7271) Fix import theme for windows & special name
     - [7267](https://github.com/PrestaShop/PrestaShop/pull/7267) Fix preview button action

 - Front office:
   - Bug fixes:
     - [7286](https://github.com/PrestaShop/PrestaShop/pull/7286) Use the right wording when guest is disabled
     - [7195](https://github.com/PrestaShop/PrestaShop/pull/7195) Fix wrong displayed discount when it's higher than price
     - [7162](https://github.com/PrestaShop/PrestaShop/pull/7162) Add error message when ordering number of item greater than quantity
     - [7186](https://github.com/PrestaShop/PrestaShop/pull/7186) Always return a current order state
     - [7185](https://github.com/PrestaShop/PrestaShop/pull/7185) Fix quick view in safari browser
     - [7276](https://github.com/PrestaShop/PrestaShop/pull/7276) Add option with product to getManufacturer, getSupplier
     - [7278](https://github.com/PrestaShop/PrestaShop/pull/7278) Do not let Classic override jQuery
     - [7266](https://github.com/PrestaShop/PrestaShop/pull/7266) Fix category images generation
     - [7248](https://github.com/PrestaShop/PrestaShop/pull/7248) Fix multishop popup design
     - [7297](https://github.com/PrestaShop/PrestaShop/pull/7297) Fix clean filter event handler

 - Core:
   - Bug fixes:
     - [7310](https://github.com/PrestaShop/PrestaShop/pull/7310) Protect translated strings from XSS
     - [7114](https://github.com/PrestaShop/PrestaShop/pull/7114) Set curl as main solution and fopen as fallback
     - [7279](https://github.com/PrestaShop/PrestaShop/pull/7279) Fix escaped translations
     - [7275](https://github.com/PrestaShop/PrestaShop/pull/7275) Fix module translations priority
     - [7263](https://github.com/PrestaShop/PrestaShop/pull/7263) Fix module uninstall when overridden file is missing
     - [7194](https://github.com/PrestaShop/PrestaShop/pull/7194) Fix issue on translations without params

- Installer:
  - Bug fixes:
     - [7307](https://github.com/PrestaShop/PrestaShop/pull/7307) Fix croatian install adding quick_access
     - [7296](https://github.com/PrestaShop/PrestaShop/pull/7296) Adding missing tabs in IT + VN + SR, and other tab updates
     - [7274](https://github.com/PrestaShop/PrestaShop/pull/7274) Fix installer in Canadian and catalog cache
     - [7284](https://github.com/PrestaShop/PrestaShop/pull/7284) Fix localization install for language not in data/lang
     - [7294](https://github.com/PrestaShop/PrestaShop/pull/7294) Use the right locale for French Canadian

The [PrestaShop 1.7.0.4 changelog](https://www.prestashop.com/en/developers-versions/changelog/1.7.0.4-stable) is available.

Since version 1.7.0.4 is a "patch" update to version 1.7.0.0, upgrading from that version will be easy: features will work better, and modules & themes which worked fine on 1.7.0.0 will work just as well with 1.7.0.4.
