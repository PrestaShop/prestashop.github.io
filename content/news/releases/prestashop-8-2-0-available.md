---
layout: post
title:  PrestaShop 8.2 Is Available
subtitle: A new minor version of PrestaShop is now available
date: 2024-09-26
authors: [ PrestaShop ]
image: /assets/images/2024/09/banner_8.2_1200x627.jpg
opengraph_image: /assets/images/2024/09/banner_8.2_1200x627.jpg
twitter_image: /assets/images/2024/09/banner_8.2_1024x512.jpg
icon: icon-leaf
tags:
- version
- minor
- releases
- "8.2"
- "8.2.x"
---

It's been decided to release a new minor version of PrestaShop 8.2. This version includes a few improvements, as well as bug fixes.

![PrestaShop 8.2 is available!](/assets/images/2024/09/banner_8.2_1534x424.jpg)

## What's new in PrestaShop 8.2?

PrestaShop 8.2 is a minor version that includes a few improvements, as well as bug fixes, and it is relatively small compared to the previous minor versions. Here are some highlights.

### Improvements

**Correctly checking overrides during module installation**

PrestaShop used to check for overrides during module installation, but the process didn’t fully block installation if a conflicting override was found. Even with a conflict and warning message, the module would still appear as installed in the database, potentially causing side effects.  This issue has been [fixed](https://github.com/PrestaShop/PrestaShop/pull/36639) and the mechanism for checking overrides during the module installation has been improved.

**New hook `actionFrontControllerSetVariablesBefore`**

A [new hook is available](https://github.com/PrestaShop/PrestaShop/pull/36657) for assigning general purpose variables before the core does it. This hook is called `actionFrontControllerSetVariablesBefore` and is available in the `FrontController` class. You can read about potential use cases in the pull request.

**Introduction of a `CartLazyArray`**

[`CartLazyArray` has been introduced](https://github.com/PrestaShop/PrestaShop/pull/36575) as a first step to improve the cart object performance. This class is a lazy array that will only load the cart data when needed. This change introduced minor backward compatibility breaks, but it will be beneficial for the performance.

If you are a developer and encounter any issues with this change, please let us know by [creating a new issue](https://github.com/PrestaShop/PrestaShop/issues/new?assignees=&labels=Bug%2CNew&projects=&template=1_bug_report.yml) on GitHub.

**Improvement of the Mail class**

The `reply-to` parameter [is no longer allowed](https://github.com/PrestaShop/PrestaShop/pull/36576) to be the same as the `to` parameter in the `Mail` class. This change has been made to prevent emails from being marked as spam.

You can see the full list of improvements [here](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Amerged+is%3Apr+milestone%3A8.2.0+label%3AImprovement).

### Bug fixes

There are more than 10 bug fixes in this version. You can check the full list of bug fixes [here](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Amerged+is%3Apr+milestone%3A8.2.0+label%3A%22Bug+fix%22). Below you can find information about some of the most important fixes.

**Fixed installation process on certain environment configurations**

Due to different configurations of some environments, the installation process was failing on the database creation step. This issue [has been fixed](https://github.com/PrestaShop/PrestaShop/pull/36840) in this version.

**Fixed incompatibility issue with PDO returning integer values on PHP 8.1**

In PHP 8.1, PDO started returning integer values for some fields that were previously returned as strings. This change caused compatibility issues with PrestaShop, and it has been [fixed](https://github.com/PrestaShop/PrestaShop/pull/36875) in version 8.2.

**Fixed issue with creating duplicate customers in a specific scenario**

There was an issue where customers could be created multiple times when the same email address was used. This issue has been [fixed](https://github.com/PrestaShop/PrestaShop/pull/36454) and you can read more about it in the pull request.

**Solved some problems with ordering customized products**

Thanks to [@Codencode](https://github.com/Codencode), some issues with ordering customized products have been fixed. They [fixed](https://github.com/PrestaShop/PrestaShop/pull/36834) the issue with the "Total products" column on the order confirmation, and with [deleting images for customized products](https://github.com/PrestaShop/PrestaShop/pull/36905).

## Changed release schedule

We understand that the release of PrestaShop 8.2 may come as a surprise to some, as it deviates from our previously announced release schedule. Initially, our plan was to follow a versioning cycle of 8.0, 8.1, followed by 9.0, 9.1, and beyond. However, in order to fully comply with semantic versioning principles, we have made the decision to introduce this new minor release.

We have also updated the [release schedule page](https://www.prestashop-project.org/project-organization/release-cycle/) on the PrestaShop Project website to reflect those adjustments. While our goal is typically to release one minor version per major release, this update demonstrates our flexibility in issuing additional minor versions when necessary.

Meanwhile, work on PrestaShop 9 is progressing steadily, and we are preparing the first beta release. More details on this upcoming version will be shared in the coming weeks.

## Download

PrestaShop 8.2 is available on GitHub:

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/8.2.0" >}}Download PrestaShop 8.2 now!{{< /cta >}}

## Upgrade

The [1-Click Upgrade module](https://github.com/PrestaShop/autoupgrade) for this version is available. You can download the latest release, enabling the upgrade to 8.2 [directly from GitHub](https://github.com/PrestaShop/autoupgrade/releases). The upgrade for PrestaShop 8.2 is available under "Minor upgrades" channel.

## Acknowledgments

A big thank you to people who contributed to Pull Requests included in this version:

ChronoBrake, Codencode, Hlavtox, Jonathan Renard, Ludovic Cardinale, Mathieu Ferment, Matthieu Rolland, Max Azan, maxldn5, Mouleeswaran Ganapathi, PrestaEdit, ShaiMagal
