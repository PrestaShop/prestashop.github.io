---
layout: post
title:  "PrestaShop 9.0 beta is now available!"
subtitle: "The first beta version of PrestaShop 9.0 is ready for testing"
date: 2025-02-10
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

The first beta version of PrestaShop 9.0 is now available for testing. This version includes many new features and improvements, a new Hummingbird theme, a new Admin API, PHP 8.4 and Symfony 6.4 support, many bug fixes, and a significant codebase cleanup. Read on to learn more about the new features and improvements.

![PrestaShop 9.0 beta is available!](/assets/images/2024/12/ps9beta_LK-FB_1200x627_blue.jpg)

## PrestaShop 9.0 beta 1

![PrestaShop 9.0 Beta 1](/assets/images/2024/12/prestashop9.jpeg)

In June, when we released the alpha 1 version, we also [published]({{< relref "/news/releases/prestashop-9-alpha1-available" >}}) the first overview of new features and improvements that PrestaShop 9 will bring. Since then, we've worked hard with the community to improve and prepare the software for the next major release.

Below are descriptions of some notable changes implemented in this version. This list highlights only the most important updates. The final release notes will provide a complete overview, including all improvements and bug fixes.

{{% notice type="important" title="Important" icon="fire" %}}
**You should not use this beta version in production**. Upgrading from PrestaShop 9.0 beta to a final version 9 is also impossible. We recommend testing this version on a copy of your shop or using a clean installation.
{{% /notice %}}

### Symfony 6.4

PrestaShop 9.0 is now based on Symfony 6.4. This change improves the software's performance, security, and maintainability. Symfony 6.4 is this framework's latest long-term support version, which provides security updates until November 2027.

<img src="/assets/images/2024/12/symfony_black_02.png" alt="PrestaShop 9 is based on Symfony 6.4" style="max-width: 400px;">

### PHP 8.4 support

It's a last-minute addition, but we're happy to announce that PrestaShop 9.0 now supports PHP 8.4. This version, which was released in November 2024, brings many new additions to the language, and we're excited to be able to support it from the start. Thanks to [joint efforts](https://github.com/PrestaShop/PrestaShop/pull/37417) from the community and the PrestaShop team, we were able to make this happen.

This is fantastic news for developers working with PrestaShop, as it ensures access to the latest language features and tools, empowering you to build faster, smarter, and more efficient solutions.

{{% notice %}}
Our CI (Continuous Integration) processes, which continuously test the PrestaShop core on GitHub, are already compatible with PHP 8.4. However, there may be a few edge cases that require additional adjustments to ensure complete support. If you encounter any issues, please let us know by submitting a bug report.
{{% /notice %}}

As a reminder, the minimum PHP version required to run PrestaShop 9.0 is PHP 8.1.

### The new Admin API with API Platform

The new Admin API is a key feature of PrestaShop 9.0, enabling developers to interact more efficiently with the back office through the API. While this is an exciting first step, it's important to note that the API is still in its early stages, with some endpoints yet to be implemented and further refinements needed. However, your testing and feedback will play a crucial role in shaping its future development.
You can [watch a presentation](https://youtu.be/7CQ2Sg-v4XQ?t=1219) by [@jolelievre](https://github.com/jolelievre), where he covers the new solution’s basics, explains its foundations, and demonstrates how to use it.

If you want to test the new API, make sure to follow the article written by [@kpodemski](https://github.com/kpodemski) - [How to use the new API in PrestaShop 9]({{< relref "/news/posts/2024/meet-prestashop9-api" >}}). This tutorial will guide you through using the new API, explaining how to authorize the new API, create a new resource, and work with the API in general.

A [dedicated section in the documentation](https://devdocs.prestashop-project.org/9/admin-api/) explains how to use the new API and how the new API works under the hood.

We’re excited to share this new tool with you and are eager to hear your feedback as we refine and expand the API. Your input is vital in helping us build a robust solution for the entire PrestaShop community.

<img src="/assets/images/2024/12/wabby_logo_api-platform.png" alt="API Platform Admin API for PrestaShop" style="max-width: 300px;">

### Hummingbird theme

The [Hummingbird theme](https://github.com/PrestaShop/hummingbird) is an exciting new addition to PrestaShop 9.0! Built on Bootstrap 5, it introduces a modernized directory structure, utilizes TypeScript, and adopts the BEM methodology for CSS naming. These improvements, along with other enhancements, lay a strong foundation for future theme development.

{{% notice %}}
Hummingbird is the default theme in PrestaShop 9.0 beta 1, but it won't be the default one in the final release.
{{% /notice %}}

While Hummingbird is still under active development and won't be the default theme for PrestaShop 9, it represents a significant step forward. We strongly encourage developers to begin exploring, testing, and building their themes based on Hummingbird. Its robust foundation promises to make your projects more efficient and maintainable, while helping shape the future of PrestaShop themes.

Your feedback is invaluable as we refine Hummingbird. Our aim is to make it the default theme in the next major release, and your input will play a critical role in that journey.

Learn more about the Hummingbird theme and its features in [this article](({{< relref "/news/posts/2022/new-theme-announce" >}})).

### The new product page

The new product page, introduced in a previous version of PrestaShop, has now fully replaced the legacy page in PrestaShop 9. As a result, developers must migrate their solutions to align with the updated standard. To learn how to customize the new product page, visit the [dedicated section inside the developer documentation](https://devdocs.prestashop-project.org/9/modules/sample-modules/extend-product-page/).

**Symfony migration**

Undoubtedly, one of the most significant parts of this update is the continued migration to Symfony. Much work has gone into this release, bringing us closer to this project's end.

As we have already informed you in the alpha 1 version release notes, the layout in the back office is now entirely managed by Symfony, which makes the code cleaner and easier to maintain. Additionally, several pages have been fully migrated to Symfony. Some have transitioned from being gated behind a feature flag to being enabled by default, while others are introduced directly as default features in version 9. Here’s the list of all migrated pages:

*Enabled by default*

- Back office login page
- Sell -> Orders -> Shopping carts
- Sell -> Catalog -> Attributes & Features
- Sell -> Catalog -> Products (new page version introduced in PrestaShop 8.1 is now the only available one)
- Improve -> Design -> Image Settings
- Improve -> International -> Locations -> States
- Configure -> Shop Parameters -> Customer Settings -> Titles
- Configure -> Shop Parameters -> Order Settings -> Statuses


*New pages behind a feature flag*


- Sell -> Customer Service -> Merchandise Returns
- Configure -> Shop Parameters -> Customer Settings -> Groups
- Configure -> Shop Parameters -> Contact -> Stores
- Configure -> Shop Parameters -> Search

There are two additional updates to highlight: the Carriers page, still hidden behind a feature flag, has been significantly revamped in this beta version. We encourage you to explore and test its updates by enabling it in Advanced Parameters > New & Experimental Features. Additionally, in the same tab, you can enable the 'New front container,' which introduces a full Symfony container in the front office.

### Changes deep under the hood

Much work has been carried out under the hood to improve the software. We've made many codebase changes to make it more maintainable and easier to work with. Some were required to make the software compatible with Symfony 6.4 or PHP 8.4, while others were made to improve the overall code quality, for example, by removing deprecated code or improving the software performance.

We created a dedicated section in the documentation that explains the [notable changes in PrestaShop 9](https://devdocs.prestashop-project.org/9/modules/core-updates/9.0/). This section will be updated with more information about the changes in the final release notes.

If you are a developer, if you create solutions for PrestaShop, or are interested in the technical side of the software, we encourage you to check out this section to learn more about the changes that have been made.

In the upcoming months, we will continue improving the software, fixing bugs, and preparing it for the final release. We will also work on updating the documentation and creating new resources to help you get started with PrestaShop 9 and take full advantage of new features.

## How to test PrestaShop 9

You can download a fully featured PrestaShop 9 Classic beta 1 version from [PrestaShop.com](https://prestashop.com/versions/). This version includes a core of PrestaShop 9 and additional modules from [PrestaShop SA](https://prestashop.com/) that are compatible with this version:

- ps_accounts
- gamification
- ps_mbo
- ps_classic_edition

{{< cta "https://prestashop.com/versions#9.0.0-beta1" >}}Download PrestaShop 9.0 beta 1{{< /cta >}}

### Requirements for PrestaShop 9 beta 1

You need to have a fully working environment, either a server or Docker available, that meets the following requirements:

* PHP 8.1 (PHP up to 8.4 is supported)
* Composer 2
* Node.js 20 and NPM 10

Make sure to check all system requirements in the [documentation](https://devdocs.prestashop-project.org/9/basics/installation/system-requirements/). You must also have [Git](https://www.git-scm.com/) installed on your machine.

**Creating a custom ZIP**

If you don't want to use a Classic version, you can build your custom ZIP file with the PrestaShop 9 beta 1 installer, which has no PrestaShop SA modules included. To do so, use the [PrestaShop Release Creation](https://github.com/PrestaShop/PrestaShop/tree/develop/tools/build) tool.

1. Clone the [PrestaShop repository](https://github.com/PrestaShop/PrestaShop/tree/9.0.0-beta.1) from "9.0.0-beta.1" tag: `git clone git@github.com:PrestaShop/PrestaShop.git --branch "9.0.0-beta.1 ."`. Note: use a different directory name than `.` if you want to clone the repository to a different directory.
2. Run `composer create-release` or `php tools/build/CreateRelease.php` in the root directory of the PrestaShop repository.
3. The script will create a ZIP file with the PrestaShop 9 beta 1 distribution in the `tools/build/releases/9.0.0_date_time/` directory.

### Install PrestaShop 9

The installation process remains the same as in previous versions.

If you plan to test the new API, it's important to look at the tutorial explaining how to use it properly. [This tutorial]({{< relref "/news/posts/2024/meet-prestashop9-api" >}}) will give you a clear idea of how to work with the API effectively, ensuring you can get the most out of your testing.

## Your feedback is essential!

The public beta period is crucial in preparing for the upcoming release. During this period, we encourage everyone in the community to download this version and test how it behaves in their unique environment.

Here are some examples of how you can help:

* If you are a module or theme developer, check if those work well with this new version.
* If you notice any problem and you think the new version causes it, please [report it on GitHub](https://github.com/PrestaShop/PrestaShop/issues/new/choose).
* Don’t hesitate to [contribute to fixing bugs](https://devdocs.prestashop.com/9/contribute/contribute-pull-requests/) if you can!

**Your feedback on this beta is essential.** The more issues you report right now, the fewer bugs will be on the final release, which means fewer patch versions and fewer solutions to find on your (or your customer’s) online store.

If you have any questions about the version and its features, feel free to share them on [the PrestaShop project’s Slack](https://www.prestashop-project.org/slack/).

## Known issues

The [complete list of known bugs](https://github.com/PrestaShop/PrestaShop/issues?q=is%3Aopen+is%3Aissue+label%3A9.0.x+label%3ABug), visible through the link, is constantly updated on GitHub.

## Acknowledgements

A big thank you to over **65 people** who contributed between the PrestaShop 9 alpha 1 and the PrestaShop 9 beta 1.

Boris Hermans, ChronoBrake, clement-hvt, Codencode, CodeOlympus, ComonSoft, Damien Tupinier, Daniel Black, Daniel Hlavacek, David Gonzalez, dependabot[bot], Dindault Lucas, Dominik Shaim Ulrich, DylanDenizon, Fabien Papet, Florine Hea, Franck Lefèvre, idnovate, Jackoske, Jean-François Viguier, jeremie, Jin JI, John.R, JohnPAfr, Jonathan Danse, Jonathan Lelievre, Jonathan Renard, Julien Gissinger, Karlis Suvi, Krystian Podemski, ludovic cardinale, Markus Staab, Mathieu Ferment, Matthias Goudjil, Matthieu Rolland, Max, Maxime Poulain, Michal Macek, Morgan Pichat, Mouleeswaran Ganapathi, mrkalchemy, Nesrine Abdmouleh, Nicko, Nicolas Lœuillet,Thomas Roux, Olivier Le Corre, Prestaworks, PrestonBot, PululuK, r.fabiani, Robin Fischer, Romain PIOT, Romain Soulard, Shivam7-1, Simone Gennari, Sullivan, Tafaz, Tanguy JACQUET, Thibault Blivet, Thomas Delaporte, Thomas Leone, Tom Girou, William Entriken

...and a warm welcome to those who contributed for the first time!

We would also like to thank the people who contributed aside from code:
- Product management: Iliès Bahloul and Wahbi Maaoui.
- Quality assurance: Paul-Noël Cholot, Florine Hea, Aurélien Rita, Ingrid Ustaoglu, Theodoros Zampetoglou and Robin Fischer.
- UX design: Scott Cosio.
- Wording management and proofreading: Julie Varisellaz, and Patrick Coffre.

We also extend our gratitude to former PrestaShop SA employees for their contributions to this version:
Hibatallah Aouadni, Rosa Benouamer, Léa Delin, Hajer Elleuch, Zoé Finders, Faten Mhiri, Elodie Prokhoroff, Hana Rebai, Ines Sallemi, Mateus Shirlaw, Fabien Vallon, Anis Zouari.

## PrestaShop 9.0 beta 1

We extend our gratitude to all community members who tested the alpha version and provided feedback.

With the launch of the first beta, we are entering a [feature freeze period](https://en.wikipedia.org/wiki/Freeze_(software_engineering)). This means no new features will be added until the final release. Our focus will now be on fixing bugs, stabilizing the software, and preparing it for the final release.

Once again, we encourage everyone to download this version, test it, and provide feedback. Your input is invaluable in helping us deliver a stable and reliable software solution for the entire PrestaShop community.
