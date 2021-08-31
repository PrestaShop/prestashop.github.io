---
layout: post
title:  "Release of PrestaShop 1.7.7.8"
subtitle: "Maintenance version of the 1.7.7.x branch"
date:   2021-08-19
authors: [ PrestaShop ]
image: /assets/images/2021/08/1.7.7.8_build.jpg
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.7.x
 - 1.7

---

PrestaShop 1.7.7.8 is now available. This maintenance release fixes 1 major regression.

![1.7.7.8 is available!](/assets/images/2021/08/1.7.7.8_build.jpg)

We suggest upgrading your shop quickly in order to benefit from these fixes. Of course, don’t forget to backup before.

## Major issue on the product page

This issue appeared due to the implementation of the new numeric data formatter for number fields in patch 1.7.7.6. This regression causes users to be unable to edit the impact of a combination [#25718](https://github.com/PrestaShop/PrestaShop/issues/25718)

## Acknowledgements

Many thanks for reporting the bug and providing a patch!

[Download PrestaShop 1.7.7.8 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

For any upgrades problems or PrestaShop’s bugs, please create a new issue [here](https://github.com/PrestaShop/PrestaShop/issues/new/choose).

If you have questions or need help, do not hesitate to take a look at [our community platforms or support plans.](https://devdocs.prestashop.com/1.7/faq/i-need-help/)

Since version 1.7.7.8 is a “patch” update to version 1.7.7, upgrading from any 1.7.7 version will be easy: features will work better, and modules & themes which worked fine on 1.7.7.x will work just as well with 1.7.7.8. Upgrades from a standard 1.7.x version should work just as well.
