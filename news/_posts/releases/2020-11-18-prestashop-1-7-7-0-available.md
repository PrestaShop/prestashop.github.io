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

This release is our biggest yet since 1.7.1.0. More than one year of development, two betas, one release candidate Was it worth it? We absolutely think so, and hope that you will enjoy using it.

In this version we focused on improving productivity with the [full redesign and new features of order pages](https://build.prestashop.com/news/the-new-order-pages-in-prestaShop-1-7-7/), improving growth and flexibility with [the international improvements](https://build.prestashop.com/news/prestashop-keeps-growing-internationally/) and [the fuzzy search](https://build.prestashop.com/news/introduction-to-the-fuzzy-search/) and kept working on robustness with the symfony migration and bug fixes as well.


## Notable changes since the RC1

**Order back-office**
- [An error 500 is displayed when adding a product with a min quantity](https://github.com/PrestaShop/PrestaShop/issues/21525)
- [An exception is displayed in the console when adding an out of stock product](https://github.com/PrestaShop/PrestaShop/issues/21794)
- [An exception is displayed when canceling a product and if an invoice is generated](https://github.com/PrestaShop/PrestaShop/issues/21850)
- [An exception is displayed when ordering a product with a file customization’s name containing a space](https://github.com/PrestaShop/PrestaShop/issues/21815)


## Changelog

XX pull requests have been merged since the RC1 and 9 issues have been fixed. Read the [Changelog](https://github.com/PrestaShop/PrestaShop/releases) for details. This brings us to more than XX merged pull requests for the 1.7.7.0 milestone, it is definitely our biggest yet.

If you are looking for more details about all changes and new features expected in 1.7.7, the [1.7.7 beta version release note](https://build.prestashop.com/news/prestashop-1-7-7-0-beta-release/) is the perfect article for you to read!


## Known issues

These regressions should be fixed in 1.7.7.1

**Order back-office**
- [An exception is displayed when changing the invoice address a  second time - Round mode = Round on each item](https://github.com/PrestaShop/PrestaShop/issues/21717)
- [When stock management is disabled, the available quantity in order detail is displayed](https://github.com/PrestaShop/PrestaShop/issues/21767)
- [The canceled status is repeated twice](https://github.com/PrestaShop/PrestaShop/issues/21902)
- [While creating an order, the minimum quantity of a combination is not correct](https://github.com/PrestaShop/PrestaShop/issues/21873)
- [Special characters not correctly displayed in private note](https://github.com/PrestaShop/PrestaShop/issues/21829)
- [When updating the quantity of a product using the "up/down arrow" with consecutive hits on the same input, it's not acknowledged correctly](https://github.com/PrestaShop/PrestaShop/issues/21734)
- [An error is displayed when trying to remove a voucher with free gift](https://github.com/PrestaShop/PrestaShop/issues/21810)
- [The voucher line is not removed when the Order's total < Minimum amount for cart rule](https://github.com/PrestaShop/PrestaShop/issues/21812)
- [While creating an order, all languages are displayed in the drop-down instead of only languages associated to the shop selected](https://github.com/PrestaShop/PrestaShop/issues/21817)
- [When adding a product with an associated gift, the gifted product quantity is not updated](https://github.com/PrestaShop/PrestaShop/issues/21592)
- [The gifted product is not removed when removing a product ordered](https://github.com/PrestaShop/PrestaShop/issues/21500)
- [Edit quantity and deletion in order in BO in Multishop context : Totals are not updated](https://github.com/PrestaShop/PrestaShop/issues/21706)
- [The Voucher "Free shipping " value is not updated when changing an address](https://github.com/PrestaShop/PrestaShop/issues/21549)
- [Vouchers block - Voucher line is not added when a cart rule "Discount for a country selection" is applied](https://github.com/PrestaShop/PrestaShop/issues/21548)
- [Product quantity no updated if a discount with free gift is applied](https://github.com/PrestaShop/PrestaShop/issues/21506)
- [Recalculate shipping costs option enabled - the Shipping price not instantly updated](https://github.com/PrestaShop/PrestaShop/issues/21267)
- [Payment block not refreshed after adding product](https://github.com/PrestaShop/PrestaShop/issues/21293)
- [Incorrect quantity added to product when it is added to the same order as a gift also](https://github.com/PrestaShop/PrestaShop/issues/21531)
- [Incorrect Total's product line when Round type = "Round on each item"](https://github.com/PrestaShop/PrestaShop/issues/21708)

**Front-office**
- [Pack of products - Incorrect image displayed for products with combinations](https://github.com/PrestaShop/PrestaShop/issues/21875)

**Back-office**
- [Adding incorrect language causes exception in Edit Currency page](https://github.com/PrestaShop/PrestaShop/issues/21891)
- [Bad URL for module catalog page after disabling MBO](https://github.com/PrestaShop/PrestaShop/issues/21588)

**Core**
- [Mail translation change the product table location in html template](https://github.com/PrestaShop/PrestaShop/issues/21630)

## Download

You can download PrestaShop 1.7.7.0 here:

[Download PrestaShop 1.7.7.0 now!](https://www.prestashop.com/en/developers-versions){: .btn .btn-lg .btn-success}
{: .text-center}
 
PrestaShop 1.7.7.0 is also available through the 1-Click Upgrade module. 


## Acknowledgments

PrestaShop is above all a community project: from the XX committers who contributed to this release, XX are new contributors. The vast majority of PrestaShop contributors are not directly affiliated with the PrestaShop company.
A huge thanks to everyone involved in this version!
Thank you again for helping improve the lives of more than 300,000 online merchants with ideas, improvements, and fixes!

