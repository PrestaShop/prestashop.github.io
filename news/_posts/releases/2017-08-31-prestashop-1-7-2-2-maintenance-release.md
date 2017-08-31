---
layout: post
title:  "Release of PrestaShop 1.7.2.2"
subtitle: "Maintenance version of the 1.7.2.x branch"
date:   2017-08-31 05:10:11
authors: [ xavierborderie ]
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.2.x
 - 1.7
---

PrestaShop 1.7.2.2 is now available. This maintenance release fixes 8 issues reported on version 1.7.2.

Some of the most notable fixes are:

* Price and VAT fixes.
* Price computing performance improvement: 1.7 front-end should now be [faster than 1.6](http://www.jobs.net/jobs/prestashop/fr/)'s for popular stores!
* Fix error while reaching AdminModules

[Download PrestaShop 1.7.2.2 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

Here is the [complete list of changes](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20milestone%3A1.7.2.2):

- Back Office:
  - Bug fix:
    - [#8266](https://github.com/PrestaShop/PrestaShop/pull/8266) Fix error while reaching AdminModules
    - [#8238](https://github.com/PrestaShop/PrestaShop/pull/8238) Fix wrong final combination price if BC Math is not available
    - [#8063](https://github.com/PrestaShop/PrestaShop/pull/8063) Display texture image in combination form
    - [#8057](https://github.com/PrestaShop/PrestaShop/pull/8057) Save before generate combinations

- Front Office:
  - Improvement:
    - [#8082](https://github.com/PrestaShop/PrestaShop/pull/8082) Scroll top to product list when paginate

- Core:
  - Improvement:
    - [#8212](https://github.com/PrestaShop/PrestaShop/pull/8212) Optimize specific price computing by executing the query only when needed
  - Bug fix:
    - [#8210](https://github.com/PrestaShop/PrestaShop/pull/8210) Fix missing product limit/offset when ordering by price on Sale page
    - [#8138](https://github.com/PrestaShop/PrestaShop/pull/8138) Fix tax calculation when vat number is used

The [PrestaShop 1.7.2.2 changelog](https://download.prestashop.com/download/releases/changelog_1.7.2.2.txt) is available.

Contributors to this patch version, from both the Core team and the community at large: @eternoendless, @fatmabouchekoua, @jocel1, @prestamodule, and @quetzacoalt91! Thank you!

Since version 1.7.2.2 is a "patch" update to version 1.7.2.2, upgrading from any 1.7.2 version will be easy: features will work better, and modules & themes which worked fine on 1.7.2.0 will work just as well with 1.7.2.1.<br/>
Upgrades from a standard 1.7.x version should work just as well, and those upgrading from older versions (1.6, 1.5, 1.4 or even older) should take their time and pay attention to their modules, their theme and their custom modifications!
