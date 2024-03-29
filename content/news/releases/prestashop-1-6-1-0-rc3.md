---
layout: post
aliases: ["/news/prestashop-1-6-1-0-rc3"]
title:  "About PrestaShop 1.6.1.0: test the latest RC!"
subtitle: "It's time to kick the tires, together!"
date:   2015-05-21 18:29:47
authors: [ xavierborderie ]
icon: icon-leaf
tags:
 - "1.6"
 - "1.6.1.x"
 - version
 - rc
 - releases
 - development
---

Some of you might know about it, while it will certainly be news for many others: the team has been hard at work on a new release of PrestaShop Download these past few months. The successor to version 1.6.0.14 will not be 1.6.0.15, but 1.6.1.0.

This is the first of several articles we have in store about version 1.6.1.0.

Today, after many tests internally and with close partners, we are releasing v1.6.1.0 Release Candidate 3.

**This software is still in development**, so we don't recommend you to run it on a production store. Consider setting up a test site just to play with the new version. You can [download PrestaShop 1.6.1.0 RC3 here](http://prestashop.com/download/prestashop_1.6.1.0.zip).

The release of 1.6.1.0 RC3 marks the start of the public test phase. **We NEED you to test this version**, helping us make sure that it is the most reliable one ever!

We aim for an early June release of the final version of PrestaShop 1.6.1.0. A lot is still moving in the codebase, but the core developers will switch to full-testing/fixing mode by the end of the week.

Here are a few things to watch:

* **Performance**. A LOT of work has been done to improve the overall performance of PrestaShop. In most situations, it has never been this fast! Most notably, a lot has been done on category display, the whole product page and on the importer.
* **Design**. The back office has been revamped. There might be some quirks here and there: let us know!
* **Price and tax calculations**. Again, a lot of work has been done in this area. If you have weird product prices and promotion schemes, try them out! Specific prices, cart rules, eco-tax, with or without tax, etc.
* **Invoices**. Check the new invoice template in your various configurations and needs! See if what it displays is consistent with the order!
* **Search**. It has been improved in many places. Try it in multishop and/or multilang context too!
* **Installer**. Install this version in various situations: locally, on your online hostings, on new versions of PHP/MySQL, on old versions of PHP/MySQL, etc.! We need to make sure it works on as many platforms as possible.
* **Upgrade**. HOLY ZEUS THAT IS IMPORTANT! The automatic upgrade module is constantly being improved upon, so have a go at it from v1.6.0.14, from v1.6.0.8, from v1.5.6.2, from v1.5.0.17, etc. You get the idea :)

Developers, designers, agencies: please please please test your modules, test your themes, test your clients' override code, clone your clients' stores and try to upgrade them, etc. Make sure it works for you and your clients!

We're going to test this version thoroughly on many systems and between many versions for the next couple of weeks, but there's nothing better than real feedback from real users!

Again, DO NOT UPDATE YOUR REAL STORE! Version 1.6.1.0 RC3 is **not marked as production ready**, so if you do, do it at your own risk.
If you want to really test the thing, make a copy of your real store and update _that_ copy to 1.6.1.0 RC3. Then, do the whole process of adding a product, buying a product, installing a theme, changing settings, etc.

**If you think you’ve found a bug/issue**, you can let us know about it on [the Forge](http://forge.prestashop.com/), PrestaShop's bug-tracker. Make sure to present the steps to reproduce the bug/issue! [Read this page for more information on how to use the Forge](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop), especially the last part, "Best practices for writing an issue".

If you are a developer and you know how to fix an issue, open a Pull Request on [PrestaShop's GitHub page](https://github.com/prestashop/prestashop), on the 1.6 branch (NOT the master branch)! And remember to read these:

* [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
* [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

Happy testing, and thank you for your help!

{{< cta "http://prestashop.com/download/prestashop_1.6.1.0.zip" >}}Test PrestaShop 1.6.1.0 RC3{{< /cta >}}
