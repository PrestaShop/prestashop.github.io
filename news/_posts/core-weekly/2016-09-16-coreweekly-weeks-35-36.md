---
layout: post
title:  "PrestaShop Core Weekly - Weeks 35-36"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-09-16 09:10:11
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the previous two weeks, from Monday 29th of August to Sunday 11th of September 2016.


## General messages

We released version 1.6.1.7 in early September. It's a recommended upgrade for any 1.6 user, and a **must-update** for 1.6.1.6 users, since it fixes a possibly nasty issue with vouchers. Please, 1.6.1.6 users: upgrade now, and help your friends upgrade!

[Download 1.6.1.7 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

As for 1.7, as you can see in the code changes for the develop branch, there has been A LOT of changes to 1.7 since RC0: many fixes, several improvements, and some cool new features as well. For instance, did you see that PrestaShop now features a child-theme system? [Read the early doc](https://github.com/PrestaShop/docs/blob/1e42706321e583623de60db3d6c314052d81415a/themes/smarty/parent-child-feature.rst), and try it out!

Are your modules 1.7-ready? Have a tried to create a 1.7 theme? [Check the current tech doc](https://github.com/PrestaShop/docs)!

You can find an up-to-date thread about the 1.7 development [in the forum](https://www.prestashop.com/forums/topic/480580-want-to-know-more-about-17/).<br/>
The 1.7 Project FAQ is always available here: [http://build.prestashop.com/news/prestashop-1-7-faq/](http://build.prestashop.com/news/prestashop-1-7-faq/).


## Code changes in 'develop' branch (for version 1.7.0.0)

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!
 
 
### Front office (including the default theme, named "Classic", based upon the [Starter Theme](https://github.com/PrestaShop/PrestaShop/tree/develop/themes/classic))

 * [6064](https://github.com/PrestaShop/PrestaShop/pull/6064): Removed tools and link from classic theme templates, by @julienbourdeau.
 * [6065](https://github.com/PrestaShop/PrestaShop/pull/6065): Added combination's specific references to product's details page, by @fatmabouchekoua.
 * [6083](https://github.com/PrestaShop/PrestaShop/pull/6083): Applied naming conventions to cart events, by @thierrymarianne.
 * [6095](https://github.com/PrestaShop/PrestaShop/pull/6095): Fix B2B mode, by @maximebiloe.
 * [6111](https://github.com/PrestaShop/PrestaShop/pull/6111): Applied naming conventions to checkout events, by @thierrymarianne.
 * [6116](https://github.com/PrestaShop/PrestaShop/pull/6116): Applied naming conventions to listing events, by @thierrymarianne.
 * [6119](https://github.com/PrestaShop/PrestaShop/pull/6119): Fix a translation variable name and clear filter button layout, by @maximebiloe.
 * [6122](https://github.com/PrestaShop/PrestaShop/pull/6122): Update theme requirements, by @julienbourdeau.
 * [6123](https://github.com/PrestaShop/PrestaShop/pull/6123): Add before and after <body> hooks, by @julienbourdeau.
 * [6129](https://github.com/PrestaShop/PrestaShop/pull/6129): Fix carrier column size, by @maximebiloe.
 * [6132](https://github.com/PrestaShop/PrestaShop/pull/6132): Fix module translations without domain but present in Catalog, by @maximebiloe.
 * [6138](https://github.com/PrestaShop/PrestaShop/pull/6138): Fix wrong selector for conditions and payment alert, by @maximebiloe.
 * [6141](https://github.com/PrestaShop/PrestaShop/pull/6141): Fix product flags display, by @nihco2.
 * [6153](https://github.com/PrestaShop/PrestaShop/pull/6153): Fix wrong pictures zoomed when combinations in classic, by @nihco2.
 * [6160](https://github.com/PrestaShop/PrestaShop/pull/6160): Add manufacturers and suppliers list to sitemap. Thank you @martinfojtik!
 * [6162](https://github.com/PrestaShop/PrestaShop/pull/6162): Enabled loading of active theme translations, by @mickaelandrieu.
 * [6165](https://github.com/PrestaShop/PrestaShop/pull/6165): Fixed product quantity updates in shopping cart, by @thierrymarianne.
 * [6168](https://github.com/PrestaShop/PrestaShop/pull/6168): Added test for shopping cart events, by @thierrymarianne.
 * [6169](https://github.com/PrestaShop/PrestaShop/pull/6169): Fixed returns for product customizations, by @thierrymarianne.
 * [6177](https://github.com/PrestaShop/PrestaShop/pull/6177): gift price is now displayed on cart summary if any, by @mickaelandrieu.
 * [6186](https://github.com/PrestaShop/PrestaShop/pull/6186): Added tests for shopping cart events, by @thierrymarianne.
 * [6202](https://github.com/PrestaShop/PrestaShop/pull/6202): Display gift wrapping on Order confirmation, by @mickaelandrieu.
 * [6213](https://github.com/PrestaShop/PrestaShop/pull/6213): Fixed shopping cart summary, by @thierrymarianne.
 * [6256](https://github.com/PrestaShop/PrestaShop/pull/6256): Fixed credit slip PDF for customized product, by @thierrymarianne.
 

### Back office

 * [6074](https://github.com/PrestaShop/PrestaShop/pull/6074): Enabled translations for Back Office domain, by @mickaelandrieu.
 * [6098](https://github.com/PrestaShop/PrestaShop/pull/6098): Fixed colorpicker image folder. Thank you @unlocomqx!
 * [6110](https://github.com/PrestaShop/PrestaShop/pull/6110): Use "on" instead of live in colorpicker plugin. Thank you @unlocomqx!
 * [6112](https://github.com/PrestaShop/PrestaShop/pull/6112): Fix save product button on laptop, by @nihco2.
 * [6114](https://github.com/PrestaShop/PrestaShop/pull/6114): Wording harmonization for 'cannot' spelling, by @AlexEven.
 * [6121](https://github.com/PrestaShop/PrestaShop/pull/6121): Added missing translations, by @thierrymarianne.
 * [6130](https://github.com/PrestaShop/PrestaShop/pull/6130): Synced translations forms, by @thierrymarianne.
 * [6131](https://github.com/PrestaShop/PrestaShop/pull/6131): Updated list of accepted import files, by @xborderie.
 * [6134](https://github.com/PrestaShop/PrestaShop/pull/6134): Fix services and buttons on module page, by @quetzacoalt91.
 * [6137](https://github.com/PrestaShop/PrestaShop/pull/6137): Fix theme installation bug when it has a depended module. Thank you @dzianis-yurevich!
 * [6140](https://github.com/PrestaShop/PrestaShop/pull/6140): Remove zip file after serving it when exporting translations, by @mickaelandrieu.
 * [6142](https://github.com/PrestaShop/PrestaShop/pull/6142): Fix issue with product cover update, by @quetzacoalt91.
 * [6143](https://github.com/PrestaShop/PrestaShop/pull/6143): Sanitized product list filter parameters, by @thierrymarianne.
 * [6144](https://github.com/PrestaShop/PrestaShop/pull/6144): Introduced front office translation provider, by @mickaelandrieu.
 * [6145](https://github.com/PrestaShop/PrestaShop/pull/6145): Added virtual product destruction on product type change, by @thierrymarianne.
 * [6146](https://github.com/PrestaShop/PrestaShop/pull/6146): Use array key in case of missing product type in module catalog, by @quetzacoalt91.
 * [6147](https://github.com/PrestaShop/PrestaShop/pull/6147): Fix undefined trans() in AdminOutstanding, by @maximebiloe.
 * [6152](https://github.com/PrestaShop/PrestaShop/pull/6152): Added sync feature on theme translations, by @mickaelandrieu.
 * [6154](https://github.com/PrestaShop/PrestaShop/pull/6154): Fixed modules sorting by access date, by @thierrymarianne.
 * [6155](https://github.com/PrestaShop/PrestaShop/pull/6155): Removed access deletion from tab deletion, by @thierrymarianne.
 * [6163](https://github.com/PrestaShop/PrestaShop/pull/6163): Fixed session start for legacy use, by @thierrymarianne.
 * [6166](https://github.com/PrestaShop/PrestaShop/pull/6166): Translation files should be overriden by database when using "export theme" action, by @mickaelandrieu.
 * [6173](https://github.com/PrestaShop/PrestaShop/pull/6173): Fix children feature length, by @maximebiloe.
 * [6176](https://github.com/PrestaShop/PrestaShop/pull/6176): Restored missing tree templates, by @thierrymarianne.
 * [6178](https://github.com/PrestaShop/PrestaShop/pull/6178): Fixed delete a shop (multistore), by @aleeks.
 * [6183](https://github.com/PrestaShop/PrestaShop/pull/6183): Applied prestashop UI kit for feature removal, by @thierrymarianne.
 * [6196](https://github.com/PrestaShop/PrestaShop/pull/6196): Fixed popover combination, by @aleeks.
 * [6200](https://github.com/PrestaShop/PrestaShop/pull/6200): Fixed validation of price fields, by @thierrymarianne.
 * [6201](https://github.com/PrestaShop/PrestaShop/pull/6201): Removed the language selector on the Product page if there is only one language, by @antoin-m.
 * [6203](https://github.com/PrestaShop/PrestaShop/pull/6203): Removed registration process type option, by @mickaelandrieu.
 * [6208](https://github.com/PrestaShop/PrestaShop/pull/6208): Combination feature desactivation, by @aleeks.
 * [6220](https://github.com/PrestaShop/PrestaShop/pull/6220): Removed availability date from product page, by @thierrymarianne.
 * [6221](https://github.com/PrestaShop/PrestaShop/pull/6221): Fixed debug mode (removed SensioGeneratorBundle), by @mickaelandrieu.
 * [6222](https://github.com/PrestaShop/PrestaShop/pull/6222): Tooltips are now cleared when moving to another tab, by @mickaelandrieu.
 * [6223](https://github.com/PrestaShop/PrestaShop/pull/6223): Fixed rule followed to show product prices, by @thierrymarianne.
 * [6250](https://github.com/PrestaShop/PrestaShop/pull/6250): Removed theme and admin menu orientation fields, by @thierrymarianne.
 * [6258](https://github.com/PrestaShop/PrestaShop/pull/6258): Fixed invoice generation, by @thierrymarianne.


### Core

 * [6094](https://github.com/PrestaShop/PrestaShop/pull/6094): Document CartRule class + cleanup. Thank you @firstred!
 * [6097](https://github.com/PrestaShop/PrestaShop/pull/6097): Fix wrong domains, by @julienbourdeau.
 * [6099](https://github.com/PrestaShop/PrestaShop/pull/6099): Remove PclZip library. Thank you @firstred!
 * [6100](https://github.com/PrestaShop/PrestaShop/pull/6100): Move mobile detect to composer. Thank you @firstred!
 * [6101](https://github.com/PrestaShop/PrestaShop/pull/6101): Remove contrib folder. Thank you @firstred!
 * [6103](https://github.com/PrestaShop/PrestaShop/pull/6103): Move http_build_url to composer. Thank you @firstred!
 * [6104](https://github.com/PrestaShop/PrestaShop/pull/6104): Add PHPUnit bridge. Thank you @firstred!
 * [6105](https://github.com/PrestaShop/PrestaShop/pull/6105): Move minifier to composer. Thank you @firstred!
 * [6106](https://github.com/PrestaShop/PrestaShop/pull/6106): Remove unused pear xml parser. Thank you @firstred!
 * [6017](https://github.com/PrestaShop/PrestaShop/pull/6017): Update and move Archive_Tar. Thank you @firstred!
 * [6108](https://github.com/PrestaShop/PrestaShop/pull/6108): Always update SwiftMailer to latest PATCH version. Thank you @firstred!
 * [6019](https://github.com/PrestaShop/PrestaShop/pull/6019): Upgrade to GeoIP2 City. Thank you @firstred!
 * [6136](https://github.com/PrestaShop/PrestaShop/pull/6136): Flatten default translations catalogue, by @mickaelandrieu.
 * [6151](https://github.com/PrestaShop/PrestaShop/pull/6151): Introduced generic Theme provider, by @mickaelandrieu.
 * [6156](https://github.com/PrestaShop/PrestaShop/pull/6156): Update all_languages.json file for missing countries, by @maximebiloe.
 * [6157](https://github.com/PrestaShop/PrestaShop/pull/6157): Fixed Translations Factories + tests, by @mickaelandrieu.
 * [6170](https://github.com/PrestaShop/PrestaShop/pull/6170): Improved translations factory error handling, by @mickaelandrieu.
 * [6174](https://github.com/PrestaShop/PrestaShop/pull/6174): Fix the invalid favicon uploading, by @antoin-m.
 * [6180](https://github.com/PrestaShop/PrestaShop/pull/6180): Fix credit split pdf generation, by @antoin-m.
 * [6195](https://github.com/PrestaShop/PrestaShop/pull/6195): Fixed random_compat dependency to avoid CSPRNG exception, by @mickaelandrieu.
 * [6209](https://github.com/PrestaShop/PrestaShop/pull/6209): Document Category class + cleanup. Thank you @firstred!
 * [6212](https://github.com/PrestaShop/PrestaShop/pull/6212): Fix a missing point in SQL request, by @maximebiloe.
 * [6217](https://github.com/PrestaShop/PrestaShop/pull/6217): Update Attachment class to ps standards. Thank you @firstred!
 * [6218](https://github.com/PrestaShop/PrestaShop/pull/6218): Update Alias class to ps standards. Thank you @firstred!
 

### Installer

 * [6113](https://github.com/PrestaShop/PrestaShop/pull/6113): New post code format for Argentina (LNNNNLLL). Thank you @therampagerado!
 * [6115](https://github.com/PrestaShop/PrestaShop/pull/6115): Remove check of PEAR.php existance, by @julienbourdeau.
 * [6117](https://github.com/PrestaShop/PrestaShop/pull/6117): Fix country list for wrong iso code, by @julienbourdeau.
 * [6120](https://github.com/PrestaShop/PrestaShop/pull/6120): Fix infinite redirect installer and translation cache issue, by @maximebiloe.
 * [6133](https://github.com/PrestaShop/PrestaShop/pull/6133): Remove unnecessary call to api during installation, by @maximebiloe.
 * [6158](https://github.com/PrestaShop/PrestaShop/pull/6158): Fix parenthesis in trans() call. Thank you @prestamodule!
 * [6164](https://github.com/PrestaShop/PrestaShop/pull/6164): Fixed installation (undefined $this->shop), by @mickaelandrieu.
 * [6187](https://github.com/PrestaShop/PrestaShop/pull/6187): Handle insufficients requirements and fix language download without database, by @mickaelandrieu.
 * [6191](https://github.com/PrestaShop/PrestaShop/pull/6191): Fixed quick_access tab & titles, by @aleeks.
 * [6197](https://github.com/PrestaShop/PrestaShop/pull/6197): Handle error if installation starts with PHP < 5.4, by @mickaelandrieu.

 
## Code changes in '1.6.1.x' branch (for 1.6 patch versions)

### Front office

 * [5135](https://github.com/PrestaShop/PrestaShop/pull/5135): Fix rouding error in ProductController. Thank you @erouvier29!
 * [5859](https://github.com/PrestaShop/PrestaShop/pull/5859): Add a new hook on cart product line, by @maximebiloe.
 * [5957](https://github.com/PrestaShop/PrestaShop/pull/5957): Solved problem with a category thumbnails. Thank you @prestamodule!
 * [5978](https://github.com/PrestaShop/PrestaShop/pull/5978): Prevent customer to view all codes. Thank you @matthieume!
 
 
### Back office

 * [5571](https://github.com/PrestaShop/PrestaShop/pull/5571): Solved problem with non-unserialized filters datas. Thank you @kpodemski!
 * [5604](https://github.com/PrestaShop/PrestaShop/pull/5604): Fix CSV import on PHP 7, by @quetzacoalt91.
 
 
### Core

 * [5575](https://github.com/PrestaShop/PrestaShop/pull/5575): Fix a case where $context->smarty could be undefined. Thank you @prestamodule!
 * [5746](https://github.com/PrestaShop/PrestaShop/pull/5746): Fixed user agent check in Media.php. Thank you @firstred!
 * [5752](https://github.com/PrestaShop/PrestaShop/pull/5752): Fix warning when duplicating products. Thank you @mcdado!
 * [5816](https://github.com/PrestaShop/PrestaShop/pull/5816): Fixed cart rule removal with gift product. Thank you @davidef!
 * [5834](https://github.com/PrestaShop/PrestaShop/pull/5834): Fix cover update by WebService. Thank you @kpodemski!
 * [5935](https://github.com/PrestaShop/PrestaShop/pull/5935): change visibility of installControllers() method. Thank you @prestamodule!
 * [6118](https://github.com/PrestaShop/PrestaShop/pull/6118): Fix bad discount computation when multiple tax rates involved. Thank you @yopai!
 
 
### Installer

 * [5546](https://github.com/PrestaShop/PrestaShop/pull/5546): Keep CMS HTML code when upgrading. Thank you @jd440!
 * [5592](https://github.com/PrestaShop/PrestaShop/pull/5592): Fix invalid xml-tags (missing characters) in meta.xml. Thank you @perfecticus!
 * [5706](https://github.com/PrestaShop/PrestaShop/pull/5706): New post code standard for Argentina LNNNNLLL. Thank you @therampagerado!


 
See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20merged%3A2016-08-29..2016-09-11%20is%3Aclosed%20sort%3Acreated-asc%20).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @davidef, @dzianis-yurevich, @erouvier29, @firstred, @kpodemski, @martinfojtik, @matthieume, @mcdado, @perfecticus, @prestamodule, @therampagerado, @unlocomqx, and @yopai! Special thanks to @firstred for the 46 PRs he created this last two weeks! :)
Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/browse/BOOM/?selectedTab=com.atlassian.jira.jira-projects-plugin:summary-panel)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
