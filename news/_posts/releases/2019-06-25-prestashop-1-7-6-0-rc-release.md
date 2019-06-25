---
layout: post
title:  "Release note Release Candidate 1.7.6"
subtitle: "A few weeks after the beta, here it is: the first release candidate for PrestaShop 1.7.6.0 is now ready for you to test!"
date:   2019-06-25 16:00:00
authors: [ PrestaShop ]
icon: icon-leaf
tags:
 - version
 - rc
 - minor
 - releases
 - 1.7.6.x
---


This is the last step before releasing the final 1.7.6.0. It aims at making sure that all regressions found during the beta have been fixed, and that no new ones appeared. If no new regression is reported by July 1st, we will make the final version of 1.7.6.0 available.

Please note that it is not currently possible to perform an automatic upgrade from the Beta to the Release Candidate. Furthermore, it will not be possible to upgrade from this Release Candidate to the final release. If you perform an update of your test store to the RC version, you will need to rollback to your current version before being able to upgrade to the final 1.7.6.0.

Go download and install this RC version as a test store, either on your machine or your web hosting, then play with it – and give us your feedback! We need YOU to test this new version of PrestaShop.

**Remember, this release candidate version is pre release software. Do not use it on your production shop!**


## New in the release candidate

**Back Office:**
  - [Introduced an easy way for hooked modules on entity pages to handle error display](https://github.com/PrestaShop/PrestaShop/pull/14239) (a demo module is now finished and available [here](https://github.com/friends-of-prestashop/demo-cqrs-hooks-usage-module))

**Front Office:**
  - [Improved error messages displayed when spam protection rejects a customer subscription](https://github.com/PrestaShop/PrestaShop/pull/14138) and you can now translate them specifically for a better user experience

**Core:**
  - [Module Faceted search version has been bumped to 3.0.5](https://github.com/PrestaShop/PrestaShop/pull/14284) which contains interesting bug fixes
  - Watermark and Product comments modules have been integrated and can now be installed from the Module Catalog page in the back office
  - Tips and Updates module (psaddonsconnect) has been updated to the 2.0.0 version
  - [We have replaced PHPExcel by PHPSpreadsheet](https://github.com/PrestaShop/PrestaShop/pull/14316) in order to better handle XLS or XLSX files import
  
  
## Changelog

100+ pull requests have been merged since the beta release and 50+ regressions have been fixed. Read the [Changelog](https://github.com/PrestaShop/PrestaShop/releases) for details. A huge thanks to everyone involved in testing and fixing issues during the beta phase, and especially 202 ecommerce, OneDotIT and MartinF who helped us a lot during this period !

This brings us to more than 700 merged pull requests for the 1.7.6.0 milestone, it is definitely our biggest yet.

If you are looking for more details about all changes and new features expected in 1.7.6, the [1.7.6 beta version release note](http://build.prestashop.com/news/prestashop-1-7-6-0-beta-release/) is the perfect article for you to read!


## Download

You can download PrestaShop 1.7.6 RC here:

[Download PrestaShop 1.7.6 RC now!](https://www.prestashop.com/en/developers-versions){: .btn .btn-lg .btn-success}
{: .text-center}


## How to help finish the 1.7.6
Your help will be very appreciated to finish the work on PrestaShop 1.7.6. Even if you are not a developer, your feedback has a lot of value.

You can:

Install it and test that there is no regression compared to the 1.7.5.2 version
If possible, test with data imported from a real shop
If you develop modules or themes, test them on this version
Test the auto-upgrade plugin
[Report bugs on GitHub](https://github.com/PrestaShop/PrestaShop/issues) (read how to [report issues](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/))
Submit a bug fix by creating a [pull request](https://github.com/PrestaShop/PrestaShop/compare) (read the [contribution guidelines](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/))

If everything is working well, feel free to comment on this article to tell us, and share on social networks, we also need this kind of feedback! ;-)
