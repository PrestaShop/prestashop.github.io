---
layout: post
title:  "Release Of PrestaShop 1.7.6.6"
subtitle: "Maintenance version of the 1.7.6.X branch"
date:   2020-07-02 16:30:00
authors: [ PrestaShop ]
image: /assets/images/2020/07/1766meta.jpg
icon: icon-checked
tags:
 - 1.7
 - 1.7.6.x
 - version
 - patch
 - releases
redirect_from:
 - /news/release-note-1766/
---


The ongoing work on security for PrestaShop software continues. We have identified and fixed new minor security issues and since we don't expect PrestaShop 1.7.7.0 final to be released before a few weeks, it has been decided to deliver a new maintenance release for 1.7.6.X branch.

![1.7.6.6 is available!](/assets/images/2020/07/1766banner.jpg)

Similarly to 1.7.6.5, this maintenance release fixes not only regressions found on versions 1.7.6.0 to 1.7.6.5, but also a few security issues from 1.5, 1.6 and 1.7 versions. This is again a result of the huge work on security going on in 2020 to make PrestaShop software safer.
PrestaShop will continue focusing more and more on security to ensure that no security breaches, even minor ones such as permission issues, are left out in the core.

As this patch fixes several security issues, we highly recommend to upgrade your shop as soon as possible. Of course, as always, don't forget to backup before.

Reminder: the 1-Click Upgrade module's latest version is [v4.10.1](https://github.com/PrestaShop/autoupgrade/releases/tag/v4.10.1), don't forget to upgrade it.

## Main fixes

Below are listed the 6 regressions that were found and fixed in this version:

Front-office regression:

- A BC break was mistakenly introduced in 1.7.6.5 on some selectors in the front-office [#18509](https://github.com/PrestaShop/PrestaShop/issues/18509)

Back-office regressions:

- It was not possible to use Stocks page without the rights for Translation page [#19713](https://github.com/PrestaShop/PrestaShop/issues/19713)
- Bad button color in Modules pages modal window [#9699](https://github.com/PrestaShop/PrestaShop/issues/9699)
- No success message in Customer page after editing a voucher [#18842](https://github.com/PrestaShop/PrestaShop/issues/18842)

Other regressions:

- It was not possible to update currencies using the Webservice [#18865](https://github.com/PrestaShop/PrestaShop/issues/18865)
- There was an error at the end of the upgrade if it was run manually [#18723](https://github.com/PrestaShop/PrestaShop/issues/18723)


## Security fixes

7 security fixes have been included in this patch version:

- External control of configuration setting in the dashboard ([security advisory](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-mc98-xjm3-c4fm))
- Improper access controls in Carrier page, Module Manager and Module Positions ([security advisory](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-xp3x-3h8q-c386))
- Improper authentication ([security advisory](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-ccvh-jh5x-mpg4))
- Reflected XSS in product page ([security advisory](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-qgh4-95j7-p3vj))
- Stored XSS in AdminQuickAccesses ([security advisory](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-v4pg-q2cv-f7x4))
- Information disclosure in release archive ([security advisory](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-492w-2pp5-xhvg))
- Information exposure in upload directory ([security advisory](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-997j-f42g-x57c))

More information about why it is important to update:

- [External Control of System or Configuration Setting](https://cwe.mitre.org/data/definitions/15.html)
- [Improper Access Control](https://cwe.mitre.org/data/definitions/284.html)
- [Improper Authentication - Generic (CWE-287)](https://cwe.mitre.org/data/definitions/287.html)
- [Cross-site Scripting (XSS)](https://cwe.mitre.org/data/definitions/79.html)
- [Open Redirect (CWE-601)](https://cwe.mitre.org/data/definitions/601.html)
- [Information Exposure Through Directory Listing (CWE-548)](https://cwe.mitre.org/data/definitions/548.html)
- [Information Disclosure (CWE-200)](https://cwe.mitre.org/data/definitions/200.html)


Read the [full changelog here](https://www.prestashop.com/en/release-notes-1-7-6-6-stable).

## Notable change

In order to correctly handle user session expiration, two new SQL tables have been added to PrestaShop MySQL schema: `ps_customer_session` and `ps_employee_session`. These SQL tables are used for security purposes. 


## Breaking or risky changes

Dashboard modules can no longer use `AdminDashboardController::ajaxProcessSaveDashConfig()` to save values. This is not possible anymore in PrestaShop 1.7.6.6 in order to enforce the shop's security.

A bug fix included in 1.7.6.5 required changing a CSS selector in the Front Office's product page and rendering it more specific. However, this new selector did not work with some third party themes which were based on Classic.
In 1.7.6.6, [a new generic selector has been added](https://github.com/PrestaShop/PrestaShop/pull/19800): `.product-container`. If you are a theme developer, make sure to add this class to the appropriate container on your product page in order to allow your product page to be refreshed on changes.


## Acknowledgments

Core Team contributors to this patch version:
Franck Lefèvre, Jonathan Lelievre, Pierre Rambaud, Mathieu Ferment, Matthieu Rolland, Thomas Baccelli, Valentin Szczupak.
Thank you!



[Download PrestaShop 1.7.6.6 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}


Since version 1.7.6.6 is a "patch" update to version 1.7.6.5, upgrading from any 1.7.6 version will be easy: features will work better, and modules & themes which worked fine on 1.7.6.x will work just as well with 1.7.6.6. Upgrades from a standard 1.7.x version should work just as well.
