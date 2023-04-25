---
layout: post
title:  PrestaShop 8.0.4 is available
subtitle: New patch version of the 8.0.x branch is available
date: 2023-04-25 17:00:00
authors: [ PrestaShop ]
image: /assets/images/2023/04/banner_804_1200_627.png
opengraph_image: /assets/images/2023/04/banner_804_1200_627.png
twitter_image: /assets/images/2023/04/banner_804_1024_512.png
icon: icon-leaf
tags:
- version
- patch
- releases
- "8.0"
- "8.0.x"
---

The fourth patch version for PrestaShop 8 is now available to download! This release contains a few security fixes, so we recommend you to upgrade your shop as soon as possible.

![8.0.4 is available!](/assets/images/2023/04/banner_804_1534_424.png)

PrestaShop 8.0.4 is now available. This time there are three security fixes thanks to reports from community researchers. This release also contains a few bug fixes besides security fixes. The incorrect translation of pagination labels in products and combinations lists has been fixed. The error when adding or updating the Breton language no longer appears. There is also a fix for updating product settings with combinations if stock management is disabled.

Additionally, this version fixes a web service error while adding new products. It also resolves errors related to the Link Widget module, specifically when changing the shop context and on the 'Design > link widget' page.

It is recommended to upgrade your shop quickly in order to benefit from these fixes. Of course, don’t forget to backup before. You can upgrade to the latest version using the 1-Click Upgrade [v4.15.0](https://github.com/PrestaShop/autoupgrade/releases/tag/v4.15.0).

---

## Issues involved in the 8.0.4 patch release

- [Back office: the translation of the pagination label in products list and combinations list is not correct](https://github.com/PrestaShop/PrestaShop/issues/32053)
- [Back office: translations - 2 exceptions displayed when trying to add/update language Breton](https://github.com/PrestaShop/PrestaShop/issues/31384)
- [Back office: unable to update settings for products with combinations with stock management disabled](https://github.com/PrestaShop/PrestaShop/issues/30179)
- [Webservice error when adding new product](https://github.com/PrestaShop/PrestaShop/issues/29315)
- [Link widget module: error when changing shop context](https://github.com/PrestaShop/PrestaShop/issues/29005)
- [Link widget module: error in 'Design > link widget' page](https://github.com/PrestaShop/PrestaShop/issues/32052)
- [Update PHP and JavaScript dependencies for 8.0.4](https://github.com/PrestaShop/PrestaShop/issues/32031)

You can go to the [release page](https://github.com/PrestaShop/PrestaShop/releases/tag/8.0.4) to see a full changelog.

## Acknowledgments

Contributors to this patch version, from both the project members and the community at large:

Antonin Clauzier, bibips, Boris Hermans, Jonathan Lelievre, Ibrahima Sow, Matthieu Rolland, Maxime Flasquin, Prestaworks

Thank you!

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/8.0.4" >}}Download PrestaShop 8.0.4 now!{{< /cta >}}

Since version 8.0.4 is a "patch" update, upgrading from version 8.0.0 should happen without any issues.

Features will work better, and modules and themes, which worked fine on previous 8.0 release, will work just as well with 8.0.3. As for every upgrade, it's highly recommended to do a full manual backup beforehand.

If you encounter any problems during the upgrade that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).
