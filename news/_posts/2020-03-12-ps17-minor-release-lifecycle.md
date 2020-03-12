---
layout: post
title: "PrestaShop 1.7 minor release lifecycle"
subtitle: "The journey of a minor release of PS 1.7, step by step"
date:   2020-03-12 16:00:00
authors: [ MathieuFerment ]
icon: icon-code
tags:
 - releases
 - 1.7
 - beta
---


The journey of the release of PrestaShop 1.7.7.0 release has started. This moment is a nice opportunity to explain fully the PrestaShop minor releases lifecycle.

# The journey begins: Kanban and scope

Each minor version is defined by a feature scope, and this scope is defined as a number of github issues that we put into a [Kanban](https://help.github.com/en/github/managing-your-work-on-github/about-project-boards) (see [1.7.7 Kanban](https://github.com/PrestaShop/PrestaShop/projects/7)). How these issues are picked or sorted is the responsibility of the Product Team which spends a lot of time gathering feedback about all PrestaShop users to make sure the next minor version addresses the most important matters and needs.

For example 1.7.7.0 scope contained, but not only:
- Compatibility with php 7.3
- Migration and rework of Back-office Order pages
- Advanced currencies management

Although it is very hard to estimate the size of this scope, we try to size it in order for the development phase to last 4 months.

When this scope is completed - i.e all github issues have reached the "Done" column of the Kanban - we trigger the [Feature Freeze](https://en.wikipedia.org/wiki/Freeze_(software_engineering)).

We however accept that some issues remain in the Kanban, outside of "Done" column, only if they are bugs, no features. This is a Feature Freeze, not a Bug Freeze.

# Feature Freeze

Feature freeze means that we freeze the development of the version and enter a phase of stabilization, whose aim is naturally the release some time later.

We create a git branch from `develop` branch which will carry the work to be done until the release (for 1.7.7.0, the branch name is `1.7.7.x`). From this moment, only bug fixes can be merged into this branch.

Maintainers create an Alpha Build from the `1.7.7.x` branch codebase and deliver it to QA team which starts a huge test campaign. The goal of this campaign is to find and register all regressions[1] of this build.

When the test campaign ends, we populate the Kanban with all found bugs.
We fix all important regressions as fast as possible because when this point is reached, we can launch the [Beta phase](https://en.wikipedia.org/wiki/Software_release_life_cycle#Beta). Although it depends heavily on the number of found regressions, we try to size this phase to last one month.

For PrestaShop 1.7.7.0, QA team is currently finishing the test campaign.

# Beta period

When the branch reaches a point of maturity, which means only minor or trivial issues remain to be fixed, developers team create a Beta Build using the `1.7.7.x` branch codebase.

This Beta build is provided to anyone and we open a one-month long Beta period where we ask **your** help.

During this one month, we continue testing and fixing the 1.7.7.x (following the stabilization goal) but we know that we can only test and imagine a limited amount of usecases. The community however knows better than us all the possible ways to use PrestaShop to build a business.

So **you can help us** making this release a better and more stable release by testing this Beta build.

What does it mean, "to test a Beta build" ? We do not expect you to go in all pages and click on all buttons !
What we are interested in is your standard usage of the shop.

- If you use PrestaShop webservices for system integration, please run your integration on this beta build
- If you build 1.7 modules or themes, please test them on this beta build
- If you use heavily some of the modified/improved/rewored Back-office pages, please give the new behaviors a try
- If you customize some parts of the Shop, please test how your customizations behave on this new version

For example if you are a payment module developer, just installing your module on this Beta software,  processing one payment and telling us that everything is running as expected is already a great feedback !

If however you find suspicious behaviors, you can
 - [report this as a bug on GitHub](https://github.com/PrestaShop/PrestaShop/issues) (read [how to report issues](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/))
 - submit a bug fix by creating a [pull request](https://github.com/PrestaShop/PrestaShop/compare) (read the [contribution guidelines](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/))

# Release Candidate

When Beta period ends, we consider that all known bugs for this release are now registered into the Kanban. So the aim is clear: fix it all and we can ship.

We fix the remaining bugs (or merge the bug fixes submitted by the community) and maintainers deliver a Release Candidate Build using the `1.7.7.x` branch codebase. This will be the Release Candidate 1 also known as RC1.

This Build is provided to everyone, and we then start the **timer**. We wait for one week. During this week we continue testing and exploring the Build, trying to find anything that would not have been detected earlier and we hope that community will do the same.

By the end of this week, is no new regression has been reported, the RC1 becomes the final Release and **PrestaShop 1.7.7.0 is out !**

... However, I dont think it ever happened than RC1 was flawless.

Most of the time, some more bugs will be reported. When a new bug is reported, we fix it and we reset the timer. So there is a RC2, and if more bugs are reported, there is a RC3 … until no new bugs are reported.

Finally the latest built Release Candidate becomes the stable PrestaShop 1.7.7.0 software release.

# Summary

- The cycle begins when we start working on a minor version scope. When we complete the scope of this version, we trigger the Feature Freeze.

Expected duration: 4 months

- Following Feature Freeze an Alpha build is delivered and tested by QA team. QA team will then report all known defects and we will be able to plan then deliver a Beta build.

Expected duration: 1 month

- The Beta Build is open to everybody and we host a one-month long period for both maintainers and community to test the build.

Expected duration: 1 month

- At the end of the Beta period, we fix all the bugs that have been found and maintainers deliver a Release Candidate 1 build.
After a week, if no bugs have been reported in RC1 build, we deliver the stable release. However if bugs a reported, we fix them and deliver a RC2, and so on until we build a version with no reported issues. This last Release Candidate becomes the stable release.

Expected duration: from 1 week (if RC1 is flawless) to 1 month, possibly 2 months

### Calendar

If you sum all expected phases duration, you reach 6 months. This is why we expect to deliver 2 minor releases by year. 2 phases of development, 2 phases of feature freeze and 2 beta periods.

# Some more details

This lifecycle has been adopted by PrestaShop team in 2018 following issues we had in the release process of PrestaShop 1.7.3 and 1.7.4. It seems to have proven its qualities as PrestaShop 1.7.5 and 1.7.6 releases were a lot more robust. However this comes with a cost: all of this process requires a huge investment from the maintainers, the QA team, the Product team ... and the community ! Also the stable release involves a lot of people of the PrestaShop crew: marketing, partnerships, training, everybody participates in the launch, be it marketing material or communication. Launching a minor version is a huge work for all the PrestaShop company and community, which is why we cannot do it too often.

Another sidenote: we are very often asked "when will next minor version be out ?"
As you can understand from this process, there is no such date. The answer is "Version 1.7.X will be out when we deliver a Release Candidate that nobody reports bug for". This can take one week or three months.

# Further topics

It is possible than, reading this post, you ask yourself multiple questions:
- What about patch releases ? What is their software lifecycle ?
- What about next major release ? When will it happen ?
- What about native modules releases ? What is their software lifecycle ?

As this blog post is already long, we will cover these questions in another post soon. If you have questions you would like to add to this list, please write a comment, and we will do our best to answer it in this next post !


[1]: A regression is a bug that has been introduced by the latest code changes. For PrestaShop 1.7.7.0, this means a bug whose behavior is observable for 1.7.7.0 but was not observable in previous versions.
