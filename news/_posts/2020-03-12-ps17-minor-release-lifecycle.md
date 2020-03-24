---
layout: post
title: "PrestaShop 1.7 minor release lifecycle"
subtitle: "The journey of a minor release of PS 1.7, step by step"
date:   2020-03-24 14:00:00
authors: [ MathieuFerment ]
icon: icon-code
tags:
 - releases
 - 1.7
 - beta
---


The journey of the release of PrestaShop 1.7.7.0 has started. This moment is a nice opportunity to explain PrestaShop's minor release lifecycle.

## The journey begins: Kanban and scope

Each minor version is defined by a feature scope, that is, a number of GitHub issues that we put in a version [Kanban](https://help.github.com/en/github/managing-your-work-on-github/about-project-boards) (see [1.7.7 Kanban](https://github.com/PrestaShop/PrestaShop/projects/7)). How these issues are picked or sorted is the responsibility of the Product Team, who spends a lot of time gathering feedback from the PrestaShop community to make sure the next minor version addresses the most important needs.

For example 1.7.7.0 scope contained, but not only:

- Compatibility with php 7.3
- Migration and rework of Back-office Order pages
- Advanced currencies management

Although it is very hard to estimate the size of this scope, we try to size it in order for the development phase to last 4 months([1](#glossary)).

Once this scope has been is completed – i.e all issues have reached the "Done" column of the Kanban – the project reaches the [Feature Freeze](https://en.wikipedia.org/wiki/Freeze_(software_engineering)) stage.

During this phase, no new items can be added to the version's scope, unless they are bugs related to code changes performed during the development of this version – called _regressions_([2](#glossary)). However, this is a _Feature Freeze_, not a _Code Freeze_, so some older bugs may be added to the scope if it is considered opportune to fix them quickly before the release is out (e.g. security fixes).

## Feature Freeze

Feature freeze means that all features of this version have been done and no new ones may be accepted in its scope. The project enters a phase of _stabilization_ whose aim is to identify and fix all regressions([2](#glossary)) before it's released.

Once this phase is started, Core maintainers create a git branch from `develop` branch which will carry the work to be done until the release (for 1.7.7.0, the branch name is `1.7.7.x`). From this moment on, only bug fixes can be merged into this branch. Incidentally, this is also the branch where all future patch versions for this minor version will be developed on (hence the `.x` at the end).

Also, since stabilization is performed in a separate branch (`1.7.7.x` in our example), development for the next minor release (1.7.8) can start on the `develop` branch! This means that the development of any given minor version development actually starts (albeit slowly) precisely the moment the previous version enters feature freeze.

The QA team picks up the latest [nightly build](https://nightly.prestashop.com/) and starts a huge test campaign. The goal of this campaign is to find and register all regressions of this build.

As the QA team verifies the build, they will populate the Kanban with all the bugs they find.
All important regressions must be fixed quickly. Although it depends heavily on the number of regressions found, this phase should last about one month. Once all major bugs have been fixed, the [Beta phase](https://en.wikipedia.org/wiki/Software_release_life_cycle#Beta) can be launched.

For PrestaShop 1.7.7.0, QA team is currently finishing the test campaign.

## Public Beta period

When the branch reaches a point of maturity, which means only minor or trivial issues remain to be fixed, maintainers can create a Beta build using the `1.7.7.x` branch codebase.

This Beta build is released publicly. During the month following this release, the community is **very strongly encouraged to test it** and give their feedback quickly: the sooner a problem is identified, the sooner it will be fixed. Remember that experts agree that the cost of fixing a bug grows exponentially with time – it is much cheaper to spend time now to ensure everything works well before the final release is out than to discover a bug in production later and lose business while a patch is prepared.

During this one month, we continue testing and fixing the 1.7.7.x (following the stabilization goal) but we know that we can only test and imagine a limited amount of usecases. The community however knows better than us all the possible ways to use PrestaShop to build a business.

So **you can help** make this release better and more stable by testing it during the Beta phase.

What does it mean to test a Beta build? We don't expect you to go in all pages and click on all buttons!
Instead, explore _your own_ use cases:

- If you use PrestaShop web services API for integration with other systems, make sure they work as expected
- If you build 1.7 modules or themes, test them on the new version
- If you know very well some of the modified/improved/reworked Back-office pages, please give them a try
- If you customized some parts of the shop, make sure they work well in the new version
- If you are hosting shops or providing maintenance services to merchants, import the data of one or two typical shops on a pre-production server and check the performance and the behavior of this version; you can also check that the update process is working as expected, depending on your favorite method

For example, if you are a payment module developer, just installing your module on this Beta software, processing one payment and telling us that everything is running as expected is already a great feedback!

If however you find a problem, you can

 - [Report this as a bug on GitHub](https://github.com/PrestaShop/PrestaShop/issues) (read [how to report issues](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/))
 - Submit a bug fix by creating a [pull request](https://github.com/PrestaShop/PrestaShop/compare) (read the [contribution guidelines](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/))

## Release Candidate

When Beta period ends, we consider that all the remaining regressions for this release are registered in the Kanban. So the aim is clear: fix them all, then ship.

Once all regressions have been fixed, maintainers deliver a Release Candidate Build using the `1.7.7.x` branch codebase. This will be the Release Candidate 1 (also known as RC1).

This Build is extensively re-tested by the QA, then provided to everyone. Once released, the timer starts. We wait for one week. During this week we continue testing and exploring the Build, trying to find anything that would not have been detected earlier, and the community should do the same.

By the end of the week, if no new regression has been reported, the RC1 is rebranded and becomes the final release. **PrestaShop 1.7.7.0 is out!**

Most of the time, a couple final regressions will be reported. In that case, the bugs are fixed, an RC2 build is published, and the timer is reset. This cycle repeats until no new regressions are reported within the the defined timeframe.

Finally the latest built Release Candidate becomes the stable PrestaShop 1.7.7.0 software release.

## Summary

- The cycle begins when development starts within the scope of a minor version release. When the scope of this version is finished, Feature Freeze is triggered.

Expected duration: 4 months

- Following Feature Freeze, a nightly build is picked up and tested extensively by QA team, who will then report all known defects. This will allow to plan, then deliver a Beta release.

Expected duration: 1 month

- The Beta Build is made available to all. Maintainers host a one-month long beta period to allow the community to test the build and submit feedback.

Expected duration: 1 month

- At the end of the Beta period, all regressions are fixed and maintainers deliver a Release Candidate 1 build.
If bugs are reported, they are fixed in an RC2 build, and so on until a build has no issues reported within the following week. The last Release Candidate becomes the stable release.

Expected duration: from 1 week (if RC1 is flawless) to 1 month, possibly 2 months

### Calendar

The global duration for all the process is about 6 months. This is why we expect to deliver at most 2 minor releases per year.

## Some more details

This lifecycle has been adopted by the PrestaShop team since 2018, following issues we had in the release process of PrestaShop 1.7.3 and 1.7.4. It seems to have proven its qualities as PrestaShop 1.7.5 and 1.7.6 releases were a lot more robust. However this comes with a cost: all of this process requires a huge investment from the whole ecosystem.

Maintainers, the QA team and the Product team are of course on the front line... but also a lot of people across the PrestaShop Company crew participate: marketing, partnerships, training, everybody participates in the launch, be it marketing material or communication.

The community participates as well: submitting issues and pull requests, testing... but also upgrading their shops, modules and themes. Launching a minor version represents a huge amount work for everyone, which is why it cannot be done too often.

Another side note: people often ask "when will next minor version be out?"

As you can understand from this process, there cannot be a defined date. The answer is "Version 1.7.X will be out when a Release Candidate is delivered with no known regressions". This can take one week or three months.

However, to improve this topic, the teams have been exploring ways of providing better visibility to the community regarding the project's development.

## Further topics

After having read this article, you may be asking yourself multiple questions:

- What about patch releases? What is their software lifecycle?
- What about next major release? When will it happen?

As this blog post is already long, we will cover these questions in another post soon. If you have questions you would like to add to this list, please write a comment, and we will do our best to answer it in another post!


#### Glossary

1: For 1.7.7 development phase, we unfortunately failed to stick to the schedule and we are several months late.

2: A regression is a bug that has been introduced by the latest code changes. For PrestaShop 1.7.7.0, this means a bug whose behavior is observable for 1.7.7.0 but was not observable in previous versions.
