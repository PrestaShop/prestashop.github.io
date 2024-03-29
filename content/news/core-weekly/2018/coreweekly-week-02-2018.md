---
layout: post
aliases: ["/news/coreweekly-week-02-2018"]
title:  "PrestaShop Core Weekly - Week 02 of 2018"
subtitle: "An inside look at the PrestaShop codebase"
date:   2018-01-15 09:10:11
authors: [ LouiseBonnard ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 08th to Sunday 14th of January 2018.

![Core Weekly banner](/assets/images/2017/04/core_weekly_banner.jpg)


## General messages

Small week for pull requests, big one for communication! As we are moving fast towards the release, we are going deeper in our explanation of the changes to come. Indeed, @toutantic wrote about the migration towards the Symfony 3.4 framework [here](http://build.prestashop.com/news/prestashop-1-7-is-moving-to-symfony-3-4-and-php-5-6). Other important point was the law related to [Article 88](http://build.prestashop.com/news/france-article-88-loi-2017-1837-de-finances-2018) which asks French merchants to get their billing system certified, in order to prevent fraud.

Also, the Crowdin monthly report is quite impressive for December. Come on everybody, get closer (just [there](http://build.prestashop.com/news/do-you-speak-prestashop-december-2017)) and have a look, it's worth it! A lot of languages, such as Bosnian and Chinese, have increased their rate of completion really fast. If it goes on like this, we have good hope to see PrestaShop gaining more than twenty fully available languages very soon. Community is the real force!


## Code changes in the 'develop' branch (for v1.7.4.0)

### Core

* [#8399](https://github.com/PrestaShop/PrestaShop/pull/8399): Fix search relevance wrong sort order. Thank you @kershoc!
* [#8458](https://github.com/PrestaShop/PrestaShop/pull/8458): Default AJAX Relevance search sort order is wrong. Thank you @sbordun!
* [#8597](https://github.com/PrestaShop/PrestaShop/pull/8597): CLDR number formatter, by @littlebigdev.
* [#8662](https://github.com/PrestaShop/PrestaShop/pull/8662): Moved CLDR to Core, by @littlebigdev.
* [#8663](https://github.com/PrestaShop/PrestaShop/pull/8663): Merge 1.7.3.x into develop, by @eternoendless.

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @kershoc and @sbordun!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
