---
layout: post
title:  "Release of PrestaShop 1.6.1.7"
subtitle: "Maintenance version of the 1.6.1.x branch"
date:   2016-09-06 09:10:11
author: xavierborderie
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.6.1.x
---

PrestaShop 1.6.1.7 is now available. This maintenance release [has seen 18 pull requests](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Aclosed+milestone%3A1.6.1.7) since version 1.6.1.6 ([released on June 15th](http://build.prestashop.com/news/prestashop-1616-maintenance-release/)).

Continuing on our promise to support 1.6 with patch releases, we are happy to deliver this new version, which fixes some annoying behaviors. A very important fixes touches a voucher-displaying issue introduced with 1.6.1.6 (sorry!): we do suggest that you update to this latest and greatest version of PrestaShop 1.6, particularly if you are currently using v1.6.1.6.

[Download 1.6.1.7 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

As the version number indicates (as per [our SemVer-like versioning](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/)), this is the 7th patch release for PrestaShop 1.6.1.0.<br/>

As usual, if you are currently running promotions leading to high traffic on your website, we recommend that you wait for the promotion to end before attempting any upgrade and technical change to your store.

We hope you enjoy this new release!


### The changes

For a full list of changes, [see the list of pull requests merged into the 1.6.1.x branch in this milestone](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Amerged%20milestone%3A1.6.1.7%20)

Here are some of the most notable changes that this version brings:

* FO: Prevent customers from viewing all voucher codes.
* FO: Fix rounding error in ProductController.
* FO: Add a new hook on cart product line.
* CO: Fix bad discount computation when multiple tax rates involved
* CO: Fixed cart rule removal with gift product
* BO: Fix CSV import on PHP 7.
* ...and several other fixes.


The [PrestaShop 1.6.1.7 changelog](https://www.prestashop.com/en/developers-versions/changelog/1.6.1.7-stable) is available.

Since version 1.6.1.7 is a "patch" update to version 1.6.1.0, upgrading from that version will be as smooth as silk for everyone: features will work better, and modules & themes which worked fine on 1.6.1.0 will work just as well with 1.6.1.7.

This release had 14 contributors, both from PrestaShop and from the Community at large. 

* @alexeven
* @davidef
* @erouvier29
* @firstred
* @jd440
* @julienbourdeau
* @kpodemsi
* @matthieume
* @maximebiloe
* @mcdado
* @perfecticus
* @prestamodule
* @quetzacoalt91
* @therampagerado

A huge "thank you!" to each of the 7 outside contributors, who gave their time and knowledge for the benefit of the whole PrestaShop community! [You too can contribute to the next version](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)!

Let's go, [upgrade your store(s)](http://doc.prestashop.com/display/PS16/Updating+PrestaShop)! Upgrading from 1.6.1.0-1.6.1.6 is completely safe, upgrades from a standard 1.6.0.x version should work just as well, and those upgrading from version 1.5, 1.4 or even 1.3 should take their time and pay attention to their modules, their theme and their custom modifications!
