---
layout: post
title:  "PrestaShop Core Weekly - Weeks 15-16-17"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-05-04 14:42:13
author: xavierborderie
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last few weeks, from Monday 11th of April to Sunday 1st of May 2016.


## Milestones

Since the last Core Weekly Report, we released [alpha 4 of PrestaShop 1.7](http://build.prestashop.com/news/here-comes-prestashop-1-7-alpha-4/). Give us your feedback!

We also recently released a maintenance version for the 1.6 branch, [version 1.6.1.5](http://build.prestashop.com/news/prestashop-1615-maintenance-release/).

Do you live near Paris? Do you want to come test-drive the design of PS 1.7? [Let us know!](http://build.prestashop.com/news/call-for-user-testing-volunteers/)

The team is hard at work on PrestaShop 1.7, the next major version of the most complete e-commerce software solution there is. <br/>
You can find an up-to-date thread about it [in the forum](https://www.prestashop.com/forums/topic/480580-want-to-know-more-about-17/).<br/>
The 1.7 Project FAQ is always available here: [http://build.prestashop.com/news/prestashop-1-7-faq/](http://build.prestashop.com/news/prestashop-1-7-faq/).

Do you want to encourage us? **[Give us a star on GitHub](https://github.com/PrestaShop/PrestaShop)**! :)

<i>And, indeed, she said "yes"! (I did too) :)</i>


## Code changes in branch 1.6.1.x

Here the pull-requests that were merged on the ['1.6.1.x' branch](https://github.com/PrestaShop/PrestaShop/tree/1.6.1.x) since the last Core Weekly Report!


### Tests

 * [5440](https://github.com/PrestaShop/PrestaShop/pull/5440): Fix PHP 7 tests. Thank you @firstred!
 
 
## Code changes in branch develop (for version 1.7.0.0)

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!
 

### Front office (including the default theme, named "Classic" for now, based upon the [Starter Theme](https://github.com/PrestaShop/PrestaShop/tree/develop/themes/classic))

 * [5210](https://github.com/PrestaShop/PrestaShop/pull/5210): Empty cart template redesign, by @nicoh2.
 * [5245](https://github.com/PrestaShop/PrestaShop/pull/5245): Fix translation in OrderPresenter. Thank you @fojtcz!
 * [5305](https://github.com/PrestaShop/PrestaShop/pull/5305): Fix invoice address not being asked in checkout, by @jtabet.
 * [5312](https://github.com/PrestaShop/PrestaShop/pull/5312): Checkout - displays more details, by @Shine-neko.
 * [5335](https://github.com/PrestaShop/PrestaShop/pull/5335): Improve page cms style, by @nicoh2.
 * [5346](https://github.com/PrestaShop/PrestaShop/pull/5346): Add display after carrier list hook. Thank you @firstred!
 * [5351](https://github.com/PrestaShop/PrestaShop/pull/5351): Fix Prices drop, Best sales & New products display, by @maximebiloe.
 * [5361](https://github.com/PrestaShop/PrestaShop/pull/5361): Display product image in confirmation order, by @Shine-neko.
 * [5362](https://github.com/PrestaShop/PrestaShop/pull/5362): Fix hook location for AEU, by @maximebiloe.
 * [5363](https://github.com/PrestaShop/PrestaShop/pull/5363): admin header - Add missing components, by @nicoh2.
 * [5365](https://github.com/PrestaShop/PrestaShop/pull/5365): Add anchor to email subscription, by @julienbourdeau.
 * [5366](https://github.com/PrestaShop/PrestaShop/pull/5366): Extract product add to cart for ajax refresh, by @maximebiloe.
 * [5372](https://github.com/PrestaShop/PrestaShop/pull/5372): Fix hook called twice, by @maximebiloe.
 * [5387](https://github.com/PrestaShop/PrestaShop/pull/5387): update required file list for theme, by @julienbourdeau.
 * [5394](https://github.com/PrestaShop/PrestaShop/pull/5394): ps_legalcompliance, Added new hook for tax-label in listing, by @paeddl.
 * [5399](https://github.com/PrestaShop/PrestaShop/pull/5399): Fix mixed up language in form feedbacks, by @maximebiloe.
 * [5402](https://github.com/PrestaShop/PrestaShop/pull/5402): Revert change on "display_tax_label" forced to true, by @tchauviere.
 * [5432](https://github.com/PrestaShop/PrestaShop/pull/5432): Fix products total amount in order details, by @Quetzacoalt91.
 * [5433](https://github.com/PrestaShop/PrestaShop/pull/5433): Added new hooks for AEU, by @paeddl.
 * [5445](https://github.com/PrestaShop/PrestaShop/pull/5445): ps_legalcompliance layout, by @paeddl.
 * [5447](https://github.com/PrestaShop/PrestaShop/pull/5447): Classic: Remove slashed for self-closing tags, by @julienbourdeau.
 * [5450](https://github.com/PrestaShop/PrestaShop/pull/5450): Categories menu integration, by @nicoh2.
 * [5451](https://github.com/PrestaShop/PrestaShop/pull/5451): added delete buttons for brand & related products options, by @mickaelandrieu.
 * [5461](https://github.com/PrestaShop/PrestaShop/pull/5461): Fix DOM not closed, by @maximebiloe.
 * [5464](https://github.com/PrestaShop/PrestaShop/pull/5464): Clean up form validation, by @julienbourdeau.
 * [5466](https://github.com/PrestaShop/PrestaShop/pull/5466): Fix amount format in order confirmation, by @maximebiloe.
 * [5468](https://github.com/PrestaShop/PrestaShop/pull/5468): Fix some warnings on search result, by @maximebiloe.
 * [5474](https://github.com/PrestaShop/PrestaShop/pull/5474): Product Image Cover and Layer Hover. Thank you @ShepherdV8!
 * [5485](https://github.com/PrestaShop/PrestaShop/pull/5485): CSS-class when showing tax-label; global Template-Var, by @paeddl.
 * [5488](https://github.com/PrestaShop/PrestaShop/pull/5488): Improved some webpack config, by @julienbourdeau.
 * [5489](https://github.com/PrestaShop/PrestaShop/pull/5489): Fix error on Best sales page. Thank you @fojtcz!
 * [5490](https://github.com/PrestaShop/PrestaShop/pull/5490): Fix variable name in product-prices.tpl. Thank you @fojtcz!
 * [5506](https://github.com/PrestaShop/PrestaShop/pull/5506): Fix some element attributes. Thank you @fojtcz!


### Back office

 * [5220](https://github.com/PrestaShop/PrestaShop/pull/5220): update link preview in js when product change publish, by @cocoweb94.
 * [5255](https://github.com/PrestaShop/PrestaShop/pull/5255): Module Page - Improved Ajax Loading on catalog, by @tchauviere.
 * [5263](https://github.com/PrestaShop/PrestaShop/pull/5263): Fix some tabs names, by @Shudrum.
 * [5276](https://github.com/PrestaShop/PrestaShop/pull/5276): module.js fix an issue on reset category filter, by @tchauviere.
 * [5324](https://github.com/PrestaShop/PrestaShop/pull/5324): Fix module sort by name, by @maximebiloe.
 * [5350](https://github.com/PrestaShop/PrestaShop/pull/5350): Fix module card when spinner displayed, by @Quetzacoalt91.
 * [5354](https://github.com/PrestaShop/PrestaShop/pull/5354): improvement on adding ip on maintenance, by @maximebiloe.
 * [5357](https://github.com/PrestaShop/PrestaShop/pull/5357): Disallow robots. Thank you @firstred!
 * [5370](https://github.com/PrestaShop/PrestaShop/pull/5370): Wording update for module part, by @maximebiloe.
 * [5371](https://github.com/PrestaShop/PrestaShop/pull/5371): Module page enhance list view display mode. Thank you @ShepherdV8!
 * [5375](https://github.com/PrestaShop/PrestaShop/pull/5375): Fix theme preview, by @maximebiloe.
 * [5380](https://github.com/PrestaShop/PrestaShop/pull/5380): fix module installation by zip on complex modules, by @mickaelandrieu.
 * [5391](https://github.com/PrestaShop/PrestaShop/pull/5391): tab bar redesign, by @nicoh2.
 * [5401](https://github.com/PrestaShop/PrestaShop/pull/5401): added category default selection on category tree, by @mickaelandrieu.
 * [5405](https://github.com/PrestaShop/PrestaShop/pull/5405): Add scoring on the module cards in the catalog, by @Quetzacoalt91.
 * [5420](https://github.com/PrestaShop/PrestaShop/pull/5420): TinyMCE improvements on style and loading perfs, by @tchauviere.
 * [5423](https://github.com/PrestaShop/PrestaShop/pull/5423): Improve product page header, by @nicoh2.
 * [5424](https://github.com/PrestaShop/PrestaShop/pull/5424): Add tooltips to admin product page, by @julienbourdeau.
 * [5426](https://github.com/PrestaShop/PrestaShop/pull/5426): Change placeholder search module page, by @julienbourdeau.
 * [5436](https://github.com/PrestaShop/PrestaShop/pull/5436): Update product page layout in the BO, by @maximebiloe.
 * [5437](https://github.com/PrestaShop/PrestaShop/pull/5437): product-header - Change placeholder text, by @julienbourdeau.
 * [5438](https://github.com/PrestaShop/PrestaShop/pull/5438): add a product category on the fly, by @mickaelandrieu.
 * [5446](https://github.com/PrestaShop/PrestaShop/pull/5446): Update "Exit to addons" module card, by @Quetzacoalt91.
 * [5448](https://github.com/PrestaShop/PrestaShop/pull/5448): product-header - Fix tooltip width, by @nicoh2.
 * [5452](https://github.com/PrestaShop/PrestaShop/pull/5452): Small fixes related to the design of the module page, by @Quetzacoalt91.
 * [5459](https://github.com/PrestaShop/PrestaShop/pull/5459): Add ids on 'Add a brand' and 'Add a related product' buttons. Thank you @mgui95!
 * [5463](https://github.com/PrestaShop/PrestaShop/pull/5463): Add UI-kit on dropdowns in modules page, by @Quetzacoalt91.
 * [5475](https://github.com/PrestaShop/PrestaShop/pull/5475): Fix theme preview. Thank you @fojtcz!
 * [5479](https://github.com/PrestaShop/PrestaShop/pull/5479): added missing delete confirmation poppin on product page form, by @mickaelandrieu.

 
### Core

 * [5106](https://github.com/PrestaShop/PrestaShop/pull/5106): Improve configuration load & get performances, by @jocel1.
 * [5233](https://github.com/PrestaShop/PrestaShop/pull/5233): Update SwiftMailer. Thank you @firstred!
 * [5319](https://github.com/PrestaShop/PrestaShop/pull/5319): Bring back "enable / disable on mobile" action, by @Quetzacoalt91.
 * [5325](https://github.com/PrestaShop/PrestaShop/pull/5325): Fix shipping tax when proportionate is enabled in AEU, by @maximebiloe.
 * [5343](https://github.com/PrestaShop/PrestaShop/pull/5343): Toggle birthdate field with one click. Thank you @firstred!
 * [5358](https://github.com/PrestaShop/PrestaShop/pull/5358): remove useless ";" after a try-catch. Thank you @PifyZ!
 * [5368](https://github.com/PrestaShop/PrestaShop/pull/5368): Add some perfs in the module catalog / repository, by @Quetzacoalt91.
 * [5376](https://github.com/PrestaShop/PrestaShop/pull/5376): Force POST method for payment options, by @maximebiloe.
 * [5381](https://github.com/PrestaShop/PrestaShop/pull/5381): Introduce dump function, by @Shine-neko.
 * [5393](https://github.com/PrestaShop/PrestaShop/pull/5393): Fix modules sent to twig, by @Quetzacoalt91.
 * [5395](https://github.com/PrestaShop/PrestaShop/pull/5395): Fix filters on installed modules, by @Quetzacoalt91.
 * [5397](https://github.com/PrestaShop/PrestaShop/pull/5397): Move require of module class to handle more potential issues, by @Quetzacoalt91.
 * [5403](https://github.com/PrestaShop/PrestaShop/pull/5403): Add logger on module class checks, by @Quetzacoalt91.
 * [5413](https://github.com/PrestaShop/PrestaShop/pull/5413): ModuleRepository must keep in cache a broken module too, by @Quetzacoalt91.
 * [5415](https://github.com/PrestaShop/PrestaShop/pull/5415): Module page tooltips and theme modules, by @Quetzacoalt91.
 * [5431](https://github.com/PrestaShop/PrestaShop/pull/5431): Fix Smarty SQL Cache. Thank you @firstred!
 * [5435](https://github.com/PrestaShop/PrestaShop/pull/5435): hide available date if 0000-00-00, by @julienbourdeau.
 * [5453](https://github.com/PrestaShop/PrestaShop/pull/5453): Upgrade render syntax, by @Shine-neko.
 * [5465](https://github.com/PrestaShop/PrestaShop/pull/5465): Remove old PS1.4 admin files, by @julienbourdeau.
 * [5470](https://github.com/PrestaShop/PrestaShop/pull/5470): remove functions.php. Thank you @fojtcz!
 * [5478](https://github.com/PrestaShop/PrestaShop/pull/5478): Re added global getPath() admin function into Tools and display it as deprecated to avoid crashes, by @tchauviere.
 * [5491](https://github.com/PrestaShop/PrestaShop/pull/5491): Adding missing method to make method HookExtension::renderHooksArray work. Thank you @FabienSerny!
 * [5494](https://github.com/PrestaShop/PrestaShop/pull/5494): Remove useless Addons filter on modules list. Thank you @FabienSerny!
 * [5502](https://github.com/PrestaShop/PrestaShop/pull/5502): Improve DisplayOverrideTemplate hook to get more details, by @maximebiloe.
 

### Tests

 * [5297](https://github.com/PrestaShop/PrestaShop/pull/5297): speed up php parse error checker & precompute travis composer.lock, by @jocel1.
 * [5386](https://github.com/PrestaShop/PrestaShop/pull/5386): upgrade travis to trusty to fix google chrome version issue, by @jocel1.
 * [5388](https://github.com/PrestaShop/PrestaShop/pull/5388): Make tests less dependants from addons website, by @mickaelandrieu.
 * [5396](https://github.com/PrestaShop/PrestaShop/pull/5396): Improved the tests architecture, by @mickaelandrieu.
 * [5439](https://github.com/PrestaShop/PrestaShop/pull/5439): Enable PHP 7 tests (failure = allowed). Thank you @firstred!
 * [5441](https://github.com/PrestaShop/PrestaShop/pull/5441): Fix PHP 7 unit tests. Thank you @firstred!
 * [5477](https://github.com/PrestaShop/PrestaShop/pull/5477): Fix travis composer, by @Quetzacoalt91.
 * [5481](https://github.com/PrestaShop/PrestaShop/pull/5481): Separate two tests to avoid timeout, by @Quetzacoalt91.

 
### Installer

 * [5267](https://github.com/PrestaShop/PrestaShop/pull/5267): regenerate parameters.yml even if mode_dev is on, by @julienbourdeau.
 * [5353](https://github.com/PrestaShop/PrestaShop/pull/5353): Display tax in shopping cart by default, by @maximebiloe.
 * [5400](https://github.com/PrestaShop/PrestaShop/pull/5400): fix default tax display value, by @jocel1.
 
 
### Localization

 * [5266](https://github.com/PrestaShop/PrestaShop/pull/5266): (Dutch) Update tabs. Thank you @firstred!
 
 

See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Amerged+merged%3A2016-03-21..2016-04-10+base%3Adevelop+).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @FabienSerny, @firstred, @fojtcz, @mgui95, @PifyZ, and @ShepherdV8! Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
