---
layout: post
title:  "Release of PrestaShop 1.7.3.2"
subtitle: "Maintenance version of the 1.7.3.x branch"
date:   2018-05-03 14:20:00
authors: [ AntoineThomas, PabloBorowicz ]
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.3.x
 - 1.7
---

PrestaShop 1.7.3.2 is now available. This maintenance release fixes 17 issues reported on version 1.7.3.x.

Some of the most notable fixes are:

* Updating combinations wasn’t working with PHP < 7.1
* Installing a Theme with PrestaTrust modules was failing
* Various issues with product stock availability


[Download PrestaShop 1.7.3.2 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

Here is the [complete list of changes]https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+milestone%3A1.7.3.2+is%3Amerged+):

[#8849](https://github.com/PrestaShop/PrestaShop/pull/8849)

- Back Office:
  - Improvement:
    - [#8834](https://github.com/PrestaShop/PrestaShop/pull/8834): Adds missing Persian translations for data and samples
  - Bug fix:
    - [#8752](https://github.com/PrestaShop/PrestaShop/pull/8752): Check product availability before validating orders
    - [#8975](https://github.com/PrestaShop/PrestaShop/pull/8975): Fix broken "you must first create a new language" link in BO Translations
    - [#8965](https://github.com/PrestaShop/PrestaShop/pull/8965): Fix theme install with prestatrust modules
    - [#8517](https://github.com/PrestaShop/PrestaShop/pull/8517): Fixed bug when using 2 swap in 1 form
    - [#8948](https://github.com/PrestaShop/PrestaShop/pull/8948): Fixed update of combinations
    - [#8762](https://github.com/PrestaShop/PrestaShop/pull/8762): Specific price created for a cart is displayed in the front end as the product price
- Front Office:
  - Improvement:
    - [#8835](https://github.com/PrestaShop/PrestaShop/pull/8835): Replace Noto Sans font with Vazir font for Farsi in Classic theme
  - Bug fix:
    - [#9005](https://github.com/PrestaShop/PrestaShop/pull/9005): Fix cannot order oos product even if it's allowed
    - [#8951](https://github.com/PrestaShop/PrestaShop/pull/8951): Fix error display on cart quantity edition
    - [#8946](https://github.com/PrestaShop/PrestaShop/pull/8946): Fix button show password height on Safari
    - [#8940](https://github.com/PrestaShop/PrestaShop/pull/8940): Check product availability in order step
    - [#8931](https://github.com/PrestaShop/PrestaShop/pull/8931): Out of stock message display only if customer can order the product
- Core:
  - Bug fix:
    - [#8973](https://github.com/PrestaShop/PrestaShop/pull/8973): Fixed undefined class constant
    - [#8850](https://github.com/PrestaShop/PrestaShop/pull/8850): Fix profile permission array construction
    - [#8679](https://github.com/PrestaShop/PrestaShop/pull/8679): Catch Throwable errors on CLI install and check Theme instance in context
- Installer:
  - Improvement:
    - [#8843](https://github.com/PrestaShop/PrestaShop/pull/8843): Minor install improvements
  - Bug fix:
    - [#8949](https://github.com/PrestaShop/PrestaShop/pull/8949): Remove addition of . folder in release archives
- Localization:
  - Improvement:
    - [#8832](https://github.com/PrestaShop/PrestaShop/pull/8832): Update Iran tax rate


Contributors to this patch version, from both the Core team and the community at large: Alban L, AliShareei, GuillaumeKadolis, Loïc Sapone, Marion François, Mehrshad, Mickaël Andrieu, nigel, Nigel Helliwell, Pablo Borowicz, Sarah Lorenzini, Thomas LEVIANDIER, Thomas Nabord. Thank you! Six of you contributed for the very first time, warm welcome :-) 

Since version 1.7.3.2 is a "patch" update to version 1.7.3.1, upgrading from any 1.7.3 version will be easy: features will work better, and modules & themes which worked fine on 1.7.3.x will work just as well with 1.7.3.2.<br/>
Upgrades from a standard 1.7.x version should work just as well, and those upgrading from older versions (1.6, 1.5, 1.4 or even older) should take their time and pay attention to their modules, their theme and their custom modifications!
