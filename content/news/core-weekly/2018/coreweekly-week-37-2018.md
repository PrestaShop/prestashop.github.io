---
layout: post
aliases: ["/news/coreweekly-week-37-2018"]
title:  "PrestaShop Core Weekly - Week 37 of 2018"
subtitle: "An inside look at the PrestaShop codebase"
date:   2018-09-21 15:35:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 10th to Sunday 16th of September 2018.

![Core Weekly banner](/assets/images/2017/04/core_weekly_banner.jpg)


## General messages

Dear developers,

Code freeze was yesterday. Congratulation to everyone involved!!!!

But the work for 1.7.5 is not finished. Now, it's time to update and clean the backlog, build a beta and start to debug it. Please, be prepared to test ;-)

Have a good week-end.


## A quick update about GitHub issues

Last week, [62 new issues](https://github.com/PrestaShop/PrestaShop/issues?utf8=%E2%9C%93&q=is:issue+created:2018-09-10..2018-09-16)  issues have been opened in PrestaShop's core repository, and [7 fixed issues](https://github.com/PrestaShop/PrestaShop/issues?utf8=%E2%9C%93&q=is:issue+label:fixed+closed:2018-09-10..2018-09-16) have been closed.


## Code changes in the 'develop' branch (for v1.7.5.0)

### Core

* [#9292](https://github.com/PrestaShop/PrestaShop/pull/9292): Update pull-request template with additional PR types. Thank you [@sarjon](https://github.com/sarjon)
* [#10337](https://github.com/PrestaShop/PrestaShop/pull/10337): Remove hard-coded-version in assets URL, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#10363](https://github.com/PrestaShop/PrestaShop/pull/10363): Fix undefined method in query parser. Thank you [@sarjon](https://github.com/sarjon)
* [#10419](https://github.com/PrestaShop/PrestaShop/pull/10419): Change Javascript indent to 2 spaces, per AirBnb rules, by [@eternoendless](https://github.com/eternoendless)


### Back Office

* [#10265](https://github.com/PrestaShop/PrestaShop/pull/10265): Move Logs page JS to appropriate location. Thank you [@sarjon](https://github.com/sarjon)
* [#10291](https://github.com/PrestaShop/PrestaShop/pull/10291): Fix the display of textarea in the category page, by [@khouloudbelguith](https://github.com/khouloudbelguith)
* [#10295](https://github.com/PrestaShop/PrestaShop/pull/10295): Display the company name in outstanding orders, by [@khouloudbelguith](https://github.com/khouloudbelguith)
* [#10311](https://github.com/PrestaShop/PrestaShop/pull/10311): Small improvements for Webservice list. Thank you [@tomas862](https://github.com/tomas862)
* [#10358](https://github.com/PrestaShop/PrestaShop/pull/10358): Update list and settings layout. Thank you [@sarjon](https://github.com/sarjon)
* [#10361](https://github.com/PrestaShop/PrestaShop/pull/10361): Only load Vue Serp component if available, by [@matks](https://github.com/matks)
* [#10375](https://github.com/PrestaShop/PrestaShop/pull/10375): Fix category tree in BO Products Catalog page, by [@matks](https://github.com/matks)
* [#10416](https://github.com/PrestaShop/PrestaShop/pull/10416): Improve perceived form horizontal alignment, by [@eternoendless](https://github.com/eternoendless)
* [#10426](https://github.com/PrestaShop/PrestaShop/pull/10426): Handle boolean returns from RequestSql validation, by [@matks](https://github.com/matks)
* [#10427](https://github.com/PrestaShop/PrestaShop/pull/10427): Get link of the first ACTIVE tab in nav, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Front Office

* [#10267](https://github.com/PrestaShop/PrestaShop/pull/10267): FO \| Product List: pack flag visual problem. Thank you [@CaptainYouz](https://github.com/CaptainYouz)
* [#10347](https://github.com/PrestaShop/PrestaShop/pull/10347): FO: Fix htaccess to support Apache 2.4 webservers. Thank you [@gennaris](https://github.com/gennaris)
* [#10350](https://github.com/PrestaShop/PrestaShop/pull/10350): Fix empty row when social title is empty. Thank you [@Mreker](https://github.com/Mreker)
* [#10352](https://github.com/PrestaShop/PrestaShop/pull/10352): Fix htaccess to support Apache 2.4 webservers. Thank you [@Mreker](https://github.com/Mreker)
* [#10438](https://github.com/PrestaShop/PrestaShop/pull/10438): Fix for Issue #10433 : Update lastName and firstName max size. Thank you [@FranckRIBEIRO](https://github.com/FranckRIBEIRO)


### Tests

* [#8824](https://github.com/PrestaShop/PrestaShop/pull/8824): check add to cart button inability when the quantities of the product in the cart is not available, by [@fouratachour](https://github.com/fouratachour)
* [#8825](https://github.com/PrestaShop/PrestaShop/pull/8825): Check displaying the cover image if no image is selected for declination, by [@fouratachour](https://github.com/fouratachour)
* [#8941](https://github.com/PrestaShop/PrestaShop/pull/8941): Click on read more. Thank you [@hadrich-hatem](https://github.com/hadrich-hatem)
* [#9108](https://github.com/PrestaShop/PrestaShop/pull/9108): Contact. Thank you [@hadrich-hatem](https://github.com/hadrich-hatem)
* [#9111](https://github.com/PrestaShop/PrestaShop/pull/9111): Languages. Thank you [@hadrich-hatem](https://github.com/hadrich-hatem)
* [#9124](https://github.com/PrestaShop/PrestaShop/pull/9124): Check the created customer in the front office and delete customer with both mode, by [@fouratachour](https://github.com/fouratachour)
* [#9274](https://github.com/PrestaShop/PrestaShop/pull/9274): Adding check all the product status, by [@fouratachour](https://github.com/fouratachour)
* [#9275](https://github.com/PrestaShop/PrestaShop/pull/9275): Create, edit and delete Linkwidget, by [@fouratachour](https://github.com/fouratachour)
* [#9303](https://github.com/PrestaShop/PrestaShop/pull/9303): Add BOOM campaign, by [@fatmaBouchekoua](https://github.com/fatmaBouchekoua)
* [#9328](https://github.com/PrestaShop/PrestaShop/pull/9328): Create a Standard, Pack, Combination and Virtual product and check it in the Front Office, by [@fouratachour](https://github.com/fouratachour)
* [#9418](https://github.com/PrestaShop/PrestaShop/pull/9418): Check that all product are diplayed in the front Office, by [@fouratachour](https://github.com/fouratachour)


### Install

* [#9340](https://github.com/PrestaShop/PrestaShop/pull/9340): Update rel="noopener noreferrer". Thank you [@rudSarkar](https://github.com/rudSarkar)
* [#10410](https://github.com/PrestaShop/PrestaShop/pull/10410): fix fixtures inconsistencies, by [@jocel1](https://github.com/jocel1)


## Code changes in modules, themes & tools

### Auto Upgrade

* [#163](https://github.com/PrestaShop/autoupgrade/pull/163): Use install autoloader for classes in install/, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#165](https://github.com/PrestaShop/autoupgrade/pull/165): Ignored files incorrect outside root, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#166](https://github.com/PrestaShop/autoupgrade/pull/166): Use _PS_ROOT_DIR_ in autoload paths, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#167](https://github.com/PrestaShop/autoupgrade/pull/167): Allow users to ignore the PrestaShop requirements which can be incomplete, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#168](https://github.com/PrestaShop/autoupgrade/pull/168): Bump version to 4.2.0, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#169](https://github.com/PrestaShop/autoupgrade/pull/169): Deploying v4.2.0 of 1-click upgrade, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### MBO

* [#33](https://github.com/PrestaShop/ps_mbo/pull/33): Fix #27 #30 #32 + ajax_loading. Thank you [@MrBaiame](https://github.com/MrBaiame)


### Viewed products block

* [#7](https://github.com/PrestaShop/ps_viewedproduct/pull/7): manage new hook name displayProductAdditionalInfo, by [@jolelievre](https://github.com/jolelievre)
* [#8](https://github.com/PrestaShop/ps_viewedproduct/pull/8): Deploying v1.1.0 of ps_viewedproduct, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### PrestaShop on Docker

* [#129](https://github.com/PrestaShop/docker/pull/129): Add troubleshooting about mysql container, by [@matks](https://github.com/matks)
* [#135](https://github.com/PrestaShop/docker/pull/135): Avoid chown on the whole project when installation is requested, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @CaptainYouz, @FranckRIBEIRO, @gennaris, @hadrich-hatem, @MrBaiame, @Mreker, @rudSarkar, @sarjon!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
