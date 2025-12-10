---
layout: post
title:  PrestaShop 9.0.2 is available
subtitle: The second maintenance release for PrestaShop 9 is here!
date: 2025-12-09
authors: [ PrestaShop ]
opengraph_image: /assets/images/2025/12/PrestaShop-9.0.2-LinkedIn_Facebook.png
twitter_image: /assets/images/2025/12/PrestaShop-9.0.2-X.png
icon: icon-leaf
tags:
- version
- patch
- releases
- "9.0"
- "9.0.x"
---

PrestaShop 9.0.2 is now available! This second patch version represents yet another step in making PrestaShop 9 more reliable. It focuses on fixing some reported issues to provide a more stable and seamless experience for merchants and developers.

![9.0.2 is available!](/assets/images/2025/12/PrestaShop-9.0.2-BuildBlog.png)

## PrestaShop 9 continues to focus on stability and polish

With the second maintenance release, our attention has shifted from broad feature work to refining the platform based on real-world feedback. 9.0.2 brings targeted fixes that improve reliability, developer experience, and daily merchant operations.

We recommend updating to 9.0.2 to benefit from these stability and quality improvements.

## What's New in PrestaShop 9.0.2

Version 9.0.2 includes [49 bug fixes](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+is%3Amerged+milestone%3A9.0.2+label%3A%22Bug+fix%22+) and [118 pull requests](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+is%3Amerged+milestone%3A9.0.2). 

This release is a great example of how much impact focused, incremental work can have on day-to-day stability. A large part of 9.0.2 comes from three long-time contributors who went deep into real merchant use cases.

**[@Progi1984](https://github.com/Progi1984)** tackled a wide range of back office and test-related fixes, from multistore, orders, imports and permissions to better SEO previews and new API test coverage.

**[@Codencode](https://github.com/Codencode)** delivered key improvements and bug fixes around products, attributes, multishop behavior, stock handling, and several front office edge cases, while also adding new hooks that give module developers more control.

On top of that, **[@Hlavtox](https://github.com/Hlavtox)** focused on polishing both the back office and front office experience - refining wording and configuration screens, optimizing category behavior, and fixing subtle issues in emails, customer forms, and core logic.

Together with all other contributors listed below, their work makes 9.0.2 a noticeably more solid and pleasant release to run in production.

Details are available in the changelog below. Update now to benefit from these enhancements.
Also, the team is aiming to release a new patch version about every six weeks, in step [with the release cycle](https://www.prestashop-project.org/project-organization/release-cycle/#patch-versions). 

## Download PrestaShop 9.0.2

You can download the Classic version from the official PrestaShop website. This version includes the PrestaShop SA modules, such as PrestaShop Checkout, PrestaShop Account, PrestaShop Marketplace in back office, PrestaShop CloudSync, PrestaShop Shipping, PrestaShop Marketing and PrestaShop Socials.

{{< cta "https://prestashop.com/versions/" >}}Download PrestaShop 9.0.2 now!{{< /cta >}}

---

**Creating a custom ZIP** :information_source:

If you don't want to use a Classic version, you can build your custom ZIP file with the PrestaShop 9.0.2 installer, which has no PrestaShop SA modules included. You can read the instructions on how to do it in the [PrestaShop Release Creation Tool readme](https://github.com/PrestaShop/PrestaShop/tree/develop/tools/build).

## Update to PrestaShop 9.0.2

We strongly encourage you to update your shop to PrestaShop 9.0.2 promptly to benefit from the extensive bug fixes and enhancements included in this release. Before updating, ensure you create a full backup of your shop to safeguard your data.

Updating to the latest version of PrestaShop `9.0.x` is straightforward with the [Update Assistant](https://github.com/PrestaShop/autoupgrade/releases/). This tool streamlines the update process, ensuring your shop remains current with minimal effort.

If you encounter any problems during the update that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).

## Full changelog

- Back Office:
  - Improvement:
    - [#40212](https://github.com/PrestaShop/PrestaShop/pull/40212): \[BC Break\] Update module api resources v0.2.0 (by [@jolelievre](https://github.com/jolelievre))
    - [#40088](https://github.com/PrestaShop/PrestaShop/pull/40088): Api normalization mapper indexes (by [@jolelievre](https://github.com/jolelievre))
    - [#39938](https://github.com/PrestaShop/PrestaShop/pull/39938): Add attachment ID to product attachments search and selection (by [@Codencode](https://github.com/Codencode))
    - [#40005](https://github.com/PrestaShop/PrestaShop/pull/40005): Backport Sort modules and mails templates by name in translations (by [@Codencode](https://github.com/Codencode))
    - [#39422](https://github.com/PrestaShop/PrestaShop/pull/39422): Improve order status form wording, improve theme selector (by [@Hlavtox](https://github.com/Hlavtox))
  - Bug fix:
    - [#40201](https://github.com/PrestaShop/PrestaShop/pull/40201): Fix path to legacy mail folder (by [@Hlavtox](https://github.com/Hlavtox))
    - [#40123](https://github.com/PrestaShop/PrestaShop/pull/40123): Update module api resources with new boolean rule (by [@jolelievre](https://github.com/jolelievre))
    - [#40091](https://github.com/PrestaShop/PrestaShop/pull/40091): Update module ps_apiresources with new conventions (by [@jolelievre](https://github.com/jolelievre))
    - [#40052](https://github.com/PrestaShop/PrestaShop/pull/40052): BO - Multistore : Fixed link "Add new group" (by [@Progi1984](https://github.com/Progi1984))
    - [#40082](https://github.com/PrestaShop/PrestaShop/pull/40082): Fix: Error in updating the state that has an ISO code equal to that of a different country's state (by [@Codencode](https://github.com/Codencode))
    - [#38617](https://github.com/PrestaShop/PrestaShop/pull/38617): Fix: Hook actionAttributeCombinationSave never triggered (by [@Codencode](https://github.com/Codencode))
    - [#40062](https://github.com/PrestaShop/PrestaShop/pull/40062): BO - Products Page : Fixed URL for documentation (by [@Progi1984](https://github.com/Progi1984))
    - [#40004](https://github.com/PrestaShop/PrestaShop/pull/40004): BO - Customer Service : Fixed button "Reply to the next unanswered message in this thread" (by [@Progi1984](https://github.com/Progi1984))
    - [#39999](https://github.com/PrestaShop/PrestaShop/pull/39999): BO : Product (Virtual) : Set number of days without expiration date (by [@Progi1984](https://github.com/Progi1984))
    - [#39892](https://github.com/PrestaShop/PrestaShop/pull/39892): Fix order of categories in admin (by [@Hlavtox](https://github.com/Hlavtox))
    - [#40021](https://github.com/PrestaShop/PrestaShop/pull/40021): BO - Orders : Fixed amount of order discounts when changing currency (by [@Progi1984](https://github.com/Progi1984))
    - [#37841](https://github.com/PrestaShop/PrestaShop/pull/37841): Fix: Multishop: Deleting and recreating a combination removes the shared reference (new Product Page V2) (by [@Codencode](https://github.com/Codencode))
    - [#39669](https://github.com/PrestaShop/PrestaShop/pull/39669): Fix grid doctrine query builder to use context language instead of employee language (by [@Codencode](https://github.com/Codencode))
    - [#39982](https://github.com/PrestaShop/PrestaShop/pull/39982): BO : Fixed anchor target for modules page (by [@Progi1984](https://github.com/Progi1984))
    - [#39834](https://github.com/PrestaShop/PrestaShop/pull/39834): BO Modules : Display only modules if you have the permission (by [@Progi1984](https://github.com/Progi1984))
    - [#39976](https://github.com/PrestaShop/PrestaShop/pull/39976): BO : Adresses : Fixed display of state if there is errors (by [@Progi1984](https://github.com/Progi1984))
    - [#39985](https://github.com/PrestaShop/PrestaShop/pull/39985): BO : Product SEO - Display attribute in SEO preview (by [@Progi1984](https://github.com/Progi1984))
    - [#39900](https://github.com/PrestaShop/PrestaShop/pull/39900): BO - Orders : Optimized Countries Choice (by [@Progi1984](https://github.com/Progi1984))
    - [#39833](https://github.com/PrestaShop/PrestaShop/pull/39833): BO - Orders - View - Carrier Modal : The selected carrier is the correct (by [@Progi1984](https://github.com/Progi1984))
    - [#39866](https://github.com/PrestaShop/PrestaShop/pull/39866): BO - Import : Added missing ISBN field for Products & Combinations (by [@Progi1984](https://github.com/Progi1984))
    - [#39897](https://github.com/PrestaShop/PrestaShop/pull/39897): BO - Categories : The description wasn't displayed by default in SERP (by [@Progi1984](https://github.com/Progi1984))
    - [#39914](https://github.com/PrestaShop/PrestaShop/pull/39914): BO - Permissions : Added authorization role for "More" (by [@Progi1984](https://github.com/Progi1984))
    - [#39886](https://github.com/PrestaShop/PrestaShop/pull/39886): Legacy email template scan (by [@tleon](https://github.com/tleon))
    - [#39874](https://github.com/PrestaShop/PrestaShop/pull/39874): BO - Products : Enable/Disable actions depending on permissions (by [@Progi1984](https://github.com/Progi1984))
    - [#39877](https://github.com/PrestaShop/PrestaShop/pull/39877): Add the possibility to bulk assign a new zone (by [@nicosomb](https://github.com/nicosomb))
    - [#38301](https://github.com/PrestaShop/PrestaShop/pull/38301): Fix: AverageTaxOfProductsTaxCalculator, Cannot use a scalar value as an array (by [@Codencode](https://github.com/Codencode))
    - [#39691](https://github.com/PrestaShop/PrestaShop/pull/39691): Fix: Ensure order status template keeps between saves (by [@ChillCode](https://github.com/ChillCode))
    - [#39802](https://github.com/PrestaShop/PrestaShop/pull/39802): BO: State Grid : Clean unuseful parameters (by [@Progi1984](https://github.com/Progi1984))
    - [#39758](https://github.com/PrestaShop/PrestaShop/pull/39758): Allow attribute groups colors/textures on groups with ID different than 2 (by [@ChillCode](https://github.com/ChillCode))
    - [#39578](https://github.com/PrestaShop/PrestaShop/pull/39578): Fix issue with null values on stores from import (by [@Prestaworks](https://github.com/Prestaworks))
    - [#39732](https://github.com/PrestaShop/PrestaShop/pull/39732): Fix order tax update (by [@tleon](https://github.com/tleon))
    - [#39728](https://github.com/PrestaShop/PrestaShop/pull/39728): Fix product broken when redirect target is deleted (by [@tleon](https://github.com/tleon))
    - [#39714](https://github.com/PrestaShop/PrestaShop/pull/39714): BO: Email Layouts : Set table responsive (by [@Progi1984](https://github.com/Progi1984))
    - [#39621](https://github.com/PrestaShop/PrestaShop/pull/39621): \[BO\] Added DataCollector for Legacy Profiling (by [@Progi1984](https://github.com/Progi1984))
    - [#39637](https://github.com/PrestaShop/PrestaShop/pull/39637): Ensure cache is cleared on each module action even when they fail (by [@jolelievre](https://github.com/jolelievre))
  - Refactoring:
    - [#39990](https://github.com/PrestaShop/PrestaShop/pull/39990): Remove extra join (by [@Hlavtox](https://github.com/Hlavtox))
    - [#39893](https://github.com/PrestaShop/PrestaShop/pull/39893): Optimize category input (by [@Hlavtox](https://github.com/Hlavtox))
    - [#39748](https://github.com/PrestaShop/PrestaShop/pull/39748): BO : Webservice : Refactoring using CQRS (by [@Progi1984](https://github.com/Progi1984))

- Front Office:
  - Improvement:
    - [#39913](https://github.com/PrestaShop/PrestaShop/pull/39913): Add new hooks: actionOverrideQuantityAvailableByProduct - actionCheckAttributeQuantity - actionOverrideProductQuantity (by [@Codencode](https://github.com/Codencode))
    - [#39928](https://github.com/PrestaShop/PrestaShop/pull/39928): Remove very specific text about payment validation (by [@Hlavtox](https://github.com/Hlavtox))
    - [#39891](https://github.com/PrestaShop/PrestaShop/pull/39891): Fix: ProductController::findProductCombinationById() incorrect return type (by [@Codencode](https://github.com/Codencode))
  - Bug fix:
    - [#40044](https://github.com/PrestaShop/PrestaShop/pull/40044): Multistore : Display countries only those covered by active carriers (by [@Progi1984](https://github.com/Progi1984))
    - [#36796](https://github.com/PrestaShop/PrestaShop/pull/36796): Fix: Product customization text appears as raw HTML in order confirmation email (order_conf) (by [@Codencode](https://github.com/Codencode))
    - [#39817](https://github.com/PrestaShop/PrestaShop/pull/39817): Improve front office customer form validation to fix issues with guests and emails (by [@Hlavtox](https://github.com/Hlavtox))
    - [#39572](https://github.com/PrestaShop/PrestaShop/pull/39572): Fix: Front container lazy service declaration (by [@Codencode](https://github.com/Codencode))
    - [#39525](https://github.com/PrestaShop/PrestaShop/pull/39525): Fix: Fatal Error : Doctrine proxy classes and cache in production mode Prestashop 9.0.0 (by [@Codencode](https://github.com/Codencode))
    - [#39606](https://github.com/PrestaShop/PrestaShop/pull/39606): fix(CustomerMessage): increase user_agent length from 128 to 255 to prevent silent validation errors on some mobile contact form (by [@yebor974](https://github.com/yebor974))
    - [#39651](https://github.com/PrestaShop/PrestaShop/pull/39651): Fix the canonical redirection when category slug is wrong but id is correct (by [@aomaxime](https://github.com/aomaxime))
    - Refactoring:
    - [#39941](https://github.com/PrestaShop/PrestaShop/pull/39941): Improve confirmation logic and remove module check (by [@Hlavtox](https://github.com/Hlavtox))
    - [#39934](https://github.com/PrestaShop/PrestaShop/pull/39934): Make sure address IDs are returned consistently (by [@Hlavtox](https://github.com/Hlavtox))
    - [#39935](https://github.com/PrestaShop/PrestaShop/pull/39935): Comment address save process (by [@Hlavtox](https://github.com/Hlavtox))
    - [#39666](https://github.com/PrestaShop/PrestaShop/pull/39666): Explain parent initialization for future generation (by [@Hlavtox](https://github.com/Hlavtox))

- Core:
  - Improvement:
    - [#40136](https://github.com/PrestaShop/PrestaShop/pull/40136): Add more logs in database dumping script (by [@nicosomb](https://github.com/nicosomb))
    - [#40100](https://github.com/PrestaShop/PrestaShop/pull/40100): Manual verifications release 902 (by [@mattgoud](https://github.com/mattgoud))
    - [#40068](https://github.com/PrestaShop/PrestaShop/pull/40068): Chore: \[release-9.0.2\]\[preliminary-task\]- update composer (classic-theme 3.0.4) (by [@mattgoud](https://github.com/mattgoud))
    - [#40047](https://github.com/PrestaShop/PrestaShop/pull/40047): Bump version to 9.0.2 (by [@tleon](https://github.com/tleon))
    - [#39775](https://github.com/PrestaShop/PrestaShop/pull/39775): Corrects the date in the change log (by [@Touxten](https://github.com/Touxten))
    - [#39742](https://github.com/PrestaShop/PrestaShop/pull/39742): Merge release-9.0.1 into 9.0.x (by [@tyloo](https://github.com/tyloo))
    - [#39589](https://github.com/PrestaShop/PrestaShop/pull/39589): Improved generation of queries and commands (by [@kpodemski](https://github.com/kpodemski))
  - Bug fix:
    - [#39905](https://github.com/PrestaShop/PrestaShop/pull/39905): Fixed swagger property filter system for mapped properties (by [@tleon](https://github.com/tleon))
    - [#40030](https://github.com/PrestaShop/PrestaShop/pull/40030): Initialize dispatcher early and fix all \$_FILES issues (by [@Hlavtox](https://github.com/Hlavtox))
    - [#39835](https://github.com/PrestaShop/PrestaShop/pull/39835): Fix Manufacturer/Supplier controllers return types for their respective getters (by [@prestamodule](https://github.com/prestamodule))
    - [#40017](https://github.com/PrestaShop/PrestaShop/pull/40017): Check if function exec is disabled in ExecKernelCacheClearer (by [@jolelievre](https://github.com/jolelievre))
    - [#39674](https://github.com/PrestaShop/PrestaShop/pull/39674): Fix log level create test db for `9.0.x` (by [@boherm](https://github.com/boherm))
  - Refactoring:
    - [#39950](https://github.com/PrestaShop/PrestaShop/pull/39950): Cookie account_created - absolete code from PS 1.6 (by [@ShaiMagal](https://github.com/ShaiMagal))

- Installer:
  - Improvement:
    - [#40127](https://github.com/PrestaShop/PrestaShop/pull/40127): Update default catalog 9.0.x (by [@ps-jarvis](https://github.com/ps-jarvis))
    - [#39305](https://github.com/PrestaShop/PrestaShop/pull/39305): Rework Docker Developer Experience and Added documentation (by [@tyloo](https://github.com/tyloo))
    - [#39619](https://github.com/PrestaShop/PrestaShop/pull/39619): Update default catalog 9.0.x (by [@ps-jarvis](https://github.com/ps-jarvis))
  - Bug fix:
    - [#39959](https://github.com/PrestaShop/PrestaShop/pull/39959): Chore: fix docker entrypoint wait assets script (by [@tyloo](https://github.com/tyloo))

- Web Services:
  - Bug fix:
  - [#39904](https://github.com/PrestaShop/PrestaShop/pull/39904): Add DateImmutable for api type consistency (by [@tleon](https://github.com/tleon))

- Localization:
  - Improvement:
    - [#39012](https://github.com/PrestaShop/PrestaShop/pull/39012): Update italian provinces as of June 2025 (by [@mavalentin](https://github.com/mavalentin))
- Tests:
  - Improvement:
    - [#40121](https://github.com/PrestaShop/PrestaShop/pull/40121): Functional Tests : Improve UI Tests after #40088 (by [@Progi1984](https://github.com/Progi1984))
    - [#39940](https://github.com/PrestaShop/PrestaShop/pull/39940): Functional Tests : Added new endpoints (by [@Progi1984](https://github.com/Progi1984))
    - [#40029](https://github.com/PrestaShop/PrestaShop/pull/40029): Functional Tests : API : GET /admin-api/zones (by [@Progi1984](https://github.com/Progi1984))
    - [#40012](https://github.com/PrestaShop/PrestaShop/pull/40012): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#40016](https://github.com/PrestaShop/PrestaShop/pull/40016): Functional Tests : API : DELETE /admin-api/product/image/\{imageId\} (by [@Progi1984](https://github.com/Progi1984))
    - [#39987](https://github.com/PrestaShop/PrestaShop/pull/39987): Functional Tests : API : DELETE /admin-api/search-alias/\{search\} (by [@Progi1984](https://github.com/Progi1984))
    - [#39965](https://github.com/PrestaShop/PrestaShop/pull/39965): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#39902](https://github.com/PrestaShop/PrestaShop/pull/39902): Functional Tests : BO - Cart rules - Conditions : Case 9 - Compatibility with other cart rules (by [@Progi1984](https://github.com/Progi1984))
    - [#39812](https://github.com/PrestaShop/PrestaShop/pull/39812): TE: Bump behat/behat (v3.16.0 => v3.25.0) (by [@Progi1984](https://github.com/Progi1984))
    - [#39875](https://github.com/PrestaShop/PrestaShop/pull/39875): Functional Tests : BO - Cart rules - Condition : Case 2 - Valid Date Time (by [@Progi1984](https://github.com/Progi1984))
    - [#39871](https://github.com/PrestaShop/PrestaShop/pull/39871): Bump prestashop/ps_apiresources (by [@Progi1984](https://github.com/Progi1984))
    - [#39870](https://github.com/PrestaShop/PrestaShop/pull/39870): Functional Tests : BO - Cart rules - Condition : Case 2 bis - Invalid Date Time (by [@Progi1984](https://github.com/Progi1984))
    - [#39856](https://github.com/PrestaShop/PrestaShop/pull/39856): Functional Tests : API : DELETE /admin-api/category/\{categoryId\}/cover (by [@Progi1984](https://github.com/Progi1984))
    - [#39844](https://github.com/PrestaShop/PrestaShop/pull/39844): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#39846](https://github.com/PrestaShop/PrestaShop/pull/39846): Functional Tests : API : GET /attributes/attribute/\{attributeId\} (by [@Progi1984](https://github.com/Progi1984))
    - [#39828](https://github.com/PrestaShop/PrestaShop/pull/39828): Functional Tests : API : POST /admin-api/attributes/attribute (by [@Progi1984](https://github.com/Progi1984))
    - [#39815](https://github.com/PrestaShop/PrestaShop/pull/39815): Functional Tests : API : DELETE /admin-api/category/\{categoryId\} (by [@Progi1984](https://github.com/Progi1984))
    - [#39806](https://github.com/PrestaShop/PrestaShop/pull/39806): Functional Tests : API : DELETE /attributes/attribute/\{attributeId\} (by [@Progi1984](https://github.com/Progi1984))
    - [#39794](https://github.com/PrestaShop/PrestaShop/pull/39794): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#39777](https://github.com/PrestaShop/PrestaShop/pull/39777): Functional Tests : API : GET /categories (by [@Progi1984](https://github.com/Progi1984))
    - [#39768](https://github.com/PrestaShop/PrestaShop/pull/39768): Functional Tests : Update new endpoints (by [@Progi1984](https://github.com/Progi1984))
    - [#39767](https://github.com/PrestaShop/PrestaShop/pull/39767): Functional Tests : API : PUT /attributes/groups/delete (by [@Progi1984](https://github.com/Progi1984))
    - [#39754](https://github.com/PrestaShop/PrestaShop/pull/39754): Functional Tests : API : GET /attributes/groups (by [@Progi1984](https://github.com/Progi1984))
    - [#39749](https://github.com/PrestaShop/PrestaShop/pull/39749): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#39738](https://github.com/PrestaShop/PrestaShop/pull/39738): Functional Tests : API : PUT /hook/\{hookId\}/status (by [@Progi1984](https://github.com/Progi1984))
    - [#39731](https://github.com/PrestaShop/PrestaShop/pull/39731): Functional Tests : API : POST /attributes/group (by [@Progi1984](https://github.com/Progi1984))
    - [#39718](https://github.com/PrestaShop/PrestaShop/pull/39718): Functional Tests : API : PATCH /attributes/group/\{attributeGroupId\} (by [@Progi1984](https://github.com/Progi1984))
    - [#39701](https://github.com/PrestaShop/PrestaShop/pull/39701): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#39681](https://github.com/PrestaShop/PrestaShop/pull/39681): Github Action `setup-env` : Retry 5 times the download of MkCert (by [@Progi1984](https://github.com/Progi1984))
    - [#39677](https://github.com/PrestaShop/PrestaShop/pull/39677): Functional Tests : GET /attributes/group/\{attributeGroupId\} (by [@Progi1984](https://github.com/Progi1984))
    - [#39675](https://github.com/PrestaShop/PrestaShop/pull/39675): Functional Tests : Added new endpoints (by [@Progi1984](https://github.com/Progi1984))
    - [#39661](https://github.com/PrestaShop/PrestaShop/pull/39661): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#39593](https://github.com/PrestaShop/PrestaShop/pull/39593): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
  - Bug fix:
    - [#40042](https://github.com/PrestaShop/PrestaShop/pull/40042): Functional Tests : Unskip Test (Linked to issue #38787) (by [@Progi1984](https://github.com/Progi1984))
    - [#39901](https://github.com/PrestaShop/PrestaShop/pull/39901): BO - Categories : Responsive of the SERP block (by [@Progi1984](https://github.com/Progi1984))
    - [#39671](https://github.com/PrestaShop/PrestaShop/pull/39671): Functional Tests : Fix for ps_accounts (by [@Progi1984](https://github.com/Progi1984))
  - Refactoring:
    - [#40086](https://github.com/PrestaShop/PrestaShop/pull/40086): Functional Tests : API : DELETE /admin-api/category/\{categoryId\}/\{mode\} (by [@Progi1984](https://github.com/Progi1984))
    - [#39829](https://github.com/PrestaShop/PrestaShop/pull/39829): UI tests - Fix random errors in functional:BO:advanced-parameters:07-10  & functional:FO:hummingbird:08-12 (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#39807](https://github.com/PrestaShop/PrestaShop/pull/39807): Functional tests - Fix random error in Orders > Credit slips > Create filter credit slip (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#39702](https://github.com/PrestaShop/PrestaShop/pull/39702): Removed pdiddy occurences in PrestaShop project (by [@nicosomb](https://github.com/nicosomb))


## Acknowledgments

PrestaShop is an open source platform where many contributors, though not directly connected to PrestaShop SA, play vital roles in its development alongside the community.

This release is made possible thanks to [PrestaShop SA](https://prestashop.com/), but also individual contributors from the community, and companies from our ecosystem.

A big **thank you** to all contributors (in alphabetical order):

Boris Hermans, ChillCode, Codencode, Daniel Hlavacek, Dominik Shaim Ulrich, Franck Lefèvre, Jonathan LELIEVRE, Julien Bonvarlet, Krystian Podemski, Manuel Valentin, Mathieu Ferment, Matthias Goudjil, Maxime Sieczkowski, Nesrine Abdmouleh, Nicolas Lœuillet, Presta Module, Prestaworks, Thomas Leone, Thomas Roux ( Old Okom3pom ), Yoan Ballesteros
