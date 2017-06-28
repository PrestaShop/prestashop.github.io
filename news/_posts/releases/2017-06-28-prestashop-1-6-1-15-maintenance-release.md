---
layout: post
title:  "Release of PrestaShop 1.6.1.15"
subtitle: "Maintenance version of the 1.6.1.x branch"
date:   2017-06-28 02:00:00
authors: [ xavierborderie ]
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.6.1.x
 - 1.6
---

PrestaShop 1.6.1.15 is now available. This maintenance release has seen 19 pull requests merged since version 1.6.1.14.

Continuing on our promise to support 1.6 with patch releases, we are happy to deliver this new version. Please do upgrade to this latest and greatest version of PrestaShop 1.6!

[Download 1.6.1.15 now!](https://www.prestashop.com/en/previous-versions){: .btn .btn-lg .btn-success}
{: .text-center}

As the version number indicates (as per [our SemVer-like versioning](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/)), this is the 15th patch release for PrestaShop 1.6.1.0.

As usual, if you are currently running promotions leading to high traffic on your website, we recommend that you wait for the promotion to end before attempting any upgrade and technical change to your store.

We hope you enjoy this new release!


### The changes

For a full list of changes, [see the list of pull requests merged into the 1.6.1.x branch in this milestone](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20is%3Amerged%20milestone%3A1.6.1.15)

Here are some of the most notable changes that this version brings:

* Fix the conversion_rate in the order_payment table
* Fix the specific price of the default combination
* Fix the categories tree
* Fix subcategories pagination
* Display product reference in Stock management list
* Fix available quantity for ASM items in Order_edit & FO
* Fix ASM real quantity issues when changing SupplyOrder status
* Eliminate currencies doubling in ASM currency list
* Fix wrong keys for cache
* Do not clutter webcaches with duplicated assets' objects
* ...and several other fixes.


The [PrestaShop 1.6.1.15 changelog](https://www.prestashop.com/en/system/files/ps_releases/changelog_1.6.1.15.txt) is available.

Since version 1.6.1.15 is a "patch" update to version 1.6.1.0, upgrading from that version will be as smooth as silk for everyone: features will work better, and modules & themes which worked fine on 1.6.1.0 will work just as well with 1.6.1.15.

This release had 8 contributors, both from PrestaShop and from the Community at large.

* @aleeks
* @axometeam
* @drzraf
* @hibatallahaouadni
* @inem0o
* @mcdado
* @quetzacoalt91
* @vinvin27

A huge "thank you!" to each of the 5 outside contributors, who gave their time and knowledge for the benefit of the whole PrestaShop community! [You too can contribute to the next version](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)!

Let's go, [upgrade your store(s)](http://doc.prestashop.com/display/PS16/Updating+PrestaShop)! Upgrading from 1.6.1.0-1.6.1.14 is completely safe; upgrading from a standard 1.6.0.x version should work just as well. Those upgrading from version 1.5, 1.4 or even 1.3 should take their time and pay attention to their modules, their theme and their custom modifications!
