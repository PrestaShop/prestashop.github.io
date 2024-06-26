---
layout: post
aliases: ["/news/coreweekly-week-44-2018"]
title:  "PrestaShop Core Weekly - Week 44 of 2018"
subtitle: "An inside look at the PrestaShop codebase"
date:   2018-11-12 14:30:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 29th of October to Sunday 4th of November 2018.

![Core Weekly banner](/assets/images/2017/04/core_weekly_banner.jpg)


## General messages

Dear Developers,

In case you missed it, [1.7.5 beta 1 is released](http://build.prestashop.com/news/prestashop-1-7-5-0-beta-release/) and avaialable for testing. Please test on your servers, with your modules and themes, and [report your feedback and issues on GitHub](https://github.com/PrestaShop/PrestaShop/issues).

This Thursday afternoon, if you are in Paris, there is a very interesting [Azure + PrestaShop workshop](https://www.microsoftevents.com/profile/form/index.cfm?PKformID=0x5115656abcd), with performance and cloud experts, plus a cocktail for attendees in the evening. Only a few places are still available, so if you are interested, just comment this article or ping @PrestaShop or @ttoine on Twitter.


## A quick update about GitHub issues

Last week, [58 new issues](https://github.com/PrestaShop/PrestaShop/issues?utf8=%E2%9C%93&q=is:issue+created:2018-10-29..2018-11-04) have been created in PrestaShop's core repository, and [10 fixed issues](https://github.com/PrestaShop/PrestaShop/issues?utf8=%E2%9C%93&q=is:issue+label:fixed+closed:2018-10-29..2018-11-04) have been closed.


## Code changes in the 'develop' branch (for v1.7.6.0)

### Core

* [#11072](https://github.com/PrestaShop/PrestaShop/pull/11072): Merge 1.7.5.x into develop, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#11151](https://github.com/PrestaShop/PrestaShop/pull/11151): Fixed MailsProvider service declaration name, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#11245](https://github.com/PrestaShop/PrestaShop/pull/11245): Merge 1.7.5.x in develop, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


## Code changes in the '1.7.5.x' branch (for v1.7.5.0)

### Core

* [#10446](https://github.com/PrestaShop/PrestaShop/pull/10446): Increase max size of reference, meta_title, meta_description email, password, firstname, lastname and company.. Thank you [@MathiasReker](https://github.com/MathiasReker)

* [#11168](https://github.com/PrestaShop/PrestaShop/pull/11168): Remove Throwable from core. Thank you [@sarjon](https://github.com/sarjon)


### Back office

* [#10898](https://github.com/PrestaShop/PrestaShop/pull/10898): Fixed performance rights on Performance Clear Cache action, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#11035](https://github.com/PrestaShop/PrestaShop/pull/11035): Optimize legacy links in dev mode, by [@jolelievre](https://github.com/jolelievre)
* [#11136](https://github.com/PrestaShop/PrestaShop/pull/11136): Fix param name on email delete all bulk action, by [@tomlev](https://github.com/tomlev)
* [#11182](https://github.com/PrestaShop/PrestaShop/pull/11182): The deletion of themes must depends on Employee permissions, by [@mickaelandrieu](https://github.com/mickaelandrieu)


### Tests

* [#11122](https://github.com/PrestaShop/PrestaShop/pull/11122): Add some fixes to the campaign Full. Thank you [@YosraAk](https://github.com/YosraAk)
* [#11239](https://github.com/PrestaShop/PrestaShop/pull/11239): Do not install Addons modules for Test BDD creation, by [@matks](https://github.com/matks)


### Install

* [#10909](https://github.com/PrestaShop/PrestaShop/pull/10909): Made the installed theme configurable, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#11206](https://github.com/PrestaShop/PrestaShop/pull/11206): Installer: always clean test assets even if filesystem tests fail, an…, by [@matks](https://github.com/matks)
* [#11209](https://github.com/PrestaShop/PrestaShop/pull/11209): Ignore irrelevant SF warning aout composer at install, by [@matks](https://github.com/matks)


## Code changes in the '1.7.4.x' branch (for v1.7.4.4)

### Tests

* [#10708](https://github.com/PrestaShop/PrestaShop/pull/10708): Add some fixes to the script. Thank you [@hadrich-hatem](https://github.com/hadrich-hatem)


## Code changes in modules, themes & tools

### Gamification

* [#33](https://github.com/PrestaShop/gamification/pull/33): Make module compatible with PHP 5.2, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#34](https://github.com/PrestaShop/gamification/pull/34): Deploying v2.2.1 of the gamification module, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


## Changes in Documentation

* [#159](https://github.com/PrestaShop/docs/pull/159): Add relation between 1.6 & 1.7 modules, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @hadrich-hatem, @MathiasReker, @sarjon, @YosraAk!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
