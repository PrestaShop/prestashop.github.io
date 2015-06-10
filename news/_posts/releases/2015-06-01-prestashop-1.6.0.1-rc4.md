---
layout: post
title:  "Test PrestaShop 1.6.1.0 RC4!"
subtitle: "Let's make it unbreakable!"
date:   2015-06-09 19:29:47
author: xavierborderie
icon: fa-leaf
tags:
 - 1.6.1.x
 - version
 - rc
 - releases
 - development
---

We've had a lot of great feedback from the community following the [release of the RC3 of PrestaShop 1.6.1.0](http://build.prestashop.com/news/prestashop-1-6-1-0-rc3/). The team is hard at work improving this version and fixing things that were discovered since then.

Now it's time for MORE TESTING! This fourth Release Candidate version brings a lot of notable changes, among which [the new architecture](http://build.prestashop.com/news/new-architecture-1-6-1-0/), and the [Advanced EU Compliance module](https://github.com/PrestaShop/advancedeucompliance).

As a reminder, **this software is still in development**, so we don't recommend you to run it on a production store. Consider setting up a test site just to play with the new version. You can [download PrestaShop 1.6.1.0 RC4 here](https://www.prestashop.com/download/private/prestashop_1.6.1.0-RC4.zip).

**We NEED you to test this version**, helping us make sure that it is the most reliable one ever!

We aim for a late June release of the final version of PrestaShop 1.6.1.0, or early-July at worse -- and depending on feedback. A lot is still moving in the codebase, but the core developers will switch to full-testing/fixing mode by the end of the week.

Apart from **testing your modules and themes** (and I cannot stress this enough!) and **checking the tax/ecotax calculation improvements**, here are some of the areas which you can help us double-check:

* **Performance**. Most notably on category display, the whole product page, and on the importer.
* **Invoice templates**. Slight tinkering here and there. Print some!
* **Back-office orders**. Price calculation should work in even the most complex situations.

And many other tiny things have been improved since RC3. [See all the commits here](https://github.com/PrestaShop/PrestaShop/compare/4736d851ef90b1e3f5706c9a298e6376cd30683d...cefd154575c85594510a47d08fe0b77bed868eda).




And, as always, please keep a fresh eye on those:

* **Back office design**. There might be some quirks here and there: let us know!
* **Search**. It has been improved in many places. Try it in multishop and/or multilang context too!
* **Installer**. Install this version in various situations: locally, on your online hostings, on new versions of PHP/MySQL, on old versions of PHP/MySQL, etc.! We need to make sure it works on as many platforms as possible.
* **Upgrade**. STILL VERY IMPORTANT! The automatic upgrade module is [constantly being improved upon](https://github.com/PrestaShop/autoupgrade/commits/dev), so have a go at it from v1.6.0.14, from v1.6.0.8, from v1.5.6.2, from v1.5.0.17, etc. You get the idea :)

Developers, designers, agencies: please please please **test your modules, test your themes, test your clients' override code**, clone your clients' stores and try to upgrade them, etc. Make sure it works for you and your clients!

Again, DO NOT UPDATE YOUR REAL STORE! Version 1.6.1.0 RC4 is **not marked as production ready**, so if you do, do it at your own risk.

If you want to really test the thing, make a copy of your real store and update _that_ copy to 1.6.1.0 RC3. Then, do the whole process of adding a product, buying a product, installing a theme, changing settings, etc.

**If you think you’ve found a bug/issue**, you can let us know about it on [the Forge](http://forge.prestashop.com/), PrestaShop's bug-tracker. Make sure to present the steps to reproduce the bug/issue! [Read this page for more information on how to use the Forge](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop), especially the last part, "Best practices for writing an issue".

If you are a developer and you know how to fix an issue, open a Pull Request on [PrestaShop's GitHub page](https://github.com/prestashop/prestashop), on the 1.6 branch (NOT the master branch)! And remember to read these:

* [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
* [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

Happy testing, and thank you for your help!

[Test PrestaShop 1.6.1.0 RC4](https://www.prestashop.com/download/private/prestashop_1.6.1.0-RC4.zip){: .btn .btn-lg .btn-success}
{: .text-center}
