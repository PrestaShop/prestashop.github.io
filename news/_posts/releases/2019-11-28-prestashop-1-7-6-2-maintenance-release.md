---
layout: post
title:  "Release Of PrestaShop 1.7.6.2"
subtitle: "Maintenance version of the 1.7.6.x branch"
date:   2019-08-26 16:15:00
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


After a few months dedicated to fixing all regressions found on the previous 1.7.6 versions, PrestaShop 1.7.6.2 is finally available! 

![1.7.6.2 is available!](/assets/images/2019/11/1.7.6.2_banner.jpg)

This maintenance release fixes 31 issues reported on version 1.7.6.0 and 1.7.6.1. We suggest upgrading your shop quickly in order to benefit from these fixes. Of course, don’t forget to backup before.

Reminder:  the 1-Click Upgrade module’s latest version is v4.10.0, don’t forget to upgrade it.


## Main fixes
Below are listed some of the main regression issues we fixed in this version :
An infinite loop within the checkout page when two specific cart rules were applied to an order ([#15574](https://github.com/PrestaShop/PrestaShop/issues/15574))
One bug impacting contributor and partner payment modules due to amount paid no longer validated when creating an order ([#15834](https://github.com/PrestaShop/PrestaShop/issues/15834))
Three bugs related to the CLDR implementation in the 1.7.6.0 which were provoking errors in both suppliers and orders pages after deleting a currency ([#15376](https://github.com/PrestaShop/PrestaShop/issues/15376)), ([#15486](https://github.com/PrestaShop/PrestaShop/issues/15486)) and ([#15956](https://github.com/PrestaShop/PrestaShop/issues/15956))
A few regressions related to the migration of the Customer page:
Customer creation with SIRET field ([#16167](https://github.com/PrestaShop/PrestaShop/issues/16167))
Customer listing page bugs on links, filters and export features ([#15831](https://github.com/PrestaShop/PrestaShop/issues/15831)), ([#10293](https://github.com/PrestaShop/PrestaShop/issues/10293)) and ([#15875](https://github.com/PrestaShop/PrestaShop/issues/15875)) 
Customers in a multi-store environment ([#16043](https://github.com/PrestaShop/PrestaShop/issues/16043))
Error on creating new Brand Address when VAT identification number is mandatory ([#16121](https://github.com/PrestaShop/PrestaShop/issues/16121))
Quantity discounts not shown for default variant ([#16417](https://github.com/PrestaShop/PrestaShop/issues/#16417))
Revert back to using product URL (including combination) rather than canonical one in the miniatures (SEO) ([#14765](https://github.com/PrestaShop/PrestaShop/issues/14765))
Fixed PrestaShop Command Line Interface (CLI) cache clearing capabilities ([#15324](https://github.com/PrestaShop/PrestaShop/issues/15324))


Read the [full changelog here](https://github.com/PrestaShop/PrestaShop/releases/tag/1.7.6.2).

## Important changes
By Allowing CLDR to display deleted/inactive currencies [#15643](https://github.com/PrestaShop/PrestaShop/pull/15643) we had to add new methods to interfaces `DataSourceInterface`, `CurrencyDataProviderInterface` and `RepositoryInterface` to be able to fetch currencies regardless of them being deleted or inactive. 
This requires to update any class that implemented that interface.
We had to revert the fix we made for the `object_lang` table issue in 1.7.6.0 regarding multi-store data [#11876](https://github.com/PrestaShop/PrestaShop/pull/11876) as it introduced a regression [#15274](https://github.com/PrestaShop/PrestaShop/issues/15274) that changed how multistore data was persisted. More details here [#15621](https://github.com/PrestaShop/PrestaShop/pull/15621).


## Acknowledgments

Contributors to this patch version, from both the Core team and the community at large: 
Aurélien Pelletier, Jean-François Viguier, Jonathan Lelievre, Khouloud Belguith, Mathieu Ferment, Matthieu Rolland, Pablo Borowicz, Pierre Rambaud, Franck Lefevre, Thomas Baccelli.
Thank you!


[Download PrestaShop 1.7.6.2 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}


Since version 1.7.6.2 is a “patch” update to version 1.7.6.1, upgrading from any 1.7.6 version will be easy: features will work better, and modules & themes which worked fine on 1.7.6.x will work just as well with 1.7.6.2. Upgrades from a standard 1.7.x version should work just as well.
