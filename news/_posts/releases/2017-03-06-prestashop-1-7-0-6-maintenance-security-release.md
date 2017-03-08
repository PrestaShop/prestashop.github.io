---
layout: post
title:  "Release of PrestaShop 1.7.0.6"
subtitle: "Maintenance and security version of the 1.7.0.x branch"
date:   2017-03-06 09:10:11
authors: [ xavierborderie ]
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.0.x
 - 1.7
---

PrestaShop 1.7.0.6 is now available. This maintenance release closes [5 pull requests](https://github.com/PrestaShop/PrestaShop/milestone/20?closed=1), among which a security issue.

While this is not your regular, 15/20-pull-requests monthly patch release, 1.7.0.6 is an important upgrade nonetheless. 


### Fixing a security issue

Last week, our security team encountered a security issue in PrestaShop allowing a person with access to the back office to upload modules. This issue mainly concerns Addons contributors with back-office demos. Thank you Tomer Grassiany for your responsible disclosure of the issue, and your help with its resolution!

Our team acted swiftly, deleting back-office demos from PrestaShop Addons as a first security measure. We felt it was important to protect our community while we worked out a fix.

Version 1.7.0.6 contains the needed fixes to secure our Addons contributors.

The importance of this fix explains why this release has so few changes otherwise.

<div class="alert alert-note" role="alert">
<p>PrestaShop 1.6 will also benefit from this fix. Versions 1.6.1.12 contains the fix and is currently being reviewed. It will be released shortly.</p>
</div>


### What is responsible disclosure?

Responsible (and private) disclosure is a standard practice when someone encounters a security problem: before making it public, the discoverer informs the Core team about it, so that a fix can be prepared, and thus minimize the potential damage.

We have set up the security@prestashop.com email address so that  anyone can privately contact us with all the details about issues that affect the security of PrestaShop merchants or customers. Our security team will answer you, and discuss of a timeframe for your publication of the details.


### Also…

This maintenance release also fixes a couple of other issues:

* Allow the access of CLDR JSON files.
* Change the CLDR URL.
* Fix an error on the module notifications page.


### The usual

We are happy to deliver this sixth "patch" release of PrestaShop 1.7.0.0. 

The Core team keeps working at fixing the issues that are reported to us, making regular improvements to the codebase. Have you found an issue in PrestaShop 1.7? [Create a detailed Forge ticket](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1), so that we can reproduce it and fix it!

[Download 1.7.0.6 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

The [PrestaShop 1.7.0.6 changelog](https://www.prestashop.com/en/developers-versions/changelog/1.7.0.6-stable) is available.

Since version 1.7.0.6 is a ["patch" update](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/) to version 1.7.0.0, upgrading from that version will be easy: features will work better, and modules & themes which worked fine on 1.7.0.0 will work just as well with 1.7.0.6.


