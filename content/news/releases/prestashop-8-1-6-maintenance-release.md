---
layout: post
title:  PrestaShop 8.1.6 Is Available
subtitle: Security patch for version 8.1 of PrestaShop
date: 2024-05-15
authors: [ PrestaShop ]
#image: /assets/images/2024/05/banner_8.1.6_1200x627.png
#opengraph_image: /assets/images/2024/05/banner_8.1.6_1200x627.png
#twitter_image: /assets/images/2024/05/banner_8.1.6_1024x512.png
icon: icon-leaf
tags:
- version
- patch
- releases
- "8.1"
- "8.1.x"
- "security"
---

A new patch version for PrestaShop 8.1 is now available. This maintenance release fixes 2 security issues.

<!-- ![8.1.6 is available!](/assets/images/2024/05/banner_8.1.6_1534x424.png) -->

The security patch for version 8.1 of PrestaShop is now available. It is recommended that you upgrade your shop quickly in order to benefit from these fixes. Of course, don’t forget to create a backup before. You can upgrade to the latest version using the [1-Click Upgrade module](https://github.com/PrestaShop/autoupgrade/releases/). There are no database changes in this release.

You can see a full changelog on the [release page](https://github.com/PrestaShop/PrestaShop/releases/tag/8.1.6).

## Security fixes

Two security issues were fixed in this release. If you want to learn more about the details of these issues you can visit the PrestaShop Security Advisories pages:

- [XSS via customer contact form in FO, through file upload](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-45vm-3j38-7p78) - thank you to Ayoub Ait Elmokhtar for the report
- [Anonymous customer can download other customers' invoices](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-7pjr-2rgh-fc5g) - thank you to Samuel Bodevin for the report.

## Download

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/8.1.6" >}}Download PrestaShop 8.1.6 now!{{< /cta >}}

Since version 8.1.6 is a "patch" update, upgrading from previous 8.1.x versions should happen without any issues. As for every upgrade, it's highly recommended to do a full manual backup beforehand.

If you encounter any problems during the upgrade that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).
