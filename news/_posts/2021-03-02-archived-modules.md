---
layout: post
title:  "Focusing on essential modules"
subtitle: "Announcing end of official support for less popular modules"
date:   2021-03-02 14:00:00
authors:  [ PrestaShop ]
icon: icon-puzzle
tags: 
 - modules
 - news
---

Over the years, the PrestaShop project became host and maintainer for a very large number of open source modules. Last year, over 160 of them were present in our GitHub organization. As you probably know already, maintaining them requires a lot of work, and the maintainer team's resources are limited. Proof of this is that some of these modules have not been updated in years.

For this reason, the product team recently did a survey of almost 600 PrestaShop users to find out which modules were essential for their business and which ones they used the least.

As a result of this survey, the teams have decided to focus their efforts where it really matters. Rather than keeping hundreds of sparsely updated modules, starting this year, the PrestaShop Project will only commit to maintaining a smaller set of them – the ones that are really important for users.

This is why the following set of modules, reported in the survey amongst the least often used, have been abandoned and their repositories archived: 

- [Visitors online](https://github.com/PrestaShop/statslive) 
- [Advertising block](https://github.com/PrestaShop/ps_advertising)
- [RSS products feed](https://github.com/PrestaShop/ps_feeder)
- [Legal compliance](https://github.com/PrestaShop/ps_legalcompliance)
- [Product Notification](https://github.com/PrestaShop/ps_productinfo)
- [RSS feed block](https://github.com/PrestaShop/ps_rssfeed)
- [PrestaShop Cleaner](https://github.com/PrestaShop/pscleaner)
- [Tracking - Front office](https://github.com/PrestaShop/trackingfront)
- [Watermark](https://github.com/PrestaShop/watermark)
- [PrestaShop Security](https://github.com/PrestaShop/prestafraud)
- [Google Analytics API](https://github.com/PrestaShop/gapi)

The following modules have also been abandoned and archived because they were still not compatible with 1.7 stores: 

- [Date of delivery](https://github.com/PrestaShop/dateofdelivery)
- [Newsletter](https://github.com/PrestaShop/newsletter)
- [European VAT number](https://github.com/PrestaShop/vatnumber)
- [Shipping Estimate](https://github.com/PrestaShop/ps_carriercomparison)
- [Customer referral program](https://github.com/PrestaShop/referralprogram)
- [Healthcheck](https://github.com/PrestaShop/ps_healthcheck)
- [Customer loyalty and rewards](https://github.com/PrestaShop/loyalty)

Abandoning these projects and archiving their repositories means that they will no longer be available in back-offices, but they will still available on GitHub. These modules will no longer receive any updates, nor accept contributions. Developers, however, can and will still be able to use them, fork them, improve them and redistribute them as derivative projects, following the [AFL 3.0 license](https://opensource.org/licenses/AFL-3.0).

PrestaShop is an open source, community project. If the PrestaShop Project stops maintaining a repository, it does not mean this project is gone. What the project cannot do by itself, the community can do it, as long as people are willing to continue working on it. We hope to see contributors fork these modules and build newer, better versions of them.

Of course, you can also take a look at the [Addons Marketplace](https://addons.prestashop.com/), where you can find modules with similar features to the archived ones.

That said, the PrestaShop Project will continue to maintain and freely provide the modules identified as essential by users in the survey, including [ps_facetedsearch](https://github.com/PrestaShop/ps_facetedsearch), [ps_newproducts](https://github.com/PrestaShop/ps_newproducts), [ps_emailalerts](https://github.com/PrestaShop/ps_emailalerts), and many more.

If you think an important feature is missing from the project, please create a [feature request](https://github.com/PrestaShop/PrestaShop/issues/new?assignees=&labels=&template=2_feature_request.md).

The list of project modules will be regularly analyzed to make it up-to-date with the what users need the most.
