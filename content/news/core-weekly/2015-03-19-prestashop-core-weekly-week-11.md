---
layout: post
title:  "PrestaShop Core Weekly - Week 11 of 2015"
subtitle: "An inside look at PrestaShop"
date:   2015-03-19 08:06:00
authors:  [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

Howdy everyone!
Here's the third edition of the PrestaShop Core Weekly.

As a reminder, the Core Weekly posts highlight some of the more important happenings in and around the Core of PrestaShop.

This post is focused on the activity from March 9th to March 15th of 2015.

Do you have ideas on how to improve the Core Weekly posts? Let me know in the comments!

## Milestones

Some cool things are happening for our community and the overall improvement of the codebase. It's not quite ready yet, but soon you'll see it all, and you'll be able to participate!

One thing to notice: PrestaShop developers now do all their work using Pull Requests (PR): no more direct commits to the codebase, now you can see where new code comes from, and comment on the PR!
Consequently, the "Notable commits" section of this Core Weekly report is not needed anymore :)

## Code changes

Now, onto last week's code changes...

### Notable accepted pull requests

* [2653](https://github.com/PrestaShop/PrestaShop/pull/2653): PHPDoc types for class members that are classes. Thanks gskema!
* [2652](https://github.com/PrestaShop/PrestaShop/pull/2652): FO: Fixing missing data-title attribute and translations. Thanks dkarvounaris!
* [2637](https://github.com/PrestaShop/PrestaShop/pull/2637): BO : fix count optimizations, by jocel1.
* [2598](https://github.com/PrestaShop/PrestaShop/pull/2598): BO : Optimize cart rules loading & add a search filter field, by jocel1.
* [2589](https://github.com/PrestaShop/PrestaShop/pull/2589): FO VAT field is shown when change country. Thanks prestarocket!
* [2582](https://github.com/PrestaShop/PrestaShop/pull/2582): Add hook actionPDFInvoiceRender. Thanks cedricfontaine!
* [2581](https://github.com/PrestaShop/PrestaShop/pull/2581): Hook actionPDFInvoiceRender consistency. Thanks cedricfontaine!
* [2568](https://github.com/PrestaShop/PrestaShop/pull/2568): CORE: Debug tools for printing into PHP error logs. Thanks gskema!

Find all PRs closed [last week here](https://github.com/PrestaShop/PrestaShop/pulls?page=4&pulls_only=true&q=is%3Apr+merged%3A%3E2015-03-09+is%3Aclosed).

Developers, do you have code suggestions, improvement ideas, typos you want to fix? Make your own Pull Request and become part of the PrestaShop contributors! See the [contribution guide here](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop).

Do you want a first project to contribute with? [Give us feedback on this PR](https://github.com/PrestaShop/PrestaShop/pull/2631). Thank you!

### Notable closed Forge tickets

* [2614](https://github.com/PrestaShop/PrestaShop/pull/2614): BO Fix [#PSCSX-274](http://forge.prestashop.com/browse/PSCSX-274) : Cumulative specific rules fixed, by Shudrum. A ticket that dates back from November 2013, woohoo!
* [2648](https://github.com/PrestaShop/PrestaShop/pull/2648): Do not load the full category tree if it's not needed ([PSCSX-4591](http://forge.prestashop.com/browse/PSCSX-4591)), by jocel1.
* [2608](https://github.com/PrestaShop/PrestaShop/pull/2608): BO : Fix bug [#PSCSX-4733](http://forge.prestashop.com/browse/PSCSX-4733), threads statuses not translated, by gRoussac.
* [2601](https://github.com/PrestaShop/PrestaShop/pull/2601): FO : Fix css bug [#PSCSX-4757](http://forge.prestashop.com/browse/PSCSX-4757), display nav on small screens, by gRoussac.

Find all Forge tickets closed last week here: [click here](http://forge.prestashop.com/browse/PSCSX-4796?jql=project%20%3D%20PSCSX%20AND%20status%20in%20%28Resolved%2C%20Closed%29%20AND%20resolution%20in%20%28Fixed%2C%20Done%29%20AND%20resolved%20%3E%3D%202015-03-09%20AND%20resolved%20%3C%3D%202015-03-15%20ORDER%20BY%20updated%20DESC)!

Do you have an issue or idea but you are not a developer! Create a ticket [on the Forge](http://forge.prestashop.com/), [in the PSCSX project](http://forge.prestashop.com/browse/PSCSX/)!

That's it for last week!
This was the third edition of Core Weekly, so again, if you have suggestions or see anything that I missed, please comment!
