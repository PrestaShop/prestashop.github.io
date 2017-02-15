---
layout: post
title:  "PrestaShop Core Weekly - Week 45"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-11-13 18:37:41
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop core codebase during last week, from Monday 2nd of November to Sunday 8th of November.


## Milestones

We're working on patch version 1.6.1.3, and [you can download the RC1 right now](https://www.prestashop.com/en/download)! The stable version should be released early next week.


## Code changes in 1.7.0.0-develop

Now let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

Note that the Starter Theme repo (see next section) is entirely part of the PrestaShop 1.7.0.0 project.

 
#### Back office

 * [4399](https://github.com/PrestaShop/PrestaShop/pull/4399): manage specific prices on new form product, by @kelu95.
 * [4403](https://github.com/PrestaShop/PrestaShop/pull/4403): fix img path on category tree js, by @kelu95.
 * [4406](https://github.com/PrestaShop/PrestaShop/pull/4406): fix ajax loading specific prices on new product, by @kelu95.
 * [4409](https://github.com/PrestaShop/PrestaShop/pull/4409): refacto form specific price, by @kelu95.
 * [4423](https://github.com/PrestaShop/PrestaShop/pull/4423): product form javascript refactorization, by @kelu95.

 
 
#### Core

 * [4390](https://github.com/PrestaShop/PrestaShop/pull/4390): Quantities support on new Admin product form, by @xGouley.
 * [4396](https://github.com/PrestaShop/PrestaShop/pull/4396): Add many hooks on productController, by @xGouley.
 * [4404](https://github.com/PrestaShop/PrestaShop/pull/4404): Refacto Form Types + move URLs generation from Controller action to Twig tpl, by @xGouley.
 * [4408](https://github.com/PrestaShop/PrestaShop/pull/4408): fix display price/number CLDR, by @kelu95.
 * [4410](https://github.com/PrestaShop/PrestaShop/pull/4410): Fix sorting product action SQL bug, by @xGouley.

 
#### Installer

 * [4361](https://github.com/PrestaShop/PrestaShop/pull/4361): SF2 parameters and production env creation, by @kelu95.
 
 
 
## Code changes in Starter Theme

Finally, these are the merged pull-requests on the 'feat/starter-theme' branch since the last Core Weekly Report!

 * [4333](https://github.com/PrestaShop/PrestaShop/pull/4333): Payment Option standardization proposal, by @djfm.
 * [4367](https://github.com/PrestaShop/PrestaShop/pull/4367): Extract contactform to a module, by @maximebiloe.
 * [4379](https://github.com/PrestaShop/PrestaShop/pull/4379): Add checkout link, by @maximebiloe.
 * [4381](https://github.com/PrestaShop/PrestaShop/pull/4381): Correct order style, by @maximebiloe.
 * [4395](https://github.com/PrestaShop/PrestaShop/pull/4395): removed some JS, by @djfm.

 
 
See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+merged%3A%3E2015-11-02+is%3Aclosed+sort%3Aupdated+).

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, read those:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
