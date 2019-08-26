---
layout: post
title:  "Release of PrestaShop 1.7.6.1"
subtitle: "Maintenance version of the 1.7.6.x branch"
date:   2019-08-26 17:00:00
authors: [ PrestaShop ]
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.6.x
 - 1.7
---


PrestaShop 1.7.6.1 is now available. This maintenance release fixes 26 issues reported on version 1.7.6.0.

We suggest upgrading your shop quickly in order to benefit from this fixes. Of course, don't forget to backup before.

[Download PrestaShop 1.7.6.1 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

Since version 1.7.6.1 is a “patch” update to version 1.7.6.0, upgrading from any 1.7.6 version will be easy: features will work better, and modules & themes which worked fine on 1.7.6.0 will work just as well with 1.7.6.1. Upgrades from a standard 1.7.x version should work just as well.

## Main fixes

* In some circumstances prices would appear with 6 decimal digits ([#14640](https://github.com/PrestaShop/PrestaShop/issues/14640))
* The “convert a guest into a customer” feature wasn’t working ([#14639](https://github.com/PrestaShop/PrestaShop/issues/14639))
* It was possible to circumvent the BO token in some circumstances (Thanks Guillaume Lictevout) ([#14671](https://github.com/PrestaShop/PrestaShop/pull/14671))
* The “erase all” button in the logs page wasn’t working ([#14686](https://github.com/PrestaShop/PrestaShop/issues/14686))
* Mails weren’t completely translated/translatable ([#14633](https://github.com/PrestaShop/PrestaShop/issues/14633))
* Links  pointing to edit/view customers weren’t working on legacy pages like Quick Search ([#14672](https://github.com/PrestaShop/PrestaShop/issues/14672))
* Prices in Czech would sometimes be displayed using the wrong formatting ([#14657](https://github.com/PrestaShop/PrestaShop/issues/14657))
* Applying filters in the logs page would result in an error ([#14785](https://github.com/PrestaShop/PrestaShop/issues/14785))
* Importing a theme would fail it if contained a translations directory with no files ([#14960](https://github.com/PrestaShop/PrestaShop/issues/14960))
* The translation interface wasn’t working when using a theme other than classic ([#14733](https://github.com/PrestaShop/PrestaShop/issues/14733) and [#15133](https://github.com/PrestaShop/PrestaShop/issues/15133))
* Module translations edited through the new back office interface were being ignored by the module ([#14932](https://github.com/PrestaShop/PrestaShop/issues/14932))
* Disabled categories were not being shown in the parent category tree when editing categories, resulting in an error ([#14790](https://github.com/PrestaShop/PrestaShop/issues/14790))
* Accessing the suppliers page after an import would result in an error ([#14908](https://github.com/PrestaShop/PrestaShop/issues/14908))
* Following steps in the checkout process were being disabled even when the theme didn’t include a “continue” button ([#14846](https://github.com/PrestaShop/PrestaShop/issues/14846))
* Errors would occur when manipulating orders in some circumstances when working on a multishop environment ([#14595](https://github.com/PrestaShop/PrestaShop/issues/14595) and [#15144](https://github.com/PrestaShop/PrestaShop/issues/15144))

Read the [full changelog here](https://download.prestashop.com/download/releases/changelog_1.7.6.1.txt).

## Important changes

Following [#15173](https://github.com/PrestaShop/PrestaShop/pull/15173) we had to modify `CurrencyDataProviderInterface::findAll` and add an optional parameter to be able to fetch all currencies regardless of the current shop context. This doesn’t break any previous use of the method since the parameter is optional, but it requires to update any class that implemented that interface.

Following [#15139](https://github.com/PrestaShop/PrestaShop/pull/15139), module translations are no longer attached to the currently active theme. If you want a different translation for each theme, you will have to edit the theme translations; this requires the specific wording to be physically present in the theme's templates or else it won't appear in the translation interface. Only theme translations are attached to a theme now, all other translations are now global.

## Acknowledgements

Contributors to this patch version, from both the Core team and the community at large: 

Dheeraj Sharma, Franck Lefèvre, Jonathan Lelievre, Mathieu Ferment, Matthieu Rolland, Nesrine Abdmouleh, Pablo Borowicz, Pierre Rambaud, Priyank Desai, Roja45, Thomas Nabord and Šarūnas Jonušas. Thank you!

