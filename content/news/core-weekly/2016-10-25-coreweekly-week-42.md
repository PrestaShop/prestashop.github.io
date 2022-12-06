---
layout: post
title:  "PrestaShop Core Weekly - Week 42 of 2016"
subtitle: "An inside look at the PrestaShop codebase"
date:   2016-10-25 09:10:11
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the previous week, from Monday 17th to Sunday 23rd of October 2016.


## General messages

PrestaShop 1.7 development is focusing on fixing blocking, critical or major issues:

* Have you spotted a bug with [the latest Git version](https://github.com/PrestaShop/PrestaShop/tree/develop), and you know how to fix it? [Create a pull request on the 'develop' branch](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20is%3Aopen%20base%3Adevelop)!
* Do you know of a bug but don't know how to fix it? [Report it to us through the Forge](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1)!

Are your modules 1.7-ready? Have you tried to create a 1.7 theme? [Check the tech doc](http://developers.prestashop.com/)!

You can find an up-to-date thread about the 1.7 development [in the forum](https://www.prestashop.com/forums/topic/480580-want-to-know-more-about-17/).<br/>
And the 1.7 Project FAQ is always available here: [http://build.prestashop.com/news/prestashop-1-7-faq/](http://build.prestashop.com/news/prestashop-1-7-faq/).



## Code changes in 'develop' branch (for version 1.7.0.0)

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!
 
 
### Front office (including the default theme, named "Classic", based upon the [Starter Theme](https://github.com/PrestaShop/PrestaShop/tree/develop/themes/classic))

 * [6656](https://github.com/PrestaShop/PrestaShop/pull/6656): Rework asset management, by @julienbourdeau.
 * [6674](https://github.com/PrestaShop/PrestaShop/pull/6674): Fix ajax refresh for listing pages, by @julienbourdeau.
 * [6691](https://github.com/PrestaShop/PrestaShop/pull/6691): Allow to display a full width menu. Thank you @prestamodule!
 * [6728](https://github.com/PrestaShop/PrestaShop/pull/6728): Allow JS to get $product. Thank you @simonchik!
 * [6733](https://github.com/PrestaShop/PrestaShop/pull/6733): Keep sending email if legacy lang file not found, by @julienbourdeau.
 

### Back office

 * [3915](https://github.com/PrestaShop/PrestaShop/pull/3915): Removed \_includeContainer ; never more used. Thank you @prestamodule!
 * 4452#: Fix advanced stock manager that prevented admin from removing stock quantity. Thank you @michaelhjulskov!
 * [6668](https://github.com/PrestaShop/PrestaShop/pull/6668): Fixed security problem on translation interface, by @aleeks.
 * [6677](https://github.com/PrestaShop/PrestaShop/pull/6677): Fix links to legacy module page, by @julienbourdeau.
 * [6678](https://github.com/PrestaShop/PrestaShop/pull/6678): Fixed errors on product form & duplicate menu, by @aleeks.
 * [6690](https://github.com/PrestaShop/PrestaShop/pull/6690): Provided with theme translations and overrides, by @thierrymarianne.
 * [6693](https://github.com/PrestaShop/PrestaShop/pull/6693): Remove wrong module from module page, by @fatmabouchekoua.
 * [6695](https://github.com/PrestaShop/PrestaShop/pull/6695): Added email translation on BO, by @aleeks.
 * [6698](https://github.com/PrestaShop/PrestaShop/pull/6698): Fix bulk actions on module page, by @quetzacoalt91.
 * [6700](https://github.com/PrestaShop/PrestaShop/pull/6700): Add js strings of module page to translations, by @quetzacoalt91.
 * [6702](https://github.com/PrestaShop/PrestaShop/pull/6702): Fixed Employees back-office default page. Thank you @antho-girard!
 * [6705](https://github.com/PrestaShop/PrestaShop/pull/6705): Fix broken links related to token on module page, by @quetzacoalt91.
 * [6711](https://github.com/PrestaShop/PrestaShop/pull/6711): Fixed show price display on Customer Groups back office, by @mickaelandrieu.
 * [6714](https://github.com/PrestaShop/PrestaShop/pull/6714): Fixed translation BO Emails, by @aleeks.
 * [6715](https://github.com/PrestaShop/PrestaShop/pull/6715): Wording update - remove 'CMS' to use 'page' only, by @alexeven.
 * [6721](https://github.com/PrestaShop/PrestaShop/pull/6721): Fixed generate htaccess, by @aleeks.
 * [6724](https://github.com/PrestaShop/PrestaShop/pull/6724): Integrate edit translations view, by @thierrymarianne.
 * [6725](https://github.com/PrestaShop/PrestaShop/pull/6725): Fix logo display in customer groups, by @maximebiloe.
 * [6731](https://github.com/PrestaShop/PrestaShop/pull/6731): Fix fatal in 5.4 due to concatenate in declaration, by @maximebiloe.
 * [6736](https://github.com/PrestaShop/PrestaShop/pull/6736): Fix broken element selection, by @thierrymarianne.


### Core

 * [6319](https://github.com/PrestaShop/PrestaShop/pull/6319): Improved password hashing. Thank you @firstred!
 * [6523](https://github.com/PrestaShop/PrestaShop/pull/6523): Add current robots.txt content in controller, by @quetzacoalt91.
 * [6647](https://github.com/PrestaShop/PrestaShop/pull/6647): Added position default 1 to registerHook, by @aleeks.
 * [6676](https://github.com/PrestaShop/PrestaShop/pull/6676): Make encryption system backward compatible with old 0.98 openssl versions, by @mickaelandrieu.
 * [6682](https://github.com/PrestaShop/PrestaShop/pull/6682): Fixed search alias for a namespace from a empty string. Thank you @true0r!
 * [6684](https://github.com/PrestaShop/PrestaShop/pull/6684): Added prestashop version to exceptions, by @aleeks.
 * [6688](https://github.com/PrestaShop/PrestaShop/pull/6688): Enable cache on guzzle requests, by @quetzacoalt91.
 * [6692](https://github.com/PrestaShop/PrestaShop/pull/6692): Clear 1.7.0.0.sql. Thank you @martinfojtik!
 * [6701](https://github.com/PrestaShop/PrestaShop/pull/6701): Let developer export themes easily, by @julienbourdeau.
 * [6709](https://github.com/PrestaShop/PrestaShop/pull/6709): Use \_PARENT\_THEME\_NAME\_ constant for consistency. Thank you @hubiktomas!
 * [6718](https://github.com/PrestaShop/PrestaShop/pull/6718): Add two new hooks actionAttributeCombinationSave/Delete, by @quetzacoalt91.
 * [6720](https://github.com/PrestaShop/PrestaShop/pull/6720): Add or update language with the new packs, by @maximebiloe.
 * [6726](https://github.com/PrestaShop/PrestaShop/pull/6726): Cleared cache when enable a theme, by @aleeks.
 * [6729](https://github.com/PrestaShop/PrestaShop/pull/6729): Fixed constant array, by @aleeks.
 * [6730](https://github.com/PrestaShop/PrestaShop/pull/6730): Move clear cache on controller (theme update), by @aleeks.
 * [6732](https://github.com/PrestaShop/PrestaShop/pull/6732): Ignore node modules on theme export, by @julienbourdeau.
 * [6735](https://github.com/PrestaShop/PrestaShop/pull/6735): Update default catalog, by @maximebiloe.
 * [6739](https://github.com/PrestaShop/PrestaShop/pull/6739): Fix changed namespace, by @maximebiloe.


### Installer

 * [6531](https://github.com/PrestaShop/PrestaShop/pull/6531): Fix 1.6 -> 1.7 migration ; add a few class stubs, by @jocel1.
 * [6649](https://github.com/PrestaShop/PrestaShop/pull/6649): Escaped percentage in parameters, by @thierrymarianne.
 * [6716](https://github.com/PrestaShop/PrestaShop/pull/6716): Made the open base dir works as expected, by @mickaelandrieu.
 * [6719](https://github.com/PrestaShop/PrestaShop/pull/6719): Moved array_walk for $parameters. Thank you @ecomm360! 


### Tests

 * [6708](https://github.com/PrestaShop/PrestaShop/pull/6708): Made browser configurable for testing, by @mickaelandrieu.
 
 
See all the PRs merged into the 'develop' codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20merged%3A2016-10-17..2016-10-23%20is%3Aclosed%20base%3Adevelop%20sort%3Acreated-asc%20).

 
## Code changes in '1.6.1.x' branch (for 1.6 patch versions) 

And now, the merged pull-requests on the ['1.6.1.x' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!
 
### Core

 * [6704](https://github.com/PrestaShop/PrestaShop/pull/6704): Fix advanced stock manager that prevented admin from removing stock quantity. Thank you @michaelhjulskov!
 * [6727](https://github.com/PrestaShop/PrestaShop/pull/6727): Do not overwrite mail files when installing new language, by @maximebiloe.

 
See all the PRs merged into the '1.6.1.x' codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20merged%3A2016-10-17..2016-10-23%20is%3Aclosed%20base%3A1.6%20sort%3Acreated-asc%20).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @antho-girard, @ecomm360, @firstred, @hubiktomas, @michaelhjulskov, @prestamodule, and @simonchik!

Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/browse/BOOM/?selectedTab=com.atlassian.jira.jira-projects-plugin:summary-panel)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
