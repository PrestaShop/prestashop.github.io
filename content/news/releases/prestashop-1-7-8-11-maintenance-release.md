---
layout: post
title:  PrestaShop 1.7.8.11 Is Available
subtitle: Security release for PrestaShop 1.7.8
date: 2024-01-02 08:00:00
authors: [ PrestaShop ]
# image: /assets/images/2023/07/17810_banner_1200_627.jpeg
# opengraph_image: /assets/images/2023/07/17810_banner_1200_627.jpeg
# twitter_image: /assets/images/2023/07/17810_banner_1024_512.jpeg
icon: icon-leaf
tags:
- security
- version
- patch
- releases
- "1.7.8.x"
---

A security patch for PrestaShop 1.7 is now available.

<!--![1.7.8.11 is available!](/assets/images/2023/07/17810_banner_1534_424.jpeg)-->

As part of the extended support policy for PrestaShop 1.7, which involves taking care of critical and security fixes for the 1.7.8.x branch, we are releasing today a new patch for this version. This release fixes one, high-serverity security issue found by security researchers.

For more details regarding security fixes, you can check the [security advisories](#security-advisories) section below.

It is recommended to upgrade your shop quickly in order to benefit from these fixes. Of course, don’t forget to backup before. You can upgrade to the latest version using the [1-Click Upgrade module](https://github.com/PrestaShop/autoupgrade/releases/).

---

## Security advisories
- [Some attribute not escaped in Validate::isCleanHTML method](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-xgpm-q3mq-46rq)

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/1.7.8.11" >}}Download PrestaShop 1.7.8.11 now!{{< /cta >}}

Since version 1.7.8.11 is a "patch" update, upgrading from version 1.7.8.10 should happen without any issues.

Features will work better, and modules and themes, which worked fine on previous 1.7.8 releases, will work just as well with 1.7.8.11. As for every upgrade, it's highly recommended to do a full manual backup beforehand.

If you encounter any problems during the upgrade that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).
