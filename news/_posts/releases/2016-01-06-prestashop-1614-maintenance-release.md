---
layout: post
title:  "Release of PrestaShop 1.6.1.4"
subtitle: "Maintenance version of the 1.6.1.x branch"
date:   2016-01-07
author: julienmartin
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.6.1.x
---

PrestaShop 1.6.1.4 is now available. This maintenance release [closes 19 issues](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+base%3A1.6.1.x+is%3Aclosed+merged%3A%3E2015-11-27+) since version 1.6.1.3 (released on November 26th, 2015).

As the version number indicates (as per [our SemVer-like versioning](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/)), this is the fourth patch release for PrestaShop 1.6.1.0.

Our main motivation for releasing this version was to fix the MySQL 5.7 and PHP 7 compatibility.

As usual, we do not recommend upgrading your store when you are running promotions leading to a high traffic on your website. For those of you in the midst of winter sales: you might want to wait for the end of the Sales period before upgrading!

We hope you enjoy this patch release!

###The changes

For a full list of changes, [see the list of pull requests merged into the 1.6.1.x branch](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+base%3A1.6.1.x+is%3Aclosed+merged%3A%3E2015-11-27+).

Here are the changes that 1.6.1.4 brings:

* PHP 7 & MySQL 5.7 are now fully supported
* Order page: Tax excluded price is now displayed on the product list in the back office
* Product page: Discounts are correctly refreshed when quantity is changed
* Cart rules page: the product input field hides when free gift is disabled
* Fix invoice numbers in multishop mode
* Addons modal dialog supports translation
* Fix combinations prices for shops with multiple currencies
* Fix robot.txt rules for multilingual shops
* Uploader is no longer case-sensitive for extensions
* Fix error when address is deleted but still used by a cart
* Shipping cost calculation is now better rounded
* CMS content, metas and countries translated into Swedish
* And other minor fixes

As a maintenance release, this patch contains few changes to ensure a stable update.

The [PrestaShop 1.6.1.4](https://www.prestashop.com/en/developers-versions/changelog/1.6.1.4-stable) changelog is available.

Since version 1.6.1.4 is a "patch" update to version 1.6.1.0, upgrading from that version will be as smooth as silk for everyone: features will work better, and modules & themes which worked fine on 1.6.1.0 will work just as well with 1.6.1.4.

This release had 15 contributors, both from PrestaShop and from the Community at large. A huge "thank you!" to each of them!

* @AlexEven
* @Befox
* @bluepowder
* @daresh
* @Eolia
* @firstred
* @gRoussac
* @gskema
* @julienbourdeau
* @kelu95
* @MacRoy
* @mickaelandrieu
* @Quetzacoalt91
* @Shudrum
* @tchauviere

Let's go, [upgrade your store(s)](http://doc.prestashop.com/display/PS16/Updating+PrestaShop)! Upgrading from 1.6.1.0-1.6.1.3 is completely safe, upgrades from a standard 1.6.0.x version should work just as well, and those upgrading from version 1.5, 1.4 or even 1.3 should take their time and pay attention to their modules, their theme and their custom modifications!

[Download 1.6.1.4 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

