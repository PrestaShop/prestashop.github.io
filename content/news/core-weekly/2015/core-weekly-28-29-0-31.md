---
layout: post
aliases: ["/news/core-weekly-28-29-0-31"]
title:  "PrestaShop Core Weekly - Weeks 28-29-30-31 of 2015"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-08-06 16:37:41
authors:  [ xavierborderie ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop core codebase during the last four weeks, from Monday 6th of July to Sunday 2nd of August, 2015.

Wow, is this report late! We're almost ready to enter the Core Monthly limit! So let's dive right into it. Thank you for your patience!


## Milestones

Important note: [A security upgrade was released last week](https://www.prestashop.com/blog/en/prestashop-security-release/), for PrestaShop 1.4, 1.5 and 1.6! Version 1.6.1.0 is safe, but if you have any other version, please apply the patch! Read all about it [in the blogpost](https://www.prestashop.com/blog/en/prestashop-security-release/), or find more technical details and how to apply the fix manually [in this text file](https://gist.github.com/Shudrum/27fc534de69c96617280).

Now that [PrestaShop 1.6.1.0 has been released](https://www.prestashop.com/blog/en/delivering-new-improved-v1-6-1-0/), the team is working on the next version of your preferred e-commerce solution. In the meantime, [we are planning on releasing version 1.6.1.1](http://build.prestashop.com/news/announcing-prestashop-1-6-1-1/), a [patch version](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/) that will fix some lingering issues from 1.6.1.0. It is slated for a late-August release, and [you can test the first RC right now](http://build.prestashop.com/news/prestashop-1-6-1-1-rc1/)!

Want to contribute your code skills to the PrestaShop project? [Make sure your Git setup is correctly configured](http://build.prestashop.com/howtos/misc/set-up-your-git-for-contributing/)!

We reached [1500 forks on GitHub](https://github.com/PrestaShop/PrestaShop/network)! Don't want to fork us but you really like the project? [Star us on GitHub](https://github.com/PrestaShop/PrestaShop)!

Of note among the merged PRs since the last Core Weekly Report:

 * In [PR 3446](https://github.com/PrestaShop/PrestaShop/pull/3446), contributor kpodemski made it so that the "Transplant module" page shows the discription of the hook.
 * In [PR 3511](https://github.com/PrestaShop/PrestaShop/pull/3511), contributor prestamodule changed the size of the modules' icons so that it would be the same as on PrestaShop Addons (57*57).
 * In [PR 3472](https://github.com/PrestaShop/PrestaShop/pull/3472), contributor tucoinfo added Indonesian states.
 * In [PR 3503](https://github.com/PrestaShop/PrestaShop/pull/3503), contributor mcdado added zoom on Android devices.
 * In [PR 3461](https://github.com/PrestaShop/PrestaShop/pull/3461), contributor PhpMadman added the possibility to display package items on order.


## Code changes

Let's review the merged pull-requests on the various branches of the project (develop, 1.6.1.x, 1.6.2.x, etc.) since the last Core Weekly Report!

As always, click on the PR's number to open its page on GitHub.


#### Text changes

 * [3412](https://github.com/PrestaShop/PrestaShop/pull/3412): Typo error. Thank you joseantgv!
 * [3427](https://github.com/PrestaShop/PrestaShop/pull/3427): Fixed constant name in Order::getTotalPaid. Thank you manuelbcd!
 * [3411](https://github.com/PrestaShop/PrestaShop/pull/3411): typo, by gRoussac.


#### Front office

 * [3393](https://github.com/PrestaShop/PrestaShop/pull/3393): Change schema.org links to https. Thank you panploenes!
 * [3406](https://github.com/PrestaShop/PrestaShop/pull/3406): no need to fetch all suppliers on category. Thank you iNem0o!
 * [3413](https://github.com/PrestaShop/PrestaShop/pull/3413): Fix tree issue, by jocel1.
 * [3424](https://github.com/PrestaShop/PrestaShop/pull/3424): NOTICE: non-existing property. Thank you kermes!
 * [3437](https://github.com/PrestaShop/PrestaShop/pull/3437): wrong tax label display in blockcart layer, by gRoussac.
 * [3423](https://github.com/PrestaShop/PrestaShop/pull/3423): Fix ajax register. Thank you monsty!
 * [3453](https://github.com/PrestaShop/PrestaShop/pull/3453): root category in breadcrumb, by gRoussac.
 * [3457](https://github.com/PrestaShop/PrestaShop/pull/3457): wrong tax label display in cart summary, by gRoussac.
 * [3458](https://github.com/PrestaShop/PrestaShop/pull/3458): issue with attribute anchor separator, by gRoussac.
 * [3407](https://github.com/PrestaShop/PrestaShop/pull/3407): fixed wrong Canadian postcode regexp validation. Thank you studiokiwik!
 * [3456](https://github.com/PrestaShop/PrestaShop/pull/3456): Fix bug #PSCSX-6103, no product images in cart when combinations feature not active, by gRoussac.
 * [3477](https://github.com/PrestaShop/PrestaShop/pull/3477): Wrong discount table for combination, by jeromenadaud.
 * [3474](https://github.com/PrestaShop/PrestaShop/pull/3474): Fixed missing HOOK_TOP_PAYMENT in order-payment-advanced.tpl. Thank you remiq!
 * [3503](https://github.com/PrestaShop/PrestaShop/pull/3503): Enable zoom on Android. Thank you mcdado!
 * [3499](https://github.com/PrestaShop/PrestaShop/pull/3499): handle id_product_attribute, by sfroment42.
 * [3482](https://github.com/PrestaShop/PrestaShop/pull/3482): Fixed bug showing errors in manufacturer list. Thank you  Alfakom-MK!
 * [3505](https://github.com/PrestaShop/PrestaShop/pull/3505): #PSCSX-6227 ajax search add hook for stats search, by kelu95.
 * [3509](https://github.com/PrestaShop/PrestaShop/pull/3509): theme retro-compatibility regarding the CGV. Thank you oleacorner!


#### Back office

 * [3382](https://github.com/PrestaShop/PrestaShop/pull/3382): Change bulk modules update, by jeromenadaud.
 * [3368](https://github.com/PrestaShop/PrestaShop/pull/3368) and [3401](https://github.com/PrestaShop/PrestaShop/pull/3401): Fix missing "disabled" attribute in form.tpl for "select" input type, by gRoussac.
 * [3404](https://github.com/PrestaShop/PrestaShop/pull/3404): Notice in modules list, by gRoussac.
 * [3395](https://github.com/PrestaShop/PrestaShop/pull/3395): correct responsive problem, by jeromenadaud.
 * [3385](https://github.com/PrestaShop/PrestaShop/pull/3385): "Maintenance Mode" disappears in Modules page. Thank you PrestaEdit!
 * [3389](https://github.com/PrestaShop/PrestaShop/pull/3389): Fix module installation, by jeromenadaud.
 * [3390](https://github.com/PrestaShop/PrestaShop/pull/3390): wrong version in header, by gRoussac.
 * [3392](https://github.com/PrestaShop/PrestaShop/pull/3392): Media::addJsDefL should be called in admin controllers with addslashes and no htmlentities, by gRoussac.
 * [3432](https://github.com/PrestaShop/PrestaShop/pull/3432): could not update category position to first position, by gRoussac.
 * [3430](https://github.com/PrestaShop/PrestaShop/pull/3430): CustomerMessage->message length && CustomerMessage->message is not valid, by gRoussac.
 * [3410](https://github.com/PrestaShop/PrestaShop/pull/3410): redirect_after on adminCustomers, by gRoussac.
 * [3428](https://github.com/PrestaShop/PrestaShop/pull/3428): Missing "readonly" attribute in form.tpl for "textarea" input type (Helpform). Thank you PrestaEdit!
 * [3419](https://github.com/PrestaShop/PrestaShop/pull/3419): need to check if multistore is enabled, by sfroment42.
 * [3421](https://github.com/PrestaShop/PrestaShop/pull/3421): id_shop not well set, by sfroment42.
 * [3403](https://github.com/PrestaShop/PrestaShop/pull/3403): Customer filter in orders, by jeromenadaud.
 * [3388](https://github.com/PrestaShop/PrestaShop/pull/3388): JavaScript error on modules using AdminTab, by jeromenadaud.
 * [3444](https://github.com/PrestaShop/PrestaShop/pull/3444): Fix sign out exception with debug profiling, by jeromenadaud.
 * [3447](https://github.com/PrestaShop/PrestaShop/pull/3447): Fix unknown iso_user JS var while in AdminTab. Thank you oleacorner!
 * [3446](https://github.com/PrestaShop/PrestaShop/pull/3446): Show description of the hook on "Transplant module" page. Thank you kpodemski!
 * [3454](https://github.com/PrestaShop/PrestaShop/pull/3454): could not select hook in Admin Modules Positions, by gRoussac.
 * [3445](https://github.com/PrestaShop/PrestaShop/pull/3445): improved selection of the module in "Transplant module" page. Thank you kpodemski!
 * [3451](https://github.com/PrestaShop/PrestaShop/pull/3451): Better license headers. Thank you gskema!
 * [3461](https://github.com/PrestaShop/PrestaShop/pull/3461): Added possibility to display package items on order. Thank you PhpMadman!
 * [3473](https://github.com/PrestaShop/PrestaShop/pull/3473): Display correct KPI values in tooltip, by maximebiloe.
 * [3442](https://github.com/PrestaShop/PrestaShop/pull/3442): Fix #PSCSX-6206, bad redirection on Transform a guest into a customer, by gRoussac.
 * [3488](https://github.com/PrestaShop/PrestaShop/pull/3488): Fix #PSCSX-6234, could not update category position to first position, by gRoussac.
 * [3448](https://github.com/PrestaShop/PrestaShop/pull/3448): FixBug #PSCSX-6208 - Profiling redirection error, by jeromenadaud.
 * [3515](https://github.com/PrestaShop/PrestaShop/pull/3515): Fix #PSCSX-6367, unable to see status of vouchers related to customer, by gRoussac.
 * [3454](https://github.com/PrestaShop/PrestaShop/pull/3454): Fix #PSCSX-6361, in employee admin theme list name, each theme name is "default", by gRoussac.
 * [3507](https://github.com/PrestaShop/PrestaShop/pull/3507): Fix getModuleTranslation(). Thank you PrestaEdit!
 * [3502](https://github.com/PrestaShop/PrestaShop/pull/3502): filters on Prices will match only Equality instead of %LIKE%, by xGouley.
 * [3495](https://github.com/PrestaShop/PrestaShop/pull/3495) and [3494](https://github.com/PrestaShop/PrestaShop/pull/3494): Fix #PSCSX-5821, after filtering products issue with category tree filter, by gRoussac.
 * [3492](https://github.com/PrestaShop/PrestaShop/pull/3492): avoid redirection on addons registration, by ClaireMeuriot.
 * [3487](https://github.com/PrestaShop/PrestaShop/pull/3487): Fix #PSCSX-5390, duplicate in modules exceptions, by gRoussac.
 * [3470](https://github.com/PrestaShop/PrestaShop/pull/3470): Incorrect price TI initialization in case of ecotax. Thank you eric-rouvier!
 * [3511](https://github.com/PrestaShop/PrestaShop/pull/3511): Use original PS Addons width for modules icons (57 px). Thank you prestamodule!
 * [3490](https://github.com/PrestaShop/PrestaShop/pull/3490): Set stock option the same for all context shops when creating a new product. Thank you eric-rouvier!
 * [3512](https://github.com/PrestaShop/PrestaShop/pull/3512): #PSCSX-6226 get real margin in stats best category, by kelu95.
 * [3452](https://github.com/PrestaShop/PrestaShop/pull/3452): display tax exclude on average order/cart value, by kelu95.
 * [3450](https://github.com/PrestaShop/PrestaShop/pull/3450): dashboard add tax excl to sales and cart value, by kelu95.
 * [3520](https://github.com/PrestaShop/PrestaShop/pull/3520): Fix use of custom class with textarea (even if autoload_rte not set). Thank you PrestaEdit!
 * [3517](https://github.com/PrestaShop/PrestaShop/pull/3517): Fixed bug in partial refund. Thank you kijamve!
 * [3420](https://github.com/PrestaShop/PrestaShop/pull/3420): duplicate product on supply order, by sfroment42.
 * [3522](https://github.com/PrestaShop/PrestaShop/pull/3522): Display filters in back-office on mobile, by maximebiloe.
 * [3525](https://github.com/PrestaShop/PrestaShop/pull/3525): Customer threads Multishop : Reply with the good template, logo and link. Thank you djbuch!
 * [3519](https://github.com/PrestaShop/PrestaShop/pull/3519): Remove duplicate bought and must have modules, by jeromenadaud.
 * [3516](https://github.com/PrestaShop/PrestaShop/pull/3516): Fixed variable check. Thank you julvernois!
 * [3510](https://github.com/PrestaShop/PrestaShop/pull/3510): Fix bought module that can't be installed because of the "must have" type. Thank you prestamodule!
 * [3552](https://github.com/PrestaShop/PrestaShop/pull/3552): Prevent default theme to be removed on Cloud, by jeromenadaud.
 * [3557](https://github.com/PrestaShop/PrestaShop/pull/3557): Dashboard stats know display true item sales instead of item sales+services #PSCSX-6244, by tchauviere.


#### Core

 * [2834](https://github.com/PrestaShop/PrestaShop/pull/2834): fix SSL in CMS links. Thank you ZiZuu-store!
 * [3384](https://github.com/PrestaShop/PrestaShop/pull/3384): Fix PHP 5.2 issue on FileSystem Core class, by tchauviere.
 * [3383](https://github.com/PrestaShop/PrestaShop/pull/3383): Fix translation issue with html entities, by tchauviere.
 * [3399](https://github.com/PrestaShop/PrestaShop/pull/3399): Add YandexBot, by jeromenadaud.
 * [3394](https://github.com/PrestaShop/PrestaShop/pull/3394): bad property name. Thank you BrunoJunior!
 * [3397](https://github.com/PrestaShop/PrestaShop/pull/3397): automatic resbscribe to newsletter for employee account, by jeromenadaud.
 * [3417](https://github.com/PrestaShop/PrestaShop/pull/3417): getBrightness() with a short $hex (e.g.: #FFF). Thank you PrestaEdit!
 * [3431](https://github.com/PrestaShop/PrestaShop/pull/3431): wrong default cover id in webservice, by jeromenadaud.
 * [3426](https://github.com/PrestaShop/PrestaShop/pull/3426): DbQuery / Add rightJoin() method. Thank you PrestaEdit!
 * [3425](https://github.com/PrestaShop/PrestaShop/pull/3425): OrderDetail / Use DbQuery->letJoin() instead of join with LEFT JOIN inside. Thank you PrestaEdit!
 * [3418](https://github.com/PrestaShop/PrestaShop/pull/3418): delete loses the information when out of stock, by sfroment42.
 * [3416](https://github.com/PrestaShop/PrestaShop/pull/3416): htaccess generation with media server, by sfroment42.
 * [3439](https://github.com/PrestaShop/PrestaShop/pull/3439): Parse error, by jeromenadaud.
 * [3440](https://github.com/PrestaShop/PrestaShop/pull/3440): Wrong cart status filter, by jeromenadaud.
 * [3455](https://github.com/PrestaShop/PrestaShop/pull/3455): Fix Parse error, by jeromenadaud.
 * [3488](https://github.com/PrestaShop/PrestaShop/pull/3488): Edit [-] CORE : Try to fix #PSCSX-5167, no payment mention in delivery pdf when no invoice, by gRoussac.
 * [3422](https://github.com/PrestaShop/PrestaShop/pull/3422) and [3486](https://github.com/PrestaShop/PrestaShop/pull/3486): Override psr2 handle better + test update, by sfroment42.
 * [3489](https://github.com/PrestaShop/PrestaShop/pull/3489): Move code to subfunction, by julienbourdeau.
 * [3491](https://github.com/PrestaShop/PrestaShop/pull/3491): Added missing hook on update logo from AdminTheme, by tchauviere.
 * [3496](https://github.com/PrestaShop/PrestaShop/pull/3496): fix #PSCSX-5826, sql db exception on features and attributes positions cleaning, by gRoussac.
 * [3524](https://github.com/PrestaShop/PrestaShop/pull/3524): Allow SSL for _PS_HOST_MODE_, by maximebiloe.
 * [3526](https://github.com/PrestaShop/PrestaShop/pull/3526): Correct bug where order was validate and receive but no stock were added, by sfroment42.
 * [3523](https://github.com/PrestaShop/PrestaShop/pull/3523): Tools::str_replace doesn't exist, by sfroment42.
 * [3532](https://github.com/PrestaShop/PrestaShop/pull/3532): that line is needed sorry, by sfroment42.
 * [3545](https://github.com/PrestaShop/PrestaShop/pull/3545): Fix missing backquotes on Employee. Thank you prestamodule!


#### Modules

 * [3361](https://github.com/PrestaShop/PrestaShop/pull/3361): Fix/advanced eu compliance update, by tchauviere.
 * [3405](https://github.com/PrestaShop/PrestaShop/pull/3405): Edit comment for better understanding. Thank you panploenes!
 * [3409](https://github.com/PrestaShop/PrestaShop/pull/3409): update .gitmodules / add .git to sendtoafriend url, by tchauviere.


#### PDF

 * [3408](https://github.com/PrestaShop/PrestaShop/pull/3408): Untranslated string in orders PDF, by kelu95.
 * [3415](https://github.com/PrestaShop/PrestaShop/pull/3415): Need to use product_reference that depend of attribute, by sfroment42.
 * [3438](https://github.com/PrestaShop/PrestaShop/pull/3438): Shop address missing for old orders < 1.6.1, by xGouley.
 * [3508](https://github.com/PrestaShop/PrestaShop/pull/3508): Fix base price for specific price in %, by julienbourdeau.

#### Multishop

 * [3481](https://github.com/PrestaShop/PrestaShop/pull/3481): shop address in order_invoices as of #PSCSX-6169, by xGouley.


#### Stocks

 * [3541](https://github.com/PrestaShop/PrestaShop/pull/3541): fix bug when creating order directly in shipped status, by xGouley.


#### Importer

 * [3381](https://github.com/PrestaShop/PrestaShop/pull/3381): Invalid date_upd in import, by jeromenadaud.


#### Installer

 * [3391](https://github.com/PrestaShop/PrestaShop/pull/3391): Property TaxRulesGroup->date_add is not valid, by gRoussac.

#### Tests

 * [3478](https://github.com/PrestaShop/PrestaShop/pull/3478): Add unit tests for PrestaShop#2867 minifyCSS() && Replace ByAbsoluteURL(), by gRoussac.

#### Localization

 * [3472](https://github.com/PrestaShop/PrestaShop/pull/3472): Add Indonesian states, required by PayPal. Thank you tucoinfo!



See all the PRs merged into the codebase since July the 6th [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+merged%3A%3E2015-07-06+is%3Aclosed+sort%3Aupdated+).

Thank you to our contributors whose Pull Requests were merged since the last Core Weekly Report: [Alfakom-MK](https://github.com/Alfakom-MK), [BrunoJunior](https://github.com/BrunoJunior), [djbuch](https://github.com/djbuch), [eric-rouvier](https://github.com/eric-rouvier), [gskema](https://github.com/gskema), [iNem0o](https://github.com/iNem0o), [joseantgv](https://github.com/joseantgv), [julvernois](https://github.com/julvernois), [kermes](https://github.com/kermes), [kijamve](https://github.com/kijamve), [kpodemski](https://github.com/kpodemski), [manuelbcd](https://github.com/manuelbcd), [mcdado](https://github.com/mcdado), [monsty](https://github.com/monsty), [oleacorner](https://github.com/oleacorner), [panploenes](https://github.com/panploenes), [PhpMadman](https://github.com/PhpMadman), [PrestaEdit](https://github.com/PrestaEdit), [prestamodule](https://github.com/prestamodule), [remiq](https://github.com/remiq), [studiokiwik](https://github.com/studiokiwik), [tucoinfo](https://github.com/tucoinfo), and [ZiZuu-store](https://github.com/ZiZuu-store). I am very happy to see so many first-time contributors this month!

Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, read those:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
