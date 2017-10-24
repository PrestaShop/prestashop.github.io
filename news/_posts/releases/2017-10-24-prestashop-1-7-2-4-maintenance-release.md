---
layout: post
title:  "Release of PrestaShop 1.7.2.4"
subtitle: "Maintenance version of the 1.7.2.x branch"
date:   2017-10-24 09:10:11
authors: [ xavierborderie ]
icon: icon-leaf
tags:
 - version
 - security
 - patch
 - releases
 - 1.7.2.x
 - 1.7
---

PrestaShop 1.7.2.3 is now available. This is <b>security release</b> for all previous versions of PrestaShop 1.7.

It was [recently reported](http://forge.prestashop.com/browse/BOOM-3953) to the Core team that the PrestaShop front office leaked some sensible cart product details, among which wholesale and supplier.

The issue was introduced by a PR merged in February 2017. Therefore, the issue impacts versions 1.7.1.0 to 1.7.2.3 of PrestaShop.<br/>
If you are currently using PrestaShop 1.7, we strongly advise you to upgrade to v1.7.2.4 immediately!

[Download PrestaShop 1.7.2.4 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

Thank you [the Befox.fr team](http://befox.fr/) for reporting the issue, and to Core members @eternoendless and @kompilorb for tracing it and fixing it.


### A reminder on responsible disclosure

Responsible (and private) disclosure is a standard practice when someone encounters a security problem: before making it public, the discoverer informs the Core team about it, so that a fix can be prepared, and thus minimize the potential damage.

The PrestaShop team tries to be very proactive when preventing security problems. Even so, issues might surface without notice.

This is why we have set up the <b>security@prestashop.com</b> email address: anyone can privately contact us with all the details about issues that affect the security of PrestaShop merchants or customers. Our security team will answer you, and discuss of a timeframe for your publication of the details.

Understanding a security issue means knowing how the attacker got in and hacked the site. If you have those details, then please do contact us privately about it (and please do not publish those details in public, including the Forge!). If you do not know how the attacker got it, please ask for help on [the support forums](https://www.prestashop.com/forums/).


### What is PrestaShop’s process for dealing with security issues?

Thanks to our strict use of a [SemVer-like versioning scheme](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/), we feel confident that the patch versions of PrestaShop 1.7 are very easy upgrades for all users. Patch versions are for backwards-compatible bug fixes and security issues, and security fixes are to be released as soon as they are fixed.

At PrestaShop, we remain attached to keeping your stores and customers safe, and we take security very seriously. Thank you for your understanding of the issue that affects us today -- and thank you for the swift update of all the stores you are responsible for!
