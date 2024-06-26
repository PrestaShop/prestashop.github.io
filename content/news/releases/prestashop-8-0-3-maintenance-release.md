---
layout: post
title:  PrestaShop 8.0.3 is available
subtitle: Third maintenance version of the 8.0.x branch is available
date: 2023-04-03
authors: [ PrestaShop ]
image: /assets/images/2023/03/banner_8.0.3_1200x627.png
opengraph_image: /assets/images/2023/03/banner_8.0.3_1200x627.png
twitter_image: /assets/images/2023/03/banner_8.0.3_1024x512.png
icon: icon-leaf
tags:
- version
- patch
- releases
- "8.0"
- "8.0.x"
---

The third patch version for PrestaShop 8 is now available to download!

![8.0.3 is available!](/assets/images/2023/03/banner_8.0.3_1534x424.png)

It was a rather bumpy road at the end because of issues we found during the release process, but here it is! In the newest patch version for PrestaShop 8 you can find a [security improvement](https://github.com/PrestaShop/PrestaShop/pull/31647), and three fixes: one related to [inaccurate wording in web services configuration](https://github.com/PrestaShop/PrestaShop/pull/31772), one which [fixes the link to the user documentation in the installer](https://github.com/PrestaShop/PrestaShop/pull/31787), and one [significant fix which improves how clearing the cache behaves](https://github.com/PrestaShop/PrestaShop/pull/31820) in the software.

Apart from the things mentioned above, [from now](https://github.com/PrestaShop/PrestaShop/pull/31697), in the installer, you can find the "Privacy note" section explaining the potential telemetry included in modules installed in PrestaShop, with the link to the new ["data transparency"](https://www.prestashop-project.org/data-transparency/) page on the project's website. You can read [this announcement](https://github.com/PrestaShop/PrestaShop/discussions/31906) for more information.

It is recommended to upgrade your shop quickly in order to benefit from these fixes. Of course, don’t forget to backup before. You can upgrade to the latest version using the 1-Click Upgrade [v4.15.0](https://github.com/PrestaShop/autoupgrade/releases/tag/v4.15.0).

---

## Issues involved in the milestone 8.0.3

- [Autoupgrade - 8.0.1 to 8.0.3 break the FO](https://github.com/PrestaShop/PrestaShop/issues/31945)
- [The user is alerted during the installation of the module that data is being saved. The user can disable the tracker before installation.](https://github.com/PrestaShop/PrestaShop/issues/31625) And [#31627](https://github.com/PrestaShop/PrestaShop/issues/31627).
- [Study cache managment during modules installation](https://github.com/PrestaShop/PrestaShop/issues/31562)
- [The key's text helper in the Webservice page is confusing regarding the expected length](https://github.com/PrestaShop/PrestaShop/issues/31423)

You can go to the [release page](https://github.com/PrestaShop/PrestaShop/releases/tag/8.0.3) to see a full changelog.

## Acknowledgments

Contributors to this patch version, from both the project members and the community at large:

jolelievre, MathiasReker, boherm, matthieu-rolland, lartist, Progi1984

Thank you!

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/8.0.3" >}}Download PrestaShop 8.0.3 now!{{< /cta >}}

Since version 8.0.3 is a "patch" update, upgrading from version 8.0.0 should happen without any issues.

Features will work better, and modules and themes, which worked fine on previous 8.0 release, will work just as well with 8.0.3. As for every upgrade, it's highly recommended to do a full manual backup beforehand.

If you encounter any problems during the upgrade that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).
