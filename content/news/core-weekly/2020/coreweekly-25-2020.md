---
layout: post
aliases: ["/news/coreweekly-25-2020"]
title:  "PrestaShop Core Weekly - Week 25 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-06-23
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 15th to Sunday 21th of June 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

PrestaShop eCommerce Week is one week away! Will you join us? This is a 5-day live session program!
Sixty live sessions by experts will cover multiple topics, be it PrestaShop employees or from the PrestaShop community.

You can discover more [if you follow this link](https://events.prestashop.com/prestashop-ecommerce-week).

In the meantime, [feedbacks continue to arrive on GitHub](https://github.com/PrestaShop/PrestaShop/projects/7) about the 1.7.7 beta and more and more bug fixes are merged, which means [Release Candidate 1](https://github.com/PrestaShop/PrestaShop/issues/18647) gets closer and closer to the release date...

## A quick update about PrestaShop's GitHub issues and pull requests:

- [88 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-06-15..2020-06-21) have been created in the project repositories;
- [78 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-06-15..2020-06-21), including [29 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-06-15..2020-06-21) on the core;
- [109 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-06-15..2020-06-21) in the project repositories;
- [125 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-06-15..2020-06-21), including [93 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-06-15..2020-06-21).



## Code changes in the 'develop' branch


### Core
* [#19795](https://github.com/PrestaShop/PrestaShop/pull/19795): Update License Header fix Command, by [@matks](https://github.com/matks)
* [#19710](https://github.com/PrestaShop/PrestaShop/pull/19710): Use target="_blank" instead of class="_blank". Thank you [@PululuK](https://github.com/PululuK)


### Back office
* [#19852](https://github.com/PrestaShop/PrestaShop/pull/19852): Manage UpdateProductTagsCommand in separate command / handler. Thank you [@zuk3975](https://github.com/zuk3975)
* [#19732](https://github.com/PrestaShop/PrestaShop/pull/19732): UpdateProductOptions Command. Thank you [@zuk3975](https://github.com/zuk3975)
* [#19570](https://github.com/PrestaShop/PrestaShop/pull/19570): Better performance for manufacturer's admin query. Thank you [@Skullbock](https://github.com/Skullbock)
* [#19542](https://github.com/PrestaShop/PrestaShop/pull/19542): UpdateProductPricesCommand. Thank you [@zuk3975](https://github.com/zuk3975)
* [#18691](https://github.com/PrestaShop/PrestaShop/pull/18691): Introduce smart price search for Catalog Price rule query builder, by [@matks](https://github.com/matks)


### Front office
* [#19601](https://github.com/PrestaShop/PrestaShop/pull/19601): Only use unit_price_ratio when defined in Product. Thank you [@ksaandev](https://github.com/ksaandev)
* [#19428](https://github.com/PrestaShop/PrestaShop/pull/19428): Add event on toggleOrderButton in order to provide state of checkbox to payment modules, by [@NeOMakinG](https://github.com/NeOMakinG)


### Installer
* [#14402](https://github.com/PrestaShop/PrestaShop/pull/14402): Check table create privilege for InnoDB and MyISAM. Thank you [@crabtree](https://github.com/crabtree)


### Web services
* [#19565](https://github.com/PrestaShop/PrestaShop/pull/19565): Fix webservice id_shop_group parameter. Thank you [@loicsapone](https://github.com/loicsapone)


### Tests
* [#19864](https://github.com/PrestaShop/PrestaShop/pull/19864): Functional tests - Fix email logs selector, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19859](https://github.com/PrestaShop/PrestaShop/pull/19859): Functional tests - Improve grid link add, view and delete, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19851](https://github.com/PrestaShop/PrestaShop/pull/19851): Functional tests - Fix selectors for add order message page, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19840](https://github.com/PrestaShop/PrestaShop/pull/19840): Functional tests - Add id to forms buttons in design page and category, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19836](https://github.com/PrestaShop/PrestaShop/pull/19836): Functional tests - Improve selectors for email theme page, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19835](https://github.com/PrestaShop/PrestaShop/pull/19835): Functional tests - Add ids to forms in payment preferences page, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19823](https://github.com/PrestaShop/PrestaShop/pull/19823): Functional tests - Improve grid header selectors (search and reset), by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19805](https://github.com/PrestaShop/PrestaShop/pull/19805): Functional tests - Add forms ids and fix them for tests, by [@boubkerbribri](https://github.com/boubkerbribri)


### Merge
* [#19804](https://github.com/PrestaShop/PrestaShop/pull/19804): Merge 177 to develop - 16/06/2020, by [@jolelievre](https://github.com/jolelievre)
* [#19755](https://github.com/PrestaShop/PrestaShop/pull/19755): Merge 177 to develop - 15/06/2020, by [@jolelievre](https://github.com/jolelievre)


## Code changes in the '1.7.7.x' branch


### Core
* [#19858](https://github.com/PrestaShop/PrestaShop/pull/19858): Update jquery.live.polyfill npm dependency, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#19782](https://github.com/PrestaShop/PrestaShop/pull/19782): Allow modules to disable routing prefix with specific parameter, by [@matks](https://github.com/matks)
* [#19752](https://github.com/PrestaShop/PrestaShop/pull/19752): Update licenses headers, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#19748](https://github.com/PrestaShop/PrestaShop/pull/19748): Update decimal library, by [@jolelievre](https://github.com/jolelievre)
* [#19657](https://github.com/PrestaShop/PrestaShop/pull/19657): Deprecate hookcount and add missing hook in hook.xml, by [@atomiix](https://github.com/atomiix)
* [#19581](https://github.com/PrestaShop/PrestaShop/pull/19581): Fix bugs occuring when an order state is deleted but still assigned to orders, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#19461](https://github.com/PrestaShop/PrestaShop/pull/19461): Remove MBO-related api calls from core, by [@atomiix](https://github.com/atomiix)


### Back office
* [#19854](https://github.com/PrestaShop/PrestaShop/pull/19854): Add trace information to Command/Query debugger, by [@eternoendless](https://github.com/eternoendless)
* [#19820](https://github.com/PrestaShop/PrestaShop/pull/19820): Hooks displayAdminOrderTabLink or displayAdminOrderTabContent displayed not escaped to allow raw HTML. Thank you [@clotaire202](https://github.com/clotaire202)
* [#19796](https://github.com/PrestaShop/PrestaShop/pull/19796): Missing fancybox plugin in new theme pages, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#19730](https://github.com/PrestaShop/PrestaShop/pull/19730): Enable fancybox for edit an address in View an Order page, by [@matks](https://github.com/matks)
* [#19716](https://github.com/PrestaShop/PrestaShop/pull/19716): Remove i18n access restrictions, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#19712](https://github.com/PrestaShop/PrestaShop/pull/19712): Move smarty variables assignments in initHeader instead of init function, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#19698](https://github.com/PrestaShop/PrestaShop/pull/19698): Fix order view total discounts. Thank you [@zuk3975](https://github.com/zuk3975)
* [#19697](https://github.com/PrestaShop/PrestaShop/pull/19697): Add order sources in Order View page, by [@matks](https://github.com/matks)
* [#19506](https://github.com/PrestaShop/PrestaShop/pull/19506): Handle AbstractGridDefinitionFactory compatibility, by [@matks](https://github.com/matks)


### Installer
* [#19788](https://github.com/PrestaShop/PrestaShop/pull/19788): Allow user to choose to drop existing tables or not even when not in dev mode, by [@Progi1984](https://github.com/Progi1984)
* [#19694](https://github.com/PrestaShop/PrestaShop/pull/19694): Allow user to choose to install demo products or not even when not in dev mode, by [@eternoendless](https://github.com/eternoendless)


### Tests
* [#19802](https://github.com/PrestaShop/PrestaShop/pull/19802): Delete test identifiers redundant and license notice in all tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#19775](https://github.com/PrestaShop/PrestaShop/pull/19775): Functional tests -  Improve delete categories by bulk action ad set required fields function, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19749](https://github.com/PrestaShop/PrestaShop/pull/19749): Functional tests -  Fix wait for navigation and disable category tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19727](https://github.com/PrestaShop/PrestaShop/pull/19727): Functional tests - Update linkchecker for playwright, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.6.x' branch


### Back office
* [#19718](https://github.com/PrestaShop/PrestaShop/pull/19718): Remove i18n access restrictions, by [@PierreRambaud](https://github.com/PierreRambaud)


## Code changes in modules, themes & tools


### Changes in developer documentation
* [#589](https://github.com/PrestaShop/docs/pull/589): Explain _disable_module_prefix option, by [@matks](https://github.com/matks)
* [#588](https://github.com/PrestaShop/docs/pull/588): Add {%/* raw */%}{{%/* children */%}}{%/* endraw */%}
 in Themes > Reference > Templates, by [@matks](https://github.com/matks)
* [#585](https://github.com/PrestaShop/docs/pull/585): Update license headers, by [@jolelievre](https://github.com/jolelievre)
* [#583](https://github.com/PrestaShop/docs/pull/583): Rename "Core Development" to "Core Development Reference", by [@eternoendless](https://github.com/eternoendless)
* [#582](https://github.com/PrestaShop/docs/pull/582): Move webservice into a section of its own, by [@eternoendless](https://github.com/eternoendless)
* [#581](https://github.com/PrestaShop/docs/pull/581): Add children in Modules > Sell section. Thank you [@ksaandev](https://github.com/ksaandev)
* [#580](https://github.com/PrestaShop/docs/pull/580): Move Console Chapter to Core Development > Components, by [@Progi1984](https://github.com/Progi1984)
* [#579](https://github.com/PrestaShop/docs/pull/579): Fix table of contents missing elements, by [@eternoendless](https://github.com/eternoendless)
* [#578](https://github.com/PrestaShop/docs/pull/578): Fix warnings issued during build, by [@eternoendless](https://github.com/eternoendless)
* [#577](https://github.com/PrestaShop/docs/pull/577): Update Hugo to latest (0.72), by [@eternoendless](https://github.com/eternoendless)
* [#576](https://github.com/PrestaShop/docs/pull/576): Add title and children list in theme / reference section. Thank you [@ksaandev](https://github.com/ksaandev)
* [#575](https://github.com/PrestaShop/docs/pull/575): Add children list in themes / distribution section. Thank you [@ksaandev](https://github.com/ksaandev)
* [#574](https://github.com/PrestaShop/docs/pull/574): Add children list to themes section. Thank you [@ksaandev](https://github.com/ksaandev)
* [#572](https://github.com/PrestaShop/docs/pull/572): Update WS doc for group shop parameter, by [@jolelievre](https://github.com/jolelievre)
* [#571](https://github.com/PrestaShop/docs/pull/571): Fix typos, style and strange words. Thank you [@ksaandev](https://github.com/ksaandev)
* [#570](https://github.com/PrestaShop/docs/pull/570): Fix bad link in Theme - distribution - exporting page. Thank you [@ksaandev](https://github.com/ksaandev)
* [#569](https://github.com/PrestaShop/docs/pull/569): Explain module requirements for files, by [@matks](https://github.com/matks)
* [#546](https://github.com/PrestaShop/docs/pull/546): Explain controller decoration, by [@matks](https://github.com/matks)
* [#405](https://github.com/PrestaShop/docs/pull/405): WS documentation: filter & display params. Thank you [@nsorosac](https://github.com/nsorosac)


### Link list
* [#97](https://github.com/PrestaShop/ps_linklist/pull/97): Add prepend-autoloader false, by [@jolelievre](https://github.com/jolelievre)
* [#96](https://github.com/PrestaShop/ps_linklist/pull/96): Revert "Add prepend-autoloader false", by [@jolelievre](https://github.com/jolelievre)
* [#95](https://github.com/PrestaShop/ps_linklist/pull/95): Add prepend-autoloader false, by [@jolelievre](https://github.com/jolelievre)
* [#94](https://github.com/PrestaShop/ps_linklist/pull/94): Fix license headers and use php-dev-tools, by [@matks](https://github.com/matks)


### Wire payment module
* [#56](https://github.com/PrestaShop/ps_wirepayment/pull/56): Fixed dependencies order in autoload, by [@Progi1984](https://github.com/Progi1984)
* [#54](https://github.com/PrestaShop/ps_wirepayment/pull/54): Fix license headers and use php-dev-tools, by [@matks](https://github.com/matks)


### Google Sitemap module
* [#138](https://github.com/PrestaShop/gsitemap/pull/138): Merge master, by [@Progi1984](https://github.com/Progi1984)
* [#135](https://github.com/PrestaShop/gsitemap/pull/135): Update version to 4.2.0 & Some Project Improvements, by [@Progi1984](https://github.com/Progi1984)


### Jquery live-polyfill
* [#2](https://github.com/PrestaShop/jquery.live-polyfill/pull/2): Missing var when it's not used with babel, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#1](https://github.com/PrestaShop/jquery.live-polyfill/pull/1): Fix compatibility with jquery 3, by [@PierreRambaud](https://github.com/PierreRambaud)


### Traces
* [#10](https://github.com/PrestaShop/traces/pull/10): Fix composer.json, add LICENSE and CONTRIBUTORS files, by [@matks](https://github.com/matks)


### Nightly board
* [#36](https://github.com/PrestaShop/nightly-board/pull/36): Adjust some things because of Simon feedbacks, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#35](https://github.com/PrestaShop/nightly-board/pull/35): Fix responsive on homepage, by [@NeOMakinG](https://github.com/NeOMakinG)


### Email subscription module
* [#61](https://github.com/PrestaShop/ps_emailsubscription/pull/61): Release 2.6.0, by [@Progi1984](https://github.com/Progi1984)
* [#60](https://github.com/PrestaShop/ps_emailsubscription/pull/60): Merge branch master into dev, by [@Progi1984](https://github.com/Progi1984)


### Core Weekly Generator tool
* [#39](https://github.com/PrestaShop/core-weekly-generator/pull/39): adding some tool repo to the list, by [@ttoine](https://github.com/ttoine)


### Faceted search module
* [#175](https://github.com/PrestaShop/ps_facetedsearch/pull/175): Fix license headers, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#174](https://github.com/PrestaShop/ps_facetedsearch/pull/174): Remove prettyCI config file. Thank you [@ksaandev](https://github.com/ksaandev)


### OnBoarding module
* [#64](https://github.com/PrestaShop/welcome/pull/64): Fix license headers and use php-dev-tools, by [@matks](https://github.com/matks)


### Shopping cart module
* [#60](https://github.com/PrestaShop/ps_shoppingcart/pull/60): Fix license headers and use php-dev-tools , by [@matks](https://github.com/matks)


### Mail theme module example
* [#7](https://github.com/PrestaShop/example_module_mailtheme/pull/7): Bump websocket-extensions from 0.1.3 to 0.1.4. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Buy button lite
* [#34](https://github.com/PrestaShop/ps_buybuttonlite/pull/34): Bump websocket-extensions from 0.1.3 to 0.1.4 in /app. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#25](https://github.com/PrestaShop/ps_buybuttonlite/pull/25): remove useless statement. Thank you [@MathiasReker](https://github.com/MathiasReker)


### LocalizationFiles
* [#3](https://github.com/PrestaShop/LocalizationFiles/pull/3): Remove conversion rates from localization packs, by [@Progi1984](https://github.com/Progi1984)


### Live translation
* [#7](https://github.com/PrestaShop/ps_livetranslation/pull/7): Release 1.0.4, by [@Progi1984](https://github.com/Progi1984)


### PrestaShop Specifications
* [#120](https://github.com/PrestaShop/prestashop-specs/pull/120): Create basic specification for the translation section, by [@eternoendless](https://github.com/eternoendless)


### Main menu module
* [#27](https://github.com/PrestaShop/ps_mainmenu/pull/27): Take user groups into account when rendering menu. Thank you [@rvalery](https://github.com/rvalery)


### Best sellers module
* [#11](https://github.com/PrestaShop/ps_bestsellers/pull/11): Lossless compression. Thank you [@MathiasReker](https://github.com/MathiasReker)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@matks](https://github.com/matks), [@jolelievre](https://github.com/jolelievre), [@Progi1984](https://github.com/Progi1984), [@PierreRambaud](https://github.com/PierreRambaud), [@boubkerbribri](https://github.com/boubkerbribri), [@eternoendless](https://github.com/eternoendless), [@zuk3975](https://github.com/zuk3975), [@ksaandev](https://github.com/ksaandev), [@clotaire202](https://github.com/clotaire202), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@NeOMakinG](https://github.com/NeOMakinG), [@ttoine](https://github.com/ttoine), [@PululuK](https://github.com/PululuK), [@atomiix](https://github.com/atomiix), [@dependabot[bot]](https://github.com/apps/dependabot), [@matthieu-rolland](https://github.com/matthieu-rolland), [@Skullbock](https://github.com/Skullbock), [@loicsapone](https://github.com/loicsapone), [@nsorosac](https://github.com/nsorosac), [@rvalery](https://github.com/rvalery), [@crabtree](https://github.com/crabtree), [@MathiasReker](https://github.com/MathiasReker)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
