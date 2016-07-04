---
layout: post
title:  "PrestaShop Core Weekly - Week 26"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-07-04 09:10:11
author: xavierborderie
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the previous week, from Monday 26th of June to Sunday 3rd of July 2016.


## General messages

Onward with 1.7! The team is still cranking code, and we're happy to see more and more people contributing to the codebase!

Have you tested [Beta 1 of PrestaShop 1.7](https://www.prestashop.com/en/1.7)?<br/>
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

 * [5774](https://github.com/PrestaShop/PrestaShop/pull/5774): Improve classic theme integration, by @nihco2.
 * [5796](https://github.com/PrestaShop/PrestaShop/pull/5796): Removed shop name from meta title. Thank you @dh42!
 * [5799](https://github.com/PrestaShop/PrestaShop/pull/5799): Fix slider legends : alt and title attributes should be populated in classic theme, by @mickaelandrieu.
 * [5802](https://github.com/PrestaShop/PrestaShop/pull/5802): Let the modules handle the newsletter subscription, by @maximebiloe.
 * [5814](https://github.com/PrestaShop/PrestaShop/pull/5814): Add last level category for product breadcrumb, by @maximebiloe.
 * [5823](https://github.com/PrestaShop/PrestaShop/pull/5823): Fix product page selected border, by @nihco2.


### Back office

 * [5136](https://github.com/PrestaShop/PrestaShop/pull/5136): Fixed parsing of files \*.twig for translations. Thank you @true0r!
 * [5337](https://github.com/PrestaShop/PrestaShop/pull/5337): Fix CMS pages permissions. Thank you @fojtcz!
 * [5794](https://github.com/PrestaShop/PrestaShop/pull/5794): Display all combinations to make a product pack, by @maximebiloe.
 * [5795](https://github.com/PrestaShop/PrestaShop/pull/5795): You can exclude already discounted products from voucher. Thank you @kpodemski!
 * [5800](https://github.com/PrestaShop/PrestaShop/pull/5800): Load proper service to get the translator, by @quetzacoalt91.
 * [5803](https://github.com/PrestaShop/PrestaShop/pull/5803): Increase max. length of catalog price rule name. Thank you @antho-girard!
 * [5804](https://github.com/PrestaShop/PrestaShop/pull/5804): Display right tax info in carrier wizard, by @maximebiloe.
 * [5815](https://github.com/PrestaShop/PrestaShop/pull/5815): Increase number of products displayed for pack creation, by @maximebiloe.
 * [5822](https://github.com/PrestaShop/PrestaShop/pull/5822): Empty text field should be submitted, by @mickaelandrieu.

 
### Core

 * [5086](https://github.com/PrestaShop/PrestaShop/pull/5086): Prevent PHP Warning in Tools class. Thank you @kermes!
 * [5789](https://github.com/PrestaShop/PrestaShop/pull/5789): Fixed missing `legend` property in ImageRetriever, by @mickaelandrieu.
 * [5790](https://github.com/PrestaShop/PrestaShop/pull/5790): Select the cover image and not the first one if set in back office, by @mickaelandrieu.
 * [5791](https://github.com/PrestaShop/PrestaShop/pull/5791): Sprintf support in the translator, by @jtabet.
 * [5798](https://github.com/PrestaShop/PrestaShop/pull/5798): Remove not needed concatenation in meta title. Thank you @prestamodule!
 * [5801](https://github.com/PrestaShop/PrestaShop/pull/5801): Fixed notice invalid role is passed to isGranted(), by @jtabet.
 

### Web service
 
 * [5531](https://github.com/PrestaShop/PrestaShop/pull/5531): New hook added for adding new resource in webservice. Thank you dks295!
 
 
### Localization

 * [5818](https://github.com/PrestaShop/PrestaShop/pull/5818): Added some domains for translation, by @jtabet.
 * [5819](https://github.com/PrestaShop/PrestaShop/pull/5819): Replaced |sprintf: with sprintf= in smarty templates, by @jtabet.
 * [5820](https://github.com/PrestaShop/PrestaShop/pull/5820): Replaced @s{n} with %{n} in translations, by @jtabet.
 * [5824](https://github.com/PrestaShop/PrestaShop/pull/5824): Added a call to the Context's Translator in module->l(), by @jtabet.
 * [5825](https://github.com/PrestaShop/PrestaShop/pull/5825): Added a call to the Context's Translator in smarty l() when a domain is provided, by @jtabet.
 
 
### Installer

 * [5793](https://github.com/PrestaShop/PrestaShop/pull/5793): Added US military base codes. Thank you @dh42!
 * [5806](https://github.com/PrestaShop/PrestaShop/pull/5806): Installer improvement, by @jtabet.

 

See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20merged%3A2016-06-27..2016-07-03%20is%3Aclosed%20sort%3Acreated-asc%20base%3Adevelop%20).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @antho-girard, @dh42, @fojtcz, @kermes, @kpodemski, @prestamodule, and @true0r! Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
