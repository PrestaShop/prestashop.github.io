---
layout: post
title: "Cleaning up old branches: a routine maintenance for a healthier repository"
subtitle: "We are removing old branches from our repository"
date: 2026-02-10
authors: [kpodemski]
icon: icon-code
opengraph_image: /assets/images/theme/banner-ps-project.png
twitter_image: /assets/images/theme/banner-ps-project.png
tags:
- news
- development
- maintenance
---

Keeping the PrestaShop repository tidy is part of routine maintenance. In January 2026, we are cleaning up a few stale branches from our [main repository](https://github.com/PrestaShop/PrestaShop/) that are no longer used for releases or active development.

## Which branches are being removed

The affected branches are:

* 1.7.7.x
* 1.7.8.x
* 8.0.x
* 8.1.x

## What this means for supported versions

This cleanup does not change what's available in git, and it does not impact stores running older versions. It's only about removing old development branches that we no longer maintain.

At the moment, we actively support two versions:

* **PrestaShop 9.0**, up until we release **PrestaShop 9.1**.
* **PrestaShop 8.2.x**, with **security patches only**, up until we release **PrestaShop 10**.

We currently plan to introduce **PrestaShop 9.1** at the beginning of March, followed by **PrestaShop 9.2** later this year.

## How to keep using older versions safely

If you need a specific older version, use **git tags** (or a pinned release artifact) instead of relying on moving branches.

Example with a tag checkout:

```
git clone https://github.com/PrestaShop/PrestaShop.git
cd PrestaShop
git checkout 8.1.7
```

## Action required (if you automate deployments)

If your CI or deployment scripts are pulling from maintenance branches, please update them now.

Branches are for development and can disappear as part of repository maintenance. For automation, always pin to a specific version using tags.
