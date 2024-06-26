---
layout: post
aliases: ["/news/coreweekly-34-2022"]
title:  "PrestaShop Core Weekly - Week 34 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-08-29
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 22th to Sunday 28th of August 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## A quick update about PrestaShop's GitHub issues and pull requests:

- [34 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-08-22..2022-08-28) have been created in the project repositories;
- [22 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-08-22..2022-08-28), including [1 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-08-22..2022-08-28) on the core;
- [45 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-08-22..2022-08-28) in the project repositories;
- [37 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-08-22..2022-08-28), including [28 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-08-22..2022-08-28).
        


## Code changes in the 'develop' branch


### Core
* [#29419](https://github.com/PrestaShop/PrestaShop/pull/29419): Ignore `.htpasswd` file. Thank you [@PululuK](https://github.com/PululuK)
* [#29403](https://github.com/PrestaShop/PrestaShop/pull/29403): Add index.php into directory. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Back office
* [#29363](https://github.com/PrestaShop/PrestaShop/pull/29363): Fix typo in module controller messages. Thank you [@laurentrousseau918](https://github.com/laurentrousseau918)


### Tests
* [#29356](https://github.com/PrestaShop/PrestaShop/pull/29356): Fix nightly develop 16/08/2022 after a new behaviour on view order page. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '8.0.x' branch


### Installer
* [#29244](https://github.com/PrestaShop/PrestaShop/pull/29244): Update PHP-CS-Fixer to make it compatible with PHP 8.1. Thank you [@FabienPapet](https://github.com/FabienPapet)


### Tests
* [#29430](https://github.com/PrestaShop/PrestaShop/pull/29430): Sanity tests - Add new test 'CRUD standard product' V2. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#29387](https://github.com/PrestaShop/PrestaShop/pull/29387): Sanity tests - Add new test 'Filter products table' V2. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools


### Changes in developer documentation sources
* [#1468](https://github.com/PrestaShop/docs/pull/1468): Wrong path in the folders for SF migrated pages in introduction.md. Thank you [@LouisAUTHIE](https://github.com/LouisAUTHIE)
* [#1467](https://github.com/PrestaShop/docs/pull/1467): Wrong path in the folders for SF migrated pages in introduction.md. Thank you [@LouisAUTHIE](https://github.com/LouisAUTHIE)
* [#1466](https://github.com/PrestaShop/docs/pull/1466): Backport of PR1464. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#1465](https://github.com/PrestaShop/docs/pull/1465): Remove legacy command. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#1464](https://github.com/PrestaShop/docs/pull/1464): Switch links to 8.0, Strings changed since 1.7, Correct hooks name. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#1462](https://github.com/PrestaShop/docs/pull/1462): Backport of PR1461. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#1461](https://github.com/PrestaShop/docs/pull/1461): Fix a broken ref and some typos. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#1460](https://github.com/PrestaShop/docs/pull/1460): Use the @Prestashop notation. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#1458](https://github.com/PrestaShop/docs/pull/1458): Add latest JavaScript components. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Faceted search module
* [#700](https://github.com/PrestaShop/ps_facetedsearch/pull/700): Bump axios from 0.18.1 to 0.21.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#699](https://github.com/PrestaShop/ps_facetedsearch/pull/699): Bump @babel/core from 7.18.10 to 7.18.13. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Customer reassurance block module
* [#439](https://github.com/PrestaShop/blockreassurance/pull/439): Bump @babel/core from 7.18.10 to 7.18.13. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#438](https://github.com/PrestaShop/blockreassurance/pull/438): Bump vue from 2.7.8 to 2.7.10. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Docker images
* [#313](https://github.com/PrestaShop/docker/pull/313): Images for 8.0.0-beta.1, by [@jolelievre](https://github.com/jolelievre)


### Example modules
* [#104](https://github.com/PrestaShop/example-modules/pull/104): DemoSymfony update to compatible with PS 8.0.x only. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#102](https://github.com/PrestaShop/example-modules/pull/102): DemoJSrouting - add fullname column, add support for PS 1.7.7. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#101](https://github.com/PrestaShop/example-modules/pull/101): DemoExtendGrid - add support for PS 1.7.7. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#99](https://github.com/PrestaShop/example-modules/pull/99): Bump terser from 4.8.0 to 4.8.1 in /demo_grid/js. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#98](https://github.com/PrestaShop/example-modules/pull/98): Bump terser from 4.0.0 to 4.8.1 in /example_module_mailtheme. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### PrestaShop modules registry
* [#447](https://github.com/PrestaShop/PrestaShop-modules/pull/447): Add repository ps_distributionapiclient, by [@matks](https://github.com/matks)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@LouisAUTHIE](https://github.com/LouisAUTHIE), [@leemyongpakvn](https://github.com/leemyongpakvn), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@PrestaEdit](https://github.com/PrestaEdit), [@dependabot[bot]](https://github.com/apps/dependabot), [@PululuK](https://github.com/PululuK), [@jolelievre](https://github.com/jolelievre), [@laurentrousseau918](https://github.com/laurentrousseau918), [@matks](https://github.com/matks), [@FabienPapet](https://github.com/FabienPapet)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

