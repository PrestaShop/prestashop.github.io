---
layout: post
title:  PrestaShop 9.0.3 is available
subtitle: Security improvements and fixes for PrestaShop 9
date: 2026-02-02
authors: [ PrestaShop ]
opengraph_image: /assets/images/2026/01/PrestaShop-9.0.3-LinkedIn_Facebook.png
twitter_image: /assets/images/2026/01/PrestaShop-9.0.3-X.png
icon: icon-leaf
tags:
- version
- patch
- releases
- security
- "9.0"
- "9.0.x"
---

PrestaShop 9.0.3 is now available! This third maintenance release continues to refine the PrestaShop 9 series, delivering important security improvements along with numerous bug fixes and enhancements.

![PrestaShop 9.0.3 is available!](/assets/images/2026/01/PrestaShop-9.0.3-BuildBlog.png)

## Continuing to improve PrestaShop 9

Following the release of PrestaShop 9.0.2 in December, this new version further solidifies the 9.0.x branch. The team and community have been hard at work addressing reported issues to ensure a smooth and secure experience for merchants.

We strongly recommend updating to 9.0.3 to benefit from these security hardening and improvements.

## Security improvements

This release improves security by addressing one vulnerability

*   **Time based enumeration in FO login form** (Severity: Moderate 5.3/10)
    *   A time-based user enumeration vulnerability in the user authentication functionality allowed attackers to determine whether a customer account exists by measuring response times.
    *   Identifier: [GHSA-67v7-3g49-mxh2](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-67v7-3g49-mxh2)

## Improvements and fixes

Beyond security, this release includes numerous bug fixes and improvements.

**Notable changes:**
- **Back Office UX**: Added help boxes to the product page and improved setting descriptions to make the back office easier to use.
- **Multishop**: Fixed several issues regarding feature display, redirections, and loading of CMS pages.
- **Front Office**: Prevented exposure of sensitive product attributes and improved cart rule validation.
- **Developers**: New hooks for country and currency selection logic, and various API improvements.

## Download PrestaShop 9.0.3

You can download the Classic version from the official PrestaShop website. This version includes the PrestaShop SA modules, such as PrestaShop Checkout, PrestaShop Account, PrestaShop Marketplace in the back office, PrestaShop CloudSync, PrestaShop Shipping, PrestaShop Marketing, and PrestaShop Socials.

{{< cta "https://prestashop.com/versions/" >}}Download PrestaShop 9.0.3 now!{{< /cta >}}

---

**Creating a custom ZIP** :information_source:

If you don't want to use the Classic version, you can build your custom ZIP file with the PrestaShop 9.0.3 installer, which doesn't include any PrestaShop SA modules. You can read the instructions on how to do it in the [PrestaShop Release Creation Tool readme](https://github.com/PrestaShop/PrestaShop/tree/develop/tools/build).

## Update to PrestaShop 9.0.3

We strongly encourage you to update your shop to PrestaShop 9.0.3 promptly to benefit from the extensive bug fixes and enhancements included in this release. Before updating, ensure you create a full backup of your shop to safeguard your data.

Updating to the latest version of PrestaShop `9.0.x` is straightforward with the [Update Assistant](https://github.com/PrestaShop/autoupgrade/releases/). This tool streamlines the update process, ensuring your shop remains current with minimal effort.

If you encounter any problems during the update that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).

## Full changelog

- Back Office:
  - Improvement:
    - [#40517](https://github.com/PrestaShop/PrestaShop/pull/40517): Add some help boxes to product page (by [@Hlavtox](https://github.com/Hlavtox))
    - [#39923](https://github.com/PrestaShop/PrestaShop/pull/39923): Improve wording of some settings, better explain the meaning of them (by [@Hlavtox](https://github.com/Hlavtox))
    - [#40230](https://github.com/PrestaShop/PrestaShop/pull/40230): Adds help text to product page fields (by [@Hlavtox](https://github.com/Hlavtox))
  - Bug fix:
    - [#40563](https://github.com/PrestaShop/PrestaShop/pull/40563): Admin API improvements for combination endpoints (by [@jolelievre](https://github.com/jolelievre))
    - [#40556](https://github.com/PrestaShop/PrestaShop/pull/40556): Fix: CsvFileReader service fails with "You have requested a non-existent service session" (by [@Codencode](https://github.com/Codencode))
    - [#38775](https://github.com/PrestaShop/PrestaShop/pull/38775): Fix: Multishop - error loading CMS pages removed from the default shop (by [@Codencode](https://github.com/Codencode))
    - [#40499](https://github.com/PrestaShop/PrestaShop/pull/40499): Fix: When saving an Attribute is_color_group is not updated. (by [@Codencode](https://github.com/Codencode))
    - [#40554](https://github.com/PrestaShop/PrestaShop/pull/40554): Fix: always display taxes total in order summary (by [@Codencode](https://github.com/Codencode))
    - [#40532](https://github.com/PrestaShop/PrestaShop/pull/40532): BO Product page, fix feature value collection indexes (by [@jolelievre](https://github.com/jolelievre))
    - [#40433](https://github.com/PrestaShop/PrestaShop/pull/40433): Fix: Module update problem (by [@Codencode](https://github.com/Codencode))
    - [#40054](https://github.com/PrestaShop/PrestaShop/pull/40054): Use URL when building urls to prevent subtle mistakes with &? (by [@tswfi](https://github.com/tswfi))
    - [#40036](https://github.com/PrestaShop/PrestaShop/pull/40036): BO - Product : Fixed feature display in multishop (by [@Progi1984](https://github.com/Progi1984))
    - [#39854](https://github.com/PrestaShop/PrestaShop/pull/39854): Fix: Quick Access links redirect to root instead of subdirectory, causing 404 (by [@Codencode](https://github.com/Codencode))
    - [#40050](https://github.com/PrestaShop/PrestaShop/pull/40050): Fix: Incorrect redirect from HTTP to HTTPS on the admin login page when PrestaShop is in a subfolder (by [@Codencode](https://github.com/Codencode))
    - [#40475](https://github.com/PrestaShop/PrestaShop/pull/40475): Fix link for redirection on country BO page (by [@jolelievre](https://github.com/jolelievre))
    - [#40066](https://github.com/PrestaShop/PrestaShop/pull/40066): Fix: [BO] Admin Countries page redirect issue with multishop after changing shop (by [@Codencode](https://github.com/Codencode))
    - [#40329](https://github.com/PrestaShop/PrestaShop/pull/40329): Prevent NoResultException when checking for existing translations (by [@ChillCode](https://github.com/ChillCode))
    - [#39926](https://github.com/PrestaShop/PrestaShop/pull/39926): Fix: handle SELECT fields without no_quotes in getSensitiveAttributes (by [@Codencode](https://github.com/Codencode))
    - [#40001](https://github.com/PrestaShop/PrestaShop/pull/40001): Fix redirect after editing root category to use current categoryId in stead of PS_HOME_CATEGORY (by [@Codencode](https://github.com/Codencode))
    - [#39869](https://github.com/PrestaShop/PrestaShop/pull/39869): Update monologger to v3 (by [@NKoonen](https://github.com/NKoonen))
    - [#40256](https://github.com/PrestaShop/PrestaShop/pull/40256): Fix: Issue retrieving product price when adding the first specific_price (by [@Codencode](https://github.com/Codencode))
    - [#40243](https://github.com/PrestaShop/PrestaShop/pull/40243): Admin API handle position update (by [@jolelievre](https://github.com/jolelievre))
    - [#40257](https://github.com/PrestaShop/PrestaShop/pull/40257): Prevent saving ajax URL for future login redirection, or the redirect… (by [@jolelievre](https://github.com/jolelievre))
    - [#40112](https://github.com/PrestaShop/PrestaShop/pull/40112): Bump prestakit to v2.0.5 (by [@Quetzacoalt91](https://github.com/Quetzacoalt91))
  - Refactoring:
    - [#37667](https://github.com/PrestaShop/PrestaShop/pull/37667): Apply backoffice optimizations (by [@Hlavtox](https://github.com/Hlavtox))
- Front Office:
  - New feature:
    - [#40403](https://github.com/PrestaShop/PrestaShop/pull/40403): Allow easily hooking into country and currency selection logic (by [@Hlavtox](https://github.com/Hlavtox))
  - Improvement:
    - [#40537](https://github.com/PrestaShop/PrestaShop/pull/40537): Remove unnecessary force refresh in checkout (by [@Hlavtox](https://github.com/Hlavtox))
    - [#40248](https://github.com/PrestaShop/PrestaShop/pull/40248): Prevent Exposure of Sensitive Product Attributes in Front Office (by [@M0rgan01](https://github.com/M0rgan01))
  - Bug fix:
    - [#40246](https://github.com/PrestaShop/PrestaShop/pull/40246): Fix preview in multilang (by [@tleon](https://github.com/tleon))
    - [#39582](https://github.com/PrestaShop/PrestaShop/pull/39582): Fix: Product customization text field bug with using symbol {} (by [@Codencode](https://github.com/Codencode))
    - [#40117](https://github.com/PrestaShop/PrestaShop/pull/40117): Fix cart rule validation in front office (by [@Hlavtox](https://github.com/Hlavtox))
    - [#40262](https://github.com/PrestaShop/PrestaShop/pull/40262): Allow access to customized files preview without multi-lang enabled (by [@kpodemski](https://github.com/kpodemski))
    - [#40137](https://github.com/PrestaShop/PrestaShop/pull/40137): Updated zxcvbn to a maintained version for consistency with backend checks (by [@tleon](https://github.com/tleon))
  - Refactoring:
    - [#40406](https://github.com/PrestaShop/PrestaShop/pull/40406): Comment how language setting works in FO (by [@Hlavtox](https://github.com/Hlavtox))
- Core:
  - Improvement:
    - [#40269](https://github.com/PrestaShop/PrestaShop/pull/40269): Prevent database inconsistencies by preventing faulty group delete calls (by [@Hlavtox](https://github.com/Hlavtox))
    - [#40133](https://github.com/PrestaShop/PrestaShop/pull/40133): Update ca-bundle from 1.3.7 to 1.5.9 (by [@tswfi](https://github.com/tswfi))
    - [#40350](https://github.com/PrestaShop/PrestaShop/pull/40350): Remove the composer config to ignore audit (by [@jolelievre](https://github.com/jolelievre))
    - [#40332](https://github.com/PrestaShop/PrestaShop/pull/40332): Restore original repository for ps_apiresources (by [@nicosomb](https://github.com/nicosomb))
    - [#40312](https://github.com/PrestaShop/PrestaShop/pull/40312): Bump to `9.0.3` (by [@boherm](https://github.com/boherm))
    - [#40134](https://github.com/PrestaShop/PrestaShop/pull/40134): Docker : Fixed Install of xdebug (by [@Progi1984](https://github.com/Progi1984))
  - Bug fix:
    - [#40585](https://github.com/PrestaShop/PrestaShop/pull/40585): Preliminary tasks for patch version 9.0.3 (by [@jolelievre](https://github.com/jolelievre))
    - [#40479](https://github.com/PrestaShop/PrestaShop/pull/40479): Fix legacy profiler in the back office (by [@kpodemski](https://github.com/kpodemski))
    - [#40562](https://github.com/PrestaShop/PrestaShop/pull/40562): Update VAT rates for Estonia and Romania (by [@Codencode](https://github.com/Codencode))
    - [#40496](https://github.com/PrestaShop/PrestaShop/pull/40496): Fix some type issues related to carriers (by [@Hlavtox](https://github.com/Hlavtox))
    - [#40423](https://github.com/PrestaShop/PrestaShop/pull/40423): Fix empty extra vars / product list when using the new automatic text email option (by [@matrixino](https://github.com/matrixino))
    - [#40040](https://github.com/PrestaShop/PrestaShop/pull/40040): Always request a non cached result in Order::getIdByCartId (by [@ilsalvopss](https://github.com/ilsalvopss))
    - [#40400](https://github.com/PrestaShop/PrestaShop/pull/40400): Simplify cart rule minimal value by avoiding subtracting values (by [@Hlavtox](https://github.com/Hlavtox))
  - Refactoring:
    - [#40389](https://github.com/PrestaShop/PrestaShop/pull/40389): Comment logic related to addresses and their initialization (by [@Hlavtox](https://github.com/Hlavtox))
- Installer:
  - Bug fix:
    - [#40574](https://github.com/PrestaShop/PrestaShop/pull/40574): Fix Makefile to prevent build assets twice (by [@jolelievre](https://github.com/jolelievre))
    - [#40077](https://github.com/PrestaShop/PrestaShop/pull/40077): Install Console : Allow characters "<" & ">" in admin password (by [@Progi1984](https://github.com/Progi1984))
    - [#40114](https://github.com/PrestaShop/PrestaShop/pull/40114): Chore(Makefile): fix Makefile shell detection issue (by [@tyloo](https://github.com/tyloo))
- Localization:
  - Bug fix:
    - [#40521](https://github.com/PrestaShop/PrestaShop/pull/40521): Fix default fixtures translation (by [@jolelievre](https://github.com/jolelievre))
- Tests:
  - Improvement:
    - [#40512](https://github.com/PrestaShop/PrestaShop/pull/40512): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#40458](https://github.com/PrestaShop/PrestaShop/pull/40458): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#40434](https://github.com/PrestaShop/PrestaShop/pull/40434): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#40363](https://github.com/PrestaShop/PrestaShop/pull/40363): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#40138](https://github.com/PrestaShop/PrestaShop/pull/40138): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
  - Refactoring:
    - [#40298](https://github.com/PrestaShop/PrestaShop/pull/40298): Functional tests - Fix create account in FO classic theme test (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))

## Acknowledgments

{{< contributors-grid "boherm" "ChillCode" "Codencode" "Hlavtox" "ilsalvopss" "jolelievre" "kpodemski" "M0rgan01" "matthieu-rolland" "matrixino" "nesrineabdmouleh" "nicosomb" "NKoonen" "Progi1984" "Quetzacoalt91" "tleon" "tswfi" "tyloo"  >}}