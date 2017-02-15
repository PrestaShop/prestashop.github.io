---
layout: post
title:  "PrestaShop Core Weekly - Week 24"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-06-19 12:29:47
authors:  [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop core codebase during the last two weeks, from Monday 8th to Sunday 14th of June, 2015.


## Milestones

The Core team is working on version 1.6.1.0, and the fourth Release Candidate version still needs some testing! [Read all about it here](/news/prestashop-1.6.1.0-rc4/)!

It was a short week, since last Thursday we organized the PrestaShop Day in Paris ([see the official report here](https://www.prestashop.com/blog/en/prestashopday-recapping-amazing-event/)), and the whole team was attending and even presenting workshops for potential contributors and partners. We hope you learnt a lot! We will try to publish the slides of our workshops very soon right here on the Build PrestaShop devblog.

As a reminder, we recently chose to [change our Coding Standards to PSR-2](/news/prestashop-moves-to-psr-2/), and to [adopt a SemVer-like versioning scheme](/news/a-more-semantic-versioning-scheme/).

Of note among the merged PRs last week:

 * In PR 3155, Core developer Maxime Biloé (maximebiloe) added a button to re-send the order email from the Orders page.
 * In PR 3158, Core developer Julien Bourdeau (julienbourdeau) updated the way invoices are generated after receiving feedback.


## Code changes

Let's review the merged pull-requests from the previous two weeks!

As always, click on the PR's number to open its page on GitHub.

#### Front office

 * [3162](https://github.com/PrestaShop/PrestaShop/pull/3162): Advanced EU Compliance fixes, by tchauviere.
 * [3077](https://github.com/PrestaShop/PrestaShop/pull/3077): Fix bug triggered when adding customizable product twice in cart, by kelu95.
 * [3050](https://github.com/PrestaShop/PrestaShop/pull/3050): Fix bug triggered when adding new customized product into new order, by kelu95.

#### Back office

 * [3155](https://github.com/PrestaShop/PrestaShop/pull/3155): Add the possibility to re-send the order emails, by maximebiloe.
 * [3138](https://github.com/PrestaShop/PrestaShop/pull/3138): Filter SAV by shop, by maximebiloe.

#### Core

 * [3160](https://github.com/PrestaShop/PrestaShop/pull/3160): Better way to handle DB prefixes, by tchauviere.
 * [3167](https://github.com/PrestaShop/PrestaShop/pull/3167): Improve db escape method, by tchauviere.

#### PDF

 * [3158](https://github.com/PrestaShop/PrestaShop/pull/3158): Change invoice after feedback, by julienbourdeau.


See all the PRs merged into the codebase since June the 8th [here](https://github.com/PrestaShop/PrestaShop/pulls?page=2&q=is%3Apr+merged%3A%3E2015-06-08+is%3Aclosed+sort%3Aupdated&utf8=%E2%9C%93).

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, read those:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
