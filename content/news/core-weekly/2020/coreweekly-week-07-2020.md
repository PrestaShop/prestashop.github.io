---
layout: post
aliases: ["/news/coreweekly-week-07-2020"]
title:  "PrestaShop Core Weekly - Week 7 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-02-20
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 10th to Sunday 16th of February 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

Last week our Product Team had a wonderful surprise: they received a notification telling them someone opened a [Pull Request on the Specifications repository](https://github.com/PrestaShop/prestashop-specs/pull/86)! This is the first community contribution since this repository dedicated to centralize all core and module functional specifications has been created. They were delighted to see the community willing to collaborate with us on this huge work.

We offer our very big thanks to [@arouiadib](https://github.com/arouiadib) for his contribution. Obviously we would be very happy to welcome more contributions, so if you feel like doing some Product Owner/Manager work, [feel free to join in](https://github.com/PrestaShop/prestashop-specs/)!


## A quick update about PrestaShop's GitHub issues and pull requests:

- [11 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-02-10..2020-02-16) have been created in the project repositories;
- [58 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-02-10..2020-02-16), including [11 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-02-10..2020-02-16) on the core;
- [56 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-02-10..2020-02-16) in the project repositories;
- [45 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-02-10..2020-02-16), including [33 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-02-10..2020-02-16).


## Code changes in the 'develop' branch


### Core
* [#17616](https://github.com/PrestaShop/PrestaShop/pull/17616): Remove useless assets, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#17589](https://github.com/PrestaShop/PrestaShop/pull/17589): Update Configuration::get phpdoc. Thank you [@zalexki](https://github.com/zalexki)
* [#17088](https://github.com/PrestaShop/PrestaShop/pull/17088): Allow override of Product::cleanPositions() function. Thank you [@jtraulle](https://github.com/jtraulle)


### Back office
* [#17459](https://github.com/PrestaShop/PrestaShop/pull/17459): Adjust zindex header to avoid it behind over the menu on mobile, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#17450](https://github.com/PrestaShop/PrestaShop/pull/17450): Don't loose group access on object model category save(). Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#16543](https://github.com/PrestaShop/PrestaShop/pull/16543): Fixing menu animation to be opened properly, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#16287](https://github.com/PrestaShop/PrestaShop/pull/16287): Don't duplicate currencies in DB when creating a formerly deleted one , by [@matthieu-rolland](https://github.com/matthieu-rolland)


### Front office
* [#17569](https://github.com/PrestaShop/PrestaShop/pull/17569): On virtual product, the delivery time shouldn't display. Thank you [@PeeyushAgrawalWebkul](https://github.com/PeeyushAgrawalWebkul)
* [#17522](https://github.com/PrestaShop/PrestaShop/pull/17522): FIX - Disabled products are visible with wrong token or no token at all. Thank you [@PululuK](https://github.com/PululuK)
* [#17477](https://github.com/PrestaShop/PrestaShop/pull/17477): Register new 1.7.8 hooks into XML and SQL files, by [@matks](https://github.com/matks)
* [#17243](https://github.com/PrestaShop/PrestaShop/pull/17243): Permit submit form button to be outside of a form with a form attribute, by [@NeOMakinG](https://github.com/NeOMakinG)


### Tests
* [#17556](https://github.com/PrestaShop/PrestaShop/pull/17556): Improve Travis config file to avoid green builds if File Syntax fails, by [@matks](https://github.com/matks)


### Merge
* [#17581](https://github.com/PrestaShop/PrestaShop/pull/17581): Merge 1.7.7.x into develop - 10/02/2020, by [@matks](https://github.com/matks)


## Code changes in the '1.7.7.x' branch (for v1.7.7.0)


### Core
* [#17579](https://github.com/PrestaShop/PrestaShop/pull/17579): Update license headers 2020 , by [@PierreRambaud](https://github.com/PierreRambaud)
* [#17149](https://github.com/PrestaShop/PrestaShop/pull/17149): Cancel product, by [@matthieu-rolland](https://github.com/matthieu-rolland)


### Back office
* [#17649](https://github.com/PrestaShop/PrestaShop/pull/17649): Fix wrong address edit link in order detail, by [@atomiix](https://github.com/atomiix)
* [#17614](https://github.com/PrestaShop/PrestaShop/pull/17614): Missing assets generation, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#17612](https://github.com/PrestaShop/PrestaShop/pull/17612): Fixed Empty Option in Smarty Form in Advanced Parameters > Performance, by [@Progi1984](https://github.com/Progi1984)
* [#17583](https://github.com/PrestaShop/PrestaShop/pull/17583): Migration 1.7.7.x Register all new hooks. Thank you [@tdavidsonas88](https://github.com/tdavidsonas88)


### Installer
* [#17642](https://github.com/PrestaShop/PrestaShop/pull/17642): Fix SQL request for order detail, by [@jolelievre](https://github.com/jolelievre)


### Tests
* [#17652](https://github.com/PrestaShop/PrestaShop/pull/17652): Functional tests - Fix monitoring test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#17643](https://github.com/PrestaShop/PrestaShop/pull/17643): CS fix, by [@jolelievre](https://github.com/jolelievre)
* [#17624](https://github.com/PrestaShop/PrestaShop/pull/17624): Functional tests - Product settings enable/disable force update friendly url. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#17620](https://github.com/PrestaShop/PrestaShop/pull/17620): Functional tests - 02_orders/ Reduce legal free text length to 10 characters. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#17566](https://github.com/PrestaShop/PrestaShop/pull/17566): Functional tests -  CRUD web service key. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#17555](https://github.com/PrestaShop/PrestaShop/pull/17555): Functional tests - Product settings max size short description. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.6.x' branch (for v1.7.6.4)


### Core
* [#17433](https://github.com/PrestaShop/PrestaShop/pull/17433): Do not escape translations when using the legacy translator from the new one, by [@Progi1984](https://github.com/Progi1984)


### Front office
* [#17608](https://github.com/PrestaShop/PrestaShop/pull/17608): Email subject doesn't support html entities, by [@Progi1984](https://github.com/Progi1984)


## Code changes in modules, themes & tools


### TranslationTools Bundle
* [#73](https://github.com/PrestaShop/TranslationToolsBundle/pull/73): Bump symfony/var-exporter from 4.2.8 to 4.4.4. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Changes in developer documentation
* [#454](https://github.com/PrestaShop/docs/pull/454): Fix formatting .`tpl` -> `.tpl`. Thank you [@DrevanTonder](https://github.com/DrevanTonder)


### Customer Account Links module
* [#20](https://github.com/PrestaShop/ps_customeraccountlinks/pull/20): Fix call to undefined function. Thank you [@davidglezz](https://github.com/davidglezz)


### Reminder module
* [#4](https://github.com/PrestaShop/ps_reminder/pull/4): BO: Fix url made for cron job. Thank you [@kim-nani](https://github.com/kim-nani)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@atomiix](https://github.com/atomiix), [@jolelievre](https://github.com/jolelievre), [@arouiadib](https://github.com/arouiadib), [@dependabot[bot]](https://github.com/apps/dependabot), [@PierreRambaud](https://github.com/PierreRambaud), [@Progi1984](https://github.com/Progi1984), [@DrevanTonder](https://github.com/DrevanTonder), [@zalexki](https://github.com/zalexki), [@tdavidsonas88](https://github.com/tdavidsonas88), [@matks](https://github.com/matks), [@PeeyushAgrawalWebkul](https://github.com/PeeyushAgrawalWebkul), [@PululuK](https://github.com/PululuK), [@NeOMakinG](https://github.com/NeOMakinG), [@jf-viguier](https://github.com/jf-viguier), [@matthieu-rolland](https://github.com/matthieu-rolland), [@jtraulle](https://github.com/jtraulle), [@davidglezz](https://github.com/davidglezz), [@kim-nani](https://github.com/kim-nani)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
