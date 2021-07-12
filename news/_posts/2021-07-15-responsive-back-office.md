--- 
layout: post
title:  "Towards a more mobile-friendly back office"
subtitle: "Quick wins for a responsive back office"
date:   2021-07-15 10:00:00
authors: [ScottCosio]
icon: icon-mobile
tags:
 - 1.7.8
 - version
 - minor
 - product
 - ux
---

Until now, PrestaShop has always relied on a desktop-first responsive design strategy. Indeed, there are few use cases on mobile. But you can't prevent users from checking their store's back office on their mobile!

## Why work on responsive design?

Until now, they were some issues that affected the user experience on mobile:

- Difficulties in accessing important store information
- Hidden contents because of components overlaying others
- Text readability issues
- Bugs and lack of consistency on display

All of these issues caused a bad reputation for the PrestaShop open source project.

## First steps: quick wins 💪🏻

Valentin (front-end developer), and I, Scott (product designer), didn't have much time to work on this project. So, to avoid breaking changes, we updated the back office mobile version thanks to "quick wins".

> A quick win is a small change, that is quick and easy to implement but that has a big and visible impact for the user.

### Process

The Core team first explored PrestaShop issues about responsive design on GitHub and centralized them by creating a [single Epic.](https://github.com/PrestaShop/PrestaShop/issues/22358)

In parallel, we explored all back office pages on mobile version and discussed a lot about software responsiveness. For each problem, a specific issue was created and added to the Epic. 

The Epic was organized in 3 different categories:

- Remove components - components that aren't important or used in mobile version
- Improvements - optimizing navigation, optimizing space, etc
- Bugs - display adjustments, broken pages, etc

### What has changed?

**Removing components**

Some components are available on mobile version but aren't necessarily useful and become easily annoying for the user experience.

- The "Recommended Modules and Services" button has been removed because of the PrestaShop open source projects' split. It's not available anymore.
- The "Import" and "Export" buttons have been removed for tables because importing or exporting .csv files is better on larger screens and wasn't usually handled on mobile versions.
- Breadcrumbs have been removed because it's not really necessary since there is barely more than 2 depth levels.
- In the header, "View my shop" text has been removed to shorten the button and save space in the header/top bar. Only the icon was kept.
- The "Merchant Expertise" button has been removed because mobile users are firstly looking for order updates from their shop. Keeping this button affected the header/top bar and made it condensed so the Core team chose to keep the essentials.

**Before: with "View my shop" text**

![Before: with "View my shop" text](/assets/images/2021/07/01-header-before.png)

**After: "View my shop" text and "Merchant Expertise" button removed**

![After: "View my shop" text and "Merchant Expertise" button removed](/assets/images/2021/07/01-header-after.png)

**Display optimization**

- Some components were glued to the edges of the mobile screen, and some weren't. In order to keep consistency, there is a minimum of 16 px padding left and right on the mobile version.
- Font size used for the navigation drawer was too big (20 px), it was changed for a 16 px font size. Now that users have less scroll to do, they can access the other back office pages more easily.
- The header and KPIs containers on the mobile version took up half of the screen space, hiding essential cards. For that reason, the Design team redesigned the KPIs containers and make sure to optimize the space. Users can now access other KPIs pans by simply horizontally scrolling on their screen.

**Feature**

- According to Google Material Design's definition: "A floating action button (FAB) represents the primary action of a screen". The Core team created this component exclusively on mobile version to make primary buttons easier to reach by placing it on the bottom right corner of the screen, and also to save space.

**Before: less reachability for buttons and header was quite big**

![Before: less reachability for buttons and header was quite big](/assets/images/2021/07/02-reachability-before.png)

**After: primary and secondary actions in the FAB**

![After: primary and secondary actions in the FAB](/assets/images/2021/07/02-reachability-after.png)

**Navigation optimization**

The accessibility and reachability issues have been solved on the mobile version.

- When users clicked on the hamburger menu to access the navigation drawer, the header was sticky and was overlaying it. Users couldn't access the Dashboard page and could barely tap on the Orders tab. The problem is now fixed, as the header isn't sticky anymore.

**Before: the header is overlaying the navigation drawer**

![Before: the header is overlaying the navigation drawer](/assets/images/2021/07/03-navigation-drawer-before.png)

**After: the header isn't sticky anymore**

![After: the header isn't sticky anymore](/assets/images/2021/07/03-navigation-drawer-before.png)

- Notifications and profile weren't accessible and it was difficult to quit the pop-in once clicked. The Design team redesigned the pop-in and placed it just under the selected icon to easily understand which icon the pop-in is related to. Also, an indicator was added under the selected icon so it's more identifiable. You can notice a change on the icon used for the "Your profile" button in the profile pop-in, it represents more the feature of editing. A sign out icon was added next to the "Sign out" text and put both in red so the text button is more visible.

**Before: difficult to quit the pop-in**

![Before: difficult to quit the pop-in](/assets/images/2021/07/04-popin-before.png)

**After: easy to quit the notifications pop-in**

![After: easy to quit the notifications pop-in](/assets/images/2021/07/04-popin-notifications-after.png)

**After: easy to quit the profile pop-in**

![After: easy to quit the profile pop-in](/assets/images/2021/07/04-popin-profile-after.png)

**Broken pages examples**

A lot of pages were not displayed properly: texts overlapped, making the content unreadable. Because of the lack of structure, it was also difficult to understand to which group was associated each button.
In UX, this law is called the ["Law of Common Region"](https://lawsofux.com/law-of-common-region/) which stipulates that "Elements tend to be perceived into groups if they are sharing an area with a clearly defined boundary". 

- The stock management page was considered as a broken page and it was redesigned by applying the previous rules (removing import/export buttons, removing the help button, maintaining a minimum of 16 px padding left and right).

**Before: stock management page completely broken**

![Before: stock management page completely broken](/assets/images/2021/07/05-broken-page-before.png)

**After: display fixes**

![After: display fixes](/assets/images/2021/07/05-broken-page-after.png)

### What's next? 🚀

After the quick wins, it's time for bigger changes! The Core team will work on more complex issues, such as tables, that involve breaking changes.
Usability tests will be performed in order to make sure that the back office will be completely usable.
