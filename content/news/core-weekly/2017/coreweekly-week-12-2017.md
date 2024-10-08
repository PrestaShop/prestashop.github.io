---
layout: post
aliases: ["/news/coreweekly-week-12-2017"]
title:  "PrestaShop Core Weekly - Week 12 of 2017"
subtitle: "An inside look at the PrestaShop codebase"
date:   2017-03-29 09:10:11
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 20th  to Sunday 26th of March 2017.


## General messages

As you can see again in this weekly report, most of the PR's currently being merged are in the '1.7.1.x'. We're closing the last planned tickets towards a [release of PrestaShop 1.7.1.0](http://build.prestashop.com/news/announcing-our-2017-release-schedule/). Only a few more last-minute issues to fix, and we should be good to go! Get ready!

Following the update to the 1-Click Upgrade module, we had to break the string-freeze and introduce a few new/updates strings. Help us reach 100% in as many languages as possible for this release! [Contribute now](https://crowdin.com/project/prestashop-official) and be a part of the [translators hall of fame](http://translators.prestashop.com/)!

1.7.1.0 is coming! :)


## Code changes in the 'develop' branch (for 1.7.2.0)

Now let's review the one merged pull-request on the 'develop' branch since the last Core Weekly Report!

* [#7680](https://github.com/PrestaShop/PrestaShop/pull/7680): Fixed javascript bug on form submission. Thank you @sebbareyre!


## Code changes in '1.7.1.x' branch (for v1.7.1.0, currently in beta) 

Next, let's review the merged pull-requests on the ['1.7.1.x' branch](https://github.com/PrestaShop/PrestaShop/tree/1.7.1.x) since the last Core Weekly Report!

#### Core

* [#7685](https://github.com/PrestaShop/PrestaShop/pull/7685): Don't update url_rewrite with upside lang, by @aleeks.
* [#7683](https://github.com/PrestaShop/PrestaShop/pull/7683): Remove clear cache for autoupgrade, by @aleeks.
* [#7679](https://github.com/PrestaShop/PrestaShop/pull/7679): Upside down language for crowdin, by @aleeks.
* [#7674](https://github.com/PrestaShop/PrestaShop/pull/7674): Fix ThemeValidator for child themes, by @maximebiloe.
* [#7652](https://github.com/PrestaShop/PrestaShop/pull/7652): Rename id\_product\_redirected variable. Thank you @martinfojtik!
* [#7621](https://github.com/PrestaShop/PrestaShop/pull/7621): Allows multiple retro names for a hook, by @antoin-m.

#### Front office

* [#7694](https://github.com/PrestaShop/PrestaShop/pull/7694): Fixed a typo in template Product, by @aleeks.
* [#7686](https://github.com/PrestaShop/PrestaShop/pull/7686): Fix Mixed-Content issues when SSL partially enabled, by @quetzacoalt91.
* [#7684](https://github.com/PrestaShop/PrestaShop/pull/7684): Incorrect event dataset call. Thank you @iqit-commerce!

#### Back office

* [#7701](https://github.com/PrestaShop/PrestaShop/pull/7701): Fix access denied on Customers Service, by @kompilorb.
* [#7668](https://github.com/PrestaShop/PrestaShop/pull/7668): Implode Translation Permission, by @kompilorb.

#### Installer

* [#7691](https://github.com/PrestaShop/PrestaShop/pull/7691): Remove awaiting Paypal order status, by @maximebiloe.

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @martinfojtik, @iqit-commerce, and @sebbareyre!


Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
