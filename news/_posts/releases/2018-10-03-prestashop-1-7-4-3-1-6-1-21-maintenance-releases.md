---
layout: post
title:  "Release of PrestaShop 1.7.4.3 and 1.6.1.21"
subtitle: "Maintenance version of the 1.7.4.x and 1.6.1.x branch"
date:   2018-10-03 15:0:00
authors: [ AntoineThomas, PabloBorowicz ]
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.4.x
 - 1.7
 - 1.6.1.x
 - 1.6
---

PrestaShop 1.7.4.3 and 1.6.1.21 are now available. These versions fix a security issue for both 1.7.4.x and 1.6.1.x. Some important issues are also fixed for 1.6.1.x. For the details, please read below.

Since these versions fix security problems, we **strongly** encourage you to upgrade your shop as soon as possible.

The most notable fix for 1.7.4.3 is:

- Fixed a bug where sensitive configuration information could be disclosed when an fatal error occurred.

Some of the most notable fixes for 1.6.1.21 are:

- Fixed a long-standing issue where the core was unable to access remote resources in some circumstances.
- Fixed a bug where sensitive configuration information could be disclosed when an fatal error occurred.
- Fixed an issue where spammers would exploit the contact form to send messages to third parties.
- Fixed a crash when trying to send an email to an address containing unsupported characters.
- Fixed a privilege-escalation issue in the Back Office where a logged user could potentially execute arbitrary code in the system.


[Download PrestaShop now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

Here is the [complete list of changes for 1.7.4.3](https://github.com/PrestaShop/PrestaShop/releases/tag/1.7.4.3)

- Core:
  - Bug fix:
    - #10829: Hide arguments in debug trace page

Here is the [complete list of changes for 1.6.1.21](https://github.com/PrestaShop/PrestaShop/releases/tag/1.6.1.21)

- Back Office:
  - Bug fix:
    - #8321: Fix Module configure permission
    - #8274: Disallow the negative discounts in orders
    - #8786: Replace serialize with json_encode
- Front Office:
  - Improvement:
    - #8658: Removed duplicate expressions
- Bug fix:
    - #8828: Stop sending a copy of the contact message to the "author" (avoid spam)
- Core:
  - Bug fix:
    - #5378: Add a fallback to curl when file_get_content() return an empty response
    - #10680: Hide arguments in debug trace page
    - #8758: Fix the possibility to create a customer with "¤" or "
    - #8763: Catch all Swift exceptions in Mail::Send()


Contributors to this patch versions, from both the Core team and the community at large: [Axome](https://github.com/axometeam), [gfilippakis](https://github.com/gfilippakis), [Hibatallah Aouadni](https://github.com/hibatallahAouadni), [Jonathan Lelievre](https://github.com/jolelievre), [Pablo Borowicz](https://github.com/eternoendless), [Pierre Joube](https://github.com/PierreJoube), [Rémi Gaillard](https://github.com/rGaillard), [Thomas LEVIANDIER](https://github.com/tomlev). Thank you! Three of you contributed for the very first time, warm welcome :-)

A very special thank to Panatan from the forum and to Robin Peraglie for the security reports!

Since version 1.7.4.3 is a "patch" update to version 1.7.4.2, upgrading from any 1.7.4 version will be easy: features will work better, and modules & themes which worked fine on 1.7.4.x will work just as well with 1.7.4.3.<br/>
Upgrades from a standard 1.7.x version should work just as well.

This the same for 1.6.1.21 regarding 1.6.1.x versions.
