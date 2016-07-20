---
layout: post
title:  "PrestaShop Core Weekly - Week 28"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-07-20 09:10:12
author: xavierborderie
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the previous week, from Monday 11th to Sunday 17th of July 2016.


## General messages

[We released Beta 2 of PrestaShop 1.7](http://build.prestashop.com/news/prestashop-17-beta2/)! Ain't that cool? :)<br/>
Let us know what you think!

Also, the [new Symfony-based (and domain-based) translation system](http://build.prestashop.com/news/new-translation-system-prestashop-17/) is up and working: [you can start translating PS 1.7 already](http://build.prestashop.com/news/translations-prestashop-17/)!

Have you [tried one of your modules in 1.7](http://build.prestashop.com/news/module-development-changes-in-17/)? Have you tried to create a 1.7 theme? How did it go?<br/>
[Give us your feedback](http://build.prestashop.com/news/prestashop-1-7-beta-1-open-for-feedback/)!

Want to help things go faster? There are several ways: 

 * [Test the Beta version](http://build.prestashop.com/news/prestashop-17-beta2/) (or better, test [the current development version, straight from GitHub](https://github.com/PrestaShop/PrestaShop/tree/develop));
 * [Report issues on the Forge](http://forge.prestashop.com/secure/CreateIssue!default.jspa?selectedProjectId=11322&issuetype=1) (or [confirm issues that are already listed](http://forge.prestashop.com/browse/BOOM-738?jql=project%20%3D%20BOOM%20AND%20created%3E%3D-1w%20ORDER%20BY%20created%20DESC) - use the search engine!); 
 * Fix issues by [submitting a pull request](https://github.com/PrestaShop/PrestaShop/pulls) (or confirm that a submitted pull request does indeed fix the presented issue); 
 * Help improve the [1.7 tech documentation](https://github.com/PrestaShop/docs) (both for themes and modules), with issues and pull requests.

You can find an up-to-date thread about the 1.7 development [in the forum](https://www.prestashop.com/forums/topic/480580-want-to-know-more-about-17/).<br/>
The 1.7 Project FAQ is always available here: [http://build.prestashop.com/news/prestashop-1-7-faq/](http://build.prestashop.com/news/prestashop-1-7-faq/).


## Code changes in branch develop (for version 1.7.0.0)

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

_Note that between Beta 2 and the Bastille Day, it was a slow week :)_
 
 
### Front office (including the default theme, named "Classic", based upon the [Starter Theme](https://github.com/PrestaShop/PrestaShop/tree/develop/themes/classic))

 * [5867](https://github.com/PrestaShop/PrestaShop/pull/5867): Adding domains to FO classes, by @alexeven.
 * [5871](https://github.com/PrestaShop/PrestaShop/pull/5871): FO: Fixing domains for classes, by @alexeven.


### Back office

 * [5827](https://github.com/PrestaShop/PrestaShop/pull/5827): Adapt the dropzone on the design of the product page, by @quetzacoalt91.
 * [5853](https://github.com/PrestaShop/PrestaShop/pull/5853): Add translation domains to controllers, by @alexeven.
 * [5858](https://github.com/PrestaShop/PrestaShop/pull/5858): Update module cards button design, by @nihco2.
 * [5864](https://github.com/PrestaShop/PrestaShop/pull/5864): Fix undefined trans method, by @maximebiloe.
 * [5873](https://github.com/PrestaShop/PrestaShop/pull/5873): Fix NaN on product price and image settings position, by @maximebiloe.


### Installer
 
 * [5857](https://github.com/PrestaShop/PrestaShop/pull/5857): Fix translation domain in installer, by @alexeven.

 

See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+merged%3A2016-07-11..2016-07-17+is%3Aclosed).

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/browse/BOOM/?selectedTab=com.atlassian.jira.jira-projects-plugin:summary-panel)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
