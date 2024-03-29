---
layout: post
aliases: ["/news/coreweekly-week-14-2017"]
title:  "PrestaShop Core Weekly - Week 14 of 2017"
subtitle: "An inside look at the PrestaShop codebase"
date:   2017-04-10 09:10:11
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 3rd to Sunday 9th of April 2017.


## General messages

As expected, we have received a lot of feedback from the community as soon as PrestaShop 1.7.1.0 was released. The team has been working hard at fixing the most critical issue, and we are already testing v1.7.1.1, to be released soon.<br/>
Do you see new issues? [Please report them](http://forge.prestashop.com/)!

We are also launching a new initiative with the community: we want to drastically improve RTL support in PrestaShop, and if you work with RTL languages and have technical knowledge on how to best implement it, [join the Trello board](http://build.prestashop.com/news/PrestaShop-RTL-project/)!

Finally, PrestaShop 1.6's monthly update is near: the [1.6.1.13 milestone is at 100%](https://github.com/PrestaShop/PrestaShop/milestone/19?closed=1), and it's being tested by our QA team! :)

See you next week!


## Code changes in the 'develop' branch (for 1.7.2.0)

Now let's review the one merged pull-request on the 'develop' branch since the last Core Weekly Report!

#### Back office

* [#7706](https://github.com/PrestaShop/PrestaShop/pull/7706): Rewrite string to translate it more easily, by @maximebiloe.


## Code changes in the '1.7.1.x' branch (for v1.7.1.0's patch versions) 

Next, let's review the merged pull-requests on the ['1.7.1.x' branch](https://github.com/PrestaShop/PrestaShop/tree/1.7.1.x) since the last Core Weekly Report!


#### Core

* [#7714](https://github.com/PrestaShop/PrestaShop/pull/7714): Module code cleanup and fix module action in details modal, by @quetzacoalt91.
* [#7739](https://github.com/PrestaShop/PrestaShop/pull/7739): Allow modules compliancy on 3 digits, by @maximebiloe.
* [#7746](https://github.com/PrestaShop/PrestaShop/pull/7746): Doctrine without foreign for autoupgrade backup, by @aleeks.
* [#7753](https://github.com/PrestaShop/PrestaShop/pull/7753): Added nullable for Tab entity, by @aleeks.


#### Back office

* [#7690](https://github.com/PrestaShop/PrestaShop/pull/7690): Incorrect translation on Symfony page (problems with TinyMCE), by @kompilorb.
* [#7723](https://github.com/PrestaShop/PrestaShop/pull/7723): Fix catalog ASC sorting, by @maximebiloe.
* [#7724](https://github.com/PrestaShop/PrestaShop/pull/7724): Fix translations theme export on Windows, by @maximebiloe.
* [#7730](https://github.com/PrestaShop/PrestaShop/pull/7730): Alphabetically sort features on product page, by @maximebiloe.
* [#7738](https://github.com/PrestaShop/PrestaShop/pull/7738): Fix access to domainized modules translations, by @maximebiloe.


#### Front office

* [#7689](https://github.com/PrestaShop/PrestaShop/pull/7689): Save zero to id_state if country has no states. Thank you @martinfojtik!
* [#7693](https://github.com/PrestaShop/PrestaShop/pull/7693): Password controller must be in SSL when available, by @quetzacoalt91.
* [#7704](https://github.com/PrestaShop/PrestaShop/pull/7704): Js responsive value is not changed on resize. Thank you @iqit-commerce!
* [#7710](https://github.com/PrestaShop/PrestaShop/pull/7710): Fix country change in checkout form, by @quetzacoalt91.
* [#7720](https://github.com/PrestaShop/PrestaShop/pull/7720): Display product reference when product has no combination, by @maximebiloe.
* [#7726](https://github.com/PrestaShop/PrestaShop/pull/7726): Fixed Terms and conditions popup on mobile not possible to close, by @aleeks.
* [#7729](https://github.com/PrestaShop/PrestaShop/pull/7729): Fixed display amount with good taxes, by @aleeks.
* [#7734](https://github.com/PrestaShop/PrestaShop/pull/7734): Catch the exception when a template is missing in prod mode, by @maximebiloe.
* [#7742](https://github.com/PrestaShop/PrestaShop/pull/7742): Fix for image change in zoom modal window, by @maximebiloe.
* [#7750](https://github.com/PrestaShop/PrestaShop/pull/7750): Some refacto for address controller, by @maximebiloe.


#### Installer

* [#7743](https://github.com/PrestaShop/PrestaShop/pull/7743): Allow 255 char to company field in Adress, by @maximebiloe.


## Code changes in the '1.6.1.x' branch (for 1.6.1.0's patch versions) 

Finally, the merged pull-requests on the ['1.6.1.x' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!


#### Core

* [#7112](https://github.com/PrestaShop/PrestaShop/pull/7112): Make sure that invoice siblings are related to the same order id.. Thank you @shopmonauten!
* [#7615](https://github.com/PrestaShop/PrestaShop/pull/7615): Clean order detail cache after setting invoice id. Thank you @erouvier29!
* [#7641](https://github.com/PrestaShop/PrestaShop/pull/7641): Fix url rewrite setting not used on multishop. Thank you @shagshag!
* [#7655](https://github.com/PrestaShop/PrestaShop/pull/7655): Optimization for Cart Rules. Thank you @stratosz!
* [#7741](https://github.com/PrestaShop/PrestaShop/pull/7741): Update Israel localization, by @fatmabouchekoua.


#### Back office

* [#6788](https://github.com/PrestaShop/PrestaShop/pull/6788): Use native round instead of 2 forced decimals. Thank you @prestamodule!
* [#7451](https://github.com/PrestaShop/PrestaShop/pull/7451): Don't double encode test email. Thank you @mcdado!
* [#7614](https://github.com/PrestaShop/PrestaShop/pull/7614): Replace comma with dot in special price. Thank you @casper-o!
* [#7643](https://github.com/PrestaShop/PrestaShop/pull/7643): Allow stock transfer between warehouses in multishop context. Thank you @erouvier29!
* [#7650](https://github.com/PrestaShop/PrestaShop/pull/7650): Fix search in Advanced Stock Management, by @hibatallahaouadni.
* [#7687](https://github.com/PrestaShop/PrestaShop/pull/7687): Generate PDF invoices in user language, by @fatmabouchekoua.
* [#7697](https://github.com/PrestaShop/PrestaShop/pull/7697): Fixes on must-have module upgrade, by @quetzacoalt91.
* [#7749](https://github.com/PrestaShop/PrestaShop/pull/7749): Error importing theme when cache directory is cleared, by @maximebiloe.


#### Front office

* [#7632](https://github.com/PrestaShop/PrestaShop/pull/7632): Style categories tree in footer, by @hibatallahaouadni.


#### Installer

* [#7644](https://github.com/PrestaShop/PrestaShop/pull/7644): Fix price display when quantity discount on combination. Thank you @erouvier29!
* [#7672](https://github.com/PrestaShop/PrestaShop/pull/7672): Fix install language, by @aleeks.
* [#7692](https://github.com/PrestaShop/PrestaShop/pull/7692): Allow 255 char to company field in Adress, by @fatmabouchekoua.


Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @casper-o, @erouvier29, @iqit-commerce, @martinfojtik, @mcdado, @prestamodule, @shagshag, @shopmonauten, and @stratosz!


Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
