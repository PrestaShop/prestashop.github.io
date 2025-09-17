---
layout: post
title:  PrestaShop 9.0.1 is available
subtitle: The first maintenance release for PrestaShop 9 is here!
date: 2025-10-13
authors: [ PrestaShop ]
opengraph_image: /assets/images/2025/09/PrestaShop-9.0.1-LinkedIn_Facebook.png
twitter_image: /assets/images/2025/09/PrestaShop-9.0.1-X.png
icon: icon-leaf
tags:
- version
- patch
- releases
- "9.0"
- "9.0.x"
---

The first patch version for PrestaShop 9 is now available! This maintenance release focuses on resolving some of the key issues to ensure a smoother experience for all users.

![9.0.1 is available!](/assets/images/2025/09/PrestaShop-9.0.1-BuildBlog.png)

## A strong start for PrestaShop 9

Since its release, PrestaShop 9 has been met with great enthusiasm from our community. Many developers, agencies, and merchants have actively tested the new version and shared their valuable feedback. This collaborative effort has been instrumental in helping us refine the new version. We want to thank each and every one of you for your contributions and engagement.

## What's New in PrestaShop 9.0.1

This maintenance release, the first patch for PrestaShop 9, is dedicated to resolving key issues that directly impact the day-to-day operations of our merchants.

A primary focus has been placed on addressing challenges encountered during the installation process on some environments, ensuring a smoother and more reliable deployment experience for everyone.

Version 9.0.1 includes more than [60 bug fixes](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+is%3Amerged+milestone%3A9.0.1+label%3A%22Bug+fix%22+) and more than [140 pull requests](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+is%3Amerged+milestone%3A9.0.1). You will also get changes from the recent [PrestaShop patch release 8.2.2]({{< relref "/news/releases/prestashop-8-2-3-security-release" >}}) and [8.2.3]({{< relref "/news/releases/prestashop-8-2-2-maintenance-release" >}}).

Details are available in the changelog below. Update now to benefit from these enhancements.

## Download PrestaShop 9.0.1

You can download the Classic version from the official PrestaShop website. This version includes the PrestaShop SA modules, such as:
- PrestaShop Checkout
- PrestaShop Account
- PrestaShop Marketplace in back office
- PrestaShop CloudSync
- PrestaShop Shipping
- PrestaShop Marketing
- PrestaShop Socials

{{< cta "https://prestashop.com/versions/" >}}Download PrestaShop 9.0.1 now!{{< /cta >}}

---

**Creating a custom ZIP** :information_source:

If you don't want to use a Classic version, you can build your custom ZIP file with the PrestaShop 9.0.1 installer, which has no PrestaShop SA modules included. You can read the instructions on how to do it in the [PrestaShop Release Creation Tool readme](https://github.com/PrestaShop/PrestaShop/tree/develop/tools/build).

## Update to PrestaShop 9.0.1

We strongly encourage you to update your shop to PrestaShop 9.0.1 promptly to benefit from the extensive bug fixes and enhancements included in this release. Before updating, ensure you create a full backup of your shop to safeguard your data.

Updating to the latest version of PrestaShop `9.0.x` is straightforward with the [Update Assistant](https://github.com/PrestaShop/autoupgrade/releases/). This tool streamlines the update process, ensuring your shop remains current with minimal effort.

If you encounter any problems during the update that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).

## Full changelog

- Back Office:
  - New feature:
    - [#39021](https://github.com/PrestaShop/PrestaShop/pull/39021): Bring back the ability to fill the login fields from the URL query params (by [@Quetzacoalt91](https://github.com/Quetzacoalt91))
    - [#39050](https://github.com/PrestaShop/PrestaShop/pull/39050): Prompt people to migrate to new page (by [@Hlavtox](https://github.com/Hlavtox))
  - Improvement:
    - [#39399](https://github.com/PrestaShop/PrestaShop/pull/39399): Fix: It is not possible to remove the texture and clear the color field when configuring the Attribute value (by [@Codencode](https://github.com/Codencode))
    - [#39451](https://github.com/PrestaShop/PrestaShop/pull/39451): Add customer_service to contact query selection (by [@PrestaEdit](https://github.com/PrestaEdit))
    - [#39404](https://github.com/PrestaShop/PrestaShop/pull/39404): Allow filtering module list for translation export (by [@kpodemski](https://github.com/kpodemski))
    - [#39277](https://github.com/PrestaShop/PrestaShop/pull/39277): Make the TinyMCEEditor more flexible and extensible via module (by [@Codencode](https://github.com/Codencode))
    - [#39196](https://github.com/PrestaShop/PrestaShop/pull/39196): Change 404 admin template (by [@Hlavtox](https://github.com/Hlavtox))
    - [#39322](https://github.com/PrestaShop/PrestaShop/pull/39322): Update Distribution API Client to include the new wall of fame (by [@jolelievre](https://github.com/jolelievre))
    - [#39321](https://github.com/PrestaShop/PrestaShop/pull/39321): Update Distribution API Client to include the new wall of fame (by [@jolelievre](https://github.com/jolelievre))
    - [#39192](https://github.com/PrestaShop/PrestaShop/pull/39192): Add product errors (by [@Hlavtox](https://github.com/Hlavtox))
    - [#38042](https://github.com/PrestaShop/PrestaShop/pull/38042): Added field "Module name" to admin carrier list (by [@Codencode](https://github.com/Codencode))
    - [#39175](https://github.com/PrestaShop/PrestaShop/pull/39175): Improve API misconfiguration error (by [@jolelievre](https://github.com/jolelievre))
    - [#39162](https://github.com/PrestaShop/PrestaShop/pull/39162): Add new hooks: actionOrderHasBeenShipped and actionOrderHasBeenDelivered (by [@Codencode](https://github.com/Codencode))
    - [#39092](https://github.com/PrestaShop/PrestaShop/pull/39092): Fix: harmonize carrier page style (by [@tblivet](https://github.com/tblivet))
    - [#39084](https://github.com/PrestaShop/PrestaShop/pull/39084): Fix: Date picker handle color (by [@tblivet](https://github.com/tblivet))
    - [#39078](https://github.com/PrestaShop/PrestaShop/pull/39078): Fix: carrier logo preview size (by [@tblivet](https://github.com/tblivet))
    - [#38717](https://github.com/PrestaShop/PrestaShop/pull/38717): Use v8 documentation in HelperCard (by [@PrestaEdit](https://github.com/PrestaEdit))
    - [#39022](https://github.com/PrestaShop/PrestaShop/pull/39022): Styles header notifications (by [@tblivet](https://github.com/tblivet))
    - [#38634](https://github.com/PrestaShop/PrestaShop/pull/38634): Improved regex in StringModifier (by [@nicosomb](https://github.com/nicosomb))
    - [#38773](https://github.com/PrestaShop/PrestaShop/pull/38773): Disable autofill of password for edit customer in BO (by [@ShaiMagal](https://github.com/ShaiMagal))
  - Bug fix:
    - [#39559](https://github.com/PrestaShop/PrestaShop/pull/39559): Update HTMLTemplateOrderSlip.php (by [@ShaiMagal](https://github.com/ShaiMagal))
    - [#39472](https://github.com/PrestaShop/PrestaShop/pull/39472): Add missing "Stock location" in the defaults product csv (by [@MattKelvin](https://github.com/MattKelvin))
    - [#39062](https://github.com/PrestaShop/PrestaShop/pull/39062): Fix display of Nav Bar with NULL icons (by [@Quetzacoalt91](https://github.com/Quetzacoalt91))
    - [#39554](https://github.com/PrestaShop/PrestaShop/pull/39554): [BC Break] Revert PR 38745 (by [@tleon](https://github.com/tleon))
    - [#39335](https://github.com/PrestaShop/PrestaShop/pull/39335): BO : Titles : When editing, fetch dimensions of the image (by [@Progi1984](https://github.com/Progi1984))
    - [#38006](https://github.com/PrestaShop/PrestaShop/pull/38006): Fix: Problems with customer groups category discounts (by [@Codencode](https://github.com/Codencode))
    - [#39310](https://github.com/PrestaShop/PrestaShop/pull/39310): [BC Break] Remove property from documentation that are not in the ressources (by [@tleon](https://github.com/tleon))
    - [#37707](https://github.com/PrestaShop/PrestaShop/pull/37707): Fix unsecure payment request link (by [@SebBareyre](https://github.com/SebBareyre))
    - [#39326](https://github.com/PrestaShop/PrestaShop/pull/39326): BO : HelperForm : Fixed for select the hard defined width (by [@Progi1984](https://github.com/Progi1984))
    - [#39430](https://github.com/PrestaShop/PrestaShop/pull/39430): Fix quantity in delivery slip if we have a refunded product (by [@Touxten](https://github.com/Touxten))
    - [#39358](https://github.com/PrestaShop/PrestaShop/pull/39358): Create ModuleParser to parse module information (by [@jolelievre](https://github.com/jolelievre))
    - [#37590](https://github.com/PrestaShop/PrestaShop/pull/37590): Patch tinymce fullscreen (by [@nicohery](https://github.com/nicohery))
    - [#39407](https://github.com/PrestaShop/PrestaShop/pull/39407): Update CancelProductType to display only refundable quantities as available quantity to refund (by [@iNem0o](https://github.com/iNem0o))
    - [#39400](https://github.com/PrestaShop/PrestaShop/pull/39400): Fix: Help is displayed two times (by [@Codencode](https://github.com/Codencode))
    - [#38622](https://github.com/PrestaShop/PrestaShop/pull/38622): Fix: New product catalog does not load images in multi-store (by [@Codencode](https://github.com/Codencode))
    - [#39340](https://github.com/PrestaShop/PrestaShop/pull/39340): Fix product / category access in BO when seo redirection related category is deleted (by [@aomaxime](https://github.com/aomaxime))
    - [#39375](https://github.com/PrestaShop/PrestaShop/pull/39375): Don't allow  delete default country (by [@Touxten](https://github.com/Touxten))
    - [#39333](https://github.com/PrestaShop/PrestaShop/pull/39333): Fix product access in BO when seo redirection related entity is deleted (by [@aomaxime](https://github.com/aomaxime))
    - [#39287](https://github.com/PrestaShop/PrestaShop/pull/39287): Fix + simplify last positions and add comments to it (by [@Hlavtox](https://github.com/Hlavtox))
    - [#39314](https://github.com/PrestaShop/PrestaShop/pull/39314): BO : Orders : Modal Discount reset when it's hidden (by [@Progi1984](https://github.com/Progi1984))
    - [#39337](https://github.com/PrestaShop/PrestaShop/pull/39337): Fix: Cannot use newline in textarea on product page (by [@Codencode](https://github.com/Codencode))
    - [#39269](https://github.com/PrestaShop/PrestaShop/pull/39269): BO : Admin API : Fixed selectors for copying secret (by [@Progi1984](https://github.com/Progi1984))
    - [#39271](https://github.com/PrestaShop/PrestaShop/pull/39271): BO : TinyMCE : Fixed checkbox icon (by [@Progi1984](https://github.com/Progi1984))
    - [#39272](https://github.com/PrestaShop/PrestaShop/pull/39272): BO : Fixed the memorization of the language used in Admin in the cookie (if option is enabled) (by [@Progi1984](https://github.com/Progi1984))
    - [#39292](https://github.com/PrestaShop/PrestaShop/pull/39292): BO : Fixed redirection when permission is not allowed (by [@Progi1984](https://github.com/Progi1984))
    - [#39312](https://github.com/PrestaShop/PrestaShop/pull/39312): Fix ALT shop name. (by [@Touxten](https://github.com/Touxten))
    - [#39297](https://github.com/PrestaShop/PrestaShop/pull/39297): Update PHPDoc of ActionsBarButtonInterface (by [@Quetzacoalt91](https://github.com/Quetzacoalt91))
    - [#39295](https://github.com/PrestaShop/PrestaShop/pull/39295): [BC Break] Admin API CQRSDelete can use CQRSCommand and empty bodies can be used (by [@jolelievre](https://github.com/jolelievre))
    - [#39209](https://github.com/PrestaShop/PrestaShop/pull/39209): BO : Fixed HTML in informations & warnings block (by [@Progi1984](https://github.com/Progi1984))
    - [#39203](https://github.com/PrestaShop/PrestaShop/pull/39203): BO : Invoices : Harmonize Helper Text (by [@Progi1984](https://github.com/Progi1984))
    - [#39274](https://github.com/PrestaShop/PrestaShop/pull/39274): Added closure of the 'deleteCategoriesForm' form (by [@Codencode](https://github.com/Codencode))
    - [#39208](https://github.com/PrestaShop/PrestaShop/pull/39208): Fix: Carrier search not working when editing order's carrier (by [@Codencode](https://github.com/Codencode))
    - [#39160](https://github.com/PrestaShop/PrestaShop/pull/39160): Fix OrderStateType form to show all languages, including disabled ones (by [@Codencode](https://github.com/Codencode))
    - [#39053](https://github.com/PrestaShop/PrestaShop/pull/39053): Add logic to generate random password on employee profil (by [@PoulainMaxime](https://github.com/PoulainMaxime))
    - [#39257](https://github.com/PrestaShop/PrestaShop/pull/39257): Add missing attribute tag on constraints (by [@jolelievre](https://github.com/jolelievre))
    - [#39216](https://github.com/PrestaShop/PrestaShop/pull/39216): Fix: Call to a member function getClassName() on null when the Employee default tab does not exist anymore (by [@Codencode](https://github.com/Codencode))
    - [#39228](https://github.com/PrestaShop/PrestaShop/pull/39228): Fix the result of Admin API paginated response (by [@jolelievre](https://github.com/jolelievre))
    - [#39206](https://github.com/PrestaShop/PrestaShop/pull/39206): Apply filters mapping on the orderBy query parameter in API listing (by [@jolelievre](https://github.com/jolelievre))
    - [#39168](https://github.com/PrestaShop/PrestaShop/pull/39168): Fix RouteValidator by checking unknown keywords in schema URL (by [@cnavarro-prestashop](https://github.com/cnavarro-prestashop))
    - [#39193](https://github.com/PrestaShop/PrestaShop/pull/39193): When enriching the module data always keep most recent version (by [@jolelievre](https://github.com/jolelievre))
    - [#39153](https://github.com/PrestaShop/PrestaShop/pull/39153): BO Theme import : Fixed bad display when filename is too long (by [@Progi1984](https://github.com/Progi1984))
    - [#38810](https://github.com/PrestaShop/PrestaShop/pull/38810): Support for brand named as numbers (by [@borjagarciab](https://github.com/borjagarciab))
    - [#39028](https://github.com/PrestaShop/PrestaShop/pull/39028): Fix carrier edit form name (by [@Hlavtox](https://github.com/Hlavtox))
    - [#38549](https://github.com/PrestaShop/PrestaShop/pull/38549): Fix: Misleading maximum attachment upload size in configure/advanced/administration (by [@Codencode](https://github.com/Codencode))
    - [#37933](https://github.com/PrestaShop/PrestaShop/pull/37933): Price final critical error fix (by [@jf-viguier](https://github.com/jf-viguier))
    - [#38982](https://github.com/PrestaShop/PrestaShop/pull/38982): BO : Product Form : Use the correct configuration for the Max Filesize (by [@Progi1984](https://github.com/Progi1984))
    - [#39007](https://github.com/PrestaShop/PrestaShop/pull/39007): Client API - Help card is not displayed in sidebar as it should (by [@seiwan](https://github.com/seiwan))
    - [#38966](https://github.com/PrestaShop/PrestaShop/pull/38966): Add missing Content-Type header in stock quantity update request (by [@nborkowska](https://github.com/nborkowska))
    - [#37928](https://github.com/PrestaShop/PrestaShop/pull/37928): Fix datacollector caster for reference object property including smarty cache_locking fatal error (by [@jf-viguier](https://github.com/jf-viguier))
    - [#38846](https://github.com/PrestaShop/PrestaShop/pull/38846): BO Countries : Set two fields `call_prefix` & `zip_code_format` as non-required (by [@Progi1984](https://github.com/Progi1984))
    - [#38593](https://github.com/PrestaShop/PrestaShop/pull/38593): Fix query builder to find translations by key in Backoffice during the translations saving process (by [@mcaldex](https://github.com/mcaldex))
    - [#38532](https://github.com/PrestaShop/PrestaShop/pull/38532): Fix: Multistore: CMS page error on new empty store creation (by [@Codencode](https://github.com/Codencode))
    - [#38337](https://github.com/PrestaShop/PrestaShop/pull/38337): Fix: Max password length allowed in the password policy is longer than bcrypt can handle and hardcoded max pass length for customer (by [@Codencode](https://github.com/Codencode))
    - [#38581](https://github.com/PrestaShop/PrestaShop/pull/38581): Allow refund on an order of a deleted customer  (by [@jf-viguier](https://github.com/jf-viguier))
  - Refactoring:
    - [#39182](https://github.com/PrestaShop/PrestaShop/pull/39182): Improve warning on languages page (by [@Hlavtox](https://github.com/Hlavtox))
    - [#39080](https://github.com/PrestaShop/PrestaShop/pull/39080): Remove getCasters override not necessary anymore with SF 6.4 (by [@jolelievre](https://github.com/jolelievre))
- Front Office:
  - Improvement:
    - [#39704](https://github.com/PrestaShop/PrestaShop/pull/39704): Chore: Update classic theme to v3.0.3 (by [@tyloo](https://github.com/tyloo))
    - [#39445](https://github.com/PrestaShop/PrestaShop/pull/39445): Propagate auth header (by [@Hlavtox](https://github.com/Hlavtox))
    - [#39537](https://github.com/PrestaShop/PrestaShop/pull/39537): Backport Fix CartPresenter translation domain (by [@Codencode](https://github.com/Codencode))
    - [#39406](https://github.com/PrestaShop/PrestaShop/pull/39406): Display full history time (by [@Hlavtox](https://github.com/Hlavtox))
    - [#39366](https://github.com/PrestaShop/PrestaShop/pull/39366): Add hook on rendertemplate in CheckoutStep (by [@alexandrebrubeyonds](https://github.com/alexandrebrubeyonds))
    - [#38992](https://github.com/PrestaShop/PrestaShop/pull/38992): Improve combination images speed (by [@Hlavtox](https://github.com/Hlavtox))
    - [#38586](https://github.com/PrestaShop/PrestaShop/pull/38586): Add hook into formfield class method toArray + add property attr (by [@Mch0](https://github.com/Mch0))
    - [#38480](https://github.com/PrestaShop/PrestaShop/pull/38480): New Hook: actionPaymentModuleProductVarTplAfter (by [@gwojcik7](https://github.com/gwojcik7))
    - [#38487](https://github.com/PrestaShop/PrestaShop/pull/38487): New Hook: actionGetPdfTemplateObject get pdf template object (by [@Markus-Gurkcity](https://github.com/Markus-Gurkcity))
    - [#38868](https://github.com/PrestaShop/PrestaShop/pull/38868): Update CHANGELOG.txt (by [@Touxten](https://github.com/Touxten))
  - Bug fix:
    - [#39592](https://github.com/PrestaShop/PrestaShop/pull/39592): Reintroduce email unicity validation (by [@bibips](https://github.com/bibips))
    - [#39245](https://github.com/PrestaShop/PrestaShop/pull/39245): Fix: Back Office becomes inaccessible if the employee's assigned language is deleted (by [@Codencode](https://github.com/Codencode))
    - [#39010](https://github.com/PrestaShop/PrestaShop/pull/39010): Save address choice on click (by [@Matt75](https://github.com/Matt75))
    - [#39191](https://github.com/PrestaShop/PrestaShop/pull/39191): Fix: recoverCart link does not log the user. Stuck to process checkout step 1 (by [@Codencode](https://github.com/Codencode))
    - [#39008](https://github.com/PrestaShop/PrestaShop/pull/39008): Fix customer birthdate validation in FO (by [@boherm](https://github.com/boherm))
    - [#38926](https://github.com/PrestaShop/PrestaShop/pull/38926): Fix favicon path (by [@Hlavtox](https://github.com/Hlavtox))
    - [#38903](https://github.com/PrestaShop/PrestaShop/pull/38903): CustomerAddressForm : Set a minimum length in HTML5 (by [@Progi1984](https://github.com/Progi1984))
  - Refactoring:
    - [#38998](https://github.com/PrestaShop/PrestaShop/pull/38998): Improve cart performance by avoiding wiping a cache when not needed (by [@Hlavtox](https://github.com/Hlavtox))
- Core:
  - New feature:
    - [#38881](https://github.com/PrestaShop/PrestaShop/pull/38881): Add hook that allows completely custom cart rule application on a cart (by [@Hlavtox](https://github.com/Hlavtox))
  - Improvement:
    - [#39589](https://github.com/PrestaShop/PrestaShop/pull/39589): Improved generation of queries and commands (by [@kpodemski](https://github.com/kpodemski))
    - [#39591](https://github.com/PrestaShop/PrestaShop/pull/39591): Improve customer unicity check and add comments (by [@Hlavtox](https://github.com/Hlavtox))
    - [#39541](https://github.com/PrestaShop/PrestaShop/pull/39541): Admin API Openapi multistore context documentation (by [@iNem0o](https://github.com/iNem0o))
    - [#39379](https://github.com/PrestaShop/PrestaShop/pull/39379): Updated PrestaShop Packages (by [@github-actions[bot]](https://github.com/github-actions[bot]))
    - [#39344](https://github.com/PrestaShop/PrestaShop/pull/39344): Updated PrestaShop Packages (by [@github-actions[bot]](https://github.com/github-actions[bot]))
    - [#39479](https://github.com/PrestaShop/PrestaShop/pull/39479): Bump PrestaShop version to 8.2.3 (by [@matthieu-rolland](https://github.com/matthieu-rolland))
    - [#39466](https://github.com/PrestaShop/PrestaShop/pull/39466): Update Symfony components after 6.4.25 release (by [@nicosomb](https://github.com/nicosomb))
    - [#39264](https://github.com/PrestaShop/PrestaShop/pull/39264): Update Symfony components after 6.4.24 release (by [@nicosomb](https://github.com/nicosomb))
    - [#39371](https://github.com/PrestaShop/PrestaShop/pull/39371): Refacto ConnectionsSource.php for little better performance (by [@ShaiMagal](https://github.com/ShaiMagal))
    - [#39372](https://github.com/PrestaShop/PrestaShop/pull/39372): Refacto of few $_SERVER variables (Tools.php) (by [@ShaiMagal](https://github.com/ShaiMagal))
    - [#39364](https://github.com/PrestaShop/PrestaShop/pull/39364): Add genuine Czech republic bot (SeznamBot) to "isBot" function (by [@ShaiMagal](https://github.com/ShaiMagal))
    - [#38822](https://github.com/PrestaShop/PrestaShop/pull/38822): Another level of protection for Tools::unSerialize (allowed_classes => false) + refacto (by [@ShaiMagal](https://github.com/ShaiMagal))
    - [#39217](https://github.com/PrestaShop/PrestaShop/pull/39217): Fix changelog date for 8.2.2 (by [@boherm](https://github.com/boherm))
    - [#39145](https://github.com/PrestaShop/PrestaShop/pull/39145): Bump PrestaShop version to 8.2.2 (by [@boherm](https://github.com/boherm))
    - [#39006](https://github.com/PrestaShop/PrestaShop/pull/39006): Verify if category exists before accessing it (by [@Hlavtox](https://github.com/Hlavtox))
    - [#39180](https://github.com/PrestaShop/PrestaShop/pull/39180): Bump patch version 9.0.1 (by [@jolelievre](https://github.com/jolelievre))
    - [#39150](https://github.com/PrestaShop/PrestaShop/pull/39150): Updated PrestaShop Packages (by [@github-actions[bot]](https://github.com/github-actions[bot]))
    - [#39063](https://github.com/PrestaShop/PrestaShop/pull/39063): Add option to automatically generate text version of emails (by [@Hlavtox](https://github.com/Hlavtox))
    - [#39141](https://github.com/PrestaShop/PrestaShop/pull/39141): Update hummingbird to v1.0.1 (by [@tblivet](https://github.com/tblivet))
    - [#39135](https://github.com/PrestaShop/PrestaShop/pull/39135): Updated PrestaShop Packages (by [@github-actions[bot]](https://github.com/github-actions[bot]))
    - [#39043](https://github.com/PrestaShop/PrestaShop/pull/39043): Silence some last smarty deprecations (by [@Hlavtox](https://github.com/Hlavtox))
    - [#39034](https://github.com/PrestaShop/PrestaShop/pull/39034): Update Symfony components after 6.4.23 release (by [@nicosomb](https://github.com/nicosomb))
    - [#38441](https://github.com/PrestaShop/PrestaShop/pull/38441): Relax validation rules for first batch of characters (by [@Hlavtox](https://github.com/Hlavtox))
    - [#38952](https://github.com/PrestaShop/PrestaShop/pull/38952): Add 2 hooks in getImageLink (by [@ludoviccardinale](https://github.com/ludoviccardinale))
    - [#38924](https://github.com/PrestaShop/PrestaShop/pull/38924): Backport improved profiler from v9 (by [@Hlavtox](https://github.com/Hlavtox))
    - [#38847](https://github.com/PrestaShop/PrestaShop/pull/38847): Skip rector.php and PHPStan files during build (by [@kpodemski](https://github.com/kpodemski))
    - [#38772](https://github.com/PrestaShop/PrestaShop/pull/38772): New hook at TOP of customer my account section - displayCustomerAccountTop (by [@ShaiMagal](https://github.com/ShaiMagal))
  - Bug fix:
    - [#39535](https://github.com/PrestaShop/PrestaShop/pull/39535): Backport Filemanager should load AdminKernel (by [@Codencode](https://github.com/Codencode))
    - [#38871](https://github.com/PrestaShop/PrestaShop/pull/38871): Ensure specific prices are deleted safely on customer deletion by validating passed ID (by [@gilles-knani](https://github.com/gilles-knani))
    - [#39463](https://github.com/PrestaShop/PrestaShop/pull/39463): CORE : Fix Cart constructor initialization order to prevent null configuration errors (by [@djbuch](https://github.com/djbuch))
    - [#39480](https://github.com/PrestaShop/PrestaShop/pull/39480): Fix docker initialisation (by [@nicosomb](https://github.com/nicosomb))
    - [#39442](https://github.com/PrestaShop/PrestaShop/pull/39442): Stabilize cache clear (by [@jolelievre](https://github.com/jolelievre))
    - [#39453](https://github.com/PrestaShop/PrestaShop/pull/39453): Fix CI with mysql suddenly going crazy over SSL certificate (by [@jolelievre](https://github.com/jolelievre))
    - [#39327](https://github.com/PrestaShop/PrestaShop/pull/39327): Fix symlink issues on install (by [@boherm](https://github.com/boherm))
    - [#39331](https://github.com/PrestaShop/PrestaShop/pull/39331): Fix: using dev version of ps_apiresources (by [@PrestaEdit](https://github.com/PrestaEdit))
    - [#39260](https://github.com/PrestaShop/PrestaShop/pull/39260): Adding taxes for shipping cost if needed (by [@lukaslau](https://github.com/lukaslau))
    - [#38997](https://github.com/PrestaShop/PrestaShop/pull/38997): Remove dead code watermark types (by [@tswfi](https://github.com/tswfi))
    - [#38905](https://github.com/PrestaShop/PrestaShop/pull/38905): Cast properties to prevent issues (by [@Hlavtox](https://github.com/Hlavtox))
    - [#38989](https://github.com/PrestaShop/PrestaShop/pull/38989): Fix carrier ID for modules (by [@Hlavtox](https://github.com/Hlavtox))
  - Refactoring:
    - [#39505](https://github.com/PrestaShop/PrestaShop/pull/39505): Method getIdFromClassName incorrect phpdoc - phpstan is complaining (by [@ShaiMagal](https://github.com/ShaiMagal))
    - [#39373](https://github.com/PrestaShop/PrestaShop/pull/39373): Small Refacto Store.php for semantic (backticks unification) (by [@ShaiMagal](https://github.com/ShaiMagal))
    - [#39311](https://github.com/PrestaShop/PrestaShop/pull/39311): Backport Unify error handling in FO and get rid of Tools::displayError calls (by [@Hlavtox](https://github.com/Hlavtox))
    - [#39167](https://github.com/PrestaShop/PrestaShop/pull/39167): Comment carrier logic (by [@Hlavtox](https://github.com/Hlavtox))
    - [#39129](https://github.com/PrestaShop/PrestaShop/pull/39129): Use constants instead of integers (by [@Hlavtox](https://github.com/Hlavtox))
    - [#39057](https://github.com/PrestaShop/PrestaShop/pull/39057): Comment the mail class after migration to symfony (by [@Hlavtox](https://github.com/Hlavtox))
    - [#39051](https://github.com/PrestaShop/PrestaShop/pull/39051): Wipe [@since](https://github.com/since) tags that serve no value anymore (by [@Hlavtox](https://github.com/Hlavtox))
    - [#38990](https://github.com/PrestaShop/PrestaShop/pull/38990): Secure .env files and comment htaccess (by [@Hlavtox](https://github.com/Hlavtox))
    - [#38877](https://github.com/PrestaShop/PrestaShop/pull/38877): Clean and comment postSave (by [@Hlavtox](https://github.com/Hlavtox))
    - [#38761](https://github.com/PrestaShop/PrestaShop/pull/38761): Refactor Warehouse::getProductLocation() (by [@ShaiMagal](https://github.com/ShaiMagal))
- Installer:
  - Improvement:
    - [#39619](https://github.com/PrestaShop/PrestaShop/pull/39619): Update default catalog 9.0.x (by [@ps-jarvis](https://github.com/ps-jarvis))
    - [#39508](https://github.com/PrestaShop/PrestaShop/pull/39508): Add the parameter `--symlink` to the command `assets:install` of Symfony (by [@Quetzacoalt91](https://github.com/Quetzacoalt91))
  - Bug fix:
    - [#39336](https://github.com/PrestaShop/PrestaShop/pull/39336): Install : Configure : Hide password error on keyup (by [@Progi1984](https://github.com/Progi1984))
    - [#39110](https://github.com/PrestaShop/PrestaShop/pull/39110): Fix installation of en-GB during install, improve installation error report (by [@jolelievre](https://github.com/jolelievre))
    - [#38919](https://github.com/PrestaShop/PrestaShop/pull/38919): Update installer favicon (by [@matks](https://github.com/matks))
- Web Services:
  - Bug fix:
    - [#38893](https://github.com/PrestaShop/PrestaShop/pull/38893): Fix 500 error on create product with id_default_category to 0 (by [@Mch0](https://github.com/Mch0))
- Tests:
  - Improvement:
    - [#39594](https://github.com/PrestaShop/PrestaShop/pull/39594): Functional Tests : Added new endpoints (by [@Progi1984](https://github.com/Progi1984))
    - [#39583](https://github.com/PrestaShop/PrestaShop/pull/39583): Functional Tests : API : DELETE /attributes/group/{attributeGroupId} (by [@Progi1984](https://github.com/Progi1984))
    - [#39575](https://github.com/PrestaShop/PrestaShop/pull/39575): Functional Tests : API : GET /customers/groups (by [@Progi1984](https://github.com/Progi1984))
    - [#39565](https://github.com/PrestaShop/PrestaShop/pull/39565): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#39528](https://github.com/PrestaShop/PrestaShop/pull/39528): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#39329](https://github.com/PrestaShop/PrestaShop/pull/39329): Update api module and optimise API UI tests (by [@jolelievre](https://github.com/jolelievre))
    - [#39284](https://github.com/PrestaShop/PrestaShop/pull/39284): Command `prestashop:list:commands-and-queries` : Filter CQRS with (1) or without (0) an endpoint (by [@Progi1984](https://github.com/Progi1984))
    - [#39291](https://github.com/PrestaShop/PrestaShop/pull/39291): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#39215](https://github.com/PrestaShop/PrestaShop/pull/39215): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#39172](https://github.com/PrestaShop/PrestaShop/pull/39172): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#39159](https://github.com/PrestaShop/PrestaShop/pull/39159): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#39123](https://github.com/PrestaShop/PrestaShop/pull/39123): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#39077](https://github.com/PrestaShop/PrestaShop/pull/39077): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#39064](https://github.com/PrestaShop/PrestaShop/pull/39064): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#38927](https://github.com/PrestaShop/PrestaShop/pull/38927): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#38890](https://github.com/PrestaShop/PrestaShop/pull/38890): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#38885](https://github.com/PrestaShop/PrestaShop/pull/38885): Functional Tests : API : PATCH /product/{productId}/shops (by [@Progi1984](https://github.com/Progi1984))
  - Bug fix:
    - [#39551](https://github.com/PrestaShop/PrestaShop/pull/39551): Functional Tests : Fixed [#38788](https://github.com/PrestaShop/PrestaShop/pull/38788)  (by [@Progi1984](https://github.com/Progi1984))
    - [#39500](https://github.com/PrestaShop/PrestaShop/pull/39500): Functional Tests : Fixed tests for PSC (by [@Progi1984](https://github.com/Progi1984))
    - [#39299](https://github.com/PrestaShop/PrestaShop/pull/39299): BO : Products - Bulk Actions : Fixed error when no permissions (by [@Progi1984](https://github.com/Progi1984))
    - [#39285](https://github.com/PrestaShop/PrestaShop/pull/39285): BO : Export SQL from Grid : Format SQL (by [@Progi1984](https://github.com/Progi1984))
    - [#39139](https://github.com/PrestaShop/PrestaShop/pull/39139): Docker 7.2-apache : Fixed use of archive Debian repo  (by [@Progi1984](https://github.com/Progi1984))
    - [#39049](https://github.com/PrestaShop/PrestaShop/pull/39049): BO : Theme : Export current theme > Protect directories (by [@Progi1984](https://github.com/Progi1984))
    - [#38999](https://github.com/PrestaShop/PrestaShop/pull/38999): Fix FormFieldTest (by [@boherm](https://github.com/boherm))
    - [#38963](https://github.com/PrestaShop/PrestaShop/pull/38963): BO : Specific Price : Hide label (by [@Progi1984](https://github.com/Progi1984))
  - Refactoring:
    - [#38873](https://github.com/PrestaShop/PrestaShop/pull/38873): Functional Tests : Reorganize endpoints based on domains (by [@Progi1984](https://github.com/Progi1984))

## Acknowledgments

PrestaShop is an open-source platform where many contributors, though not directly connected to PrestaShop SA, play vital roles in its development alongside the community.

This release is made possible thanks to [PrestaShop SA](https://prestashop.com/), but also individual contributors from the community, and companies from our ecosystem.

A big **thank you** to all contributors (in alphabetical order):

Alexandre Bru, aomaxime, Arnaud, bibips, Blivet Thibault, Boki, Boris Hermans, Codencode, Cyril Navarro, Daniel Hlavacek, David-Julian BUCH, Dominik Shaim Ulrich, Fabien Papet, Franck Lefèvre, Gilles Knani, Jean-François Viguier, Jonathan Danse, Jonathan Lelievre, Julien Bonvarlet, Krystian Podemski, Ludovic Cardinale, Lukas Laurinaitis, Léo Cunéaz, Mathieu Ferment, Matthias Raigne, Matthias-Kelvin Daous, Matthieu Rolland, Mattia, Maxime Poulain, Maxime Sieczkowski, Morgan Pichat, Natalia Borkowska, Nico H, Nicolas Lœuillet, okom3pom, PrestonBot, Progi1984, Sébastien BIDAULT, Tatu Wikman, Thibault Blivet, Thomas Leone, Thomas Nabord, Thomas Roux ( Old Okom3pom )
