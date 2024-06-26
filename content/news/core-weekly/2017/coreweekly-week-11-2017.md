---
layout: post
aliases: ["/news/coreweekly-week-11-2017"]
title:  "PrestaShop Core Weekly - Week 11 of 2017"
subtitle: "An inside look at the PrestaShop codebase"
date:   2017-03-21 09:10:11
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 13th of Sunday 19th of March 2017.


## General messages

Version 1.7.1.0 is getting closer! You can [contribute to the localization](http://build.prestashop.com/news/171-Translations-update/), and discover the [new and updated hooks](http://build.prestashop.com/news/new-updated-hooks-1-7-1-0/)!

Are you ready? :)


## Code changes in the 'develop' branch (for 1.7.2.0)

Now let's review the merged pull-requests on the 'develop' branch since the last Core Weekly Report!

Note that 1.7 patch versions are being built in the '1.7.0.x' branch. All of the PRs from that branch are eventually ported in the 'develop' branch.

* BO> [#7662](https://github.com/PrestaShop/PrestaShop/pull/7662): BO: Fix show currency name in tab "Catalog Price Rules" for option "All currencies". Thank you @true0r!
* CO> [#7666](https://github.com/PrestaShop/PrestaShop/pull/7666): Use HTTPS where available in README.md. Thank you @slamdunk!


## Code changes in '1.7.1.x' branch (for v1.7.1.0, currently in beta) 

Next, let's review the merged pull-requests on the ['1.7.1.x' branch](https://github.com/PrestaShop/PrestaShop/tree/1.7.1.x) since the last Core Weekly Report!


#### Wording

* [#7669](https://github.com/PrestaShop/PrestaShop/pull/7669): CO: updated wording, by @alexeven.


#### Front office

* [#7657](https://github.com/PrestaShop/PrestaShop/pull/7657): Fix translation cache preventing load of new language, by @quetzacoalt91.
* [#7675](https://github.com/PrestaShop/PrestaShop/pull/7675): Allow delivery module to confirm the checkout step, by @quetzacoalt91.


#### Back office

* [#7570](https://github.com/PrestaShop/PrestaShop/pull/7570): Notification after theme reset, warning about images regeneration. Thank you @kpodemski!
* [#7585](https://github.com/PrestaShop/PrestaShop/pull/7585): Fix placeholder width in product options, by @thierrymarianne.
* [#7596](https://github.com/PrestaShop/PrestaShop/pull/7596): Add displayProductPageDrawer hook, by @antoin-m.
* [#7646](https://github.com/PrestaShop/PrestaShop/pull/7646): Fix imageFolder path for colorPicker inputs. Thank you @prestamodule!
* [#7648](https://github.com/PrestaShop/PrestaShop/pull/7648): Fix product attachments lookup, by @quetzacoalt91.
* [#7663](https://github.com/PrestaShop/PrestaShop/pull/7663): Fix issue of Module notification page after 1.7.0.x backport, by @quetzacoalt91.
* [#7665](https://github.com/PrestaShop/PrestaShop/pull/7665): Fix inactive request in HookEvent. Thank you @mwienk!
* [#7670](https://github.com/PrestaShop/PrestaShop/pull/7670): Allow upgrade for modules coming from Must-have json, by @quetzacoalt91.


#### Core

* [#7653](https://github.com/PrestaShop/PrestaShop/pull/7653): Fix invoice generation, by @thierrymarianne.


#### Installer

* [#7638](https://github.com/PrestaShop/PrestaShop/pull/7638): Fix language refresh on dropdown change, by @quetzacoalt91.


Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @mwienk, @kpodemski, @prestamodule, @slamdunk, and @true0r!


Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
