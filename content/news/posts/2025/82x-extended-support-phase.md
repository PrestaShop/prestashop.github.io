---
layout: post
title: "PrestaShop 8.2.x is now in the extended support phase"
subtitle: "What to expect for PrestaShop 8.2 and 9"
date: 2025-07-01
authors: [CyrilNavarro]
icon: icon-code
tags:
  - version
  - releases
  - 8.2.x
  - 9.0.x
---

Now that PrestaShop 9.0 is out, here is a focus on maintained branches of the PrestaShop project and what to expect.

## Reminder: PrestaShop branching strategy

In [August 2015](https://build.prestashop-project.org/news/2015/introducing-new-branching-model-prestashop/) PrestaShop adopted a new branching model for the project.

The model was refined over the years, for example with [this page on the developer documentation](https://devdocs.prestashop-project.org/9/contribute/contribution-guidelines/supported-branches/#bug-fixes-and-patch-branches) about what bugs do qualify for a patch version or the [Backward Compatibility Promise](https://github.com/PrestaShop/ADR/blob/master/0017-backward-compatibility-promise.md) that defines what changes can be introduced in a version, but we can say the model has lived quite well as the project is still following it in 2025.

## PrestaShop branches in 2025

As of today, June 2025, what are the maintained branches and how do they comply with this model?

On [PrestaShop main repository](https://github.com/prestashop/prestashop), three branches are maintained.

### 8.2.x

Branch `8.2.x` is the branch that gave birth to PrestaShop 8.2.0 and the patches that followed. As of today, last 8.2 version is [PrestaShop patch release 8.2.1](https://github.com/PrestaShop/PrestaShop/tree/8.2.1).

Following PrestaShop 9.0.0 release, the `8.2.x` branch has entered the security-only maintenance phase. It means that patch releases of PrestaShop 8.2.2 and newer will only be published to address security issues or to introduce new hooks if needed.

> **Warning:** In case of incident or significant issue, a new version on the `8.2.x` branch may still be released.

Consequently, please do not open a pull request against this branch unless it is a bug fix that solves a critical or security bug. Other pull requests will not be accepted.

This maintenance period will end when PrestaShop 10.0.0 is released. When this day comes, PrestaShop 8.2 will not be maintained anymore.

### 9.0.x

Branch `9.0.x` is the branch that introduced PrestaShop 9.0.0 and the patches that will follow. It was taken out from the `develop` branch when [PrestaShop 9.0 beta](https://build.prestashop-project.org/news/2025/prestashop-9-0-beta-release/) happened in February 2025.

Following PrestaShop 9.0.0 release, the `9.0.x` branch is now the supported patch branch. It receives critical bug fixes, security bug fixes, and same-version regression fixes. You can read more about a patch version lifecycle [here](https://build.prestashop-project.org/news/2020/ps17-patch-release-lifecycle/).

Patches for branch `9.0.x` will be delivered until PrestaShop 9.1.0 is released.

### develop

The `develop` branch is always the next minor or major release. As of today, code changes merged inside this branch will be shipped with the next PrestaShop 9 version: PrestaShop 9.1.0. When PrestaShop 9.1.0 feature freeze happens, a `9.1.x` branch will be created from `develop`, and `develop` will become the recipient for changes for the version after PrestaShop 9.1.0, version 10.0.0.

You can read more about a minor version lifecycle [here](https://build.prestashop-project.org/news/2020/ps17-minor-release-lifecycle/).

Most changes to the PrestaShop project should be submitted against this branch.

## Next versions to be released

As explained above, the two next versions of PrestaShop that can be expected are:

- [Patch version 9.0.1](https://github.com/PrestaShop/PrestaShop/issues/38880), release of the `9.0.x` branch
- Minor version **9.1.0**, release of the `9.1.x` branch (not created yet)
