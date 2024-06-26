---
layout: post
aliases: ["/news/coreweekly-week-28-2019"]
title:  "PrestaShop Core Weekly - Week 28 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-07-30 15:30:00
authors: [ AntoineThomas ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 08th to Sunday 14th of July 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## General messages

Dear Developers,

A change has been introduced in 1.7.6.0 in order to improve how currencies and carts are managed and displayed. And some bank payment modules are not working anymore. Unfortunately, this was not detected during the Beta and RC releases.

An issue has been opened on GitHub, and after investigation, [a solution has been proposed and tested](https://github.com/PrestaShop/PrestaShop/issues/14648#issuecomment-515989994). Please read this thread for details. TL;DR: the issue was actually not in the core, but in modules that were using a bad practice. And, that bad practice was working with previous versions of PrestaShop.

Some payments modules developed by the PrestaShop company are concerned and the module team is currently working to fix them. Stay tuned for updates if you are concerned.


## A quick update about PrestaShop's GitHub issues and pull requests:

- [92 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-07-08..2019-07-14) have been created in the project repositories;
- [71 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-07-08..2019-07-14), including [10 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-07-08..2019-07-14) on the core;
- [50 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-07-08..2019-07-14) in the project repositories;
- [43 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-07-08..2019-07-14), including [31 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-07-08..2019-07-14).


## Code changes in the 'develop' branch

### Core

* [#13983](https://github.com/PrestaShop/PrestaShop/pull/13983): Fix empty tag in webservice XML response. Thank you [@pumamood](https://github.com/pumamood)
* [#14246](https://github.com/PrestaShop/PrestaShop/pull/14246): Add doctrine filters applicator. Thank you [@sarjon](https://github.com/sarjon)
* [#14529](https://github.com/PrestaShop/PrestaShop/pull/14529): Fix position problem on a fresh install, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#14545](https://github.com/PrestaShop/PrestaShop/pull/14545): Remove english emails since they are generated now, by [@jolelievre](https://github.com/jolelievre)
* [#14552](https://github.com/PrestaShop/PrestaShop/pull/14552): Use variable instead of recomputing, by [@jolelievre](https://github.com/jolelievre)
* [#14560](https://github.com/PrestaShop/PrestaShop/pull/14560): Typo fix on bug issue template, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#14576](https://github.com/PrestaShop/PrestaShop/pull/14576): Merge 1.7.6.x to develop - 10/07/2019, by [@matks](https://github.com/matks)
* [#14592](https://github.com/PrestaShop/PrestaShop/pull/14592): Merge 1.7.6.x to develop - 11/07/2019, by [@matks](https://github.com/matks)


### Back office

* [#12997](https://github.com/PrestaShop/PrestaShop/pull/12997): [+] BO: add disable visual effect on translations. Thank you [@francoispeyret](https://github.com/francoispeyret)
* [#13529](https://github.com/PrestaShop/PrestaShop/pull/13529): Migrate Sell > Catalog > Monitoring listing action. Thank you [@zuk3975](https://github.com/zuk3975)
* [#14198](https://github.com/PrestaShop/PrestaShop/pull/14198): Add Commands/Queries Profiler tab. Thank you [@sarjon](https://github.com/sarjon)
* [#14249](https://github.com/PrestaShop/PrestaShop/pull/14249): Case-insensitive hook dispatching. Thank you [@tomas862](https://github.com/tomas862)
* [#14308](https://github.com/PrestaShop/PrestaShop/pull/14308): #14302 : Duplicate Product in BO with several taxes (multishop). Thank you [@202-ecommerce](https://github.com/202-ecommerce)
* [#14320](https://github.com/PrestaShop/PrestaShop/pull/14320): Introduces NumberMinMaxFilterType and IntegerMinMaxFilterType. Thank you [@tomas862](https://github.com/tomas862)
* [#14525](https://github.com/PrestaShop/PrestaShop/pull/14525): Fix php warning in php 7.2 in case of JSON output. Thank you [@202-ecommerce](https://github.com/202-ecommerce)
* [#14530](https://github.com/PrestaShop/PrestaShop/pull/14530): Use Preview link without  option for seo preview, by [@PierreRambaud](https://github.com/PierreRambaud)


### Front office

* [#14437](https://github.com/PrestaShop/PrestaShop/pull/14437): Translate aria-label in modal close button. Thank you [@davidglezz](https://github.com/davidglezz)
* [#14507](https://github.com/PrestaShop/PrestaShop/pull/14507): Fix bug of FO translations with multiple resources and tpl inclusions. Thank you [@202-ecommerce](https://github.com/202-ecommerce)
* [#14567](https://github.com/PrestaShop/PrestaShop/pull/14567): Remove image in about us cms page, by [@marionf](https://github.com/marionf)


### Tests

* [#14508](https://github.com/PrestaShop/PrestaShop/pull/14508): Integrate Puppeteer to check links on FO and BO, by [@mbadrani](https://github.com/mbadrani)
* [#14531](https://github.com/PrestaShop/PrestaShop/pull/14531): Remove another faulty e2e test from Travis, by [@matks](https://github.com/matks)


## Code changes in the "1.7.6.x" branch (for v1.7.6.0)

### Core

* [#14562](https://github.com/PrestaShop/PrestaShop/pull/14562): Update Changelog for v1.7.6.0 after RC2, by [@jolelievre](https://github.com/jolelievre)
* [#14579](https://github.com/PrestaShop/PrestaShop/pull/14579): Fix many things that were supposed to be removed during build not being removed, by [@eternoendless](https://github.com/eternoendless)


### Back office

* [#14532](https://github.com/PrestaShop/PrestaShop/pull/14532): Check if index.php file exists before ignoring it, by [@jolelievre](https://github.com/jolelievre)


## Code changes in modules, themes & tools

### Docker

* [#167](https://github.com/PrestaShop/docker/pull/167): Release 1760, by [@jolelievre](https://github.com/jolelievre)


### Live demo service

* [#7](https://github.com/PrestaShop/live-demo-devices/pull/7): Revert "Adapt api domain regarding the current domain" and use env var in build, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Mail alert

* [#20](https://github.com/PrestaShop/ps_emailalerts/pull/20): Uninstall module used on PS 1.6 before using this one, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### E-mail subscription form

* [#34](https://github.com/PrestaShop/ps_emailsubscription/pull/34): Patch 1. Thank you [@Codencode](https://github.com/Codencode)


### Auto Upgrade

* [#329](https://github.com/PrestaShop/autoupgrade/pull/329): Deploying v4.9.0 of the autoupgrade module, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#331](https://github.com/PrestaShop/autoupgrade/pull/331): Split upgrade & backup process, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### classic-rocket

* [#73](https://github.com/PrestaShop/classic-rocket/pull/73): Unclosed tag. Thank you [@antoninblasco](https://github.com/antoninblasco)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @202-ecommerce, @antoninblasco, @Codencode, @davidglezz, @francoispeyret, @pumamood, @sarjon, @tomas862, @zuk3975!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
