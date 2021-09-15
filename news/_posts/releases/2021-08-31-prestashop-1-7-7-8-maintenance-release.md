---
layout: post
title:  "Release of PrestaShop 1.7.7.8"
subtitle: "Maintenance version of the 1.7.7.x branch"
date:   2021-09-14
authors: [ PrestaShop ]
image: /assets/images/2021/08/1.7.7.8_build.png
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

![1.7.7.8 is available!](/assets/images/2021/08/1.7.7.8_build.png)

We suggest upgrading your shop quickly in order to benefit from these fixes. Of course, don’t forget to backup before.

## Major issues on the product page

- The issue [#25718](https://github.com/PrestaShop/PrestaShop/issues/25718) and [#25753](https://github.com/PrestaShop/PrestaShop/issues/25753) appeared due to the implementation of the numeric data format for number fields on the 1.7.7.6 patch version. This regression prevents users to edit the impact of a combination and causes rounding problems on the impact calculation. 

- An exception is displayed when combination feature is disabled on the performance page [#25782](https://github.com/PrestaShop/PrestaShop/issues/25782)

## Acknowledgements

Contributors to this patch version, from both the Core team and the community at large:

[@sowbiba](https://github.com/sowbiba), [@PierreRambaud](https://github.com/PierreRambaud), [@kpodemski](https://github.com/kpodemski), [@Progi1984](https://github.com/Progi1984), [@eternoendless](https://github.com/eternoendless) and [@matks](https://github.com/matks)

[Download PrestaShop 1.7.7.8 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

For any upgrades problems or PrestaShop’s bugs, please create a new issue [here](https://github.com/PrestaShop/PrestaShop/issues/new/choose).

If you have questions or need help, do not hesitate to take a look at [our community platforms or support plans.](https://devdocs.prestashop.com/1.7/faq/i-need-help/)

Since version 1.7.7.8 is a “patch” update to version 1.7.7, upgrading from any 1.7.7 version will be easy: features will work better, and modules & themes which worked fine on 1.7.7.x will work just as well with 1.7.7.8. Upgrades from a standard 1.7.x version should work just as well.
