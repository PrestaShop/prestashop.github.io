---
layout: post
aliases: ["/news/coreweekly-weeks-37-38-39-40-41"]
title:  "PrestaShop Core Weekly - Weeks 37-38-39-40-41 of 2016"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-10-19 09:10:11
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the previous five weeks, from Monday 12th of September to Sunday 16th of Octobre 2016.

Wow, almost a month without a proper Core Weekly report! Sorry for that, dear readers!<br/>
So, this phonebook of a report is not called Core Monthly, 'cos I DO want to publish it on a weekly basis still. Next time! :)


## TL;DR

Yup, that's a lot to read through. So, here are a few highligts from the LONG list of changes:

 * Adding the parent/child inheritance system for themes!
 * Better SEO for faceted search.
 * Better PHP 7.0 support.
 * A HUGE number of fixes and improvements.
 * Several security fixes.
 * Some forgotten hooks are back, and some were added.
 * Improved installer.
 * Better phpdoc all around (thanks Michael Dekker for this initiative!).
 * And a LOT more!

## General messages

A few things happened in the past month, isn't it? First, we released [RC1](http://build.prestashop.com/news/prestashop-1-7-RC1/) AND [RC2 of version 1.7.0.0](http://build.prestashop.com/news/prestashop-1-7-RC2/) (please test it!). We [formally introduced PrestonBot](http://build.prestashop.com/news/introducing-prestonbot/), we [put the techdoc site online for all to contribute to](http://build.prestashop.com/news/developer-documentation/), and as you'll soon see, we're about to release 1.6.1.8 :)

PrestaShop 1.7 development is going well, and we're getting a good feeling about it. There is a still a lot of ironing to do, but mostly, you should start working on your themes and modules :) Are your modules 1.7-ready? Have you tried to create a 1.7 theme? [Check the current tech doc](http://developers.prestashop.com/)!

You can find an up-to-date thread about the 1.7 development [in the forum](https://www.prestashop.com/forums/topic/480580-want-to-know-more-about-17/).<br/>
The 1.7 Project FAQ is always available here: [http://build.prestashop.com/news/prestashop-1-7-faq/](http://build.prestashop.com/news/prestashop-1-7-faq/).



## Code changes in 'develop' branch (for version 1.7.0.0)

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!
 
 
### Front office (including the default theme, named "Classic", based upon the [Starter Theme](https://github.com/PrestaShop/PrestaShop/tree/develop/themes/classic))

 * [6179](https://github.com/PrestaShop/PrestaShop/pull/6179): Fix several binary payment options behavior, by @maximebiloe.
 * [6308](https://github.com/PrestaShop/PrestaShop/pull/6308): Responsive layout for customer area, by @ishcherbakov.
 * [6313](https://github.com/PrestaShop/PrestaShop/pull/6313): Fix register form checkbox, by @nihco2.
 * [6314](https://github.com/PrestaShop/PrestaShop/pull/6314): Contact page : select order_reference optional, by @aleeks.
 * [6324](https://github.com/PrestaShop/PrestaShop/pull/6324): Removed duplicate category from breadcrumb, by @thierrymarianne.
 * [6325](https://github.com/PrestaShop/PrestaShop/pull/6325): form-fields template is a mandatory file, by @julienbourdeau.
 * [6326](https://github.com/PrestaShop/PrestaShop/pull/6326): Order the breadcrumb, by @antoin-m.
 * [6336](https://github.com/PrestaShop/PrestaShop/pull/6336): Add condition for shared link (product page), by @aleeks.
 * [6337](https://github.com/PrestaShop/PrestaShop/pull/6337): Fixed link shared (for socialfollow module), by @aleeks.
 * [6344](https://github.com/PrestaShop/PrestaShop/pull/6344): Add missing btn class for form buttons, by @julienbourdeau.
 * [6352](https://github.com/PrestaShop/PrestaShop/pull/6352): Fix add to cart button disappearing in prod mode, by @maximebiloe.
 * [6378](https://github.com/PrestaShop/PrestaShop/pull/6378): Added reference parameter to OrderDetailController. Thank you @mcdado!
 * [6385](https://github.com/PrestaShop/PrestaShop/pull/6385): Use the right image size for product page and quickview, by @leadesign.
 * [6394](https://github.com/PrestaShop/PrestaShop/pull/6394): Displayed categories when product not found, by @thierrymarianne.
 * [6405](https://github.com/PrestaShop/PrestaShop/pull/6405): Fix associated products layout, by @maximebiloe.
 * [6413](https://github.com/PrestaShop/PrestaShop/pull/6413): Fixed customer form check, by @mickaelandrieu.
 * [6419](https://github.com/PrestaShop/PrestaShop/pull/6419): Fixed checkout step change, by @thierrymarianne.
 * [6443](https://github.com/PrestaShop/PrestaShop/pull/6443): Fixed show password button color, by @thierrymarianne.
 * [6444](https://github.com/PrestaShop/PrestaShop/pull/6444): Faceted Search SEO Implements most crucial Google Guidelines, by @djfm.
 * [6454](https://github.com/PrestaShop/PrestaShop/pull/6454): Stop relying on rewritten URL to resize images, by @djfm.
 * [6461](https://github.com/PrestaShop/PrestaShop/pull/6461): Fix product details reference, by @maximebiloe.
 * [6480](https://github.com/PrestaShop/PrestaShop/pull/6480): ISBN, EAN13 and so on must be translated, by @maximebiloe.
 * [6484](https://github.com/PrestaShop/PrestaShop/pull/6484): Fix the popover font, by @antoin-m.
 * [6493](https://github.com/PrestaShop/PrestaShop/pull/6493): Wrong customization_quantity in order conf email, by @quetzacoalt91.
 * [6501](https://github.com/PrestaShop/PrestaShop/pull/6501): Fixed blocks height from account page, by @aleeks.
 * [6509](https://github.com/PrestaShop/PrestaShop/pull/6509): Separate gifts from product manually added, by @thierrymarianne.
 * [6528](https://github.com/PrestaShop/PrestaShop/pull/6528): Fix discount percentage position in search products page, by @fatmabouchekoua.
 * [6532](https://github.com/PrestaShop/PrestaShop/pull/6532): Update string content for front office, by @alexeven.
 * [6540](https://github.com/PrestaShop/PrestaShop/pull/6540): Fixed vouchers values rendering, by @thierrymarianne.
 * [6547](https://github.com/PrestaShop/PrestaShop/pull/6547): Rendered manufacturer in product details, by @thierrymarianne.
 * [6605](https://github.com/PrestaShop/PrestaShop/pull/6605): Fix combination selection in StarterTheme, by @maximebiloe.
 * [6609](https://github.com/PrestaShop/PrestaShop/pull/6609): Move facets update behaviour, by @nihco2.
 * [6648](https://github.com/PrestaShop/PrestaShop/pull/6648): Fix flags position on product page, by @maximebiloe.
 * [6650](https://github.com/PrestaShop/PrestaShop/pull/6650): CSV Import: Prevent default category reset when already defined. Thank you @firstred!
 * [6660](https://github.com/PrestaShop/PrestaShop/pull/6660): Fixed minimal quantity check in cart, by @thierrymarianne.
 

### Back office

 * [6041](https://github.com/PrestaShop/PrestaShop/pull/6041): Speed up AdminStatsControllerCore::getVisits() time by 30%. Thank you @kioob!
 * [6139](https://github.com/PrestaShop/PrestaShop/pull/6139): FR translation for top menu items, by @xborderie.
 * [6149](https://github.com/PrestaShop/PrestaShop/pull/6149): Modules translation page modified, by @fatmabouchekoua.
 * [6161](https://github.com/PrestaShop/PrestaShop/pull/6161): Product page integration bug fixes, by @nihco2.
 * [6171](https://github.com/PrestaShop/PrestaShop/pull/6171): Keep additionnal data in $\_POST instead of dropping it, by @quetzacoalt91.
 * [6181](https://github.com/PrestaShop/PrestaShop/pull/6181): Hide quantity fields when stock management is disabled, by @fatmabouchekoua.
 * [6194](https://github.com/PrestaShop/PrestaShop/pull/6194): Bring back forgotten hooks, by @quetzacoalt91.
 * [6198](https://github.com/PrestaShop/PrestaShop/pull/6198): Fixed translation in Shipping > Carrier, by @thierrymarianne.
 * [6236](https://github.com/PrestaShop/PrestaShop/pull/6236): Fix navigation menu behavior, by @maximebiloe.
 * [6251](https://github.com/PrestaShop/PrestaShop/pull/6251): Adding new plugins and options to tinymce, by @fatmabouchekoua.
 * [6252](https://github.com/PrestaShop/PrestaShop/pull/6252): Fixed deletion of attribute, by @thierrymarianne.
 * [6259](https://github.com/PrestaShop/PrestaShop/pull/6259): Fix module listing to upgrade, by @maximebiloe.
 * [6263](https://github.com/PrestaShop/PrestaShop/pull/6263): Better visibility for reference. Thank you @phpmadman!
 * [6307](https://github.com/PrestaShop/PrestaShop/pull/6307): Fix product select type re-enabled when product has no combination, by @aleeks.
 * [6309](https://github.com/PrestaShop/PrestaShop/pull/6309): Display promo codes when highlighted, by @thierrymarianne.
 * [6311](https://github.com/PrestaShop/PrestaShop/pull/6311): Allow product save after specific price creation, by @mickaelandrieu.
 * [6312](https://github.com/PrestaShop/PrestaShop/pull/6312): Fixed javascript issue on ie11 (ES6 unavailable), by @mickaelandrieu.
 * [6315](https://github.com/PrestaShop/PrestaShop/pull/6315): Fix the auto scroll when an error appears on the page, by @antoin-m.
 * [6316](https://github.com/PrestaShop/PrestaShop/pull/6316): Fix the icons & their colors on the products list page, by @antoin-m.
 * [6317](https://github.com/PrestaShop/PrestaShop/pull/6317): Fix some permission issues and remove unused controllers, by @maximebiloe.
 * [6318](https://github.com/PrestaShop/PrestaShop/pull/6318): Fixed category tree, by @thierrymarianne.
 * [6321](https://github.com/PrestaShop/PrestaShop/pull/6321): Removed results after emptying search field, by @thierrymarianne.
 * [6322](https://github.com/PrestaShop/PrestaShop/pull/6322): Fix dashboard javascript error for some country (ex: Serbia or Indonesia), by @antoin-m.
 * [6328](https://github.com/PrestaShop/PrestaShop/pull/6328): Native modules displayed in the right category, by @maximebiloe.
 * [6329](https://github.com/PrestaShop/PrestaShop/pull/6329): Fixed category filter, by @thierrymarianne.
 * [6330](https://github.com/PrestaShop/PrestaShop/pull/6330): Sorted modules by popularity in descending order, by @thierrymarianne.
 * [6333](https://github.com/PrestaShop/PrestaShop/pull/6333): Fixed shops dropdown submenu, by @thierrymarianne.
 * [6338](https://github.com/PrestaShop/PrestaShop/pull/6338): Show/hide attach file form with button, by @nihco2.
 * [6340](https://github.com/PrestaShop/PrestaShop/pull/6340): Fixed display of payment methods active modules, by @mickaelandrieu.
 * [6341](https://github.com/PrestaShop/PrestaShop/pull/6341): Added tooltips for virtual product, by @thierrymarianne.
 * [6342](https://github.com/PrestaShop/PrestaShop/pull/6342): Prevented upload of PHP script, by @thierrymarianne.
 * [6343](https://github.com/PrestaShop/PrestaShop/pull/6343): Removed deprecated performance options, by @thierrymarianne.
 * [6345](https://github.com/PrestaShop/PrestaShop/pull/6345): Change .attr to .prop for categories js, by @aleeks.
 * [6348](https://github.com/PrestaShop/PrestaShop/pull/6348): Fix the 'View less/View all images' button on the product page, by @antoin-m.
 * [6350](https://github.com/PrestaShop/PrestaShop/pull/6350): Show not active category in Filter by Category. Thank you @ecomm360!
 * [6351](https://github.com/PrestaShop/PrestaShop/pull/6351): Fix notice in debug mode on the dashboard (admin), by @aleeks.
 * [6353](https://github.com/PrestaShop/PrestaShop/pull/6353): Fixed translator selector behavior, by @thierrymarianne.
 * [6355](https://github.com/PrestaShop/PrestaShop/pull/6355): Introduced "others" translation provider, by @mickaelandrieu.
 * [6356](https://github.com/PrestaShop/PrestaShop/pull/6356): Right sidebar on product form (lint title, fix pagination display), by @aleeks.
 * [6359](https://github.com/PrestaShop/PrestaShop/pull/6359): Prevent injections in SQL queries of AccessCore class, by @mickaelandrieu.
 * [6363](https://github.com/PrestaShop/PrestaShop/pull/6363): Prevent SQL injections in OrderInvoice class, by @mickaelandrieu.
 * [6365](https://github.com/PrestaShop/PrestaShop/pull/6365): Prevented SQL injections, by @thierrymarianne.
 * [6366](https://github.com/PrestaShop/PrestaShop/pull/6366): Prevented SQL injections object model, by @thierrymarianne.
 * [6368](https://github.com/PrestaShop/PrestaShop/pull/6368): Prevented SQL injections, by @thierrymarianne.
 * [6369](https://github.com/PrestaShop/PrestaShop/pull/6369): Prevent injections in SQL in classes, by @aleeks.
 * [6381](https://github.com/PrestaShop/PrestaShop/pull/6381): Add translation domains to controllers - 6, by @alexeven.
 * [6383](https://github.com/PrestaShop/PrestaShop/pull/6383): Fixed bad translation definition for debug info, by @mickaelandrieu.
 * [6384](https://github.com/PrestaShop/PrestaShop/pull/6384): Remove "Configure" button when no config, by @thierrymarianne.
 * [6386](https://github.com/PrestaShop/PrestaShop/pull/6386): Refacto bulk action on product form (admin), by @aleeks.
 * [6389](https://github.com/PrestaShop/PrestaShop/pull/6389): Performance improvements on last visit. Thank you @zuzul!
 * [6390](https://github.com/PrestaShop/PrestaShop/pull/6390): Display active zones first in Carrier wizard and flag inactive ones
 * [6391](https://github.com/PrestaShop/PrestaShop/pull/6391): Sql injection error on search class, by @aleeks.
 * [6392](https://github.com/PrestaShop/PrestaShop/pull/6392): Displayed modal on combinations deletion, by @thierrymarianne.
 * [6393](https://github.com/PrestaShop/PrestaShop/pull/6393): Fix focus issue on tinymce editor. Thank you @antho-girard!
 * [6398](https://github.com/PrestaShop/PrestaShop/pull/6398): Added reference to select products field, by @fatmabouchekoua.
 * [6399](https://github.com/PrestaShop/PrestaShop/pull/6399): Remove minify HTML feature, by @julienbourdeau.
 * [6402](https://github.com/PrestaShop/PrestaShop/pull/6402): Fixed a little useless raw, by @aleeks.
 * [6403](https://github.com/PrestaShop/PrestaShop/pull/6403): Restored attribute generator, by @thierrymarianne.
 * [6406](https://github.com/PrestaShop/PrestaShop/pull/6406): Use Symfony translator in controllers, by @mickaelandrieu.
 * [6407](https://github.com/PrestaShop/PrestaShop/pull/6407): Supplier product form integration and js, by @aleeks.
 * [6409](https://github.com/PrestaShop/PrestaShop/pull/6409): Refresh product combination images, by @thierrymarianne.
 * [6411](https://github.com/PrestaShop/PrestaShop/pull/6411): Fix the quick links, by @antoin-m.
 * [6414](https://github.com/PrestaShop/PrestaShop/pull/6414): Fix translation issue on the login page, by @antoin-m.
 * [6416](https://github.com/PrestaShop/PrestaShop/pull/6416): Fix product save, by @antoin-m.
 * [6417](https://github.com/PrestaShop/PrestaShop/pull/6417): Allowed negative impact on price, by @thierrymarianne.
 * [6420](https://github.com/PrestaShop/PrestaShop/pull/6420): Fixed multistore links on header, by @aleeks.
 * [6421](https://github.com/PrestaShop/PrestaShop/pull/6421): Fixed translations search engine, by @mickaelandrieu.
 * [6422](https://github.com/PrestaShop/PrestaShop/pull/6422): Fixed user locale listener, by @mickaelandrieu.
 * [6424](https://github.com/PrestaShop/PrestaShop/pull/6424): Fixed product attachment with name used previously, by @thierrymarianne.
 * [6425](https://github.com/PrestaShop/PrestaShop/pull/6425): Solved problem with non-unserialized filters data. Thank you @kpodemski!
 * [6427](https://github.com/PrestaShop/PrestaShop/pull/6427): Fix bug when adding new column in product catalog page, by @fatmabouchekoua.
 * [6430](https://github.com/PrestaShop/PrestaShop/pull/6430): Take order state unremovable flag into account. Thank you @kpodemski & @erouvier29!
 * [6431](https://github.com/PrestaShop/PrestaShop/pull/6431): Fixed bug when no results with address and map does not exists. Thank you @kpodemski & @idnovate!
 * [6432](https://github.com/PrestaShop/PrestaShop/pull/6432): Display all carriers in Dashboard Configuration. Thank you @kpodemski & @okom3pom!
 * [6438](https://github.com/PrestaShop/PrestaShop/pull/6438): Fixed some logic to call All carriers, by @aleeks.
 * [6439](https://github.com/PrestaShop/PrestaShop/pull/6439): Fixed selection of product category, by @thierrymarianne.
 * [6440](https://github.com/PrestaShop/PrestaShop/pull/6440): Fixed 'installed modules' tab if no shop selected, by @aleeks.
 * [6441](https://github.com/PrestaShop/PrestaShop/pull/6441): Fixed shop create page (translation problem and context initialization), by @aleeks.
 * [6442](https://github.com/PrestaShop/PrestaShop/pull/6442): Introduced SSL verify config parameter. Thank you @kpodemski!
 * [6445](https://github.com/PrestaShop/PrestaShop/pull/6445): Fix translation domains, by @alexeven.
 * [6446](https://github.com/PrestaShop/PrestaShop/pull/6446): Fix bug in translate module page, by @fatmabouchekoua.
 * [6447](https://github.com/PrestaShop/PrestaShop/pull/6447): Fixed import client by csv file, by @aleeks.
 * [6448](https://github.com/PrestaShop/PrestaShop/pull/6448): Removed used vouchers from highlight panel, by @thierrymarianne.
 * [6452](https://github.com/PrestaShop/PrestaShop/pull/6452): Introduce hook to override layout file, by @julienbourdeau.
 * [6453](https://github.com/PrestaShop/PrestaShop/pull/6453): Fixed back office translation in templates without domain set up, by @mickaelandrieu.
 * [6455](https://github.com/PrestaShop/PrestaShop/pull/6455): Hide id_guest field if it is disabled in configuration, by @aleeks.
 * [6456](https://github.com/PrestaShop/PrestaShop/pull/6456): Allowed use of comma in tax included / excluded prices, by @thierrymarianne.
 * [6458](https://github.com/PrestaShop/PrestaShop/pull/6458): Add translation domains to International menu's controllers, by @alexeven.
 * [6459](https://github.com/PrestaShop/PrestaShop/pull/6459): Sprintf must be an array not a string, by @maximebiloe.
 * [6460](https://github.com/PrestaShop/PrestaShop/pull/6460): Fixed store addition, by @thierrymarianne.
 * [6462](https://github.com/PrestaShop/PrestaShop/pull/6462): Fix bug in translator domain, by @fatmabouchekoua.
 * [6463](https://github.com/PrestaShop/PrestaShop/pull/6463): Added missing maintenance / debug indicator, by @thierrymarianne.
 * [6467](https://github.com/PrestaShop/PrestaShop/pull/6467): Fixed wording AdminInvoicesController.php. Thank you @nobodaddy!
 * [6474](https://github.com/PrestaShop/PrestaShop/pull/6474): Introduce Parent/Child theme feature, by @julienbourdeau.
 * [6477](https://github.com/PrestaShop/PrestaShop/pull/6477): Fix smarty module resources paths arg, by @julienbourdeau.
 * [6478](https://github.com/PrestaShop/PrestaShop/pull/6478): Hide Specific References table when it's empty, by @fatmabouchekoua.
 * [6485](https://github.com/PrestaShop/PrestaShop/pull/6485): Fix the notification center text & badge, by @antoin-m.
 * [6487](https://github.com/PrestaShop/PrestaShop/pull/6487): Fix SQL export on catalog page. Thank you @antho-girard!
 * [6488](https://github.com/PrestaShop/PrestaShop/pull/6488): Fixed export product (data : image), by @aleeks.
 * [6489](https://github.com/PrestaShop/PrestaShop/pull/6489): Fix the show/hide notification option, by @antoin-m.
 * [6492](https://github.com/PrestaShop/PrestaShop/pull/6492): Add missing help text on "New product" button. Thank you @antho-girard!
 * [6496](https://github.com/PrestaShop/PrestaShop/pull/6496): Fix de popover font, by @antoin-m.
 * [6497](https://github.com/PrestaShop/PrestaShop/pull/6497): Remove extra space and improve some strings, by @maximebiloe.
 * [6498](https://github.com/PrestaShop/PrestaShop/pull/6498): Fix notifications, by @antoin-m.
 * [6499](https://github.com/PrestaShop/PrestaShop/pull/6499): Prevent smartyTranslate to escape HTML tags when they are needed, by @antoin-m.
 * [6504](https://github.com/PrestaShop/PrestaShop/pull/6504): Fix category tree on product page, by @antoin-m.
 * [6506](https://github.com/PrestaShop/PrestaShop/pull/6506): Display native modules in translations, by @mickaelandrieu.
 * [6507](https://github.com/PrestaShop/PrestaShop/pull/6507): Fixed some duplicate form/content on Admin, by @aleeks.
 * [6510](https://github.com/PrestaShop/PrestaShop/pull/6510): Fixed upload, update & delete product image, by @aleeks.
 * [6513](https://github.com/PrestaShop/PrestaShop/pull/6513): Fix the ajax calls in the product page, by @antoin-m.
 * [6517](https://github.com/PrestaShop/PrestaShop/pull/6517): Removed backtick from order by clause, by @thierrymarianne.
 * [6518](https://github.com/PrestaShop/PrestaShop/pull/6518): Natives front modules available in Back office translations, by @mickaelandrieu.
 * [6519](https://github.com/PrestaShop/PrestaShop/pull/6519): Better multistore links on menu, by @aleeks.
 * [6525](https://github.com/PrestaShop/PrestaShop/pull/6525): Added quick link to update category, by @aleeks.
 * [6526](https://github.com/PrestaShop/PrestaShop/pull/6526): Fixed delete/update image just uploaded, by @aleeks.
 * [6529](https://github.com/PrestaShop/PrestaShop/pull/6529): Disabled module and product actions in demo, by @thierrymarianne.
 * [6530](https://github.com/PrestaShop/PrestaShop/pull/6530): Fixed missing btn on new controllers, by @aleeks.
 * [6535](https://github.com/PrestaShop/PrestaShop/pull/6535): Wording update for BO, by @alexeven.
 * [6538](https://github.com/PrestaShop/PrestaShop/pull/6538): Payments/Carriers preferences applied also on non PS carriers, by @vincentbz.
 * [6539](https://github.com/PrestaShop/PrestaShop/pull/6539): Check parent permissions when not ticked, by @antoinemille.
 * [6545](https://github.com/PrestaShop/PrestaShop/pull/6545): TinyMCE resize, by @antoinemille.
 * [6546](https://github.com/PrestaShop/PrestaShop/pull/6546): Fixed wording for BO, by @aleeks.
 * [6550](https://github.com/PrestaShop/PrestaShop/pull/6550): Add translations domains to Shop Parameters, by @alexeven.
 * [6583](https://github.com/PrestaShop/PrestaShop/pull/6583): Improve label wording for cart rule creation, by @alexeven.
 * [6586](https://github.com/PrestaShop/PrestaShop/pull/6586): Remove PS_LOGO_MOBILE variable from AdminThemesController. Thank you @martinfojtik!
 * [6587](https://github.com/PrestaShop/PrestaShop/pull/6587): Fix theme preview in BO. Thank you @martinfojtik!
 * [6589](https://github.com/PrestaShop/PrestaShop/pull/6589): Wording update - 'Attachment' becomes 'Files', by @alexeven.
 * [6592](https://github.com/PrestaShop/PrestaShop/pull/6592): Fixed missing button when adding countries in a taxe rule, by @aleeks.
 * [6593](https://github.com/PrestaShop/PrestaShop/pull/6593): Fixed hint tooltip on template, by @aleeks.
 * [6596](https://github.com/PrestaShop/PrestaShop/pull/6596): Fixed newsletter, optin, shop columns, by @thierrymarianne.
 * [6600](https://github.com/PrestaShop/PrestaShop/pull/6600): Add translation domains to Adv. param controllers 1, by @alexeven.
 * [6601](https://github.com/PrestaShop/PrestaShop/pull/6601): Fixed add/edit click quick access on 2 system controllers, by @aleeks.
 * [6602](https://github.com/PrestaShop/PrestaShop/pull/6602): Ensured product has default combination, by @thierrymarianne.
 * [6603](https://github.com/PrestaShop/PrestaShop/pull/6603): Make customer required fields translatable, by @maximebiloe.
 * [6612](https://github.com/PrestaShop/PrestaShop/pull/6612): Fixed positions dragable on list, by @aleeks.
 * [6614](https://github.com/PrestaShop/PrestaShop/pull/6614): Fix module import. Thank you @firstred!
 * [6629](https://github.com/PrestaShop/PrestaShop/pull/6629): Automatically fill link_rewrite on new CMS category page. Thank you @firstred!
 * [6632](https://github.com/PrestaShop/PrestaShop/pull/6632): Fix filtering on state in monitoring BO page. Thank you @firstred!
 * [6633](https://github.com/PrestaShop/PrestaShop/pull/6633): Fix multilang link rewrite import. Thank you @firstred!
 * [6637](https://github.com/PrestaShop/PrestaShop/pull/6637): Fixed retrieval of customer KPI, by @thierrymarianne.
 * [6638](https://github.com/PrestaShop/PrestaShop/pull/6638): Fix double slash for supplier combination request, by @maximebiloe.
 * [6639](https://github.com/PrestaShop/PrestaShop/pull/6639): Fixed link to product in order, by @thierrymarianne.
 * [6642](https://github.com/PrestaShop/PrestaShop/pull/6642): Added tab ids to navigation menu, by @thierrymarianne.
 * [6644](https://github.com/PrestaShop/PrestaShop/pull/6644): Fixed hook position display, by @aleeks.
 * [6645](https://github.com/PrestaShop/PrestaShop/pull/6645): Fix menu layout for IE, by @maximebiloe.
 * [6646](https://github.com/PrestaShop/PrestaShop/pull/6646): Fixed string additional (hook, sql), by @aleeks.
 * [6654](https://github.com/PrestaShop/PrestaShop/pull/6654): Fix the customer threads status change, by @antoin-m.
 * [6655](https://github.com/PrestaShop/PrestaShop/pull/6655): Fix the caption display language on the product page, by @antoin-m.
 * [6657](https://github.com/PrestaShop/PrestaShop/pull/6657): Fixed feature change ajax, by @aleeks.
 * [6658](https://github.com/PrestaShop/PrestaShop/pull/6658): Do not fallback on english value on translation page and tokenize the edit URL, by @maximebiloe.
 * [6659](https://github.com/PrestaShop/PrestaShop/pull/6659): Fixed hint tooltip on template, by @aleeks.
 * [6661](https://github.com/PrestaShop/PrestaShop/pull/6661): Fix the product quantity selector, by @antoin-m.
 * [6662](https://github.com/PrestaShop/PrestaShop/pull/6662): Fix the final retail price update, by @antoin-m.
 * [6665](https://github.com/PrestaShop/PrestaShop/pull/6665): Fixed title CMS page KO, by @aleeks.
 * [6666](https://github.com/PrestaShop/PrestaShop/pull/6666): Module page small fixes, by @quetzacoalt91.
 * [6667](https://github.com/PrestaShop/PrestaShop/pull/6667): Fix the combinations bulk action with TI price, by @antoin-m.
 * [6670](https://github.com/PrestaShop/PrestaShop/pull/6670): Fixed call to action buttons in Read More, by @thierrymarianne.
 * [6675](https://github.com/PrestaShop/PrestaShop/pull/6675): New keyboard shortcut in product page, by @antoinemille.
 * [6683](https://github.com/PrestaShop/PrestaShop/pull/6683): Reuse SQL result for module history, by @quetzacoalt91.
 * [6686](https://github.com/PrestaShop/PrestaShop/pull/6686): Bring back addon card on search, by @quetzacoalt91.
 * [6687](https://github.com/PrestaShop/PrestaShop/pull/6687): Fix "back" link in module configuration page, by @julienbourdeau.


### Core

 * [4925](https://github.com/PrestaShop/PrestaShop/pull/4925): Allow import combination with a quantity of 0. Thank you @maidmaid!
 * [5273](https://github.com/PrestaShop/PrestaShop/pull/5273): Make some method of SpecificPrice overridable. Thank you @kermes!
 * [5912](https://github.com/PrestaShop/PrestaShop/pull/5912): Introduced CSRF Token in url strategy, by @mickaelandrieu.
 * [6096](https://github.com/PrestaShop/PrestaShop/pull/6096): Properly handle / migrate new parameters.php file & more work on upgrade, by @jocel1.
 * [6172](https://github.com/PrestaShop/PrestaShop/pull/6172): Improve compatibility between PHP 7.1 and PrestaShop, by @quetzacoalt91.
 * [6175](https://github.com/PrestaShop/PrestaShop/pull/6175): Add deprecated hooks list in class, by @quetzacoalt91.
 * [6192](https://github.com/PrestaShop/PrestaShop/pull/6192): Remove unused parameter for Cart::isVirtualCart(). Thank you @prestamodule!
 * [6216](https://github.com/PrestaShop/PrestaShop/pull/6216): Introduce new hook Finder and hook displayProductExtraContent, by @quetzacoalt91.
 * [6219](https://github.com/PrestaShop/PrestaShop/pull/6219): Update AddressFormat class to ps standards. Thank you @firstred!
 * [6227](https://github.com/PrestaShop/PrestaShop/pull/6227), [6229](https://github.com/PrestaShop/PrestaShop/pull/6229), [6231](https://github.com/PrestaShop/PrestaShop/pull/6231), [6232](https://github.com/PrestaShop/PrestaShop/pull/6232), [6233](https://github.com/PrestaShop/PrestaShop/pull/6233), [6239](https://github.com/PrestaShop/PrestaShop/pull/6239), [6240](https://github.com/PrestaShop/PrestaShop/pull/6240), [6241](https://github.com/PrestaShop/PrestaShop/pull/6241), [6242](https://github.com/PrestaShop/PrestaShop/pull/6242), [6243](https://github.com/PrestaShop/PrestaShop/pull/6243), [6244](https://github.com/PrestaShop/PrestaShop/pull/6244), [6246](https://github.com/PrestaShop/PrestaShop/pull/6246), [6247](https://github.com/PrestaShop/PrestaShop/pull/6247), [6248](https://github.com/PrestaShop/PrestaShop/pull/6248), [6249](https://github.com/PrestaShop/PrestaShop/pull/6249), [6270](https://github.com/PrestaShop/PrestaShop/pull/6270), [6272](https://github.com/PrestaShop/PrestaShop/pull/6272), [6273](https://github.com/PrestaShop/PrestaShop/pull/6273), [6274](https://github.com/PrestaShop/PrestaShop/pull/6274), [6275](https://github.com/PrestaShop/PrestaShop/pull/6275), [6276](https://github.com/PrestaShop/PrestaShop/pull/6276), [6277](https://github.com/PrestaShop/PrestaShop/pull/6277), [6280](https://github.com/PrestaShop/PrestaShop/pull/6280), [6281](https://github.com/PrestaShop/PrestaShop/pull/6281), [6283](https://github.com/PrestaShop/PrestaShop/pull/6283), [6284](https://github.com/PrestaShop/PrestaShop/pull/6284), [6285](https://github.com/PrestaShop/PrestaShop/pull/6285), [6287](https://github.com/PrestaShop/PrestaShop/pull/6287), [6288](https://github.com/PrestaShop/PrestaShop/pull/6288), [6289](https://github.com/PrestaShop/PrestaShop/pull/6289), [6292](https://github.com/PrestaShop/PrestaShop/pull/6292), [6293](https://github.com/PrestaShop/PrestaShop/pull/6293), [6294](https://github.com/PrestaShop/PrestaShop/pull/6294), [6296](https://github.com/PrestaShop/PrestaShop/pull/6296), [6297](https://github.com/PrestaShop/PrestaShop/pull/6297), [6299](https://github.com/PrestaShop/PrestaShop/pull/6299), [6300](https://github.com/PrestaShop/PrestaShop/pull/6300), [6301](https://github.com/PrestaShop/PrestaShop/pull/6301), [6302](https://github.com/PrestaShop/PrestaShop/pull/6302), [6303](https://github.com/PrestaShop/PrestaShop/pull/6303), [6552](https://github.com/PrestaShop/PrestaShop/pull/6552), [6553](https://github.com/PrestaShop/PrestaShop/pull/6553), [6555](https://github.com/PrestaShop/PrestaShop/pull/6555), [6556](https://github.com/PrestaShop/PrestaShop/pull/6556), [6558](https://github.com/PrestaShop/PrestaShop/pull/6558), [6559](https://github.com/PrestaShop/PrestaShop/pull/6559), [6560](https://github.com/PrestaShop/PrestaShop/pull/6560), [6561](https://github.com/PrestaShop/PrestaShop/pull/6561), [6562](https://github.com/PrestaShop/PrestaShop/pull/6562), [6564](https://github.com/PrestaShop/PrestaShop/pull/6564), [6565](https://github.com/PrestaShop/PrestaShop/pull/6565), [6568](https://github.com/PrestaShop/PrestaShop/pull/6568), [6569](https://github.com/PrestaShop/PrestaShop/pull/6569), [6571](https://github.com/PrestaShop/PrestaShop/pull/6571), [6573](https://github.com/PrestaShop/PrestaShop/pull/6573), [6574](https://github.com/PrestaShop/PrestaShop/pull/6574), [6575](https://github.com/PrestaShop/PrestaShop/pull/6575), [6576](https://github.com/PrestaShop/PrestaShop/pull/6576), [6577](https://github.com/PrestaShop/PrestaShop/pull/6577), [6578](https://github.com/PrestaShop/PrestaShop/pull/6578), [6579](https://github.com/PrestaShop/PrestaShop/pull/6579), [6580](https://github.com/PrestaShop/PrestaShop/pull/6580), [6582](https://github.com/PrestaShop/PrestaShop/pull/6582): Doc + update for several classes. Thank you very, very much @firstred!
 * [6234](https://github.com/PrestaShop/PrestaShop/pull/6234): Fixed product sorting by category, by @thierrymarianne.
 * [6235](https://github.com/PrestaShop/PrestaShop/pull/6235): Improve validator birthday date, by @aleeks.
 * [6254](https://github.com/PrestaShop/PrestaShop/pull/6254): Show availability_date for combination if exists, never use the default one for combination, by @julienbourdeau.
 * [6255](https://github.com/PrestaShop/PrestaShop/pull/6255): Use symfony translator for controllers - part 1. Thank you @firstred!
 * [6257](https://github.com/PrestaShop/PrestaShop/pull/6257): Fixed display voucher tax included in checkout page, by @aleeks.
 * [6260](https://github.com/PrestaShop/PrestaShop/pull/6260): Fixed display of last items in stock, by @thierrymarianne.
 * [6261](https://github.com/PrestaShop/PrestaShop/pull/6261): Add new hook displayCarrierExtraContent, by @quetzacoalt91.
 * [6265](https://github.com/PrestaShop/PrestaShop/pull/6265): Replace deprecated mcrypt with openssl. Thank you @firstred!
 * [6267](https://github.com/PrestaShop/PrestaShop/pull/6267): Add PHP 7.1 support. Thank you @firstred!
 * [6269](https://github.com/PrestaShop/PrestaShop/pull/6269): Remove deprecated class County. Thank you @firstred!
 * [6304](https://github.com/PrestaShop/PrestaShop/pull/6304): Remove deprecated PaymentCC class. Thank you @firstred!
 * [6305](https://github.com/PrestaShop/PrestaShop/pull/6305): Fix isAllProductsInStock calculation. Thank you @firstred!
 * [6306](https://github.com/PrestaShop/PrestaShop/pull/6306): Fixed no default message when available_later is empty and out of stock orders enabled, by @aleeks.
 * [6310](https://github.com/PrestaShop/PrestaShop/pull/6310): Improved module display on user groups, by @mickaelandrieu.
 * [6323](https://github.com/PrestaShop/PrestaShop/pull/6323): Fixed Cache call, by @mickaelandrieu.
 * [6332](https://github.com/PrestaShop/PrestaShop/pull/6332): Fix pdf invoice smarty functions, by @julienbourdeau.
 * [6334](https://github.com/PrestaShop/PrestaShop/pull/6334): Sorting product with configuration settings, by @aleeks.
 * [6335](https://github.com/PrestaShop/PrestaShop/pull/6335): Do not show if email exists @ password reset. Thank you @firstred!
 * [6346](https://github.com/PrestaShop/PrestaShop/pull/6346): Remove cart redirect option, by @maximebiloe.
 * [6358](https://github.com/PrestaShop/PrestaShop/pull/6358): Prevented SQL injections, by @thierrymarianne.
 * [6360](https://github.com/PrestaShop/PrestaShop/pull/6360): Prevented SQL injections, by @fatmabouchekoua.
 * [6361](https://github.com/PrestaShop/PrestaShop/pull/6361): Prevent injections in SQL in classes, by @aleeks.
 * [6364](https://github.com/PrestaShop/PrestaShop/pull/6364): Prevent SQL injections in SpecificPrice clas, by @mickaelandrieu.
 * [6367](https://github.com/PrestaShop/PrestaShop/pull/6367): Fixed :: Access to undeclared static property: Validate::$data for PHP7. Thank you @pranid!
 * [6372](https://github.com/PrestaShop/PrestaShop/pull/6372): Prevented SQL injection in product sales, by @thierrymarianne.
 * [6373](https://github.com/PrestaShop/PrestaShop/pull/6373): Prevent SQL injections in Shop class, by @mickaelandrieu.
 * [6374](https://github.com/PrestaShop/PrestaShop/pull/6374): Add new hook validateCustomerFormFields, by @quetzacoalt91.
 * [6375](https://github.com/PrestaShop/PrestaShop/pull/6375): Return default value on empty Marketplace categories response, by @quetzacoalt91.
 * [6376](https://github.com/PrestaShop/PrestaShop/pull/6376): File upload option for contact form, by @aleeks.
 * [6377](https://github.com/PrestaShop/PrestaShop/pull/6377): Fix typing issue causing fatal error during install, by @maximebiloe.
 * [6380](https://github.com/PrestaShop/PrestaShop/pull/6380): Raise errors when theme can't be enabled, by @aleeks.
 * [6382](https://github.com/PrestaShop/PrestaShop/pull/6382): Make Tools::getValue() mockable for unit test, by @thierrymarianne.
 * [6395](https://github.com/PrestaShop/PrestaShop/pull/6395): Apply "optin" configuration on customer forms, by @aleeks.
 * [6396](https://github.com/PrestaShop/PrestaShop/pull/6396): Fixed method getNonNativeModuleList (always returns false). Thank you @m03g!
 * [6400](https://github.com/PrestaShop/PrestaShop/pull/6400): Prevented SQL injection, by @thierrymarianne.
 * [6404](https://github.com/PrestaShop/PrestaShop/pull/6404): Use trans() instead of Mail::l() to translate email subject, by @maximebiloe.
 * [6408](https://github.com/PrestaShop/PrestaShop/pull/6408): Fully remove Blowfish and CacheFS, by @julienbourdeau.
 * [6415](https://github.com/PrestaShop/PrestaShop/pull/6415): Added in URL method the possibility to recover the category image. Thank you @ecomm360!
 * [6426](https://github.com/PrestaShop/PrestaShop/pull/6426): Fix bad discount computation when multiple tax rates involved. Thank you @kpodemski & @maximebiloe!
 * [6428](https://github.com/PrestaShop/PrestaShop/pull/6428): Fix a case where $context->smarty could be undefined. Thank you @kpodemski & @prestamodule!
 * [6433](https://github.com/PrestaShop/PrestaShop/pull/6433): Solved problem with Swift when SERVER_NAME is empty. Thank you @kpodemski & @hiousi!
 * [6434](https://github.com/PrestaShop/PrestaShop/pull/6434): Allow to import product with quantity set to 0. Thank you @kpodemski!
 * [6435](https://github.com/PrestaShop/PrestaShop/pull/6435): Delete legacy code related to Discounts. Thank you @kpodemski!
 * [6437](https://github.com/PrestaShop/PrestaShop/pull/6437): Wrong label in FO when out of stock. Thank you @kpodemski!
 * [6449](https://github.com/PrestaShop/PrestaShop/pull/6449): Remove unused Symfony web/ folder, by @julienbourdeau.
 * [6451](https://github.com/PrestaShop/PrestaShop/pull/6451): Use Controller::ajaxDie() method instead of die(). Thank you @jherry!
 * [6473](https://github.com/PrestaShop/PrestaShop/pull/6473): Fixed sql prevent with intval, by @aleeks.
 * [6479](https://github.com/PrestaShop/PrestaShop/pull/6479): Fixed supplier label & create method for supplier/manufacturer image, by @aleeks.
 * [6482](https://github.com/PrestaShop/PrestaShop/pull/6482): Deleted variable already defined, by @aleeks.
 * [6483](https://github.com/PrestaShop/PrestaShop/pull/6483): Escape translations for AddJsDefL, by @julienbourdeau.
 * [6486](https://github.com/PrestaShop/PrestaShop/pull/6486): Handle no limit for post_max_size in file uploads, by @quetzacoalt91.
 * [6491](https://github.com/PrestaShop/PrestaShop/pull/6491): Rework template calls for module, by @julienbourdeau.
 * [6494](https://github.com/PrestaShop/PrestaShop/pull/6494): transformToCustomer not moves the default group from Guest to Customer. Thank you @ecomm360!
 * [6502](https://github.com/PrestaShop/PrestaShop/pull/6502): Introduced sf entity in Smarty router, by @mickaelandrieu.
 * [6511](https://github.com/PrestaShop/PrestaShop/pull/6511): Install emails pack, by @maximebiloe.
 * [6512](https://github.com/PrestaShop/PrestaShop/pull/6512): Fixed Product::getPricesDrop SQL query, by @quetzacoalt91.
 * [6515](https://github.com/PrestaShop/PrestaShop/pull/6515): Shows company in BO search if B2B is enabled. Thank you @n-wouda!
 * [6520](https://github.com/PrestaShop/PrestaShop/pull/6520): Fixed hardcoded group id in getNewProducts. Thank you @turtl3!
 * [6524](https://github.com/PrestaShop/PrestaShop/pull/6524): Fixed specific price display, by @mickaelandrieu.
 * [6536](https://github.com/PrestaShop/PrestaShop/pull/6536): Fixe variable name in Employee::getByEmail. Thank you @pkshetlie!
 * [6542](https://github.com/PrestaShop/PrestaShop/pull/6542): Added intl requirements, by @mickaelandrieu.
 * [6606](https://github.com/PrestaShop/PrestaShop/pull/6606): Fixed wording for BO, by @aleeks.
 * [6608](https://github.com/PrestaShop/PrestaShop/pull/6608): Fix wrong domains, by @maximebiloe.
 * [6617](https://github.com/PrestaShop/PrestaShop/pull/6617): Simple ObjectModel performance improvement. Thank you @firstred!
 * [6618](https://github.com/PrestaShop/PrestaShop/pull/6618): Invalidate Product cache on time. Thank you @firstred!
 * [6622](https://github.com/PrestaShop/PrestaShop/pull/6622): Remove index.php in upload folder. Thank you @firstred!
 * [6635](https://github.com/PrestaShop/PrestaShop/pull/6635): Fix feature update parent call. Thank you @firstred!


### Installer

 * [6148](https://github.com/PrestaShop/PrestaShop/pull/6148): Wrong variables in installer's strings, by @xborderie.
 * [6354](https://github.com/PrestaShop/PrestaShop/pull/6354): Updated demo products prices, by @thierrymarianne.
 * [6362](https://github.com/PrestaShop/PrestaShop/pull/6362): Prevented SQL injections, by @thierrymarianne.
 * [6371](https://github.com/PrestaShop/PrestaShop/pull/6371): Translate main menu in FR, by @alexeven.
 * [6388](https://github.com/PrestaShop/PrestaShop/pull/6388): Fix legacy ISO code for spanish. Thank you @ecomm360!
 * [6401](https://github.com/PrestaShop/PrestaShop/pull/6401): Added missing backticks, by @thierrymarianne.
 * [6410](https://github.com/PrestaShop/PrestaShop/pull/6410): Made cache parent directories recursively, by @thierrymarianne.
 * [6412](https://github.com/PrestaShop/PrestaShop/pull/6412): Adding Danish translation to installer, by @alexeven.
 * [6429](https://github.com/PrestaShop/PrestaShop/pull/6429): Keep CMS HTML code when upgrading. Thank you @kpodemski & @jd440!
 * [6465](https://github.com/PrestaShop/PrestaShop/pull/6465): Adds australian states and fixes australian address format, by @vincentbz.
 * [6468](https://github.com/PrestaShop/PrestaShop/pull/6468): Translate missing menu strings into Italian. Thank you @ginodev!
 * [6471](https://github.com/PrestaShop/PrestaShop/pull/6471): Danish translation for installer. Thank you @casper-o!
 * [6521](https://github.com/PrestaShop/PrestaShop/pull/6521): Updated Indonesian state. Thank you @prestanesia!
 * [6537](https://github.com/PrestaShop/PrestaShop/pull/6537): Fixed the default employee profiles, by @vincentbz.
 * [6543](https://github.com/PrestaShop/PrestaShop/pull/6543): Few edits to Danish installer meta.xml, by @alexeven.
 * [6544](https://github.com/PrestaShop/PrestaShop/pull/6544): Fix some update SQL queries, by @maximebiloe.
 * [6548](https://github.com/PrestaShop/PrestaShop/pull/6548): Remove pack JS in HTML feature, by @julienbourdeau.
 * [6607](https://github.com/PrestaShop/PrestaShop/pull/6607): Added a check on directories filled in open_basedir option, by @mickaelandrieu.
 * [6664](https://github.com/PrestaShop/PrestaShop/pull/6664): Fix require files during install, by @maximebiloe.


### Tests

 * [6685](https://github.com/PrestaShop/PrestaShop/pull/6685): Chrome54 is not available on webdriver.io yet, by @mickaelandrieu.
 
 
See all the PRs merged into the 'develop' codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20merged%3A2016-09-12..2016-10-16%20is%3Aclosed%20sort%3Acreated-asc%20base%3Adevelop%20).

 
## Code changes in '1.6.1.x' branch (for 1.6 patch versions)
 
### Back office

 * [5831](https://github.com/PrestaShop/PrestaShop/pull/5831): Take order state unremovable flag into account. Thank you @erouvier29!
 * [5847](https://github.com/PrestaShop/PrestaShop/pull/5847): Fix partial refund cart rules tax method. Thank you @shaffe-fr!
 * [5965](https://github.com/PrestaShop/PrestaShop/pull/5965): Align select in table headers. Thank you @mcdado!
 * [5998](https://github.com/PrestaShop/PrestaShop/pull/5998): Fix admin tabs saving. Thank you @123monsite-regis!
 * [6457](https://github.com/PrestaShop/PrestaShop/pull/6457): Update sample csv customer file, by @aleeks.
 * [6514](https://github.com/PrestaShop/PrestaShop/pull/6514): Fix translations match regular expression in AdminTranslationsController. Thank you @casper-o!
 * [6621](https://github.com/PrestaShop/PrestaShop/pull/6621): Fix missing translations count on AdminTranslations BO Page. Thank you @firstred!
 * [6626](https://github.com/PrestaShop/PrestaShop/pull/6626): Fix detection of APCu on Performance page. Thank you @firstred!
 * [6630](https://github.com/PrestaShop/PrestaShop/pull/6630): Automatically fill link_rewrite on new CMS category page. Thank you @firstred!
 * [6631](https://github.com/PrestaShop/PrestaShop/pull/6631): Fix filtering on state in monitoring BO page. Thank you @firstred!
 * [6634](https://github.com/PrestaShop/PrestaShop/pull/6634): Fix multilang link rewrite import. Thank you @firstred!
 * [6643](https://github.com/PrestaShop/PrestaShop/pull/6643): Fix duplicate rows in product listing. Thank you @123monsite-regis!
 * [6651](https://github.com/PrestaShop/PrestaShop/pull/6651): Prevent default category to be reset when already defined during import. Thank you @firstred!
 
 
### Core

 * [5570](https://github.com/PrestaShop/PrestaShop/pull/5570): Fix isAllProductsInStock calculation. Thank you @firstred!
 * [6190](https://github.com/PrestaShop/PrestaShop/pull/6190): Fix link to product in shopping cart. Thank you @firstred!
 * [6616](https://github.com/PrestaShop/PrestaShop/pull/6616): Fix Db PDO getBestEngine. Thank you @firstred!
 * [6623](https://github.com/PrestaShop/PrestaShop/pull/6623): Remove index.php in upload folder. Thank you @firstred!
 * [6636](https://github.com/PrestaShop/PrestaShop/pull/6636): Fix feature update parent call. Thank you @firstred!
 * [6652](https://github.com/PrestaShop/PrestaShop/pull/6652): Fix processing large messages from IMAP. Thank you @firstred!

 
### Installer

 * [6159](https://github.com/PrestaShop/PrestaShop/pull/6159): Add zipcode formats for Afghanistan and Egypt. Thank you @enumag!
 * [6663](https://github.com/PrestaShop/PrestaShop/pull/6663): Fix require files during install, by @maximebiloe.

 
See all the PRs merged into the '1.6.1.x' codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20merged%3A2016-09-12..2016-10-16%20is%3Aclosed%20sort%3Acreated-asc%20base%3A1.6.1.x).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @123monsite-regis, @antho-girard, @casper-o, @ecomm360, @enumag, @erouvier29, @firstred, @ginodev, @hiousi, @idnovate, @jd440, @jherry, @kermes, @kioob, @kpodemski, @m03g, @maidmaid, @martinfojtik, @mcdado, @n-wouda, @nobodaddy, @okom3pom, @phpmadman, @pkshetlie, @pranid, @prestamodule, @prestanesia, @shaffe-fr, @turtl3, and @zuzul!! Special thanks to @firstred for all those PRs he contributed :) <br/>
Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/browse/BOOM/?selectedTab=com.atlassian.jira.jira-projects-plugin:summary-panel)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
