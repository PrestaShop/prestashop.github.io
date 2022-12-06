---
layout: post
title:  "Release of PrestaShop 1.7.8.5"
subtitle: "Maintenance version of the 1.7.8.x branch"
date:   2022-03-18
authors: [ PrestaShop ]
image: /assets/images/2022/03/1.7.8.5_banner.jpg
icon: icon-checked
tags:
 - version
 - patch
 - releases
 - 1.7.8.x
 - 1.7

---

Due to a critical regression , it has been decided to deliver a new maintenance release for 1.7.8 branch.

We also fix 4 minors bugs.


![1.7.8.5 is available!](/assets/images/2022/03/1.7.8.5_banner.jpg)


We suggest upgrading your store quickly to benefit from these bug fixes. Make sure to perform a full manual backup before, so you can roll back the upgrade if something goes wrong.

Reminder: the latest version of the 1-Click Upgrade module is v4.14.0, don't forget to upgrade it.

## Critical regression

- [Fix a regression in 1.7.8.4 by which the hook  names  became case sensitive. Comparing the hook names all in lowercase solves the problem](https://github.com/PrestaShop/PrestaShop/pull/27874)


## Bug fixes

- [Fix the SEO  item list index position for the product list](https://github.com/PrestaShop/PrestaShop/issues/27725)
- [Fix buggy floats on “stay logged in” and ”lost password” on the latest chrome version](https://github.com/PrestaShop/PrestaShop/issues/27835)
- [Fix bug for the empty state in stock delta component. It should be displayed as zero when value is empty](https://github.com/PrestaShop/PrestaShop/issues/27736)
- [Add help field when integer type is used to a form . The help field was not displayed when integer was used to a form](https://github.com/PrestaShop/PrestaShop/issues/27761)



## Acknowledgments

Contributors to this patch version:

[NeOMakinG](https://github.com/neomaking), [jolelievre](https://github.com/jolelievre), [okom3pom](https://github.com/okom3pom), [Progi1984](https://github.com/progi1984), [lmeyer1](https://github.com/lmeyer1)
Thank you!

[Download PrestaShop 1.7.8.5 now!](https://www.prestashop.com/versions){: .btn .btn-lg .btn-success}
{: .text-center}

Since version 1.7.8.5 is a “patch” update to version 1.7.8.4, upgrading from any 1.7.8 version will be easy: features will work better, and modules & themes which worked fine on 1.7.8.x will work just as well with 1.7.8.4. Upgrades from a standard 1.7.x version should work just as well.
