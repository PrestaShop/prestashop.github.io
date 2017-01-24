---
layout: post
title:  "PrestaShop Core Weekly - Week 3 of 2017"
subtitle: "An inside look at the PrestaShop codebase"
date:   2017-01-24 09:10:11
author: xavierborderie
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last weeks, from Monday 16th to Sunday 22nd of January 2017.


## General messages

Work continues on improving the 1.7.0.x branch, all the while preparing for a strong 1.7.1.0 release -- and maintaining the 1.6.1.x branch!

Look forward to v1.7.0.5 and v1.6.1.12 in the coming weeks! :)

Found an issue? [Create a Forge ticket](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1)! Every day at around 11:30 (Paris time), part of the team gathers in order to review the recent Forge tickets and assess their priorities and urgency. Let's get productive!



## Code changes in 'develop' branch (for version 1.7.1.0)

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

Note that 1.7 patch versions are being built in the '1.7.0.x' branch. All of the PRs from that branch are ported in the 'develop' branch.


### Front office (including the default theme, named "Classic", based upon the [Starter Theme](https://github.com/PrestaShop/StarterTheme))

* [#7272](https://github.com/PrestaShop/PrestaShop/pull/7272): FO: fixed bug when logged in customer can access login/registration p…. Thank you @sarjon!
* [#7309](https://github.com/PrestaShop/PrestaShop/pull/7309): Integrate sitemap, by @thierrymarianne.
* [#7343](https://github.com/PrestaShop/PrestaShop/pull/7343): Check whether order is paid before serving a virtual product download. Thank you @rfc2822!
* [#7344](https://github.com/PrestaShop/PrestaShop/pull/7344): Hide virtual product download link until it's paid, by @antoin-m.
* [#7358](https://github.com/PrestaShop/PrestaShop/pull/7358): Fix duplicate payment submissions and address initialization. Thank you @tpsjr7!
* [#7365](https://github.com/PrestaShop/PrestaShop/pull/7365): Mobile Cart - Improperly integrated Fields, by @hibatallahaouadni.



### Back office

* [#7139](https://github.com/PrestaShop/PrestaShop/pull/7139): Fix product redirection from back office search results. Thank you @123monsite-regis!
* [#7315](https://github.com/PrestaShop/PrestaShop/pull/7315): Fix integration issues with translation page, by @nihco2.
* [#7332](https://github.com/PrestaShop/PrestaShop/pull/7332): Redirect with message when root category is not available for a shop, by @aleeks.
* [#7352](https://github.com/PrestaShop/PrestaShop/pull/7352): Reduce width of brand select input, by @thierrymarianne.
* [#7364](https://github.com/PrestaShop/PrestaShop/pull/7364): Sort products in descending order, by @thierrymarianne.
* [#7366](https://github.com/PrestaShop/PrestaShop/pull/7366): Fix wrong domain, by @aleeks.
* [#7371](https://github.com/PrestaShop/PrestaShop/pull/7371): Fix nested categories cache id, by @thierrymarianne.
* [#7373](https://github.com/PrestaShop/PrestaShop/pull/7373): Add a new hook on dashboard, by @antoinemille.



### Core

* [#7277](https://github.com/PrestaShop/PrestaShop/pull/7277): Improve MARIA DB compatibility. Thank you @shopmonauten!
* [#7289](https://github.com/PrestaShop/PrestaShop/pull/7289): Code standard fixes & improvements. Thank you @psandmore!
* [#7316](https://github.com/PrestaShop/PrestaShop/pull/7316): Fixed bug that erases current customization fields. Thank you @djbuch!
* [#7335](https://github.com/PrestaShop/PrestaShop/pull/7335): Re-introduce server media, by @aleeks.
* [#7346](https://github.com/PrestaShop/PrestaShop/pull/7346): Fix getPriceWithoutReduct default id_product_attribute, by @maximebiloe.



### Installer

* [#7348](https://github.com/PrestaShop/PrestaShop/pull/7348): Fix wrong domain, by @aleeks.
* [#7374](https://github.com/PrestaShop/PrestaShop/pull/7374): Import sql upgrade from 1.6.x, by @aleeks.



See all the PRs merged into the 'develop' codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20merged%3A2017-01-16..2017-01-22%20is%3Aclosed%20base%3Adevelop).


## Code changes in '1.6.1.x' branch (for 1.6 patch versions) 

And now, the merged pull-requests on the ['1.6.1.x' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!


### Front office

* [#6689](https://github.com/PrestaShop/PrestaShop/pull/6689): Avoid overwriting $token in global Smarty context.. Thank you @alexsegura!


### Core

* [#7239](https://github.com/PrestaShop/PrestaShop/pull/7239): Fixed CORS setting the header. Thank you @dralbert!



See all the PRs merged into the '1.6.1.x' codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20merged%3A2017-01-16..2017-01-22%20is%3Aclosed%20base%3A1.6.1.x).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @123monsite-regis, @alexsegura, @djbuch, @dralbert, @psandmore, @rfc2822, @sarjon, @shopmonauten, and @tpsjr7!

Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/browse/BOOM/?selectedTab=com.atlassian.jira.jira-projects-plugin:summary-panel)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
