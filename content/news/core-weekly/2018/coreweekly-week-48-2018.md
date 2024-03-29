---
layout: post
aliases: ["/news/coreweekly-week-48-2018"]
title:  "PrestaShop Core Weekly - Week 48 of 2018"
subtitle: "An inside look at the PrestaShop codebase"
date:   2018-12-19 18:00:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 26th of November to Sunday 2nd of December 2018.

![Core Weekly banner](/assets/images/2017/04/core_weekly_banner.jpg)


## General messages

Dear Developpers,

In case you missed, [PrestaShop 1.7.5.0 has been released](http://build.prestashop.com/news/prestashop-1-7-5-0-available/) yesterday. For merchants, the Christmas and Holiday periods are not the best time to upgrade. If, however, you are writing themes and modules, if you are a developer in an agency, or a freelance, or anyone else concerned about this new version or with the migration, please [download it](https://www.prestashop.com/en/download), install it, test it and [report feedback](https://github.com/PrestaShop/PrestaShop/issues/new/choose) ;-)


## A quick update about GitHub issues

Last week, [51 new issues](https://github.com/PrestaShop/PrestaShop/issues?utf8=%E2%9C%93&q=is:issue+created:2018-11-26..2018-12-02) have been created in PrestaShop's core repository, and [12 fixed issues](https://github.com/PrestaShop/PrestaShop/issues?utf8=%E2%9C%93&q=is:issue+label:fixed+closed:2018-11-26..2018-12-02) have been closed.

## Code changes in the 'develop' branch (for v1.7.6.0)

### Core

* [#9034](https://github.com/PrestaShop/PrestaShop/pull/9034): Added missing Rewrite base on Api rule. Thank you [@123monsite-regis](https://github.com/123monsite-regis)
* [#10465](https://github.com/PrestaShop/PrestaShop/pull/10465): Fixed bug on inc/dec product quantity in cart with vouchers  discounts. Thank you [@sete391](https://github.com/sete391)
* [#10974](https://github.com/PrestaShop/PrestaShop/pull/10974): Implement form handlers for SqlManager form - part 1. Thank you [@sarjon](https://github.com/sarjon)
* [#11510](https://github.com/PrestaShop/PrestaShop/pull/11510): Polyfill php73, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#11566](https://github.com/PrestaShop/PrestaShop/pull/11566): Build all the assets using a single command, by [@eternoendless](https://github.com/eternoendless)


### Back office

* [#9042](https://github.com/PrestaShop/PrestaShop/pull/9042): Fix controller override. Thank you [@nenes25](https://github.com/nenes25)
* [#10981](https://github.com/PrestaShop/PrestaShop/pull/10981): Change BO product list price source for multistore. Thank you [@mafisz](https://github.com/mafisz)
* [#11526](https://github.com/PrestaShop/PrestaShop/pull/11526): Fix wrong protocol in the File Manager Dialog. Thank you [@freakstatic](https://github.com/freakstatic)
* [#11535](https://github.com/PrestaShop/PrestaShop/pull/11535): Display the right front url in multistore menu, by [@jolelievre](https://github.com/jolelievre)


### Front office

* [#9041](https://github.com/PrestaShop/PrestaShop/pull/9041): FO : Fix override of ProductController. Thank you [@nenes25](https://github.com/nenes25)
* [#11103](https://github.com/PrestaShop/PrestaShop/pull/11103): fix discount display without tax, by [@tomlev](https://github.com/tomlev)
* [#11282](https://github.com/PrestaShop/PrestaShop/pull/11282): Convert customization price to current currency. Thank you [@unlocomqx](https://github.com/unlocomqx)
* [#11455](https://github.com/PrestaShop/PrestaShop/pull/11455): Removing unnecessary spaces on header of the checkout page. Thank you [@dineshbadrukhiya](https://github.com/dineshbadrukhiya)
* [#11563](https://github.com/PrestaShop/PrestaShop/pull/11563): Fix typo for "Environment" comment. Thank you [@Klemart3D](https://github.com/Klemart3D)


### Tests

* [#11464](https://github.com/PrestaShop/PrestaShop/pull/11464): Cleanup /tests directory. Thank you [@sarjon](https://github.com/sarjon)
* [#11525](https://github.com/PrestaShop/PrestaShop/pull/11525): Introduce modern unit tests for new test structure, by [@matks](https://github.com/matks)
* [#11529](https://github.com/PrestaShop/PrestaShop/pull/11529): Migrate tests-legacy tests to namespace LegacyTests, by [@matks](https://github.com/matks)
* [#11549](https://github.com/PrestaShop/PrestaShop/pull/11549): Unable to build tests container, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#11565](https://github.com/PrestaShop/PrestaShop/pull/11565): Allow tests high and fix conflicts in file, by [@PierreRambaud](https://github.com/PierreRambaud)


### Install

* [#9366](https://github.com/PrestaShop/PrestaShop/pull/9366): Don't display the system step if mandatory requirements are OK, by [@rGaillard](https://github.com/rGaillard)


## Code changes in the '1.7.5.x' branch (for v1.7.5.0)

### Back office

* [#11339](https://github.com/PrestaShop/PrestaShop/pull/11339): Fix default values on import page, by [@tomlev](https://github.com/tomlev)
* [#11475](https://github.com/PrestaShop/PrestaShop/pull/11475): Impossible to change position of products, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#11486](https://github.com/PrestaShop/PrestaShop/pull/11486): Fix layout, by [@eternoendless](https://github.com/eternoendless)
* [#11508](https://github.com/PrestaShop/PrestaShop/pull/11508): Escape javascript and html strings, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#11531](https://github.com/PrestaShop/PrestaShop/pull/11531): Fix all miswritten getAdminLink calls in templates, by [@jolelievre](https://github.com/jolelievre)
* [#11533](https://github.com/PrestaShop/PrestaShop/pull/11533): Disable oProxyCommand when imap.enable_insecure_rsh does not exists, by [@PierreRambaud](https://github.com/PierreRambaud)


## Code changes in the '1.6.1.x' branch (for v1.6.1.24)

### Core

* [#10859](https://github.com/PrestaShop/PrestaShop/pull/10859): Fixed keywords disappear from search index, by [@marionf](https://github.com/marionf)


## Code changes in modules, themes & tools

### Buy Button Lite

* [#10](https://github.com/PrestaShop/ps_buybuttonlite/pull/10): Update module version to 1.0.1. Thank you [@Joukz](https://github.com/Joukz)


### Auto Upgrade

* [#192](https://github.com/PrestaShop/autoupgrade/pull/192): Avoid storing whole file content in memory, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#194](https://github.com/PrestaShop/autoupgrade/pull/194): Deploying v4.5.0 of autoupgrade module, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Link list


### MBO

* [#67](https://github.com/PrestaShop/ps_mbo/pull/67): Ajax method renamed to be used in a display context as they should, by [@jolelievre](https://github.com/jolelievre)


### Translation files

* [#5](https://github.com/PrestaShop/TranslationFiles/pull/5): Remove not manage languages from 1.7.5, by [@jolelievre](https://github.com/jolelievre)


### Viewed products block

* [#10](https://github.com/PrestaShop/ps_viewedproduct/pull/10): On product deletion, the display should work as expected, by [@mickaelandrieu](https://github.com/mickaelandrieu)


## Changes in Documentation

* [#169](https://github.com/PrestaShop/docs/pull/169): Confusing route path for yml file. Thank you [@dheerajwebkul](https://github.com/dheerajwebkul)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @123monsite-regis, @freakstatic, @dheerajwebkul, @dineshbadrukhiya, @Joukz, @Klemart3D, @mafisz, @nenes25, @sarjon, @sete391, @unlocomqx!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
