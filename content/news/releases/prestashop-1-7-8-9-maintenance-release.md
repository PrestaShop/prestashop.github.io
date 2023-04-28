---
layout: post
title:  PrestaShop 1.7.8.9 is available
subtitle: Security release for PrestaShop 1.7.8
date: 2023-04-25 16:20:00
authors: [ PrestaShop ]
image: /assets/images/2023/04/banner_1789_1200_627.jpeg
opengraph_image: /assets/images/2023/04/banner_1789_1200_627.jpeg
twitter_image: /assets/images/2023/04/banner_1789_1024_512.jpeg
icon: icon-leaf
tags:
- version
- patch
- releases
- 1.7.8.x
---

Security patch for PrestaShop 1.7 is now available.

![1.7.8.9 is available!](/assets/images/2023/04/banner_1789_1534_424.jpeg)

As part of the extended support policy for PrestaShop 1.7, which involves taking care of critical and security fixes for 1.7.8.x branch, we are releasing today a new patch for this version. This release fixes a few security issues reported by community researchers and upgrades some third-party libraries to their latest versions to ensure the stability and security of your shop.

It is recommended to upgrade your shop quickly in order to benefit from these fixes. Of course, don’t forget to backup before. You can upgrade to the latest version using the 1-Click Upgrade [v4.15.0](https://github.com/PrestaShop/autoupgrade/releases/tag/v4.15.0).

---

## Security advisories

- [Possible XSS injection through Validate::isCleanHTML method](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-fh7r-996q-gvcp)
- [Arbitrary file read](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-8r4m-5p6p-52rp)
- [SQL filter bypass leading to arbitrary write requests using "SQL Manager"](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-p379-cxqh-q822)

## Acknowledgments

Contributors to this patch version, from both the project members and the community at large:

Franck Lefèvre, Jonathan Lelievre, Mathieu Ferment, Matthieu Rolland, Maxime Flasquin

Thank you!

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/1.7.8.9" >}}Download PrestaShop 1.7.8.9 now!{{< /cta >}}

Since version 1.7.8.9 is a "patch" update, upgrading from version 1.7.8.8 should happen without any issues.

Features will work better, and modules and themes, which worked fine on previous 1.7.8 release, will work just as well with 1.7.8.9. As for every upgrade, it's highly recommended to do a full manual backup beforehand.

If you encounter any problems during the upgrade that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).
