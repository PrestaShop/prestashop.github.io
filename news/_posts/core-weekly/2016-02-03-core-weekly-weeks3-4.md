---
layout: post
title:  "PrestaShop Core Weekly - Weeks 3 & 4"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-02-03 17:37:41
author: xavierborderie
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last two weeks, from Monday 18th to Sunday 31st of January 2016.


## Milestones

The team is hard at work on PrestaShop 1.7, the next major version of the most complete e-commerce software solution there is. The previous Core Weekly report made a good summary of what's to come, and you can find an up-to-date thread about it [in the forum](https://www.prestashop.com/forums/topic/480580-want-to-know-more-about-17/). More content coming soon!

_Please note that finishing the [planned projects for 1.7](http://build.prestashop.com/news/meet-prestashop-team-prestashop-1-7/) and delivering a quality beta version soon is at the moment the top priority for the PrestaShop Core developers. Merging community pull requests has therefore slowed down until then, but will be back_ with a vengeance _once we have a first beta to release to you! So please keep testing, and keep sending patches our way: it's the_ raison d'être _of this community project!_

Do you want to encourage us? **[Give us a star on GitHub](https://github.com/PrestaShop/PrestaShop)**! :)


## Code changes in 1.7.0.0-develop

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

Note that the Starter Theme repo (see next section) is entirely part of the PrestaShop 1.7.0.0 project.

#### Product page

 * [4719](https://github.com/PrestaShop/PrestaShop/pull/4719): add show_condition field (checkbox) to Product, by @xGouley.
 * [4722](https://github.com/PrestaShop/PrestaShop/pull/4722): Product form datepicker, by @kelu95.
 * [4724](https://github.com/PrestaShop/PrestaShop/pull/4724): BO Product page integration, by @xGouley.
 * [4731](https://github.com/PrestaShop/PrestaShop/pull/4731): add keyboard shortcuts to save product, by @xGouley.
 * [4732](https://github.com/PrestaShop/PrestaShop/pull/4732): shipping integration improvement, by @kelu95.
 * [4733](https://github.com/PrestaShop/PrestaShop/pull/4733): disable GSA preferences, by @kelu95.
 * [4734](https://github.com/PrestaShop/PrestaShop/pull/4734): fix product creation error fields languages, by @kelu95.
 * [4750](https://github.com/PrestaShop/PrestaShop/pull/4750): Some js fix, by @kelu95.
 * [4751](https://github.com/PrestaShop/PrestaShop/pull/4751): Product sidebar nav, by @xGouley.
 * [4758](https://github.com/PrestaShop/PrestaShop/pull/4758): Product form price integration, by @kelu95.
 * [4760](https://github.com/PrestaShop/PrestaShop/pull/4760): Product catalog unit action: (de)activate and quicknav sidebar integration, by @xGouley.
 * [4761](https://github.com/PrestaShop/PrestaShop/pull/4761): add warning popup when deleting a product, by @kelu95.
 * [4762](https://github.com/PrestaShop/PrestaShop/pull/4762): Product catalog ID filter with range inputs, by @xGouley.
 * [4764](https://github.com/PrestaShop/PrestaShop/pull/4764): Product form specific price fixes, by @kelu95.
 * [4783](https://github.com/PrestaShop/PrestaShop/pull/4783): recommended modules on the right side of Product form page, by @xGouley.
 * [4787](https://github.com/PrestaShop/PrestaShop/pull/4787): form product pack item integration, by @kelu95.
 * [4788](https://github.com/PrestaShop/PrestaShop/pull/4788): Sidebar integration on product form page, by @xGouley.
 * [4793](https://github.com/PrestaShop/PrestaShop/pull/4793): form product seo integration, by @kelu95.
 * [4795](https://github.com/PrestaShop/PrestaShop/pull/4795): add product tags field, by @kelu95.
 * [4812](https://github.com/PrestaShop/PrestaShop/pull/4812): JS fix strict jshint, by @kelu95.
 * [4813](https://github.com/PrestaShop/PrestaShop/pull/4813): fix generator combination language, by @kelu95.
 * [4815](https://github.com/PrestaShop/PrestaShop/pull/4815): quantity preferences integration, by @kelu95.
 * [4818](https://github.com/PrestaShop/PrestaShop/pull/4818): Fix filter reset on catalog product admin page, by @xGouley.
 
 
#### Module page

 * [4740](https://github.com/PrestaShop/PrestaShop/pull/4740): Module Page to main develop branch, by @tchauviere, @Quetzacoalt91, @Mekki78, and @gfanton. 79 commits: great work, guys!
 * [4775](https://github.com/PrestaShop/PrestaShop/pull/4775): More JS and CSS work on the Module page, by @tchauviere, @Quetzacoalt91.
 
 
#### Back office

 * [4019](https://github.com/PrestaShop/PrestaShop/pull/4019): Allow upload excel files, by @maximebiloe.
 * [4695](https://github.com/PrestaShop/PrestaShop/pull/4695): Import CSV process updated with progress bar and small features, by @xGouley.
 * [4718](https://github.com/PrestaShop/PrestaShop/pull/4718): fix wrong hidden div languages switcher, by @xGouley.
 * [4737](https://github.com/PrestaShop/PrestaShop/pull/4737): Add a quick access to quick access management page, by @mickaelandrieu.
 * [4752](https://github.com/PrestaShop/PrestaShop/pull/4752): added quick access to SEO&URL category from SEO part of Product, by @mickaelandrieu.
 * [4757](https://github.com/PrestaShop/PrestaShop/pull/4757): Add HTML Ids for Onboarding, by @xGouley.
 * [4781](https://github.com/PrestaShop/PrestaShop/pull/4781): make Localisation category more consistent / bulk actions, by @mickaelandrieu.
 * [4791](https://github.com/PrestaShop/PrestaShop/pull/4791): updated new product link on quick accesses section, by @mickaelandrieu.
 * [4800](https://github.com/PrestaShop/PrestaShop/pull/4800): product image : improve better sortable feeling, by @kelu95.
 * [4806](https://github.com/PrestaShop/PrestaShop/pull/4806): Pipes in product names in autocomplete. Thank you @axometeam!
 * [4809](https://github.com/PrestaShop/PrestaShop/pull/4809): fix wrong path for new smarty vendor dir, by @kelu95.
 * [4820](https://github.com/PrestaShop/PrestaShop/pull/4820): Display upload_max_filesize in Backoffice server informations. Thank you @123monsite-regis!


#### Core

 * [4553](https://github.com/PrestaShop/PrestaShop/pull/4553): change default for primary key in cart_product table, by @julienbourdeau.
 * [4708](https://github.com/PrestaShop/PrestaShop/pull/4708): Move Core directory under src/, by @julienbourdeau.
 * [4738](https://github.com/PrestaShop/PrestaShop/pull/4738): fix missed db structure update for product show_condition field, by @kelu95.
 * [4743](https://github.com/PrestaShop/PrestaShop/pull/4743): Fix typo for addons routing, by @Quetzacoalt91.
 * [4753](https://github.com/PrestaShop/PrestaShop/pull/4753): Removed event dispatch notices from Symfony log files, by @mickaelandrieu.
 * [4772](https://github.com/PrestaShop/PrestaShop/pull/4772): fixed undefined error message on specific price creation, by @mickaelandrieu.
 * [4776](https://github.com/PrestaShop/PrestaShop/pull/4776): KPI fix on product catalog page (formula and links), by @xGouley.
 * [4780](https://github.com/PrestaShop/PrestaShop/pull/4780): Fix Sf 2.8 deprecated warnings, by @kelu95.
 * [4792](https://github.com/PrestaShop/PrestaShop/pull/4792): Only use PSR-4 in composer-generated autoload, by @djfm.
 * [4798](https://github.com/PrestaShop/PrestaShop/pull/4798): remove assetic, by @kelu95.
 * [4799](https://github.com/PrestaShop/PrestaShop/pull/4799): Safely find namespaces in PrestaShopAutoload, by @julienbourdeau.
 * [4810](https://github.com/PrestaShop/PrestaShop/pull/4810): Cleaning some Core/Foundation classes, by @xGouley.

 
#### Installer

 * [4686](https://github.com/PrestaShop/PrestaShop/pull/4686): Typo fixed. Thank you @idnovate!
 
 
#### Tests

 * [4720](https://github.com/PrestaShop/PrestaShop/pull/4720): Improved tests for AdminModelAdapter, by @mickaelandrieu.
 * [4721](https://github.com/PrestaShop/PrestaShop/pull/4721): Fixed travis build to make PHPUnit tests run, by @mickaelandrieu.
 * [4754](https://github.com/PrestaShop/PrestaShop/pull/4754): Fix Unit tests on sf tests, by @xGouley.
 * [4779](https://github.com/PrestaShop/PrestaShop/pull/4779): disable test, but don't mask it, by @djfm.
 * [4789](https://github.com/PrestaShop/PrestaShop/pull/4789): Authentified from Github in travis build, by @mickaelandrieu.
 * [4796](https://github.com/PrestaShop/PrestaShop/pull/4796): Fix a unit test for travis, by @xGouley.
 * [4802](https://github.com/PrestaShop/PrestaShop/pull/4802): Test harness improvements, trying to get the build green, by @djfm.
 * [4808](https://github.com/PrestaShop/PrestaShop/pull/4808): let's go green, by @djfm.
 
 
 
## Code changes in the Starter Theme -- the foundation of 1.7 themes

These are the merged pull-requests on the ['feat/starter-theme' branch](https://github.com/PrestaShop/PrestaShop/tree/feat/starter-theme) since the last Core Weekly Report!

 * [4380](https://github.com/PrestaShop/PrestaShop/pull/4380): Rework Theme management, by @julienbourdeau.
 * [4683](https://github.com/PrestaShop/PrestaShop/pull/4683): Blocknewsletter ready for StarterTheme, by @maximebiloe.
 * [4688](https://github.com/PrestaShop/PrestaShop/pull/4688): Blockcmsinfo ready for StarterTheme, by @maximebiloe.
 * [4728](https://github.com/PrestaShop/PrestaShop/pull/4728): Various small fixes, by @djfm.
 * [4742](https://github.com/PrestaShop/PrestaShop/pull/4742): Add cms category management, by @maximebiloe.
 * [4748](https://github.com/PrestaShop/PrestaShop/pull/4748): wrap module front controller output inside a layout, by @djfm.
 * [4749](https://github.com/PrestaShop/PrestaShop/pull/4749): Add breadcrumb depth, by @maximebiloe.
 * [4755](https://github.com/PrestaShop/PrestaShop/pull/4755): fixed invoice not rendering anymore, by @djfm.
 * [4778](https://github.com/PrestaShop/PrestaShop/pull/4778): disable test, but don't mask it, by @djfm.
 * [4784](https://github.com/PrestaShop/PrestaShop/pull/4784): Basic unit tests for CheckoutAddressesStep, by @djfm.
 * [4794](https://github.com/PrestaShop/PrestaShop/pull/4794): Rework blocksocial for StarterTheme, by @maximebiloe.
 * [4805](https://github.com/PrestaShop/PrestaShop/pull/4805): Run selenium tests on Travis, by @djfm.
 * [4807](https://github.com/PrestaShop/PrestaShop/pull/4807): Remove rivets.js, by @julienbourdeau.
 * [4823](https://github.com/PrestaShop/PrestaShop/pull/4823): Fix translator in ProductPresenter, by @maximebiloe.
 
 
 
## Code changes in the Classic Theme -- the default theme of PrestaShop 1.7, based on the Starter Theme.

Finally, these are the merged pull-requests on the ['feat/classic' branch](https://github.com/PrestaShop/PrestaShop/tree/feat/classic) since the last Core Weekly Report!

 * [4702](https://github.com/PrestaShop/PrestaShop/pull/4702): Start checkout integration, by @nihco2.
 * [4725](https://github.com/PrestaShop/PrestaShop/pull/4725): Improve responsive design, by @nihco2.
 * [4727](https://github.com/PrestaShop/PrestaShop/pull/4727): Fix checkout design, by @nihco2.
 * [4747](https://github.com/PrestaShop/PrestaShop/pull/4747): Header redesign, by @nihco2. Thank you @kpodemski for your helpful comments!
 * [4771](https://github.com/PrestaShop/PrestaShop/pull/4771): Improve miniatures design, by @nihco2.
 * [4786](https://github.com/PrestaShop/PrestaShop/pull/4786): Forms, login/register pages, minor fixes, by @ishcherbakov.
 * [4790](https://github.com/PrestaShop/PrestaShop/pull/4790): Add footer, by @nihco2.
 * [4797](https://github.com/PrestaShop/PrestaShop/pull/4797): Improve dropdown menu, by @nihco2.
 * [4814](https://github.com/PrestaShop/PrestaShop/pull/4814): Account, address and order pages, by @ishcherbakov.


See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+merged%3A2016-01-18..2016-01-24+is%3Aclosed&utf8=%E2%9C%93).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @axometeam and @123monsite-regis! Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
