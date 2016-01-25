---
layout: post
title:  "PrestaShop Core Weekly - Weeks 52, 1 & 2"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-01-22 17:37:41
author: xavierborderie
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop core codebase during the last three weeks, from Monday 28th of December 2015 to Sunday 17th of January 2016.

Happy new year to you, dear contributors and community members! The Core Weekly report took a bit of a holiday in early January, but we're back on track now! :)


## Milestones

The team is hard at work on PrestaShop 1.7, the next major version of the most complete e-commerce software solution there is.

This new version introduces several new things that were written about in this very blog, and you can find a summary of that [in the forum post](https://www.prestashop.com/forums/topic/480580-want-to-know-more-about-17/)! More content coming soon.

Our product managers talk about the various projects [in these videos](http://build.prestashop.com/news/meet-prestashop-team-prestashop-1-7/).

The readers of this devblog know most of these, but since this is the new year, here is the overview of what is being worked on for 1.7:

 * Global UX/UI rework.
 * [New architecture based on Symfony 2.8](http://build.prestashop.com/news/prestashop-1-7-and-symfony/).
 * Rework of the Product page.
 * [Rework of the Modules page](http://build.prestashop.com/news/module-page-awakens/).
 * [Rework of the Theme API and new Starter Theme](http://build.prestashop.com/news/starter-theme-kickoff/).
 * New default theme, based on the Starter Theme.
 
That last item has just started taking life! **The development of the new default theme has begun!** Right now, it is named Classic and its development is going strong. You too can contribute ideas and code: development happens on the [feat/classic branch](https://github.com/PrestaShop/PrestaShop/tree/feat/classic) This theme will follow changes on the [feat/starter-theme](https://github.com/PrestaShop/PrestaShop/tree/feat/starter-theme) branch. If you want to know the technological choices: Bootstrap 4 Sass version, Bourbon, ES6, all built with webpack. You can discuss it [on the dedicated Gitter channel](https://github.com/PrestaShop/StarterTheme): come work with us to make it a reality!

Do you want to enccourage us? **[Give us a star on GitHub](https://github.com/PrestaShop/PrestaShop)**! :)


## Code changes in 1.6.1.x

Here are the merged pull-requests on the [1.6.1.x branch](https://github.com/PrestaShop/PrestaShop/tree/1.6.1.x) since the last Core Weekly Report!


#### Core
 
 * [4654](https://github.com/PrestaShop/PrestaShop/pull/4654): Fix ObjectModel error management on validation, by @Shudrum.
 


## Code changes in 1.7.0.0-develop

Now let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

Note that the Starter Theme repo (see next section) is entirely part of the PrestaShop 1.7.0.0 project.


#### Text changes

 * [4682](https://github.com/PrestaShop/PrestaShop/pull/4682): wording for Catalog Page, by @AlexEven.

 
#### Back office

 * [4391](https://github.com/PrestaShop/PrestaShop/pull/4391): Fix filter by category change not working after other actions, by @xGouley.
 * [4394](https://github.com/PrestaShop/PrestaShop/pull/4394): Imap emails import connector bugs, by @xGouley.
 * [4639](https://github.com/PrestaShop/PrestaShop/pull/4639): Fix some product form bugs, by @kelu95. 
 * [4640](https://github.com/PrestaShop/PrestaShop/pull/4640): Improve responsive form product action bar, by @kelu95. 
 * [4641](https://github.com/PrestaShop/PrestaShop/pull/4641): product link compat fix (legacy/sf), by @xGouley.
 * [4642](https://github.com/PrestaShop/PrestaShop/pull/4642): fix bug while id product does not exist, by @kelu95.
 * [4651](https://github.com/PrestaShop/PrestaShop/pull/4651): Remove double slider on product catalog admin. Fix pagination limits. By @kelu95.
 * [4657](https://github.com/PrestaShop/PrestaShop/pull/4657): Refacto product form information, by @kelu95.
 * [4658](https://github.com/PrestaShop/PrestaShop/pull/4658): Fix catalog mass edit actions (sorting), by @xGouley.
 * [4660](https://github.com/PrestaShop/PrestaShop/pull/4660): Fix preview URLs on product catalog too, by @xGouley.
 * [4663](https://github.com/PrestaShop/PrestaShop/pull/4663): Refacto form product v2, by @kelu95.
 * [4667](https://github.com/PrestaShop/PrestaShop/pull/4667): Fix form product combination default image, by @kelu95.
 * [4671](https://github.com/PrestaShop/PrestaShop/pull/4671): Catalog category tree expand collapse all, by @xGouley.
 * [4672](https://github.com/PrestaShop/PrestaShop/pull/4672): removed custom asset path filter, by @mickaelandrieu.
 * [4684](https://github.com/PrestaShop/PrestaShop/pull/4684): Refacto form product v3, by @kelu95.
 * [4689](https://github.com/PrestaShop/PrestaShop/pull/4689): new Export CSV for new Product catalog admin page, by @xGouley.
 * [4697](https://github.com/PrestaShop/PrestaShop/pull/4697): Recommended modules for Admin product page reported, by @xGouley.
 * [4698](https://github.com/PrestaShop/PrestaShop/pull/4698): Combination generator improvement, by @kelu95.
 * [4706](https://github.com/PrestaShop/PrestaShop/pull/4706): Rework pagination, by @xGouley.
 * [4707](https://github.com/PrestaShop/PrestaShop/pull/4707): added Shipping integration, by @mickaelandrieu.
 * [4709](https://github.com/PrestaShop/PrestaShop/pull/4709): Product form information integration, by @kelu95.
 * [4710](https://github.com/PrestaShop/PrestaShop/pull/4710): fix error js when submiting new specific price, by @kelu95.
 * [4711](https://github.com/PrestaShop/PrestaShop/pull/4711): hide lang switcher when there is one installed language, by @kelu95.


#### Core

 * [4615](https://github.com/PrestaShop/PrestaShop/pull/4615): Proposal for addon management, by @julienbourdeau.
 * [4630](https://github.com/PrestaShop/PrestaShop/pull/4630): Fix AdminTab PHP 7 compatibility. Thank you @firstred!
 * [4633](https://github.com/PrestaShop/PrestaShop/pull/4633): Updated Romanian tax rate where necessary. Thank you @Nobodaddy!
 * [4656](https://github.com/PrestaShop/PrestaShop/pull/4656): catalog actions SQL manager, import/export, deletion confirm, by @xGouley.
 * [4677](https://github.com/PrestaShop/PrestaShop/pull/4677): Updated Symfony and Doctrine, by @mickaelandrieu.
 * [4680](https://github.com/PrestaShop/PrestaShop/pull/4680): updated product form specific price subpart, by @mickaelandrieu.
 * [4681](https://github.com/PrestaShop/PrestaShop/pull/4681): added tooltip system, by @mickaelandrieu.
 * [4691](https://github.com/PrestaShop/PrestaShop/pull/4691): Configured Doctrine platform, by @mickaelandrieu.
 * [4694](https://github.com/PrestaShop/PrestaShop/pull/4694): Moved MySQL plaform configuration requirement, by @mickaelandrieu.
 * [4699](https://github.com/PrestaShop/PrestaShop/pull/4699): fix bug when SF2 cache clear that try to load a legacy service, by @kelu95.

 
#### Installer

 * [4668](https://github.com/PrestaShop/PrestaShop/pull/4668): now update SF2 schema in DEV and PROD env, by @kelu95.
 
 
#### Tests

 * [4690](https://github.com/PrestaShop/PrestaShop/pull/4690): Removed obsolete functional tests, by @mickaelandrieu.
 * [4701](https://github.com/PrestaShop/PrestaShop/pull/4701): Refactored and added tests for AdminModelAdapter, by @mickaelandrieu.
 
 
#### PHPDoc

 * [4700](https://github.com/PrestaShop/PrestaShop/pull/4700): Add/fix PHPDocs on PrestaShop Bundle, by @xGouley.
 
 
 
## Code changes in the Starter Theme -- the foundation of 1.7 themes

These are the merged pull-requests on the 'feat/starter-theme' branch since the last Core Weekly Report!

 * [4580](https://github.com/PrestaShop/PrestaShop/pull/4580): Remove comparator feature. Thank you @prestamodule!
 * [4594](https://github.com/PrestaShop/PrestaShop/pull/4594): Automatically reload page on quantity or combination change, by @maximebiloe.
 * [4626](https://github.com/PrestaShop/PrestaShop/pull/4626): Checkout reworked, by @djfm.
 * [4632](https://github.com/PrestaShop/PrestaShop/pull/4632): fixed the tests, by @djfm.
 * [4637](https://github.com/PrestaShop/PrestaShop/pull/4637): forms, by @djfm.
 * [4647](https://github.com/PrestaShop/PrestaShop/pull/4647): Add breadcrumb, by @maximebiloe.
 * [4650](https://github.com/PrestaShop/PrestaShop/pull/4650): Add gift wrapping cost in the cart, by @maximebiloe.
 * [4655](https://github.com/PrestaShop/PrestaShop/pull/4655): Generate hooks list between two PrestaShop folders, by @maximebiloe.
 * [4659](https://github.com/PrestaShop/PrestaShop/pull/4659): Breadcrumb in the customer area, by @maximebiloe.
 * [4664](https://github.com/PrestaShop/PrestaShop/pull/4664): Normalization & cleaning, by @maximebiloe.
 * [4669](https://github.com/PrestaShop/PrestaShop/pull/4669): Small changes in support of work on homefeatured module, by @djfm.
 * [4678](https://github.com/PrestaShop/PrestaShop/pull/4678): fixed stuff after normalization, by @djfm.
 * [4693](https://github.com/PrestaShop/PrestaShop/pull/4693): speedup build, StarterTheme is never for production, by @djfm.
 
 
 
## Code changes in the Classic Theme -- the default theme of PrestaShop 1.7, based on the Starter Theme.

Finally, these are the merged pull-requests on the 'feat/classic' branch since the last Core Weekly Report!

 * [4643](https://github.com/PrestaShop/PrestaShop/pull/4643): Classic is the new default, by @djfm.
 * [4645](https://github.com/PrestaShop/PrestaShop/pull/4645): correct theme now installed by default, by @djfm.
 * [4652](https://github.com/PrestaShop/PrestaShop/pull/4652): Added bootstrap + bourbon, use webpack, by @djfm.
 * [4665](https://github.com/PrestaShop/PrestaShop/pull/4665): Header in place, by @nihco2.
 * [4676](https://github.com/PrestaShop/PrestaShop/pull/4676): Add drop-down modules, by @nihco2.
 * [4685](https://github.com/PrestaShop/PrestaShop/pull/4685): bootstratpify products miniatures, by @nihco2.
 * [4692](https://github.com/PrestaShop/PrestaShop/pull/4692): speedup build during development, by @djfm.
 
 
See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+merged%3A2015-12-28..2016-01-17+is%3Aclosed+).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @firstred, @@prestamodule, and @Nobodaddy! Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

_Please note that finishing our projects for 1.7 and delivering a quality beta version soon is at the moment the top priority for our developers. Merging community pull requests has therefore slowed down until then, but will be back with a vengeance once we have a first beta to release to you! So please keep testing, and keep send patches our way: it's the_ raison d'être _of this community project!_

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone, and **here's to a great year of contribution and community**!
