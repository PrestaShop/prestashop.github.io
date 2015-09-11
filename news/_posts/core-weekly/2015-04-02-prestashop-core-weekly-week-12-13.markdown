---
layout: post
title:  "PrestaShop Core Weekly - Week 12 & 13"
subtitle: "An inside look at PrestaShop"
date:   2015-04-02 03:45:00
author:  [ xavierborderie ]
icon: fa-calendar
tags:
 - core-weekly
---

Hello everyone, and welcome back to the weekly... Core Weekly!
Well, this is a special bi-weekly edition, since a lot have happened outside of Core for PrestaShop lately :)
We'll get back to our weekly scheduling for the next Core Weekly.

As always, we try to highlight changes in PrestaShop core codebase last two week, from Monday 16th to Sunday 29th.

The Core Weekly report is ever evolving, so if you have ideas on how to improve it, let me know!

## Milestones

There's been a huge milestone for PrestaShop this week: we moved! It took a few days, but now that we're settling down (with Puff Daddy, our own in-house kitten!), I can finish the Core Weekly quietly :)
Hey, I took a few picture and built an album with them, check it out! [http://imgur.com/a/Glx7d](http://imgur.com/a/Glx7d)

Also, we started a poll on the forum about moving to PSR-2's Coding Style Guide. Let us know you opinion! [https://www.prestashop.com/forums/topic/434831-psr2-development-norm-for-prestashop/](https://www.prestashop.com/forums/topic/434831-psr2-development-norm-for-prestashop/)

## Code changes

Instead of pointing out notable Pull Requests, we are changing the way this section has been presented so far, and list all the PRs from last week, each in its own category, in order to show that all contributions (and contributors!) are important.

As always, click on the PR's number to open its page on GitHub.

#### Code typos

 * [2722](https://github.com/PrestaShop/PrestaShop/pull/2722): Minor concatenation correction. Thank you unlocomqx!
 * [2692](https://github.com/PrestaShop/PrestaShop/pull/2692): Normalization. Thank you PrestaEdit!
 * [2674](https://github.com/PrestaShop/PrestaShop/pull/2674): remove unnecessary variable, by jeromenadaud.
 * [2761](https://github.com/PrestaShop/PrestaShop/pull/2761): Remove unused variable + PHPDOC + norms, by jeromenadaud.

#### Text typos

 * [2719](https://github.com/PrestaShop/PrestaShop/pull/2719): fix [#PSCSX-5083](http://forge.prestashop.com/browse/PSCSX-5083) - correct typo in Russian, by AlexEven.
 * [2670](https://github.com/PrestaShop/PrestaShop/pull/2670): PaymentModule -> missing translation. Thank you indesign47!
 * [2669](https://github.com/PrestaShop/PrestaShop/pull/2669): AdminImagesController -> missing translations. Thank you indesign47!
 * [2751](https://github.com/PrestaShop/PrestaShop/pull/2751): AdminOrderPreferences - typo, by AlexEven.

#### Core

 * [2683](https://github.com/PrestaShop/PrestaShop/pull/2683): Shop Base URL now can use secure mode + Hotfix jquery conflict protocol, by jeromenadaud.
 * [2750](https://github.com/PrestaShop/PrestaShop/pull/2750): Fix warning in the BO, by gRoussac.
 * [2742](https://github.com/PrestaShop/PrestaShop/pull/2742): add the config var like htmlpurifier do, by sfroment42.
 * [2728](https://github.com/PrestaShop/PrestaShop/pull/2728): Fix [#PSCSX-4594](http://forge.prestashop.com/browse/PSCSX-4594) escape { } if purify for mail template, by sfroment42.
 * [2740](https://github.com/PrestaShop/PrestaShop/pull/2740): Rename AdminMeta Robot file hook, by jeromenadaud.

#### Search

 * [2721](https://github.com/PrestaShop/PrestaShop/pull/2721): set proper shop context during search indexing ([#PSCSX-5097](http://forge.prestashop.com/browse/PSCSX-5097)), by jocel1.
 * [2666](https://github.com/PrestaShop/PrestaShop/pull/2666): Fix bug [#PSCSX-5040](http://forge.prestashop.com/browse/PSCSX-5040), could not see availability with tag search, by gRoussac.

#### phpDoc

 * [2720](https://github.com/PrestaShop/PrestaShop/pull/2720): inline docs for local variables. Thank you gskema!
 * [2684](https://github.com/PrestaShop/PrestaShop/pull/2684): Fix undefined PHPDoc types of method and local variables + remove static tag. Thank you gskema!
 * [2772](https://github.com/PrestaShop/PrestaShop/pull/2772): PHPDocs for inline class variables. Thank you gskema!

#### JavaScript

 * [2718](https://github.com/PrestaShop/PrestaShop/pull/2718): Fix [#PSCSX-5103](http://forge.prestashop.com/browse/PSCSX-5103) cat image not resized whitout decription, by gRoussac.
 * [2693](https://github.com/PrestaShop/PrestaShop/pull/2693): Fix bug not showing error in carrier wizard. Thank you bercik999!
 * [2682](https://github.com/PrestaShop/PrestaShop/pull/2682): Fix bug [#PSCSX-5077](http://forge.prestashop.com/browse/PSCSX-5077), Country ISO code js validation, by gRoussac.
 * [2676](https://github.com/PrestaShop/PrestaShop/pull/2676): Back button won't return to previous page. Thank you dkarvounaris!
 * [2725](https://github.com/PrestaShop/PrestaShop/pull/2725): Move js call in AdminAttributeGeneratorController, by jeromenadaud.

#### Currency

 * [2749](https://github.com/PrestaShop/PrestaShop/pull/2749): Fix [#PSCSX-4326](http://forge.prestashop.com/browse/PSCSX-4326), Incorrect prices on product page using reduction amount and more currencies, first part, by gRoussac.
 * [2737](https://github.com/PrestaShop/PrestaShop/pull/2737): [#PSCSX-4326](http://forge.prestashop.com/browse/PSCSX-4326), currency unit to real currency, by gRoussac.
 * [2756](https://github.com/PrestaShop/PrestaShop/pull/2756): Fix [#PSCSX-4326](http://forge.prestashop.com/browse/PSCSX-4326), bad roundings on product page + refacto. Thank you eric-rouvier!
 * [2733](https://github.com/PrestaShop/PrestaShop/pull/2733): Fix NaN on price if ecotax isn't set, by sfroment42.

#### Date

 * [2716](https://github.com/PrestaShop/PrestaShop/pull/2716) and 2717: Exception correction, by gRoussac.

#### Product attributes

 * [2715](https://github.com/PrestaShop/PrestaShop/pull/2715): Fix bug [#PSCSX-4358](http://forge.prestashop.com/browse/PSCSX-4358), could not reorder features and attributes, by gRoussac.

#### Internationalization (i18n)

 * [2714](https://github.com/PrestaShop/PrestaShop/pull/2714): RTL compliance in translated string, by jeromenadaud.
 * [2758](https://github.com/PrestaShop/PrestaShop/pull/2758): Set correct CHF currency format, by jeromenadaud.
 * [2757](https://github.com/PrestaShop/PrestaShop/pull/2757): format currency Switzerland. Thank you webbax!

#### Cart Rules

 * [2713](https://github.com/PrestaShop/PrestaShop/pull/2713): Force currency cast, by jeromenadaud.

#### FrontController

 * [2712](https://github.com/PrestaShop/PrestaShop/pull/2712): Take the ID directly bypassing Currency::getCurrencyInstance(). Thank you PrestaEdit!
 * [2680](https://github.com/PrestaShop/PrestaShop/pull/2680): Fix bug [#PSCSX-4990](http://forge.prestashop.com/browse/PSCSX-4990), inconstancy of PS_DETECT_COUNTRY, by gRoussac.

#### Installer

 * [2708](https://github.com/PrestaShop/PrestaShop/pull/2708): Try to fix Warning: is_dir(): open_basedir restriction in effect, by gRoussac.
 * [2762](https://github.com/PrestaShop/PrestaShop/pull/2762): order_state -> translation of cashondelivery. Thank you indesign47!

#### ObjectModel

 * [2706](https://github.com/PrestaShop/PrestaShop/pull/2706): Fix date_add in multishop, by sfroment42.
 * [2702](https://github.com/PrestaShop/PrestaShop/pull/2702): Fix default_on value update, by jocel1.
 * [2754](https://github.com/PrestaShop/PrestaShop/pull/2754): getFieldsLang should return parent, by jeromenadaud.

#### CSS

 * [2704](https://github.com/PrestaShop/PrestaShop/pull/2704): btn gradient simplification (SASS). Thank you axometeam!
 * [2691](https://github.com/PrestaShop/PrestaShop/pull/2691): layer cart css border radius when screen. Thank you Dvir-Julius!
 * [2667](https://github.com/PrestaShop/PrestaShop/pull/2667): Fix missing $ on product css, by jeromenadaud.
 * [2767](https://github.com/PrestaShop/PrestaShop/pull/2767): Theme simplification: order step gradients. Thank you axometeam!
 * [2763](https://github.com/PrestaShop/PrestaShop/pull/2763): icons.sass to scss. Thank you axometeam!
 * [2743](https://github.com/PrestaShop/PrestaShop/pull/2743): fix sass errors, by jeromenadaud.
 * [2738](https://github.com/PrestaShop/PrestaShop/pull/2738): Missing uniform.default.css.map, by jeromenadaud.
 * [2734](https://github.com/PrestaShop/PrestaShop/pull/2734): fix disappearing radio button when hovering. Thank you Dvir-Julius!
 * [2732](https://github.com/PrestaShop/PrestaShop/pull/2732): theme - useless CSS. Thank you axometeam!

#### Dashboard

 * [2703](https://github.com/PrestaShop/PrestaShop/pull/2703): Avoid cached data on dashboard refresh ([#PSCSX-5092](http://forge.prestashop.com/browse/PSCSX-5092)). Thank you eric-rouvier!

#### PDF

 * [2701](https://github.com/PrestaShop/PrestaShop/pull/2701): Incorrect variable for delivery-slip pdf on mail attachment. Thank you PhpMadman!
 * [2668](https://github.com/PrestaShop/PrestaShop/pull/2668): Fix bug [#PSCSX-5062](http://forge.prestashop.com/browse/PSCSX-5062) Return slip pdf is not possible to download from back-office, by gRoussac.

#### Product categories

 * [2698](https://github.com/PrestaShop/PrestaShop/pull/2698): Fix tree category issue, by jocel1.
 * [2696](https://github.com/PrestaShop/PrestaShop/pull/2696): Fix filter category tree issue, by jocel1.
 * [2689](https://github.com/PrestaShop/PrestaShop/pull/2689): Fix [#PSCSX-5076](http://forge.prestashop.com/browse/PSCSX-5076), wrong positions in category list, by gRoussac.
 * [2679](https://github.com/PrestaShop/PrestaShop/pull/2679): Fix tree category issue, by jocel1.
 * [2678](https://github.com/PrestaShop/PrestaShop/pull/2678): Norms + small refacto, by jeromenadaud.
 * [2671](https://github.com/PrestaShop/PrestaShop/pull/2671): Fix bug [#PSCSX-5065](http://forge.prestashop.com/browse/PSCSX-5065), Wrong picture displayed after click on a color in category, by gRoussac.
 * [2768](https://github.com/PrestaShop/PrestaShop/pull/2768): fix issues with ajax tree loading when creating a new category, by jocel1.

#### Import

 * [2695](https://github.com/PrestaShop/PrestaShop/pull/2695): AdminImportController / Use $vars. Thank you PrestaEdit!
 * [2675](https://github.com/PrestaShop/PrestaShop/pull/2675): Fix [#PSCSX-5006](http://forge.prestashop.com/browse/PSCSX-5006), add forceid to addresses import. Thanks indesign47!

#### Module

 * [2694](https://github.com/PrestaShop/PrestaShop/pull/2694): Bad display of module description in module list, by gRoussac.
 * [2681](https://github.com/PrestaShop/PrestaShop/pull/2681): blockcms / Use dynamic year. Thank you PrestaEdit!
 * [2752](https://github.com/PrestaShop/PrestaShop/pull/2752): Fix selector (missing '#') in blockwishlist. Thank you prestarocket!

#### Tests

 * [2685](https://github.com/PrestaShop/PrestaShop/pull/2685): Travis-ci : run tests on php 5.3, 5.4 , 5.5 and 5.6 - [#PSCSX-5072](http://forge.prestashop.com/browse/PSCSX-5072). Thank you SebSept!
 * [2673](https://github.com/PrestaShop/PrestaShop/pull/2673): renamed xxxExamples() functions to xxxDataProvider(). Thank you SebSept!
 * [2760](https://github.com/PrestaShop/PrestaShop/pull/2760): Fix bug with various environments, by gaillafr.

#### E-mails

 * [2665](https://github.com/PrestaShop/PrestaShop/pull/2665): AdminEmails / FIX [#PSCSX-5000](http://forge.prestashop.com/browse/PSCSX-5000). Thank you PrestaEdit!

#### Webservice

 * [2771](https://github.com/PrestaShop/PrestaShop/pull/2771): Fix undefined function in WebserviceRequest. Thank you gskema!
 * [2730](https://github.com/PrestaShop/PrestaShop/pull/2730): Fix HOSTED-826 : Correct core link fixed on the image webservice, by Shudrum.

#### Hooks

 * [2765](https://github.com/PrestaShop/PrestaShop/pull/2765): Allow AdminLoginController setMedia hook, by jeromenadaud.

#### Images

 * [2748](https://github.com/PrestaShop/PrestaShop/pull/2748): images optim with trimage. Thank you axometeam!

#### Stock

 * [2747](https://github.com/PrestaShop/PrestaShop/pull/2747): Add $id_shop StockAvailable.php. Thank you richardlt!

#### .htaccess & robots.txt

 * [2741](https://github.com/PrestaShop/PrestaShop/pull/2741): IfModule directives changes in upload/.htaccess. Thank you vitekj!
 * [2729](https://github.com/PrestaShop/PrestaShop/pull/2729): New hooks for robots.txt creation. Thank you axometeam, and for the sample module too!

#### Admin

 * [2735](https://github.com/PrestaShop/PrestaShop/pull/2735): Add shop activity on addons link, by jeromenadaud.
 * [2727](https://github.com/PrestaShop/PrestaShop/pull/2727): add preview link in product controller. Thank you axometeam!

#### Groups

 * [2731](https://github.com/PrestaShop/PrestaShop/pull/2731): Fix [#PSCSX-4272](http://forge.prestashop.com/browse/PSCSX-4272) Groups customers list does not filter by shop, by gRoussac.


Thank you to the PrestaShop Core developers for their high-spirit during this very demanding two weeks, and thank you to our awesome contributors for their useful pull requests: gskema, dkarvounaris, Dvir-Julius, cedricfontainte, prestarocket, indesign47 and PrestaEdit... and those whose contributions were not merged, too!

Remember: if you want to contribute to PrestaShop with code, read those:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

That's it for the previous two weeks! We'll be back to a truly weekly report next week. Until then, let me know if I forgot something, or if you have ideas about how to improve the Core Weekly report!

Cheers!
