---
layout: post
aliases: ["/news/coreweekly-week-22-2018"]
title:  "PrestaShop Core Weekly - Week 22 of 2018"
subtitle: "An inside look at the PrestaShop codebase"
date:   2018-06-04 17:00:00
authors: [ AntoineThomas ]
icon: icon-calendar
image: /assets/images/2017/04/core_weekly_banner.jpg
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 28th of May to Sunday 3rd of June 2018.

![Core Weekly banner](/assets/images/2017/04/core_weekly_banner.jpg)


## General messages

In Paris next week? Please come and meet us at the [PrestaShop Day](https://prestashopday.com)! All the PrestaShop team will be there, among which several developers and the CTO with whom you will be able to exchange on hot topics like 1.7.4 or the 1.6 to 1.7 migration. BTW, If you want an invitation, I have a few left. Ping me on Twitter, I am [@ttoine](https://twitter.com/ttoine) and I will send you a coupon code via direct message. First come, first served.

Last minute news, I will be at [Open Expo Europe](https://openexpoeurope.com) in Madrid this week to speak about [PrestaShop and open source](https://openexpoeurope.com/session/how-open-source-has-been-a-key-for-adoption-and-success-of-prestashop/). See you there?


## Code changes in the 'develop' branch (for v1.7.5.0)

### Core

* [#9121](https://github.com/PrestaShop/PrestaShop/pull/9121): Make commands from PrestaShop modules available in PrestaShop application, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#9136](https://github.com/PrestaShop/PrestaShop/pull/9136): Use https in Employee not http. Thank you [@okom3pom](https://github.com/okom3pom)
* [#9140](https://github.com/PrestaShop/PrestaShop/pull/9140): Update composer dependencies, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#9143](https://github.com/PrestaShop/PrestaShop/pull/9143): Fix unknown key route error in customer settings page. Thank you [@marionf](https://github.com/marionf)
* [#9146](https://github.com/PrestaShop/PrestaShop/pull/9146): Merge 1.7.4.x in develop, by [@PierreRambaud](https://github.com/PierreRambaud)


### Front Office

* [#9110](https://github.com/PrestaShop/PrestaShop/pull/9110): Make checkbox labels clickable on the classic theme. Thank you [@rdy4ever](https://github.com/rdy4ever)


### Tests

* [#9125](https://github.com/PrestaShop/PrestaShop/pull/9125): Quantity tests, by [@tomlev](https://github.com/tomlev)


## Code changes in the '1.7.4.x' branch (for v1.7.4.0)

### Back Office

* [#9082](https://github.com/PrestaShop/PrestaShop/pull/9082):  Error while searching for a product, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#9089](https://github.com/PrestaShop/PrestaShop/pull/9089): Catch module theme installation error, add error message for invalid module, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#9117](https://github.com/PrestaShop/PrestaShop/pull/9117): Add theme custo, by [@eternoendless](https://github.com/eternoendless)
* [#9143](https://github.com/PrestaShop/PrestaShop/pull/9143): Fix unknown key route error in customer settings page, by [@marionf](https://github.com/marionf)
* [#9149](https://github.com/PrestaShop/PrestaShop/pull/9149): Error with quota fields, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#9151](https://github.com/PrestaShop/PrestaShop/pull/9151): Fix undefined method trans() when loggin on the marketplace from the module page, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#9151](https://github.com/PrestaShop/PrestaShop/pull/9151): Fix undefined method trans() when loggin on the marketplace from the module page, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#9157](https://github.com/PrestaShop/PrestaShop/pull/9157): State filter in catalog page doesn't work, by [@PierreRambaud](https://github.com/PierreRambaud)


### Front Office

* [#9134](https://github.com/PrestaShop/PrestaShop/pull/9134): Fix undefined index on supplier page in FO, by [@marionf](https://github.com/marionf)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @okom3pom, @rdy4ever!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
