---
layout: post
title:  PrestaShop 9.1.3 is available
subtitle: "Security maintenance for the 9.1 branch following the upstream Symfony 6.4.40 and Twig 3.26.0 releases."
date: 2026-05-21
authors: [ PrestaShop ]
icon: icon-leaf
image: /assets/images/2026/05/9.1.3_1534x434.png
opengraph_image: /assets/images/2026/05/9.1.3_1200x728.png
twitter_image: /assets/images/2026/05/9.1.3_1024x512.png
tags:
- version
- patch
- releases
- security
- "9.1"
- "9.1.x"
---

PrestaShop 9.1.3 is now available. This is a small security maintenance release for the 9.1 branch that brings in the latest patch versions of two key upstream dependencies, Symfony and Twig, following their coordinated security advisories published on 2026-05-20.

![PrestaShop 9.1.3 is available!](/assets/images/2026/05/9.1.3_1534x434.png)

## What is in 9.1.3?

The only changes in this release are dependency bumps:

* **Symfony** components updated from `6.4.38` to `6.4.40`, covering the advisories on `symfony/cache`, `symfony/dom-crawler`, `symfony/http-kernel`, `symfony/mailer`, `symfony/mime`, `symfony/monolog-bridge`, `symfony/routing`, `symfony/security-http`, `symfony/twig-bridge`, and `symfony/yaml`.
* **Twig** updated from `3.20.0` to `3.26.0`, covering the latest Twig sandbox and template engine fixes.

There are no changes to PrestaShop application code, no behavior changes, and no breaking changes. After updating, `composer audit` returns no known security advisories on the dependencies.

The practical impact of these advisories on a typical PrestaShop shop is expected to be limited: the affected components are rarely exposed to untrusted input in default usage. The most realistic risk lies in custom or third-party modules that feed user-supplied YAML, XML, or email-recipient data into these components, or that use the Twig sandbox to render untrusted templates. Even so, because PrestaShop 9 runs on a Symfony version that still receives upstream security support, we pull these fixes in as soon as they ship. It is the right thing to do, regardless of how narrow the exposure might be in a default setup.

## A note on PrestaShop 8

PrestaShop 8 is built on Symfony 4.4, which has reached end-of-life upstream and no longer receives Symfony security fixes. We are not planning a backport of these specific patches to the 8.x branch.

The same impact analysis applies on 8.x as on 9.x, so we expect the practical risk to be limited for most shops. If you would like a tailored review of your specific installation and module stack, we recommend contacting a [PrestaShop expert agency](https://www.prestashop-project.org/support/).

If at any point we assess that a specific vulnerability in this batch has critical or wide-reaching impact on PS8 stores, we will reconsider and act accordingly.

For shops looking to stay on a Symfony version that still receives upstream security support, we highly recommend planning an [upgrade to PrestaShop 9](https://devdocs.prestashop-project.org/9/basics/keeping-up-to-date/).

## Download PrestaShop 9.1.3

You can download the Classic version from the official PrestaShop website. This version includes the PrestaShop SA modules, such as PrestaShop Checkout, PrestaShop Account, PrestaShop Marketplace in the back office, PrestaShop CloudSync, PrestaShop Shipping, PrestaShop Marketing, and PrestaShop Socials.

{{< cta "https://prestashop.com/versions/" >}}Download PrestaShop 9.1.3 now!{{< /cta >}}

<details class="advanced-toggle">
<summary>Need a custom ZIP without PrestaShop SA modules?</summary>

If you don't want to use the Classic version, you can build your custom ZIP file with the PrestaShop 9.1.3 installer, which doesn't include any PrestaShop SA modules. You can read the instructions on how to do it in the [PrestaShop Release Creation Tool readme](https://github.com/PrestaShop/PrestaShop/tree/develop/tools/build).

</details>

## Update to PrestaShop 9.1.3

Because 9.1.3 only updates dependencies, this update is low-risk and we recommend applying it on any shop running 9.1.x. Before updating, ensure you create a full backup of your shop to safeguard your data.

Updating to the latest version of PrestaShop `9.1.x` is straightforward with the [Update Assistant](https://github.com/PrestaShop/autoupgrade/releases/). This tool streamlines the update process, ensuring your shop remains current with minimal effort.

If you encounter any problems during the update that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).

## Full changelog

- Core:
  - Improvement:
    - [#41515](https://github.com/PrestaShop/PrestaShop/pull/41515): Upgrade Symfony package to 6.4.40 and twig/twig to 3.26.0 (by [@cnavarro-prestashop](https://github.com/cnavarro-prestashop))

## Acknowledgments

Thank you to Symfony and Twig maintainers for their continuous work on keeping these foundational libraries secure
