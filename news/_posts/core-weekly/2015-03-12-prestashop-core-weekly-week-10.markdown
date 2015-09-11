---
layout: post
title:  "PrestaShop Core Weekly - Week 10"
subtitle: "An inside look at PrestaShop"
date:   2015-03-12 14:14:47
author:  [ xavierborderie ]
icon: fa-calendar
tags:
 - core-weekly
---

Hi everyone, and welcome to the second edition of the PrestaShop Core Weekly post, focusing on the activity from March 2nd to March 8th of 2015.
As last week's Core Weekly, I'll highlight some of the more important happenings in and around the Core of PrestaShop.

## Milestones

Last week saw the release of [version 1.6.0.14](https://www.prestashop.com/forums/topic/423651-new-release-prestashop-16014/), right after a big week which saw two releases on two consecutive days, [1.6.0.12 and 1.6.0.13](https://www.prestashop.com/forums/topic/428304-prestashop-core-weekly-week-10/). As you can see, the PrestaShop team is willing to go the extra mile to make sure that the user have the best e-commerce software in the industry, and are not willing to compromise, even if it means pushing a new version because of newfound blocker bug.
[See the (short) changelog for 1.6.0.14](https://www.prestashop.com/en/developers-versions/changelog/1.6.0.14).

## Code changes

Now, onto the past week, starting from Monday, March 2nd to Sunday, March 8th.

### Notable accepted pull requests:

* [2567](https://github.com/PrestaShop/PrestaShop/pull/2567): PHPDocs + Code formatting + Refractoring for CategoryController. Thank you gskema!
* [2547](https://github.com/PrestaShop/PrestaShop/pull/2547): FO: re-open customer thread from history page. Thanks Axome!
* [2544](https://github.com/PrestaShop/PrestaShop/pull/2544): Project: Huge work on code standardization. Thanks PrestaEdit!

Find all PRs closed last week [here](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+merged%3A%3E2015-03-02+is%3Aclosed)

### Notable closed Forge tickets:

* [PSCSX-4733](http://forge.prestashop.com/browse/PSCSX-4733): threads statuses could not be translated
* [PSCSX-4857](http://forge.prestashop.com/browse/PSCSX-4857): Wrong product url translation
* [PSCSX-4853](http://forge.prestashop.com/browse/PSCSX-4853): classes/productsale.php crash
* [PSCSX-4850](http://forge.prestashop.com/browse/PSCSX-4850): employee permissions: employee has no access to state in addresses when Localization -> state is not selected
* [PSCSX-4816](http://forge.prestashop.com/browse/PSCSX-4816): Property Carrier->name is not valid causes multiple bugs
* [PSCSX-4791](http://forge.prestashop.com/browse/PSCSX-4791): Unable to add stock (classic system) after disabling advanced stock

Find all Forge tickets closed last week here: [click here!](http://forge.prestashop.com/browse/PSCSX-4775?jql=project%20%3D%20PSCSX%20AND%20status%20in%20%28Resolved%2C%20Closed%29%20AND%20resolution%20in%20%28Fixed%2C%20Done%29%20AND%20resolved%20%3E%3D%202015-03-02%20AND%20resolved%20%3C%3D%202015-03-08%20ORDER%20BY%20updated%20DESC)

### Notable commits to the 1.6 branch:

* Modules names should be lowercase [here](https://github.com/PrestaShop/PrestaShop/commit/e501e7fecb8d7f1fe621458665faf544d9fe9108)
* Cleaner tests directory, removed useless files, separated unit tests from integration tests [here](https://github.com/PrestaShop/PrestaShop/commit/c04c8aeec1a779b07dd4fde42366c3085124e79b)
* IN => EXISTS optimizations [here](https://github.com/PrestaShop/PrestaShop/commit/c55f7dfa5303dd485aab8bcb82494667a2591c4e)
* Merge remote-tracking branch 'upstream/1.6' into 1.6-upstream [here](https://github.com/PrestaShop/PrestaShop/commit/de73e84bff780a125038070454c3198c1621670f)

That's it for last week!
It's the second edition of Core Weekly, so if you have suggestions or see anything that I missed, please comment!
