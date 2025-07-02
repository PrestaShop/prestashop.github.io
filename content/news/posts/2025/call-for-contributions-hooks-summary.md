---
layout: post
title: "Call for contributions: hooks - initiative summary"
subtitle: "We invited the community to improve PrestaShop’s hook system"
date: 2025-07-02
authors: [ kpodemski ]
icon: icon-leaf
opengraph_image: /assets/images/theme/banner-ps-project.png
twitter_image: /assets/images/theme/banner-ps-project.png
tags: [contribute, community, contribution]
---

During this year’s FoP Days, we launched a new community initiative focused on improving a specific part of the PrestaShop project: hooks. Rather than casting a wide net, we deliberately concentrated on a single topic. The goal was to make it easier and faster for contributors to submit changes, and for project members to validate them.

### Why hooks?

Hooks are essential for extending and customizing PrestaShop without overriding core files. They empower developers to build features in a clean, future-proof way.

That’s why we decided to launch a "hook challenge" - to add or improve at least 10 hooks in the core, and to encourage the community to take part in this focused effort.

### A smoother contribution process

To make the process easier and more transparent:

- We automatically tagged relevant pull requests with the “hook contribution” label to ensure visibility and easier tracking.
- We improved the documentation on how to propose a new hook, what makes a good one, and how to structure the contribution.
- We monitored incoming PRs actively during the challenge period.
- We promoted the initiative on GitHub, Build Blog, and during FoP Days to attract more contributors.

### What we achieved

Our initial goal was to add or improve at least 10 hooks, and we’re proud to say that we exceeded it, with **[14 merged contributions](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+is%3Amerged+label%3A%22Hook+Contribution%22)** 🚀.

Even better, some contributions are still in the review or validation phase, meaning we’re likely to increase that number very soon.

### More than just merged code

In total, we received over 25 contributions during the challenge. As of now, 14 have been merged, a great achievement on its own.

Not every pull request was merged: some proposed hooks already existed under a different name. Others tackled problems that could be solved using existing extension points or different architectural patterns.

They opened up important discussions about how and where to extend PrestaShop, and allowed us to share knowledge with the community, explaining alternatives, clarifying use cases, and helping contributors better understand the inner workings of the software.

This initiative was not only about adding code - it was about collaborating, learning, and evolving together.

### Who contributed?

New contributors joined the effort, and many agencies took part in this community challenge. The result? New extension points that make PrestaShop more modular and flexible.

Merged contributions came from:

- [OpenServis.cz](https://openservis.cz)
- [Creabilis.com](https://creabilis.com)
- [griiv.fr](https://griiv.fr) (2x)
- [gurkcity.de](https://gurkcity.de) (2x)  
- [arkonsoft.pl](https://arkonsoft.pl) (2x)  
- [@unlocomqx](https://github.com/unlocomqx)  
- [evolutive.com](https://evolutive.com)  
- [pliciweb.com](https://pliciweb.com)  
- [PrestaShop.com](https://prestashop.com)
- [@Hlavtox](https://github.com/Hlavtox)
- [Kiwik.com](https://kiwik.com)

### New and improved hooks

**New hooks added:**

- `displayCustomerAccountTop`  
- `displayCartExtraProductInfo`  
- `actionGetPdfRenderer`  
- `actionGetPdfTemplateObject`  
- `actionPaymentModuleProductVarTplAfter`  
- `actionProductGetAttributesGroupsAfter`  
- `actionCartDuplicate`  
- `actionObjectDuplicateAfter`  
- `actionPresentObject`  
- `overrideImageLink`
- `adaptImageLink`
- `actionGetCartRuleContextualValue`
- `actionApplyCartRule`
- `actionModuleUpgradeAfter`
- `actionModuleEnable`
- `actionModuleDisable`
- `additionalHtmlAttributesFormFields`

**Improved hooks:**

- `actionOrderSlipAdd`  
- `actionHtaccessCreate`  

### What these hooks enable

**New hooks will help you:**

- Display custom data in previously limited areas (e.g. cart, customer account, PDFs).
- Extend and modify how PDFs are rendered. [See more details](https://github.com/PrestaShop/PrestaShop/pull/38487).
- Extend order confirmation emails. [See more details](https://github.com/PrestaShop/PrestaShop/pull/38480).
- Alter product attribute rendering in the front office. [See more details](https://github.com/PrestaShop/PrestaShop/pull/38408).
- Run custom logic after duplicating carts or other entities. [See more details](https://github.com/PrestaShop/PrestaShop/pull/38371).
- Modify data presented via object presenters. [See more details](https://github.com/PrestaShop/PrestaShop/pull/37947).
- Override image link generation logic to customize image URLs. [See more details](https://github.com/PrestaShop/PrestaShop/pull/38952).
- Custom cart rule application from modules. Allows to create infinite possibilities of rules. [See more details](https://github.com/PrestaShop/PrestaShop/pull/38881/).
- React to module upgrades and enable/disable actions, allowing for custom logic when modules are updated or toggled. [See more details](https://github.com/PrestaShop/PrestaShop/pull/38839).
- Add custom HTML attributes to form fields, enabling better integration with third-party libraries or custom scripts. [See more details](https://github.com/PrestaShop/PrestaShop/pull/38586/).


**Improved hooks now let you:**

- Trigger logic after an order slip is created, e.g. for customization. [See more details](https://github.com/PrestaShop/PrestaShop/pull/38491).
- Add custom `.htaccess` rules more easily by having access to the generated file path. [See more details](https://github.com/PrestaShop/PrestaShop/pull/37535).

### Hooks as a better alternative to overrides
One of the major advantages of adding new hooks to PrestaShop’s core is that they allow module developers to move away from using file overrides which are often fragile, hard to maintain, and incompatible across PrestaShop versions.
With a proper hook in place, you can inject behavior or data at the right moment without touching core files. This improves forward compatibility and simplifies maintenance.
But what if you still need to support older PrestaShop versions that don’t include these new hooks?
The solution is simple: you can make your module smart enough to check the current PrestaShop version and conditionally skip installing overrides.
Here’s how:
In your module, override the `installOverrides()` method. Inside it, use `version_compare` to detect if the PrestaShop version in use already includes the hook. If so, skip installing the override:

```php
public function installOverrides()
{
    if (version_compare(_PS_VERSION_, '8.2.2', '>=')) {
        // The hook exists in the core, no need for override
        return true;
    }

    // Fallback to parent logic for older versions
    return parent::installOverrides();
}
```

This way, you can safely support both older and newer PrestaShop versions in a single module without compromising maintainability. As more hooks are added to the core, this approach will help reduce reliance on overrides across the ecosystem.

### What we learned

This initiative brought great energy to the project and demonstrated the strength of our community.

✅ Contributions were easier to follow thanks to the automatic "Hook contribution" label.

✅ The announcement during FoP Days encouraged many of you to jump in and participate.

✅ Sharing updates on social media gave visibility to contributors and their work.

✅ The updated documentation helped new contributors get started quickly.

✅ We welcomed several new contributors - a clear sign that the project remains open and growing.

Focusing on a single topic, like hooks, allowed us to streamline contributions and improve the validation process. It also helped us identify a few areas where we can still do better, particularly when it comes to reviewing submissions faster and planning around release timelines.

We’ve taken note of these lessons and will use them to improve the next edition of this initiative.

### Thank you for contributing

This challenge was a success because of you - developers, agencies, and individuals who took the time to contribute, test, review, and share the initiative.

Whether you submitted a pull request, helped others in discussions, or simply gave visibility to the project by sharing our updates: thank you.

Every new hook merged into the core is a step toward a more modular, flexible, and future-proof PrestaShop. Your contributions have a direct impact on the ecosystem and help thousands of merchants and developers build better solutions.

**We’re already preparing the next “Call for contributions” initiative**, and we’ll be sharing the details very soon. Our goal is to keep improving the process, focus on meaningful topics, and give contributors even more opportunities to make a difference.

Stay connected, and let’s keep building PrestaShop together.
