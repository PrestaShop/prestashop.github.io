---
layout: post
title:  "Release of PrestaShop 1.7.7.6"
subtitle: "Maintenance version of the 1.7.7.x branch"
date:   2021-08-06 12:00:00
authors: [ PrestaShop ]
image: /assets/images/2021/08/build_1.7.7.6.png
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.7.x
 - 1.7
---

PrestaShop 1.7.7.6 is now available. This maintenance release fixes 27 regressions reported since the 1.7.7.0, including 2 critical regressions.

![1.7.7.6 is available!](/assets/images/2021/08/build_1.7.7.6.png)

We suggest upgrading your shop quickly in order to benefit from these fixes. Of course, don't forget to backup before.

## Critical fixes

The bug affects critical functionality or critical data and there is no workaround to avoid it. A critical issue affects a very large percentage of users (> 60%) and matches at least one of the following:
- It can lead to data loss, introduce a security vulnerability or break the automatic end to end tests
- It prevents the essential shop operations or puts your business at great risk

Two critical bugs have been fixed in 1.7.7.6:

- [Orders page - an exception is displayed when deleting a customer or a guest](https://github.com/PrestaShop/PrestaShop/issues/25319)
- [Smarty template isCached function bug](https://github.com/PrestaShop/PrestaShop/issues/24235)

## Main fixes

**Back-office**
- [Preview order - Invoice details is missing the address mail of the customer](https://github.com/PrestaShop/PrestaShop/issues/24482)
- [It is not possible to create a BYN currency](https://github.com/PrestaShop/PrestaShop/issues/24692)
- [Product deleteFeatures doesn't delete custom features](https://github.com/PrestaShop/PrestaShop/issues/25163)
- [Order messages not in customers languages](https://github.com/PrestaShop/PrestaShop/issues/24499)
- [SQL Manager Form throws FatalThrowableError - Type Error on JOIN SQL query](https://github.com/PrestaShop/PrestaShop/issues/25011)
- [Order page - The total price excluding taxes is displayed instead of the total price including taxes](https://github.com/PrestaShop/PrestaShop/issues/23957)
- [View Order - An exception is displayed when changing the order status to payment accepted](https://github.com/PrestaShop/PrestaShop/issues/25195)
- [Migrated Order page does not contain order reference](https://github.com/PrestaShop/PrestaShop/issues/25078)
- [Adding payment with comma does not work](https://github.com/PrestaShop/PrestaShop/issues/24103)
- [Order message not in order language](https://github.com/PrestaShop/PrestaShop/issues/25362)
- [View an order - Search endpoint returns HTTP 500](https://github.com/PrestaShop/PrestaShop/issues/25360)
- [Orders - Problems on product price changing in database](https://github.com/PrestaShop/PrestaShop/issues/24529)
- [Issue on total when change courier on admin](https://github.com/PrestaShop/PrestaShop/issues/25418)
- [Orders - An exception is displayed when we add a discount with space in the name](https://github.com/PrestaShop/PrestaShop/issues/24537)
- [Orders - A modal should'nt be displayed when we add the same product to a specific invoice with updating price](https://github.com/PrestaShop/PrestaShop/issues/24691)
- [Orders page - Cannot add free shipping discount when Total products = 0](https://github.com/PrestaShop/PrestaShop/issues/24753)
- [Add new Order page - An exception is displayed when we add a pack](https://github.com/PrestaShop/PrestaShop/issues/24553)
- [Add new Order - An exception is displayed when ordering a product with text customization - the label contains special expression](https://github.com/PrestaShop/PrestaShop/issues/25194)


**Install**
- [Cannot create an alternative currency after an upgrade](https://github.com/PrestaShop/PrestaShop/issues/24871)

**Front-office**
- [Brands are shown wrongly in the FO](https://github.com/PrestaShop/PrestaShop/issues/25214)
- ['Total available for each user' in cart rule not considered if the customer is signed in from the checkout page](https://github.com/PrestaShop/PrestaShop/issues/25203)
- [Ecotax on combinations not displayed in FO](https://github.com/PrestaShop/PrestaShop/issues/9967)
- [X number of decimals are only displayed if the product price has X decimals](https://github.com/PrestaShop/PrestaShop/issues/23868)
- [The discount detail is NOK](https://github.com/PrestaShop/PrestaShop/issues/24635)
- [The discount detail is NOK when we the product selected has an ecotax](https://github.com/PrestaShop/PrestaShop/issues/24788)


## Acknowledgements

Contributors to this patch version, from both the Core team and the community at large: 

matthieu-rolland, Progi1984, olecorre, samberry, NeOMakinG, PierreRambaud, lukaslau, atomiix and jolelievre.

Thank you!

[Download PrestaShop 1.7.7.6 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

For any upgrades problems or PrestaShop’s bugs, please create a new issue [here](https://github.com/PrestaShop/PrestaShop/issues/new/choose).


If you have questions or need help, do not hesitate to take a look at [our community platforms or support plans.](https://devdocs.prestashop.com/1.7/faq/i-need-help/)

Since version 1.7.7.6 is a “patch” update to version 1.7.7, upgrading from any 1.7.7 version will be easy: features will work better, and modules & themes which worked fine on 1.7.7.x will work just as well with 1.7.7.6. Upgrades from a standard 1.7.x version should work just as well.
