---
layout: post
title:  "PrestaShop 1.7.4.0 beta 1 is open for feedback!"
subtitle: "You can download it and test it"
date:   2018-06-13 16:40:00
authors: [ PrestaShop ]
icon: icon-leaf
tags:
 - version
 - beta
 - patch
 - releases
 - 1.7.4
---

PrestaShop 1.7.4 is available for download. Please read important informations about it.

**Done:**

 - All pull requests have been merged

**New features:**
 
 - Improved back office design
    - Works better on mobile devices (all pages are accessible on mobile now!)
    - New menu, can be scrolled
    - Improved header (looks the same on legacy and symfon pages)
    - Based on Bootstrap 4 final
 - Theme customization
 - New pages migrated to symfony
    - Advanced Parameters > Administration
    - Advanced Parameters > Import
    - Shop Parameters > General
    - Shop Parameters > General > Maintenance
    - Shop Parameters > Product Settings
    - Shop Parameters > Customer Settings
 - Added support for PHP 7.2
 - SEO improvements
    - Add hreflang links for multilang pages [#8652](https://github.com/PrestaShop/PrestaShop/pull/8652)
    - Improved header tags in classic theme
 - New functional tests (end to end)
 - New switch component in symfony pages [#8705](https://github.com/PrestaShop/PrestaShop/pull/8705)
 - Refactored cart calculation, including automated tests [#8411](https://github.com/PrestaShop/PrestaShop/pull/8411)
    - Improvements for developers
    - Improved hook profiler (shows more data about hooks) [#8557](https://github.com/PrestaShop/PrestaShop/pull/8557) and [#8910](https://github.com/PrestaShop/PrestaShop/pull/8910)
    - Improved template structure for the BO Product page (easier to override) [#8489](https://github.com/PrestaShop/PrestaShop/pull/8489)
    - ObjectModel structure can now be modified by modules [#8853](https://github.com/PrestaShop/PrestaShop/pull/8853)
    - Modules can now add tabs in the menu of an existing page [#8814](https://github.com/PrestaShop/PrestaShop/pull/8814)
    - Services exposed by modules can now be autoloaded using composer [#8909](https://github.com/PrestaShop/PrestaShop/pull/8909)
    - New authorization system for symfony pages [#9028](https://github.com/PrestaShop/PrestaShop/pull/9028)
 - New hooks
    - displayDahboardToolbarTopMenu [#8947](https://github.com/PrestaShop/PrestaShop/pull/8947)
    - displayAdminEndContent [#8947](https://github.com/PrestaShop/PrestaShop/pull/8947)
 - Greatly improved performance in BO and FO when a lot of categories are used [#8896](https://github.com/PrestaShop/PrestaShop/pull/8896)
 - New font for Farsi language
 - Fixed broken install in Greek [#9052](https://github.com/PrestaShop/PrestaShop/pull/9052)

**Todo:**
 - Check possible regression with RTL in BO
 - Import MBO and welcome modules
 - Create branch 1.7.4 for the starter theme

**Known issues:**
 - Some wordings aren’t translated
 - [Upgrade 1733 -> 1740 is not working with current version of the Auto Upgrade module](http://forge.prestashop.com/browse/BOOM-5710), however this is fixed in the upcoming version of this module (please read the last section of this article)
 - [Wrong link with “Recommended module” on symfony pages](http://forge.prestashop.com/browse/BOOM-5704)
 - [Theme custo install module is not working as expected](http://forge.prestashop.com/browse/BOOM-5712)
 - [The "Recommended modules" link in the header is also added by MBO module](http://forge.prestashop.com/browse/BOOM-5703)
 - [The puffin in the welcome module doesn't appear](http://forge.prestashop.com/browse/BOOM-5645)
 - [When B2B mode is enable, the “Outstanding” menu is not displayed](http://forge.prestashop.com/browse/BOOM-5700)

**Updated dependencies:**
 - Symfony 2.8 -> 3.4
 - PHP 5.4 -> 5.6
 - (BO) Bootstrap 4 beta 2 -> Bootstrap 4 final
 - [PrestaShop UI Kit](https://github.com/PrestaShop/prestashop-ui-kit) 1.0

**Details:**
 - [List of merged PRs](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Amerged+milestone%3A1.7.4.0+merged%3A%3C2018-06-08)
 - [List of Issues](http://forge.prestashop.com/issues/?filter=12811)

