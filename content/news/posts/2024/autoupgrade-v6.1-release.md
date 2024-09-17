---
layout: post
title: "Autoupgrade module v6.1.0 and 6.2.0 are Available (1-Click Upgrade)"
subtitle: "We are pleased to introduce the new minor version release of the Autoupgrade module, also known as 1-Click Upgrade."
date:   2024-09-18
authors: [ GericFosse ]
icon: icon-leaf
tags: [ module, autoupgrade ]
---

In the footsteps of the latest module releases ([see version 6.0.0 release blogpost](https://build.prestashop-project.org/news/2024/autoupgrade-v6-release/)), these versions bring a number of improvements to streamline PrestaShop updates. Explore the changelog below to find out what version 6.1.0 and 6.2.0 bring to the upgrade module.

![1-click upgrade module logo](/assets/images/2024/07/autoupgrade-logo.png)

### What’s inside

#### Global improvements:

* **Version comparison** - Fix an issue on the PHP version check before starting an upgrade, which was reporting some valid versions as incompatible.
* **Version comparison** - Fix an issue where the number of altered or deleted core files is always zero.
* **UX optimization** - Improve user experience during update and restore processes with newer to-do lists and simplification of UI.
* **Improved module updates** - Revamping of module migration methods and integration of new dedicated logs.
* **CLI enrichment** - Homogenize CLI and module UI configuration system to deliver a consistent experience.


#### For developers:

* **New translation in Crowdin** - New module translations added to Crowdin, following its recent integration, in different languages.
* **Translation availability in Storybook** - New feature to translate the module interface in Storybook User Interface tool.
* **Multiple tech improvements** - JS format standardization, JS error handler, local archive check, new logs exception… Many corrections and tech optimizations have been added in this version.


The versions 6.1.0 and 6.2.0 of the module also brings other new improvements, you can read the full changelog by clicking on the links below.

{{< cta "https://github.com/PrestaShop/autoupgrade/releases/tag/v6.1.0" >}}Check out what’s new on v6.1{{< /cta >}}

{{< cta "https://github.com/PrestaShop/autoupgrade/releases/tag/v6.2.0" >}}Check out what’s new on v6.2{{< /cta >}}

### Download the new version

You should be able to download or update the latest module version from your Back Office. You can also access the module ZIP file in the project's GitHub repository by clicking on the link below.

{{< cta "https://github.com/PrestaShop/autoupgrade/releases/download/v6.2.0/autoupgrade-v6.1.0.zip" >}}Download Autoupgrade v6.2.0 now!{{< /cta >}}

If you encounter any problems during the update that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).

### Thank you, contributors

This new version release of the Autoupgrade module is the result of a collective effort by all project contributors. We are therefore taking this opportunity to thank all our contributors, from both the PrestaShop SA team and the community at large.
