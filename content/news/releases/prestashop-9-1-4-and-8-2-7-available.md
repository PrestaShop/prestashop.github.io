---
layout: post
title:  PrestaShop 9.1.4 and 8.2.7 are available
subtitle: "Two maintenance releases that ship the patched Faceted Search module (ps_facetedsearch v4.0.4) out of the box."
date: 2026-06-04
authors: [ PrestaShop ]
icon: icon-leaf
opengraph_image: /assets/images/theme/banner-ps-project.png
twitter_image: /assets/images/theme/banner-ps-project.png
tags:
- version
- patch
- releases
- security
- "9.1"
- "9.1.x"
- "8.2"
- "8.2.x"
---

PrestaShop 9.1.4 and 8.2.7 are now available. We are publishing these two maintenance releases together because they share a single purpose: making sure that a fresh download of either version ships with the patched [Faceted Search module (ps_facetedsearch)](https://github.com/PrestaShop/ps_facetedsearch) right away.

This follows the [security update for ps_facetedsearch]({{< relref "/news/posts/2026/security-update-faceted-search-module-ps-facetedsearch" >}}) we published earlier. The module fix was the important part, these two releases simply carry it into the bundled distributions so that new installations are protected from the start.

## What is in these releases?

There are no changes to PrestaShop Core in 9.1.4 or 8.2.7, and no behavior changes. The only difference compared to the previous versions is the bundled module set: both now include **ps_facetedsearch v4.0.4**, the version that fixes the security issue described in the advisory.

For PrestaShop 9.1.4 there are also changes in this release, but only dependency bumps:

* **Symfony** components updated to `6.4.41`.
* **Twig** updated to `3.27.1`, covering the latest Twig sandbox and template engine fixes.

In other words, if you download and install PrestaShop 9.1.4 or 8.2.7, you get the safe version of the Faceted Search module out of the box, without having to update it as a separate step.

## Download PrestaShop 9.1.4

You can download the Classic version from the official PrestaShop website:

{{< cta "https://prestashop.com/versions/#:~:text=9.1.4" >}}Download PrestaShop 9.1.4 Classic now!{{< /cta >}}

## Download PrestaShop 8.2.7

You can download the Classic version from the official PrestaShop website, or get the latest release from GitHub:

{{< cta "https://prestashop.com/versions/#:~:text=8.2.7" >}}Download PrestaShop 8.2.7 Classic now!{{< /cta >}}

## Updating an existing shop

For both branches, you can use the [Update Assistant](https://github.com/PrestaShop/autoupgrade/releases/) to move to the latest version. As always, make a full backup of your database and files before performing any update.

If you encounter any problems during the update that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).

## Full changelog

There are no PrestaShop Core code changes in 9.1.4 or 8.2.7. The only change is the bundled module set, which now ships **ps_facetedsearch v4.0.4**.

## Acknowledgments

Thank you to Frédéric Moreau (Antadis) and Gilles Caudal (Datalinx) for reporting the original issue, and to [@clotairer](https://github.com/clotairer) for helping with the validation and testing of the module fix that these releases carry forward.
