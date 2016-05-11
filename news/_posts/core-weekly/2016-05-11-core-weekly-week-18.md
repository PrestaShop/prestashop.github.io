---
layout: post
title:  "PrestaShop Core Weekly - Week 18"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-05-11 14:42:13
author: xavierborderie
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the previous week, from Monday 2nd to Sunday 8th of May 2016.


## Milestones

The work being done on version 1.7.0.0 is still going strong (even though last week was a short one in France, due to Ascension Day on Thursday). 

Want to help things go faster? There are several ways: 

 * [Test the latest alpha version](http://build.prestashop.com/news/here-comes-prestashop-1-7-alpha-4/) (or better, test [the current development version, straight from GitHub](https://github.com/PrestaShop/PrestaShop));
 * [Report issues on the Forge](http://forge.prestashop.com/secure/CreateIssue!default.jspa?selectedProjectId=11322&issuetype=1) (or [confirm issues that are already listed](http://forge.prestashop.com/browse/BOOM-738?jql=project%20%3D%20BOOM%20AND%20created%3E%3D-1w%20ORDER%20BY%20created%20DESC) - use the search engine!); 
 * Fix issues by [submitting a pull request](https://github.com/PrestaShop/PrestaShop/pulls) (or confirm that a submitted pull request does indeed fix the presented issue); 
 * Help improve the [1.7 Theme Development doc](https://github.com/PrestaShop/docs) (yes, it is very sparse at the moment).

You can find an up-to-date thread about the 1.7 development [in the forum](https://www.prestashop.com/forums/topic/480580-want-to-know-more-about-17/).<br/>
The 1.7 Project FAQ is always available here: [http://build.prestashop.com/news/prestashop-1-7-faq/](http://build.prestashop.com/news/prestashop-1-7-faq/).

Do you live near Paris? Do you want to come test-drive the design of PS 1.7? [Let us know!](http://build.prestashop.com/news/call-for-user-testing-volunteers/)


## Code changes in branch develop (for version 1.7.0.0)

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!
 

### Front office (including the default theme, named "Classic" for now, based upon the [Starter Theme](https://github.com/PrestaShop/PrestaShop/tree/develop/themes/classic))

 * [5462](https://github.com/PrestaShop/PrestaShop/pull/5462): Fix voucher layout in cart, by @maximebiloe.
 * [5507](https://github.com/PrestaShop/PrestaShop/pull/5507): Fix undefined label when using facet filters, by @maximebiloe.
 * [5513](https://github.com/PrestaShop/PrestaShop/pull/5513): Remove backslash from BR tag in formatted address. Thank you @fojtcz!
 * [5515](https://github.com/PrestaShop/PrestaShop/pull/5515): Hide H1 if page has no title. Thank you @fojtcz!
 * [5517](https://github.com/PrestaShop/PrestaShop/pull/5517): ps_legalcompliance BOOM-198 : hook for unit_price added, by @paeddl.


### Back office

 * [5215](https://github.com/PrestaShop/PrestaShop/pull/5215): Enable debug mode from BO. Thank you @firstred!
 * [5486](https://github.com/PrestaShop/PrestaShop/pull/5486): Add placeholder for product summary, by @maximebiloe.
 * [5492](https://github.com/PrestaShop/PrestaShop/pull/5492): precise delivery time, by @paeddl.
 * [5496](https://github.com/PrestaShop/PrestaShop/pull/5496): Module page remove notifications to install, by @Quetzacoalt91.
 * [5520](https://github.com/PrestaShop/PrestaShop/pull/5520): Update node-sass version, by @maximebiloe.
 * [5526](https://github.com/PrestaShop/PrestaShop/pull/5526): improved performances of renderfield action, by @mickaelandrieu.

 
### Core

 * [5389](https://github.com/PrestaShop/PrestaShop/pull/5389): Simplified configuration, by @Shine-neko.
 * [5518](https://github.com/PrestaShop/PrestaShop/pull/5518): Ensure () after new Class;, by @julienbourdeau.
 * [5524](https://github.com/PrestaShop/PrestaShop/pull/5524): Fix Exception-ception, by @Quetzacoalt91.
 

### Tests

 * [5519](https://github.com/PrestaShop/PrestaShop/pull/5519): PHP 7 is no longer an option, by @Shudrum.

 
### Installer

 * [5449](https://github.com/PrestaShop/PrestaShop/pull/5449): Installer optimizations, by @Shudrum.
 
 

See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+merged%3A2016-05-02..2016-05-08+is%3Aclosed+base%3Adevelop).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @firstred, and @fojtcz! Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
