---
layout: post
title:  "Release of PrestaShop 1.7.3.4 and 1.6.1.20"
subtitle: "Maintenance version of the 1.7.3.x and 1.6.1.x branch"
date:   2018-06-27 14:0:00
authors: [ AntoineThomas, PabloBorowicz ]
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.3.x
 - 1.7
 - 1.6.1.x
 - 1.6
 - security
---

PrestaShop 1.7.3.4 and 1.6.1.20 are now available. These versions fix security and PHP compatiblity issues.

Since these versions fix security problems, we **strongly** encourage you to upgrade your shop as soon as possible.

The most notable fix for 1.7.3.x is:

* Improve cookies encryption

Some of the most notable fixes for 1.6.1.x are:

* Improve cookies encryption
* Improve compatibility with PHP 7.1 and 7.2


[Download PrestaShop now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

Here is the [complete list of changes for 1.7.3.4](https://github.com/PrestaShop/PrestaShop/milestone/45?closed=1)

- Core:
  - Improvement:
    - #9222: Improve cookie encryption

Here is the [complete list of changes for 1.6.1.20](https://github.com/PrestaShop/PrestaShop/milestone/43?closed=1)

- Back Office:
  - Bug fix:
    - [#8724](https://github.com/PrestaShop/PrestaShop/pull/8724): PHP 7.2 compat - Fix fatal error
- Front Office:
  - Bug fix:
    - [#9126](https://github.com/PrestaShop/PrestaShop/pull/9126): Control if customer is the owner of the selected order in contact form
- Core:
  - Improvement:
    - [#9141](https://github.com/PrestaShop/PrestaShop/pull/9141): Use https no http employee class
    - [#9218](https://github.com/PrestaShop/PrestaShop/pull/9218): Improve cookie encryption
- Web Services:
  - Bug fix:
    - [#8821](https://github.com/PrestaShop/PrestaShop/pull/8821): FIX PHP 7.1 compat in WebserviceOutputBuilder

Contributors to this patch versions, from both the Core team and the community at large: [Pierre RAMBAUD](https://github.com/PierreRambaud), [Pablo Borowicz](https://github.com/eternoendless), [Axome](https://github.com/axometeam), [Jáchym Toušek](https://github.com/enumag), [okom3pom](https://github.com/okom3pom), [Thomas N](https://github.com/Quetzacoalt91). Thank you! Two of you contributed for the very first time, warm welcome :-)

A very special thank to Charles Fol from Ambionics for the security report!

Since version 1.7.3.4 is a "patch" update to version 1.7.3.3, upgrading from any 1.7.3 version will be easy: features will work better, and modules & themes which worked fine on 1.7.3.x will work just as well with 1.7.3.4.<br/>
Upgrades from a standard 1.7.x version should work just as well.

This the same for 1.6.1.20 regarding 1.6.1.x versions.
