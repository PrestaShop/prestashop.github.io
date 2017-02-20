---
layout: post
title:  "PrestaShop Core Weekly - Week 29 of 2016"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-07-28 09:10:12
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the previous week, from Monday 18th to Sunday 24th of July 2016.


## General messages

[We released Beta 2 of PrestaShop 1.7](http://build.prestashop.com/news/prestashop-17-beta2/) last week! Did you take the time to have a look at it?

Want to help things go faster? There are several ways: 

 * [Test the Beta version](http://build.prestashop.com/news/prestashop-17-beta2/) (or better, test [the current development version, straight from GitHub](https://github.com/PrestaShop/PrestaShop/tree/develop)).
 * [Report issues on the Forge](http://forge.prestashop.com/secure/CreateIssue!default.jspa?selectedProjectId=11322&issuetype=1) (or [confirm issues that are already listed](http://forge.prestashop.com/browse/BOOM-738?jql=project%20%3D%20BOOM%20AND%20created%3E%3D-1w%20ORDER%20BY%20created%20DESC) - use the search engine!).
 * Fix issues by [submitting a pull request](https://github.com/PrestaShop/PrestaShop/pulls) (or confirm that a submitted pull request does indeed fix the presented issue).
 * Help improve the [1.7 tech documentation](https://github.com/PrestaShop/docs) (both for themes and modules), with issues and pull requests.

You can find an up-to-date thread about the 1.7 development [in the forum](https://www.prestashop.com/forums/topic/480580-want-to-know-more-about-17/).<br/>
The 1.7 Project FAQ is always available here: [http://build.prestashop.com/news/prestashop-1-7-faq/](http://build.prestashop.com/news/prestashop-1-7-faq/).


## Code changes in branch develop (for version 1.7.0.0)

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!


 
### Front office (including the default theme, named "Classic", based upon the [Starter Theme](https://github.com/PrestaShop/PrestaShop/tree/develop/themes/classic))

 * [5870](https://github.com/PrestaShop/PrestaShop/pull/5870): Add taxes to modal and a link to product detail in summary, by @paeddl.
 * [5874](https://github.com/PrestaShop/PrestaShop/pull/5874): delete call to Tools::safePostVars() on FrontController::display(), by @rgaillard.
 * [5879](https://github.com/PrestaShop/PrestaShop/pull/5879): Prevent hooks displayMaintenance & displayHome to be called twice, by @rgaillard.
 * [5882](https://github.com/PrestaShop/PrestaShop/pull/5882): Design optimizations in cart and checkout, by @paeddl.
 * [5883](https://github.com/PrestaShop/PrestaShop/pull/5883): Header cleanup, by @ishcherbakov.
 * [5884](https://github.com/PrestaShop/PrestaShop/pull/5884): Fix the page reload when you click on edit during the last checkout step, by @maximebiloe.
 * [5888](https://github.com/PrestaShop/PrestaShop/pull/5888): Display shipping costs even if they are free, by @maximebiloe.
 * [5892](https://github.com/PrestaShop/PrestaShop/pull/5892): Improved design of product price label, by @maximebiloe.
 * [5893](https://github.com/PrestaShop/PrestaShop/pull/5893): Indicate carrier delay on order confirmation, by @maximebiloe.
 * [5898](https://github.com/PrestaShop/PrestaShop/pull/5898): Fix a fatal error during an order validation with a product with a unit price, by @maximebiloe.
 

### Back office

 * [5836](https://github.com/PrestaShop/PrestaShop/pull/5836): Applied 6 decimals for all money inputs in Back Office, by @mickaelandrieu.
 * [5861](https://github.com/PrestaShop/PrestaShop/pull/5861): ix query export in SQL Manager. Thank you @antho-girard!
 * [5869](https://github.com/PrestaShop/PrestaShop/pull/5869): Improved module sorting options, by @mickaelandrieu.
 * [5880](https://github.com/PrestaShop/PrestaShop/pull/5880): Fix fatal in some admin controllers, by @maximebiloe.
 * [5886](https://github.com/PrestaShop/PrestaShop/pull/5886): Rename 'opt-in' into 'Partner offers', by @maximebiloe.
 * [5887](https://github.com/PrestaShop/PrestaShop/pull/5887): Fix a syntax error in JS form.js preventing the product page display, by @maximebiloe.
 * [5890](https://github.com/PrestaShop/PrestaShop/pull/5890): Fix breadcrumb links, by @julienbourdeau.
 * [5891](https://github.com/PrestaShop/PrestaShop/pull/5891): update `optin` wording, by @julienbourdeau.
 * [5895](https://github.com/PrestaShop/PrestaShop/pull/5895): Fix undefined trans(), by @maximebiloe.
 * [5896](https://github.com/PrestaShop/PrestaShop/pull/5896): Fix undefined method trans(), by @maximebiloe.

 
### Core

 * [5161](https://github.com/PrestaShop/PrestaShop/pull/5161): Fix webservice POST api/products for PHP7: Function name must be a string. Thank you @tomcyr!
 * [5876](https://github.com/PrestaShop/PrestaShop/pull/5876): Create robots.txt. Thank you @txmodxoops!
 * [5878](https://github.com/PrestaShop/PrestaShop/pull/5878): Use full domain for message catalag, by @julienbourdeau.
 * [5885](https://github.com/PrestaShop/PrestaShop/pull/5885): Fix trans() when no domain is set, by @julienbourdeau.
 * [5889](https://github.com/PrestaShop/PrestaShop/pull/5889): Remove password variable from emails, by @maximebiloe.

 

See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+is%3Aclosed+merged%3A2016-07-18..2016-07-24+sort%3Acreated-asc).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @antho-girard, @tomcyr and @txmodxoops!  
Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/browse/BOOM/?selectedTab=com.atlassian.jira.jira-projects-plugin:summary-panel)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
