---
layout: post
title:  PrestaShop 8.0 Is Available
subtitle: The final version is here!
date: 2022-10-26
authors: [ PrestaShop ]
image: /assets/images/2022/10/bannerPS8.png
icon: icon-leaf
tags:
- version
- major
- releases
- 8.0
- 8.0.x
---

The maintainers team is pleased to announce that PrestaShop 8.0 is officially available.

![PrestaShop 8.0 is available!](/assets/images/2022/10/bannerPS8.png)

PrestaShop 8, the first major version since the original release of PrestaShop 1.7.0 back in 2016, is an important milestone for the project.

A significant cleanup has been performed in the codebase, with several internal components updated, modified or removed. PrestaShop 8 is also the project’s first company-neutral release, meaning that it no longer includes commercial products and services built-in.

In addition to [over 170 bug fixes](https://github.com/PrestaShop/PrestaShop/issues?page=1&q=is%3Aissue+is%3Aclosed+milestone%3A8.0.0+label%3ABug+-label%3A8.0.x+-label%3APrerelease+-label%3A%22CI%2FCD%22) (including 4 new fixes since the [release candidate](https://build.prestashop-project.org/news/prestashop-8-0-rc1-release/)), PrestaShop 8 brings compatibility with PHP 8.1, updated libraries including Symfony 4.4, an improved experimental product page, a new security page, and many other features for developers and merchants alike. You can read all about them here: [What’s new in PrestaShop 8](https://www.prestashop-project.org/releases/prestashop80).

PrestaShop 8 is a major version in the [SemVer sense of the word](https://semver.org/#summary). This means that while it brings several new features and a number of important changes, most themes from PrestaShop 1.7 should remain compatible with PrestaShop 8. Some modules, however, might need to be updated to be compatible with this new version. To learn more, read [Migrate your solutions from PrestaShop 1.7 to 8.0](https://build.prestashop-project.org/news/migrate-your-solutions-from-17-to-80/), and the [detailed developer documentation](https://build.prestashop-project.org/news/migrate-your-solutions-from-17-to-80/).

## Download

PrestaShop 8.0 is available on GitHub:

[Download PrestaShop 8.0 now!](https://github.com/PrestaShop/PrestaShop/releases/tag/8.0.0){: .btn .btn-lg .btn-success}
{: .text-center}

## Upgrade

**Important:** The [1-Click Upgrade module](https://github.com/PrestaShop/autoupgrade) is not yet able to safely upgrade shops to PrestaShop 8.0 due to a number of known issues. The v4.15 release, enabling the upgrade to 8.0, is expected in the next few weeks. Stay tuned for news.

## Known issues

You can find the list of known issues here: [List of known issues on PrestaShop 8.0](https://github.com/PrestaShop/PrestaShop/issues?q=is%3Aissue+is%3Aopen+label%3A8.0.x+label%3AVerified+label%3ARegression). The remaining regressions are expected to be fixed in upcoming patch releases.

## Acknowledgments

A big thank you to the 120 people who contributed to 1100 Pull Requests included in this version:

Adib Aroui, Alexandre Bru, Amaury Hanser, Amazzing, Amit Kumar Tiwari, Andromaque, Arnaud104, Ashley Butcher, Axome, Beattie282, Bertrand Merlier, Boubker Bribri, Brais Pato, Bruno Desprez, Camille V, Chedly Farhani, Christophe Rouille, Clotaire Renaud, Constantin Boulanger, Damien Tupinier, Daniel Hlavacek, David Diverres, David Gonzalez, David Oury, Dominik Ulrich, e-gaulue, Fabien Papet, Franck Lefèvre, gennaris, Georges Cubas, Henri Davigne, Hervé Hennes, Hibatallah Aouadni, Hugues Gobet, Ibrahima Sow, idnovate, Igor Stępień, Ines Sallemi, Jean-François Viguier, Jérôme Wohlschlegel, Jevgenij Visockij, Jonathan Danse, Jonathan Lelievre, Jory Hogeveen, Julie Varisellaz, Julius Žukauskas, Karlis Suvi, Kévin Gleizes, Khouloud Belguith, Krystian Podemski, Kyary, leemyongpakvn, Lionel Massin, Lorenz Meyer, Louis Authie, Luc Vigato, Mahmoud Parvazi, Marco Ingraiti, Marco Salvatore, Marcos, Marek Jedrzejewski, Marion François, Marius Gudauskis, Marwa Chelly, Mathieu Ferment, Matthias Raigne, Matthieu Rolland, Michael Voříšek, Mickaël Fernandez, Moncef Essid, mrAKAR, Nesrine Abdmouleh, Nicolas Lœuillet, Nicolas Sorosac, NoZTurn, okom3pom, Olivier Le Corre, Pablo Borowicz, Pascal Cescon, Pedro Nucci, Peter Schaeffer, Philip Iezzi, Pierre Rambaud, Pierre-Yves Christmann, PrestaAlba, prestaforum, Prestaplugins, Prestaworks, Priyank Desai, Psyray, PululuK, Ricardo González Garza, Robin Fischer, Romain ‘Maz’ BILLOIR, Romain Couderc, Salim Benouamer, Sam, Sauli Maijala, Sébastien Alfaiate, Sergio Quiñonez, Seth Vargo, Sharak, Simone, Simone Gennari, Tatu Wikman, Thomas Baccelli, Thomas Leguillant, Thomas Nabord, Tom Combet, Tuni-Soft, Valentin Szczupak, venditdevs, Vincent Garcia, Viorel Preoteasa, Vladimir, Web Helpers Pau, Yani Makouf, Yneet, yo7hli, and Yohann Tilotti.

PrestaShop is above all a community project: the vast majority of contributors are not directly affiliated with PrestaShop SA.

We would also like to thank the people who contributed aside from code:

- Product management: Eshane Rawat, Fabien Vallon and Mateus Shirlaw.
- Quality assurance: Aurélien Rita, Faten Mhiri, Florine Hea, Hana Rebai, Hibatallah Aouadni, Ines Sallemi, Khouloud Belguith, Marwa Chelly, Paul-Noël Cholot, Robin Fischer, Sarah Cavrot, Sarah Dib, Serhii Zavadskyi and Sira Diouara.
- UX design: Scott Cosio and Tristan Lehot.
- Wording management and proofreading: Julie Varisellaz, Léa Delin and Patrick Coffre.
