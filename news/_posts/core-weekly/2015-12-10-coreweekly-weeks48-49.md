---
layout: post
title:  "PrestaShop Core Weekly - Week 48-49"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-12-10 18:37:41
author: xavierborderie
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop core codebase during last two weeks, from Monday 23rd of November to Sunday 6th of December.


## Milestones

We released [PrestaShop 1.6.1.3](http://build.prestashop.com/news/prestashop-1613-maintenance-release/)! You can [download it now](https://www.prestashop.com/en/download).
It's the first of our [more regular and focused patch versions for PrestaShop 1.6](http://build.prestashop.com/news/more-focused-patch-versions/). Expect 1.6.1.4 soon!

You can follow the advancement of v1.6.1.4 [by following its GitHub milestone](https://github.com/PrestaShop/PrestaShop/milestones/1.6.1.4).

Want to help improve PrestaShop? Tell us what you think about the [currently open pull-requests](https://github.com/PrestaShop/PrestaShop/pulls) (you can focus on [the `develop` branch](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Aopen+base%3Adevelop) or [the `1.6.1.x` branch]()), or [review your own](http://build.prestashop.com/news/review-your-pull-requests/)! Thank you!


## Code changes in 1.6.1.x

Here are the merged pull-requests on the [1.6.1.x branch](https://github.com/PrestaShop/PrestaShop/tree/1.6.1.x) since the last Core Weekly Report!

 
#### Core
 
 * #4523: Fix/revert php7, by @julienbourdeau.
 
#### Localization

 * #4256: Swedish, translate country.xml. Thank you @MacRoy!
 * #4258: Swedish - Update meta.xml. Thank you @MacRoy!
 * #4278: Update Dutch tabs. Fix spelling errors. Thank you @MacRoy!
 * #4299: Swedish - Update cms.xml. Thank you @MacRoy!


## Code changes in 1.7.0.0-develop

Now let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

Note that the Starter Theme repo (see next section) is entirely part of the PrestaShop 1.7.0.0 project.


#### Text
 
 * #4508: Don't display host names in README.md, by @xBorderie. Thank you @inetbiz!
 
 
#### Back office

 * #4509: manage product pack items, by @kelu95.
 * #4514: Add php sf2 trans/transchoice parser for admin translation, by @kelu95.
 * #4522: manage multishop fields on product form, by @kelu95.
 * #4525: Advanced product management - product quantities support on new Product page, by @xGouley.
 * #4532: better display for displayAdminProductsExtra hook, by @xGouley.
 * #4533: Admin Product page: empty catalog page with new design, by @xGouley.
 * #4535: refacto product form DI, add some form fix, by @kelu95.
 * #4536: Fix Quty field disabled when ASM is disabled, by @xGouley.
 * #4538: refresh sf2 cache on clear cache from performance page, by @kelu95.


#### Core

 * #4511: refacto product core class call to avoid overrides, by @kelu95.
 * #4521: fix twig error with trans method, by @kelu95.
 
See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+merged%3A2015-11-23..2015-12-06+is%3Aclosed+).

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, read those pages:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
