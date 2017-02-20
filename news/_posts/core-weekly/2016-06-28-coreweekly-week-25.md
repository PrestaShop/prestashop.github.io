---
layout: post
title:  "PrestaShop Core Weekly - Week 25 of 2016"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-06-28 09:10:11
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the previous week, from Monday 20th to Sunday 26th of June 2016.


## General messages

More than a year after creating the [`1.6.1.x` branch](https://github.com/PrestaShop/PrestaShop/tree/1.6.1.x) (and thus, deprecating the `1.6` branch) [and warning not to use the `1.6` branch anymore](http://build.prestashop.com/news/introducing-new-branching-model-prestashop/), we chose to finally close the 1.6 branch. Several pull requests ([79, to be exact](http://build.prestashop.com/news/review-your-pull-requests/)) remained open in the old `1.6` branch, most of which could not be merged anymore for obvious reasons; they were automatically closed as soon as we closed the branch. <br/>
Despite our "Review your PR" campaign in November 2015, which asked PR contributors to update their code and switch it to the `1.6.1.x` branch or the `develop` branch, many PR remained untouched. While we did port some to the develop branch, we just cannot work them all into PS 1.7 while we are hard at work making it happen.

About 1.7...

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

 * [4485](https://github.com/PrestaShop/PrestaShop/pull/4485): Update country translations in Swedish. Thank you @macroy!
 
 
### Front office (including the default theme, named "Classic", based upon the [Starter Theme](https://github.com/PrestaShop/PrestaShop/tree/develop/themes/classic))

 * [5769](https://github.com/PrestaShop/PrestaShop/pull/5769): Fix class typo in Payment step. Thank you @fojtcz!
 * [5770](https://github.com/PrestaShop/PrestaShop/pull/5770): Remove spaces from textarea in Contact form. Thank you @fojtcz!
 * [5772](https://github.com/PrestaShop/PrestaShop/pull/5772): Tax entry should be displayed before totals, by @mickaelandrieu.
 * [5777](https://github.com/PrestaShop/PrestaShop/pull/5777): Made the Symfony error/exception handler availables in front office, by @mickaelandrieu.
 * [5779](https://github.com/PrestaShop/PrestaShop/pull/5779): Handle cart with virtual products, by @maximebiloe.
 * [5782](https://github.com/PrestaShop/PrestaShop/pull/5782): Adds title tag to banner link. Thank you @dh42!
 * [5783](https://github.com/PrestaShop/PrestaShop/pull/5783): Fix undefined variable on order confirmation, by @maximebiloe.
 * [5787](https://github.com/PrestaShop/PrestaShop/pull/5787): Removing logo text from logo. Thank you @dh42!
 * [5788](https://github.com/PrestaShop/PrestaShop/pull/5788): Increases social share button blick pad. Thank you @dh42! 


### Back office

 * [5385](https://github.com/PrestaShop/PrestaShop/pull/5385): Category name can now be a single character. Thank you @antho-girard!
 * [5390](https://github.com/PrestaShop/PrestaShop/pull/5390): Changed right management system to something closer to SF2's security, by @jtabet.
 * [5583](https://github.com/PrestaShop/PrestaShop/pull/5583): The maintenance text can be customized from the back-office. Thank you @kpodemski!
 * [5760](https://github.com/PrestaShop/PrestaShop/pull/5760): Add Not Null check on module upload, by @quetzacoalt91.
 * [5764](https://github.com/PrestaShop/PrestaShop/pull/5764): Enable justify option in TinyMCE, by @maximebiloe.
 * [5765](https://github.com/PrestaShop/PrestaShop/pull/5765): put legacy context on cache during a request, by @mickaelandrieu.
 * [5773](https://github.com/PrestaShop/PrestaShop/pull/5773): Add missing translation domains for ModuleController, by @alexeven.
 * [5784](https://github.com/PrestaShop/PrestaShop/pull/5784): Domains added to the product page, by @alexeven.
 * [5785](https://github.com/PrestaShop/PrestaShop/pull/5785): Add translation domains, by @alexeven.

 
### Core

 * [5316](https://github.com/PrestaShop/PrestaShop/pull/5316): Fixed deprecation on YAML component, by @shine-neko.
 * [5510](https://github.com/PrestaShop/PrestaShop/pull/5510): Clean-up code on clearCache() function. Thank you @zizuu-store!
 * [5731](https://github.com/PrestaShop/PrestaShop/pull/5731): Deflate .svg files. Thank you @mrmanchot!
 * [5758](https://github.com/PrestaShop/PrestaShop/pull/5758): Adapt payment api for Atos payment option, by @maximebiloe.
 * [5771](https://github.com/PrestaShop/PrestaShop/pull/5771): Custom translations, by @jtabet.
 * [5775](https://github.com/PrestaShop/PrestaShop/pull/5775): Rename ESlint config file according to new recommendation, by @julienbourdeau.
 * [5776](https://github.com/PrestaShop/PrestaShop/pull/5776): Use already defined tax variable instead of recalculate it, by @maximebiloe.
 * [5780](https://github.com/PrestaShop/PrestaShop/pull/5780): Set unit_price for product lists, by @maximebiloe.
 * [5781](https://github.com/PrestaShop/PrestaShop/pull/5781): Fix theme deletion, by @maximebiloe.
 
 
### Installer

 * [5757](https://github.com/PrestaShop/PrestaShop/pull/5757): Added SF translation download & unzip during installation, by @jtabet.
 * [5762](https://github.com/PrestaShop/PrestaShop/pull/5762): Add translation domains in install, by @shine-neko.
 * [5768](https://github.com/PrestaShop/PrestaShop/pull/5768): Ability to add a theme during installation, by @shine-neko.
 * [5778](https://github.com/PrestaShop/PrestaShop/pull/5778): Convert script update-eu-taxrulegroups.php in symfony Command, by @shine-neko.
 
 

See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20is%3Aclosed%20merged%3A2016-06-20..2016-06-26%20base%3Adevelop%20).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @antho-girard, @dh42, @fojtcz, @kpodemski, @macroy, @mrmanchot, and @zizuu-store! Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
