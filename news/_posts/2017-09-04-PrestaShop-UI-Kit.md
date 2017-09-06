---
layout: post
title:  "Contribute to the UI kit of the 1.7 back office"
subtitle: "Yes, yes, we have an UI kit :)"
date:   2017-09-06 09:10:11
authors: [ alexeven ]
icon: icon-align-right
tags:
 - design
 - back office
 - 1.7
 - contribute
---

PrestaShop is 10 years old this year. 10 years and a software that have experienced 7 major evolutions.

Over the years, the core of the software has added many features, serving both small and large merchants.

With 10 years of development behind us, a general observation is that PrestaShop offers a flexible software, rich of  hundreds features, but this richness has, over the years and evolutions, brought graphical inconsistencies. Also, it is difficult for contributors to design modules which are perfectly aligned with our branding, because our product design guidelines have evolved while not being documented enough.

With the release of 1.7, we decided to focus on the user experience and thus improve what is already in place, instead of bringing in dozens of new features. We have therefore embarked on a vast project of redesigning very important parts of the software, such as the Product Creation page, the default theme, and the Stock Management feature.

Among these projects, there is one that is a real challenge for us: the UI Kit (and the accompanying design guidelines). The community has regularly asked for both. It's an ambitious project for an open source software used by tens of thousands of people around the world. We would like to make it collaborative. So in addition to pull requests, translations, and debugging, we would like to open this new project to the community and invite you to collaborate on the UI Kit of the 1.7 Back Office!

## Why a UI Kit?

### Consistency

A UI kit is a library of HTML/CSS elements, allowing developers and designers to build their product interfaces. It provides consistency, which is one of the basics of a good user experience (UX).

Therefore, having a real UI kit for the back office will help us improve the quality of the user’s experience and stay consistent with PrestaShop’s branding.

### Scalability

A UI kit facilitates the scalability of the product interfaces. If you need to update the style of an element, you just have to update the element in the UI kit once, and it will have an impact on the whole product interface.

### Community

A UI kit is also a powerful tool to build a product with the community, because it provides elements that already apply to the product branding. Hence, it makes it possible work with the community maintaining the identity of the product in the same time.

<img width="500" src="/assets/images/2017/09/PrestaShop_UIKit_buttons.png">

## Why is it a huge challenge for PrestaShop?

### Technical challenges

#### Where we are now

Nowadays, we have two coexisting themes in PrestaShop 1.7’s back office. One is a legacy theme from 1.6, called “default”; the new one, introduced in 1.7, is called “new-theme”. We needed to have two back office themes, because the “default” theme is using Bootstrap 3 with hardcoded modifications, whereas the new one uses Bootstrap 4.<br/>
Already at that time, we wanted to offer a better user experience and improve the user interface: we therefore began to create a first [PrestaShop UI Kit](http://build.prestashop.com/prestashop-ui-kit/). Sadly, we couldn’t just plug the UI Kit on top of the “default” theme because of that Bootstrap issue. Creating a separate theme for the new pages in 1.7 was the only solution.

It would have taken a long time to develop a whole new theme based on a new UI Kit. So, we chose to do it step-by-step, with each back office page being upgraded to the new system. As we migrate the pages on Symfony and Twig, we will integrate them using a new theme which includes the UI Kit. This is the case for five back office pages for now:

* Catalog
* Product Creation
* Stock Management
* Modules
* Translations

#### What do we need to get started?

We need to overhaul the current UI Kit: currently it’s not perfect. We need to migrate it to use Webpack instead of Gulp, and it does not fully reflect the mockups we designed. Once that will be done, we will be able to begin to add the missing components and to make it evolve.

<img width="500" src="/assets/images/2017/09/PrestaShop_UIKit_alerts.png">

### Design challenges

In addition to the technical constraints, there are design challenges to take into account when building our back office UI Kit:

* Respect [our design principles](http://build.prestashop.com/tools/prestashop-design-principles/)
* Preserve PrestaShop's identity
* Be aligned with the redesign of our [.com](https://www.prestashop.com) and [Addons marketplace](https://addons.prestashop.com/)
* Share our design principles, guidelines and UI Kit with the community so you can use it to create modules that blend well with the PrestaShop interfaces
* Succeed in preserving interface coherence over the long term
* Deliver a UI kit that is scalable and maintainable

## Action plan

PrestaShop is quite massive and having a UI kit that answers to all the different cases is a long-term task. This is why the UI Kit project will be carried out in several stages.

### Right now

You can already:

* Access [our design principles](http://build.prestashop.com/tools/prestashop-design-principles/)
* Comment on the [current UI Kit on InVision](https://invis.io/BY8V90JEQ)
* Contact us at <a href="mailto:uikit@prestashop.com?subject=Contributing%to%PrestaShop%UI%Kit">uikit@prestashop.com</a> if you would like to contribute or submit ideas related to this project

<img width="500" src="/assets/images/2017/09/PrestaShop_UIKit_alerts.png">

### Coming soon

* We’ll release a first version of the UI Kit together with PrestaShop 1.7.3. We will iterate on this version as new components are added and updates are made.
* You can contribute by integrating parts of the UI kit and work directly with our designers. We’ll let you know as soon as possible how we can work together!

Let's improve the UI Kit together!
