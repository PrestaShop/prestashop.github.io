---
layout: post
title:  "PrestaShop Core Weekly - Weeks 30-31"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-08-10 09:10:11
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the previous two weeks, from Monday 25thth of July to Sunday 7th of August 2016.


## General messages

[We released *Beta 3* of PrestaShop 1.7](http://build.prestashop.com/news/prestashop-1-7-beta-3/) last week! Have a go at it, will ya? :)

Want to help things go faster? There are several ways: 

 * [Test the Beta version](http://build.prestashop.com/news/prestashop-1-7-beta-3/) (or better, test [the current development version, straight from GitHub](https://github.com/PrestaShop/PrestaShop/tree/develop)).
 * [Report issues on the Forge](http://forge.prestashop.com/secure/CreateIssue!default.jspa?selectedProjectId=11322&issuetype=1) (or [confirm issues that are already listed](http://forge.prestashop.com/browse/BOOM-738?jql=project%20%3D%20BOOM%20AND%20created%3E%3D-1w%20ORDER%20BY%20created%20DESC) - use the search engine!).
 * Fix issues by [submitting a pull request](https://github.com/PrestaShop/PrestaShop/pulls) (or confirm that a submitted pull request does indeed fix the presented issue).
 * Help improve the [1.7 tech documentation](https://github.com/PrestaShop/docs) (both for themes and modules), with issues and pull requests.

You can find an up-to-date thread about the 1.7 development [in the forum](https://www.prestashop.com/forums/topic/480580-want-to-know-more-about-17/).<br/>
The 1.7 Project FAQ is always available here: [http://build.prestashop.com/news/prestashop-1-7-faq/](http://build.prestashop.com/news/prestashop-1-7-faq/).


## Code changes in branch develop (for version 1.7.0.0)

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!



### Text

 * [5901](https://github.com/PrestaShop/PrestaShop/pull/5901): Wording optimization, by @alexeven.

 
### Front office (including the default theme, named "Classic", based upon the [Starter Theme](https://github.com/PrestaShop/PrestaShop/tree/develop/themes/classic))

 * [5718](https://github.com/PrestaShop/PrestaShop/pull/5718): Refacto GuestTrackingController, by @julienbourdeau.
 * [5897](https://github.com/PrestaShop/PrestaShop/pull/5897): Fixed multiples issues on Cart and product pages, by @ishcherbakov.
 * [5908](https://github.com/PrestaShop/PrestaShop/pull/5908): Fixed "print out" link display condition. Thank you @antho-girard!
 * [5914](https://github.com/PrestaShop/PrestaShop/pull/5914): render a 404 template if no products found, by @ishcherbakov.
 * [5921](https://github.com/PrestaShop/PrestaShop/pull/5921): Fix core.js and core.js.map, by @maximebiloe.
 * [5925](https://github.com/PrestaShop/PrestaShop/pull/5925): Fix top menu layout, by @ishcherbakov.
 * [5930](https://github.com/PrestaShop/PrestaShop/pull/5930): Display unit price according to tax config, by @julienbourdeau.
 * [5938](https://github.com/PrestaShop/PrestaShop/pull/5938): Do not escape urls, by @julienbourdeau.
 * [5939](https://github.com/PrestaShop/PrestaShop/pull/5939): Product layout, by @ishcherbakov.
 * [5945](https://github.com/PrestaShop/PrestaShop/pull/5945): Added Bigger border on summary, by @paeddl.
 * [5947](https://github.com/PrestaShop/PrestaShop/pull/5947): id for each link to make individual styles possible, by @paeddl.
 * [5954](https://github.com/PrestaShop/PrestaShop/pull/5954): Remove RSCSS body classes, by @julienbourdeau.
 

### Back office

 * [5134](https://github.com/PrestaShop/PrestaShop/pull/5134): Delete unused old images. Thank you @martinfojtik!
 * [5841](https://github.com/PrestaShop/PrestaShop/pull/5841): Allow accessories having \| in the name. Thank you @masoko!
 * [5865](https://github.com/PrestaShop/PrestaShop/pull/5865): Multiple integration bugfixes, by @nihco2.
 * [5868](https://github.com/PrestaShop/PrestaShop/pull/5868): Asynchronous loading of product combinations, by @maximebiloe.
 * [5881](https://github.com/PrestaShop/PrestaShop/pull/5881): Improved design on module page, by @quetzacoalt91.
 * [5902](https://github.com/PrestaShop/PrestaShop/pull/5902): Fix "Export to SQL Manager" buttons. Thank you @antho-girard!
 * [5903](https://github.com/PrestaShop/PrestaShop/pull/5903): Old product tpls are not needed anymore, by @maximebiloe.
 * [5906](https://github.com/PrestaShop/PrestaShop/pull/5906): Fix access when adding attribute value. Thank you @antho-girard!
 * [5910](https://github.com/PrestaShop/PrestaShop/pull/5910): Fix undefined method into combinations form, by @maximebiloe.
 * [5911](https://github.com/PrestaShop/PrestaShop/pull/5911): Do not display new products in the BO listing until they are saved, by @jocel1.
 * [5913](https://github.com/PrestaShop/PrestaShop/pull/5913): Add modal for Addons logout on module page, by @quetzacoalt91.
 * [5918](https://github.com/PrestaShop/PrestaShop/pull/5918): Set translated product names when empty, by @quetzacoalt91.
 * [5919](https://github.com/PrestaShop/PrestaShop/pull/5919): Fill empty friendly URL on product save, by @quetzacoalt91.
 * [5920](https://github.com/PrestaShop/PrestaShop/pull/5920): Disable bulk action while combinations are loading, by @maximebiloe.
 * [5923](https://github.com/PrestaShop/PrestaShop/pull/5923): Switch error messages to new translation system, by @alexeven.
 * [5926](https://github.com/PrestaShop/PrestaShop/pull/5926): Fixed order status bulk update. Thank you @antho-girard!
 * [5927](https://github.com/PrestaShop/PrestaShop/pull/5927): Avoid JS error outside of product page, by @quetzacoalt91.
 * [5928](https://github.com/PrestaShop/PrestaShop/pull/5928): Add constraint for forbidden characters in product name. Thank you @antho-girard!
 * [5931](https://github.com/PrestaShop/PrestaShop/pull/5931): Replaced text input by select input for page name in Meta page. Thank you @antho-girard!
 * [5932](https://github.com/PrestaShop/PrestaShop/pull/5932): Fixed page suppression in AdminMeta. Thank you @antho-girard!
 * [5933](https://github.com/PrestaShop/PrestaShop/pull/5933): Add translation domains to controllers, by @alexeven.
 * [5940](https://github.com/PrestaShop/PrestaShop/pull/5940): Add translation domains to controllers, by @alexeven.
 * [5941](https://github.com/PrestaShop/PrestaShop/pull/5941): Display 'install' on paid module when present on disk, by @quetzacoalt91.
 * [5948](https://github.com/PrestaShop/PrestaShop/pull/5948): Completed webpack build for new theme, by @mickaelandrieu.
 * [5951](https://github.com/PrestaShop/PrestaShop/pull/5951): Fixed popup when previewing on Product page, by @mickaelandrieu.

 
### Core

 * [5235](https://github.com/PrestaShop/PrestaShop/pull/5235): Link carriers to payment methods. Thank you @firstred!
 * [5327](https://github.com/PrestaShop/PrestaShop/pull/5327): Added shop association to CMS category. Thank you @connemb!
 * [5700](https://github.com/PrestaShop/PrestaShop/pull/5700): Warn you if you forgot composer update, by @julienbourdeau.
 * [5899](https://github.com/PrestaShop/PrestaShop/pull/5899): Fallback on xml for unknown locale, by @julienbourdeau.
 * [5905](https://github.com/PrestaShop/PrestaShop/pull/5905): Introduced new Client API for addons, by @mickaelandrieu.
 * [5909](https://github.com/PrestaShop/PrestaShop/pull/5909): Upgrade an uploaded module when already installed, by @quetzacoalt91.
 * [5915](https://github.com/PrestaShop/PrestaShop/pull/5915): Move to new 1.7 modules and remove the old 1.6 ones, by @maximebiloe.
 * [5929](https://github.com/PrestaShop/PrestaShop/pull/5929): All modules actions use POST method, by @mickaelandrieu.
 * [5934](https://github.com/PrestaShop/PrestaShop/pull/5934): Remove PHP 5.5 tests on travis, by @julienbourdeau.
 * [5942](https://github.com/PrestaShop/PrestaShop/pull/5942): Refactored all routes to follow best practices, by @mickaelandrieu.
 * [5943](https://github.com/PrestaShop/PrestaShop/pull/5943): change visibility of installControllers() method. Thank you @prestamodule!
 * [5946](https://github.com/PrestaShop/PrestaShop/pull/5946): Removed the dumped XML container, by @mickaelandrieu.
 * [5953](https://github.com/PrestaShop/PrestaShop/pull/5953): Re-add lost API call for module download from the marketplace, by @quetzacoalt91.

 
### Tests

 * [5690](https://github.com/PrestaShop/PrestaShop/pull/5690): Ensure that no more additional PSR2 issues are allowed, by @mickaelandrieu.
 

### Installer

 * [5821](https://github.com/PrestaShop/PrestaShop/pull/5821): Properly migrate old 1.6 settings during composer install / update & upgrade script, by @jocel1.
 * [5907](https://github.com/PrestaShop/PrestaShop/pull/5907): Accept a specific port in doctrine configuration, by @mickaelandrieu.

 
See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20is%3Aclosed%20merged%3A2016-07-25..2016-08-07%20sort%3Acreated-asc%20base%3Adevelop%20).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @antho-girard, @connemb, @firstred, @martinfojtik, @masoko, and @prestamodule!  
Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/browse/BOOM/?selectedTab=com.atlassian.jira.jira-projects-plugin:summary-panel)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
