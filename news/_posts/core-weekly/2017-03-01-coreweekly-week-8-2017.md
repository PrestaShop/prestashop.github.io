---
layout: post
title:  "PrestaShop Core Weekly - Week 8 of 2017"
subtitle: "An inside look at the PrestaShop codebase"
date:   2017-03-01 09:10:11
author: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 20th to Sunday 26th of February 2017.


## General messages

[PrestaShop 1.7.1.0 Beta 1 has been released](http://build.prestashop.com/news/prestashop-1-7-1-0-beta-1/)! We are still working on it (as you can see below), so help us make sure it's a solid version by [reporting issues](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1) and [providing pull-requests for bugfixes](https://github.com/PrestaShop/PrestaShop/tree/1.7.1.x). Thank you!

If you can't find any issue (yay!) or if you don't know how to fix issues, you can still contribute by [helping with the translation for 1.7.1.0](http://build.prestashop.com/news/171-Translations-update/) :)


## Code changes in 'develop' branch (for the next minor version, v1.7.2.0)

Now let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

Note that 1.7 patch versions are being built in the '1.7.0.x' branch. All of the PRs from that branch are eventually ported in the 'develop' branch.

* Core> [#7606](https://github.com/PrestaShop/PrestaShop/pull/7606): Updates README.md file., by @xborderie.
* Core> [#7567](https://github.com/PrestaShop/PrestaShop/pull/7567): Introduce release script, by @julienbourdeau.
* Installer> [#7601](https://github.com/PrestaShop/PrestaShop/pull/7601): Use new module name for OrderState creation. Thank you @prestamodule!

See all the PRs merged into the 'develop' codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20merged%3A2017-02-20..2017-002-26%20is%3Aclosed%20base%3Adevelop).


## Code changes in '1.7.0.x' branch (for v1.7.0.x patch versions) 

Then, the merged pull-requests on the ['1.7.0.x' branch](https://github.com/PrestaShop/PrestaShop/tree/1.7.0.x) since the last Core Weekly Report!

* Core> [#7605](https://github.com/PrestaShop/PrestaShop/pull/7605): Change CLDR url, by @maximebiloe.
* Core> [#7604](https://github.com/PrestaShop/PrestaShop/pull/7604): Allow the access to CLDR json files, by @maximebiloe.
* Core> [#7583](https://github.com/PrestaShop/PrestaShop/pull/7583): Fix some composer versions, by @antoin-m.

See all the PRs merged into the '1.7.0.x' codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20merged%3A2017-02-20..2017-002-26%20is%3Aclosed%20base%3A1.7.0.x).


## Code changes in '1.6.1.x' branch (for 1.6 patch versions) 

And now, the merged pull-requests on the ['1.6.1.x' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!


### Front office

* [#5710](https://github.com/PrestaShop/PrestaShop/pull/5710): Product reference is now available in blockbestsellers module. Thank you @kpodemski!
* [#7319](https://github.com/PrestaShop/PrestaShop/pull/7319): Fix product without combination hashchange. Thank you @axometeam!
* [#7537](https://github.com/PrestaShop/PrestaShop/pull/7537): Bugfix JS with advancedEuCompliance. Thank you @paeddl!
* [#7581](https://github.com/PrestaShop/PrestaShop/pull/7581): Fix ecotax rounded twice, by @maximebiloe. Thank you @evertdtc!


### Back office

* [#7550](https://github.com/PrestaShop/PrestaShop/pull/7550): Fix doubled quantity when ordering a customizable product, by @fatmabouchekoua.
* [#7556](https://github.com/PrestaShop/PrestaShop/pull/7556): Callback on HelperList should have highest priority. Thank you @kpodemski!
* [#7582](https://github.com/PrestaShop/PrestaShop/pull/7582): Fix bug while filtering Credit Slip, by @maximebiloe. Thank you @flyos!
* [#7591](https://github.com/PrestaShop/PrestaShop/pull/7591): Fix error when creating a zero value in the attribute size, by @fatmabouchekoua.


### Core

* [#5730](https://github.com/PrestaShop/PrestaShop/pull/5730): Deflate .svg files. Thank you @mrmanchot!
* [#7152](https://github.com/PrestaShop/PrestaShop/pull/7152): Fix send to multiple addresses with different names. Thank you @flowster!
* [#7246](https://github.com/PrestaShop/PrestaShop/pull/7246): Add missing option to bcc multiple addresses in Mail::send(). Thank you @mcdado!
* [#7381](https://github.com/PrestaShop/PrestaShop/pull/7381): Use shop email as sender for template order_customer_comment. Thank you @mcdado!
* [#7392](https://github.com/PrestaShop/PrestaShop/pull/7392): Fix 7.1 compatibility, by @aleeks.
* [#7434](https://github.com/PrestaShop/PrestaShop/pull/7434): Fix bag with Cart::getPackageSthippingCost cache id. Thank you @webmak!
* [#7541](https://github.com/PrestaShop/PrestaShop/pull/7541): Update Doc import files, by @fatmabouchekoua and @aleeks.


### Localization

* [#7355](https://github.com/PrestaShop/PrestaShop/pull/7355): Update Israel VAT to 17%, by @alexeven.


### Web service

* [#7416](https://github.com/PrestaShop/PrestaShop/pull/7416): Webservices now show PS validation errors, by @maximebiloe. Thank you @max84!


See all the PRs merged into the '1.6.1.x' codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20merged%3A2017-02-20..2017-002-26%20is%3Aclosed%20base%3A1.6.1.x).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @axometeam, @evertdtc, @flowster, @flyos, @kpodemski, @mcdado, @mrmanchot, @paeddl, @prestamodule, and @webmak!

Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
