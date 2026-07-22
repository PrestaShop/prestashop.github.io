---
layout: post
title: "Introducing One Page Checkout in PrestaShop 9.2: finally making checkout conversion-first"
subtitle: "The native ps_onepagecheckout module arrives in PrestaShop 9.2, bringing the entire checkout onto a single page."
date: 2026-07-22 04:00:00
authors: [MateoCastilloPS]
icon: icon-code
opengraph_image: /assets/images/theme/banner-ps-project.png
twitter_image: /assets/images/theme/banner-ps-project.png
tags:
- "9.2"
- "9.2.x"
- "9.x"
- feature
---

We are incredibly proud to introduce `ps_onepagecheckout`, the anticipated native One Page Checkout module included in PrestaShop 9.2. Built from the ground up to eliminate friction and reduce abandoned carts, this out-of-the-box solution brings a seamless purchasing experience to your store.

<figure style="text-align: center; margin: 2rem 0;">
  <a href="/assets/images/2026/07/OPC1.png" target="_blank" rel="noopener">
    <img style="max-width: 100%; height: auto; border-radius: 0.25rem; border: 1px solid rgba(0,0,0,.12);" src="/assets/images/2026/07/OPC1.png" alt="The native One Page Checkout with every step on a single page">
  </a>
  <figcaption style="font-size: 0.875em; color: #6c757d;">The native One Page Checkout: contact, delivery, carrier, and payment, all on a single page.</figcaption>
</figure>

## Why we built it

For years, one of the most requested features from the PrestaShop community has been a native one-page checkout. The current multi-step checkout (four pages, sequential, with full reloads between each) made sense for a certain era of ecommerce. But the landscape has changed dramatically. Mobile has overtaken desktop for online shopping. Average order values in many verticals are lower. And the data is unambiguous: every extra step in a checkout flow means more abandoned carts.

In early 2026, we announced it publicly: the one-page checkout was coming to PrestaShop 9.2. We shared our thinking on the problem, the approach, and opened the floor for community input. The core insight was simple: merchants running shops with high mobile traffic or low average order values were systematically disadvantaged by the native checkout. They had two options: pay for a premium module, or live with a checkout experience that was working against them.

We wanted to fix that. So we did.

## What we built

Starting in March 2026, the Payment Experience squad from PrestaShop SA set out to build a native one-page checkout and ship it with PrestaShop 9.2. Today, we're releasing it as a beta.

The result is `ps_onepagecheckout`: a native module included in PrestaShop 9.2. To enable it, merchants go to **Design > Checkout** in the back office (or find the module in Module Manager) and select the "One-page checkout" layout. No additional purchase, no marketplace module, no manual installation required.

Here's what makes the experience different:

**A real guest checkout, finally.** This was our most important design goal, and the one that required the most technical work. In the classic checkout, guest mode still walked customers through the same multi-step flow, collecting address and account details upfront. In OPC, a guest buyer needs to provide only their email address to get started. Everything else is gathered progressively, in context.

<figure style="text-align: center; margin: 2rem 0;">
  <a href="/assets/images/2026/07/OPC.png" target="_blank" rel="noopener">
    <img style="max-width: 100%; height: auto; border-radius: 0.25rem; border: 1px solid rgba(0,0,0,.12);" src="/assets/images/2026/07/OPC.png" alt="Guest-first checkout requiring only an email address to start">
  </a>
  <figcaption style="font-size: 0.875em; color: #6c757d;">A guest buyer only needs to provide an email address to get started.</figcaption>
</figure>

The challenge we had to solve was preserving abandoned cart recovery. In the classic checkout, this was straightforward: each step was its own form submission, so partial customer data was captured along the way. In a single-page flow, nothing is submitted until the very end. We had to find a way to register just enough information, quietly, at the right moment, to keep that crucial feature working without disrupting the experience. The result is a checkout where guests can move through the whole flow before committing, while the system captures what it needs in the background.

**Everything on one screen.** Contact information, delivery address, carrier selection, and payment method all appear simultaneously. Sections that depend on earlier input remain disabled until their prerequisites are met; they unlock automatically. Carrier options require a delivery address. Payment methods can also depend on the delivery or billing address, depending on how the back office is configured.

**AJAX everywhere.** No page reloads during checkout. When a customer changes their delivery address, the carrier list refreshes in place. When they pick a carrier, payment options update accordingly. All of this happens asynchronously.

<figure style="text-align: center; margin: 2rem 0;">
  <a href="/assets/images/2026/07/OPC2.png" target="_blank" rel="noopener">
    <img style="max-width: 100%; height: auto; border-radius: 0.25rem; border: 1px solid rgba(0,0,0,.12);" src="/assets/images/2026/07/OPC2.png" alt="Delivery method and payment method updating without a page reload">
  </a>
  <figcaption style="font-size: 0.875em; color: #6c757d;">Delivery and payment update in place, with no page reload.</figcaption>
</figure>

**Virtual products handled properly.** For carts containing only virtual or downloadable products, we removed the shipping address and carrier selection entirely. Only the billing address is collected. This was a long-standing inconsistency in the classic checkout, and the one-page checkout fixes it.

**Authentication out of the way.** We moved login and account creation to dedicated PrestaShop pages, entirely outside the checkout flow. The checkout itself stays focused on the purchase.

## A new approach to the checkout architecture

Building OPC as a native module rather than baking it into the core was a deliberate architectural choice. It means the module can be updated independently of the core, and merchants who prefer the classic multi-step flow can stick with it. The four-step checkout isn't going anywhere. Switching between the two is a simple layout choice: select "One-page checkout" or "Four-page checkout" in Design > Checkout and save.

<figure style="text-align: center; margin: 2rem 0;">
  <a href="/assets/images/2026/07/OPC3.png" target="_blank" rel="noopener">
    <img style="max-width: 100%; height: auto; border-radius: 0.25rem; border: 1px solid rgba(0,0,0,.12);" src="/assets/images/2026/07/OPC3.png" alt="The Design > Checkout layout selector in the back office">
  </a>
  <figcaption style="font-size: 0.875em; color: #6c757d;">Merchants switch between one-page and four-page checkout from Design > Checkout.</figcaption>
</figure>

The module integrates with the theme system in a clean way: it ships its own complete set of front-office templates and takes over checkout rendering through `hookDisplayOverrideTemplate`. On any theme built from Hummingbird, it works out of the box. Classic themes are not supported by default. You may need to override some of the One Page Checkout module's templates to make it work.

One important addition to the core supports this work: a new `actionCheckoutBuildProcess` hook (PR [#41047](https://github.com/PrestaShop/PrestaShop/pull/41047)). This hook gives modules a reliable entry point into the checkout build process, something that was missing before and that makes the ecosystem significantly more extensible.

**A note on multistore.** If your shop runs in multistore mode, OPC configuration is applied per store. There is no global setting that applies across all stores simultaneously. Each store context has its own independent layout choice, which lets merchants run the one-page checkout on some storefronts and the classic checkout on others.

## What this means for the ecosystem

This is where things get interesting for the developer community.

{{% notice type="important" title="Payment and shipping module developers, this is for you" %}}
If you maintain a payment or shipping (carrier) module, please review the checkout documentation to make sure your solution behaves correctly in the one-page flow. Two guides cover everything you need: the [module developers guide](https://devdocs.prestashop-project.org/9/modules/checkout/module-developers/) and the [theme developers guide](https://devdocs.prestashop-project.org/9/modules/checkout/theme-developers/).
{{% /notice %}}

**For module developers**, the OPC introduces some patterns worth understanding. Because the checkout updates asynchronously, modules that inject into carrier or payment sections need to be ready to re-render their content after an AJAX refresh. A key design goal throughout the project was to preserve as many of the hooks that modules already depend on as possible.

Rather than rethinking the hook architecture from scratch, we mapped the classic checkout's existing hook surface to the new flow and kept it intact wherever feasible, specifically to limit the compatibility work module developers would need to do. On top of that, the module ships a rich JavaScript event system built on `prestashop.emit()`: events like `opcCarriersUpdated`, `opcPaymentMethodSelected`, and `opcDeliveryAddressSelected` let modules react to checkout state changes without tightly coupling to the checkout's internals.

**For theme developers**, the module ships its own templates, so in most cases you don't need to do anything. If you want to customize the look and feel of the OPC, you override the templates exactly as you would for any module. The module's JavaScript depends on a well-documented set of CSS selectors and IDs, which form a stable contract: as long as you preserve those selectors in your overrides, you can restyle and restructure the checkout however you like.

**For merchants**, the benefit is straightforward: a native checkout option maintained by the core team, with full 9.2 compatibility guarantees, at no additional cost.

## The road to beta

We started in March. The first weeks were spent on architecture, particularly the decision to ship this as a module rather than in core, and the template strategy. We settled early that the module should ship its own templates: it makes the module truly zero-configuration for the most common cases and gives us a stable baseline to iterate on.

The frontend work was substantial. The OPC required building a full AJAX orchestration layer from scratch: guest initialization, address management with modal-based editing, carrier selection with live total updates, payment method loading and selection, and final form validation and submission. Each concern is handled by a dedicated JavaScript bundle, loaded in a specific order to ensure dependencies are always satisfied.

We also wrote thorough documentation for both [module developers](https://devdocs.prestashop-project.org/9/modules/checkout/module-developers/) and [theme developers](https://devdocs.prestashop-project.org/9/modules/checkout/theme-developers/), because a checkout is one of the most integration-heavy parts of any PrestaShop store, and we wanted to make the ecosystem transition as smooth as possible.

## Try it

`ps_onepagecheckout` ships as a native module in PrestaShop 9.2. To enable it, go to **Design > Checkout** in the back office and select the One-page checkout layout. You can switch back to the classic four-page checkout at any time from the same screen.

If you're a module developer or theme developer, we'd especially love your feedback during this beta period. The documentation for [module developers](https://devdocs.prestashop-project.org/9/modules/checkout/module-developers/) and [theme developers](https://devdocs.prestashop-project.org/9/modules/checkout/theme-developers/) covers everything you need to know: hooks, JavaScript events, DOM contracts, template override paths, and compatibility checklists.

We believe this is a genuine step forward for PrestaShop, a feature the community has been asking for, built natively into the platform, and open to everyone. We're excited to see what merchants and developers do with it, and we're listening closely to your feedback as we move from beta to stable.

---

## The team behind this

Three months of work across product, engineering, QA, and design. Most of it invisible to the end customer. The people who made it happen:

- [@ThbPS](https://github.com/ThbPS) **(Thomas Broussoux)** drove the architecture: core-to-module migration, the new `actionCheckoutBuildProcess` hook, CI pipeline setup, and the dynamic guest account registration challenge.
- [@julienr114](https://github.com/julienr114) **(Julien Rabin)** adapted the checkout interface to Hummingbird 2 and shaped the initial design foundations of the one-page layout.
- [@kevin-carangeot](https://github.com/kevin-carangeot) **(Kévin Carangeot)** worked on payment method display, bug fixes, and bundle adjustments throughout the project.
- [@dylanDenizonPresta](https://github.com/dylanDenizonPresta) **(Dylan Denizon)** worked on performance measurement, error detection, and translations.
- [@sylardiere](https://github.com/sylardiere) **(Sylvain Lardière)** built the back office configuration screen: the **Design > Checkout** layout selector merchants use to switch between checkout modes.
- **Nicolas Jougneau** covered quality assurance end to end: test coverage across every checkout path, edge case discovery, and validation of every feature before it shipped.
- [@L3RAZ](https://github.com/L3RAZ) **(Laurynas Šedys)** worked on payment handling, module decoupling from Hummingbird, and the developer documentation.
- [@kpodemski](https://github.com/kpodemski) **(Krystian Podemski)** worked on the proof-of-concept for decoupling the one-page checkout from Hummingbird.
- [@MateoCastilloPS](https://github.com/MateoCastilloPS) **(Mateo Castillo)** led strategy, roadmap, and conception.
