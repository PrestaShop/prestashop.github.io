---
layout: post
title:  PrestaShop 8.1.7 Is Available
subtitle: New patch for branch 8.1.x is available
date: 2024-06-24 09:00:00
authors: [ PrestaShop ]
image: /assets/images/2024/06/banner_8.1.7_1200x627.jpg
opengraph_image: /assets/images/2024/06/banner_8.1.7_1200x627.jpg
twitter_image: /assets/images/2024/06/banner_8.1.7_1024x512.jpg
icon: icon-leaf
tags:
- version
- patch
- releases
- "8.1"
- "8.1.x"
---

A new patch for PrestaShop 8.1 is now available! This release includes several significant improvements and numerous bug fixes. In this article, we'll explore these updates in detail.

![8.1.7 is available!](/assets/images/2024/06/banner_8.1.7_1534x424.jpg)

PrestaShop 8.1.7 is now available. This release addresses several bugs and brings various improvements.

It is recommended to upgrade your shop quickly in order to benefit from these fixes. Of course, don’t forget to backup before. Upgrade is possible using the latest version of the [1-Click Upgrade module](https://github.com/PrestaShop/autoupgrade/releases/).

Let's dive into the details of this release.

### Notable changes in version 8.1.7

Check out some of the most notable improvements and bug fixes from this version.

**Bug fixes**

There are a few bug fixes in this version that are worth mentioning.

- [@Progi1984](https://github.com/Progi1984) backported a fix from [@unlocomqx](https://github.com/unlocomqx) to fix the issue with the quantity check when there are customized products in a cart. ([#36342](https://github.com/PrestaShop/PrestaShop/pull/36342)).
- [@Hlavtox](https://github.com/Hlavtox) fixed the issue where multiple carriers are used and a package does not have an assigned carrier. ([#36074](https://github.com/PrestaShop/PrestaShop/pull/36074)).
- [@rudolfkastl](https://github.com/rudolfkastl) fixed a problem with the credit slip creation. ([#35861](https://github.com/PrestaShop/PrestaShop/pull/35861)).

You can see the rest of pull requests with bug fixes on [Github](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+is%3Amerged+milestone%3A8.1.7+label%3A%22Bug+fix%22).

**Improvements**

In version 8.1.7, you will find several improvements. Some of the most notable ones are:

- Thanks to [@webeshop](https://github.com/PrestaShop/PrestaShop/pull/34823), when you duplicate a product, the product date is now correctly set to the current date. ([#34823](https://github.com/PrestaShop/PrestaShop/pull/34823))
- The export button is now available on the product page. Thank you, [@ChronoBrake](https://github.com/ChronoBrake). ([#35488](https://github.com/PrestaShop/PrestaShop/pull/35488)).
- [@mattgoud](https://github.com/mattgoud) has improved the product page responsiveness. ([#35775](https://github.com/PrestaShop/PrestaShop/pull/35775)).
- The wording related to managing pack products has been improved by [@Hlavtox](https://github.com/Hlavtox). ([#35434](https://github.com/PrestaShop/PrestaShop/pull/35434)).
- The field size for meta_title and meta_description has been corrected by [@M0rgan01](https://github.com/M0rgan01). ([#35564](https://github.com/PrestaShop/PrestaShop/pull/35564)).
- [@jolelievre](https://github.com/jolelievre) fixed miscellaneous bugs on the new product page related to combinations and features management. ([#36244](https://github.com/PrestaShop/PrestaShop/pull/36244)).

Improvements above should make your daily work with managing products easier and more efficient.

Apart from the ones mentioned above, there are other notable improvements in this version. One worth mentioning is the cart rules performance improvement. You can check for more details in the [pull request](https://github.com/PrestaShop/PrestaShop/pull/35962) by [@ShaiMagal](https://github.com/ShaiMagal). Also, to make life easier for developers, the `EntitySearchInput` component [is now available](https://github.com/PrestaShop/PrestaShop/pull/36306) in the `window.prestashop.component` thanks to [@thomasDelaporte](https://github.com/thomasDelaporte).

Make sure to check the [full list here](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+is%3Amerged+milestone%3A8.1.7+label%3ARefactoring%2CImprovement).

### PrestaShop 8.1.7 is now available for you

Fixes and improvements mentioned above are just a part of all changes in this release. You can find the full list of changes on the [release page](https://github.com/PrestaShop/PrestaShop/releases/tag/8.1.7), you can also check the [list of all merged pull requests](https://github.com/PrestaShop/PrestaShop/pulls?page=1&q=is%3Apr+is%3Amerged+milestone%3A8.1.7) in this release.

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/8.1.7" >}}Download PrestaShop 8.1.7 now!{{< /cta >}}

Since version 8.1.7 is a "patch" update, upgrading from previous 8.1.x versions should happen without any issues. As for every upgrade, it's highly recommended to do a full manual backup beforehand.

If you encounter any problems during the upgrade that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).

## Acknowledgments

Contributors to this patch version, from project members and individual community contributors, include:

Boris Hermans, ChronoBrake, CodeOlympus, ComonSoft, Daniel Hlavacek, Dominik Shaim Ulrich, Fabien Papet, Franck Lefèvre, George Filippakis, Jonathan Lelievre, Krystian Podemski, Marco Salvatore, Mathieu Ferment, Matthias Goudjil, Matthieu Rolland, Maxime Flasquin, Morgan Pichat, Nicolas Lœuillet, Philipp Vujic, Roman Kotyra, Rudolf Kastl, Tomasz Zając, theoalloin, Thomas Delaporte

Thank you! Your involvement in making PrestaShop better is invaluable.

Interested in helping with the project? Want to contribute to the PrestaShop project? Check out the [Get involved](https://www.prestashop-project.org/get-involved/) page.
