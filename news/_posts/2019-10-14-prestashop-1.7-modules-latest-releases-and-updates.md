---
layout: post
title:  "PrestaShop 1.7 modules - Latest releases & updates"
subtitle: "Get some great news about PrestaShop 1.7 modules!"
date:   2019-10-14 11:00:00
authors: [ ColineGinestet ]
icon: icon-compass
tags: [1.7, architecture]
---

All product and core teams have been quite busy over the past 6 months, working hard on delivering PrestaShop 1.7.6, but not only! We have also worked on bringing new features and improving the 1.7 version through our PrestaShop modules. 

The PrestaShop software is usually seen as a single “brick” and users tend to forget that it is actually accompanied by more than 80 built-in modules, which bring many features to your store such as design, marketing and statistics tools. A document listing all of these modules is currently in preparation, we’ll keep you posted when it is ready!


## What is a built-in module? 

This is a module developed by the PrestaShop company and community contributors and available by default (either directly in the zip file or pushed through our API) on stores. The most important ones are already installed and available in Module Manager, while others can be found in the Module Catalog list and installed in just one click. Some of them do not need any single configuration, but most of them can be configured and edited according to your needs.

These modules are included by default as they are considered necessary features, but of course, if needed, they can be disabled or uninstalled like any other modules.

Bilal already told you about this continuous work last year ([read here](http://build.prestashop.com/news/native-modules-and-smart-menu)) and this article aims at keeping you updated with recent new modules, refactorizations, bug fixes, feature additions, and optimizations, but also to give you some news about what’s coming in the next few months!


## So what’s new with PrestaShop modules? 

As you may already know (I hope so!), the [new PrestaShop 1.7.6 version](http://build.prestashop.com/news/prestashop-1-7-6-0-available/) has brought some new and improved important modules: 


### Product Comments (current version : 4.0.0)

This new module, which was available for 1.6 has been completely reworked and offers new features for 1.7.6+ stores, including:

- Let customers give reviews based on criteria that were defined by the merchant  
![Customer review](/assets/images/2019/10/module-news-image4.png){style="margin: 5rem auto"}

- Give users access to all other customer reviews on product pages  
![List of reviews](/assets/images/2019/10/module-news-image5.png){style="margin: 5rem auto"}

- Let users upvote or downvote a review or report an abuse if a comment is not appropriate
- Let merchants moderate reviews they receive on their products  
![Moderation of reviews](/assets/images/2019/10/module-news-image2.png){style="margin: 5rem auto"}

- Rich snippets integration


### Faceted Search module (current version: 3.3.0)

A huge refactoring has been made for version 3 and a lot of unit tests have been added to prevent future regressions. Many improvements have been added:  

- Indexation and cache management have been improved for better performances
- We added price and weight ranges sliders that are also working on mobile ([#9992](https://github.com/PrestaShop/PrestaShop/issues/9992))
- Filters which do not match any products are now hidden ([#14655](https://github.com/PrestaShop/PrestaShop/issues/14655))

A lot of bugs have been solved, including:

- You can now limit filter results ([#9813](https://github.com/PrestaShop/PrestaShop/issues/9813))
- The number of matching products after selecting filters is now working ([#14734](https://github.com/PrestaShop/PrestaShop/issues/14734))
- Disabling the number of matching products is now working ([#9949](https://github.com/PrestaShop/PrestaShop/issues/9949))
- Long feature titles are truncated to keep them on one line ([#9978](https://github.com/PrestaShop/PrestaShop/issues/9978))
- Products are correctly sorted by position when you don’t show products from subcategories ([#15062](https://github.com/PrestaShop/PrestaShop/issues/15062))
- Products are correctly sorted by price even when you have discounts ([#15223](https://github.com/PrestaShop/PrestaShop/issues/15223) & [#10010](https://github.com/PrestaShop/PrestaShop/issues/10010))
- You can choose in which order the filters appear (#9880)
- “Filter by” blocks are not displayed if no filters are available ([#9732](https://github.com/PrestaShop/PrestaShop/issues/9732) & [#9736](https://github.com/PrestaShop/PrestaShop/issues/9736))

### Customer reassurance module (current version: 4.1.1)

A major update on the module has been released last week bringing new features and design both on front office and back office. With this new version, merchants will be able to: 

- Display their elements as desired on their homepage, either on the header or footer, but also on product and checkout pages  
![Reassurance block](/assets/images/2019/10/module-news-image6.png){style="margin: 5rem auto"}

- Create as many elements as desired, with the ability to add available or custom icons, title and description and choose colors  
![Customization of reassurance block](/assets/images/2019/10/module-news-image3.png){style="margin: 5rem auto"}

- Enable or disable any of them and easily reorder them through drag and drop feature  
![Customer review](/assets/images/2019/10/module-news-image1.png){style="margin: 5rem auto"}


### Other bug fixes on modules 

- Email subscription module (v2.5.0) - Fix on email registration issue ([#15425](https://github.com/PrestaShop/PrestaShop/issues/15425))
- Contact form (v4.1.1) - Add a check to verify if the customer is the order’s owner
- Shopping cart module (v2.0.2) - Fix related to add to cart from quickview issue ([#11631](https://github.com/PrestaShop/PrestaShop/issues/11631))
- Legal compliance (v3.0.2) - Fix on label translation issue ([#9766](https://github.com/PrestaShop/PrestaShop/issues/9766))
- Dashtrends (v2.0.2) - Fix related to incorrect calculation of sales and profit ([#9983](https://github.com/PrestaShop/PrestaShop/issues/9983))
- Main menu (v 2.1.1) - Fix on sub menu hiding menu ([#9938](https://github.com/PrestaShop/PrestaShop/issues/9938))


## And even more to come!

Other new and existing modules are currently being developed or improved to bring great features to merchants and developers. They will be released step by step during the next few months. Sure hope you will enjoy them! 

- Developing new features for **Theme Customization module**, helping new merchants get an easier onboarding on modules and how to customize the website front office category and product pages.
- Bringing **Wishlist module** for 1.7 stores to life! This module will introduce a wishlist feature for all 1.7.6+ stores, allowing merchants to provide a wishlist to their users on their website. Of course, merchants from 1.6 will also be able to keep all wishlists created on their website (with the native blockwishlist module) when upgrading to 1.7.
- Saying “bye” to the 1-click-upgrade module and “hello!” to the new **Upgrade Assistant** module! The product team has been well aware of issues and got a lot of feedback related to the autoupgrade module and to the complexity of upgrading a store from 1.X to 1.Y. This is why we have decided to completely rebuild the module, both in terms of features and code. We are currently developing its new major version, it should be available in beta version in the next few months. If you are interested in participating in user tests or testing the beta version, please contact us at [feedback@prestashop.com](mailto:feedback@prestashop.com) and subscribe to the [User Club](https://www.prestashop.com/en/club)!
- Updating 1.7 modules to allow them to get data and configuration from the same 1.6 modules even though they don’t have the same technical name. This update will be proceeded on 40+ 1.7 modules to limit configuration and data loss when performing a major upgrade on a store.  

