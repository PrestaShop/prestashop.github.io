---
layout: post
title:  PrestaShop 8.0.5 is available
subtitle: Security patch for 8.0.x branch is available
date: 2023-08-07
authors: [ PrestaShop ]
image: /assets/images/2023/07/805_banner_1200x627.png
opengraph_image: /assets/images/2023/07/805_banner_1200x627.png
twitter_image: /assets/images/2023/07/805_banner_1024x512.png
icon: icon-leaf
tags:
- security
- version
- patch
- releases
- "8.0"
- "8.0.x"
---

The fith patch version for PrestaShop 8 is now available to download! This release contains a few security fixes, so we highly recommend you to upgrade your shop as soon as possible.

![8.0.5 is available!](/assets/images/2023/07/805_banner_1534x424.png)

PrestaShop 8.0.x branch is [no longer supported since release of PrestaShop 8.1](https://www.prestashop-project.org/project-organization/release-cycle/), but due to the high severity of the security issues fixed in this release, we decided to release a patch version for this branch.

Apart from the security fixes, this release also contains [a few bug fixes](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+is%3Amerged+milestone%3A8.0.5+label%3A%22Bug+fix%22+-label%3A%22E2E+Tests%22). Most notable are:
- [Fix disabling a module for a specific shop applied to all shops](https://github.com/PrestaShop/PrestaShop/pull/31379)
- [Add string casting for boolean fields to avoid critical issues on PHP8+](https://github.com/PrestaShop/PrestaShop/pull/33048)

For more details regarding security fixes, you can check the [security advisories](#security-advisories) section below.

You can go to the [release page](https://github.com/PrestaShop/PrestaShop/releases/tag/8.0.5) to see a full changelog.

It is recommended to upgrade your shop quickly in order to benefit from these fixes. Of course, don’t forget to backup before. You can upgrade to the latest version using the [1-Click Upgrade module](https://github.com/PrestaShop/autoupgrade/releases/).

{{% notice type="warning" title="Information about vulnerabilities" icon="warning" %}}
<p>It's important to note that exploiting any fixed vulnerabilities requires valid authentication to access the back office.</p>
{{% /notice %}}

---

## Security advisories

- [SQL manager vulnerability (potential RCE)](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-gf46-prm4-56pc)
- [New possible XSS injection through Validate::isCleanHTML method](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-xw2r-f8xv-c8xp)

## Acknowledgments

Contributors to this patch version, from both the project members and the community at large:

Boubker Bribri, Codencode, Daniel Hlavacek, Fabien Papet, Franck Lefèvre, Jonathan Lelievre, Krystian Podemski, Mathieu Ferment, Matthieu Rolland, Maxime Flasquin, Nesrine Abdmouleh, Nicolas Lœuillet, PICHAT Morgan, Thomas Leone

Thank you!

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/8.0.5" >}}
Download PrestaShop 8.0.5 now!
{{< /cta >}}

Since version 8.0.5 is a "patch" update, upgrading from version 8.0.0 should happen without any issues As for every upgrade, it's highly recommended to do a full manual backup beforehand.

If you encounter any problems during the upgrade that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).
