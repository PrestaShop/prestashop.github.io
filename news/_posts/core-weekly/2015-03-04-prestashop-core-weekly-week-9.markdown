---
layout: post
title:  "PrestaShop Core Weekly - Week 9"
subtitle: "An inside look at PrestaShop"
date:   2015-03-04 17:17:47
author:  [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

Welcome to the inaugural post relating what has been going on in the development side of PrestaShop!

I aim to make this a weekly occurrence (as the title implies), in which I'll highlight some of the more important happenings in and around the Core.
In short, this is for those who do not visit [https://github.com/PrestaShop/PrestaShop/commits/1.6](https://github.com/PrestaShop/PrestaShop/commits/1.6) and [http://forge.prestashop.com/browse/PSCSX](http://forge.prestashop.com/browse/PSCSX)) on a daily basis :)


## Milestones

Last week was marked by two milestones:

* We passed 30,000 commits on the 1.6 branch! (currently closing on 30,220)
* We released version 1.6.0.12 (and hotfix 1.6.0.13), with more than 200 changes and fixes, among which:
	* Big work on refund and partial refund
	* New front office classes added to facilitate integration
	* Ability to override specific controllers with ModuleAdminControler
	* Display product images on invoices
	* Installer in French (Quebec) and Portuguese (Portugal)

See the announcement forum post here: [https://www.prestashop.com/forums/topic/418728-prestashop-16013-is-available-for-download](https://www.prestashop.com/forums/topic/418728-prestashop-16013-is-available-for-download)
And the changelog for v1.6.0.13 is here: [https://www.prestashop.com/en/developers-versions/changelog/1.6.0.13](https://www.prestashop.com/en/developers-versions/changelog/1.6.0.13)


## Community day

Thursday was also an intense day of discussions and exchanges, when a handful of community participants came to the PrestaShop office in Levallois-Perret (France) in order to talk about everything, from themes to modules, updates and module validation, the tax and rounding issues,  code quality and stability.

Participants where [prestarocket](https://www.prestashop.com/forums/user/343354-prestarocket/), [2FR3](https://www.prestashop.com/forums/user/296243-2fr3/), [doekia](https://www.prestashop.com/forums/user/41515-doekia/), [PrestaEdit](https://www.prestashop.com/forums/user/103589-j-danse/), [Atch](https://www.prestashop.com/forums/user/16609-atch/), [EoliaHack](https://www.prestashop.com/forums/user/241780-eolia/), [SamyRabih](https://www.prestashop.com/forums/user/186884-samy_r/) and [Mediacom87](https://www.prestashop.com/forums/user/672955-mediacom87/).
We plan on having more of those, with more diverse participants, soon!


## Code changes

Now, onto the past week, starting from Monday, February 23rd to Sunday, March 1st.


### Notable accepted pull requests:

* [2507](https://github.com/PrestaShop/PrestaShop/pull/2507): Fixes for taxes & rounding errors on invoice. Props djfm.
* [2509](https://github.com/PrestaShop/PrestaShop/pull/2509): BO : Add $id_cart to Message in PaymentModule::validateOrder(). Props Elitius.
* [2510](https://github.com/PrestaShop/PrestaShop/pull/2510), [2511](https://github.com/PrestaShop/PrestaShop/pull/2511), [2512](https://github.com/PrestaShop/PrestaShop/pull/2512), [2513](https://github.com/PrestaShop/PrestaShop/pull/2513): Patches fixing delivery time for virtual products. Props Nobodaddy.
* [2514](https://github.com/PrestaShop/PrestaShop/pull/2514): Employee.getEmployees and Employee.getByEmail get a $active_only parameter. Props dpiquet.
* [2516](https://github.com/PrestaShop/PrestaShop/pull/2516), [2527](https://github.com/PrestaShop/PrestaShop/pull/2527), [2539](https://github.com/PrestaShop/PrestaShop/pull/2539): PHPDoc work on FrontController, Db, Context and many other classes. Props gskema.
* [2525](https://github.com/PrestaShop/PrestaShop/pull/2525): Fixed free shipping display on invoices. Props djfm.
* [2528](https://github.com/PrestaShop/PrestaShop/pull/2528): Fixed function return value in write context in AdminWarehousesController.php. Props guestisp.

Find all PRs closed last week [here](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+merged%3A%3E2015-03-02+is%3Aclosed)


### Notable closed Forge tickets:

* [PSCSX-4773](http://forge.prestashop.com/browse/PSCSX-4773): override class installation
* [PSCSX-4488](http://forge.prestashop.com/browse/PSCSX-4488): Blockcart cover image with attributes
* [PSCSX-4627](http://forge.prestashop.com/browse/PSCSX-4627): Administration Themes : Can't install theme from directory
* [PSCSX-4738](http://forge.prestashop.com/browse/PSCSX-4738): Copy and edit product disables available for order
* [PSCSX-4646](http://forge.prestashop.com/browse/PSCSX-4646): after update quantity product is active in all stores
* [PSCSX-4109](http://forge.prestashop.com/browse/PSCSX-4109): Module installation issue with multistore
* [PSCSX-4746](http://forge.prestashop.com/browse/PSCSX-4746): CLONE - Can Not Remove Stock in Advanced Stock Manager
* [PSCSX-4538](http://forge.prestashop.com/browse/PSCSX-4538): Unexcepted HTML entities in CSV export from stock instant state

Find all Forge tickets closed last week here: [click here!](http://forge.prestashop.com/browse/PSCSX-4775?jql=project%20%3D%20PSCSX%20AND%20status%20in%20%28Resolved%2C%20Closed%29%20AND%20resolution%20in%20%28Fixed%2C%20Done%29%20AND%20resolved%20%3E%3D%202015-03-02%20AND%20resolved%20%3C%3D%202015-03-08%20ORDER%20BY%20updated%20DESC)


### Notable commits to the 1.6 branch:

* 30000th commit! [https://github.com/PrestaShop/PrestaShop/commit/be9ddb7e6a2f12dddaffe1e9fb098a64c66ecc29](https://github.com/PrestaShop/PrestaShop/commit/be9ddb7e6a2f12dddaffe1e9fb098a64c66ecc29) Props gRoussac.
* Invoice : Display shipping and wrapping breakdown by rate in case of summed taxes [https://github.com/PrestaShop/PrestaShop/commit/2d02b90f845ab75f21ec516de0d09dddef5390ad](https://github.com/PrestaShop/PrestaShop/commit/2d02b90f845ab75f21ec516de0d09dddef5390ad) Props djfm.
* jocel1 closed bugs #PSCSX-4829 and many others; dramatically improving performances.


That's it for last week!
It's the first edition of Core Weekly, so if you have suggestions or see anything that I missed, please comment!
