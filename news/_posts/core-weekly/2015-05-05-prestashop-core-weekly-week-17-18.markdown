---
layout: post
title:  "PrestaShop Core Weekly - Week 17 & 18"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-05-05 18:29:47
author:  [ xavierborderie ]
icon: fa-calendar
tags:
 - core-weekly
---

Missed a week, but the Core Weekly report is still alive and kicking!

I spent last week half in a training session, and half on days off. Sorry if you missed that weekly meeting of ours! ...but that only means that this week, you get DOUBLE DOSE of that :)

This edition of the Core Weekly report highlights changes in PrestaShop core codebase during the last two weeks, from Monday 20th or April to Sunday 3rd of May, 2015.


## Milestones

The PSR-2 survey is still running, [give us your opinion](https://www.prestashop.com/forums/topic/434831-psr2-development-norm-for-prestashop/)!

Of note among the merged PRs in the last two weeks:

 * In PR 2865, contributor gskema added a new method, `Language::getIDs()`, which returns an array of language IDs. Very useful when you only need the language ID and not the whole language array. A lot of functions could be refactored by using this new method. Some lines could even lose their `foreach` loops.
 * In PR 2891, core dev jeromenadaud updated Font Awesome to version 4.3.0 (from version 4.0.3).
 * In PR 2655, contributor PrestaEdit added a new Cart hook, named `actionAfterDeleteProductInCart`. Comment if you think "`actionCartProductRemoveAfter`" would be a better name!
 * In PR 2554, contributor PrestaEdit added a new Mail hook, named `actionGetExtraMailTemplateVars`. Comment if you think "`actionMailSendTemplatesVariablesPrepareAfter`" would be a better name!
 * In PR 2905, core dev julienboudreau introduced a much improved invoice template! The template is now split into multiple sub-templates (which can be overridden), there is a new zone for legal free text (along with the `displayInvoiceLegalFreeText` hook), and made it much better looking! Also, the options for images in PDF moved from Preferences > orders to Orders > Invoices and Orders > credit slips. Let us know what you think of it!
 * In PR 2900, core dev jeromenadaud introduced a new check, to display a warning if the server uses a PHP version below 5.4.
 * In PR 2967, core dev Shudrum removed the order\_changed.html/.txt e-mail template, and replaced it with the new `actionOrderEdited` hook. This follows [PR 13](https://github.com/PrestaShop/mailalerts/pull/13) on the `mailalerts` module, which introduces two new mails: return\_slip and order\_changed. Explore those changes!


## Code changes

Let's review last week's merged pull-requests!

As always, click on the PR's number to open its page on GitHub.

#### Text fix

 * [2916](https://github.com/PrestaShop/PrestaShop/pull/2916): AdminCustomerPreferencesController: Text clarification, by xBorderie.
 
#### Front office

 * [2807](https://github.com/PrestaShop/PrestaShop/pull/2807): Fix #PSCSX-4346 specific price + group reduction price isn't right, by sfroment42.
 * [2785](https://github.com/PrestaShop/PrestaShop/pull/2785): Wrong number of displayed products in Search. Thank you kpodemski!
 * [2811](https://github.com/PrestaShop/PrestaShop/pull/2811): Fix #PSCSX-5199, prevent undefined for ajax param, by gRoussac.
 * [2878](https://github.com/PrestaShop/PrestaShop/pull/2878): Use email input type. Thank you gskema!
 * [2914](https://github.com/PrestaShop/PrestaShop/pull/2914): Fix language in Dispatcher, by jeromenadaud.
 * [2830](https://github.com/PrestaShop/PrestaShop/pull/2830): Fix bug #PSCSX-4326, Specific prices + group reduction, by gRoussac.
 * [2934](https://github.com/PrestaShop/PrestaShop/pull/2934): Correct company field JS validation function. Thank you gskema!
 * [2944](https://github.com/PrestaShop/PrestaShop/pull/2944): duplicated var in product.js, by gRoussac.
 * [2924](https://github.com/PrestaShop/PrestaShop/pull/2924): FixBug #PSCSX-5255 - Quantity reduction now based on original price, by jeromenadaud.
 * [2950](https://github.com/PrestaShop/PrestaShop/pull/2950): Fix #PSCSX-5397, bad bigpic display, by gRoussac.
 
#### Back office

 * [2764](https://github.com/PrestaShop/PrestaShop/pull/2764): Fix #PSCSX-5006, duplicated addresses on customers import + could not update addresses, by gRoussac. Thank you indesign47 for the help!
 * [2907](https://github.com/PrestaShop/PrestaShop/pull/2907): Fix parent category selection in category creation, by jocel1.
 * [2723](https://github.com/PrestaShop/PrestaShop/pull/2723): Wrong multi-language feature. Thank you kpodemski!
 * [2913](https://github.com/PrestaShop/PrestaShop/pull/2913): Add status page indicator, by jeromenadaud.
 * [2912](https://github.com/PrestaShop/PrestaShop/pull/2912): Fix bug #PSCSX-5209 Bad positions moving on other page than first page, by gRoussac.
 * [2956](https://github.com/PrestaShop/PrestaShop/pull/2956): Fix #PSCSX-5440 avoid too much quantity refund in standard refund, by sfroment42.
 
#### Modules

 * [2864](https://github.com/PrestaShop/PrestaShop/pull/2864): Remove blocklayered start/end tags to prevent spam, by jeromenadaud.
 * [2839](https://github.com/PrestaShop/PrestaShop/pull/2839): blockwishlist work, by sfroment42.
 * [2949](https://github.com/PrestaShop/PrestaShop/pull/2949): Add short description into crossselling module. Thank you cdesbouche-acipia!
 
#### Core

 * [2865](https://github.com/PrestaShop/PrestaShop/pull/2865): New method Language::getIDs. Thank you gskema!
 * [2897](https://github.com/PrestaShop/PrestaShop/pull/2897): error_log to Tools::error_log, by gRoussac.
 * [2655](https://github.com/PrestaShop/PrestaShop/pull/2655): Cart / hook "actionAfterDeleteProductInCart". Thank you PrestaEdit!
 * [2554](https://github.com/PrestaShop/PrestaShop/pull/2554): Mail / hook "actionGetExtraMailTemplateVars". Thank you PrestaEdit!
 * [2885](https://github.com/PrestaShop/PrestaShop/pull/2885): pdf prefix in order returns, by gRoussac and AlexEven.
 * [2566](https://github.com/PrestaShop/PrestaShop/pull/2566): Refactor Category::getProducts methods. Thank you gskema!
 * [2793](https://github.com/PrestaShop/PrestaShop/pull/2793): Fix #PSCSX-5130 check if is free, by sfroment.
 * [2813](https://github.com/PrestaShop/PrestaShop/pull/2813): Fix #PSCSX-5204, undefined var $languages, by gRoussac.
 * [2901](https://github.com/PrestaShop/PrestaShop/pull/2901): Normalize int and bool PHPDoc variable types. Thank you gskema!
 * [2798](https://github.com/PrestaShop/PrestaShop/pull/2798): Fix Warehouse::getWarehouseById replace stock table by warehouse_product_location, by sfroment42.
 * [2569](https://github.com/PrestaShop/PrestaShop/pull/2569): Update AdminController.php - trim BO filter values. Thank you nodexpl!
 * [2904](https://github.com/PrestaShop/PrestaShop/pull/2904): norms as keyword in lowercase, by gRoussac.
 * [2871](https://github.com/PrestaShop/PrestaShop/pull/2871): Fix unity validation. Thank you pbirnzain!
 * [2908](https://github.com/PrestaShop/PrestaShop/pull/2908): Create cart if cart object does not exist, by jeromenadaud.
 * [2910](https://github.com/PrestaShop/PrestaShop/pull/2910): Module::displayError() now handles arrays passed as parameter, by tchauviere.
 * [2902](https://github.com/PrestaShop/PrestaShop/pull/2902): Refactor Language::getLanguages calls. Thank you gskema!
 * [2923](https://github.com/PrestaShop/PrestaShop/pull/2923): FixBug #PSCSX-5022 - Wrong rounding price display, by jeromenadaud.
 * [2937](https://github.com/PrestaShop/PrestaShop/pull/2937): warnings, by gRoussac.
 * [2938](https://github.com/PrestaShop/PrestaShop/pull/2938): company_address to shop_address, by gRoussac.
 * [2943](https://github.com/PrestaShop/PrestaShop/pull/2943): Be sure the local cache will not grow out of control, by jocel1.
 * [2946](https://github.com/PrestaShop/PrestaShop/pull/2946): PHPDoc + Wording, by jeromenadaud.
 * [2953](https://github.com/PrestaShop/PrestaShop/pull/2953): StockAvailable / Fix #PSCSX-5432. Thank you PrestaEdit!

#### CSS

 * [2891](https://github.com/PrestaShop/PrestaShop/pull/2891): Font Awesome updated to 4.3.0, by jeromenadaud.
 * [2898](https://github.com/PrestaShop/PrestaShop/pull/2898): Remove unused sass variables, by jeromenadaud.
 
#### PDF

 * [2905](https://github.com/PrestaShop/PrestaShop/pull/2905): Introduce new Invoice template, by julienbourdeau.
 * [2906](https://github.com/PrestaShop/PrestaShop/pull/2906): Invoice pdf cols alignment, by jeromenadaud.
 * [2942](https://github.com/PrestaShop/PrestaShop/pull/2942): Set header title for PDF, by jeromenadaud.
 * [2947](https://github.com/PrestaShop/PrestaShop/pull/2947): Invoice - Add Country in shop address, by julienbourdeau.
 
#### Installer

 * [2900](https://github.com/PrestaShop/PrestaShop/pull/2900): Add warning when php version is less than 5.4, by jeromenadaud.
 * [2903](https://github.com/PrestaShop/PrestaShop/pull/2903): Fix #PSCSX-4951 Do less request and don't download same file multiple time, by sfroment42.
 
#### Tests

 * [2918](https://github.com/PrestaShop/PrestaShop/pull/2918): Added tests on Module::displayError(), by tchauviere.
 * [2925](https://github.com/PrestaShop/PrestaShop/pull/2925): Fix bug #PSCSX-5361, bad regex in packJSinHTML, by gRoussac. Thank you ZiZuu-store for your help!
 
#### Localization

 * [2922](https://github.com/PrestaShop/PrestaShop/pull/2922): add state for Malaysia. Thank you li9ht!
 
#### Import

 * [2959](https://github.com/PrestaShop/PrestaShop/pull/2959): Improve import performances, by jocel1.
 

See all the PRs merged into the codebase since April 20th [here](https://github.com/PrestaShop/PrestaShop/pulls?page=1&pulls_only=true&q=is%3Apr+merged%3A%3E2015-04-20+is%3Aclosed+sort%3Aupdated&utf8=%E2%9C%93).

Thank you to our contributors for their PRs: [cdesbouche-acipia](https://github.com/cdesbouche-acipia), [gskema](https://github.com/gskema), [indesign47](https://github.com/indesign47), [kpodemski](https://github.com/kpodemski), [li9ht](https://github.com/li9ht), [nodexpl](https://github.com/nodexpl), [pbirnzain](https://github.com/pbirnzain), [PrestaEdit](https://github.com/PrestaEdit), [ZiZuu-store](https://github.com/ZiZuu-store), and those whose contributions haven't been merged yet! Also, a big thanks to all those who contribute with tickets on the Forge!

Remember: if you want to contribute to PrestaShop with code, read those:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Until the next Core Weekly report, let me know if I forgot something here, or if you have ideas about how to improve this report!

Happy contributin' everyone!
