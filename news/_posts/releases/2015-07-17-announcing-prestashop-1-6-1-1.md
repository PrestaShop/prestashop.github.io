---
layout: post
title:  "Announcing PrestaShop 1.6.1.1"
subtitle: "Fixing the non-critical issues"
date:   2015-07-17 18:54:47
author: xavierborderie
icon: fa-check-square-o
tags:
 - 1.6.1.x
 - 1.6.1.1
 - version
 - patch
 - releases
 - development
---

We've had a lot of great feedback since the release of version 1.6.1.0 of PrestaShop. We are very happy to see that issues seem to be few, non-critical and fixable.

That being said, there are still issues here and there, and while the team is already at work on the next major version, we do not want to keep you waiting for fixes that might be important to you. Hence, we have decided to work on a patch version for PrestaShop 1.6.1.0 (as per [our new SemVer-like versioning scheme](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/)).

Note: since this will be a patch version, it will only feature backwards-compatible bug fixes: no new feature, either major or minor, and most importantly no changes that are incompatible with the current API. Therefore, **version 1.6.1.1 will be a very safe and easy upgrade from version 1.6.1.0** -- we do advise you to upgrade to 1.6.1.0 (major version) in the meantime, in order to easily upgrade to 1.6.1.1 (patch version) once it is released.

{% alert note 0 %}
#### Quick summary of this post
PrestaShop 1.6.1.0 is a very strong release, but there are a few bugs that we want to fix before the next version.

The release date is **late August** for now. There will be a testing phase (beta/RC), so that the PrestaShop Community can help us make sure everything is correctly fixed.
{% endalert %}

#### What will it fix?

Here are some of the issues which are considered for inclusion in version 1.6.1.1. Some are already fixed, other still have to be worked on.

These fixes are merged or ready to be merged:

* [3385](https://github.com/PrestaShop/PrestaShop/pull/3385): [-] BO : Fix #PSCSX-6087 "Maintenance Mode" disappears in Modules page
* [3383](https://github.com/PrestaShop/PrestaShop/pull/3383): [-] CORE: Fix translation issue with html entities
* [3384](https://github.com/PrestaShop/PrestaShop/pull/3384): [-] CORE: Fix PHP 5.2 issue on FileSystem Core class
* [3381](https://github.com/PrestaShop/PrestaShop/pull/3381): [-] BO : Fix bug #PSCSX-6052 - Invalid date_upd in import
* [3382](https://github.com/PrestaShop/PrestaShop/pull/3382): [-] BO : Change bulk modules update
* [3390](https://github.com/PrestaShop/PrestaShop/pull/3390): [-] BO : Fix #PSCSX-6086, wrong version in header
* [3391](https://github.com/PrestaShop/PrestaShop/pull/3391): [-] IN : Fix #PSCSX-6133, Property TaxRulesGroup->date_add is not valid
* [3392](https://github.com/PrestaShop/PrestaShop/pull/3392): [-] BO : Media::addJsDefL should be called in admin controllers
* [3394](https://github.com/PrestaShop/PrestaShop/pull/3394): [-] CORE : bad property name. image_type doesn't exist anymore
* [3393](https://github.com/PrestaShop/PrestaShop/pull/3393): [-] FO : Change [schema.org](http://schema.org) links to https
* [3404](https://github.com/PrestaShop/PrestaShop/pull/3404): [-] BO : FIX #PSCSX-6158, notice in modules list
* [3408](https://github.com/PrestaShop/PrestaShop/pull/3408): [*] BO : fix #PSCSX-6096 untranslate string in orders pdf
* [3410](https://github.com/PrestaShop/PrestaShop/pull/3410): [*] BO : Fix #PSCSX-6134, redirect_after on adminCustomers
* [3417](https://github.com/PrestaShop/PrestaShop/pull/3417): [-] Project: getBrightness() with a short $hex (e.g.: #FFF)
* [3430](https://github.com/PrestaShop/PrestaShop/pull/3430): [-] BO : Fix #PSCSX-5844, #PSCSX-6138, CustomerMessage->message length && CustomerMessage->message is not valid
* [3357](https://github.com/PrestaShop/PrestaShop/pull/3357): [-] FO : Fix wrong statement close in /product.tpl
* [3432](https://github.com/PrestaShop/PrestaShop/pull/3432): [-] BO : Fix #PSCSX-6234, could not update category position to first position
* [3403](https://github.com/PrestaShop/PrestaShop/pull/3403): [-] BO : Fix bug #PSCSX-6154 - Customer filter in orders
* [3431](https://github.com/PrestaShop/PrestaShop/pull/3431): [-] CORE : Fix bug #PSCSX-6142 - wrong default cover id in webservice
* [3391](https://github.com/PrestaShop/PrestaShop/pull/3391): [-] IN : Fix #PSCSX-6133, Property TaxRulesGroup->date_add is not valid
* [3448](https://github.com/PrestaShop/PrestaShop/pull/3448): [-] BO : FixBug #PSCSX-6208 - Profiling redirection error

These will be worked on, among others:

* [PSCSX-6235](http://forge.prestashop.com/browse/PSCSX-6235): Link to anchor in product page destroys ability to add to cart
* [PSCSX-6202](http://forge.prestashop.com/browse/PSCSX-6202), [2940](https://github.com/PrestaShop/PrestaShop/pull/2940): error on 1.6.1.0 order invoice process involving tables order_invoice, order_invoice_payment, order_invoice_tax Their data is missing with some orders
* [PSCSX-6166](http://forge.prestashop.com/browse/PSCSX-6166): Wrong Base price in Invoice when specifyc price is enabled
* [PSCSX-6157](http://forge.prestashop.com/browse/PSCSX-6157): Quantity = 2 instead of 1 when adding product from BO in a manual order
* [PSCSX-6246](http://forge.prestashop.com/browse/PSCSX-6246), [3435](https://github.com/PrestaShop/PrestaShop/pull/3435): Cannot filter Carts on id_order: Unknown column 'status' in 'where clause'

Tell us what you think! Do you feel those fixes are the best way to go? Do you want to tackle a fix yourself and help improve PrestaShop for the whole community? Let us know!

#### When will it be released?

We are well aware that summer is a tough time for merchants to make an upgrade, what with holidays and such.

Since there are no critical issue in the feedback we received, we decided to leave you some time before having to upgrade again: **version 1.6.1.1 is therefore slated for a late August release**. This will give us some time to work on it, maybe adding more fixes, and most importantly to get your feedback about it: we will make sure to plan for a couple of weeks for the testing phase, where you can help us make sure everything works fine!

So please, do help us test the fixes to the issues which concern you! We need your feedback, in order to make this version stronger than ever!

Thank you!
