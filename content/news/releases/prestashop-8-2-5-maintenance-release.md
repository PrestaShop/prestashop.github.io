---
layout: post
title:  PrestaShop 8.2.5 is available
subtitle: Security patch for branch 8.2.x
date: 2026-03-23
authors: [ PrestaShop ]
image: /assets/images/2026/03/banner_8.2.5_1200x627.jpg
opengraph_image: /assets/images/2026/03/banner_8.2.5_1200x627.jpg
twitter_image: /assets/images/2026/03/banner_8.2.5_1024x512.jpg
tags:
- version
- patch
- releases
- security
- "8.2"
- "8.2.x"
---

PrestaShop 8.2.5 is available. This security patch for the 8.2 branch addresses two vulnerabilities: a stored XSS issue in back office templates and an improper use of the validation framework.

![PrestaShop 8.2.5 is available!](/assets/images/2026/03/banner_8.2.5_1534x424.jpg)

## What is in this release?

Several back office templates contained variables that were not properly escaped. This is a **second-stage vulnerability**: it cannot be exploited on its own. An attacker would first need another way to inject content into the database, either through limited back office access or by chaining it with a separate, pre-existing vulnerability. Only then could the injected content be executed in the browser of an employee viewing the affected page. If your shop has no other known vulnerability and back office access is properly restricted, the practical risk is low. That said, this release ensures all relevant variables in back office templates are properly sanitized, closing these XSS vectors as a defense-in-depth measure.

A second fix corrects an improper use of the validation framework. While rated low severity, it strengthens the overall input validation layer by ensuring the framework is used consistently across the codebase.

## Security fixes

* **Stored XSS via unprotected variables in back office templates** (Severity: High 7.7/10)
  * Multiple stored Cross-Site Scripting (CWE-79) vulnerabilities in the back office: an attacker who can inject data into the database, via limited back office access or a previously existing vulnerability, can exploit unprotected variables in back office templates.
  * Identifier: [GHSA-35pf-37c6-jxjv](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-35pf-37c6-jxjv)

* **Improper use of validation framework** (Severity: Low 2.0/10)
  * Fix for improper use of the validation framework (CWE-1173).
  * Identifier: [GHSA-283w-xf3q-788v](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-283w-xf3q-788v)

Both issues are also fixed in PrestaShop 9.1.0, released simultaneously.

## Update to PrestaShop 8.2.5

Updating your shop to version 8.2.5 is highly recommended, especially given the high severity of the stored XSS vulnerability. You can use the [Update Assistant](https://github.com/PrestaShop/autoupgrade/releases/) to perform the update.

Always remember to make a full backup of your database and files before performing any update.

## Download

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/8.2.5" >}}Download PrestaShop 8.2.5 now!{{< /cta >}}

## PrestaShop 9

If you are looking for the latest features and a more modern architecture, we encourage you to check out [PrestaShop 9.1](https://prestashop.com/versions/). PrestaShop 9.1 brings a new default theme (Hummingbird 2.0), multi-carrier shipping, and a redesigned discount system on top of the modernized foundation introduced in PrestaShop 9.

Start planning your migration today to benefit from the latest innovations in the PrestaShop ecosystem.

## Acknowledgments

This security release was made possible thanks to the collaboration between the maintainers team and community experts.

We would like to thank [@clotairer](https://github.com/clotairer) from [202 ecommerce](https://www.202-ecommerce.com/) for helping with the security fixes included in this release.

Thank you to everyone who contributes to keeping PrestaShop secure!
