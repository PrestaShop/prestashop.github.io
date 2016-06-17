---
layout: post
title:  "PrestaShop Core Weekly - Weeks 21-22-23"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-06-14 09:10:11
author: xavierborderie
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the previous three weeks, from Monday 23rd of May to Sunday 12th of June 2016.


## Milestones

We released [PrestaShop 1.7 Beta 1](http://build.prestashop.com/news/prestashop-1-7-beta-1-open-for-feedback/)!<br/>
We also released [PrestaShop 1.6.1.6](http://build.prestashop.com/news/prestashop-1616-maintenance-release/)!<br/>
We published an article about the [module development changes in PrestasShop 1.7](http://build.prestashop.com/news/module-development-changes-in-17/)!<br/>
We also published the [PrestaShop Translator Guide](http://build.prestashop.com/howtos/translation/new-translator-guide-available-now/) AND the [PrestaShop Contributor Guide](http://build.prestashop.com/howtos/misc/contribute-to-prestashop/)!<br/>
We even told [how the new default theme was designed](http://build.prestashop.com/news/Designing-the-new-PrestaShop-default-theme/)!<br/>
The days are just PACKED! :)

Want to help things go faster? There are several ways: 

 * [Test the latest alpha version](http://build.prestashop.com/news/here-comes-prestashop-1-7-alpha-4/) (or better, test [the current development version, straight from GitHub](https://github.com/PrestaShop/PrestaShop));
 * [Report issues on the Forge](http://forge.prestashop.com/secure/CreateIssue!default.jspa?selectedProjectId=11322&issuetype=1) (or [confirm issues that are already listed](http://forge.prestashop.com/browse/BOOM-738?jql=project%20%3D%20BOOM%20AND%20created%3E%3D-1w%20ORDER%20BY%20created%20DESC) - use the search engine!); 
 * Fix issues by [submitting a pull request](https://github.com/PrestaShop/PrestaShop/pulls) (or confirm that a submitted pull request does indeed fix the presented issue); 
 * Help improve the [1.7 Theme Development doc](https://github.com/PrestaShop/docs) (yes, it is very sparse at the moment).

You can find an up-to-date thread about the 1.7 development [in the forum](https://www.prestashop.com/forums/topic/480580-want-to-know-more-about-17/).<br/>
The 1.7 Project FAQ is always available here: [http://build.prestashop.com/news/prestashop-1-7-faq/](http://build.prestashop.com/news/prestashop-1-7-faq/).

Do you live near Paris? Do you want to come test-drive the design of PS 1.7? [Let us know!](http://build.prestashop.com/news/call-for-user-testing-volunteers/)


## Code changes in branch develop (for version 1.7.0.0)

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!


### Text changes

 * [3840](https://github.com/PrestaShop/PrestaShop/pull/3840): Update wording invoice.tax-tab.tpl. Thank you @nobodaddy!
 * [4921](https://github.com/PrestaShop/PrestaShop/pull/4921): "Manufacturer" becomes "Brand", by @alexeven.
 * [5610](https://github.com/PrestaShop/PrestaShop/pull/5610): Update tabs name about modules in the back office menu, by @maximebiloe.
 * [5652](https://github.com/PrestaShop/PrestaShop/pull/5652): product page - wording updates, part 1, by @alexeven.
 * [5684](https://github.com/PrestaShop/PrestaShop/pull/5684): Misspelling correction of filemanager return. Thank you @pirkoa!
 * [5685](https://github.com/PrestaShop/PrestaShop/pull/5685): Fix a typo in the filemanager. Thank you @crugnac!
 * [5686](https://github.com/PrestaShop/PrestaShop/pull/5686): Misspelling correction. Thank you @crugnac!
 * [5689](https://github.com/PrestaShop/PrestaShop/pull/5689): Wording update of the product page, by @alexeven.
 

### Front office (including the default theme, named "Classic", based upon the [Starter Theme](https://github.com/PrestaShop/PrestaShop/tree/develop/themes/classic))

 * [6909](https://github.com/PrestaShop/PrestaShop/pull/6909): Allow bots to crawl module images. Thank you @gskema!
 * [5427](https://github.com/PrestaShop/PrestaShop/pull/5427): Fix alignment in order history. Thank you @shepherdv8!
 * [5514](https://github.com/PrestaShop/PrestaShop/pull/5514): Fix duplicate IDs in Link List module. Thank you @fojtcz!
 * [5550](https://github.com/PrestaShop/PrestaShop/pull/5550): Reorganize subtotals for cart, checkout summary and order summary, by @julienbourdeau.
 * [5598](https://github.com/PrestaShop/PrestaShop/pull/5598): Display unit price in detailed cart product list, by @julienbourdeau.
 * [5608](https://github.com/PrestaShop/PrestaShop/pull/5608): Prevent a guest customer to access to auth required pages, by @maximebiloe.
 * [5621](https://github.com/PrestaShop/PrestaShop/pull/5621): Improve performances, by @jocel1.
 * [5622](https://github.com/PrestaShop/PrestaShop/pull/5622): Uniformize labels for price, discounts, unit prices for product page, by @julienbourdeau.
 * [5624](https://github.com/PrestaShop/PrestaShop/pull/5624): Fix undefined var on maintenance tpl, by @Quetzacoalt91.
 * [5625](https://github.com/PrestaShop/PrestaShop/pull/5625): Fix blockreassurance and promo code layout, by @maximebiloe.
 * [5630](https://github.com/PrestaShop/PrestaShop/pull/5630): Fix an undefined index on cart and order confirmation layout, by @maximebiloe.
 * [5631](https://github.com/PrestaShop/PrestaShop/pull/5631): Checkout: Always display customer for guest, by @julienbourdeau.
 * [5638](https://github.com/PrestaShop/PrestaShop/pull/5638): Fix cart summary display when selecting another carrier, by @julienbourdeau.
 * [5641](https://github.com/PrestaShop/PrestaShop/pull/5641): Display correct tab content for product page on dom update, by @julienbourdeau.
 * [5644](https://github.com/PrestaShop/PrestaShop/pull/5644): Display customized products as distinct products in shopping cart, by @maximebiloe.
 * [5657](https://github.com/PrestaShop/PrestaShop/pull/5657): Improve customization display in order confirmation email. Thank you unlocomqx!
 * [5659](https://github.com/PrestaShop/PrestaShop/pull/5659): Fix prices layout in add to cart modal, by @maximebiloe.
 * [5661](https://github.com/PrestaShop/PrestaShop/pull/5661): Fixes taxes labels for front, by @julienbourdeau.
 * [5662](https://github.com/PrestaShop/PrestaShop/pull/5662): Fix content loaded in the modal when several links, by @julienbourdeau.
 * [5667](https://github.com/PrestaShop/PrestaShop/pull/5667): Update product page elements when click on continue shopping, by @mickaelandrieu.
 * [5668](https://github.com/PrestaShop/PrestaShop/pull/5668): Add a new hook on cart product line, by @maximebiloe.
 * [5669](https://github.com/PrestaShop/PrestaShop/pull/5669): Do not allow to pass configuration values even with \_PS\_MODE\_DEV\_, by @rgaillard.
 * [5677](https://github.com/PrestaShop/PrestaShop/pull/5677): Fix bugs on thumbnails of product page, by @maximebiloe.
 * [5693](https://github.com/PrestaShop/PrestaShop/pull/5693): Fix undefined variable in Order detail. Thank you @fojtcz!
 * [5699](https://github.com/PrestaShop/PrestaShop/pull/5699): Refactor order confirmation controller, by @julienbourdeau.
 * [5702](https://github.com/PrestaShop/PrestaShop/pull/5702): Use a textarea for conditions not a CMS page anymore, by @maximebiloe.
 * [5707](https://github.com/PrestaShop/PrestaShop/pull/5707): Add domain to translatable strings in Classic template files, by @julienbourdeau.
 * [5708](https://github.com/PrestaShop/PrestaShop/pull/5708): Fix birthdate placeholder format inconsistency. Thank you @unlocomqx!
 * [5713](https://github.com/PrestaShop/PrestaShop/pull/5713): Add domains for all front controllers, by @julienbourdeau.
 * [5717](https://github.com/PrestaShop/PrestaShop/pull/5717): Add domains to all FO strings in src, by @julienbourdeau.


### Back office

 * [4446](https://github.com/PrestaShop/PrestaShop/pull/4446): Allow basic HTML attributes in editor. Thank you @mcdado!
 * [5283](https://github.com/PrestaShop/PrestaShop/pull/5283): Added "Sort by access date" on module page, by @tchauviere.
 * [5549](https://github.com/PrestaShop/PrestaShop/pull/5549): Introduced bulk edition on combinations, by @mickaelandrieu.
 * [5573](https://github.com/PrestaShop/PrestaShop/pull/5573): Introduced a default section for deprecated modules, by @mickaelandrieu.
 * [5584](https://github.com/PrestaShop/PrestaShop/pull/5584): Improved HelperOptions for textarea field. Thank you @kpodemski!
 * [5589](https://github.com/PrestaShop/PrestaShop/pull/5589): Fixed HTML errors on Product Page, by @mickaelandrieu.
 * [5605](https://github.com/PrestaShop/PrestaShop/pull/5605): Display attributes list in combinations tab of the product page, by @maximebiloe.
 * [5607](https://github.com/PrestaShop/PrestaShop/pull/5607): Redirect to new module controller, by @julienbourdeau.
 * [5611](https://github.com/PrestaShop/PrestaShop/pull/5611): Improve new header integration, by @nihco2.
 * [5612](https://github.com/PrestaShop/PrestaShop/pull/5612): Easier way to go to Maintenance page while shop is turned off. Thank you @kpodemski!
 * [5616](https://github.com/PrestaShop/PrestaShop/pull/5616): Fix combinations generation when using attributes list, by @maximebiloe.
 * [5618](https://github.com/PrestaShop/PrestaShop/pull/5618): Improve combinations list layout according to mockups, by @maximebiloe.
 * [5619](https://github.com/PrestaShop/PrestaShop/pull/5619): Fix unecessary AJAX call to notifications, by @maximebiloe.
 * [5623](https://github.com/PrestaShop/PrestaShop/pull/5623): Fix undefined JS on modules catalog, by @maximebiloe.
 * [5629](https://github.com/PrestaShop/PrestaShop/pull/5629): Compile all Webpack files, by @shudrum.
 * [5633](https://github.com/PrestaShop/PrestaShop/pull/5633): revert product update, by @mickaelandrieu.
 * [5634](https://github.com/PrestaShop/PrestaShop/pull/5634): fixed product deletion from catalog, by @mickaelandrieu.
 * [5635](https://github.com/PrestaShop/PrestaShop/pull/5635): Fix redirect issue when accessing to index.php in Ajax, by @maximebiloe.
 * [5637](https://github.com/PrestaShop/PrestaShop/pull/5637): Improve read more modal integration, by @nihco2.
 * [5639](https://github.com/PrestaShop/PrestaShop/pull/5639): Fix delete alert when switching from a combination to another, by @maximebiloe.
 * [5645](https://github.com/PrestaShop/PrestaShop/pull/5645): Made the final price dynamic according to impact on price in BO, by @mickaelandrieu.
 * [5647](https://github.com/PrestaShop/PrestaShop/pull/5647): Redirect old adminproducts url to new controller, by @julienbourdeau.
 * [5650](https://github.com/PrestaShop/PrestaShop/pull/5650): Fix product default category selection on Firefox, by @maximebiloe.
 * [5653](https://github.com/PrestaShop/PrestaShop/pull/5653): Display the public name and in the good language for attribute groups, by @maximebiloe.
 * [5660](https://github.com/PrestaShop/PrestaShop/pull/5660): Improve bulk actions design, by @nihco2.
 * [5663](https://github.com/PrestaShop/PrestaShop/pull/5663): Change ajax login URL to use Symfony functionnalities, by @quetzacoalt91.
 * [5665](https://github.com/PrestaShop/PrestaShop/pull/5665): Synchronized final price when we bulk edit the impact on price, by @mickaelandrieu.
 * [5673](https://github.com/PrestaShop/PrestaShop/pull/5673): Fix error on module actions, by @quetzacoalt91.
 * [5674](https://github.com/PrestaShop/PrestaShop/pull/5674): On new product category creation, create also the label in tree, by @mickaelandrieu.
 * [5678](https://github.com/PrestaShop/PrestaShop/pull/5678): Change sort by scoring order to desc in module list. Thank you @antho-girard!
 * [5688](https://github.com/PrestaShop/PrestaShop/pull/5688): Fix BO product search & autocompletion, by @quetzacoalt91.
 * [5709](https://github.com/PrestaShop/PrestaShop/pull/5709): Fix a smarty warning when opening the Carrier Wizard. Thank you @prestamodule!
 * [5720](https://github.com/PrestaShop/PrestaShop/pull/5720): Update some strings with html tags inside to make them easier to translate, by @maximebiloe.
 * [5721](https://github.com/PrestaShop/PrestaShop/pull/5721): Fixed bug while detect mcrypt lib in AdminPerformanceController. Thank you @alexdee2007!
 * [5725](https://github.com/PrestaShop/PrestaShop/pull/5725): Improved the product combinations bulk form, by @mickaelandrieu.

 
### Core

 * [5037](https://github.com/PrestaShop/PrestaShop/pull/5037): Add return in Attribute::cleanPositions. Thank you @pifyz!
 * [5151](https://github.com/PrestaShop/PrestaShop/pull/5151): Remove unused parameter "$specific_where" in "ObjectModelCore::updateMultishopTable". Thank you @pifyz!
 * [5241](https://github.com/PrestaShop/PrestaShop/pull/5241): Fix fatal error on classes/stock/StockAvailable.php, by @xborderie.
 * [5406](https://github.com/PrestaShop/PrestaShop/pull/5406): Update TCPDF to version 6.2.12. Thank you @firstred!
 * [5512](https://github.com/PrestaShop/PrestaShop/pull/5512): Remove unnecessary ternary operator. Thank you @shagshag!
 * [5557](https://github.com/PrestaShop/PrestaShop/pull/5557): Fixed bug for a clear cache, by @shine-neko.
 * [5577](https://github.com/PrestaShop/PrestaShop/pull/5577): Make id_product available in checkout confirmation e-mail, by @paddl.
 * [5579](https://github.com/PrestaShop/PrestaShop/pull/5579): Optimized Cart class, by @mickaelandrieu.
 * [5580](https://github.com/PrestaShop/PrestaShop/pull/5580): improve global performances, by @jocel1.
 * [5620](https://github.com/PrestaShop/PrestaShop/pull/5620): Minor fixes on composer and translations, by @quetzacoalt91.
 * [5627](https://github.com/PrestaShop/PrestaShop/pull/5627): Allow uppercase extensions to be uploaded. Thank you @unlocomqx!
 * [5628](https://github.com/PrestaShop/PrestaShop/pull/5628): Remove duplicate VENDOR_DIR constant. Thank you @panploenes!
 * [5642](https://github.com/PrestaShop/PrestaShop/pull/5642): Cache result Cart::getTotalShippingCost() according to parameters, by @julienbourdeau.
 * [5646](https://github.com/PrestaShop/PrestaShop/pull/5646): Get module errors on failure and fix upload popup, by @quetzacoalt91.
 * [5649](https://github.com/PrestaShop/PrestaShop/pull/5649): Add documentation to resize function params. Thank you @e-gaulue!
 * [5651](https://github.com/PrestaShop/PrestaShop/pull/5651): Do not write parameters.yml in bootstrap.php and other minor fixes, by @quetzacoalt91.
 * [5654](https://github.com/PrestaShop/PrestaShop/pull/5654): Bypass zip format if no format required, by @julienbourdeau.
 * [5656](https://github.com/PrestaShop/PrestaShop/pull/5656): Fixed the attribute group deletion, by @mickaelandrieu.
 * [5666](https://github.com/PrestaShop/PrestaShop/pull/5666): Travis - Move APT commands in addons, add cache and use another version of MySQL, by @quetzacoalt91.
 * [5675](https://github.com/PrestaShop/PrestaShop/pull/5675): Take into account the unit price impact set by combination, by @maximebiloe.
 * [5676](https://github.com/PrestaShop/PrestaShop/pull/5676): Cleanup smarty configuration files, by @julienbourdeau.
 * [5679](https://github.com/PrestaShop/PrestaShop/pull/5679): Synchronize Classic, Core and StarterTheme to make it testable, by @maximebiloe.
 * [5711](https://github.com/PrestaShop/PrestaShop/pull/5711): Introduce Symfony translation, by @jtabet.
 * [5712](https://github.com/PrestaShop/PrestaShop/pull/5712): Fixed bad behavior on category creation from Product page, by @mickaelandrieu.
 
 
### Installer

 * [5600](https://github.com/PrestaShop/PrestaShop/pull/5600): Prevents access to the database if you have not installed shop, by @shine-neko.
 * [5613](https://github.com/PrestaShop/PrestaShop/pull/5613): Fix composer install with no-dev option, by @quetzacoalt91.
 * [5632](https://github.com/PrestaShop/PrestaShop/pull/5632): avoid fetch() on null query result, by @mickaelandrieu.
 * [5636](https://github.com/PrestaShop/PrestaShop/pull/5636): Production & development cache conflicts fixed, by @shudrum.
 * [5655](https://github.com/PrestaShop/PrestaShop/pull/5655): Installer cache generation fixed, by @shudrum.
 * [5716](https://github.com/PrestaShop/PrestaShop/pull/5716): Replace bad check of PDO extension, by @rgaillard.
 

### Tests

 * [5696](https://github.com/PrestaShop/PrestaShop/pull/5696): Composer requires friendsofphp/php-cs-fixer, by @quetzacoalt91.

 
### Webservice
 
 * [5265](https://github.com/PrestaShop/PrestaShop/pull/5265): Translate supplier order states. Thank you @firstred!
 

See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+merged%3A2016-05-23..2016-06-12+is%3Aclosed+sort%3Acreated-asc+base%3Adevelop+).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @alexdee2007, @antho-girard, @crugnac, @e-gaulue, @firstred, @fojtcz, @gskema, @kpodemski, @mcdado, @nobodaddy, @panploenes, @pirkoa, @prestamodule, @shagshag, @shepherdv8, and @unlocomqx! Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
