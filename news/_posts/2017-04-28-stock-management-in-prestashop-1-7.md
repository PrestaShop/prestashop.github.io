---
layout: post
title:  "Stock Management in PrestaShop 1.7"
subtitle: "How we’re rebuilding a feature from the ground up"
date:   2017-04-28 09:10:11
authors: [ guillaumebruere ]
icon: icon-archive
tags:
 - 1.7
 - 1.7.2.x
 - feature
---

In late 2016, the PrestaShop product team took a challenging decision: rebuild the stock management system of PrestaShop 1.7. At the origins of this project was a thorough investigation and a truth-facing moment. 

To present the project’s outline, I’ll use a framework called “[Auftragsklärung](http://produktfuehrung.de/framework-no-9-auftragsklarung/)” (German for “Clarification Briefing”) created by Xing, itself inspired by “[The Art of Action](https://www.amazon.com/Art-Action-Leaders-between-Actions/dp/1857885597)” by Stephen Bungay. This is an exercise we’ve put into practice in the product team: it helped us align the understanding and goals of various stakeholders in top management, developers, designers, and other business units. 


## 1- How it started

The trigger of this initiative was the release of version 1.7.0, from which Advanced Stock Management feature was removed due to its incompatibility with the new back office’s product page and the aforementioned bugs and UX defaults. 

We took it upon ourselves to make this difficult choice because we are convinced it’s better to be transparent and avoid transferring technical debt that would undermine our efforts in the future. 

This decision nonetheless opened an opportunity to build a new stock management system which would be more usable, reliable and sustainable.


## 2- Context

Naturally, our first task was to understand the situation. As a product manager, I heard problems about PrestaShop’s Advanced Stock Management feature (ASM for short, in version 1.6) during many interviews with merchants. I had more than a hunch that something was going wrong with it. So I started a more formal user research, digging deeper into this topic and interviewing a dozen of merchants and partner agencies about it.<br/>
This qualitative approach allowed me to draw a few assumptions that I then verified qualitatively with [a survey](https://docs.google.com/a/prestashop.com/forms/d/1n8k1TREwRh1wfrtW_gGUaL-3AFDfm3m_TaCVIgTRpgY/prefill) sent to the [PrestaShop User Club](http://www.prestashop.com/club/).

The conclusions were that:

* Our merchants’ most essential needs in terms of stock management are stock overview, stock edition, and movements tracking. Not a big surprise, but the survey also showed that these features are crippled by bugs and a clunky UX in version 1.6. 75% of the respondents preferred to rely on an external solution or even an Excel spreadsheet to do these tasks rather than using ASM.
* Only a very small fraction of PrestaShop merchants use advanced features (supply order management, multi-warehouse, stock valuation, etc.) but here as well ASM doesn’t deliver on its promises because of bugs or missing features such as a warehouse-channel router.
* Though strongly requested by web agencies as a “selling-feature”, multi-warehouse management only concerns 20% of the 65 survey respondents.

Sometimes there are hard truths to face. So how do we start to change it?


## 3- Intent

[What we really really want](https://youtu.be/gJLIiF15wjQ?t=48s) is to provide merchants with a new inventory management interface that allows them to get a clear and consistent overview of their stock, to quickly edit quantities and to track stock movements.<br/>
The strategy here is to focus on E-commerce rather than trying to make ERP (Enterprise Resource Planning) or WMS (Warehouse Management system) features that would take years to develop.

This new interface is planned for version 1.7.2, which [we expect to release in June 2017](http://build.prestashop.com/news/announcing-our-2017-release-schedule/). You can see the work being done [on our GitHub repository](https://github.com/PrestaShop/PrestaShop/pull/7631). And we’ll share the working prototypes with you in the next articles.

What about 1.6? We don’t abandon it and will continue to fix issues related to the essential needs until October 2018, as promised.


## 4- Boundaries

Having a clear goal is good but not enough to define the solution, it is also important we define our constraints. Stating that we want to focus on E-commerce (rather than ERP or WMS) means that the following features are out-of-scope:

* multi-warehouse
* stock coverage (days of stock left, based on sales history)
* supply order management
* accountancy: stock valuation with FIFO (First In First Out), LIFO (Last In First Out) or AVCO (Average Cost)

Thanks to these limits, we can focus our efforts on stock management and get it right. 


## 5- Inputs

We assembled a team of one product manager + one designer + three developers during the different stages of the project from problem discovery to delivery. Here’s the process explained:

![Product process](/assets/images/2017/04/stockmanagement-productprocess.png)


## 6- Outputs

During solution research, we tested 4 prototype iterations, each time with 5 different merchants or web agencies. These prototypes helped us a lot to create features that fit users’ needs. Thanks to [collaborative testing](http://build.prestashop.com/news/user-tests-are-not-enough/), we were able to sketch a prototype, test it, and see what’s wrong with it in just a single Scrum sprint (two weeks), in order to decide what we should work on in the next sprint.

The first available version of this new stock management interface will be available in version 1.7.2.0, but before that there will of course be a beta-testing phase.


## 7. Outcome

The desired project’s outcome is an indicator that will allow us to measure if this initiative is a success or not. 

Since we cannot directly know how people use their back-office features, we chose to ask users to give us their estimated Net Promoter Score (NPS) for the Advanced Stock Management during our survey. This score shows how much users value a feature of the software, from 1, being “I would never recommend this feature”, to 10, being “I’ll definitely recommend this feature”. 

The average NPS of PrestaShop 1.6 Advanced Stock Management feature is 3.6 /10… which indicates room for improvement ;) 

Our goal with 1.7.2.0 is to reach a NPS of 8/10 with the new stock management system.


## What’s next?

At this point you might ask yourself: 

<blockquote>“OK, that seems nice, but what about the really advanced features, like multi-warehouse or supply order management? What’s planned for the next minor versions?”</blockquote>

<blockquote>“What will it look like in 1.7.2.0?”</blockquote>

There’s a plan for that!

But that will be a topic for the upcoming articles, in which I’ll describe how we improved upon several prototype versions, what we learned from it and what our roadmap for stock management looks like.


## Closing notes

This iterative process was made possible thanks to the contribution of many merchants and web agencies who gave their time to participate in interviews, surveys, and to test prototypes, which resulted in useful feedback. We’re super grateful to them! That’s the open source spirit!

Here’s where our 20 volunteers for prototype testing came from:

![Contributors map](/assets/images/2017/04/stockmanagement-contributorsmap.png)

By the way:

* Do you think 65 respondents to a survey is not enough? We do too! 
* Would you want to be part of the test sessions for the next versions? Even the upcoming beta-test stage of stock management?

Then you should subscribe to the [PrestaShop User Club](http://www.prestashop.com/club/) and invite other PrestaShop users to do so!
