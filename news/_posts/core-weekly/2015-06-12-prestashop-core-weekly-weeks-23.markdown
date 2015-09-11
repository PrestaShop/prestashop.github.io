---
layout: post
title:  "PrestaShop Core Weekly - Week 23"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-06-12 18:29:47
author:  [ xavierborderie ]
icon: fa-calendar
tags:
 - core-weekly
---

Hi again! This edition of the Core Weekly report highlights changes in PrestaShop core codebase during the last week, from Monday 1st to Sunday 7th of June, 2015.


## Milestones

Yesterday was [PrestaShop Day](http://www.prestashopday.com/), THE yearly event for the PrestaShop community! We met many of you, learnt a lot, and got to tell about our plans for the future -- among which [the new architecture](http://build.prestashop.com/news/new-architecture-1-6-1-0/), and most importantly, [PrestaShop's Integration Fund](https://www.prestashop.com/blog/en/prestashop-launches-1000000-integration-fund-community/), for which the company will dedicate $1,000,000 to the Community to build more local modules! Developers, this is your chance to shine!

Also, version 1.6.1.0-rc4 was released earlier this week! Help us test it! [Read all about it here](http://build.prestashop.com/news/prestashop-1.6.1.0-rc4/)! Test, test, test!

In the News department, after choosing to [change our Coding Standards to PSR-2](http://build.prestashop.com/news/prestashop-moves-to-psr-2/), we are [adopting a SemVer-like versioning scheme](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/).

Of note among the merged PRs in the last weeks

 * In PR 3090, Core developer Julien Martin (Shudrum) rewrote the way the maintenance message is displayed, made it translatable (finally!), and added two new admin hooks to control its display.
 * In PR 3142, product manager François-Marie de Jouvencel (djfm) added 5 languages to the installer: Bulgarian, Croatian, Lithuanian, Slovene, and Swedish!
 * In PR 3079, Core developer Gregory Roussac (gRoussac) added the ability to edit the caption of product images.


## Code changes

Let's review the merged pull-requests since the last Core Weekly report!

As always, click on the PR's number to open its page on GitHub.

#### Text fixes

 * [3133](https://github.com/PrestaShop/PrestaShop/pull/3133): Wording change in blocktopmenu, by maximebiloe.

#### Front office

 * [3090](https://github.com/PrestaShop/PrestaShop/pull/3090): New message for maintenance mode, by Shudrum.
 * [3137](https://github.com/PrestaShop/PrestaShop/pull/3137): preview layout for disabled product, by maximebiloe.
 * [3143](https://github.com/PrestaShop/PrestaShop/pull/3143): images.tpl - wording, by AlexEven.
 * [3149](https://github.com/PrestaShop/PrestaShop/pull/3149): Fix typo in function name, by xBorderie.

#### Back office

 * [3123](https://github.com/PrestaShop/PrestaShop/pull/3123): Undefined javascript variable, by jeromenadaud.
 * [3116](https://github.com/PrestaShop/PrestaShop/pull/3116): disable modals on login page, fix some php notices. Thank you kelu95!
 * [3141](https://github.com/PrestaShop/PrestaShop/pull/3141): Fix category creation during import, by jocel1.
 * [3079](https://github.com/PrestaShop/PrestaShop/pull/3079): Ability to edit images legends, by gRoussac.
 * [3144](https://github.com/PrestaShop/PrestaShop/pull/3144): Remove caption selection with one image, by jeromenadaud.
 * [3148](https://github.com/PrestaShop/PrestaShop/pull/3148): Install specific modules for hosted shops, by Quetzacoalt91.

#### Core

 * [3112](https://github.com/PrestaShop/PrestaShop/pull/3112): Fix missing language identifier, by jeromenadaud.
 * [3115](https://github.com/PrestaShop/PrestaShop/pull/3115): Fix order change state issue, by sfroment42.
 * [3121](https://github.com/PrestaShop/PrestaShop/pull/3121): Update Core to fix advancedeucompliance issues, by tchauviere.
 * [3122](https://github.com/PrestaShop/PrestaShop/pull/3122): New line replacement fix. Thank you BrunoJunior!
 * [3078](https://github.com/PrestaShop/PrestaShop/pull/3078): Fix wrong product count in getSuppliers function. Thank you Uebix!

#### Unit tests

 * [3094](https://github.com/PrestaShop/PrestaShop/pull/3094): Tests : Added test for shipping with PS_ATCP_SHIPWRAP, by djfm.

#### Modules

 * [3130](https://github.com/PrestaShop/PrestaShop/pull/3130): Update price on voucher delete in blockcart module, by maximebiloe.

#### Installer

 * [3126](https://github.com/PrestaShop/PrestaShop/pull/3126): CSS update, by jeromenadaud.
 * [3139](https://github.com/PrestaShop/PrestaShop/pull/3139): Change CNIL info, by jeromenadaud.
 * [3142](https://github.com/PrestaShop/PrestaShop/pull/3142): Added Bulgarian, Croatian, Lithuanian, Slovene, Swedish, by djfm.
 * [3145](https://github.com/PrestaShop/PrestaShop/pull/3145): Update /de/install.php. Thank you, Nobodaddy!


See all the PRs merged into the codebase since May the 18th  [here](https://github.com/PrestaShop/PrestaShop/pulls?page=2&q=is%3Apr+merged%3A%3E2015-06-01+is%3Aclosed+sort%3Aupdated&utf8=%E2%9C%93).

Thank you to our contributors whose Pull Requests were merged: [BrunoJunior](https://github.com/BrunoJunior), [kelu95](https://github.com/kelu95), [gskema](https://github.com/gskema), [Uebix](https://github.com/Uebix), and [Nobodaddy](https://github.com/Nobodaddy). Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, read those:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
