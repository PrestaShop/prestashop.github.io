---
layout: post
title:  "PrestaShop Core Weekly - Week 43"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-10-30 18:44:41
author: xavierborderie
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop core codebase during last week, from Monday 19th of October to Sunday 25th of October.


## Milestones

After four RCs version, [we released PrestaShop 1.6.1.2](http://build.prestashop.com/news/prestashop-1612-maintenance-release/)! It's most notable is to solve the Product page slowness issue: let us know how that works for you!<br/>
Incidentally, that explains the lack of activity on this version that week :)

More news about the Starter Theme! Read the whole series:

* http://build.prestashop.com/news/starter-theme-kickoff/
* http://build.prestashop.com/news/starter-theme-news/
* http://build.prestashop.com/news/starter-theme-news-2/

Stay tuned, next week should see a flood of articles on Build :)


## Code changes in 1.6.1.x

Here are the merged pull-requests on the [1.6.1.x branch](https://github.com/PrestaShop/PrestaShop/tree/1.6.1.x) since the last Core Weekly Report!
 

### Front office


 * [4150](https://github.com/PrestaShop/PrestaShop/pull/4150): Fix performances issue with SpecificPrice, by @jocel1.

 
## Code changes in 1.7.0.0-develop

Now let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

Note that the Start Theme repo (see next section) is entirely part of the PrestaShop 1.7.0.0 project.

 
### Back office

 * [4306](https://github.com/PrestaShop/PrestaShop/pull/4306): product form, move all price infos to price tab, by @kelu95.
 * [4316](https://github.com/PrestaShop/PrestaShop/pull/4316): manage features on new product form, by @kelu95.
 * [4317](https://github.com/PrestaShop/PrestaShop/pull/4317): better display for new product form, by @kelu95.
 * [4322](https://github.com/PrestaShop/PrestaShop/pull/4322): add product shipping fileds & carriers selector, by @kelu95.
 * [4330](https://github.com/PrestaShop/PrestaShop/pull/4330): product tab async loading, by @gRoussac & @julienbourdeau.
 * [4248](https://github.com/PrestaShop/PrestaShop/pull/4248): Add versioning to addJS to renew admin.js, by @gRoussac.
 
 
### Core

 * [4311](https://github.com/PrestaShop/PrestaShop/pull/4311): Catalog page, sorting of products, by @xGouley.
 * [4171](https://github.com/PrestaShop/PrestaShop/pull/4171): SpecificPriceRule without conditions to id_product 0 instead of full products list, by @gRoussac.
 * [4327](https://github.com/PrestaShop/PrestaShop/pull/4327): Add HookDispatcher, Hook to legacy bridge in service declaration, by @xGouley.
 * [4331](https://github.com/PrestaShop/PrestaShop/pull/4331): Only clean compare_product table if entry older than 1 week, by @julienbourdeau.


### Installer

 * [4309](https://github.com/PrestaShop/PrestaShop/pull/4309): Remove mail_identifiers email template and code, by @julienbourdeau.
 

### Unit Tests

 * [4321](https://github.com/PrestaShop/PrestaShop/pull/4321): Unit/Integration testing on ProductController, by @xGouley.
 
 
## Code changes in Starter Theme

Finally, these are the merged pull-requests on the 'feat/starter-theme' branch since the last Core Weekly Report!

 * [4235](https://github.com/PrestaShop/PrestaShop/pull/4235): Manufacturers and suppliers display, by @maximebiloe.
 * [4308](https://github.com/PrestaShop/PrestaShop/pull/4308): My account features, by @maximebiloe.
 
 
See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+merged%3A%3E2015-10-19+is%3Aclosed+sort%3Aupdated&utf8=%E2%9C%93).

Thank you to the contributor whose pull requests was merged since the last Core Weekly Report: @gskema. Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, read those:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
