---
layout: post
aliases: ["/news/coreweekly-week-31-2018"]
title:  "PrestaShop Core Weekly - Week 31 of 2018"
subtitle: "An inside look at the PrestaShop codebase"
date:   2018-08-07 17:00:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 30th of July to Sunday 5th of August 2018.

![Core Weekly banner](/assets/images/2017/04/core_weekly_banner.jpg)


## General messages

I would like to start this news with a big THANK YOU GUYS !!!
The [Auto Upgrade module version 4.0](https://github.com/PrestaShop/autoupgrade/releases/tag/v4.0.0) has been released after 5 betas. It could not have been done without all the feedback from the community users and developers. Really, thanks a lot again. Everyone should now see this version in the Back Office of their PrestaShop store. 

We are currently writing a dedicated article about this new version: what it does and does not, how, and what it will do. Stay tuned.


## Code changes in the 'develop' branch (for v1.7.5.0)

### Core

* [#9285](https://github.com/PrestaShop/PrestaShop/pull/9285): Allow more than 36 products per page. Thank you [@iqit-commerce](https://github.com/iqit-commerce)
* [#9320](https://github.com/PrestaShop/PrestaShop/pull/9320): Phpdocs2, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#9394](https://github.com/PrestaShop/PrestaShop/pull/9394): Update PR template, by [@eternoendless](https://github.com/eternoendless)
* [#9398](https://github.com/PrestaShop/PrestaShop/pull/9398): Use HotModuleReplacementPlugin only in dev mode, by [@eternoendless](https://github.com/eternoendless)


### Back Office

* [#9259](https://github.com/PrestaShop/PrestaShop/pull/9259): Make PrestaShop fully compatible with Twig 2+, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#9369](https://github.com/PrestaShop/PrestaShop/pull/9369): Combinations not working when token is disabled, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#9377](https://github.com/PrestaShop/PrestaShop/pull/9377): Migrate E-mail page. Thank you [@sarjon](https://github.com/sarjon)
* [#9389](https://github.com/PrestaShop/PrestaShop/pull/9389): Fixed path to updated files in System Information page, by [@mickaelandrieu](https://github.com/mickaelandrieu)


### Front Office

* [#9368](https://github.com/PrestaShop/PrestaShop/pull/9368): [FO] Detect if there is already GET param in URL. Thank you [@SebBareyre](https://github.com/SebBareyre)
* [#9372](https://github.com/PrestaShop/PrestaShop/pull/9372): Update OrderFollowController.php. Thank you [@PedroRendeiro](https://github.com/PedroRendeiro)
* [#9381](https://github.com/PrestaShop/PrestaShop/pull/9381): Fix label "Use this address for invoice too'". Thank you [@iqit-commerce](https://github.com/iqit-commerce)
* [#9390](https://github.com/PrestaShop/PrestaShop/pull/9390): Combination issue while trying to change size on a product page, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#9403](https://github.com/PrestaShop/PrestaShop/pull/9403): Convert ProductLazyArray when using render function, by [@PierreRambaud](https://github.com/PierreRambaud)


### Tests

* [#9301](https://github.com/PrestaShop/PrestaShop/pull/9301): Improve E2E tests, by [@PierreRambaud](https://github.com/PierreRambaud)


## Code changes in modules & themes

### Auto Upgrade

* [#97](https://github.com/PrestaShop/autoupgrade/pull/97): Merge dev into master for v4.0.0 release, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#119](https://github.com/PrestaShop/autoupgrade/pull/119): Fix cookie, by [@rGaillard](https://github.com/rGaillard)


### Classic Rocket

* [#4](https://github.com/PrestaShop/classic-rocket/pull/4): improved menu ergonomics. Thank you [@GuillaumeKadolis](https://github.com/GuillaumeKadolis)


### UI Kit

* [#56](https://github.com/PrestaShop/prestashop-ui-kit/pull/56): Fix small typos in README, by [@matks](https://github.com/matks)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @iqit-commerce, @sarjon, @SebBareyre, @PedroRendeiro, @GuillaumeKadolis!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
