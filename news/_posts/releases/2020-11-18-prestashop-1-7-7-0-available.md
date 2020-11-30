---
layout: post
title:  "PrestaShop 1.7.7.0 is available"
subtitle: "You waited for it, here it is!"
date:   2020-11-18 16:00:00
authors: [ PrestaShop ]
image: /assets/images/2020/11/build_and_mail_final.jpg
icon: icon-leaf
tags:
 - version
 - 1.7
 - 1.7.7.x
 - minor
 - releases
---

We are happy to announce PrestaShop 1.7.7.0 is officially available!

![1.7.7.0 is available!](/assets/images/2020/11/build_and_mail_final.jpg)

This release is our biggest yet. more than 1500 merged Pull Requests in 600 days, over 120 contributors, two betas, one release candidate. Was it worth it? We absolutely think so and hope that you will enjoy using it.

## New in 1.7.7.0

### Productivity

The [**full redesign and the new features of order pages**](https://build.prestashop.com/news/the-new-order-pages-in-prestaShop-1-7-7/) help merchants to make a better use of their time and to stay focus on their online business. 

The redesign of the user interface allows merchants to find the right information quickly while the new features allow a better efficiency on daily tasks and avoid back and forth between pages. 

![order pages](/assets/images/2020/11/order.jpg)

### Growth and flexibility

PrestaShop is an international solution and we aim to provide global features for worldwide users. 

The [**international improvements**](https://build.prestashop.com/news/prestashop-keeps-growing-internationally/) remove barriers to go international and help merchants reach more customers.

[**The fuzzy search**](https://build.prestashop.com/news/introduction-to-the-fuzzy-search/) improve both the user experience and the conversion rate with a new search algorithm that takes misspellings or error inputs into account.

![fuzzy search](/assets/images/2020/11/fuzzy_search.jpg)

In order to allow merchants to have all the currencies they need to meet the expectations of every customer, they can now **add new official and non official currencies** (e.g. local or custom) to their store and customize their display per language as desired.

![currencies](/assets/images/2020/11/currencies.png)

### Robustness

We kept improving internal architecture and technology with the Symfony migration. 15 new pages have been migrated (including the order pages), completing almost 55% of the back office migration.

![migration](/assets/images/2020/11/migration.png)

More than 160 bugs have been fixed for the 1.7.7.0 (vs 110 for the 1.7.6.0), including [11 highly expected bug fixes](https://github.com/PrestaShop/PrestaShop/issues?q=is%3Aissue+is%3Aclosed+label%3ATopwatchers+label%3Afixed+milestone%3A1.7.7.0), [5 front office notable fixes](https://github.com/PrestaShop/PrestaShop/issues?q=is%3Aissue+label%3AFO+label%3Amust-have+label%3Afixed+milestone%3A1.7.7.0+-label%3Atopwatchers+-label%3Aregression), and [5 back office notable fixes](https://github.com/PrestaShop/PrestaShop/issues?q=is%3Aissue+label%3ABO+label%3Amust-have+label%3Afixed+milestone%3A1.7.7.0+-label%3Atopwatchers+-label%3Aregression).

## Download

You can download PrestaShop 1.7.7.0 here:

[Download PrestaShop 1.7.7.0 now!](https://www.prestashop.com/en/developers-versions){: .btn .btn-lg .btn-success}
{: .text-center}
 
PrestaShop 1.7.7.0 is also available through the 1-Click Upgrade module. 


## Notable changes since the RC1

**Order back-office**
- [An error 500 is displayed when adding a product with a min quantity](https://github.com/PrestaShop/PrestaShop/issues/21525)
- [An exception is displayed in the console when adding an out of stock product](https://github.com/PrestaShop/PrestaShop/issues/21794)
- [An exception is displayed when canceling a product and if an invoice is generated](https://github.com/PrestaShop/PrestaShop/issues/21850)
- [An exception is displayed when ordering a product with a file customization’s name containing a space](https://github.com/PrestaShop/PrestaShop/issues/21815)
- [When all the products in an order are deleted, the status is changed to canceled.](https://github.com/PrestaShop/PrestaShop/issues/22010)
- [When deleting all products - the total invoice is wrong](https://github.com/PrestaShop/PrestaShop/issues/21991)
- [When we have a product added to the order as a gift (a voucher applied) and as a product ordered, the quantity added to the same product is wrong](https://github.com/PrestaShop/PrestaShop/issues/21531)
- [When product is added in an empty order, the tax block in the invoice is wrong: It only contains the Shipping tax and not the Product tax](https://github.com/PrestaShop/PrestaShop/issues/22008)
- [An error is displayed when decreasing the gifted product quantity "Could not find the product in cart, meaning Order and Cart are out of sync"](https://github.com/PrestaShop/PrestaShop/issues/22004)
- [When adding a product which has an ecotax to an old order, the base price is NOK](https://github.com/PrestaShop/PrestaShop/issues/22029)

**Back-office**
- [If we login to the addons marketplace the list of recommended modules doesn't contains all items](https://github.com/PrestaShop/PrestaShop/issues/22125)

**Front-office**
- [Logo, favicon and stores icons are not displayed](https://github.com/PrestaShop/PrestaShop/issues/21979)

**Upgrade**
- [Error "Column count doesn't match value count" during the upgrade](https://github.com/PrestaShop/PrestaShop/issues/21949)
- [Problem with ALTER table during the upgrade](https://github.com/PrestaShop/PrestaShop/issues/21948)

## Changelog

XX pull requests have been merged since the RC1 and 9 issues have been fixed. Read the [Changelog](https://github.com/PrestaShop/PrestaShop/releases) for details. This brings us to more than XX merged pull requests for the 1.7.7.0 milestone, it is definitely our biggest yet.

If you are looking for more details about all changes and new features expected in 1.7.7, the [1.7.7 beta version release note](https://build.prestashop.com/news/prestashop-1-7-7-0-beta-release/) is the perfect article for you to read!


## Known issues

These regressions should be fixed in the next patch versions

**Order back-office**
- [An exception is displayed when changing the invoice address a  second time - Round mode = Round on each item](https://github.com/PrestaShop/PrestaShop/issues/21717)
- [When stock management is disabled, the available quantity in order detail is displayed](https://github.com/PrestaShop/PrestaShop/issues/21767)
- [While creating an order, the minimum quantity of a combination is not correct](https://github.com/PrestaShop/PrestaShop/issues/21873)
- [Special characters not correctly displayed in private note](https://github.com/PrestaShop/PrestaShop/issues/21829)
- [When updating the quantity of a product using the "up/down arrow" with consecutive hits on the same input, it's not acknowledged correctly](https://github.com/PrestaShop/PrestaShop/issues/21734)
- [An error is displayed when trying to remove a voucher with free gift](https://github.com/PrestaShop/PrestaShop/issues/21810)
- [The voucher line is not removed when the Order's total < Minimum amount for cart rule](https://github.com/PrestaShop/PrestaShop/issues/21812)
- [While creating an order, all languages are displayed in the drop-down instead of only languages associated to the shop selected](https://github.com/PrestaShop/PrestaShop/issues/21817)
- [When adding a product with an associated gift, the gifted product quantity is not updated](https://github.com/PrestaShop/PrestaShop/issues/21592)
- [The gifted product is not removed when removing a product ordered](https://github.com/PrestaShop/PrestaShop/issues/21500)
- [The Voucher "Free shipping " value is not updated when changing an address](https://github.com/PrestaShop/PrestaShop/issues/21549)
- [Vouchers block - Voucher line is not added when a cart rule "Discount for a country selection" is applied](https://github.com/PrestaShop/PrestaShop/issues/21548)
- [Product quantity no updated if a discount with free gift is applied](https://github.com/PrestaShop/PrestaShop/issues/21506)
- [Recalculate shipping costs option enabled - the Shipping price not instantly updated](https://github.com/PrestaShop/PrestaShop/issues/21267)
- [Payment block not refreshed after adding product](https://github.com/PrestaShop/PrestaShop/issues/21293)
- [Incorrect quantity added to product when it is added to the same order as a gift also](https://github.com/PrestaShop/PrestaShop/issues/21531)
- [Incorrect Total's product line when Round type = "Round on each item"](https://github.com/PrestaShop/PrestaShop/issues/21708)
- [When we try to return products in all shops context, an exception is displayed](https://github.com/PrestaShop/PrestaShop/issues/21990)
- [An alert "Error! There are not enough products in stock." is displayed when updating the product quantity in "all shops" context](https://github.com/PrestaShop/PrestaShop/issues/21987)
- [The characters limit is wrongly calculated when choosing a predefined message](https://github.com/PrestaShop/PrestaShop/issues/22086)
- [In the info block - The shipping is not refreshed after adding a product](https://github.com/PrestaShop/PrestaShop/issues/22071)
- [While creating an order, after adding a product, if you click quickly, the focus change between the "up" arrow and the "down" arrow](https://github.com/PrestaShop/PrestaShop/issues/22026)
- [With a different currency than the default one, if there is a  discount on a category for a customer group, when we update a product the price is wrong](https://github.com/PrestaShop/PrestaShop/issues/22096)
- [Details modal for carts - the Refresh button is not working](https://github.com/PrestaShop/PrestaShop/issues/22105)
- [An unexpected error occurred when adding to the cart a product with customization in a multistore context](https://github.com/PrestaShop/PrestaShop/issues/22110)
- [The shipping block is not instantly updated when updating the Address](https://github.com/PrestaShop/PrestaShop/issues/22124)

**Front-office**
- [Pack of products - Incorrect image displayed for products with combinations](https://github.com/PrestaShop/PrestaShop/issues/21875)
- [displayAfterProductThumbs hook content is duplicated after adding a product in the cart](https://github.com/PrestaShop/PrestaShop/issues/22113)

**Back-office**
- [Adding incorrect language causes exception in Edit Currency page](https://github.com/PrestaShop/PrestaShop/issues/21891)
- [Bad URL for module catalog page after disabling MBO](https://github.com/PrestaShop/PrestaShop/issues/21588)


## Acknowledgments

PrestaShop is above all a community project: from the XX committers who contributed to this release, XX are new contributors. The vast majority of PrestaShop contributors are not directly affiliated with the PrestaShop company.
A huge thanks to everyone involved in this version!
Thank you again for helping improve the lives of more than 300,000 online merchants with ideas, improvements, and fixes!
