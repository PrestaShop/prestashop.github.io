---
layout: post
aliases: ["/news/coreweekly-week-18-2018"]
title:  "PrestaShop Core Weekly - Week 18 of 2018"
subtitle: "An inside look at the PrestaShop codebase"
date:   2018-05-07 16:30:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 30th of April to Sunday 6th of May 2018.

![Core Weekly banner](/assets/images/2017/04/core_weekly_banner.jpg)


## General messages

Did you notice? We are over 9,000 Pull Requests on [GitHub](https://github.com/PrestaShop), what an achievement! Congratulation to everyone who has created PRs in the history of the PrestaShop project. We really hope more and more contributors will join us... next step, 10.000? ;-)


## Code changes in the 'develop' branch (for v1.7.4.0)

### Back office
* [#8932](https://github.com/PrestaShop/PrestaShop/pull/8932): Fix display error on module selection list. Thank you @SebBareyre!
* [#8995](https://github.com/PrestaShop/PrestaShop/pull/8995): Display the notification count on the proper tab, by @Quetzacoalt91.
* [#9004](https://github.com/PrestaShop/PrestaShop/pull/9004): Fixed search on manufacturer's name, by @mickaelandrieu.
* [#9008](https://github.com/PrestaShop/PrestaShop/pull/9008): Use getBoolean() instead of get() when configuration is bool in Product Settings page. Thank you @sarjon!
* [#9024](https://github.com/PrestaShop/PrestaShop/pull/9024): Merge 1.7.3.2 into develop, by @eternoendless.


### Front office
* [#8972](https://github.com/PrestaShop/PrestaShop/pull/8972): FO / Discount / Wrong variable use in loop for mobile. Thank you @timactive!
* [#9016](https://github.com/PrestaShop/PrestaShop/pull/9016): Corrected email subscription form input type. Thank you @rdy4ever!
* [#9017](https://github.com/PrestaShop/PrestaShop/pull/9017): Fix wrong parameter verification, allowing redirection to arbitrary URL, by @eternoendless.
* [#9027](https://github.com/PrestaShop/PrestaShop/pull/9027): FO: Fixes wrong schema of "InStock" for Out of stock products. Thank you @rdy4ever!


### Core
* [#8767](https://github.com/PrestaShop/PrestaShop/pull/8767): Show prices within a tax if it's needed. Thank you @kpodemski!
* [#8985](https://github.com/PrestaShop/PrestaShop/pull/8985): Fixed order gets wrong status when ordered all qty of the product.. Thank you @LedCloud!
* [#8996](https://github.com/PrestaShop/PrestaShop/pull/8996): New doc block for method, reduced code of method. Thank you @michaelKaefer!
* [#8998](https://github.com/PrestaShop/PrestaShop/pull/8998): Create missing subfolders in folder override/classes. Thank you @dariusakafest!
* [#9010](https://github.com/PrestaShop/PrestaShop/pull/9010): Check if template_vars if an array before merge in OrderHistory::sendEmail() . Thank you @serhatdurum!
* [#9018](https://github.com/PrestaShop/PrestaShop/pull/9018): Add copyright information to the license., by @ttoine.
* [#9020](https://github.com/PrestaShop/PrestaShop/pull/9020): Update to right name, markdown with links and more, by @ttoine.
* [#9021](https://github.com/PrestaShop/PrestaShop/pull/9021): Create LICENCE.md, by @ttoine.
* [#9022](https://github.com/PrestaShop/PrestaShop/pull/9022): Make bin/console executable, by @eternoendless.
* [#9029](https://github.com/PrestaShop/PrestaShop/pull/9029): Revert CLDR integration, by @eternoendless.


### Tests
* [#8994](https://github.com/PrestaShop/PrestaShop/pull/8994): Update the Onboarding scenario, by @fatmaBouchekoua.
* [#9030](https://github.com/PrestaShop/PrestaShop/pull/9030): Fix travis reporting build as succeeded when it fails. Thank you @PierreRambaud!
* [#9032](https://github.com/PrestaShop/PrestaShop/pull/9032): Fix regular tests, by @fatmaBouchekoua.

	
### Localization pack
* [#8997](https://github.com/PrestaShop/PrestaShop/pull/8997): fix TVA rate. Thank you @atefBB!


## Code changes in the '1.7.3.x' branch (for v1.7.3.0)

### Front Office
* [#8835](https://github.com/PrestaShop/PrestaShop/pull/8835): Replace Noto Sans font with Vazir font for Farsi in Classic theme. Thank you @mehrshadz!
* [#9005](https://github.com/PrestaShop/PrestaShop/pull/9005): Fix cannot order oos product even if it's allowed, by @tomlev.


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @atefBB, @dariusakafest, @LedCloud, @kpodemski, @mehrshadz, @michaelKaefer, @rdy4ever, @sarjon, @SebBareyre, @serhatdurum, @timactive !

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
