---
layout: post
title:  "PrestaShop Core Weekly - Week 27"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-07-14 09:10:12
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the previous week, from Monday 4th to Sunday 10th of July 2016.


## General messages

We're getting real close to a Beta 2 release! Are you ready? :)

Have you [tried one of your modules in 1.7](http://build.prestashop.com/news/module-development-changes-in-17/)? Have you tried to create a 1.7 theme? How did it go?<br/>
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
 
 
### Front office (including the default theme, named "Classic", based upon the [Starter Theme](https://github.com/PrestaShop/PrestaShop/tree/develop/themes/classic))

 * [5812](https://github.com/PrestaShop/PrestaShop/pull/5812): Submit current step form when clicking on a next step title, by @maximebiloe.
 * [5817](https://github.com/PrestaShop/PrestaShop/pull/5817): Fix product refresh when changing quantity, by @maximebiloe.
 * [5832](https://github.com/PrestaShop/PrestaShop/pull/5832): Fixed user registration if guest user exist with same email. Thank you @fojtcz!
 * [5840](https://github.com/PrestaShop/PrestaShop/pull/5840): Refactor classic theme CSS, by @nihco2.
 * [5844](https://github.com/PrestaShop/PrestaShop/pull/5844): Wording and rewriting variables for Classic Theme, by @alexeven.
 * [5852](https://github.com/PrestaShop/PrestaShop/pull/5852): Fix displayHeader hook called twice. Thank you @fojtcz!


### Back office

 * [5811](https://github.com/PrestaShop/PrestaShop/pull/5811): Migrated "prefered modules" action to Symfony, by @mickaelandrieu.
 * [5826](https://github.com/PrestaShop/PrestaShop/pull/5826): Fixes some fatal in AdminStatsController, by @maximebiloe.
 * [5828](https://github.com/PrestaShop/PrestaShop/pull/5828): Button to add an address from the customer profile. Thank you @alblanc!
 * [5833](https://github.com/PrestaShop/PrestaShop/pull/5833): Fix fatal error on calling TranslatorComponent, by @maximebiloe.
 * [5843](https://github.com/PrestaShop/PrestaShop/pull/5843): Fix fatal on order view - Use sprintf instead of tags, by @maximebiloe.
 * [5845](https://github.com/PrestaShop/PrestaShop/pull/5845): Add translation domains to controllers, by @alexeven.
 * [5849](https://github.com/PrestaShop/PrestaShop/pull/5849): Fixed enable/disable mobile bulk actions on modules, by @mickaelandrieu.
 * [5850](https://github.com/PrestaShop/PrestaShop/pull/5850): Fixed Service label on module read more modal, by @mickaelandrieu.
 * [5851](https://github.com/PrestaShop/PrestaShop/pull/5851): Fixed CTA action on read more modal in Module list, by @mickaelandrieu.
 * [5855](https://github.com/PrestaShop/PrestaShop/pull/5855): Fix call to undefined method trans(), by @maximebiloe.
 * [5856](https://github.com/PrestaShop/PrestaShop/pull/5856): Fix wrong parameters number in sprintf, by @maximebiloe.

 
 
### Core

 * [5837](https://github.com/PrestaShop/PrestaShop/pull/5837): When string uses domains sprintf() must be an array and tags() must be removed, by @maximebiloe.
 * [5839](https://github.com/PrestaShop/PrestaShop/pull/5839): Introduce trans() method in Admin controllers, by @julienbourdeau.
 * [5848](https://github.com/PrestaShop/PrestaShop/pull/5848): Introduce trans() method in every controller, by @julienbourdeau.
 * [5854](https://github.com/PrestaShop/PrestaShop/pull/5854): Add Translation Extractor configuration, by @julienbourdeau.

 

### Tests
 
 * [5838](https://github.com/PrestaShop/PrestaShop/pull/5838): Fix install in cli mode when paramaters.yml does not exist, by @quetzacoalt91.

 

See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+merged%3A2016-07-04..2016-07-10+is%3Aclosed).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @fojtcz and @alblanc! Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
