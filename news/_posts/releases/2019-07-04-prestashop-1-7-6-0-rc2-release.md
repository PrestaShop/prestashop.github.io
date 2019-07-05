---
layout: post
title:  "Release note 1.7.6 RC2"
subtitle: "This second release candidate for the 1.7.6 fixes the regressions identified in the RC1."
date:   2019-07-04 16:30:00
authors: [ PrestaShop ]
icon: icon-leaf
tags:
 - version
 - rc
 - minor
 - releases
 - 1.7.6.x
---

Once again the PrestaShop community actively participated in the testing of the PrestaShop 1.7.6 Release Candidate.
Thanks to your involvement, 3 regressions were identified and fixed.

Our team is glad to announce PrestaShop 1.7.6.0 Release Candidate 2.
If no new regression is reported by the end of the week (27), we will make the final version of 1.7.6.0 available next week (28).


## Fixed in this Release Candidate 2
**Front Office:**
- [Issues with prices and currencies display in Dutch](https://github.com/PrestaShop/PrestaShop/pull/14400) due to a bug in the method used to parse CLDR data.<br>If you experienced some missing decimals that was the cause. <br>We decided to take some time to verify everything is working well on the 40 main languages used on PrestaShop, and it does! <br>More improvements on currency management will be shipped in the 1.7.7 version.
- On Firefox browser, [duplicate arrows were displayed in the shopping cart product quantity field](https://github.com/PrestaShop/PrestaShop/pull/14395).

**Back Office:**
- [Grid display error on the Add/Edit Customer page](https://github.com/PrestaShop/PrestaShop/pull/14401) introduced by a previous PR to allow this page to extend in width.
- [Annotation driver settings improvement](https://github.com/PrestaShop/PrestaShop/pull/14460) to ignore index.php files in Doctrine entities folder. Not a regression but a possible error case for modules using Doctrine

**Security:**
- There was an issue in the checkout process that could be used to select any delivery address existing in the db when placing an order, not only the ones owned by the customer. [The fix](https://github.com/PrestaShop/PrestaShop/pull/14444) makes sure a customer can only use the addresses he owns and also prevents the address selection for an order to be done outside of the "confirm address" step.


## Changelog
You can find all the details about this version in the [Changelog](https://github.com/PrestaShop/PrestaShop/releases).
<br>A huge thanks to everyone involved in testing and fixing issues during the RC1 phase, and especially sdwebdesign who helped us to identify this tricky prices display regression!

If you are looking for more details about all changes and new features expected in 1.7.6, the [1.7.6 beta version release note](http://build.prestashop.com/news/prestashop-1-7-6-0-beta-release/) is the perfect article for you to read!


## Download
You can download PrestaShop 1.7.6 RC2 here: 

[Download PrestaShop 1.7.6 RC2 now!](https://www.prestashop.com/en/developers-versions){: .btn .btn-lg .btn-success}
{: .text-center}

## How to help finish the 1.7.6
Your help will be very appreciated to finish the work on PrestaShop 1.7.6. Even if you are not a developer, your feedback has a lot of value.

You can:

- Install it and test that there is no regression compared to the 1.7.5.2 version
- If possible, test with data imported from a real shop
- If you develop modules or themes, test them on this version
- [Report bugs on GitHub](https://github.com/PrestaShop/PrestaShop/issues) (read how to [report issues](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/))
- Submit a bug fix by creating a [pull request](https://github.com/PrestaShop/PrestaShop/compare) (read the [contribution guidelines](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/))

If everything is working well, feel free to comment on this article to tell us, and share on social networks, we also need this kind of feedback! ;-)
