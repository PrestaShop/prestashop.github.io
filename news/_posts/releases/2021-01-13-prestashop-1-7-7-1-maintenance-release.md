---
layout: post
title:  "Release of PrestaShop 1.7.7.1"
subtitle: "Maintenance version of the 1.7.7.x branch"
date:   2021-01-13 12:00:00
authors: [ PrestaShop ]
image: /assets/images/2021/01/build_1.7.7.1.png
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.7.x
 - 1.7
---


PrestaShop 1.7.7.1 is now available. This maintenance release fixes 41 issues reported on version 1.7.7.0.

![1.7.7.1 is available!](/assets/images/2021/01/build_1.7.7.1.png)

We suggest upgrading your shop quickly in order to benefit from these fixes. Of course, don't forget to backup before.

## Main fixes

**Order pages (back-office)**
- [The voucher line is not removed when the order's total is < to the minimum amount for cart rule
](https://github.com/PrestaShop/PrestaShop/issues/21812)
- [The characters limit is wrongly calculated when choosing a predefined message
](https://github.com/PrestaShop/PrestaShop/issues/22086)
- [When creating an order, the minimum quantity of a combination is not correct](https://github.com/PrestaShop/PrestaShop/issues/21873)
- [Bad display of some special characters in private note](https://github.com/PrestaShop/PrestaShop/issues/21829)
- [An exception is displayed when changing the invoice address in the second time - Round mode = Round on each item](https://github.com/PrestaShop/PrestaShop/issues/21717)
- [When adding or updating a product on an already paid order, the message in payment block is not added/updated immediately](https://github.com/PrestaShop/PrestaShop/issues/21293)
- [Voucher line is not added when a cart rule "Discount for a country selection" is applied
](https://github.com/PrestaShop/PrestaShop/issues/21548)
- [The Voucher "Free shipping" value is not updated when changing an address
](https://github.com/PrestaShop/PrestaShop/issues/21549)
- [The shipping block is not instantly updated when updating the Address](https://github.com/PrestaShop/PrestaShop/issues/22124)
- [An exception is displayed when we try to return products in All shops context](https://github.com/PrestaShop/PrestaShop/issues/21990)
- [In the cart, when updating the quantity of a product using the "up/down arrow" with consecutive hits on the same input, it's not acknowledged correctly](https://github.com/PrestaShop/PrestaShop/issues/21734)
- [Incorrect Total's product line when Round type = "Round on each item"](https://github.com/PrestaShop/PrestaShop/issues/21708)
- [When adding a product to an empty order, the Shipping is not updated in the info block](https://github.com/PrestaShop/PrestaShop/issues/22071)
- [When we have a different language for each shop, all languages are displayed in the drop-down language of the add order page instead of just the languages associated to the shop selected](https://github.com/PrestaShop/PrestaShop/issues/21817)
- [When customized products are imported in the second shop without customization, an unexpected error is displayed](https://github.com/PrestaShop/PrestaShop/issues/22110)
- [Wrong update of a cart rule with gift](https://github.com/PrestaShop/PrestaShop/issues/21506)
- [When adding a product to an old order, an incorrect value is displayed and an incorrect amount calculated.](https://github.com/PrestaShop/PrestaShop/issues/22138)
- [When the cart on the order page is updated, it updates the product price if the product has changed between the cart creation and the updates](https://github.com/PrestaShop/PrestaShop/issues/22192)
- [When the shipping is edited in an existing order, product prices are reseted](https://github.com/PrestaShop/PrestaShop/issues/22263)
- [Incorrect Product's total when it is in a category discount for the customer Group
](https://github.com/PrestaShop/PrestaShop/issues/22096)
- [When stock management is disabled, the available quantity in order detail is displayed](https://github.com/PrestaShop/PrestaShop/issues/21767)
- [The gift product is not removed when removing a product ordered](https://github.com/PrestaShop/PrestaShop/issues/21500)
- [When deleting the first product from an order, all other products are removed](https://github.com/PrestaShop/PrestaShop/issues/22424)


**Back-office**
- [When editing the list of product linked to a tag and removing only one product, all linked product are removed](https://github.com/PrestaShop/PrestaShop/issues/22092)
- [The log filter by employee does not work](https://github.com/PrestaShop/PrestaShop/issues/22078)
- [If there are more than 10 credits slips and if you try to change the number of items displayed, nothing happens](https://github.com/PrestaShop/PrestaShop/issues/22216)
- [When a currency was modified in 176, if I upgrade to 1770, the currency can no longer be modified or deleted](https://github.com/PrestaShop/PrestaShop/issues/22208)
- [Pagination is not working in the product quick navigation popup](https://github.com/PrestaShop/PrestaShop/issues/22278)
- [Adding incorrect language code causes "Cache key length must be greater than zero." error when trying to edit currency](https://github.com/PrestaShop/PrestaShop/issues/21891)
- [Unable to change existing CMS Page's category](https://github.com/PrestaShop/PrestaShop/issues/22340)
- [Can't disable or uninstall modules in Module Manager after upgrade PS from 1.7.6.9 to 1.7.7.0](https://github.com/PrestaShop/PrestaShop/issues/22485)

**Front-office**
- [Pack of products - Incorrect image displayed](https://github.com/PrestaShop/PrestaShop/issues/21875)
- [The displayAfterProductThumbs hook content is duplicated after adding a product in the cart](https://github.com/PrestaShop/PrestaShop/issues/22113)
- [Mobile devices displays images to the left instead of being placed in the center
](https://github.com/PrestaShop/PrestaShop/issues/22221)
- [Following a successful customer creation through Chrome, the user is redirected to homepage without https even if the shop is full https](https://github.com/PrestaShop/PrestaShop/issues/22430)

**Core**
- [Behat tests: Reset static cache of all object models between feature tests
](https://github.com/PrestaShop/PrestaShop/issues/22197)
- [Upgrade 1.6.1.24 => 1.7.7.0 fails ; XmlLoader Call to a member function trans() on null](https://github.com/PrestaShop/PrestaShop/issues/22237)
- [In autoupgrade process, Doctrine schema update process is performed after scripts which create inconsistent behavior](https://github.com/PrestaShop/PrestaShop/issues/22294)
- [The left menu in BO disappeared after upgrade to 1.7.7.0](https://github.com/PrestaShop/PrestaShop/issues/22250)
- [Module is not registered in "aliases" hooks](https://github.com/PrestaShop/PrestaShop/issues/22527)

Read the [full changelog here](https://download.prestashop.com/download/releases/changelog_1.7.7.1.txt).

## Important changes



## Acknowledgements

Contributors to this patch version, from both the Core team and the community at large: Thank you!

[Download PrestaShop 1.7.7.1 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

Since version 1.7.7.1 is a “patch” update to version 1.7.7.0, upgrading from any 1.7.7 version will be easy: features will work better, and modules & themes which worked fine on 1.7.7.0 will work just as well with 1.7.7.1. Upgrades from a standard 1.7.x version should work just as well.
