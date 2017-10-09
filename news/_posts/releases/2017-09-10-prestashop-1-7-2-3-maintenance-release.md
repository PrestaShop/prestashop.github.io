---
layout: post
title:  "Release of PrestaShop 1.7.2.3"
subtitle: "Maintenance version of the 1.7.2.x branch"
date:   2017-10-09 09:10:11
authors: [ xavierborderie ]
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.2.x
 - 1.7
---

PrestaShop 1.7.2.3 is now available. This maintenance release fixes 17 issues reported on version 1.7.2.x.

Some of the most notable fixes are:

* New loading spinner in Product Creation page.
* New Context mocker for FrontController tests.
* Fix for a voucher issue.
* Fix currency display in supply order.
* Fix cart rules conflict issue.
* Fix web service product update.

[Download PrestaShop 1.7.2.3 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

Here is the [complete list of changes](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20milestone%3A1.7.2.3):

- Back Office:
 - Improvement:
   - [#7810](https://github.com/PrestaShop/PrestaShop/pull/#7810): Add a loading spinner into product page
 - Bug fix:
   - [#7938](https://github.com/PrestaShop/PrestaShop/pull/#7938): Update bulk action combinations number after delete or add combination
   - [#8232](https://github.com/PrestaShop/PrestaShop/pull/#8232): Fixed bug in AdminCartRulesController when limiting the validity …
   - [#8287](https://github.com/PrestaShop/PrestaShop/pull/#8287): Fix the category search in the product page
   - [#8288](https://github.com/PrestaShop/PrestaShop/pull/#8288): Fix displaying empty zip code of tax rule
   - [#8346](https://github.com/PrestaShop/PrestaShop/pull/#8346): Fix the currency display in supply order
   - [#8366](https://github.com/PrestaShop/PrestaShop/pull/#8366): Use default country instead of translator locale for marketplace API

- Front Office:
 - Bug fix:
   - [#7781](https://github.com/PrestaShop/PrestaShop/pull/#7781): Add error message when updating quantity wanted input
   - [#7848](https://github.com/PrestaShop/PrestaShop/pull/#7848): Fix switching combination when the product is offline
   - [#8283](https://github.com/PrestaShop/PrestaShop/pull/#8283): Currency exchange fixes on product page

- Core:
 - Improvement:
   - [#8360](https://github.com/PrestaShop/PrestaShop/pull/#8360): Fixing the version for core modules ps_legalcompliance ps_linklist ps_customtext ps_customeraccountlinks
 - Bug fix:
   - [#8213](https://github.com/PrestaShop/PrestaShop/pull/#8213): Voucher issue fix
   - [#8298](https://github.com/PrestaShop/PrestaShop/pull/#8298): Add context mocker for front controller tests 
   - [#8320](https://github.com/PrestaShop/PrestaShop/pull/#8320): Fix again issue on Travis with window maximization (1.7.2.x)
   - [#8361](https://github.com/PrestaShop/PrestaShop/pull/#8361): Fix conflict between two cart rules and a single product cart
   - [#8380](https://github.com/PrestaShop/PrestaShop/pull/#8380): Fix Context::getTranslator() cache

- Web Services:
 - Bug fix:
   - [#8275](https://github.com/PrestaShop/PrestaShop/pull/#8275): Fix update product with WS

Contributors to this patch version, from both the Core team and the community at large: @aleeks, @christianverardi, @eternoendless, @fatmabouchekoua, @hibatallahaouadni, @prestaworks, @quetzacoalt91, @rgaillard, @tomlev, and @toutantic! Thank you!

Since version 1.7.2.3 is a "patch" update to version 1.7.2.2, upgrading from any 1.7.2 version will be easy: features will work better, and modules & themes which worked fine on 1.7.2.0 will work just as well with 1.7.2.1.<br/>
Upgrades from a standard 1.7.x version should work just as well, and those upgrading from older versions (1.6, 1.5, 1.4 or even older) should take their time and pay attention to their modules, their theme and their custom modifications!
