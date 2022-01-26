---
layout: post
title:  "Release of PrestaShop 1.7.8.3"
subtitle: "Maintenance version of the 1.7.8.x branch"
date:   2022-01-26 14:00:00
authors: [ PrestaShop ]
image: /assets/images/2022/01/1.7.8.3_banner.jpg
icon: icon-checked
tags:
- version
- patch
- releases
- 1.7.8.x
- 1.7

---

PrestaShop 1.7.8.3 is now available. This maintenance release fixes 25 bugs and 1 security issue since the 1.7.8.2 release.
Note: two of these fixes are not fully backward compatible ([#26933](https://github.com/PrestaShop/PrestaShop/issues/26933) and [#26643](https://github.com/PrestaShop/PrestaShop/issues/26643)) 

![1.7.8.3 is available!](/assets/images/2022/01/1.7.8.3_banner.jpg)


We suggest upgrading your store quickly to benefit from these corrections. Make sure to perform a full manual backup before. It will be essential to roll back to the previous database and files if needed.

Reminder: the latest version of the 1-Click Upgrade module is v4.14.0, don't forget to upgrade it.

---

## Bug fixes 

- [Adds responsiveness to manufacturer logo on product page](https://github.com/PrestaShop/PrestaShop/issues/26373)
- [Fix recalculate shipping when the carrier of an order is changed](https://github.com/PrestaShop/PrestaShop/issues/25565)
- [Fix the header search box oversized height for RTL languages](https://github.com/PrestaShop/PrestaShop/issues/26635)
- [Using display hooks in order view produces error](https://github.com/PrestaShop/PrestaShop/issues/26471)
- [Remove unnecessary scrollbar on customization fields on new order page](https://github.com/PrestaShop/PrestaShop/issues/26535)
- [Remove lazy load for logo on Front Office](https://github.com/PrestaShop/PrestaShop/issues/26666)
- [Replaces the new product flag in the product flags by new](https://github.com/PrestaShop/PrestaShop/issues/26640)
- [Fix listing classes when using facetedsearch](https://github.com/PrestaShop/PrestaShop/issues/26820)
- [Fix dropdown align on email theme page](https://github.com/PrestaShop/PrestaShop/issues/26604)
- [Fix width and height value for product image in listing template](https://github.com/PrestaShop/PrestaShop/issues/25849)
- [Remove header calculation and set toolbar to sticky](https://github.com/PrestaShop/PrestaShop/issues/26383)
- [Fix a bad alignment of label in the email theme page](https://github.com/PrestaShop/PrestaShop/issues/26915)
- [Fix the newsletter block overlap on customer reassurance  block](https://github.com/PrestaShop/PrestaShop/issues/26846)
- [CI is broken on autoupgrade - PHPStan with 1.6.1.18](https://github.com/PrestaShop/PrestaShop/issues/26861)
- [Remove duplication of cache folders in letting Symfony handle kernel reboot for tests](https://github.com/PrestaShop/PrestaShop/issues/26924)
- [Fix untranslatable Tabs for shops upgraded to 1.7.8.0 (BC Break)](https://github.com/PrestaShop/PrestaShop/issues/26933)
- [Fix menu and searchbar on tablet on classic (BC Break)](https://github.com/PrestaShop/PrestaShop/issues/26643)
- [Allow vertical scroll on product images](https://github.com/PrestaShop/PrestaShop/issues/26597)
- [Fix product width on featuredproducts](https://github.com/PrestaShop/PrestaShop/issues/26992)
- [Allow all characters for Cart Rule & Order Cart Rule names](https://github.com/PrestaShop/PrestaShop/issues/25829)
- [Add an option to regenerate RTL file during the upgrade](https://github.com/PrestaShop/PrestaShop/issues/27307)


## Modules 

- [Excludes vendor, lib, tests directories when scanning modules' directories to extract translation catalogue](https://github.com/PrestaShop/PrestaShop/issues/24987)
- [Fix color picker bug when multiple colorpickers are present](https://github.com/PrestaShop/PrestaShop/issues/25013)
- [Error with dynamical form rendering in 1.7.8.1](https://github.com/PrestaShop/PrestaShop/issues/26786)
- [Fix product width on featured products](https://github.com/PrestaShop/PrestaShop/issues/26705)

Read the [full changelog](https://github.com/PrestaShop/PrestaShop/releases/tag/1.7.8.3).

## Security fix 

One security fix has been included in this patch version:

- Server Side Twig Template Injection [security advisory](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-mrq4-7ch7-2465)


## Acknowledgments

Contributors to this patch version:

Boubker Bribri, Daniel Hlavacek, Franck Lefèvre, Hibatallah Aouadni, Ibrahima Sow, Igor Stępień, Jonathan Lelievre, Louis Authie, M. Parvazi, Marcin Sz, Mathieu Ferment, Matthieu Rolland, okom3pom, Pablo Borowicz, Pierre Rambaud, Sharak, Thomas Baccelli, Valentin Szczupak, Web Helpers Pau

Thank you!

[Download PrestaShop 1.7.8.3 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}

{: .text-center}

Since version 1.7.8.3 is a “patch” update to version 1.7.8.2, upgrading from any 1.7.8 version will be easy: features will work better, and modules & themes which worked fine on 1.7.8.x will work just as well with 1.7.8.2. Upgrades from a standard 1.7.x version should work just as well.
