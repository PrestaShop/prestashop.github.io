---
layout: post
aliases: ["/news/coreweekly-week-24-2018"]
title:  "PrestaShop Core Weekly - Week 24 of 2018"
subtitle: "An inside look at the PrestaShop codebase"
date:   2018-06-21 16:00:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 11th of June to Sunday 17th of June 2018.

![Core Weekly banner](/assets/images/2017/04/core_weekly_banner.jpg)


## General messages

Dear Community members, did you already try the 1.7.4 beta? Well, you should! You can find all details about how to download it, development status, and of course, install it and test it. Just read this complete [1.7.4 beta article on the devblog](http://build.prestashop.com/news/prestashop-1-7-4-0-beta-1-release/).

Then feel free to give your feedback: via the comments of the article, a ticket on the [forge](http://forge.prestashop.com) or a [pull request on GitHub](https://github.com/PrestaShop/PrestaShop).


## Code changes in the 'develop' branch (for v1.7.5.0)

### Core

* [#9182](https://github.com/PrestaShop/PrestaShop/pull/9182): Merge 1.7.4.x in develop, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#9190](https://github.com/PrestaShop/PrestaShop/pull/9190): Fixed DataConfigurationInterface PHPDoc, by [@mickaelandrieu](https://github.com/mickaelandrieu)


## Code changes in the '1.7.4.x' branch (for v1.7.4.0)

### Core

* [#9188](https://github.com/PrestaShop/PrestaShop/pull/9188): Fix wrong test in left join condition, by [@jocel1](https://github.com/jocel1)


### Back Office

* [#9173](https://github.com/PrestaShop/PrestaShop/pull/9173): Registered all namespaces in ModuleTemplateLoader class, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#9175](https://github.com/PrestaShop/PrestaShop/pull/9175): Missing requirement message, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#9181](https://github.com/PrestaShop/PrestaShop/pull/9181): Use CustomerPreferencesFormHandler to handle specific tabs toggling for B2B mode, by [@matks](https://github.com/matks)
* [#9183](https://github.com/PrestaShop/PrestaShop/pull/9183): restore missing translation keys, by [@tomlev](https://github.com/tomlev)
* [#9189](https://github.com/PrestaShop/PrestaShop/pull/9189): Hide disabled level 3 tabs in the BO, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Tests

* [#9177](https://github.com/PrestaShop/PrestaShop/pull/9177): Update scripts on 1.7.4.x. Thank you [@hadrich-hatem](https://github.com/hadrich-hatem)


## Code changes in the '1.6.1.x' branch (for v1.6.1.2O)

### Back Office

* [#8724](https://github.com/PrestaShop/PrestaShop/pull/8724): PHP 7.2 compat - Fix fatal error. Thank you [@enumag](https://github.com/enumag)
* [#8821](https://github.com/PrestaShop/PrestaShop/pull/8821): FIX PHP 7.1 compat in WebserviceOutputBuilder. Thank you [@axometeam](https://github.com/axometeam)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @axometeam, @enumag, @hadrich-hatem!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
