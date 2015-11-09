---
layout: post
title:  "PrestaShop Core Weekly - Week 44"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-11-06 14:37:41
author: xavierborderie
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop core codebase during last week, from Monday 26th of October to Sunday 1st of November.


## Milestones

After pondering for a long time about old tickets and PRs, we chose to contact the author of all currently open submissions on the Forge and on GitHub in order to get their feedback and help us complete the required actions, and make it so that these tickets are not forgotten. We published an [article about reviewing pull request this week on Build](http://build.prestashop.com/news/review-your-pull-requests/).<br/>

If you are the author of an old Forge ticket or of a waiting PR on GitHub, you must have received an e-mail about it this week.

This big call for feedback made it possible to restart the conversation with the Community on numerous topics, to get updated information which will help our team make a decision about what was submitted, and to close a good deal of submissions which were outdated (most notably 1.4 and 1.5 tickets, both versions which are not supported anymore apart from security updates). 

The goal for us is to dive back into the submissions that are left in order to make sure that the Community has its say in the evolution of PrestaShop.

So if you receive such a call-for-update e-mail, please answer it! You don't have to work on it right away, you don't have to spend the whole weekend updating your commits against the latest version of the code: just do what you can on your own time, and we'll see you on the finish line!

Thank you!


## Code changes in 1.6.1.x

Here are the merged pull-requests on the [1.6.1.x branch](https://github.com/PrestaShop/PrestaShop/tree/1.6.1.x) since the last Core Weekly Report!
 

#### Front office


 * [4350](https://github.com/PrestaShop/PrestaShop/pull/4350): Fix wrong date check in specific price, by @jocel1.
 
 
## Code changes in 1.7.0.0-develop

Now let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

Note that the Start Theme repo (see next section) is entirely part of the PrestaShop 1.7.0.0 project.

 
#### Back office

 * [4337](https://github.com/PrestaShop/PrestaShop/pull/4337): add tracking for product without photo, price and description, by @kelu95.
 * [4345](https://github.com/PrestaShop/PrestaShop/pull/4345): fix Address creation blank page & onboarding crashing at login, by @xGouley.
 * [4320](https://github.com/PrestaShop/PrestaShop/pull/4320): add seo/sharing social field to new product form, by @kelu95.
 * [4347](https://github.com/PrestaShop/PrestaShop/pull/4347): Remove open graph title/description, by @kelu95.
 * [4355](https://github.com/PrestaShop/PrestaShop/pull/4355): Admin Catalog product page: responsive, +KPI, +category-tree jquery, by @xGouley.
 * [4358](https://github.com/PrestaShop/PrestaShop/pull/4358): removes intermediate Carrier page, by @xGouley.
 * [4365](https://github.com/PrestaShop/PrestaShop/pull/4365): Product page: JS for category tree, & thumbnails manager, by @xGouley.
 * [4366](https://github.com/PrestaShop/PrestaShop/pull/4366): manage combinations and combinations generator on new product form, by @kelu95.

 
 
#### Core

 * [4336](https://github.com/PrestaShop/PrestaShop/pull/4336): Convert "Eth" character to D in Tools::replaceAccentedChars. Thank you @gskema!
 * [4334](https://github.com/PrestaShop/PrestaShop/pull/4334): Hooks on new sfArchi for ProductController and twig, by @xGouley.
 * [4348](https://github.com/PrestaShop/PrestaShop/pull/4348): fix error when symfony clear the cache, by @kelu95.
 * [4343](https://github.com/PrestaShop/PrestaShop/pull/4343): Doctrine setting & first use of it (admin product filters), by @xGouley.
 * [4320](https://github.com/PrestaShop/PrestaShop/pull/4320): add seo/sharing social field to new product form, by @kelu95.
 * [4363](https://github.com/PrestaShop/PrestaShop/pull/4363): fix PHP error with the loaded prestashop swift class and the symfony one, by @kelu95.
 
 
 
## Code changes in Starter Theme

Finally, these are the merged pull-requests on the 'feat/starter-theme' branch since the last Core Weekly Report!

 * [4235](https://github.com/PrestaShop/PrestaShop/pull/4235): Manufacturers and suppliers display, by @maximebiloe.
 * [4308](https://github.com/PrestaShop/PrestaShop/pull/4308): My account features, by @maximebiloe.
 * [4144](https://github.com/PrestaShop/PrestaShop/pull/4144): Load only theme.(js/css) and custom.(js/css) & remove all other assets, by @julienbourdeau.
 * [4354](https://github.com/PrestaShop/PrestaShop/pull/4354): Introduce single checkout option, by @julienbourdeau.
 * [4341](https://github.com/PrestaShop/PrestaShop/pull/4341): Add Vouchers in My Account, by @maximebiloe.
 * [4357](https://github.com/PrestaShop/PrestaShop/pull/4357): Create a customer/page tpl, by @maximebiloe.
 
 
See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+merged%3A%3E2015-10-26+is%3Aclosed+sort%3Aupdated&utf8=%E2%9C%93).

Thank you to the contributor whose pull requests was merged since the last Core Weekly Report: @gskema!. Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, read those:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
