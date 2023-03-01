---
layout: post
title:  PrestaShop 8.0.2 is available
subtitle: Second maintenance version of the 8.0.x branch is available
date: 2023-02-28
authors: [ PrestaShop ]
image: /assets/images/2023/02/banner_8.0.2_1200x627.png
opengraph_image: /assets/images/2023/02/banner_8.0.2_1200x627.png
twitter_image: /assets/images/2023/02/banner_8.0.2_1024x512.png
icon: icon-leaf
tags:
- version
- patch
- releases
- "8.0"
- "8.0.x"
---

The second patch version for PrestaShop 8 is now available to download!

![8.0.2 is available!](/assets/images/2023/02/banner_8.0.2_1534x424.png)

Version 8.0.2 is available! In this patch, you can find almost [20 bug fixes](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+is%3Amerged+milestone%3A8.0.2+label%3A%22Bug+fix%22+). As a patch version, 8.0.2 brings further goodness and stability to the 8.0 branch.

There were several noteworthy issues addressed in the milestone 8.0.2 of PrestaShop. The upgrade mechanism had a problem where it couldn't check if the PHP session had started on some webservers, which was reported by many community members. Additionally, significant problems with web services were resolved, including the inability to create new customers. Another noteworthy fix was made for enabling themes that use Symfony routes for their modules, which was reported by a community member. Finally, there were several under-the-hood fixes and a new version of [Distribution API client](https://github.com/PrestaShop/ps_distributionapiclient/releases/tag/v1.0.3) released to enhance the module upgrade process.

It is recommended to upgrade your shop quickly in order to benefit from these fixes. Of course, don’t forget to backup before. You can upgrade to the latest version using 1-Click Upgrade [v4.15.0](https://github.com/PrestaShop/autoupgrade/releases/tag/v4.15.0).

---

## Issues involved in the milestone 8.0.2

### Modules

- [It was impossible to upgrade **ps_distributionapiclient** module](https://github.com/PrestaShop/PrestaShop/issues/31098)
- [Module descriptions are tagged as untranslated fields by the Symfony debugger](https://github.com/PrestaShop/PrestaShop/issues/27351)
- [The translatable input field of the module was filled with the default language instead of being empty](https://github.com/PrestaShop/PrestaShop/issues/30085)

### Back office

- [Fixed the conversion from 3-char hex-color to 6-char hex color](https://github.com/PrestaShop/PrestaShop/issues/31002)
- [Customer::getSimpleAddressSql() didn't retrieve the right data. As result will be selected all the customer addresses, but not the one filtered by id_address](https://github.com/PrestaShop/PrestaShop/issues/30833)
- [Merchant couldn’t access to the module for an employee without setting all permissions enabled](https://github.com/PrestaShop/PrestaShop/issues/30788)
- [An exception was displayed in all migrated page after deleting language used by the employee](https://github.com/PrestaShop/PrestaShop/issues/30091)
- [Enabling new theme was failing due to routes caching](https://github.com/PrestaShop/PrestaShop/issues/30011)
- [The popup for data import was not well escape](https://github.com/PrestaShop/PrestaShop/issues/29959)
- [HTML tags are not taken into accoung in some pages](https://github.com/PrestaShop/PrestaShop/issues/29940)
- [An exception was thrown when import a file with non .csv extension and download the csv created file](https://github.com/PrestaShop/PrestaShop/issues/28761)
- [The alternative currency symbol is not displayed in the product V2 & V1](https://github.com/PrestaShop/PrestaShop/issues/28430)

### Front office

- [Guests were detected as a logged-in user](https://github.com/PrestaShop/PrestaShop/issues/30991)
- [It was impossible to add a first address with error "Invalid postcode" in some circumstances](https://github.com/PrestaShop/PrestaShop/issues/30973)

### Webservices

- [The category was not well-formed from the Webservices](https://github.com/PrestaShop/PrestaShop/issues/30987)
- [Webservice was not working properly on PrestaShop 8.0 with PHP 8.1](https://github.com/PrestaShop/PrestaShop/issues/30165)
- [It was not possible to create new customers with the webservices](https://github.com/PrestaShop/PrestaShop/issues/26568)

### Translations

- [Translation string for "new" in BO was not working](https://github.com/PrestaShop/PrestaShop/issues/30916)

### Upgrade mechanism

- [With the 1-Click Upgrade module v4.15.0, It was not possible to create a PHP session and no new version was available](https://github.com/PrestaShop/PrestaShop/issues/30658)

### Other

- [There was a bad PHP float comparison in Tools](https://github.com/PrestaShop/PrestaShop/issues/29652)

## Acknowledgments

Contributors to this patch version, from both the project members and the community at large:

Alexandre Hellin, Boubker Bribri, Daniel Hlavacek, Ibrahima Sow, Krystian Podemski, Lea Delin, Mathieu Ferment, Matthieu Rolland, Maxime Flasquin, Nesrine Abdmouleh, Nicolas Lœuillet, Thomas Baccelli

Thank you!

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/8.0.2" >}}Download PrestaShop 8.0.2 now!{{< /cta >}}

Since version 8.0.2 is a "patch" update, upgrading from version 8.0.0 should happen without any issues.

Features will work better, and modules and themes, which worked fine on previous 8.0 release, will work just as well with 8.0.2. As for every upgrade, it's highly recommended to do a full manual backup beforehand.

If you encounter any problems during the upgrade that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).
