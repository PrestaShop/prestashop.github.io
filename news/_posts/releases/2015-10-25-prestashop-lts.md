---
layout: post
title:  "About PrestaShop 1.6 LTS & future releases"
subtitle: "Planning the end of maintenance of version 1.6"
date:   2015-10-25 14:00:00
author: jeromenadaud
icon: icon-random
tags:
 - version
 - GA
 - releases
 - development
 - 1.6
 - LTS
---

With the forthcoming 1.7 version coming up soon(ish), and the adoption of [SemVer](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/)-like versioning, we're allowing ourselves to not seek full retrocompatibility at all costs for this major release -- in short, there might be breakage in 1.7. Not everything will break, but some things might. This will be documented in ue time.

Work is currently being done to minimize the breakage, but we also plan on adopting a new release process in order to give merchants and developers more predictible releases, with a higher level of transparency.

The goals of this new release process are thus:

* Shorten the release cycle -- have more patch versions, with a more focused scope (10-15 issues each), making them easier to apply.
* Give more visibility to the contributing developers, and show that they are an essential part of PrestaShop.
* Improve the experience for PrestaShop contributors, both on GitHub and on the Forge -- without forgetting Crowdin or the forum.
* Give time to the PrestaShop ecosystem to catch up with the upcoming major/minor versions.


### The release process

Ever since we chose to follow a [SemVer-like versioning](http://http://build.prestashop.com/news/a-more-semantic-versioning-scheme/), PrestaShop's developers have wanted to manage the releases through a time-based model -- meaning that we want to make regular releases rather than trying to find a balance between "let's fix all the things!" and "merchants need a bug fix release as soon as possible!"

Now that we are ensuring that patch releases (which essentially retrocompatible bugfixes versions) are well-tested and more focused, we think we can provide our users with a more regulare schedule. This allows us to perfect the maintenance phase of PrestaShop 1.6

### The phases of a PrestaShop version

Each PrestaShop major release has two phases: development and maintenance. A third phase, called LTS, aims at providing long-term support.

#### Development phase

All of PrestaShop's developments and stabilizations are done during this phase. This is where improvements and new features are introduced in the PrestaShop Core.

#### Maintenance phase

Each PrestaShop major/minor release is maintained for a two successive periods of time:

* *Bug fix & security fix*: The team strives to fix all reported issues during this period of 2 years.
* *Security fix only*: During this period of 1 year, only security related issues can be fixed. 

During both of these periods, issues are fixed via either patch releases (bugfixes only) or minor releases (bugfixes and retrocompatible improvements).

We might also make special exceptions and fix particularly nasty bugs in old versions of PrestaShop (as we did last July for 1.4 and 1.5), but that's not what we want to push for. We would like you to update to latest and greatest version, not be stuck in decaying code.

Then there are LTS version...

#### Long time support versions (LTS)

Since version 1.4 of PrestaShop, we've been releasing a new major version roughly every year and a half. Each major version is supported for a three-year period with bug fixes and security-related issue fixes. We consider every major version to be a Long Term Support Version (LTS), and support it as such.

### Schedule

So, what does it mean in terms of maintenance and end-of-life for those who are still on older versions.

|Version|   Release|End of bug fix period|End of life|Latest version|
|-------|----------|---------------------|-----------|--------------|
|    1.4|2011-03-16|2013-02-19           |2015-07-29 | 1.3.7        |
|    1.5|2012-09-13|2014-01-20           |2015-07-29 | 1.4.11.1     |
|    1.6|2014-03-17|2016-03-17           |2017-03-17 | 1.5.6.3      |

In short:

* All versions of PrestaShop prior to 1.6 are no longer actively supported.
* PrestaShop 1.6 will receive regular bugfixes until March 2016, then only security fixes until March 2017.
* Once PrestaShop 1.7 is out, users of PrestaShop 1.6 will have plenty of time to switch to the new version -- but eventually, they will have to make the switch if they want to have a secure shop.

In any case, plan ahead for a switch to 1.6.1.x in order to stay up-to-date more easily!
