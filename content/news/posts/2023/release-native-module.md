---
layout: post
title:  "The release process of a native module"
subtitle: "The journey of a native module release, step by step"
date:   2023-01-06
authors: [ MathieuFerment ]
icon: icon-code
tags:
 - version
 - releases
 - module
icon: icon-code
---

The PrestaShop software is the combination of the [core](https://github.com/prestashop/prestashop) and over 60 native modules, as well as a default theme.
This article aims to highlight how the [release process](https://www.prestashop-project.org/maintainers-guide/release-a-native-ps-module/) of a native module takes place.

## Branches `master` and `dev`

Each module has its own GitHub repositories, for example the [ps_facetedsearch](https://github.com/PrestaShop/ps_facetedsearch/) module or the [autoupgrade](https://github.com/prestashop/autoupgrade) module.

Each of these repositories host a `master` branch and a `dev` branch. The `dev` branch carries new changes for the incoming version while the `master` branch holds the code that has been released. The latest commit on the `master` branch is the tag for the last release.

So as explained in [release process](https://www.prestashop-project.org/maintainers-guide/release-a-native-ps-module/), when conditions are met, the first release step is to open a Pull Request to merge commits from `dev` into `master`, just like [this one](https://github.com/PrestaShop/ps_facetedsearch/pull/646).

## The Release Pull Request

This Pull Request that aims to merge commits from `dev` into `master` must be reviewed and tested.

Review must ensure the commit being transferred from one branch to another are the right one (git usage errors can result in incorrect branch states). Reviewers will also verify the conditions (described in the release process) are met and that the version number qualifies given the changes carried by the new version.

## Testing the new release

QA team members will fetch the code and proceed to testing. Module release tests are quite exhaustive.

The behavior of the new version will be tested on multiple PrestaShop versions (because a given module can be installed on multiple PrestaShop versions. For example [ps_facetedsearch release 3.8.0](https://github.com/PrestaShop/ps_facetedsearch/pull/646) can be installed on PrestaShop 1.7.6 and higher so tests were performed on multiple PrestaShop 1.7 versions.

Secondly, QA team also verifies the module upgrade happens smoothly. Modules have the ability to run specific scripts when updated, for example to enable or disable hooks or to update a given SQL table. So multiple usecases are tested: fresh installs of the new module or updates of an existing module in a lower version.

This test campaign might detect blocking bugs that prevent the release from happening: a new version of a module should be an improvement of a previous version, not a regression. Blocking bugs must be fixed by submitting Pull Requests against the `dev` branch, until the `dev` branch is acknowledged free of blocking bugs.

The test part is the longest and most complex part as it is the key for successfull and stable updates.

## Release of the new version

When the Release Pull Request is merged, the last steps of the [release process](https://www.prestashop-project.org/maintainers-guide/release-a-native-ps-module/) can be performed to complete the process: create a GitHub release that will be picked up by [PrestaShop Modules Distribution API](https://github.com/PrestaShop/distribution-api) which is polled by PrestaShop instances for new updates and downloads, and proceed to GitHub milestones and releases curation.
