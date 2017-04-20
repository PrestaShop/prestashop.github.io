---
layout: post
title:  "Release of PrestaShop 1.7.1.1 "
subtitle: "Maintenance version of the 1.7.1.x branch"
date:   2017-04-20 09:10:11
authors: [ xavierborderie ]
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.1.x
 - 1.7
---

PrestaShop 1.7.1.1 is now available. This maintenance release closes more than 20 of the most pressing issues reported since v1.7.1.0.

Version 1.7.1.0, [released two weeks ago](http://build.prestashop.com/news/prestashop-1-7-1-0-available/), was a step forward for PrestaShop 1.7, bringing more performance and stability to the whole codebase, as well as some new features and several native modules, among which the long-awaited PayPal module.

We received a lot of feedback from the community as soon as PrestaShop 1.7.1.0 was released. The team has been working hard at fixing the most critical issues, and today we are happy to deliver the first "patch" release of PrestaShop 1.7.1.0 (as per [our SemVer-like versioning](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/)).

[Download PrestaShop 1.7.1.1 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

<div class="alert alert-important" role="alert">
Want to upgrade using the 1-Click Upgrade module? Make sure to upgrade the module first! This way you will have access to a new, 1.7-specific channel, which makes upgrading safer for merchants. Upgrading from 1.7.1.0 to 1.7.1.1 should be smooth as silk -- but do a safety backup anyway :)
</div>

Here are the changes:

- Back Office:
   - Bug fix:
     - [7690](https://github.com/PrestaShop/PrestaShop/pull/7690) Incorrect translation on Symfony page (problems with TinyMCE)
     - [7723](https://github.com/PrestaShop/PrestaShop/pull/7723) Fix catalog ASC sorting
     - [7724](https://github.com/PrestaShop/PrestaShop/pull/7724) Fix translations theme export on Windows
     - [7730](https://github.com/PrestaShop/PrestaShop/pull/7730) Alphabetically sort features on product page
     - [7738](https://github.com/PrestaShop/PrestaShop/pull/7738) Fix access to domainized modules translations
     - [7769](https://github.com/PrestaShop/PrestaShop/pull/7769) Fix the datepicker to use locale instead of iso code

 - Front Office:
   - Bug fix:
     - [7689](https://github.com/PrestaShop/PrestaShop/pull/7689) Save zero to id_state if country has no states
     - [7693](https://github.com/PrestaShop/PrestaShop/pull/7693) Password controller must be in SSL when available
     - [7704](https://github.com/PrestaShop/PrestaShop/pull/7704) Js responsive value is not changed on resize
     - [7710](https://github.com/PrestaShop/PrestaShop/pull/7710) Fix country change in checkout form
     - [7720](https://github.com/PrestaShop/PrestaShop/pull/7720) Display product reference when product has no combination
     - [7726](https://github.com/PrestaShop/PrestaShop/pull/7726) Fixed Terms and conditions popup on mobile not possible to close
     - [7729](https://github.com/PrestaShop/PrestaShop/pull/7729) Fixed display amount with good taxes
     - [7734](https://github.com/PrestaShop/PrestaShop/pull/7734) Catch the exception when a template is missing in prod mode
     - [7742](https://github.com/PrestaShop/PrestaShop/pull/7742) Fix for image change in zoom modal window
     - [7796](https://github.com/PrestaShop/PrestaShop/pull/7796) Fix address form Ajax refresh
     
  - Improvement:
    - [7750](https://github.com/PrestaShop/PrestaShop/pull/7750) Some refacto for address controller

 - Core:
   - Bug fix:
     - [7714](https://github.com/PrestaShop/PrestaShop/pull/7714) Module code cleanup and fix module action in details modal
     - [7739](https://github.com/PrestaShop/PrestaShop/pull/7739) Allow modules compliancy on 3 digits
     - [7746](https://github.com/PrestaShop/PrestaShop/pull/7746) Doctrine without foreign for autoupgrade backup
     - [7776](https://github.com/PrestaShop/PrestaShop/pull/7776) Fix cache on install

 - Installer:
   - Improvement:
     - [7743](https://github.com/PrestaShop/PrestaShop/pull/7743) Allow 255 char to company field in Address
     
The [PrestaShop 1.7.1.1 changelog](https://www.prestashop.com/en/developers-versions/changelog/1.7.1.1-stable) is available.

Since version 1.7.1.1 is a "patch" update to version 1.7.1.0, upgrading from that version will be easy: features will work better, and modules & themes which worked fine on 1.7.1.0 will work just as well with 1.7.1.1.<br/>
Upgrades from a standard 1.7.0.x version should work just as well, and those upgrading from older versions (1.6, 1.5, 1.4 or even older) should take their time and pay attention to their modules, their theme and their custom modifications!
