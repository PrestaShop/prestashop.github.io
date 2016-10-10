---
layout: post
title:  "PrestaShop 1.7.0.0 RC2: On the Right Track"
subtitle: "You'll love testing this new RC version!"
date:   2016-10-10 09:10:11
author: xavierborderie
icon: icon-leaf
tags:
 - 1.7
 - 1.7.0.0
 - version
 - rc
 - releases
 - development
---

Another step in the right direction towards a stable v1.7, this RC2 fixes a lot of stuff and enhances some more.

Again in this RC version, a good chunk of issues have been fixed and improved upon. It's getting better every day, thanks to our community! If you've been waiting to create a 1.7 theme or to upgrade your 1.6 modules, this is the right time!

[Test PrestaShop 1.7.0.0 RC2 now!](https://www.prestashop.com/en/developers-versions ){: .btn .btn-lg .btn-success}
{: .text-center}

Found an issue? [Create a Forge ticket](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1)!


* TOC
{:toc}

 
## What's new in RC2?

In the two weeks since RC1, here is what landed in the codebase:

 * A late bonus: the theme system now supports a Parent/Child theme feature! [Read all about it](http://developers.prestashop.com/themes/smarty/parent-child-feature.html) on the [newly launched](http://build.prestashop.com/news/developer-documentation/) [tech documentation site](http://developers.prestashop.com/).
 * Native front modules can now be translated, and the module translation page has been updated.
 * Several new hooks were added.
 * Many many bugfixes, especially security ones!

See at the bottom of this article for the full list.


## What's not in RC2?

Here’s what we still intend to implement before we go stable:

* Fully mobile-ready front office -- still a handful of pages to be done.

NOTE: The RC2 was built a few days ago in order to be tested, and a last-minute test on hosts showed that a recent PR from a contributor updated our usage of OpenSSL, making it nearly impossible to install RC2 on hosts which do not support a version of Open SSL lower than 1.0. This will be fixed in time for RC3.


## How far are we from a stable 1.7 release?

We know many of you are waiting for The Answer: when is 1.7.0.0 going to be released? We know it is important to all professionals: merchants waiting to use the new features, agencies waiting to start selling 1.7 projects, developers and designers waiting to sell their creations on the Addons marketplace...

Our answer remains the same: we want to release a quality 1.7. We cannot give you a precise release date because we need to iron out the issues that we are receiving feedback about -- and we've received a LOT of feedback since RC0. [Keep them coming](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1)!

The team is working on fixing those issues, and we need you to start testing it in order to make sure it is stable enough for everyone. We want the whole community to be proud of 1.7, and to be able to sincerely promote it to the whole community.

But let's talk figures. Since RC1:

 * 245 Forge tickets were closed as "fixed":
   * 8 were blocking tickets.
   * 37 were critical tickets.
   * 163 were major tickets.
 
What's left to be done, so far:

 * 61 Forge tickets, among which:
   * 2 blocking tickets.
   * 7 critical tickets.
   * 52 major tickets.

The numbers are fluctuating since they all depend on YOUR feedback and our own QA tests, but we're getting close!


## What needs to be tested by you?

In RC0 and RC1, we said that the major things to test are the new theme system (because once it's stable, we can't revamp everything) and the module system (any hook missing?). This still holds true in RC2: try your hand at creating a theme or at upgrade a 1.6 module for 1.7 (a simple one at first). Have a look at the current state of the [PrestaShop 1.7 tech documentation](https://github.com/PrestaShop/docs), and of course, give us feedback, either positive or constructive, on your findings!

Again, as a module developer, if your usual hooks are missing, or if you feel the Modules system lacks something essential, let us know! [Read the documentation](https://github.com/PrestaShop/docs) (and [the Build article](http://build.prestashop.com/news/module-development-changes-in-17/)) and give us your feedback!

And, of course, let us know of any broken behavior or regression, especially in the pages that were completely rewritten: the Product page, and the Modules page.


## So, what's next?

The whole team is busy fixing everything that doesn't look right, in order to have a quality 1.7 release.

There will be a RC3, and possibly other RC versions until PrestaShop 1.7.0.0 is deemed stable enough for you -- and YOU can voice your opinion!

[Use the Forge](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1) to tell us what is blocking you, or possibly broken.
[Use GitHub](https://github.com/PrestaShop/PrestaShop/pulls) to fix the issues you have noticed.
Use the comments on this post to congratulate everyone ;)

Please note that we are not looking for feedback on the overall technical or design aspects: Symfony 2, the new theming system, the back office design and other global aspects of 1.7 (such as the UX decisions on the Product page and the Modules page) are pretty much set in stone.
However, do let us know about bugs or possible improvements to all the above aspects!


## Thank you to our contributors!

This wouldn't be a community project without pull-requests from our contributors:

@antho-girard, @ecomm360, @firstred, @ishcherbakov, @jherry, @kermes, @kioob, @kpodemski, @m03g, @maidmaid, @martinfojtik, @mcdado, @n-wouda, @phpmadman, @pkshetlie, @pranid, @prestamodule, @prestanesia, @turtl3, and @zuzul. Thank you all!

This doesn't take into account all those who are active even without code changes: comments on PR, tickets on the Forge, translations on Crowdin, etc. PrestaShop is better thanks to you all!


## Full list of changes between RC1 and RC2

Here is the whole deal:

 - Back Office:
   - New features:
     - [6518](https://github.com/PrestaShop/PrestaShop/pull/6518): Natives front modules available in Back office translations (classic theme)
     - [6506](https://github.com/PrestaShop/PrestaShop/pull/6506): Display native modules in translations
     - [6355](https://github.com/PrestaShop/PrestaShop/pull/6355): Introduced "others" translation provider
   - Improvements:
     - [6550](https://github.com/PrestaShop/PrestaShop/pull/6550): Add translations domains to Shop Parameters
     - [6535](https://github.com/PrestaShop/PrestaShop/pull/6535): Wording update for BO
     - [6041](https://github.com/PrestaShop/PrestaShop/pull/6041): Speed up AdminStatsControllerCore::getVisits() time by 30%
     - [6458](https://github.com/PrestaShop/PrestaShop/pull/6458): Add translation domains to International menu's controllers
     - [6442](https://github.com/PrestaShop/PrestaShop/pull/6442): Introduced SSL verify config parameter
     - [6149](https://github.com/PrestaShop/PrestaShop/pull/6149): Modules translation page modified
     - [6448](https://github.com/PrestaShop/PrestaShop/pull/6448): Removed used vouchers from highlight panel
     - [6390](https://github.com/PrestaShop/PrestaShop/pull/6390): Display active zones first in Carrier wizard and flag inactive ones
     - [6389](https://github.com/PrestaShop/PrestaShop/pull/6389): Performance improvements on last visit
     - [6406](https://github.com/PrestaShop/PrestaShop/pull/6406): Use Symfony translator in controllers
     - [6338](https://github.com/PrestaShop/PrestaShop/pull/6338): Show/hide attach file form with button
     - [6381](https://github.com/PrestaShop/PrestaShop/pull/6381): Add translation domains to controllers - 6
     - [6341](https://github.com/PrestaShop/PrestaShop/pull/6341): Added tooltips for virtual product
     - [6359](https://github.com/PrestaShop/PrestaShop/pull/6359): Prevent injections in SQL queries of AccessCore class
     - [6236](https://github.com/PrestaShop/PrestaShop/pull/6236): Fix navigation menu behavior
     - [6263](https://github.com/PrestaShop/PrestaShop/pull/6263): Better visibility for reference
     - [6330](https://github.com/PrestaShop/PrestaShop/pull/6330): Sorted modules by popularity in descending order
     - [6251](https://github.com/PrestaShop/PrestaShop/pull/6251): Adding new plugins and options to tinymce
     - [6139](https://github.com/PrestaShop/PrestaShop/pull/6139): FR translation for top menu items
     - [6203](https://github.com/PrestaShop/PrestaShop/pull/6203): Removed registration process type option
     - [6220](https://github.com/PrestaShop/PrestaShop/pull/6220): Removed availability date from product page
     - [6183](https://github.com/PrestaShop/PrestaShop/pull/6183): Applied prestashop UI kit for feature removal
   - Bug fixes:
     - [6538](https://github.com/PrestaShop/PrestaShop/pull/6538): Payments/Carriers preferences applied also on non PS carriers
     - [6526](https://github.com/PrestaShop/PrestaShop/pull/6526): Fixed delete/update image just uploaded
     - [6519](https://github.com/PrestaShop/PrestaShop/pull/6519): Better multistore links on menu
     - [6545](https://github.com/PrestaShop/PrestaShop/pull/6545): TinyMCE resize
     - [6530](https://github.com/PrestaShop/PrestaShop/pull/6530): Fixed missing btn on new controllers
     - [6194](https://github.com/PrestaShop/PrestaShop/pull/6194): Bring back forgotten hooks
     - [6525](https://github.com/PrestaShop/PrestaShop/pull/6525): Added quick link to update category
     - [6513](https://github.com/PrestaShop/PrestaShop/pull/6513): Fix the ajax calls in the product page
     - [6499](https://github.com/PrestaShop/PrestaShop/pull/6499): Prevent smartyTranslate to escape HTML tags when they are needed
     - [6517](https://github.com/PrestaShop/PrestaShop/pull/6517): Removed backtick from order by clause
     - [6489](https://github.com/PrestaShop/PrestaShop/pull/6489): Fix the show/hide notification option
     - [6504](https://github.com/PrestaShop/PrestaShop/pull/6504): Fix category tree on product page
     - [6507](https://github.com/PrestaShop/PrestaShop/pull/6507): Fixed some duplicate form/content on Admin
     - [6498](https://github.com/PrestaShop/PrestaShop/pull/6498): Fix notifications
     - [6510](https://github.com/PrestaShop/PrestaShop/pull/6510): Fixed upload, update & delete product image
     - [6460](https://github.com/PrestaShop/PrestaShop/pull/6460): Fixed store addition
     - [6497](https://github.com/PrestaShop/PrestaShop/pull/6497): Remove extra space and improve some strings
     - [6485](https://github.com/PrestaShop/PrestaShop/pull/6485): Fix the notification center text & badge
     - [6496](https://github.com/PrestaShop/PrestaShop/pull/6496): Fix de popover font
     - [6462](https://github.com/PrestaShop/PrestaShop/pull/6462): Fix bug in translator domain
     - [6488](https://github.com/PrestaShop/PrestaShop/pull/6488): Fixed export product (data : image)
     - [6492](https://github.com/PrestaShop/PrestaShop/pull/6492): Add missing help text on "New product" button
     - [6487](https://github.com/PrestaShop/PrestaShop/pull/6487): Fix SQL export on catalog page
     - [6181](https://github.com/PrestaShop/PrestaShop/pull/6181): Hide quantity fields when stock management is disabled
     - [6463](https://github.com/PrestaShop/PrestaShop/pull/6463): Added missing maintenance / debug indicator
     - [6459](https://github.com/PrestaShop/PrestaShop/pull/6459): Sprintf must be an array not a string
     - [6455](https://github.com/PrestaShop/PrestaShop/pull/6455): Hide id_guest field if it is disabled in configuration
     - [6440](https://github.com/PrestaShop/PrestaShop/pull/6440): Fixed 'installed modules' tab if no shop selected (multishop)
     - [6447](https://github.com/PrestaShop/PrestaShop/pull/6447): Fixed import client by csv file
     - [6456](https://github.com/PrestaShop/PrestaShop/pull/6456): Allowed use of comma in tax included / excluded prices
     - [6453](https://github.com/PrestaShop/PrestaShop/pull/6453): Fixed back office translation in templates without domain set up
     - [6446](https://github.com/PrestaShop/PrestaShop/pull/6446): Fix bug in translate module page
     - [6430](https://github.com/PrestaShop/PrestaShop/pull/6430): Take order state unremovable flag into account
     - [6441](https://github.com/PrestaShop/PrestaShop/pull/6441): Fixed shop create page (translation problem and context initialization)
     - [6445](https://github.com/PrestaShop/PrestaShop/pull/6445): Fix translation domains
     - [6411](https://github.com/PrestaShop/PrestaShop/pull/6411): Fix the quick links
     - [6407](https://github.com/PrestaShop/PrestaShop/pull/6407): Supplier product form integration and js
     - [6439](https://github.com/PrestaShop/PrestaShop/pull/6439): Fixed selection of product category
     - [6427](https://github.com/PrestaShop/PrestaShop/pull/6427): Fix bug when adding new column in product catalog page
     - [6431](https://github.com/PrestaShop/PrestaShop/pull/6431): Fixed bug when no results with address and map does not exists
     - [6438](https://github.com/PrestaShop/PrestaShop/pull/6438): Fixed some logic to call All carriers
     - [6424](https://github.com/PrestaShop/PrestaShop/pull/6424): Fixed product attachment with name used previously
     - [6420](https://github.com/PrestaShop/PrestaShop/pull/6420): Fixed multistore links on header
     - [6417](https://github.com/PrestaShop/PrestaShop/pull/6417): Allowed negative impact on price
     - [6422](https://github.com/PrestaShop/PrestaShop/pull/6422): Fixed user locale listener
     - [6421](https://github.com/PrestaShop/PrestaShop/pull/6421): Fixed translations search engine
     - [6432](https://github.com/PrestaShop/PrestaShop/pull/6432): Display all carriers in Dashboard Configuration
     - [6425](https://github.com/PrestaShop/PrestaShop/pull/6425): Solved problem with non-unserialized filters data
     - [6416](https://github.com/PrestaShop/PrestaShop/pull/6416): Fix product save
     - [6414](https://github.com/PrestaShop/PrestaShop/pull/6414): Fix translation issue on the login page
     - [6409](https://github.com/PrestaShop/PrestaShop/pull/6409): Refresh product combination images
     - [6402](https://github.com/PrestaShop/PrestaShop/pull/6402): Fixed a little useless raw
     - [6403](https://github.com/PrestaShop/PrestaShop/pull/6403): Restored attribute generator
     - [6316](https://github.com/PrestaShop/PrestaShop/pull/6316): Fix the icons & their colors on the products list page
     - [6386](https://github.com/PrestaShop/PrestaShop/pull/6386): Refacto bulk action on product form (admin)
     - [6393](https://github.com/PrestaShop/PrestaShop/pull/6393): Fix focus issue on tinymce editor
     - [6398](https://github.com/PrestaShop/PrestaShop/pull/6398): Added reference to select products field
     - [6317](https://github.com/PrestaShop/PrestaShop/pull/6317): Fix some permission issues and remove unused controllers
     - [6392](https://github.com/PrestaShop/PrestaShop/pull/6392): Displayed modal on combinations deletion
     - [6348](https://github.com/PrestaShop/PrestaShop/pull/6348): Fix the 'View less/View all images' button on the product page
     - [6384](https://github.com/PrestaShop/PrestaShop/pull/6384): Remove "Configure" button when no config
     - [6383](https://github.com/PrestaShop/PrestaShop/pull/6383): Fixed bad translation definition for debug info
     - [6329](https://github.com/PrestaShop/PrestaShop/pull/6329): Fixed category filter
     - [6343](https://github.com/PrestaShop/PrestaShop/pull/6343): Removed deprecated performance options
     - [6366](https://github.com/PrestaShop/PrestaShop/pull/6366): Prevented SQL injections object model
     - [6345](https://github.com/PrestaShop/PrestaShop/pull/6345): Change .attr to .prop for categories js
     - [6353](https://github.com/PrestaShop/PrestaShop/pull/6353): Fixed translator selector behavior
     - [6368](https://github.com/PrestaShop/PrestaShop/pull/6368): Prevented SQL injections
     - [6351](https://github.com/PrestaShop/PrestaShop/pull/6351): Fix notice in debug mode on the dashboard (admin)
     - [6365](https://github.com/PrestaShop/PrestaShop/pull/6365): Prevented SQL injections
     - [6356](https://github.com/PrestaShop/PrestaShop/pull/6356): Right sidebar on product form (lint title, fix pagination display)
     - [6363](https://github.com/PrestaShop/PrestaShop/pull/6363): Prevent SQL injections in OrderInvoice class
     - [6171](https://github.com/PrestaShop/PrestaShop/pull/6171): Keep additionnal data in $_POST instead of dropping it
     - [6350](https://github.com/PrestaShop/PrestaShop/pull/6350): Show not active category in Filter by Category
     - [6342](https://github.com/PrestaShop/PrestaShop/pull/6342): Prevented upload of PHP script
     - [6340](https://github.com/PrestaShop/PrestaShop/pull/6340): Fixed display of payment methods active modules
     - [6322](https://github.com/PrestaShop/PrestaShop/pull/6322): Fix dashboard javascript error for some country (ex: Serbia or Indonesia)
     - [6315](https://github.com/PrestaShop/PrestaShop/pull/6315): Fix the auto scroll when an error appears on the page
     - [6321](https://github.com/PrestaShop/PrestaShop/pull/6321): Removed results after emptying search field
     - [6333](https://github.com/PrestaShop/PrestaShop/pull/6333): Fixed shops dropdown submenu
     - [6252](https://github.com/PrestaShop/PrestaShop/pull/6252): Fixed deletion of attribute
     - [6328](https://github.com/PrestaShop/PrestaShop/pull/6328): Native modules displayed in the right category
     - [6318](https://github.com/PrestaShop/PrestaShop/pull/6318): Fixed category tree
     - [6259](https://github.com/PrestaShop/PrestaShop/pull/6259): Fix module listing to upgrade
     - [6311](https://github.com/PrestaShop/PrestaShop/pull/6311): Allow product save after specific price creation
     - [6312](https://github.com/PrestaShop/PrestaShop/pull/6312): Fixed javascript issue on ie11 (ES6 unavailable)
     - [6198](https://github.com/PrestaShop/PrestaShop/pull/6198): Fixed translation in Shipping > Carrier
     - [6307](https://github.com/PrestaShop/PrestaShop/pull/6307): Fix product select type re-enabled when product has no combination
     - [6161](https://github.com/PrestaShop/PrestaShop/pull/6161): Product page integration bug fixes
     - [6258](https://github.com/PrestaShop/PrestaShop/pull/6258): Fixed invoice generation
     - [6250](https://github.com/PrestaShop/PrestaShop/pull/6250): Removed theme and admin menu orientation fields
     - [6200](https://github.com/PrestaShop/PrestaShop/pull/6200): Fixed validation of price fields
     - [6223](https://github.com/PrestaShop/PrestaShop/pull/6223): Fixed rule followed to show product prices
     - [6222](https://github.com/PrestaShop/PrestaShop/pull/6222): Tooltips are now cleared when moving to another tab
     - [6221](https://github.com/PrestaShop/PrestaShop/pull/6221): Fixed debug mode (removed SensioGeneratorBundle)
     - [6196](https://github.com/PrestaShop/PrestaShop/pull/6196): Fixed popover combination
     - [6208](https://github.com/PrestaShop/PrestaShop/pull/6208): Combination feature desactivation
     - [6201](https://github.com/PrestaShop/PrestaShop/pull/6201): Removed the language selector on the Product page if there is only one language
 - Front Office:
   - New features:
     - [6474](https://github.com/PrestaShop/PrestaShop/pull/6474): Introduce Parent/Child theme feature
     - [6452](https://github.com/PrestaShop/PrestaShop/pull/6452): Introduce hook to override layout file
     - [6308](https://github.com/PrestaShop/PrestaShop/pull/6308): Responsive layout for customer area
   - Improvements:
     - [6532](https://github.com/PrestaShop/PrestaShop/pull/6532): Update string content for front office
     - [6399](https://github.com/PrestaShop/PrestaShop/pull/6399): Remove minify HTML feature
     - [6378](https://github.com/PrestaShop/PrestaShop/pull/6378): Added reference parameter to OrderDetailController
     - [6314](https://github.com/PrestaShop/PrestaShop/pull/6314): Contact page : select order_reference optional
   - Bug fixes:
     - [6528](https://github.com/PrestaShop/PrestaShop/pull/6528): Fix discount percentage position in search products page
     - [6501](https://github.com/PrestaShop/PrestaShop/pull/6501): Fixed blocks height from account page
     - [6493](https://github.com/PrestaShop/PrestaShop/pull/6493): Wrong customization_quantity in order conf email
     - [6484](https://github.com/PrestaShop/PrestaShop/pull/6484): Fix the popover font
     - [6480](https://github.com/PrestaShop/PrestaShop/pull/6480): ISBN, EAN13 and so on must be translated
     - [6477](https://github.com/PrestaShop/PrestaShop/pull/6477): Fix smarty module resources paths arg
     - [6461](https://github.com/PrestaShop/PrestaShop/pull/6461): Fix product details reference
     - [6454](https://github.com/PrestaShop/PrestaShop/pull/6454): Stop relying on rewritten URL to resize images
     - [6443](https://github.com/PrestaShop/PrestaShop/pull/6443): Fixed show password button color
     - [6444](https://github.com/PrestaShop/PrestaShop/pull/6444): Faceted Search SEO Implements most crucial Google Guidelines
     - [6437](https://github.com/PrestaShop/PrestaShop/pull/6437): Wrong label in FO when out of stock
     - [6419](https://github.com/PrestaShop/PrestaShop/pull/6419): Fixed checkout step change
     - [6413](https://github.com/PrestaShop/PrestaShop/pull/6413): Fixed customer form check
     - [6405](https://github.com/PrestaShop/PrestaShop/pull/6405): Fix associated products layout
     - [6179](https://github.com/PrestaShop/PrestaShop/pull/6179): Fix several binary payment options behavior
     - [6394](https://github.com/PrestaShop/PrestaShop/pull/6394): Displayed categories when product not found
     - [6385](https://github.com/PrestaShop/PrestaShop/pull/6385): Use the right image size for product page and quickview
     - [6352](https://github.com/PrestaShop/PrestaShop/pull/6352): Fix add to cart button disappearing in prod mode
     - [6233](https://github.com/PrestaShop/PrestaShop/pull/6233): Fixed birthday customer registration
     - [6344](https://github.com/PrestaShop/PrestaShop/pull/6344): Add missing btn class for form buttons
     - [6337](https://github.com/PrestaShop/PrestaShop/pull/6337): Fixed link shared (for socialfollow module)
     - [6326](https://github.com/PrestaShop/PrestaShop/pull/6326): Order the breadcrumb
     - [6325](https://github.com/PrestaShop/PrestaShop/pull/6325): form-fields template is a mandatory file
     - [6336](https://github.com/PrestaShop/PrestaShop/pull/6336): Add condition for shared link (product page)
     - [6324](https://github.com/PrestaShop/PrestaShop/pull/6324): Removed duplicate category from breadcrumb
     - [6313](https://github.com/PrestaShop/PrestaShop/pull/6313): Fix register form checkbox
     - [6256](https://github.com/PrestaShop/PrestaShop/pull/6256): Fixed credit slip PDF for customized product
     - [6065](https://github.com/PrestaShop/PrestaShop/pull/6065): Added combination's specific references to product's details page
     - [6213](https://github.com/PrestaShop/PrestaShop/pull/6213): Fixed shopping cart summary
     - [6169](https://github.com/PrestaShop/PrestaShop/pull/6169): Fixed returns for product customizations
     - [6202](https://github.com/PrestaShop/PrestaShop/pull/6202): Display gift wrapping on Order confirmation
     - [6177](https://github.com/PrestaShop/PrestaShop/pull/6177): Gift price is now displayed on cart summary if any
 - Core:
   - New features:
     - [6491](https://github.com/PrestaShop/PrestaShop/pull/6491): Rework template calls for module
     - [6216](https://github.com/PrestaShop/PrestaShop/pull/6216): Introduce new hook Finder and hook displayProductExtraContent
     - [6374](https://github.com/PrestaShop/PrestaShop/pull/6374): Add new hook validateCustomerFormFields
     - [6261](https://github.com/PrestaShop/PrestaShop/pull/6261): Add new hook displayCarrierExtraContent
     - [6175](https://github.com/PrestaShop/PrestaShop/pull/6175): Add deprecated hooks list in class
   - Improvements:
     - [6511](https://github.com/PrestaShop/PrestaShop/pull/6511): Install emails pack
     - [6515](https://github.com/PrestaShop/PrestaShop/pull/6515): Shows company in BO search if B2B is enabled
     - [6502](https://github.com/PrestaShop/PrestaShop/pull/6502): Introduced sf entity in Smarty router
     - [6265](https://github.com/PrestaShop/PrestaShop/pull/6265): Replace deprecated mcrypt with openssl
     - [6434](https://github.com/PrestaShop/PrestaShop/pull/6434): Allow to import product with quantity set to 0
     - [4925](https://github.com/PrestaShop/PrestaShop/pull/4925): Allow import combination with a quantity of 0
     - [6451](https://github.com/PrestaShop/PrestaShop/pull/6451): Use Controller::ajaxDie() method instead of die()
     - [6219](https://github.com/PrestaShop/PrestaShop/pull/6219): Update AddressFormat class to ps standards
     - [5912](https://github.com/PrestaShop/PrestaShop/pull/5912): Introduced CSRF Token in url strategy
     - [6243](https://github.com/PrestaShop/PrestaShop/pull/6243): Delete deprecated ControllerFactory
     - [6244](https://github.com/PrestaShop/PrestaShop/pull/6244): Delete deprecated AdminTab class
     - [6415](https://github.com/PrestaShop/PrestaShop/pull/6415): Added in URL method the possibility to recover the category image
     - [6304](https://github.com/PrestaShop/PrestaShop/pull/6304): Remove deprecated PaymentCC class
     - [6255](https://github.com/PrestaShop/PrestaShop/pull/6255): Use symfony translator for controllers - part 1
     - [6382](https://github.com/PrestaShop/PrestaShop/pull/6382): Make Tools::getValue() mockable for unit test
     - [6408](https://github.com/PrestaShop/PrestaShop/pull/6408): Fully remove Blowfish and CacheFS
     - [6346](https://github.com/PrestaShop/PrestaShop/pull/6346): Remove cart redirect option
     - [6272](https://github.com/PrestaShop/PrestaShop/pull/6272): Remove deprecated Discount class
     - [6267](https://github.com/PrestaShop/PrestaShop/pull/6267): Add PHP 7.1 support
     - [6335](https://github.com/PrestaShop/PrestaShop/pull/6335): Do not show if email exists @ password reset
     - [5273](https://github.com/PrestaShop/PrestaShop/pull/5273): Make some method of SpecificPrice overridable
     - [6192](https://github.com/PrestaShop/PrestaShop/pull/6192): Remove unused parameter for Cart::isVirtualCart()
     - [6269](https://github.com/PrestaShop/PrestaShop/pull/6269): Remove deprecated class County
     - [6310](https://github.com/PrestaShop/PrestaShop/pull/6310): Improved module display on user groups
     - [6217](https://github.com/PrestaShop/PrestaShop/pull/6217): Update Attachment class to ps standards
     - [6218](https://github.com/PrestaShop/PrestaShop/pull/6218): Update Alias class to ps standards
     - [6209](https://github.com/PrestaShop/PrestaShop/pull/6209): Document Category class + cleanup
   - Bug fixes:
     - [6494](https://github.com/PrestaShop/PrestaShop/pull/6494): transformToCustomer not moves the default group from Guest to Cus…
     - [6520](https://github.com/PrestaShop/PrestaShop/pull/6520): Fixed hardcoded group id in getNewProducts
     - [6536](https://github.com/PrestaShop/PrestaShop/pull/6536): Fix variable name in Employee::getByEmail
     - [6524](https://github.com/PrestaShop/PrestaShop/pull/6524): Fixed specific price display
     - [6512](https://github.com/PrestaShop/PrestaShop/pull/6512): Fixed Product::getPricesDrop SQL query
     - [6486](https://github.com/PrestaShop/PrestaShop/pull/6486): Handle no limit for post_max_size in file uploads
     - [6479](https://github.com/PrestaShop/PrestaShop/pull/6479): Fixed supplier label & create method for supplier/manufacturer image
     - [6482](https://github.com/PrestaShop/PrestaShop/pull/6482): Deleted variable already defined
     - [6483](https://github.com/PrestaShop/PrestaShop/pull/6483): Escape translations for AddJsDefL
     - [6473](https://github.com/PrestaShop/PrestaShop/pull/6473): Fixed sql prevent with intval
     - [6433](https://github.com/PrestaShop/PrestaShop/pull/6433): Solved problem with Swift when SERVER_NAME is empty
     - [6426](https://github.com/PrestaShop/PrestaShop/pull/6426): Fix bad discount computation when multiple tax rates involved
     - [6435](https://github.com/PrestaShop/PrestaShop/pull/6435): Delete legacy code related to Discounts
     - [6380](https://github.com/PrestaShop/PrestaShop/pull/6380): Raise errors when theme can't be enabled
     - [6428](https://github.com/PrestaShop/PrestaShop/pull/6428): Fix a case where $context->smarty could be undefined
     - [6305](https://github.com/PrestaShop/PrestaShop/pull/6305): Fix isAllProductsInStock calculation
     - [6404](https://github.com/PrestaShop/PrestaShop/pull/6404): Use trans() instead of Mail::l() to translate email subject
     - [6396](https://github.com/PrestaShop/PrestaShop/pull/6396): Fixed method getNonNativeModuleList (always returns false)
     - [6395](https://github.com/PrestaShop/PrestaShop/pull/6395): Apply "optin" configuration on customer forms
     - [6400](https://github.com/PrestaShop/PrestaShop/pull/6400): Prevented SQL injection
     - [6391](https://github.com/PrestaShop/PrestaShop/pull/6391): Sql injection error on search class
     - [6260](https://github.com/PrestaShop/PrestaShop/pull/6260): Fixed display of last items in stock
     - [6367](https://github.com/PrestaShop/PrestaShop/pull/6367): Fixed :: Access to undeclared static property: Validate::$data for PHP7
     - [6372](https://github.com/PrestaShop/PrestaShop/pull/6372): Prevented SQL injection in product sales
     - [6376](https://github.com/PrestaShop/PrestaShop/pull/6376): File upload option for contact form
     - [6377](https://github.com/PrestaShop/PrestaShop/pull/6377): Fix typing issue causing fatal error during install
     - [6375](https://github.com/PrestaShop/PrestaShop/pull/6375): Return default value on empty Marketplace categories response
     - [6369](https://github.com/PrestaShop/PrestaShop/pull/6369): Prevent injections in SQL in classes (continue)
     - [6373](https://github.com/PrestaShop/PrestaShop/pull/6373): Prevent SQL injections in Shop class
     - [6361](https://github.com/PrestaShop/PrestaShop/pull/6361): Prevent injections in SQL in classes
     - [6364](https://github.com/PrestaShop/PrestaShop/pull/6364): Prevent SQL injections in SpecificPrice class
     - [6172](https://github.com/PrestaShop/PrestaShop/pull/6172): Improve compatibility between PHP 7.1 and PrestaShop
     - [6360](https://github.com/PrestaShop/PrestaShop/pull/6360): Prevented SQL injections
     - [6358](https://github.com/PrestaShop/PrestaShop/pull/6358): Prevented SQL injections
     - [6257](https://github.com/PrestaShop/PrestaShop/pull/6257): Fixed display voucher tax included in checkout page
     - [6334](https://github.com/PrestaShop/PrestaShop/pull/6334): Sorting product with configuration settings
     - [6254](https://github.com/PrestaShop/PrestaShop/pull/6254): Show availability_date for combination if exists, never use the default one for combination
     - [6332](https://github.com/PrestaShop/PrestaShop/pull/6332): Fix pdf invoice smarty functions
     - [6309](https://github.com/PrestaShop/PrestaShop/pull/6309): Display promo codes when highlighted
     - [6323](https://github.com/PrestaShop/PrestaShop/pull/6323): Fixed Cache call
     - [6234](https://github.com/PrestaShop/PrestaShop/pull/6234): Fixed product sorting by category
     - [6306](https://github.com/PrestaShop/PrestaShop/pull/6306): Fixed no default message when available_later is empty and out of stock orders enabled
     - [6195](https://github.com/PrestaShop/PrestaShop/pull/6195): Fixed random_compat dependency to avoid CSPRNG exception
     - [6212](https://github.com/PrestaShop/PrestaShop/pull/6212): Fix a missing point in SQL request


## Parting words

Ready? Set? Go! Create new themes and update your modules! :)

Thank you for your feedback!


