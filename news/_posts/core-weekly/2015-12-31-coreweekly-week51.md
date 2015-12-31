---
layout: post
title:  "PrestaShop Core Weekly - Week 51"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-12-31 17:37:41
author: xavierborderie
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop core codebase during the last two weeks, from Monday 21st to Sunday 28th of December.


## Milestones

This Core Weekly report is being published on December 31st, so to all our dear readers on the Gregorian calendar, we wish some merry end-of-year festivities!


## Code changes in 1.6.1.x

Here are the merged pull-requests on the [1.6.1.x branch](https://github.com/PrestaShop/PrestaShop/tree/1.6.1.x) since the last Core Weekly Report!


#### Back office
 
 * [4500](https://github.com/PrestaShop/PrestaShop/pull/4500): Fixed bug in HTMLTemplateInvoice prevents problems with invoice prefixes. Thank you @lozal2244!

 
#### Tests

 * [4596](https://github.com/PrestaShop/PrestaShop/pull/4596): removed tests for prestafraud module, by @mickaelandrieu.


## Code changes in 1.7.0.0-develop

Now let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

Note that the Starter Theme repo (see next section) is entirely part of the PrestaShop 1.7.0.0 project.

 
#### Back office

 * [4607](https://github.com/PrestaShop/PrestaShop/pull/4607): revert tiny MCE excerpt for short description, by @kelu95.
 * [4612](https://github.com/PrestaShop/PrestaShop/pull/4612): Fix bad pagination variables on product catalog, by @xGouley.
 * [4620](https://github.com/PrestaShop/PrestaShop/pull/4620): manage images product combinations, by @kelu95.
 * [4622](https://github.com/PrestaShop/PrestaShop/pull/4622): fix some bugs on product form, by @kelu95.
 * [4623](https://github.com/PrestaShop/PrestaShop/pull/4623): new process for product creation, by @kelu95.
 * [4624](https://github.com/PrestaShop/PrestaShop/pull/4624): fix product form dropzone error, by @kelu95.
 * [4625](https://github.com/PrestaShop/PrestaShop/pull/4625): New product form action bar, by @kelu95.
 


#### Core

 * [4503](https://github.com/PrestaShop/PrestaShop/pull/4503): Improve PHP 7 compatibility. Thank you @firstred for the PR, and @therampagerado for testing!
 * [4507](https://github.com/PrestaShop/PrestaShop/pull/4507): MySQL 5.7 Compatibility, by @julienbourdeau.
 * [4578](https://github.com/PrestaShop/PrestaShop/pull/4578): fix js cldr error: var full_cldr_language_code not defined, by @xGouley.
 * [4609](https://github.com/PrestaShop/PrestaShop/pull/4609): Remove static prefix from bcrypt. Thank you @spaze!
 * [4617](https://github.com/PrestaShop/PrestaShop/pull/4617): Fix product duplication new name 'copy of', by @xGouley.

 
 
#### Installer

 * [4537](https://github.com/PrestaShop/PrestaShop/pull/4537): add sf2 check requirements/recommendations, by @kelu95.

 
 
## Code changes in Starter Theme

Finally, these are the merged pull-requests on the 'feat/starter-theme' branch since the last Core Weekly Report!

 * [4613](https://github.com/PrestaShop/PrestaShop/pull/4613): Rework BestSales controller, by @maximebiloe.
 * [4614](https://github.com/PrestaShop/PrestaShop/pull/4614): Rework New Products controller, by @maximebiloe.
 * [4618](https://github.com/PrestaShop/PrestaShop/pull/4618): Rework Prices Drop controller, by @maximebiloe.

 
 
 
See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+merged%3A2015-12-21..2015-12-27+is%3Aclosed+).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @firstred, @lozal2244, @spaze, and @therampagerado! Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, read those pages:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone, and _see you next year_! ;)
