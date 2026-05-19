---
layout: post
title:  PrestaShop 9.1.2 is available
subtitle: "First maintenance release for the 9.1 branch: dozens of bug fixes across the back office, front office, and core, plus updated Symfony components."
date: 2026-05-19
authors: [ PrestaShop ]
icon: icon-leaf
image: /assets/images/2026/05/9.1.2_1534x434.png
opengraph_image: /assets/images/2026/05/9.1.2_1200x728.png
twitter_image: /assets/images/2026/05/9.1.2_1024x512.png
tags:
- version
- patch
- releases
- "9.1"
- "9.1.x"
---

PrestaShop 9.1.2 is now available. This is the first regular maintenance release for the 9.1 branch, focused entirely on bug fixes, stability improvements, and dependency updates. After the security-only [9.1.1 release]({{< relref "/news/releases/prestashop-9-1-1-security-release" >}}) at the end of April, this version consolidates several weeks of community-driven fixes into one update.

![PrestaShop 9.1.2 is available!](/assets/images/2026/05/9.1.2_1534x434.png)

## A maintenance release driven by community contributors

PrestaShop 9.1.2 is the result of more than fifty merged pull requests from over twenty contributors. Most of them are bug fixes addressing real-world issues reported by merchants and developers since 9.1.0 shipped. There are no new features to learn and no breaking changes to worry about, which makes this release a safe and recommended update for everyone running the 9.1 branch.

## A wave of significant bug fixes

The bulk of this release is dedicated to bug fixes, with particularly strong coverage in the back office.

**Multishop and catalog management** received a lot of attention, with fixes for [creating attributes in the "All shops" context](https://github.com/PrestaShop/PrestaShop/pull/40736), the [logo update only applying to shop ID 1](https://github.com/PrestaShop/PrestaShop/pull/40693), [features with the same name being shown only once](https://github.com/PrestaShop/PrestaShop/pull/40706) when assigning values to products, and [actionCarrierUpdate not being triggered on the migrated carrier page](https://github.com/PrestaShop/PrestaShop/pull/40070).

**Order management** got several important fixes: [deleting an order product when the catalog product has been removed](https://github.com/PrestaShop/PrestaShop/pull/41320) now works, an [exception is thrown on order detail insert failure](https://github.com/PrestaShop/PrestaShop/pull/41327) during cart-to-order conversion instead of failing silently, and the [free gift button on cart rules](https://github.com/PrestaShop/PrestaShop/pull/40866) behaves correctly again.

**Customer-facing flows** received a key fix that prevents [existing customers from being overwritten during a CSV import](https://github.com/PrestaShop/PrestaShop/pull/40015), a long-standing source of data loss reports. The [fuzzy search SQL bug with apostrophes](https://github.com/PrestaShop/PrestaShop/pull/40853), the [product details being overridden when changing attribute in the quickview modal](https://github.com/PrestaShop/PrestaShop/pull/41319), and the [fatal error in `hookActionCartSave` when switching language](https://github.com/PrestaShop/PrestaShop/pull/40795) are also resolved.

**Themes, translations, and emails** are not forgotten: theme imports from a URL [no longer throw PHP warnings on invalid URLs](https://github.com/PrestaShop/PrestaShop/pull/41334), [child theme translations](https://github.com/PrestaShop/PrestaShop/pull/41193) are now correctly loaded by the back office translation API, [email HTML previews for module emails](https://github.com/PrestaShop/PrestaShop/pull/41100) render properly, and [test emails work with IDN domains](https://github.com/PrestaShop/PrestaShop/pull/41412).

**Under the hood**, Symfony components have been [bumped three times](https://github.com/PrestaShop/PrestaShop/pull/41419) to follow the 6.4.x patch releases, the [`prestashop/dashgoals` package was bumped to v2.0.5](https://github.com/PrestaShop/PrestaShop/pull/41230), and a new [`--skip-overrides` option](https://github.com/PrestaShop/PrestaShop/pull/40613) is available on the `prestashop:module` CLI command for developers who need it.

## Top contributors to this release

{{< contributors-grid "Codencode" "Progi1984" "mattgoud" "boherm" "jolelievre" "Hlavtox" >}}
This release would not have been possible without our most active community contributors. A special thank you to the following developers, whose work shaped the bulk of 9.1.2: [@Codencode](https://github.com/Codencode) tackled an impressive number of multishop and back office issues, [@Progi1984](https://github.com/Progi1984) kept the functional test suite healthy and shepherded the version bumps, [@mattgoud](https://github.com/mattgoud) fixed a series of high-impact issues in the back office and quickview, [@boherm](https://github.com/boherm) addressed several email and admin API edge cases, [@jolelievre](https://github.com/jolelievre) handled core dependencies and value object refactoring, and [@Hlavtox](https://github.com/Hlavtox) contributed both improvements and refactoring across the back office and front office.
{{< /contributors-grid >}}

We are also happy to welcome three new contributors to the PrestaShop core: [@axel-paillaud](https://github.com/axel-paillaud) (Axel Paillaud), [@mehdiboissat-bron](https://github.com/mehdiboissat-bron), and [@metineren](https://github.com/metineren) (Metin EREN). Their first contributions are part of this release. Thank you and welcome!

## Download PrestaShop 9.1.2

You can download the Classic version from the official PrestaShop website. This version includes the PrestaShop SA modules, such as PrestaShop Checkout, PrestaShop Account, PrestaShop Marketplace in the back office, PrestaShop CloudSync, PrestaShop Shipping, PrestaShop Marketing, and PrestaShop Socials.

{{< cta "https://prestashop.com/versions/" >}}Download PrestaShop 9.1.2 now!{{< /cta >}}

---

**Creating a custom ZIP** :information_source:

If you don't want to use the Classic version, you can build your custom ZIP file with the PrestaShop 9.1.2 installer, which doesn't include any PrestaShop SA modules. You can read the instructions on how to do it in the [PrestaShop Release Creation Tool readme](https://github.com/PrestaShop/PrestaShop/tree/develop/tools/build).

## Update to PrestaShop 9.1.2

We strongly encourage you to update your shop to PrestaShop 9.1.2 to benefit from the many bug fixes and stability improvements included in this release. Before updating, ensure you create a full backup of your shop to safeguard your data.

Updating to the latest version of PrestaShop `9.1.x` is straightforward with the [Update Assistant](https://github.com/PrestaShop/autoupgrade/releases/). This tool streamlines the update process, ensuring your shop remains current with minimal effort.

If you encounter any problems during the update that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).

## Full changelog

- Back Office:
  - Improvement:
    - [#40912](https://github.com/PrestaShop/PrestaShop/pull/40912): Handle no value objects, like NoStateId, NoCombinationId in ValueObje… (by [@jolelievre](https://github.com/jolelievre))
    - [#40859](https://github.com/PrestaShop/PrestaShop/pull/40859): Fix: in the customer form from admin side, it is missing the newsletter option as Partner Offers (by [@Codencode](https://github.com/Codencode))
    - [#40636](https://github.com/PrestaShop/PrestaShop/pull/40636): Always execute non display hooks in backoffice (by [@Hlavtox](https://github.com/Hlavtox))
  - Bug fix:
    - [#41334](https://github.com/PrestaShop/PrestaShop/pull/41334): Fix theme import from web throwing PHP warnings on invalid URLs (by [@mattgoud](https://github.com/mattgoud))
    - [#41327](https://github.com/PrestaShop/PrestaShop/pull/41327): Throw exception on order detail insert failure during conversion (by [@nicosomb](https://github.com/nicosomb))
    - [#41320](https://github.com/PrestaShop/PrestaShop/pull/41320): Fix unable to delete order product when catalog product is deleted (by [@mattgoud](https://github.com/mattgoud))
    - [#41193](https://github.com/PrestaShop/PrestaShop/pull/41193): Fix child theme translation loading in BO translation API (by [@Codencode](https://github.com/Codencode))
    - [#41100](https://github.com/PrestaShop/PrestaShop/pull/41100): Fix email HTML previews for module emails (by [@axel-paillaud](https://github.com/axel-paillaud))
    - [#41018](https://github.com/PrestaShop/PrestaShop/pull/41018): Fix #33921 - Add specific error message when embedded HTML is blocked (by [@mattgoud](https://github.com/mattgoud))
    - [#40975](https://github.com/PrestaShop/PrestaShop/pull/40975): Fix sidebar blanking on RTL (by [@cnavarro-prestashop](https://github.com/cnavarro-prestashop))
    - [#40971](https://github.com/PrestaShop/PrestaShop/pull/40971): Fix pass shop group ID when setting context in LogoUploader (by [@mehdiboissat-bron](https://github.com/mehdiboissat-bron))
    - [#40964](https://github.com/PrestaShop/PrestaShop/pull/40964): Use sticky positioning for module selection panel in Positions page (by [@intraordinaire](https://github.com/intraordinaire))
    - [#40866](https://github.com/PrestaShop/PrestaShop/pull/40866): Fixed bug for free gift button on cart rules (by [@Touxten](https://github.com/Touxten))
    - [#40829](https://github.com/PrestaShop/PrestaShop/pull/40829): Fix validate medium pass (by [@tleon](https://github.com/tleon))
    - [#40745](https://github.com/PrestaShop/PrestaShop/pull/40745): Allow category tree selector to open when no default category (by [@Kaikina](https://github.com/Kaikina))
    - [#40736](https://github.com/PrestaShop/PrestaShop/pull/40736): Fix: Error when creating an attribute for a group in "All shops" context with multiple shops (by [@Codencode](https://github.com/Codencode))
    - [#40706](https://github.com/PrestaShop/PrestaShop/pull/40706): Fix: Features with the same name are shown only once when creating values and assigning to products (by [@Codencode](https://github.com/Codencode))
    - [#40693](https://github.com/PrestaShop/PrestaShop/pull/40693): Fix: [BO][Multishop] Design > Theme & Logo: when updating the logo in the "All shops" context, only shop ID 1 gets updated (by [@Codencode](https://github.com/Codencode))
    - [#40070](https://github.com/PrestaShop/PrestaShop/pull/40070): Fix: actionCarrierUpdate not triggered on migrated carrier page (by [@Codencode](https://github.com/Codencode))
    - [#40015](https://github.com/PrestaShop/PrestaShop/pull/40015): Fix: BO - Import for Customers will overwrite the already existing customers (by [@Codencode](https://github.com/Codencode))
- Front Office:
  - Improvement:
    - [#41087](https://github.com/PrestaShop/PrestaShop/pull/41087): Add checkout step properties (by [@ga-devfront](https://github.com/ga-devfront))
  - Bug fix:
    - [#41319](https://github.com/PrestaShop/PrestaShop/pull/41319): Fix product details overridden when changing attribute in quickview modal (by [@mattgoud](https://github.com/mattgoud))
    - [#41316](https://github.com/PrestaShop/PrestaShop/pull/41316): Fix wrong state saved when country is changed quickly before AJAX completes (by [@mattgoud](https://github.com/mattgoud))
    - [#40853](https://github.com/PrestaShop/PrestaShop/pull/40853): Fix fuzzy search SQL when closest word contains apostrophe (#40847) (by [@Codencode](https://github.com/Codencode))
    - [#40795](https://github.com/PrestaShop/PrestaShop/pull/40795): Fix: Fatal error in hookActionCartSave when switching language and calling Product::getPriceStatic() or Cart::getProducts() (by [@Codencode](https://github.com/Codencode))
  - Refactoring:
    - [#40828](https://github.com/PrestaShop/PrestaShop/pull/40828): Use context instead of cookie where relevant (by [@Hlavtox](https://github.com/Hlavtox))
- Core:
  - New feature:
    - [#40613](https://github.com/PrestaShop/PrestaShop/pull/40613): Add --skip-overrides option to prestashop:module CLI command (by [@jf-viguier](https://github.com/jf-viguier))
  - Improvement:
    - [#41419](https://github.com/PrestaShop/PrestaShop/pull/41419): Update Symfony components after 6.4.38 release (by [@nicosomb](https://github.com/nicosomb))
    - [#41383](https://github.com/PrestaShop/PrestaShop/pull/41383): Update Symfony components after 6.4.37 release (by [@nicosomb](https://github.com/nicosomb))
    - [#41358](https://github.com/PrestaShop/PrestaShop/pull/41358): Bump 9.1.2 (by [@Progi1984](https://github.com/Progi1984))
    - [#41230](https://github.com/PrestaShop/PrestaShop/pull/41230): Bump the version of the prestashop/dashgoals package from v2.0.4 to v2.0.5 (by [@cnavarro-prestashop](https://github.com/cnavarro-prestashop))
    - [#41188](https://github.com/PrestaShop/PrestaShop/pull/41188): Update Symfony components after 6.4.36 release (by [@nicosomb](https://github.com/nicosomb))
    - [#41086](https://github.com/PrestaShop/PrestaShop/pull/41086): Fix tests with admin api (by [@boherm](https://github.com/boherm))
    - [#41059](https://github.com/PrestaShop/PrestaShop/pull/41059): Set version to 9.1.1 (by [@Progi1984](https://github.com/Progi1984))
    - [#41041](https://github.com/PrestaShop/PrestaShop/pull/41041): Add workflow to automatically set milestone based on target branch (by [@jolelievre](https://github.com/jolelievre))
    - [#41033](https://github.com/PrestaShop/PrestaShop/pull/41033): Update Symfony components after 6.4.35 release (by [@nicosomb](https://github.com/nicosomb))
    - [#41009](https://github.com/PrestaShop/PrestaShop/pull/41009): Improve bulk actions returns from admin api (by [@boherm](https://github.com/boherm))
    - [#40431](https://github.com/PrestaShop/PrestaShop/pull/40431): Feat(FrontController): Add Specialized Hooks (by [@Kaikina](https://github.com/Kaikina))
  - Bug fix:
    - [#41443](https://github.com/PrestaShop/PrestaShop/pull/41443): Update dependencies for 9.1.2 (by [@jolelievre](https://github.com/jolelievre))
    - [#41412](https://github.com/PrestaShop/PrestaShop/pull/41412): Fix sending test emails from/to idn domains (by [@boherm](https://github.com/boherm))
    - [#41410](https://github.com/PrestaShop/PrestaShop/pull/41410): Switch employee email from ps_shop_email when forwarding customer threads to another employee (by [@boherm](https://github.com/boherm))
    - [#41317](https://github.com/PrestaShop/PrestaShop/pull/41317): Fix module uninstall failing when override contains multi-line property or constant value (by [@mattgoud](https://github.com/mattgoud))
    - [#40894](https://github.com/PrestaShop/PrestaShop/pull/40894): EditStateHandler : Fixes if ZoneId or Country are null (partial update) (by [@Progi1984](https://github.com/Progi1984))
    - [#40888](https://github.com/PrestaShop/PrestaShop/pull/40888): Add ShopContext and LanguageContext to FeatureAttributeRepository (by [@boherm](https://github.com/boherm))
    - [#40655](https://github.com/PrestaShop/PrestaShop/pull/40655): Fix saving module settings when legacy profiler enabled (by [@kpodemski](https://github.com/kpodemski))
    - [#40651](https://github.com/PrestaShop/PrestaShop/pull/40651): Return correct product name for attributes (by [@Prestaworks](https://github.com/Prestaworks))
  - Refactoring:
    - [#40834](https://github.com/PrestaShop/PrestaShop/pull/40834): Use constants for range behavior (by [@Hlavtox](https://github.com/Hlavtox))
- Installer:
  - Improvement:
    - [#41448](https://github.com/PrestaShop/PrestaShop/pull/41448): Update default catalog 9.1.2-build (by [@ps-jarvis](https://github.com/ps-jarvis))
- Localization:
  - Improvement:
    - [#40945](https://github.com/PrestaShop/PrestaShop/pull/40945): Turkey updated its tax rates on July 10, 2023. (by [@metineren](https://github.com/metineren))
- Tests:
  - Improvement:
    - [#41347](https://github.com/PrestaShop/PrestaShop/pull/41347): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#41236](https://github.com/PrestaShop/PrestaShop/pull/41236): Functional Tests : @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#40990](https://github.com/PrestaShop/PrestaShop/pull/40990): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#40954](https://github.com/PrestaShop/PrestaShop/pull/40954): Functional Tests : Improve nightly (by [@Progi1984](https://github.com/Progi1984))
    - [#40946](https://github.com/PrestaShop/PrestaShop/pull/40946): Functional Tests : Improve `functional:BO:orders:03-05` (by [@Progi1984](https://github.com/Progi1984))
    - [#40933](https://github.com/PrestaShop/PrestaShop/pull/40933): Functional Tests : Improve `functional:BO:orders:01-view-and-edit-order` (by [@Progi1984](https://github.com/Progi1984))
    - [#40931](https://github.com/PrestaShop/PrestaShop/pull/40931): Functional Tests : Audit : BO - Wall of Fame (by [@Progi1984](https://github.com/Progi1984))
    - [#40923](https://github.com/PrestaShop/PrestaShop/pull/40923): Dynamize docker names when using docker exec in CI (by [@jolelievre](https://github.com/jolelievre))
    - [#40911](https://github.com/PrestaShop/PrestaShop/pull/40911): Functional Tests : Improve `functional:BO:orders:03-05` (by [@Progi1984](https://github.com/Progi1984))
    - [#40882](https://github.com/PrestaShop/PrestaShop/pull/40882): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#40873](https://github.com/PrestaShop/PrestaShop/pull/40873): Functional Tests : Stabilize GDPR Tests (by [@Progi1984](https://github.com/Progi1984))
  - Refactoring:
    - [#41025](https://github.com/PrestaShop/PrestaShop/pull/41025): Functional tests - Refacto create customer from order page (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#40910](https://github.com/PrestaShop/PrestaShop/pull/40910): Functional tests - Add first UI test of discount V2 : Minimum purchase amount (On cart amount) (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))

## Acknowledgments

{{< contributors-grid "axel-paillaud" "boherm" "cnavarro-prestashop" "Codencode" "ga-devfront" "Hlavtox" "intraordinaire" "jf-viguier" "jolelievre" "Kaikina" "kpodemski" "mattgoud" "mehdiboissat-bron" "metineren" "nesrineabdmouleh" "nicosomb" "Prestaworks" "Progi1984" "tleon" "Touxten" / >}}
