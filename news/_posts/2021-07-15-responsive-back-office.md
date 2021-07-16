--- 
layout: post
title: "Towards a more mobile-friendly back office"
subtitle: "Quick wins for a responsive back office"
date: 2021-07-15 10:00:00
authors: [ScottCosio]
icon: icon-mobile
tags:
 - 1.7.8
 - version
 - minor
 - product
 - ux
---

Until now, PrestaShop always relied on a desktop-first responsive design strategy. Indeed, there are few use cases on mobile. But you can't prevent users from checking their store's back office on their mobile!

## Why work on responsive design?

Until now, they were some issues that affected the user experience on mobile:

- Difficulties in accessing important store information
- Hidden content because of components overlaying others
- Text readability issues
- Bugs and lack of consistency on display (e.g. not the same padding)

All of these issues make it difficult for users to use PrestaShop on mobile devices. Also, they cause a bad reputation for the PrestaShop open source project.

## First steps: quick wins 💪🏻

[Valentin](https://www.linkedin.com/in/%F0%9F%9A%80-valentin-szczupak-0280aba1/) (front-end developer), and I, [Scott](https://www.linkedin.com/in/scottcosio/) (product designer), had a limited bandwidth to work on this project due to others features to work on. In order to avoid breaking changes, we only scoped small fixes on the mobile version of the backoffice a.k.a. quick wins.

> A quick win is a small change, that is quick and easy to implement but that has a big and visible impact for the user.

### Process

The Core team first explored PrestaShop [issues about responsive design](https://github.com/PrestaShop/PrestaShop/labels/Responsive) on GitHub and centralized them by creating a [single Epic](https://github.com/PrestaShop/PrestaShop/issues/22358).

In parallel, we analyzed all back office pages on mobile version and discussed responsive strategies to mitigate problems. For each problem, a specific issue was created and added to the Epic. 

The Epic was organized into 3 different categories:

- Remove components - components that aren't important or used in mobile version
- Improvements - optimizing navigation, optimizing space, etc
- Bugs - display adjustments, broken pages, etc

### What has changed?

**Removing components**

Some components are available on mobile version but aren't necessarily useful during the mobile experience and become easily annoying on a small screen device.

- The "Recommended Modules and Services" button has been removed thanks of the work being done on the PrestaShop open source project. It's not available anymore.
- The "Import" and "Export" buttons have been removed for tables because importing or exporting .csv files is useless on mobile phones because of the file system and the lack of software to process them. 
- Breadcrumbs have been removed because of the limited depth of the menus.
- In the header, "View my shop" text has been removed to shorten the button and save space in the header/top bar. Only the icon was kept.
- The "Merchant Expertise" button has been removed because mobile users are firstly looking for order updates from their shop. We gained some space on the top bar for more important features.

<div class="row">
    <div class="col-md-6">
      <p>Before: "View my shop” text</p>
      <img src="/prestashop.github.io/assets/images/2021/07/01-header-before.png" alt="header-before">
    </div>
    <div class="col-md-6">
      <p>After: "View my shop" text and "Merchant Expertise" button removed</p>
      <img src="/prestashop.github.io/assets/images/2021/07/01-header-after.png" alt="header-after">
    </div>
</div>

**Display optimization**

- Some components were too close to the edges of the mobile screen, and some weren't. In order to keep consistency, a minimum of 16 px padding left and right has been added on the mobile version.
- Font size used for the navigation drawer was too big, it was reduced. Less scroll, means more content displayed on screen and on the left menu.
- The header and the KPIs container on the mobile version took up half of the screen space, hiding essential containers. For that reason, KPIs containers were turn into cards to optimize the space. Users can now access other KPIs cards by simply horizontally scrolling on their screen.

**Feature**

- According to Google Material Design's definition: "A floating action button (FAB) represents the primary action of a screen". The Core team created this component exclusively on mobile version to make primary buttons easier to reach by placing it on the bottom right corner of the screen, and also to save space.

<div class="row">
    <div class="col-md-6">
      <p>Before: less reachability for buttons and header was quite big</p>
      <img src="/prestashop.github.io/assets/images/2021/07/02-reachability-before.png" alt="reachability-before">
    </div>
    <div class="col-md-6">
      <p>After: primary and secondary actions in the FAB</p>
      <img src="/prestashop.github.io/assets/images/2021/07/02-reachability-after.png" alt="reachability-after">
    </div>
</div> 
                                                                                                         
**Navigation optimization**

The accessibility and reachability issues of the navigation drawer and the header's content have been solved on the mobile version.

- When users clicked on the hamburger menu to access the navigation drawer, the header was sticky and prevented users from viewing the first items. Users couldn't access the Dashboard page and could barely tap on the Orders tab. The header stickiness was removed to make the menu accessible again.

<div class="row">
    <div class="col-md-6">
      <p>Before: the header is overylaying the navigation drawer</p>
      <img src="/prestashop.github.io/assets/images/2021/07/03-navigation-drawer-before.png" alt="navigation-drawer-before">
    </div>
    <div class="col-md-6">
      <p>After: the header isn't sticky anymore</p>
      <img src="/prestashop.github.io/assets/images/2021/07/03-navigation-drawer-before.png" alt="navigation-drawer-after">
    </div>
</div>

- Notifications and profile weren't accessible and it was difficult to quit the pop-in once clicked because it was almost in full page and the space to exit the pop-up was too small. The Design team redesigned the pop-in and placed it just under the selected icon to easily understand which icon the pop-in is related to. Also, an highlight was added to the selected icon to ease up identification of the selected tab. You can notice that the icon used for the profile editing button has been replaced by a more representative icon. An icon was added to the sign out link for a faster identification and the use of the red color makes it stand out from the rest.


<div class="row">
    <div class="col-md-4">
      <p>Before: difficult to quit the pop-in</p>
      <img src="/prestashop.github.io/assets/images/2021/07/04-popin-before.png" alt="popin-before">
    </div>
    <div class="col-md-4">
      <p>After: easy to quit the notifications pop-in</p>
      <img src="/prestashop.github.io/assets/images/2021/07/04-popin-notifications-after.png" alt="popin-notifications-after">
    </div>
    <div class="col-md-4">
      <p>After: easy to quit the profile pop-in</p>
      <img src="/prestashop.github.io/assets/images/2021/07/04-popin-profile-after.png" alt="popin-profile-after">
    </div>
</div>

**Broken pages examples**

A lot of pages were not displayed properly: text overlapping, making the content unreadable. Because of the lack of structure, it was also difficult to understand which group was associated each button.
In UX, this law is called the ["Law of Common Region"](https://lawsofux.com/law-of-common-region/) which stipulates that "Elements tend to be perceived into groups if they are sharing an area with a clearly defined boundary". 

- The stock management page was considered as a broken page and it was redesigned by applying the previous rules (removing import/export buttons, removing the help button, maintaining a minimum of 16 px padding left and right).

<div class="row">
    <div class="col-md-6">
      <p>Before: stock management page completely broken</p>
      <img src="/prestashop.github.io/assets/images/2021/07/05-broken-page-before.png" alt="broken-page-before">
    </div>
    <div class="col-md-6">
      <p>After: display fixes</p>
      <img src="/prestashop.github.io/assets/images/2021/07/05-broken-page-after.png" alt="broken-page-after">
    </div>
</div>

### What's next? 🚀

After the quick wins, it's time for bigger changes! The Core team will work on more complex issues involving breaking changes such as tables.
Usability tests will be performed in order to make sure that the back office will be completely usable.
