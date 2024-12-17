---
layout: post
title:  "PrestaShop 9.0 beta is now available!"
subtitle: "The first beta version of PrestaShop 9.0 is ready for testing"
date: 2024-12-01
authors: [ PrestaShop ]
image: /assets/images/2024/12/ps9beta_LK-FB_1200x627_blue.jpg
opengraph_image: /assets/images/2024/12/ps9beta_LK-FB_1200x627_blue.jpg
twitter_image: /assets/images/2024/12/ps9beta_TW_1024x512_blue.jpg
icon: icon-lab
tags:
- version
- beta
- major
- releases
- "9.0"
- "9.x"
- "9.0.x"
---

The first beta version of PrestaShop 9.0 is now available for testing. This version includes many new features and improvements, new Admin API, support for PHP 8.4 and Symfony 6.4, many bug fixes, and a significant cleanup of the codebase. Read on to learn more about the new features and improvements.

![PrestaShop 9.0 Beta is available!](/assets/images/2024/12/ps9beta_blog_1534x424_blue.jpg)

It's been over 5 months since we released Alpha 1, and we're excited to share the progress we've made since then. Today, we're releasing the first beta version of PrestaShop 9.0.

## PrestaShop 9 Beta 1

![PrestaShop 9.0 Beta 1](/assets/images/2024/12/prestashop9.jpeg)

In June, when we released the Alpha 1 version, we also [published]({{< relref "/news/releases/prestashop-9-alpha1-available" >}}) the first overview of the new features and improvements that PrestaShop 9 will bring. Since then, we've been working hard with the community to improve the software and prepare it for the next major release.

Below, you can find descriptions of some of the notable changes implemented in this version. We will share the full overview of the changes in the final release notes. Keep in mind that we only list some of the most important changes here, and there are many more improvements and bug fixes in this version which will be listed in the final release notes.

{{% notice type="important" title="Important" icon="fire" %}}
You should not use this beta version in production. It is also not possible to upgrade from PrestaShop 9.0 Beta to a final version 9. We recommend testing this version on a copy of your shop.
{{% /notice %}}

### Symfony 6.4

PrestaShop 9.0 is now based on Symfony 6.4. This change brings many improvements to the software, including better performance, security, and maintainability. Symfony 6.4 is the latest available long-term-support version, which provides security updates until November 2027. This is also great news for developers, who will be able to enjoy all the benefits of the latest LTS-version (long-term support) of this framework.

<img src="/assets/images/2024/12/symfony_black_02.png" alt="PrestaShop 9 is based on Symfony 6.4" style="max-width: 400px;">

### PHP 8.4 support

It's a last-minute addition, but we're happy to announce that PrestaShop 9.0 now supports PHP 8.4. This version that was released in November 2024 brings many new additions to the language, and we're excited to be able to support it from the start. Thanks to [joint efforts](https://github.com/PrestaShop/PrestaShop/pull/37417) from the community and the PrestaShop team, we were able to make this happen.

As a reminder, minimum PHP version required to run PrestaShop 9.0 is PHP 8.1.

### Admin API

The new Admin API is a key feature of PrestaShop 9.0, enabling developers to interact with the back office API more efficiently. This is a first step in making easier to develop integrations with PrestaShop. You can [watch a presentation](https://youtu.be/7CQ2Sg-v4XQ?t=1219) by [@jolelievre](https://github.com/jolelievre), where he covers the basics of the new solution, explains its foundations, and demonstrates how to use it.

If you want to test the new API, make sure to follow the article written by [@kpodemski](https://github.com/kpodemski) - [How to use the new API in PrestaShop 9]({{< relref "/news/posts/2024/meet-prestashop9-api" >}}). This tutorial will guide you through the process of using the new API, explaining how to authorize the new API, create a new resource, and how to work with the API in general.

There is also a [dedicated section in the documentation](https://devdocs.prestashop-project.org/9/admin-api/) that explains how to use the new API and how the new API works under the hood.

The new Admin API is still a work in progress, and we are looking forward to hearing your feedback on it.

<img src="/assets/images/2024/12/wabby_logo_api-platform.png" alt="API Platform Admin API for PrestaShop" style="max-width: 300px;">

### Hummingbird theme

The new [Hummingbird theme](https://github.com/PrestaShop/hummingbird) is now available in PrestaShop 9.0. This theme is based on Bootstrap 5 and includes many improvements. Hummingbird is set as a default theme in PrestaShop 9.0 Beta 1, but it won't be the default one in the final release. We encourage you to test this theme and share your feedback with us. Hummingbird is still a work in progress, and we are looking forward to hearing your thoughts on it.

You can read more about the Humminbird theme in [this article](({{< relref "/news/posts/2022/new-theme-announce" >}})).

### Changes under the hood

There is a lot of work that has been done under the hood to improve the software. We've made many changes to the codebase to make it more maintainable and easier to work with. Some were required to make the software compatible with Symfony 6.4 or PHP 8.4, while others were made to improve the overall quality of the code, for example by removing deprecated code or improving the performance of the software.

We created a dedicated section in the documentation that explains the [notable changes in PrestaShop 9](https://devdocs.prestashop-project.org/9/modules/core-updates/9.0/). This section will be updated with more information about the changes in the final release notes.

If you are a developer, if you create solutions for PrestaShop, or if you are interested in the technical side of the software, we encourage you to check out this section to learn more about the changes that have been made.

In the upcoming months, we will continue to work on improving the software, fixing bugs, and preparing it for the final release. We will also work on updating the documentation and creating new resources to help you get started with PrestaShop 9 and take full advantage of the new features.

## How to test PrestaShop 9

You can download a fully featured version of PrestaShop 9 Classic Beta 1 from the [PrestaShop.com](https://prestashop.com/versions/). This version includes core of PrestaShop 9 and additional modules from [PrestaShop SA](https://prestashop.com/) that are compatible with this version, like A, B, C, D.

{{< cta "https://prestashop.com/versions#9.0.0-beta1" >}}Download PrestaShop 9.0 Beta 1{{< /cta >}}

If you don't want to use a Classic version, you can build the ZIP file with installer of PrestaShop 9 Beta 1. Use [PrestaShop Release Creation](https://github.com/PrestaShop/PrestaShop/tree/develop/tools/build) tool to do that.

### Requirements for PrestaShop 9 Beta 1

You need to have a fully working environment, either a server or Docker available, that meets the following requirements:

* PHP 8.1 (PHP up to 8.4 is supported)
* Composer 2
* Node.js 20 and NPM 10

Make sure to check all system requirements in the [documentation](https://devdocs.prestashop-project.org/9/basics/installation/system-requirements/). You also need to have [Git](https://www.git-scm.com/) installed on your machine.

### Create an installation package for PrestaShop 9 Beta 1

1. Clone the [PrestaShop repository](https://github.com/PrestaShop/PrestaShop/tree/9.0.0-beta.1) from "9.0.0-beta.1" tag: `git clone git@github.com:PrestaShop/PrestaShop.git --branch "9.0.0-beta.1 ."`. Note: use a different directory name than `.` if you want to clone the repository to a different directory.
2. Run `composer create-release` or `php tools/build/CreateRelease.php` in the root directory of the PrestaShop repository.
3. The script will create a ZIP file with the PrestaShop 9 Beta 1 distribution in the `tools/build/releases/9.0.0_date_time/` directory.

### Install PrestaShop 9

The installation process remains the same as in previous versions.

If you plan to test the new API, it's important to look at the tutorial explaining how to use it properly. [This tutorial]({{< relref "/news/posts/2024/meet-prestashop9-api" >}}) will give you a clear idea of how to work with the API effectively, ensuring you can get the most out of your testing.

## Your feedback is important!

The public beta period is an extremely important phase to prepare for the upcoming release. During this period, we encourage everyone in the community to download this version and test how it behaves in their unique environment.

Here are some examples of how you can help:

* If you have access to a real shop, set up a copy of it in a separate environment and update it to PrestaShop 9 using the [upgrade module](https://github.com/PrestaShop/autoupgrade/releases). See if you notice any issues on the shop compared to your previous version. << TO BE VERIFIED WITH SUE TEAM
* If you are a module or theme developer, check if they work well with this new version.
* If you notice any problem and you think it is caused by the new version, please [report it on GitHub](https://github.com/PrestaShop/PrestaShop/issues/new/choose).
* Don’t hesitate to [contribute to fixing bugs](https://devdocs.prestashop.com/8/contribute/contribute-pull-requests/) if you can!

**Your feedback on this beta is essential.** The more issues you report right now, the fewer bugs there will be on the final release, which means fewer patch versions and fewer problems on your (or your customer’s) online store.

**Please submit all your feedback by January 15, 2025.** If no new critical or major issue remains to be fixed by then, the first release candidate will be built and released a few days later.

If you have any questions about the version and its features, feel free to share them on [the PrestaShop project’s Slack](https://www.prestashop-project.org/slack/).

## Known issues - TBD

* [description](https://url.com)
* Some modules are not yet updated to work with 9.0 and might break your shop. We recommend disabling the following modules before upgrading to this beta:
  * PrestaShop Metrics (ps_metrics)
  * PrestaShop Facebook (ps_facebook)
  * Prestashop Checkout (ps_checkout)
  * Google marketing (psxmarketingwithgoogle)
  * Marketplace in your Back office (ps_mbo)

The [complete list of known bugs](https://github.com/PrestaShop/PrestaShop/issues?q=is%3Aopen+is%3Aissue+label%3A8.0.x+label%3ABug) is constantly updated on GitHub.

## Acknowledgements

A big thank you to the **X people** who contributed **more than 1500 Pull Requests** included in this version: [TO BE ADDED] contributors between 8.1 final and 9.0 beta

...and a warm welcome to the Y of them who contributed for the first time!

We would also like to thank the people who contributed aside from code:
- Product management: Fabien Vallon, Mateus Shirlaw, Rosa Benouamer, Wahbi Maaoui, Zoé Finders and Iliès Bahloul [TO BE VERIFIED]
- Quality assurance: [TO BE ADDED]
- UX design: Elodie Prokhoroff, Scott Cosio [TO BE VERIFIED]
- Wording management and proofreading: Julie Varisellaz, Léa Delin and Patrick Coffre. [TO BE VERIFIED]
