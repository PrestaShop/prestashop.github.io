---
layout: post
title:  "PrestaShop 8.0 beta is open for feedback!"
subtitle: "You can download it and test it"
date: 2022-08-08 15:30
authors: [ PrestaShop ]
image: /assets/images/2022/08/banner-8-0-beta.png
icon: icon-leaf
tags:
- version
- beta
- major
- releases
- 8.0
---

The public beta version of PrestaShop 8.0 is now ready for you to test!

![PrestaShop 8.0 Beta is available!](/assets/images/2022/08/8.0_beta_banner.png)

The maintainers team is very happy to announce today the release of the public beta version of PrestaShop 8.0. This version includes many new features, improvements and over 130 bug fixes.

The main new features for this version include an update to [Symfony 4.4](https://symfony.com/releases/4.4), compatibility with [PHP 8 and 8.1](https://www.php.net/), an enhanced experimental product page, and a new security page which allows shop administrators to manage user sessions and configure their password policy.

In addition, this version fixes [over 130 bugs](https://github.com/PrestaShop/PrestaShop/issues?q=is%3Aissue+is%3Aclosed+milestone%3A8.0.0+label%3ABug+-label%3ARegression+-label%3A8.0.x+-label%3Adevelop) found in previous releases, including:

* [In some circumstances, customers could be able to accidentally order an out-of-stock product, even if it was not allowed](https://github.com/PrestaShop/PrestaShop/issues/10762).
* [An empty cart was being created whenever a customer signed in](https://github.com/PrestaShop/PrestaShop/issues/9589).
* [Canonical links were missing on several pages](https://github.com/PrestaShop/PrestaShop/issues/9503).
* [An error message was being logged every time an order was paid, even though there was no error](https://github.com/PrestaShop/PrestaShop/issues/9866).
* [Visitors having placed an order weren't able to set up a customer account using the form at the bottom of the order confirmation page](https://github.com/PrestaShop/PrestaShop/issues/14414).

PrestaShop 8 is also the project's first company-neutral release, meaning that it no longer includes commercial products and services built-in. You can find out more by reading [Beyond 1.7](/news/prestashop-beyond-1-7/) and watching the project's [public demo from November 2021](https://www.youtube.com/watch?t=128&v=jwOy3gx-MNs&feature=youtu.be).

This is the first major version of PrestaShop since 1.7.0 was released back in 2016. A significant cleanup has been performed in the codebase, which means several internal components have been slightly modified, and many older, deprecated components have been removed. This article in DevDocs describes the full list of what has been changed: [Changes in 8.0](https://devdocs.prestashop.com/8/modules/core-updates/8.0/).

**Remember, this beta version is pre-release software and it is highly possible that you will encounter some issues. Do not use it in your production shop!**

Also note that it is not possible to upgrade a shop from a beta to the final version using the upgrade module.

## Your feedback is important!

The public beta period is an extremely important phase to prepare for the upcoming release. During this period, we encourage everyone in the community to download this version and test how it behaves in their unique environment.

Here are some examples of how you can help:

* If you have access to a real shop, set up a copy of it in a separate environment and update it to PrestaShop 8 using the [upgrade module](https://github.com/PrestaShop/autoupgrade/releases). See if you notice any issues on the shop compared to your previous version. _(Note that there are some known issues during the upgrade process, but they shouldn't be blocking – [read more below](#known-issues))_.
* If you are a module or theme developer, check if they work well with this new version.
* If you notice any problem and you think it is caused by the new version, please [report it on GitHub](https://github.com/PrestaShop/PrestaShop/issues/new/choose).
* Don’t hesitate to [contribute to fixing bugs](https://devdocs.prestashop.com/8/contribute/contribute-pull-requests/) if you can!

**Your feedback on this beta is essential.** The more issues you report right now, the fewer bugs there will be on the final release, which means fewer patch versions and fewer problems on your (or your customer’s) online store.

**Please submit all your feedback by September 5, 2022.** If no new critical or major issue remains to be fixed by then, the first release candidate will be built and released a few days later.

If you have any questions about the version and its features, feel free to share them on [the PrestaShop project’s Slack](https://www.prestashop-project.org/slack/).

## Main new features & improvements

### Symfony 4.4 and PHP 8.1

PrestaShop 8 has been updated to [Symfony 4.4 LTS](https://symfony.com/releases/4.4), supported until November 2023. This release also brings compatibility with the most recent [PHP 8.1](https://www.php.net/releases/8.1/en.php), supported until November 2024.

### Improved product page

The experimental back office product page introduced in 1.7.8 has been significantly improved for this version. The page has been reorganized, combination management has been significantly improved, and bulk edition has been enhanced as well.

Please note that this feature is still experimental and deactivated by default because it doesn’t yet implement all the features found in the current product page (notably multishop features, among others). You can switch to the experimental page by activating it in _Advanced parameters > Experimental features_.

### Security page

A new Security page has been added in the _Advanced parameters_ section. It allows shop administrators to configure their desired password policy (complexity and length) for customers and employees. It also allows them to user sessions, and disconnect them remotely if needed.

### Modules & module management

The PrestaShop project is now free of commercial products and services, so it no longer includes the Addons Marketplace by default: it is now a [separate module](https://github.com/PrestaShopCorp/ps_mbo/releases) that can be installed independently, allowing you to install and update any module that you might have bought there.

The project’s [built-in modules](https://devdocs.prestashop.com/8/development/native-modules/) (also referred to as “native modules”) are now distributed thorugh a dedicated infrastructure, and can now be installed and updated directly from the Module Manager page.

PrestaShop 8 includes several additional built-in modules: Top-sellers block, Brand list, Cash on delivery, Products in the same category, Mail alerts, Google analytics, New Products, Specials block, Supplier list, Viewed products block, and Distribution API client. 

During the installation process, you can now choose which modules you want to install.

## Download

You can download PrestaShop 8.0 beta here:

[Download PrestaShop 8.0 beta now!](https://github.com/PrestaShop/PrestaShop/releases/tag/8.0.0-beta){: .btn .btn-lg .btn-success}
{: .text-center}

## Known issues

* [An exception might be displayed in Front office when creating an italian address during the checkout process](https://github.com/PrestaShop/PrestaShop/issues/29012)
* [An unclear error is displayed when upgrading using zip if the file is too large](https://github.com/PrestaShop/PrestaShop/issues/28924)
* [The state field is not displayed in the checkout process for country United States](https://github.com/PrestaShop/PrestaShop/issues/28781)
* [Translations packs are not up-to-date for 8.0](https://github.com/PrestaShop/PrestaShop/issues/29017)
* [Multistore - A new product created in all shops is not displayed on the products list](https://github.com/PrestaShop/PrestaShop/issues/27599)
* [Contextual help in the Back office is not fully functional](https://github.com/PrestaShop/PrestaShop/issues/29169)
* [Errors are displayed when upgrading from 1.7.8.6 to 8.0.0](https://github.com/PrestaShop/PrestaShop/issues/29248)
* Some modules are not yet updated to work with 8.0 and might break your shop. We recommend disabling the following modules before upgrading to this beta:
  * Onboarding (welcome)
  * PrestaShop Metrics (ps_metrics)
  * PrestaShop Facebook (ps_facebook)
  * Prestashop Checkout (ps_checkout)
  * Google marketing (psxmarketingwithgoogle)
  * Marketplace in your Back office (ps_mbo)

The [complete list of known bugs](https://github.com/PrestaShop/PrestaShop/issues?q=is%3Aopen+is%3Aissue+label%3A8.0.x+label%3ABug) is constantly updated on GitHub.


## Acknowledgements

A big thank you to the **113 people** who contributed **more than 1000 Pull Requests** included in this version: Adib Aroui, Alexandre Bru, Amaury Hanser, Amazzing, Amit Kumar Tiwari, Andromaque, Arnaud104, Ashley Butcher, Axome, Beattie282, Bertrand Merlier, Boubker Bribri, Brais Pato, Bruno Desprez, Camille V, Christophe Rouille, Clotaire Renaud, Constantin Boulanger, Damien Tupinier, Daniel Hlavacek, David Diverres, David Gonzalez, David Oury, Dominik Ulrich, e-gaulue, Fabien Papet, Franck Lefèvre, gennaris, Georges Cubas, Henri Davigne, Hervé Hennes, Hibatallah Aouadni, Hugues Gobet, Ibrahima Sow, idnovate, Igor Stępień, Jean-François Viguier, Jérôme Wohlschlegel, Jevgenij Visockij, Jonathan Danse, Jonathan Lelievre, Jory Hogeveen, Julie Varisellaz, Julius Žukauskas, Karlis Suvi, Kévin Gleizes, Khouloud Belguith, Krystian Podemski, Kyary, Lionel Massin, Lorenz Meyer, Louis Authie, Luc Vigato, Mahmoud Parvazi, Marco Ingraiti, Marco Salvatore, Marcos, Marek Jedrzejewski, Marion François, Marius Gudauskis, Marwa Chelly, Mathieu Ferment, Matthias Raigne, Matthieu Rolland, Michael Voříšek, Mickaël Fernandez, Moncef Essid, mrAKAR, Nesrine Abdmouleh, Nicolas Sorosac, NoZTurn, Olivier Le Corre, Pablo Borowicz, Pascal Cescon, Pedro Nucci, Peter Schaeffer, Philip Iezzi, Pierre Rambaud, Pierre-Yves Christmann, PrestaAlba, prestaforum, Prestaplugins, Prestaworks, Priyank Desai, Psyray, PululuK, Ricardo González Garza, Robin Fischer, Romain ‘Maz’ BILLOIR, Romain Couderc, Sam Berry, Sauli Maijala, Sébastien Alfaiate, Sergio Quiñonez, Seth Vargo, Sharak, Simone, Simone Gennari, Tatu Wikman, Thomas Baccelli, Thomas Leguillant, Tom Combet, Tuni-Soft, Thomas Roux, Valentin Szczupak, venditdevs, Vincent Garcia, Viorel Preoteasa, Vladimir, Web Helpers Pau, Yneet, yo7hli, and Yohann Tilotti.

...and a warm welcome to the 48 of them who contributed for the first time!

We would also like to thank the people who contributed aside from code:
- Product management: Eshane Rawat, Fabien Vallon, Marion François and Mateus Shirlaw.
- Quality assurance: Aurélien Rita, Florine Hea, Hana Rebat, Hibatallah Aouadni, Khouloud Belguith, Marwa Chelly, Robin Fischer, Sarah Cavrot, Sarah Dib and Serhii Zavadskyi.
- UX design: Scott Cosio and Tristan Lehot.
- Wording management and proofreading: Julie Varisellaz and Patrick Coffre.
