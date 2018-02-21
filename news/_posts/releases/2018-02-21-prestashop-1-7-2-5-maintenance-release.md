---
layout: post
title:  "Release of PrestaShop 1.7.2.5"
subtitle: "Maintenance version of the 1.7.2.x branch"
date:   2018-02-21 09:10:11
authors: [ PabloBorowicz ]
icon: icon-leaf
tags:
 - patch
 - releases
 - 1.7.2.x
 - 1.7
---

PrestaShop 1.7.2.5 is now available. This is a <b>security release</b> for all previous versions of PrestaShop 1.7.

Security researchers recently reported the Core team of two vulnerabilities affecting the Back Office, one of them critical.

### Issue 1 - Critical

Parameter unserializing could be exploited by an authentified attacker in order to execute arbitrary code on the server, with the same user level as the PHP binary.

This issue was introduced by a PR merged in September 2016. Therefore, all 1.7 versions of PrestaShop are affected.

The fix can be found in PR [#8772](https://github.com/PrestaShop/PrestaShop/pull/8772).

### Issue 2 - Minor

Wrongly sanitized parameters could be exploited by an authentified attacker to list and navigate through the shop's `/img` directory.

This issue was introduced by a commit in March 2014, so all PrestaShop versions starting on 1.6.0.4 are affected.

The fix for 1.7.x can be found in PR [#8755](https://github.com/PrestaShop/PrestaShop/pull/8755).

The fix for 1.6.x can be found in PR [#8785](https://github.com/PrestaShop/PrestaShop/pull/8785) (will be available in the upcoming 1.6.1.19).


** **Please note that both attacks can only be exploited by users having valid credentials to the back office**. **

If you are currently using PrestaShop 1.7, <b>we strongly advise you to upgrade to v1.7.2.5 immediately</b>!

[Download PrestaShop 1.7.2.5 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

Thanks again to Robin Peraglie from [RIPS Technologies](https://www.ripstech.com/), and to Core members @alegout and @tomlev for fixing the issues.


### A reminder on responsible disclosure

Responsible (and private) disclosure is a standard practice when someone encounters a security problem: before making it public, the discoverer informs the Core team about it, so that a fix can be prepared, and thus minimize the potential damage.

The PrestaShop team tries to be very proactive when preventing security problems. Even so, issues might surface without notice.

This is why we have set up the <b>security@prestashop.com</b> email address: anyone can privately contact us with all the details about issues that affect the security of PrestaShop merchants or customers. Our security team will answer you, and discuss of a timeframe for your publication of the details.

Understanding a security issue means knowing how the attacker got in and hacked the site. If you have those details, then please do contact us privately about it (and please do not publish those details in public, including the Forge!). If you do not know how the attacker got it, please ask for help on [the support forums](https://www.prestashop.com/forums/).


### What is PrestaShop’s process for dealing with security issues?

Thanks to our strict use of a [SemVer-like versioning scheme](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/), we feel confident that the patch versions of PrestaShop 1.7 are very easy upgrades for all users. Patch versions are for backwards-compatible bug fixes and security issues, and security fixes are to be released as soon as they are fixed.

At PrestaShop, we remain attached to keeping your stores and customers safe, and we take security very seriously. Thank you for your understanding of the issue that affects us today -- and thank you for the swift update of all the stores you are responsible for!
