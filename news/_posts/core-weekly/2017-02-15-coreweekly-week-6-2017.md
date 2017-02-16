---
layout: post
title:  "PrestaShop Core Weekly - Week 6 of 2017"
subtitle: "An inside look at the PrestaShop codebase"
date:   2017-02-15 09:10:11
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 6th to Sunday 12th of February 2017.


## General messages

A healthy reminder, folks: check out our [Release Schedule for 2017](http://build.prestashop.com/news/announcing-our-2017-release-schedule/). The [recently-released 1.7.0.5](http://build.prestashop.com/news/prestashop-1-7-0-5-maintenance-release/) is just one step in this calendar, and we intend to keep releasing monthly versions.

One notable event since last week is that the team really went all out on handling dusty pull requests. Numerous PRs were reviewed, tested and either merged or closed. This is great news for the community, for two reasons:<br/>

* First, because many contributors who submitted a PR and felt it was forgotten now received feedback from the Core team, either a positive one or one that should help them improve their future contributions.
* Second, because by processing more than a hundred PRs, the team has cleared the view on the remaining PRs. We now have a better understanding of what our next moves can be, and we hope to process more PRs soon, in order to be more responsive to community feedback.

As of this writing, [we have 110 open PRs](https://github.com/PrestaShop/PrestaShop/pulls) (for all branches) -- discounting those which are already milestoned, [we are below 90 PRs left to be processed](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20is%3Aopen%20no%3Amilestone)! This is thrilling!

Found an issue in PrestaShop 1.7? [Create a Forge ticket](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1) -- or create a PR! Thank you for your contribution to the PrestaShop project!


## Code changes in 'develop' branch (for the next minor version, v1.7.1.0)

Now let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

Note that 1.7 patch versions are being built in the '1.7.0.x' branch. All of the PRs from that branch are eventually ported in the 'develop' branch.


### Front office (including the default theme, named "Classic", based upon the [Starter Theme](https://github.com/PrestaShop/StarterTheme))

* [#7368](https://github.com/PrestaShop/PrestaShop/pull/7368): Allow HTML in customization when it's displayed by a module. Thank you @unlocomqx!
* [#7372](https://github.com/PrestaShop/PrestaShop/pull/7372): FO: Bug fix for specific product combination cases. Thank you @djbuch!
* [#7461](https://github.com/PrestaShop/PrestaShop/pull/7461): Add manufacturer name in cart products, by @aleeks from a PR originally made by @cedricfontaine. Thanks!
* [#7475](https://github.com/PrestaShop/PrestaShop/pull/7475): Fix hook name due to conflict resolution, by @maximebiloe.
* [#7478](https://github.com/PrestaShop/PrestaShop/pull/7478): Expose checkout process to inheriting classes, by @thierrymarianne.
* [#7500](https://github.com/PrestaShop/PrestaShop/pull/7500): Add cart in prestashop javascript object, by @maximebiloe.
* [#7512](https://github.com/PrestaShop/PrestaShop/pull/7512): Fix a problem when a voucher is added on checkout, by @antoinemille.
* [#7518](https://github.com/PrestaShop/PrestaShop/pull/7518): Fix front initcontent and My account display, by @maximebiloe.


### Back office

* [#7435](https://github.com/PrestaShop/PrestaShop/pull/7435): Remove initForm* from old product controller, by @antoin-m.
* [#7449](https://github.com/PrestaShop/PrestaShop/pull/7449): Update keyboard shortcuts in product page, by @antoinemille.
* [#7455](https://github.com/PrestaShop/PrestaShop/pull/7455): Fix Module configure permission, by @aleeks from a PR originally made by @wkdks. Thanks!
* [#7459](https://github.com/PrestaShop/PrestaShop/pull/7459): Fix id_order ambiguous search, by @aleeks from a PR originally made by @myo1030. Thanks!
* [#7462](https://github.com/PrestaShop/PrestaShop/pull/7462): Update invoice pdf, by @aleeks from a PR originally made by @nobodaddy. Thanks!
* [#7467](https://github.com/PrestaShop/PrestaShop/pull/7467): Update comment for jQuery migrate, by @aleeks from a PR originally made by @gRoussac.
* [#7470](https://github.com/PrestaShop/PrestaShop/pull/7470): Fix image doesn't exists, by @antoin-m from a PR originally made by @kermes. Thanks!
* [#7473](https://github.com/PrestaShop/PrestaShop/pull/7473): Update ObjectModelCore::getFieldsLang, by @antoin-m from a PR originally made by @gu78. Thanks!
* [#7474](https://github.com/PrestaShop/PrestaShop/pull/7474): Fix Administering email setting whith/without log. Thank you @kompilorb!
* [#7479](https://github.com/PrestaShop/PrestaShop/pull/7479): Fix problem with default combination, by @antoin-m from a PR originally made by @dariusakafest. Thanks!
* [#7481](https://github.com/PrestaShop/PrestaShop/pull/7481): Bug Fix on Save product. Thank you @kompilorb!
* [#7486](https://github.com/PrestaShop/PrestaShop/pull/7486): Fix incorrect product-list-colors caching, by @aleeks from a PR originally made by @erouvier29. Thanks!
* [#7489](https://github.com/PrestaShop/PrestaShop/pull/7489): Update deleteFeatures() for Multi-shop, by @aleeks from a PR originally made by @creaweb06. Thanks!
* [#7491](https://github.com/PrestaShop/PrestaShop/pull/7491): Allow to exclude tax and shipping in affiliation sales total, by @aleeks from a PR originally made by @cedricfontaine. Thanks!
* [#7492](https://github.com/PrestaShop/PrestaShop/pull/7492): Add missing metadata to translations catalogues on export, by @thierrymarianne.
* [#7495](https://github.com/PrestaShop/PrestaShop/pull/7495): Remove some globals, by @antoin-m from a PR originally made by @groussac.
* [#7496](https://github.com/PrestaShop/PrestaShop/pull/7496): You can now search for a customer with several words, by @antoin-m from a PR originally made by @quadrateam. Thanks!
* [#7497](https://github.com/PrestaShop/PrestaShop/pull/7497): Display shipping max. refundable amount in order partial refund form, by @aleeks from a PR originally made by @erouvier29. Thanks!
* [#7507](https://github.com/PrestaShop/PrestaShop/pull/7507): BO: Fix unclosed tag, by @nihco2.
* [#7508](https://github.com/PrestaShop/PrestaShop/pull/7508): Mail in-transit improvement (webservice, markup), by @aleeks from PRs originally made by @pierreavizou and @gerdus. Thanks!
* [#7511](https://github.com/PrestaShop/PrestaShop/pull/7511): Fix back-office order, by @maximebiloe.
* [#7514](https://github.com/PrestaShop/PrestaShop/pull/7514): Fix product customization duplication, by @aleeks from a PR originally made by @shaffe-fr. Thanks!
* [#7513](https://github.com/PrestaShop/PrestaShop/pull/7513): BO: Refresh forms for specific price. Thank you @kompilorb!
* [#7516](https://github.com/PrestaShop/PrestaShop/pull/7516): Check if hook exists before get hook module exec list, by @aleeks from a PR originally made by @prestamodule. Thanks!
* [#7520](https://github.com/PrestaShop/PrestaShop/pull/7520): Fix minors integration issues on sidebar, by @nihco2.


### Core

* [#7439](https://github.com/PrestaShop/PrestaShop/pull/7439): Header BO responsive (legacy part), by @nihco2.
* [#7443](https://github.com/PrestaShop/PrestaShop/pull/7443): Add actionEmailSendBefore hook, by @antoin-m from a PR originally made by @xitromedia. Thanks!
* [#7457](https://github.com/PrestaShop/PrestaShop/pull/7457): Harmonize hook, by @aleeks.
* [#7460](https://github.com/PrestaShop/PrestaShop/pull/7460): Superfluous table alias, by @antoin-m from a PR originally made by @jocarat. Thanks!
* [#7463](https://github.com/PrestaShop/PrestaShop/pull/7463): Use boolean variables for tracking configuration value type, by @antoin-m from a PR originally made by @gskema. Thanks!
* [#7464](https://github.com/PrestaShop/PrestaShop/pull/7464): Calculate carrier price on the real order price, by @antoin-m from a PR originally made by @axometeam. Thanks!
* [#7466](https://github.com/PrestaShop/PrestaShop/pull/7466): Improvement in SpecificPrice::getSpecificPrice, by @antoin-m from a PR originally made by @lozal2244. Thanks!
* [#7468](https://github.com/PrestaShop/PrestaShop/pull/7468): Allow rel="nofollow" in anchors, by @antoin-m from a PR originally made by @gskema. Thanks!
* [#7469](https://github.com/PrestaShop/PrestaShop/pull/7469): Rename ESlint config file. Thank you @102!
* [#7471](https://github.com/PrestaShop/PrestaShop/pull/7471): Fix installation & tab entity, by @aleeks.
* [#7472](https://github.com/PrestaShop/PrestaShop/pull/7472): Add "use instead" doc on method display as deprecated when possible, by @antoin-m from a PR originally made by @prestamodule. Thanks!
* [#7476](https://github.com/PrestaShop/PrestaShop/pull/7476): IdLang shouldn't be <= 0, by @antoin-m.
* [#7477](https://github.com/PrestaShop/PrestaShop/pull/7477): Only link orders with same cart, by @aleeks from a PR originally made by @phpmadman. Thanks!
* [#7480](https://github.com/PrestaShop/PrestaShop/pull/7480): Sql fix & documentation, by @aleeks from a PR originally made by @zapalm. Thanks!
* [#7482](https://github.com/PrestaShop/PrestaShop/pull/7482): Use default state for tax purposes, by @aleeks from a PR originally made by @cedricfontaine. Thanks!
* [#7483](https://github.com/PrestaShop/PrestaShop/pull/7483): Update Mail lang settings, by @antoin-m from a PR originally made by @themella. Thanks!
* [#7485](https://github.com/PrestaShop/PrestaShop/pull/7485): Don't convert already converted currency. Thank you @tomkinss!
* [#7488](https://github.com/PrestaShop/PrestaShop/pull/7488): Allow quotes in translation strings, by @maximebiloe.
* [#7490](https://github.com/PrestaShop/PrestaShop/pull/7490): BO: Pass the object we're displaying to the action{$controller}FormModifier hook, by @antoin-m from a PR originally made by @tiennou. Thanks!
* [#7499](https://github.com/PrestaShop/PrestaShop/pull/7499): Use UTF-8 for PaymentOptions, by @maximebiloe.
* [#7501](https://github.com/PrestaShop/PrestaShop/pull/7501): Do not display related product id customer can't see it, by @aleeks from a PR originally made by @prestamodule. Thanks!
* [#7502](https://github.com/PrestaShop/PrestaShop/pull/7502): Prevents problem with missing params in getWidgetVariables(). Thank you @kpodemski!
* [#7503](https://github.com/PrestaShop/PrestaShop/pull/7503): Add missing attributes on function removeProduct, by @aleeks from a PR originally made by @madef. Thanks!
* [#7505](https://github.com/PrestaShop/PrestaShop/pull/7505): Fix nonexistent field on customer, by @aleeks from a PR originally made by @seynaeve. Thanks!
* [#7519](https://github.com/PrestaShop/PrestaShop/pull/7519): Fix fatal when no product to set in CategorySearchProvider, by @maximebiloe.
* [#7524](https://github.com/PrestaShop/PrestaShop/pull/7524): Revert "Check if hook exists before get hook module exec list", by @maximebiloe.


### Installer

* [#7517](https://github.com/PrestaShop/PrestaShop/pull/7517): Refactoring of the upgrade, to be easily usable in the auto upgrade module, by @jocel1.


See all the PRs merged into the 'develop' codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20merged%3A2017-02-06.2017-02-12%20is%3Aclosed%20base%3Adevelop).


## Code changes in '1.7.0.x' branch (for the next patch version, v1.7.0.5) 

And now, the merged pull-requests on the ['1.7.0.x' branch](https://github.com/PrestaShop/PrestaShop/tree/1.7.0.x) since the last Core Weekly Report!


### Core

* [#7465](https://github.com/PrestaShop/PrestaShop/pull/7465): Protect some folders, by @maximebiloe.




See all the PRs merged into the '1.7.0.x' codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20merged%3A2017-02-06..2017-02-12%20is%3Aclosed%20base%3A1.7.0.x).


Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @102, @axometeam, @cedricfontaine, @creaweb06, @dariusakafest, @djbuch, @erouvier29, @gerdus, @gskema, @gu78, @jocarat, @kermes, @kompilorb, @kpodemski, @lozal2244, @madef, @myo1030, @phpmadman, @pierreavizou, @prestamodule, @quadrateam, @seynaeve, @shaffe-fr, @themella, @tiennou, @tomkinss, @unlocomqx, @wkdks, @xitromedia, and @zapalm

Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/browse/BOOM/?selectedTab=com.atlassian.jira.jira-projects-plugin:summary-panel)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
