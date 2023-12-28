---
layout: post
title:  PrestaShop 8.1.3 is available
subtitle: Third patch for branch 8.1.x is available
date: 2023-12-27 09:00:00
authors: [ PrestaShop ]
image: /assets/images/2024/01/banner_8.1.3_1200x627.jpg
opengraph_image: /assets/images/2024/01/banner_8.1.3_1200x627.jpg
twitter_image: /assets/images/2024/01/banner_8.1.3_1024x512.jpg
icon: icon-leaf
tags:
- version
- patch
- releases
- "8.1"
- "8.1.x"
- "security"
---

We are entering the new year with the new release of PrestaShop 8.1. The latest update for PrestaShop 8.1 is now available. This version brings with it two security updates, addresses close to 30 known issues, and introduces various enhancements.

![8.1.3 is available!](/assets/images/2024/01/banner_8.1.3_1534x424.jpg)

In order to enter the new year well, we are releasing a new version of PrestaShop! Version 8.1.3 is released with a slight delay, but this was due to the time it took to complete work on it. We didn't want to release the new version just before the Christmas/New Year period. The new version fixes [almost 30 reported bugs](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+is%3Amerged+milestone%3A8.1.3+label%3A%22Bug+fix%22+-label%3A%22E2E+Tests%22+) and also has security patches, while last but not least it also introduces a number of improvements, which we will write about in a moment.

It is recommended to upgrade your shop quickly in order to benefit from these fixes. Of course, don’t forget to backup before. You can upgrade to the latest version using the [1-Click Upgrade module](https://github.com/PrestaShop/autoupgrade/releases/).

You can go to the [release page](https://github.com/PrestaShop/PrestaShop/releases/tag/8.1.3) to see a full changelog, but it's worth mentioning a few notable bug fixes and improvements:

### Performance optimization for the new product page in back office

In the past few weeks, we have received quite a few reports that the new product edition page has a performance problem when using more product features. In version 8.1.3, [optimizations have been implemented](https://github.com/PrestaShop/PrestaShop/pull/34606) to improve the performance of the entire product features management interface.

Btw: In version 8.1.3 we also have an [other performance improvement](https://github.com/PrestaShop/PrestaShop/pull/34458) related to how products with combinations have been handled.

### Other improvements

Two minor improvements have been made to the back office user interface. The first one is on the new product page where ["Details" tab has been slightly upgraded with an improved design](https://github.com/PrestaShop/PrestaShop/pull/34738). The second improvement is related to the wording available in back office. We know how important it is to have a consistent and clear language in the back office, so we have [improved some of the wording](https://github.com/PrestaShop/PrestaShop/pull/34563) that is available on the "Product settings" tab.

Those two are not the only improvements that have been implemented in this version. You can find [the list of all improvements on Github](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+is%3Amerged+milestone%3A8.1.3+label%3AImprovement).

## Security fixes

Two security issues have been fixed in this release. One of them has been marked as a "High severity" issue, while the other one has been marked as a "Medium severity" issue.

- [XSS can be stored in DB from "add a message form" in order detail page (FO)](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-vr7m-r9vm-m4wf)
- [Some attribute not escaped in Validate::isCleanHTML method](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-xgpm-q3mq-46rq)

## Acknowledgments

Contributors to this patch version, from project members and individual community contributors, include:

Alexandre Bak, Benjamin, Boris Hermans, Boubker Bribri, Daniel Hlavacek, Dominik Shaim Ulrich, ecommerce-manager, Gabriel Tenita, Grégoire Bélorgey, Igor Stępień, Jonathan Lelievre, Krystian Podemski, Lunyyx, Mark, Mathieu Ferment, Matthieu Rolland, Maxime Flasquin, Morgan Pichat, Nesrine Abdmouleh, Nicolas Lœuillet, Peter Schaeffer, Robin Fischer, Thomas Leone

Thank you!

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/8.1.3" >}}Download PrestaShop 8.1.3 now!{{< /cta >}}

Since version 8.1.3 is a "patch" update, upgrading from previous 8.1.x versions should happen without any issues. As for every upgrade, it's highly recommended to do a full manual backup beforehand.

If you encounter any problems during the upgrade that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).
