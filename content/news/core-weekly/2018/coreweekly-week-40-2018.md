---
layout: post
aliases: ["/news/coreweekly-week-40-2018"]
title:  "PrestaShop Core Weekly - Week 40 of 2018"
subtitle: "An inside look at the PrestaShop codebase"
date:   2018-10-12 16:45:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 1st to Sunday 7th of October 2018.

![Core Weekly banner](/assets/images/2017/04/core_weekly_banner.jpg)


## General messages

Dear Developers, there are a lot of things to tell this week:

* [1.6.1.22 is out to fix a bug introduced in 1.6.1.21](http://build.prestashop.com/news/prestashop-1-6-1-22-maintenance-release/). If you have a shop in 1.6.1.21, this is mandatory to update. 
* It's official, the [end of life of PrestaShop 1.6.1.x is now in June 2019](https://www.prestashop.com/en/blog/Maintenance-extension-PrestaShop-1-6)
* We had a lot of issues with our APIs this week, and we are very sorry. Be assured that our top priority is to make sure that every PrestaShop merchant is not disturbed anymore with this kind of issue, especially for the upcoming christmas season.
* Because of the other top priorities of this week, 1.7.5 beta is late. More news about it next week.


## A quick update about GitHub issues

Last week, [65 new issues](https://github.com/PrestaShop/PrestaShop/issues?utf8=%E2%9C%93&q=is:issue+created:2018-10-01..2018-10-07)  issues have been opened in PrestaShop's core repository, and [20 fixed issues](https://github.com/PrestaShop/PrestaShop/issues?utf8=%E2%9C%93&q=is:issue+label:fixed+closed:2018-10-01..2018-10-07) have been closed.


## Code changes in the 'develop' branch (for v1.7.6.0)

### Core

* [#9247](https://github.com/PrestaShop/PrestaShop/pull/9247): Add themes in gitignore (except classic), by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#10699](https://github.com/PrestaShop/PrestaShop/pull/10699): Change getcwd() for __DIR__. Thank you [@DanielBoettner](https://github.com/DanielBoettner)
* [#10704](https://github.com/PrestaShop/PrestaShop/pull/10704): Add TranslatableType. Thank you [@sarjon](https://github.com/sarjon)
* [#10722](https://github.com/PrestaShop/PrestaShop/pull/10722): Update Smarty and Symfony to latest, by [@eternoendless](https://github.com/eternoendless)
* [#10781](https://github.com/PrestaShop/PrestaShop/pull/10781): Fixes new webservice list behavior in multishop context and fixes warning message display. Thank you [@tomas862](https://github.com/tomas862)
* [#10834](https://github.com/PrestaShop/PrestaShop/pull/10834): Allow release creator to be run without version parameter, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


## Code changes in the '1.7.5.x' branch (for v1.7.5.0)

### Core

* [#10536](https://github.com/PrestaShop/PrestaShop/pull/10536): Delete search indexes. Thank you [@Mreker](https://github.com/Mreker)
* [#10696](https://github.com/PrestaShop/PrestaShop/pull/10696): Check $sfRouter before using it, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#10795](https://github.com/PrestaShop/PrestaShop/pull/10795): Use https only for API calls and limit use of guzzle , by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#10837](https://github.com/PrestaShop/PrestaShop/pull/10837): Remove rebuild of SymfonyRequirements file after every composer run, by [@eternoendless](https://github.com/eternoendless)
* [#10840](https://github.com/PrestaShop/PrestaShop/pull/10840): Update Smarty and Symfony to latest, by [@eternoendless](https://github.com/eternoendless)
* [#10863](https://github.com/PrestaShop/PrestaShop/pull/10863): Update translations catalog for 1.7.5, by [@PierreRambaud](https://github.com/PierreRambaud)


### Back Office

* [#10684](https://github.com/PrestaShop/PrestaShop/pull/10684): avoid displaying the addon modal twice, change form names/IDs to avoid collision, by [@jolelievre](https://github.com/jolelievre)
* [#10735](https://github.com/PrestaShop/PrestaShop/pull/10735): Module translations aren't working when using Smarty Extend into TPL in BO, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#10741](https://github.com/PrestaShop/PrestaShop/pull/10741): Fix import form alignment. Thank you [@sarjon](https://github.com/sarjon)
* [#10751](https://github.com/PrestaShop/PrestaShop/pull/10751):  [BO] Fix bug when filter stores by name or address. Thank you [@SebBareyre](https://github.com/SebBareyre)
* [#10752](https://github.com/PrestaShop/PrestaShop/pull/10752): Use the right PrestaShop namespace for twig templates, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#10778](https://github.com/PrestaShop/PrestaShop/pull/10778): Enable pagination when offset is set. Thank you [@sarjon](https://github.com/sarjon)
* [#10788](https://github.com/PrestaShop/PrestaShop/pull/10788): Allow url in search preview to use several lines, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#10796](https://github.com/PrestaShop/PrestaShop/pull/10796): Reuse getAdminLink instead of copy pasting its content, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#10814](https://github.com/PrestaShop/PrestaShop/pull/10814): Restore legacy sql manager page 175, by [@matks](https://github.com/matks)
* [#10835](https://github.com/PrestaShop/PrestaShop/pull/10835): Fix import module, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#10857](https://github.com/PrestaShop/PrestaShop/pull/10857): Use parent javascripts used for displaying help, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#10862](https://github.com/PrestaShop/PrestaShop/pull/10862): Fixes bug when filter reset functionality sometimes does not work. Thank you [@tomas862](https://github.com/tomas862)


### Front Office

* [#10750](https://github.com/PrestaShop/PrestaShop/pull/10750): Do not display product Reference if empty, by [@khouloudbelguith](https://github.com/khouloudbelguith)


### Install

* [#10296](https://github.com/PrestaShop/PrestaShop/pull/10296): Init Kernel when possible during installation process, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


##  Code changes in the '1.7.1.x' branch (for v1.7.4.3)

### Core

* [#10829](https://github.com/PrestaShop/PrestaShop/pull/10829): Hide arguments in debug trace page, by [@jolelievre](https://github.com/jolelievre)


## Code changes in modules, themes & tools

### Contact form

* [#25](https://github.com/PrestaShop/contactform/pull/25): Comply to validator.prestashop.com rules, by [@matks](https://github.com/matks)


### Shopping cart

* [#28](https://github.com/PrestaShop/ps_shoppingcart/pull/28): Fix missing call to parent::initContent(), by [@eternoendless](https://github.com/eternoendless)


### MBO

* [#51](https://github.com/PrestaShop/ps_mbo/pull/51): Filter catalog page. Thank you [@MrBaiame](https://github.com/MrBaiame)
* [#52](https://github.com/PrestaShop/ps_mbo/pull/52): Prepare template to override, by [@PierreRambaud](https://github.com/PierreRambaud)


### Translation Tools Bundles

* [#48](https://github.com/PrestaShop/TranslationToolsBundle/pull/48): Improve node visitor, by [@eternoendless](https://github.com/eternoendless)
* [#49](https://github.com/PrestaShop/TranslationToolsBundle/pull/49): Add support for extraction of wordings in form type classes, by [@eternoendless](https://github.com/eternoendless)
* [#50](https://github.com/PrestaShop/TranslationToolsBundle/pull/50): Always use realpath on root_dir, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#51](https://github.com/PrestaShop/TranslationToolsBundle/pull/51): Use new name for translator service, by [@PierreRambaud](https://github.com/PierreRambaud)


### Google Analytics

* [#14](https://github.com/PrestaShop/ps_googleanalytics/pull/14): Only cast as array when a product is returned, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Favicon Notification

* [#6](https://github.com/PrestaShop/ps_faviconnotificationbo/pull/6): Fix issues. Thank you [@clementdaubeuf](https://github.com/clementdaubeuf)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @clementdaubeuf, @DanielBoettner, @MrBaiame, @Mreker, @sarjon, @SebBareyre, @tomas862!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
