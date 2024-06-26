---
layout: post
aliases: ["/news/prestashop-1-6-1-1-rc1"]
title:  "Test PrestaShop 1.6.1.1 RC1"
subtitle: "Have you tried turning it off and on again?"
date:   2015-08-04 17:37:41
authors:  [ xavierborderie ]
icon: icon-leaf
tags:
 - version
 - rc
 - releases
 - development
 - "1.6.1.x"
 - "1.6"
---

[As announced two weeks ago](http://build.prestashop.com/news/announcing-prestashop-1-6-1-1/), version 1.6.1.0 turned out great, but there were still a few bumps here and there. We have fixed the main issues that were reported: 140 pull requests were merged into this version!

We are now ready to start the testing phase with our Community! We want to give this version a solid testing phase: we are planning two weeks for feedback on the issues that were fixed in this 1.6.1.1 version. This testing phase starts today, with the availability of the first Release Candidate version, or RC1 for short.

We need you to make sure that this release is as bug free as possible. We need everyone to participate: merchants, developers, designers, translators, ... even customers! Test your modules, test your themes, make a test-upgrade on a copy of a real shop, etc.

Remember that 1.6.1.1 RC1 is a test version, and is therefore not yet deemed suitable for production use. Hence, do not upgrade your store just yet! Install the RC1 on your server (on as many server configurations as possible), or upgrade from a clone of your real store.

{{< cta "https://www.prestashop.com/versions" >}}Download and test PrestaShop 1.6.1.1 RC1 now!{{< /cta >}}

Remember: if you have any feedback to give, [create a ticket on the Forge](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop)!

Here is the full list of [the 145 pull requests that were merged into version 1.6.1.1](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+base%3A1.6.1.x+is%3Aclosed) so far:

 * [3381](https://github.com/PrestaShop/PrestaShop/pull/3381): [-] BO : Fix bug #PSCSX-6052 - Invalid date_upd in import
 * [3382](https://github.com/PrestaShop/PrestaShop/pull/3382): [-] BO : Change bulk modules update
 * [3383](https://github.com/PrestaShop/PrestaShop/pull/3383): [-] CORE: Fix translation issue with html entities
 * [3384](https://github.com/PrestaShop/PrestaShop/pull/3384): [-] CORE: Fix PHP 5.2 issue on FileSystem Core class
 * [3385](https://github.com/PrestaShop/PrestaShop/pull/3385): [-] BO : Fix #PSCSX-6087 "Maintenance Mode" disappears in Modules page
 * [3388](https://github.com/PrestaShop/PrestaShop/pull/3388): [-] BO : Fix bug #NM-513 - JavaScript error on modules using AdminTab
 * [3389](https://github.com/PrestaShop/PrestaShop/pull/3389): // Fix module installation
 * [3390](https://github.com/PrestaShop/PrestaShop/pull/3390): [-] BO : Fix #PSCSX-6086, wrong version in header
 * [3391](https://github.com/PrestaShop/PrestaShop/pull/3391): [-] IN : Fix #PSCSX-6133, Property TaxRulesGroup->date_add is not valid
 * [3392](https://github.com/PrestaShop/PrestaShop/pull/3392): [-] BO : Media::addJsDefL should be called in admin controllers with addslashes and no htmlentities
 * [3393](https://github.com/PrestaShop/PrestaShop/pull/3393): [*] FO Change schema.org links to https
 * [3394](https://github.com/PrestaShop/PrestaShop/pull/3394): [-] Core : bad property name. image_type doesn't exist anymore. Replaced by imageType. In WebserviceSpecificManagementImagesCore, the property image_type doesn't exist anymore.
 * [3395](https://github.com/PrestaShop/PrestaShop/pull/3395): // correct responsive problem
 * [3396](https://github.com/PrestaShop/PrestaShop/pull/3396): [*] CORE : Partial Fix #PSCSX-6135, include users proper defines file
 * [3397](https://github.com/PrestaShop/PrestaShop/pull/3397): // Fix PSCSX-6131
 * [3399](https://github.com/PrestaShop/PrestaShop/pull/3399): // Add YandexBot
 * [3401](https://github.com/PrestaShop/PrestaShop/pull/3401): // small change #PSCSX-5765
 * [3402](https://github.com/PrestaShop/PrestaShop/pull/3402): [*] FO Add if condition to displayBanner hook
 * [3403](https://github.com/PrestaShop/PrestaShop/pull/3403): [-] BO : Fix bug #PSCSX-6154 - Customer filter in orders
 * [3404](https://github.com/PrestaShop/PrestaShop/pull/3404): [-] BO : FIX #PSCSX-6158, notice in modules list
 * [3405](https://github.com/PrestaShop/PrestaShop/pull/3405): [*] MO Edit comment for better understanding
 * [3407](https://github.com/PrestaShop/PrestaShop/pull/3407): [-] FO : fixed wrong Canadian postcode regexp validation
 * [3408](https://github.com/PrestaShop/PrestaShop/pull/3408): [*] BO : fix #PSCSX-6096 untranslate string in orders pdf
 * [3409](https://github.com/PrestaShop/PrestaShop/pull/3409): [-] MO: update.gitmodules / add .git to sendtoafriend url
 * [3410](https://github.com/PrestaShop/PrestaShop/pull/3410): [*] BO : Fix #PSCSX-6134, redirect_after on adminCustomers
 * [3411](https://github.com/PrestaShop/PrestaShop/pull/3411): [*] FO : add if condition to hook displayBanner
 * [3412](https://github.com/PrestaShop/PrestaShop/pull/3412): [-] BO - Typo error
 * [3413](https://github.com/PrestaShop/PrestaShop/pull/3413): [-] BO : Fix tree issue
 * [3414](https://github.com/PrestaShop/PrestaShop/pull/3414): [-] BO: Fix PSCSX-6208 / Call to undefined method stdClass::setRedirectAfter()
 * [3415](https://github.com/PrestaShop/PrestaShop/pull/3415): [-] PDF : Need to use product_reference that depend of attribute
 * [3416](https://github.com/PrestaShop/PrestaShop/pull/3416): [-] CORE : Fix #PSCSX-3480 htaccess generation with media server
 * [3417](https://github.com/PrestaShop/PrestaShop/pull/3417): [-] Project: getBrightness() with a short $hex (e.g.: #FFF)
 * [3418](https://github.com/PrestaShop/PrestaShop/pull/3418): [-] CORE : Fix #PSCSX-5882 delete loose the information out of stock etc.
 * [3419](https://github.com/PrestaShop/PrestaShop/pull/3419): [-] BO : Fix #PSCSX-5883 need to check if multistore is enable
 * [3420](https://github.com/PrestaShop/PrestaShop/pull/3420): [-] BO : Fix #PSCSX-5738 duplicate product on supply order
 * [3421](https://github.com/PrestaShop/PrestaShop/pull/3421): [-] BO : Fix #PSCSX-5365 id_shop not well set
 * [3425](https://github.com/PrestaShop/PrestaShop/pull/3425): [-] Class: OrderDetail / Use DbQuery->letJoin() instead of join with LEFT JOIN inside
 * [3426](https://github.com/PrestaShop/PrestaShop/pull/3426): [-] Class: DbQuery / Add rightJoin() method
 * [3428](https://github.com/PrestaShop/PrestaShop/pull/3428): [*] BO : Missing "readonly" attribute in form.tpl for "textarea"
 * [3429](https://github.com/PrestaShop/PrestaShop/pull/3429): [-] BO : Fix use of custom class with textarea (even if autoload_rte not set)
 * [3430](https://github.com/PrestaShop/PrestaShop/pull/3430): [-] BO : Fix #PSCSX-5844, #PSCSX-6138, CustomerMessage->message length && CustomerMessage->message is not valid
 * [3437](https://github.com/PrestaShop/PrestaShop/pull/3437): [-] FO : Fix #PSCSX-4340, wrong tax label display in blockcart layer
 * [3438](https://github.com/PrestaShop/PrestaShop/pull/3438): [-] PDF: Shop address missing for old orders < 1.6.1 as #PSCSX-6169
 * [3439](https://github.com/PrestaShop/PrestaShop/pull/3439): // Parse error
 * [3440](https://github.com/PrestaShop/PrestaShop/pull/3440): [-] BO : Fix bug #PSCSX-6246 - Wrong cart status filter
 * [3441](https://github.com/PrestaShop/PrestaShop/pull/3441): // PSCSX-6205, typo
 * [3442](https://github.com/PrestaShop/PrestaShop/pull/3442): [-] BO : Fix #PSCSX-6206, bad redirection on Transform a guest into a customer
 * [3444](https://github.com/PrestaShop/PrestaShop/pull/3444): [-] BO : Fix sign out exception with debug profiling
 * [3448](https://github.com/PrestaShop/PrestaShop/pull/3448): [-] BO : FixBug #PSCSX-6208 - Profiling redirection error
 * [3450](https://github.com/PrestaShop/PrestaShop/pull/3450): [*] BO : fix #PSCSX-6240 dashbord add tax excl to sales and cart value
 * [3452](https://github.com/PrestaShop/PrestaShop/pull/3452): [*] BO : #PSCSX-6227 display tax ecxlude on average order/cart value
 * [3453](https://github.com/PrestaShop/PrestaShop/pull/3453): [-] FO : Fix #PSCSX-6165, root category in breadcrumb
 * [3454](https://github.com/PrestaShop/PrestaShop/pull/3454): [-] BO : Fix #PSCSX-6160, could not select hook in Admin Modules Positions
 * [3455](https://github.com/PrestaShop/PrestaShop/pull/3455): // Fix Parse error
 * [3456](https://github.com/PrestaShop/PrestaShop/pull/3456): [-] FO : Fix bug #PSCSX-6103, no product images in cart when combinations feature not active
 * [3457](https://github.com/PrestaShop/PrestaShop/pull/3457): [-] FO : Fix #PSCSX-4340, wrong tax label display in cart summary
 * [3458](https://github.com/PrestaShop/PrestaShop/pull/3458): [-] FO : Fix #PSCSX-6275, issue with attribute anchor separator
 * [3470](https://github.com/PrestaShop/PrestaShop/pull/3470): [-] BO : Incorrect price TI initialisation in case of ecotax
 * [3471](https://github.com/PrestaShop/PrestaShop/pull/3471): [-] FO : Invalid combination price in case of ecotax
 * [3477](https://github.com/PrestaShop/PrestaShop/pull/3477): [-] FO : Wrong discount table for combination
 * [3478](https://github.com/PrestaShop/PrestaShop/pull/3478): [+] TESTS : Add unit tests for PrestaShop#2867 minifyCSS() && Replace ByAbsoluteURL()
 * [3481](https://github.com/PrestaShop/PrestaShop/pull/3481): [~] Multishop, shop address in order_invoices as of #PSCSX-6169
 * [3483](https://github.com/PrestaShop/PrestaShop/pull/3483): Edit [-] CORE : Try to fix #PSCSX-5167, no payment mention in delivery pdf when no invoice
 * [3485](https://github.com/PrestaShop/PrestaShop/pull/3485): [-] CORE : Fix #PSCSX-6153 id shop not well set so don't cache
 * [3486](https://github.com/PrestaShop/PrestaShop/pull/3486): Override psr2 handle better + test update
 * [3487](https://github.com/PrestaShop/PrestaShop/pull/3487): [-] BO : Fix #PSCSX-5390, duplicate in modules exceptions
 * [3489](https://github.com/PrestaShop/PrestaShop/pull/3489): // Move code to subfunction
 * [3490](https://github.com/PrestaShop/PrestaShop/pull/3490): [-] BO : Set stock option the same for all context shops when creating a new product
 * [3491](https://github.com/PrestaShop/PrestaShop/pull/3491): [-] CORE: Added missing hook on update logo from AdminTheme
 * [3492](https://github.com/PrestaShop/PrestaShop/pull/3492): [-] BO : avoid redirection on addons registration
 * [3494](https://github.com/PrestaShop/PrestaShop/pull/3494): [-] BO : Fix #PSCSX-5821, after filtering products issue with category tree filter
 * [3495](https://github.com/PrestaShop/PrestaShop/pull/3495): [-] BO : Fix #PSCSX-5821, after filtering products issue with category tree filter
 * [3496](https://github.com/PrestaShop/PrestaShop/pull/3496): [-] CORE : [-] fix #PSCSX-5826, sql db exception on features and attributes positions cleaning
 * [3497](https://github.com/PrestaShop/PrestaShop/pull/3497): [-]BO: radio category tree selector must not always redirect
 * [3499](https://github.com/PrestaShop/PrestaShop/pull/3499): [-] FO : Fix #PSCSX-6345 handle id_product_attribute
 * [3500](https://github.com/PrestaShop/PrestaShop/pull/3500): [~] Project : decrease stocks of a pack or its sub products in specific cases #PSCSX-4759
 * [3502](https://github.com/PrestaShop/PrestaShop/pull/3502): [~] BO: filters on Prices will match only Equality instead of %LIKE%.
 * [3505](https://github.com/PrestaShop/PrestaShop/pull/3505): [-] FO : #PSCSX-6227 ajax search add hook for stats search
 * [3507](https://github.com/PrestaShop/PrestaShop/pull/3507): [-] BO: Fix getModuleTranslation()
 * [3508](https://github.com/PrestaShop/PrestaShop/pull/3508): [*] PDF : #PSCSX-6166, Fix base price for specific price in %
 * [3509](https://github.com/PrestaShop/PrestaShop/pull/3509): [-]FO: theme retro-compatibility regarding the CGV
 * [3510](https://github.com/PrestaShop/PrestaShop/pull/3510): [-] BO : Fix bought module that can't be installed because of the "must have" type
 * [3511](https://github.com/PrestaShop/PrestaShop/pull/3511): [-] BO : Use original PS Addons width for modules icons (57 px)
 * [3512](https://github.com/PrestaShop/PrestaShop/pull/3512): [*] BO : #PSCSX-6226 get real margin in stats best category
 * [3514](https://github.com/PrestaShop/PrestaShop/pull/3514): [-] BO : Fix #PSCSX-6361, in employee admin theme list name, each theme name is "default"
 * [3515](https://github.com/PrestaShop/PrestaShop/pull/3515): [-] BO : Fix #PSCSX-6367, unable to see status of vouchers related to customer
 * [3517](https://github.com/PrestaShop/PrestaShop/pull/3517): [-] BO : Fixed bug in partial refund #PSCSX-6287
 * [3519](https://github.com/PrestaShop/PrestaShop/pull/3519): [-] BO : Remove duplicate bought and must have modules
 * [3520](https://github.com/PrestaShop/PrestaShop/pull/3520): [-] BO : Fix use of custom class with textarea (even if autoload_rte not set)
 * [3521](https://github.com/PrestaShop/PrestaShop/pull/3521): [-] BO : Fix timeout on customer modules list
 * [3522](https://github.com/PrestaShop/PrestaShop/pull/3522): [-] BO : #PSCSX-6305 Display filters in back-office on mobile
 * [3523](https://github.com/PrestaShop/PrestaShop/pull/3523): [-] CORE : Tools::str_replace doesn't exist
 * [3524](https://github.com/PrestaShop/PrestaShop/pull/3524): Allow SSL for _PS_HOST_MODE_
 * [3525](https://github.com/PrestaShop/PrestaShop/pull/3525): [-] BO : Customer threads Multishop : Reply with the good template, logo and link !
 * [3526](https://github.com/PrestaShop/PrestaShop/pull/3526): [-] Correct bug where order was validate and receive but no stock were added
 * [3527](https://github.com/PrestaShop/PrestaShop/pull/3527): [*] : FO test some dynamic hooks in header.tpl
 * [3530](https://github.com/PrestaShop/PrestaShop/pull/3530): [*] BO : Meta title and description use textarea
 * [3532](https://github.com/PrestaShop/PrestaShop/pull/3532): // that line is needed sorry
 * [3533](https://github.com/PrestaShop/PrestaShop/pull/3533): [-] BO : Fix #PSCSX-6367, unable to see quantity for user of vouchers related to customer
 * [3534](https://github.com/PrestaShop/PrestaShop/pull/3534): [*] Removed the modules folder from the robots.txt to allow google to crawl JS, CSS and images
 * [3535](https://github.com/PrestaShop/PrestaShop/pull/3535): [-] PDF: smarty warning for Order slip. #PSCSX-6245
 * [3537](https://github.com/PrestaShop/PrestaShop/pull/3537): [-] BO : Fix #PSCSX-4214, "Recommended modules" on Localization Tab
 * [3540](https://github.com/PrestaShop/PrestaShop/pull/3540): [*] BO : #PSCSX-6116 allow multiple product combination when adding specific price
 * [3541](https://github.com/PrestaShop/PrestaShop/pull/3541): [-] Adv Stocks Mngmt bug when creating order directly in shipped status
 * [3544](https://github.com/PrestaShop/PrestaShop/pull/3544): [-] IN : Fix bug #NM-474, no hook on header for blocktopmenu on theme copy
 * [3545](https://github.com/PrestaShop/PrestaShop/pull/3545): [-] CORE : Fix missing backquotes on Employee
 * [3549](https://github.com/PrestaShop/PrestaShop/pull/3549): [-] BO : Could not export default theme in dev mode because of .sass-cache
 * [3551](https://github.com/PrestaShop/PrestaShop/pull/3551): [-] BO : Usage of defined Referrer variable
 * [3552](https://github.com/PrestaShop/PrestaShop/pull/3552): // Prevent default theme to be removed on cloud
 * [3553](https://github.com/PrestaShop/PrestaShop/pull/3553): [-] FO: auth error if $back is not defined
 * [3554](https://github.com/PrestaShop/PrestaShop/pull/3554): [-] FO : Fix bug #PSCSX-4260, "Free shipping" for virtual products, undefined $virtualCart
 * [3558](https://github.com/PrestaShop/PrestaShop/pull/3558): [-] FO : #PSCSX-5065, backward compat
 * [3560](https://github.com/PrestaShop/PrestaShop/pull/3560): [-] CORE : Fix #PSCSX-6081 add those db field in the definition
 * [3560](https://github.com/PrestaShop/PrestaShop/pull/3560): [-] FO : Fix #PSCSX-5038 split order quantity and state
 * [3561](https://github.com/PrestaShop/PrestaShop/pull/3561): [-] BO : Fix #PSCSX-5407 correct cart summary total
 * [3562](https://github.com/PrestaShop/PrestaShop/pull/3562): [-] CORE : Fix #PSCSX-5629 Meta don't scan override dir to check new front controller
 * [3564](https://github.com/PrestaShop/PrestaShop/pull/3564): [*] BO : Fix #PSCSX-6299, Bo redirect_after on AdminSearch
 * [3565](https://github.com/PrestaShop/PrestaShop/pull/3565): [-] FO : #PSCSX-6341 fix bug when apply cart rule with free shipping
 * [3566](https://github.com/PrestaShop/PrestaShop/pull/3566): [-] FO : Fix #PSCSX-6316, display bug with uniform and selects in left column
 * [3567](https://github.com/PrestaShop/PrestaShop/pull/3567): [-] CORE : Remove non-existent params from comment
 * [3569](https://github.com/PrestaShop/PrestaShop/pull/3569): [-] BO : #PSCSX-6308 refacto order slip PDF generation
 * [3571](https://github.com/PrestaShop/PrestaShop/pull/3571): [-] CORE: Fix #PSCSX-6302, Inserting HTML configuration first time
 * [3572](https://github.com/PrestaShop/PrestaShop/pull/3572): [-] BO : Fix bug #PSCSX-5996, ordering Attributes Groups
 * [3573](https://github.com/PrestaShop/PrestaShop/pull/3573): [-] CORE : Fix #PSCSX-6395, Exception Property StockMvt->id_supply_order is not valid
 * [3574](https://github.com/PrestaShop/PrestaShop/pull/3574): [-] CORE : Correct fatal error with php7
 * [3575](https://github.com/PrestaShop/PrestaShop/pull/3575): [-] Core : Fix #PSCSX-5611 delete advanced stock row when delete product
 * [3576](https://github.com/PrestaShop/PrestaShop/pull/3576): [-] CORE : Fix #PSCSX-5471 don't need to update if continue before
 * [3578](https://github.com/PrestaShop/PrestaShop/pull/3578): [-] FO : Fix #PSCSX-4346 specific price amount tax
 * [3579](https://github.com/PrestaShop/PrestaShop/pull/3579): [-] FO : #PSCSX-6427, link to favorites product in my account with https
 * [3580](https://github.com/PrestaShop/PrestaShop/pull/3580): [-] CORE : Fix #PSCSX-6425, phpdoc on orderSlip
 * [3581](https://github.com/PrestaShop/PrestaShop/pull/3581): [-] CORE :Fix #PSCSX-6420, Notice: : id_country in Country.php
 * [3583](https://github.com/PrestaShop/PrestaShop/pull/3583): [-] BO :again Fix #PSCSX-5821, after filtering products issue with category
 * [3584](https://github.com/PrestaShop/PrestaShop/pull/3584): [-] BO : Fix #PSCSX-6380 , spaces in products' image url when importing
 * [3585](https://github.com/PrestaShop/PrestaShop/pull/3585): [-] BO : #PSCSX-6290 Datetimepicker hidden by header
 * [3586](https://github.com/PrestaShop/PrestaShop/pull/3586): [-] BO: Correct chosen-sprite.png link
 * [3587](https://github.com/PrestaShop/PrestaShop/pull/3587): [*] FO: Better display of carrier logo during order process
 * [3589](https://github.com/PrestaShop/PrestaShop/pull/3589): [-] fix id_employee not set in order_history for first history of the order if made from BO. Next step after PSCSX-6161
 * [3590](https://github.com/PrestaShop/PrestaShop/pull/3590): [-] BO : #PSCSX-5931 type input field 'file' with multiple option to true
 * [3591](https://github.com/PrestaShop/PrestaShop/pull/3591): [-] BO : #PSCSX-5968, unable to add payment choosing specific date
 * [3592](https://github.com/PrestaShop/PrestaShop/pull/3592): [-] BO : Fix #PSCSX-5992, bad display of carriers list
 * [3593](https://github.com/PrestaShop/PrestaShop/pull/3593): [-] FO : Fix #PSCSX-5820, close new acount form
 * [3595](https://github.com/PrestaShop/PrestaShop/pull/3595): // Code cleaning
 * [3597](https://github.com/PrestaShop/PrestaShop/pull/3597): [-] FO : fix #PSCSX-5963, link to home can be in https
 * [3603](https://github.com/PrestaShop/PrestaShop/pull/3603): // [-]: Pscsx 4759 : fix Unit test PHP array() syntax
 * [3601](https://github.com/PrestaShop/PrestaShop/pull/3601): Hotfix readme
 * [3603](https://github.com/PrestaShop/PrestaShop/pull/3603): [-] CORE: Warning on getAvailableCarrierList

The [PrestaShop 1.6.1.1 RC1 changelog](https://www.prestashop.com/en/developers-versions/changelog/1.6.1.1-rc1) is also available.

This release was made possible by the hard work of the PrestaShop Core Team, with the essential help of the following contributors: Alphacom IT Solutions, Bruno Desprez, Conner Burnett, David-Julian BUCH, Eric  Rouvier, Gytis Škema, joseantgv, Julie Vernois, kermes, Kijam Lopez, manuelbcd Mikael Blotin, oleacorner, Pan Ploenes, PrestaEdit, prestamodule, and Quentin MONTANT. Thank gals and guys!

Now, go forth and test! Thank you!
