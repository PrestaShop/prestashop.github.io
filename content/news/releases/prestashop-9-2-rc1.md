---
layout: post
title:  "PrestaShop 9.2 RC1 is open for testing!"
subtitle: "The first Release Candidate of PrestaShop 9.2 is here, with One Page Checkout, Ask AI, and Extra Properties. Help us validate it before the final release."
date:   2026-09-21
authors: [ PrestaShop ]
icon: icon-lab
image: /assets/images/2026/09/1200x728_9.2_RC1.png
opengraph_image: /assets/images/2026/09/1200x728_9.2_RC1.png
twitter_image: /assets/images/2026/09/1024x512_9.2_RC1.png
tags:
- news
- version
- rc
- minor
- releases
- "9.2"
- "9.x"
- "9.2.x"
---

The first Release Candidate of PrestaShop 9.2 is now available for testing. This is the last major milestone before the stable release, and your feedback is what determines whether 9.2 ships on schedule and in great shape.

![PrestaShop 9.2 RC1](/assets/images/2026/09/1534x434_9.2_RC1.png)

---

{{< cta "#how-to-test-prestashop-92-rc1" >}}Download & testing instructions{{< /cta >}}

{{< toc >}}

## What is a Release Candidate?

A Release Candidate is the final pre-release stage in our development cycle. All planned features are in place, and the focus has fully shifted to quality, stability, and catching any remaining regressions. RC1 is functionally what we intend to ship as the final 9.2 release. Any fixes applied from this point on will be based directly on your reports.

## What's inside PrestaShop 9.2 RC1?

All the features introduced during the beta phase are included. Here's a quick recap of the highlights:

### One Page Checkout: native module for a faster, smoother checkout

PrestaShop 9.2 includes a native One Page Checkout module in the bundle, bringing the entire checkout experience together onto a single page. This gives merchants a faster, smoother flow that helps reduce friction and improve conversion, without depending on third-party solutions.

{{< cta-group >}}
{{< cta url="/news/2026/introducing-one-page-checkout/" inline="true" >}}Read the article{{< /cta >}}
{{< /cta-group >}}

---

### Extra Properties: native extra fields for every entity

PrestaShop 9.2 introduces Extra Properties, a native way to attach extra fields to core entities such as Product, Customer, or Order, with built-in support for multistore, multilang, Back Office forms and grids, Front Office access, and the Admin API.

{{< cta-group >}}
{{< cta url="/news/2026/extra-properties-custom-data-fields/" inline="true" >}}Read the article{{< /cta >}}
{{< /cta-group >}}

---

### Ask AI: a native AI assistant in your back office

PrestaShop 9.2 introduces "Ask AI", a built-in conversational assistant available right in the back office. Merchants can ask questions about their data and trigger actions using plain, natural language, powered by the [PrestaShop MCP Server](https://addons.prestashop.com/en/administrative-tools/96617-prestashop-mcp-server.html), so you are not locked into a single AI provider.

{{< cta-group >}}
{{< cta url="https://addons.prestashop.com/en/administrative-tools/96617-prestashop-mcp-server.html" inline="true" >}}Discover the PrestaShop MCP Server{{< /cta >}}
{{< /cta-group >}}

---

### PrestaShop Automation with Klaviyo

PrestaShop Automation with Klaviyo is natively integrated into the PrestaShop Classic distribution, giving merchants marketing automation (email, SMS, segmentation) right after installation, with no separate module to hunt down.

{{< cta-group >}}
{{< cta url="https://addons.prestashop.com/en/advertising-marketing-newsletter-modules/91359-prestashop-automation-with-klaviyo.html" inline="true" >}}Read more{{< /cta >}}
{{< /cta-group >}}

---

### The Symfony migration continues

Another batch of legacy pages, including Countries, Merchandise Return, Hook a module, Quick Access, Email body translations, and Tax rules, has completed its migration to the Symfony framework and is available for testing behind a feature flag.

{{% notice type="info" title="What is a feature flag?" %}}
Some 9.2 features are experimental and must be enabled manually before you can test them. You can find these settings under **Advanced Parameters -> New & Experimental Features**.
{{% /notice %}}

## Changelog

- Back Office:
  - New feature:
    - [#42022](https://github.com/PrestaShop/PrestaShop/pull/42022): Improve the carrier domain and the Admin API for the new carrier endpoints (by [@nicosomb](https://github.com/nicosomb))
  - Improvement:
    - [#42350](https://github.com/PrestaShop/PrestaShop/pull/42350): Index new CMS pages by default (by [@Hlavtox](https://github.com/Hlavtox))
    - [#41942](https://github.com/PrestaShop/PrestaShop/pull/41942): Add shared stock help message to combination availability form (by [@Codencode](https://github.com/Codencode))
    - [#41932](https://github.com/PrestaShop/PrestaShop/pull/41932): Paginate the orders grid by id first to avoid a full-table sort (by [@boo-code](https://github.com/boo-code))
    - [#41703](https://github.com/PrestaShop/PrestaShop/pull/41703): Tax rules list apiAdd tax rules list API support to TaxRule grid query builder (by [@nicosomb](https://github.com/nicosomb))
    - [#41409](https://github.com/PrestaShop/PrestaShop/pull/41409): Add multistore support to administration and product settings configuration forms (by [@Codencode](https://github.com/Codencode))
  - Bug fix:
    - [#42768](https://github.com/PrestaShop/PrestaShop/pull/42768): Fix the theme selector in the Translations page (by [@tblivet](https://github.com/tblivet))
    - [#42600](https://github.com/PrestaShop/PrestaShop/pull/42600): Fix supplier ID type in SetSuppliersCommand (by [@Codencode](https://github.com/Codencode))
    - [#42475](https://github.com/PrestaShop/PrestaShop/pull/42475): Fix product ID type in product grid decorator (by [@Codencode](https://github.com/Codencode))
    - [#42411](https://github.com/PrestaShop/PrestaShop/pull/42411): Fix the Shipment domain defects that do not depend on the Admin API (by [@mattgoud](https://github.com/mattgoud))
    - [#42400](https://github.com/PrestaShop/PrestaShop/pull/42400): Fix Carts page performance regression on connections query (by [@Codencode](https://github.com/Codencode))
    - [#42374](https://github.com/PrestaShop/PrestaShop/pull/42374): Order confirmation email ignores the order state's "Attach invoice PDF to email" setting (by [@aomaxime](https://github.com/aomaxime))
    - [#42245](https://github.com/PrestaShop/PrestaShop/pull/42245): Fix tax rule groups grid duplicates in multistore context (by [@Codencode](https://github.com/Codencode))
    - [#42241](https://github.com/PrestaShop/PrestaShop/pull/42241): Offer the default route for every language in the SEO and URLs form (by [@boo-code](https://github.com/boo-code))
    - [#42203](https://github.com/PrestaShop/PrestaShop/pull/42203): Let a grid status menu show past the scrolling table (by [@boo-code](https://github.com/boo-code))
    - [#42197](https://github.com/PrestaShop/PrestaShop/pull/42197): Let the SMTP transport choose implicit TLS by port so 587 works (by [@boo-code](https://github.com/boo-code))
    - [#42057](https://github.com/PrestaShop/PrestaShop/pull/42057): Fix changing an employee role when the default page is specific to the new role (by [@boo-code](https://github.com/boo-code))
    - [#42032](https://github.com/PrestaShop/PrestaShop/pull/42032): Display the employee who created a back-office order in the Messages block (by [@PrestaEdit](https://github.com/PrestaEdit))
    - [#42004](https://github.com/PrestaShop/PrestaShop/pull/42004): Fix UTF-8 string truncation in StringModifier::cutEnd() (by [@Codencode](https://github.com/Codencode))
    - [#42001](https://github.com/PrestaShop/PrestaShop/pull/42001): Guard order message name-uniqueness check on partial edit (backport 9.1.x) (by [@mattgoud](https://github.com/mattgoud))
    - [#41950](https://github.com/PrestaShop/PrestaShop/pull/41950): Show an empty order status dropdown when the order has no status (by [@boo-code](https://github.com/boo-code))
    - [#41948](https://github.com/PrestaShop/PrestaShop/pull/41948): Fix manual order discount bug (by [@tleon](https://github.com/tleon))
    - [#41944](https://github.com/PrestaShop/PrestaShop/pull/41944): Connect `GET /discount-types` to the BO (by [@nicosomb](https://github.com/nicosomb))
    - [#41929](https://github.com/PrestaShop/PrestaShop/pull/41929): Fix catalog price rule links when feature flag is enabled (by [@Codencode](https://github.com/Codencode))
    - [#41919](https://github.com/PrestaShop/PrestaShop/pull/41919): Fix: Problem with manual special price setting with comma becoming dot (product page) (by [@Codencode](https://github.com/Codencode))
    - [#41871](https://github.com/PrestaShop/PrestaShop/pull/41871): Use the small_default thumbnail for product/combination cover URLs (by [@boo-code](https://github.com/boo-code))
    - [#41797](https://github.com/PrestaShop/PrestaShop/pull/41797): Fix: Color preview is still displayed after changing an attribute group from color to another type (by [@Codencode](https://github.com/Codencode))
    - [#41665](https://github.com/PrestaShop/PrestaShop/pull/41665): Display invoice prefix in employee language on order view page (by [@PrestaEdit](https://github.com/PrestaEdit))
    - [#41652](https://github.com/PrestaShop/PrestaShop/pull/41652): Fix:  Changing an order's status throws "Duplicate entry `<idp>-<idpa>-0-0` for product_sqlstock" when the order contains a deleted combination (single-shop) (by [@Codencode](https://github.com/Codencode))
    - [#41468](https://github.com/PrestaShop/PrestaShop/pull/41468): Fix: Multishop: cache_default_attribute is not reset for all shops when changing a product with combinations to a standard product (by [@Codencode](https://github.com/Codencode))
    - [#41238](https://github.com/PrestaShop/PrestaShop/pull/41238): Fix: Inconsistent escaping of displayCustomization output (by [@Codencode](https://github.com/Codencode))
  - Refactoring:
    - [#42284](https://github.com/PrestaShop/PrestaShop/pull/42284): Do not block working with order if it's shipped (by [@Hlavtox](https://github.com/Hlavtox))
- Front Office:
  - New feature:
    - [#41977](https://github.com/PrestaShop/PrestaShop/pull/41977): Add thumbnail fitment functionality (by [@Hlavtox](https://github.com/Hlavtox))
    - [#41824](https://github.com/PrestaShop/PrestaShop/pull/41824): Add hook actionNotFound (by [@Hlavtox](https://github.com/Hlavtox))
  - Improvement:
    - [#42571](https://github.com/PrestaShop/PrestaShop/pull/42571): Improve structured data by adding product features and shop contact info (by [@Hlavtox](https://github.com/Hlavtox))
    - [#42058](https://github.com/PrestaShop/PrestaShop/pull/42058): Set stable version of Hummingbird in composer.json (by [@Quetzacoalt91](https://github.com/Quetzacoalt91))
    - [#40977](https://github.com/PrestaShop/PrestaShop/pull/40977): Add prices in all variants to make displaying them easier in templates (by [@Hlavtox](https://github.com/Hlavtox))
  - Bug fix:
    - [#42725](https://github.com/PrestaShop/PrestaShop/pull/42725): Preserve pagination in product listing hreflang URLs (by [@Hlavtox](https://github.com/Hlavtox))
    - [#42439](https://github.com/PrestaShop/PrestaShop/pull/42439): Fix PHP 8.5 null array offset deprecations (by [@Codencode](https://github.com/Codencode))
    - [#42396](https://github.com/PrestaShop/PrestaShop/pull/42396): Fix #42395: Prevent template variables from being overwritten (by [@Codencode](https://github.com/Codencode))
    - [#42189](https://github.com/PrestaShop/PrestaShop/pull/42189): Give the not found and checkout pages a breadcrumb entry of their own (by [@boo-code](https://github.com/boo-code))
    - [#42143](https://github.com/PrestaShop/PrestaShop/pull/42143): Fix delivery option cache for changed delivery addresses (by [@Codencode](https://github.com/Codencode))
    - [#42114](https://github.com/PrestaShop/PrestaShop/pull/42114): Backport #40575 to 9.2.x (by [@Codencode](https://github.com/Codencode))
    - [#42000](https://github.com/PrestaShop/PrestaShop/pull/42000): Fix ProductController::getProduct() nullable return type (by [@Codencode](https://github.com/Codencode))
    - [#41928](https://github.com/PrestaShop/PrestaShop/pull/41928): Use constant-time comparison for order secure_key checks (by [@nabhan06](https://github.com/nabhan06))
    - [#40929](https://github.com/PrestaShop/PrestaShop/pull/40929): Update geoip2/geoip2 to fix deprecation warnings on PHP 8+ (by [@Hlavtox](https://github.com/Hlavtox))
  - Refactoring:
    - [#42016](https://github.com/PrestaShop/PrestaShop/pull/42016): Finalize structured data (not found products etc.) (by [@Hlavtox](https://github.com/Hlavtox))
    - [#41845](https://github.com/PrestaShop/PrestaShop/pull/41845): Add simple HTML to text stripper, refactor getting meta (by [@Hlavtox](https://github.com/Hlavtox))
    - [#41699](https://github.com/PrestaShop/PrestaShop/pull/41699): Distinguish missing images of manufacturers and categories (by [@Hlavtox](https://github.com/Hlavtox))
- Core:
  - New feature:
    - [#41405](https://github.com/PrestaShop/PrestaShop/pull/41405): Add multilanguage routes for entities (by [@Hlavtox](https://github.com/Hlavtox))
  - Improvement:
    - [#42826](https://github.com/PrestaShop/PrestaShop/pull/42826): Updated native modules (by [@nicosomb](https://github.com/nicosomb))
    - [#42787](https://github.com/PrestaShop/PrestaShop/pull/42787): Carry extra property constraints as their DSL string on the CQRS boundary (by [@jolelievre](https://github.com/jolelievre))
    - [#42726](https://github.com/PrestaShop/PrestaShop/pull/42726): Extra Property: store constraints as their DSL, dropping PHP serialization (by [@Jeremie-Kiwik](https://github.com/Jeremie-Kiwik))
    - [#42538](https://github.com/PrestaShop/PrestaShop/pull/42538): Handle non-conventional entity naming, default value typing and the cart entity in extra properties (by [@jolelievre](https://github.com/jolelievre))
    - [#42490](https://github.com/PrestaShop/PrestaShop/pull/42490): Allow restricting extra property definitions to a list of shops (by [@jolelievre](https://github.com/jolelievre))
    - [#42478](https://github.com/PrestaShop/PrestaShop/pull/42478): Update Symfony components after 6.4.45 release (by [@nicosomb](https://github.com/nicosomb))
    - [#42428](https://github.com/PrestaShop/PrestaShop/pull/42428): Update Symfony components after 6.4.44 release (by [@nicosomb](https://github.com/nicosomb))
    - [#42421](https://github.com/PrestaShop/PrestaShop/pull/42421): Handle multishop across the Extra Properties feature (by [@jolelievre](https://github.com/jolelievre))
    - [#42375](https://github.com/PrestaShop/PrestaShop/pull/42375): Add language ID to actionMailAlterMessageBeforeSend hook (by [@Hlavtox](https://github.com/Hlavtox))
    - [#42239](https://github.com/PrestaShop/PrestaShop/pull/42239): Update Symfony components after 6.4.43 release (by [@nicosomb](https://github.com/nicosomb))
    - [#42145](https://github.com/PrestaShop/PrestaShop/pull/42145): Add version compatibility filtering for Admin API endpoints (by [@jolelievre](https://github.com/jolelievre))
    - [#42071](https://github.com/PrestaShop/PrestaShop/pull/42071): Decouple EmployeePasswordResetter from the admin router (by [@PrestaEdit](https://github.com/PrestaEdit))
    - [#41832](https://github.com/PrestaShop/PrestaShop/pull/41832): Cover getCustomerCartRules using the passed cart for product restrictions (by [@boo-code](https://github.com/boo-code))
    - [#41803](https://github.com/PrestaShop/PrestaShop/pull/41803): Guard stock movement when the context employee has no id (by [@PrestaEdit](https://github.com/PrestaEdit))
  - Bug fix:
    - [#42822](https://github.com/PrestaShop/PrestaShop/pull/42822): Take the extra property logger through the core "logger" id instead of Psr\Log\LoggerInterface (by [@jolelievre](https://github.com/jolelievre))
    - [#42728](https://github.com/PrestaShop/PrestaShop/pull/42728): Prevent empty query strings in product URLs (by [@Hlavtox](https://github.com/Hlavtox))
    - [#42353](https://github.com/PrestaShop/PrestaShop/pull/42353): Throw EmployeeNotFoundException when password reset email is unknown (by [@jolelievre](https://github.com/jolelievre))
    - [#42123](https://github.com/PrestaShop/PrestaShop/pull/42123): Fix Pack::getQuantity ignoring 'Decrement pack only' stock type (by [@samilmarekrygula](https://github.com/samilmarekrygula))
    - [#42115](https://github.com/PrestaShop/PrestaShop/pull/42115): Make extra property registration atomic and report failure reasons (by [@jolelievre](https://github.com/jolelievre))
    - [#42024](https://github.com/PrestaShop/PrestaShop/pull/42024): Removed feature flag "state" (by [@Progi1984](https://github.com/Progi1984))
    - [#41840](https://github.com/PrestaShop/PrestaShop/pull/41840): Keep word separation when stripping HTML for the search index (by [@boo-code](https://github.com/boo-code))
    - [#41447](https://github.com/PrestaShop/PrestaShop/pull/41447): Fix deprecated in LanguageList.php (by [@jf-viguier](https://github.com/jf-viguier))
    - [#41364](https://github.com/PrestaShop/PrestaShop/pull/41364): Fix `customerId` always returning `null` in Cart API responses (by [@axel-paillaud](https://github.com/axel-paillaud))
    - [#40925](https://github.com/PrestaShop/PrestaShop/pull/40925): Fix precision of cart calculator (by [@Hlavtox](https://github.com/Hlavtox))
  - Refactoring:
    - [#41713](https://github.com/PrestaShop/PrestaShop/pull/41713): Fix unit price ratio currency conversion and specific price issue (by [@Hlavtox](https://github.com/Hlavtox))
- Installer:
  - Improvement:
    - [#42829](https://github.com/PrestaShop/PrestaShop/pull/42829): Update default catalog build-920-rc1 (by [@ps-jarvis](https://github.com/ps-jarvis))
- Web Services:
  - Improvement:
    - [#42011](https://github.com/PrestaShop/PrestaShop/pull/42011): Wrap plain list query results under _queryResult for non-collection operations (by [@mattgoud](https://github.com/mattgoud))
  - Bug fix:
    - [#41733](https://github.com/PrestaShop/PrestaShop/pull/41733): Improve management of forms in multipart when using Swagger API (by [@Quetzacoalt91](https://github.com/Quetzacoalt91))
- Tests:
  - Improvement:
    - [#42269](https://github.com/PrestaShop/PrestaShop/pull/42269): API Theme : Use scalar rather VO (wo BC Breaks) (by [@Progi1984](https://github.com/Progi1984))
    - [#42266](https://github.com/PrestaShop/PrestaShop/pull/42266): API WS : Fix WebserviceKey::add()/delete() PHP warning when no employee is in context (by [@Progi1984](https://github.com/Progi1984))
    - [#42204](https://github.com/PrestaShop/PrestaShop/pull/42204): Functional Tests : Fixed some todos (by [@Progi1984](https://github.com/Progi1984))
    - [#42134](https://github.com/PrestaShop/PrestaShop/pull/42134): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#42090](https://github.com/PrestaShop/PrestaShop/pull/42090): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#42070](https://github.com/PrestaShop/PrestaShop/pull/42070): Functional Tests : API : GET /search-engines (by [@Progi1984](https://github.com/Progi1984))
    - [#42066](https://github.com/PrestaShop/PrestaShop/pull/42066): Functional Tests : API : GET /features (by [@Progi1984](https://github.com/Progi1984))
    - [#42043](https://github.com/PrestaShop/PrestaShop/pull/42043): Functional Tests : API : GET /contacts (by [@Progi1984](https://github.com/Progi1984))
    - [#42033](https://github.com/PrestaShop/PrestaShop/pull/42033): Add integration tests for ModuleHtmlAuthorizationChecker (by [@Codencode](https://github.com/Codencode))
    - [#41987](https://github.com/PrestaShop/PrestaShop/pull/41987): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
  - Bug fix:
    - [#42786](https://github.com/PrestaShop/PrestaShop/pull/42786): Make module version checks in UI tests resilient to module releases (by [@jolelievre](https://github.com/jolelievre))
    - [#42112](https://github.com/PrestaShop/PrestaShop/pull/42112): Functional Tests : Fixed endpoints (by [@Progi1984](https://github.com/Progi1984))
    - [#42031](https://github.com/PrestaShop/PrestaShop/pull/42031): Fix CI matrix generator crashing on backticks in PR description (by [@boo-code](https://github.com/boo-code))
    - [#41982](https://github.com/PrestaShop/PrestaShop/pull/41982): Pin maildev image to 2.2.1 in behaviour tests workflow (by [@nicosomb](https://github.com/nicosomb))
  - Refactoring:
    - [#41550](https://github.com/PrestaShop/PrestaShop/pull/41550): Functional tests - Add tests of Api address (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/9.2.0-rc.1" >}}See the full release notes{{< /cta >}}

## How to test PrestaShop 9.2 RC1

{{% notice type="warning" %}}
This is a pre-release version. Do not install it on a production shop. Test it in a dedicated staging or development environment only.
{{% /notice %}}

{{< cta "https://assets.prestashop3.com/dst/edition/corporate/9.2.0-6.0-rc.1/prestashop_edition_classic_version_9.2.0-6.0-rc.1.zip" >}}Download PrestaShop 9.2 RC1{{< /cta >}}

1. Download and install RC1 in a **test or staging environment** (never on a live shop).
2. Enable the relevant **feature flags** to test experimental capabilities.
3. Test your themes, modules, and customizations for compatibility.
4. [Report any bugs or regressions on GitHub](https://github.com/PrestaShop/PrestaShop/issues/new/choose) with clear reproduction steps.

### Requirements for PrestaShop 9.2 RC1

* PHP 8.1 (up to PHP 8.5 is supported)

Please check all system requirements in the [documentation](https://devdocs.prestashop-project.org/9/basics/installation/system-requirements/).

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

PrestaShop 9.2 RC1 would not exist without the dedication of our community. A warm welcome to the new contributors joining for the first time in this release cycle: [Sayed Nabhan](https://github.com/nabhan06) and [samilmarekrygula](https://github.com/samilmarekrygula).

Thank you for your contributions!

{{< contributors-grid "aomaxime" "axel-paillaud" "boo-code" "Codencode" "Hlavtox" "Jeremie-Kiwik" "jf-viguier" "jolelievre" "mattgoud" "nabhan06" "nesrineabdmouleh" "nicosomb" "PrestaEdit" "Progi1984" "Quetzacoalt91" "samilmarekrygula" "tblivet" "tleon" / >}}

## Final notes

We'd like to thank everyone who has tested, contributed, and supported the development of PrestaShop 9.2 so far. Your help is what makes this community and this software stronger.
