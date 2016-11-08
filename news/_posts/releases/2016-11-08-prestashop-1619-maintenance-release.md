---
layout: post
title:  "Release of PrestaShop 1.6.1.9"
subtitle: "Maintenance version of the 1.6.1.x branch"
date:   2016-11-08 09:10:11
author: xavierborderie
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.6.1.x
---

PrestaShop 1.6.1.9 is now available. This maintenance release [has seen 1 pull requests](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Amerged%20milestone%3A1.6.1.8%20) since version 1.6.1.8 ([released on October 26th](http://build.prestashop.com/news/prestashop-1618-maintenance-release/)).

Continuing on our promise to support 1.6 with patch releases until October 2018, we are happy to deliver this new version and to continue making sure that 1.6 remains stable and safe for PrestaShop merchants.

[Download 1.6.1.9 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

### Important information about this version

This maintenance release is focused on a single issue: the fact that recent or forthcoming browser updates (Chrome, Edge, Firefox, etc.) remove the ability to make synchronous XMLHttpRequest calls -- making it impossible to create or edit a product in all versions of PrestaShop 1.5 and 1.6.

While this problematic behavior is not a bug from PrestaShop but <a href="https://xhr.spec.whatwg.org/#the-open()-method">a design decision from the W3C/WHATWG standards bodies</a> (applied by browser vendors after time of deprecation), all PrestaShop merchants might witness issues once their browser auto-updates to a version that removes this feature.


### Working together

to The PrestaShop Core team has been working publicly on this issue: <a href="http://forge.prestashop.com/browse/PSCSX-8524">here is the Forge ticket</a>, and <a href="https://github.com/PrestaShop/PrestaShop/pull/6749">here is the pull request</a>. Thanks the help and feedback of several community members, we can finally release this version with the certainty that it fixes the issue.

Addons contributors, <strong>make sure that your modules and themes DO NOT make use of synchronous XHR calls</strong>! <a href="https://developers.google.com/web/updates/2012/01/Getting-Rid-of-Synchronous-XHRs">Learn how here</a>!<br/>

Upgrade now!


### Don't want to upgrade to 1.6.1.9?

The fixes imply several files, so we cannot just give one file to update. Fixing your store will have to be done manually, file per file.

As [the pull request](https://github.com/PrestaShop/PrestaShop/pull/6749/files?w=1) shows, you will have to change 9 files:

* admin-dev/themes/default/template/controllers/products/helpers/form/form.tpl 
* admin-dev/themes/default/template/controllers/products/helpers/tree/tree_associated_categories.tpl
* admin-dev/themes/default/template/helpers/tree/tree_toolbar_search.tpl 
* classes/tree/Tree.php 
* classes/tree/TreeToolbarSearch.php 
* classes/tree/TreeToolbarSearchCategories.php 
* js/admin/products.js 
* js/admin/tinymce.inc.js 
* js/tiny_mce/tiny_mce.js 

Here is a safe process to fix your store:

1. Make a (local) copy of all these files, in order to revert back to them if you make a mistake. For instance, add "_original" to the name of the copies.
2. Open the original files one by one, remove and/or add lines as indicated by GitHub.
3. Upload them all (changed files and original files) in their respective folders.
4. Test your store. 

Is it fixed? Great! If not, you can get back to the original state:

1. Rename the changed files: add "_changed" to the name of the files.
2. Restore the original files: remove "_original" from the name of the files.
3. Test your store.
4. Try again to manually edit the files.

If all fails, we advise you to upgrade to 1.6.1.9.


### The usual

As the version number indicates (as per [our SemVer-like versioning](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/)), this is the 9th patch release for PrestaShop 1.6.1.0.<br/>

As usual, if you are currently running promotions leading to high traffic on your website, we recommend that you wait for the promotion to end before attempting any upgrade and technical change to your store.

We hope you enjoy this new release!


### Onwards!

Let's go, [upgrade your store(s)](http://doc.prestashop.com/display/PS16/Updating+PrestaShop)! Upgrading from 1.6.1.0-1.6.1.8 is completely safe, upgrades from a standard 1.6.0.x version should work just as well, and those upgrading from version 1.5, 1.4 or even 1.3 should take their time and pay attention to their modules, their theme and their custom modifications!
