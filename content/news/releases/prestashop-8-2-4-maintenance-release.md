---
layout: post
title:  PrestaShop 8.2.4 is available
subtitle: Security improvements for branch 8.2.x
date: 2026-02-02
authors: [ PrestaShop ]
image: /assets/images/2026/01/banner_8.2.4_1200x627.jpg
opengraph_image: /assets/images/2026/01/banner_8.2.4_1200x627.jpg
twitter_image: /assets/images/2026/01/banner_8.2.4_1024x512.jpg
tags:
- version
- patch
- releases
- security
- "8.2"
- "8.2.x"
---

PrestaShop 8.2.4 is available. This maintenance release for the 8.2 branch brings security improvements to further harden your store.

![PrestaShop 8.2.4 is available!](/assets/images/2026/01/banner_8.2.4_1534x424.jpg)

## Why this release now?

Security is a core priority for the PrestaShop project. Even when risks are moderate, we believe in continuous improvement. This release addresses one specific topic to strengthen the authentication process.

**PrestaShop 9.0.3**, released simultaneously, also includes the fix for the time-based enumeration vulnerability.

## Security fixes

This release fixes one security issue:

*   **Time based enumeration in FO login form** (Severity: Moderate 5.3/10)
    *   A time-based user enumeration vulnerability in the user authentication functionality allowed attackers to determine whether a customer account exists by measuring response times.
    *   Identifier: [GHSA-67v7-3g49-mxh2](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-67v7-3g49-mxh2)

## Update to PrestaShop 8.2.4

Updating your shop to version 8.2.4 is highly recommended. You can use the [Update Assistant](https://github.com/PrestaShop/autoupgrade/releases/) to perform the update easily.

Always remember to make a full backup of your database and files before performing any update.

## Download

You can download PrestaShop 8.2.4 from the release page.

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/8.2.4" >}}Download PrestaShop 8.2.4 now!{{< /cta >}}

## PrestaShop 9

If you are looking for the latest features and a more modern architecture, we encourage you to check out [PrestaShop 9](https://prestashop.com/versions/). PrestaShop 9 offers significant improvements and a hardened security architecture. It marks a major step forward for the platform.

Start planning your migration today to benefit from the latest innovations in the PrestaShop ecosystem.

## Acknowledgments

This security release was made possible thanks to the collaboration between the maintainers team and community experts.

Thank you to everyone who contributes to keeping PrestaShop secure!
