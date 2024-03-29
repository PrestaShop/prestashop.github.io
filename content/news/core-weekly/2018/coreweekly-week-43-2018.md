---
layout: post
aliases: ["/news/coreweekly-week-43-2018"]
title:  "PrestaShop Core Weekly - Week 43 of 2018"
subtitle: "An inside look at the PrestaShop codebase"
date:   2018-10-31 14:30:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 22nd to Sunday 28th of October 2018.

![Core Weekly banner](/assets/images/2017/04/core_weekly_banner.jpg)


## General messages

Dear Developers,

Last week, part of the PrestaShop team's developers attended the PHP Forum in Paris. It is a good event to discover what's new with the technology and learn new skills. However, it has had an impact on productivity: fewer pull requests have been merged than usual.

The recent upgrade of PrestaShop's APIs infrastructures improved the overall performance of stores back office. In parallel, the Gamification module has been improved too. A new release is available, for both 1.6 and 1.7 versions of PrestaShop:

* All static files are included in the module, in order to remove a lot of requests to the servers
* The json data requested by the module is compressed and so up to 90% lighter in order to decrease the bandwidth
* Some users reported an issue with very old versions of PHP; a fix is currently being tested and another release is expected soon, but please keep in mind that for your shop security and performance, you should use a supported version of PHP
* You can follow the work about the [Gamification module on GitHub](https://github.com/PrestaShop/gamification).

By the way, thanks a lot for the feedback on GitHub. It helps a lot to improve the PrestaShop open source project.


## A quick update about GitHub issues

Last week, [45 new issues](https://github.com/PrestaShop/PrestaShop/issues?utf8=%E2%9C%93&q=is:issue+created:2018-10-22..2018-10-28) have been created in PrestaShop's core repository, and [8 fixed issues](https://github.com/PrestaShop/PrestaShop/issues?utf8=%E2%9C%93&q=is:issue+label:fixed+closed:2018-10-22..2018-10-28) have been closed.


## Code changes in the 'develop' branch (for v1.7.6.0)

### Core

* [#10816](https://github.com/PrestaShop/PrestaShop/pull/10816): Migrate "Layout customization" part of Them & Logo controller. Thank you [@sarjon](https://github.com/sarjon)
* [#11139](https://github.com/PrestaShop/PrestaShop/pull/11139): Deprecate legacy Db service. Thank you [@sarjon](https://github.com/sarjon)
* [#11140](https://github.com/PrestaShop/PrestaShop/pull/11140): CO : Remove unreachable code. Thank you [@idnovate](https://github.com/idnovate)


### Back office

* [#10535](https://github.com/PrestaShop/PrestaShop/pull/10535): Fix typos. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#11075](https://github.com/PrestaShop/PrestaShop/pull/11075): Introduces improved AdminSecurity and DemoRestricted annotations usage with ability to pass query parameters to keep. Thank you [@tomas862](https://github.com/tomas862)
* [#11093](https://github.com/PrestaShop/PrestaShop/pull/11093): sets sortable flag by default to "true" on ToggleColumn. Thank you [@tomas862](https://github.com/tomas862)


## Code changes in the '1.7.5.x' branch (for v1.7.5.0)

### Back office

* [#11111](https://github.com/PrestaShop/PrestaShop/pull/11111): Revert "Apply quotes around the column names would make all the SQL r…, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#11123](https://github.com/PrestaShop/PrestaShop/pull/11123): Make the E2E tests wait for the first load of the BO with welcome module enabled, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Front office

* [#11055](https://github.com/PrestaShop/PrestaShop/pull/11055): Fix minimum quantity blocking, by [@jolelievre](https://github.com/jolelievre)
* [#11156](https://github.com/PrestaShop/PrestaShop/pull/11156): Rollback product canonical, by [@jolelievre](https://github.com/jolelievre)


## Code changes in modules, themes & tools

### Gamification

* [#26](https://github.com/PrestaShop/gamification/pull/26): Ask Gamification server for gzipped content, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#27](https://github.com/PrestaShop/gamification/pull/27): bumped 2.1.0, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#29](https://github.com/PrestaShop/gamification/pull/29): Merge dev branch into master branch (released 2.1.0), by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#30](https://github.com/PrestaShop/gamification/pull/30): Support of 1.6.1.x releases, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#31](https://github.com/PrestaShop/gamification/pull/31): bumped 2.2.0, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#32](https://github.com/PrestaShop/gamification/pull/32): Merge dev branch into master branch (publish the module on Addons), by [@mickaelandrieu](https://github.com/mickaelandrieu)


### Docker

* [#139](https://github.com/PrestaShop/docker/pull/139): Add missing releases, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


## Changes in Documentation

* [#157](https://github.com/PrestaShop/docs/pull/157): Update nightly link to use google cloud interface, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @idnovate, @sarjon, @tomas862!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
