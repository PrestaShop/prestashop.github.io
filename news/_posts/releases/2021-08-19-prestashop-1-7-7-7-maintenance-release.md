---
layout: post
title:  "Release of PrestaShop 1.7.7.7"
subtitle: "Maintenance version of the 1.7.7.x branch"
date:   2021-08-19
authors: [ PrestaShop ]
image: /assets/images/2021/08/1.7.7.7_build.png
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.7.x
 - 1.7
---

PrestaShop 1.7.7.7 is now available. This maintenance release fixes 1 critical regression and 1 minor regression.

![1.7.7.7 is available!](/assets/images/2021/08/1.7.7.7_build.png)

We suggest upgrading your shop quickly in order to benefit from these fixes. Of course, don't forget to backup before.

## Critical fix

One critical bug has been fixed in 1.7.7.7:

- [The checkout at shipping step crashes when a cart rule was used if the database prefix is not ps_](https://github.com/PrestaShop/PrestaShop/issues/25617)

## Order page issue

- [Merchants weren't able to download the file from a customized product in the order page if the product wasn't translated in the employee's back office language](https://github.com/PrestaShop/PrestaShop/issues/25631)

## Acknowledgements

Many thanks to [@idnovate](https://github.com/idnovate) for reporting the bug and providing a patch!

[Download PrestaShop 1.7.7.7 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

For any upgrades problems or PrestaShop’s bugs, please create a new issue [here](https://github.com/PrestaShop/PrestaShop/issues/new/choose).


If you have questions or need help, do not hesitate to take a look at [our community platforms or support plans.](https://devdocs.prestashop.com/1.7/faq/i-need-help/)

Since version 1.7.7.7 is a “patch” update to version 1.7.7, upgrading from any 1.7.7 version will be easy: features will work better, and modules & themes which worked fine on 1.7.7.x will work just as well with 1.7.7.7. Upgrades from a standard 1.7.x version should work just as well.
