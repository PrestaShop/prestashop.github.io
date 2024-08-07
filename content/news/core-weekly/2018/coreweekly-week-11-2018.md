---
layout: post
aliases: ["/news/coreweekly-week-11-2018"]
title:  "PrestaShop Core Weekly - Week 11 of 2018"
subtitle: "An inside look at the PrestaShop codebase"
date:   2018-03-19 09:10:11
authors: [ LouiseBonnard ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 12th to Sunday 18th of March 2018.

![Core Weekly banner](/assets/images/2017/04/core_weekly_banner.jpg)


## General messages

Hi beloved community, hope you're all fine there! We were pretty focused on your contribution lately, with both Crowdin [monthly report](http://build.prestashop.com/news/do-you-speak-prestashop-february-2018) and interview of [Šarūnas Jonušas](http://build.prestashop.com/news/contributor-interview-sarunas-jonusas) who has been helping us a lot with the Symfony migration. Good job everybody, thanks a million! Regarding this week, as we did for the [Integration Fund](http://build.prestashop.com/news/integration-fund-is-still-alive) last month, we will let you know about how to involve deeper and, if you want, become one of our great ambassadors... and, highlight of the show, our detailed roadmap for this year. Don't miss it, keep reading the devblog. ;-) 


## Code changes in the 'develop' branch (for v1.7.4.0)

### Back office

* [#8515](https://github.com/PrestaShop/PrestaShop/pull/8515): Upgrade Symfony to 3.4 LTS, by @mickaelandrieu.


### Front office

* [#8823](https://github.com/PrestaShop/PrestaShop/pull/8823): Fixed broken search after #8741, by @eternoendless.


### Test

* [#8841](https://github.com/PrestaShop/PrestaShop/pull/8841): Fixed travis build (updated Chrome version), by @mickaelandrieu.
* [#8852](https://github.com/PrestaShop/PrestaShop/pull/8852): Delete attribute with bulk actions, by @fatmabouchekoua.


## Code changes in the '1.7.3.x' branch (for v1.7.3.0)

### Back office

* [#8631](https://github.com/PrestaShop/PrestaShop/pull/8631): Request module zip for upgrade ONLY when the version available is higher, by @quetzacoalt91.
* [#8780](https://github.com/PrestaShop/PrestaShop/pull/8780): Improve BO speed by removing menu images. Thank you @alegout!


### Front office

* [#7775](https://github.com/PrestaShop/PrestaShop/pull/7775): Resolve incompatibility between canonical redirections, attributes and product route not only containing rewrite. Thank you @123monsite-regis!
* [#8846](https://github.com/PrestaShop/PrestaShop/pull/8846): Fix menu width and submenu hover on header. Thank you @slorenzini!


### Core

* [#8498](https://github.com/PrestaShop/PrestaShop/pull/8498): Fixed bug on reorder with free gift in the cart. Thank you @blueshadow2911!
* [#8543](https://github.com/PrestaShop/PrestaShop/pull/8543): Layout broken by cache clear, by @littlebigdev.


### Test

* [#8842](https://github.com/PrestaShop/PrestaShop/pull/8842): Fixed Travis build (update Chrome browser version), by @mickaelandrieu.

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @123monsite-regis, @alegout, @blueshadow2911 and @slorenzini!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
