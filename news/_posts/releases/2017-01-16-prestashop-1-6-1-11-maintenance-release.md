---
layout: post
title:  "Release of PrestaShop 1.6.1.11"
subtitle: "Maintenance version of the 1.6.1.x branch"
date:   2017-01-16 09:10:11
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

PrestaShop 1.6.1.11 is now available. This maintenance release [has seen 19 pull requests](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Aclosed+milestone%3A1.6.1.11) merged since version 1.6.1.10.

Continuing on our promise to support 1.6 with patch releases, we are happy to deliver this new version. Please do upgrade to this latest and greatest version of PrestaShop 1.6!

This version is also important because it fixes several long-standing issues with Advanced Stock Management, as explained in [the article presenting the beta of 1.6.1.11](http://build.prestashop.com/news/prestashop-1-6-1-11-beta/). We received no negative feedback about those changes, 

[Download 1.6.1.11 now!](https://www.prestashop.com/en/developers-versions#previous-version){: .btn .btn-lg .btn-success}
{: .text-center}

As the version number indicates (as per [our SemVer-like versioning](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/)), this is the 11th patch release for PrestaShop 1.6.1.0.<br/>

As usual, if you are currently running promotions leading to high traffic on your website, we recommend that you wait for the promotion to end before attempting any upgrade and technical change to your store.

We hope you enjoy this new release!


### The changes

For a full list of changes, [see the list of pull requests merged into the 1.6.1.x branch in this milestone](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Aclosed+milestone%3A1.6.1.11)

Here are some of the most notable changes that this version brings:

* Fix detection of APCu on Performance page
* Fix multiple configuration entry for PERCENT_PRODUCT_OUT_OF_STOCK_EXPIRE
* Remove synchronous javascript call in translations
* Fix grid view payment methods on small devices
* PHP 7.1 Fatal error: operator not supported in DbQuery.php
* ...and several other fixes.


The [PrestaShop 1.6.1.11 changelog](https://www.prestashop.com/en/developers-versions/changelog/1.6.1.11-stable) is available.

Since version 1.6.1.11 is a "patch" update to version 1.6.1.0, upgrading from that version will be as smooth as silk for everyone: features will work better, and modules & themes which worked fine on 1.6.1.0 will work just as well with 1.6.1.11.

This release had 18 contributors, both from PrestaShop and from the Community at large. 

* @aleeks
* @antoin-m
* @Casper-O
* @debuss
* @dkarvounaris
* @firstred
* @gabdara
* @julienbourdeau
* @mcdado
* @olivier-monaco
* @remotehelp
* @roja45
* @shaffe-fr
* @thecb1
* @tucoinfo
* @Uebix
* @ventuc
* @ZiZuu-store

A huge "thank you!" to each of the 15 outside contributors, who gave their time and knowledge for the benefit of the whole PrestaShop community! [You too can contribute to the next version](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)!

Let's go, [upgrade your store(s)](http://doc.prestashop.com/display/PS16/Updating+PrestaShop)! Upgrading from 1.6.1.0-1.6.1.10 is completely safe, upgrades from a standard 1.6.0.x version should work just as well, and those upgrading from version 1.5, 1.4 or even 1.3 should take their time and pay attention to their modules, their theme and their custom modifications!
