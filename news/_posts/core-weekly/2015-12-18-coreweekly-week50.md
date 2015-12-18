---
layout: post
title:  "PrestaShop Core Weekly - Week 50"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-12-18 13:37:41
author: xavierborderie
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop core codebase during last two weeks, from Monday 7th to Sunday 13th of December.


## Milestones

A couple of major articles recently landed on the Build devblog. They contain fresh information about 1.7.0.0, so if you missed them, here they are:

 * [An update on the 1.7 architecture](http://build.prestashop.com/news/prestashop-1-7-and-symfony/): Why we are choosing to move the codebase to Symfony2, and how we plan on doing it.
 * [Starter Theme: fresh news from the front #3](http://build.prestashop.com/news/starter-theme-news-3/): Part 3 of our series of articles about the Starter Theme.
 
Additionnally, [we are hiring more developers](http://build.prestashop.com/news/prestacrew-hiring/)!

Want to help improve PrestaShop? Tell us what you think about the [currently open pull-requests](https://github.com/PrestaShop/PrestaShop/pulls) (you can focus on [the `develop` branch](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Aopen+base%3Adevelop) or [the `1.6.1.x` branch]()), or [review your own](http://build.prestashop.com/news/review-your-pull-requests/)! Thank you!


## Code changes in 1.6.1.x

Here are the merged pull-requests on the [1.6.1.x branch](https://github.com/PrestaShop/PrestaShop/tree/1.6.1.x) since the last Core Weekly Report!

#### Front office
 
 * [4170](https://github.com/PrestaShop/PrestaShop/pull/4170): update price from discount when changing quantity, by @kelu95.
 * [4243](https://github.com/PrestaShop/PrestaShop/pull/4243): Fix robots.txt rules for default language URLs. Thank you @gskema!
 * [4261](https://github.com/PrestaShop/PrestaShop/pull/4261): Fix bad impact price / currency + bad specific base price for combinations, by @gRoussac.


#### Back office
 
 * [4109](https://github.com/PrestaShop/PrestaShop/pull/4109): Fixed upgrade index specific_price table. Thank you @brouillon!
 * [4340](https://github.com/PrestaShop/PrestaShop/pull/4340): On product order, add unit product price without tax, by @kelu95.
 * [4374](https://github.com/PrestaShop/PrestaShop/pull/4374): Hide div results if #free_gift_off checked. Thank you @Eolia!
 * [4433](https://github.com/PrestaShop/PrestaShop/pull/4433): fixed translation bug in prestashop addons modal, by @kelu95.

 
 
#### Core
 
 * [4126](https://github.com/PrestaShop/PrestaShop/pull/4126): Update Cart.php with correct the shipping cost calculation method. Thank you @daresh!
 * [4227](https://github.com/PrestaShop/PrestaShop/pull/4227): Fix bad upload error check, by @gRoussac.
 * [4238](https://github.com/PrestaShop/PrestaShop/pull/4238): Fix notice in Cron search, by @gRoussac.
 * [3673](https://github.com/PrestaShop/PrestaShop/pull/3673): Avoid error if an address was deleted but id still exists in cart table, by @gRoussac. Thank you @Eolia!
 * [4242](https://github.com/PrestaShop/PrestaShop/pull/4242): Uploader setAcceptFiles case sensitivity, by @gRoussac.
 * [4570](https://github.com/PrestaShop/PrestaShop/pull/4570): Fix bad dependency injection on module upgrade, by @tchauviere.

 

## Code changes in 1.7.0.0-develop

Now let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

Note that the Starter Theme repo (see next section) is entirely part of the PrestaShop 1.7.0.0 project.

 
#### Back office

 * [4483](https://github.com/PrestaShop/PrestaShop/pull/4483): Double slider fix in catalog product page, by @xGouley.
 * [4554](https://github.com/PrestaShop/PrestaShop/pull/4554): Manage product customization, by @kelu95.
 * [4558](https://github.com/PrestaShop/PrestaShop/pull/4558): Product form: Extract name/type from tabs, multilanguage form field type system, by @xGouley.
 * [4561](https://github.com/PrestaShop/PrestaShop/pull/4561): Fix hook Twig function and remove switch back to old page button in prod, by @xGouley.
 


#### Core

 * [4549](https://github.com/PrestaShop/PrestaShop/pull/4549): PrestashopAutoload need alias.php - also generate bug when activation profiling, by @kelu95.
 * [4550](https://github.com/PrestaShop/PrestaShop/pull/4550): MySQL 5.7 Compatibility. Thank you @ianfunghk!
 * [4556](https://github.com/PrestaShop/PrestaShop/pull/4556): fix product model adapter when no customization defined, by @kelu95.
 * [4569](https://github.com/PrestaShop/PrestaShop/pull/4569): Add limit/orderBy/sortOrder in persistence, by @xGouley.
 
 
## Code changes in Starter Theme

Finally, these are the merged pull-requests on the 'feat/starter-theme' branch since the last Core Weekly Report!

 * [4386](https://github.com/PrestaShop/PrestaShop/pull/4386): new checkout layout, by @julienbourdeau.
 * [4548](https://github.com/PrestaShop/PrestaShop/pull/4548): Product Search with Facets, by @djfm.
 * [4555](https://github.com/PrestaShop/PrestaShop/pull/4555): Remove themeconfigurator, by @maximebiloe.
 * [4562](https://github.com/PrestaShop/PrestaShop/pull/4562): Remove live edit feature, by @djfm.
 * [4565](https://github.com/PrestaShop/PrestaShop/pull/4565): fix $cart undefined var in checkout, by @djfm.
 * [4566](https://github.com/PrestaShop/PrestaShop/pull/4566): Auto login when password reset, by @maximebiloe.
 
 
 
See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+merged%3A2015-12-07T00%3A00%3A01..2015-12-13T23%3A59%3A59+is%3Aclosed&utf8=%E2%9C%93).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @brouillon, @Eolia, @daresh, and @gskema! Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, read those pages:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
