---
layout: post
title:  "PrestaShop Core Weekly - Weeks 25 & 26"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-06-30 17:37:41
authors:  [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop core codebase during the last two weeks, from Monday 15th to Sunday 28st of June, 2015.


## Milestones

The Core team is putting the final touch on version 1.6.1.0, and the fifth Release Candidate version needs you to test it one last time! [Read all about it here](http://build.prestashop.com/news/prestashop-1.6.1.0-rc5/)! Also, we have a release date: **PrestaShop 1.6.1.0 will be released on July 2nd**. Yes, that's **this Thursday**.

We've also announced that [we plan on dropping support for version 5.2 and 5.3 of PHP](http://build.prestashop.com/news/Dropping-support-php52-and-53/) in the next major version (PrestaShop 1.7), since PrestaShop Cloud now exists for those who do not have a quality host!

Take a dive in the [improved performances of version 1.6.1.0](http://build.prestashop.com/news/prestashop-1-6-1-0-performances/), as well as the [first monthly report about the translation of PrestaShop](http://build.prestashop.com/news/do-you-speak-prestashop-may-2015-edition/)!

As a reminder, we recently chose to [change our Coding Standards to PSR-2](http://build.prestashop.com/news/prestashop-moves-to-psr-2/), and to [adopt a SemVer-like versioning scheme](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/).

Of note among the merged PRs during these last two weeks:

 * In PR 3190, Lead Developer Jérôme Nadaud changed the position of the demo product option.
 * In PR 3178, contributor Jonathan Danse made it possible to use the success, warning and error notification messages in HelperForm calls.
 * In PR 3234, performance specialist Jocelyn Fournier dove into the code for the Cart and made it much faster: first tests indicate that with 75 unique products, loading time is down from 5 seconds to 1.4 seconds! Thanks also to [kpodemski](https://github.com/kpodemski) for helping Jocelyn reach that goal!
 * In PR 3086, Jocelyn implemented a Memcached cache based on the PHP::Memcached API. The code was based on initial works by contributor Raphaël Droz: thanks!
 * In PR 3279, Jérôme added a new option for Retina images in the image generator.


## Code changes

Let's review the merged pull-requests from the previous two weeks!

As always, click on the PR's number to open its page on GitHub.

#### Text changes

 * [3206](https://github.com/PrestaShop/PrestaShop/pull/3206): Fix #PSCSX-5811 #PSCSX-5812 Wording, by [gRoussac](https://github.com/gRoussac).
 * [3215](https://github.com/PrestaShop/PrestaShop/pull/3215): #PSCSX-5898 wording, by [gRoussac](https://github.com/gRoussac).
 * [3248](https://github.com/PrestaShop/PrestaShop/pull/3248): Rewording the Refunded and COD statuses, by [xBorderie](https://github.com/xBorderie).
 * [3233](https://github.com/PrestaShop/PrestaShop/pull/3233): Supplier wording - PSCSX-5263, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3276](https://github.com/PrestaShop/PrestaShop/pull/3276): updated wording, ES install.php, by [AlexEven](https://github.com/AlexEven).

#### Front office

 * [3026](https://github.com/PrestaShop/PrestaShop/pull/3026): call autoAddToCart when removing a voucher. Thank you [oleacorner](https://github.com/oleacorner)!
 * [3185](https://github.com/PrestaShop/PrestaShop/pull/3185): Prevent loop if auth is set to true in FrontController, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3222](https://github.com/PrestaShop/PrestaShop/pull/3222): Fix #PSCSX-5573, could not change HOOK_SHOPPING_CART_EXTRA, by [gRoussac](https://github.com/gRoussac).
 * [3266](https://github.com/PrestaShop/PrestaShop/pull/3266): Fix undefined in the page order. Thank you [Ladel](https://github.com/Ladel)!
 * [3255](https://github.com/PrestaShop/PrestaShop/pull/3255): Add title for Recyclable Packaging. Thank you [panploenes](https://github.com/panploenes)!
 * [3241](https://github.com/PrestaShop/PrestaShop/pull/3241): fancybox for CGV with advanced payment api. Thank you [PrestaEdit](https://github.com/PrestaEdit)!
 * [3237](https://github.com/PrestaShop/PrestaShop/pull/3237): indentation and coding style fixes. Thank you [panploenes](https://github.com/panploenes)!
 * [3227](https://github.com/PrestaShop/PrestaShop/pull/3227): Fix #PSCSX-5573, could not change HOOK_SHOPPING_CART_EXTRA, by [gRoussac](https://github.com/gRoussac).
 * [3270](https://github.com/PrestaShop/PrestaShop/pull/3270): unused if statement. Thank you [panploenes](https://github.com/panploenes)!
 * [3253](https://github.com/PrestaShop/PrestaShop/pull/3253): Fix closing tag in smarty. Thank you [gskema](https://github.com/gskema)!
 * [3254](https://github.com/PrestaShop/PrestaShop/pull/3254): Fix closing tag in smarty. Thank you [gskema](https://github.com/gskema)!
 * [3249](https://github.com/PrestaShop/PrestaShop/pull/3249): Fix input labels in registration form. Thank you [gskema](https://github.com/gskema)!

#### Back office

 * [3190](https://github.com/PrestaShop/PrestaShop/pull/3190): Change demo button position, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3189](https://github.com/PrestaShop/PrestaShop/pull/3189): The design is broken with a width between 767px and 924px. Thank you [arnolem](https://github.com/arnolem)!
 * [3178](https://github.com/PrestaShop/PrestaShop/pull/3178): HelperForm / Add possibilities to show success, warning and error messages. Thank you [PrestaEdit](https://github.com/PrestaEdit)!
 * [3176](https://github.com/PrestaShop/PrestaShop/pull/3176): Render Payment Add button correctly. Thank you [PhpMadman](https://github.com/PhpMadman)!
 * [3170](https://github.com/PrestaShop/PrestaShop/pull/3170): Set customizable product iframe CSS, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3182](https://github.com/PrestaShop/PrestaShop/pull/3182): Fix PSCSX-1856, Labels edition in multishop, by [gRoussac](https://github.com/gRoussac).
 * [3197](https://github.com/PrestaShop/PrestaShop/pull/3197): FixBug #PSCSX-5913 - Wrong column name, by [jeromenadaud](https://github.com/jeromenadaud).
 * [2861](https://github.com/PrestaShop/PrestaShop/pull/2861): Fix bug #PSCSX-5295, verifyMail less strict on extention length, by [gRoussac](https://github.com/gRoussac).
 * [3230](https://github.com/PrestaShop/PrestaShop/pull/3230): FixBug #PSCSX-1996 - Impossible to disable shop url, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3239](https://github.com/PrestaShop/PrestaShop/pull/3239): fix PSCSX-5266 - Wrong customer group design, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3096](https://github.com/PrestaShop/PrestaShop/pull/3096): Fix apcu compatibility, by [jocel1](https://github.com/jocel1).
 * [3265](https://github.com/PrestaShop/PrestaShop/pull/3265): Fix Bug PSCSX-5805 - wrong module title display, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3262](https://github.com/PrestaShop/PrestaShop/pull/3262): Fix Bug PSCSX-5806 - Incorrect Module back button URL, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3245](https://github.com/PrestaShop/PrestaShop/pull/3245): Missing "disabled" attribute in form.tpl for "select" input type (Helpform), by [gRoussac](https://github.com/gRoussac).
 * [3240](https://github.com/PrestaShop/PrestaShop/pull/3240): Fix PSCSX 5919 - JavaScript error with fancy box, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3212](https://github.com/PrestaShop/PrestaShop/pull/3212): order slip pdf generation : now display tax details, by [kelu95](https://github.com/kelu95).
 * [3279](https://github.com/PrestaShop/PrestaShop/pull/3279): Fix bug #PSCSX-5364 - Missing retina option, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3275](https://github.com/PrestaShop/PrestaShop/pull/3275): Fix wrong image resize (PSCSX-5804), by [jocel1](https://github.com/jocel1).
 * [3286](https://github.com/PrestaShop/PrestaShop/pull/3286): fix warning, by [jocel1](https://github.com/jocel1).
 * [3289](https://github.com/PrestaShop/PrestaShop/pull/3289): fix issue with image resize when original is smaller than target, by [jocel1](https://github.com/jocel1).
 * [3277](https://github.com/PrestaShop/PrestaShop/pull/3277): unused if statement. Thank you [PrestaEdit](https://github.com/PrestaEdit)!
 * [3290](https://github.com/PrestaShop/PrestaShop/pull/3290): fix issue with cat creation (PSCSX-5899), by [jocel1](https://github.com/jocel1).

#### Core

 * [3021](https://github.com/PrestaShop/PrestaShop/pull/3021): Cleaning cache of method getCartRules() must also clean the cache of getOrderedCartRulesIds(). Thank you [oleacorner](https://github.com/oleacorner)!
 * [3186](https://github.com/PrestaShop/PrestaShop/pull/3186): Customization / Use correct field. Thank you [PrestaEdit](https://github.com/PrestaEdit)!
 * [3171](https://github.com/PrestaShop/PrestaShop/pull/3171): still working in PS coding style until release date, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3207](https://github.com/PrestaShop/PrestaShop/pull/3207): Fix issue with advancedeucompliance dependencies and Tax label display, by [tchauviere](https://github.com/tchauviere).
 * [3210](https://github.com/PrestaShop/PrestaShop/pull/3210): fix wrong combination price, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3208](https://github.com/PrestaShop/PrestaShop/pull/3208): fix combinaison images, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3205](https://github.com/PrestaShop/PrestaShop/pull/3205): Fix duplicate custimization in carts, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3204](https://github.com/PrestaShop/PrestaShop/pull/3204): Fix combination images, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3164](https://github.com/PrestaShop/PrestaShop/pull/3164): wrong help variable, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3225](https://github.com/PrestaShop/PrestaShop/pull/3225): CMSCategory / Use correct var name (CMS instead of Product). Thank you [PrestaEdit](https://github.com/PrestaEdit)!
 * [3264](https://github.com/PrestaShop/PrestaShop/pull/3264): AdvancedEUCompliance Core Update, by [tchauviere](https://github.com/tchauviere).
 * [3269](https://github.com/PrestaShop/PrestaShop/pull/3269): Fix Bug PSCSX-5960 - Error when sending order email, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3272](https://github.com/PrestaShop/PrestaShop/pull/3272): array_replace_recursive > PHP 5.3, by [gRoussac](https://github.com/gRoussac).
 * [3281](https://github.com/PrestaShop/PrestaShop/pull/3281): Fix bug PSCSX-5952 - HTMLPurifier_Config not loaded, by [jeromenadaud](https://github.com/jeromenadaud).
 * [3250](https://github.com/PrestaShop/PrestaShop/pull/3250): Smarty syntax formatting. Thank you [gskema](https://github.com/gskema)!
 * [3282](https://github.com/PrestaShop/PrestaShop/pull/3282): Fix patterns design sample, by [jeromenadaud](https://github.com/jeromenadaud).

#### CSS

 * [3192](https://github.com/PrestaShop/PrestaShop/pull/3192): Add pointer class to common sass, by [jeromenadaud](https://github.com/jeromenadaud).

#### PDF

 * [3209](https://github.com/PrestaShop/PrestaShop/pull/3209): fix bug when generating Pdf delivery slip, by [kelu95](https://github.com/kelu95).

#### Performances

 * [3234](https://github.com/PrestaShop/PrestaShop/pull/3234): Try to improve cart performances (PSCSX-5943), by [jocel1](https://github.com/jocel1).
 * [3243](https://github.com/PrestaShop/PrestaShop/pull/3243): Add cacheMemcached, by [jocel1](https://github.com/jocel1). Thank you [drzraf](https://github.com/drzraf) for the first pass!

#### Installer

 * [3188](https://github.com/PrestaShop/PrestaShop/pull/3188): Do not steal the administrator email without permission. Thank you [arnolem](https://github.com/arnolem)!
 * [3213](https://github.com/PrestaShop/PrestaShop/pull/3213): Fix install script for the media servers, by [Shudrum](https://github.com/Shudrum).
 * [3214](https://github.com/PrestaShop/PrestaShop/pull/3214): fix #PSCSX-5676 Small css fix, by [gRoussac](https://github.com/gRoussac).
 * [3231](https://github.com/PrestaShop/PrestaShop/pull/3231): Fix upgrade 1.6.1.0.sql crashes, by [Shudrum](https://github.com/Shudrum).

#### Web Service

 * [2381](https://github.com/PrestaShop/PrestaShop/pull/2381): Avoid blank page on webservice authentification fail. Thank you [arnolem](https://github.com/arnolem)!
 * [3025](https://github.com/PrestaShop/PrestaShop/pull/3025): Fixing #PSCSX-5799 => I18n field output when no language is specified in URL. Thank you [gleseur](https://github.com/gleseur)!

#### Localization

 * [3218](https://github.com/PrestaShop/PrestaShop/pull/3218): Fix states node, import failure. Thank you [tucoinfo](https://github.com/tucoinfo)!



See all the PRs merged into the codebase since June the 15th [here](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+merged%3A%3E2015-06-15+is%3Aclosed+sort%3Aupdated&utf8=%E2%9C%93).

Thank you to our contributors whose Pull Requests were merged these two weeks: [arnolem](https://github.com/arnolem), [drzraf](https://github.com/drzraf), [gleseur](https://github.com/gleseur), [gskema](https://github.com/gskema), [Ladel](https://github.com/Ladel), [oleacorner](https://github.com/oleacorner), [panploenes](https://github.com/panploenes), [PhpMadman](https://github.com/PhpMadman), [PrestaEdit](https://github.com/PrestaEdit), and [tucoinfo](https://github.com/tucoinfo). Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, read those:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
