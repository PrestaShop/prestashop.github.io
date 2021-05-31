---
layout: post
title:  "PrestaShop 1.7.8.0 beta is open for feedback!"
subtitle: "You can download it and test it"
date:   2020-05-31 17:00:00
authors: [ PrestaShop ]
icon: icon-leaf
tags:
 - version
 - beta
 - minor
 - releases
 - 1.7.8
---

The first Beta version for PrestaShop 1.7.8.0 is now ready for you to test!

We are very happy to announce today the release of the beta version of 1.7.8.
This version includes many features and debug fixes, we count on you to test it in its in every nook and cranny and report any bugs you encounter.

In the new features: we have the redesign of the translation system that will facilitate the export and the translation of your modules and themes, a new custom header for multistore fans and many other improvements.

//Focus on the contribution (stats)

We need the help of all the community to test this version. It integrates more than 1,372 Pull Request merged and 241 bug fixed including 18 major bugs and 4 Topwatchers bugs (issue that are followed by more than 5 people). 

**Remember, this beta version is pre release software. Do not use it on your production shop!**

## What’s new?

### New features & improvements

#### Improvements for UI Kit

PrestaShop back office UI Kit has been improved in order to have a Solid Design System

See all issues listed in [https://github.com/PrestaShop/PrestaShop/issues/16587](https://github.com/PrestaShop/PrestaShop/issues/16587)

- [UI Kit] Improvements and corrections [#17177](https://github.com/PrestaShop/PrestaShop/issues/17177) [#21832](https://github.com/PrestaShop/PrestaShop/issues/21832)
PRs : [#17253](https://github.com/PrestaShop/PrestaShop/pull/17253) [#22736](https://github.com/PrestaShop/PrestaShop/pull/22736)
See also : [Adjustement of alert colors, fontsize and buttons contrasts](https://github.com/PrestaShop/prestashop-ui-kit/pull/104)

### Notable fixes

### Notable technical improvements

### Symfony migration

New pages handled for the long term migration on Symfony framework. We are now about 65% of the Back-Office pages migrated

- ["Catalog > Attributes & Features > Attributes" listing page](https://github.com/PrestaShop/PrestaShop/issues/10511)
PR : [#19838](https://github.com/PrestaShop/PrestaShop/pull/19838)
- [“Shop parameters > Order settings > Statuses > Add new / edit order status” page](https://github.com/PrestaShop/PrestaShop/issues/10621)
PR : [#17215](https://github.com/PrestaShop/PrestaShop/pull/17215)
- ["Shop parameters > Order settings > Statuses" page](https://github.com/PrestaShop/PrestaShop/issues/10619)
PR : [#17215](https://github.com/PrestaShop/PrestaShop/pull/17215)
- ["Shop parameters > Order settings > Statuses > Add new / edit order return status"](https://github.com/PrestaShop/PrestaShop/issues/10620)
PR : [#17215](https://github.com/PrestaShop/PrestaShop/pull/17215)
- [Migrate "International > Locations > Zones" page](https://github.com/PrestaShop/PrestaShop/issues/10608)
PR : [#20370](https://github.com/PrestaShop/PrestaShop/pull/20370)
- [Migrate "International > Locations > Add new / edit zone" page](https://github.com/PrestaShop/PrestaShop/issues/10603)
PR : [#20370](https://github.com/PrestaShop/PrestaShop/pull/20370)

### Core changes

## Download

You can download PrestaShop 1.7.8.0 beta here:  

[Download PrestaShop 1.7.7.0 beta now!](https://download.prestashop.com/download/releases/prestashop_1.7.8.0-beta.1.zip){: .btn .btn-lg .btn-success}
{: .text-center}


## How to help test 1.7.8

Your feedback on this beta is essential, the regressions you find right now are as many bugs less on the final version and less patches versions. It also means fewer problems on your (or your customer’s) online store. 

You must:

- Install it and test that there is no regression compared to the 1.7.7 version
- If you develop modules or themes, test them on this version
- Test the auto-upgrade plugin
- [Report regressions on GitHub](https://github.com/PrestaShop/PrestaShop/issues) (read how to [report issues](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/))
- Fix regressions by creating a [pull request](https://github.com/PrestaShop/PrestaShop/compare) (read the [contribution guidelines](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/))

## Known issues 

- [When the catalog is exported the metadata is missing](https://github.com/PrestaShop/PrestaShop/issues/24716) 
- [When reducing the screen in the order page, the icon of error, confirmation, warning messages is broken](https://github.com/PrestaShop/PrestaShop/issues/24695) 
- [An error is displayed in the console when adding a discount on the Add New Order Page](https://github.com/PrestaShop/PrestaShop/issues/24556) 
- [On the Add new Order page when I change the product quantity, the page freezes](https://github.com/PrestaShop/PrestaShop/issues/24554) 
- [When we add an order note with invalid data, an update successful alert is displayed](https://github.com/PrestaShop/PrestaShop/issues/24534) 
- [When adding a product into a new invoice in the Order Page, the block product new invoice info is not displayed](https://github.com/PrestaShop/PrestaShop/issues/24533) 
- [The Invoice details on the Order Preview is missing the address mail of the customer](https://github.com/PrestaShop/PrestaShop/issues/24482) 
- [When Adding a new theme, an error 404 is displayed in the console](https://github.com/PrestaShop/PrestaShop/issues/24468) 
- [When the client uses another address for the invoice as a guest, we are redirected to the Information step instead of the Shipping method step](https://github.com/PrestaShop/PrestaShop/issues/24465) 
- [When an account is created, an exception is displayed when the first name and/or last name fields contain invalid characters.](https://github.com/PrestaShop/PrestaShop/issues/24464) 
 [https://github.com/PrestaShop/PrestaShop/issues/24370](https://github.com/PrestaShop/PrestaShop/issues/24370) 
- [When accessing to a disabled category, an error is displayed](https://github.com/PrestaShop/PrestaShop/issues/24333) 
- [The scrollbar is missing in the new multistore dropdown](https://github.com/PrestaShop/PrestaShop/issues/24142) 
- [The warning message is empty when we try to remove a customer from a specific price](https://github.com/PrestaShop/PrestaShop/issues/24131) 
- [The summary & the description of the Product Page allows more characters than the defined limit](https://github.com/PrestaShop/PrestaShop/issues/24023) 
- [When running a CLI command prestashop:update:sql-upgrade-file-hooks-listing and prestashop:update:configuration-file-hooks-listing, an error is displayed](https://github.com/PrestaShop/PrestaShop/issues/23937) 
- [Multistore header not displayed on Product Add / Edit page](https://github.com/PrestaShop/PrestaShop/issues/23878) 
- [When modifying a translation of Email Body, an error is displayed](https://github.com/PrestaShop/PrestaShop/issues/23876) 
- [When searching for the translation, the « leaves » of the tree that does not include the searched term is not disabled](https://github.com/PrestaShop/PrestaShop/issues/23365) 
 - [An error displayed in the console when creating a category](https://github.com/PrestaShop/PrestaShop/issues/22545) 
 - [Cannot add an official currency to a non-official language from the CLDR](https://github.com/PrestaShop/PrestaShop/issues/21961) 
 - [The block to promote the discounts is removed after adding a cart rule](https://github.com/PrestaShop/PrestaShop/issues/21107) 
 - [Menu Page is still displayed in the Back-Office](https://github.com/PrestaShop/PrestaShop/issues/21107) 
