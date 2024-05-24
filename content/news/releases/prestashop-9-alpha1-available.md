---
layout: post
title:  "PrestaShop 9 Alpha 1 is Available!"
subtitle: "We need your help! Check the new major PrestaShop version."
date:   2024-05-15
authors: [ PrestaShop ]
icon: icon-gift
image: /assets/images/2024/05/v9alpha1/blog_1534x424_black.jpeg
opengraph_image: /assets/images/2024/05/v9alpha1/LK-FB_1200x627_black.jpeg
twitter_image: /assets/images/2024/05/v9alpha1/TW_1024x512_black.jpeg
tags:
- 9.0
- version
- alpha
- major
- releases
- development
---

Here it is. The first public alpha of PrestaShop 9 is available. We decided it was time to share with you the first results of our work on PrestaShop 9.

Please note that this version is in the early stages of development. To achieve a stable release, we anticipate several months of further work. As we are prior to the feature-freeze phase, the features and content of PrestaShop 9 are subject to change.

![PrestaShop 9 Alpha 1 is Available!](/assets/images/2024/05/v9alpha1/blog_1534x424_black.jpeg)

The next big PrestaShop version delivers many new features, but as a major release, it also means many changes that are not backward compatible. We want to give you, the community, a chance to anticipate any changes you need to implement in your solutions to make them compatible with the new version. Equally important, we want to gather feedback from you about new features, improvements, and other changes that are part of this version.

{{% notice type="danger" title="This is not a production-ready release" icon="warning" %}}
Be aware that this alpha version is not yet complete or stable enough for production environments.
{{% /notice %}}

This article does not fully summarize the changes in the new version. Still, it should give you a better understanding of what to expect from the new release and what to test, especially if you are developing new solutions in the PrestaShop ecosystem.


## What’s inside PrestaShop 9

Most notable changes in PrestaShop 9 are:

* Symfony framework update to version [6.4](https://symfony.com/releases/6.4), marked as LTS (long-term-support) version.
* Minimum compatible PHP version bumped to PHP 8.1 as well as support for PHP 8.2 and 8.3.
* Completely new API based on [API Platform](https://api-platform.com/).
* Ability to include a Symfony container in the front office.
* Refactored back office layout, which is now rendered fully by Symfony.
* Login page in the back office has been migrated to Symfony.
* Smaller and larger improvements throughout the system, which we will announce in the coming months.

### Symfony 6.4

Upgrading to Symfony 6.4 (compared to version 4.4 used in PrestaShop 8.1) is a significant step for the project, to be up to date with the PHP ecosystem. Symfony 6.4 is the latest available long-term-support version, which provides security updates until November 2027. This is also great news for developers, who will be able to enjoy all the benefits of the latest version of this framework.

![PrestaShop 9 is based on Symfony 6.4](/assets/images/2024/05/symfony64.jpeg)
<p class="text-center mt-0"><small>Screenshot from Symfony debug profiler in PrestaShop back office</small></p>

### PHP 8.1, 8.2 and 8.3

At the time of writing this article, PHP in versions 8.2 and 8.3 are actively supported or, like PHP 8.1, receive security fixes. We have ensured that PrestaShop 9 is compatible with these three PHP versions, allowing you to choose the one that best suits your needs.

![PrestaShop 9 supports PHP 8.1, 8.2 and 8.3](/assets/images/2024/05/phpsupport.jpeg)
<p class="text-center"><small>Actively supported PHP versions</small></p>

### New API

This is an important milestone for the entire PrestaShop ecosystem. A modern, flexible API that the community has been asking for over the past years. The first version of the new API will be in PrestaShop 9. You can [watch a presentation](https://youtu.be/7CQ2Sg-v4XQ?t=1219) by [@jolelievre](https://github.com/jolelievre), who talked about the basics of the new solution, explained the foundations behind it and showed how to use it.

If you want to test the new API, make sure to follow the article written by [@kpodemski](https://github.com/kpodemski) - [How to use the new API in PrestaShop 9](#). This tutorial will guide you through the process of using the new API, explaining how to authorize the new API, create a new resource, and how to work with the API in general.

![New API in PrestaShop 9](/assets/images/2024/05/adminapi.jpeg)

### Symfony in front office

The Symfony container is now available in the front office. This is a significant change that will allow developers to use Symfony components in the front office. For the moment, this feature is still behind a feature flag, but we encourage you to test it and provide feedback.

![Symfony container in front office](/assets/images/2024/05/sfcontainer.jpeg)

### Symfony layout in back office

In PrestaShop 9.0, the back office layout is now fully managed by Symfony and [Twig components](https://symfony.com/bundles/ux-twig-component/current/index.html). This makes the code cleaner and easier to maintain. We prioritized backward compatibility, so your modules should work as usual. However, we need the community's help to test and spot any issues. We will share more information about these changes in the developer documentation.

### Login page in the back office has been migrated to Symfony

As part of the Symfony migration, the login page in the back office has been migrated to Symfony. This is quite a significant change which will allow us to improve the security of the login process and make it more flexible in the future. There are still some improvements to be made, but the first step has been taken. If you want to know more about the changes, you can read the [pull request](https://github.com/PrestaShop/PrestaShop/pull/35983) and follow the EPIC [Migrate Login backoffice page and authentication system to Symfony](https://github.com/PrestaShop/PrestaShop/issues/36001).

–

Developers working on PrestaShop solutions should pay close attention to the first two items. We also invite you to experiment with our new API.

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
* Work on the new API continues to lay a great foundation for the future.

Back office:
* Symfony login page requires further improvements to be fully functional.

Front office:
* The decision regarding the Hummingbird theme and its presence in PrestaShop 9 has not yet been made.

Documentation:
* We will work to document all significant changes to the software to make it easier for developers to adapt their solutions to PrestaShop 9.
* We will also prepare a guide on how to use the new API effectively and explain the basics of the new solution.

Upgrade path:
* You can use the "Local archive" method in the [autoupgrade](https://github.com/PrestaShop/autoupgrade) to try upgrading to PrestaShop 9 Alpha. There might be some issues, so please be cautious. We plan to test the upgrade path in the coming weeks.

This list is not exhaustive, and we will continue to work on other areas of the software to ensure a stable release.

## FAQ - last update on 15th of May, 2024

**Can I upgrade to PrestaShop 9 Alpha?**

You can try upgrading using the "Local archive" method in the [autoupgrade](https://github.com/PrestaShop/autoupgrade). However, please remember that this version is not stable and should not be used in production environments. We haven't tested the upgrade path yet, so it may not work as expected.

**Can I upgrade from PrestaShop 9 Alpha or Beta to the final PrestaShop version when ready?**

No, it has never been possible, and there are no plans to implement this possibility in the upgrade module.

**Do you plan to make Hummingbird the default theme in PrestaShop 9?**

While the [Hummingbird theme](https://github.com/PrestaShop/hummingbird) is a great step forward, we are still considering the best approach to the theme in PrestaShop 9. We will probably add it as a secondary theme, but the decision has not been made yet. We will keep you updated on this matter.

## Get involved

It's a great time to [get involved](https://www.prestashop-project.org/get-involved/). One of the main goals of this release is to discuss the new version openly with you. We would like your feedback on PrestaShop 9.

* If you found a bug, [report it to us](https://github.com/PrestaShop/PrestaShop/issues/new?assignees=&labels=Bug%2CNew&projects=&template=1_bug_report.yml).
* If you are not sure if the software behavior is a bug, have questions or other concerns, [open a discussion here](https://github.com/PrestaShop/PrestaShop/discussions/new?category=q-a).
* We are also available on [Slack](https://www.prestashop-project.org/slack/).

We believe that together we can make PrestaShop 9 a great release, which would be considered stable later this year.
