---
layout: post
title:  "Release Of PrestaShop 1.7.8.2"
subtitle: "MAINTENANCE VERSION OF THE 1.7.8.X BRANCH"
date:   2021-12-07 14:00:00
authors: [ PrestaShop ]
image: /assets/images/2021/12/1.7.8.2_banner.jpg
icon: icon-checked
tags:
- 1.7
- 1.7.8.x
- version
- patch
- releases

---

The ongoing work on security for PrestaShop software continues. We have identified and fixed a new security issue, it has been decided to deliver a new maintenance release for 1.7.8.X branch.

*![1.7.8.2 is available!](/assets/images/2021/12/1.7.8.2_banner.jpg)*

This  release also fixes 1 regression reported on version 1.7.8.X.

We suggest upgrading your shop quickly in order to benefit from these fixes. Of course, don’t forget to backup before.

Reminder: the 1-Click Upgrade module’s latest version is v4.13.0, don’t forget to upgrade it.


## Main fixes

Below is the one regression issue we fixed in this version :

- Fix wishlist button disappearance on the category page while using any filter in faceted search.([#26327](https://github.com/PrestaShop/PrestaShop/issues/26327))

Read the ([full changelog here](https://github.com/PrestaShop/PrestaShop/releases/tag/1.7.8.2)).


## Security fix

One security fix have been included in this patch version:

- Blind SQLi using Search filters ([security advisory]([https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-6xxj-gcjq-wgf4](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-6xxj-gcjq-wgf4)))

More information about why it is important to update:

- [SQL Injection (CWE-89)](https://cwe.mitre.org/data/definitions/89.html)

## ## Acknowledgments

Contributors to this patch version, from both the Core team and the community at large:

Alexandre Bru, Mathieu Ferment, Pierre Rambaud, Valentin Szczupak.

Thank you!

[Download PrestaShop 1.7.8.2 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}

{: .text-center}

Since version 1.7.8.2 is a “patch” update to version 1.7.8.1, upgrading from any 1.7.8 version will be easy: features will work better, and modules & themes which worked fine on 1.7.8.x will work just as well with 1.7.8.2. Upgrades from a standard 1.7.x version should work just as well.
