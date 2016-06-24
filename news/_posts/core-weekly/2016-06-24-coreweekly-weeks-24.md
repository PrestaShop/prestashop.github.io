---
layout: post
title:  "PrestaShop Core Weekly - Week 24"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-06-24 09:10:11
author: xavierborderie
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the previous week, from Monday 16th to Sunday 22th of May 2016.


## General messages

Have you tested [Beta 1 of PrestaShop 1.7](https://www.prestashop.com/en/1.7)?<br/>
Have you [tried one of your module in 1.7](http://build.prestashop.com/news/module-development-changes-in-17/)? Have you tried to create a 1.7 theme? How did it go?<br/>
[Give us your feedback](http://build.prestashop.com/news/prestashop-1-7-beta-1-open-for-feedback/)!

Want to help things go faster? There are several ways: 

 * [Test the Beta version](http://build.prestashop.com/news/prestashop-1-7-beta-1-open-for-feedback/) (or better, test [the current development version, straight from GitHub](https://github.com/PrestaShop/PrestaShop/tree/develop));
 * [Report issues on the Forge](http://forge.prestashop.com/secure/CreateIssue!default.jspa?selectedProjectId=11322&issuetype=1) (or [confirm issues that are already listed](http://forge.prestashop.com/browse/BOOM-738?jql=project%20%3D%20BOOM%20AND%20created%3E%3D-1w%20ORDER%20BY%20created%20DESC) - use the search engine!); 
 * Fix issues by [submitting a pull request](https://github.com/PrestaShop/PrestaShop/pulls) (or confirm that a submitted pull request does indeed fix the presented issue); 
 * Help improve the [1.7 tech documentation](https://github.com/PrestaShop/docs) (both for themes and modules), with issues and pull requests.

You can find an up-to-date thread about the 1.7 development [in the forum](https://www.prestashop.com/forums/topic/480580-want-to-know-more-about-17/).<br/>
The 1.7 Project FAQ is always available here: [http://build.prestashop.com/news/prestashop-1-7-faq/](http://build.prestashop.com/news/prestashop-1-7-faq/).

Do you live near Paris? Do you want to come test-drive the design of PS 1.7? [Let us know!](http://build.prestashop.com/news/call-for-user-testing-volunteers/)


## Code changes in branch develop (for version 1.7.0.0)

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!
 

### Text changes

 * [5728](https://github.com/PrestaShop/PrestaShop/pull/5728): Update NL country names in installer. Thank you @firstred!
 * [5729](https://github.com/PrestaShop/PrestaShop/pull/5729): Update NL menu tabs. Thank you @firstred!
 
 
### Front office (including the default theme, named "Classic", based upon the [Starter Theme](https://github.com/PrestaShop/PrestaShop/tree/develop/themes/classic))

 * [5274](https://github.com/PrestaShop/PrestaShop/pull/5274): Use per shop product visibiliy. Thank you @venditdevs!
 * [5606](https://github.com/PrestaShop/PrestaShop/pull/5606): Enable download of larger files. Thank you @jguix!
 * [5727](https://github.com/PrestaShop/PrestaShop/pull/5727): Localize date format in customer registration form. Thank you @unlocomqx!
 * [5736](https://github.com/PrestaShop/PrestaShop/pull/5736): Add translation domains for front controllers, by @alexeven.
 * [5741](https://github.com/PrestaShop/PrestaShop/pull/5741): Add selected_delivery_option in payment step, by @julienbourdeau.
 * [5743](https://github.com/PrestaShop/PrestaShop/pull/5743): Update address form when changing country, by @maximebiloe.
 * [5753](https://github.com/PrestaShop/PrestaShop/pull/5753): Added domain for module overrides in Classic, by @julienbourdeau.
 * [5756](https://github.com/PrestaShop/PrestaShop/pull/5756): Optional final checkout summary before payment, by @paeddl.
 * [5763](https://github.com/PrestaShop/PrestaShop/pull/5763): Handle RTL in Classic, by @maximebiloe.


### Back office

 * [5251](https://github.com/PrestaShop/PrestaShop/pull/5251): Sort attribute combination in Product admin page, by @cocoweb94.
 * [5460](https://github.com/PrestaShop/PrestaShop/pull/5460): Allow slash character in phone numbers. Thank you @gwarnants!
 * [5626](https://github.com/PrestaShop/PrestaShop/pull/5626): Add new hook to add order actions in Back Office, on an order view. Thank you @prestamodule!
 * [5732](https://github.com/PrestaShop/PrestaShop/pull/5732): Fixed uncaught type error, by @mickaelandrieu.
 * [5734](https://github.com/PrestaShop/PrestaShop/pull/5734): Synced final product price in pricing with combinations, by @mickaelandrieu.
 * [5735](https://github.com/PrestaShop/PrestaShop/pull/5735): Fix unexpected loading on modules page, by @mickaelandrieu.
 * [5737](https://github.com/PrestaShop/PrestaShop/pull/5737): Fix display of the listing filters on the toolbar, by @rgaillard.
 * [5742](https://github.com/PrestaShop/PrestaShop/pull/5742): Do not limit div height for module failure details, by @quetzacoalt91.
 * [5748](https://github.com/PrestaShop/PrestaShop/pull/5748): Synced prices between basics and combinations tabs, by @mickaelandrieu..
 * [5750](https://github.com/PrestaShop/PrestaShop/pull/5750): Add translation domains for modules messages, by @alexeven.
 * [5754](https://github.com/PrestaShop/PrestaShop/pull/5754): Add translations on module manager & module page, by @quetzacoalt91.

 
### Core

 * [5348](https://github.com/PrestaShop/PrestaShop/pull/5348): Added filter_key and havingFilter to array date_add. Thank you @studiokiwik!
 * [5412](https://github.com/PrestaShop/PrestaShop/pull/5412): Fix warning when duplicating products. Thank you @mcdado!
 * [5414](https://github.com/PrestaShop/PrestaShop/pull/5414): Added template name in error when no template found for module. Thank you @prestamodule!
 * [5692](https://github.com/PrestaShop/PrestaShop/pull/5692): Fix error log path. Thank ou @fojtcz!
 * [5695](https://github.com/PrestaShop/PrestaShop/pull/5695): Remove a method introduce in PrestaShop 1.5 dev but not used. Thank you @prestamodule!
 * [5715](https://github.com/PrestaShop/PrestaShop/pull/5715): Enable Doctrine cache in prod, avoid extra memcached calls, by @jocel1.
 * [5722](https://github.com/PrestaShop/PrestaShop/pull/5722): Remove PrestaShop Translator Adapter and use Symfony default one, by @julienbourdeau.
 * [5740](https://github.com/PrestaShop/PrestaShop/pull/5740): Introduce Symfony translator getter for modules, by @alexeven.
 * [5745](https://github.com/PrestaShop/PrestaShop/pull/5745): Do not set the dump function if it exists, by @shine-neko.
 * [5751](https://github.com/PrestaShop/PrestaShop/pull/5751): Clean translations domains, by @shine-neko.
 * [5761](https://github.com/PrestaShop/PrestaShop/pull/5761): Fix comments and whitespace. Thank you @mcdado!
 
 
### Installer

 * [5714](https://github.com/PrestaShop/PrestaShop/pull/5714): Avoid error on install first step if app/log is not writable, by @rgaillard.
 

### Tests

 * [5733](https://github.com/PrestaShop/PrestaShop/pull/5733): Set absolute path instead of relative for tests, by @quetzacoalt91.
 * [5747](https://github.com/PrestaShop/PrestaShop/pull/5747): Travis: Test Twig and Yaml file syntax, by @julienbourdeau.
 * [5767](https://github.com/PrestaShop/PrestaShop/pull/5767): Small improvements for Selenium tests. Thank you @kpodemski!
 
 

See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+merged%3A2016-05-16..2016-05-22+is%3Aclosed).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @fojtcz, @gwarnants, @jguix, @kpodemski, @mcdado, @prestamodule, @studiokiwik, @unlocomqx, and @venditdevs! Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
