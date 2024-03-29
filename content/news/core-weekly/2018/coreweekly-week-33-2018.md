---
layout: post
aliases: ["/news/coreweekly-week-33-2018"]
title:  "PrestaShop Core Weekly - Week 33 of 2018"
subtitle: "An inside look at the PrestaShop codebase"
date:   2018-08-21 15:40:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 13rd to Sunday 19th of August 2018.

![Core Weekly banner](/assets/images/2017/04/core_weekly_banner.jpg)


## General messages

Hello, even if there was one day off in France last week, this was a good week for pull requests. Bug fixes, improvement, and work on two modules:

* Auto Upgrade, thanks to your feedbacks (really, thank you a lot!), version 4.1.0 will be released soon
* Dashboard Products, v2.0.4 has been released

Have a nice Summer 😎 🌞


## Code changes in the 'develop' branch (for v1.7.5.0)

### Core

* [#7612](https://github.com/PrestaShop/PrestaShop/pull/7612): Added new actionFrontControllerSetVariables hook. Thank you [@sarjon](https://github.com/sarjon)
* [#9291](https://github.com/PrestaShop/PrestaShop/pull/9291): Small FrameworkBundleAdminController clean up. Thank you [@sarjon](https://github.com/sarjon)
* [#9426](https://github.com/PrestaShop/PrestaShop/pull/9426): add comment line to Address.php. Thank you [@azisyus](https://github.com/azisyus)
* [#9428](https://github.com/PrestaShop/PrestaShop/pull/9428): Added a new hook to custom SwiftMessage before sending mail. Thank you [@tonyyb](https://github.com/tonyyb)
* [#9432](https://github.com/PrestaShop/PrestaShop/pull/9432):  Make it unnecessary to append a '_' to the controller name when using the AdminSecurity annotation, by [@eternoendless](https://github.com/eternoendless)
* [#9436](https://github.com/PrestaShop/PrestaShop/pull/9436): Remove unused taxes. Thank you [@Mreker](https://github.com/Mreker)
* [#9452](https://github.com/PrestaShop/PrestaShop/pull/9452): Small naming update in grid. Thank you [@sarjon](https://github.com/sarjon)
* [#9442](https://github.com/PrestaShop/PrestaShop/pull/9442): Decouple filters and columns. Thank you [@sarjon](https://github.com/sarjon)

### Back Office

* [#9206](https://github.com/PrestaShop/PrestaShop/pull/9206): Migrate "Configure > Advanced Parameters > Database > SQL Manager" page. Thank you [@sarjon](https://github.com/sarjon)
* [#9334](https://github.com/PrestaShop/PrestaShop/pull/9334): Fix sample file download & fields load via ajax in Import. Thank you [@sarjon](https://github.com/sarjon)
* [#9455](https://github.com/PrestaShop/PrestaShop/pull/9455): Removed all translations errors from localization page, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#9457](https://github.com/PrestaShop/PrestaShop/pull/9457): Enable Logs page, by [@mickaelandrieu](https://github.com/mickaelandrieu)


### Front Office

* [#9422](https://github.com/PrestaShop/PrestaShop/pull/9422): Add missing appendArray in OrderReturnLazyArray (BOOM-6039), by [@jolelievre](https://github.com/jolelievre)
* [#9433](https://github.com/PrestaShop/PrestaShop/pull/9433): Add customizations field in product whitelist, by [@jolelievre](https://github.com/jolelievre)
* [#9441](https://github.com/PrestaShop/PrestaShop/pull/9441): Fix 403 error when accessing localhost using IPv6 (Maxmind Database exists). Thank you [@tolispy](https://github.com/tolispy)
* [#9446](https://github.com/PrestaShop/PrestaShop/pull/9446): Fix welcome page variable injection by adding missing %, by [@jolelievre](https://github.com/jolelievre)
* [#9445](https://github.com/PrestaShop/PrestaShop/pull/9445): Change out of stock condition with greater or equals, by [@jolelievre](https://github.com/jolelievre)

### Tests

* [#9400](https://github.com/PrestaShop/PrestaShop/pull/9400): Allow docker to run e2e tests, by [@PierreRambaud](https://github.com/PierreRambaud)


### Web Services (API)

* [#9439](https://github.com/PrestaShop/PrestaShop/pull/9439): Fix Error 500 from API request with PHP 7.2. Thank you [@tolispy](https://github.com/tolispy)


## Code changes in modules, themes & tools

### Auto Upgrade

* [#124](https://github.com/PrestaShop/autoupgrade/pull/124): Add rollback to the travis checks, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#126](https://github.com/PrestaShop/autoupgrade/pull/126): Remove use of channel17.xml, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#127](https://github.com/PrestaShop/autoupgrade/pull/127): Reset archive filename when switching on channel, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#128](https://github.com/PrestaShop/autoupgrade/pull/128): Check HTTP codes with curl after upgrade, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#130](https://github.com/PrestaShop/autoupgrade/pull/130): Fix wording with replaced files, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#132](https://github.com/PrestaShop/autoupgrade/pull/132): Force composer autoload to be appended, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#134](https://github.com/PrestaShop/autoupgrade/pull/134): Revert "Fix wording with replaced files", by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#135](https://github.com/PrestaShop/autoupgrade/pull/135): Revert "Force composer autoload to be appended", by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#136](https://github.com/PrestaShop/autoupgrade/pull/136): Force composer autoload to be appended, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#137](https://github.com/PrestaShop/autoupgrade/pull/137): Fix wording with replaced files, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#139](https://github.com/PrestaShop/autoupgrade/pull/139): Resolve conflicts, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Dashboard Products

* [#7](https://github.com/PrestaShop/dashproducts/pull/7): Fix most viewed products, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#16](https://github.com/PrestaShop/dashproducts/pull/16): Fix best products image. Thank you [@gnujeremie](https://github.com/gnujeremie)
* [#17](https://github.com/PrestaShop/dashproducts/pull/17): Fix the display of the total tax excl. Thank you [@Azouz-Jribi](https://github.com/Azouz-Jribi)
* [#18](https://github.com/PrestaShop/dashproducts/pull/18): Comply to validator.prestashop.com rules, by [@matks](https://github.com/matks)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @azisyus, @Azouz-Jribi, @gnujeremie, @Mreker, @sarjon, @tolispy, @tonyyb!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
