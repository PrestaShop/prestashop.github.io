---
layout: post
title:  "PrestaShop Core Weekly - Week 11"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-03-22 17:37:41
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 14th to Sunday 20th of March 2016.


## Milestones

Do you live near Paris? Are you willing to give us a couple of hours in order to test-drive the design of PS 1.7? [Let us know!](http://build.prestashop.com/news/call-for-user-testing-volunteers/)

The team is hard at work on PrestaShop 1.7, the next major version of the most complete e-commerce software solution there is. <br/>
You can find an up-to-date thread about it [in the forum](https://www.prestashop.com/forums/topic/480580-want-to-know-more-about-17/).<br/>
The 1.7 Project FAQ is always available here: [http://build.prestashop.com/news/prestashop-1-7-faq/](http://build.prestashop.com/news/prestashop-1-7-faq/).

_Please note that finishing the [planned projects for 1.7](http://build.prestashop.com/news/meet-prestashop-team-prestashop-1-7/) and delivering a quality beta version soon is the top priority for the PrestaShop Core developers at the moment. Merging community pull requests has therefore slowed down until then, but will be back_ with a vengeance _once we have a first beta to release to you! So please keep testing, and keep sending patches our way: it's the_ raison d'être _of this community project!_

Do you want to encourage us? **[Give us a star on GitHub](https://github.com/PrestaShop/PrestaShop)**! :)


## Code changes in 1.7.0.0-develop

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

### Text changes

 * [5164](https://github.com/PrestaShop/PrestaShop/pull/5164): Update wording configuration.xml. Thank you @Nobodaddy!
 * [5165](https://github.com/PrestaShop/PrestaShop/pull/5165): Update wording order_return_state.xml. Thank you @Nobodaddy!
 * [5166](https://github.com/PrestaShop/PrestaShop/pull/5166): Update order_state.xml. Thank you @Nobodaddy!
 * [5167](https://github.com/PrestaShop/PrestaShop/pull/5167): Update wording quick_access.xml. Thank you @Nobodaddy!
 * [5168](https://github.com/PrestaShop/PrestaShop/pull/5168): Translated supply_order_state.xml. Thank you @Nobodaddy!
 
 
### Product page

 * [5181](https://github.com/PrestaShop/PrestaShop/pull/5181): Product pages integration, by @Shudrum.
 * [5182](https://github.com/PrestaShop/PrestaShop/pull/5182): Fix Add customization button on product page, by @Shudrum.
 * [5197](https://github.com/PrestaShop/PrestaShop/pull/5197): product description can be saved when empty, by @mickaelandrieu.
 * [5199](https://github.com/PrestaShop/PrestaShop/pull/5199): Fix Online / Offline switch, by @Shudrum.
 

### Front office (including the default theme, named "Classic" for now, based upon the [Starter Theme](https://github.com/PrestaShop/PrestaShop/tree/develop/themes/classic))

 * [5020](https://github.com/PrestaShop/PrestaShop/pull/5020): Change structure for module assets override, by @julienbourdeau.
 * [5183](https://github.com/PrestaShop/PrestaShop/pull/5183): Fix block newletter display, by @nihco2.
 * [5184](https://github.com/PrestaShop/PrestaShop/pull/5184): Remove data from ProductController and related templates, by @julienbourdeau.
 * [5185](https://github.com/PrestaShop/PrestaShop/pull/5185): OrderPresenter - Rework amounts, by @julienbourdeau.
 * [5190](https://github.com/PrestaShop/PrestaShop/pull/5190): Fix some display troubles, by @maximebiloe.
 * [5191](https://github.com/PrestaShop/PrestaShop/pull/5191): Fix accessories display, by @maximebiloe.
 * [5192](https://github.com/PrestaShop/PrestaShop/pull/5192): Fix product cover layer, by @nihco2.
 * [5194](https://github.com/PrestaShop/PrestaShop/pull/5194): Fix update of delivery address, by @maximebiloe.
 * [5195](https://github.com/PrestaShop/PrestaShop/pull/5195): Cart widget only has link to cart if not empty, by @maximebiloe.
 * [5201](https://github.com/PrestaShop/PrestaShop/pull/5201): Fix delivery step display, by @nihco2.
 * [5202](https://github.com/PrestaShop/PrestaShop/pull/5202): Fix display ecotax, by @nihco2.
 * [5217](https://github.com/PrestaShop/PrestaShop/pull/5217): Fix Classic Theme README.md. Thank you @panploenes!

 
### Back office

 * [5139](https://github.com/PrestaShop/PrestaShop/pull/5139): Fixed warning - no such file or directory. Thank you @true0r!
 * [5140](https://github.com/PrestaShop/PrestaShop/pull/5140): pack/virtual product shouldn't be selected if variations exists, by @mickaelandrieu.
 * [5189](https://github.com/PrestaShop/PrestaShop/pull/5189): Module page: fix categories, by @Quetzacoalt91.
 * [5196](https://github.com/PrestaShop/PrestaShop/pull/5196): fixed permissions display in 1.7, by @mickaelandrieu.
 * [5203](https://github.com/PrestaShop/PrestaShop/pull/5203): fixed Manage tax rules link, by @mickaelandrieu.
 * [5205](https://github.com/PrestaShop/PrestaShop/pull/5205): click btn preview save product and redirect in window.open with target, by @cocoweb94.


### Core

 * [4817](https://github.com/PrestaShop/PrestaShop/pull/4817): Implement Module Manager, by @Quetzacoalt91, @maximebiloe and @tchauviere.
 * [5186](https://github.com/PrestaShop/PrestaShop/pull/5186): Introduce the new welcome module, by @maximebiloe.
 * [5188](https://github.com/PrestaShop/PrestaShop/pull/5188): Fix cache dir for ModuleDataProvider, by @maximebiloe.
 * [5207](https://github.com/PrestaShop/PrestaShop/pull/5207): fixed getAdminLink() twig extension, by @mickaelandrieu.
 * [5208](https://github.com/PrestaShop/PrestaShop/pull/5208): Fix comment typo on CarrierCore. Thank you @Soullivaneuh!
 
 
### Installer

 * [4140](https://github.com/PrestaShop/PrestaShop/pull/4140): Add check for PHP zip extension, by @Quetzacoalt91.
 * [5093](https://github.com/PrestaShop/PrestaShop/pull/5093): fix upgrade, by @jocel1.
 * [5179](https://github.com/PrestaShop/PrestaShop/pull/5179): Fix install DB query. Thank you @firstred!
 * [5200](https://github.com/PrestaShop/PrestaShop/pull/5200): backport tabs changes to all lang xml files, by @julienbourdeau.
 
 

See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Amerged+merged%3A2016-03-06..2016-03-13+).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @firstred, @Nobodaddy, @panploenes, @Soullivaneuh and @true0r! Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
