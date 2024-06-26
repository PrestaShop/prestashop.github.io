---
layout: post
aliases: ["/news/prestashop-1-6-1-2-rc4"]
title:  "Test PrestaShop 1.6.1.2 RC4"
subtitle: "May the fourth be with you"
date:   2015-10-23 14:00:41
authors: [ xavierborderie ]
icon: icon-mic
tags:
 - version
 - rc
 - releases
 - development
 - "1.6.1.x"
 - "1.6"
---

Today we are releasing the fourth Release Candidate version of version 1.6.1.2.

Let's be honest here: the RC2/RC3 was quite a mess, with last-minute issues which forced us to repackage the whole thing -- twice! Turns out several pull-requests were merged at the last minute in order to fix more issues in this version, and these PR were not as thoroughly tested as they should have been.

So this RC4 took a bit more time than usual, all the while featuring much less changes than the previous RCs: we took the time to revise our workflow, have more eyes look at the code before it was merged, and merged fewer PRs in order to keep the RC focused. <br />
This is actually a workflow which we intend to put in place for all our patch release: have less PR per patch release, while allowing us to make more regular patch releases altogether -- remember that patch releases are just easy/small fixes, so an update to a patch release will always be easy, and won't break anything in your current version.<br />
Continuing on that thought, having more focused patch version should allow us to skip the RC period altogether, keeping it only for minor and major versions.

Of note: this RC4 features PR [4330](https://github.com/PrestaShop/PrestaShop/pull/4330), which is an attempt to fix the slowness issue that's been plaguing PrestaShop 1.6 for several months now (the issue where the Save buttons would spin and be available for a larger-than-necessary amount of time). PLEASE PLEASE PLEASE give us your feedback on this fix!

This is the fourth release candidate for 1.6.1.2, and NOT the final, production-ready code! <b>This is still a test version</b>, and is therefore not yet deemed suitable for production use. Hence, do not upgrade your store just yet! Install the RC4 on your server (on as many server configurations as possible, please!), or upgrade from a clone of your real store.

{{< cta "https://www.prestashop.com/versions" >}}Download and test PrestaShop 1.6.1.2 RC4 now!{{< /cta >}}

Remember: if you have any feedback to give or issue to raise, [create a ticket on the Forge](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop)!

Here is the [list of pull-requests that the team has merged into 1.6.1.2 since the RC3](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+base%3A1.6.1.x+is%3Aclosed+merged%3A%3E2015-10-06+) so far:

 * [4150](https://github.com/PrestaShop/PrestaShop/pull/4150): [-] FO : Fix performances issue with SpecificPrice (PSCSX-6942)
 * [4183](https://github.com/PrestaShop/PrestaShop/pull/4183): [-] IN: Wrong id_guest in cart.xml
 * [4196](https://github.com/PrestaShop/PrestaShop/pull/4196): [-] CORE : Undefined var
 * [4223](https://github.com/PrestaShop/PrestaShop/pull/4223): [-] BO: Show stock warning on products less then 0
 * [4225](https://github.com/PrestaShop/PrestaShop/pull/4225): [-] CORE : fix typo in getCMSContent
 * [4236](https://github.com/PrestaShop/PrestaShop/pull/4236): [-] FO : Fix bad redirection on cart when minimum amount for order
 * [4241](https://github.com/PrestaShop/PrestaShop/pull/4241): [-] CORE : Fix bad length for compagny field (address) for upgrade from < 1.5.2.0
 * [4144](https://github.com/PrestaShop/PrestaShop/pull/4144): [-] CORE : Could not edit a carrier
 * [4147](https://github.com/PrestaShop/PrestaShop/pull/4147): [*] TR : Translate install xml files to Swedish
 * [4260](https://github.com/PrestaShop/PrestaShop/pull/4260): [*] BO - wording
 * [4262](https://github.com/PrestaShop/PrestaShop/pull/4262): [-] BO : Fix bad escapes on products and carrier wizard
 * [4263](https://github.com/PrestaShop/PrestaShop/pull/4263): [-] BO : Fix pagination
 * [4267](https://github.com/PrestaShop/PrestaShop/pull/4267): [-] BO : Fix wrong pictures shown in AdminProducts
 * [4268](https://github.com/PrestaShop/PrestaShop/pull/4268): [-] BO : Notice in AdminCustomers
 * [4270](https://github.com/PrestaShop/PrestaShop/pull/4270): [-] FO : Added missing hook for AdvancedEU on accessories
 * [4275](https://github.com/PrestaShop/PrestaShop/pull/4275): [*] TR: update Swedish installer
 * [4277](https://github.com/PrestaShop/PrestaShop/pull/4277): [-] FO : Fix undefined var when no combinations
 * [4279](https://github.com/PrestaShop/PrestaShop/pull/4279): [-] CORE : cleanCompareProducts interval
 * [4281](https://github.com/PrestaShop/PrestaShop/pull/4281): [*] FO: theme.sql new demo address
 * [4324](https://github.com/PrestaShop/PrestaShop/pull/4324): // HELPER: Add brackets to multiple select name field
 * [4325](https://github.com/PrestaShop/PrestaShop/pull/4325): // Category must be an object, not an array
 * [4330](https://github.com/PrestaShop/PrestaShop/pull/4330): [*] BO : product tab async loading
 * [4331](https://github.com/PrestaShop/PrestaShop/pull/4331): // CORE: Only clean compare_product table if entry older than 1 week
 

The [PrestaShop 1.6.1.2 RC4 changelog](https://www.prestashop.com/en/developers-versions/changelog/1.6.1.2-rc4) is also available.

This RC4 was made possible by the hard work of the PrestaShop Core Team, with additional commits by the following contributors: @macroy, @Mehdib92 and @PhpMadman.

If you too want to be part of the PrestaShop contributors, [please read this](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)!

And now, let's test this thing!
