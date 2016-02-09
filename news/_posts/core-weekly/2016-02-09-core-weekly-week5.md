---
layout: post
title:  "PrestaShop Core Weekly - Week 5"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-02-09 15:37:41
author: xavierborderie
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 1st to Sunday 7th of February 2016.


## Milestones

The team is hard at work on PrestaShop 1.7, the next major version of the most complete e-commerce software solution there is. You can find an up-to-date thread about it [in the forum](https://www.prestashop.com/forums/topic/480580-want-to-know-more-about-17/).

_Please note that finishing the [planned projects for 1.7](http://build.prestashop.com/news/meet-prestashop-team-prestashop-1-7/) and delivering a quality beta version soon is at the moment the top priority for the PrestaShop Core developers. Merging community pull requests has therefore slowed down until then, but will be back_ with a vengeance _once we have a first beta to release to you! So please keep testing, and keep sending patches our way: it's the_ raison d'être _of this community project!_

Do you want to encourage us? **[Give us a star on GitHub](https://github.com/PrestaShop/PrestaShop)**! :)


## Code changes in 1.7.0.0-develop

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!


#### Text changes

 * [4856](https://github.com/PrestaShop/PrestaShop/pull/4856): Wording of Themes tab, by @Saycile.
 * [4860](https://github.com/PrestaShop/PrestaShop/pull/4860): typo in order_state.xml. Thank you @grezlikowski.
 * [4887](https://github.com/PrestaShop/PrestaShop/pull/4887): wording/translation, by @kelu95.
 

#### Product page

 * [4777](https://github.com/PrestaShop/PrestaShop/pull/4777): Fix refresh function for Kpis. Modifies KPI cache behavior, by @xGouley.
 * [4816](https://github.com/PrestaShop/PrestaShop/pull/4816): Fix catalog filter max, by @xGouley.
 * [4829](https://github.com/PrestaShop/PrestaShop/pull/4829): product form options integration, by @kelu95.
 * [4831](https://github.com/PrestaShop/PrestaShop/pull/4831): recommended modules display on product page, by @xGouley.
 * [4838](https://github.com/PrestaShop/PrestaShop/pull/4838): fix nb download mapping, by @kelu95.
 * [4844](https://github.com/PrestaShop/PrestaShop/pull/4844): Fix virtual product activation, by @kelu95.
 * [4857](https://github.com/PrestaShop/PrestaShop/pull/4857): add fadeIn after page load, by @kelu95.
 * [4865](https://github.com/PrestaShop/PrestaShop/pull/4865): remove form element from partial module template, by @kelu95.
 * [4866](https://github.com/PrestaShop/PrestaShop/pull/4866): fix js category tree, by @kelu95.
 * [4881](https://github.com/PrestaShop/PrestaShop/pull/4881): dropzone integration, by @kelu95.
 
 
#### Module page

 * [4840](https://github.com/PrestaShop/PrestaShop/pull/4840): Several fixes and enhancements to the Module page, by @tchauviere.
 * [4872](https://github.com/PrestaShop/PrestaShop/pull/4872): rubber patches, by @Quetzacoalt91.
 

#### Front office (default theme)

 * [4895](https://github.com/PrestaShop/PrestaShop/pull/4895): New default theme: Here it is! With more than 250 commits since November 2015 and a tremendous work on both the Starter Theme and the default theme, congrats to @maximebiloe, @julienbourdeau, @djfm, @nihco2, @ishcherbakov for this PR, as well as community member @kpodemski for his suggestions!
 
#### UI Kit

 * [4848](https://github.com/PrestaShop/PrestaShop/pull/4848): Add uikit repo in admin theme default, by @gfanton
 * [4864](https://github.com/PrestaShop/PrestaShop/pull/4864): add missing css/js files, by @kelu95.

 
#### Back office

 * [4822](https://github.com/PrestaShop/PrestaShop/pull/4822): New navigation & header, by @Shudrum.
 * [4836](https://github.com/PrestaShop/PrestaShop/pull/4836): Param: Default activation state for product at creation, by @xGouley.


#### Core

 * [4571](https://github.com/PrestaShop/PrestaShop/pull/4571): Extract SQL sub request for MySQL 5.7, by @julienbourdeau. Thank you @rav88 for the initial [4547](https://github.com/PrestaShop/PrestaShop/pull/4547) PR!
 * [4739](https://github.com/PrestaShop/PrestaShop/pull/4739): Fixed bug in country restrictions of payment methods. Thank you @Nobodaddy!
 * [4825](https://github.com/PrestaShop/PrestaShop/pull/4825): Add quotes to all tables aliases in DbQuery join methods. Thank you @gskema!
 * [4827](https://github.com/PrestaShop/PrestaShop/pull/4827): Update Link.php. Thank you @cava89!
 * [4828](https://github.com/PrestaShop/PrestaShop/pull/4828): Fix CLDR init with language_code without '-' in them, by @jocel1.
 * [4830](https://github.com/PrestaShop/PrestaShop/pull/4830): Quick fix to improve CLDR performance, by @jocel1.
 * [4834](https://github.com/PrestaShop/PrestaShop/pull/4834): Do not block execution when Addons API not available, by @Quetzacoalt91.
 * [4851](https://github.com/PrestaShop/PrestaShop/pull/4851): missing PHPDoc and composer cmd for phpdocumentor, by @xGouley.
 * [4855](https://github.com/PrestaShop/PrestaShop/pull/4855): Updated Monolog bundle to remove deprecated notices, by @mickaelandrieu.
 * [4877](https://github.com/PrestaShop/PrestaShop/pull/4877): fix translator adapter that escape strings, by @kelu95.
 * [4890](https://github.com/PrestaShop/PrestaShop/pull/4890): Remove scene feature, by @julienbourdeau.
 * [4894](https://github.com/PrestaShop/PrestaShop/pull/4894): hide pagination if less than 20 elements in the product catalog, by @xGouley.
 * [4896](https://github.com/PrestaShop/PrestaShop/pull/4896): fix wrong controller name check, by @kelu95.
 * [4899](https://github.com/PrestaShop/PrestaShop/pull/4899): Choose sample recommended modules for product form page, by @xGouley.

 
#### Installer

 * [4849](https://github.com/PrestaShop/PrestaShop/pull/4849): Fix navigation problems in other language than EN, by @Shudrum.
 * [4859](https://github.com/PrestaShop/PrestaShop/pull/4859): Navigation optimizations & wording, by @Shudrum.
 
 
## Code changes in the Starter Theme -- the foundation of 1.7 themes

These are the merged pull-requests on the ['feat/starter-theme' branch](https://github.com/PrestaShop/PrestaShop/tree/feat/starter-theme) since the last Core Weekly Report!

 * [4801](https://github.com/PrestaShop/PrestaShop/pull/4801): Implement content_only, by @maximebiloe and @djfm.
 * [4821](https://github.com/PrestaShop/PrestaShop/pull/4821): Reworked Blockcategories for StarterTheme, by @maximebiloe.
 * [4837](https://github.com/PrestaShop/PrestaShop/pull/4837): Separate active filters from facets, by @maximebiloe.
 * [4839](https://github.com/PrestaShop/PrestaShop/pull/4839): fixed a few improper uses of updateQueryString, by @djfm.
 * [4841](https://github.com/PrestaShop/PrestaShop/pull/4841): !$guest_allowed => password required, by @djfm.
 * [4842](https://github.com/PrestaShop/PrestaShop/pull/4842): theme.yml now allows to hook modules on hooks in a very flexible way, by @julienbourdeau and @djfm.
 * [4845](https://github.com/PrestaShop/PrestaShop/pull/4845): add body classes, by @julienbourdeau.
 * [4846](https://github.com/PrestaShop/PrestaShop/pull/4846): Remove PS_QUICK_VIEW options, by @julienbourdeau.
 * [4863](https://github.com/PrestaShop/PrestaShop/pull/4863): Travis tuning, by @djfm.
 * [4868](https://github.com/PrestaShop/PrestaShop/pull/4868): Add some pagination info
 * [4874](https://github.com/PrestaShop/PrestaShop/pull/4874): template override for custom templates, by @julienbourdeau.
 * [4878](https://github.com/PrestaShop/PrestaShop/pull/4878): Adapt blockreassurance, by @maximebiloe.
 * [4880](https://github.com/PrestaShop/PrestaShop/pull/4880): Add preview attributes for Theme, by @julienbourdeau.
 * [4884](https://github.com/PrestaShop/PrestaShop/pull/4884): fixed hookconfiguration of non-existing hook, by @djfm.
 * [4885](https://github.com/PrestaShop/PrestaShop/pull/4885): Remove last id_theme, by @julienbourdeau.
 * [4891](https://github.com/PrestaShop/PrestaShop/pull/4891): Fix DisplayOverrideTemplate call, by @julienbourdeau.
 
 
## Code changes in the Classic Theme -- the default theme of PrestaShop 1.7, based on the Starter Theme

Finally, these are the merged pull-requests on the ['feat/classic' branch](https://github.com/PrestaShop/PrestaShop/tree/feat/classic) since the last Core Weekly Report!

Please note that the new default theme was merged into the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) with PR [4895](https://github.com/PrestaShop/PrestaShop/pull/4895).

 * [4833](https://github.com/PrestaShop/PrestaShop/pull/4833): Forgot password, credit slips pages. Minor fixes, by @ishcherbakov.
 * [4835](https://github.com/PrestaShop/PrestaShop/pull/4835): category page design integration, by @nihco2.
 * [4847](https://github.com/PrestaShop/PrestaShop/pull/4847): added toplevel link when menu is open, by @djfm.
 * [4850](https://github.com/PrestaShop/PrestaShop/pull/4850): Fix blockcart position, by @nihco2.
 * [4854](https://github.com/PrestaShop/PrestaShop/pull/4854): Start product page and design fixes, by @nihco2.
 * [4861](https://github.com/PrestaShop/PrestaShop/pull/4861): Add blocksocial to yml, by @nihco2.
 * [4862](https://github.com/PrestaShop/PrestaShop/pull/4862): Replace default category images, by @nihco2.
 * [4870](https://github.com/PrestaShop/PrestaShop/pull/4870): design feedbacks, by @nihco2.
 * [4871](https://github.com/PrestaShop/PrestaShop/pull/4871): refactor header modules display, by @nihco2.
 * [4875](https://github.com/PrestaShop/PrestaShop/pull/4875): Add eslintrc, by @nihco2.
 * [4886](https://github.com/PrestaShop/PrestaShop/pull/4886): Various fixes, by @djfm.
 * [4889](https://github.com/PrestaShop/PrestaShop/pull/4889): fixed the selenium tests, by @djfm.
 * [4892](https://github.com/PrestaShop/PrestaShop/pull/4892): Fix signin header display, by @nihco2.
 * [4893](https://github.com/PrestaShop/PrestaShop/pull/4893): Remove PS_QUICK_VIEW and move blockcategories, by @maximebiloe.


See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+merged%3A2016-02-01..2016-02-07+is%3Aclosed+).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @cava89, @gskema, @Nobodaddy, and @rav88! Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
