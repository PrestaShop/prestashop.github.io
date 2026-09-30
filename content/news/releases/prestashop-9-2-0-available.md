---
layout: post
title:  "PrestaShop 9.2 is available"
subtitle: "One Page Checkout, Ask AI, and Extra Properties land in the stable release of PrestaShop 9.2"
date:   2026-09-30
authors: [ PrestaShop ]
icon: icon-leaf
image: /assets/images/2026/09/1200x728_9.2.png
opengraph_image: /assets/images/2026/09/1200x728_9.2.png
twitter_image: /assets/images/2026/09/1024x512_9.2.png
tags:
- news
- version
- minor
- releases
- "9.2"
- "9.x"
- "9.2.x"
---

PrestaShop 9.2 is here, and it is a big one! 🎉 This release brings some of the most requested features of recent years straight into the platform: a native One Page Checkout module to make buying faster and smoother, an AI assistant right inside the back office with Ask AI, and a brand new Extra Properties system that lets developers extend any core entity natively, and merchants create their own custom fields directly from the back office. That's not all; this release also ships another batch of pages migrated to Symfony, and a long list of improvements and bug fixes. Months of work by the PrestaShop teams and our amazing community come together in this version, and we can't wait for you to try it!

![PrestaShop 9.2 is available!](/assets/images/2026/09/1534x434_9.2.png)

---

{{< cta "#download-prestashop-92" >}}Download & upgrade instructions{{< /cta >}}

{{< toc >}}

## What's new in PrestaShop 9.2?

### One Page Checkout: a faster, smoother checkout

PrestaShop 9.2 includes a native One Page Checkout module in the bundle, bringing the entire checkout experience together onto a single page. Merchants get a faster, guest-friendly flow that helps reduce friction and improve conversion, and they can switch between the one-page and the four-page checkout from the back office.

{{< gallery
  "/assets/images/2026/07/OPC1.png::All checkout steps gathered on a single page"
  "/assets/images/2026/07/OPC.png::Guest-first experience, with no account creation required"
  "/assets/images/2026/07/OPC2.png::Delivery and payment, with no page reload"
  "/assets/images/2026/07/OPC3.png::Switch between one-page and four-page checkout in the back office"
>}}

{{< cta-group >}}
{{< cta url="/news/2026/introducing-one-page-checkout/" inline="true" >}}Read the article{{< /cta >}}
{{< /cta-group >}}

{{% notice type="important" title="Payment and shipping module developers, this is for you" %}}
If you maintain a payment or shipping (carrier) module, check that it behaves correctly in the one-page flow using the [module developers guide](https://devdocs.prestashop-project.org/9/modules/checkout/module-developers/) and the [theme developers guide](https://devdocs.prestashop-project.org/9/modules/checkout/theme-developers/).
{{% /notice %}}

---

### Extra Properties: native extra fields for every entity

Extra Properties is a new native way to attach extra fields to core entities such as Product, Combination, Customer, or Order. Each field has its own type and rules, understands languages and shops out of the box, and shows up automatically in Back Office forms and grids, on the Front Office, and in the Admin API.

For module developers, this means less boilerplate and a single, reusable extension point instead of rebuilding the same persistence logic in every module.

Merchants can also create and manage their own extra fields directly from the back office, under **Advanced Parameters > Extra Properties**, and choose where each field appears: in forms, in grids, or in the Admin API.

![Editing an extra property in the back office](/assets/images/2026/07/ExtraProperties.png)

{{< cta-group >}}
{{< cta url="/news/2026/extra-properties-custom-data-fields/" inline="true" >}}Read the article{{< /cta >}}
{{< /cta-group >}}

{{% notice type="info" %}}
Extra Properties is the result of a joint effort between [Kiwik](https://www.kiwik.com/) and the PrestaShop SA teams. A big thank you to everyone involved for bringing this feature to life.
{{% /notice %}}

---

### Ask AI: a native AI assistant in your back office

"Ask AI" is a built-in conversational assistant available right in the back office. Merchants can ask questions about their store data and trigger actions in plain, natural language. It is powered by the [PrestaShop MCP Server](https://addons.prestashop.com/en/administrative-tools/96617-prestashop-mcp-server.html), so you can connect the AI provider of your choice.

Ask AI is part of the PrestaShop Classic edition.

{{< gallery
  "/assets/images/2026/07/PSAskAI2.png::The Ask AI panel opens right inside the back office"
  "/assets/images/2026/07/PSAskAI.png::Pick your AI provider and connect your own API key"
  "/assets/images/2026/07/PSAskAI3.png::Ask AI asks for approval before acting on your store"
  "/assets/images/2026/07/PSAskAI4.png::A full-screen conversation, answered from your real store data"
>}}

{{< cta-group >}}
{{< cta url="https://addons.prestashop.com/en/administrative-tools/96617-prestashop-mcp-server.html" inline="true" >}}Discover the PrestaShop MCP Server{{< /cta >}}
{{< /cta-group >}}

---

### PrestaShop Automation with Klaviyo

PrestaShop Automation with Klaviyo is included in the PrestaShop Classic edition. It connects your store to Klaviyo so you can build automated email and SMS campaigns, segment your audience, and personalize communication based on real shop data, right after installation.

{{< cta-group >}}
{{< cta url="https://addons.prestashop.com/en/advertising-marketing-newsletter-modules/91359-prestashop-automation-with-klaviyo.html" inline="true" >}}Read more{{< /cta >}}
{{< /cta-group >}}

---

### The Symfony migration continues

Another batch of back office pages has been migrated to Symfony, making them easier to maintain and extend:

- Countries
- Merchandise Return
- Hook a module
- Quick Access
- Email body translations
- Tax rules

These migrated pages are available behind a feature flag, so you can switch to them and share your feedback before they become the default.

{{% notice type="info" title="What is a feature flag?" %}}
Feature flags let you enable experimental features individually. Find them under **Advanced Parameters > New & Experimental Features** in the back office.
{{% /notice %}}

## What’s more in the core?

### Thumbnail fitment for image types

Image types now come with a new **image fitment** setting that defines how source images are resized when thumbnails are generated. You can pick one of three modes for each image type:

- **Fit**: fit the image into the thumbnail and fill the rest with empty space (the default, same as before).
- **Crop**: fill the thumbnail entirely and crop the overflowing parts, for clean miniatures.
- **Bound**: keep the original image ratio within the configured maximum bounds, for large gallery images or brand logos without extra whitespace.

Hummingbird 2.1.2 already takes advantage of it with its new `manufacturer_product_page` image type. Thank you to [@Hlavtox](https://github.com/Hlavtox) for this contribution, sponsored by TRENDO s.r.o. ([#41977](https://github.com/PrestaShop/PrestaShop/pull/41977)).

## Hummingbird 2.1.2

[Hummingbird](https://github.com/PrestaShop/hummingbird/), the default front office theme since PrestaShop 9.1, keeps evolving alongside the core. PrestaShop 9.2 ships with **Hummingbird 2.1.2**, which builds on the 2.1.1 maintenance release with checkout and order fixes, accessibility improvements, and small product and store page enhancements. Version 2.1.2 also removes development files from the theme package for security.

**Checkout and orders**

- The checkout address step no longer nests forms, so the Continue button works while editing an address with a separate billing address.
- The guest order tracking form now submits with `POST`, and the order lookup is kept in the guest-to-customer transformation form.
- A new `displayOrderDetailProductLine` hook call on every order product line lets modules display information next to a single product of an order.

**Accessibility**

- Store page accordion toggles are now real `<button>` elements.
- Reassurance icons are marked as decorative.

**Customization and features**

- A new `manufacturer_product_page` image type uses the thumbnail fitment feature introduced in PrestaShop 9.2, so brand logos on the product page no longer get extra whitespace.
- Phone number, fax number, and email address are now clickable links in store details.
- The account menu sidebar is now sticky.
- Breadcrumb styles are updated so the breadcrumb displays correctly on error pages.

**Notable fixes**

- B2B tax-excluded prices are now formatted with the currency.
- The country tax label setting is respected on the product page, and the tax info block only renders when there is something to show.
- The product list rating display (productcomments) no longer throws an error.

**Developer experience**

- A new QA testing checklist (beta) covers a full theme test pass: pages, back office settings, native modules, overrides, accessibility, and responsive, plus a seed script to prepare a test shop. It also serves as the reference for an AI agent skill that runs QA on the theme. Both are still evolving, so feedback is welcome.

{{% notice type="info" %}}
Building the theme from source now requires **Node.js 24** and **npm 11** (see `.nvmrc`). This does not affect shops using the packaged theme.
{{% /notice %}}

{{< cta-group >}}
{{< cta url="https://github.com/PrestaShop/hummingbird/releases/tag/v2.1.2" inline="true" >}}Hummingbird 2.1.2 release notes{{< /cta >}}
{{< cta url="https://github.com/PrestaShop/hummingbird/releases/tag/v2.1.1" inline="true" >}}Hummingbird 2.1.1 release notes{{< /cta >}}
{{< /cta-group >}}

## Adapt your solutions to PrestaShop 9.2

If you develop modules, themes, or custom integrations for PrestaShop, we recommend reviewing the notable changes introduced in this version. The documentation covers breaking changes, deprecated components, and updated best practices that may affect your solutions.

{{< cta "https://devdocs.prestashop-project.org/9/modules/core-updates/9.2/" >}}Review notable changes in PrestaShop 9.2{{< /cta >}}

## Changelog

<details open class="changelog-toggle">
<summary><strong>v9.2.0</strong></summary>

<!-- CHANGELOG PLACEHOLDER
Paste here the changes merged since RC1, with links to individual PRs.
Format: - [#XXXXX](https://github.com/PrestaShop/PrestaShop/pull/XXXXX): Description (by [@user](https://github.com/user))
Full list: https://github.com/PrestaShop/PrestaShop/releases/tag/9.2.0
-->

</details>

<details class="changelog-toggle">
<summary><strong>v9.2.0 RC1</strong> (click to expand)</summary>

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

</details>

<details class="changelog-toggle">
<summary><strong>v9.2.0 Beta 1</strong> (click to expand)</summary>

- Back Office:
  - New feature:
    - [#41822](https://github.com/PrestaShop/PrestaShop/pull/41822): Add translation scanner for extra property labels and descriptions (by [@jolelievre](https://github.com/jolelievre))
    - [#41775](https://github.com/PrestaShop/PrestaShop/pull/41775): Add Back Office management for extra property definitions (by [@Jeremie-Kiwik](https://github.com/Jeremie-Kiwik))
    - [#41402](https://github.com/PrestaShop/PrestaShop/pull/41402): Rework shipping cost as service (by [@Poulinhoo](https://github.com/Poulinhoo))
    - [#41015](https://github.com/PrestaShop/PrestaShop/pull/41015): Feat: some refactor + add row action to generate delivery slip (by [@Nakahiru](https://github.com/Nakahiru))
    - [#41012](https://github.com/PrestaShop/PrestaShop/pull/41012): Add shipments on edit modal (by [@Poulinhoo](https://github.com/Poulinhoo))
    - [#40960](https://github.com/PrestaShop/PrestaShop/pull/40960): Handle shipment product quantity update (by [@M0rgan01](https://github.com/M0rgan01))
    - [#40944](https://github.com/PrestaShop/PrestaShop/pull/40944): Add a modal to improve shipments inside order page for editing a product (by [@Poulinhoo](https://github.com/Poulinhoo))
    - [#40852](https://github.com/PrestaShop/PrestaShop/pull/40852): Add soft delete on multishipment (by [@Poulinhoo](https://github.com/Poulinhoo))
    - [#40819](https://github.com/PrestaShop/PrestaShop/pull/40819): Add possibility to create a shipment on an existing order (by [@Poulinhoo](https://github.com/Poulinhoo))
    - [#40685](https://github.com/PrestaShop/PrestaShop/pull/40685): EPIC1-US1.2 : B2B Model Activation : add “B2C mode” and “B2B mode” settings (by [@soledis-contributeur](https://github.com/soledis-contributeur))
    - [#40591](https://github.com/PrestaShop/PrestaShop/pull/40591): Feat(shipment): add shipments information on invoices (by [@Nakahiru](https://github.com/Nakahiru))
  - Improvement:
    - [#41941](https://github.com/PrestaShop/PrestaShop/pull/41941): Rework the extra property definition form into structured builders (rows as form data, catalogs, save-time validation) (by [@jolelievre](https://github.com/jolelievre))
    - [#41776](https://github.com/PrestaShop/PrestaShop/pull/41776): Change badge color for product quantity display (by [@Maofree](https://github.com/Maofree))
    - [#41770](https://github.com/PrestaShop/PrestaShop/pull/41770): Delivery slip multi shipment - remove Total amount paid (by [@M0rgan01](https://github.com/M0rgan01))
    - [#41729](https://github.com/PrestaShop/PrestaShop/pull/41729): UI Test - Add UI test to check the contribution part of the Wall of Fame (by [@AureRita](https://github.com/AureRita))
    - [#41712](https://github.com/PrestaShop/PrestaShop/pull/41712): Add delivery slip in documents tab (Improved shipment)  (by [@M0rgan01](https://github.com/M0rgan01))
    - [#41623](https://github.com/PrestaShop/PrestaShop/pull/41623): Improve Tax rules management in Tax rules group backoffice pages (by [@boherm](https://github.com/boherm))
    - [#41612](https://github.com/PrestaShop/PrestaShop/pull/41612): Replace window.prompt() with a modal when adding a page to Quick Access (by [@mattgoud](https://github.com/mattgoud))
    - [#41588](https://github.com/PrestaShop/PrestaShop/pull/41588): Sort hook selector options alphabetically by name (by [@nicosomb](https://github.com/nicosomb))
    - [#41559](https://github.com/PrestaShop/PrestaShop/pull/41559): Migrate "International > Taxes > Tax Rules" page (by [@boherm](https://github.com/boherm))
    - [#41527](https://github.com/PrestaShop/PrestaShop/pull/41527): Migrate merchandise return (by [@tleon](https://github.com/tleon))
    - [#41526](https://github.com/PrestaShop/PrestaShop/pull/41526): Add CLI console commands to change an employee password & create a super admin (by [@jf-viguier](https://github.com/jf-viguier))
    - [#41508](https://github.com/PrestaShop/PrestaShop/pull/41508): Migrate "Configure > Advanced Parameters > Quick Access" page to Symfony (by [@mattgoud](https://github.com/mattgoud))
    - [#41495](https://github.com/PrestaShop/PrestaShop/pull/41495): Improve countries list Symfony migration (by [@mattgoud](https://github.com/mattgoud))
    - [#41433](https://github.com/PrestaShop/PrestaShop/pull/41433): SF Migration - Email body translations (by [@boherm](https://github.com/boherm))
    - [#41407](https://github.com/PrestaShop/PrestaShop/pull/41407): Migrate the Hook a module feature (by [@nicosomb](https://github.com/nicosomb))
    - [#41406](https://github.com/PrestaShop/PrestaShop/pull/41406): Migrate country options (by [@tleon](https://github.com/tleon))
    - [#41397](https://github.com/PrestaShop/PrestaShop/pull/41397): Country Address format: replace legacy widget with Vue 3 visual builder (by [@jolelievre](https://github.com/jolelievre))
    - [#41081](https://github.com/PrestaShop/PrestaShop/pull/41081): Merge add shipment in existing command (by [@Poulinhoo](https://github.com/Poulinhoo))
    - [#41050](https://github.com/PrestaShop/PrestaShop/pull/41050): Handle inelegible products "free gift" discount (by [@nicosomb](https://github.com/nicosomb))
    - [#41026](https://github.com/PrestaShop/PrestaShop/pull/41026): Add form builder for edit shipment form (by [@Poulinhoo](https://github.com/Poulinhoo))
    - [#40995](https://github.com/PrestaShop/PrestaShop/pull/40995): Disabled discount when only customer or customer group is deleted (by [@tleon](https://github.com/tleon))
    - [#40918](https://github.com/PrestaShop/PrestaShop/pull/40918): Add GetShipmentsForOrderDetail query (by [@M0rgan01](https://github.com/M0rgan01))
    - [#40892](https://github.com/PrestaShop/PrestaShop/pull/40892): Discount UI improvement (by [@jolelievre](https://github.com/jolelievre))
    - [#40850](https://github.com/PrestaShop/PrestaShop/pull/40850): Add builder form on add product inside a existing order (by [@Poulinhoo](https://github.com/Poulinhoo))
    - [#40846](https://github.com/PrestaShop/PrestaShop/pull/40846): Update split and merge forms for multi-shipment (by [@M0rgan01](https://github.com/M0rgan01))
    - [#40719](https://github.com/PrestaShop/PrestaShop/pull/40719): Added multi-shipment support to emails (by [@M0rgan01](https://github.com/M0rgan01))
    - [#40548](https://github.com/PrestaShop/PrestaShop/pull/40548): Feat: add new modale on order page for add product & add select for choose shipment for new product added (by [@Poulinhoo](https://github.com/Poulinhoo))
    - [#40514](https://github.com/PrestaShop/PrestaShop/pull/40514): Multi-carrier - Handle product deletion in order (by [@M0rgan01](https://github.com/M0rgan01))
    - [#40477](https://github.com/PrestaShop/PrestaShop/pull/40477): Add clickable product links in stock management pages (by [@kpodemski](https://github.com/kpodemski))
    - [#40238](https://github.com/PrestaShop/PrestaShop/pull/40238): BO : Enabled feature flag "Tag" & Set stability as "stable" (by [@Progi1984](https://github.com/Progi1984))
    - [#40234](https://github.com/PrestaShop/PrestaShop/pull/40234): Delete specific prices when group is removed (by [@aomaxime](https://github.com/aomaxime))
  - Bug fix:
    - [#41931](https://github.com/PrestaShop/PrestaShop/pull/41931): Add bulk delete action to migrated Countries page (by [@jolelievre](https://github.com/jolelievre))
    - [#41923](https://github.com/PrestaShop/PrestaShop/pull/41923): Changing stock behaviour not working with multistore. (by [@Prestaworks](https://github.com/Prestaworks))
    - [#41909](https://github.com/PrestaShop/PrestaShop/pull/41909): Fix cumulated free shipping (by [@tleon](https://github.com/tleon))
    - [#41819](https://github.com/PrestaShop/PrestaShop/pull/41819): Fix legacy module transaltion system (by [@jolelievre](https://github.com/jolelievre))
    - [#41817](https://github.com/PrestaShop/PrestaShop/pull/41817): Fix: order-with-shipment-display (by [@M0rgan01](https://github.com/M0rgan01))
    - [#41769](https://github.com/PrestaShop/PrestaShop/pull/41769): Delivery slip multi shipment - Fix grid action download delivery slip (by [@M0rgan01](https://github.com/M0rgan01))
    - [#41763](https://github.com/PrestaShop/PrestaShop/pull/41763): Fix API Client creation error caused by non-int form handler result (by [@jolelievre](https://github.com/jolelievre))
    - [#41745](https://github.com/PrestaShop/PrestaShop/pull/41745): Reject invalid call prefix when creating or editing a country (FF Country) (by [@mattgoud](https://github.com/mattgoud))
    - [#41744](https://github.com/PrestaShop/PrestaShop/pull/41744): Reject duplicate ISO code when creating or editing a country (FF Country) (by [@mattgoud](https://github.com/mattgoud))
    - [#41736](https://github.com/PrestaShop/PrestaShop/pull/41736): Fix custom feature value selection when no predefined values exist (by [@Codencode](https://github.com/Codencode))
    - [#41735](https://github.com/PrestaShop/PrestaShop/pull/41735): Fix feature values grid to exclude custom values (by [@Codencode](https://github.com/Codencode))
    - [#41732](https://github.com/PrestaShop/PrestaShop/pull/41732): Fill default address format when creating a country (FF Country) (by [@mattgoud](https://github.com/mattgoud))
    - [#41727](https://github.com/PrestaShop/PrestaShop/pull/41727): Fix: Module Development and Distribution: Prestashop deletes automatically src/Entity/index.php, but it does not recursively in subfolders (by [@Codencode](https://github.com/Codencode))
    - [#41689](https://github.com/PrestaShop/PrestaShop/pull/41689): Handle only carrier compatible with products and active (by [@Poulinhoo](https://github.com/Poulinhoo))
    - [#41675](https://github.com/PrestaShop/PrestaShop/pull/41675): Fix: HTMLPurifier through twig extension is not adhering to cache dir config (by [@Codencode](https://github.com/Codencode))
    - [#41661](https://github.com/PrestaShop/PrestaShop/pull/41661): Fix Quick Access form not auto-filling empty language names (by [@mattgoud](https://github.com/mattgoud))
    - [#41651](https://github.com/PrestaShop/PrestaShop/pull/41651): Fix bad redirection for email body translations (by [@boherm](https://github.com/boherm))
    - [#41620](https://github.com/PrestaShop/PrestaShop/pull/41620): Fix states grid not refreshing after toggle when filters are active (by [@mattgoud](https://github.com/mattgoud))
    - [#41617](https://github.com/PrestaShop/PrestaShop/pull/41617): Fix countries grid not refreshing after toggle when filters are active (by [@mattgoud](https://github.com/mattgoud))
    - [#41611](https://github.com/PrestaShop/PrestaShop/pull/41611): Cart rule compatibility search does not filter results for new cart rule (by [@LaBisquerie](https://github.com/LaBisquerie))
    - [#41581](https://github.com/PrestaShop/PrestaShop/pull/41581): Add missing semicolon (by [@mgielecinski](https://github.com/mgielecinski))
    - [#41573](https://github.com/PrestaShop/PrestaShop/pull/41573): Fix highlight option missing in Discount V2 form (by [@mattgoud](https://github.com/mattgoud))
    - [#41570](https://github.com/PrestaShop/PrestaShop/pull/41570): Use position as default sorting for feature grid (by [@Codencode](https://github.com/Codencode))
    - [#41566](https://github.com/PrestaShop/PrestaShop/pull/41566): Discount - Fix delivery condition not removed when switching to None (by [@mattgoud](https://github.com/mattgoud))
    - [#41564](https://github.com/PrestaShop/PrestaShop/pull/41564): Fix Discount V2 end date validation when period never expires is checked (by [@mattgoud](https://github.com/mattgoud))
    - [#41555](https://github.com/PrestaShop/PrestaShop/pull/41555): Make HookRegistry stateless and name-keyed (by [@jolelievre](https://github.com/jolelievre))
    - [#41552](https://github.com/PrestaShop/PrestaShop/pull/41552): Fix #41189 - Allow changing discount status on edit page (by [@mattgoud](https://github.com/mattgoud))
    - [#41551](https://github.com/PrestaShop/PrestaShop/pull/41551): Fix shop selector lists overflowing their container (by [@david-prochazka](https://github.com/david-prochazka))
    - [#41530](https://github.com/PrestaShop/PrestaShop/pull/41530): Shopping Carts : For combinations, if no image defined, use the cover  image (by [@Progi1984](https://github.com/Progi1984))
    - [#41524](https://github.com/PrestaShop/PrestaShop/pull/41524): Invoice : If no payments, display the payment method (by [@Progi1984](https://github.com/Progi1984))
    - [#41457](https://github.com/PrestaShop/PrestaShop/pull/41457): Enhance invoice filename safety by sanitizing number (by [@Maofree](https://github.com/Maofree))
    - [#41394](https://github.com/PrestaShop/PrestaShop/pull/41394): Fix: [Multishop] Error when updating "Schema of URLs" for a single shop (by [@Codencode](https://github.com/Codencode))
    - [#41307](https://github.com/PrestaShop/PrestaShop/pull/41307): Fix PDF downloads using Symfony responses (by [@Codencode](https://github.com/Codencode))
    - [#41303](https://github.com/PrestaShop/PrestaShop/pull/41303): Fix address state selection after country states reload (by [@Codencode](https://github.com/Codencode))
    - [#41206](https://github.com/PrestaShop/PrestaShop/pull/41206): Bugfix: prevent email shortcodes automatically being moved. Fixes #38563 issue (by [@aleksiuno](https://github.com/aleksiuno))
    - [#41204](https://github.com/PrestaShop/PrestaShop/pull/41204): Change the redirection of combination button learn more (by [@AureRita](https://github.com/AureRita))
    - [#41116](https://github.com/PrestaShop/PrestaShop/pull/41116): Fix: align on the same line inline grid action and regular grid action (by [@Nakahiru](https://github.com/Nakahiru))
    - [#41036](https://github.com/PrestaShop/PrestaShop/pull/41036): Fix: Error 500 if I enter a space in a customer's first or last name field (by [@Codencode](https://github.com/Codencode))
    - [#41007](https://github.com/PrestaShop/PrestaShop/pull/41007): Fix: CountryQueryBuilder::getCountQueryBuilder() always returns 1 instead of the true total (by [@Codencode](https://github.com/Codencode))
    - [#40999](https://github.com/PrestaShop/PrestaShop/pull/40999): Fix/40997 default currency import on shop copy (by [@Codencode](https://github.com/Codencode))
    - [#40898](https://github.com/PrestaShop/PrestaShop/pull/40898): Fix: Bug: reserved_quantity not updated when "Share available quantities for sale" is enabled (Multishop) (by [@Codencode](https://github.com/Codencode))
    - [#40874](https://github.com/PrestaShop/PrestaShop/pull/40874): Update eligible carriers calculation for multi-shipment (by [@M0rgan01](https://github.com/M0rgan01))
    - [#40872](https://github.com/PrestaShop/PrestaShop/pull/40872): Resolve problem on split shipment on carrier select (by [@Poulinhoo](https://github.com/Poulinhoo))
    - [#40867](https://github.com/PrestaShop/PrestaShop/pull/40867): Hide expiration field when "period never expires" is checked (by [@nicosomb](https://github.com/nicosomb))
    - [#40821](https://github.com/PrestaShop/PrestaShop/pull/40821): Resolve problem on add product on existing order when multishipment is disable (by [@Poulinhoo](https://github.com/Poulinhoo))
    - [#40530](https://github.com/PrestaShop/PrestaShop/pull/40530): Multi-shipment - Fix split shipment carrier choice (by [@M0rgan01](https://github.com/M0rgan01))
    - [#40099](https://github.com/PrestaShop/PrestaShop/pull/40099): Fix: Cart rule combinations lost when saving if lazy-loaded list (jscroll) is not fully loaded (by [@Codencode](https://github.com/Codencode))
  - Refactoring:
    - [#41260](https://github.com/PrestaShop/PrestaShop/pull/41260): TEST [E2E] update Design Pages page with meta title column (by [@paulnoelcholot](https://github.com/paulnoelcholot))
- Front Office:
  - New feature:
    - [#41589](https://github.com/PrestaShop/PrestaShop/pull/41589): One-page Checkout beta version setup (by [@ThbPS](https://github.com/ThbPS))
    - [#41047](https://github.com/PrestaShop/PrestaShop/pull/41047): Feat: introduce One-page Checkout hook (by [@ThbPS](https://github.com/ThbPS))
    - [#40864](https://github.com/PrestaShop/PrestaShop/pull/40864): Feat(OPC): introduce template feature flag for One-Page Checkout (by [@ThbPS](https://github.com/ThbPS))
  - Improvement:
    - [#41974](https://github.com/PrestaShop/PrestaShop/pull/41974): Add autofill autocomplete tokens to the customer registration form (by [@boo-code](https://github.com/boo-code))
    - [#41709](https://github.com/PrestaShop/PrestaShop/pull/41709): Update password autocomplete (by [@tblivet](https://github.com/tblivet))
    - [#41404](https://github.com/PrestaShop/PrestaShop/pull/41404): Improvement: add back parameter in FO customer template URLs (by [@ThbPS](https://github.com/ThbPS))
    - [#41281](https://github.com/PrestaShop/PrestaShop/pull/41281): Harden and depreciate /init.php for 9.1.x (by [@jf-viguier](https://github.com/jf-viguier))
    - [#40849](https://github.com/PrestaShop/PrestaShop/pull/40849): Login form: change `autocomplete="email"` to `autocomplete="username"` (by [@yannicka](https://github.com/yannicka))
    - [#40587](https://github.com/PrestaShop/PrestaShop/pull/40587): Multi-shipments - Added a compatibility layer for orders without shipments (by [@M0rgan01](https://github.com/M0rgan01))
    - [#40345](https://github.com/PrestaShop/PrestaShop/pull/40345): Fix(FO): Allow HEAD requests to be processed by canonicalRedirection … (by [@tfayolle](https://github.com/tfayolle))
    - [#40315](https://github.com/PrestaShop/PrestaShop/pull/40315): Use product EmbeddedAttributes in quickview (by [@M0rgan01](https://github.com/M0rgan01))
    - [#40308](https://github.com/PrestaShop/PrestaShop/pull/40308): CMS pages listed on CMS Category page should be presented properly (by [@Prestaworks](https://github.com/Prestaworks))
    - [#39949](https://github.com/PrestaShop/PrestaShop/pull/39949): Refactor attachment download URLs to use SEO-friendly pattern /attachment/{id}-{filename} (by [@Codencode](https://github.com/Codencode))
    - [#33539](https://github.com/PrestaShop/PrestaShop/pull/33539): Secure table name with bqsql in DB and DBQuery (by [@jf-viguier](https://github.com/jf-viguier))
  - Bug fix:
    - [#41899](https://github.com/PrestaShop/PrestaShop/pull/41899): Scope Image::getCover() to the shop (by [@boo-code](https://github.com/boo-code))
    - [#41711](https://github.com/PrestaShop/PrestaShop/pull/41711): Use new shipping calculator on order creation (Improved shipment)  (by [@M0rgan01](https://github.com/M0rgan01))
    - [#41649](https://github.com/PrestaShop/PrestaShop/pull/41649): Add missing breadcrumb link to OrderDetailController (by [@Codencode](https://github.com/Codencode))
    - [#41590](https://github.com/PrestaShop/PrestaShop/pull/41590): Add missing breadcrumb link to CartController (by [@Codencode](https://github.com/Codencode))
    - [#41509](https://github.com/PrestaShop/PrestaShop/pull/41509): Avoid bad URL on invalid media with media servers enabled and CCC disabled (by [@gross-nvs](https://github.com/gross-nvs))
    - [#41299](https://github.com/PrestaShop/PrestaShop/pull/41299): Guard product page when product is null (by [@Codencode](https://github.com/Codencode))
    - [#41298](https://github.com/PrestaShop/PrestaShop/pull/41298): Fix: hook extra content issues with multi shipment (by [@Nakahiru](https://github.com/Nakahiru))
  - Refactoring:
    - [#41994](https://github.com/PrestaShop/PrestaShop/pull/41994): Use canonical url in breadcrumbs, avoid using smarty value (by [@Hlavtox](https://github.com/Hlavtox))
    - [#41993](https://github.com/PrestaShop/PrestaShop/pull/41993): Further small tweaks to structured data (by [@Hlavtox](https://github.com/Hlavtox))
    - [#41811](https://github.com/PrestaShop/PrestaShop/pull/41811): Fix structured data for manufacturer list (by [@Hlavtox](https://github.com/Hlavtox))
    - [#41698](https://github.com/PrestaShop/PrestaShop/pull/41698): Round price in structured data to display precision (by [@Hlavtox](https://github.com/Hlavtox))
    - [#41006](https://github.com/PrestaShop/PrestaShop/pull/41006): Refacto: remove One-Page Checkout feature flag (by [@ThbPS](https://github.com/ThbPS))
    - [#37552](https://github.com/PrestaShop/PrestaShop/pull/37552): Render structured data on core side (by [@Hlavtox](https://github.com/Hlavtox))
- Core:
  - New feature:
    - [#41492](https://github.com/PrestaShop/PrestaShop/pull/41492): Fix matrix generation workflow (by [@jolelievre](https://github.com/jolelievre))
    - [#41446](https://github.com/PrestaShop/PrestaShop/pull/41446): Add a console command to list modules: prestashop:module:list (by [@jf-viguier](https://github.com/jf-viguier))
    - [#41092](https://github.com/PrestaShop/PrestaShop/pull/41092): Add extra properties to PrestaShop (by [@Jeremie-Kiwik](https://github.com/Jeremie-Kiwik))
    - [#41089](https://github.com/PrestaShop/PrestaShop/pull/41089): Integrate the price calculator in getPriceStatic and getProductProperties (by [@jolelievre](https://github.com/jolelievre))
    - [#41039](https://github.com/PrestaShop/PrestaShop/pull/41039): Initialise new Product calculator (by [@jolelievre](https://github.com/jolelievre))
    - [#41029](https://github.com/PrestaShop/PrestaShop/pull/41029): Define the architecture for the new extra property feature (by [@jolelievre](https://github.com/jolelievre))
    - [#41027](https://github.com/PrestaShop/PrestaShop/pull/41027): Start defining the new pricing architecture (by [@jolelievre](https://github.com/jolelievre))
    - [#40796](https://github.com/PrestaShop/PrestaShop/pull/40796): Add feature flag for One-page checkout (by [@kevin-carangeot](https://github.com/kevin-carangeot))
    - [#40764](https://github.com/PrestaShop/PrestaShop/pull/40764): Add manual workflow to generate and create a PR for changelog (by [@jolelievre](https://github.com/jolelievre))
    - [#40755](https://github.com/PrestaShop/PrestaShop/pull/40755): Add build release action (by [@nicosomb](https://github.com/nicosomb))
    - [#40654](https://github.com/PrestaShop/PrestaShop/pull/40654): Theme helper to check framework's compatibility (by [@kpodemski](https://github.com/kpodemski))
    - [#40031](https://github.com/PrestaShop/PrestaShop/pull/40031): Add new condition types (by [@Hlavtox](https://github.com/Hlavtox))
  - Improvement:
    - [#42007](https://github.com/PrestaShop/PrestaShop/pull/42007): Update hooks configuration (by [@nicosomb](https://github.com/nicosomb))
    - [#41989](https://github.com/PrestaShop/PrestaShop/pull/41989): Update dependencies for release (by [@tleon](https://github.com/tleon))
    - [#41976](https://github.com/PrestaShop/PrestaShop/pull/41976): Update the generated FOS JS routing file (by [@mattgoud](https://github.com/mattgoud))
    - [#41962](https://github.com/PrestaShop/PrestaShop/pull/41962): Chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.62.0 to 8.63.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41893](https://github.com/PrestaShop/PrestaShop/pull/41893): Chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.61.1 to 8.62.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41892](https://github.com/PrestaShop/PrestaShop/pull/41892): Chore(deps-dev): bump @types/node from 26.0.0 to 26.1.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41891](https://github.com/PrestaShop/PrestaShop/pull/41891): Chore(deps-dev): bump @typescript-eslint/parser from 8.62.0 to 8.62.1 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41883](https://github.com/PrestaShop/PrestaShop/pull/41883): Update Symfony components after 6.4.42 release (by [@nicosomb](https://github.com/nicosomb))
    - [#41806](https://github.com/PrestaShop/PrestaShop/pull/41806): Replace legacy extra-property validation with Symfony Validator constraints (by [@jolelievre](https://github.com/jolelievre))
    - [#41800](https://github.com/PrestaShop/PrestaShop/pull/41800): Bump GitHub Actions to Node 24 runtime (by [@PrestaEdit](https://github.com/PrestaEdit))
    - [#41787](https://github.com/PrestaShop/PrestaShop/pull/41787): Chore(deps-dev): bump @types/node from 25.9.3 to 26.0.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41786](https://github.com/PrestaShop/PrestaShop/pull/41786): Chore(deps): bump @faker-js/faker from 10.4.0 to 10.5.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41785](https://github.com/PrestaShop/PrestaShop/pull/41785): Chore(deps-dev): bump @typescript-eslint/parser from 8.61.0 to 8.61.1 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41784](https://github.com/PrestaShop/PrestaShop/pull/41784): Chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.61.0 to 8.61.1 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41746](https://github.com/PrestaShop/PrestaShop/pull/41746): Add ExtraProperty AI component context (by [@jolelievre](https://github.com/jolelievre))
    - [#41728](https://github.com/PrestaShop/PrestaShop/pull/41728): Document ReorderPositionsButtonType convention for position columns (by [@jolelievre](https://github.com/jolelievre))
    - [#41719](https://github.com/PrestaShop/PrestaShop/pull/41719): Chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.60.1 to 8.61.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41717](https://github.com/PrestaShop/PrestaShop/pull/41717): Chore(deps-dev): bump @types/node from 25.9.2 to 25.9.3 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41715](https://github.com/PrestaShop/PrestaShop/pull/41715): Chore(deps): bump @prestashop-core/ui-testing from `ae553f7` to `0db9b72` in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41657](https://github.com/PrestaShop/PrestaShop/pull/41657): Chore(deps): bump mysql2 from 3.22.4 to 3.22.5 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41656](https://github.com/PrestaShop/PrestaShop/pull/41656): Chore(deps-dev): bump @types/node from 25.9.1 to 25.9.2 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41655](https://github.com/PrestaShop/PrestaShop/pull/41655): Chore(deps-dev): bump @typescript-eslint/parser from 8.60.0 to 8.60.1 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41654](https://github.com/PrestaShop/PrestaShop/pull/41654): Chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.60.0 to 8.60.1 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41653](https://github.com/PrestaShop/PrestaShop/pull/41653): Chore(deps): bump @prestashop-core/ui-testing from `117cd6f` to `64fb21c` in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41647](https://github.com/PrestaShop/PrestaShop/pull/41647): Bump version 9.1.5 (by [@jolelievre](https://github.com/jolelievre))
    - [#41607](https://github.com/PrestaShop/PrestaShop/pull/41607): Workflow dispatch to create the build branch (by [@jolelievre](https://github.com/jolelievre))
    - [#41582](https://github.com/PrestaShop/PrestaShop/pull/41582): Chore(deps): bump @prestashop-core/ui-testing from `c66894d` to `f036af5` in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41567](https://github.com/PrestaShop/PrestaShop/pull/41567): Update Symfony components after 6.4.41 release (by [@nicosomb](https://github.com/nicosomb))
    - [#41561](https://github.com/PrestaShop/PrestaShop/pull/41561): Update Symfony components after 6.4.41 release (by [@nicosomb](https://github.com/nicosomb))
    - [#41537](https://github.com/PrestaShop/PrestaShop/pull/41537): Chore(deps): bump mocha from 11.7.5 to 11.7.6 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41536](https://github.com/PrestaShop/PrestaShop/pull/41536): Chore(deps-dev): bump @types/node from 25.8.0 to 25.9.1 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41534](https://github.com/PrestaShop/PrestaShop/pull/41534): Chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.59.3 to 8.59.4 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41529](https://github.com/PrestaShop/PrestaShop/pull/41529): Set version to 9.1.4 (by [@Progi1984](https://github.com/Progi1984))
    - [#41491](https://github.com/PrestaShop/PrestaShop/pull/41491): Chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.59.2 to 8.59.3 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41490](https://github.com/PrestaShop/PrestaShop/pull/41490): Chore(deps-dev): bump @types/chai from 4.3.11 to 5.2.3 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41489](https://github.com/PrestaShop/PrestaShop/pull/41489): Chore(deps-dev): bump @types/node from 25.6.2 to 25.8.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41465](https://github.com/PrestaShop/PrestaShop/pull/41465): Update Symfony components after 6.4.39 release (by [@nicosomb](https://github.com/nicosomb))
    - [#41455](https://github.com/PrestaShop/PrestaShop/pull/41455): Improve AI Forms context (settings vs CRUD) and introduce the sub-context pattern (by [@jolelievre](https://github.com/jolelievre))
    - [#41449](https://github.com/PrestaShop/PrestaShop/pull/41449): Make branch input a simple input to use build branches (by [@jolelievre](https://github.com/jolelievre))
    - [#41440](https://github.com/PrestaShop/PrestaShop/pull/41440): Chore(deps-dev): bump @types/node from 25.6.0 to 25.6.2 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41439](https://github.com/PrestaShop/PrestaShop/pull/41439): Chore(deps): bump chai from 4.5.0 to 6.2.2 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41435](https://github.com/PrestaShop/PrestaShop/pull/41435): Add getHighestPosition alias (by [@PrestaEdit](https://github.com/PrestaEdit))
    - [#41390](https://github.com/PrestaShop/PrestaShop/pull/41390): Chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.59.0 to 8.59.1 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41339](https://github.com/PrestaShop/PrestaShop/pull/41339): Chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.58.0 to 8.59.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41338](https://github.com/PrestaShop/PrestaShop/pull/41338): Chore(deps): bump mysql2 from 3.20.0 to 3.22.3 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41337](https://github.com/PrestaShop/PrestaShop/pull/41337): Chore(deps-dev): bump @typescript-eslint/parser from 8.58.0 to 8.59.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41336](https://github.com/PrestaShop/PrestaShop/pull/41336): Improves stale issues workflow : increases cron interval to 20 minutes and adjusts the GitHub API operations limit to 1000. (by [@cnavarro-prestashop](https://github.com/cnavarro-prestashop))
    - [#41305](https://github.com/PrestaShop/PrestaShop/pull/41305): Improve Connection::isBot() with modern crawlers and AI bots to prevent ghost carts and fake connections (by [@jf-viguier](https://github.com/jf-viguier))
    - [#41296](https://github.com/PrestaShop/PrestaShop/pull/41296): Chore(deps-dev): bump typescript from 5.9.3 to 6.0.3 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41279](https://github.com/PrestaShop/PrestaShop/pull/41279): Create a skill for symfony migration in prestashop (by [@tleon](https://github.com/tleon))
    - [#41277](https://github.com/PrestaShop/PrestaShop/pull/41277): Ai fine tunes, update readme and release builder (by [@jolelievre](https://github.com/jolelievre))
    - [#41229](https://github.com/PrestaShop/PrestaShop/pull/41229): Bump the version of the prestashop/dashgoals package from v2.0.4 to v2.0.5 (by [@cnavarro-prestashop](https://github.com/cnavarro-prestashop))
    - [#41227](https://github.com/PrestaShop/PrestaShop/pull/41227): Remove 9.0.x branch (by [@Progi1984](https://github.com/Progi1984))
    - [#41222](https://github.com/PrestaShop/PrestaShop/pull/41222): Chore(deps): bump @prestashop-core/ui-testing from `05ecd00` to `4ed7dbc` in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41221](https://github.com/PrestaShop/PrestaShop/pull/41221): Chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.57.2 to 8.58.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41220](https://github.com/PrestaShop/PrestaShop/pull/41220): Chore(deps-dev): bump @typescript-eslint/parser from 8.57.2 to 8.58.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41219](https://github.com/PrestaShop/PrestaShop/pull/41219): Chore(deps): bump dotenv from 17.3.1 to 17.4.1 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41138](https://github.com/PrestaShop/PrestaShop/pull/41138): Mark Upgrader class as deprecated (by [@ga-devfront](https://github.com/ga-devfront))
    - [#41134](https://github.com/PrestaShop/PrestaShop/pull/41134): Chore(deps-dev): bump @typescript-eslint/parser from 8.57.1 to 8.57.2 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41133](https://github.com/PrestaShop/PrestaShop/pull/41133): Chore(deps): bump @faker-js/faker from 10.3.0 to 10.4.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41132](https://github.com/PrestaShop/PrestaShop/pull/41132): Chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.57.1 to 8.57.2 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41095](https://github.com/PrestaShop/PrestaShop/pull/41095): Init CartCalculator for pricing v2 (by [@boherm](https://github.com/boherm))
    - [#41044](https://github.com/PrestaShop/PrestaShop/pull/41044): Chore(deps-dev): bump @typescript-eslint/parser from 8.57.0 to 8.57.1 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41043](https://github.com/PrestaShop/PrestaShop/pull/41043): Chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.57.0 to 8.57.1 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#41032](https://github.com/PrestaShop/PrestaShop/pull/41032): Add new pricing feature flag (by [@boherm](https://github.com/boherm))
    - [#40984](https://github.com/PrestaShop/PrestaShop/pull/40984): Chore(deps-dev): bump @typescript-eslint/parser from 8.56.1 to 8.57.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40983](https://github.com/PrestaShop/PrestaShop/pull/40983): Chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.56.1 to 8.57.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40982](https://github.com/PrestaShop/PrestaShop/pull/40982): Chore(deps): bump mysql2 from 3.19.1 to 3.20.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40943](https://github.com/PrestaShop/PrestaShop/pull/40943): Chore(deps): bump mysql2 from 3.18.2 to 3.19.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40908](https://github.com/PrestaShop/PrestaShop/pull/40908): Chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.56.0 to 8.56.1 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40907](https://github.com/PrestaShop/PrestaShop/pull/40907): Chore(deps): bump @prestashop-core/ui-testing from `4d24c01` to `bc1cc93` in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40868](https://github.com/PrestaShop/PrestaShop/pull/40868): Move B2B entities into B2B namespace (by [@soledis-contributeur](https://github.com/soledis-contributeur))
    - [#40858](https://github.com/PrestaShop/PrestaShop/pull/40858): Chore(deps): bump mysql2 from 3.17.1 to 3.17.4 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40830](https://github.com/PrestaShop/PrestaShop/pull/40830): Introduce CartRule::total_quantity property (by [@jolelievre](https://github.com/jolelievre))
    - [#40788](https://github.com/PrestaShop/PrestaShop/pull/40788): Use the action from master official branch (by [@jolelievre](https://github.com/jolelievre))
    - [#40786](https://github.com/PrestaShop/PrestaShop/pull/40786): Add display for changelog generation parameters (by [@jolelievre](https://github.com/jolelievre))
    - [#40784](https://github.com/PrestaShop/PrestaShop/pull/40784): Use provided branch by default when generating the changelog (by [@jolelievre](https://github.com/jolelievre))
    - [#40783](https://github.com/PrestaShop/PrestaShop/pull/40783): Bump to 9.2.0 (by [@Progi1984](https://github.com/Progi1984))
    - [#40782](https://github.com/PrestaShop/PrestaShop/pull/40782): Chore(deps): bump @prestashop-core/ui-testing from `dd7a727` to `1e50a1c` in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40781](https://github.com/PrestaShop/PrestaShop/pull/40781): Chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.54.0 to 8.55.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40779](https://github.com/PrestaShop/PrestaShop/pull/40779): Chore(deps): bump dotenv from 17.2.4 to 17.3.1 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40778](https://github.com/PrestaShop/PrestaShop/pull/40778): Chore(deps-dev): bump @typescript-eslint/parser from 8.54.0 to 8.55.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40769](https://github.com/PrestaShop/PrestaShop/pull/40769): Add missing name for matrix workflow (by [@jolelievre](https://github.com/jolelievre))
    - [#40753](https://github.com/PrestaShop/PrestaShop/pull/40753): Dynamic PHP matrix in workflows (by [@jolelievre](https://github.com/jolelievre))
    - [#40749](https://github.com/PrestaShop/PrestaShop/pull/40749): Integrate header-stamp in CI (by [@jolelievre](https://github.com/jolelievre))
    - [#40729](https://github.com/PrestaShop/PrestaShop/pull/40729): Refacto workflow for release (by [@tleon](https://github.com/tleon))
    - [#40637](https://github.com/PrestaShop/PrestaShop/pull/40637): CI: Add PR convention validator (fixes #40501) (by [@mattgoud](https://github.com/mattgoud))
    - [#40623](https://github.com/PrestaShop/PrestaShop/pull/40623): Update PULL_REQUEST_TEMPLATE.md (by [@Touxten](https://github.com/Touxten))
    - [#40316](https://github.com/PrestaShop/PrestaShop/pull/40316): Add `9.1.x` branch for github workflows (by [@boherm](https://github.com/boherm))
    - [#39664](https://github.com/PrestaShop/PrestaShop/pull/39664): Allow modules to use services.php and version-specific services.yml files to handle new Symfony services/changes/renames while preserving older versions compatibility (by [@prestamodule](https://github.com/prestamodule))
    - [#39576](https://github.com/PrestaShop/PrestaShop/pull/39576): Add console command "prestashop:htaccess:generate" (by [@nicohery](https://github.com/nicohery))
  - Bug fix:
    - [#41988](https://github.com/PrestaShop/PrestaShop/pull/41988): Update translationtools-bundle (by [@jolelievre](https://github.com/jolelievre))
    - [#41842](https://github.com/PrestaShop/PrestaShop/pull/41842): Fix: Update cache directory handling in HTMLPurifier constructor (by [@Progi1984](https://github.com/Progi1984))
    - [#41828](https://github.com/PrestaShop/PrestaShop/pull/41828): Fix: Update cache directory handling in HTMLPurifier constructor (by [@cnavarro-prestashop](https://github.com/cnavarro-prestashop))
    - [#41808](https://github.com/PrestaShop/PrestaShop/pull/41808): Fix meta title appended to CMS page, CMS category, manufacturer, and supplier URLs (by [@Codencode](https://github.com/Codencode))
    - [#41790](https://github.com/PrestaShop/PrestaShop/pull/41790): Guard order message name-uniqueness check on partial edit (by [@PrestaEdit](https://github.com/PrestaEdit))
    - [#41773](https://github.com/PrestaShop/PrestaShop/pull/41773): Update phpstan exclusion pattern from release creator and add unit tests (by [@cnavarro-prestashop](https://github.com/cnavarro-prestashop))
    - [#41761](https://github.com/PrestaShop/PrestaShop/pull/41761): Fix Hummingbird development files included in release package (by [@Codencode](https://github.com/Codencode))
    - [#41760](https://github.com/PrestaShop/PrestaShop/pull/41760): Fix image-types list endpoint returning 405 by making grid data facto… (by [@axel-paillaud](https://github.com/axel-paillaud))
    - [#41750](https://github.com/PrestaShop/PrestaShop/pull/41750): Prevent empty ean13 into product URL (by [@hadjedjvincent](https://github.com/hadjedjvincent))
    - [#41708](https://github.com/PrestaShop/PrestaShop/pull/41708): Fix states lookup using row indexes instead of country IDs (by [@paulschwahn](https://github.com/paulschwahn))
    - [#41628](https://github.com/PrestaShop/PrestaShop/pull/41628): Align MySQL session time zone with the shop time zone on each connection (by [@mattgoud](https://github.com/mattgoud))
    - [#41626](https://github.com/PrestaShop/PrestaShop/pull/41626): Fix multilang fallback for fields using isRequiredWhenActive and defaultLanguageRequiredWhenActive validators (by [@guillaume60240](https://github.com/guillaume60240))
    - [#41431](https://github.com/PrestaShop/PrestaShop/pull/41431): Backport #41356 : Add CartId into product search handler when employeeId not provided (by [@Progi1984](https://github.com/Progi1984))
    - [#41416](https://github.com/PrestaShop/PrestaShop/pull/41416): Build Creator : Filter only Copilot Instructions and not all workflows (by [@Progi1984](https://github.com/Progi1984))
    - [#41386](https://github.com/PrestaShop/PrestaShop/pull/41386): Fix route management and comment Dispatcher (by [@Hlavtox](https://github.com/Hlavtox))
    - [#41356](https://github.com/PrestaShop/PrestaShop/pull/41356): Add CartId into product search handler when employeeId not provided (by [@boherm](https://github.com/boherm))
    - [#41273](https://github.com/PrestaShop/PrestaShop/pull/41273): Fix: cast bool field in get cms page category for editing handler (by [@axel-paillaud](https://github.com/axel-paillaud))
    - [#41225](https://github.com/PrestaShop/PrestaShop/pull/41225): Fix attribute and attribute group position ordering in core methods (by [@nicohery](https://github.com/nicohery))
    - [#41130](https://github.com/PrestaShop/PrestaShop/pull/41130): Fix: guard against null employee in associateWithShops() (by [@axel-paillaud](https://github.com/axel-paillaud))
    - [#40822](https://github.com/PrestaShop/PrestaShop/pull/40822): Update OrderShipmentService header (by [@M0rgan01](https://github.com/M0rgan01))
    - [#40818](https://github.com/PrestaShop/PrestaShop/pull/40818): Fix old license headers (by [@jolelievre](https://github.com/jolelievre))
    - [#40813](https://github.com/PrestaShop/PrestaShop/pull/40813): Fix Changelog PR description (by [@boherm](https://github.com/boherm))
    - [#40797](https://github.com/PrestaShop/PrestaShop/pull/40797): Add right to pr validate metadata workflow (by [@tleon](https://github.com/tleon))
    - [#40785](https://github.com/PrestaShop/PrestaShop/pull/40785): Fix changelog workflow (by [@jolelievre](https://github.com/jolelievre))
    - [#40772](https://github.com/PrestaShop/PrestaShop/pull/40772): Fix url to the forked generation workflow (by [@jolelievre](https://github.com/jolelievre))
    - [#40771](https://github.com/PrestaShop/PrestaShop/pull/40771): Fix url to the forked generation workflow (by [@jolelievre](https://github.com/jolelievre))
    - [#40759](https://github.com/PrestaShop/PrestaShop/pull/40759): Replace github action that sets up mysql in CI (by [@jolelievre](https://github.com/jolelievre))
    - [#40752](https://github.com/PrestaShop/PrestaShop/pull/40752): Fix the workflow to use the shared action in steps, not as a workflow (by [@jolelievre](https://github.com/jolelievre))
    - [#40744](https://github.com/PrestaShop/PrestaShop/pull/40744): Fix translation catalogue filename corruption during export (by [@aeyoll](https://github.com/aeyoll))
    - [#40424](https://github.com/PrestaShop/PrestaShop/pull/40424): Fixed inconsistancy use of variable in CartRule.php (by [@pjouglet](https://github.com/pjouglet))
    - [#40297](https://github.com/PrestaShop/PrestaShop/pull/40297): Multi-carrier - handle product customization (by [@M0rgan01](https://github.com/M0rgan01))
    - [#39837](https://github.com/PrestaShop/PrestaShop/pull/39837): Change matching method in ShopContextSubscriber (by [@djbuch](https://github.com/djbuch))
    - [#36781](https://github.com/PrestaShop/PrestaShop/pull/36781): Fix category shop association (by [@PululuK](https://github.com/PululuK))
  - Refactoring:
    - [#41967](https://github.com/PrestaShop/PrestaShop/pull/41967): Rename ExtraPropertyDefinition formFieldType to formType (by [@jolelievre](https://github.com/jolelievre))
    - [#41579](https://github.com/PrestaShop/PrestaShop/pull/41579): Fix some deprecations (by [@Hlavtox](https://github.com/Hlavtox))
- Installer:
  - New feature:
    - [#41028](https://github.com/PrestaShop/PrestaShop/pull/41028): EPIC2-US2.1 :Business Entity Management (Back Office) – New “Business Entities” menu entry (by [@soledis-contributeur](https://github.com/soledis-contributeur))
    - [#40632](https://github.com/PrestaShop/PrestaShop/pull/40632): B2B Contribution - EPIC 1-US1.1 : Data model foundation in the PrestaShop Core (by [@soledis-contributeur](https://github.com/soledis-contributeur))
  - Improvement:
    - [#42010](https://github.com/PrestaShop/PrestaShop/pull/42010): Update default catalog build-920-beta1 (by [@ps-jarvis](https://github.com/ps-jarvis))
    - [#42003](https://github.com/PrestaShop/PrestaShop/pull/42003): Update default catalog develop (by [@ps-jarvis](https://github.com/ps-jarvis))
    - [#41995](https://github.com/PrestaShop/PrestaShop/pull/41995): Fix sync localization files (by [@kpodemski](https://github.com/kpodemski))
    - [#41695](https://github.com/PrestaShop/PrestaShop/pull/41695): Automatically remove install/ folder after a successful installation (by [@jf-viguier](https://github.com/jf-viguier))
    - [#41354](https://github.com/PrestaShop/PrestaShop/pull/41354): Amend B2B data model to align with revised hybrid-mode schema (by [@soledis-contributeur](https://github.com/soledis-contributeur))
    - [#41205](https://github.com/PrestaShop/PrestaShop/pull/41205): Base of ai structure and contexts (by [@tleon](https://github.com/tleon))
    - [#41200](https://github.com/PrestaShop/PrestaShop/pull/41200): B2B Contribution - Add "label" column & remove enterprise_id column to BusinessIdentifier entity (by [@soledis-contributeur](https://github.com/soledis-contributeur))
    - [#40891](https://github.com/PrestaShop/PrestaShop/pull/40891): B2B Contribution - Add "default" flag to business entity address (by [@soledis-contributeur](https://github.com/soledis-contributeur))
    - [#40224](https://github.com/PrestaShop/PrestaShop/pull/40224): B2B Contribution - EPIC 0-US0: Creation of the “improved_b2b feature” feature flag (by [@soledis-contributeur](https://github.com/soledis-contributeur))
  - Bug fix:
    - [#41556](https://github.com/PrestaShop/PrestaShop/pull/41556): Merge set-pr-milestone into validate-pr-metadata to fix ordering and rerun staleness (by [@jolelievre](https://github.com/jolelievre))
    - [#41226](https://github.com/PrestaShop/PrestaShop/pull/41226): Revert "Fix: align on the same line inline grid action and regular grid action" (by [@ga-devfront](https://github.com/ga-devfront))
    - [#41147](https://github.com/PrestaShop/PrestaShop/pull/41147): Fix admin URL construction in Install.php (by [@PrestaEdit](https://github.com/PrestaEdit))
    - [#40727](https://github.com/PrestaShop/PrestaShop/pull/40727): Chore(deps): bump mysql2 from 3.16.2 to 3.16.3 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40725](https://github.com/PrestaShop/PrestaShop/pull/40725): Chore(deps): bump @faker-js/faker from 10.2.0 to 10.3.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40724](https://github.com/PrestaShop/PrestaShop/pull/40724): Chore(deps): bump dotenv from 17.2.3 to 17.2.4 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40723](https://github.com/PrestaShop/PrestaShop/pull/40723): Chore(deps): bump @prestashop-core/ui-testing from `6d9e330` to `d387516` in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40665](https://github.com/PrestaShop/PrestaShop/pull/40665): Chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.53.1 to 8.54.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40664](https://github.com/PrestaShop/PrestaShop/pull/40664): Chore(deps): bump mysql2 from 3.15.3 to 3.16.2 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40602](https://github.com/PrestaShop/PrestaShop/pull/40602): Chore(deps-dev): bump @typescript-eslint/parser from 8.53.0 to 8.53.1 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40601](https://github.com/PrestaShop/PrestaShop/pull/40601): Chore(deps-dev): bump eslint-plugin-html from 8.1.3 to 8.1.4 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40599](https://github.com/PrestaShop/PrestaShop/pull/40599): Chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.53.0 to 8.53.1 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40543](https://github.com/PrestaShop/PrestaShop/pull/40543): Chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.52.0 to 8.53.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40542](https://github.com/PrestaShop/PrestaShop/pull/40542): Chore(deps-dev): bump @typescript-eslint/parser from 8.52.0 to 8.53.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40491](https://github.com/PrestaShop/PrestaShop/pull/40491): Chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.50.1 to 8.52.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40447](https://github.com/PrestaShop/PrestaShop/pull/40447): Chore(deps): bump @faker-js/faker from 10.1.0 to 10.2.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40416](https://github.com/PrestaShop/PrestaShop/pull/40416): Chore(deps-dev): bump @typescript-eslint/parser from 8.50.0 to 8.50.1 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40415](https://github.com/PrestaShop/PrestaShop/pull/40415): Chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.50.0 to 8.50.1 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40392](https://github.com/PrestaShop/PrestaShop/pull/40392): Chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.49.0 to 8.50.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40391](https://github.com/PrestaShop/PrestaShop/pull/40391): Chore(deps-dev): bump @typescript-eslint/parser from 8.49.0 to 8.50.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40327](https://github.com/PrestaShop/PrestaShop/pull/40327): Chore(deps): bump @prestashop-core/ui-testing from `38210fa` to `133f785` in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40326](https://github.com/PrestaShop/PrestaShop/pull/40326): Chore(deps-dev): bump @typescript-eslint/eslint-plugin from 8.48.1 to 8.49.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
    - [#40325](https://github.com/PrestaShop/PrestaShop/pull/40325): Chore(deps-dev): bump @typescript-eslint/parser from 8.48.1 to 8.49.0 in /tests/UI (by [@app/dependabot](https://github.com/app/dependabot))
- Web Services:
  - New feature:
    - [#41749](https://github.com/PrestaShop/PrestaShop/pull/41749): Add Extra Properties integration to the Admin API (by [@jolelievre](https://github.com/jolelievre))
  - Improvement:
    - [#41701](https://github.com/PrestaShop/PrestaShop/pull/41701): Display an input to upload files on Admin API OpenAPI interface (by [@Quetzacoalt91](https://github.com/Quetzacoalt91))
  - Bug fix:
    - [#34286](https://github.com/PrestaShop/PrestaShop/pull/34286): Fix field new not displayed on GET from API (by [@Prestaworks](https://github.com/Prestaworks))
- Localization:
  - New feature:
    - [#41991](https://github.com/PrestaShop/PrestaShop/pull/41991): Sync localization files with LocalizationFiles repo (by [@kpodemski](https://github.com/kpodemski))
  - Improvement:
    - [#41997](https://github.com/PrestaShop/PrestaShop/pull/41997): Protect localization packs action (by [@kpodemski](https://github.com/kpodemski))
    - [#41996](https://github.com/PrestaShop/PrestaShop/pull/41996): Sync localization packs from LocalizationFiles (by [@ps-jarvis](https://github.com/ps-jarvis))
  - Bug fix:
    - [#41812](https://github.com/PrestaShop/PrestaShop/pull/41812): Fix SqlTranslationLoader missing theme translations in PS9 (#41232) (by [@tswfi](https://github.com/tswfi))
- Tests:
  - New feature:
    - [#41540](https://github.com/PrestaShop/PrestaShop/pull/41540): TE: add automation test for BO > International > Locations > Countries > Help button (by [@mattgoud](https://github.com/mattgoud))
    - [#41355](https://github.com/PrestaShop/PrestaShop/pull/41355): TEST-12859 - Hall of Fame Our Community (by [@paulnoelcholot](https://github.com/paulnoelcholot))
    - [#41311](https://github.com/PrestaShop/PrestaShop/pull/41311): Fix [TEST-1115] BO - Shop Parameters - SEO & URLs - Generate robots.txt file (by [@mattgoud](https://github.com/mattgoud))
  - Improvement:
    - [#41827](https://github.com/PrestaShop/PrestaShop/pull/41827): Test UI hummingbird v2.x (by [@tblivet](https://github.com/tblivet))
    - [#41821](https://github.com/PrestaShop/PrestaShop/pull/41821): Functional Tests : Improved Resiliency of WS Tests (by [@Progi1984](https://github.com/Progi1984))
    - [#41816](https://github.com/PrestaShop/PrestaShop/pull/41816): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#41810](https://github.com/PrestaShop/PrestaShop/pull/41810): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#41805](https://github.com/PrestaShop/PrestaShop/pull/41805): Functional Tests : Fixed after #41570 (by [@Progi1984](https://github.com/Progi1984))
    - [#41788](https://github.com/PrestaShop/PrestaShop/pull/41788): Functional Tests : Improved for Klavyio (by [@Progi1984](https://github.com/Progi1984))
    - [#41780](https://github.com/PrestaShop/PrestaShop/pull/41780): Functional Tests : Improved for Klavyio (by [@Progi1984](https://github.com/Progi1984))
    - [#41778](https://github.com/PrestaShop/PrestaShop/pull/41778): Add UI test for Quick Access modal empty-name validation (by [@mattgoud](https://github.com/mattgoud))
    - [#41777](https://github.com/PrestaShop/PrestaShop/pull/41777): Functional Tests : Enable Feature Flag "Tax rule groups" (by [@Progi1984](https://github.com/Progi1984))
    - [#41747](https://github.com/PrestaShop/PrestaShop/pull/41747): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#41737](https://github.com/PrestaShop/PrestaShop/pull/41737): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#41662](https://github.com/PrestaShop/PrestaShop/pull/41662): Merchandaise return ui tests (by [@tleon](https://github.com/tleon))
    - [#41659](https://github.com/PrestaShop/PrestaShop/pull/41659): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#41630](https://github.com/PrestaShop/PrestaShop/pull/41630): Functional Tests : Enable feature flag "Quick access" (by [@Progi1984](https://github.com/Progi1984))
    - [#41627](https://github.com/PrestaShop/PrestaShop/pull/41627): Functional Tests : Enable Feature Flag "Email body translations" (by [@Progi1984](https://github.com/Progi1984))
    - [#41594](https://github.com/PrestaShop/PrestaShop/pull/41594): Functional Tests : Enable Feature Flag Country (by [@Progi1984](https://github.com/Progi1984))
    - [#41584](https://github.com/PrestaShop/PrestaShop/pull/41584): Functional Tests : API : POST /admin-api/discounts (Fixed after #41189) (by [@Progi1984](https://github.com/Progi1984))
    - [#41546](https://github.com/PrestaShop/PrestaShop/pull/41546): Merchandise Returns : Cancel returns if the order return state is cancellable (by [@Progi1984](https://github.com/Progi1984))
    - [#41539](https://github.com/PrestaShop/PrestaShop/pull/41539): Functional Tests : API : GET /admin-api/discounts (by [@Progi1984](https://github.com/Progi1984))
    - [#41528](https://github.com/PrestaShop/PrestaShop/pull/41528): Functional Tests : API : DELETE /admin-api/discounts/{discountId} (by [@Progi1984](https://github.com/Progi1984))
    - [#41518](https://github.com/PrestaShop/PrestaShop/pull/41518): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#41514](https://github.com/PrestaShop/PrestaShop/pull/41514): Functional Tests : Remove `@todo` #41241 (by [@Progi1984](https://github.com/Progi1984))
    - [#41503](https://github.com/PrestaShop/PrestaShop/pull/41503): Functional Tests : Bump @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#41476](https://github.com/PrestaShop/PrestaShop/pull/41476): Functional Tests : Remove numbering in endpoints directoriess (by [@Progi1984](https://github.com/Progi1984))
    - [#41475](https://github.com/PrestaShop/PrestaShop/pull/41475): Functional Tests : @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#41462](https://github.com/PrestaShop/PrestaShop/pull/41462): Functional Tests : @prestashop-core/ui-testing (by [@Progi1984](https://github.com/Progi1984))
    - [#41430](https://github.com/PrestaShop/PrestaShop/pull/41430): Functional Tests : Sync Title with JIRA (by [@Progi1984](https://github.com/Progi1984))
    - [#41202](https://github.com/PrestaShop/PrestaShop/pull/41202): Functional Tests : API : POST /admin-api/discounts (by [@Progi1984](https://github.com/Progi1984))
    - [#41112](https://github.com/PrestaShop/PrestaShop/pull/41112): Functional Tests : API : GET /discount-types (by [@Progi1984](https://github.com/Progi1984))
    - [#41060](https://github.com/PrestaShop/PrestaShop/pull/41060): Functional Tests : BO - Discount - Minimum purchase amount (On Free shipping) (by [@Progi1984](https://github.com/Progi1984))
    - [#41055](https://github.com/PrestaShop/PrestaShop/pull/41055): Add UI test for theme/logo > see all theme's modules button (by [@nicosomb](https://github.com/nicosomb))
    - [#40973](https://github.com/PrestaShop/PrestaShop/pull/40973): Nightly : Change hour of start (by [@Progi1984](https://github.com/Progi1984))
    - [#40566](https://github.com/PrestaShop/PrestaShop/pull/40566): Nightly : Remove 8.0 & 8.1 (by [@Progi1984](https://github.com/Progi1984))
  - Bug fix:
    - [#41980](https://github.com/PrestaShop/PrestaShop/pull/41980): Pin maildev image to a stable tag in behaviour tests workflow (by [@mattgoud](https://github.com/mattgoud))
    - [#41755](https://github.com/PrestaShop/PrestaShop/pull/41755): Fix flaky quick access filter UI test (multi-tab) (by [@mattgoud](https://github.com/mattgoud))
    - [#41560](https://github.com/PrestaShop/PrestaShop/pull/41560): Functional Tests : Fixed WS - Products : CRUD (by [@Progi1984](https://github.com/Progi1984))
    - [#40895](https://github.com/PrestaShop/PrestaShop/pull/40895): Nightly : Added PS_VERSION environment variable (by [@Progi1984](https://github.com/Progi1984))
    - [#40384](https://github.com/PrestaShop/PrestaShop/pull/40384): Fix: SQL syntax for table checksum query (fixes #40383) (by [@the-ge](https://github.com/the-ge))
  - Refactoring:
    - [#41765](https://github.com/PrestaShop/PrestaShop/pull/41765): TEST-12644 - Add test create guest from new order page (by [@paulnoelcholot](https://github.com/paulnoelcholot))
    - [#41739](https://github.com/PrestaShop/PrestaShop/pull/41739): TEST-749 - Add order message check to createSimpleOrderInBO test (by [@paulnoelcholot](https://github.com/paulnoelcholot))
    - [#41686](https://github.com/PrestaShop/PrestaShop/pull/41686): TEST-12861 & TEST-12862 - Functional Tests : BO - Wall of Fame - Top Contributors & New Contributors (by [@paulnoelcholot](https://github.com/paulnoelcholot))
    - [#41641](https://github.com/PrestaShop/PrestaShop/pull/41641): TEST-12860 - Add UI test for BO - Wall of Fame  (by [@paulnoelcholot](https://github.com/paulnoelcholot))
    - [#41631](https://github.com/PrestaShop/PrestaShop/pull/41631): Adapt UI tests for Hook a module migration (by [@nicosomb](https://github.com/nicosomb))
    - [#41456](https://github.com/PrestaShop/PrestaShop/pull/41456): Functional Tests : Fixed "API : GET /products/search" (by [@Progi1984](https://github.com/Progi1984))
    - [#41415](https://github.com/PrestaShop/PrestaShop/pull/41415): Functional tests : WS - CRUD category  (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#41306](https://github.com/PrestaShop/PrestaShop/pull/41306): Functional tests : BO - Catalog price rules - CRUD - Price(tax excl.) (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#41282](https://github.com/PrestaShop/PrestaShop/pull/41282): Functional tests : Add new test to CRUD catalog price rules with different groups (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#41242](https://github.com/PrestaShop/PrestaShop/pull/41242): Functional tests - Add new test to CRUD country in catalog price rules (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#41207](https://github.com/PrestaShop/PrestaShop/pull/41207): Functional tests : BO - Discount - Create a discount that applies automatically or via promo code (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#41153](https://github.com/PrestaShop/PrestaShop/pull/41153): Functional tests : BO - Discount - Trigger based on the total quantity of products in the cart (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#41150](https://github.com/PrestaShop/PrestaShop/pull/41150): Functional tests : BO -  Discount - Check period (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#41056](https://github.com/PrestaShop/PrestaShop/pull/41056): Functional tests - Add new UI test to check free gift in discount V2 page  (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#41031](https://github.com/PrestaShop/PrestaShop/pull/41031): Functional tests - Refacto discount V2 > Minimum purchase amount (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#40957](https://github.com/PrestaShop/PrestaShop/pull/40957): Functional tests - Add some check to BO - Orders - Multicarrier (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#40812](https://github.com/PrestaShop/PrestaShop/pull/40812): Functional tests - Delete the UI test to check shipping cost in FO > order details page (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#40739](https://github.com/PrestaShop/PrestaShop/pull/40739): Nightly : Clean the workflow (by [@Progi1984](https://github.com/Progi1984))
    - [#40584](https://github.com/PrestaShop/PrestaShop/pull/40584): Functional tests : Add UI tests to check multicarrier on FO (Hummingbird & classic) (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))
    - [#37161](https://github.com/PrestaShop/PrestaShop/pull/37161): Functional tests - Migrate link list pages to ui-testing-library and refacto CRUD linkList (by [@nesrineabdmouleh](https://github.com/nesrineabdmouleh))

</details>

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/9.2.0" >}}See the full release notes{{< /cta >}}

## Download PrestaShop 9.2

Download the Classic version, which includes the PrestaShop core along with additional modules from [PrestaShop SA](https://prestashop.com/essentials/) compatible with this version, and integration with the PrestaShop Marketplace.

{{< cta "https://prestashop.com/versions/" >}}Download PrestaShop 9.2.0 now!{{< /cta >}}

### Requirements for PrestaShop 9.2

* PHP 8.1 (up to PHP 8.5 is supported)

Please check all system requirements in the [documentation](https://devdocs.prestashop-project.org/9/basics/installation/system-requirements/).

## Update to PrestaShop 9.2

{{% notice type="info" title="Upgrade instructions coming soon" %}}
The version of the [Update Assistant module](https://github.com/PrestaShop/autoupgrade) supporting PrestaShop 9.2 is still in development. We will update this article with the upgrade instructions as soon as it is released.
{{% /notice %}}

## Acknowledgments

PrestaShop 9.2 is the result of contributions from both the PrestaShop team and the open source community. A warm welcome to the new contributors who joined during this release cycle: [Sayed Nabhan](https://github.com/nabhan06) and [samilmarekrygula](https://github.com/samilmarekrygula).

{{< contributors-grid "aeyoll" "aleksiuno" "aomaxime" "AureRita" "axel-paillaud" "boherm" "boo-code" "cnavarro-prestashop" "Codencode" "david-prochazka" "djbuch" "ga-devfront" "gross-nvs" "guillaume60240" "hadjedjvincent" "Hlavtox" "Jeremie-Kiwik" "jf-viguier" "jolelievre" "Kaikina" "kevin-carangeot" "kpodemski" "LaBisquerie" "M0rgan01" "Maofree" "mattgoud" "matthieu-rolland" "mgielecinski" "nabhan06" "Nakahiru" "nesrineabdmouleh" "nicohery" "nicosomb" "paulnoelcholot" "paulschwahn" "pjouglet" "Poulinhoo" "PrestaEdit" "prestamodule" "Prestaworks" "Progi1984" "PululuK" "Quetzacoalt91" "samilmarekrygula" "soledis-contributeur" "tblivet" "tfayolle" "ThbPS" "the-ge" "tleon" "Touxten" "tswfi" "yannicka" / >}}

## What's next?

Work on the next version of PrestaShop is already underway. Stay tuned to the [build blog](https://build.prestashop-project.org/) and follow the project on [GitHub](https://github.com/PrestaShop/PrestaShop) to keep up with the latest developments.

We encourage you to share your feedback on PrestaShop 9.2 in the [GitHub Discussions](https://github.com/PrestaShop/PrestaShop/discussions) or on [Slack](https://www.prestashop-project.org/slack/).
