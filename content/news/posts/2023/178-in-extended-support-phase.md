---
layout: post
aliases: ['/news/2023/178-lts-80/']
title:  "PrestaShop 1.7.8 is now in the extended support phase"
subtitle: "What to expect for PrestaShop 1.7 and 8"
date:   2023-01-05
authors: [ MathieuFerment ]
icon: icon-code
tags:
 - version
 - releases
 - 1.7.8.x
 - 8.0.x
icon: icon-warning
---

Now that PrestaShop 8.0 is out, here is a focus on maintained branches of the PrestaShop project and what to expect.

## Reminder: PrestaShop branching strategy

In [August 2015]({{< relref "/news/posts/2015/introducing-new-branching-model-prestashop" >}}) PrestaShop adopted a new branching model for the project.

The model was refined over the years, for example with [this page on the developer documentation](https://devdocs.prestashop-project.org/8/contribute/contribution-guidelines/supported-branches/#bug-fixes-and-patch-branches) about what bugs do qualify for a patch version or the [Backward Compatibility Promise](https://github.com/PrestaShop/ADR/blob/master/0017-backward-compatibility-promise.md) that defines what changes can be introduced in a version, but we can say the model has lived quite well as the project is still following it in 2023.

## PrestaShop branches in 2023

As of today, January 2023, what are the maintained branches and how do they comply with this model?

On [PrestaShop main repository](https://github.com/prestashop/prestashop), three branches are maintained.

### 1.7.8.x

Branch `1.7.8.x` is the branch that gave birth to PrestaShop 1.7.8.0 and the patches that followed. As of today last 1.7.8 version is [PrestaShop patch release 1.7.8.8]({{< relref "/news/releases/prestashop-1-7-8-8-maintenance-release" >}}).

Following PrestaShop 8.0.0 release, the `1.7.8.x` branch has entered the security-only maintenance phase. As detailed in [the article published in December 2021]({{< relref "/news/posts/2021/prestashop-beyond-1-7" >}}), this means that patch releases of PrestaShop 1.7.8 will only be published if critical bugs are reported or if security fixes are needed.

Consequently, please do not open a pull request against this branch unless it is a bug fix that solves a critical or security bug. Other pull requests will not be accepted.

This maintenance period will end when PrestaShop 9.0.0 is released. When this day comes, PrestaShop 1.7 will not be maintained anymore.

### 8.0.x

Branch `8.0.x` is the branch that introduced PrestaShop 8.0.0 and the patches that will follow. It was taken out from the `develop` branch when [PrestaShop 8.0 freeze]({{< relref "/news/posts/2022/prestashop-feature-freeze-v8" >}}) happened in June 2022.

Following PrestaShop 8.0.0 release, the `8.0.x` branch is now the supported patch branch. It receives critical bug fixes, security bug fixes, and same-version regression fixes. You can read more about a patch version lifecycle [here]({{< relref "/news/posts/2020/ps17-patch-release-lifecycle" >}}).

Patches for branch `8.0.x` will be delivered until PrestaShop 8.1.0 is released.

### develop

The `develop` branch is always the next minor or major release. As of today, code changes merged inside this branch will be shipped with the next PrestaShop 8 version: PrestaShop 8.1.0. When PrestaShop 8.1.0 feature freeze happens, an `8.1.x` branch will be created from `develop`, and `develop` will become the recipient for changes for the version after PrestaShop 8.1.0, version 9.0.0.

You can read more about a minor version lifecycle [here]({{< relref "/news/posts/2020/ps17-minor-release-lifecycle" >}}).

Most changes to the PrestaShop project should be submitted against this branch.

## Next versions to be released

As explained above, the two next versions of PrestaShop that can be expected are:
- [Patch version 8.0.1](https://github.com/PrestaShop/PrestaShop/issues/30128), release of the `8.0.x` branch
- [Minor version 8.1.0](https://github.com/PrestaShop/PrestaShop/issues/30719), release of the `8.1.x` branch not created yet

If a critical bug or a security issue is reported on PrestaShop 1.7.8, a patch version 1.7.8.9 will be released.
