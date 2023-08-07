---
layout: post
title:  PrestaShop 8.1.1 is available
subtitle: First patch for branch 8.1.x is available
date: 2023-08-07
authors: [ PrestaShop ]
image: /assets/images/2023/07/811_banner_1200x627.png
opengraph_image: /assets/images/2023/07/811_banner_1200x627.png
twitter_image: /assets/images/2023/07/811_banner_1024x512.png
icon: icon-leaf
tags:
- security
- version
- patch
- releases
- "8.1"
- "8.1.x"
---

The first patch for PrestaShop 8.1 is available. This release contains a few security fixes, so we highly recommend you to upgrade your shop as soon as possible.

![8.1.1 is available!](/assets/images/2023/07/811_banner_1534x424.png)

Version 8.1.1 fixes a few security issues found by security researchers and solves [a great number of bugs](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+is%3Amerged+milestone%3A8.1.1+label%3A%22Bug+fix%22+-label%3A%22E2E+Tests%22+) reported by the community and project's Quality Assurance team.

You can go to the [release page](https://github.com/PrestaShop/PrestaShop/releases/tag/8.1.1) to see a full changelog, but it's worth mentioning a few notable bug fixes:

- [Check if product is active and orderable during checkout](https://github.com/PrestaShop/PrestaShop/pull/33156)
- [Fix for product editor not storing some fields in multi shop context](https://github.com/PrestaShop/PrestaShop/pull/33151)
- [Register commonly used deprecated modifiers to Smarty config to avoid warnings in back office](https://github.com/PrestaShop/PrestaShop/pull/33136)
- [Fix for child themes/multishop themes translations](https://github.com/PrestaShop/PrestaShop/pull/33133)
- [Fix for issue with PDF files being always in English if generated from back office](https://github.com/PrestaShop/PrestaShop/issues/32530)

Some of those issues were reported on multiple occasions, so we are happy to finally have them fixed. We would like to thank everyone who reported those issues and helped us to fix them.

For more details regarding security fixes, you can check the [security advisories](#security-advisories) section below.

It is recommended to upgrade your shop quickly in order to benefit from these fixes. Of course, don’t forget to backup before. You can upgrade to the latest version using the [1-Click Upgrade module](https://github.com/PrestaShop/autoupgrade/releases/).

---

## Security advisories

- [Boolean SQL injection possible in search product in BO](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-75p5-jwx4-qw9h)
- [In the back office, files can be compromised using path traversal by replaying the import file](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-m9r4-3fg7-pqm2)
- [SQL manager vulnerability (potential RCE)](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-gf46-prm4-56pc)
- [New possible XSS injection through Validate::isCleanHTML method](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-xw2r-f8xv-c8xp)
- [Reading a file through path traversal](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-hpf4-v7v2-95p2)
- [File deletion via attachment API](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-2rf5-3fw8-qm47)
- [File deletion via CustomerMessage](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-v4gr-v679-42p7)


## Acknowledgments

Contributors to this patch version, from both the project members and the community at large:

Antonin Clauzier, Boris Hermans, Boubker Bribri, Codencode, Daniel Hlavacek, Fabien Papet, Fatima Mazhit, Franck Lefèvre, Ibrahima Sow, Jens Wilke, jolelievre, Jonathan Lelievre, Krystian Podemski, Mathieu Ferment, Matthieu Rolland, Maxime Flasquin, Nesrine Abdmouleh, Nicolas Lœuillet, PICHAT Morgan, Thomas Leone

Thank you!

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/8.1.1" >}}Download PrestaShop 8.1.1 now!{{< /cta >}}

Since version 8.1.1 is a "patch" update, upgrading from previous 8.1.x versions should happen without any issues. As for every upgrade, it's highly recommended to do a full manual backup beforehand.

If you encounter any problems during the upgrade that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).
