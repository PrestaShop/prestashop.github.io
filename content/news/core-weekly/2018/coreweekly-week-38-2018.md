---
layout: post
aliases: ["/news/coreweekly-week-38-2018"]
title:  "PrestaShop Core Weekly - Week 38 of 2018"
subtitle: "An inside look at the PrestaShop codebase"
date:   2018-09-27 15:15:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 17th to Sunday 23rd of September 2018.

![Core Weekly banner](/assets/images/2017/04/core_weekly_banner.jpg)


## General messages

Dear developers, in case you missed it, 1.7.5 code freeze was last week. An alpha version has been built and is currently being tested internally. A public beta will be released soon, please stay tuned and be prepared to test it on your server.

A new kanban has been created on PrestaShop's GitHub repository, dedicated to the [Symfony migration](https://github.com/PrestaShop/PrestaShop/projects/3). Whether you are just interested to follow the migration, or you want to pick up a task and help, information is now easy to find.

New modules versions:

* [Auto Upgrade v4.3.0](https://github.com/PrestaShop/autoupgrade/releases/tag/v4.3.0)
* [Welcome - OnBoarding](https://github.com/PrestaShop/welcome/releases/tag/v5.1.0)


## A quick update about GitHub issues

Last week, [161 new issues](https://github.com/PrestaShop/PrestaShop/issues?utf8=%E2%9C%93&q=is:issue+created:2018-09-17..2018-09-23)  issues have been opened in PrestaShop's core repository, and [13 fixed issues](https://github.com/PrestaShop/PrestaShop/issues?utf8=%E2%9C%93&q=is:issue+label:fixed+closed:2018-09-17..2018-09-23) have been closed.

## Code changes in the 'develop' branch (for v1.7.5.0)

### Core

* [#9281](https://github.com/PrestaShop/PrestaShop/pull/9281): Allow overriding of every part of Grid templates. Thank you [@sarjon](https://github.com/sarjon)
* [#10376](https://github.com/PrestaShop/PrestaShop/pull/10376): Update HTML purifier. Thank you [@Mreker](https://github.com/Mreker)
* [#10464](https://github.com/PrestaShop/PrestaShop/pull/10464): Undeclared property in the PaymentModule class. Thank you [@Seleda](https://github.com/Seleda)


### Back Office

* [#8237](https://github.com/PrestaShop/PrestaShop/pull/8237): Fixed bug in AdminGroupsController when adding ModulesRestrictions to group in multishop configuration. Thank you [@christianverardi](https://github.com/christianverardi)
* [#9287](https://github.com/PrestaShop/PrestaShop/pull/9287): Separate module action buttons, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#10234](https://github.com/PrestaShop/PrestaShop/pull/10234): Migration of Shop parameters -> Traffic & Seo -> Seo & urls page. Thank you [@tomas862](https://github.com/tomas862)
* [#10382](https://github.com/PrestaShop/PrestaShop/pull/10382): Bug when advanced stock management is enabled in Product Shipping page. Thank you [@lozal2244](https://github.com/lozal2244)
* [#10414](https://github.com/PrestaShop/PrestaShop/pull/10414): Link modules routes, position column and extension, GridPositionUpdater, by [@jolelievre](https://github.com/jolelievre)
* [#10422](https://github.com/PrestaShop/PrestaShop/pull/10422): Add stock location through ps_stock_available table, by [@matks](https://github.com/matks)
* [#10435](https://github.com/PrestaShop/PrestaShop/pull/10435): Removed onclick from URL column in BO Shop URLs. Thank you [@alu-](https://github.com/alu-)
* [#10440](https://github.com/PrestaShop/PrestaShop/pull/10440): Change categories in Module Manager, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#10448](https://github.com/PrestaShop/PrestaShop/pull/10448): Fatal error while adding tags. Thank you [@Mreker](https://github.com/Mreker)
* [#10485](https://github.com/PrestaShop/PrestaShop/pull/10485): Minor migrated Webservice improvements. Thank you [@sarjon](https://github.com/sarjon)
* [#10529](https://github.com/PrestaShop/PrestaShop/pull/10529): Implement empty states aka Showcase blocks. Thank you [@CaptainYouz](https://github.com/CaptainYouz)
* [#10569](https://github.com/PrestaShop/PrestaShop/pull/10569): Update Grid definition Ids. Thank you [@sarjon](https://github.com/sarjon)
* [#10571](https://github.com/PrestaShop/PrestaShop/pull/10571): Fix broken service definition. Thank you [@sarjon](https://github.com/sarjon)


### Front Office

* [#10229](https://github.com/PrestaShop/PrestaShop/pull/10229): Mobile Menu: improve UX/UI of the mobile menu. Thank you [@CaptainYouz](https://github.com/CaptainYouz)
* [#10428](https://github.com/PrestaShop/PrestaShop/pull/10428): Fixes issue #10417 incorrect argument order. Thank you [@benwallis](https://github.com/benwallis)
* [#10484](https://github.com/PrestaShop/PrestaShop/pull/10484): Fix: classic theme footer block design #10483. Thank you [@rdy4ever](https://github.com/rdy4ever)*


### Tests

* [#9107](https://github.com/PrestaShop/PrestaShop/pull/9107): Edit demo product and check info. Thank you [@hadrich-hatem](https://github.com/hadrich-hatem)
* [#9119](https://github.com/PrestaShop/PrestaShop/pull/9119): Create attribute. Thank you [@hadrich-hatem](https://github.com/hadrich-hatem)
* [#9419](https://github.com/PrestaShop/PrestaShop/pull/9419): Adding Increase and Decrease quantity of products using the arrow …, by [@fouratachour](https://github.com/fouratachour)
* [#9423](https://github.com/PrestaShop/PrestaShop/pull/9423): Create Order with account, by [@fouratachour](https://github.com/fouratachour)
* [#10572](https://github.com/PrestaShop/PrestaShop/pull/10572): Update Full tests, by [@fatmaBouchekoua](https://github.com/fatmaBouchekoua)


## Code changes in modules, themes & tools

### Legal Compliance

* [#42](https://github.com/PrestaShop/ps_legalcompliance/pull/42): Fix compatibility issues with PHP 7.2 & PS 1.7.5, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#43](https://github.com/PrestaShop/ps_legalcompliance/pull/43): Deploying v3.0.1 of ps_legalcompliance, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Theme Customization

* [#5](https://github.com/PrestaShop/ps_themecusto/pull/5): Fix module name in fr translation, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#6](https://github.com/PrestaShop/ps_themecusto/pull/6): Removing sentence about the zip format, by [@Adrienaddons](https://github.com/Adrienaddons)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @alu-, @benwallis, @CaptainYouz, @hadrich-hatem, @lozal2244, @Mreker, @rdy4ever, @sarjon, @Seleda, @tomas862!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
