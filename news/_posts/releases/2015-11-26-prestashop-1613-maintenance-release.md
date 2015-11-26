---
layout: post
title:  "Release of PrestaShop 1.6.1.3"
subtitle: "Maintenance version of the 1.6.1.x branch"
date:   2015-11-26 18:30:41
author: xavierborderie
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.6.1.x
---

PrestaShop 1.6.1.3 is now available. This maintenance release [closes 6 issues](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+base%3A1.6.1.x+is%3Aclosed+merged%3A%3E2015-10-29+) since version 1.6.1.2 (released on November 29th). 

As the version number indicates (as per [our SemVer-like versioning](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/)), this is the third patch release for PrestaShop 1.6.1.0.<br/>

It is also the first of our [new release process for patch versions](http://build.prestashop.com/news/more-focused-patch-versions/) (as per our [SemVer](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/)-like versioning), which changes the way we plan and build patch releases so that they can be more focused and more regular.<br/>
This means that you can expect another small/focused patch release in a few weeks: 1.6.1.4 is already planned, and you can see it evolve [right on GitHub](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Aopen+is%3Apr+milestone%3A1.6.1.4).
Version 1.6.1.3 benefitted from a RC period, which explains why it took so much time to be release. The next patch versions will be directly released, in order to fix bugs for you in a faster way.

Of note: MySQL 5.7 does not play well with PrestaShop 1.6 at the moment. A fix is planned for PrestaShop 1.7: [see pull-request #4507](https://github.com/PrestaShop/PrestaShop/pull/4507), and once it is in place, it will be also fixed in version 1.6.1.4 so that PrestaShop 1.6 and MySQL 5.7 may finally work well together.

We hope you enjoy this patch release!


### The changes

For a full list of changes, [see the list of pull requests merged into the 1.6.1.x branch](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+base%3A1.6.1.x+is%3Aclosed+merged%3A%3E2015-10-29+).

Here are a few highlights for 1.6.1.3:

* Fix an issue where existing products couldn't be changed if they had an overly long meta description.
* Add id_order to order_details link to work without JavaScript.
* Fix flush of local cache when adding a specific price.
* Replace Swiss German with Germany German.
* Fix fatal error in Product::getPublicPrice().
* Fix for intra-EU VAT.

As you can see, there are very few changes, to ensure that the update path is easy.

The [PrestaShop 1.6.1.3 changelog](https://www.prestashop.com/en/developers-versions/changelog/1.6.1.3-stable) is available, as well as [its release notes](https://www.prestashop.com/en/release-notes-1.6.1.3-stable) (based on the 1.6.1.0 ones).

Since version 1.6.1.3 is a "patch" update to version 1.6.1.0, upgrading from that version will be as smooth as silk for everyone: features will work better, and modules & themes which worked fine on 1.6.1.0 will work just as well with 1.6.1.3.

This release had 36 contributors, both from PrestaShop and from the Community at large. A huge "thank you!" to each of them!

* @djfm
* @drzraf
* @firstred
* @jocel1
* @julienbourdeau
* @maximebiloe

Let's go, [upgrade your store(s)](http://doc.prestashop.com/display/PS16/Updating+PrestaShop)! Upgrading from 1.6.1.0-1.6.1.2 is completely safe, upgrades from a standard 1.6.0.x version should work just as well, and those upgrading from version 1.5, 1.4 or even 1.3 should take their time and pay attention to their modules, their theme and their custom modifications!

[Download 1.6.1.3 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}
