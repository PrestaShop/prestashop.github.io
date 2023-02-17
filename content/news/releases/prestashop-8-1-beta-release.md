---
layout: post
title:  "PrestaShop 8.1 beta is open for feedback!"
subtitle: "A new version is coming, we need all hands on deck!"
image: /assets/images/2023/02/banner_8.1_beta_1200x627.jpg
twitter_image: /assets/images/2023/02/banner_8.1_beta_1024x512.jpg
date:   2023-02-17
authors: [ PrestaShop ]
icon: icon-gift
tags:
- version
- beta
- minor
- releases
- “8.1”
---

The beta version of PrestaShop 8.1 is now ready for you to test!

![PrestaShop 8.1 Beta is available](/assets/images/2023/02/banner_8.1_beta_1534x424.png)

We’re delighted to announce that PrestaShop 8.1 has reached the beta stage. PrestaShop 8.1 is still in development, but we hope you will help us test this release so we can have the best quality release possible, available for everyone, as soon as possible!

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/8.1.0-beta.1" >}}Test PrestaShop 8.1.0 beta 1 now!{{< /cta >}}

Version 8.1 fixes [over 30 bugs](https://github.com/PrestaShop/PrestaShop/issues?q=is%3Aissue+is%3Aclosed+milestone%3A8.1.0+label%3ABug+-label%3ARegression+-label%3Adevelop+) found in the previous release and introduces many improvements and new features.

**Remember, this beta version is pre-release software, and it is highly possible that you will encounter some issues. Do not use it in your production shop!**

Also note that upgrading a shop from a beta to the final version is not possible using the autoupgrade module.

## Your feedback is important!

The beta phase is, for sure, the period of intensive testing and debugging, and you can help out. How? Check your solutions, and browse through the store's front and back office. See if what is important to you works as expected (or better!).

Here are some examples of how you can help:

* Test the new features and improvements in this version.
* If you are a module or theme developer, check if they work well with this new version.
* If you notice any problem and you think the new version causes it, please [report it on GitHub](https://github.com/PrestaShop/PrestaShop/issues/new?assignees=&labels=Bug%2CNew&template=1_bug_report.yml)).
* Don’t hesitate to [contribute to fixing bugs](https://devdocs.prestashop.com/8/contribute/contribute-pull-requests/) if you can!

**Your feedback on this beta is essential.** The more issues you report right now, the fewer issues there will be on the final release, which means fewer patch versions and fewer problems on your (or your customer’s) online store. 

**Please submit all your feedback by March 16, 2023.** If no new critical or major issue remains to be fixed by then, the first release candidate will be built and released a few days later. A subsequent beta version will be released if needed, and we will post on this blog when this happens.

If you have any questions about the version and its features, feel free to share them on [the PrestaShop project’s Slack](https://www.prestashop-project.org/slack/).

## What you can expect from PrestaShop 8.1.0
This release is not only about fixing bugs but also introduces exciting new features! To help you make the most out of this update, we have prepared a list of new features and improvements that are worth checking out and testing. From changes for merchants to developer features, there is something for everyone in this release. Let's dive in and see what users can expect from PrestaShop 8.1.

### New product page

After months of intensive work, the new version of this page is now available for all! The new product page eases many merchants' everyday tasks when managing a product catalog. Improved management of combinations, stock, and images, and a completely rebuilt multi-store workflow, are just a few of the changes featured in this version.

The changes made in the new product page are not only about merchants. Thanks to the complete rework of the page, developers have [new and powerful means to customize it](https://github.com/PrestaShop/example-modules/tree/master/demoproductform).

The new product page is now enabled by default for new shops, but can be disabled using the dedicated toggle in the “Experimental features” section. Whether it is kept on by default for the final release depends on your feedback!.

An article showing the full overview of the product page is coming soon to the build blog. For now, I recommend you [watch the demo from our last Live Update](https://youtu.be/XguCHCNlthA?t=2725).
{{< youtube id="XguCHCNlthA?start=2728" >}}

### Multiple image format generation

Version 8.1 allows users to convert existing images to WebP and the newly-supported format Avif. Images in formats other from JPEG are now saved with their appropriate extension, like .webp for WebP, .png for PNG, and so on.

This new release also introduces support for multiple image format generation, allowing browsers to choose the best format for the browser.
This feature requires some extra work to have it working on your theme. You can check [this PR from the `classic` theme](https://github.com/PrestaShop/classic-theme/pull/103) repository implementing this feature.

Please note that this feature is still considered experimental, and to access it, you must enable it through the Advanced Parameters section under the "New & Experimental Features" option.

### Manage availability labels for each combination separately

Starting from PrestaSho 8.1, users can set dedicated text informing about product availability for each combination of products. Until version 8.0, users could only set it up on the product level. PrestaShop 8.1 allows you to change it for combinations as well.

For example, a merchant selling a t-shirt in three combinations of sizes (S, M, L) can now set a different _available_later_ text for each size combination. This means they can inform customers that ordering size M will take 3 days to arrive, while size L is available on request and may take a month to deliver.

This feature is only available on the new product page.

### Better control over product availability

Another improvement worth mentioning is [the enhanced configuration for inactive products](https://github.com/PrestaShop/PrestaShop/pull/29720).
In the past, every product had a hardcoded 404 redirection setting as the default behavior. To change the behavior for all products, users would have to run a database query or go through the process manually. In PrestaShop 8.1, a new field has been added to the settings, allowing users to configure this behavior more easily by setting a default value: for example, “410 Gone” for all the inactive products. It is, of course, still possible to customize the settings for each product individually.

Users can set their desired HTTP response depending on their SEO strategy. For example, some users may want to keep sending a 200 response and keep the products indexed, while others may want to send a 410 response to tell Google to remove the product from the index.

A natural addition to these changes is one that [improved the structural data](https://github.com/PrestaShop/PrestaShop/pull/29570) for products that are not available. As of version 8.1, there is also better [control over giving orders an "On backorder" status](https://github.com/PrestaShop/PrestaShop/pull/29753).


### Improved maintenance mode

Starting from 8.1, employees can now access the front office even when maintenance mode is enabled. Previously, employees were required to provide their IP addresses to gain access to the front office during maintenance mode. It is no longer required, as you can simply allow all employees to access the front office during maintenance mode.

### Improved developer experience

#### Store profiler management from the back office

In previous versions, it was only possible to enable the profiler by manually editing a file. PrestaShop 8.1 now allows developers to enable store profiler directly from the Back office, making the process quicker and more convenient.


#### Improved Symfony service configuration

PrestaShop 8.1 simplifies Symfony service configuration for PrestaShop modules. This version makes it possible to use some popular features introduced in Symfony 3.3, such as applying a [configuration based on extended classes or implemented interfaces](https://symfony.com/blog/new-in-symfony-3-3-simpler-service-configuration#interface-based-service-configuration), [autoconfiguration](https://symfony.com/blog/new-in-symfony-3-3-simpler-service-configuration#interface-based-service-configuration), and [automatically registering classes found in specified directories as services](https://symfony.com/blog/new-in-symfony-3-3-psr-4-based-service-discovery). [It is possible to use them now!](https://github.com/PrestaShop/PrestaShop/pull/30588). Additionally, this new version also resolves the issue of [autowiring](https://symfony.com/doc/4.4/service_container/autowiring.html) not being available in the front office and WebService context.

#### Miscellaneous

As with every big release, this version includes new Hooks and many other modifications aim to improve the developer’s experience with PrestaShop. A [new page in the developer documentation is available](https://devdocs.prestashop-project.org/8/modules/core-updates/8.1/) informing about all notable changes in PrestaShop 8.1.


## Issues involved in the milestone 8.1.0
- [API : Request Endpoint `/admin-dev/new-api/hook-status` return bad HTTP Code](https://github.com/PrestaShop/PrestaShop/issues/31107)
- [API : Request Endpoint `/admin-dev/new-api/` return bad HTTP Code](https://github.com/PrestaShop/PrestaShop/issues/31106)
- [Autocomplete missing in brand input on product page v2](https://github.com/PrestaShop/PrestaShop/issues/30770)
- [[BO - Products page V2] An error appears in bulk edit combinations modal](https://github.com/PrestaShop/PrestaShop/issues/30614)
- [Improve the Product::getAttributesResume](https://github.com/PrestaShop/PrestaShop/issues/30533)
- [Administration - Addons marketplace mention should be deleted for 8.0.x and next versions](https://github.com/PrestaShop/PrestaShop/issues/30425)
- [Sanity tests are KO on develop branch](https://github.com/PrestaShop/PrestaShop/issues/30389)
- [New password policy on customer acccount page "Your personal information, The PrestaShop 8.](https://github.com/PrestaShop/PrestaShop/issues/30367)
- [{url} helper generate the supplier url without rewrite rules](https://github.com/PrestaShop/PrestaShop/issues/30341)
- [BO - Multistore - Product V2 - The image of product is not displayed when preview the product which is newly associated to a newshop](https://github.com/PrestaShop/PrestaShop/issues/30324)
- [{url} helper generate the manufacturer url without rewrite rules](https://github.com/PrestaShop/PrestaShop/issues/30313)
- [Generation of nightlies is broken on `develop` branch](https://github.com/PrestaShop/PrestaShop/issues/30285)
- [Multistore - We cannot scroll in the modal "Add new product" to disable multistore](https://github.com/PrestaShop/PrestaShop/issues/30201)
- [When AdminStats is not enabled, an exception is displayed on backoffice ](https://github.com/PrestaShop/PrestaShop/issues/30173)
- [The dateTime of new customer last visit is not displayed](https://github.com/PrestaShop/PrestaShop/issues/30155)
- [BO - Cannot download the child_classic theme from the Advanced customization page](https://github.com/PrestaShop/PrestaShop/issues/30134)
- [Incorrect number of columns when filtering in Shopping Carts page](https://github.com/PrestaShop/PrestaShop/issues/29894)
- [Configure new image format for the new image system](https://github.com/PrestaShop/PrestaShop/issues/29893)
- [[FO] Wrong datas in order return with multiple products](https://github.com/PrestaShop/PrestaShop/issues/29839)
- [BO - Bad icon display on left menu in French or another long language](https://github.com/PrestaShop/PrestaShop/issues/29826)
- [BO - Modules - Titles & subtitles are too close on any configure module's page](https://github.com/PrestaShop/PrestaShop/issues/29825)
- [APIS08 - Display the lists of authorized applications in the page “Authorization server”](https://github.com/PrestaShop/PrestaShop/issues/29810)
- [APIS07 - Add “Authorization server” in the side menu of the BO](https://github.com/PrestaShop/PrestaShop/issues/29809)
- [APIS04 - Choose an Authorization server supporting OAuth2](https://github.com/PrestaShop/PrestaShop/issues/29786)
- [APIS05 - Implement the Client Credential Grant Flow](https://github.com/PrestaShop/PrestaShop/issues/29774)
- [APIS01 - Implement a CQRS based API endpoint to allow API security testing](https://github.com/PrestaShop/PrestaShop/issues/29769)
- [Weird non-translatable french helptext on search page](https://github.com/PrestaShop/PrestaShop/issues/29761)
- [BO - Employee page - The password strength is always displayed even after cancelling the action](https://github.com/PrestaShop/PrestaShop/issues/29626)
- [BO > Stock > Movements - "Filter by period" should have a Start date previous to an End date](https://github.com/PrestaShop/PrestaShop/issues/29151)
- [BO - Bad translation or bad behavior in admin search](https://github.com/PrestaShop/PrestaShop/issues/28818)
- [Confusing button text when you want to rearrange products in the category](https://github.com/PrestaShop/PrestaShop/issues/28774)
- [Cart with wrong id_shop_group](https://github.com/PrestaShop/PrestaShop/issues/28721)
- [BO - Feature flag is enabled - Add new product from the quick access is NOK](https://github.com/PrestaShop/PrestaShop/issues/28673)
- [[FO] : Blank message from customer end must not be allow from order detail page](https://github.com/PrestaShop/PrestaShop/issues/28638)
- [Harmonize http/https check](https://github.com/PrestaShop/PrestaShop/issues/28580)
- [New method Tools::getCurrentUrl() to replace FrontController::getCurrentURL](https://github.com/PrestaShop/PrestaShop/issues/28539)
- [When accessing admin during install, we cannot know if install is well finished](https://github.com/PrestaShop/PrestaShop/issues/28499)
- [Install cannot run if there is no theme - improve error message](https://github.com/PrestaShop/PrestaShop/issues/28480)
- [Confirmation modal before disabling non native module](https://github.com/PrestaShop/PrestaShop/issues/28389)
- [error when trying to delete a file that was imported in excel format](https://github.com/PrestaShop/PrestaShop/issues/28228)
- [BO - Customers / Wrong redirection after canceling the edition of an address from the customer detail page](https://github.com/PrestaShop/PrestaShop/issues/27898)
- [BO - [Stock] An error message is displayed when editing by zero on quantity field ](https://github.com/PrestaShop/PrestaShop/issues/27866)
- [Webservice image management doesn't handle WebP](https://github.com/PrestaShop/PrestaShop/issues/27706)
- [[BO] Improve UX design for date-picker form](https://github.com/PrestaShop/PrestaShop/issues/27621)
- [Missing product name in template "order_customer_comment"](https://github.com/PrestaShop/PrestaShop/issues/27581)
- [After sort, redirect to grid at reload of the page](https://github.com/PrestaShop/PrestaShop/issues/26548)
- [BO - Categories page - Invalid category vars - An exception is displayed when Adding a category](https://github.com/PrestaShop/PrestaShop/issues/25871)
- [Shop Parameters > Search - Alias is duplicated instead of updated](https://github.com/PrestaShop/PrestaShop/issues/21884)
- [Disable automatic backorder status.](https://github.com/PrestaShop/PrestaShop/issues/21766)
- [Disabling feature in Performance doesnt hide the button in the product page](https://github.com/PrestaShop/PrestaShop/issues/21689)
- [By default, turn off the 'Erase previous images' button when regenerating thumbnails](https://github.com/PrestaShop/PrestaShop/issues/20962)
- [Add a button to be able to remove supplier & brand logos](https://github.com/PrestaShop/PrestaShop/issues/20857)
- [Be able to set a value on submit buttons](https://github.com/PrestaShop/PrestaShop/issues/20838)
- [FO - Create a customer account - Property Customer->optin is empty.](https://github.com/PrestaShop/PrestaShop/issues/20801)
- [Merchant should be able to set delivery information for each combination](https://github.com/PrestaShop/PrestaShop/issues/20536)
- [Terminology Best sellers/Best sales](https://github.com/PrestaShop/PrestaShop/issues/19643)
- [GeneratableTextType and ReductionType show help two times](https://github.com/PrestaShop/PrestaShop/issues/19547)
- [Multistore - Orders > Invoices - Add checkboxes](https://github.com/PrestaShop/PrestaShop/issues/19381)
- [Multistore - Shop Parameters > Customer Settings > Customers - Add checkboxes](https://github.com/PrestaShop/PrestaShop/issues/19365)
- [Multistore - Shop Parameters > Customer Settings > Customers - Add specific settings dropdown](https://github.com/PrestaShop/PrestaShop/issues/19317)
- [Two timezones pacific in installer](https://github.com/PrestaShop/PrestaShop/issues/14411)
- [Improve product images management in basic settings tab](https://github.com/PrestaShop/PrestaShop/issues/12773)
- [With Multistore enabled, API calls are redirected to homepage](https://github.com/PrestaShop/PrestaShop/issues/12412)
- [Wrong total and total_wt on order-confirmation with customization](https://github.com/PrestaShop/PrestaShop/issues/10912)
- [[BOOM-4214] CLONE - Problem with Modules > Positions](https://github.com/PrestaShop/PrestaShop/issues/9823)
- [[BOOM-5830] Notice in FO after deleting or deactivating image format](https://github.com/PrestaShop/PrestaShop/issues/9605)

## Download

You can download PrestaShop 8.1 beta here:

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/8.1.0-beta.1" >}}Download PrestaShop 8.1 beta now!{{< /cta >}}

## Acknowledgements

A big thank you to the **85** people who contributed to this version:

Abramo Franchetti, Alejandro Ramos, Aleksandro Sansan, Amit Kumar Tiwari, Angelo Romano, Antoine Caillet, Antonin Clauzier, Arnaud Drieux, Arťom Evsin, Boubker Bribri, Cesar Quintini, Chedly Farhani, Clotaire Renaud, Daniel Hlavacek, David Gonzalez, David Oury, dependabot[bot], Dingedi, Fabien Papet, Florine Hea, Franck Lefèvre, hendaghanmi, Hugo Posnic, Ibrahima Sow, idnovate, Igor Stępień, Jakub Łach, Javi Domenech, Jean-François Viguier, Jeremie Legrand, Jevgenij Visockij, Jonathan Danse, Jonathan Lelievre, Julius Žukauskas, Jérôme Weill, Karel Balej, Karlis Suvi, Khouloud Belguith, Korbinian Lechner, Krystian Podemski, Laurent Rousseau, leemyongpakvn, Lorenz Meyer, Mahmoud Parvazi, maniT4c, Marco Ingraiti, Marco Salvatore, Marius Gudauskis, Markus Staab, Martin Kučera, Massimo Caroccia, Mateus Shirlaw, Mathieu Ferment, Matthieu Rolland, Maxime Flasquin, Michał Kaleta, Mickaël Fernandez, Naveen Srinivasan, Nesrine Abdmouleh, Nicolas Lœuillet, okom3pom, Pablo Borowicz, Paul Coudeville, Pierre-Yves Christmann, Prestaplugins, Prestasafe, Prestaworks, PrestonBot, PululuK, Rafał Miłecki, Roman Kotyra, Salim Benouamer, Simone, SLRkingRing, Store Commander dev team, Sébastien Alfaiate, Tanguy JACQUET, Thomas Baccelli, Thomas Nabord, Thomas Nares, Tom Combet, Tuni-Soft, Valentin Szczupak, Yani Makouf, Òscar Casajuana

...and a warm welcome to the **34** of them who contributed for the first time!

We would also like to thank the people who contributed besides the code:
- Product management: Eshane Rawat, Fabien Vallon, and Mateus Shirlaw.
- Quality assurance: Aurélien Rita, Faten Mhiri, Florine Hea, Hajer Elleuch, Hana Rebat, Hibatallah Aouadni, Ines Sallemi, Khouloud Belguith, Paul-Noël Cholot, Robin Fischer, Sarah Dib and Serhii Zavadskyi.
- UX design: Scott Cosio and Tristan Lehot.
- Wording management and proofreading: Lea Delin, Julie Varisellaz, and Patrick Coffre.




