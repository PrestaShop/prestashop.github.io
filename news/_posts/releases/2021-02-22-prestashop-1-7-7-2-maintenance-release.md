---
layout: post
title:  "Release of PrestaShop 1.7.7.2"
subtitle: "Maintenance version of the 1.7.7.x branch"
date:   2021-02-22 18:00:00
authors: [ PrestaShop ]
image: /assets/images/2021/02/1.7.7.2_meta.png
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.7.x
 - 1.7
---

After a few months dedicated to fixing upgrades problems, regressions and security issues found on the previous 1.7.7 versions, PrestaShop 1.7.7.2 is finally available! 

![1.7.7.2 is available!](/assets/images/2021/02/1.7.7.2_banner.png)

This maintenance release fixes 21 bugs reported on version 1.7.7.0 and 1.7.7.1 and 2 security issues.

We suggest upgrading your shop quickly in order to benefit from these changes. Of course, don’t forget to make a backup before.

Reminder:  the 1-Click Upgrade module’s latest version is v4.12.0, don’t forget to upgrade it before using it.



## Main fixes

Below are listed some main regressions we fixed in this version:

**Upgrade**



*   [When upgrading from 1.6.1.24 to 1.7.7.1, modules crashes the FO](https://github.com/PrestaShop/PrestaShop/issues/22668)
*   [When upgrading from 1.7.6.9 to 1.7.7.1 some DB's columns are missing](https://github.com/PrestaShop/PrestaShop/issues/22881)

**SEO**



*   [ItemList is incorrect for products blocks of carousels and product list](https://github.com/PrestaShop/PrestaShop/issues/22636)
*   [A search with Alias composed with two words doesn't show any results](https://github.com/PrestaShop/PrestaShop/issues/22444)

**Order page**



*   [I cannot delete a product when debug mode is enabled](https://github.com/PrestaShop/PrestaShop/issues/22625)
*   [The display of the cart rule on FO with free gift + percentage cart rule is incorrect](https://github.com/PrestaShop/PrestaShop/issues/22615)
*   [The Shipping price not instantly updated on the Order page](https://github.com/PrestaShop/PrestaShop/issues/21267)
*   [The VAT number is missing in order page](https://github.com/PrestaShop/PrestaShop/issues/22830)
*   [I cannot search a product when a shop from different Group is selected on create a the Add new order page](https://github.com/PrestaShop/PrestaShop/issues/22460)
*   [Symfony ContextErrorException Error 500 when debug enabled](https://github.com/PrestaShop/PrestaShop/issues/22231)
*   [The refresh button is not working on details modal of carts on the customer page](https://github.com/PrestaShop/PrestaShop/issues/22105)
*   [The gift block is not updated when changing the Address for a discount on the countrie on the Add new Order page](https://github.com/PrestaShop/PrestaShop/issues/22243)
*   [BO - Orders page - an error is displayed in the console when adding a voucher · Issue #22590 · PrestaShop/PrestaShop](https://github.com/PrestaShop/PrestaShop/issues/22590)

**Shopping Cart**



*   [Reference number of product is incorrect in Shopping Carts](https://github.com/PrestaShop/PrestaShop/issues/22854)
*   [Searching and viewing shopping carts in the back office produces an "unexpected error" screen](https://github.com/PrestaShop/PrestaShop/issues/22812)

**Others**



*   [Installation Error in Persian (Farsi) Language](https://github.com/PrestaShop/PrestaShop/issues/22657)
*   [Customer Group Discounts are not showned on Your voucher page in the front-office](https://github.com/PrestaShop/PrestaShop/issues/22397)

Read the [full changelog here](https://github.com/PrestaShop/PrestaShop/releases/tag/1.7.7.2)]

## Security fixes

2 security fixes have been included in this patch version:



*   CSV Injection via CSV export ([security advisory](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-2rw4-2p99-cmx9))
*   Improper session management for soft logout ([security advisory](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-557h-hf3c-whcg))


## Acknowledgments

Contributors to this patch version, from both the Core team and the community at large: 

Ali Shareei, Boubker Bribri, Franck Lefèvre, Ibrahima Sow, Krystian Podemski, Mathieu Ferment, Nesrine Abdmouleh, Pierre Rambaud, Simon Garny, Thomas Baccelli and Valentin Szczupak

Thank you!

[Download PrestaShop 1.7.7.2 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

We would like to send a special thank to Pululu Kinanga (@Pululuk), our external maintainer of the open-source solution and also thank the [Agence123](https://www.lagence123.com/) for this second release. They helped us to deliver this patch version. This is a new step towards the independence of the open-source project.

For any upgrades problems or PrestaShop’s bugs, please create a new issue [here](https://github.com/PrestaShop/PrestaShop/issues/new/choose).

If you have questions or need help, do not hesitate to take a look at [our community platforms or support plans.](https://devdocs.prestashop.com/1.7/faq/i-need-help/)

Since version 1.7.7.2 is a “patch” update to version 1.7.7, upgrading from any 1.7.7 version will be easy: features will work better, and modules & themes which worked fine on 1.7.7.x will work just as well with 1.7.7.2. Upgrades from a standard 1.7.x version should work just as well.
