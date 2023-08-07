---
layout: post
title:  PrestaShop 1.7.8.10 Is Available
subtitle: Security release for PrestaShop 1.7.8
date: 2023-08-07
authors: [ PrestaShop ]
image: /assets/images/2023/07/17810_banner_1200_627.jpeg
opengraph_image: /assets/images/2023/07/17810_banner_1200_627.jpeg
twitter_image: /assets/images/2023/07/17810_banner_1024_512.jpeg
icon: icon-leaf
tags:
- security
- version
- patch
- releases
- 1.7.8.x
---

A security patch for PrestaShop 1.7 is now available.

![1.7.8.10 is available!](/assets/images/2023/07/17810_banner_1534_424.jpeg)

As part of the extended support policy for PrestaShop 1.7, which involves taking care of critical and security fixes for the 1.7.8.x branch, we are releasing today a new patch for this version. This release fixes a few security issues found by security researchers.

For more details regarding security fixes, you can check the [security advisories](#security-advisories) section below.

It is recommended to upgrade your shop quickly in order to benefit from these fixes. Of course, don’t forget to backup before. You can upgrade to the latest version using the [1-Click Upgrade module](https://github.com/PrestaShop/autoupgrade/releases/).

---

## Security advisories
- [SQL manager vulnerability (potential RCE)](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-gf46-prm4-56pc)
- [New possible XSS injection through Validate::isCleanHTML method](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-xw2r-f8xv-c8xp)

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/1.7.8.10" >}}Download PrestaShop 1.7.8.10 now!{{< /cta >}}

Since version 1.7.8.10 is a "patch" update, upgrading from version 1.7.8.9 should happen without any issues.

Features will work better, and modules and themes, which worked fine on previous 1.7.8 releases, will work just as well with 1.7.8.10. As for every upgrade, it's highly recommended to do a full manual backup beforehand.

If you encounter any problems during the upgrade that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).
