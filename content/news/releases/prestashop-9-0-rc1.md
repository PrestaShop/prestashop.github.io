---
layout: post
title:  "PrestaShop 9.0 RC1 is now available!"
subtitle: "The first release candidate of PrestaShop 9.0 is now available for testing!"
date: 2025-05-22
authors: [ PrestaShop ]
image: /assets/images/2025/12/ps9RC1_LK-FB_1200x627_blue.jpg
opengraph_image: /assets/images/2025/12/ps9RC1_LK-FB_1200x627_blue.jpg
twitter_image: /assets/images/2025/12/ps9beta_TW_1024x512_blue.jpg
icon: icon-lab
tags:
- version
- rc
- major
- releases
- "9.0"
- "9.x"
- "9.0.x"
---

The first Release Candidate of PrestaShop 9.0 is now available for testing. This is a significant milestone in the development cycle, and we encourage all users to test it thoroughly.

![PrestaShop 9.0 RC1 is available!](/assets/images/2024/12/ps9beta_LK-FB_1200x627_blue.jpg)

## PrestaShop 9.0 Release Candidate 1

This version marks the final stage before the stable release. It includes all planned features, improvements, and changes introduced since the alpha and beta phases — including the new Hummingbird theme, Admin API, PHP 8.4 and Symfony 6.4 support, and many under-the-hood cleanups. We're now asking the community to help verify that everything works as expected and report any remaining regressions or bugs.

##  Your feedback is crucial

RC1 is not just another test version — it's a call to action. The goal is to ensure that everything added or changed in PrestaShop 9.0 works well in real-world conditions.

We invite everyone to:

- Install and explore RC1 in a staging or development environment.
- Check compatibility with your themes, customizations, and modules.
- Report regressions or unexpected behavior on [GitHub Issues](https://github.com/PrestaShop/PrestaShop/issues/new).

## Key features and changes in PrestaShop 9.0

If you're catching up, here's a quick recap of major changes in this release:

- New Admin API built with [API Platform](https://api-platform.com/).
- New [Hummingbird theme](https://github.com/PrestaShop/hummingbird).
- Symfony 6.4 LTS.
- PHP 8.4 support (PHP 8.1 is the minimum required version now).
- Deep internal refactoring and code cleanup.

## How to test RC1

1. Download the RC1 build from [PrestaShop.com](https://prestashop.com/versions/).
2. Set it up in a test environment.
3. Play around with the software and its new features and improvements.
4. Validate module/customizations/theme compatibility.
5. [Report any issues](https://github.com/PrestaShop/PrestaShop/issues/new).

{{< cta "https://prestashop.com/versions#9.0.0-rc1" >}}Download PrestaShop 9.0 Release Candidate 1{{< /cta >}}

### Requirements for PrestaShop 9 Release Candidate 1

You need to have a fully working environment, either a server or Docker available, that meets the following requirements:

* PHP 8.1 (PHP up to 8.4 is supported)
* Composer 2
* Node.js 20 and NPM 10

Please check all system requirements in the [documentation](https://devdocs.prestashop-project.org/9/basics/installation/system-requirements/). You must also have [Git](https://www.git-scm.com/) installed on your machine.

**Creating a custom ZIP**

If you don't want to use a Classic version, you can build your custom ZIP file with the PrestaShop 9 RC1 installer, which includes no PrestaShop SA modules. To do so, use the [PrestaShop Release Creation](https://github.com/PrestaShop/PrestaShop/tree/develop/tools/build) tool.

### Known limitations

**No upgrade path:** You cannot upgrade from beta to RC1, nor from RC1 to final using the [Update Assistant module](https://github.com/PrestaShop/autoupgrade).

**Do not install on live shops:** This version may still contain bugs, and installing it on production environments is not recommended. It is meant for testing purposes only.

## Final notes

We'd like to thank everyone who has tested, contributed, and supported the development of PrestaShop 9 so far. Your help is what makes this community and this software stronger.
