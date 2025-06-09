---
layout: post
title:  PrestaShop 9 is available
subtitle: Better foundation for your ecommerce
date: 2025-06-10
authors: [ PrestaShop ]
image: /assets/images/2025/06/PS901201x629.png
twitter_image: /assets/images/2025/06/PS901201x629.png
icon: icon-leaf
tags:
- version
- major
- releases
- "9.0"
- "9.0.x"
---

It's finally here! PrestaShop 9 is available for download. This new version brings a modernized architecture, new developer tools, and powerful features designed to support the future of ecommerce.

## PrestaShop 9 is here!

![PrestaShop 9 is available!](/assets/images/2025/06/PS901535x425.png)

After over two years of development and collaboration with the community, it's time to take another major step forward. **PrestaShop 9** is here. This version brings valuable improvements and marks a significant advancement for anyone looking to grow their business online.

This new major version introduces long-term supported technologies like **Symfony 6.4**, compatibility with **PHP 8.4**, a brand-new **Admin API**, and an improved developer experience both in the back office and the front. It's a strong, forward-compatible foundation for merchants, developers, and integrators alike.

> ⚠️ PrestaShop 9 is a **major version**: some modules and themes may require updates to work correctly. We recommend testing thoroughly before upgrading your shop.

## Highlights of PrestaShop 9

Let’s take a quick look at the key features:
- Symfony 6.4 LTS (long-term support version)
- PHP 8.1 – 8.4 support
- New Admin API powered by [API Platform](https://api-platform.com/)
- Modern Hummingbird theme
- Redesigned back office fully rendered with Symfony
- Many performance and SEO improvements
- Native support for WebP and AVIF images
- New product page in the back office 
- Continuous code cleanup and architectural improvements
- Experimental Symfony container in the front office
- Improved module actions tracking, feature flags, installer customization, and more.

Read more about the new features and what they mean below!

## What's new in PrestaShop 9

<a href="/assets/images/2025/06/PS9-screenshots/dashboard-more-details.png" target="_blank">
    <img src="/assets/images/2025/06/PS9-screenshots/dashboard-more-details.png" alt="PrestaShop 9 is available!" class="img-fluid rn-image" loading="lazy">
</a>

### Symfony 6.4 and PHP 8.4 support

PrestaShop 9 is built on **Symfony 6.4**, the latest long-term support (LTS) version of the framework, which ensures security updates until **November 2027**. This is a major leap forward from Symfony 4.4, bringing:

- Improved performance and lower memory consumption.
- Stronger security foundation with better protections against common web vulnerabilities.
- Cleaner, modern code architecture that reduces technical debt and simplifies future development.

In parallel, PrestaShop 9 supports **PHP 8.1, 8.2, 8.3**, and now **8.4**, opening the door to:
- Performance improvements.
- More expressive, safer code with new language features.
- Better long-term compatibility by aligning with the actively supported PHP versions, ensuring you can use the latest libraries and tools.

For developers, this means faster, safer, and more future-proof code. For merchants, it translates into a more secure, efficient, and scalable ecommerce platform, ready to handle growing traffic and complex customizations.

### A powerful new Admin API with API Platform

PrestaShop 9 introduces a fully new **Admin API**, built on top of **API Platform**, one of the most robust and modern API frameworks available in the PHP ecosystem. This is a key milestone for the project, laying the foundation for a more open, integrated, and developer-friendly PrestaShop.

The new API brings:

- Easier integrations with external systems, CRMs, ERPs, marketing tools, and more.
- Automation capabilities that streamline store management tasks, reducing manual work.
- Consistent, standards-compliant design using REST and JSON, making it simple to work with for developers familiar with modern APIs.
- Extensibility and modularity, allowing the API to evolve and expand as community needs grow.

It is important to note that the Admin API is still a **work in progress**. While many foundational elements are in place, additional endpoints and refinements are planned for future updates. Your feedback is essential to shaping its development and ensuring it meets the ecosystem's needs.

- Explore the API usage: [how to use the new Admin API](https://devdocs.prestashop-project.org/9/admin-api/how-to-use/)
- Check the API documentation: [Admin API documentation](https://devdocs.prestashop-project.org/9/admin-api/)
- [Meet PrestaShop 9 Admin API - user guide]({{< relref "/news/posts/2024/meet-prestashop9-api" >}}).

<a href="/assets/images/2025/06/PS9-screenshots/admin-api2.jpeg" target="_blank">
    <img src="/assets/images/2025/06/PS9-screenshots/admin-api2.jpeg" alt="PrestaShop 9 new Admin API based on API Platform" class="img-fluid rn-image" loading="lazy">
</a>
<a href="/assets/images/2025/06/PS9-screenshots/admin-api.jpeg" target="_blank">
    <img src="/assets/images/2025/06/PS9-screenshots/admin-api.jpeg" alt="PrestaShop 9 new Admin API based on API Platform" class="img-fluid rn-image" loading="lazy">
</a>

### Hummingbird theme

PrestaShop 9 introduces **Hummingbird**, a brand-new front office theme that represents the next generation of PrestaShop themes. Built with **Bootstrap 5**, **TypeScript**, and the **BEM** (Block Element Modifier) CSS naming convention, [Hummingbird](https://github.com/PrestaShop/hummingbird) responds directly to years of feedback and requests from the community for a modern, clean, and flexible theme base.

The community has asked for a refreshed, modernized front-end foundation, but updating the Classic theme without breaking ecosystem compatibility was nearly impossible. Hummingbird solves this by offering:

- *Bootstrap 5 LTS integration* for modern, consistent design components.
- A *reorganized directory structure*, moving away from the legacy `_dev` layout for better clarity and maintainability.
- Consistent *BEM-based CSS naming convention* for easier maintenance and clearer structure.
- A *new SCSS architecture* based on CSS `@layer`, enabling modular and scalable styling
- *Reduced third-party dependencies*, favoring Bootstrap’s built-in components.
- *Clear separation between Bootstrap and PrestaShop-specific styles*, simplifying custom overrides.
- Supports *Bootstrap dark mode*, which can be easily enabled via an SCSS variable.
- Major template refactors for consistency, modularity, and scalability.

<a href="/assets/images/2025/06/PS9-screenshots/hummingbird.jpeg" target="_blank">
    <img src="/assets/images/2025/06/PS9-screenshots/hummingbird.jpeg" alt="PrestaShop 9 new Hummingbird theme" class="img-fluid rn-image" loading="lazy">
</a>

This is not a full break from Classic - think of it as a rebuilt and improved foundation, preserving the best parts while modernizing where it matters most.

While Hummingbird is not the default theme in PrestaShop 9, it sets the direction for the future of PrestaShop theming. We encourage developers to test it, build on it, and share feedback to help shape its evolution.

## Other improvements

### Front office improvements

- **Support for WebP and AVIF** image formats to improve the performance of your store.
- Option to notify customers if the viewed product is already in their cart.
- You can now order as a guest, even if a customer account exists to speed up the checkout process.
- Rendering improvements for Categories, Manufacturers, Suppliers, and Stores using **Presenters** to improve the performance and standardize the way of rendering elements in the front office.
- Product breadcrumbs reflect the accessed category to ease navigation through the store.
- Faster jQuery UI loading to improve the performance of the front office.
- Experimental Symfony container now available in the front office for developers. 


---

### SEO and URL management improvements

- Cleaner product URLs (category is removed by default).
- Option to remove the default language prefix from URLs to avoid unnecessary redirects when adding a new language.
- Inactive categories can now use **301** or **302** redirects to have better control over SEO.
- Filtered product listing pages are excluded from indexing following SEO recommendations. 

---

### Enhanced product management

- The new product page is now the default one to ease the management of the products in your store (legacy page removed).
- You can now sort product feature values manually or automatically.
- Improved product page performance (especially for large catalogs). 

---

### Improved back office UX and features

- New look for the back office with a modernized design aligned with the current PrestaShop branding.
- Back office now fully rendered using Symfony and Twig, which is yet another step in the full migration of PrestaShop to Symfony.
- Pages fully migrated to Symfony include: Login, Products, Orders, Attributes, Statuses, and more.
- Improved layout, unified wording, and better navigation throughout the back office.
- Guest customers can now be created manually directly from the back office to ease the creation of manual orders. 

---

### Better debugging and security

- Debug mode can be limited to users with a specific cookie.
- Table prefix is now randomized by default during installation following PrestaShop’s security recommendations.
- Direct file access protection implemented to prevent accessing PHP files directly.
- Better tracking of module actions (install/update/uninstall) to have a better control over what is happening in the store. 

## Update to PrestaShop 9

We strongly encourage all merchants and developers to start planning their update to **PrestaShop 9**. This new major version brings significant advantages in terms of **performance**, **security**, **modern architecture**, and **powerful new features** that will future-proof your ecommerce store and ensure you stay compatible with the latest technologies.

To make the upgrade process smoother and more reliable, you can use the brand-new **Update Assistant** (formerly known as 1-Click Upgrade). Update Assistant 7 is a complete overhaul of the upgrade module, offering:

- A redesigned, intuitive interface that guides you step by step through **backup, update, and restore**.
- A brand-new **Command-Line Interface (CLI)** for advanced users who want to integrate updates into automated workflows.
- **Optimized performance** and **improved reliability**, even for large stores.
- More detailed **requirement checks, logs, and error reports** to help prevent issues before they happen.
- Dedicated, clear **documentation** to guide you confidently through the process.

With Update Assistant, upgrading to PrestaShop 9 is faster, safer, and easier than ever. Don't miss out on the powerful improvements of PrestaShop 9 and start planning your update today to take full advantage of everything the new version has to offer.

<a href="/assets/images/2025/06/PS9-screenshots/update-assistant.png" target="_blank">
    <img src="/assets/images/2025/06/PS9-screenshots/update-assistant.png" alt="PrestaShop 9 Update Assistant" class="img-fluid rn-image" loading="lazy">
</a>
<a href="/assets/images/2025/06/PS9-screenshots/update-assistant2.png" target="_blank">
    <img src="/assets/images/2025/06/PS9-screenshots/update-assistant2.png" alt="PrestaShop 9 Update Assistant" class="img-fluid rn-image" loading="lazy">
</a>

## Download PrestaShop 9

Download the Classic version from the official PrestaShop website. This version includes the PrestaShop SA modules, such as:
- PrestaShop Checkout
- PrestaShop Account
- PrestaShop Marketplace in back office
- PrestaShop CloudSync
- PrestaShop Shipping
- PrestaShop Marketing
- PrestaShop Socials

{{< cta "https://prestashop.com/versions/" >}}Download PrestaShop 9 now!{{< /cta >}}

---

**Creating a custom ZIP**

If you don't want to use a Classic version, you can build your custom ZIP file with the PrestaShop 9 installer, which has no PrestaShop SA modules included. You can read the instructions on how to do it [PrestaShop Release Creation Tool readme](https://github.com/PrestaShop/PrestaShop/tree/develop/tools/build).

## Adapt your solutions to PrestaShop 9

With PrestaShop 9 introducing many architectural, technical changes, it’s important for developers as well as integrators to review and adapt their modules, themes, and custom solutions to ensure compatibility.

We provide **extensive documentation** detailing the notable changes, deprecated components, and updated best practices introduced in this version. Start here to understand what’s new and what needs adjustment: 
[Review the PrestaShop 9 notable changes](https://devdocs.prestashop-project.org/9/modules/core-updates/9.0/).

Additionally, we regularly publish technical articles covering PrestaShop 9-specific topics, including migration guides, tutorials, and more. You can follow these updates under the dedicated tag:
[Explore PrestaShop 9 developer articles](https://build.prestashop-project.org/tag/ps9dev/).

By staying informed and proactively adapting your solutions, you not only ensure compatibility and long-term relevance but also empower merchants to smoothly migrate to PrestaShop 9 and take full advantage of its new features, performance improvements, and architectural upgrades.

## Contribute to PrestaShop 9

PrestaShop is an open source project, and its strength comes from the amazing contributions of its community. We warmly invite everyone to get involved - and remember, contributing is not only about writing code!

Here are some valuable ways you can help improve PrestaShop 9:

- **Report bugs or issues you encounter**: your feedback helps make PrestaShop more stable and reliable for everyone. Learn how to report issues effectively here: [Report Issues](https://www.prestashop-project.org/get-involved/report-issues/).

- **Help translate PrestaShop**: expand PrestaShop’s global reach by contributing to translations on Crowdin, making the software accessible in more languages worldwide: [join the translation project](https://docs.prestashop-project.org/translating-prestashop/translating-prestashop-software-basics/translating-on-crowdin).

- **Improve the documentation**: good documentation empowers developers, merchants, and contributors alike. You can help improve, update, or expand PrestaShop’s technical documentation - here’s why it matters and how you can get started: [contribute to the Developer Documentation](https://devdocs.prestashop-project.org/9/contribute/documentation/why/).

- **Contribute code and improvements**: PrestaShop welcomes code contributions from developers of all levels. Whether you’re fixing bugs, improving features, or developing new ones, your input directly helps shape the project’s future. Explore the project and get involved on [GitHub](https://github.com/PrestaShop/PrestaShop).

Whether you are a developer, designer, merchant, or simply passionate about open source, **your contributions matter**. Together, we can make PrestaShop 9 stronger, more flexible, and better for the entire ecosystem.

## Acknowledgments

PrestaShop is an open-source platform where many contributors, though not directly connected to PrestaShop SA, play vital roles in its development alongside the community.

This release is made possible thanks to [PrestaShop SA](https://prestashop.com/) who contributed around 80% of pull requests, but also individual contributors from the community, and companies from our ecosystem.

A big **thank you** to all contributors (in alphabetical order):

adrianllopis, Adrien Foulon, AdrienPlx, Aimé Dubuisson, Alejandro Ramos, Alexis Guyomar, Amazzing, Antonin Clauzier, Arnaud Dohogne, Aurélien Rita, bibips, Boris Hermans, Boubker Bribri, Carotte, Cedric Vangout, Cesar Quintini, Charly Caillon, clement-hvt, Clotaire Renaud, Codencode, ComonSoft, crezzur, Damien Tupinier, Daniel Black, Daniel Hlavacek, Danilo Carta, Darius Aleksiunas, Dariusz Tryba, David Gonzalez, David Paris, David-Julian Buch, Denys Bezuhlyi, Dindault Lucas, Dominik Shaim Ulrich, DylanDenizon, Edel Muñoz Macias, Fabien Papet, Felipe Espinosa, Florine Hea, Franck Lefèvre, George Filippakis, Grzegorz Wójcik, Hugo Posnic, Ibrahima Sow, idnovate, Jackoske, Jakub Łach, Jean-François Viguier, Jens Wilke, jeremie, Jevgenij Visockij, Jin JI, John Botella, johnk0306, Jonathan Danse, Jonathan Lelievre, Jonathan Renard, Julien Gissinger, Julius Žukauskas, justeen35, Kaikina, Karlis Suvi, Kijam Lopez, Klemart3D, Krystian Podemski, Laurent Rousseau, Léa Gris, leemyongpakvn, Lorenz Meyer, Louis Authie, Manuel Jose Pulgar Anguita, Marco Ingraiti, Marius Gudauskis, Markus, Markus Staab, Mateus Shirlaw, Mateusz Nastalski, Mathieu Ferment, Matthias Goudjil, Matthieu Rolland, Mattia, Maxime, Maxime Flasquin, Maxime Morel, Maxime Poulain, Michal Macek, Mickaël Fernandez, Mohamed Ali Rajab, Morgan Pichat, mrkalchemy, Nesrine Abdmouleh, Nicko, Nicolas Lœuillet, Nicolas Sotron, okom3pom, Olivier Le Corre, Pablo Borowicz, Paul Campbell, Paul Coudeville, PrestaAlba, Prestaworks, Progi1984, PululuK, Robin Fischer, Roman Daniel Gabriel, Salim Benouamer, sas-adilis, Sauli Maijala, Sharak, Shivam7-1, Simone Gennari, Sullivan, Tafaz, Tanguy, Tanguy Jacquet, Tatu Wikman, tess, Thibault Blivet, Thomas, Thomas Baccelli, Thomas Delorenzi, Thomas Leone, Thomas Nabord, Thomas Nares, Tom Combet, Tom Girou, Tuni-Soft, Ugur Celik, William Entriken

Thanks to companies whose members completed the "Sponsor company" section:

<style>
.ps-contributors {
    columns: 3;
    -webkit-columns: 3;
    -moz-columns: 3;
    margin-bottom: 20px;
}
.ps-contributors li {
    list-style: none;
}
@media (max-width: 600px) {
    .ps-contributors {
        columns: 1;
        -webkit-columns: 1;
        -moz-columns: 1;
    }
}
</style>

<div class="ps-contributors">

- 🏆 202 ecommerce  
- 🏆 Avalanche Media  
- 🏆 Codencode  
- 🏆 ComonSoft  
- 🏆 Creabilis  
- 🏆 Evolutive  
- 🏆 FriendsOfPresta  
- 🏆 Griiv  
- 🏆 Hostinato.it  
- 🏆 KIWIK  
- 🏆 Lefevre.dev  
- 🏆 MariaDB Foundation  
- 🏆 Mediacom87.fr  
- 🏆 OpenServis CZ  
- 🏆 Pliciweb  
- 🏆 PrestaEdit  
- 🏆 Prestaworks AB  
- 🏆 TRENDO s.r.o.  
- 🏆 Wepika  
</div>

We would also like to thank the people who contributed aside from code:

- Product management: Iliès Bahloul
- Delivery Manager: Wahbi Maaoui
- Quality assurance: Sira Diouara, Paul-Noël Cholot, and all the QA team
- UX design: Scott Cosio
- Wording management and proofreading: Patrick Coffre

## Final words

PrestaShop 9 is a major step forward for the platform, bringing a modernized architecture, new developer tools, and powerful features designed to support the future of ecommerce. We are excited to see how the community will embrace these changes and continue to innovate on top of this new foundation.

<style>
    .rn-image {
        display: block;
        margin-bottom: 20px !important;
        border: 1px solid #ddd;
    }
</style>
