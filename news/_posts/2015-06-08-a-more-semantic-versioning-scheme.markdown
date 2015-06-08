---
layout: post
title:  "A more semantic versioning scheme"
subtitle: "Moving towards SemVer"
date:   2015-06-08 17:56:00
author: xavierborderie
icon: fa-code-fork
tags:
 - version
 - versioning
 - semver
 - semantic
---



The upcoming version 1.6.1.0 represents an opportunity for us to make a lot of good changes for both the project and the community, as you may have noticed recently.

One thing that’s been bugging us for quite some time (and most probably users, developers, etc.) is the way PrestaShop’s version numbers are handled — in that they are not really handled as much as rarely consistent.

Let’s see for instance what happened in [the last few versions of the 1.6.x branch](https://www.prestashop.com/en/developers-versions/changelog/1.6.0.14):

- 1.6.0.7: Many bugfixes, many improvements, a few new features.
- 1.6.0.8: Several bugfixes, a few improvements.
- 1.6.0.9: Many bugfixes, many improvements, a few new features.
- 1.6.0.10: Internal version, never publicly released.
- 1.6.0.11: Many bugfixes, many improvements, several new features.
- 1.6.0.12: Many bugfixes, several improvements and some new features.
- 1.6.0.13: 2 bugfixes.
- 1.6.0.14: 1 bugfix.

See where I’m going with this? Looking only at the version numbers, you can never tell if a new version contains a few useful corrections, or if it brings many cool features, or if it changes the database schema or the whole system. It’s not easy to know if it is a simple update, or a complex one. It’s not clear if it’s going to be business as usual, or if you’ll have to rework your themes/modules.

In short, it’s difficult to know, just by looking at the version number, whether it’s a minor or a major version.

This has been going on for too long, and we’re taking the opportunity of the release of our new major version, v1.6.1.0, to improve the way we number our versions of PrestaShop.

From version 1.6.1.0 onward, we are moving towards SemVer.


### SemWhat?!

[SemVer](http://semver.org/), short for Semantic Versioning, is a specification by Gravatar co-founder and GitHub ex-CEO Tom Preston-Werner. In its latest incarnation (v2.0.0), it describes its proposed versioning scheme as follows:

> Given a version number MAJOR.MINOR.PATCH, increment the:
> - MAJOR version when you make incompatible API changes,
> - MINOR version when you add functionality in a backwards-compatible manner, and
> - PATCH version when you make backwards-compatible bug fixes.
>
> Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

The most important point of SemVer is the predictability of potential breakage: looking at the version number, you know from the get-go whether that new version contains bugfixes; or bugfixes and features; or bugfixes, features and potentially impacting changes from the previous major version.

Version numbers become more coherent, updates become more predictable, and developers know when to check for impacts on their modules, themes or clients' stores!


### How will it apply to PrestaShop version numbering?

In the SemVer description, change “incompatible API changes” to “backwards compatible” and you will get the point: changes that have an impact on module/theme development will be limited to major versions only. Developers and designers won’t have to worry about whether or not they need to update their code for minor or patch versions.

The thing is, PrestaShop has long had version numbers that span four numerals, whereas SemVer requires projects to use 3 numerals. For instance, the current version is 1.6.0.14, and the coming version is 1.6.1.0. That is why we chose to move *towards* SemVer, modifying it slightly instead of adopting it as-is. We will need to adapt SemVer to our historical way of versioning keeping the four numerals.

This means that version numbers will be based on 1.MAJOR.MINOR.PATCH. And we keep the possibility to switch to 2.0.0.0 on the day something rrrrrreally extra major happens :)


### So, when will the numerals change?

1.6.1.0 is the forthcoming major version, which should be released in the coming weeks. It brings a few changes in the way things work internally but it keeps all retrocompatibility intact, so modules and themes that worked with 1.6.0.14 will continue to work with 1.6.1.0.

Starting with 1.6.1.0, new versions of PrestaShop will use the new SemVer-inspired numbering scheme.

What this means is:
- The next bugfix-only version (or “patch” version) will be v1.6.1.1, then if we need more, v1.6.1.2, v1.6.1.3, etc.
- The next version which brings retrocompatible changes (or “minor” version) will be 1.6.2.0. It will also contain bugfixes.
- The next version which brings incompatible changes (or “major” version) will be 1.7.0.0. It will also contain retrocompatible changes and bugfixes. Also, the incompatible changes might be few and minor, but SemVer has strict rules...

Adopting this SemVer-inspired numbering scheme, version numbers will be much more consistent and coherent, the need for 3rd-party developers to update their code will be more predictable, and the whole community will get a better understanding of what an upgrade might imply.


### What about the coming new architecture?

Since you read this blog every day (don't you?), you know that [we are working on a new architecture for PrestaShop](http://build.prestashop.com/news/new-architecture-1-6-1-0/), with the first bits having landed in v1.6.1.0 already. It will take some time and some API changes, but once it’s final, users and developers/designers will benefit from a much more robust codebase, without us having to rewrite everything from scratch :)


### So does that mean 1.7.0.0 is coming soon?

Yes! Thanks to the new architecture, currently in the works, it might even be coming before winter of 2015! :)

What about 1.8.0.0? Well, maybe sooner than it took between 1.5 and 1.6!


### So you are planning to impact backward-compatibility regularly?

Not at all! 2015 is a special year, where a lot of things are getting better, and where we prepare for the future of PrestaShop.

Also, note that if a major version could potentially impact compatibility under SemVer’s strict wording, it doesn’t mean that the whole ecosystem of themes and modules will effectively break! It simply means that parts of the API have changed, and these changes will be documented long before the major version is released!


### What about security updates?

Security updates, if there are any, are fixed in patch versions. Patch versions are released as fast as possible.

Patch versions fix critical bugs and security issues (which are more or less the same thing). They might also fix some trivial bugs, but the point of a patch version is to fix problematic issues, not to close non-critical Forge tickets.

Eventually, once we have proven that upgrading to a patch version is seamless for developers and designers, and beneficial for the whole community, we plan on implementing automatic background updates for patch versions: if there’s a critical issue in the software, PrestaShop will be able to update itself as soon as the fix is available on our servers, and you will wake up to an email from your store telling you that it just got better and safer during the night! Of course, a module would be able to disable that feature — but that’s another discussion we will have!


### What about the database?

SemVer applies mostly to the way the code works. But the database is also a critical part of PrestaShop, and in past years the Core team updated it as needed.

With our SemVer-like versioning, the database will never be updated in patch versions. Tables and rows might be _added_ to it in minor versions, but _none of the existing ones shall be changed_. Only a major version might change existing tables, rows and indexes.


### Alright, alright, I get it, it’s better! So, when is 1.6.1.0 coming?

[1.6.1.0-rc3 was released 2 weeks ago](http://build.prestashop.com/news/prestashop-1-6-1-0-rc3/), 1.6.0.1-rc4 should be released this week, other RC versions might be released as needed, depending on the feedback from the community.

We plan on releasing the stable version of PrestaShop 1.6.1.0 by the end of June, or early-July. Until then, please help us make it the most robust version ever released!

