---
layout: post
aliases: ["/news/coreweekly-week-47-2018"]
title:  "PrestaShop Core Weekly - Week 47 of 2018"
subtitle: "An inside look at the PrestaShop codebase"
date:   2018-11-30 16:30:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 19th to Sunday 25th of November 2018.

![Core Weekly banner](/assets/images/2017/04/core_weekly_banner.jpg)


## General messages

Dear Developpers,

The [Auto upgrade module is available in version 4.5.0](https://github.com/PrestaShop/autoupgrade/releases/tag/v4.5.0). The memory use when downloading releases has been optimized.

I will be at [Paris Open Source Summit next week](https://www.opensourcesummit.paris/), and I will speak about [PrestaShop, open source and business models](https://inno3.fr/actualite/track-modeles-daffaires-de-lopen-source-poss-2018). If you are planning to be there too, let's meet, discuss, and maybe why not have a beer together?


## A quick update about GitHub issues

Last week, [45 new issues](https://github.com/PrestaShop/PrestaShop/issues?utf8=%E2%9C%93&q=is:issue+created:2018-11-19..2018-11-25) have been created in PrestaShop's core repository, and [11 fixed issues](https://github.com/PrestaShop/PrestaShop/issues?utf8=%E2%9C%93&q=is:issue+label:fixed+closed:2018-11-19..2018-11-25) have been closed.

## Code changes in the 'develop' branch (for v1.7.6.0)

### Core

* [#10839](https://github.com/PrestaShop/PrestaShop/pull/10839): Migrate languages list. Thank you [@sarjon](https://github.com/sarjon)
* [#11204](https://github.com/PrestaShop/PrestaShop/pull/11204): [*] CO : Fixed incorrect comparison when out of stock. Thank you [@andromaque](https://github.com/andromaque)
* [#11397](https://github.com/PrestaShop/PrestaShop/pull/11397): add total_shipping_tax_excl , incl in email data. Thank you [@sitte](https://github.com/sitte)
* [#11417](https://github.com/PrestaShop/PrestaShop/pull/11417): Lossless compression of all images. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#11456](https://github.com/PrestaShop/PrestaShop/pull/11456): Merge 1.7.5.x in develop, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#11469](https://github.com/PrestaShop/PrestaShop/pull/11469): Fix SQL update when last_connection_date is null, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Back office

* [#10992](https://github.com/PrestaShop/PrestaShop/pull/10992): Migrate Customer view page. Thank you [@sarjon](https://github.com/sarjon)
* [#11235](https://github.com/PrestaShop/PrestaShop/pull/11235): Prevent unnecessary Order objects from being created in Admin Orders. Thank you [@mnastalski](https://github.com/mnastalski)
* [#11256](https://github.com/PrestaShop/PrestaShop/pull/11256): Fixes error reported in #9687, regarding carrier list in the modal to .... Thank you [@manfield](https://github.com/manfield)
* [#11424](https://github.com/PrestaShop/PrestaShop/pull/11424): Improvement needs on hover of "Ok" button of source code modal on product page. Thank you [@dineshbadrukhiya](https://github.com/dineshbadrukhiya)


### Front office

* [#11362](https://github.com/PrestaShop/PrestaShop/pull/11362): Dont expose Powered-By: Prestashop . Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#11419](https://github.com/PrestaShop/PrestaShop/pull/11419): Noto Sans fonts updated to version 2.001 hinted. Thank you [@ProBackup-nl](https://github.com/ProBackup-nl)


### Tests

* [#9309](https://github.com/PrestaShop/PrestaShop/pull/9309): Check buttons in header product page. Thank you [@hadrich-hatem](https://github.com/hadrich-hatem)
* [#9312](https://github.com/PrestaShop/PrestaShop/pull/9312): Check order details (selenium tests), by [@fatmaBouchekoua](https://github.com/fatmaBouchekoua)


## Code changes in the '1.7.5.x' branch (for v1.7.5.0)

### Back office

* [#11279](https://github.com/PrestaShop/PrestaShop/pull/11279): Allow product ordering on explicit request, by [@jolelievre](https://github.com/jolelievre)
* [#11421](https://github.com/PrestaShop/PrestaShop/pull/11421): Display configure button only if module is configurable, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#11447](https://github.com/PrestaShop/PrestaShop/pull/11447): Escape everything!, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#11448](https://github.com/PrestaShop/PrestaShop/pull/11448): Remove useless trad files in install for persian, by [@jolelievre](https://github.com/jolelievre)
* [#11457](https://github.com/PrestaShop/PrestaShop/pull/11457): Refactoring filemanager/execute.php, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#11463](https://github.com/PrestaShop/PrestaShop/pull/11463): fix admin translation redirect, by [@tomlev](https://github.com/tomlev)
* [#11466](https://github.com/PrestaShop/PrestaShop/pull/11466): Revert separated module buttons, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#11478](https://github.com/PrestaShop/PrestaShop/pull/11478): Changes the redirection url after store update, by [@jolelievre](https://github.com/jolelievre)


### Front office

* [#10964](https://github.com/PrestaShop/PrestaShop/pull/10964): Mine dev presta shop branch. Thank you [@damianobertuna](https://github.com/damianobertuna)


### Tests

* [#11280](https://github.com/PrestaShop/PrestaShop/pull/11280): Add some fixes to the script. Thank you [@hadrich-hatem](https://github.com/hadrich-hatem)


## Code changes in the '1.6.1.x' branch (for v1.6.1.24)

### Core

* [#11043](https://github.com/PrestaShop/PrestaShop/pull/11043): CO: Update ambiguous code style. Thank you [@gwarnants](https://github.com/gwarnants)
* [#11204](https://github.com/PrestaShop/PrestaShop/pull/11204): [*] CO : Fixed incorrect comparison when out of stock. Thank you [@andromaque](https://github.com/andromaque)


## Code changes in modules, themes & tools

### Buy Button Lite

* [#3](https://github.com/PrestaShop/ps_buybuttonlite/pull/3): fix issue #2 regarding error 500 when searching products. Thank you [@Joukz](https://github.com/Joukz)


### Auto Upgrade

* [#190](https://github.com/PrestaShop/autoupgrade/pull/190): Do not define configuration values in JS (unused), by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#191](https://github.com/PrestaShop/autoupgrade/pull/191): Deploying v4.4.2 of autoupgrade, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Link list

* [#44](https://github.com/PrestaShop/ps_linklist/pull/44): Fo: fix custom link id. Thank you [@duGuillaume](https://github.com/duGuillaume)
* [#53](https://github.com/PrestaShop/ps_linklist/pull/53): Fix upgrade script with query syntax error, add clear cache and in in…, by [@jolelievre](https://github.com/jolelievre)
* [#54](https://github.com/PrestaShop/ps_linklist/pull/54): Fix upgrade script, by [@jolelievre](https://github.com/jolelievre)
* [#55](https://github.com/PrestaShop/ps_linklist/pull/55): Use Tools directly to clear cache instead of using symfony container, by [@jolelievre](https://github.com/jolelievre)
* [#56](https://github.com/PrestaShop/ps_linklist/pull/56):  Use Tools to clear cache, by [@jolelievre](https://github.com/jolelievre)


## Changes in Documentation

* [#165](https://github.com/PrestaShop/docs/pull/165): List of productS. Thank you [@Klemart3D](https://github.com/Klemart3D)
* [#166](https://github.com/PrestaShop/docs/pull/166): List of productS. Thank you [@Klemart3D](https://github.com/Klemart3D)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @andromaque, @damianobertuna, @dineshbadrukhiya, @duGuillaume, @gwarnants, @hadrich-hatem, @Joukz, @Klemart3D, @MathiasReker, @manfield, @mnastalski, @ProBackup-nl, @sarjon, @sitte!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
