---
layout: post
title:  "PrestaShop Core Weekly - Week 15"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-04-16 16:12:00
authors:  [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

Welcome to Week 15 in PrestaShop Core development! This is the Core Weekly!

As a reminder, this Core Weekly report highlights changes in PrestaShop core codebase last week, from Monday 6th to Sunday 12th of April, 2015.

The Core Weekly report is ever evolving, so if you have ideas on how to improve it, let me know!

## Milestones

The PSR-2 survey is still running, give us your opinion! [https://www.prestashop.com/forums/topic/434831-psr2-development-norm-for-prestashop/](https://www.prestashop.com/forums/topic/434831-psr2-development-norm-for-prestashop/)

Cool things are boiling, but we'll keep that for another blogpost :)


## Code changes

Let's review last week's merged pull-requests!

As always, click on the PR's number to open its page on GitHub.

#### Code typos

 * [2849](https://github.com/PrestaShop/PrestaShop/pull/2849): Missing space, by jeromenadaud.
 * [2851](https://github.com/PrestaShop/PrestaShop/pull/2851) and [2852](https://github.com/PrestaShop/PrestaShop/pull/2852): Replaces &lt;/br&gt; tag with &lt;br&nbsp;/&gt;. Thank you zimmi1!
 
#### Text fixes

 * [2840](https://github.com/PrestaShop/PrestaShop/pull/2840): AdminCustomer interested products block title and icon. Thank you eric-rouvier!
 
#### Front office

 * [2550](https://github.com/PrestaShop/PrestaShop/pull/2550): Clean Selectors. Thank you prestarocket!
 * [2791](https://github.com/PrestaShop/PrestaShop/pull/2791): Fix bug #PSCSX-5145, cross-selling in shopping cart bxslider restart, by gRoussac.
 * [2797](https://github.com/PrestaShop/PrestaShop/pull/2797): Fix bug #PSCSX-4925, TCPDF ERROR: [Image] Unable to get image, by gRoussac.
 * [2824](https://github.com/PrestaShop/PrestaShop/pull/2824): Bad display of old_price, by gRoussac.
 * [2831](https://github.com/PrestaShop/PrestaShop/pull/2831): Fix breadcrumb home link with ssl in all pages, by gRoussac.
 * [2843](https://github.com/PrestaShop/PrestaShop/pull/2843): Correct IE8 syntax error. Thank you DanH42.
 * [2854](https://github.com/PrestaShop/PrestaShop/pull/2854): Revert "[2550](https://github.com/PrestaShop/PrestaShop/pull/2550): Clean Selectors", by jeromenadaud. Take notice, people: do your PRs on the "1.6" branch, not the "master" branch!
 * [2855](https://github.com/PrestaShop/PrestaShop/pull/2855): Clean Selectors. Thank you again, prestarocket! :)
 * [2860](https://github.com/PrestaShop/PrestaShop/pull/2860): undefined var hasDeliveryAddress, by gRoussac.
 
#### Back office

 * [2477](https://github.com/PrestaShop/PrestaShop/pull/2477): Show SQL Manager & SQL Export only if sql manager is enabled in profile. Thank you guestisp!
 * [2686](https://github.com/PrestaShop/PrestaShop/pull/2686): Use positions with HelperList. Thank you PrestaEdit!
 * [2799](https://github.com/PrestaShop/PrestaShop/pull/2799): Fix #PSCSX-5159, warnings on tabs, by gRoussac.
 * [2809](https://github.com/PrestaShop/PrestaShop/pull/2809): Optimize import speed (thumbnail optimizations), by jocel1.
 * [2812](https://github.com/PrestaShop/PrestaShop/pull/2812): Fix #PSCSX-2093 undefined $order, by sfroment42.
 * [2836](https://github.com/PrestaShop/PrestaShop/pull/2836): Change getBaseURI call in filemanager config, by sfroment42.
 * [2842](https://github.com/PrestaShop/PrestaShop/pull/2842): Correct search for catalog product, by sfroment42.
 * [2848](https://github.com/PrestaShop/PrestaShop/pull/2848): make name accept PERCENT_PRODUCT_OUT_OF_STOCK_EXPIRE. Thank you doekia!
 
#### Core

 * [2774](https://github.com/PrestaShop/PrestaShop/pull/2774): Helper List / Change delete to default. Thank you PrestaEdit!
 * [2801](https://github.com/PrestaShop/PrestaShop/pull/2801): Fix unreachable return statements. Thank you gskema!
 * [2805](https://github.com/PrestaShop/PrestaShop/pull/2805): Fix undefined PHP variables. Thank you gskema!
 * [2814](https://github.com/PrestaShop/PrestaShop/pull/2814): Fix #PSCSX-5217 check if isfeature active, by sfroment42.
 * [2841](https://github.com/PrestaShop/PrestaShop/pull/2841): Add Random charlist to passwdGen, by jeromenadaud.
 * [2846](https://github.com/PrestaShop/PrestaShop/pull/2846): Add logs when unsetting a cart in FO, by gRoussac.
 * [2850](https://github.com/PrestaShop/PrestaShop/pull/2850): Use bool keyword for casting into boolean. Thank you gskema!
 * [2858](https://github.com/PrestaShop/PrestaShop/pull/2858): Get changes back from master, by many contributors.
 
#### Unit tests

 * [2783](https://github.com/PrestaShop/PrestaShop/pull/2783): DatabaseDump should accept other host than localhost, by mdomenjoud.
 
#### phpDoc

 * [2833](https://github.com/PrestaShop/PrestaShop/pull/2833): DbQuery PHPDoc + refactor. Thank you gskema!
 * [2853](https://github.com/PrestaShop/PrestaShop/pull/2853): PHPDoc + unused variable, by jeromenadaud.
 * [2859](https://github.com/PrestaShop/PrestaShop/pull/2859): PHPDoc + unused var, by jeromenadaud.
 

See all the PRs merged into the codebase since April 6th [here](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+merged%3A%3E2015-04-06+is%3Aclosed).

Thank you to our contributors for their PRs: [DanH42](https://github.com/DanH42), [doekia](https://github.com/doekia), [eric-rouvier](https://github.com/eric-rouvier), [gskema](https://github.com/gskema), [guestisp](https://github.com/guestisp), [PrestaEdit](https://github.com/PrestaEdit), [prestarocket](https://github.com/prestarocket), and [zimmi1](https://github.com/zimmi1)... and those whose contributions were not merged yet! Also, a big thanks to all those who contribute with tickets on the Forge!

Remember: if you want to contribute to PrestaShop with code, read those:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Until the next Core Weekly report, let me know if I forgot something here, or if you have ideas about how to improve this report!

Happy contributin' everyone!
