---
layout: post
aliases: ["/news/coreweekly-week-13-2017"]
title:  "PrestaShop Core Weekly - Week 13 of 2017"
subtitle: "An inside look at the PrestaShop codebase"
date:   2017-04-06 09:10:11
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 27th of March to Sunday 2nd of April 2017.


## General messages

PrestaShop 1.7.1.0 was released last Monday! Yay!<br/>
Of course this means that maaaaany people will only now start test-driving this new minor version, and therefore it's "fixing newfound issues" time! We are planning for a quick 1.7.1.1 release, with some much-needed fixes. Expect it soon!<br/>
Do you see issues? [Please report them](http://forge.prestashop.com/)!

Likewise, the 1-Cick Upgrade module [is still in Beta](http://build.prestashop.com/news/updated-1-click-upgrade-module/), and fixes are being made to ensure that the final version works in the most common situations. Please bear with us while we fix the reported issues.

Work continues on 1.7.2.0 (to be released in June, if all goes well), and you can see the reworked Stock Management feature being built [in this PR](https://github.com/PrestaShop/PrestaShop/pull/7631), most notably.

Finally, version 1.6.1.13 should be released by the end of the month: [the milestone is 94% done](https://github.com/PrestaShop/PrestaShop/milestone/19?closed=1) :)

See you next week!

## Code changes in the 'develop' branch (for 1.7.2.0)

Now let's review the one merged pull-request on the 'develop' branch since the last Core Weekly Report!

* BO> [#7715](https://github.com/PrestaShop/PrestaShop/pull/7715): Change text tooltip in SEO, by @vincentbz.
* BO> [#7623](https://github.com/PrestaShop/PrestaShop/pull/7623): Avoid silencious fail of simple category creation from product form. Thank you @123monsite-regis!


## Code changes in '1.7.1.x' branch (for v1.7.1.0's patch versions) 

Next, let's review the merged pull-requests on the ['1.7.1.x' branch](https://github.com/PrestaShop/PrestaShop/tree/1.7.1.x) since the last Core Weekly Report!

#### Core

* [#7719](https://github.com/PrestaShop/PrestaShop/pull/7719): Delete unique key name for ps\_profile\_lang, by @aleeks.
* [#7711](https://github.com/PrestaShop/PrestaShop/pull/7711): Use trans() instead of undefined l(), by @maximebiloe.
* [#7708](https://github.com/PrestaShop/PrestaShop/pull/7708): Use the browser country prior to the shop one, by @maximebiloe.
* [#7705](https://github.com/PrestaShop/PrestaShop/pull/7705): Hide upside down language, by @aleeks.
* [#7700](https://github.com/PrestaShop/PrestaShop/pull/7700): Fixes needed for upgrade, by @aleeks.

Thank you to @123monsite-regis for his merged pull request!

Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
