---
layout: post
title:  "Release of PrestaShop 1.6.1.8"
subtitle: "Maintenance version of the 1.6.1.x branch"
date:   2016-10-26 09:10:11
author: xavierborderie
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.6.1.x
---

PrestaShop 1.6.1.8 is now available. This maintenance release [has seen 20 pull requests](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Amerged%20milestone%3A1.6.1.8%20) since version 1.6.1.7 ([released on September 6th](http://build.prestashop.com/news/prestashop-1617-maintenance-release/)).

Continuing on our promise to support 1.6 with patch releases, we are happy to deliver this new version and to continue making sure that 1.6 remains stable and safe for PrestaShop merchants. Community member @firstred helped us pick the most interesting/urgent pull-requests to include in this release: thank you Michael!

[Download 1.6.1.8 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

<div class="alert alert-important" role="alert">
While we were packing version 1.6.1.8 for QA testing two weeks ago, <a href="https://developers.google.com/web/updates/2016/10/nic54">version 54 of the Google Chrome browser was released</a>. This is a significant update of this major browser, because **it removes the ability to make synchronous XMLHttpRequest calls** -- a method which is used in PrestaShop 1.5 & 1.6's Product Creation page.<br/>
<br/>
In effect, **this makes it impossible to create or edit a product in all versions of PrestaShop 1.5 and 1.6**. While this problematic behavior is not a bug from PrestaShop but <a href="https://xhr.spec.whatwg.org/#the-open()-method">a design decision from the W3C/WHATWG standards bodies</a> (applied by browser vendors after time of deprecation), all PrestaShop merchants might witness issues once the Chrome browser auto-updates to its latest version. <br/>
Furthermore, other browsers should soon follow suite: <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open#Parameters">Firefox has also deprecated the the `async` parameter</a>. We do not have yet an ETA for other browsers.<br/>
<br/>
**The PrestaShop Core team is aware of the situation, and is publicly working on this issue**: <a href="http://forge.prestashop.com/browse/PSCSX-8524">here is the Forge ticket</a>, and <a href="https://github.com/PrestaShop/PrestaShop/pull/6749">here is the current pull request</a>. **Please help us test the current fix**! Let's make sure, together, that it does fix the issue for everyone! <br/>
Also, **make sure that your modules and themes DO NOT make use of synchronous XHR calls**! <a href="https://developers.google.com/web/updates/2012/01/Getting-Rid-of-Synchronous-XHRs">Learn how here</a>!<br/>
<br/>
PrestaShop 1.6.1.8 does not contain the fix. We are planning for a quick v1.6.1.9 with this fix in place -- this way we can focus our QA testing for this version to just this issue. That forthcoming release will also explain how to patch previous versions of PrestaShop.<br/>
<br/>
While we are working on the issue, you should be able to have your Product Creation page work again by <a href="http://www.slimjet.com/chrome/google-chrome-old-version.php">installing Chrome 53</a> and <a href="https://www.chromium.org/administrators/turning-off-auto-updates">setting to not make automatic upgrades</a>.
</div>

As the version number indicates (as per [our SemVer-like versioning](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/)), this is the 8th patch release for PrestaShop 1.6.1.0.<br/>

As usual, if you are currently running promotions leading to high traffic on your website, we recommend that you wait for the promotion to end before attempting any upgrade and technical change to your store.

We hope you enjoy this new release!


### The changes

For a full list of changes, [see the list of pull requests merged into the 1.6.1.x branch in this milestone](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Amerged%20milestone%3A1.6.1.8%20)

Here are some of the most notable changes that this version brings:

* BO: Admin can now remove quantity from Advanced Stock Manager.
* BO: Unremovable order states are now really unremovable.
* BO: Partial refund cart rules tax method is improved.
* BO: Sample customers_import.csv now works as expected.
* CO: Ability to save large messages from IMAP.
* CO: isAllProductsInStock calculation is improved.
* IN: Zipcode formats for Afghanistan and Egypt have been added.
* ...and several other fixes.


The [PrestaShop 1.6.1.8 changelog](https://www.prestashop.com/en/developers-versions/changelog/1.6.1.8-stable) is available.

Since version 1.6.1.8 is a "patch" update to version 1.6.1.0, upgrading from that version will be as smooth as silk for everyone: features will work better, and modules & themes which worked fine on 1.6.1.0 will work just as well with 1.6.1.8.


### The contributors

This release had 10 contributors, both from PrestaShop and from the Community at large. 

* @123monsite-regis
* @Casper-O
* @aleeks
* @enumag
* @erouvier29
* @firstred
* @maximebiloe
* @mcdado
* @michaelhjulskov
* @shaffe-fr

A huge "thank you!" to each of the 8 outside contributors, who gave their time and knowledge for the benefit of the whole PrestaShop community! [You too can contribute to the next version](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)!


### Onwards!

Let's go, [upgrade your store(s)](http://doc.prestashop.com/display/PS16/Updating+PrestaShop)! Upgrading from 1.6.1.0-1.6.1.7 is completely safe, upgrades from a standard 1.6.0.x version should work just as well, and those upgrading from version 1.5, 1.4 or even 1.3 should take their time and pay attention to their modules, their theme and their custom modifications!
