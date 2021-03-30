---
layout: post
title:  "Release of PrestaShop 1.7.7.3"
subtitle: "Maintenance version of the 1.7.7.x branch"
date:   2021-03-30 14:00:00
authors: [ PrestaShop ]
image: /assets/images/2021/03/1.7.7.3_meta.png
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.7.x
 - 1.7
---

PrestaShop 1.7.7.3 is now available. This maintenance release fixes 10 bugs reported on previous 1.7.7 versions, as well as one security issue.

![1.7.7.3 is available!](/assets/images/2021/03/1.7.7.3_banner.png)

We suggest upgrading your shop quickly in order to benefit from these changes. Of course, don’t forget to make a backup before.

Reminder: the 1-Click Upgrade module’s latest version is v4.12.0, don’t forget to upgrade it before using it.

## Main fixes

Below are listed some main regressions we fixed in this version:

**Back Office**

* [When adding a payment method with an only space an exception is displayed](https://github.com/PrestaShop/PrestaShop/issues/23287)
* [When open a cart rule with a free gift, and this product is not enabled in the store context, it throws an exception](https://github.com/PrestaShop/PrestaShop/issues/23376)
* [When try to update the quantity of the customized product for the second time, the updated product’s quantity is not OK](https://github.com/PrestaShop/PrestaShop/issues/23265)
* [The Identification number ("DNI") is not displayed in Address block](https://github.com/PrestaShop/PrestaShop/issues/22979)
* [When we add a payment to Order view page with invalid payment an Unclear error is displayed](https://github.com/PrestaShop/PrestaShop/issues/22587)
* [On “add new order” for a product with a "Deny out of stock order" behavior, it is possible to add more product than available (only by editing quantity)](https://github.com/PrestaShop/PrestaShop/issues/22109)
* [Having two order states with the same name makes status name disappear in order list after order validation](https://github.com/PrestaShop/PrestaShop/issues/22870)


**Front office**

* [When we add a product with a color combination to the cart, in the shopping cart page & in the shopping cart-modal, this product is not well displayed](https://github.com/PrestaShop/PrestaShop/issues/23660)
* [Fix errors when viewing an order in BackOffice when the language of the order no longer exists](https://github.com/PrestaShop/PrestaShop/issues/22611)
* [Products are not centered correctly in the home container](https://github.com/PrestaShop/PrestaShop/issues/23372)


Read the [full changelog here](https://github.com/PrestaShop/PrestaShop/releases/tag/1.7.7.3).

## Security fixes

One security fix have been included in this patch version:

*   Possible XSS injection through DataColumn Grid class ([security advisory](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-fhhq-4x46-qx77))

## Acknowledgments

Contributors to this patch version, from both the Core team and the community at large: 

Boubker Bribri, Franck Lefèvre, Mathieu Ferment, Nesrine Abdmouleh, Pablo Borowicz, Pierre Rambaud, Thomas Baccelli, Valentin Szczupak

Thank you!

[Download PrestaShop 1.7.7.3 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

For any upgrades problems or PrestaShop’s bugs, please create a new issue [here](https://github.com/PrestaShop/PrestaShop/issues/new/choose).

If you have questions or need help, do not hesitate to take a look at [our community platforms or support plans.](https://devdocs.prestashop.com/1.7/faq/i-need-help/)

Since version 1.7.7.3 is a “patch” update to version 1.7.7, upgrading from any 1.7.7 version will be easy: features will work better, and modules & themes which worked fine on 1.7.7.x will work just as well with 1.7.7.3. Upgrades from a standard 1.7.x version should work just as well.
