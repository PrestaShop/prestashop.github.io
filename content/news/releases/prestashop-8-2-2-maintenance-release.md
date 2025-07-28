---
layout: post
title:  PrestaShop 8.2.2 is available
subtitle: The second patch for branch 8.2.x is available
date: 2025-07-28
authors: [ PrestaShop ]
image: /assets/images/2025/07/banner_8.2.2_1200x627.jpg
opengraph_image: /assets/images/2025/07/banner_8.2.2_1200x627.jpg
twitter_image: /assets/images/2025/07/banner_8.2.2_1024x512.jpg
icon: icon-leaf
tags:
- version
- patch
- releases
- "8.2"
- "8.2.x"
---

PrestaShop 8.2.2 is here! This latest patch version brings a range of updates, addressing reported issues and introducing enhancements to improve the platform for merchants and developers alike.

![PrestaShop 8.2.2 is available!](/assets/images/2025/07/banner_8.2.2_1200x627.jpg)

<hr>

We are happy to announce the release of PrestaShop 8.2.2, a patch version that not only resolves [numerous bugs](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+is%3Amerged+milestone%3A8.2.2+label%3A%22Bug+fix%22+-label%3A%22E2E+Tests%22+) reported by our dedicated community and Quality Assurance team but also introduces some improvements.

As part of the Call for Contributions challenge, PrestaShop 8.2.2 includes several new hooks contributed by the community. These hooks open up more possibilities for customization and integration. You can explore the list of newly added hooks [here](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+is%3Amerged+milestone%3A8.2.2+label%3A%22Hook+contribution%22+-label%3A%22E2E+Tests%22+), we also briefly describe them below.

<hr>

## What's new in PrestaShop 8.2.2?

This release includes a variety of improvements and bug fixes across different areas of PrestaShop, including the back office, front office, core, installer, and web services. Here are some highlights:

### Back Office

**New Features**

- A new hook `actionProductGetAttributesGroupsAfter` has been added, enabling developers to manipulate attribute groups after product data is fetched. [Learn more](https://github.com/PrestaShop/PrestaShop/pull/38408).
- Two new hooks, `actionOrderHasBeenShipped` and `actionOrderHasBeenDelivered`, have been introduced to enhance order tracking capabilities. [Details here](https://github.com/PrestaShop/PrestaShop/pull/39162).

**Improvements**

- The HelperCard now uses v8 documentation for better alignment with the current version. [More info](https://github.com/PrestaShop/PrestaShop/pull/38717).
- Improved regex in `StringModifier` for better string handling. [See changes](https://github.com/PrestaShop/PrestaShop/pull/38634).
- Autofill of passwords has been disabled when editing customer details in the back office. [Read more](https://github.com/PrestaShop/PrestaShop/pull/38773).
- Mail template directories are now checked before reading, preventing errors. [Details](https://github.com/PrestaShop/PrestaShop/pull/38073).
- Improved tax rule selection query for better performance. [See changes](https://github.com/PrestaShop/PrestaShop/pull/38251).

**Bug Fixes**

- Support added for brands named as numbers. [Fix details](https://github.com/PrestaShop/PrestaShop/pull/38810).
- Corrected misleading maximum attachment upload size in advanced settings. [Learn more](https://github.com/PrestaShop/PrestaShop/pull/38549).
- Resolved error related to displaying the product price in back office in some scenarios. [See fix](https://github.com/PrestaShop/PrestaShop/pull/37933).
- Fixed the configuration for maximum file size in the product form. [Details](https://github.com/PrestaShop/PrestaShop/pull/38982).
- Addressed issues with translations saving process in the back office. [More info](https://github.com/PrestaShop/PrestaShop/pull/38593).
- Resolved errors with CMS page creation in multistore setups. [Fix details](https://github.com/PrestaShop/PrestaShop/pull/38532).
- Corrected password policy to align with bcrypt limitations. [Learn more](https://github.com/PrestaShop/PrestaShop/pull/38337).
- Fixed refund functionality for orders linked to deleted customers. [Details](https://github.com/PrestaShop/PrestaShop/pull/38581).

### Front Office

**New Features**

- Added `displayCartExtraProductInfo` hook to display additional product information in the cart. [Learn more](https://github.com/PrestaShop/PrestaShop/pull/38691).
- Introduced `actionCartDuplicate` hook for duplicating cart actions. [Details here](https://github.com/PrestaShop/PrestaShop/pull/38371).
- New hook `actionPaymentModuleProductVarTplAfter` added for payment module customization. [More info](https://github.com/PrestaShop/PrestaShop/pull/38480).

**Bug Fixes**

- Modules returning empty payment options are now filtered out. [Fix details](https://github.com/PrestaShop/PrestaShop/pull/38679).
- Address fields now remain visible after changing the country on the checkout page. [Learn more](https://github.com/PrestaShop/PrestaShop/pull/38257).
- Corrected multilingual translation issues. [Details](https://github.com/PrestaShop/PrestaShop/pull/38157).

### Core

**Improvements**

- Two new hooks added in `getImageLink` for enhanced image handling. [Learn more](https://github.com/PrestaShop/PrestaShop/pull/38952).
- Backported improved profiler from version 9 for better debugging. [Details here](https://github.com/PrestaShop/PrestaShop/pull/38924).

**Bug Fixes**

- Fixed rounding calculations in the price calculator. [See fix](https://github.com/PrestaShop/PrestaShop/pull/37925).
- Corrected SK tax in localization files. [Details](https://github.com/PrestaShop/PrestaShop/pull/38104).

### Installer

**Improvements**

- Added demo product environment parameter for CLI installation via Docker. [Learn more](https://github.com/PrestaShop/PrestaShop/pull/38077).

### Web Services

**Bug Fixes**

- Resolved SQL error in web services. [Fix details](https://github.com/PrestaShop/PrestaShop/pull/38417).
- Fixed issues with product carrier deletion in web services. [Details](https://github.com/PrestaShop/PrestaShop/pull/38341).

PrestaShop 8.2.2 brings these updates and more to enhance your experience. For a complete list of changes, visit the [release page](https://github.com/PrestaShop/PrestaShop/releases/tag/8.2.2).

## Update to PrestaShop 8.2.2

We strongly encourage you to update your shop to PrestaShop 8.2.2 promptly to benefit from the extensive bug fixes and enhancements included in this release. Prior to updating, make sure to create a full backup of your shop to safeguard your data.

Updating to the latest version of PrestaShop 8.2.x is straightforward with the [Update Assistant](https://github.com/PrestaShop/autoupdate/releases/). This tool streamlines the update process, ensuring your shop remains current with minimal effort and maximum reliability.

As highlighted in our recent article ([PrestaShop 8.2.x enters the extended support phase]({{< relref "/news/posts/2025/82x-extended-support-phase" >}})), **version 8.2.x will now only receive security patches and critical updates**. To take advantage of the latest features and enhancements, we recommend starting your migration plan to PrestaShop 9.

If you encounter any problems during the update that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).

## Download

Don't wait any longer and download PrestaShop 8.2.2 now!

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/8.2.2" >}}Download PrestaShop 8.2.2 now!{{< /cta >}}

## Acknowledgments

This release reflects the collaborative efforts of the PrestaShop community and project members, and we are grateful for their contributions. Contributors to this patch version include both project members and community contributors:

adrianllopis, Boki, Boris Hermans, Codencode, Daniel Hlavacek, David-Julian BUCH, Dominik Shaim Ulrich, Fabien Papet, Franck Lefèvre, Grzegorz Wójcik, Jean-François Viguier, John BOTELLA, Jonathan Danse, Jonathan Lelievre, Jonathan Renard, Krystian Podemski, Ludovic Cardinale, Mathieu Ferment, Matthias Goudjil, Matthieu Rolland, Mattia, Nicolas Lœuillet, Tanguy, Tuni-Soft

Thank you!
