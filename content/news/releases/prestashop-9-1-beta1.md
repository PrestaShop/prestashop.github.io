---
layout: post
title:  "PrestaShop 9.1 Beta is open for feedback!"
subtitle: "Start testing Hummingbird 2, Multi-carrier, and improved Discounts."
date:   2026-01-07 10:00:00
authors: [ PrestaShop ]
icon: icon-compass
image: /assets/images/2026/01/PrestaShop-9.1.0-Beta1-LinkedIn_Facebook.png
opengraph_image: /assets/images/2026/01/PrestaShop-9.1.0-Beta1-LinkedIn_Facebook.png
twitter_image: /assets/images/2026/01/PrestaShop-9.1.0-Beta1-X.png
tags:
- news
- version
- beta
- minor
- releases
- "9.1"
- "9.x"
- "9.1.x"
---

PrestaShop 9.1 Beta is here, and it includes several major improvements that you can already start exploring and sharing feedback on. Your input is valuable for the final release of PrestaShop 9.1.

![PrestaShop 9.1](/assets/images/2026/01/PrestaShop-9.1.0-Beta1-BuildBlog.png)

---

We are excited to announce the availability of the first beta version of PrestaShop 9.1. This release brings significant changes, including a new default Hummingbird theme, a revamped discount system, and multi-carrier support.

{{% notice type="warning" %}}
Remember, this beta version is pre-release software. It is possible that you will encounter some issues. Do not use it in your production shop!
{{% /notice %}}

## What's inside PrestaShop 9.1 Beta?

Here are the main features you will find in this new version, along with more information for each one to help you prepare for 9.1.

### Hummingbird 2.0 Beta - new default theme

[Hummingbird 2](https://github.com/PrestaShop/hummingbird/) represents a major evolution in theme architecture, set to become the default standard in PrestaShop 9.1. It provides a structured, scalable foundation that empowers developers and agencies to built and customize online stores with ease. Built on a modern tech stack including Bootstrap 5, it prioritizes performance and inclusivity, achieving over 95% compliance with the European Accessibility Act (EAA).

![Hummingbird v2.0.0 Beta](/assets/images/2025/11/banner-hummingbird-v2-beta.png)

{{< cta-group >}}
{{< cta ref="/news/posts/2025/hummingbird-v2-beta" inline="true" >}}Learn more about Hummingbird 2.0{{< /cta >}}
{{< cta url="https://github.com/PrestaShop/hummingbird/discussions" inline="true" >}}Discussion & feedback{{< /cta >}}
{{< /cta-group >}}

Since Hummingbird is one of the biggest projects in PrestaShop, we decided to open a dedicated discussion space on [GitHub Discussions](https://github.com/PrestaShop/hummingbird/discussions) for you to share your feedback and report any issues you may encounter while testing it.

---

### Multi-carrier / Multi-shipping feature

PrestaShop 9.1 Beta addresses the complexity of the "1 order = 1 carrier" limitation by moving toward a shipment-based approach. This includes split and merge shipments, clearer displays across key touchpoints, and improved clarity for both merchants and customers.

<small>*Note: this feature is behind a feature flag.*</small>

{{< cta-group >}}
{{< cta url="https://www.youtube.com/watch?v=JljSmYH-vdg&t=775s" inline="true" >}}Watch the demo{{< /cta >}}
{{< cta url="/news/2026/introducing-shipments/" inline="true" >}}Read article{{< /cta >}}
{{< /cta-group >}}

---

### Discounts - improved discount management

Discounts have been redesigned to simplify their creation and improve performance and clarity compared to the legacy cart rules approach. The new structure is based on four types: Catalog, Cart, Free Shipping, and Free Gift.

<small>*Note: this feature is behind a feature flag.*</small>

{{< cta-group >}}
{{< cta url="https://www.youtube.com/watch?v=8PL0dwdRiho&t=1941s" inline="true" >}}Watch the demo{{< /cta >}}
{{< cta url="/news/2026/improved-discounts-system/" inline="true" >}}Read article{{< /cta >}}
{{< /cta-group >}}

---

{{% notice type="info" title="What is a feature flag?" %}}
Some 9.1 Beta features are experimental and are available under feature flags. You will need to enable them to test them in your environment. You can find these settings in the "New & Experimental Features" page in the Advanced Parameters menu.
{{% /notice %}}

### What else is new in PrestaShop 9.1 Beta?

Of course, there are many other improvements and bug fixes in this release.

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/9.1.0-beta.1" >}}See the full release notes{{< /cta >}}

## How to test PrestaShop 9.1

You can download a fully featured PrestaShop 9.1 Classic Beta 1 version from [here](https://github.com/PrestaShopCorp/prestashop-classic/releases/download/9.1.0-3.0-beta.1/prestashop_9.1.0-3.0-beta.1.zip). This version includes the PrestaShop 9.1 core, additional modules from [PrestaShop SA](https://prestashop.com/essentials/) compatible with this version, and integration with the PrestaShop Marketplace.

{{< cta "https://assets.prestashop3.com/dst/edition/corporate/9.1.0-3.0-beta.1/prestashop_edition_classic_version_9.1.0-3.0-beta.1.zip" >}}Download PrestaShop 9.1 Beta 1{{< /cta >}}

### Requirements for PrestaShop 9.1 Beta 1

You need a fully working environment, either a server or Docker, that meets the following requirements:

* PHP 8.1 (PHP up to 8.4 is supported)
* Composer 2
* Node.js 20 and NPM 10

Make sure to check all system requirements in the [documentation](https://devdocs.prestashop-project.org/9/basics/installation/system-requirements/). You must also have [Git](https://www.git-scm.com/) installed on your machine.

**Creating a custom ZIP**

If you prefer not to use the Classic version, you can build a custom ZIP file using the PrestaShop 9.1 Beta 1 installer, which does not include PrestaShop SA modules. To do so, use the [PrestaShop Release Creation](https://github.com/PrestaShop/PrestaShop/tree/develop/tools/build) tool.

1. Clone the [PrestaShop repository](https://github.com/PrestaShop/PrestaShop/tree/9.1.0-beta.1-build) using the "9.1.0-beta.1-build" tag: `git clone git@github.com:PrestaShop/PrestaShop.git --branch "9.1.0-beta.1-build" .`. Note: use a directory name other than `.` if you wish to clone the repository elsewhere.
2. Run `composer create-release` or `php tools/build/CreateRelease.php` in the root directory of the PrestaShop repository.
3. The script will create a ZIP file with the PrestaShop 9.1 Beta 1 distribution in the `tools/build/releases/9.1.0_date_time/` directory.

The installation process remains the same as in previous versions.

## Your feedback is essential!

We are focusing on stabilizing 9.1. You can help by testing this beta version and reporting regressions early so we can fix them before the final release.

### How you can help

1.  **Install PrestaShop 9.1 Beta** in a test environment.
2.  **Enable the relevant feature flags** to test the new capabilities.
3.  **Read the articles** linked above to better understand the new features and start testing.
4.  **Report issues** if you find any and share the feedback as early as possible.

When you find a problem, please [file a clear bug report on GitHub](https://github.com/PrestaShop/PrestaShop/issues/new/choose). Mention you tested the `9.1.0-beta.1` version and include steps to reproduce, environment details, and logs where applicable.

If you are a developer, you can also [submit a pull request](https://devdocs.prestashop.com/9/contribute/contribute-pull-requests/) to fix bugs.

We encourage you to share your feedback in the [dedicated GitHub discussion](https://github.com/PrestaShop/PrestaShop/discussions/40465) or on [Slack](https://www.prestashop-project.org/slack/).

## PrestaShop 9.1 - What's next?

Every version is the result of major contributions from our entire ecosystem, including our PrestaShop Experts. Stay tuned for the announcement of the 9.1 release.

Right now, we are focusing on stabilizing the beta version based on your feedback. The final release of PrestaShop 9.1 is planned for Q1 2026.
