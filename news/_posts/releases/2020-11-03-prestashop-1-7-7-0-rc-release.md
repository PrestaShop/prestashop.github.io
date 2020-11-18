---
layout: post
title:  "PrestaShop 1.7.7.0 RC1 Is Ready To Be Tested!"
subtitle: "Two months after the beta, here it is: the first release candidate for PrestaShop 1.7.7.0 is now ready for you to test!"
date:   2020-11-03 15:00:00
authors: [ PrestaShop ]
image: /assets/images/2020/11/build-177RC1.png
icon: icon-leaf
tags:
 - 1.7.7.x
 - version
 - rc
 - minor
 - releases
---

We are really happy to announce that we are very close to finishing the 1.7.7.0 release, the release candidate is the last step before the final version is out. 

![1.7.7.0 RC1 is available!](/assets/images/2020/11/build-177RC1.png)

This release candidate aims at making sure that all major regressions found during the beta have been fixed, and that no new ones have been spotted. If no new critical or major regression is reported by November 17th, we will make the final version of 1.7.7.0 available.

Please note that it is not currently possible to perform an automatic upgrade from the Beta to the Release Candidate. 

Furthermore, it will not be possible to upgrade from this Release Candidate to the final release. If you perform an update of your test store to the RC version, you will need to rollback to your current version before being able to upgrade to the final 1.7.7.0.

Please download, install and test this new version of PrestaShop and give us your feedback as early as possible. The later a problem is identified, the more time it takes to be fixed, and this delays the final release.

If you find regressions compared to the 1.7.6 version, please open an issue and describe it on [Github](https://github.com/PrestaShop/PrestaShop/issues/new?template=1_bug_report.md) so that it can be reproduced and fixed as soon as possible.

**Remember, this release candidate version is pre release software. Do not use it on your production shop!**


## Notable changes since the Beta 2 release

**Order back-office**
- [Fixed the impossibility to create an order when customer’s cart/order history is empty](https://github.com/PrestaShop/PrestaShop/issues/20643)
- [Fix the total products price not correctly calculated in specific conditions](https://github.com/PrestaShop/PrestaShop/issues/20542)
- [Fix the product price after adding a cart rule](https://github.com/PrestaShop/PrestaShop/issues/20533)
- [Fix the GDPR module to hide addresses](https://github.com/PrestaShop/PrestaShop/issues/20605)
- [Fix the order creation when a customer cart/order history is empty](https://github.com/PrestaShop/PrestaShop/issues/20643)
- [Fix an exception when we try to add a customized product](https://github.com/PrestaShop/PrestaShop/issues/20671)
- [actionProductCancel hook not triggered on standard refund](https://github.com/PrestaShop/PrestaShop/issues/20712)
- [Fix the impossibility to create an order when the address is considered as soft deleted](https://github.com/PrestaShop/PrestaShop/issues/20666)
- ["Send an email to the customer with the link to process the payment." doesn't work](https://github.com/PrestaShop/PrestaShop/issues/20687)
- [Missing gift wrapping and recycled paper options in create order page](https://github.com/PrestaShop/PrestaShop/issues/21300)
- [In order detail page, when adding a discount amount with a different currency than the default one, an incorrect value is displayed and an incorrect amount is calculated](https://github.com/PrestaShop/PrestaShop/issues/21323)
- [An exception is displayed when removing a discount with free gift from an order](https://github.com/PrestaShop/PrestaShop/issues/21438)
- [Incorrect Product's total when adding a product with a discount gift or changing the Shipping](https://github.com/PrestaShop/PrestaShop/issues/21566)
- [Incorrect total when updating a quantity's product](https://github.com/PrestaShop/PrestaShop/issues/21659)

**Back Office:**
- [Ranges are asked while they shouldn't during carrier edition](https://github.com/PrestaShop/PrestaShop/issues/20993)
- [Following migration, $_GET identifier parameters are missing on "View {..} Page](https://github.com/PrestaShop/PrestaShop/issues/20934)
- [Features page - an exception is displayed](https://github.com/PrestaShop/PrestaShop/issues/20777)
- [Stats page - No module has been installed](https://github.com/PrestaShop/PrestaShop/issues/21186)
- [An error is displayed when disabling or enabling maintenance](https://github.com/PrestaShop/PrestaShop/issues/21430)
- [Hook displayBackOfficeTop not being called on Login BO Page](https://github.com/PrestaShop/PrestaShop/issues/21379)

**Front Office:**
- [Wrong cart rules discount when using alternative currency](https://github.com/PrestaShop/PrestaShop/issues/20594)
- [Incorrect total with Free gift + Percent discount cart rule](https://github.com/PrestaShop/PrestaShop/issues/20690)
- [When we have two currencies enabled - the Currency block and the language block are not working anymore](https://github.com/PrestaShop/PrestaShop/issues/20950)

**For developers**
- [Make PrestaShop compatible with composer 2.0](https://github.com/PrestaShop/PrestaShop/pull/21609)
- [Update behat and gerkhin to allow debugging in PHPStorm](https://github.com/PrestaShop/PrestaShop/pull/21532)

## Changelog

151 pull requests have been merged since the beta 2 release and 30+ issues have been fixed. Read the [Changelog](https://github.com/PrestaShop/PrestaShop/releases) for details. 
This brings us to more than 1400 merged pull requests for the 1.7.7.0 milestone, it is definitely our biggest yet.

If you are looking for more details about all changes and new features expected in 1.7.7, the [1.7.7 beta version release note](https://build.prestashop.com/news/prestashop-1-7-7-0-beta-release/) is the perfect article for you to read!

## Automated Tests

The 1.7.7 version is by far the most tested version ever released by PrestaShop, this ensures its stability and prevents future regressions that could be created by future developments.
Here are some numbers about PrestaShop's automatic tests (and the difference with our previous minor release, 1.7.6):

- UI tests (sanity + functional): 4307 (whole new campaigns)
- Integration: 55 tests (+3)
- Behavior: 518 scenarios, 8838 steps (+297 scenarios, +6133 steps)
- Unit: 1998 tests (+31)

The UI tests, especially, have been completely redesigned. If you want more information about this please read these two articles:
- [The (New) PrestaShop Test Framework](https://build.prestashop.com/news/the-new-prestashop-test-framework/)
- [Automated UI Tests Tutorial](https://build.prestashop.com/news/how-to-write-a-new-ui-test/)

## Known issues

The following issues are not considered edge cases and won't block the release of a stable version. They will be fixed in the next patch version.

**Order back-office**
- [Incorrect Total's product line when Round type = "Round on each item"](https://github.com/PrestaShop/PrestaShop/issues/21708)
- [An exception is displayed when changing the invoice address in the second time - Round mode = Round on each item](https://github.com/PrestaShop/PrestaShop/issues/21717)
- [When we update a product quantity, the gift product is not added to the order](https://github.com/PrestaShop/PrestaShop/issues/21501)
- [Updating a product with a specific discount (gift)](https://github.com/PrestaShop/PrestaShop/issues/21506)
- [The gifted product quantity is not updated](https://github.com/PrestaShop/PrestaShop/issues/21592)
- [Incorrect quantity added to product when it is added to the same order as a gift also](https://github.com/PrestaShop/PrestaShop/issues/21531)
- [Recalculate shipping costs option enabled - the Shipping price not instantly updated](https://github.com/PrestaShop/PrestaShop/issues/21267)
- [Payment block not refreshed after adding product](https://github.com/PrestaShop/PrestaShop/issues/21293)
- [Ajax issue - The gift Product is not removed when removing a product ordered](https://github.com/PrestaShop/PrestaShop/issues/21500)
- [Edit quantity and deletion in order in BO in Multishop context : Totals are not updated](https://github.com/PrestaShop/PrestaShop/issues/21706)
- [Increment/decrement button doesn't work when we try to add a product out of stock < 0 (with allow order)](https://github.com/PrestaShop/PrestaShop/issues/21529)
- [Voucher line is not added when a cart rule "Discount for a country selection" is applied](https://github.com/PrestaShop/PrestaShop/issues/21548)
- [The Voucher "Free shipping " value is not updated when changing an address](https://github.com/PrestaShop/PrestaShop/issues/21549)

**Back Office**
- [Bad URL for module catalog page after disabling MBO](https://github.com/PrestaShop/PrestaShop/issues/21588)

**Front Office**
- [Exception in FO when trying to pay an order with 2 products from 2 differents shops](https://github.com/PrestaShop/PrestaShop/issues/21714)


## Download

You can download PrestaShop 1.7.7 RC1 here:

[Download PrestaShop 1.7.7 RC1 now!](https://www.prestashop.com/en/developers-versions){: .btn .btn-lg .btn-success}
{: .text-center}


## How to help finish the 1.7.7

Your feedback on this RC is essential, the regressions you find right now are as many bugs less on the final version and less patch versions. It also means fewer problems on your (or your customer’s) online store. 

You must:

- Install it and test that there is no regression compared to the 1.7.6 version
- If you develop modules or themes, test them on this version
- Test the auto-upgrade plugin
- [Report regressions on GitHub](https://github.com/PrestaShop/PrestaShop/issues) (read how to [report issues](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/))
- Fix regressions by creating a [pull request](https://github.com/PrestaShop/PrestaShop/compare) (read the [contribution guidelines](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/))


If everything is working well, feel free to comment on this article to tell us, and share on social networks, we also need this kind of feedback! ;-)

## Acknowledgments

A huge thanks to everyone who got involved by reporting, testing and fixing regressions during the first beta phase.
Internal and external contributors who submitted pull requests and participated to build this release candidate: [PululuK](https://github.com/PululuK), [okom3pom](https://github.com/okom3pom), [ks129](https://github.com/ks129), [Boubker Bribri](https://github.com/boubkerbribri), [Franck Lefèvre](https://github.com/Progi1984), [Ibrahima Sow](https://github.com/sowbiba), [Jonathan Lelievre](https://github.com/jolelievre), [Mathieu Ferment](https://github.com/matks), [Matthieu Rolland](https://github.com/matthieu-rolland), [Nesrine Abdmouleh](https://github.com/nesrineabdmouleh), [Pablo Borowicz](https://github.com/eternoendless), [Pierre Rambaud](https://github.com/PierreRambaud), [Simon Garny](https://github.com/SimonGrn), [Stephane Decisy](https://github.com/SD1982), [Thomas Baccelli](https://github.com/atomiix) and [Valentin Szczupak](https://github.com/NeOMakinG). Thank you!

External contributors who reported regressions to build a more stable 1.7.7: [ks129](https://github.com/ks129), [okom3pom](https://github.com/okom3pom), [MathiasReker](https://github.com/MathiasReker) and PrestaShop's maintainer: [kpodemski](https://github.com/kpodemski). Thank you!

Like them, please test this release candidate and give us your feedback!
