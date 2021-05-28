---
layout: post
title:  "Release of PrestaShop 1.7.7.5"
subtitle: "Maintenance version of the 1.7.7.x branch"
date:   2021-05-03 12:00:00
authors: [ PrestaShop ]
image: /assets/images/2021/05/build_1.7.7.5.png
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.7.x
 - 1.7
---

PrestaShop 1.7.7.5 is now available. This maintenance release fixes 19 regressions reported since the 1.7.7.0.

![1.7.7.5 is available!](/assets/images/2021/06/build_1.7.7.5.png)

We suggest upgrading your shop quickly in order to benefit from these fixes. Of course, don't forget to backup before.

## Main fixes

**Back-office**
- [Add new order page - Gift message cannot be removed](https://github.com/PrestaShop/PrestaShop/issues/24562)
- [View order page - An exception is displayed when we add a discount with space in the name](https://github.com/PrestaShop/PrestaShop/issues/24537)
- [Missing menu icon on mobile in dashboard page](https://github.com/PrestaShop/PrestaShop/issues/24450)
- [Order message with the same title is not displayed in the "order_message" list](https://github.com/PrestaShop/PrestaShop/issues/24535)
- [Orders list - The tracking URL is NOK in the preview order](https://github.com/PrestaShop/PrestaShop/issues/24483)
- [Wrong price in the document list for the delivery slip in the admin order page](https://github.com/PrestaShop/PrestaShop/issues/24197)
- [View order page - The order carrier ID is invalid](https://github.com/PrestaShop/PrestaShop/issues/24307)
- [Error when making a delete sql request](https://github.com/PrestaShop/PrestaShop/issues/24209)
- [Wrong escape in ps_1771_update_customer_note()](https://github.com/PrestaShop/PrestaShop/issues/23633)
- [Order page - An error is displayed when changing the addresses for the second time](https://github.com/PrestaShop/PrestaShop/issues/22917)
- [Order page - Ajax issue - The Discount Block is not automatically updated when updating or adding a product](https://github.com/PrestaShop/PrestaShop/issues/23266)
- [In module configuration pages, the "Activate module for this shop context" checkbox does not work](https://github.com/PrestaShop/PrestaShop/issues/24354)
- [Orders page - missing DNI number in some countries when the DNI is not required](https://github.com/PrestaShop/PrestaShop/issues/23357)
- [Order page - when adding a product which has an ecotax to an old order, the base price is NOK](https://github.com/PrestaShop/PrestaShop/issues/22029)
- [With Safari when creating a catalog price rule the wrong brand is selected](https://github.com/PrestaShop/PrestaShop/issues/24147)
- [View order page - Customized product cannot be added to multi-invoice](https://github.com/PrestaShop/PrestaShop/issues/23734)

**Front-office**
- [Multiple free shipping vouchers give order total error - The discount is incorrect](https://github.com/PrestaShop/PrestaShop/issues/12024)

**Core**
- [BO pages & links are broken after upgrading from 1.6.1.24 to 1.7.7.2](https://github.com/PrestaShop/PrestaShop/issues/23277)

## Acknowledgements

Contributors to this patch version, from both the Core team and the community at large: 

Progi1984, boubkerbribri, PierreRambaud, SD1982, dali-rajab, atomiix, IcarusSosie and NeOMakinG

Thank you!

[Download PrestaShop 1.7.7.5 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

For any upgrades problems or PrestaShop’s bugs, please create a new issue [here](https://github.com/PrestaShop/PrestaShop/issues/new/choose).


If you have questions or need help, do not hesitate to take a look at [our community platforms or support plans.](https://devdocs.prestashop.com/1.7/faq/i-need-help/)

Since version 1.7.7.5 is a “patch” update to version 1.7.7, upgrading from any 1.7.7 version will be easy: features will work better, and modules & themes which worked fine on 1.7.7.x will work just as well with 1.7.7.5. Upgrades from a standard 1.7.x version should work just as well.
