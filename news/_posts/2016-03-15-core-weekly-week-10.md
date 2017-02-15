---
layout: post
title:  "PrestaShop Core Weekly - Week 10"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-03-15 9:37:41
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 7th to Sunday 13th of March 2016.


## Milestones

Pull request with notable information this week:

 * [5170](https://github.com/PrestaShop/PrestaShop/pull/5170): In order to make it easier to use ModuleAdminController (instead of using "configure" all the time), hook-related methods are moved from the Module class to the Hook class.
 * [5174](https://github.com/PrestaShop/PrestaShop/pull/5174): Making sure that PrestaShop 1.7.0.0 runs smoothly on PHP 5.4.
 

The team is hard at work on PrestaShop 1.7, the next major version of the most complete e-commerce software solution there is. You can find an up-to-date thread about it [in the forum](https://www.prestashop.com/forums/topic/480580-want-to-know-more-about-17/).

_Please note that finishing the [planned projects for 1.7](http://build.prestashop.com/news/meet-prestashop-team-prestashop-1-7/) and delivering a quality beta version soon is the top priority for the PrestaShop Core developers at the moment. Merging community pull requests has therefore slowed down until then, but will be back_ with a vengeance _once we have a first beta to release to you! So please keep testing, and keep sending patches our way: it's the_ raison d'être _of this community project!_

Do you want to encourage us? **[Give us a star on GitHub](https://github.com/PrestaShop/PrestaShop)**! :)


## Code changes in 1.7.0.0-develop

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

 
### Product page

 * [5146](https://github.com/PrestaShop/PrestaShop/pull/5146): do not use smarty->tpl_vars in controllers, by @julienbourdeau.
 * [5152](https://github.com/PrestaShop/PrestaShop/pull/5152): Work on Presenter, by @julienbourdeau.
 * [5169](https://github.com/PrestaShop/PrestaShop/pull/5169): Fix images url on product page, by @maximebiloe.
 

### Front office (including the default theme, named "Classic" for now, based upon the [Starter Theme](https://github.com/PrestaShop/PrestaShop/tree/develop/themes/classic))

 * [5111](https://github.com/PrestaShop/PrestaShop/pull/5111): Add some ajax on product page, by @maximebiloe.
 * [5137](https://github.com/PrestaShop/PrestaShop/pull/5137): CSS optimization, by @nihco2.
 * [5142](https://github.com/PrestaShop/PrestaShop/pull/5142): Stores page redesign, by @nihco2.
 * [5153](https://github.com/PrestaShop/PrestaShop/pull/5153): returned correct amount after currency conversion, by @mickaelandrieu.
 * [5157](https://github.com/PrestaShop/PrestaShop/pull/5157): Updated Presenters to remove the conversion, by @mickaelandrieu.
 * [5158](https://github.com/PrestaShop/PrestaShop/pull/5158): Fix carrier logo size, by @nihco2.
 * [5159](https://github.com/PrestaShop/PrestaShop/pull/5159): Checkout & Shopping-Cart when empty cart, by @maximebiloe.
 * [5160](https://github.com/PrestaShop/PrestaShop/pull/5160): Fix some checkout errors, by @julienbourdeau.
 * [5162](https://github.com/PrestaShop/PrestaShop/pull/5162): Fix price display, by @nihco2.
 * [5163](https://github.com/PrestaShop/PrestaShop/pull/5163): Move some logical JS into core, by @maximebiloe.
 * [5173](https://github.com/PrestaShop/PrestaShop/pull/5173): Fix modal display for tablets, by @nihco2.
 * [5176](https://github.com/PrestaShop/PrestaShop/pull/5176): Update logo and theme preview, by @maximebiloe.
 * [5178](https://github.com/PrestaShop/PrestaShop/pull/5178): delete block cms and linklist redesign, by @nihco2.


 
### Back office

 * [5140](https://github.com/PrestaShop/PrestaShop/pull/5140): pack/virtual product shouldn't be selected if variations exists, by @mickaelandrieu.
 * [5141](https://github.com/PrestaShop/PrestaShop/pull/5141): Batch of improvements for new module page, by @tchauviere.
 * [5144](https://github.com/PrestaShop/PrestaShop/pull/5144): fix $module_name not defined in import module. Thank you @prestamodule!
 * [5149](https://github.com/PrestaShop/PrestaShop/pull/5149): Added tax block on Basic settings tab, by @mickaelandrieu.


### Core

 * [5116](https://github.com/PrestaShop/PrestaShop/pull/5116): Remove many smarty variables, by @julienbourdeau.
 * [5138](https://github.com/PrestaShop/PrestaShop/pull/5138): fixed bad files deletion on installation, by @mickaelandrieu.
 * [5145](https://github.com/PrestaShop/PrestaShop/pull/5145): Fix webservice api/products/{id} for PHP7. Thank you @tomcyr!
 * [5170](https://github.com/PrestaShop/PrestaShop/pull/5170): Move hook related method from Module to Hook, by @julienbourdeau.
 * [5174](https://github.com/PrestaShop/PrestaShop/pull/5174): PHP 5.4 compatible, by @maximebiloe.
 

### Mails

 * [5148](https://github.com/PrestaShop/PrestaShop/pull/5148): Update import emails according to generator, by @maximebiloe.
 


See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Amerged+merged%3A2016-03-06..2016-03-13+).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @prestamodule and @tomcyr! Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
