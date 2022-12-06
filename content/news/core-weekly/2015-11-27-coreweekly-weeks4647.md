---
layout: post
title:  "PrestaShop Core Weekly - Week 46-47 of 2015"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-11-27 18:37:41
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop core codebase during last two weeks, from Monday 9th to Sunday 22nd of November.


## Milestones

We released [PrestaShop 1.6.1.3](http://build.prestashop.com/news/prestashop-1613-maintenance-release/)! You can [download it now](https://www.prestashop.com/en/download).
It's the first of our [more regular and focused patch versions for PrestaShop 1.6](http://build.prestashop.com/news/more-focused-patch-versions/). Expect 1.6.1.4 soon!

Want to help improve PrestaShop? Tell us what you think about the [currently open pull-requests](https://github.com/PrestaShop/PrestaShop/pulls), or [review your own](http://build.prestashop.com/news/review-your-pull-requests/)! Thank you!


## Code changes in 1.6.1.x

Here are the merged pull-requests on the [1.6.1.x branch](https://github.com/PrestaShop/PrestaShop/tree/1.6.1.x) since the last Core Weekly Report!
 

#### Front office

 * [4414](https://github.com/PrestaShop/PrestaShop/pull/4414): Add id_order to order_details link to work without JS. Thank you @drzraf!


#### Back office

 * [4412](https://github.com/PrestaShop/PrestaShop/pull/4412): Fix flush of local cache when adding a new specific price, by @jocel1.
 * [4426](https://github.com/PrestaShop/PrestaShop/pull/4426): Revert from [4015](https://github.com/PrestaShop/PrestaShop/pull/4015) to allow longer meta, by @maximebiloe.

 
#### Core
 
 * [4378](https://github.com/PrestaShop/PrestaShop/pull/4378): Fix fatal error for Product::getPublicPrice(), by @julienbourdeau.

 
#### Localization

 * [4302](https://github.com/PrestaShop/PrestaShop/pull/4302): Fix Intra-EU VAT. Thank you @firstred!
 * [4385](https://github.com/PrestaShop/PrestaShop/pull/4385): Replaced Swiss German with Germany German, by @djfm.

 
#### Mails
 
 * [4369](https://github.com/PrestaShop/PrestaShop/pull/4369): Fixed bug in download_product.txt. Thank you @Nobodaddy!



## Code changes in 1.7.0.0-develop

Now let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

Note that the Starter Theme repo (see next section) is entirely part of the PrestaShop 1.7.0.0 project.


#### Text
 
 * [4387](https://github.com/PrestaShop/PrestaShop/pull/4387): Updated README.md to reflect current 1.7 knowledge, by @xBorderie.

 
 
#### Back office

 * [4431](https://github.com/PrestaShop/PrestaShop/pull/4431): Improve combination list display, by @kelu95.
 * [4466](https://github.com/PrestaShop/PrestaShop/pull/4466): manage product quantities parameters, by @kelu95.
 * [4493](https://github.com/PrestaShop/PrestaShop/pull/4493): manage product suppliers combinations configuration, by @kelu95.
 * [4498](https://github.com/PrestaShop/PrestaShop/pull/4498): manage product redirection strategy, by @kelu95.

 

#### Core

 * [4413](https://github.com/PrestaShop/PrestaShop/pull/4413): cleanProductRuleIntegrity fails. Thank you @christianverardi!
 * [4423](https://github.com/PrestaShop/PrestaShop/pull/4423): product form javascript refactorization, by @kelu95.
 * [4175](https://github.com/PrestaShop/PrestaShop/pull/4175): Small fixes for use with PHP7. Thank you @prestamodule & @PrestaEdit!
 * [4425](https://github.com/PrestaShop/PrestaShop/pull/4425), [4429](https://github.com/PrestaShop/PrestaShop/pull/4429), [4432](https://github.com/PrestaShop/PrestaShop/pull/4432): Refactoring Adapters with namespaces, by @xGouley.
 * [4436](https://github.com/PrestaShop/PrestaShop/pull/4436): Fix undefined hash variable, by @maximebiloe.
 * [4445](https://github.com/PrestaShop/PrestaShop/pull/4445): Refactoring namespaces in Core/Foundation, by @xGouley.
 * [4454](https://github.com/PrestaShop/PrestaShop/pull/4454): Refactoring namespaces in Core/Business, by @xGouley.
 * [4456](https://github.com/PrestaShop/PrestaShop/pull/4456): Refactoring namespaces in Core/Foundation, by @xGouley.
 * [4461](https://github.com/PrestaShop/PrestaShop/pull/4461): manage assetic url for prod env, by @kelu95.
 * [4463](https://github.com/PrestaShop/PrestaShop/pull/4463): Refactoring namespaces & integration tests validation, by @xGouley.
 * [4478](https://github.com/PrestaShop/PrestaShop/pull/4478): authenticate employee to sf2 security context, by @kelu95.
 * [4484](https://github.com/PrestaShop/PrestaShop/pull/4484): Paginator for product catalog page, by @xGouley.
 * [4486](https://github.com/PrestaShop/PrestaShop/pull/4486): Fix product catalog integration display on listing, by @xGouley.
 * [4494](https://github.com/PrestaShop/PrestaShop/pull/4494): Product mass duplication with progress bar, by @xGouley. 
 
 
## Code changes in Starter Theme

Finally, these are the merged pull-requests on the 'feat/starter-theme' branch since the last Core Weekly Report!

 * [4215](https://github.com/PrestaShop/PrestaShop/pull/4215): Add some tests on delivery options, by @maximebiloe.
 * [4326](https://github.com/PrestaShop/PrestaShop/pull/4326): Add some tests for my-account and order detail, by @maximebiloe.
 * [4422](https://github.com/PrestaShop/PrestaShop/pull/4422): Product Page : Show cover of the current variant, by @djfm.
 * [4424](https://github.com/PrestaShop/PrestaShop/pull/4424): Only one submit button for payment, by @maximebiloe.
 * [4435](https://github.com/PrestaShop/PrestaShop/pull/4435): Fix Swift type expected, by @maximebiloe.
 * [4453](https://github.com/PrestaShop/PrestaShop/pull/4453): Fixed notice about images and restored the cart modal which had disappeared, by @djfm.
 * [4455](https://github.com/PrestaShop/PrestaShop/pull/4455): order-confirmation.tpl was extending a non-existing tpl, by @djfm.
 * [4457](https://github.com/PrestaShop/PrestaShop/pull/4457): Use Progressive Enhancement To Support Checkout Without JS, by @djfm.
 * [4458](https://github.com/PrestaShop/PrestaShop/pull/4458): Password rework, by @maximebiloe.
 * [4460](https://github.com/PrestaShop/PrestaShop/pull/4460): Update verification hook according to payment API changes, by @maximebiloe.
 * [4465](https://github.com/PrestaShop/PrestaShop/pull/4465): Adapt delivery layout as payment, by @maximebiloe.

 
 
See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+merged%3A%3E2015-11-09+is%3Aclosed+).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @christianverardi, @drzraf,  @Nobodaddy, @PrestaEdit, and @prestamodule! Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, read those:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
