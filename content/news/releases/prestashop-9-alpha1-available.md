---
layout: post
title:  "PrestaShop 9 Alpha 1 is Available!"
subtitle: "We need your help! Check the new major PrestaShop version."
date:   2024-04-12
authors: [ PrestaShop ]
icon: icon-gift
tags:
- 9.0
- version
- alpha
- major
- releases
- development
---

Here it is. The first public alpha of PrestaShop 9 is available. We decided it was time to share with you the first results of our work on PrestaShop 9.

We're excited to announce the alpha release of PrestaShop 9! Please note that this version is in the early stages of development. To achieve a stable release, we anticipate several months of further work. As we are prior to the feature-freeze phase, the features and content of PrestaShop 9 are subject to change.

[screenshot]

{{% notice type="danger" title="This is not a production-ready release" icon="warning" %}}
Be aware that this alpha version is not yet complete or stable enough for production environments.
{{% /notice %}}

The next big PrestaShop version delivers many new features, but as a major release, it also means many changes that are not backward compatible. We want to give you, the community, a chance to anticipate any changes you need to implement in your solutions to make them compatible with the new version. Equally important, we want to gather feedback from you about new features, improvements, and other changes that are part of this version.

This article does not fully summarize the changes in the new version. Still, it should give you a better understanding of what to expect from the new release and what to test, especially if you are developing new solutions in the PrestaShop ecosystem.


## What’s inside PrestaShop 9

Most notable changes in PrestaShop 9 are:

* Symfony framework update to version [6.4](https://symfony.com/releases/6.4), marked as LTS (long-term-support) version.
* Minimum compatible PHP version bumped to PHP 8.1 as well as support for PHP 8.2 and 8.3.
* Completely new API based on [API Platform](https://api-platform.com/).
* Ability to include Symfony container in the front office.
* Refactored back office layout, which is now rendered fully by Symfony.
* Smaller and larger improvements throughout the system, which we will announce in the coming months.

### Symfony 6.4

Upgrading to Symfony 6.4 (from version 4.4 used in PrestaShop 8.1) is a significant step for the project, to be up to date with the PHP ecosystem. Symfony 6.4 is the latest available long-term-support version, which provides security updates until November 2027. This is also great news for developers, who will be able to enjoy all the benefits of the latest version of this framework.

[screenshot]

### PHP 8.1, 8.2 and 8.3

At the time of writing this article, PHP 8.1 is no longer supported when it comes to security patches. We know the ecosystem needs time to adapt all solutions, therefore the decision to support this version. However, we have made sure that PrestaShop 9 will also be compatible with PHP 8.3, the latest version released in November, 2023.

[screenshot]

### New API

This is an important milestone for the entire PrestaShop ecosystem. A modern, flexible API that the community has been asking for over the past years. The first version of the new API will be in PrestaShop 9. You can [watch a presentation](https://youtu.be/7CQ2Sg-v4XQ?t=1219) by [@jolelievre](https://github.com/jolelievre), who talked about the basics of the new solution, explained the foundations behind it and showed how to use it.

[screenshot]

### Symfony in front office

TBC

###  Symfony layout in back office

TBC

–

Developers working on PrestaShop solutions should pay close attention to the first two items. We also invite you to experiment with our new API, which marks an important step towards PrestaShop's development into a headless platform.

Although we are in the process of preparing documentation on the notable changes for the community, you can start by familiarizing yourself with the migration guides from PHP and release notes from Symfony:

* [Migration from PHP 8.0 to PHP 8.1](https://www.php.net/manual/en/migration81.php)
* [Migration from PHP 8.1 to PHP 8.2](https://www.php.net/manual/en/migration82.php)
* [Migration from PHP 8.2 to PHP 8.3](https://www.php.net/manual/en/migration83.php)
* [Release notes for Symfony 5.4](https://symfony.com/releases/5.4)
* [Release notes for Symfony 6.4](https://symfony.com/releases/6.4)

## How to test PrestaShop 9

Click the button below to download the new version. The installation process remains the same as in previous versions. Please note: this version requires PHP 8.1 or higher.

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/9.0.0-alpha1" >}}Download PrestaShop 9 Alpha 1 now!{{< /cta >}}

If you plan to test the new API, it's important to look at the tutorial explaining how to use it properly. [This tutorial](#) will give you a clear idea of how to work with the API effectively, ensuring you can get the most out of your testing.

## What’s next

We are continuing our efforts to reach a stable version, with several key areas of development still in progress. Here is a brief outline of the crucial elements needed to achieve the release of the final version:

Core:
* work on the new API continues to lay a great foundation for the future
* 

Back office:
* TBD

Front office:
* The decision regarding the Hummingbird theme and its presence in PrestaShop 9 has not yet been made.

Documentation:
* We will work to document all significant changes to the software to make it easier for developers to adapt their solutions to PrestaShop 9.

## FAQ - last update on X of April, 2024

*Can I upgrade to PrestaShop 9 Alpha?*

No, the autoupgrade module is not ready for upgrading from previous versions to PrestaShop 9. We’ll update it later this year.

*Can I upgrade from PrestaShop 9 Alpha or Beta to the final PrestaShop version when ready?*

No, it’s never been possible, and there are no plans to implement this possibility in the upgrade module.


## Get involved

It's a great time to [get involved](https://www.prestashop-project.org/get-involved/). One of the main goals of this release is to discuss the new version openly with you. We would like your feedback on PrestaShop 9.

* If you found a bug, [report it to us](https://github.com/PrestaShop/PrestaShop/issues/new?assignees=&labels=Bug%2CNew&projects=&template=1_bug_report.yml).
* If you are not sure if the software behavior is a bug, have questions or other concerns, [open a discussion here](https://github.com/PrestaShop/PrestaShop/discussions/new?category=q-a)
* We are also available on [Slack](https://www.prestashop-project.org/slack/).

We believe that together we can make PrestaShop 9 a great release that we can consider stable later this year.
