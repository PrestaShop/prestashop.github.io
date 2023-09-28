---
layout: post
title:  PrestaShop 8.1.2 is available
subtitle: Second patch for branch 8.1.x is available
date: 2023-09-28 10:00:00
authors: [ PrestaShop ]
image: /assets/images/2023/09/ps812_1200x627.png
opengraph_image: /assets/images/2023/09/ps812_1200x627.png
twitter_image: /assets/images/2023/09/ps812_1024x512.png
icon: icon-leaf
tags:
- version
- patch
- releases
- "8.1"
- "8.1.x"
---

The second patch for PrestaShop 8.1 is available! This release contains 2 security fixes, over 30 bugs have been fixed and some minor improvements have been integrated.

![8.1.2 is available!](/assets/images/2023/09/ps812_1534x424.png)

Version 8.1.2 fixes a few security issues found by security researchers and solves [a great number of bugs](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+is%3Amerged+milestone%3A8.1.2+label%3A%22Bug+fix%22+-label%3A%22E2E+Tests%22+) reported by the community and project's Quality Assurance team. It also includes some minor improvements, especially for the new product page and new multi-format image generation system.

You can go to the [release page](https://github.com/PrestaShop/PrestaShop/releases/tag/8.1.2) to see a full changelog, but it's worth mentioning a few notable bug fixes and improvements:
- [Ensure consistent error message for items in cart with higher than available quantity. Perform availability check after every update.](https://github.com/PrestaShop/PrestaShop/pull/33978)
- [When duplicating a product, a notification is now added to the modal to inform the user that they need to edit the friendly URL of the product.](https://github.com/PrestaShop/PrestaShop/pull/33394)
- [Automatically update friendly URLs and configure offline shop in new product page.](https://github.com/PrestaShop/PrestaShop/pull/33778)
- [Reordering products in categories has been improved. The current behavior is now more intuitive thanks to the improved interface.](https://github.com/PrestaShop/PrestaShop/pull/33380)
- [The new product page interface has been greatly improved with a lot of small fixes and improvements. ](https://github.com/PrestaShop/PrestaShop/pull/33567)
- [The interface for legacy translations produced errors on PHP 8.1, this now is fixed.](https://github.com/PrestaShop/PrestaShop/pull/33660)
- [Performance optimization for the new multi-format image generation system has been implemented.](https://github.com/PrestaShop/PrestaShop/pull/33407) 

It is recommended to upgrade your shop quickly in order to benefit from these fixes. Of course, don’t forget to backup before. You can upgrade to the latest version using the [1-Click Upgrade module](https://github.com/PrestaShop/autoupgrade/releases/).

---

## Contribution overview

This patch benefits greatly from the combined efforts of our community and internal PrestaShop team. A notable mention goes to [@Hlavtox](https://github.com/Hlavtox), who alone contributed 32 PRs, making up 50% of all merged Pull Requests. While the core work is largely driven by the PrestaShop team, contributions like those from Hlavtox are invaluable in enhancing the project. A big thank you to [@Hlavtox](https://github.com/Hlavtox) and to everyone else who made this patch version that good!


| Author     | Company         | PRs       | Percentage |
|------------|-----------------|-----------|------------|
| Hlavtox    | [Daniel Hlavacek](https://danielhlavacek.cz/en)       | 32 PRs    | 50.00%     |
| jolelievre | [PrestaShop SA](https://prestashop.com)      | 7 PRs     | 10.94%     |
| Progi1984  | [PrestaShop SA](https://prestashop.com)      | 6 PRs     | 9.38%      |
| nicosomb   | [PrestaShop SA](https://prestashop.com)      | 4 PRs     | 6.25%      |
| M0rgan01   | [PrestaShop SA](https://prestashop.com)      | 3 PRs     | 4.69%      |
| tleon      | [PrestaShop SA](https://prestashop.com)      | 3 PRs     | 4.69%      |
| matks      | [PrestaShop SA](https://prestashop.com)      | 3 PRs     | 4.69%      |
| boherm     | [PrestaShop SA](https://prestashop.com)      | 2 PRs     | 3.13%      |
| boubkerbribri | [PrestaShop SA](https://prestashop.com)  | 2 PRs     | 3.13%      |
| sowbiba    | [PrestaShop SA](https://prestashop.com)      | 2 PRs     | 3.13%      |

## Security advisories

Two security issues have been fixed in this release. Both required back office access to be exploited.

- [Uninstall modules from backoffice, even with low rights](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-6jmf-2pfc-q9m7)
- [Employee without any access rights can list all installed modules](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-gvrg-62jp-rf7j)

## Acknowledgments

Contributors to this patch version, from both the project members and the community at large, include:

Amazzing, Benoît Gross, Boris Hermans, Boubker Bribri, Daniel Hlavacek, Fabien Papet, Franck Lefèvre, Ibrahima Sow, idnovate, Jonathan Lelievre, Krystian Podemski, Mathieu Ferment, Matthieu Rolland, Maxime Flasquin, maxime-profileo, Morgan Pichat, Nesrine Abdmouleh, Nicolas Lœuillet, Pablo Borowicz, PrestonBot, Sharak, Thomas Leone, Tofandel

Thank you!

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/8.1.2" >}}Download PrestaShop 8.1.2 now!{{< /cta >}}

Since version 8.1.2 is a "patch" update, upgrading from previous 8.1.x versions should happen without any issues. As for every upgrade, it's highly recommended to do a full manual backup beforehand.

If you encounter any problems during the upgrade that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).
