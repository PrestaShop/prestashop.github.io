---
layout: post
title:  "Release Of Module ProductComments 4.2.1"
subtitle: "Maintenance version of the ProductComments module"
date:   2020-12-03
twitter_image: /assets/images/theme/banner-security.jpg
authors: [ PrestaShop ]
icon: icon-checked

tags:
 - 1.7
 - module
 - module-releases
---

We have identified and fixed a new security issue on module [Product Comments](https://github.com/PrestaShop/productcomments/).

This issue is fixed in latest version [4.2.1](https://github.com/PrestaShop/productcomments/releases/tag/v4.2.1).

## Security fix

One security fix has been included in this minor version:

- Blind SQL injection during the CommentGrade process ([security advisory](https://github.com/PrestaShop/productcomments/security/advisories/GHSA-5v44-7647-xfw9))

More information about why it is important to update:
- [SQL Injection (CWE-89)](https://cwe.mitre.org/data/definitions/89.html)

## Other changes

The version v4.2.1 of the module also brings some new improvements, you can read the full Changelog [here](https://github.com/PrestaShop/productcomments/releases/tag/v4.2.1).

## How to upgrade

You should be able to download the latest version from your Back Office.
