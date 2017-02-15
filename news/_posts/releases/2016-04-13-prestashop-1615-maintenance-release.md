---
layout: post
title:  "Release of PrestaShop 1.6.1.5"
subtitle: "Maintenance version of the 1.6.1.x branch"
date:   2016-04-13 14:30:41
authors: [ xavierborderie ]
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.6.1.x
---

PrestaShop 1.6.1.5 is now available. This maintenance release [closes 32 issues](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+base%3A1.6.1.x+is%3Aclosed+merged%3A%3E2016-01-07) since version 1.6.1.4 ([released on January 7th](http://build.prestashop.com/news/prestashop-1614-maintenance-release/)). 

As the version number indicates (as per [our SemVer-like versioning](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/)), this is the 5th patch release for PrestaShop 1.6.1.0.<br/>

As usual, if you are currently running promotions leading to high traffic on your website, we recommend that you wait for the promotion to end before attempting any upgrade and technical change to your store.

We hope you enjoy this new patch release!


### The changes

For a full list of changes, [see the list of pull requests merged into the 1.6.1.x branch since version 1.6.1.4](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+base%3A1.6.1.x+is%3Aclosed+merged%3A%3E2016-01-07).

Here are some of the most notable changes that this version brings:

* Price: Fix combination price calculation with impact and reduction.
* Order slips: Fix incorrect shipping taxes.
* Front office: Split CSS for IE9.
* Front office: Fix specific price.
* Front office: Fix incorrect cart rules list in case of country restriction.
* PDF: Re-added field note in invoice.
* PDF: Re-added shipping box in invoice.
* PDF: Updated b2b template.
* PDF: Improved pagination on invoices.
* PDF: Use address from order for invoice.
* PDF: Update constraints on Addresses display.
* Class: Added hook to indicate which method to use instead of deprecated methods.
* CORE: Fixed double preg_quote() in Dispatcher.php.
* CORE: Updated SwiftMailer to v5.2.2.
* Security: Use Mcrypt's CBC mode instead of the ECB mode.
* i18n: Updated installer for Italian, Vietnamese, and Polish.
* i18n: Updated Hong Kong localization pack.
* i18n: Improved Dutch meta info.

Note that updating SwiftMailer is a nice step forward security-wise: most notably, it enables support for STARTTLS, making it possible for PrestaShop to work with GMail, Outlook, etc. We do advise you to update to 1.6.1.5 solely for this. However, if you cannot upgrade, contributor Michael Dekker built a [free module to upgrade SwiftMailer for PrestaShop 1.5.0.0-1.6.1.4](https://www.prestashop.com/forums/topic/519767-free-module-swiftmailer-upgrader-version-541/). Thank you Michael!

The [PrestaShop 1.6.1.5 changelog](https://www.prestashop.com/en/developers-versions/changelog/1.6.1.5-stable) is available.

Since version 1.6.1.5 is a "patch" update to version 1.6.1.0, upgrading from that version will be as smooth as silk for everyone: features will work better, and modules & themes which worked fine on 1.6.1.0 will work just as well with 1.6.1.5.

This release had 19 contributors, both from PrestaShop and from the Community at large. 

* @erouvier29
* @kelu95 
* @gwarnants
* @mickaelandrieu
* @kpodemski
* @Dh42 
* @prestamodule
* @SDF-of-BC
* @mcdado
* @studiokiwik 
* @AlexEven 
* @ZiZuu-store
* @rGaillard
* @maximebiloe
* @nihco2
* @firstred 
* @julienbourdeau
* @Nobodaddy
* @Shudrum 

A huge "thank you!" to each of the 11 outside contributors, who gave their time and knowledge for the benefit of the whole PrestaShop community! [You too can contribute to the next version](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)!

Let's go, [upgrade your store(s)](http://doc.prestashop.com/display/PS16/Updating+PrestaShop)! Upgrading from 1.6.1.0-1.6.1.4 is completely safe, upgrades from a standard 1.6.0.x version should work just as well, and those upgrading from version 1.5, 1.4 or even 1.3 should take their time and pay attention to their modules, their theme and their custom modifications!

[Download 1.6.1.5 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}
