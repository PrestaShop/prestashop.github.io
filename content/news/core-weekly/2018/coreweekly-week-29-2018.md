---
layout: post
aliases: ["/news/coreweekly-week-29-2018"]
title:  "PrestaShop Core Weekly - Week 29 of 2018"
subtitle: "An inside look at the PrestaShop codebase"
date:   2018-07-30 16:00:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 16th to Sunday 22nd of July 2018.

![Core Weekly banner](/assets/images/2017/04/core_weekly_banner.jpg)


## General messages

Dear Community, after some time of vacation under the sun of Ile de Ré 🏝 🌅 😎, I am back!

While traditionally the summer is a quite calm period, developers are still very active on the PrestaShop project. While you are maybe packing your luggage, [PrestaShop 1.7.4.2](http://build.prestashop.com/news/prestashop-1-7-4-2-maintenance-release/) has been released last Friday. And if you want to upgrade, you can try the Beta 5 of the [Autoupgrade module](https://github.com/PrestaShop/autoupgrade/releases). Your feedback is of course very appreciated as usual.

Some of you may have seen a new quick tool in the comments, "phppsinfo.php": it is still in development, with the target of helping you fine tune your server, or to check all the important prerequisites before installing PrestaShop. Stay tuned, we will publish it soon on the main PrestaShop GitHub repository. And of course, it should be open for improvements too.


## Code changes in the 'develop' branch (for v1.7.5.0)

### Core

* [#8904](https://github.com/PrestaShop/PrestaShop/pull/8904): Add new presenter implementation optimized for performances (lazy loading), by [@jocel1](https://github.com/jocel1)
* [#9145](https://github.com/PrestaShop/PrestaShop/pull/9145): Bug correction when changing shipped state. Thank you [@djbuch](https://github.com/djbuch)
* [#9230](https://github.com/PrestaShop/PrestaShop/pull/9230): Migration of Sell > Orders > Invoices page. Thank you [@rokaszygmantas](https://github.com/rokaszygmantas)
* [#9231](https://github.com/PrestaShop/PrestaShop/pull/9231): Fixed missing call of ObjectModel hooks in CMSCategory::delete(). Thank you [@Matt75](https://github.com/Matt75)
* [#9344](https://github.com/PrestaShop/PrestaShop/pull/9344): [CO] add function to display information message. Thank you [@SebBareyre](https://github.com/SebBareyre)


### Back Office

* [#9253](https://github.com/PrestaShop/PrestaShop/pull/9253): Remove modules catalog controller, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#9333](https://github.com/PrestaShop/PrestaShop/pull/9333): Small fixes for Sell -> Orders -> Invoices page. Thank you [@rokaszygmantas](https://github.com/rokaszygmantas)


## Code changes in the '1.7.4.x' branch (for v1.7.4.2)

### Core

* [#9339](https://github.com/PrestaShop/PrestaShop/pull/9339): Fix bug extra space: htaccess directive order. Thank you [@prestarocket](https://github.com/prestarocket)
* [#9345](https://github.com/PrestaShop/PrestaShop/pull/9345): Can't install prestashop in dev mode with open_basedir, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#9348](https://github.com/PrestaShop/PrestaShop/pull/9348): Fixed a misnamed variable. Thank you [@jbroutier](https://github.com/jbroutier)


### Back Office

* [#9279](https://github.com/PrestaShop/PrestaShop/pull/9279): Fix detection of APCu on Performance page. Thank you [@Pedrock](https://github.com/Pedrock)
* [#9322](https://github.com/PrestaShop/PrestaShop/pull/9322): Backward compatibility of  $this->isCached() in modules, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#9326](https://github.com/PrestaShop/PrestaShop/pull/9326): Module translations aren't working when using Smarty Extend into TPL, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#9327](https://github.com/PrestaShop/PrestaShop/pull/9327): Fixed Product form when stock management is disabled, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#9330](https://github.com/PrestaShop/PrestaShop/pull/9330): It is impossible to create a SQL query "SELECT"  - SQL Manager page, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#9354](https://github.com/PrestaShop/PrestaShop/pull/9354): Set correct Employee Css after update. Thank you [@123monsite-regis](https://github.com/123monsite-regis)
* [#9358](https://github.com/PrestaShop/PrestaShop/pull/9358): AdminSearchController.php : Parameter must be an array or an object that implements Countable, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#9359](https://github.com/PrestaShop/PrestaShop/pull/9359): Allow configuration to save html data, by [@PierreRambaud](https://github.com/PierreRambaud)


### Front Office

* [#9335](https://github.com/PrestaShop/PrestaShop/pull/9335): Url does not update when changing product attributes , by [@PierreRambaud](https://github.com/PierreRambaud)


### Install

* [#9355](https://github.com/PrestaShop/PrestaShop/pull/9355): Allow to install PrestaShop without allow_url_fopen enabled, by [@rGaillard](https://github.com/rGaillard)

## Code changes in modules

### Auto Upgrade

* [#98](https://github.com/PrestaShop/autoupgrade/pull/98): Check subfolder prestashop/ exists in 1.6 releases, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#99](https://github.com/PrestaShop/autoupgrade/pull/99): Make log writing clearer, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#101](https://github.com/PrestaShop/autoupgrade/pull/101): Add placeholder for PrestaShop version, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#103](https://github.com/PrestaShop/autoupgrade/pull/103): Do not clean empty conf values, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Theme customization

* [#3](https://github.com/PrestaShop/ps_themecusto/pull/3): Avoid use of module->id when missing from filesystem, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#4](https://github.com/PrestaShop/ps_themecusto/pull/4): Now using proper module links between mbo/symfo. Thank you [@Shiryu75](https://github.com/Shiryu75)


### MBO

* [#24](https://github.com/PrestaShop/ps_mbo/pull/24): Fix recommended tab on legacy pages. Thank you [@MrBaiame](https://github.com/MrBaiame)
* [#26](https://github.com/PrestaShop/ps_mbo/pull/26): Fix header display. Thank you [@MrBaiame](https://github.com/MrBaiame)


### Starter Theme

* [#232](https://github.com/PrestaShop/StarterTheme/pull/232): Prepare starter theme for https://github.com/PrestaShop/PrestaShop/pull/8904, by [@jocel1](https://github.com/jocel1) 


### Custom text

* [#13](https://github.com/PrestaShop/ps_customtext/pull/13): Uninstall 1.6 equivalent module before installing ps_customtext, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @123monsite-regis, @djbuch, @jbroutier, @Matt75, @MrBaiame, @Pedrock, @prestarocket, @rokaszygmantas, @SebBareyre, @Shiryu75!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
