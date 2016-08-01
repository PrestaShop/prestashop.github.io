---
layout: post
title:  "PrestaShop 1.7.0.0 Beta 3 is out!"
subtitle: "Step by step, ooooh babay!"
date:   2016-08-01 09:00:01
author: [ xavierborderie ]
icon: icon-gift
tags:
- 1.7
- 1.7.0.0
- version
- beta
- releases
- development
---

Hot on the heels of Beta 2, here's [PrestaShop 1.7.0.0](https://www.prestashop.com/en/1.7) Beta 3, ready for you to test and give feedback about!

As always during this period of testing and fixing, we need feedback from any merchant, service provider, module developer or theme designer who is reading this.

The release of this Beta 3 is another step in the current period of intensive testing and debugging by the PrestaShop developers, towards a proper RC and eventual release.

[Test PrestaShop 1.7.0.0 Beta 3 now!](https://www.prestashop.com/en/developers-versions ){: .btn .btn-lg .btn-success}
{: .text-center}

<br/>

**PrestaShop 1.7.0.0 is still in development**! This new Beta is a way for us to give you an update package to test before we enter the RC phase. Go for it!<br/>
Install the Beta 3 version as a test store, then play with it – and [give us your feedback](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1)!

We know there are plenty of issues that must be lying around, and many "quick wins", meaning things that can be solved with a simple PR. And this is where YOU can play an important part!
We welcome big fixes with pleasure and cookies :) Go forth and [make that PR](https://github.com/PrestaShop/PrestaShop/tree/develop)!

Change the settings, browse the default theme, check if the modules that you created still work as-is (or with tiny design adaptations), etc. And most importantly, let us know about your findings!<br/>
[Update your module's code if needs be](http://build.prestashop.com/news/module-development-changes-in-17/), and check out the [current theme documentation](https://github.com/PrestaShop/docs/blob/master/TABLE%20OF%20CONTENT.md) (still in Beta too - [let us know if something is amiss](https://github.com/PrestaShop/docs/issues)!)


## How to give feedback about Beta 3

Have you found a bug? A curious behavior? An unexpected reaction? Let us know! [Create a ticket on the 1.7 Forge project](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1), and give us as much details as possible!

Please note that we are not looking for feedback on the overall technical or design choices: Symfony 2, the new theming system, the back office design and other global aspects of 1.7 are pretty much set in stone. However, do let us know about bugs or possible improvements!


## Updates since Beta 2

Here are the most notable changes since [the second Beta version](http://build.prestashop.com/news/prestashop-17-beta2/):

 * #5865: Multiple integration bugfixes.
 * #5868: Asynchronous loading of product combinations.
 * #5870: Add taxes to modal and a link to product detail in summary.
 * #5882: Design optimizations in cart and checkout.
 * #5886: Rename 'opt-in' into 'Partner offers'.
 * #5889: Remove password variable from emails.
 * #5893: Indicate carrier delay on order confirmation.
 * #5909: Upgrade an uploaded module when already installed.
 * #5911: Do not display new products in the BO listing until they are saved.
 * #5920: Disable bulk action while combinations are loading.


See the [complete list of merged PRs since building Beta 2 (built on July 13th) here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20is%3Aclosed%20base%3Adevelop%20merged%3A2016-07-13..2016-07-28%20sort%3Acreated-asc%20).


## Final note!

A lot of work went into this new Beta of PrestaShop 1.7, and there is still a lot of work to be done in order to get it ready for release. [You too can help with pull requests](https://github.com/PrestaShop/PrestaShop/tree/develop) for bugs that you noticed!

Happy testing!
