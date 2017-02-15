---
layout: post
title:  "PrestaShop Core Weekly - Week 42"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-10-23 14:37:41
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop core codebase during last week, from Monday 12th of October to Sunday 18th of October.


## Milestones

Progress is being made on the develop branch (for 1.7) and the Starter Theme.



 


## Code changes in 1.6.1.x

Here are the merged pull-requests on the [1.6.1.x branch](https://github.com/PrestaShop/PrestaShop/tree/1.6.1.x) since the last Core Weekly Report!
 

#### Front office


 * [4150](https://github.com/PrestaShop/PrestaShop/pull/4150): Fix performances issue with SpecificPrice, by @jocel1.

 
#### Back office
 

 * [4324](https://github.com/PrestaShop/PrestaShop/pull/4324): Add brackets to multiple select name field in Helper, by @tchauviere.
 * [4322](https://github.com/PrestaShop/PrestaShop/pull/4322): add product shipping fileds & carriers selector, by @kelu95.
 * [4248](https://github.com/PrestaShop/PrestaShop/pull/4248): Add versioning to addJS to renew admin.js, by @gRoussac.
 
 
#### Core
 

 * [4325](https://github.com/PrestaShop/PrestaShop/pull/4325): category must be an object, not an array, by @maximebiloe.
 * [4171](https://github.com/PrestaShop/PrestaShop/pull/4171): SpecificPriceRule without conditions to id_product 0 instead of full products list, by @gRoussac.

 
 
## Code changes in 1.7.0.0-develop

Now let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

Note that the Start Theme repo (see next section) is entirely part of the PrestaShop 1.7.0.0 project.
 
 
#### Back office

 * [4306](https://github.com/PrestaShop/PrestaShop/pull/4306): product form, move all price infos to price tab, by @kelu95.
 * [4311](https://github.com/PrestaShop/PrestaShop/pull/4311): Catalog page, sorting of products, by @xGouley.
 * [4316](https://github.com/PrestaShop/PrestaShop/pull/4316): manage features on new product form, by @kelu95.
 * [4317](https://github.com/PrestaShop/PrestaShop/pull/4317): better display for new product form, by @kelu95.

 
 
#### Core

 * [4327](https://github.com/PrestaShop/PrestaShop/pull/4327): Add HookDispatcher, Hook to legacy bridge in service declaration, by @xGouley.


#### Installer

 * [4309](https://github.com/PrestaShop/PrestaShop/pull/4309): Remove mail_identifiers email template and code, by @julienbourdeau.
 

#### Unit Tests

 * [4321](https://github.com/PrestaShop/PrestaShop/pull/4321): Unit/Integration testing on ProductController, by @xGouley.
 
#### Translation

 * [3695](https://github.com/PrestaShop/PrestaShop/pull/3695), [3696](https://github.com/PrestaShop/PrestaShop/pull/3696), [3698](https://github.com/PrestaShop/PrestaShop/pull/3698), [3699](https://github.com/PrestaShop/PrestaShop/pull/3699), [3693](https://github.com/PrestaShop/PrestaShop/pull/3693), [3913](https://github.com/PrestaShop/PrestaShop/pull/3913): Translations for Dutch. Thank you @firstred! 
 
 
 
 
## Code changes in Starter Theme

Finally, these are the merged pull-requests on the 'feat/starter-theme' branch since the last Core Weekly Report!

 * [4235](https://github.com/PrestaShop/PrestaShop/pull/4235): Manufacturers and suppliers display POC, by @maximebiloe.
 * [4305](https://github.com/PrestaShop/PrestaShop/pull/4305): Fixed the tests, or so I thought, by @djfm.
 * [4308](https://github.com/PrestaShop/PrestaShop/pull/4308): My Account features, by @maximebiloe.
 * [4319](https://github.com/PrestaShop/PrestaShop/pull/4319): HTML markup for category rework, by @maximebiloe.
 * [4329](https://github.com/PrestaShop/PrestaShop/pull/4329): category-miniature, fixed weird markup, by @djfm.
 
 

 
See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+merged%3A%3E2015-10-12+is%3Aclosed+sort%3Aupdated&utf8=%E2%9C%93).

Thank you to the contributor whose pull requests was merged since the last Core Weekly Report: @firstred. Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, read those:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!

 
 
 
