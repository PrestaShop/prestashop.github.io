---
layout: post
title:  "PrestaShop Core Weekly - Week 20"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-05-25 09:10:11
author: xavierborderie
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the previous week, from Monday 16th to Sunday 22th of May 2016.


## Milestones

Come and meet us in Paris on June 1st & 2nd!<br/>
We're organizing [two events](http://build.prestashop.com/news/contributor-night-barcamp-prestashop-day/) along the PrestaShop Day:

 * June 1st: a **contributor night** in our Paris office. Want to contribute or learn how to contribute? [Register here](https://docs.google.com/a/prestashop.com/forms/d/1O60GhRFICbnt3TxZ3Hrne-TcHIoeEDLATcVD7XXNeYg/viewform)!
 * June 2nd: a **community barcamp** within the walls of the PSDay. Have something to share about PrestaShop or e-commerce? [Let us know here](https://docs.google.com/a/prestashop.com/forms/d/12hOjfnGaFuzdlD_BIpm3bU_2Qf6aBYbdUgYNN4SBEvI/viewform)!

See you there!

The work being done on version 1.7.0.0 is still going strong, working towards a proper first Beta!<br/>
In the meantime, the 1.6 branch is being supported, as expected, and you should soon see 1.6.1.6 be released :)

Want to help things go faster? There are several ways: 

 * [Test the latest alpha version](http://build.prestashop.com/news/here-comes-prestashop-1-7-alpha-4/) (or better, test [the current development version, straight from GitHub](https://github.com/PrestaShop/PrestaShop));
 * [Report issues on the Forge](http://forge.prestashop.com/secure/CreateIssue!default.jspa?selectedProjectId=11322&issuetype=1) (or [confirm issues that are already listed](http://forge.prestashop.com/browse/BOOM-738?jql=project%20%3D%20BOOM%20AND%20created%3E%3D-1w%20ORDER%20BY%20created%20DESC) - use the search engine!); 
 * Fix issues by [submitting a pull request](https://github.com/PrestaShop/PrestaShop/pulls) (or confirm that a submitted pull request does indeed fix the presented issue); 
 * Help improve the [1.7 Theme Development doc](https://github.com/PrestaShop/docs) (yes, it is very sparse at the moment).

You can find an up-to-date thread about the 1.7 development [in the forum](https://www.prestashop.com/forums/topic/480580-want-to-know-more-about-17/).<br/>
The 1.7 Project FAQ is always available here: [http://build.prestashop.com/news/prestashop-1-7-faq/](http://build.prestashop.com/news/prestashop-1-7-faq/).

Do you live near Paris? Do you want to come test-drive the design of PS 1.7? [Let us know!](http://build.prestashop.com/news/call-for-user-testing-volunteers/)


## Code changes in branch 1.6.1.x

Let's review the merged pull-requests on the ['1.6.1.x' branch](https://github.com/PrestaShop/PrestaShop/tree/1.6.1.x) since the last Core Weekly Report!
 

### Front office (including the default theme, named "Classic" for now, based upon the [Starter Theme](https://github.com/PrestaShop/PrestaShop/tree/develop/themes/classic))

 * [4392](https://github.com/PrestaShop/PrestaShop/pull/4392): Broken pagination links in loyalty, by @maximebiloe.
 * [5410](https://github.com/PrestaShop/PrestaShop/pull/5410): Fix CSS 404 when using subdirectory. Thank you @firstred!
 * [5588](https://github.com/PrestaShop/PrestaShop/pull/5588): Fix blockwishlist utf8 entities, by @rgaillard.


### Back office

 * [4434](https://github.com/PrestaShop/PrestaShop/pull/4434): fixed bug when toggle status product not logged, by @kelu95.
 * [4439](https://github.com/PrestaShop/PrestaShop/pull/4439): fixed bug parent tab list wont show if admin tab class is invalid, by @kelu95.
 * [4440](https://github.com/PrestaShop/PrestaShop/pull/4440): add user shop origin in autocomplete cart rule, by @kelu95.
 * [4619](https://github.com/PrestaShop/PrestaShop/pull/4619): Improved Customer Back Office display, by @mickaelandrieu.
 * [5563](https://github.com/PrestaShop/PrestaShop/pull/5563): fixed bug when no results with address and map does not exist. Thank you @idnovate!
 * [5569](https://github.com/PrestaShop/PrestaShop/pull/5569): Display all carriers in Dashbord Configuration. Thank you @okom3pom!

 
### Core

 * [5240](https://github.com/PrestaShop/PrestaShop/pull/5240): Check for displayPaymentEU to fix advanced checkout restrictions. Thank you @firstred!
 * [5242](https://github.com/PrestaShop/PrestaShop/pull/5242): Fix fatal error on classes/stock/StockAvailable.php, by @xborderie.
 * [5314](https://github.com/PrestaShop/PrestaShop/pull/5314): Return empty string when module is not installed. Thank you @alexsegura!
 * [5392](https://github.com/PrestaShop/PrestaShop/pull/5392): Update shopping-cart-advanced.tpl. Thank you @nobodaddy!
 * [5455](https://github.com/PrestaShop/PrestaShop/pull/5455): fixed mysql 5.7 "virtual" is a reserved keyword. Thank you @raphael-homann!
 * [5500](https://github.com/PrestaShop/PrestaShop/pull/5500): Sending mail fail with invalid Id given. Thank you @hiousi!
 

### Webservice

 * [5216](https://github.com/PrestaShop/PrestaShop/pull/5216): Fix for PHP 5.2, 5.3 and 7.0 compatibility. Thank you @firstred!
 
 
### PDF

 * [5411](https://github.com/PrestaShop/PrestaShop/pull/5411): Fix generation of PDF files. Thank you @firstred!
 
 
### Installer

 * [5482](https://github.com/PrestaShop/PrestaShop/pull/5482): All key must not be nullable, by @julienbourdeau.


## Code changes in branch develop (for version 1.7.0.0)

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!
 

### Front office (including the default theme, named "Classic", based upon the [Starter Theme](https://github.com/PrestaShop/PrestaShop/tree/develop/themes/classic))

 * [5232](https://github.com/PrestaShop/PrestaShop/pull/5232): Avoid the deletion of still used address in order history, by @julienbourdeau.
 * [5516](https://github.com/PrestaShop/PrestaShop/pull/5516): Redesign checkout personal information step, by @julienbourdeau.
 * [5564](https://github.com/PrestaShop/PrestaShop/pull/5564): Re-implement minimum purchase amount, by @maximebiloe.
 * [5565](https://github.com/PrestaShop/PrestaShop/pull/5565): Add confirmation checkbox to ps_emailsubscription, by @quetzacoalt91.
 * [5572](https://github.com/PrestaShop/PrestaShop/pull/5572): Move cms link generation in module controller, by @quetzacoalt91.
 * [5576](https://github.com/PrestaShop/PrestaShop/pull/5576): Open newsletter privacy policy in a new page, by @quetzacoalt91.
 * [5586](https://github.com/PrestaShop/PrestaShop/pull/5586): Fix html errors on Home Page, by @mickaelandrieu.
 * [5587](https://github.com/PrestaShop/PrestaShop/pull/5587): Fixed invalid HTML list on Category Page, by @mickaelandrieu.
 * [5597](https://github.com/PrestaShop/PrestaShop/pull/5597): Fixed HTML errors on Cart Page, by @mickaelandrieu.



### Back office

 * [3630](https://github.com/PrestaShop/PrestaShop/pull/3630): Email patches: fix encoding + add possibility to use pop3. Thank you @freedayko!
 * [3729](https://github.com/PrestaShop/PrestaShop/pull/3729): Fix AdminSearch customer count. Thank you @firstred!
 * [3833](https://github.com/PrestaShop/PrestaShop/pull/3833): Customer message should be private. Thank you @djbuch!
 * [5534](https://github.com/PrestaShop/PrestaShop/pull/5534): Improve product page layout according to mockups, by @nihco2.
 * [5537](https://github.com/PrestaShop/PrestaShop/pull/5537): Friendly URL are fixed on the Product page, by @quetzacoalt91.
 * [5568](https://github.com/PrestaShop/PrestaShop/pull/5568): Rename tabs in navigation an make an ellipsis for too long tabs name, by @maximebiloe.
 * [5578](https://github.com/PrestaShop/PrestaShop/pull/5578): Fix CSV import on PHP 7, by @quetzacoalt91.
 * [5581](https://github.com/PrestaShop/PrestaShop/pull/5581): Add .editorconfig rule to avoid trimming Markdown. Thank you @mcdado!
 * [5585](https://github.com/PrestaShop/PrestaShop/pull/5585): refacto trans twig, by @julienbourdeau.
 * [5590](https://github.com/PrestaShop/PrestaShop/pull/5590): Fixed bug when changing impact on price. Thank you @antho-girard.
 * [5596](https://github.com/PrestaShop/PrestaShop/pull/5596): The broken links on the navigation are fixed, by @shudrum.
 * [5603](https://github.com/PrestaShop/PrestaShop/pull/5603): Avoid PHP notices in the old template. Thank you @brunojunior!
 * [5609](https://github.com/PrestaShop/PrestaShop/pull/5609): use Tools::getCurrentUrlProtocolPrefix(). Thank you @zizuu-store!

 
### Core

 * [5525](https://github.com/PrestaShop/PrestaShop/pull/5525): Legal compliancy code enhancement on mails, product presenter and install fixture data, by @tchauviere.
 * [5556](https://github.com/PrestaShop/PrestaShop/pull/5556): Make Symfony routes working even without URL rewriting, by @quetzacoalt91.
 * [5599](https://github.com/PrestaShop/PrestaShop/pull/5599): Remove unused $order_creation_failed var. Thank you @prestamodule!
 * [5601](https://github.com/PrestaShop/PrestaShop/pull/5601): get carrier by reference using specific language. Thank you @prestamodule!
 * [5602](https://github.com/PrestaShop/PrestaShop/pull/5602): Fixed invalid path to PEAR in Archive_Tar library, by @mickaelandrieu.

 
 
### Installer

 * [5567](https://github.com/PrestaShop/PrestaShop/pull/5567): Install first available theme (sort alphabetically), by @julienbourdeau.
 * [5574](https://github.com/PrestaShop/PrestaShop/pull/5574): Better installation performances, by @quetzacoalt91.
 

### Tests

 * [5566](https://github.com/PrestaShop/PrestaShop/pull/5566): Introduced dump() helper function, by @mickaelandrieu.
 
 
### Webservice
 
 * [3745](https://github.com/PrestaShop/PrestaShop/pull/3745): Adding Message to the API. Thank you @gleseur!
 
 

See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+merged%3A2016-05-16..2016-05-22+is%3Aclosed).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @alexsegura, @brunojunior, @djbuch, @firstred, @freedayko, @gleseur, @hiousi, @idnovate, @mcdado, @nobodaddy, @okom3pom, @prestamodule, @raphael-homann, and @zizuu-store! Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
