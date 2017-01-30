---
layout: post
title:  "PrestaShop Core Weekly - Week 4 of 2017"
subtitle: "An inside look at the PrestaShop codebase"
date:   2017-01-30 09:10:11
author: xavierborderie
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 23rd to Sunday 29th of January 2017.


## General messages

It's business time as usual at PrestaShop: fixing issues, closing Forge tickets, and preparing for what's to come in 2017 for v1.7 and v1.6! Expect a release calendar in the coming days ;)

Notable PRs merged last week are:

* #7291 finally brings the codebase to 2017!
* Thanks to @martinfojtik, absent CMS pages correctly return a 404.
* CSV Export files can be properly opened in Excel. Phew! Demo CSV files have been updated accordingly.
* and several fixes!

Found an issue in PrestaShop 1.7? [Create a Forge ticket](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1)! Every day at around 11:30 (Paris time), part of the team gathers in order to review the recent Forge tickets and assess their priorities and urgency. Thank you for your contribution!



## Code changes in 'develop' branch (for the next minor version, v1.7.1.0)

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

Note that 1.7 patch versions are being built in the '1.7.0.x' branch. All of the PRs from that branch are eventually ported in the 'develop' branch.


### Front office (including the default theme, named "Classic", based upon the [Starter Theme](https://github.com/PrestaShop/StarterTheme))

* [#7345](https://github.com/PrestaShop/PrestaShop/pull/7345): Product with 0 quantity should be buyable when stock management is disabled, by @antoin-m.
* [#7361](https://github.com/PrestaShop/PrestaShop/pull/7361): FO: Mobile Cart - Carriers Improperly integrated, by @hibatallahaouadni.
* [#7378](https://github.com/PrestaShop/PrestaShop/pull/7378): Fix FrontController#setTemplate default locale parameter, by @antoin-m.
* [#7384](https://github.com/PrestaShop/PrestaShop/pull/7384): Fix alerts icons and margin, by @thierrymarianne.
* [#7409](https://github.com/PrestaShop/PrestaShop/pull/7409): Fix empty title tag in CMS category. Thank you @martinfojtik!
* [#7410](https://github.com/PrestaShop/PrestaShop/pull/7410): Redirect to 404 when CMS page doesn't exist. Thank you @martinfojtik!



### Back office

* [#7380](https://github.com/PrestaShop/PrestaShop/pull/7380): Remove wrong URL encoding from AdminStockMvtController, by @antoin-m.
* [#7389](https://github.com/PrestaShop/PrestaShop/pull/7389): Fix translation page integration issues, by @nihco2.
* [#7390](https://github.com/PrestaShop/PrestaShop/pull/7390): Changed ID column name in CSV products export. Thank you @nicosomb!
* [#7404](https://github.com/PrestaShop/PrestaShop/pull/7404): Replace "Default-bootstrap" in Translations tab. Thank you @martinfojtik!
* [#7405](https://github.com/PrestaShop/PrestaShop/pull/7405): Domains tree on translations page now on more than 2 levels, by @maximebiloe.
* [#7406](https://github.com/PrestaShop/PrestaShop/pull/7406): Custom error-layout for maintenance/restricted country page, by @aleeks.


### Core

* [#7291](https://github.com/PrestaShop/PrestaShop/pull/7291): Happy new Year PrestaShop!, by @aleeks.
* [#7386](https://github.com/PrestaShop/PrestaShop/pull/7386): Fix empty query, by @aleeks.
* [#7393](https://github.com/PrestaShop/PrestaShop/pull/7393): Deprecate Tools::displayError(), by @antoin-m.
* [#7399](https://github.com/PrestaShop/PrestaShop/pull/7399): Fix pdf header, by @aleeks.
* [#7400](https://github.com/PrestaShop/PrestaShop/pull/7400): Fix array_merge call on null, by @antoin-m.
* [#7402](https://github.com/PrestaShop/PrestaShop/pull/7402): Update doc import files, by @aleeks.
* [#7412](https://github.com/PrestaShop/PrestaShop/pull/7412): Fix logger namespace for ServiceLocator, by @quetzacoalt91.


### Installer

* [#7363](https://github.com/PrestaShop/PrestaShop/pull/7363): Update install with trans from crowdin, by @aleeks.
* [#7375](https://github.com/PrestaShop/PrestaShop/pull/7375): Fix error message display in installer. Thank you @martinfojtik!


### Tests

* [#7391](https://github.com/PrestaShop/PrestaShop/pull/7391): Remove sauce connect, by @maximebiloe.


See all the PRs merged into the 'develop' codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20merged%3A2017-01-23..2017-01-29%20is%3Aclosed%20base%3Adevelop).


## Code changes in '1.7.0.x' branch (for the next patch version, v1.7.0.5) 

And now, the merged pull-requests on the ['1.7.0.x' branch](https://github.com/PrestaShop/PrestaShop/tree/1.7.0.x) since the last Core Weekly Report!


### Front office



### Back office

* [#7379](https://github.com/PrestaShop/PrestaShop/pull/7379): Fix image icon, by @aleeks.
* [#7383](https://github.com/PrestaShop/PrestaShop/pull/7383): Add some cast on variables, by @aleeks.
* [#7394](https://github.com/PrestaShop/PrestaShop/pull/7394): Fix fatal on getModulesToEnable(), by @maximebiloe.
* [#7396](https://github.com/PrestaShop/PrestaShop/pull/7396): Fix products actions, by @thierrymarianne.
* [#7408](https://github.com/PrestaShop/PrestaShop/pull/7408): Fix deletion of virtual product attachment, by @thierrymarianne.


### Core

* [#7347](https://github.com/PrestaShop/PrestaShop/pull/7347): Use the right attributes separator into the cart, by @maximebiloe.
* [#7385](https://github.com/PrestaShop/PrestaShop/pull/7385): Fix function call, by @aleeks.
* [#7387](https://github.com/PrestaShop/PrestaShop/pull/7387): Fallback dataformate duplicate value, by @aleeks.
* [#7388](https://github.com/PrestaShop/PrestaShop/pull/7388): Fix clear media cache, by @aleeks.
* [#7397](https://github.com/PrestaShop/PrestaShop/pull/7397): Fix email override path, by @julienbourdeau.
* [#7407](https://github.com/PrestaShop/PrestaShop/pull/7407): Do not load index.php file in catalogue, by @maximebiloe.
* [#7411](https://github.com/PrestaShop/PrestaShop/pull/7411): Refacto to get translation files, by @maximebiloe.


### Installer

* [#7369](https://github.com/PrestaShop/PrestaShop/pull/7369): Fix update tab when name is null, by @aleeks.



See all the PRs merged into the '1.6.1.x' codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20merged%3A2017-01-23..2017-01-29%20is%3Aclosed%20base%3A1.7.0.x).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @martinfojtik and @nicosomb!

Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/browse/BOOM/?selectedTab=com.atlassian.jira.jira-projects-plugin:summary-panel)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
