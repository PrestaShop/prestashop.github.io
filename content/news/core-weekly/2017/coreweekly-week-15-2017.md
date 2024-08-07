---
layout: post
aliases: ["/news/coreweekly-week-15-2017"]
title:  "PrestaShop Core Weekly - Week 15 of 2017"
subtitle: "An inside look at the PrestaShop codebase"
date:   2017-04-18 09:10:11
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 10 to Sunday 16th of April 2017.

![Core Weekly banner](/assets/images/2017/04/core_weekly_banner.jpg)


## General messages

PrestaShop 1.7.1.0 was released 15 days ago today! As you can expect, the team is currently focusing on fixing the most critical issue that were discovered in that version in order to quickly release v1.7.1.1. It should be available this week.

In the mean time, the more internationally-inclined of you might be interested in two recent Build articles in that area:

* **[What's New Regarding Translations In PrestaShop 1.7.1.0](http://build.prestashop.com/news/translation-news-171/)**: a short tour of the changes brought by the latest minor version, and how it makes things better for you, both as a merchant and a translator!
* **[Making PrestaShop RTL-Compliant Together With You](http://build.prestashop.com/news/PrestaShop-RTL-project/)**: launch of a public Trello board to share our ideas, intentions and progress on right-to-Left support for PrestaShop.
*  ...and of course, you can always [contribute to the translation](https://crowdin.com/project/prestashop-official) in your language!

You might have noticed that there has not been any change to the '1.7.0.x' branch for quite some time -- [since Week 9 of 2017](http://build.prestashop.com/news/coreweekly-week-9-2017/), to be precise. This is because the Core team now works on version 1.7.1.0, which continues the work done with version 1.7.0.0. If you are using PrestaShop 1.7.0.x, we encourage you to upgrade to 1.7.1.0.


## Code changes in the 'develop' branch (for 1.7.2.0)

Now let's review the merged pull-requests on the 'develop' branch since the last Core Weekly Report!

#### Back office

* [#7777](https://github.com/PrestaShop/PrestaShop/pull/7777): Make module actions translatable, by @quetzacoalt91.
* [#7763](https://github.com/PrestaShop/PrestaShop/pull/7763): Updated path in maintenance message, by @alexeven.
* [#7735](https://github.com/PrestaShop/PrestaShop/pull/7735): Add translation domains to order templates, by @alexeven.


## Code changes in the '1.7.1.x' branch (for v1.7.1.0's patch versions) 

Next, let's review the merged pull-requests on the ['1.7.1.x' branch](https://github.com/PrestaShop/PrestaShop/tree/1.7.1.x) since the last Core Weekly Report!


#### Core

* [#7776](https://github.com/PrestaShop/PrestaShop/pull/7776): Fix cache on install, by @aleeks.


#### Back office

* [#7769](https://github.com/PrestaShop/PrestaShop/pull/7769): Fix the datepicker to use locale instead of iso code, by @maximebiloe.


## Code changes in the '1.6.1.x' branch (for 1.6.1.0's patch versions) 

Finally, the merged pull-requests on the ['1.6.1.x' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!


#### Back office

* [#7658](https://github.com/PrestaShop/PrestaShop/pull/7658): Fix Combination filter in stock management section, by @fatmabouchekoua.

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!

