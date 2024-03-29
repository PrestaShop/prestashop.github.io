---
layout: post
aliases: ["/news/coreweekly-week-41-2019"]
title:  "PrestaShop Core Weekly - Week 41 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-11-05 15:50:00
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 07th to Sunday 13th of October 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [55 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-10-07..2019-10-13) have been created in the project repositories;
- [58 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-10-07..2019-10-13), including [16 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-10-07..2019-10-13) on the core;
- [51 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-10-07..2019-10-13) in the project repositories;
- [66 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-10-07..2019-10-13), including [55 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-10-07..2019-10-13).
        

## Code changes in the 'develop' branch

### Core

* [#14970](https://github.com/PrestaShop/PrestaShop/pull/14970): Migration of Order message page. Thank you [@sarjon](https://github.com/sarjon)

### Back office

* [#15814](https://github.com/PrestaShop/PrestaShop/pull/15814): Implement cart information providing in BO order creation page - part 1. Thank you [@zuk3975](https://github.com/zuk3975)
* [#15808](https://github.com/PrestaShop/PrestaShop/pull/15808): Introduces icons instead of dropdown column for Orders page list. Thank you [@tomas862](https://github.com/tomas862)
* [#15514](https://github.com/PrestaShop/PrestaShop/pull/15514): Add condition to avoid duplicate invoice line.. Thank you [@FlorentinGarnier](https://github.com/FlorentinGarnier)
* [#15245](https://github.com/PrestaShop/PrestaShop/pull/15245): Update jQuery to 3.4.1 in the legacy Back Office pages, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#15084](https://github.com/PrestaShop/PrestaShop/pull/15084): Remove price precision in admin shop preferences , by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#14864](https://github.com/PrestaShop/PrestaShop/pull/14864): Files list migration. Thank you [@RaimondasSapola](https://github.com/RaimondasSapola)
* [#14040](https://github.com/PrestaShop/PrestaShop/pull/14040): Migrate Sell > Catalog > Attributes & Features > Attributes list. Thank you [@zuk3975](https://github.com/zuk3975)

### Front office

* [#15916](https://github.com/PrestaShop/PrestaShop/pull/15916): Set emailsubscription input required. Thank you [@davidglezz](https://github.com/davidglezz)
* [#15851](https://github.com/PrestaShop/PrestaShop/pull/15851): Fixed missing translation for tax label. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)
* [#15840](https://github.com/PrestaShop/PrestaShop/pull/15840): do not apply htmlentities before insterting message in db, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#15799](https://github.com/PrestaShop/PrestaShop/pull/15799): Fix The Association of payment methods with delivery module. Thank you [@Seleda](https://github.com/Seleda)
* [#15706](https://github.com/PrestaShop/PrestaShop/pull/15706): Wrong combinaison reference in customer account order history. Thank you [@PululuK](https://github.com/PululuK)
* [#15623](https://github.com/PrestaShop/PrestaShop/pull/15623): Do not allow to put item in cart if available quantity is 0, by [@matks](https://github.com/matks)
* [#15501](https://github.com/PrestaShop/PrestaShop/pull/15501): Updated blockReassurance in composer.json, by [@Progi1984](https://github.com/Progi1984)

### Installer

* [#15888](https://github.com/PrestaShop/PrestaShop/pull/15888): Update jquery in installation pages, by [@matthieu-rolland](https://github.com/matthieu-rolland)

### Tests

* [#15912](https://github.com/PrestaShop/PrestaShop/pull/15912): Fix missing currency in behat test, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#15868](https://github.com/PrestaShop/PrestaShop/pull/15868): Update puppeteer Tests description on package.json, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#15848](https://github.com/PrestaShop/PrestaShop/pull/15848): Fix E2E dockerfile as npm is not anymore in the nodejs package, by [@PierreRambaud](https://github.com/PierreRambaud)

## Code changes in the '1.7.6.x' branch (for 1.7.6.2)

### Core

* [#15917](https://github.com/PrestaShop/PrestaShop/pull/15917): Define use_debug_toolbar even if it's not set in parameters.php, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#15731](https://github.com/PrestaShop/PrestaShop/pull/15731): Webservices shouldn't display warning when running with fpm or Nginx, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#15691](https://github.com/PrestaShop/PrestaShop/pull/15691): Cart rules mustn't be auto added automatically in some cases, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#15621](https://github.com/PrestaShop/PrestaShop/pull/15621): Revert "Fix lang table multi-store data issue", by [@matks](https://github.com/matks)

### Back office

* [#15880](https://github.com/PrestaShop/PrestaShop/pull/15880): Fix wrong data mapping in export, by [@eternoendless](https://github.com/eternoendless)
* [#15859](https://github.com/PrestaShop/PrestaShop/pull/15859): Add clickable row option for grid actions, by [@jolelievre](https://github.com/jolelievre)
* [#15856](https://github.com/PrestaShop/PrestaShop/pull/15856): Must use min-with instead max-widght for the Profile button, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#15855](https://github.com/PrestaShop/PrestaShop/pull/15855): Allow anonymous mode for AdminController, by [@PierreRambaud](https://github.com/PierreRambaud)

### Tests

* [#15895](https://github.com/PrestaShop/PrestaShop/pull/15895): Add management of an env var to disable debug toolbar in travis tests, by [@jolelievre](https://github.com/jolelievre)
* [#15847](https://github.com/PrestaShop/PrestaShop/pull/15847): Npm is not anymore in the nodejs package, by [@PierreRambaud](https://github.com/PierreRambaud)

## Code changes in modules, themes & tools

### PrestaShop-modules

* [#440](https://github.com/PrestaShop/PrestaShop-modules/pull/440): Revert "Add PS Checkout", by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#439](https://github.com/PrestaShop/PrestaShop-modules/pull/439): Add PS Checkout, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)

### Docker

* [#186](https://github.com/PrestaShop/docker/pull/186): Missing braces before moving install and admin directories, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#185](https://github.com/PrestaShop/docker/pull/185): Missing checks, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#184](https://github.com/PrestaShop/docker/pull/184): Adding multi install lock. Thank you [@djodjo3](https://github.com/djodjo3)

### Changes in developer documentation

* [#380](https://github.com/PrestaShop/docs/pull/380): Slight grammar adjustments and version updates. Thank you [@NathanGiesbrecht](https://github.com/NathanGiesbrecht)
* [#379](https://github.com/PrestaShop/docs/pull/379): Reorganize contribute section, explain how to contribute with localhost, by [@matks](https://github.com/matks)
* [#376](https://github.com/PrestaShop/docs/pull/376): Fixed spelling and grammatical errors. Thank you [@pfortune](https://github.com/pfortune)
* [#375](https://github.com/PrestaShop/docs/pull/375): Fixed spelling and grammatical mistakes. Thank you [@pfortune](https://github.com/pfortune)
* [#374](https://github.com/PrestaShop/docs/pull/374): Fixed spelling mistake. Thank you [@pfortune](https://github.com/pfortune)
* [#372](https://github.com/PrestaShop/docs/pull/372): Fixed spelling mistakes. Thank you [@pfortune](https://github.com/pfortune)
* [#371](https://github.com/PrestaShop/docs/pull/371): Removed unnecessary word. Thank you [@pfortune](https://github.com/pfortune)
* [#370](https://github.com/PrestaShop/docs/pull/370): Fixed grammatical and spelling mistakes. Thank you [@pfortune](https://github.com/pfortune)
* [#369](https://github.com/PrestaShop/docs/pull/369): Activate a language in Prestashop : Review from @LouiseBonnard, by [@Progi1984](https://github.com/Progi1984)
* [#256](https://github.com/PrestaShop/docs/pull/256): Adds documentation about value objects. Thank you [@sarjon](https://github.com/sarjon)

### PrestaShop Specifications

* [#74](https://github.com/PrestaShop/prestashop-specs/pull/74): New tree improvement. Thank you [@samuel-pires](https://github.com/samuel-pires)
* [#73](https://github.com/PrestaShop/prestashop-specs/pull/73): created new tree folders and gitkeep. Thank you [@samuel-pires](https://github.com/samuel-pires)
* [#72](https://github.com/PrestaShop/prestashop-specs/pull/72): New tree - SELL folders. Thank you [@samuel-pires](https://github.com/samuel-pires)
* [#71](https://github.com/PrestaShop/prestashop-specs/pull/71): [SPEC] Grids in migrated pages. Thank you [@samuel-pires](https://github.com/samuel-pires)

### Email alerts module

* [#21](https://github.com/PrestaShop/ps_emailalerts/pull/21): Improve remove link. Thank you [@davidglezz](https://github.com/davidglezz)

### Klarnaofficial payment gateway

* [#11](https://github.com/PrestaShop/klarnaofficial/pull/11): klarnafooter.tpl: Fix exception when disabling footer display in kcov3.. Thank you [@Perfecticus](https://github.com/Perfecticus)

### Faceted search module

* [#146](https://github.com/PrestaShop/ps_facetedsearch/pull/146): Use specific prestashop version for phpstan, by [@PierreRambaud](https://github.com/PierreRambaud)

### Shopping cart module

* [#46](https://github.com/PrestaShop/ps_shoppingcart/pull/46): Add contributors file, by [@matks](https://github.com/matks)
* [#45](https://github.com/PrestaShop/ps_shoppingcart/pull/45): Add and apply php cs fixer, by [@matks](https://github.com/matks)
* [#42](https://github.com/PrestaShop/ps_shoppingcart/pull/42): Remove duplicate call to $(document).ready. Thank you [@GCDeveloper](https://github.com/GCDeveloper)

### Live-demo-devices

* [#9](https://github.com/PrestaShop/live-demo-devices/pull/9): Demo module devops. Thank you [@lfourreau](https://github.com/lfourreau)

<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@PierreRambaud](https://github.com/PierreRambaud), [@davidglezz](https://github.com/davidglezz), [@PierreRambaud](https://github.com/PierreRambaud), [@matthieu-rolland](https://github.com/matthieu-rolland), [@NathanGiesbrecht](https://github.com/NathanGiesbrecht), [@PierreRambaud](https://github.com/PierreRambaud), [@samuel-pires](https://github.com/samuel-pires), [@jolelievre](https://github.com/jolelievre), [@samuel-pires](https://github.com/samuel-pires), [@matks](https://github.com/matks), [@samuel-pires](https://github.com/samuel-pires), [@matthieu-rolland](https://github.com/matthieu-rolland), [@eternoendless](https://github.com/eternoendless), [@davidglezz](https://github.com/davidglezz), [@boubkerbribri](https://github.com/boubkerbribri), [@Perfecticus](https://github.com/Perfecticus), [@samuel-pires](https://github.com/samuel-pires), [@PierreRambaud](https://github.com/PierreRambaud), [@jolelievre](https://github.com/jolelievre), [@PierreRambaud](https://github.com/PierreRambaud), [@PierreRambaud](https://github.com/PierreRambaud), [@matks](https://github.com/matks), [@matks](https://github.com/matks), [@JevgenijVisockij](https://github.com/JevgenijVisockij), [@PierreRambaud](https://github.com/PierreRambaud), [@PierreRambaud](https://github.com/PierreRambaud), [@matthieu-rolland](https://github.com/matthieu-rolland), [@pfortune](https://github.com/pfortune), [@pfortune](https://github.com/pfortune), [@pfortune](https://github.com/pfortune), [@pfortune](https://github.com/pfortune), [@pfortune](https://github.com/pfortune), [@pfortune](https://github.com/pfortune), [@djodjo3](https://github.com/djodjo3), [@Progi1984](https://github.com/Progi1984), [@zuk3975](https://github.com/zuk3975), [@tomas862](https://github.com/tomas862), [@Seleda](https://github.com/Seleda), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@PierreRambaud](https://github.com/PierreRambaud), [@PululuK](https://github.com/PululuK), [@PierreRambaud](https://github.com/PierreRambaud), [@matks](https://github.com/matks), [@matks](https://github.com/matks), [@lfourreau](https://github.com/lfourreau), [@FlorentinGarnier](https://github.com/FlorentinGarnier), [@Progi1984](https://github.com/Progi1984), [@matthieu-rolland](https://github.com/matthieu-rolland), [@matthieu-rolland](https://github.com/matthieu-rolland), [@sarjon](https://github.com/sarjon), [@RaimondasSapola](https://github.com/RaimondasSapola), [@zuk3975](https://github.com/zuk3975), [@GCDeveloper](https://github.com/GCDeveloper), [@sarjon](https://github.com/sarjon)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

