---
layout: post
title:  "PrestaShop Core Weekly - Week 8 of 2016"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-03-01 14:37:41
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 22nd to Sunday 28th of February 2016.


## Milestones

Two PRs to notice this week:

* [5040](https://github.com/PrestaShop/PrestaShop/pull/5040): Introducing an OrderPresenter controller, by @mickaelandrieu.
* [5069](https://github.com/PrestaShop/PrestaShop/pull/5069): introduced core js for themes, by @mickaelandrieu.

The team is hard at work on PrestaShop 1.7, the next major version of the most complete e-commerce software solution there is. You can find an up-to-date thread about it [in the forum](https://www.prestashop.com/forums/topic/480580-want-to-know-more-about-17/).

_Please note that finishing the [planned projects for 1.7](http://build.prestashop.com/news/meet-prestashop-team-prestashop-1-7/) and delivering a quality beta version soon is the top priority for the PrestaShop Core developers at the moment. Merging community pull requests has therefore slowed down until then, but will be back_ with a vengeance _once we have a first beta to release to you! So please keep testing, and keep sending patches our way: it's the_ raison d'être _of this community project!_

Do you want to encourage us? **[Give us a star on GitHub](https://github.com/PrestaShop/PrestaShop)**! :)


## Code changes in 1.7.0.0-develop

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!


### Text changes

 * [5063](https://github.com/PrestaShop/PrestaShop/pull/5063): Update Italian installer and Hong Kong localization pack, by @maximebiloe. Thank you @mcdado for the original italian PR!
 

### Product page

 * [5042](https://github.com/PrestaShop/PrestaShop/pull/5042): Add pack mention, by @maximebiloe.
 * [5050](https://github.com/PrestaShop/PrestaShop/pull/5050): Fix checkout address form, by @nihco2.
 
 
### Modules page

 * [5058](https://github.com/PrestaShop/PrestaShop/pull/5058): Fix for module page when not on default port 80, @Quetzacoalt91.
 * [5081](https://github.com/PrestaShop/PrestaShop/pull/5081): Improvements for new Module Page, by @tchauviere.
 

### Front office (default theme, named "Classic" for now, based upon the [Starter Theme](https://github.com/PrestaShop/PrestaShop/tree/develop/themes/classic))

 * [5032](https://github.com/PrestaShop/PrestaShop/pull/5032): Improve homeslider compat with boostrap carousel and module v2.0, by @julienbourdeau.
 * [5054](https://github.com/PrestaShop/PrestaShop/pull/5054): Improve checkout form and replace old images, by @nihco2.
 * [5062](https://github.com/PrestaShop/PrestaShop/pull/5062): Added data for order confirmation page with OrderPresenter, by @mickaelandrieu.
 * [5065](https://github.com/PrestaShop/PrestaShop/pull/5065): shopping card redesign, by @nihco2.
 * [5066](https://github.com/PrestaShop/PrestaShop/pull/5066): rename default-bootstrap to classic. Thank you @fojtCz!
 * [5067](https://github.com/PrestaShop/PrestaShop/pull/5067): Fix ajax condition, by @maximebiloe.
 * [5075](https://github.com/PrestaShop/PrestaShop/pull/5075): Improved order presenter, by @mickaelandrieu.
 * [5079](https://github.com/PrestaShop/PrestaShop/pull/5079): My account fixes and improvements, by @maximebiloe.
 * [5083](https://github.com/PrestaShop/PrestaShop/pull/5083): Fix blockcart link, by @maximebiloe.
 * [5084](https://github.com/PrestaShop/PrestaShop/pull/5084): Improved discount amounts display, by @mickaelandrieu.

 
### Back office

 * [5005](https://github.com/PrestaShop/PrestaShop/pull/5005): ThemeManager on theme upload works as expected, by @mickaelandrieu.
 * [5040](https://github.com/PrestaShop/PrestaShop/pull/5040): Introducing an OrderPresenter controller, by @mickaelandrieu.
 * [5055](https://github.com/PrestaShop/PrestaShop/pull/5055): Improved ThemeManager according to form changes, by @mickaelandrieu.
 * [5057](https://github.com/PrestaShop/PrestaShop/pull/5057): Synchronize stock after adding a product via ajax to an order. Thank you @Ginkosama!


### Core

 * [5064](https://github.com/PrestaShop/PrestaShop/pull/5064): Typo in FrontController class. Thank you @gRoussac!
 * [5069](https://github.com/PrestaShop/PrestaShop/pull/5069): introduced core js for themes, by @mickaelandrieu.
 * [5070](https://github.com/PrestaShop/PrestaShop/pull/5070): Fix product order on shopping cart, by @mickaelandrieu.


See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Amerged+merged%3A2016-02-22..2016-02-28+).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @fojtCz, @Ginkosama, @gRoussac, and @macdado! Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
