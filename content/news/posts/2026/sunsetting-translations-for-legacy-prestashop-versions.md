---
layout: post
title: "Sunsetting translations for legacy PrestaShop versions"
subtitle: "The legacy translation platform is being retired"
date: 2026-03-23
authors: [ PrestaShop ]
icon: icon-leaf
opengraph_image: /assets/images/theme/banner-ps-project.png
twitter_image: /assets/images/theme/banner-ps-project.png
tags:
 - news
---

The **translations.prestashop.com** service will be **shut down on April 1st, 2026**. For stores running PrestaShop 1.6 and older, this means language packs will no longer be generated or available for download. For newer versions (1.7, 8, and 9), translations will continue to work as usual through a different workflow.

## What is this translations service?

The [translations.prestashop.com](http://translations.prestashop.com) service is the platform that older PrestaShop versions used to download language packs. When a merchant installed or updated a language in their store, the request was served by this service.

For newer versions (1.7 and later), translations are handled through a different workflow and are no longer dependent on this platform.

## What is changing?

We are retiring the translation workflow for **PrestaShop 1.6 and all prior versions**. Concretely, this means:

- Language packs for PrestaShop 1.6 and older **will no longer be generated or served**
- Stores running PrestaShop 1.6 or earlier **will no longer be able to upload new translations**
- It will no longer be possible to **create new shops** using translation packs from these versions

## Why are we making this change?

Maintaining translation infrastructure for versions that reached end of life years ago comes with a real cost. The tooling, build pipelines, and compatibility layers required to keep generating these legacy packs consume resources that could be better invested in actively supported versions.

PrestaShop 1.6 reached its end of life back in **June 2019**, and versions before it even earlier. Continuing to maintain translation services for software that no longer receives security or feature updates is no longer sustainable.

## What about supported versions?

**Nothing changes for PrestaShop 1.7, 8, and 9.** The translation workflow and language pack downloads will continue to work exactly as they do today. Community members can keep contributing translations through [Crowdin](https://crowdin.com/project/prestashop-official), and merchants can keep downloading and installing language packs for all supported versions.

## What should merchants do?

If your store runs on PrestaShop 1.6 or older, don't worry: **your store will continue to work** and any translations already installed will remain in place. You simply won't be able to download new or updated language packs from the service after April 1st.

That said, PrestaShop 1.6 has been end of life since June 2019 and no longer receives security updates. If you haven't started planning an upgrade yet, this is a good time to consider moving to [PrestaShop 9](https://prestashop.com/prestashop9), which offer significant improvements in performance, security, and many new features. Upgrading will ensure you continue to receive support, updates, and access to the latest translations.

## Looking ahead

This change is part of an ongoing effort to focus the project's resources where they matter most: supporting the versions that merchants actively use today. By retiring legacy components, we can invest more in improving the experience for the current and future versions of PrestaShop.
