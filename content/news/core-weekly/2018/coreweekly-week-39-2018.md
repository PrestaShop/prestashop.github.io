---
layout: post
aliases: ["/news/coreweekly-week-39-2018"]
title:  "PrestaShop Core Weekly - Week 39 of 2018"
subtitle: "An inside look at the PrestaShop codebase"
date:   2018-10-05 16:45:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 24th of August to Sunday 30th of September 2018.

![Core Weekly banner](/assets/images/2017/04/core_weekly_banner.jpg)


## General messages

Dear developers, in case you missed it, patch versions have been released this week: [1.7.4.3 and 1.6.1.21](http://build.prestashop.com/news/prestashop-1-7-4-3-1-6-1-21-maintenance-releases/).

A quick word about the 1.7.5: you are all waiting for it, a public beta version should be available at the beginning of next week :-)

Also, please note that an issue has been identified with the Auto Upgrade module: if you have an error with some modules during upgrade (check logs and error messages), please try to update the modules before starting the Auto Upgrade. You can [follow and see the details on issue #175 on GitHub](https://github.com/PrestaShop/autoupgrade/issues/175).

Have a nice week-end.


## A quick update about GitHub issues

Last week, [85 new issues](https://github.com/PrestaShop/PrestaShop/issues?utf8=%E2%9C%93&q=is:issue+created:2018-09-24..2018-09-30)  issues have been opened in PrestaShop's core repository, and [20 fixed issues](https://github.com/PrestaShop/PrestaShop/issues?utf8=%E2%9C%93&q=is:issue+label:fixed+closed:2018-09-24..2018-09-30) have been closed.


## Code changes in the 'develop' branch (for v1.7.6.0)

### Back Office

* [#10601](https://github.com/PrestaShop/PrestaShop/pull/10601): Use attr('data-') instead of data, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#10719](https://github.com/PrestaShop/PrestaShop/pull/10719): Merge 1.7.5.x into develop, by [@PierreRambaud](https://github.com/PierreRambaud)


### Front Office

* [#10643](https://github.com/PrestaShop/PrestaShop/pull/10643): FO: Fix password validation message. Thank you [@rdy4ever](https://github.com/rdy4ever)


### Tests

* [#9341](https://github.com/PrestaShop/PrestaShop/pull/9341): Identity (Selenium tests), by [@fatmaBouchekoua](https://github.com/fatmaBouchekoua)
* [#9421](https://github.com/PrestaShop/PrestaShop/pull/9421): Update test high : create product with combination/create virtual …, by [@fouratachour](https://github.com/fouratachour)


## Code changes in the '1.7.5.x' branch (for v1.7.5.0)

### Core

* [#10743](https://github.com/PrestaShop/PrestaShop/pull/10743): Execute query modification hook before fetching data. Thank you [@sarjon](https://github.com/sarjon)


### Back Office

* [#10462](https://github.com/PrestaShop/PrestaShop/pull/10462): Fix wrong display of the brand page, by [@khouloudbelguith](https://github.com/khouloudbelguith)
* [#10656](https://github.com/PrestaShop/PrestaShop/pull/10656): Fix grid ids in migrated JS. Thank you [@sarjon](https://github.com/sarjon)
* [#10658](https://github.com/PrestaShop/PrestaShop/pull/10658): Use attr('data-') instead of data, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#10681](https://github.com/PrestaShop/PrestaShop/pull/10681): Fix module catalog js & css issues, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#10705](https://github.com/PrestaShop/PrestaShop/pull/10705): Move position column template, by [@jolelievre](https://github.com/jolelievre)
* [#10725](https://github.com/PrestaShop/PrestaShop/pull/10725): hide delete button on ordered cart, by [@jolelievre](https://github.com/jolelievre)
* [#10726](https://github.com/PrestaShop/PrestaShop/pull/10726): Module manager improvement (search, categories, configure button), by [@PierreRambaud](https://github.com/PierreRambaud)
* [#10728](https://github.com/PrestaShop/PrestaShop/pull/10728): FilterParametersUpdater manages filters in a better way, by [@jolelievre](https://github.com/jolelievre)
* [#10736](https://github.com/PrestaShop/PrestaShop/pull/10736): Use new routes for quick access, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Tests

* [#10594](https://github.com/PrestaShop/PrestaShop/pull/10594): Bring back functional tests, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#10716](https://github.com/PrestaShop/PrestaShop/pull/10716): Fix unit tests if Addons API doesn't give us modules, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#10724](https://github.com/PrestaShop/PrestaShop/pull/10724): Clean php-cs-fixer files, by [@matks](https://github.com/matks)


##  Code changes in the '1.6.1.x' branch (for v1.6.1.21)

### Core

* [#5378](https://github.com/PrestaShop/PrestaShop/pull/5378): Add a fallback to curl when file_get_content() return an empty response, by [@rGaillard](https://github.com/rGaillard)
* [#8758](https://github.com/PrestaShop/PrestaShop/pull/8758): Fix the possibility to create a customer with "¤" or ". Thank you [@PierreJoube](https://github.com/PierreJoube)
* [#8763](https://github.com/PrestaShop/PrestaShop/pull/8763): Catch all Swift exceptions in Mail::Send(). Thank you [@axometeam](https://github.com/axometeam)
* [#10662](https://github.com/PrestaShop/PrestaShop/pull/10662): Update native modules, by [@eternoendless](https://github.com/eternoendless)
* [#10680](https://github.com/PrestaShop/PrestaShop/pull/10680): Hide arguments in debug trace page, by [@jolelievre](https://github.com/jolelievre)


### Front Office

* [#8658](https://github.com/PrestaShop/PrestaShop/pull/8658): Removed duplicate expressions. Thank you [@gfilippakis](https://github.com/gfilippakis)
* [#8828](https://github.com/PrestaShop/PrestaShop/pull/8828): Stop sending a copy of the contact message to the "author" (avoid spam), by [@eternoendless](https://github.com/eternoendless)


### Back Office

* [#8274](https://github.com/PrestaShop/PrestaShop/pull/8274): Disallow the negative discounts in orders. Thank you [@hibatallahAouadni](https://github.com/hibatallahAouadni)
* [#8321](https://github.com/PrestaShop/PrestaShop/pull/8321): Fix Module configure permission. Thank you [@hibatallahAouadni](https://github.com/hibatallahAouadni)
* [#8786](https://github.com/PrestaShop/PrestaShop/pull/8786): Replace serialize with json_encode, by [@tomlev](https://github.com/tomlev)


## Code changes in modules, themes & tools

### OnBoarding

* [#39](https://github.com/PrestaShop/welcome/pull/39): Make the module working on migrated payment page, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#40](https://github.com/PrestaShop/welcome/pull/40): Close immediately modal on button click, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#41](https://github.com/PrestaShop/welcome/pull/41): Bump version to v5.1.0, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#42](https://github.com/PrestaShop/welcome/pull/42): Deploying v5.1.0 of module welcome, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Auto Upgrade

* [#171](https://github.com/PrestaShop/autoupgrade/pull/171): Prevent installation on old PHP versions, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#172](https://github.com/PrestaShop/autoupgrade/pull/172): Deploying v4.3.0 for 1-click upgrade module, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#173](https://github.com/PrestaShop/autoupgrade/pull/173): Update readme for php requirements, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### MBO

* [#44](https://github.com/PrestaShop/ps_mbo/pull/44): Fix #27. Thank you [@MrBaiame](https://github.com/MrBaiame)
* [#45](https://github.com/PrestaShop/ps_mbo/pull/45): Fix README, by [@matks](https://github.com/matks)
* [#46](https://github.com/PrestaShop/ps_mbo/pull/46): Dev. Thank you [@MrBaiame](https://github.com/MrBaiame)
* [#47](https://github.com/PrestaShop/ps_mbo/pull/47): Refactoring, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#50](https://github.com/PrestaShop/ps_mbo/pull/50): Css on product card. Thank you [@MrBaiame](https://github.com/MrBaiame)


### Translation Tools Bundles

* [#46](https://github.com/PrestaShop/TranslationToolsBundle/pull/46): Drop support for PHP < 5.6 and update dependencies, by [@eternoendless](https://github.com/eternoendless)
* [#47](https://github.com/PrestaShop/TranslationToolsBundle/pull/47): Update PhpParser to v3, by [@eternoendless](https://github.com/eternoendless)


### Buy Button Lite

* [#1](https://github.com/PrestaShop/ps_buybuttonlite/pull/1): Buy button lite module. Thank you [@Joukz](https://github.com/Joukz)


### Favicon Notification

* [#2](https://github.com/PrestaShop/ps_faviconnotificationbo/pull/2): copy from private repo. Thank you [@clementdaubeuf](https://github.com/clementdaubeuf)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @axometeam, @clementdaubeuf, @gfilippakis, @hibatallahAouadni, @Joukz, @MrBaiame, @PierreJoube, @rdy4ever, @sarjon!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
