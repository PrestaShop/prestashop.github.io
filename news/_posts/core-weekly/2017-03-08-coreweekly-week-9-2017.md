---
layout: post
title:  "PrestaShop Core Weekly - Week 9 of 2017"
subtitle: "An inside look at the PrestaShop codebase"
date:   2017-03-08 09:10:11
author: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 27th of February to Sunday 5th of March 2017.


## General messages

As I am sure you are aware, [PrestaShop 1.7.1.0 Beta 1 was released last week](http://build.prestashop.com/news/prestashop-1-7-1-0-beta-1/)! We need you to test it and help us make sure it's a solid version by [reporting issues](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1) and [providing pull-requests for bugfixes](https://github.com/PrestaShop/PrestaShop/tree/1.7.1.x). Thank you!

Being on the track to release 1.7.1.0 means one thing very specific to our GitHub contributor: branch updates! Since last week:

* The 'develop' branch is used to work on the next minor version, 1.7.2.0!
* Work on 1.7.1.0 is now done in the '1.7.1.x' branch. 
  * This is also where pull requests for 1.7.1.0's patch versions (1.7.1.1, 1.7.1.2, etc.) should be made
* Work on 1.7.0.6 (the recent security fix) was done in the '1.7.0.x' branch.
* As usuel, the '1.6.1.x' branch remains the one to choose when fixing bugs for PrestaShop 1.6.

This means that if you know how to fix an issue with 1.7.1.0 Beta 1, you should make your pull request on the '1.7.1.x' branch, NOT on 'develop'. Thank you!

If you can't find any issue (yay!) or if you don't know how to fix issues, you can still contribute by [helping with the translation for 1.7.1.0](http://build.prestashop.com/news/171-Translations-update/) :)


## Code changes in 'develop' branch (for the next minor version, v1.7.2.0)

Now let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

Note that 1.7 patch versions are being built in the '1.7.0.x' branch. All of the PRs from that branch are eventually ported in the 'develop' branch.

* BO> [#7590](https://github.com/PrestaShop/PrestaShop/pull/7590): Fix bug on uploading too large images. Thank you @madef!
* BO> [#7618](https://github.com/PrestaShop/PrestaShop/pull/7618): Update addons authentication form, by @thierrymarianne.
* FO> [#7602](https://github.com/PrestaShop/PrestaShop/pull/7602): Let translate the edit label on order checkout. Thank you @prestamodule!
* CO> [#7609](https://github.com/PrestaShop/PrestaShop/pull/7609): Removed return duplication from search provider. Thank you @sarjon!
* CO> [#7611](https://github.com/PrestaShop/PrestaShop/pull/7611): Removed setSortOption in ProductSearchQuery. Thank you @sarjon!


## Code changes in '1.7.1.x' branch (for v1.7.1.0, currently in beta) 

Next, the merged pull-requests on the ['1.7.1.x' branch](https://github.com/PrestaShop/PrestaShop/tree/1.7.1.x) since the last Core Weekly Report!

* FO> [#7561](https://github.com/PrestaShop/PrestaShop/pull/7561): Remove fakepath, by @antoin-m.
* BO> [#7616](https://github.com/PrestaShop/PrestaShop/pull/7616): Fix getAvailableFields malformed json, by @antoin-m.
* BO> [#7627](https://github.com/PrestaShop/PrestaShop/pull/7627): BO: fix wrong domain for product module page, by @alexeven.
* CO> [#7625](https://github.com/PrestaShop/PrestaShop/pull/7625): All we need to autoupgrade!, by @aleeks.
* CO> [#7629](https://github.com/PrestaShop/PrestaShop/pull/7629): Merge 1.7.0.x on 1.7.1.x, by @aleeks.
* CO> [#7633](https://github.com/PrestaShop/PrestaShop/pull/7633): Fix doctrine association between translation and lang, by @quetzacoalt91.
* CO> [#7635](https://github.com/PrestaShop/PrestaShop/pull/7635): Update robot.txt using english, by @florervd.


## Code changes in '1.7.0.x' branch (for v1.7.0.0 patch versions) 

Then, the merged pull-requests on the ['1.7.0.x' branch](https://github.com/PrestaShop/PrestaShop/tree/1.7.0.x) since the last Core Weekly Report!

* BO> [#7634](https://github.com/PrestaShop/PrestaShop/pull/7634): Hotfix for module notifications page, by @quetzacoalt91.
* BO> [#7628](https://github.com/PrestaShop/PrestaShop/pull/7628): Permissions on Module import, by @kompilorb.
* BO> [#7626](https://github.com/PrestaShop/PrestaShop/pull/7626): Modification permissions on Product Catalog and Module, by @kompilorb.


## Code changes in '1.6.1.x' branch (for 1.6 patch versions) 

Finally, the merged pull-requests on the ['1.6.1.x' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

* FO> [#7244](https://github.com/PrestaShop/PrestaShop/pull/7244): Hide shipping section when using smartphone, by @fatmabouchekoua.




Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @madef, @prestamodule, and @sarjon!


Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
