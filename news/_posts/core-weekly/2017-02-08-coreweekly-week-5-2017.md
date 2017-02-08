---
layout: post
title:  "PrestaShop Core Weekly - Week 5 of 2017"
subtitle: "An inside look at the PrestaShop codebase"
date:   2017-02-08 09:10:11
author: xavierborderie
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 30th of January to Sunday 5th of February 2017.


## General messages

If you haven't seen it yet, check out our [Release Schedule for 2017](http://build.prestashop.com/news/announcing-our-2017-release-schedule/): we are doing our best to regularly deliver new 1.7 and 1.6 versions all year long. The ultimate aim is to have, by year's end, 4 minor versions for v1.7, as well as monthly patch versions for both v1.7 and v1.6.

While we are mentioning patch versions for v1.7: who here wants 1.7.0.5 released? I know I do, and [those 29 merged PRs](https://github.com/PrestaShop/PrestaShop/milestone/18?closed=1) might whet your appetite :) See you soon!

Notable PRs merged last week are:

* So many more Smarty blocks! Check #7362 out!
* Email templates parent/child compatible, woohoo!
* Want more hooks? How about `actionDispatcherBefore`, `actionDispatcherAfter`, `actionOutputHTMLBefore`, `displayAfterProductThumb`, and `actionClearCache`?
* No more synchronous loading for TinyMCE.
* It's the little things that count: shared stock quantity are now displayed correctly, thanks to @amazzing!
* Goodbye for good, smartyDump()! Cheers @prestamodule :)

Found an issue in PrestaShop 1.7? [Create a Forge ticket](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1)! Every day at around 11:30 (Paris time), part of the team gathers in order to review the recent Forge tickets and assess their priorities and urgency. I'll post a photo if you want :) Thank you for your contribution! (and thank you for read this text instead of directly going to the code changes ;) )



## Code changes in 'develop' branch (for the next minor version, v1.7.1.0)

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

Note that 1.7 patch versions are being built in the '1.7.0.x' branch. All of the PRs from that branch are eventually ported in the 'develop' branch.


### Front office (including the default theme, named "Classic", based upon the [Starter Theme](https://github.com/PrestaShop/StarterTheme))

* [#7362](https://github.com/PrestaShop/PrestaShop/pull/7362): Add smarty blocks everywhere, by @julienbourdeau.
* [#7433](https://github.com/PrestaShop/PrestaShop/pull/7433): Fix button on the same line in order confirmation modal, by @aleeks.
* [#7445](https://github.com/PrestaShop/PrestaShop/pull/7445): Fix div tag in ordersummary header, by @julienbourdeau.
* [#7446](https://github.com/PrestaShop/PrestaShop/pull/7446): Remove wrong opening table tag, by @julienbourdeau.
* [#7453](https://github.com/PrestaShop/PrestaShop/pull/7453): Fix %email% are not replaced by user's email when asking a new password. Thank you @pnicolass!



### Back office

* [#7395](https://github.com/PrestaShop/PrestaShop/pull/7395): Add the disabled categories in product page, by @hibatallahaouadni.
* [#7415](https://github.com/PrestaShop/PrestaShop/pull/7415): Display correct quantities for shared stock. Thank you @amazzing!
* [#7421](https://github.com/PrestaShop/PrestaShop/pull/7421): Remove useless isset, by @antoin-m.
* [#7428](https://github.com/PrestaShop/PrestaShop/pull/7428): Update wording AdminPerformanceController.php, by @antoin-m.
* [#7436](https://github.com/PrestaShop/PrestaShop/pull/7436): Remove tinymce synchronous loading, by @antoin-m.
* [#7444](https://github.com/PrestaShop/PrestaShop/pull/7444): Update the dashboardTop hook, by @antoinemille.
* [#7454](https://github.com/PrestaShop/PrestaShop/pull/7454): CO: Fixed use of hook return value in customer address validation. Thank you @mark-data8!


### Core

* [#7293](https://github.com/PrestaShop/PrestaShop/pull/7293): Fix dependencies definitions, by @thierrymarianne.
* [#7334](https://github.com/PrestaShop/PrestaShop/pull/7334): Remove smartyDump() in Smarty config. Thank you @prestamodule!
* [#7382](https://github.com/PrestaShop/PrestaShop/pull/7382): Use shop email as sender for template order_customer_comment. Thank you @mcdado!
* [#7401](https://github.com/PrestaShop/PrestaShop/pull/7401): Change some translated strings, by @antoin-m.
* [#7403](https://github.com/PrestaShop/PrestaShop/pull/7403): Make email templates parent/child compatible, by @julienbourdeau.
* [#7413](https://github.com/PrestaShop/PrestaShop/pull/7413): Optimized products counting in BO product list. Thank you @sarjon!
* [#7420](https://github.com/PrestaShop/PrestaShop/pull/7420): Use the right modules branch, by @maximebiloe.
* [#7425](https://github.com/PrestaShop/PrestaShop/pull/7425): Update composer with modules, by @aleeks.
* [#7429](https://github.com/PrestaShop/PrestaShop/pull/7429): Fix Validate::isUnsignedInt, by @antoin-m.
* [#7430](https://github.com/PrestaShop/PrestaShop/pull/7430): Fixed rendering condition of default groups form, by @antoin-m.
* [#7437](https://github.com/PrestaShop/PrestaShop/pull/7437): Use 1.7.1 modules, by @maximebiloe.
* [#7438](https://github.com/PrestaShop/PrestaShop/pull/7438): Add 2 new hooks actionDispatcherBefore and actionDispatcherAfter, by @antoin-m.
* [#7440](https://github.com/PrestaShop/PrestaShop/pull/7440): Add new hook actionOutputHTMLBefore, by @antoin-m.
* [#7441](https://github.com/PrestaShop/PrestaShop/pull/7441): Add displayAfterProductThumb hook, by @antoin-m.
* [#7442](https://github.com/PrestaShop/PrestaShop/pull/7442): Add new hook 'actionClearCache', by @antoin-m.
* [#7452](https://github.com/PrestaShop/PrestaShop/pull/7452): Revert "CO: fix Validate::isUnsignedInt", by @maximebiloe.
* [#7456](https://github.com/PrestaShop/PrestaShop/pull/7456): Pass variables of hook `actionProductSearchComplete` by link, by @aleeks.


See all the PRs merged into the 'develop' codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20merged%3A2017-01-30..2017-02-05%20is%3Aclosed%20base%3Adevelop).


## Code changes in '1.7.0.x' branch (for the next patch version, v1.7.0.5) 

And now, the merged pull-requests on the ['1.7.0.x' branch](https://github.com/PrestaShop/PrestaShop/tree/1.7.0.x) since the last Core Weekly Report!


### Back office

* [#7450](https://github.com/PrestaShop/PrestaShop/pull/7450): Fix some automator problem, by @aleeks.


### Core

* [#7354](https://github.com/PrestaShop/PrestaShop/pull/7354): Filter theme / module inputs, by @thierrymarianne.
* [#7418](https://github.com/PrestaShop/PrestaShop/pull/7418): Alter currency name to varchar(64), by @antoin-m.
* [#7419](https://github.com/PrestaShop/PrestaShop/pull/7419): Use the right modules branch, by @maximebiloe.
* [#7424](https://github.com/PrestaShop/PrestaShop/pull/7424): Update composer with modules, by @aleeks.


### Installer

* [#7422](https://github.com/PrestaShop/PrestaShop/pull/7422): Require php zip extension before install, by @antoin-m.



See all the PRs merged into the '1.6.1.x' codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20merged%3A2017-01-30..2017-02-05%20is%3Aclosed%20base%3A1.7.0.x).


Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @amazzing, @mark-data8, @mcdado, @pnicolass @prestamodule, and @sarjon!

Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/browse/BOOM/?selectedTab=com.atlassian.jira.jira-projects-plugin:summary-panel)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
