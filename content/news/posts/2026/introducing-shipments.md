---
layout: post
title: "Introducing Shipments in PrestaShop: finally solving the Multicarrier problem"
subtitle: "A flexible multicarrier shipping system arriving in PrestaShop 9.1"
date: 2026-01-08
authors: [GericFosse]
icon: icon-code
tags:
- "9.1"
- "9.1.x"
- "9.x"
- feature
---
We are introducing a fundamental paradigm shift in PrestaShop's core: moving the order management center of gravity from the **Carrier** to the **Shipment**.

This major architectural change is already partially available for testing. Starting with **PrestaShop 9.1**, you can access these new features under a **feature flag**. This allows merchants, agencies and developers to start adapting to the new "Shipment" logic today, without disrupting existing stores.

## The legacy problem: 1 order = 1 carrier

For years, PrestaShop has operated on a strict model: **1 order = 1 payment = 1 carrier**. While simple, this legacy architecture fails to support modern e-commerce needs where a single order often requires multiple packages or shipments.
Let's take this example: A customer order's sofa (freight carrier) and a lamp (standard carrier).

- Checkout shows *one* carrier.
- Order is silently duplicated.
- Merchant sees two orders, same reference.
- Customer receives confusing emails and invoices.

This is not a UX bug - it's a structural limitation that creates significant friction:

- **Manual workarounds:** If products require different carriers, merchants are forced to use manual workarounds or third-party modules that only partially solve the problem.
- **Confusing splits:** Currently, PrestaShop automatically splits the order into separate orders, one per carrier, sharing the same reference. This confuses both merchants and customers.
- **Checkout friction:** The system attempts to find a "best carrier" combination (price/grade), but often displays the carrier details (name, delivery time) of only the *last* product added to the cart, even if the price is a sum of multiple carriers.

We realized that to fix this, we couldn't just patch the existing logic. **We needed a structural change.**

### A confusing legacy customer experience:

<div style="display: flex; flex-wrap: wrap; justify-content: space-around;">
 <div style="flex: 1 1 48%; margin: 1%;">
  <figure style="text-align: center;">
    <img style="max-width: 100%; height: auto; border-radius: 0.25rem;" src="/assets/images/2026/01/old_frontend_order.jpg" alt="Old frontend order">
    <figcaption style="font-size: 0.875em; color: #6c757d;">In this checkout screenshot, only one carrier is displayed, even though multiple carriers are actually involved. This is misleading.</figcaption>
  </figure>
 </div>
 <div style="flex: 1 1 48%; margin: 1%;">
  <figure style="text-align: center;">
    <img style="max-width: 100%; height: auto; border-radius: 0.25rem;" src="/assets/images/2026/01/order_duplication.png" alt="Order duplication">
    <figcaption style="font-size: 0.875em; color: #6c757d;">As a result, the order is automatically duplicated: one order per carrier. This behavior is confusing for both customers and merchants (the same happens in the Back Office).</figcaption>
  </figure>
 </div>
</div>


## The solution: shifting from "Carrier" to "Shipment"

We are making a fundamental paradigm shift, redefining order management around **shipments** rather than **carriers**.

We are introducing the concept of a "Shipment" via 2 new database tables:

1. `PREFIX_shipment`
2. `PREFIX_shipment_product`

### Why new tables?

We believe this structural change is necessary for clarity and scalability. By adding dedicated shipment tables, we ensure:

- **Explicit structure:** An order can clearly have multiple shipments, different carriers, and distinct product references per shipment.
- **Granular control:** Each shipment will have its own status, opening the door for future "partially shipped" or "partially delivered" features.
- **Future-proofing:** This unlocks potential for B2B features (shipping to multiple addresses) and Multi-warehousing (shipping from different locations).
- **Safe adoption:** By introducing new tables rather than modifying existing ones, we avoid breaking changes and allow for a smooth transition via a feature flag.

### The new “Improved shipment” feature flag:

![Improved shipments feature flag](/assets/images/2026/01/Improved_shipments_feature_flag.png)

## What we are delivering

Our goal is to stop the confusing order splitting and provide true Multishipping capabilities.

### 1. Implementing Shipments

Merchants will gain control over fulfillment directly from the order page:

- **Manual splitting:** Merchants can manually split fulfillment into multiple shipments.
- **Shipment merging:** Conversely, merchants can merge shipments back into one if needed.

### 2. Improving Multicarrier display

We are fixing the user interface while maintaining the current selection logic (best price/grade):

- **Checkout clarity:** We will properly display all available shipping options. For the displayed options, all carrier info (Name, Time) will be visible, no more guessing games.
- **Consistent data:** Carrier-related details will be correctly shown on Order Confirmation pages, Order Details, Invoices, Delivery Slips, and Emails.
- **No more duplication:** We will stop splitting orders when multiple shipments are needed.

### The new Shipment splitting and merging experience in the BO:

<video width="100%" controls>
    <source src="/assets/video/2026/01/multishipping_split_merge.mp4" type="video/mp4">"
</video>

## Project status & roadmap

This feature is being released under a **feature flag** to allow gradual adoption and community feedback.

### Where we stand (available in Feature Flag)

With the help of the community, we have completed the initial 5 development batches:

- Feature flag and dedicated database creation.
- Stopped order duplication for Multicarrier cases.
- Added Shipments to the Order Detail page in the Back Office.
- Implemented Shipment merging and splitting logic.
- Displaying Multicarrier info during Front Office Checkout, Order Final Summary, and Order History.

### What’s next (target: Q1 2026)

One final batch remains to complete the MVP of this feature:

- **Back office improvements:** Handling product addition/deletion within the Order Detail page.
- **Emails:** Displaying Multicarrier details in Order Confirmation emails.
- **Documents:** Updating Invoices to reflect multiple carriers.
- **Edge cases:** Handling order creation directly from the Back Office cart.

We plan to develop this final part in **Q1 2026**.

## Summary

This shipment-based model represents a major step forward in how PrestaShop handles fulfillment, but it is being introduced carefully and without risk for existing stores. **As long as the feature flag remains disabled, current behavior stays exactly the same**, with no impact on checkout, orders, or existing modules.

For those who want to help shape this evolution, the feature flag provides a safe way to explore the new Shipment logic on staging environments, confront it with real multicarrier use cases, and identify edge cases or integration issues early. Feedback, questions, and observations can be shared in a [dedicated GitHub Discussion](https://www.notion.so/BlogPost-Introducing-Shipments-in-PrestaShop-finally-solving-the-Multicarrier-problem-2ca5d6cf071f8024adfcc34a9ab23ec5?pvs=21).

Input from merchants, agencies, and module developers at this stage is essential to ensure this new foundation is robust, extensible, and ready for long-term use in PrestaShop’s core.

This is a foundational change, and we’re building it together with the community - thank you for the feedback and the positive reception when we shared this work during recent events.
