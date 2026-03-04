---
layout: post
title:  "PrestaShop 9.1 RC1 is open for testing!"
subtitle: "The first Release Candidate of PrestaShop 9.1 is here. Help us validate it before the final release."
date:   2026-03-04 10:00:00
authors: [ PrestaShop ]
icon: icon-lab
image: /assets/images/2026/03/PrestaShop-9.1RC1-LinkedIn_Facebook.png
opengraph_image: /assets/images/2026/03/PrestaShop-9.1RC1-LinkedIn_Facebook.png
twitter_image: /assets/images/2026/03/PrestaShop-9.1RC1-X.png
tags:
- news
- version
- rc
- minor
- releases
- "9.1"
- "9.x"
- "9.1.x"
---

The first Release Candidate of PrestaShop 9.1 is now available for testing. This is the last major milestone before the stable release, and your feedback is what determines whether 9.1 ships on schedule and in great shape.

![PrestaShop 9.1 RC1](/assets/images/2026/03/PrestaShop-9.1RC1-BuildBlog.png)

---

{{% notice type="warning" %}}
This is a pre-release version. Do not install it on a production shop. Test it in a dedicated staging or development environment only.
{{% /notice %}}

## What is a Release Candidate?

A Release Candidate is the final pre-release stage in our development cycle. All planned features are in place, and the focus has fully shifted to quality, stability, and catching any remaining regressions. RC1 is functionally what we intend to ship as the final 9.1 release. Any fixes applied from this point on will be based directly on your reports.

## What's inside PrestaShop 9.1 RC1?

All the features introduced during the beta phase are included. Here's a quick recap of the highlights:

### Hummingbird 2.0: new default theme

[Hummingbird 2](https://github.com/PrestaShop/hummingbird/) is now the default theme in PrestaShop 9.1. Built on Bootstrap 5, it prioritizes performance, developer experience, and accessibility, achieving over 95% compliance with the European Accessibility Act (EAA).

{{< cta-group >}}
{{< cta ref="/news/posts/2026/hummingbird-v2-architecture-best-practices-contribution" inline="true" >}}Tech overview{{< /cta >}}
{{< cta url="https://github.com/PrestaShop/hummingbird/releases/tag/v2.0.0" inline="true" >}}Release notes{{< /cta >}}
{{< cta url="https://github.com/PrestaShop/hummingbird/discussions" inline="true" >}}Discussions & feedback{{< /cta >}}
{{< /cta-group >}}

---

### Multi-carrier / Multi-shipping

PrestaShop 9.1 introduces shipment-based order management, giving merchants the ability to split and merge shipments within a single order. This removes the long-standing "1 order = 1 carrier" limitation and improves clarity for both merchants and customers.

<small>*Note: this feature is behind a feature flag.*</small>

{{< cta-group >}}
{{< cta url="https://www.youtube.com/watch?v=JljSmYH-vdg&t=775s" inline="true" >}}Watch the demo{{< /cta >}}
{{< cta url="/news/2026/introducing-shipments/" inline="true" >}}Read the article{{< /cta >}}
{{< /cta-group >}}

---

### Improved Discounts

The discount system has been redesigned around four types (Catalog, Cart, Free Shipping, and Free Gift), replacing the legacy cart rules with a clearer and more performant structure.

<small>*Note: this feature is behind a feature flag.*</small>

{{< cta-group >}}
{{< cta url="https://www.youtube.com/watch?v=8PL0dwdRiho&t=1941s" inline="true" >}}Watch the demo{{< /cta >}}
{{< cta url="/news/2026/improved-discounts-system/" inline="true" >}}Read the article{{< /cta >}}
{{< /cta-group >}}

---

{{% notice type="info" title="What is a feature flag?" %}}
Some 9.1 features are experimental and must be enabled manually before you can test them. You can find these settings under **Advanced Parameters -> New & Experimental Features**.
{{% /notice %}}

## Changelog

- Back Office:
  - Improvement:
    - [#40720](https://github.com/PrestaShop/PrestaShop/pull/40720): Add actionUpdateDefaultCombinationAfter hook when default combination is set (by [@Codencode](https://github.com/Codencode))
    - [#40536](https://github.com/PrestaShop/PrestaShop/pull/40536): Add discountType endpoint (by [@nicosomb](https://github.com/nicosomb))
    - [#40517](https://github.com/PrestaShop/PrestaShop/pull/40517): Add some help boxes to product page (by [@Hlavtox](https://github.com/Hlavtox))
    - [#40481](https://github.com/PrestaShop/PrestaShop/pull/40481): Improved UX for API client creation (by [@kpodemski](https://github.com/kpodemski))
    - [#40330](https://github.com/PrestaShop/PrestaShop/pull/40330): Add usage limits fields for new discount system (by [@boherm](https://github.com/boherm))
    - [#40094](https://github.com/PrestaShop/PrestaShop/pull/40094): Fix: Doctrine auto-mapping in modules: only the first subfolder inside src/Entity is recognized (by [@Codencode](https://github.com/Codencode))
    - [#39923](https://github.com/PrestaShop/PrestaShop/pull/39923): Improve wording of some settings, better explain the meaning of them (by [@Hlavtox](https://github.com/Hlavtox))
    - [#39459](https://github.com/PrestaShop/PrestaShop/pull/39459): Set optin and newsletter off for John DOE (by [@Touxten](https://github.com/Touxten))
  - Bug fix:
    - [#40809](https://github.com/PrestaShop/PrestaShop/pull/40809): Clean discount form (by [@jolelievre](https://github.com/jolelievre))
    - [#40743](https://github.com/PrestaShop/PrestaShop/pull/40743): Fix: Bug: when invoicing is disabled, changing order status to "paid=1" does not register any payment on the order (by [@Codencode](https://github.com/Codencode))
    - [#40710](https://github.com/PrestaShop/PrestaShop/pull/40710): Fix: Feature values count is duplicated when using “All shops” with multiple shops (by [@Codencode](https://github.com/Codencode))
    - [#40682](https://github.com/PrestaShop/PrestaShop/pull/40682): Fix the collision when we create / delete product customization in the same action (by [@nicosomb](https://github.com/nicosomb))
    - [#40640](https://github.com/PrestaShop/PrestaShop/pull/40640): Fix EntitySearchInput::setValues forEach callback argument order (by [@Codencode](https://github.com/Codencode))
    - [#40620](https://github.com/PrestaShop/PrestaShop/pull/40620): Update AdminSecurity permissions logic in OrderController (by [@rsoulard-prolaser](https://github.com/rsoulard-prolaser))
    - [#40578](https://github.com/PrestaShop/PrestaShop/pull/40578): Dynamic pack quantity (by [@jolelievre](https://github.com/jolelievre))
    - [#40563](https://github.com/PrestaShop/PrestaShop/pull/40563): Admin API improvements for combination endpoints (by [@jolelievre](https://github.com/jolelievre))
    - [#40556](https://github.com/PrestaShop/PrestaShop/pull/40556): Fix: CsvFileReader service fails with "You have requested a non-existent service 'session'" (by [@Codencode](https://github.com/Codencode))
    - [#40554](https://github.com/PrestaShop/PrestaShop/pull/40554): Fix: always display taxes total in order summary (by [@Codencode](https://github.com/Codencode))
    - [#40532](https://github.com/PrestaShop/PrestaShop/pull/40532): BO Product page, fix feature value collection indexes (by [@jolelievre](https://github.com/jolelievre))
    - [#40525](https://github.com/PrestaShop/PrestaShop/pull/40525): Update module ps_apiresources (by [@jolelievre](https://github.com/jolelievre))
    - [#40518](https://github.com/PrestaShop/PrestaShop/pull/40518): Fix position of minimum_product_quantity field in table (by [@nicosomb](https://github.com/nicosomb))
    - [#40499](https://github.com/PrestaShop/PrestaShop/pull/40499): Fix: When saving an Attribute is_color_group is not updated. (by [@Codencode](https://github.com/Codencode))
    - [#40475](https://github.com/PrestaShop/PrestaShop/pull/40475): Fix link for redirection on country BO page (by [@jolelievre](https://github.com/jolelievre))
    - [#40433](https://github.com/PrestaShop/PrestaShop/pull/40433): Fix: Module update problem (by [@Codencode](https://github.com/Codencode))
    - [#40329](https://github.com/PrestaShop/PrestaShop/pull/40329): Prevent NoResultException when checking for existing translations (by [@ChillCode](https://github.com/ChillCode))
    - [#40317](https://github.com/PrestaShop/PrestaShop/pull/40317): Fix: Backoffice data grids can yield different random results every time (by [@Codencode](https://github.com/Codencode))
    - [#40066](https://github.com/PrestaShop/PrestaShop/pull/40066): Fix: [BO] Admin Countries page redirect issue with multishop after changing shop (by [@Codencode](https://github.com/Codencode))
    - [#40054](https://github.com/PrestaShop/PrestaShop/pull/40054): Use URL when building urls to prevent subtle mistakes with &? (by [@tswfi](https://github.com/tswfi))
    - [#40050](https://github.com/PrestaShop/PrestaShop/pull/40050): Fix: Incorrect redirect from HTTP to HTTPS on the admin login page when PrestaShop is in a subfolder (by [@Codencode](https://github.com/Codencode))
    - [#40036](https://github.com/PrestaShop/PrestaShop/pull/40036): BO - Product : Fixed feature display in multishop (by [@Progi1984](https://github.com/Progi1984))
    - [#39854](https://github.com/PrestaShop/PrestaShop/pull/39854): Fix: Quick Access links redirect to root instead of subdirectory, causing 404 (by [@Codencode](https://github.com/Codencode))
    - [#38775](https://github.com/PrestaShop/PrestaShop/pull/38775): Fix: Multishop - error loading CMS pages removed from the default shop (by [@Codencode](https://github.com/Codencode))
  - Refactoring:
    - [#40825](https://github.com/PrestaShop/PrestaShop/pull/40825): Add shipping helptexts (by [@Hlavtox](https://github.com/Hlavtox))
    - [#40358](https://github.com/PrestaShop/PrestaShop/pull/40358): Handle Product level discount in CQRS (by [@jolelievre](https://github.com/jolelievre))
    - [#37667](https://github.com/PrestaShop/PrestaShop/pull/37667): Apply backoffice optimizations (by [@Hlavtox](https://github.com/Hlavtox))
- Front Office:
  - New feature:
    - [#40403](https://github.com/PrestaShop/PrestaShop/pull/40403): Allow easily hooking into country and currency selection logic (by [@Hlavtox](https://github.com/Hlavtox))
  - Improvement:
    - [#40758](https://github.com/PrestaShop/PrestaShop/pull/40758): Secure table name with bqsql in DB and DBQuery  #33539 backport (by [@jf-viguier](https://github.com/jf-viguier))
    - [#40733](https://github.com/PrestaShop/PrestaShop/pull/40733): Bump prestashop/hummingbird to 2.0 (by [@Progi1984](https://github.com/Progi1984))
    - [#40572](https://github.com/PrestaShop/PrestaShop/pull/40572): Add feature during theme enabling to unhook specific modules (by [@jolelievre](https://github.com/jolelievre))
    - [#40537](https://github.com/PrestaShop/PrestaShop/pull/40537): Remove unnecessary force refresh in checkout (by [@Hlavtox](https://github.com/Hlavtox))
  - Bug fix:
    - [#40814](https://github.com/PrestaShop/PrestaShop/pull/40814): Update classic theme to 3.1.1 (by [@jolelievre](https://github.com/jolelievre))
    - [#40626](https://github.com/PrestaShop/PrestaShop/pull/40626): Fix "Free shipping" displayed for discounts with free shipping off an… (by [@Hlavtox](https://github.com/Hlavtox))
    - [#40614](https://github.com/PrestaShop/PrestaShop/pull/40614): Fix "Free shipping" displayed on cart when a discount haven't free shipping enabled and with a reduction amount = 0 (by [@boherm](https://github.com/boherm))
    - [#40538](https://github.com/PrestaShop/PrestaShop/pull/40538): Fix quantity input, add to cart button and availability labels when items are added in a cart (by [@Hlavtox](https://github.com/Hlavtox))
    - [#40246](https://github.com/PrestaShop/PrestaShop/pull/40246): Fix preview in multilang (by [@tleon](https://github.com/tleon))
  - Refactoring:
    - [#40673](https://github.com/PrestaShop/PrestaShop/pull/40673): Use proper delivery times (by [@Hlavtox](https://github.com/Hlavtox))
    - [#40662](https://github.com/PrestaShop/PrestaShop/pull/40662): Corrects the error message when the quantity is less than 1 in cart (by [@Touxten](https://github.com/Touxten))
    - [#40653](https://github.com/PrestaShop/PrestaShop/pull/40653): Add cart product presenter and cart availability (by [@Hlavtox](https://github.com/Hlavtox))
    - [#40570](https://github.com/PrestaShop/PrestaShop/pull/40570): Prevent accidental usage of quantity_wanted from request (by [@Hlavtox](https://github.com/Hlavtox))
    - [#40406](https://github.com/PrestaShop/PrestaShop/pull/40406): Comment how language setting works in FO (by [@Hlavtox](https://github.com/Hlavtox))
- Core:
  - New feature:
    - [#40808](https://github.com/PrestaShop/PrestaShop/pull/40808): Add new options for release creator (by [@nicosomb](https://github.com/nicosomb))
  - Improvement:
    - [#40833](https://github.com/PrestaShop/PrestaShop/pull/40833): Bump apiresources to 0.5.0 (by [@boherm](https://github.com/boherm))
    - [#40811](https://github.com/PrestaShop/PrestaShop/pull/40811): Backport missing workflows from develop to 9.1.x (by [@jolelievre](https://github.com/jolelievre))
    - [#40768](https://github.com/PrestaShop/PrestaShop/pull/40768): Integrate new header-stamp for 9.1.x branch (by [@jolelievre](https://github.com/jolelievre))
    - [#40765](https://github.com/PrestaShop/PrestaShop/pull/40765): Dynamic PHP matrix in workflows for 9.1.x (by [@jolelievre](https://github.com/jolelievre))
    - [#40730](https://github.com/PrestaShop/PrestaShop/pull/40730): Add hooks that enable to control free shipping price (by [@Hlavtox](https://github.com/Hlavtox))
    - [#40678](https://github.com/PrestaShop/PrestaShop/pull/40678): Restore dev version for ps_apiresources (by [@nicosomb](https://github.com/nicosomb))
    - [#40603](https://github.com/PrestaShop/PrestaShop/pull/40603): Clean old cart rule migration (by [@jolelievre](https://github.com/jolelievre))
    - [#40596](https://github.com/PrestaShop/PrestaShop/pull/40596): Discounts for guest, test scenario (by [@kpodemski](https://github.com/kpodemski))
    - [#40546](https://github.com/PrestaShop/PrestaShop/pull/40546): Command : Added CLI for checking fixtures translations (by [@Progi1984](https://github.com/Progi1984))
    - [#40520](https://github.com/PrestaShop/PrestaShop/pull/40520): Skip removed modules on enable theme (by [@jolelievre](https://github.com/jolelievre))
    - [#40467](https://github.com/PrestaShop/PrestaShop/pull/40467): Chore: [composer] update prestashop/dashproducts (by [@mattgoud](https://github.com/mattgoud))
    - [#40381](https://github.com/PrestaShop/PrestaShop/pull/40381): Remove `curl_close` obsolete function calls (by [@ShaiMagal](https://github.com/ShaiMagal))
    - [#40359](https://github.com/PrestaShop/PrestaShop/pull/40359): Use node 20.19.5 by default to build assets (by [@jolelievre](https://github.com/jolelievre))
    - [#40353](https://github.com/PrestaShop/PrestaShop/pull/40353): Dynamise hook documentation generation based on Version (by [@jolelievre](https://github.com/jolelievre))
    - [#40350](https://github.com/PrestaShop/PrestaShop/pull/40350): Remove the composer config to ignore audit (by [@jolelievre](https://github.com/jolelievre))
    - [#40342](https://github.com/PrestaShop/PrestaShop/pull/40342): Improved-shipment: Global refactorisation (by [@M0rgan01](https://github.com/M0rgan01))
    - [#40269](https://github.com/PrestaShop/PrestaShop/pull/40269): Prevent database inconsistencies by preventing faulty group delete calls (by [@Hlavtox](https://github.com/Hlavtox))
    - [#40133](https://github.com/PrestaShop/PrestaShop/pull/40133): Update ca-bundle from 1.3.7 to 1.5.9 (by [@tswfi](https://github.com/tswfi))
  - Bug fix:
    - [#40823](https://github.com/PrestaShop/PrestaShop/pull/40823): Don't add "default" if "default" already in name for getFormattedName (by [@boherm](https://github.com/boherm))
    - [#40776](https://github.com/PrestaShop/PrestaShop/pull/40776): Replace github action that sets up mysql in CI (by [@Touxten](https://github.com/Touxten))
    - [#40762](https://github.com/PrestaShop/PrestaShop/pull/40762): Replace github action that sets up mysql in CI (by [@Touxten](https://github.com/Touxten))
    - [#40657](https://github.com/PrestaShop/PrestaShop/pull/40657): Fix configuration of Dev mode and Debug profiling in the back office (by [@kpodemski](https://github.com/kpodemski))
    - [#40656](https://github.com/PrestaShop/PrestaShop/pull/40656): Fix getting specific price for a given customer group (by [@kpodemski](https://github.com/kpodemski))
    - [#40590](https://github.com/PrestaShop/PrestaShop/pull/40590): Fix creating orders for guests (by [@kpodemski](https://github.com/kpodemski))
    - [#40588](https://github.com/PrestaShop/PrestaShop/pull/40588): Update Changelog 9.0.3 (by [@jolelievre](https://github.com/jolelievre))
    - [#40585](https://github.com/PrestaShop/PrestaShop/pull/40585): Preliminary tasks for patch version 9.0.3 (by [@jolelievre](https://github.com/jolelievre))
    - [#40562](https://github.com/PrestaShop/PrestaShop/pull/40562): Update VAT rates for Estonia and Romania (by [@Codencode](https://github.com/Codencode))
    - [#40498](https://github.com/PrestaShop/PrestaShop/pull/40498): Fix: doctrine throws error from the beginning: There is no column with name "theme_name" on table "ps_image_type" (by [@Codencode](https://github.com/Codencode))
    - [#40496](https://github.com/PrestaShop/PrestaShop/pull/40496): Fix some type issues related to carriers (by [@Hlavtox](https://github.com/Hlavtox))
    - [#40480](https://github.com/PrestaShop/PrestaShop/pull/40480): Improvements to Makefile (by [@kpodemski](https://github.com/kpodemski))
    - [#40479](https://github.com/PrestaShop/PrestaShop/pull/40479): Fix legacy profiler in the back office (by [@kpodemski](https://github.com/kpodemski))
    - [#40423](https://github.com/PrestaShop/PrestaShop/pull/40423): Fix empty extra vars / product list when using the new automatic text email option (by [@matrixino](https://github.com/matrixino))
    - [#40400](https://github.com/PrestaShop/PrestaShop/pull/40400): Simplify cart rule minimal value by avoiding subtracting values (by [@Hlavtox](https://github.com/Hlavtox))
    - [#40040](https://github.com/PrestaShop/PrestaShop/pull/40040): Always request a non cached result in Order::getIdByCartId (by [@ilsalvopss](https://github.com/ilsalvopss))
  - Refactoring:
    - [#40798](https://github.com/PrestaShop/PrestaShop/pull/40798): Fix, comment and improve country initialization logic related to shipping (by [@Hlavtox](https://github.com/Hlavtox))
    - [#40604](https://github.com/PrestaShop/PrestaShop/pull/40604): Update classic to 3.0.6 (by [@Hlavtox](https://github.com/Hlavtox))
    - [#40432](https://github.com/PrestaShop/PrestaShop/pull/40432): Simplify some of cart logic to gradually move to single source of truth (by [@Hlavtox](https://github.com/Hlavtox))
    - [#40389](https://github.com/PrestaShop/PrestaShop/pull/40389): Comment logic related to addresses and their initialization (by [@Hlavtox](https://github.com/Hlavtox))
- Installer:
  - Improvement:
    - [#40839](https://github.com/PrestaShop/PrestaShop/pull/40839): Update default catalog 9.1.x (by [@ps-jarvis](https://github.com/ps-jarvis))
    - [#40824](https://github.com/PrestaShop/PrestaShop/pull/40824): Update default catalog 9.1.x (by [@ps-jarvis](https://github.com/ps-jarvis))
    - [#40468](https://github.com/PrestaShop/PrestaShop/pull/40468): Update default catalog 9.1.x (by [@ps-jarvis](https://github.com/ps-jarvis))
    - [#40397](https://github.com/PrestaShop/PrestaShop/pull/40397): Update default catalog 9.1.x (by [@ps-jarvis](https://github.com/ps-jarvis))
  - Bug fix:
    - [#40574](https://github.com/PrestaShop/PrestaShop/pull/40574): Fix Makefile to prevent build assets twice (by [@jolelievre](https://github.com/jolelievre))
    - [#40457](https://github.com/PrestaShop/PrestaShop/pull/40457): Fix installation theme step order (by [@jolelievre](https://github.com/jolelievre))
    - [#40077](https://github.com/PrestaShop/PrestaShop/pull/40077): Install Console : Allow characters "<" & ">" in admin password (by [@Progi1984](https://github.com/Progi1984))
- Web Services:
  - Bug fix:
    - [#40442](https://github.com/PrestaShop/PrestaShop/pull/40442): Fix: PHP Fatal error when deleting product image by Webservice API #39111 (by [@semicolonSimp](https://github.com/semicolonSimp))
- Localization:
  - Bug fix:
    - [#40521](https://github.com/PrestaShop/PrestaShop/pull/40521): Fix default fixtures translation (by [@jolelievre](https://github.com/jolelievre))
- Tests:
  - Improvement:
    - [#40789](https://github.com/PrestaShop/PrestaShop/pull/40789): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#40734](https://github.com/PrestaShop/PrestaShop/pull/40734): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#40691](https://github.com/PrestaShop/PrestaShop/pull/40691): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#40674](https://github.com/PrestaShop/PrestaShop/pull/40674): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#40645](https://github.com/PrestaShop/PrestaShop/pull/40645): Functional Tests : Fixed campaigns (Part 5) (by [@Progi1984](https://github.com/Progi1984))
    - [#40607](https://github.com/PrestaShop/PrestaShop/pull/40607): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#40565](https://github.com/PrestaShop/PrestaShop/pull/40565): Functional Tests : Fixed campaigns (Part 4) (by [@Progi1984](https://github.com/Progi1984))
    - [#40512](https://github.com/PrestaShop/PrestaShop/pull/40512): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#40469](https://github.com/PrestaShop/PrestaShop/pull/40469): Functional Tests : Fixed campaigns (Part 3) (by [@Progi1984](https://github.com/Progi1984))
    - [#40458](https://github.com/PrestaShop/PrestaShop/pull/40458): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#40436](https://github.com/PrestaShop/PrestaShop/pull/40436): Functional Tests : Fixed campaigns (Part 2) (by [@Progi1984](https://github.com/Progi1984))
    - [#40434](https://github.com/PrestaShop/PrestaShop/pull/40434): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#40428](https://github.com/PrestaShop/PrestaShop/pull/40428): Functional Tests : Fixed campaigns (Part 1) (by [@Progi1984](https://github.com/Progi1984))
    - [#40425](https://github.com/PrestaShop/PrestaShop/pull/40425): Functional Tests : Use Hummingbird as front theme for Audit/Modules/Regression/Sanity Scenarios (by [@Progi1984](https://github.com/Progi1984))
    - [#40419](https://github.com/PrestaShop/PrestaShop/pull/40419): Functional Tests : Use Hummingbird as front theme for BO Scenarios (by [@Progi1984](https://github.com/Progi1984))
    - [#40418](https://github.com/PrestaShop/PrestaShop/pull/40418): Enable Hummingbird as default theme (by [@Progi1984](https://github.com/Progi1984))
    - [#40363](https://github.com/PrestaShop/PrestaShop/pull/40363): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#40128](https://github.com/PrestaShop/PrestaShop/pull/40128): Functional Tests : Hummingbird 2 (as secondary theme) (by [@Progi1984](https://github.com/Progi1984))
  - Bug fix:
    - [#40684](https://github.com/PrestaShop/PrestaShop/pull/40684): Functional Tests : Enable scenarios (by [@Progi1984](https://github.com/Progi1984))
    - [#40646](https://github.com/PrestaShop/PrestaShop/pull/40646): Fixtures : Enable payment modules for US (by [@Progi1984](https://github.com/Progi1984))
  - Refactoring:
    - [#40405](https://github.com/PrestaShop/PrestaShop/pull/40405): Functional tests - Add enable/disable the classic theme (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#40402](https://github.com/PrestaShop/PrestaShop/pull/40402): Functional tests - Delete enable/disable the theme hummingbird (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/9.1.0-rc.1" >}}See the changelog on GitHub{{< /cta >}}

## How to test PrestaShop 9.1 RC1

{{< cta "https://prestashop.com/versions" >}}Download PrestaShop 9.1 RC1{{< /cta >}}

1. Download and install RC1 in a **test or staging environment** (never on a live shop).
2. Enable the relevant **feature flags** to test experimental capabilities.
3. Test your themes, modules, and customizations for compatibility.
4. [Report any bugs or regressions on GitHub](https://github.com/PrestaShop/PrestaShop/issues/new/choose) with clear reproduction steps.

### Requirements for PrestaShop 9.1 RC1

* PHP 8.1 (up to PHP 8.5 is supported)
* Composer 2
* Node.js 20 and NPM 10

Please check all system requirements in the [documentation](https://devdocs.prestashop-project.org/9/basics/installation/system-requirements/). You must also have [Git](https://www.git-scm.com/) installed on your machine.

**Creating a custom ZIP**

If you prefer not to use the Classic version, you can build a custom ZIP file with the [PrestaShop Release Creation](https://github.com/PrestaShop/PrestaShop/tree/develop/tools/build) tool:

1. Clone the repository using the `9.1.0-rc.1-build` tag: `git clone git@github.com:PrestaShop/PrestaShop.git --branch "9.1.0-rc.1-build" .`
2. Run `composer create-release` or `php tools/build/CreateRelease.php` in the root of the repository.
3. The ZIP file will be generated in the `tools/build/releases/` directory.

### Known limitations

{{% notice type="important" title="No upgrade path" %}}
You cannot upgrade from Beta to RC1, nor from RC1 to the final release using the [Update Assistant module](https://github.com/PrestaShop/autoupgrade). Always use a **fresh installation** for testing pre-release versions.
{{% /notice %}}

**Do not install on live shops.** This version may still contain bugs. It is intended for testing purposes only.

## Your feedback matters

RC1 is the last major checkpoint before the final release, and your testing during this window directly shapes the quality of what ships. There's no beta cycle left. Only your reports between now and the final release.

Here is how you can help:

1. **Install RC1** in a dedicated test environment.
2. **Enable feature flags** to verify the new functionality.
3. **Test your setup**: themes, modules, integrations, and customizations.
4. **Report issues early** via [GitHub Issues](https://github.com/PrestaShop/PrestaShop/issues/new/choose), with environment details and reproduction steps.

You're also welcome to discuss your findings in the [GitHub Discussions](https://github.com/PrestaShop/PrestaShop/discussions) or on [Slack](https://www.prestashop-project.org/slack/).

## Thank you to our contributors

PrestaShop 9.1 RC1 would not exist without the dedication of our community. A warm welcome to the new contributors joining for the first time in this release cycle: [Salvo Passaro](https://github.com/ilsalvopss), [Giuseppe Tripiciano](https://github.com/matrixino), [rsoulard-prolaser](https://github.com/rsoulard-prolaser), and [semicolonSimp](https://github.com/semicolonSimp). Thank you for your contributions!

{{< contributors-grid "boherm" "ChillCode" "Codencode" "Hlavtox" "ilsalvopss" "jf-viguier" "jolelievre" "kpodemski" "M0rgan01" "matrixino" "mattgoud" "nesrineabdmouleh" "nicosomb" "Progi1984" "rsoulard-prolaser" "semicolonSimp" "ShaiMagal" "tleon" "Touxten" "tswfi" / >}}
