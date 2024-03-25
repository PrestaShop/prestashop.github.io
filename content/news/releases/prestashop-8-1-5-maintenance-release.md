---
layout: post
title:  PrestaShop 8.1.5 Is Available
subtitle: New patch for branch 8.1.x is available
date: 2024-03-19 09:00:00
authors: [ PrestaShop ]
image: /assets/images/2024/03/banner_8.1.5_1200x627.jpg
opengraph_image: /assets/images/2024/03/banner_8.1.5_1200x627.jpg
twitter_image: /assets/images/2024/03/banner_8.1.5_1024x512.jpg
icon: icon-leaf
tags:
- version
- patch
- releases
- "8.1"
- "8.1.x"
---

Another patch for PrestaShop 8.1 is available. This release contains interesting improvements as well as a number of bug fixes. In this article, we’ll lean into them because there’s plenty to write about!

![8.1.5 is available!](/assets/images/2024/03/banner_8.1.5_1534x424.jpg)

PrestaShop 8.1.5 is available. This release fixes some bugs but also brings a lot of improvements. 

It is recommended to upgrade your shop quickly in order to benefit from these fixes. Of course, don’t forget to backup before. Upgrade is possible using the latest version of the [1-Click Upgrade module](https://github.com/PrestaShop/autoupgrade/releases/).

You can go to the [release page](https://github.com/PrestaShop/PrestaShop/releases/tag/8.1.5) to see a full changelog, but now let's dive into the details of this release.

## Bug fixes

Let's focus on some notable bug fixes that have been implemented in this version.

### Improvements to discounts marked as "highlight"

Thanks to [@Hlavtox](https://github.com/Hlavtox), version 8.1.5 adds quite a few improvements to discounts, added with the "highlight" option. The previous implementation of this feature could cause unwanted discounts to appear in the available discounts in the user's account. The [pull request that includes the fix](https://github.com/PrestaShop/PrestaShop/pull/35464), clearly explains the scenario and also the when, where, how discounts will display depending on this setting.

### Fixes to deletion of customer's addresses

Error "No carriers available". Does it ring a bell? This error was caused by a bug in the deletion of a customer's address. It has been fixed in [pull request #35017](https://github.com/PrestaShop/PrestaShop/pull/35017) from [@Hlavtox](https://github.com/Hlavtox).

### Major bug fixes for the "Pack" products

The "Pack" products feature has been improved in this version. There was a serious bug that caused the "Pack" products to not work correctly if they were set to "Decrement products in pack only". This has been fixed in [pull request #35372](https://github.com/PrestaShop/PrestaShop/pull/35372) from [@Codencode](https://github.com/Codencode) and [@Hlavtox](https://github.com/Hlavtox). After constructing a test scenario, they were able to identify the issue and fix it. Thank you to both of them for their hard work!

### Better cart rules validation

[@Hlavtox](https://github.com/Hlavtox) took the first step to improve the validation of cart rules. The [pull request #35166](https://github.com/PrestaShop/PrestaShop/pull/35166) introduced an extra check for cart rules that don't meet the conditions. This will prevent the cart rules from being applied when they shouldn't be. This doesn't fix all the issues with cart rules, but it's a step in the right direction.

### Fix for multi-lang boolean fields in ObjectModel

Recently introduced changes to `EntityMapper` turned out to be non-backward compatible, and caused a bug in the handling of multi-lang boolean fields in `ObjectModel`. This has been fixed in [pull request #34873](https://github.com/PrestaShop/PrestaShop/pull/34873). Thank you, [@gross-nvs](https://github.com/gross-nvs).

### Product CSV import wiping out category associations

This was a serious bug that caused the category associations to be wiped out when importing products via CSV. This has been fixed in [pull request #34857](https://github.com/PrestaShop/PrestaShop/pull/34857). Thank you, [@tswfi](https://github.com/tswfi).

### Other bug fixes

You can see the rest of pull requests with bug fixes on [Github](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+is%3Amerged+milestone%3A8.1.5+label%3A%22Bug+fix%22).

## Improvements

See some of the most notable improvements that have been implemented in this version.

### Set most used tax rule group to new products automatically

Thanks to [@Hlavtox](https://github.com/Hlavtox), the tax rule group is now automatically set to the most used tax rule group when adding a new product. This is a small improvement, but it can save a lot of time for merchants who are adding a lot of products. You can see the [pull request #35495](https://github.com/PrestaShop/PrestaShop/pull/35495) for more details.

### Do not autofill passwords for SMTP configuration

[@ShaiMagal](https://github.com/ShaiMagal) has made a small but important improvement to the back office. The password field for the e-mail SMTP configuration is no longer autofilled. This is a small change, but can prevent mistakes and improve security. You can check the [pull request #35058](https://github.com/PrestaShop/PrestaShop/pull/35058) to see the details.

### Improved cart view page in back office

Last but not least, the cart view page in the back office has been improved. Thanks to [@Hlavtox](https://github.com/PrestaShop/PrestaShop/pull/34682), we have a few changes. His pull request:

* Introduced a shareable link for carts pending order placement.
* Incorporated display of cart creation date on the cart page.
* Integrated display of last update date for the cart on the cart page.
* Enhanced the visual appeal and functionality of buttons on the cart page.

You can see the details and before/after screenshots in the [pull request #34682](https://github.com/PrestaShop/PrestaShop/pull/34682).

Thank you [@Hlavtox](https://github.com) for your hard work on release 8.1.5!

## Acknowledgments

Contributors to this patch version, from project members and individual community contributors, include:

Benoît Gross, Boris Hermans, Boubker Bribri, Codencode, Daniel Hlavacek, Danilo Carta, Dariusz Tryba, Dominik Shaim Ulrich, Fabien Papet, Franck Lefèvre, Hherreros, Jean-François Viguier, Jonathan Danse, Jonathan Lelievre, Krystian Podemski, Mathieu Ferment, Matthieu Rolland, Maxime Flasquin, Nesrine Abdmouleh, Nicolas Lœuillet, Tatu Wikman

Thank you!

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/8.1.5" >}}Download PrestaShop 8.1.5 now!{{< /cta >}}

Since version 8.1.5 is a "patch" update, upgrading from previous 8.1.x versions should happen without any issues. As for every upgrade, it's highly recommended to do a full manual backup beforehand.

If you encounter any problems during the upgrade that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).
