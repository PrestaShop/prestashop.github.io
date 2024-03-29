---
layout: post
aliases: ["/news/coreweekly-week-46-2018"]
title:  "PrestaShop Core Weekly - Week 46 of 2018"
subtitle: "An inside look at the PrestaShop codebase"
date:   2018-11-19 15:30:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 12th to Sunday 18th of November 2018.

![Core Weekly banner](/assets/images/2017/04/core_weekly_banner.jpg)


## General messages

Dear Developpers,

It still time to [test 1.7.5 beta](http://build.prestashop.com/news/prestashop-1-7-5-0-beta-release/). If you are hosting PrestaShop stores, it is the best way to be sure that the upcoming version will work on your infrastructure. If you are developing modules and themes, this is the best way be sure that your work will be compatible. If you find a regression, a strange behavior, or a bug, please [check if an issue is already open on GitHub](https://github.com/PrestaShop/PrestaShop/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3A1.7.5.0+), or [create a new issue](https://github.com/PrestaShop/PrestaShop/issues/new/choose).


## A quick update about GitHub issues

Last week, [48 new issues](https://github.com/PrestaShop/PrestaShop/issues?utf8=%E2%9C%93&q=is:issue+created:2018-11-12..2018-11-18) have been created in PrestaShop's core repository, and [15 fixed issues](https://github.com/PrestaShop/PrestaShop/issues?utf8=%E2%9C%93&q=is:issue+label:fixed+closed:2018-11-12..2018-11-18) have been closed.

## Code changes in the 'develop' branch (for v1.7.6.0)

### Core

* [#10916](https://github.com/PrestaShop/PrestaShop/pull/10916): Migrate customers listing. Thank you [@sarjon](https://github.com/sarjon)
* [#11202](https://github.com/PrestaShop/PrestaShop/pull/11202): fix a bug where PrestaShop cookie is set on every page when a cookie value is NULL, by [@jocel1](https://github.com/jocel1)

### Back office

* [#10199](https://github.com/PrestaShop/PrestaShop/pull/10199): BO | Stock: Edit quantity placeholder. Thank you [@CaptainYouz](https://github.com/CaptainYouz)
* [#10408](https://github.com/PrestaShop/PrestaShop/pull/10408): Migrate Categories Add/Edit actions. Thank you [@sarjon](https://github.com/sarjon)
* [#11160](https://github.com/PrestaShop/PrestaShop/pull/11160): Form handling improvements in import page step 1 and 2. Thank you [@rokaszygmantas](https://github.com/rokaszygmantas)
* [#11408](https://github.com/PrestaShop/PrestaShop/pull/11408): Migrate Categories Add/Edit actions - tests fixed, by [@matks](https://github.com/matks)


## Code changes in the '1.7.5.x' branch (for v1.7.5.0)

### Core

* [#11345](https://github.com/PrestaShop/PrestaShop/pull/11345): Update translations catalog, by [@eternoendless](https://github.com/eternoendless)
* [#11376](https://github.com/PrestaShop/PrestaShop/pull/11376): Some strings need to be escaped, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#11385](https://github.com/PrestaShop/PrestaShop/pull/11385): Fix missing dot in wording, by [@eternoendless](https://github.com/eternoendless)


### Back office

* [#11309](https://github.com/PrestaShop/PrestaShop/pull/11309): Add LegacyContext::getLegacyAdminLink, by [@jolelievre](https://github.com/jolelievre)
* [#11311](https://github.com/PrestaShop/PrestaShop/pull/11311): Be able to disable Help Link on Back Office pages, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#11337](https://github.com/PrestaShop/PrestaShop/pull/11337): Show more logs in admin, by [@jolelievre](https://github.com/jolelievre)
* [#11344](https://github.com/PrestaShop/PrestaShop/pull/11344): Manage redirection after email translation, by [@jolelievre](https://github.com/jolelievre)
* [#11384](https://github.com/PrestaShop/PrestaShop/pull/11384): Add an rtlfix file to correctly hide the right side bar in rtl languages, by [@jolelievre](https://github.com/jolelievre)
* [#11394](https://github.com/PrestaShop/PrestaShop/pull/11394): Fix crashing for bulk actions. Thank you [@sarjon](https://github.com/sarjon)
* [#11407](https://github.com/PrestaShop/PrestaShop/pull/11407): Module manager sorting, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#11410](https://github.com/PrestaShop/PrestaShop/pull/11410): Changing primary domain name no longer reindexes simplified URLs, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#11416](https://github.com/PrestaShop/PrestaShop/pull/11416): fix customer/address delete resulting in error on cart page, by [@tomlev](https://github.com/tomlev)


### Install

* [#11357](https://github.com/PrestaShop/PrestaShop/pull/11357): Improve install warning message for beta builds, by [@matks](https://github.com/matks)


## Code changes in modules, themes & tools

### Docker

* [#140](https://github.com/PrestaShop/docker/pull/140): Handle dev / demo / host mode with env variables, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Link list

* [#50](https://github.com/PrestaShop/ps_linklist/pull/50): Refactor ps_linklist module using 1.7 improvements, by [@jolelievre](https://github.com/jolelievre)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report:  @CaptainYouz, @jocel1, @rokaszygmantas, @sarjon!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
