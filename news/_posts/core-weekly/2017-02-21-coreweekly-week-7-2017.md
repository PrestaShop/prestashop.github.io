---
layout: post
title:  "PrestaShop Core Weekly - Week 7 of 2017"
subtitle: "An inside look at the PrestaShop codebase"
date:   2017-02-21 09:10:11
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 13th to Sunday 19th of February 2017.


## General messages

Have you seen the new menu for this Build? Now that Build hosts so much content, we felt a need to make it all more accessible. This new menu, designed by @tristanlehot, brings the following goodies:

* Direct links to [all 1.7-](http://build.prestashop.com/tag/1.7/) and [1.6-related posts](http://build.prestashop.com/tag/1.6/), and direct access to [the PrestaShop 1.7 FAQ](http://build.prestashop.com/news/prestashop-1-7-faq/).
* Better visibility for the [Howtos](http://build.prestashop.com/how-tos/) and [Tools](http://build.prestashop.com/tools/) sections, and to Contribution content.
* [Releases](http://build.prestashop.com/tag/releases/) and [Core Weeklies](http://build.prestashop.com/tag/core-weekly/) now have their own URL.
* A top-notch search engine, thanks to our friends at [Algolia](https://www.algolia.com/)!

We'll tweak the menu and content this week: let us know if you feel something is missing!

Remember our [Release Schedule](http://build.prestashop.com/news/announcing-our-2017-release-schedule/)? We intend to release 1.7.1.0 in March... so, expect a beta soon! :)


## Code changes in 'develop' branch (for the next minor version, v1.7.1.0)

Now let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

Note that 1.7 patch versions are being built in the '1.7.0.x' branch. All of the PRs from that branch are eventually ported in the 'develop' branch.


### Back office

* [#7529](https://github.com/PrestaShop/PrestaShop/pull/7529): Product module page, by @shudrum.
* [#7534](https://github.com/PrestaShop/PrestaShop/pull/7534): Remove call to an undefined attribute, by @antoin-m.
* [#7535](https://github.com/PrestaShop/PrestaShop/pull/7535): Fix desktop menu regressions, by @nihco2.
* [#7544](https://github.com/PrestaShop/PrestaShop/pull/7544): Fix module configure button when in dropdown, by @quetzacoalt91.
* [#7546](https://github.com/PrestaShop/PrestaShop/pull/7546): Prevent widgets to break back-office, by @maximebiloe.
* [#7551](https://github.com/PrestaShop/PrestaShop/pull/7551): Restore compiled assets, by @nihco2.
* [#7552](https://github.com/PrestaShop/PrestaShop/pull/7552): Callback on HelperList should have highest priority. Thank you @kpodemski!
* [#7559](https://github.com/PrestaShop/PrestaShop/pull/7559): Fix filter image icon, by @aleeks.


### Core

* [#7522](https://github.com/PrestaShop/PrestaShop/pull/7522): Make sure that invoice siblings are related to the same order id, by @aleeks.
* [#7531](https://github.com/PrestaShop/PrestaShop/pull/7531): Payment method title extended to 255 characters, by @aleeks.
* [#7532](https://github.com/PrestaShop/PrestaShop/pull/7532): Use Address:initialize to manage default state in one area, by @aleeks.
* [#7536](https://github.com/PrestaShop/PrestaShop/pull/7536): Add windows 8.1 & 10 to guest useragent, by @antoin-m.
* [#7538](https://github.com/PrestaShop/PrestaShop/pull/7538): Add composer.lock in order to fix composer install, by @aleeks.
* [#7539](https://github.com/PrestaShop/PrestaShop/pull/7539): Update licences, by @aleeks.


### Installer

* [#7517](https://github.com/PrestaShop/PrestaShop/pull/7517): Refactoring of the upgrade, to be easily usable in the auto upgrade module, by @jocel1.


See all the PRs merged into the 'develop' codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20merged%3A2017-02-13..2017-02-19%20is%3Aclosed%20base%3Adevelop).


Thank you to @kpodemski, who had a pull request merged since the last Core Weekly Report :)

Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
