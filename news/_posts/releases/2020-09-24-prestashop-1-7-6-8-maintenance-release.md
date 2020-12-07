---
layout: post
title:  "Release Of PrestaShop 1.7.6.8"
subtitle: "Maintenance version of the 1.7.6.x branch"
date:   2020-09-24 14:00:00
authors: [ PrestaShop ]
image: /assets/images/2020/09/1768_meta.jpg
icon: icon-checked

tags:
 - 1.7
 - 1.7.6.x
 - version
 - patch
 - releases
 - security
---


The ongoing work on security for PrestaShop software continues. We have identified and fixed new minor security issues, it has been decided to deliver a new maintenance release for 1.7.6.X branch.

![1.7.6.8 is available!](/assets/images/2020/09/1768_meta.jpg)

Reminder: the 1-Click Upgrade module’s latest version is [v4.10.1](https://github.com/PrestaShop/autoupgrade/releases/tag/v4.10.1), don’t forget to upgrade it.

## Security fixes

4 security fixes have been included in this patch version:

- Stored XSS in upload files ([security advisory](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-rc8c-v7rq-q392))
- Blind SQLi in Catalog Product edition ([security advisory](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-fghq-8h87-826g))
- Potential XSS injection with contact form ([security advisory](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-5cp2-r794-w37w))

We also include an updated version of the [contactform module](https://github.com/PrestaShop/contactform/)
- Potential XSS injection with contact form ([security advisory](https://github.com/PrestaShop/contactform/security/advisories/GHSA-95hx-62rh-gg96))

More information about why it is important to update:
- [Cross-site Scripting (XSS)](https://cwe.mitre.org/data/definitions/79.html)
- [SQL Injection (CWE-89)](https://cwe.mitre.org/data/definitions/89.html)

## Notable change

Because of mail sending issues, two methods have been removed from the `Mail::send` method. Functions `htmlentitiesDecodeUTF8` and `stripslashes` are no longer executed before sending the mail.


[Download PrestaShop 1.7.6.8 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

Since version 1.7.6.8 is a "patch" update to version 1.7.6.7, upgrading from any 1.7.6 version will be easy: features will work better, and modules & themes which worked fine on 1.7.6.x will work the same with 1.7.6.8. Upgrades from a standard 1.7.x version should work just as well.
