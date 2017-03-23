---
layout: post
title:  "Release of PrestaShop 1.6.1.12"
subtitle: "Maintenance version of the 1.6.1.x branch"
date:   2017-03-23 09:10:11
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

PrestaShop 1.6.1.12 is now available. This maintenance release [has seen 21 pull requests](https://github.com/PrestaShop/PrestaShop/milestone/17?closed=1) merged since version 1.6.1.11.

Continuing on our promise to support 1.6 with patch releases, we are happy to deliver this new version. Please do upgrade to this latest and greatest version of PrestaShop 1.6!

This version is also important because it fixes a security issue in PrestaShop allowing a person with access to the back office to upload modules. This issue mainly concerns Addons contributors with back-office demos. Thank you Tomer Grassiany for your responsible disclosure of the issue, and your help with its resolution!<br/>
This is the same issue that pushed us to [release 1.7.0.6](http://build.prestashop.com/news/prestashop-1-7-0-6-maintenance-security-release/) swiftly. Version 1.6.1.12 took more time to release because this version has several more changes, and internal tests took more time. This version was supposed to be released in the last days of February, and because of those QA needs, it is now the March monthly update to PS 1.6. Sorry for the delay!

[Download 1.6.1.12 now!](https://www.prestashop.com/en/developers-versions#previous-version){: .btn .btn-lg .btn-success}
{: .text-center}


As the version number indicates (as per [our SemVer-like versioning](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/)), this is the 12th patch release for PrestaShop 1.6.1.0.<br/>

As usual, if you are currently running promotions leading to high traffic on your website, we recommend that you wait for the promotion to end before attempting any upgrade and technical change to your store.

We hope you enjoy this new release!


### The changes

For a full list of changes, [see the list of pull requests merged into the 1.6.1.x branch in this milestone](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Amerged%20milestone%3A1.6.1.12%20)

Here are some of the most notable changes that this version brings:

* Fix permission issues.
* Fix ecotax issue.
* Fix doubled quantity for customizable products.
* Fix PHP 7.1 compatibility.
* Display product reference in best-seller module.
* Use correct sender email in order_customer_comment.
* Avoid overwriting $token in global Smarty context
* Webservices now show PS validation errors.
* ...and several other fixes.


The [PrestaShop 1.6.1.12 changelog](https://www.prestashop.com/en/developers-versions/changelog/1.6.1.12-stable) is available.

Since version 1.6.1.12 is a "patch" update to version 1.6.1.0, upgrading from that version will be as smooth as silk for everyone: features will work better, and modules & themes which worked fine on 1.6.1.0 will work just as well with 1.6.1.12.

This release had 14 contributors, both from PrestaShop and from the Community at large. 

* @aleeks
* @alexeven
* @alexsegura
* @axometeam
* @dralbert
* @fatmabouchekoua
* @flowster
* @kompilorb
* @kpodemski 
* @maximebiloe
* @mcdado
* @mrmanchot
* @paeddl
* @webmak

A huge "thank you!" to each of the 9 outside contributors, who gave their time and knowledge for the benefit of the whole PrestaShop community! [You too can contribute to the next version](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)!

Let's go, [upgrade your store(s)](http://doc.prestashop.com/display/PS16/Updating+PrestaShop)! Upgrading from 1.6.1.0-1.6.1.11 is completely safe, upgrades from a standard 1.6.0.x version should work just as well, and those upgrading from version 1.5, 1.4 or even 1.3 should take their time and pay attention to their modules, their theme and their custom modifications!
