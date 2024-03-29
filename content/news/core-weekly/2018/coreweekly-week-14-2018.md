---
layout: post
aliases: ["/news/coreweekly-week-14-2018"]
title:  "PrestaShop Core Weekly - Week 14 of 2018"
subtitle: "An inside look at the PrestaShop codebase"
date:   2018-04-09 11:10:11
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 2nd to Sunday 8th of April 2018.

![Core Weekly banner](/assets/images/2017/04/core_weekly_banner.jpg)


## General messages

Dear developers, for my first article as PrestaShop's new Developer Advocate, I have the feeling that many of you are waiting for the next release to come. Then, you should really read Pablo's article [Exposing Data With Confidence In PrestaShop 1.7]( http://build.prestashop.com/news/exposing-data-with-confidence/): you will learn how 1.7.3.1 will filter data it sends to the client-side. Stay tuned.


## Code changes in the 'develop' branch (for v1.7.4.0)

### Back office

* [#8680](https://github.com/PrestaShop/PrestaShop/pull/8680): Migration of page Shop Parameters > Product Settings. Thank you @sarjon!
* [#8910](https://github.com/PrestaShop/PrestaShop/pull/8910): Collect all hooks for the debugger, by @mickaelandrieu.
* [#8912](https://github.com/PrestaShop/PrestaShop/pull/8912): BO: Fixed template path. Thank you @spolischook!
* [#8923](https://github.com/PrestaShop/PrestaShop/pull/8923): Fixed url redirection on Administration page, by @mickaelandrieu.
* [#8924](https://github.com/PrestaShop/PrestaShop/pull/8924): Refactored Back Office controllers, by @mickaelandrieu.


### Front office

* [#8469](https://github.com/PrestaShop/PrestaShop/pull/8469): add a few optimisations to speed up the display of the order history …, by @jocel1.
* [#8884](https://github.com/PrestaShop/PrestaShop/pull/8884): QUERY_STRING is not set on all environments. Thank you @stickyrst!
* [#8866](https://github.com/PrestaShop/PrestaShop/pull/8866): FO: Fixed breadcrumb links in ProductController. Thank you @vitalykondratiev!
* [#8902](https://github.com/PrestaShop/PrestaShop/pull/8902): FO: Displaying the No Image for Products on theme, by @mickaelandrieu.


### Core

* [#8926](https://github.com/PrestaShop/PrestaShop/pull/8926): [CO] fix deprecation message. Thank you @SebBareyre!


### Test

* [#8869](https://github.com/PrestaShop/PrestaShop/pull/8869): Click on discover button. Thank you @hadrich-hatem!
* [#8870](https://github.com/PrestaShop/PrestaShop/pull/8870): Options in catalog page. Thank you @hadrich-hatem!
* [#8894](https://github.com/PrestaShop/PrestaShop/pull/8894): Delete feature with bulk actions, by @fatmaBouchekoua.
* [#8901](https://github.com/PrestaShop/PrestaShop/pull/8901): Check addons theme. Thank you @hadrich-hatem!
* [#8911](https://github.com/PrestaShop/PrestaShop/pull/8911): Create order by a guest, by @fatmaBouchekoua.


## Code changes in the '1.7.3.x' branch (for v1.7.3.0)

### Back office

* [#8921](https://github.com/PrestaShop/PrestaShop/pull/8921): Fixed CDN management in Performance page, by @mickaelandrieu.
* [#8925](https://github.com/PrestaShop/PrestaShop/pull/8925): Stop generating RTL css file for the default theme using SASS, by @eternoendless.


### Core

* [#8922](https://github.com/PrestaShop/PrestaShop/pull/8922): Fixed access to Front Office container from modules, by @mickaelandrieu.


### Test

* [#8881](https://github.com/PrestaShop/PrestaShop/pull/8881): Check the pagination of product in the Front Office. Thank you @hadrich-hatem!
* [#8898](https://github.com/PrestaShop/PrestaShop/pull/8898): Check generated combinations table. Thank you @fouratachour!
* [#8903](https://github.com/PrestaShop/PrestaShop/pull/8903): Add some fixes to the script. Thank you @hadrich-hatem!


### Installer

* [#8913](https://github.com/PrestaShop/PrestaShop/pull/8913): Fix issue with pack in fixtures (installer), by @alegout.


Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @fouratachour, @hadrich-hatem, @sarjon, @SebBareyre, @spolischook!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
