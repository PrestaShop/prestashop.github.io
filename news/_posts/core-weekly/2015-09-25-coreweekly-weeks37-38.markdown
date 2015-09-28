---
layout: post
title:  "PrestaShop Core Weekly - Weeks 37 & 38"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-09-25 16:37:41
author: xavierborderie
icon: fa-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop core codebase during the last two weeks, from Monday 7th of September to Sunday 20th.


## Milestones

The current stable version of PrestaShop is [version 1.6.1.1 of PrestaShop](http://build.prestashop.com/news/1611-maintenance-release/), and this week we released the Release Candidate for the second [patch version](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/) of branch 1.6.1.x: [we need you to test that v1.6.1.2 RC1](http://build.prestashop.com/news/prestashop-1-6-1-2-rc1/) is ready for production and does indeed fixes the closed issues!

Meanwhile, the team is hard at work on version 1.7.0.0, and we published some information on this blog already:

 * [Initial launch of 1.7.0.0 project](http://build.prestashop.com/news/version-1-7-0-0-is-underway/).
 * [Starter Theme collaborative project](http://build.prestashop.com/news/starter-theme-kickoff/).
 * [Recent technological changes in 1.7.0.0 codebase](http://build.prestashop.com/news/cldr-composer-jshint/): CLDR, Composer, JSHint, etc.
 
More information is coming soon, among which explanation of where we aim to take the [new architecture that was introduced in v1.6.1.0](http://build.prestashop.com/news/new-architecture-1-6-1-0/), and details about some forthcoming design changes.

Do you want to contribute your code skills to the PrestaShop project? [Make sure your Git setup is correctly configured](http://build.prestashop.com/howtos/misc/set-up-your-git-for-contributing/), and that you follow our [new branching model](http://build.prestashop.com/news/introducing-new-branching-model-prestashop/)! Then, [read these documentation pages](http://doc.prestashop.com/display/PS16/Contributing+to+PrestaShop).

The Core Weekly will now have separate sections for major branches. You can see the work being done on the following branches: 1.6.1.x, develop, and feat/starter-theme.

Of note among the merged PRs since the last Core Weekly Report:

 * We reached PR [4000](https://github.com/PrestaShop/PrestaShop/pull/4000)!
 * In PR [3931](https://github.com/PrestaShop/PrestaShop/pull/3931), Core developer @julienbourdeau removed the Mobile Theme feature.
 * In PR [3952](https://github.com/PrestaShop/PrestaShop/pull/3952), Core developer @julienbourdeau introduced widgets!
 * In Pr [3969](https://github.com/PrestaShop/PrestaShop/pull/3969), Core developer @julienbourdeau introduced Validate::isDateOrNull
 


## Code changes in 1.6.1.x

Let's review the merged pull-requests on the 1.6.1.x branch since the last Core Weekly Report!


#### Front office

 * [3764](https://github.com/PrestaShop/PrestaShop/pull/3764): Fix current_url variable used in pagination. Thank you gskema!
 * [3958](https://github.com/PrestaShop/PrestaShop/pull/3958): gets the carrier available with weight attribute. Thank you DogSports!
 * [3861](https://github.com/PrestaShop/PrestaShop/pull/3861): take account of PS_SSL_ENABLED_EVERYWHERE in file manager config, by @gRoussac.
 * [3789](https://github.com/PrestaShop/PrestaShop/pull/3789): Fix negative prices on product page, by @gRoussac.
 * [3831](https://github.com/PrestaShop/PrestaShop/pull/3831): Fix dead code in product-list.tpl, by @gRoussac.
 * [3941](https://github.com/PrestaShop/PrestaShop/pull/3941): Table 'ps_product_reductions' already exists, by @gRoussac.
 * [3917](https://github.com/PrestaShop/PrestaShop/pull/3917): Fix fatal error Property CustomerThread->id_order is not valid, by @gRoussac.
 * [3975](https://github.com/PrestaShop/PrestaShop/pull/3975): Fix OrderHistory multishop getCustomerOrders shared orders, by @gRoussac.
 * [3950](https://github.com/PrestaShop/PrestaShop/pull/3950): Fix notice on customizedDatas, by @gRoussac.
 * [4026](https://github.com/PrestaShop/PrestaShop/pull/4026): Footer fix in default-bootstrap theme: nocache on copyright year, by @xGouley.
 * [4027](https://github.com/PrestaShop/PrestaShop/pull/4027): fix when clicking filters labels, not checkbox, by @xGouley.
 * [3829](https://github.com/PrestaShop/PrestaShop/pull/3829): Fix no alt on subcategories images, by @gRoussac.
 * [3830](https://github.com/PrestaShop/PrestaShop/pull/3830): Fix missing nofollow in pagination.tpl, by @gRoussac.
 * [3809](https://github.com/PrestaShop/PrestaShop/pull/3809): newsletter flag for customer if previously registred as guest, by @gRoussac.
 * [3837](https://github.com/PrestaShop/PrestaShop/pull/3837): Css fix for TOS width on small devices, by @gRoussac.
 * [3908](https://github.com/PrestaShop/PrestaShop/pull/3908): Possible error Cannot read property 'iso_code' of undefined, by @gRoussac.
 * [4034](https://github.com/PrestaShop/PrestaShop/pull/4034): Use floor() instead of round() to show correct amount of loyalty points. Thank you @sambrista!
 * [3968](https://github.com/PrestaShop/PrestaShop/pull/3968): Top menu not always active on mobile. Thank you @eric-rouvier!
 

#### Back office

 * [3925](https://github.com/PrestaShop/PrestaShop/pull/3925): Fix performance issue with tags, by @jocel1.
 * [3926](https://github.com/PrestaShop/PrestaShop/pull/3926): Fix performance issue with tags, by @jocel1.
 * [3943](https://github.com/PrestaShop/PrestaShop/pull/3943): fix filter home category display, by @gRoussac.
 * [3898](https://github.com/PrestaShop/PrestaShop/pull/3898): Impossible to add products via StockManager. Thank you @eric-rouvier!
 * [3973](https://github.com/PrestaShop/PrestaShop/pull/3973): Fix parse serror when quotes in import file name, by @gRoussac.
 * [3971](https://github.com/PrestaShop/PrestaShop/pull/3971): Could not bulk delete attributes, by @gRoussac.
 * [3940](https://github.com/PrestaShop/PrestaShop/pull/3940): Bad invoice creation if delivery slip already exists. Thank you @eric-rouvier!
 * [3884](https://github.com/PrestaShop/PrestaShop/pull/3884): Fix wrong "back o list" href on AdminCategories, by @gRoussac.
 * [4006](https://github.com/PrestaShop/PrestaShop/pull/4006): Some controllers may want to use Filters without an objectModel. Thank you @hiousi!
 * [3991](https://github.com/PrestaShop/PrestaShop/pull/3991): Make picking products easier, by @dave-lp.
 * [3847](https://github.com/PrestaShop/PrestaShop/pull/3847): cart rules don't retain customer name/email, by @gRoussac.
 * [3967](https://github.com/PrestaShop/PrestaShop/pull/3967): Fix bad id for email translations toggle, by @gRoussac.
 * [3955](https://github.com/PrestaShop/PrestaShop/pull/3955): Fix possible Exception in product tabs loading, by @gRoussac.
 * [3889](https://github.com/PrestaShop/PrestaShop/pull/3889): Fix typo Warehouse::$idintval, by @gRoussac.
 * [4017](https://github.com/PrestaShop/PrestaShop/pull/4017): Fix id_connections in last connections, by @gRoussac.
 * [3982](https://github.com/PrestaShop/PrestaShop/pull/3982): Fix bad action display when sub categories disabled, by @gRoussac.
 * [3954](https://github.com/PrestaShop/PrestaShop/pull/3954): Could not re enable module on devices, by @gRoussac.
 * [4025](https://github.com/PrestaShop/PrestaShop/pull/4025): Fix max width 96px on module logo on "not trusted module" popin, by @xGouley.
 * [4029](https://github.com/PrestaShop/PrestaShop/pull/4029): Fix e-mail preview, by @maximebiloe.
 * [4005](https://github.com/PrestaShop/PrestaShop/pull/4005): Fix AdminBackupControllerCore and timeout, by @gRoussac.
 * [3918](https://github.com/PrestaShop/PrestaShop/pull/3918): Fix bad table id after DND, by @gRoussac.
 * [3939](https://github.com/PrestaShop/PrestaShop/pull/3939): Fix commas in carrier prices wizard, by @gRoussac.
 * [3953](https://github.com/PrestaShop/PrestaShop/pull/3953): Fix virtual product Duplicate entry, by @gRoussac.
 * [3752](https://github.com/PrestaShop/PrestaShop/pull/3752): You can now have a "from" date and a "to" date like '0000-00-00 00:00:00'. Thank you @prestamodule!


#### Core

 * [3927](https://github.com/PrestaShop/PrestaShop/pull/3927): Add `iso_code_num` to Currency entity, by @julienbourdeau.
 * [3932](https://github.com/PrestaShop/PrestaShop/pull/3932): Bad norm function getCountry, by @gRoussac.
 * [3945](https://github.com/PrestaShop/PrestaShop/pull/3945): Fix 1.6.1.x sql upgrade files, by @Shudrum.
 * [3972](https://github.com/PrestaShop/PrestaShop/pull/3972): Fix undefined variable delivery_address in classes/pdf/HTMLTemplateOrderSlip.php on line 165, by @gRoussac.
 * [3970](https://github.com/PrestaShop/PrestaShop/pull/3970): fix bad cache_default_attribute, + bad clear cache on colors, by @gRoussac.
 * [3999](https://github.com/PrestaShop/PrestaShop/pull/3999): Typo, by @hiousi & @gRoussac.
 * [4001](https://github.com/PrestaShop/PrestaShop/pull/4001): Catalog Rule for a specific shop do not save, by @gRoussac.
 * [4003](https://github.com/PrestaShop/PrestaShop/pull/4003): Fix hard coded table name in configuration class, by @gRoussac.
 * [3777](https://github.com/PrestaShop/PrestaShop/pull/3777): Cart / Correct cache_key name for getOrderedCartRulesIds(). Thank you @prestamodule!
 * [4009](https://github.com/PrestaShop/PrestaShop/pull/4009): Allow invoice template override, by @jnadaud.
 * [3778](https://github.com/PrestaShop/PrestaShop/pull/3778): Give the possibility to filter on active field in getCustomers(), by @gRoussac.
 * [3780](https://github.com/PrestaShop/PrestaShop/pull/3780): Use DB delete() method in cleanGroups() in Product class. Thank you @prestamodule!
 * [3769](https://github.com/PrestaShop/PrestaShop/pull/3769): Use DB delete() method in deleteAccessories() & deleteFromAccessories() methods in Product class. Thank you @prestamodule!
 * [3765](https://github.com/PrestaShop/PrestaShop/pull/3765): Call orderbyPrice() only if there are some results. Thank you @prestamodule!
 * [3938](https://github.com/PrestaShop/PrestaShop/pull/3938): Property StockAvailable->id_product is empty, by @gRoussac.
 * [4016](https://github.com/PrestaShop/PrestaShop/pull/4016): DbMySQLi and socket + add driver in AdminInformation, by @gRoussac.
 * [3784](https://github.com/PrestaShop/PrestaShop/pull/3784): Use DB delete() method in deleteCategoriesFromShop(). Thank you @prestamodule!
 * [3795](https://github.com/PrestaShop/PrestaShop/pull/3795): Fix case statement in HTMLTemplateInvoice. Thank you @gskema!
 * [3782](https://github.com/PrestaShop/PrestaShop/pull/3782): Use DB delete() method in cleanGroups() & cleanAssoProducts(). Thank you @prestamodule!
 * [3838](https://github.com/PrestaShop/PrestaShop/pull/3838): Reflect 6 decimals for product weight according to db structure, by @gRoussac.
 * [3987](https://github.com/PrestaShop/PrestaShop/pull/3987): Fix #PSCSX-6814, bad sql query in Lanqguage::loadUpdateSQL(), by @gRoussac.
 * [4028](https://github.com/PrestaShop/PrestaShop/pull/4028): Media::getMediaPath improved, by @tchauviere.
 * [4014](https://github.com/PrestaShop/PrestaShop/pull/4014): enable invoice number reset, by @gRoussac.
 * [3936](https://github.com/PrestaShop/PrestaShop/pull/3936): Fix inconsistent cart rule country restriction, by @gRoussac.
 * [4011](https://github.com/PrestaShop/PrestaShop/pull/4011): add category thumbnail, by @gRoussac.
 * [4037](https://github.com/PrestaShop/PrestaShop/pull/4037): Fixed currency convertion. Thank you @Amazzing!


#### Modules

 * [4012](https://github.com/PrestaShop/PrestaShop/pull/4012): Blocklanguages add hreflang and rel alternate to the links for a better SEO and avoid duplicate content. Thank you @cgordenne!
 * [4021](https://github.com/PrestaShop/PrestaShop/pull/4021): Add rel attribut for google plus link in blocksocial, by @maximebiloe.
 * [4022](https://github.com/PrestaShop/PrestaShop/pull/4022): Correct points on product load in loyalty module, by @maximebiloe.
 * [4024](https://github.com/PrestaShop/PrestaShop/pull/4024): Add to cart button for accessories, by @maximebiloe.



## Code changes in 1.7.0.0-develop

Let's review the merged pull-requests on the 'develop' branch since the last Core Weekly Report!

Note that the Start Theme repo (see next section) is entirely part of the PrestaShop 1.7.0.0 project.


#### Back office

 * [4023](https://github.com/PrestaShop/PrestaShop/pull/4023): Import registration date for customer, by @maximebiloe.
 * [4043](https://github.com/PrestaShop/PrestaShop/pull/4043): Enable product pack and product dematerialized for accessories. Thank you @quadrateam!
 

#### Core

 * [3183](https://github.com/PrestaShop/PrestaShop/pull/3183): password multiple hash and new salt. Thank you @sfroment42!
 * [3969](https://github.com/PrestaShop/PrestaShop/pull/3969): Introducing Validate::isDateOrNull, by @julienbourdeau.
 * [3977](https://github.com/PrestaShop/PrestaShop/pull/3977): fix obsolete upgrade sql file, by @kelu95.
 * [3916](https://github.com/PrestaShop/PrestaShop/pull/3916): Remove _includeVars ; never more used. Thank you @prestamodule!


 
## Code changes in Starter Theme

Let's review the merged pull-requests on the 'feat/starter-theme' branch since the last Core Weekly Report!

 * [3921](https://github.com/PrestaShop/PrestaShop/pull/3921): Home now renders / Provide sane defaults for page info, by @djfm.
 * [3922](https://github.com/PrestaShop/PrestaShop/pull/3922): load theme.css, by @djfm.
 * [3924](https://github.com/PrestaShop/PrestaShop/pull/3924): Allow registering custom Smarty plugins. Thank you @alexsegura!
 * [3909](https://github.com/PrestaShop/PrestaShop/pull/3909): Rework front controller, by @julienbourdeau.
 * [3929](https://github.com/PrestaShop/PrestaShop/pull/3929): Product page for StarterTheme, by @maximebiloe.
 * [3930](https://github.com/PrestaShop/PrestaShop/pull/3930): Rework front controller, by @julienbourdeau.
 * [3933](https://github.com/PrestaShop/PrestaShop/pull/3933): Add body_classes to $page, by @julienbourdeau.
 * [3934](https://github.com/PrestaShop/PrestaShop/pull/3934): helper script to setup the workspace, by @djfm.
 * [3946](https://github.com/PrestaShop/PrestaShop/pull/3946): Introduce `$this->l()` for FrontController, by @julienbourdeau.
 * [3956](https://github.com/PrestaShop/PrestaShop/pull/3956): Rework/sitemap controller, by @julienbourdeau.
 * [3944](https://github.com/PrestaShop/PrestaShop/pull/3944): Rework ProductController for images and labels assignation, by @julienbourdeau.
 * [3931](https://github.com/PrestaShop/PrestaShop/pull/3931): Retire mobile theme feature (go responsive), by @julienbourdeau.
 * [3951](https://github.com/PrestaShop/PrestaShop/pull/3951): Rework stores controller, by @julienbourdeau.
 * [3952](https://github.com/PrestaShop/PrestaShop/pull/3952): Feat/starter theme widgets, by @djfm.
 * [3965](https://github.com/PrestaShop/PrestaShop/pull/3965): improve smarty hook fct : add exclude param. Thank you @prestarocket!
 * [3974](https://github.com/PrestaShop/PrestaShop/pull/3974): Rework Auth and Identity controllers, by @julienbourdeau.
 * [3966](https://github.com/PrestaShop/PrestaShop/pull/3966): Feat/starter theme categories, by @djfm.
 * [3981](https://github.com/PrestaShop/PrestaShop/pull/3981): Provide JS base url to templates & Validate::isJson needs to be static, by @djfm.
 * [3983](https://github.com/PrestaShop/PrestaShop/pull/3983): Added anchor to product url, by @djfm.
 * [3980](https://github.com/PrestaShop/PrestaShop/pull/3980): Fix little typo in getSortOptions function. Thank you @PrestanceDesign!
 * [3998](https://github.com/PrestaShop/PrestaShop/pull/3998): Fix sitemap urls, by @julienbourdeau.
 * [3992](https://github.com/PrestaShop/PrestaShop/pull/3992): Rework ProductController, by @maximebiloe.
 * [4000](https://github.com/PrestaShop/PrestaShop/pull/4000): Rework AddressesController, by @julienbourdeau.
 * [4010](https://github.com/PrestaShop/PrestaShop/pull/4010): Introduce {url} smarty function, by @julienbourdeau.
 * [4033](https://github.com/PrestaShop/PrestaShop/pull/4033): Add id_product_attribute to product URLs, by @djfm.


 
See all the PRs merged into the codebase since September 7th [here](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+merged%3A%3E2015-09-07+is%3Aclosed+sort%3Aupdated&utf8=%E2%9C%93).

Thank you to our contributors whose Pull Requests were merged since the last Core Weekly Report: [alexsegura](https://github.com/alexsegura), [cgordenne](https://github.com/cgordenne), [DogSports](https://github.com/DogSports), [eric-rouvier](https://github.com/eric-rouvier), [gskema](https://github.com/gskema), [hiousi](https://github.com/hiousi), [prestamodule](https://github.com/prestamodule), [PrestanceDesign](https://github.com/PrestanceDesign), [prestarocket](https://github.com/prestarocket), [quadrateam](https://github.com/quadrateam), [sambrista](https://github.com/sambrista), and [sfroment42](https://github.com/sfroment42). Also, thank you to the contributors who's PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, read those:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
