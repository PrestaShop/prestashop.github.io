---
layout: post
title:  "Release of PrestaShop 1.7.0.5"
subtitle: "Maintenance version of the 1.7.0.x branch"
date:   2017-02-13 09:10:11
authors: [ xavierborderie ]
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.0.x
---

PrestaShop 1.7.0.5 is now available. This maintenance release closes [29 issues](https://github.com/PrestaShop/PrestaShop/milestone/18?closed=1). This new version is part our plan to [release more monthly patch version for both v1.7 and v1.6](http://build.prestashop.com/news/announcing-our-2017-release-schedule/). 

We are happy to deliver the fifth "patch" release of PrestaShop 1.7.0.0. Version 1.7 of PrestaShop keeps being used by new online stores, and we keep working at fixing the issues that are reported to, making regular improvements to the codebase. Have you found an issue in PrestaShop 1.7? [Create a detailed Forge ticket](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1), so that we can reproduce it and fix it!

[Download 1.7.0.5 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

<div class="alert alert-important" role="alert">
Want to upgrade using the 1-Click Upgrade module? Make sure to upgrade the module itself first! This way you will have access to a new, 1.7-specific channel, which makes upgrading safer for merchants. Upgrading from 1.7.0.0 to 1.7.0.5 should be smooth as silk -- but do a safety backup anyway :)
</div>

Here are the changes:

- Back Office:
   - Bug fix:
     - #[7450](https://github.com/PrestaShop/PrestaShop/pull/7450): Fix some automator problem
     - #[7408](https://github.com/PrestaShop/PrestaShop/pull/7408): Fix deletion of virtual product attachment
     - #[7396](https://github.com/PrestaShop/PrestaShop/pull/7396): Fix products actions
     - #[7383](https://github.com/PrestaShop/PrestaShop/pull/7383): Add some cast on variables
     - #[7394](https://github.com/PrestaShop/PrestaShop/pull/7394): Fix fatal on getModulesToEnable()
     - #[7379](https://github.com/PrestaShop/PrestaShop/pull/7379): Fix image icon
     - #[7318](https://github.com/PrestaShop/PrestaShop/pull/7318): Fix saving decimals in AdminProduct combination form
     - #[7301](https://github.com/PrestaShop/PrestaShop/pull/7301): Translate categories tree in product page
     - #[7325](https://github.com/PrestaShop/PrestaShop/pull/7325): Add success message when import localization is ok
     - #[7324](https://github.com/PrestaShop/PrestaShop/pull/7324): No default reference on catalog
     - #[7326](https://github.com/PrestaShop/PrestaShop/pull/7326): Fix attachment file

- Front Office:
   - Bug fix:
     - #[7410](https://github.com/PrestaShop/PrestaShop/pull/7410): Redirect to 404 when CMS page doesn't exist
     - #[7340](https://github.com/PrestaShop/PrestaShop/pull/7340): Fix translations error from module with sprintf
     - #[6972](https://github.com/PrestaShop/PrestaShop/pull/6972): Add missing nofilter after display hook

- Core:
   - Improvement:
     - #[7360](https://github.com/PrestaShop/PrestaShop/pull/7360): Add config.php to the file .gitignore
     - #[7353](https://github.com/PrestaShop/PrestaShop/pull/7353): Update Israel VAT to 17%
   - Bug fix:
     - #[7465](https://github.com/PrestaShop/PrestaShop/pull/7465): Protect some folders
     - #[7424](https://github.com/PrestaShop/PrestaShop/pull/7424): Update composer with modules
     - #[7354](https://github.com/PrestaShop/PrestaShop/pull/7354): Filter theme / module inputs
     - #[7418](https://github.com/PrestaShop/PrestaShop/pull/7418): Alter currency name to varchar(64)
     - #[7419](https://github.com/PrestaShop/PrestaShop/pull/7419): Use the right modules branch
     - #[7411](https://github.com/PrestaShop/PrestaShop/pull/7411): Refactorization to get translation files
     - #[7407](https://github.com/PrestaShop/PrestaShop/pull/7407): Do not load index.php file in catalogue
     - #[7397](https://github.com/PrestaShop/PrestaShop/pull/7397): Fix email override path
     - #[7387](https://github.com/PrestaShop/PrestaShop/pull/7387): Fallback dataformat duplicate value
     - #[7347](https://github.com/PrestaShop/PrestaShop/pull/7347): Use the right attributes separator into the cart
     - #[7388](https://github.com/PrestaShop/PrestaShop/pull/7388): Fix clear media cache
     - #[7385](https://github.com/PrestaShop/PrestaShop/pull/7385): Fix function call
     - #[7351](https://github.com/PrestaShop/PrestaShop/pull/7351): Replace PCRE e modifier with callback

The [PrestaShop 1.7.0.5 changelog](https://www.prestashop.com/en/developers-versions/changelog/1.7.0.5-stable) is available.

Since version 1.7.0.5 is a ["patch" update](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/) to version 1.7.0.0, upgrading from that version will be easy: features will work better, and modules & themes which worked fine on 1.7.0.0 will work just as well with 1.7.0.5.
