---
layout: post
title:  PrestaShop 8.0.1 is available
subtitle: Maintenance version of the 8.0.x branch
date: 2023-01-05
authors: [ PrestaShop ]
image: /assets/images/2023/01/release801.png
icon: icon-leaf
tags:
- version
- patch
- releases
- 8.0.1
- 8.0.x
---

The first patch version for PrestaShop 8 is now available to download!

![8.0.1 is available!](/assets/images/2023/01/release801.png)

After a few weeks of intensive work from all project members, the first maintenance release for version 8 is now available.

In this patch, you can find more than [30 bug fixes](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+is%3Amerged+milestone%3A8.0.1+label%3A%22Bug+fix%22+) and one performance improvement that [prevents clearing the system's cache for bulk actions performed from the modules list](https://github.com/PrestaShop/PrestaShop/pull/29695).

It is recommended to upgrade your shop quickly in order to benefit from these fixes. Of course, don’t forget to backup before.

Reminder: by the time this article is published, the 1-Click Upgrade module’s latest version is [v4.15.0](https://github.com/PrestaShop/autoupgrade/releases/tag/v4.15.0), don’t forget to upgrade it.

---

## Full changelog

- Back Office:
  - New feature:
    - [#29039](https://github.com/PrestaShop/PrestaShop/pull/29039): Product list preview in product list V2 (by [@jolelievre](https://github.com/jolelievre))
  - Improvement:
    - [#29695](https://github.com/PrestaShop/PrestaShop/pull/29695): Do not clear system cache on bulk install,remove,upgrade module (by [@mflasquin](https://github.com/mflasquin))
    - [#29783](https://github.com/PrestaShop/PrestaShop/pull/29783): Migrate node-sass to sass-embedded on default theme (by [@NeOMakinG](https://github.com/NeOMakinG))
    - [#29574](https://github.com/PrestaShop/PrestaShop/pull/29574): Remove product image dropzone flex that was adding space (by [@margud](https://github.com/margud))
    - [#29021](https://github.com/PrestaShop/PrestaShop/pull/29021): Add webP to allowed format on the DropZone help (by [@PrestaEdit](https://github.com/PrestaEdit))
  - Bug fix:
    - [#30511](https://github.com/PrestaShop/PrestaShop/pull/30511): Save settings before generating htaccess (by [@atomiix](https://github.com/atomiix))
    - [#30512](https://github.com/PrestaShop/PrestaShop/pull/30512): Allow negative number for attribute quantity (by [@atomiix](https://github.com/atomiix))
    - [#30326](https://github.com/PrestaShop/PrestaShop/pull/30326): Force AbstractColumn::name to never be null (by [@jolelievre](https://github.com/jolelievre))
    - [#30362](https://github.com/PrestaShop/PrestaShop/pull/30362): Fix filemanager undefined translations (by [@Hlavtox](https://github.com/Hlavtox))
    - [#29132](https://github.com/PrestaShop/PrestaShop/pull/29132): Fix stock policy propagation on product combination (by [@FabienPapet](https://github.com/FabienPapet))
    - [#29693](https://github.com/PrestaShop/PrestaShop/pull/29693): Update material icons lib to fix the slow npm installation (by [@NeOMakinG](https://github.com/NeOMakinG))
    - [#29084](https://github.com/PrestaShop/PrestaShop/pull/29084): 27054: fixed taxes for wrong countries (by [@margud](https://github.com/margud))
    - [#29465](https://github.com/PrestaShop/PrestaShop/pull/29465): Add available_now & available_later labels constraints (by [@zuk3975](https://github.com/zuk3975))
    - [#29372](https://github.com/PrestaShop/PrestaShop/pull/29372): Hide suppliers if there are no suppliers on product v2 (by [@NeOMakinG](https://github.com/NeOMakinG))
    - [#29066](https://github.com/PrestaShop/PrestaShop/pull/29066): Fix combination deletion error (by [@margud](https://github.com/margud))
    - [#29859](https://github.com/PrestaShop/PrestaShop/pull/29859): Fix update status button responsive on order page (by [@NeOMakinG](https://github.com/NeOMakinG))
    - [#29846](https://github.com/PrestaShop/PrestaShop/pull/29846): Fix 29341 - Rate impact calculation (by [@FabienPapet](https://github.com/FabienPapet))
    - [#29587](https://github.com/PrestaShop/PrestaShop/pull/29587): Replace exception message by custom error message when uploading avatar with invalid extension (by [@lartist](https://github.com/lartist))
    - [#29554](https://github.com/PrestaShop/PrestaShop/pull/29554): Replace exception message by custom message on invalid avatar on employee page (by [@lartist](https://github.com/lartist))
    - [#29942](https://github.com/PrestaShop/PrestaShop/pull/29942): Fix alert spacing inside modal content of product page v2 (by [@NeOMakinG](https://github.com/NeOMakinG))
    - [#29047](https://github.com/PrestaShop/PrestaShop/pull/29047): Fix ordering by product name + add ordering by product id (movements page) (by [@marsaldev](https://github.com/marsaldev))
    - [#29791](https://github.com/PrestaShop/PrestaShop/pull/29791): Fix form layout in Advanced Parameters > Security > Password policy (by [@eternoendless](https://github.com/eternoendless))
    - [#29847](https://github.com/PrestaShop/PrestaShop/pull/29847): Fix product page v1 footer responsive (by [@NeOMakinG](https://github.com/NeOMakinG))
    - [#29584](https://github.com/PrestaShop/PrestaShop/pull/29584): Fix duplicate / wrongly pluralized error message on field length in BO (by [@yanmakouf](https://github.com/yanmakouf))
    - [#29224](https://github.com/PrestaShop/PrestaShop/pull/29224): Fix subcategories for multishop (by [@MeKeyCool](https://github.com/MeKeyCool))
    - [#29553](https://github.com/PrestaShop/PrestaShop/pull/29553): Add min height on alert to center icons vertically (by [@lartist](https://github.com/lartist))
- Front Office:
  - Bug fix:
    - [#28838](https://github.com/PrestaShop/PrestaShop/pull/28838): Update AbstractForm.php for Multilanguage fields (by [@panariga](https://github.com/panariga))
    - [#30084](https://github.com/PrestaShop/PrestaShop/pull/30084): Added check to see if delivery option is an array (by [@nicosomb](https://github.com/nicosomb))
    - [#30093](https://github.com/PrestaShop/PrestaShop/pull/30093): Add install fixtures for new registration page. (by [@Hlavtox](https://github.com/Hlavtox))
    - [#30252](https://github.com/PrestaShop/PrestaShop/pull/30252): Do not return customization values if cart is not set (by [@Prestaworks](https://github.com/Prestaworks))
    - [#29715](https://github.com/PrestaShop/PrestaShop/pull/29715): Fix discount detail in cart when a product has en ecotax with applied tax (by [@mflasquin](https://github.com/mflasquin))
    - [#29619](https://github.com/PrestaShop/PrestaShop/pull/29619): Remove inifinite loop on actionObjectUpdateAfter hook (by [@lartist](https://github.com/lartist))
    - [#29910](https://github.com/PrestaShop/PrestaShop/pull/29910): Fix image size when zooming on tablet (by [@NeOMakinG](https://github.com/NeOMakinG))
    - [#29665](https://github.com/PrestaShop/PrestaShop/pull/29665): Fix bad selector to fix checkbox issues on RMA (by [@mflasquin](https://github.com/mflasquin))
    - [#29632](https://github.com/PrestaShop/PrestaShop/pull/29632): Select new invoice address automatically (by [@lartist](https://github.com/lartist))
- Core:
  - Improvement:
    - [#30676](https://github.com/PrestaShop/PrestaShop/pull/30676): Upgraded classic theme and ps_contactinfo module (by [@nicosomb](https://github.com/nicosomb))
    - [#30454](https://github.com/PrestaShop/PrestaShop/pull/30454): Update composer dependencies (by [@mflasquin](https://github.com/mflasquin))
    - [#30437](https://github.com/PrestaShop/PrestaShop/pull/30437): Upgraded to latest symfony 4.4.x (by [@nicosomb](https://github.com/nicosomb))
    - [#30230](https://github.com/PrestaShop/PrestaShop/pull/30230): Upgrade cancel-workflow-action so that previous AND next same jobs are canceled except the last one (by [@lartist](https://github.com/lartist))
    - [#29586](https://github.com/PrestaShop/PrestaShop/pull/29586): [BC Break] Disable execution of multiple statements in a single SQL query (by [@atomiix](https://github.com/atomiix))
    - [#29636](https://github.com/PrestaShop/PrestaShop/pull/29636): Upgrade Smarty to 3.1.47 (by [@mflasquin](https://github.com/mflasquin))
    - [#29235](https://github.com/PrestaShop/PrestaShop/pull/29235): Update prestashop 1.7.8.x composer dependencies (by [@matks](https://github.com/matks))
    - [#29831](https://github.com/PrestaShop/PrestaShop/pull/29831): Convert 1.7.9 to 8.0.0 in deprecation message (by [@matks](https://github.com/matks))
  - Bug fix:
    - [#30465](https://github.com/PrestaShop/PrestaShop/pull/30465): fix(Cart): fix notice saving customization when customer field is empty and not required (by [@davidglezz](https://github.com/davidglezz))
    - GHSA-9qgp-9wwc-v29r: Potential Information exposure in the upload directory (by [@atomiix](https://github.com/atomiix))
    - [#30273](https://github.com/PrestaShop/PrestaShop/pull/30273): Test id_manufacturer index before accessing it (by [@Hlavtox](https://github.com/Hlavtox))
    - [#30114](https://github.com/PrestaShop/PrestaShop/pull/30114): Do not build a domain from the module name (Cherry pick of [#30080](https://github.com/PrestaShop/PrestaShop/pull/30080)) (by [@atomiix](https://github.com/atomiix))
    - [#29079](https://github.com/PrestaShop/PrestaShop/pull/29079): Change default assignation of Product::pack_stock_type (by [@abramofranchetti](https://github.com/abramofranchetti))
- Installer:
  - Improvement:
    - [#29616](https://github.com/PrestaShop/PrestaShop/pull/29616): Remove prestashop/prestashop-git from development environment (by [@FabienPapet](https://github.com/FabienPapet))
  - Bug fix:
    - [#30099](https://github.com/PrestaShop/PrestaShop/pull/30099): Fix issue on fresh installation with docker in branch 1.7.8.x (by [@sefirosweb](https://github.com/sefirosweb))
    - [#29615](https://github.com/PrestaShop/PrestaShop/pull/29615): Fixed installation screen when some config keys were missing (by [@nicosomb](https://github.com/nicosomb))
- Web Services:
  - Bug fix:
    - [#29756](https://github.com/PrestaShop/PrestaShop/pull/29756): Fix error on patch method because of php 8.0 throw a fatal error (by [@mflasquin](https://github.com/mflasquin))
- Localization:
  - Improvement:
    - [#30521](https://github.com/PrestaShop/PrestaShop/pull/30521): Fix translations (by [@atomiix](https://github.com/atomiix))
  - Bug fix:
    - [#30107](https://github.com/PrestaShop/PrestaShop/pull/30107): Add missing trans method instead of hard-coded wording (by [@jolelievre](https://github.com/jolelievre))
- Tests:
  - Improvement:
    - [#30451](https://github.com/PrestaShop/PrestaShop/pull/30451): Functional Tests : Split Tests (by [@Progi1984](https://github.com/Progi1984))
    - [#30191](https://github.com/PrestaShop/PrestaShop/pull/30191): Replace deprecated usage of ::set-output in Github actions (by [@jolelievre](https://github.com/jolelievre))
    - [#30222](https://github.com/PrestaShop/PrestaShop/pull/30222): BO - Orders - Credit Slips - Sort & Pagination Credit Slips (by [@cfarhani06](https://github.com/cfarhani06))
    - [#30057](https://github.com/PrestaShop/PrestaShop/pull/30057): Remove Aria-label attribute to improve BO pagination selectors (by [@boubkerbribri](https://github.com/boubkerbribri))
    - [#29785](https://github.com/PrestaShop/PrestaShop/pull/29785): Functional Tests : FO - Consult credit slip list & View PDF Credit slip & View order (by [@Progi1984](https://github.com/Progi1984))
    - [#29960](https://github.com/PrestaShop/PrestaShop/pull/29960): Functional Tests : BO - Search bar (by [@Progi1984](https://github.com/Progi1984))
    - [#29954](https://github.com/PrestaShop/PrestaShop/pull/29954): Functional Tests : BO - View my shop (by [@Progi1984](https://github.com/Progi1984))
    - [#29898](https://github.com/PrestaShop/PrestaShop/pull/29898): Functional Tests : BO - Orders - Shopping carts - View carts (by [@Progi1984](https://github.com/Progi1984))
    - [#29657](https://github.com/PrestaShop/PrestaShop/pull/29657): Functional tests : BO - My Profile (by [@Progi1984](https://github.com/Progi1984))
  - Bug fix:
    - [#30395](https://github.com/PrestaShop/PrestaShop/pull/30395): Fix CI for ubuntu-22.04 (by [@atomiix](https://github.com/atomiix))
    - [#29992](https://github.com/PrestaShop/PrestaShop/pull/29992): Better escape PR description for the Pull Request Validator Github action (by [@atomiix](https://github.com/atomiix))
    - [#30048](https://github.com/PrestaShop/PrestaShop/pull/30048): Fix linkchecker script for UI tests (by [@boubkerbribri](https://github.com/boubkerbribri))
    - [#29980](https://github.com/PrestaShop/PrestaShop/pull/29980): Functional Tests : Nightly - Fixed the successful message for the My Profile Page (by [@Progi1984](https://github.com/Progi1984))
    - [#29912](https://github.com/PrestaShop/PrestaShop/pull/29912): Delete run on label 'TE' for UI code checks (by [@sarahdib](https://github.com/sarahdib))
    - [#29844](https://github.com/PrestaShop/PrestaShop/pull/29844): Functional Tests : Fixed errors from the script `check:step-identifiers` (by [@Progi1984](https://github.com/Progi1984))
    - [#29698](https://github.com/PrestaShop/PrestaShop/pull/29698): Disable apache mpm_event module in the CI (cherry-pick) (by [@atomiix](https://github.com/atomiix))
  - Refactoring:
    - [#30328](https://github.com/PrestaShop/PrestaShop/pull/30328): Remove multi statement SQL queries from integration tests (by [@jolelievre](https://github.com/jolelievre))
    - [#30265](https://github.com/PrestaShop/PrestaShop/pull/30265): Backport [#30257](https://github.com/PrestaShop/PrestaShop/pull/30257) - Fix random errors 10-11 (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#29802](https://github.com/PrestaShop/PrestaShop/pull/29802): Functional tests - Refacto BO - bulk duplicate products (by [@khouloudbelguith](https://github.com/khouloudbelguith))
    - [#30188](https://github.com/PrestaShop/PrestaShop/pull/30188): Functional tests  - Fix invalid format image error message (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#30184](https://github.com/PrestaShop/PrestaShop/pull/30184): Functional test - Fix errors in Nightly 02-11-2022 (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#30066](https://github.com/PrestaShop/PrestaShop/pull/30066): Functional tests - Refacto BO - Catalog - crud category (by [@khouloudbelguith](https://github.com/khouloudbelguith))
    - [#29872](https://github.com/PrestaShop/PrestaShop/pull/29872): Functional tests - Add new test 'BO > Catalog > Cart rules customer group restriction (by [@cfarhani06](https://github.com/cfarhani06))
    - [#30082](https://github.com/PrestaShop/PrestaShop/pull/30082): Functional tests - Refacto (Rename combinations by attributes in all project) (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#30068](https://github.com/PrestaShop/PrestaShop/pull/30068): Functional tests - Fix nightly 19/10 (Fix FO > send message test) (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#30049](https://github.com/PrestaShop/PrestaShop/pull/30049): Functional Tests : BO - Cart rules - Case 10 - Country Restriction (by [@cfarhani06](https://github.com/cfarhani06))
    - [#30037](https://github.com/PrestaShop/PrestaShop/pull/30037): Functional tests - Fix 'BO > Orders > Preview order' test (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#29860](https://github.com/PrestaShop/PrestaShop/pull/29860): Functional tests - Add new test 'FO > Quick view product' (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#29956](https://github.com/PrestaShop/PrestaShop/pull/29956): Functional tests - Fix nightly 10/10/2022 (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#29928](https://github.com/PrestaShop/PrestaShop/pull/29928): Refacto tests - Delete 'Data>FO' & fix nightly (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#29805](https://github.com/PrestaShop/PrestaShop/pull/29805): Functional tests - Add new test 'BO > Catalog > Cart rules carrier restriction' (by [@cfarhani06](https://github.com/cfarhani06))
    - [#29896](https://github.com/PrestaShop/PrestaShop/pull/29896): Functional tests - Add new test 'FO > Marchandise returns > check order return PDF' (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#29864](https://github.com/PrestaShop/PrestaShop/pull/29864): Fix nightly 04/10/2022 - Fix  'BO > Header > My profile' test (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#29855](https://github.com/PrestaShop/PrestaShop/pull/29855): Refacto UI tests login page to simplify usage (by [@boubkerbribri](https://github.com/boubkerbribri))
    - [#29835](https://github.com/PrestaShop/PrestaShop/pull/29835): Functional tests - Add new test 'FO > Check slider' (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#29823](https://github.com/PrestaShop/PrestaShop/pull/29823): Functional tests - Fix nightly 30-09-2022 (FO > User account > Get data in CSV file ) (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#29757](https://github.com/PrestaShop/PrestaShop/pull/29757): Functional  tests - Add new test 'FO > Consult merchandise returns details' (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#29726](https://github.com/PrestaShop/PrestaShop/pull/29726): Functional tests - Add new test 'FO > User account > Get GDPR data in csv' (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#29800](https://github.com/PrestaShop/PrestaShop/pull/29800): Functional tests - Add new test 'FO > Contact us > Add attachment' (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))


## Acknowledgments

Contributors to this patch version, from both the project members and the community at large:

Abramo Franchetti, Boubker Bribri, Chedly Farhani, Daniel Hlavacek, David Gonzalez, Fabien Papet, Franck Lefèvre, Javier García, Jonathan Danse, Jonathan Lelievre, Julius Žukauskas, Khouloud Belguith, Krystian Podemski, Marco Salvatore, Marius Gudauskis, Mathieu Ferment, Matthieu Rolland, Maxime Flasquin, Nesrine Abdmouleh, Nicolas Lœuillet, okom3pom, Pablo Borowicz, panariga, Pierre-Yves Christmann, Prestaworks, Salim Benouamer, Sarah Dib, sefirosweb, Thomas Baccelli, Valentin Szczupak, Yani Makouf

Thank you!

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/8.0.1" >}}Download PrestaShop 8.0.1 now!{{< /cta >}}

Since version 8.0.1 is a “patch” update, upgrading from version 8.0.0 should happen without any issues.

Features will work better, and modules and themes, which worked fine on 8.0.0, will work just as well with 8.0.1. As for every upgrade, it's highly recommended to do a full manual backup beforehand.

If you encounter any problems during the upgrade that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).
