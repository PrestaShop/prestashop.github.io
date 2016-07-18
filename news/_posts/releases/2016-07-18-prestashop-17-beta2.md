---
layout: post
title:  "PrestaShop 1.7.0.0 reaches Beta 2 stage"
subtitle: "Making progress!"
date:   2016-06-18 09:00:01
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

We are happy to announce that [PrestaShop 1.7.0.0](https://www.prestashop.com/en/1.7) is now available for testing in its 2nd Beta version. More than ever, we need YOUR feedback as a merchant, a service provider, a module developer or a theme designer.

The release of this second Beta version is another important milestone in the current period of intensive testing and debugging by the PrestaShop developers.

[Test PrestaShop 1.7.0.0 Beta 2 now!](https://www.prestashop.com/en/developers-versions ){: .btn .btn-lg .btn-success}
{: .text-center}

<br/>

**PrestaShop 1.7.0.0 is still in development**, which means that this new Beta release is a great opportunity for you to discover it before we release a stable version!<br/>
Go download and install the Beta 2 version as a test store, either on your machine or your web hosting, then play with it – and [give us your feedback](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1)!

While all hands are on deck, we couldn't do it without the help of the whole community: we need YOU to test this new version of PrestaShop.<br/>
Change the settings, browse the default theme, check if the modules that you created still work as-is (or with tiny design adaptations), etc. And most importantly, let us know about your findings!<br/>
[Update your module's code if needs be](http://build.prestashop.com/news/module-development-changes-in-17/), and check out the [current theme documentation](https://github.com/PrestaShop/docs/blob/master/TABLE%20OF%20CONTENT.md) (still in Beta too - [let us know if something is amiss](https://github.com/PrestaShop/docs/issues)!)


## How to give feedback about Beta 2

Have you found a bug? A curious behavior? An unexpected reaction? Let us know! [Create a ticket on the 1.7 Forge project](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1), and give us as much details as possible!

Please note that we are not looking for feedback on the overall technical or design choices: Symfony2, the new theming system, the back office design and other global aspects of 1.7 are pretty much set in stone. However, do let us know about bugs or possible improvements!


## Updates since Beta 1

Here are the most notable changes since [the first Beta version](http://build.prestashop.com/news/prestashop-1-7-beta-1-open-for-feedback/):

* [4921](https://github.com/PrestaShop/PrestaShop/pull/4921): "Manufacturers" menu is now "Brand”.
* [5583](https://github.com/PrestaShop/PrestaShop/pull/5583): Maintenance text can be customized from the back office.
* [5702](https://github.com/PrestaShop/PrestaShop/pull/5702): The conditions page is not a CMS page anymore.
* [5711](https://github.com/PrestaShop/PrestaShop/pull/5711): The translation system now uses Symfony's Translator component.
* [5777](https://github.com/PrestaShop/PrestaShop/pull/5777): The Symfony error/exception handler is now availables in front office.
* [5774](https://github.com/PrestaShop/PrestaShop/pull/5774) and [5840](https://github.com/PrestaShop/PrestaShop/pull/5840): Classic theme integration improvement and refactoring.
* [5779](https://github.com/PrestaShop/PrestaShop/pull/5779): The Cart now handles virtual products in a more sensible way.
* [5794](https://github.com/PrestaShop/PrestaShop/pull/5794): Display all combinations to make a product pack.
* [5795](https://github.com/PrestaShop/PrestaShop/pull/5795): You can exclude already-discounted products from a voucher.
* [5827](https://github.com/PrestaShop/PrestaShop/pull/5827): Improved the Product page image dropzone.
* [24 pull requests](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20is%3Aclosed%20base%3Adevelop%20merged%3A2016-05-27..2016-07-13%20sort%3Acreated-asc%20domain%20) to implement the new [translation domains](http://build.prestashop.com/news/new-translation-system-prestashop-17/).

See the [complete list of merged PRs since building Beta 1 (May 27th) here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20is%3Aclosed%20base%3Adevelop%20merged%3A2016-05-27..2016-07-13%20sort%3Acreated-asc%20).


## Final note!

A lot of work went into this new Beta of PrestaShop 1.7, and there is still a lot of work to be done in order to get it ready for release. [You too can help with pull requests](https://github.com/PrestaShop/PrestaShop/tree/develop) for bugs that you noticed!

Happy testing!
