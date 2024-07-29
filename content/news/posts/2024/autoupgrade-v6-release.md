---
layout: post
title: "Autoupgrade module v6.0.0 is Available (1-Click Upgrade)"
subtitle: "We are pleased to introduce the new major version release of the Autoupgrade module, also known as 1-Click Upgrade."
date:   2024-07-29
authors: [ GericFosse ]
icon: icon-leaf
tags: [ module, autoupgrade ]
---

In the footsteps of the latest module releases ([see versions 5.0.2 and 5.0.3 live presentation](https://build.prestashop-project.org/news/2024/live-update-june-2024/)), this version brings a number of improvements to streamline PrestaShop updates. Explore the changelog below to find out what version 6.0.0 brings to the Autoupgrade module.

![1-click upgrade module logo](/assets/images/2024/07/autoupgrade-logo.png)

### What’s inside

#### Global improvements:

* **Ensure update path -** Optimization of the upgrade path to the latest version of PrestaShop 8 when using the minor channel.
* **Enable usage & error analytics -** Introduce anonymous analytics with Segment and voluntary error reporting based on Sentry.
* **Better display of RTL languages -** Fix Right To Left languages display in the BO by better RTL files management during updates.
* **New PS/PHP compatibility check -** Adding a check to make sure the PHP version is compatible with the target PrestaShop before allowing the update to start.
* **Improved data privacy -** Sanitize generated update logs from sensible data, such as the admin folder name and adding a link to updated privacy policy.
* **Smoother update process -** Allow the whole update process to continue even when a module triggers an exception during the run of its migration files.
* **Reliability of local updates -** When using a local archive, automatic detection of the PrestaShop version and check for PrestaShop matching in the ZIP and XML.


#### For developers:

* **Crowdin translation management -** Rework the management and distribution of translations of the first native and open source module with Crowdin and PrestaShop module translation tool.
* **Update translation format -** Switch to translations in XLIFF format.
* **Storybook front preview -** Introduce Storybook on the project to ease the incoming UI rework.
* **Deploying automated tests -** Introduce UI tests running nightly.
* **Improving code quality -** Increase number of checks made by PHPStan.


The version 6.0.0 of the module also brings other new improvements, you can read the full changelog by clicking on the link below.

{{< cta "https://github.com/PrestaShop/autoupgrade/releases/tag/v6.0.0" >}}Check out what’s new{{< /cta >}}

### Download the new version

You should be able to download or update the latest module version from your Back Office. You can also access the module ZIP file in the project's GitHub repository by clicking on the link below.

{{< cta "https://github.com/PrestaShop/autoupgrade/releases/download/v6.0.0/autoupgrade-v6.0.0.zip" >}}Download Autoupgrade v6.0.0 now!{{< /cta >}}

If you encounter any problems during the update that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).

### Thank you, contributors

This new version release of the Autoupgrade module is the result of a collective effort by all project contributors. We are therefore taking this opportunity to thank all our contributors, from both the PrestaShop SA team and the community at large.
