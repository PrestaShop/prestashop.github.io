---
layout: post
aliases: ["/news/coreweekly-35-36"]
title:  "PrestaShop Core Weekly - Weeks 35 & 36 of 2015"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-09-10 18:00:41
authors:  [ xavierborderie ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop core codebase during the last three weeks, from Monday 24th of August to Sunday 6th of September.


## Milestones

The latest version of PrestaShop is [version 1.6.1.1 of PrestaShop](http://build.prestashop.com/news/1611-maintenance-release/)! It's the first [patch version](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/) of branch 1.6.1.x, meaning that it only contains fixes and improvements, without any new feature. It is therefore a very safe upgrade from version 1.6.1.0.

The team is working on another patch version of 1.6.1.0 (meaning: on version 1.6.1.2): more information here soon!

We are also working on the [next major version of PrestaShop: version 1.7.0.0](http://build.prestashop.com/news/version-1-7-0-0-is-underway/)! It is major because we actually plan on break some parts of the retrocompability, and make an even better e-commerce platform. We will of course do our best to keep developers informed so that you know when and how to update your module/theme code! Not everything will be broken, of course, but do expect your creations to not work as-is on 1.7.0.0.

One of the first project we want to tackle with you is the Start Theme, a blank theme that theme designer can use to build their own complete theme! Learn more about it [in this Build article](http://build.prestashop.com/news/starter-theme-kickoff/), participate in the [conversation on Gitter](https://gitter.im/PrestaShop/StarterTheme), or contribute ideas and give us your insights on the [public Trello board](https://trello.com/b/FPwYidfj/prestashop-startertheme)! And the code is being built [right on GitHub](https://github.com/PrestaShop/StarterTheme).

Want to contribute your code skills to the PrestaShop project? [Make sure your Git setup is correctly configured](http://build.prestashop.com/howtos/misc/set-up-your-git-for-contributing/), and that you follow our [new branching model](http://build.prestashop.com/news/introducing-new-branching-model-prestashop/)!

Finally, the ever-so-great Alexandra wrote her [monthly Translation report](http://build.prestashop.com/news/do-you-speak-prestashop-august-2015-edition/), with stats, ranking and charts!

Of note among the merged PRs since the last Core Weekly Report:

 * Over several PRs, contributor gskema fixed the coding standards and indentation of many class files. Great work!
 * In PR 3838, with 69 commits and over 179 files changed, Core developers kelu95 and xGouley implemented CLDR. More on this soon!



## Code changes

Let's review the merged pull-requests on the various branches of the project (develop, 1.6.1.x, Starter Theme, etc.) since the last Core Weekly Report!

As always, click on the PR's number to open its page on GitHub.


#### Front office

 * [3786](https://github.com/PrestaShop/PrestaShop/pull/3786): Fix issue with multishop / multilanguage tags, by @jocel1.
 * [3827](https://github.com/PrestaShop/PrestaShop/pull/3827): Avoid displaying payment message, by @gRoussac.
 * [3842](https://github.com/PrestaShop/PrestaShop/pull/3842): fix front header wrong class name, by @kelu95.
 * [3879](https://github.com/PrestaShop/PrestaShop/pull/3879): new products name in columns, by @gRoussac.
 * [3878](https://github.com/PrestaShop/PrestaShop/pull/3878): Fix possible fatal error in products-comparison, by @gRoussac.
 * [3870](https://github.com/PrestaShop/PrestaShop/pull/3870): Avoid possible undefined vars in global.js, by @gRoussac.
 * [3881](https://github.com/PrestaShop/PrestaShop/pull/3881): $errors_discount dead code, by @gRoussac.
 * [3863](https://github.com/PrestaShop/PrestaShop/pull/3863): Fix customized images duplication when re-order, by @maximebiloe.
 * [3907](https://github.com/PrestaShop/PrestaShop/pull/3907): Fix possible undefined function binduniform, by @gRoussac.



#### Back office

 * [3776](https://github.com/PrestaShop/PrestaShop/pull/3776): Add search_contains in chosen init, by @gRoussac.
 * [3772](https://github.com/PrestaShop/PrestaShop/pull/3772): Duplicate currencies in AdminCountries in multishop, by @gRoussac.
 * [3836](https://github.com/PrestaShop/PrestaShop/pull/3836): Fix issue with smarty lazy cache & timestamp, by @jocel1.
 * [3866](https://github.com/PrestaShop/PrestaShop/pull/3866): removing extra space at end of product names and url rewrite, by @gRoussac.
 * [3891](https://github.com/PrestaShop/PrestaShop/pull/3891): Fix modules logo width, by @gRoussac.
 * [3893](https://github.com/PrestaShop/PrestaShop/pull/3893): Fix undefined var in AdminProducts, by @gRoussac.
 * [3904](https://github.com/PrestaShop/PrestaShop/pull/3904): Fix wrong escaping in helpers/form/form.tpl, by @gRoussac.


#### Core

 * [3793](https://github.com/PrestaShop/PrestaShop/pull/3793): Fix code typos. Thank you @gskema!
 * [3797](https://github.com/PrestaShop/PrestaShop/pull/3797): Fix coding standards in config files. Thank you @gskema!
 * [3799](https://github.com/PrestaShop/PrestaShop/pull/3799): Fix coding standards in Adapter class files. Thank you @gskema!
 * [3798](https://github.com/PrestaShop/PrestaShop/pull/3798): Fix coding standards in admin and root files. Thank you @gskema!
 * [3801](https://github.com/PrestaShop/PrestaShop/pull/3801): Fix coding standards and indentation in controller class files. Thank you @gskema!
 * [3804](https://github.com/PrestaShop/PrestaShop/pull/3804): Fix coding standards and indentation in module class files. Thank you @gskema!
 * [3802](https://github.com/PrestaShop/PrestaShop/pull/3802): Fix coding standards and indentation in order class files. Thank you @gskema!
 * [3806](https://github.com/PrestaShop/PrestaShop/pull/3806): Fix coding standards and indentation in Cart.php. Thank you @gskema!
 * [3805](https://github.com/PrestaShop/PrestaShop/pull/3805): Fix coding standards and indentation in exception htmltemplate class files. Thank you @gskema!
 * [3803](https://github.com/PrestaShop/PrestaShop/pull/3803): Fix coding standards and indentation in helper class files. Thank you @gskema!
 * [3808](https://github.com/PrestaShop/PrestaShop/pull/3808): Fix coding standards and indentation in Range* class files. Thank you @gskema!
 * [3810](https://github.com/PrestaShop/PrestaShop/pull/3810): Fix coding standards and indentation in Shop* class files. Thank you @gskema!
 * [3788](https://github.com/PrestaShop/PrestaShop/pull/3788): Stock synchronization fails in case of shared warehouse. Thank you @eric-rouvier!
 * [3538](https://github.com/PrestaShop/PrestaShop/pull/3538): Implementing CLDR, by @kelu95 and @xGouley.
 * [3839](https://github.com/PrestaShop/PrestaShop/pull/3839): Add quantity as optional parameter on function addAttribute. Thank you @Pronux!
 * [3845](https://github.com/PrestaShop/PrestaShop/pull/3845): Remove postinstall grunt-cli installer, by @kelu95.
 * [3849](https://github.com/PrestaShop/PrestaShop/pull/3849): move phpcsfixer to composer dependency, by @kelu95.
 * [3848](https://github.com/PrestaShop/PrestaShop/pull/3848): autoload from composer.json, cause fail with phpunit bootstrap, by @kelu95.
 * [3858](https://github.com/PrestaShop/PrestaShop/pull/3858): move modules repos to packagist, by @kelu95.
 * [3857](https://github.com/PrestaShop/PrestaShop/pull/3857): Travis, first step to composer install, by @kelu95.
 * [3864](https://github.com/PrestaShop/PrestaShop/pull/3864): Edit iso code of an existing country. Thank you @thoma202!
 * [3871](https://github.com/PrestaShop/PrestaShop/pull/3871): fix non iso language code, by @kelu95.
 * [3902](https://github.com/PrestaShop/PrestaShop/pull/3902): Fixed zero-prices because of formatting done too early, by @djfm.
 * [3903](https://github.com/PrestaShop/PrestaShop/pull/3903): Fix incorrect cart total, by @gRoussac.


#### PDF

 * [3750](https://github.com/PrestaShop/PrestaShop/pull/3750): Could not translate "Free Shipping" in pdf, by @gRoussac.

#### Modules

 * [3841](https://github.com/PrestaShop/PrestaShop/pull/3841): Remove old submodules, by @gaillafr.

#### Starter Theme

 * [3873](https://github.com/PrestaShop/PrestaShop/pull/3873): Rewrite layout mechanism. Thank you @alexsegura!
 * [3892](https://github.com/PrestaShop/PrestaShop/pull/3892): Rework Controller/cms for StarterTheme, by @julienbourdeau.
 * [3897](https://github.com/PrestaShop/PrestaShop/pull/3897): PageNotFound - Rework templates, by @maximebiloe.
 * [3900](https://github.com/PrestaShop/PrestaShop/pull/3900): New hook displaySearch, by @maximebiloe.
 * [3905](https://github.com/PrestaShop/PrestaShop/pull/3905): Use of DB Prefix. Thank you @PrestaEdit!
 * [3906](https://github.com/PrestaShop/PrestaShop/pull/3906): Error pages for StarterTheme, by @maximebiloe.

#### Installer

 * [3859](https://github.com/PrestaShop/PrestaShop/pull/3859): fix installer issues, by @gaillafr.

#### Localization

 * [3655](https://github.com/PrestaShop/PrestaShop/pull/3655): Emails not copied into theme folder, by @maximebiloe.



See all the PRs merged into the codebase since August 24th [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+merged%3A%3E2015-08-24+is%3Aclosed+sort%3Aupdated+).

Thank you to our contributors whose Pull Requests were merged since the last Core Weekly Report: @alexsegura, @eric-rouvier, @gskema, @PrestaEdit, @Pronux, and @thoma202, Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, read those:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
