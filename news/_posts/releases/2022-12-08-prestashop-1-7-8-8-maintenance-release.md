---
layout: post
title:  PrestaShop 1.7.8.8 Is Available
subtitle: 
date: 2022-12-08
authors: [ PrestaShop ]
image: /assets/images/2022/12/banner1.7.8.8_1534_424.jpg
icon: icon-leaf
tags:
- version
- patch
- releases
- 1.7.8.8
- 1.7.8.x
---

It has been decided to deliver a new maintenance release for 1.7.8.x branch. Please note that this will be the last regular 1.7.8.x patch version, as the branch now enters security-only maintenance phase. Next regular patches will now target 8.0.x branch.

![1.7.8.8 is available!](/assets/images/2022/12/banner1.7.8.8_1534_424.jpg)

This release fixes some bugs and regressions as well as a security fix.

We suggest upgrading your shop quickly in order to benefit from these fixes. Of course, don’t forget to backup before.

Reminder: the 1-Click Upgrade module’s latest version is v4.14.2, don’t forget to upgrade it.

---

## Bug fixes

Issues involved in the milestone 1.7.8.8
========================================

- [FO Responsive - Zoom on product image stretches the images](https://github.com/PrestaShop/PrestaShop/issues/29865)
- [Delivery address force as invoice address when use "use different addresses for invoice"](https://github.com/PrestaShop/PrestaShop/issues/29289)
- [Customization value lost after combination change, leading to customization mess](https://github.com/PrestaShop/PrestaShop/issues/29185)
- [FO - ps_facetedsearch - A bad display afer clearing a filter of no result](https://github.com/PrestaShop/PrestaShop/issues/28966)
- [FO Mobile - on Search sort result list, click on back to top button reload the page with the sort](https://github.com/PrestaShop/PrestaShop/issues/28932)
- [BO - Exception thrown when adding invalid avatar format in profile page](https://github.com/PrestaShop/PrestaShop/issues/28484)
- [prestashop 1.7 customization field doesn't appear in backoffice order](https://github.com/PrestaShop/PrestaShop/issues/28041)
- [BO - An exception is displayed when editing a currency with a custom lanaguage](https://github.com/PrestaShop/PrestaShop/issues/27921)
- [Product listed as "New" but without flag](https://github.com/PrestaShop/PrestaShop/issues/27737)
- [Multistore - wrong BO language](https://github.com/PrestaShop/PrestaShop/issues/27617)
- [[Multistore] - Product on category page display out of stock flag instead of availlable on order](https://github.com/PrestaShop/PrestaShop/issues/27604)
- [Side menu is in English even if the shop is installed in another language (docker)](https://github.com/PrestaShop/PrestaShop/issues/27029)
- [FO -  Quick view - The type of the product's cover image is incorrect](https://github.com/PrestaShop/PrestaShop/issues/26557)
- [Exported translations are not working properly](https://github.com/PrestaShop/PrestaShop/issues/26549)
- [Export in CSV the whole list instead of the current page on the BO list page](https://github.com/PrestaShop/PrestaShop/issues/19527)

## Security fix

[Advisory GHSA-9qgp-9wwc-v29r](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-9qgp-9wwc-v29r)

## Future support of PrestaShop 1.7

PrestaShop 1.7 has entered Extended Support mode since the [release of PrestaShop 8.0](https://github.com/PrestaShop/PrestaShop/releases/tag/8.0.0), in October 2022. This means that no further development will be done on 1.7, except for critical security fixes.
The extended support for PrestaShop 1.7 will continue until PrestaShop 9.0 is released, estimated by end of 2023.

## Acknowledgments

Contributors to this patch version, from both the Core team and the community at large:

[atomiix](https://github.com/atomiix), [Maxime Flasquin](https://github.com/mflasquin), [panariga](https://github.com/panariga), [NeOMakinG](https://github.com/NeOMakinG), [Sefirosweb](https://github.com/sefirosweb), [Julius Žukauskas](https://github.com/zuk3975), [lartist](https://github.com/lartist), [Mathieu Ferment](https://github.com/matks), [MeKeyCool](https://github.com/MeKeyCool), [leemyongpakvn](https://github.com/leemyongpakvn), [Jonathan Lelievre](https://github.com/jolelievre), [Thomas Roux](https://github.com/okom3pom), [Pablo Borowicz](https://github.com/eternoendless), [Sébastien ALFAIATE](https://github.com/Seb33300), [Jonathan Danse](https://github.com/PrestaEdit), [Bertrand Merlier](https://github.com/Rizzen59), [Progi1984](https://github.com/Progi1984), [Nesrine Abdmouleh](https://github.com/nesrineabdmouleh), [idnovate](https://github.com/idnovate)

Thank you!

[Download PrestaShop 1.7.8.8 now!](https://github.com/PrestaShop/PrestaShop/releases/tag/1.7.8.8)

Since version 1.7.8.8 is a “patch” update to version 1.7.8.7, upgrading from any 1.7.8.x version will be easy: features will work better, modules and themes which worked fine on 1.7.8.7, will work just as well with 1.7.8.8. Upgrades from a standard 1.7.8.x version should work just as well.
