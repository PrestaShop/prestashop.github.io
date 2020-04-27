---
layout: post
title: "PrestaShop 1.7 patch release lifecycle"
subtitle: "The journey of a patch release of PS 1.7, step by step"
date:   2020-03-20 16:00:00
authors: [ MathieuFerment ]
icon: icon-code
tags:
 - releases
 - 1.7
 - beta
---


Following previous post about [Minor Release Lifecycle](https://build.prestashop.com/news/ps17-minor-release-lifecycle/), here is more explanations about software lifecycle at PrestaShop, focusing on patch releases and the release process.

This blog post explains:
- The detailed lifecycle for PrestaShop patch releases
- The decision process for patch releases
- The Maintainance scope

## Patch release lifecycle

Patch releases are "maintainance" releases: they provide bug fixes and security patches, but do not provide enhancements or new features. They are part of a necessary maintenance process.

### Scope of maintainance

When a minor version is released, such as PrestaShop 1.7.7.0, the related branch becomes the latest and maintained branch.
This means that, when PrestaShop 1.7.7.0 is out :
- There will be no more PrestaShop 1.7.6 patch releases, for either bug or security issues[(1)](#glossary)
- There might be, if necessary, patch releases for PrestaShop 1.7.7. (which means: 1.7.7.1, 1.7.7.2 and so on ...) until next minor release is delivered (PrestaShop 1.7.8)

When PrestaShop 1.7.7.0 will be released, PrestaShop 1.7.6 will reach its [End Of Life](https://en.wikipedia.org/wiki/End-of-life_(product)), just like all previous minor versions.

### When is it decided to release a patch ?

A patch release is scheduled when "trigger bug" is reported:
- A major bug in maintained branch
- A security issue in maintained branch

As of today, since PrestaShop 1.7.7.0 is still not released, the maintained branch is `1.7.6.x`. Latest patch release is PrestaShop 1.7.6.5.

This means that **work on 1.7.6.6 release will start if a community contributor or the QA team reports a major regression in PrestaShop 1.7.6.5 or a security issue[(2)](#glossary).**

If minor or trivial regressions are reported for PrestaShop 1.7.6, they are scheduled to be fixed in next minor version. Minor or trivial bugs are considered not important enough to trigger a patch release process which is, as explained below, a costly process for both the PrestaShop company and the PrestaShop community.

From the moment a "trigger bug" is reported, there start a *6 weeks long timer*. Our process states that a patch release must be delivered within these 6 weeks.

### What happens in six weeks

From the moment the 6 weeks timer is started, Product Team register into the dedicated Kanban (today it means the [1.7.6. Kanban board](https://github.com/PrestaShop/PrestaShop/projects/4)) the bugs to be fixed in the patch release, whether they are trivial, minor or major.

Then maintainers start working on fixing them (or merging the bug fixes submitted by the community).

Obviously, security issues are not processed the same way: when a vulnerability is reported, it is being explored and it is being fixed in a hidden manner in order to make sure hackers unaware of the vulnerability do not hear about it. We use [GitHub Security Advisories](https://help.github.com/en/github/managing-security-vulnerabilities/about-github-security-advisories) and temporary private forks to collaborate on the fix. Maintainers only publish the advisory and the fix on the day of the release[(2)](#glossary), following [responsible disclosure](https://en.wikipedia.org/wiki/Responsible_disclosure) principle.

When all of the bug fixes for the target patch version are merged, and all teams pressure themselves to make it happen before the end of the 6 weeks, maintainers deliver a Release Candidate to QA team for the standard patch release test campaign. This campaign aims to find whether this patch introduces new bugs.

If the campaign reports that no bugs are found, the new patch release is delivered!

## Why maintain only the latest minor version ?

As explained above, PrestaShop only maintains one minor version.
When PrestaShop 1.7.7.0 is out, PrestaShop 1.7.6 will be considered [End Of Life](https://en.wikipedia.org/wiki/End-of-life_(product)) and not maintained anymore. No more bug fixes for this version, no more patch releases, not even security releases[(2)](#glossary).

This project management rule might be seen as harsh, because it means that if you do not upgrade to PrestaShop 1.7.7.0, you shop will use an outdated and unmaintained version and become possibly vulnerable to newly found security issues.

However this rule is actually dictated by the current very wide scope of the PrestaShop project. Very often, maintainers are working both on a patch release and the next minor release. For example one week ago work was happening on both 1.7.6.5 patch release development and 1.7.7.0 Feature Freeze. The scope of PrestaShop project is very wide which is why maintainers need to focus their efforts on the most important components, so the scope ony contains these two versions.

We are working to make the maintainers team grow (and be able to handle a wider scope) with not only new PrestaShop employees, [but also with external people](https://github.com/PrestaShop/open-source/issues/11).
When the team grows, it could be able to provide patch releases on more versions, like two or three of them, or provide [Long Term Support](https://en.wikipedia.org/wiki/Long-term_support) releases.

### Why six weeks, and not eight or two ?

This six weeks timeslot is actually a balanced answer to a complex issue : the benefits of releasing often versus the cost of a release.

**There are actually 3 sets of costs to a release.**

The first is the cost of building it.

Each PrestaShop patch release is a costly operation. It involves:
- Maintainers time to create, validate and merge the bug fixes
- QA team time to validate bug fixes
- Maintainers time to deliver the builds and trigger the release process (see below)
- QA team time to run the patch test campaign

Some other PrestaShop teams also dedicate some time to communicate about the release (marketing team, partnership team ...).

The second set of costs is the cost of delivering it.

From the outside it might look "just delivering the ZIP archive".

**Actually the release process is a lot more complex than just delivering the ZIP archive to the community.**

Multiple systems in PrestaShop rely on external services needing proper configuration:

- Link with Addons marketplace must be established as modules, both native and third parties, can be downloaded from it, and modules compatibility ranges must be updated
- Localization packs must be updated for new version
- Autoupgrade module and process must be updated for new version
- A release note and a Changelog must be generated, reviewed and published
- maintainers also provide [docker images](https://github.com/PrestaShop/docker) for PrestaShop which need to be updated for new version

Finally, **releasing a new version is consuming community time**.

- Developers, webmasters, agencies must update the shops they host and maintain
- Module and theme developers need to check that their modules is compatible with latest version
- Host providers and SaaS providers using PrestaShop must update their offers and configurations

Delivering patch releases more often is an idea regularly being discussed in all teams (2 weeks ? 4 weeks ?). But increasing the release frequency of PrestaShop would pressure the community as it would require more of their time (accordingly for more quality).

This is why we think six weeks is a good balance between time-to-market, users needs and community / project resources cost.

## Further topics

After having read this article, you may be asking yourself multiple questions:

- What about next major release? When will it happen?
- What exactly involves this release process which is so costly ?

As this blog post is already long, these questions might be covered in another post soon. If you have questions you would like to add to this list, please write a comment, and we will do our best to answer it in this next post!

#### Glossary

1: If a massive vulnerability is found, this rule might be bypassed and a patch releases delivered for previous versions, but this would be only done for critical vulnerabilities.

2: In case of 'regular' security vulnerabilities this process will be applied. However if a critical vulnerability was found on older, unmaintained versions, maintainersmight break this rule and patch these older versions as we also care about the community still using these old versions.