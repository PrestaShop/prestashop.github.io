---
layout: post
title:  PrestaShop 9.1.5 is available
subtitle: "Five security fixes and around a hundred bug fixes, closing the 9.1.x line before PrestaShop 9.2."
date: 2026-08-18 07:00:00
authors: [ PrestaShop ]
icon: icon-leaf
image: /assets/images/2026/08/9.1.5_1534x434.png
opengraph_image: /assets/images/2026/08/9.1.5_1200x728.png
twitter_image: /assets/images/2026/08/9.1.5_1024x512.png
tags:
- version
- patch
- releases
- security
- "9.1"
- "9.1.x"
---

PrestaShop 9.1.5 is now available. This release combines two things: five security fixes reported through coordinated disclosure, and the largest batch of bug fixes the 9.1 branch has received since 9.1.2. It is also the last planned release of the 9.1.x line before PrestaShop 9.2. Updating as soon as possible is strongly recommended.

![PrestaShop 9.1.5 is available!](/assets/images/2026/08/9.1.5_1534x434.png)

## Security fixes

* **Formula injection in CSV exports** (Severity: High 8.3/10, CWE-1236)
  * Identifier: [GHSA-w6j9-q9rq-wrqg](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-w6j9-q9rq-wrqg)
  * Exported values were written as-is, so a crafted value could be interpreted as a formula by the spreadsheet application opening the file. The person at risk is whoever opens the export: a merchant, an employee, an accountant, or a customer receiving their GDPR export.
* **Server-Side Request Forgery through image URLs in the CSV import** (Severity: High 8.2/10, CWE-918)
  * Identifier: [GHSA-xrwj-pq6w-f8m4](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-xrwj-pq6w-f8m4)
  * Image addresses listed in an imported CSV file were downloaded by the server without being checked, so it would fetch whatever it was pointed at. The import permission is required, so a privileged back office account is needed.
* **Client IP address can be spoofed through the X-Forwarded-For header** (Severity: High 7.3/10, CWE-290)
  * Identifier: [GHSA-2cr4-vw9p-pjvf](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-2cr4-vw9p-pjvf)
  * PrestaShop read the visitor-controlled end of the forwarding header instead of the part appended by the shop's own proxy. Any visitor could therefore claim any IP address, which undermines the maintenance-mode allow-list, audit logs, and third-party protections such as geolocation blocking or rate limiting.
* **SQL injection through back office list filters** (Severity: Medium 6.5/10, CWE-89)
  * Identifier: [GHSA-whxq-pxj5-qq7v](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-whxq-pxj5-qq7v)
  * Filter names used by back office listings were not sufficiently validated before being used to build the database query. A logged-in employee, even one with the most restricted built-in profile, could read data from anywhere in the shop database.
* **Improper access control on the back office notifications endpoint** (Severity: Medium 4.3/10, CWE-862)
  * Identifier: [GHSA-jf3w-9rmr-5rcr](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-jf3w-9rmr-5rcr)
  * The data behind the notification panel was served without checking employee permissions, exposing recent customer and order information to any logged-in employee. The endpoints now require read permission on orders, customers, or customer service threads.

Full technical details, attack vectors, and workarounds are documented in each advisory.

These issues are also fixed in PrestaShop 8.2.8, released simultaneously.

### A note on your proxy configuration

Correct IP handling is a shared responsibility between the application and the hosting setup, so this applies whether or not you have updated. If your shop runs behind a reverse proxy, a load balancer, or a CDN, make sure the front-end proxy overwrites the forwarding header with the address it actually sees, rather than passing on whatever the visitor sent. The [X-Forwarded-For advisory](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-2cr4-vw9p-pjvf) contains ready-to-use Nginx and Apache configuration snippets, along with guidance for CDN users.

## What else is in 9.1.5?

Beyond the security work, this is a substantial maintenance release with close to a hundred merged pull requests, almost all of them bug fixes coming from the community. There are no breaking changes.

**Multistore** received a lot of attention again. Changing the [stock behaviour now works in a multistore context](https://github.com/PrestaShop/PrestaShop/pull/41923), the [`cache_default_attribute` value is reset for all shops](https://github.com/PrestaShop/PrestaShop/pull/41468) when a product with combinations becomes a standard product, the [reserved quantity is updated correctly](https://github.com/PrestaShop/PrestaShop/pull/40898) when available quantities are shared between shops, and [updating the schema of URLs for a single shop](https://github.com/PrestaShop/PrestaShop/pull/41394) no longer throws an error.

**The product page** got a series of fixes that developers and merchants have been reporting for a while: [special prices entered with a comma](https://github.com/PrestaShop/PrestaShop/pull/41919) are no longer silently turned into a dot, the [color preview disappears](https://github.com/PrestaShop/PrestaShop/pull/41797) when an attribute group stops being a color group, [custom feature values can be selected](https://github.com/PrestaShop/PrestaShop/pull/41736) even when no predefined values exist, and the [feature values grid excludes custom values](https://github.com/PrestaShop/PrestaShop/pull/41735) as it should.

**Orders and invoices** are in better shape too. Changing an order status no longer throws a [duplicate entry error when the order contains a deleted combination](https://github.com/PrestaShop/PrestaShop/pull/41652), the [status dropdown is empty](https://github.com/PrestaShop/PrestaShop/pull/41950) rather than misleading when an order has no status, the [invoice prefix is displayed in the employee's language](https://github.com/PrestaShop/PrestaShop/pull/41665), invoices [show the payment method when no payment has been recorded](https://github.com/PrestaShop/PrestaShop/pull/41524), and [invoice filenames are sanitized](https://github.com/PrestaShop/PrestaShop/pull/41457) before being served.

**The new discounts system**, still behind a feature flag, keeps maturing. The back office is now [connected to the `GET /discount-types` endpoint](https://github.com/PrestaShop/PrestaShop/pull/41944), the [highlight option is back in the Discount V2 form](https://github.com/PrestaShop/PrestaShop/pull/41573), the [status can be changed from the edit page](https://github.com/PrestaShop/PrestaShop/pull/41552), and [catalog price rule links](https://github.com/PrestaShop/PrestaShop/pull/41929) point where they should when the flag is enabled.

**SEO and the front office** benefit from several fixes worth calling out: the [meta title is no longer appended to CMS page, CMS category, manufacturer, and supplier URLs](https://github.com/PrestaShop/PrestaShop/pull/41808), an [empty EAN-13 no longer ends up in product URLs](https://github.com/PrestaShop/PrestaShop/pull/41750), [word separation is preserved when stripping HTML for the search index](https://github.com/PrestaShop/PrestaShop/pull/41840), and [`Image::getCover()` is now scoped to the shop](https://github.com/PrestaShop/PrestaShop/pull/41899).

There is a handful of additions for developers as well. A new [`actionNotFound` hook](https://github.com/PrestaShop/PrestaShop/pull/41824) makes it possible to react to 404s, [prices are exposed in all their variants](https://github.com/PrestaShop/PrestaShop/pull/40977) so templates no longer have to recompute them, a [theme helper checks the framework's compatibility](https://github.com/PrestaShop/PrestaShop/pull/40654), and [`/init.php` has been hardened and deprecated](https://github.com/PrestaShop/PrestaShop/pull/41281). On the packaging side, [Hummingbird development files are no longer included in the release package](https://github.com/PrestaShop/PrestaShop/pull/41761). Symfony components have been bumped three times to follow the 6.4.x patch releases, up to `6.4.43`.

## The last release of the 9.1.x line

PrestaShop 9.1.5 is the final planned release of the 9.1 branch before PrestaShop 9.2. Everything the maintainers and the community have been fixing on 9.1.x since 9.1.4 landed here, which is part of why this release is so much larger than the previous ones.

What comes next is [PrestaShop 9.2]({{< relref "/news/releases/prestashop-9-2-beta1" >}}), currently in beta and open for feedback. It brings a native One Page Checkout module in the bundle, an "Ask AI" assistant in the back office, and the new Extra Properties system for developers. If you have not tried it yet, now is a good moment: feedback given during the beta is what shapes the final release.

## Contributors to this release

{{< contributors-grid "aeyoll" "aleksiuno" "AureRita" "axel-paillaud" "boo-code" "Codencode" "david-prochazka" "djbuch" "gross-nvs" "guillaume60240" "hadjedjvincent" "Hlavtox" "jf-viguier" "jolelievre" "kpodemski" "LaBisquerie" "Maofree" "mattgoud" "matthieu-rolland" "Nakahiru" "nicohery" "nicosomb" "paulschwahn" "PrestaEdit" "Prestaworks" "Progi1984" >}}
PrestaShop 9.1.5 is, above all, a community release. [@Codencode](https://github.com/Codencode) is behind a remarkable share of the bug fixes in this version, covering multistore, the product page, orders, and the core. [@boo-code](https://github.com/boo-code) fixed a series of subtle issues across grids, images, and the search index, [@Progi1984](https://github.com/Progi1984) kept the functional test suite healthy while also fixing invoices and shopping carts, [@Hlavtox](https://github.com/Hlavtox) contributed the `actionNotFound` hook along with several front office and core refactorings, and [@mattgoud](https://github.com/mattgoud) and [@nicosomb](https://github.com/nicosomb) moved the discounts work and the dependency updates forward.

Thank you to all of them, and to everyone below who took part in this release. Want to join them? [Start contributing today](https://www.prestashop-project.org/get-involved/) and help shape the future of open source e-commerce.
{{< /contributors-grid >}}

## Download PrestaShop 9.1.5

You can download the Classic version from the official PrestaShop website. This version includes the PrestaShop SA modules, such as PrestaShop Checkout, PrestaShop Account, PrestaShop Marketplace in the back office, PrestaShop CloudSync, PrestaShop Shipping, PrestaShop Marketing, and PrestaShop Socials.

{{< cta "https://prestashop.com/versions/#:~:text=PrestaShop%209.1.5" >}}Download PrestaShop 9.1.5 now!{{< /cta >}}

<details class="advanced-toggle">
<summary>Need a custom ZIP without PrestaShop SA modules?</summary>

If you don't want to use the Classic version, you can build your custom ZIP file with the PrestaShop 9.1.5 installer, which doesn't include any PrestaShop SA modules. You can read the instructions on how to do it in the [PrestaShop Release Creation Tool readme](https://github.com/PrestaShop/PrestaShop/tree/develop/tools/build).

</details>

## Update to PrestaShop 9.1.5

Because this release fixes five security issues, we recommend applying it on any shop running 9.1.x as soon as possible. Before updating, ensure you create a full backup of your database and files to safeguard your data.

Updating to the latest version of PrestaShop `9.1.x` is straightforward with the [Update Assistant](https://github.com/PrestaShop/autoupgrade/releases/). This tool streamlines the update process, ensuring your shop remains current with minimal effort.

If you encounter any problems during the update that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).

## Full changelog

- Back Office:
  - Improvement:
    - [#41942](https://github.com/PrestaShop/PrestaShop/pull/41942): Add shared stock help message to combination availability form (by [@Codencode](https://github.com/Codencode))
    - [#41776](https://github.com/PrestaShop/PrestaShop/pull/41776): Change badge color for product quantity display (by [@Maofree](https://github.com/Maofree))
  - Bug fix:
    - [#42203](https://github.com/PrestaShop/PrestaShop/pull/42203): Let a grid status menu show past the scrolling table (by [@boo-code](https://github.com/boo-code))
    - [#42057](https://github.com/PrestaShop/PrestaShop/pull/42057): Fix changing an employee role when the default page is specific to the new role (by [@boo-code](https://github.com/boo-code))
    - [#42004](https://github.com/PrestaShop/PrestaShop/pull/42004): Fix UTF-8 string truncation in StringModifier::cutEnd() (by [@Codencode](https://github.com/Codencode))
    - [#42001](https://github.com/PrestaShop/PrestaShop/pull/42001): Guard order message name-uniqueness check on partial edit (backport 9.1.x) (by [@mattgoud](https://github.com/mattgoud))
    - [#41950](https://github.com/PrestaShop/PrestaShop/pull/41950): Show an empty order status dropdown when the order has no status (by [@boo-code](https://github.com/boo-code))
    - [#41944](https://github.com/PrestaShop/PrestaShop/pull/41944): Connect `GET /discount-types` to the BO (by [@nicosomb](https://github.com/nicosomb))
    - [#41929](https://github.com/PrestaShop/PrestaShop/pull/41929): Fix catalog price rule links when feature flag is enabled (by [@Codencode](https://github.com/Codencode))
    - [#41923](https://github.com/PrestaShop/PrestaShop/pull/41923): Changing stock behaviour not working with multistore. (by [@Prestaworks](https://github.com/Prestaworks))
    - [#41919](https://github.com/PrestaShop/PrestaShop/pull/41919): Fix: Problem with manual special price setting with comma becoming dot (product page) (by [@Codencode](https://github.com/Codencode))
    - [#41871](https://github.com/PrestaShop/PrestaShop/pull/41871): Use the small_default thumbnail for product/combination cover URLs (by [@boo-code](https://github.com/boo-code))
    - [#41797](https://github.com/PrestaShop/PrestaShop/pull/41797): Fix: Color preview is still displayed after changing an attribute group from color to another type (by [@Codencode](https://github.com/Codencode))
    - [#41736](https://github.com/PrestaShop/PrestaShop/pull/41736): Fix custom feature value selection when no predefined values exist (by [@Codencode](https://github.com/Codencode))
    - [#41735](https://github.com/PrestaShop/PrestaShop/pull/41735): Fix feature values grid to exclude custom values (by [@Codencode](https://github.com/Codencode))
    - [#41727](https://github.com/PrestaShop/PrestaShop/pull/41727): Fix: Module Development and Distribution: Prestashop deletes automatically src/Entity/index.php, but it does not recursively in subfolders (by [@Codencode](https://github.com/Codencode))
    - [#41675](https://github.com/PrestaShop/PrestaShop/pull/41675): Fix: HTMLPurifier through twig extension is not adhering to cache dir config (by [@Codencode](https://github.com/Codencode))
    - [#41665](https://github.com/PrestaShop/PrestaShop/pull/41665): Display invoice prefix in employee language on order view page (by [@PrestaEdit](https://github.com/PrestaEdit))
    - [#41652](https://github.com/PrestaShop/PrestaShop/pull/41652): Fix:  Changing an order's status throws "Duplicate entry '<idp>-<idpa>-0-0' for product_sqlstock" when the order contains a deleted combination (single-shop) (by [@Codencode](https://github.com/Codencode))
    - [#41611](https://github.com/PrestaShop/PrestaShop/pull/41611): Cart rule compatibility search does not filter results for new cart rule (by [@LaBisquerie](https://github.com/LaBisquerie))
    - [#41573](https://github.com/PrestaShop/PrestaShop/pull/41573): Fix highlight option missing in Discount V2 form (by [@mattgoud](https://github.com/mattgoud))
    - [#41570](https://github.com/PrestaShop/PrestaShop/pull/41570): Use position as default sorting for feature grid (by [@Codencode](https://github.com/Codencode))
    - [#41552](https://github.com/PrestaShop/PrestaShop/pull/41552): Fix #41189 - Allow changing discount status on edit page (by [@mattgoud](https://github.com/mattgoud))
    - [#41551](https://github.com/PrestaShop/PrestaShop/pull/41551): Fix shop selector lists overflowing their container (by [@david-prochazka](https://github.com/david-prochazka))
    - [#41530](https://github.com/PrestaShop/PrestaShop/pull/41530): Shopping Carts : For combinations, if no image defined, use the cover  image (by [@Progi1984](https://github.com/Progi1984))
    - [#41524](https://github.com/PrestaShop/PrestaShop/pull/41524): Invoice : If no payments, display the payment method (by [@Progi1984](https://github.com/Progi1984))
    - [#41468](https://github.com/PrestaShop/PrestaShop/pull/41468): Fix: Multishop: cache_default_attribute is not reset for all shops when changing a product with combinations to a standard product (by [@Codencode](https://github.com/Codencode))
    - [#41457](https://github.com/PrestaShop/PrestaShop/pull/41457): Enhance invoice filename safety by sanitizing number (by [@Maofree](https://github.com/Maofree))
    - [#41394](https://github.com/PrestaShop/PrestaShop/pull/41394): Fix: [Multishop] Error when updating "Schema of URLs" for a single shop (by [@Codencode](https://github.com/Codencode))
    - [#41307](https://github.com/PrestaShop/PrestaShop/pull/41307): Fix PDF downloads using Symfony responses (by [@Codencode](https://github.com/Codencode))
    - [#41303](https://github.com/PrestaShop/PrestaShop/pull/41303): Fix address state selection after country states reload (by [@Codencode](https://github.com/Codencode))
    - [#41238](https://github.com/PrestaShop/PrestaShop/pull/41238): Fix: Inconsistent escaping of displayCustomization output (by [@Codencode](https://github.com/Codencode))
    - [#41206](https://github.com/PrestaShop/PrestaShop/pull/41206): Bugfix: prevent email shortcodes automatically being moved. Fixes #38563 issue (by [@aleksiuno](https://github.com/aleksiuno))
    - [#41204](https://github.com/PrestaShop/PrestaShop/pull/41204): Change the redirection of combination button learn more (by [@AureRita](https://github.com/AureRita))
    - [#41036](https://github.com/PrestaShop/PrestaShop/pull/41036): Fix: Error 500 if I enter a space in a customer's first or last name field (by [@Codencode](https://github.com/Codencode))
    - [#41007](https://github.com/PrestaShop/PrestaShop/pull/41007): Fix: CountryQueryBuilder::getCountQueryBuilder() always returns 1 instead of the true total (by [@Codencode](https://github.com/Codencode))
    - [#40999](https://github.com/PrestaShop/PrestaShop/pull/40999): Fix/40997 default currency import on shop copy (by [@Codencode](https://github.com/Codencode))
    - [#40898](https://github.com/PrestaShop/PrestaShop/pull/40898): Fix: Bug: reserved_quantity not updated when "Share available quantities for sale" is enabled (Multishop) (by [@Codencode](https://github.com/Codencode))
    - [#40099](https://github.com/PrestaShop/PrestaShop/pull/40099): Fix: Cart rule combinations lost when saving if lazy-loaded list (jscroll) is not fully loaded (by [@Codencode](https://github.com/Codencode))
- Front Office:
  - New feature:
    - [#41824](https://github.com/PrestaShop/PrestaShop/pull/41824): Add hook actionNotFound (by [@Hlavtox](https://github.com/Hlavtox))
  - Improvement:
    - [#41281](https://github.com/PrestaShop/PrestaShop/pull/41281): Harden and depreciate /init.php for 9.1.x (by [@jf-viguier](https://github.com/jf-viguier))
    - [#40977](https://github.com/PrestaShop/PrestaShop/pull/40977): Add prices in all variants to make displaying them easier in templates (by [@Hlavtox](https://github.com/Hlavtox))
  - Bug fix:
    - [#42000](https://github.com/PrestaShop/PrestaShop/pull/42000): Fix ProductController::getProduct() nullable return type (by [@Codencode](https://github.com/Codencode))
    - [#41899](https://github.com/PrestaShop/PrestaShop/pull/41899): Scope Image::getCover() to the shop (by [@boo-code](https://github.com/boo-code))
    - [#41649](https://github.com/PrestaShop/PrestaShop/pull/41649): Add missing breadcrumb link to OrderDetailController (by [@Codencode](https://github.com/Codencode))
    - [#41590](https://github.com/PrestaShop/PrestaShop/pull/41590): Add missing breadcrumb link to CartController (by [@Codencode](https://github.com/Codencode))
    - [#41509](https://github.com/PrestaShop/PrestaShop/pull/41509): Avoid bad URL on invalid media with media servers enabled and CCC disabled (by [@gross-nvs](https://github.com/gross-nvs))
    - [#41299](https://github.com/PrestaShop/PrestaShop/pull/41299): Guard product page when product is null (by [@Codencode](https://github.com/Codencode))
    - [#41298](https://github.com/PrestaShop/PrestaShop/pull/41298): Fix: hook extra content issues with multi shipment (by [@Nakahiru](https://github.com/Nakahiru))
  - Refactoring:
    - [#41845](https://github.com/PrestaShop/PrestaShop/pull/41845): Add simple HTML to text stripper, refactor getting meta (by [@Hlavtox](https://github.com/Hlavtox))
- Core:
  - New feature:
    - [#40654](https://github.com/PrestaShop/PrestaShop/pull/40654): Theme helper to check framework's compatibility (by [@kpodemski](https://github.com/kpodemski))
  - Improvement:
    - [#42239](https://github.com/PrestaShop/PrestaShop/pull/42239): Update Symfony components after 6.4.43 release (by [@nicosomb](https://github.com/nicosomb))
    - [#41883](https://github.com/PrestaShop/PrestaShop/pull/41883): Update Symfony components after 6.4.42 release (by [@nicosomb](https://github.com/nicosomb))
    - [#41647](https://github.com/PrestaShop/PrestaShop/pull/41647): Bump version 9.1.5 (by [@jolelievre](https://github.com/jolelievre))
    - [#41567](https://github.com/PrestaShop/PrestaShop/pull/41567): Update Symfony components after 6.4.41 release (by [@nicosomb](https://github.com/nicosomb))
    - [#41529](https://github.com/PrestaShop/PrestaShop/pull/41529): Set version to 9.1.4 (by [@Progi1984](https://github.com/Progi1984))
    - [#41465](https://github.com/PrestaShop/PrestaShop/pull/41465): Update Symfony components after 6.4.39 release (by [@nicosomb](https://github.com/nicosomb))
    - #310: Implement URL safety validation for image imports (build-915) (by [@matthieu-rolland](https://github.com/matthieu-rolland))
  - Bug fix:
    - [#41842](https://github.com/PrestaShop/PrestaShop/pull/41842): Fix: Update cache directory handling in HTMLPurifier constructor (by [@Progi1984](https://github.com/Progi1984))
    - [#41840](https://github.com/PrestaShop/PrestaShop/pull/41840): Keep word separation when stripping HTML for the search index (by [@boo-code](https://github.com/boo-code))
    - [#41808](https://github.com/PrestaShop/PrestaShop/pull/41808): Fix meta title appended to CMS page, CMS category, manufacturer, and supplier URLs (by [@Codencode](https://github.com/Codencode))
    - [#41761](https://github.com/PrestaShop/PrestaShop/pull/41761): Fix Hummingbird development files included in release package (by [@Codencode](https://github.com/Codencode))
    - [#41760](https://github.com/PrestaShop/PrestaShop/pull/41760): Fix image-types list endpoint returning 405 by making grid data facto… (by [@axel-paillaud](https://github.com/axel-paillaud))
    - [#41750](https://github.com/PrestaShop/PrestaShop/pull/41750): Prevent empty ean13 into product URL (by [@hadjedjvincent](https://github.com/hadjedjvincent))
    - [#41708](https://github.com/PrestaShop/PrestaShop/pull/41708): Fix states lookup using row indexes instead of country IDs (by [@paulschwahn](https://github.com/paulschwahn))
    - [#41626](https://github.com/PrestaShop/PrestaShop/pull/41626): Fix multilang fallback for fields using isRequiredWhenActive and defaultLanguageRequiredWhenActive validators (by [@guillaume60240](https://github.com/guillaume60240))
    - [#41431](https://github.com/PrestaShop/PrestaShop/pull/41431): Backport #41356 : Add CartId into product search handler when employeeId not provided (by [@Progi1984](https://github.com/Progi1984))
    - [#41386](https://github.com/PrestaShop/PrestaShop/pull/41386): Fix route management and comment Dispatcher (by [@Hlavtox](https://github.com/Hlavtox))
    - [#41273](https://github.com/PrestaShop/PrestaShop/pull/41273): Fix: cast bool field in get cms page category for editing handler (by [@axel-paillaud](https://github.com/axel-paillaud))
    - [#41225](https://github.com/PrestaShop/PrestaShop/pull/41225): Fix attribute and attribute group position ordering in core methods (by [@nicohery](https://github.com/nicohery))
    - [#41130](https://github.com/PrestaShop/PrestaShop/pull/41130): Fix: guard against null employee in associateWithShops() (by [@axel-paillaud](https://github.com/axel-paillaud))
    - [#40744](https://github.com/PrestaShop/PrestaShop/pull/40744): Fix translation catalogue filename corruption during export (by [@aeyoll](https://github.com/aeyoll))
    - [#39837](https://github.com/PrestaShop/PrestaShop/pull/39837): Change matching method in ShopContextSubscriber (by [@djbuch](https://github.com/djbuch))
    - #317: Update modules and dependencies (by [@jolelievre](https://github.com/jolelievre))
  - Refactoring:
    - [#41713](https://github.com/PrestaShop/PrestaShop/pull/41713): Fix unit price ratio currency conversion and specific price issue (by [@Hlavtox](https://github.com/Hlavtox))
    - [#41579](https://github.com/PrestaShop/PrestaShop/pull/41579): Fix some deprecations (by [@Hlavtox](https://github.com/Hlavtox))
- Tests:
  - Improvement:
    - [#42134](https://github.com/PrestaShop/PrestaShop/pull/42134): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#42090](https://github.com/PrestaShop/PrestaShop/pull/42090): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#42033](https://github.com/PrestaShop/PrestaShop/pull/42033): Add integration tests for ModuleHtmlAuthorizationChecker (by [@Codencode](https://github.com/Codencode))
    - [#41987](https://github.com/PrestaShop/PrestaShop/pull/41987): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#41810](https://github.com/PrestaShop/PrestaShop/pull/41810): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#41805](https://github.com/PrestaShop/PrestaShop/pull/41805): Functional Tests : Fixed after #41570 (by [@Progi1984](https://github.com/Progi1984))
    - [#41788](https://github.com/PrestaShop/PrestaShop/pull/41788): Functional Tests : Improved for Klavyio (by [@Progi1984](https://github.com/Progi1984))
    - [#41780](https://github.com/PrestaShop/PrestaShop/pull/41780): Functional Tests : Improved for Klavyio (by [@Progi1984](https://github.com/Progi1984))
    - [#41747](https://github.com/PrestaShop/PrestaShop/pull/41747): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#41737](https://github.com/PrestaShop/PrestaShop/pull/41737): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#41659](https://github.com/PrestaShop/PrestaShop/pull/41659): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#41518](https://github.com/PrestaShop/PrestaShop/pull/41518): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#41503](https://github.com/PrestaShop/PrestaShop/pull/41503): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#41476](https://github.com/PrestaShop/PrestaShop/pull/41476): Functional Tests : Remove numbering in endpoints directoriess (by [@Progi1984](https://github.com/Progi1984))
    - [#41475](https://github.com/PrestaShop/PrestaShop/pull/41475): Functional Tests : @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#41462](https://github.com/PrestaShop/PrestaShop/pull/41462): Functional Tests : @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
  - Bug fix:
    - [#42031](https://github.com/PrestaShop/PrestaShop/pull/42031): Fix CI matrix generator crashing on backticks in PR description (by [@boo-code](https://github.com/boo-code))
    - [#41982](https://github.com/PrestaShop/PrestaShop/pull/41982): Pin maildev image to 2.2.1 in behaviour tests workflow (by [@nicosomb](https://github.com/nicosomb))
    - [#41755](https://github.com/PrestaShop/PrestaShop/pull/41755): Fix flaky quick access filter UI test (multi-tab) (by [@mattgoud](https://github.com/mattgoud))

## Acknowledgments

The security part of this release was made possible thanks to a coordinated disclosure process between external researchers and the PrestaShop maintainers team.

We would like to thank **Suphawith Phusanbai (ILOVEPEPPERONI)** for reporting the formula injection in CSV exports, [**lrui1**](https://github.com/lrui1) for the detailed report and proof of concept on the SSRF in the CSV import, **Pedro Gabaldón Juliá** of ITRESIT for reporting the X-Forwarded-For spoofing issue, **Robert Scherer** for reporting the access control issue on the notifications endpoint, and **Savio** at [Doyensec](https://www.doyensec.com/) for verifying and reporting the SQL injection, which was discovered by Claude (Anthropic) as part of Anthropic's Coordinated Vulnerability Disclosure programme.

On the maintainers side, thank you to [@matthieu-rolland](https://github.com/matthieu-rolland) for handling the advisories and preparing the patches, and to [@clotairer](https://github.com/clotairer) for his help with the analysis, validation, and testing of the fixes.

Thank you to everyone who contributes to keeping PrestaShop secure!
