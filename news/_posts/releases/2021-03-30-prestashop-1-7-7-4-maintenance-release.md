---
layout: post
title:  "Release of PrestaShop 1.7.7.4"
subtitle: "Maintenance version of the 1.7.7.x branch"
date:   2021-05-07 12:00:00
authors: [ PrestaShop ]
image: /assets/images/2021/05/build_1.7.7.4.png
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.7.x
 - 1.7
---

PrestaShop 1.7.7.4 is now available. This maintenance release fixes 13 issues reported since the 1.7.7.0.

![1.7.7.4 is available!](/assets/images/2021/05/build_1.7.7.4.png)

We suggest upgrading your shop quickly in order to benefit from these fixes. Of course, don't forget to backup before.

## Main fixes

**Back-office**
- ["Expand all" button of ps_facetedsearch not working](https://github.com/PrestaShop/PrestaShop/issues/23558)
- [When a cart rule with a free gift and percentage discount is added to the cart, the discount amount displayed is incorrect](https://github.com/PrestaShop/PrestaShop/issues/22948)
- [Product customization file cannot be downloaded if the customization label field contains a dot](https://github.com/PrestaShop/PrestaShop/issues/24036)
- [The gift block in the 'Add an order' page is not updated when changing the carrier](https://github.com/PrestaShop/PrestaShop/issues/23751)
- [When filtering products by category, the chosen category is not selected](https://github.com/PrestaShop/PrestaShop/issues/23847)
- [An error is displayed when deleting an order status with French language](https://github.com/PrestaShop/PrestaShop/issues/23379)
- [Tracking number is not a link on the Order List page](https://github.com/PrestaShop/PrestaShop/issues/23401)
- [Notification of new orders are not displayed](https://github.com/PrestaShop/PrestaShop/issues/23573)
- [An alert is displayed when updating the product quantity in the order page with multistore](https://github.com/PrestaShop/PrestaShop/issues/21987)

**Front-office**
- [Incorrect discount amount displayed when using a cart rule with free gift and percentage](https://github.com/PrestaShop/PrestaShop/issues/22946)
- [An exception is displayed when selecting a language with incorrect data - ps_linklist](https://github.com/PrestaShop/PrestaShop/issues/23506)
- [When clicking on the "Quick View" button, a warning is displayed in the console](https://github.com/PrestaShop/PrestaShop/issues/21228)

**Core**
- [Shop logo width and height are not updated in configuration table](https://github.com/PrestaShop/PrestaShop/issues/23733)

## Acknowledgements

Contributors to this patch version, from both the Core team and the community at large: 

crezzur, matthieu-rolland, boubkerbribri, atomiix, PierreRambaud, nesrineabdmouleh, NeOMakinG, Progi1984 and RomainBocheux 

Thank you!

[Download PrestaShop 1.7.7.4 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

For any upgrades problems or PrestaShop’s bugs, please create a new issue [here](https://github.com/PrestaShop/PrestaShop/issues/new/choose).


If you have questions or need help, do not hesitate to take a look at [our community platforms or support plans.](https://devdocs.prestashop.com/1.7/faq/i-need-help/)

Since version 1.7.7.4 is a “patch” update to version 1.7.7, upgrading from any 1.7.7 version will be easy: features will work better, and modules & themes which worked fine on 1.7.7.x will work just as well with 1.7.7.4. Upgrades from a standard 1.7.x version should work just as well.
