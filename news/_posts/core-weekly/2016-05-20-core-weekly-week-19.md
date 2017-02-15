---
layout: post
title:  "PrestaShop Core Weekly - Week 19"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-05-20 09:42:13
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the previous week, from Monday 9th to Sunday 15th of May 2016.


## Milestones

The work being done on version 1.7.0.0 is still going strong, working towards a proper first Beta!<br/>
In the meantime, the 1.6 branch is being supported, as expected, and you should soon see 1.6.1.6 land :)

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

 * #5544: Some cleanup in Classic folder, by @maximebiloe.
 * #5548: Update wording in Classic theme according to mockups, by @maximebiloe.
 * #5552: Fix z-index to display navigation over the header in new theme, by @maximebiloe.
 * #5555: Highlight selected attributes in Classic, by @maximebiloe.
 * #5559: Custom text block margin change. Thank you @shepherdv8!


### Back office

 * #5508: add category by default field, by @mickaelandrieu.
 * #5522: .gitinore now ignore the parameters.old.php, by @shudrum.
 * #5523: combinations improvements, by @mickaelandrieu.
 * #5528: Implements new notifications in back-office header, by @maximebiloe.
 * #5536: Improved Product related search action, by @mickaelandrieu.

 
### Core

 * #5487: simplify logic expression. Thank you @zizuu-store!
 * #5527: Fix install, by @shine-neko.
 * #5535: Improved installation, by @shine-neko.
 * #5538: Updated Symfony framework to prevent CVE issue, by @mickaelandrieu.
 * #5539: Missing Core in classname. Thank you @raphael-homann!
 * #5542: Fix travis errors during CLI installation, by @shine-neko.
 * #5547: A module can now return more than one termsAndConditions object, by @paeddl.
 * #5551: Fix typo and warning in ConditionsToApproveFinder.php, by @maximebiloe.
 * #5553: Travis cache is now used, by @quetzacoalt91.
 * #5554: Fix call to undefined method for PDF generation, by @shudrum.
 * #5558: Use symfony level for php-cs-fixer, by @julienbourdeau.
 

### Localization

 * #5257: add some Czech translations. Thank you @fojtcz!
 
 

See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+merged%3A2016-05-02..2016-05-08+is%3Aclosed+base%3Adevelop).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @fojtcz, @raphael-homann, @shepherdv8, and @zizuu-store! Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
