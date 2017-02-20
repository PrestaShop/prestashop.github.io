---
layout: post
title:  "PrestaShop Core Weekly - Weeks 34 of 2016"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-09-02 09:10:11
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the previous two weeks, from Monday 22nd to Sunday 28th of August 2016.


## General messages

Happy September! 

Have you noticed? [We released RC0 of v1.7.0.0](http://build.prestashop.com/news/prestashop-1-7-RC0/)! Time to dust those theme-creating and module-updating skills of yours, in order to give us feedback about your professionnal use and needs for PrestaShop!

Are your modules 1.7-ready? Have a tried to create a 1.7 theme? [Check the current tech doc](https://github.com/PrestaShop/docs)!

You can find an up-to-date thread about the 1.7 development [in the forum](https://www.prestashop.com/forums/topic/480580-want-to-know-more-about-17/).<br/>
The 1.7 Project FAQ is always available here: [http://build.prestashop.com/news/prestashop-1-7-faq/](http://build.prestashop.com/news/prestashop-1-7-faq/).


## Code changes in branch develop (for version 1.7.0.0)

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!



### Text changes

 * [6089](https://github.com/PrestaShop/PrestaShop/pull/6089): Fix some more wording, by @alexeven.
 * [6090](https://github.com/PrestaShop/PrestaShop/pull/6090): Change installer string variable for consistency, by @alexeven.
 * [6093](https://github.com/PrestaShop/PrestaShop/pull/6093): Update and fix front strings for harmonization, by @alexeven.

 
### Front office (including the default theme, named "Classic", based upon the [Starter Theme](https://github.com/PrestaShop/PrestaShop/tree/develop/themes/classic))

 * [6044](https://github.com/PrestaShop/PrestaShop/pull/6044): Made footer compatible with legal compliance module, by @thierrymarianne.
 * [6045](https://github.com/PrestaShop/PrestaShop/pull/6045): Accept newsletter conditions not necessary anymore, by @maximebiloe.
 * [6053](https://github.com/PrestaShop/PrestaShop/pull/6053): Abide by minimum buying quantity, by @thierrymarianne.
 * [6060](https://github.com/PrestaShop/PrestaShop/pull/6060): Fixed catalog mode behavior, by @maximebiloe.
 * [6063](https://github.com/PrestaShop/PrestaShop/pull/6063): Update theme layout to handle columns, by @quetzacoalt91.
 * [6066](https://github.com/PrestaShop/PrestaShop/pull/6066): Prevent display of payment return if empty, by @thierrymarianne.
 * [6067](https://github.com/PrestaShop/PrestaShop/pull/6067): Restored Smarty legacy functions for pdf, by @julienbourdeau.
 * [6069](https://github.com/PrestaShop/PrestaShop/pull/6069): Add clear all active product filters link, by @julienbourdeau.
 * [6072](https://github.com/PrestaShop/PrestaShop/pull/6072): Add meta.index to $page var, by @julienbourdeau.
 * [6077](https://github.com/PrestaShop/PrestaShop/pull/6077): Move product column hooks into columns, by @maximebiloe.
 * [6081](https://github.com/PrestaShop/PrestaShop/pull/6081): Responsive layout - Catalog / Checkout, by @ishcherbakov.
 * [6088](https://github.com/PrestaShop/PrestaShop/pull/6088): Add hooks for legal compliance in cart shipping subtotal, by @quetzacoalt91.
 * [6091](https://github.com/PrestaShop/PrestaShop/pull/6091): Add missing JS file, by @ishcherbakov.
 

### Back office

 * [5955](https://github.com/PrestaShop/PrestaShop/pull/5955): Added option to change the Carrier on existing order. Thank you @kpodemski!
 * [6023](https://github.com/PrestaShop/PrestaShop/pull/6023): Fix Addons catalog display & call the 1.7 themes API, by @maximebiloe.
 * [6024](https://github.com/PrestaShop/PrestaShop/pull/6024): Improved Product features sub form, by @mickaelandrieu.
 * [6031](https://github.com/PrestaShop/PrestaShop/pull/6031): Fixed link to modules in product catalog, by @thierrymarianne.
 * [6046](https://github.com/PrestaShop/PrestaShop/pull/6046): Fix category thumbnail feature, by @maximebiloe.
 * [6047](https://github.com/PrestaShop/PrestaShop/pull/6047): Disable SmartyDev in BO, by @julienbourdeau.
 * [6051](https://github.com/PrestaShop/PrestaShop/pull/6051): Fix wrong call to trans method in AdminOrder, by @julienbourdeau.
 * [6057](https://github.com/PrestaShop/PrestaShop/pull/6057): Fix search tag exception, by @thierrymarianne.
 * [6062](https://github.com/PrestaShop/PrestaShop/pull/6062): Updated translation function in AdminStatsTabController, by @mickaelandrieu.
 * [6070](https://github.com/PrestaShop/PrestaShop/pull/6070): Refactor product page breakpoints, by @maximebiloe.
 * [6071](https://github.com/PrestaShop/PrestaShop/pull/6071): Be able to extract theme translations in Back Office, by @mickaelandrieu.
 * [6086](https://github.com/PrestaShop/PrestaShop/pull/6086): Changed query word because "virtual" is reserved in mysql 5.7+, by @dave-lp.
 * [6087](https://github.com/PrestaShop/PrestaShop/pull/6087): Fix HTML syntax in modal not trusted. Thank you @rolige!
 
 
### Core

 * [5924](https://github.com/PrestaShop/PrestaShop/pull/5924): Added possibility to override minimalPurchase price using new Hook. Thank you @kpodemski!
 * [5992](https://github.com/PrestaShop/PrestaShop/pull/5992): Added PHPDocs to Attribute class. Thank you @firstred!
 * [6028](https://github.com/PrestaShop/PrestaShop/pull/6028): Updated length of cookie key and IV, by @thierrymarianne.
 * [6037](https://github.com/PrestaShop/PrestaShop/pull/6037): Remove deprecated hooks from 1.5, by @julienbourdeau.
 * [6048](https://github.com/PrestaShop/PrestaShop/pull/6048): Improved Configuration and ModuleManagerBuilder performances, by @jocel1.
 * [6055](https://github.com/PrestaShop/PrestaShop/pull/6055): Retrieve translations from themes, by @mickaelandrieu.
 * [5058](https://github.com/PrestaShop/PrestaShop/pull/5058): Dump content by renaming temporary file, by @thierrymarianne.
 * [6059](https://github.com/PrestaShop/PrestaShop/pull/6059): Only send real file to copy() on CLDR install. Thank you @prestamodule!
 * [6068](https://github.com/PrestaShop/PrestaShop/pull/6068): Fixed address form update on country change, by @thierrymarianne.
 * [6079](https://github.com/PrestaShop/PrestaShop/pull/6079): Remove self to make OrderInvoice overridable. Thank you @davideapvd!
 * [6092](https://github.com/PrestaShop/PrestaShop/pull/6092): Call address form templates without extension, by @julienbourdeau.
 

### Installer

 * [6082](https://github.com/PrestaShop/PrestaShop/pull/6082): Install necessary lang pack, by @julienbourdeau.

 
See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20is%3Aclosed%20merged%3A2016-08-22..2016-08-28%20sort%3Acreated-asc%20base%3Adevelop).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @davideapvd, @firstred, @kpodemski, and @prestamodule!
Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/browse/BOOM/?selectedTab=com.atlassian.jira.jira-projects-plugin:summary-panel)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
