---
layout: post
aliases: ["/news/coreweekly-week-20-2018"]
title:  "PrestaShop Core Weekly - Week 20 of 2018"
subtitle: "An inside look at the PrestaShop codebase"
date:   2018-05-21 17:30:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 14th of May to Sunday 20th of May 2018.

![Core Weekly banner](/assets/images/2017/04/core_weekly_banner.jpg)


## General messages

Dear all, we would like to thank you for the huge amount of feedback about the GDPR module. Lots of comments on our blog posts, tweets, support tickets, etc. So much we can't list everything here! In the open source world, we often say that a bug report is like a love letter. If so, we're glad to see all this love for the PrestaShop project ;-)

I would like to assure you that our teams are doing their best to take everything into account and to improve the GDPR module consequently. In other words, you can expect some updates this week...


## Code changes in the 'develop' branch (for v1.7.5.0)

### Core

* [#9007](https://github.com/PrestaShop/PrestaShop/pull/9007): Migrate Shop parameters -> Order settings page. Thank you [@rokaszygmantas](https://github.com/rokaszygmantas)
* [#9056](https://github.com/PrestaShop/PrestaShop/pull/9056): Deprecate polyfill function array_replace(). Thank you [@michaelKaefer](https://github.com/michaelKaefer)
* [#9062](https://github.com/PrestaShop/PrestaShop/pull/9062): Improved errors management if Dev mode is enabled. Thank you [@michaelKaefer](https://github.com/michaelKaefer)
* [#9065](https://github.com/PrestaShop/PrestaShop/pull/9065): Dispatcher: Get request URI from Symfony's Request. Thank you [@michaelKaefer](https://github.com/michaelKaefer)
* [#9068](https://github.com/PrestaShop/PrestaShop/pull/9068): Refactor Cart::checkQuantities(). Thank you [@michaelKaefer](https://github.com/michaelKaefer)
* [#9071](https://github.com/PrestaShop/PrestaShop/pull/9071): Refactor AbstractCartTest. Thank you [@michaelKaefer](https://github.com/michaelKaefer)
* [#9072](https://github.com/PrestaShop/PrestaShop/pull/9072): Fixed typo bug. Thank you [@michaelKaefer](https://github.com/michaelKaefer)


### Front Office

* [#9069](https://github.com/PrestaShop/PrestaShop/pull/9069): fix gift wrapping fees, by [@tomlev](https://github.com/tomlev)


## Code changes in the '1.7.4.x' branch (for v1.7.4.0)

### Back Office

* [#9044](https://github.com/PrestaShop/PrestaShop/pull/9044): Fix delivery time labels not displayed, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#9046](https://github.com/PrestaShop/PrestaShop/pull/9046): Reduced permission levels for theme edition, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#9051](https://github.com/PrestaShop/PrestaShop/pull/9051): Bad link in breadcrumbs in symfony pages, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#9074](https://github.com/PrestaShop/PrestaShop/pull/9074): Ordering product in BO doesn't work, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#9081](https://github.com/PrestaShop/PrestaShop/pull/9081): Can't enable maintenance mode, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#9084](https://github.com/PrestaShop/PrestaShop/pull/9084): Saved confirmation message isn't displayed anymore in translation page, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#9086](https://github.com/PrestaShop/PrestaShop/pull/9086): fix template on attachment delete, by [@tomlev](https://github.com/tomlev)


### Front Office

* [#9036](https://github.com/PrestaShop/PrestaShop/pull/9036): fix infinite loop on multiple vouchers, by [@tomlev](https://github.com/tomlev)
* [#9073](https://github.com/PrestaShop/PrestaShop/pull/9073): Fix gift wrapping fees added even if not checked, by [@tomlev](https://github.com/tomlev)


### Core

* [#9054](https://github.com/PrestaShop/PrestaShop/pull/9054): Added missing use statment in AddonsCollection class. Thank you [@nenes25](https://github.com/nenes25)
* [#9076](https://github.com/PrestaShop/PrestaShop/pull/9076): Fixed duplicate carts in back office, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#9079](https://github.com/PrestaShop/PrestaShop/pull/9079): Added $result (from facet) in hook filterProductSearch. Thank you [@Lathanao](https://github.com/Lathanao)
* [#9091](https://github.com/PrestaShop/PrestaShop/pull/9091): Update develop with 1.7.4.x changes, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Install

* [#9052](https://github.com/PrestaShop/PrestaShop/pull/9052): Fix error populating tables when installing in Greek, by [@PierreRambaud](https://github.com/PierreRambaud)


### Tests

* [#9070](https://github.com/PrestaShop/PrestaShop/pull/9070): Disable e2e tests related to Addons for 1.7.4.x, by [@PierreRambaud](https://github.com/PierreRambaud)


## Code changes in the '1.7.3.x' branch (for v1.7.3.3)

### Back Office

* [#9026](https://github.com/PrestaShop/PrestaShop/pull/9026): Fixed display error on back office module selection list, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @Lathanao, @michaelKaefer, @nenes25, and @rokaszygmantas!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
