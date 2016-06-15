---
layout: post
title:  "Release of PrestaShop 1.6.1.6"
subtitle: "Maintenance version of the 1.6.1.x branch"
date:   2016-06-15 09:30:41
author: xavierborderie
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.6.1.x
---

PrestaShop 1.6.1.6 is now available. This maintenance release [has seen 20 changes](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Aclosed+milestone%3A1.6.1.6) since version 1.6.1.5 ([released on April 13th](http://build.prestashop.com/news/prestashop-1615-maintenance-release/)).

Yes indeed, we have been mentionning v1.6.1.6 [since May](http://build.prestashop.com/news/core-weekly-week-19/) but, y'know, with the lifting work necessary to get [PrestaShop 1.7 Beta 1](http://build.prestashop.com/news/prestashop-1-7-beta-1-open-for-feedback/) off the ground, the 1.6.1.6 release had to be delayed a bit. Here it is at last!

As the version number indicates (as per [our SemVer-like versioning](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/)), this is the 6th patch release for PrestaShop 1.6.1.0.<br/>

As usual, if you are currently running promotions leading to high traffic on your website, we recommend that you wait for the promotion to end before attempting any upgrade and technical change to your store.

We hope you enjoy this new patch release!


### The changes

For a full list of changes, [see the list of pull requests merged into the 1.6.1.x branch in this milestone](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Aclosed+milestone%3A1.6.1.6)

Here are some of the most notable changes that this version brings:

* FO: Cart Rules have an improved customer display, with much more useful information.
* BO: All carriers are now displayed in the Dashboard.
* Core: Fixed "Uncaught exception 'PrestaShopException' with message 'Property StockAvailable->id_product_attribute is empty".
* WS: Compatibility fox for PHP 5.2, 5.3 and 7.0.
* PDF: Pagination is now implemented for all PDF types.
* Tests: Fix for PHP7.
* Several smaller fixes.

The [PrestaShop 1.6.1.6 changelog](https://www.prestashop.com/en/developers-versions/changelog/1.6.1.6-stable) is available.

Since version 1.6.1.6 is a "patch" update to version 1.6.1.0, upgrading from that version will be as smooth as silk for everyone: features will work better, and modules & themes which worked fine on 1.6.1.0 will work just as well with 1.6.1.6.

This release had 13 contributors, both from PrestaShop and from the Community at large. 

* @alexsegura
* @firstred
* @hiousi
* @idnovate
* @julienbourdeau
* @kelu95
* @maximebiloe
* @mickaelandrieu
* @nobodaddy
* @okom3pm
* @raphael-homann
* @rgaillard
* @xbordere

A huge "thank you!" to each of the 7 outside contributors, who gave their time and knowledge for the benefit of the whole PrestaShop community! [You too can contribute to the next version](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)!

Let's go, [upgrade your store(s)](http://doc.prestashop.com/display/PS16/Updating+PrestaShop)! Upgrading from 1.6.1.0-1.6.1.5 is completely safe, upgrades from a standard 1.6.0.x version should work just as well, and those upgrading from version 1.5, 1.4 or even 1.3 should take their time and pay attention to their modules, their theme and their custom modifications!

[Download 1.6.1.6 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}
