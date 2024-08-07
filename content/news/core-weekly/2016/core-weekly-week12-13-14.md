---
layout: post
aliases: ["/news/core-weekly-week12-13-14"]
title:  "PrestaShop Core Weekly - Weeks 12-13-14 of 2016"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-04-18 17:37:41
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last few weeks, from Monday 21st to Sunday 10th of April 2016.


## Milestones

Sorry for the delay! We were busy, well, you know, releasing the [first public alpha version of PrestaShop 1.7](http://build.prestashop.com/news/prestashop-1-7-alpha-3-is-here/), and a maintenance release for the 1.6 branch, [version 1.6.1.5](http://build.prestashop.com/news/prestashop-1615-maintenance-release/).

Do you live near Paris? Are you willing to give us a couple of hours in order to test-drive the design of PS 1.7? [Let us know!](http://build.prestashop.com/news/call-for-user-testing-volunteers/)

The team is hard at work on PrestaShop 1.7, the next major version of the most complete e-commerce software solution there is. <br/>
You can find an up-to-date thread about it [in the forum](https://www.prestashop.com/forums/topic/480580-want-to-know-more-about-17/).<br/>
The 1.7 Project FAQ is always available here: [http://build.prestashop.com/news/prestashop-1-7-faq/](http://build.prestashop.com/news/prestashop-1-7-faq/).

_Please note that finishing the [planned projects for 1.7](http://build.prestashop.com/news/meet-prestashop-team-prestashop-1-7/) and delivering a quality beta version soon is the top priority for the PrestaShop Core developers at the moment. Merging community pull requests has therefore slowed down until then, but will be back_ with a vengeance _once we have a first beta to release to you! So please keep testing, and keep sending patches our way: it's the_ raison d'être _of this community project!_

Do you want to encourage us? **[Give us a star on GitHub](https://github.com/PrestaShop/PrestaShop)**! :)

<i>And with that, I'm taking two weeks off to celebrate my wedding! Cheers, good people! Don't break the Internet while I'm away :)<br/>
(yes, that means the next Core Weekly will also be 2-3 weeks late -- unless @AlexEven does something about it ;) )</i>


## Code changes in branch 1.6.1.x

Here the pull-requests that were merged on the ['1.6.1.x' branch](https://github.com/PrestaShop/PrestaShop/tree/1.6.1.x) since the last Core Weekly Report!


### Front office (including the default theme)

 * [4438](https://github.com/PrestaShop/PrestaShop/pull/4438): fixed bug on payment module, check if defined $order object, by @kelu95.
 * [4444](https://github.com/PrestaShop/PrestaShop/pull/4444): Split css for IE9, header : add css for IE9 < only, by @kelu95.
 * [4501](https://github.com/PrestaShop/PrestaShop/pull/4501): Stores search didn't work with keyboard validation. Thank you @gwarnants!
 * [4589](https://github.com/PrestaShop/PrestaShop/pull/4589): Removed template logic that is not needed. Thank you @Dh42!
 * [4593](https://github.com/PrestaShop/PrestaShop/pull/4593): bankwire / correct module name for translation. Thank you @prestamodule!
 * [4735](https://github.com/PrestaShop/PrestaShop/pull/4735): Fix JavaScript mistake in blocklayered.js. Thank you @macdado!
 * [4741](https://github.com/PrestaShop/PrestaShop/pull/4741): Fix combination price calculation with impact and reduction. Thank you @studiokiwik!
 * [5064](https://github.com/PrestaShop/PrestaShop/pull/5064): Fix warning if combinations are disabled, by @maximebiloe.
 * [5193](https://github.com/PrestaShop/PrestaShop/pull/5193): Fix specific price, by @nihco2.
 * [5221](https://github.com/PrestaShop/PrestaShop/pull/5221): fix parse error in AuthController.php. Thank you @kpodemski!
 * [5291](https://github.com/PrestaShop/PrestaShop/pull/5291): Fix incorrect cart rules list in case of country restriction. Thank you @erouvier29!

 
### Back office

 * [3856](https://github.com/PrestaShop/PrestaShop/pull/3856): Incorrect shipping taxes in order slips. Thank you @erouvier29!
 * [4441](https://github.com/PrestaShop/PrestaShop/pull/4441): add error message on upload theme bigger than post_max_size, by @kelu95.
 * [4767](https://github.com/PrestaShop/PrestaShop/pull/4767): Change only active state on bulk status change. Thank you @erouvier29!
 * [5124](https://github.com/PrestaShop/PrestaShop/pull/5124): Fix the display of the listing filters on the toolbar, by @rGaillard.


### Core

 * [4598](https://github.com/PrestaShop/PrestaShop/pull/4598): return false if feature is not active in aliasExists(). Thank you @prestamodule!
 * [4599](https://github.com/PrestaShop/PrestaShop/pull/4599): indicate which method to use for deprecated methods. Thank you @prestamodule!
 * [4717](https://github.com/PrestaShop/PrestaShop/pull/4717): Usage of CCB mode. Thank you @SDF-of-BC!
 * [4991](https://github.com/PrestaShop/PrestaShop/pull/4991): Fixed double preg_quote() in Dispatcher.php. Thank you @ZiZuu-store!
 * [5214](https://github.com/PrestaShop/PrestaShop/pull/5214): Update swift mailer. Thank you @firstred!
 * [5330](https://github.com/PrestaShop/PrestaShop/pull/5330): fix ccc for admin, by @julienbourdeau.


### PDF

 * [4584](https://github.com/PrestaShop/PrestaShop/pull/4584): (re) added field note in invoice, by @mickaelandrieu.
 * [4586](https://github.com/PrestaShop/PrestaShop/pull/4586): (re) added shipping box in invoice, by @mickaelandrieu.
 * [4595](https://github.com/PrestaShop/PrestaShop/pull/4595): updated b2b template, by @mickaelandrieu.
 * [4608](https://github.com/PrestaShop/PrestaShop/pull/4608): Improved PDF pagination on invoices, by @mickaelandrieu.
 * [4621](https://github.com/PrestaShop/PrestaShop/pull/4621): update constraints on Addresses display, by @mickaelandrieu.
 * [5313](https://github.com/PrestaShop/PrestaShop/pull/5313): Use address from order for invoice. Thank you @Nobodaddy!
 
 
### Installer

 * [5030](https://github.com/PrestaShop/PrestaShop/pull/5030): Update italian installer. Thank you @mcdado!


### Localization

 * [4867](https://github.com/PrestaShop/PrestaShop/pull/4867): Update Hong Kong localization pack, by @AlexEven.
 * [5000](https://github.com/PrestaShop/PrestaShop/pull/5000): Improve Dutch meta info, by @AlexEven.
 * [5150](https://github.com/PrestaShop/PrestaShop/pull/5150): Adding Vietnamese installer, by @AlexEven & @dungvn1187.
 * [5222](https://github.com/PrestaShop/PrestaShop/pull/5222): Update Polish installer, by @AlexEven.
 
 
## Code changes in branch develop (for version 1.7.0.0)

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!
 

### Front office (including the default theme, named "Classic" for now, based upon the [Starter Theme](https://github.com/PrestaShop/PrestaShop/tree/develop/themes/classic))

 * [5210](https://github.com/PrestaShop/PrestaShop/pull/5210): empty cart template redesign, by @nihco2.
 * [5224](https://github.com/PrestaShop/PrestaShop/pull/5224): move some templates, by @julienbourdeau.
 * [5231](https://github.com/PrestaShop/PrestaShop/pull/5231): client notifications redesign, by @nihco2.
 * [5236](https://github.com/PrestaShop/PrestaShop/pull/5236): Add some data-* attributes to the <article>. Thank you @prestamodule!
 * [5238](https://github.com/PrestaShop/PrestaShop/pull/5238): Fix address form, by @nihco2.
 * [5239](https://github.com/PrestaShop/PrestaShop/pull/5239): Add quickview feature to Classic, by @julienbourdeau.
 * [5245](https://github.com/PrestaShop/PrestaShop/pull/5245): Fix translation in OrderPresenter. Thank you @fojtcz!
 * [5282](https://github.com/PrestaShop/PrestaShop/pull/5282): Access address, by @Shine-neko.
 * [5294](https://github.com/PrestaShop/PrestaShop/pull/5294): Contact - fields displayed twice, by @Shine-neko.
 * [5295](https://github.com/PrestaShop/PrestaShop/pull/5295): Cancel search in modules, by @Shine-neko.
 * [5317](https://github.com/PrestaShop/PrestaShop/pull/5317): Fix errors in quick-view, by @Shine-neko.
 * [5331](https://github.com/PrestaShop/PrestaShop/pull/5331): Fix popin display after add to cart, by @nihco2.

 
### Back office

 * [5206](https://github.com/PrestaShop/PrestaShop/pull/5206): introduced a reusable way to display a right sidebar, by @mickaelandrieu.
 * [5220](https://github.com/PrestaShop/PrestaShop/pull/5220): update link preview in js when product change publish, by @cocoweb94.
 * [5225](https://github.com/PrestaShop/PrestaShop/pull/5225): display condition should be false by default, by @mickaelandrieu.
 * [5229](https://github.com/PrestaShop/PrestaShop/pull/5229): use module list according to customer/employee language, by @mickaelandrieu.
 * [5234](https://github.com/PrestaShop/PrestaShop/pull/5234): Added 'force deletion' option on module uninstall, by @mickaelandrieu.
 * [5246](https://github.com/PrestaShop/PrestaShop/pull/5246): Set empty list on exception in module catalog, by @Quetzacoalt91.
 * [5249](https://github.com/PrestaShop/PrestaShop/pull/5249): Add module filter depending on their status on manage tab, by @tchauviere.
 * [5255](https://github.com/PrestaShop/PrestaShop/pull/5255): Module Page - Improved Ajax Loading on catalog, by @tchauviere.
 * [5261](https://github.com/PrestaShop/PrestaShop/pull/5261): Fix issue with add() on Tab class, altering id_parent, by @tchauviere.
 * [5262](https://github.com/PrestaShop/PrestaShop/pull/5262): Fix wording on "Installed Module" module tab, by @tchauviere.
 * [5263](https://github.com/PrestaShop/PrestaShop/pull/5263): Fix some tabs names, by @Shudrum.
 * [5264](https://github.com/PrestaShop/PrestaShop/pull/5264): Fix employee drop down z-index, by @Shudrum.
 * [5268](https://github.com/PrestaShop/PrestaShop/pull/5268): added a tag management of product categories, by @mickaelandrieu.
 * [5269](https://github.com/PrestaShop/PrestaShop/pull/5269): Introduce new themes catalog page, by @mickaelandrieu.
 * [5275](https://github.com/PrestaShop/PrestaShop/pull/5275): Fix issue with FastCGI and duplicate header "content-type", by @tchauviere.
 * [5276](https://github.com/PrestaShop/PrestaShop/pull/5276): module.js fix an issue on reset category filter, by @tchauviere.
 * [5278](https://github.com/PrestaShop/PrestaShop/pull/5278): Fix some number formats on product page, by @Shudrum.
 * [5286](https://github.com/PrestaShop/PrestaShop/pull/5286): use material-icons for product status, by @Shine-neko.
 * [5287](https://github.com/PrestaShop/PrestaShop/pull/5287): add new ids for test, by @mgui95.
 * [5292](https://github.com/PrestaShop/PrestaShop/pull/5292): Themes / fix broken preview link. Thank you @prestamodule!
 * [5293](https://github.com/PrestaShop/PrestaShop/pull/5293): added a search input to select product categories, by @mickaelandrieu.
 * [5296](https://github.com/PrestaShop/PrestaShop/pull/5296): BO: open "My Shop" link on new page. Thank you @prestamodule!
 * [5298](https://github.com/PrestaShop/PrestaShop/pull/5298): Fixed notice Undefined index: medium, by @jtabet.
 * [5300](https://github.com/PrestaShop/PrestaShop/pull/5300): Don't escape modules names. Thank you @kpodemski!
 * [5303](https://github.com/PrestaShop/PrestaShop/pull/5303): Fixed controller class for the "Modules" tab, by @jtabet.
 * [5323](https://github.com/PrestaShop/PrestaShop/pull/5323): fixed bug on product categories tree, by @mickaelandrieu.

 
### Core

 * [5106](https://github.com/PrestaShop/PrestaShop/pull/5106): Improve configuration load & get performances, by @jocel1.
 * [5209](https://github.com/PrestaShop/PrestaShop/pull/5209): Minor fix on module actions in module page, by @Quetzacoalt91.
 * [5211](https://github.com/PrestaShop/PrestaShop/pull/5211): Update gitignore, by @julienbourdeau.
 * [5212](https://github.com/PrestaShop/PrestaShop/pull/5212): Display a warning when no payment method is available, by @maximebiloe.
 * [5226](https://github.com/PrestaShop/PrestaShop/pull/5226): hide deprecated msg for Module::isInstalled, by @julienbourdeau.
 * [5227](https://github.com/PrestaShop/PrestaShop/pull/5227): Take into account PS_CONDITIONS option, by @maximebiloe.
 * [5230](https://github.com/PrestaShop/PrestaShop/pull/5230): check for rights on Module installation, by @mickaelandrieu.
 * [5233](https://github.com/PrestaShop/PrestaShop/pull/5233): Update SwiftMailer. Thank you @firstred!
 * [5247](https://github.com/PrestaShop/PrestaShop/pull/5247): Fix issue on modules page when logged on addons, by @Quetzacoalt91.
 * [5248](https://github.com/PrestaShop/PrestaShop/pull/5248): Module manager tests, by @Quetzacoalt91.
 * [5253](https://github.com/PrestaShop/PrestaShop/pull/5253): Remove php -l execution on modules, by @Quetzacoalt91.
 * [5258](https://github.com/PrestaShop/PrestaShop/pull/5258): Remove APCu backwards compat dependency. Thank you @firstred!
 * [5279](https://github.com/PrestaShop/PrestaShop/pull/5279): Remove unused partner request on module page, by @Quetzacoalt91.
 * [5284](https://github.com/PrestaShop/PrestaShop/pull/5284): Fixed call static method on Product. Thank you @studiokiwik!
 * [5290](https://github.com/PrestaShop/PrestaShop/pull/5290): Fix webservice api/products/{id} for PHP7: Function name. Thank you @JoniJnm!
 * [5299](https://github.com/PrestaShop/PrestaShop/pull/5299): remove "autoExecuteWithNullValues" method. Thank you @prestamodule!
 * [5304](https://github.com/PrestaShop/PrestaShop/pull/5304): fix body_classes array shape, by @julienbourdeau.
 * [5320](https://github.com/PrestaShop/PrestaShop/pull/5320): Fix legacy context, by @maximebiloe.
 * [5326](https://github.com/PrestaShop/PrestaShop/pull/5326): Remove broken links to the SQL table modules_perfs, by @Quetzacoalt91.
 * [5329](https://github.com/PrestaShop/PrestaShop/pull/5329): Small fix on translation key that should'nt be capitalized, by @mickaelandrieu.
 * [5334](https://github.com/PrestaShop/PrestaShop/pull/5334): Remove useless files and some deprecated method, by @julienbourdeau.
 

### Tests

 * [5281](https://github.com/PrestaShop/PrestaShop/pull/5281): use chrome instead of firefox for tests, by @mickaelandrieu.
 * [5297](https://github.com/PrestaShop/PrestaShop/pull/5297): speed up php parse error checker & precompute travis composer.lock, by @jocel1.
 * [5322](https://github.com/PrestaShop/PrestaShop/pull/5322): Module manager tests, by @mickaelandrieu.
 * [5332](https://github.com/PrestaShop/PrestaShop/pull/5332): removed call from external api in integration tests, by @mickaelandrieu.

 
### Installer

 * [5244](https://github.com/PrestaShop/PrestaShop/pull/5244): Fix errors when no internet connection, by @Quetzacoalt91.
 * [5250](https://github.com/PrestaShop/PrestaShop/pull/5250): extract port number for parameter.yml, by @julienbourdeau.
 * [5267](https://github.com/PrestaShop/PrestaShop/pull/5267): regenerate parameters.yml even if mode_dev is on, by @julienbourdeau.
 * [5289](https://github.com/PrestaShop/PrestaShop/pull/5289): Fix creation directory on some servers, by @Shudrum.
 * [5336](https://github.com/PrestaShop/PrestaShop/pull/5336): Fix check about deleted folder, by @Quetzacoalt91.


### PDF

 * [5315](https://github.com/PrestaShop/PrestaShop/pull/5315): fix address histo in orderinvoice for 1.7, by @julienbourdeau.
 
 
### Localization

 * [5002](https://github.com/PrestaShop/PrestaShop/pull/5002): Better spelling of Dutch tab names. Thank you @firstred!
 * [5223](https://github.com/PrestaShop/PrestaShop/pull/5223): Fix date format in Catalan. Thank you jaumesala!
 * [5266](https://github.com/PrestaShop/PrestaShop/pull/5266): (Dutch) Update tabs. Thank you @firstred!
 
 

See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Amerged+merged%3A2016-03-21..2016-04-10+base%3Adevelop+).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report!! Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
