---
layout: post
title:  "Release of PrestaShop 1.7.8.1"
subtitle: "Maintenance version of the 1.7.8.x branch"
date:   2021-11-16
authors: [ PrestaShop ]
image: /assets/images/2021/11/1.7.8.1_build.jpg
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.8.x
 - 1.7

---

PrestaShop 1.7.8.1 is now available. This maintenance release fixes 44 regressions reported since the initial 1.7.8.0 release.

![1.7.8.1 is available!](/assets/images/2021/11/1.7.8.1_build.jpg)

We suggest upgrading your shop quickly in order to benefit from these fixes. Of course, don’t forget to backup before.

## Back office regressions

- [Stock page - If a product attribute containd a comma, it is not displayed](https://github.com/PrestaShop/PrestaShop/issues/26429)
- [Dashboard page - Selecting a date range doesn't work and causes a jquery error](https://github.com/PrestaShop/PrestaShop/issues/25966)
- [Modules page - Cannot install any module when the employee language is spanish](https://github.com/PrestaShop/PrestaShop/issues/26028)
- [Perofrmance page - Cannot change the settings in a single store context](https://github.com/PrestaShop/PrestaShop/issues/26058)
- [Customer view page - The pagination of the voucher block is not working](https://github.com/PrestaShop/PrestaShop/issues/25588)
- [SQL Manager page - SQL query return exception](https://github.com/PrestaShop/PrestaShop/issues/25684)
- [Invoices page - Longer buttons overflow their container on lower resolutions](https://github.com/PrestaShop/PrestaShop/issues/25422)
- [Localization Page - There is no confirmation modal when changing the default currency](https://github.com/PrestaShop/PrestaShop/issues/25264)
- [View supplier page - Unexpected error](https://github.com/PrestaShop/PrestaShop/issues/25593)
- [View customer page - Incorrect display of the address block](https://github.com/PrestaShop/PrestaShop/issues/25174)
- [Add/edit tax rule page - The state and the postal code fields are not aligned](https://github.com/PrestaShop/PrestaShop/issues/26491) 
- [Add/edit category page - The browser is unable to show the error message on an hidden element](https://github.com/PrestaShop/PrestaShop/issues/23365)
- [Add/edit country page - The address format is badly displayed](https://github.com/PrestaShop/PrestaShop/issues/26342)
- [Add/edit customer group page - The "Category discount" part is misaligned](https://github.com/PrestaShop/PrestaShop/issues/26348)
- [Add/edit attribute and add/edit social title pages - The language dropdown is not well displayed when resizing the window](https://github.com/PrestaShop/PrestaShop/issues/26252)
- [Add/edit product page - When we try to delete all combinations, the warning modal is empty](https://github.com/PrestaShop/PrestaShop/issues/25901)
- [Edit supplier page - Unable to save "meta_keywords" field](https://github.com/PrestaShop/PrestaShop/issues/25705)
- [If using the multistore and while making a manual upgrade, a new line in ps_configuration is created for PS_VERSION_DB](https://github.com/PrestaShop/PrestaShop/issues/25303)
- [In the Credit slip, the Ecotax is displayed in the Tax details while it shouldn't](https://github.com/PrestaShop/PrestaShop/issues/25493)

### Orders regressions

- [Order details page - While adding a discount, the modal is not well displayed](https://github.com/PrestaShop/PrestaShop/issues/22315) 
- [Order details page - an exception is displayed when status of the "merchandise return" is deleted](https://github.com/PrestaShop/PrestaShop/issues/25510)
- [Order details page - The errors while deleting a product are not displayed](https://github.com/PrestaShop/PrestaShop/issues/25298)
- [Order details page - Debug mode enabled - an exception is displayed when ordering a deleted product with a file customization](https://github.com/PrestaShop/PrestaShop/issues/25644)
- [Orders - impossible to extend order grid query from module](https://github.com/PrestaShop/PrestaShop/issues/24911)

### Display regressions

- [Buttons are not well displayed](https://github.com/PrestaShop/PrestaShop/issues/26040)
- [Buttons are not well displayed](https://github.com/PrestaShop/PrestaShop/issues/25740)
- [Buttons are not well displayed](https://github.com/PrestaShop/PrestaShop/issues/25980)
- [Floating button over some elements on migrated pages and prevent to save form](https://github.com/PrestaShop/PrestaShop/issues/25423)


## Front office regressions

- [Problem when adding images with different ratio](https://github.com/PrestaShop/PrestaShop/issues/25853)
- [After upgrade, theme must be updated to be able to pay into the final step](https://github.com/PrestaShop/PrestaShop/issues/26274)
- [Simple anchors does not work on CMS page](https://github.com/PrestaShop/PrestaShop/issues/26326)
- [The add to cart button is not working when clicking on the icon cart](https://github.com/PrestaShop/PrestaShop/issues/26433)
- [Product disabled - an exception is displayed when changing combination or increasing / decreasing a quantity](https://github.com/PrestaShop/PrestaShop/issues/25891)
- [Product comment structured data AggregateRating isn't working](https://github.com/PrestaShop/PrestaShop/issues/25372)
- [Shopping cart page - An exception is displayed when a product added to the cart is transformed from simple product to a product with combinations](https://github.com/PrestaShop/PrestaShop/issues/25942)
- [Product structured data json-ld problem when price is not displayed](https://github.com/PrestaShop/PrestaShop/issues/25371)
- [Search with semicolon gives no result. Search differs from earlier versions of find()](https://github.com/PrestaShop/PrestaShop/issues/25394)
- [An exception is displayed when a product added to the cart is transformed from simple product to a product with combinations](https://github.com/PrestaShop/PrestaShop/issues/25942)

### Display regressions

- [The product-flags are displayed in the same row with no space](https://github.com/PrestaShop/PrestaShop/issues/25272)
- [There is an horizontal scrollbar on the homepage under 991px and the carousel overflows the content](https://github.com/PrestaShop/PrestaShop/issues/25459)
- [The search button in the header is not responsive on mobile](https://github.com/PrestaShop/PrestaShop/issues/25133)
- [Featured product not well displayed with responsive](https://github.com/PrestaShop/PrestaShop/issues/25283)


## Module regressions
- [Bad display in autoupgrade module](https://github.com/PrestaShop/PrestaShop/issues/25989)
- [Ps_banner module fixed width and height value](https://github.com/PrestaShop/PrestaShop/issues/25852)


## Acknowledgements

Contributors to this patch version, from both the Core team and the community at large:

Thank you !

[Download PrestaShop 1.7.8.1 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

For any upgrades problems or PrestaShop’s bugs, please create a new issue [here](https://github.com/PrestaShop/PrestaShop/issues/new/choose).

If you have questions or need help, do not hesitate to take a look at [our community platforms or support plans.](https://devdocs.prestashop.com/1.7/faq/i-need-help/)

Since version 1.7.8.1 is a “patch” update to version 1.7.8, upgrading from 1.7.8.0 version will be easy: features will work better, and modules & themes which worked fine on 1.7.8.x will work just as well with 1.7.8.1. Upgrades from a standard 1.7.x version should work just as well.
