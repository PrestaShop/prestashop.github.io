---
layout: post
title:  PrestaShop 8.2.1 is available
subtitle: The first patch for branch 8.2.x is available
date: 2025-02-21
authors: [ PrestaShop ]
image: /assets/images/2025/02/banner_8.2.1_1200x627.jpg
opengraph_image: /assets/images/2025/02/banner_8.2.1_1200x627.jpg
twitter_image: /assets/images/2025/02/banner_8.2.1_1024x512.jpg
icon: icon-leaf
tags:
- version
- patch
- releases
- "8.2"
- "8.2.x"
---

The first patch for PrestaShop 8.2 is available. This release contains many bug fixes and improvements, including a new way to handle module filtering in the front office.

![PrestaShop 8.2.1 is available!](/assets/images/2025/02/banner_8.2.1_1200x627.jpg)

<hr>

We are excited to announce the release of PrestaShop 8.2.1, a new patch that not only addresses [a significant number of bugs](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+is%3Amerged+milestone%3A8.2.1+label%3A%22Bug+fix%22+-label%3A%22E2E+Tests%22+) reported by our dedicated community and Quality Assurance team but also introduces a valuable new feature. This feature allows module developers to filter the display of other modules in PrestaShop, helping them avoid the use of overrides.

By reducing the reliance on overrides, this enhancement improves the overall stability and compatibility of the platform. We believe these improvements will contribute to a better and more efficient PrestaShop experience for everyone.

<hr>

## What's new in PrestaShop 8.2.1?

**Filtering of the modules in the front office**

The method `Hook::getHookModuleExecList` [is now customizable by module developers](https://github.com/PrestaShop/PrestaShop/pull/37125). This method, which filters the list of modules executed for a given hook, normally filters based on the hook's name. With the new update, developers can customize this filtering process using other criteria. This addition is particularly beneficial for module developers aiming to minimize the use of overrides, especially for modules that filter the list of executed modules for specific hooks (e.g., solutions for handling Consent Mode and privacy solutions).

Typically, we do not introduce such new features in patch versions, as they are primarily intended for bug fixes and minor improvements. However, the significance of this new feature has led us to make an exception.

You can find more information about this new feature in the [pull request](https://github.com/PrestaShop/PrestaShop/pull/37125/), and download the example module from the [PrestaShop Example Modules GitHub repository](https://github.com/PrestaShop/example-modules/demofiltermodules). We believe that including this feature in the patch version will help module developers enhance their modules and ensure better compatibility with future PrestaShop versions by reducing the reliance on overrides.

PS: it is worth mentioning that it is possible to filter the back office modules as well. The use case is not as common as for the front office, but it is possible.

**Better way to handle errors when installing a module**

In [this pull request](https://github.com/PrestaShop/PrestaShop/pull/36612/), we improved the way we handle errors when installing a module. Previously, it was not possible to prevent the installation of a module even if certain essential criteria were not met in the `actionModuleInstallBefore` hook, which could lead to issues with, for example, required modules.

**More options in the pagination**

Simple yet useful, the pagination in the back office [now includes](https://github.com/PrestaShop/PrestaShop/pull/37373) a new option to display 300 and 1000 items per page. This option is available in the pagination dropdown in the back office.

## Bug fixes

Fixing bugs is a crucial part of maintaining a stable and secure platform. PrestaShop 8.2.1 includes a significant number of bug fixes that address various issues reported by the community and the project's Quality Assurance team.

You can go to the [release page](https://github.com/PrestaShop/PrestaShop/releases/tag/8.2.1) to see a full changelog, but it's also worth mentioning a few notable bug fixes:

- [An issue with setting product redirection from the back office has been resolved](https://github.com/PrestaShop/PrestaShop/pull/36505)
- [An error "Trying to access array offset on value of type null Product.php" has been addressed](https://github.com/PrestaShop/PrestaShop/pull/36807)
- [An issue where searching for a product by ID in the back office search bar incorrectly downloads a CSV file instead of redirecting to the product page has been corrected](https://github.com/PrestaShop/PrestaShop/pull/37869)
- [An issue with the "Add to cart" being available even with the products with no price displayed has been fixed](https://github.com/PrestaShop/PrestaShop/pull/37533)

You can see the full list of fixed issues in the [8.2.1 milestone](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+is%3Amerged+milestone%3A8.2.1+label%3A%22Bug+fix%22+-label%3A%22Improvement%22).

We are grateful to the community for their vigilance in reporting issues and their contributions to fixing them. Many of these issues were reported multiple times, highlighting their importance. We want to thank everyone who reported these issues and to those who contributed fixes. Your efforts help make PrestaShop better for everyone.

## Upgrade to PrestaShop 8.2.1

We highly recommend upgrading your shop to PrestaShop 8.2.1 as soon as possible to take advantage of the numerous bug fixes and improvements included in this release. Before proceeding with the upgrade, ensure that you perform a complete backup of your shop to prevent any data loss. You can easily upgrade to the latest version using the [1-Click Upgrade module](https://github.com/PrestaShop/autoupgrade/releases/), which simplifies the process and helps you keep your shop up-to-date with minimal effort.

If you encounter any problems during the upgrade that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).

## Download

Don't wait any longer and download PrestaShop 8.2.1 now!

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/8.2.1" >}}Download PrestaShop 8.2.1 now!{{< /cta >}}

## Acknowledgments

Contributors to this patch version, from both the project members and the community at large, include:

Boris Hermans, Codencode, Daniel Hlavacek, Dominik Shaim Ulrich, Franck Lefèvre, idnovate, JohnPAfr, Jonathan Lelievre, Julien Gissinger, Krystian Podemski, Marco Salvatore, Mathieu Ferment, Matthias Goudjil, Matthieu Rolland, Morgan Pichat, mrkalchemy, Nicolas Lœuillet, Pawel Szostok, r.fabiani, Romain PIOT, Romain Soulard, Tatu Wikman, Touxten

Thank you!
