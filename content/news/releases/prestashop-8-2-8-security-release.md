---
layout: post
title:  PrestaShop 8.2.8 is available
subtitle: "Security release for the 8.2 branch, fixing five vulnerabilities reported through coordinated disclosure."
date: 2026-08-18 06:00:00
authors: [ PrestaShop ]
icon: icon-leaf
image: /assets/images/2026/08/banner_8.2.8_1200x627.jpg
opengraph_image: /assets/images/2026/08/banner_8.2.8_1200x627.jpg
twitter_image: /assets/images/2026/08/banner_8.2.8_1024x512.jpg
tags:
- version
- patch
- releases
- security
- "8.2"
- "8.2.x"
---

PrestaShop 8.2.8 is available. This is a security-only release for the 8.2 branch that fixes five vulnerabilities, three of them rated High. Updating as soon as possible is strongly recommended.

![PrestaShop 8.2.8 is available!](/assets/images/2026/08/banner_8.2.8_1534x424.jpg)

## Security fixes

* **Formula injection in CSV exports** (Severity: High 8.3/10, CWE-1236)
  * Identifier: [GHSA-w6j9-q9rq-wrqg](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-w6j9-q9rq-wrqg)
  * Exported values were written as-is, so a crafted value could be interpreted as a formula by the spreadsheet application opening the file. The person at risk is whoever opens the export: a merchant, an employee, an accountant, or a customer receiving their GDPR export.
* **Server-Side Request Forgery through image URLs in the CSV import** (Severity: High 8.2/10, CWE-918)
  * Identifier: [GHSA-xrwj-pq6w-f8m4](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-xrwj-pq6w-f8m4)
  * Image addresses listed in an imported CSV file were downloaded by the server without being checked, so it would fetch whatever it was pointed at. The import permission is required, so a privileged back office account is needed.
* **Client IP address can be spoofed through the X-Forwarded-For header** (Severity: High 7.3/10, CWE-290)
  * Identifier: [GHSA-2cr4-vw9p-pjvf](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-2cr4-vw9p-pjvf)
  * PrestaShop read the visitor-controlled end of the forwarding header instead of the part appended by the shop's own proxy. Any visitor could therefore claim any IP address, which undermines the maintenance-mode allow-list, audit logs, and third-party protections such as geolocation blocking or rate limiting.
* **SQL injection through back office list filters** (Severity: Medium 6.5/10, CWE-89)
  * Identifier: [GHSA-whxq-pxj5-qq7v](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-whxq-pxj5-qq7v)
  * Filter names used by back office listings were not sufficiently validated before being used to build the database query. A logged-in employee, even one with the most restricted built-in profile, could read data from anywhere in the shop database.
* **Improper access control on the back office notifications endpoint** (Severity: Medium 4.3/10, CWE-862)
  * Identifier: [GHSA-jf3w-9rmr-5rcr](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-jf3w-9rmr-5rcr)
  * The data behind the notification panel was served without checking employee permissions, exposing recent customer and order information to any logged-in employee. The endpoints now require read permission on orders, customers, or customer service threads.

Full technical details, attack vectors, and workarounds are documented in each advisory.

These issues are also fixed in PrestaShop 9.1.5, released simultaneously.

### A note on your proxy configuration

Correct IP handling is a shared responsibility between the application and the hosting setup, so this applies whether or not you have updated. If your shop runs behind a reverse proxy, a load balancer, or a CDN, make sure the front-end proxy overwrites the forwarding header with the address it actually sees, rather than passing on whatever the visitor sent. The [X-Forwarded-For advisory](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-2cr4-vw9p-pjvf) contains ready-to-use Nginx and Apache configuration snippets, along with guidance for CDN users.

## Update to PrestaShop 8.2.8

Updating your shop to version 8.2.8 is highly recommended. You can use the [Update Assistant](https://github.com/PrestaShop/autoupgrade/releases/) to perform the update.

Always remember to make a full backup of your database and files before performing any update.

If you encounter any problems during the update that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).

## Download

{{< cta "https://prestashop.com/versions/#:~:text=PrestaShop%208.2.8" >}}Download PrestaShop 8.2.8 now!{{< /cta >}}

## PrestaShop 9

If you are looking for the latest features and a more modern architecture, we encourage you to check out [PrestaShop 9.1](https://prestashop.com/versions/). PrestaShop 9.1 brings a new default theme (Hummingbird 2.0), multi-carrier shipping, and a redesigned discount system on top of the modernized foundation introduced in PrestaShop 9.

As a reminder, [PrestaShop 8.2.x is in its extended support phase]({{< relref "/news/posts/2025/82x-extended-support-phase" >}}) and now receives only security and critical fixes. Start planning your migration today to benefit from the latest innovations in the PrestaShop ecosystem.

## Full changelog

- Core:
  - Improvement:
    - #311: Security fixes for 8.2.8 (by [@matthieu-rolland](https://github.com/matthieu-rolland))

## Acknowledgments

This security release was made possible thanks to a coordinated disclosure process between external researchers and the PrestaShop maintainers team.

We would like to thank **Suphawith Phusanbai (ILOVEPEPPERONI)** for reporting the formula injection in CSV exports, [**lrui1**](https://github.com/lrui1) for the detailed report and proof of concept on the SSRF in the CSV import, **Pedro Gabaldón Juliá** of ITRESIT for reporting the X-Forwarded-For spoofing issue, **Robert Scherer** for reporting the access control issue on the notifications endpoint, and **Savio** at [Doyensec](https://www.doyensec.com/) for verifying and reporting the SQL injection, which was discovered by Claude (Anthropic) as part of Anthropic's Coordinated Vulnerability Disclosure programme.

On the maintainers side, thank you to [@matthieu-rolland](https://github.com/matthieu-rolland) for handling the advisories and preparing the patches, and to [@clotairer](https://github.com/clotairer) for his help with the analysis, validation, and testing of the fixes.

{{< contributors-grid "matthieu-rolland" "clotairer" >}}
Thank you to everyone who contributes to keeping PrestaShop secure! Reporting responsibly, reviewing a patch, or testing a fix before it ships all make a real difference.

Want to help? [Start contributing today](https://www.prestashop-project.org/get-involved/), or report a security issue to security-core@prestashop.com.
{{< /contributors-grid >}}
