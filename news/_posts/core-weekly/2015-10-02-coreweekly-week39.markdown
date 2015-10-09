---
layout: post
title:  "PrestaShop Core Weekly - Week 39"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-10-02 14:37:41
author: xavierborderie
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop core codebase during last week, from Monday 21st of September to Sunday 27th.


## Milestones

The current stable version of PrestaShop is [version 1.6.1.1 of PrestaShop](http://build.prestashop.com/news/1611-maintenance-release/), and last week we released the Release Candidate for the second [patch version](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/) of branch 1.6.1.x: [we need you to test that v1.6.1.2 RC1](http://build.prestashop.com/news/prestashop-1-6-1-2-rc1/) is ready for production and does indeed fix the closed issues! An RC2 should make its way very soon.

Meanwhile, the team is hard at work on version 1.7.0.0, and we published some information on this blog already:

 * [Initial launch of 1.7.0.0 project](http://build.prestashop.com/news/version-1-7-0-0-is-underway/).
 * [Starter Theme collaborative project](http://build.prestashop.com/news/starter-theme-kickoff/).
 * [Recent technological changes in 1.7.0.0 codebase](http://build.prestashop.com/news/cldr-composer-jshint/): CLDR, Composer, JSHint, etc.

More information are coming soon, among which explanation of where we aim to take the [new architecture that was introduced in v1.6.1.0](http://build.prestashop.com/news/new-architecture-1-6-1-0/), and details about some forthcoming design changes.

Do you want to contribute your code skills to the PrestaShop project? [Make sure your Git setup is correctly configured](http://build.prestashop.com/howtos/misc/set-up-your-git-for-contributing/), and that you follow our [new branching model](http://build.prestashop.com/news/introducing-new-branching-model-prestashop/)! Then, [read these documentation pages](http://doc.prestashop.com/display/PS16/Contributing+to+PrestaShop).



## Code changes in 1.6.1.x

Here are the merged pull-requests on the [1.6.1.x branch](https://github.com/PrestaShop/PrestaShop/tree/1.6.1.x) since the last Core Weekly Report!


#### Text changes

 * [4071](https://github.com/PrestaShop/PrestaShop/pull/4071): typo in README.md. Thank you @iNem0o!


#### Front office

 * [3876](https://github.com/PrestaShop/PrestaShop/pull/3876): name of select multiple in Form Helper TPL. Thank you @fenaille!
 * [3865](https://github.com/PrestaShop/PrestaShop/pull/3865): minimum order value outside order steps, by @gRoussac.
 * [3887](https://github.com/PrestaShop/PrestaShop/pull/3887): Fix stars because not_uniform is missing. Thank you @bumarius!
 * [4050](https://github.com/PrestaShop/PrestaShop/pull/4050): Avoid to see your shop on the Pacific ocean. Thank you @Eolia!
 * [3853](https://github.com/PrestaShop/PrestaShop/pull/3853): no validation on non multishop field in multishop, by @gRoussac.
 * [4087](https://github.com/PrestaShop/PrestaShop/pull/4087): Add availability microdata data when product is purchasable out of stock. Thank you @mcdado!


#### Back office

 * [3752](https://github.com/PrestaShop/PrestaShop/pull/3752): You can now have a "from" date and a "to" date like '0000-00-00 00:00:00'. Thank you @prestamodule!
 * [4015](https://github.com/PrestaShop/PrestaShop/pull/4015): Meta title and description use textarea, by @gRoussac.
 * [4045](https://github.com/PrestaShop/PrestaShop/pull/4045): Unable to translate title. Thank you @Eolia!
 * [4046](https://github.com/PrestaShop/PrestaShop/pull/4046): fixed bug Unable to translate header. Thank you @Eolia!
 * [4053](https://github.com/PrestaShop/PrestaShop/pull/4053): no validation on non multishop field in multishop, by @gRoussac.
 * [4035](https://github.com/PrestaShop/PrestaShop/pull/4035): fix column icon width. Thank you @prestamodule!
 * [4051](https://github.com/PrestaShop/PrestaShop/pull/4051) & [4052](https://github.com/PrestaShop/PrestaShop/pull/4052): fixed bug Unable to translate header. Thank you @Eolia!
 * [3935](https://github.com/PrestaShop/PrestaShop/pull/3935): Fix product / category date_upd when position change, by @gRoussac.
 * [4065](https://github.com/PrestaShop/PrestaShop/pull/4065): Bad sql association for date_upd of product and categories, could not reorder, by @gRoussac.
 * [3665](https://github.com/PrestaShop/PrestaShop/pull/3665): Pass empty firstname and lastname email vars to mail template. Thank you @gskema!
 * [4069](https://github.com/PrestaShop/PrestaShop/pull/4069): Fix meta description, by @gRoussac.
 * [4081](https://github.com/PrestaShop/PrestaShop/pull/4081): Fixed bug while testing module. Thank you @brouillon!


#### Core

 * [3766](https://github.com/PrestaShop/PrestaShop/pull/3766): Use null direclty instead of create new var as null. Thank you @prestamodule!
 * [3767](https://github.com/PrestaShop/PrestaShop/pull/3767): Change getIdProductAttributeMostExpensive() method. Thank you @prestamodule!
 * [3768](https://github.com/PrestaShop/PrestaShop/pull/3768): Change getDefaultIdProductAttribute() method. Thank you @prestamodule!
 * [4007](https://github.com/PrestaShop/PrestaShop/pull/4007): add index on search_index table, by @gRoussac and @jocel1.
 * [3875](https://github.com/PrestaShop/PrestaShop/pull/3875): implements data-keepinline for scripts not being defered, by @gRoussac.
 * [4067](https://github.com/PrestaShop/PrestaShop/pull/4067): Error in foreign field name. Thank you @djbuch!
 * [4068](https://github.com/PrestaShop/PrestaShop/pull/4068): Adding few casts to ValidateOrder, by @gRoussac.


#### Modules

 * [4059](https://github.com/PrestaShop/PrestaShop/pull/4059): Fix for blocklayered.js. Thank you @kpodemski!


#### Installer

 * [3979](https://github.com/PrestaShop/PrestaShop/pull/3979): New safe remove index, by @Shudrum.
 * [3942](https://github.com/PrestaShop/PrestaShop/pull/3942): could not install in Czech, by @gRoussac.




## Code changes in 1.7.0.0-develop

Now let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

Note that the Start Theme repo (see next section) is entirely part of the PrestaShop 1.7.0.0 project.


#### Front office

 * [3895](https://github.com/PrestaShop/PrestaShop/pull/3895): Added new hooks in authentication. Thank you @paeddl!


#### Back office

 * [4043](https://github.com/PrestaShop/PrestaShop/pull/4043): Enable product pack and product dematerialized for accessories. Thank you @quadrateam!


#### Core

 * [3860](https://github.com/PrestaShop/PrestaShop/pull/3860): fix alias function declaration, by @kelu95.
 * [3661](https://github.com/PrestaShop/PrestaShop/pull/3661): added new hook on customer group save before clean groups. Thank you @vAugagneur!
 * [3660](https://github.com/PrestaShop/PrestaShop/pull/3660): added new hook on customer group save. Thank you @vAugagneur!
 * [4041](https://github.com/PrestaShop/PrestaShop/pull/4041): Show display as deprecated for customerIdExists(). Thank you @prestamodule!
 * [4056](https://github.com/PrestaShop/PrestaShop/pull/4056): fix bad serbia iso code for CLDR, by @kelu95.


#### Unit test

 * [4057](https://github.com/PrestaShop/PrestaShop/pull/4057): fix static method call, by @kelu95.




## Code changes in Starter Theme

Finally, these are the merged pull-requests on the 'feat/starter-theme' branch since the last Core Weekly Report!

 * [4042](https://github.com/PrestaShop/PrestaShop/pull/4042): Feat/starter theme blockcart, by @djfm.
 * [4036](https://github.com/PrestaShop/PrestaShop/pull/4036): Stop infinite loop, by @djfm.
 * [4031](https://github.com/PrestaShop/PrestaShop/pull/4031): Directory correction. Thank you @dkarvounaris!
 * [4055](https://github.com/PrestaShop/PrestaShop/pull/4055): Rework ProductController, by @maximebiloe.
 * [4073](https://github.com/PrestaShop/PrestaShop/pull/4073): Added Customizations Handling to CartPresenter, by @djfm.
 * [4076](https://github.com/PrestaShop/PrestaShop/pull/4076): Rework/address with new repo, by @julienbourdeau.
 * [4083](https://github.com/PrestaShop/PrestaShop/pull/4083): Introduce notifications for front office, by @julienbourdeau.
 * [4091](https://github.com/PrestaShop/PrestaShop/pull/4091): Product Customization, by @djfm.
 * [4092](https://github.com/PrestaShop/PrestaShop/pull/4092): let's not wait for packagist, by @djfm.
 * [4088](https://github.com/PrestaShop/PrestaShop/pull/4088): Create directory structure for checkout, by @julienbourdeau. Thank you @dkarvounaris!
 * [4099](https://github.com/PrestaShop/PrestaShop/pull/4099): CSS for blockcart links, by @djfm.
 * [4100](https://github.com/PrestaShop/PrestaShop/pull/4100): aliases need the autoload, by @djfm.
 * [4104](https://github.com/PrestaShop/PrestaShop/pull/4104): fixed notice in ProductController::addCustomizedData, by @djfm.
 * [4103](https://github.com/PrestaShop/PrestaShop/pull/4103): Cleaned blockcontact for StarterTheme & Classic, by @djfm.




See all the PRs merged into the codebase since September 21st [here](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+merged%3A%3E2015-09-07+is%3Aclosed+sort%3Aupdated&utf8=%E2%9C%93).

Thank you to our contributors whose Pull Requests were merged since the last Core Weekly Report: [brouillon](https://github.com/brouillon), [bumarius](https://github.com/bumarius), [djbuch](https://github.com/djbuch), [Eolia](https://github.com/Eolia), [fenaille](https://github.com/fenaille), [gskema](https://github.com/gskema), [iNem0o](https://github.com/iNem0o), [kpodemski](https://github.com/kpodemski), [mcdado](https://github.com/mcdado), [paeddl](https://github.com/paeddl), [prestamodule](https://github.com/prestamodule), [quadrateam](https://github.com/quadrateam), and [vAugagneur](https://github.com/vAugagneur), Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, read those:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!




