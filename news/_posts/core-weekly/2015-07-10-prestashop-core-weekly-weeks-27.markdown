---
layout: post
title:  "PrestaShop Core Weekly - Week 27"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-07-10 17:37:41
author:  [ xavierborderie ]
icon: fa-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop core codebase during the last week, from Monday 29th of June to Sunday 5th of July, 2015.


## Milestones

[PrestaShop 1.6.1.0 has been released](https://www.prestashop.com/blog/en/delivering-new-improved-v1-6-1-0/)! Go [download the latest version of PrestaShop](https://www.prestashop.com/en/download), or read [our own little celebratory post](http://build.prestashop.com/news/1-6-1-0-released/)!

One important part of version 1.6.1.0 is the addition of the [Advanced EU Compliance module](https://github.com/PrestaShop/advancedeucompliance), which helps merchants make their shops compliant with the recent, more restrictive EU regulations. Want to learn why and how we built it? Read [Thibaud's article here](http://build.prestashop.com/news/advanced-eu-compliance/)!

Now that v1.6.1.0 is released, make sure to get acquainted with the project evolution that developers will soon be able to profit from: [dropping support for PHP 5.2 and 5.3](http://build.prestashop.com/news/Dropping-support-php52-and-53/), [benchmarking the performance improvements in 1.6.1.0](http://build.prestashop.com/news/prestashop-1-6-1-0-performances/), [switching to a more semantic versioning scheme](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/), [adopting the PSR-2 Coding Style Guide](http://build.prestashop.com/news/prestashop-moves-to-psr-2/), and, last but certainly not least, the [forthcoming architecture improvements](http://build.prestashop.com/news/new-architecture-1-6-1-0/).

The team is already at work on the next versions of PrestaShop!

Of note among the merged PRs since the last Core Weekly Report:

 * We reached PR 3333, and Content Manager Alex Even won that PR :)
 * In PR 3283, Core developer Xavier Gouley update the Delivery, Order Return and Credit Slip PDF templates to fit with the new 1.6.1.0 template style.



## Code changes

Let's review the merged pull-requests since the last Core Weekly Report!

As always, click on the PR's number to open its page on GitHub.

#### Text changes

 * [3244](https://github.com/PrestaShop/PrestaShop/pull/3244): FO wording. Thank you [panploenes](https://github.com/panploenes)!
 * [3298](https://github.com/PrestaShop/PrestaShop/pull/3298): FO wording, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3324](https://github.com/PrestaShop/PrestaShop/pull/3324): AdminStatusesController: Missing periods in statuses' names, by [xBorderie](https://github.com/xBorderie).
 * [3330](https://github.com/PrestaShop/PrestaShop/pull/3330): AdminEmailsController: Make "Email test" button title consistent with attached field, by [xBorderie](https://github.com/xBorderie).
 * [3343](https://github.com/PrestaShop/PrestaShop/pull/3343): AdminModulesController: Added sprintf's and periods to some error messages, by [xBorderie](https://github.com/xBorderie).
 * [3348](https://github.com/PrestaShop/PrestaShop/pull/3348): Update readme, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3354](https://github.com/PrestaShop/PrestaShop/pull/3354): README: Added link to CONTRIBUTORS file, by [xBorderie](https://github.com/xBorderie).

#### Front office

 * [3297](https://github.com/PrestaShop/PrestaShop/pull/3297): Missing old price, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3287](https://github.com/PrestaShop/PrestaShop/pull/3287): Wrong reduction calculation, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3312](https://github.com/PrestaShop/PrestaShop/pull/3312): OPC - fixed bug (cgv validation removed) when updating carrier, by [kelu95](https://github.com/kelu95).
 * [3328](https://github.com/PrestaShop/PrestaShop/pull/3328): url rewrite bug on color list, by [gRoussac](https://github.com/gRoussac).
 * [3352](https://github.com/PrestaShop/PrestaShop/pull/3352): Adjust Facebook layout, by [maximebiloe](https://github.com/maximebiloe).
 * [3357](https://github.com/PrestaShop/PrestaShop/pull/3357): Fix wrong statement close, by [jeromenadaud](https://github.com/jeromenadaud).

#### Back office

 * [3293](https://github.com/PrestaShop/PrestaShop/pull/3293): Fix missing check for new memcached extension, by [jocel1](https://github.com/jocel1).
 * [3211](https://github.com/PrestaShop/PrestaShop/pull/3211): "Read More" on recommended modules, by [gRoussac](https://github.com/gRoussac).
 * [3318](https://github.com/PrestaShop/PrestaShop/pull/3318): Revert 3211, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3201](https://github.com/PrestaShop/PrestaShop/pull/3201): Order partner modules, by [gRoussac](https://github.com/gRoussac).
 * [3157](https://github.com/PrestaShop/PrestaShop/pull/3157): Bad product thumb in order, by [gRoussac](https://github.com/gRoussac)
 * [3309](https://github.com/PrestaShop/PrestaShop/pull/3309): Wrong PHP warning message, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3339](https://github.com/PrestaShop/PrestaShop/pull/3339): Wrong front url to live edit when URL rewriting is activated and one language is configured, by [kelu95](https://github.com/kelu95).
 * [3340](https://github.com/PrestaShop/PrestaShop/pull/3340): PHP warning while displaying cart, by [kelu95](https://github.com/kelu95).
 * [3341](https://github.com/PrestaShop/PrestaShop/pull/3341): Fix inability to make out-of-stock order, by [jocel1](https://github.com/jocel1).
 * [3349](https://github.com/PrestaShop/PrestaShop/pull/3349): Fix tree issue with module, by [jocel1](https://github.com/jocel1).

#### Core

 * [3314](https://github.com/PrestaShop/PrestaShop/pull/3314): Avoid returned password on failed login, by [tchauviere](https://github.com/tchauviere).
 * [3331](https://github.com/PrestaShop/PrestaShop/pull/3331): Fix issue with PHP 5.2 and func_get_args(), by [tchauviere](https://github.com/tchauviere).
 * [3344](https://github.com/PrestaShop/PrestaShop/pull/3344): Dispatcher warning on parse_url(), by [tchauviere](https://github.com/tchauviere).
 * [3346](https://github.com/PrestaShop/PrestaShop/pull/3346): Fix PHP 5.2 parse error on dynamic method / property call, by [tchauviere](https://github.com/tchauviere).

#### Modules

 * [3321](https://github.com/PrestaShop/PrestaShop/pull/3321): update .gitmodules. Thank you [panploenes](https://github.com/panploenes)!


#### PDF

 * [3283](https://github.com/PrestaShop/PrestaShop/pull/3283): Rebranding of PDF, like Invoice as model, by [xGouley](https://github.com/xGouley).
 * [3336](https://github.com/PrestaShop/PrestaShop/pull/3336): Update invoice.total-tab.tpl. Thank you [Nobodaddy](https://github.com/Nobodaddy)!

#### Performances

 * [3294](https://github.com/PrestaShop/PrestaShop/pull/3294): Make sure the execution plan is optimal during tag search, by [jocel1](https://github.com/jocel1).

#### Installer

 * [3305](https://github.com/PrestaShop/PrestaShop/pull/3305): Fix syntax error in SQL file 1.6.1.0, by [Quetzacoalt91](https://github.com/Quetzacoalt91).

#### Localization

 * [3329](https://github.com/PrestaShop/PrestaShop/pull/3329): Fix state node, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3333](https://github.com/PrestaShop/PrestaShop/pull/3333): updated translation files, by [AlexEven](https://github.com/AlexEven).
 * [3334](https://github.com/PrestaShop/PrestaShop/pull/3334): updated installer translation (DE, TR), by [AlexEven](https://github.com/AlexEven).



See all the PRs merged into the codebase since June the 29th [here](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+merged%3A%3E2015-06-29+is%3Aclosed+sort%3Aupdated&utf8=%E2%9C%93).

Thank you to our contributors whose Pull Requests were merged since the last Core Weekly Report: [Nobodaddy](https://github.com/Nobodaddy) and [panploenes](https://github.com/panploenes) Also, thank you to the contributors who's PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, read those:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
