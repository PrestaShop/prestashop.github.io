---
layout: post
aliases: ["/news/core-weekly-32-33-34"]
title:  "PrestaShop Core Weekly - Weeks 32 & 33 & 34 of 2015"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-08-28 11:00:41
authors:  [ xavierborderie ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop core codebase during the last three weeks, from Monday 3rd of August to Sunday 23rd.


## Milestones

We just released [version 1.6.1.1 of PrestaShop](http://build.prestashop.com/news/1611-maintenance-release/)! It's the first [patch version](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/) of branch 1.6.1.x, meaning that it only contains fixes and improvements, without any new feature. It is therefore a very safe upgrade from version 1.6.1.0.

Now that 1.6.1.1 is out, a month or so after 1.6.1.0, it is high time for your language to reach 100% on the project's [translation project on Crowdin](https://crowdin.com/project/prestashop-official)! Indeed, in her monthly "Do you speak PrestaShop" report, Alexandra reported that only 11 languages are at 100% for version 1.6.1.0. 6 were "almost there" (98-99% validated: Indonesian, Lithuanian, Norwegian, Portuguese, Portuguese BR, and Spanish). We'd also like to see someone take car of the Klingon or the  Pirate English translation :)

Want to contribute your code skills to the PrestaShop project? [Make sure your Git setup is correctly configured](http://build.prestashop.com/howtos/misc/set-up-your-git-for-contributing/), and that you follow our [new branching model](http://build.prestashop.com/news/introducing-new-branching-model-prestashop/)!

Of note among the merged PRs since the last Core Weekly Report:

 * In PR 3570, Core developer gRoussac added two new module categories: "Customer Reviews" and "Social & Community".
 * In PR 3537, Core developer gRoussac added "Recommended modules" on Localization Tab.
 * In PR 3500, Core developer xGouley put a new project in place, using the forthcoming architecture: decrease stocks of a pack or its sub products in specific cases.
 * In PR 3722, Core developer gaillafr removed the use of safe_mode & deprecated our own Tools::getSafeModeStatus() -- since [the next major release will target PHP 5.4](http://build.prestashop.com/news/Dropping-support-php52-and-53/) where [this method has been removed](http://php.net/manual/en/ini.sect.safe-mode.php).
 * In PR 3724, Core developer gaillafr removed references to get_magic_quotes_gpc() -- since [the next major release will target PHP 5.4](http://build.prestashop.com/news/Dropping-support-php52-and-53/) where [this method has been removed](http://php.net/manual/en/security.globals.php).
 * In PR 3724, Core developer gaillafr removed references to register_globals() -- since [the next major release will target PHP 5.4](http://build.prestashop.com/news/Dropping-support-php52-and-53/) where [this method always returns false](http://php.net/manual/en/function.get-magic-quotes-gpc.php).
 * In PR 3719, Core developer gaillafr deprecated Tools::jsonEncode/jsonDecode in favor of [PHP's native JSON functions](http://php.net/manual/en/ref.json.php).
 * In PR 3704, Core developer gaillafr some functions that were deprecatd since PrestaShop 1.5. [Check them out](https://github.com/PrestaShop/PrestaShop/pull/3704/files)!
 * In PR 3727, contributor Eolia made it possible to have a default value in Configuration::get().



## Code changes

Let's review the merged pull-requests on the various branches of the project (develop, 1.6.1.x, etc.) since the last Core Weekly Report!

As always, click on the PR's number to open its page on GitHub.


#### Text changes

 * [3731](https://github.com/PrestaShop/PrestaShop/pull/3731): wording for gross margin KPIs, by AlexEven.
 * [3759](https://github.com/PrestaShop/PrestaShop/pull/3759): "root" folder, by xBorderie.
 * [3770](https://github.com/PrestaShop/PrestaShop/pull/3770): Fix phpDoc typo, by xBorderie.


#### Front office

 * [3566](https://github.com/PrestaShop/PrestaShop/pull/3566): Fixed display bug with uniform and selects in left column, by gRoussac.
 * [3560](https://github.com/PrestaShop/PrestaShop/pull/3560): split order quantity and state, by sfroment42.
 * [3558](https://github.com/PrestaShop/PrestaShop/pull/3558): backward compat, by gRoussac.
 * [3587](https://github.com/PrestaShop/PrestaShop/pull/3587): Better display of carrier logo during order process, by tchauviere.
 * [3554](https://github.com/PrestaShop/PrestaShop/pull/3554): Fixed "Free shipping" for virtual products, undefined $virtualCart, by gRoussac.
 * [3553](https://github.com/PrestaShop/PrestaShop/pull/3553): auth error if $back is not defined. Thank you kermes!
 * [3593](https://github.com/PrestaShop/PrestaShop/pull/3593): close new acount form, by gRoussac.
 * [3578](https://github.com/PrestaShop/PrestaShop/pull/3578): Fix specific price amount tax, by sfroment42.
 * [3597](https://github.com/PrestaShop/PrestaShop/pull/3597): link to home can be in https, by gRoussac.
 * [3579](https://github.com/PrestaShop/PrestaShop/pull/3579): link to favorites product in my account with https, by gRoussac.
 * [3565](https://github.com/PrestaShop/PrestaShop/pull/3565): fix bug when apply cart rule with free shipping, by kelu95.
 * [3604](https://github.com/PrestaShop/PrestaShop/pull/3604): bad free shipping display when carrier out of range, by gRoussac.
 * [3626](https://github.com/PrestaShop/PrestaShop/pull/3626): Fix missing cart rule lines in shopping cart, by jeromenadaud.
 * [3631](https://github.com/PrestaShop/PrestaShop/pull/3631): wrong padding for list in table, by jeromenadaud.
 * [3635](https://github.com/PrestaShop/PrestaShop/pull/3635): Fix cover image issues, by jocel1.
 * [3645](https://github.com/PrestaShop/PrestaShop/pull/3645): Fix temp table on slave issue, by jocel1.
 * [3666](https://github.com/PrestaShop/PrestaShop/pull/3666): Remove useless parenthesis, by maximebiloe.
 * [3681](https://github.com/PrestaShop/PrestaShop/pull/3681): Wrong product availability text on Price drop page, by gRoussac.
 * [3685](https://github.com/PrestaShop/PrestaShop/pull/3685): could have live edit with defer JS + missing closing tags + additionnal js loading in ajax, by gRoussac.
 * [3676](https://github.com/PrestaShop/PrestaShop/pull/3676): undefined var + could not add to cart without block cart top hooked, by gRoussac.
 * [3678](https://github.com/PrestaShop/PrestaShop/pull/3678): Fix bug #NM-579 Signing in does not change status in the top navbar, by gRoussac.
 * [3675](https://github.com/PrestaShop/PrestaShop/pull/3675): emove leftColumnBlocks var declaration in global.js; this var is not used. Thank you prestamodule!
 * [3670](https://github.com/PrestaShop/PrestaShop/pull/3670): no cart-summary.js on step 0 with minimum order error, by gRoussac.
 * [3656](https://github.com/PrestaShop/PrestaShop/pull/3656): add colors to product list before the hook "actionProductListModifier". Thank you prestamodule!
 * [3674](https://github.com/PrestaShop/PrestaShop/pull/3674): Productcomments and new global.js stars are not display correctly. Thank you prestamodule!
 * [3667](https://github.com/PrestaShop/PrestaShop/pull/3667): search missing lowercase chars, by gRoussac.
 * [3640](https://github.com/PrestaShop/PrestaShop/pull/3640): Can not see addresses when already registred as guest in OPC & bad display of one_phone_at_least in OPC, by gRoussac.
 * [3721](https://github.com/PrestaShop/PrestaShop/pull/3721): Add data-id-product & data-id-product-attribute to product-list.tpl. Thank you prestamodule!
 * [3720](https://github.com/PrestaShop/PrestaShop/pull/3720): Allow custom CSS classes from actionProductListModifier / actionProductListOverride hooks. Thank you prestamodule!
 * [3669](https://github.com/PrestaShop/PrestaShop/pull/3669): Fix bug while specific price start to 1 quantity and initial price to 0, by kelu95.
 * [3642](https://github.com/PrestaShop/PrestaShop/pull/3642): disable button on click on payment_execution, by gRoussac.
 * [3761](https://github.com/PrestaShop/PrestaShop/pull/3761): could not change currency with PS_DETECT_COUNTRY, by gRoussac.
 * [3771](https://github.com/PrestaShop/PrestaShop/pull/3771): Search alias for words containing hyphens fail, by gRoussac.
 * [3774](https://github.com/PrestaShop/PrestaShop/pull/3774): 404 on images on small screens, by gRoussac.



#### Back office

 * [3570](https://github.com/PrestaShop/PrestaShop/pull/3570): new module categories "Customer Reviews" and "Social & Community", by gRoussac.
 * [3564](https://github.com/PrestaShop/PrestaShop/pull/3564): BO redirect_after on AdminSearch, by gRoussac.
 * [3563](https://github.com/PrestaShop/PrestaShop/pull/3563): Fix KPI refresh functions. Thank you connemb!
 * [3561](https://github.com/PrestaShop/PrestaShop/pull/3561): correct cart summary total, by sfroment42.
 * [3537](https://github.com/PrestaShop/PrestaShop/pull/3537): Added "Recommended modules" on Localization Tab, by gRoussac.
 * [3533](https://github.com/PrestaShop/PrestaShop/pull/3533): unable to see quantity for user of vouchers related to customer, by gRoussac.
 * [3585](https://github.com/PrestaShop/PrestaShop/pull/3585): Datetimepicker hidden by header, by maximebiloe.
 * [3549](https://github.com/PrestaShop/PrestaShop/pull/3549): Could not export default theme in dev mode because of .sass-cache, by gRoussac.
 * [3586](https://github.com/PrestaShop/PrestaShop/pull/3586): Correct chosen-sprite.png link. Thank you prestamodule!
 * [3590](https://github.com/PrestaShop/PrestaShop/pull/3590): type input field 'file' with multiple option to true, by gRoussac.
 * [3591](https://github.com/PrestaShop/PrestaShop/pull/3591): unable to add payment choosing specific date, by gRoussac.
 * [3592](https://github.com/PrestaShop/PrestaShop/pull/3592): bad display of carriers list, by gRoussac.
 * [3589](https://github.com/PrestaShop/PrestaShop/pull/3589): fix id_employee not set in order_history for first history of the order if made from BO, by xGouley.
 * [3584](https://github.com/PrestaShop/PrestaShop/pull/3584): spaces in products' image url when importing, by gRoussac.
 * [3583](https://github.com/PrestaShop/PrestaShop/pull/3583): after filtering products issue with category, by gRoussac.
 * [3527](https://github.com/PrestaShop/PrestaShop/pull/3527): Fix timeout on customer modules list, by Quetzacoalt91.
 * [3610](https://github.com/PrestaShop/PrestaShop/pull/3610): "Maintenance Mode" disappears in Modules page. Thank you prestamodule!
 * [3611](https://github.com/PrestaShop/PrestaShop/pull/3611): badges in quickview modal. Thank you prestamodule!
 * [3618](https://github.com/PrestaShop/PrestaShop/pull/3618): Import duplicates parent categories, by maximebiloe.
 * [3620](https://github.com/PrestaShop/PrestaShop/pull/3620): fix filter home category display, by jeromenadaud.
 * [3619](https://github.com/PrestaShop/PrestaShop/pull/3619): Fix filters errors, by jeromenadaud.
 * [3615](https://github.com/PrestaShop/PrestaShop/pull/3615): Remove unnecessary filter on attachment file, by jeromenadaud.
 * [3614](https://github.com/PrestaShop/PrestaShop/pull/3614): Set file as required in attachment form, by jeromenadaud.
 * [3624](https://github.com/PrestaShop/PrestaShop/pull/3624): remove ability to order position while filtering, by jeromenadaud.
 * [3634](https://github.com/PrestaShop/PrestaShop/pull/3634): KPI not loaded, by gRoussac.
 * [3633](https://github.com/PrestaShop/PrestaShop/pull/3633): small css fix, by gRoussac.
 * [3650](https://github.com/PrestaShop/PrestaShop/pull/3650): currency input in orders, by gRoussac.
 * [3663](https://github.com/PrestaShop/PrestaShop/pull/3663): Remove version under the employee drop down, by Shudrum.
 * [3682](https://github.com/PrestaShop/PrestaShop/pull/3682): wording, by AlexEven.
 * [3653](https://github.com/PrestaShop/PrestaShop/pull/3653): bad display of inputs in orders, by gRoussac.
 * [3664](https://github.com/PrestaShop/PrestaShop/pull/3664): Fix placeholder clear event in AdminCustomerThreadsController. Thank you gskema!
 * [3677](https://github.com/PrestaShop/PrestaShop/pull/3677): Product import, each image downloaded twice, by xGouley.
 * [3713](https://github.com/PrestaShop/PrestaShop/pull/3713): Replace return icon with Font Awesome. Thank you firstred!
 * [3718](https://github.com/PrestaShop/PrestaShop/pull/3718): modules new categories "Customer Reviews" and "Social & Community", by gRoussac.
 * [3702](https://github.com/PrestaShop/PrestaShop/pull/3702): install source feedback clicking "Install" module, by xGouley.
 * [3741](https://github.com/PrestaShop/PrestaShop/pull/3741): Fix issue with multiple trees loaded on the same page, by jocel1.
 * [3742](https://github.com/PrestaShop/PrestaShop/pull/3742): Fix memcached test, by jocel1.
 * [3740](https://github.com/PrestaShop/PrestaShop/pull/3740): Fix PHP error on KPIConfiguration, by kelu95.
 * [3733](https://github.com/PrestaShop/PrestaShop/pull/3733): Control the multi-front optimizations in the BO, by jocel1.
 * [3531](https://github.com/PrestaShop/PrestaShop/pull/3531): Fix Ajax load of product KPI tooltips, by maximebiloe.
 * [3536](https://github.com/PrestaShop/PrestaShop/pull/3536): change "read more" behavior, by sfroment42.
 * [3709](https://github.com/PrestaShop/PrestaShop/pull/3709): Hightlight default combination into Product Quantities tab. Thank you prestamodule!
 * [3762](https://github.com/PrestaShop/PrestaShop/pull/3762): Fix notice, by gRoussac.
 * [3756](https://github.com/PrestaShop/PrestaShop/pull/3756): Fix product import dates. Thank you gskema!


#### Core

 * [3571](https://github.com/PrestaShop/PrestaShop/pull/3571): Inserting HTML configuration first time. Thank you gskema!
 * [3568](https://github.com/PrestaShop/PrestaShop/pull/3568): Remove non-existent params from comment. Thank you julvernois!
 * [3562](https://github.com/PrestaShop/PrestaShop/pull/3562): Meta don't scan override dir to check new front controller, by sfroment42.
 * [3559](https://github.com/PrestaShop/PrestaShop/pull/3559): add db fields in the definition, by sfroment42.
 * [3594](https://github.com/PrestaShop/PrestaShop/pull/3594): Fix parse error, by jeromenadaud.
 * [3500](https://github.com/PrestaShop/PrestaShop/pull/3500): decrease stocks of a pack or its sub products in specific cases, by xGouley.
 * [3595](https://github.com/PrestaShop/PrestaShop/pull/3595): Code cleaning in AdminCmsContentController.php, by jeromenadaud.
 * [3581](https://github.com/PrestaShop/PrestaShop/pull/3581): Notice: id_country in Country.php, by gRoussac.
 * [3580](https://github.com/PrestaShop/PrestaShop/pull/3580): phpdoc on orderSlip, by gRoussac.
 * [3576](https://github.com/PrestaShop/PrestaShop/pull/3576): don't need to update if continue before, by sfroment42.
 * [3573](https://github.com/PrestaShop/PrestaShop/pull/3573): Exception Property StockMvt->id_supply_order is not valid, by gRoussac.
 * [3602](https://github.com/PrestaShop/PrestaShop/pull/3602): fix Unit test PHP array() syntax, by xGouley.
 * [3603](https://github.com/PrestaShop/PrestaShop/pull/3603): Warning on getAvailableCarrierList, by jeromenadaud.
 * [3617](https://github.com/PrestaShop/PrestaShop/pull/3617): Fix namespace usage in new Core Stock management for PHP 5.2 until v1.7
 * [3599](https://github.com/PrestaShop/PrestaShop/pull/3599): Customer getLastCart return condition. Thank you fkwakkenbos!
 * [3625](https://github.com/PrestaShop/PrestaShop/pull/3625): Partial refund: take "," into account for decimals, by xGouley.
 * [3628](https://github.com/PrestaShop/PrestaShop/pull/3628): wrong currency on partial voucher using a different currency in an order, by gRoussac.
 * [3555](https://github.com/PrestaShop/PrestaShop/pull/3555): added refresh option to KPI rows. Thank you connemb!
 * [3647](https://github.com/PrestaShop/PrestaShop/pull/3647) & [3648](https://github.com/PrestaShop/PrestaShop/pull/3648): Unable to translate header. Thank you Eolia!
 * [3641](https://github.com/PrestaShop/PrestaShop/pull/3641): module override with explicit dependencies in Adapter_ServiceLocator, by tchauviere.
 * [3679](https://github.com/PrestaShop/PrestaShop/pull/3679): Avoid a division by zero that produces warning, by tchauviere.
 * [3687](https://github.com/PrestaShop/PrestaShop/pull/3687): Add exceptions to gitignore file, by xGouley.
 * [3703](https://github.com/PrestaShop/PrestaShop/pull/3703): itignore rules to ignore more mails template changes, by xGouley.
 * [3690](https://github.com/PrestaShop/PrestaShop/pull/3690): Add actions hooks when customer logs in / out, by gaillafr.
 * [3654](https://github.com/PrestaShop/PrestaShop/pull/3654): atal error on PrestaShopCollection::getAll, by gRoussac.
 * [3707](https://github.com/PrestaShop/PrestaShop/pull/3707): typo in replaceAccentedChars for letter B, by gRoussac.
 * [3671](https://github.com/PrestaShop/PrestaShop/pull/3671): actionCategoryDelete on all sub tree, by gRoussac.
 * [3714](https://github.com/PrestaShop/PrestaShop/pull/3714): adding id_cart to id_product_2 key in specific_price, by gRoussac.
 * [3724](https://github.com/PrestaShop/PrestaShop/pull/3724): register_globals() has been deleted in PHP 5.4, by gaillafr.
 * [3723](https://github.com/PrestaShop/PrestaShop/pull/3723): since PHP 5.4, get_magic_quotes_gpc() always return false, by gaillafr.
 * [3722](https://github.com/PrestaShop/PrestaShop/pull/3722): remove use of safe_mode & deprecate Tools::getSafeModeStatus(), by gaillafr.
 * [3715](https://github.com/PrestaShop/PrestaShop/pull/3715): notices, by gRoussac.
 * [3719](https://github.com/PrestaShop/PrestaShop/pull/3719): deprecate use of Tools::jsonEncode/jsonDecode instead of natives functions, by gaillafr.
 * [3704](https://github.com/PrestaShop/PrestaShop/pull/3704): remove some deprecated functions, by gaillafr.
 * [3691](https://github.com/PrestaShop/PrestaShop/pull/3691): Update action hooks names to match the correct behavior, by gaillafr.
 * [3727](https://github.com/PrestaShop/PrestaShop/pull/3727): Allows default value in Configuration::get(). Thank you Eolia!
 * [3749](https://github.com/PrestaShop/PrestaShop/pull/3749): Product / Remove unnecessary if statement. Thank you prestamodule!
 * [3758](https://github.com/PrestaShop/PrestaShop/pull/3758): could not load bootstrap-sortable.js with Chrome, by gRoussac.
 * [3755](https://github.com/PrestaShop/PrestaShop/pull/3755): Fix issue with cover image, by jocel1.



#### Webservice

 * [3688](https://github.com/PrestaShop/PrestaShop/pull/3688): Fix current_state not filterable on Orders, by xGouley.


#### PDF

 * [3535](https://github.com/PrestaShop/PrestaShop/pull/3535): smarty warning for Order slip, by xGouley.
 * [3569](https://github.com/PrestaShop/PrestaShop/pull/3569): refacto order slip PDF generation, by kelu95.
 * [3616](https://github.com/PrestaShop/PrestaShop/pull/3616): Fix shop_address missing in old order_invoice outside of upgrade process, by xGouley.
 * [3662](https://github.com/PrestaShop/PrestaShop/pull/3662): EN to dejavusans, by gRoussac.
 * [3689](https://github.com/PrestaShop/PrestaShop/pull/3689): Added page number and page count in footer, by xGouley.
 * [3736](https://github.com/PrestaShop/PrestaShop/pull/3736): Order slip Tax detail computation fix, by xGouley.

#### Modules

 * [3744](https://github.com/PrestaShop/PrestaShop/pull/3744): no h2 in blockcart, by gRoussac.
 * [3746](https://github.com/PrestaShop/PrestaShop/pull/3746): undefined var in blocklayered, by gRoussac.


#### Importer/Exporter

 * [3621](https://github.com/PrestaShop/PrestaShop/pull/3621): fix default category update with first one, by xGouley.
 * [3728](https://github.com/PrestaShop/PrestaShop/pull/3728): use CSV native PHP function to export data, not Smarty!, by xGouley.


#### Installer

 * [3608](https://github.com/PrestaShop/PrestaShop/pull/3608): Remove buggy script for upgrade process, by xGouley.
 * [3652](https://github.com/PrestaShop/PrestaShop/pull/3652): Convert & to HTML entities, by julienbourdeau.
 * [3686](https://github.com/PrestaShop/PrestaShop/pull/3686): correct Swedish flag, by AlexEven.
 * [3717](https://github.com/PrestaShop/PrestaShop/pull/3717): improve language pack installation, by gaillafr.

#### Tests

 * [3623](https://github.com/PrestaShop/PrestaShop/pull/3623): Clear hook_alias cache, by jeromenadaud.
 * [3757](https://github.com/PrestaShop/PrestaShop/pull/3757): Remove PHP 5.3 from travis unit tests, by jeromenadaud.

#### Localization

 * [3627](https://github.com/PrestaShop/PrestaShop/pull/3627): add tabs translations in several languages, by AlexEven.
 * [3706](https://github.com/PrestaShop/PrestaShop/pull/3706): updated ES tab translation, by AlexEven.
 * [3708](https://github.com/PrestaShop/PrestaShop/pull/3708): fix translation for ES tabs, by AlexEven.
 * [3712](https://github.com/PrestaShop/PrestaShop/pull/3712): Change invoice + delivery slip prefixes. Thank you firstred!
 * [3700](https://github.com/PrestaShop/PrestaShop/pull/3700): Language id added. Thank you Pronux!



See all the PRs merged into the codebase since August 3rd [here](https://github.com/PrestaShop/PrestaShop/pulls?page=1&q=is%3Apr+merged%3A%3E2015-08-03+is%3Aclosed+sort%3Aupdated&utf8=%E2%9C%93).

Thank you to our contributors whose Pull Requests were merged since the last Core Weekly Report: [connemb](https://github.com/connemb), [Eolia](https://github.com/Eolia), [firstred](https://github.com/firstred), [fkwakkenbos](https://github.com/fkwakkenbos), [gskema](https://github.com/gskema), [julvernois](https://github.com/julvernois), [kermes](https://github.com/kermes), [prestamodule](https://github.com/prestamodule), and [Pronux](https://github.com/Pronux)! Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, read those:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
