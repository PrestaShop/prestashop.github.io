---
layout: post
title: "Hummingbird v2.0.0 Beta"
subtitle: "A new era for PrestaShop themes"
date:   2025-11-26
authors: [ GericFosse, ThibaultBlivet ]
icon: icon-leaf
tags: [ theme ]
---

We are thrilled to announce the release of **Hummingbird v2.0.0 Beta**. This milestone is the result of a monumental effort, representing more than **320 commits, 500 file changes, 50,000 additions**, and **30,000 deletions**. The goal is to deliver a developer-first, lightweight, and modular theme that establishes a new standard for the PrestaShop ecosystem.

![Hummingbird v2.0.0 Beta](/assets/images/2025/11/banner-hummingbird-v2-beta.png)

Hummingbird will become the **new default theme** in PrestaShop starting from **version 9.1**, while the Classic theme will remain available. It is fully compatible with **PrestaShop 9 and above**.

Unlike traditional themes designed primarily for end users, Hummingbird provides a structured, scalable foundation that enables developers and agencies to build and customize ecommerce stores with ease and efficiency.

## 1. Vision: A Developer-Centric Foundation

The current ecosystem faces limitations due to the rigid Classic theme. Hummingbird resolves these issues with an approach that is:

- **Developer-first:** built by developers, for developers, focusing on customization and flexibility.
- **Performance-driven:** optimized for speed, efficiency, and Core Web Vitals.
- **Future-proof:** a modern base theme designed to evolve alongside PrestaShop and modern web standards.  
- **High-quality integration:** cleaner, more consistent integration across the entire theme, resulting in higher overall implementation quality.

## 2. Key New Features in v2.0.0

This major release introduces a modernized tech stack and a fully rethought architecture to streamline development.

### Modern Tech Stack and Bootstrap 5

- **Bootstrap 5:** full adoption of Bootstrap **5.3.3**, taking advantage of native components and reducing reliance on external libraries.  
- **SCSS + TypeScript:** a transition to modern, scalable technologies that improve maintainability.  
- **Dark mode support:** Hummingbird is "Dark Mode Ready," leveraging native Bootstrap 5.3.0 dark mode capabilities.

### Architecture and Developer Experience

- **Modular architecture:** a logical file structure makes it easier for developers to read, extend, and maintain code.
- **Style harmonization:** cleaner, more consistent templates and styles across the theme for a higher-quality rendering.
- **BEM convention:** adoption of the <a href="https://getbem.com/" target="_blank">BEM (Block Element Modifier)</a> methodology for non-Bootstrap components to improve readability and reusability.

### Performance, SEO and Accessibility

- **Pre-optimized for Core Web Vitals:** faster loading, better UX, and improved responsiveness.
- **Native lazy loading:** reduces resource usage and speeds up navigation.  
- **SEO optimization:** embedded in-sight SEO optimizations and structured data (JSON-LD) for better search engine visibility.
- **Accessibility:** compliant with **over 95%** of the requirements of the European Accessibility Act (EAA), ensuring inclusive user experiences.

## 3. Lighthouse Performance

![Hummingbird Lighthouse Performance](/assets/images/2025/11/banner-performance.png)

> Results are based on three key pages **Homepage**, **Category**, and **Product** and represent the average scores for **Performance**, **Accessibility**, **Best Practices**, and **SEO**.

## 4. Backward Compatibility Breaks and Ecosystem Impact

To modernize the ecosystem, several changes were necessary.

- **jQuery removed from theme:** Hummingbird no longer uses jQuery internally. It remains available for modules that still rely on it, but we strongly recommend migrating away from it, as we plan to remove it in the future.
- **Bootstrap 5 migration:** moving from Bootstrap 4 (Classic Theme) to Bootstrap 5 requires updates to class names and utilities. Modules should align with Bootstrap 5 for full compatibility.
- **Refactored native modules:** key native modules have undergone major refactoring, including `ps_mainmenu`, `ps_facetedsearch`, `ps_featuredproducts`, and `productcomments`, among others.

## 5. Best Practices for Developers

![Hummingbird Best Practice](/assets/images/2025/11/banner-best-practices.png)

To get the most out of Hummingbird v2.0.0, we recommend following these guidelines:

- **Leverage native components:** use as many native Bootstrap components as possible. This reduces technical debt and ensures maximum flexibility.
- **CSS layers:** we have introduced the use of `@layer` in CSS. Theme styles are now scoped into layers, and additional unlayered styles should take priority over theme styles. This provides more flexibility for customization or module style overrides, improves style-priority management, and helps prevent conflicts.
- **Follow the architecture:** adhere to the new logical file structure and BEM conventions. Non-Bootstrap components should follow the BEM convention to ensure reusability across the theme when needed.
- **Bootstrap overrides:** a new Bootstrap override architecture has been implemented, allowing you to easily override SCSS variables by component, as well as override the components themselves if needed. This system is also based on the `@layer` functionality and ensures clean customization with a clear separation of concerns between Bootstrap and PrestaShop custom components.
- **Don't rely on classes for JS:** for many years, JavaScript interactivity relied on custom classes, often using the `js-` prefix though sometimes not. Over time, this led to inconsistent practices and made the ecosystem more complex to maintain. This is why we recommend using data attributes to define JavaScript interactions. Migration from classes to attributes has already begun and should continue over time to make maintenance and evolution easier.

A more detailed technical blog post will follow soon, providing in-depth explanations and examples for these best practices.

## 6. Call to Action

Hummingbird is intended to be the **new testing standard** for PrestaShop Marketplace modules. We need your expertise to refine it further.

- **Download the release:** [Hummingbird v2.0.0 Beta on GitHub](https://github.com/PrestaShop/hummingbird/releases).
- **Contribute:** review our updated README and CONTRIBUTING file to get started.
- **Report issues:** Help us stabilize the project for the official release by reporting issues/bugs on our [GitHub repository](https://github.com/PrestaShop/hummingbird/issues).
