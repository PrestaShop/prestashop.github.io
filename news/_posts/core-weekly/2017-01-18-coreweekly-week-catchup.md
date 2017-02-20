---
layout: post
title:  "PrestaShop Core Weekly - 'Catching up' edition for January 2017"
subtitle: "An inside look at the PrestaShop codebase"
date:   2017-01-18 09:10:11
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the few preceeding weeks, from Monday 15th of October 2016 to to Sunday 15th of January 2017.

Yup, it's been 11 weeks since we last published this Weekly report. The idea was to get it half-automated, and the script is finaly coming to fruition. so let's go, we've got some catching up to do!


## General messages

Since mid-October, a good many good things happened around here:

* [We released PrestaShop 1.7.0.0, of course](http://build.prestashop.com/news/prestashop-1-7-0-0-released/)! 
* We released 4 patch versions of PrestaShop 1.7. The latest is [v1.7.0.4, released on January 10th, 2017](http://build.prestashop.com/news/prestashop-1704-maintenance-release/).
* PrestaShop 1.6 was not forgotten! It received 4 patch versions. The latest is [v1.6.1.11, released on January 16th, 2017](http://build.prestashop.com/news/prestashop-1-6-1-11-maintenance-release/).
* There were several interesting articles:

  * [The Integration Fund explained by the team and its contributors](http://build.prestashop.com/news/integration_fund_explained/)
  * [PrestonBot has reached stable version](http://build.prestashop.com/news/prestonbot-reaches-stable-version/)
  * [User tests are not enough](http://build.prestashop.com/news/user-tests-are-not-enough/)
  * [Paying tribute to our community of translators](http://build.prestashop.com/news/prestashop-translators/)
  * [How to contribute to the User Guide and help translate it](http://build.prestashop.com/howtos/translation/how-to-contribute-and-translate-the-user-documentation/)
  * [Our plans for the Starter Theme](http://build.prestashop.com/news/starter-theme-plans/)

* I went on a honeymoon :)

Go make sure you read them all, then come back here for more -- I'll wait :)

Done? Great! Now let's dive into the details!


## Code changes in 'develop' branch (for version 1.7.1.0)

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

Note that 1.7 patch versions are being built in the '1.7.0.x' branch. All of the PRs from that branch are ported in the 'develop' branch.


### Front office (including the default theme, named "Classic", based upon the [Starter Theme](https://github.com/PrestaShop/StarterTheme))

* [#7104](https://github.com/PrestaShop/PrestaShop/pull/7104): FO: Add missing translation keys in home slider. Thank you @shakaran!
* [#7166](https://github.com/PrestaShop/PrestaShop/pull/7166): Fix total products label. Thank you @Amazzing!
* [#7170](https://github.com/PrestaShop/PrestaShop/pull/7170): Fix classic's override of ps\_imageslider, by @antoin-m.
* [#7182](https://github.com/PrestaShop/PrestaShop/pull/7182): Remove useless vars display\_column\_*, by @antoin-m.
* [#7199](https://github.com/PrestaShop/PrestaShop/pull/7199): Fix "There is 0 product." label. Thank you @Amazzing!
* [#7202](https://github.com/PrestaShop/PrestaShop/pull/7202): Fix order return format in OrderReturnPresenter, by @antoin-m.
* [#7243](https://github.com/PrestaShop/PrestaShop/pull/7243): Add "quick_view" block to classic theme. Thank you @prestamodule!
* [#7247](https://github.com/PrestaShop/PrestaShop/pull/7247): Fix search bar icon display, by @antoin-m.
* [#7259](https://github.com/PrestaShop/PrestaShop/pull/7259): Fix missing displayNavFullWidth into checkout. Thank you @prestamodule!
* [#7264](https://github.com/PrestaShop/PrestaShop/pull/7264): Display Add to cart button in product listing. Thank you @martinfojtik!
* [#7297](https://github.com/PrestaShop/PrestaShop/pull/7297): Fix clean filter event handler, by @thierrymarianne.
* [#7314](https://github.com/PrestaShop/PrestaShop/pull/7314): Integrate forgotten password alerts, by @thierrymarianne.
* [#7323](https://github.com/PrestaShop/PrestaShop/pull/7323): Fix fatal when requesting product refresh without product id in cart, by @maximebiloe.
* [#7329](https://github.com/PrestaShop/PrestaShop/pull/7329): Fix arrow click & position, by @aleeks.


### Back office

* [#7067](https://github.com/PrestaShop/PrestaShop/pull/7067): Disable checkout button when no product in the cart, by @fatmaBouchekoua.
* [#7071](https://github.com/PrestaShop/PrestaShop/pull/7071): Add hints on some category fields, by @antoin-m.
* [#7076](https://github.com/PrestaShop/PrestaShop/pull/7076): Add external libraries, by @aleeks.
* [#7098](https://github.com/PrestaShop/PrestaShop/pull/7098): Removed sensor parameter from Google Maps JS API, by @aleeks.
* [#7100](https://github.com/PrestaShop/PrestaShop/pull/7100): Add some more translation domains to controllers, by @AlexEven.
* [#7115](https://github.com/PrestaShop/PrestaShop/pull/7115): Fix "Other translations" save action, by @antoin-m.
* [#7136](https://github.com/PrestaShop/PrestaShop/pull/7136): Fixed search and redirection to module, by @mickaelandrieu.
* [#7171](https://github.com/PrestaShop/PrestaShop/pull/7171): Fix rights issues on legacy module page, by @Quetzacoalt91.
* [#7174](https://github.com/PrestaShop/PrestaShop/pull/7174): Fix warning on BO, by @aleeks.
* [#7175](https://github.com/PrestaShop/PrestaShop/pull/7175): Test admin controllers, by @thierrymarianne.
* [#7180](https://github.com/PrestaShop/PrestaShop/pull/7180): Fixed "new client" column in orders list, by @aleeks.
* [#7188](https://github.com/PrestaShop/PrestaShop/pull/7188): Add text format selector to TinyMCE. Thank you @kpodemski!
* [#7196](https://github.com/PrestaShop/PrestaShop/pull/7196): BO: Update keyboard shortcut in product page for preview, by @AntoineMille.
* [#7204](https://github.com/PrestaShop/PrestaShop/pull/7204): Fix import information display, by @antoin-m.
* [#7210](https://github.com/PrestaShop/PrestaShop/pull/7210): Fix date filter on dashboard when entering BO, by @aleeks.
* [#7215](https://github.com/PrestaShop/PrestaShop/pull/7215): TinyMCE media plugin shouldn't be activated twice, by @antoin-m.
* [#7229](https://github.com/PrestaShop/PrestaShop/pull/7229): Do not check module download on upgrade, by @Quetzacoalt91.
* [#7230](https://github.com/PrestaShop/PrestaShop/pull/7230): Change PS color for tinymce, by @aleeks.
* [#7236](https://github.com/PrestaShop/PrestaShop/pull/7236): Partial refund tax method always tax incl., by @aleeks.
* [#7238](https://github.com/PrestaShop/PrestaShop/pull/7238): Harmonize wording cms.xml tab.xml, by @aleeks.
* [#7251](https://github.com/PrestaShop/PrestaShop/pull/7251): Fix quick links with apostrophes, by @antoin-m.
* [#7254](https://github.com/PrestaShop/PrestaShop/pull/7254): Add redirect to category for product not available, by @aleeks.
* [#7260](https://github.com/PrestaShop/PrestaShop/pull/7260): Set product image container to static position, by @thierrymarianne.
* [#7270](https://github.com/PrestaShop/PrestaShop/pull/7270): Add number of selected images in edit combination page, by @fatmaBouchekoua.
* [#7280](https://github.com/PrestaShop/PrestaShop/pull/7280): Change locales json, by @aleeks.
* [#7281](https://github.com/PrestaShop/PrestaShop/pull/7281): Module action template can now be used everywhere, by @Quetzacoalt91.
* [#7282](https://github.com/PrestaShop/PrestaShop/pull/7282): Fix selection of boolean option, by @thierrymarianne.
* [#7287](https://github.com/PrestaShop/PrestaShop/pull/7287): Add counter to the inputs, by @AntoineMille.
* [#7308](https://github.com/PrestaShop/PrestaShop/pull/7308): Add version to help api feedback, by @aleeks.
* [#7320](https://github.com/PrestaShop/PrestaShop/pull/7320): Only display the module you want to translate, by @maximebiloe.
* [#7330](https://github.com/PrestaShop/PrestaShop/pull/7330): Fix email translation edit when file doesn't exist, by @aleeks.
* [#7341](https://github.com/PrestaShop/PrestaShop/pull/7341): Update version on profile configuration page, by @AntoineMille.


### Core

* [#7069](https://github.com/PrestaShop/PrestaShop/pull/7069): Protect translations display against XSS injections, by @aleeks.
* [#7081](https://github.com/PrestaShop/PrestaShop/pull/7081): Fixed CORS setting the header. Thank you @drAlberT!
* [#7093](https://github.com/PrestaShop/PrestaShop/pull/7093): Move entity repositories in existing subfolder, by @Quetzacoalt91.
* [#7095](https://github.com/PrestaShop/PrestaShop/pull/7095): Add Reply-To recipient name to Mail::send(). Thank you @mcdado!
* [#7096](https://github.com/PrestaShop/PrestaShop/pull/7096): Use english email template as fallback in getEmailTemplateContent, by @maximebiloe.
* [#7108](https://github.com/PrestaShop/PrestaShop/pull/7108): Fix unregisteration of JavaScript by ID. Thank you @prestamodule!
* [#7109](https://github.com/PrestaShop/PrestaShop/pull/7109): Fix unregisteration of Stylesheet by ID. Thank you @prestamodule!
* [#7111](https://github.com/PrestaShop/PrestaShop/pull/7111): Fix notice on $currency_to which may be null. Thank you @Simonchik!
* [#7142](https://github.com/PrestaShop/PrestaShop/pull/7142): Replace specific cache management with doctrine cache for module catalog, by @Quetzacoalt91.
* [#7157](https://github.com/PrestaShop/PrestaShop/pull/7157): Be able to send an e-mail with multiple BCC. Thank you @Flowster!
* [#7163](https://github.com/PrestaShop/PrestaShop/pull/7163): Enable the cart rule feature when updating one if it's enabled. Thank you @idnovate!
* [#7164](https://github.com/PrestaShop/PrestaShop/pull/7164): Update Mail::send documentation. Thank you @mcdado!
* [#7176](https://github.com/PrestaShop/PrestaShop/pull/7176): Set size limits on Doctrine Translation entity. Thank you @firstred!
* [#7177](https://github.com/PrestaShop/PrestaShop/pull/7177): Doctrine optimizations. Thank you @firstred!
* [#7178](https://github.com/PrestaShop/PrestaShop/pull/7178): Use ModuleZipManager for addons downloads, by @Quetzacoalt91.
* [#7183](https://github.com/PrestaShop/PrestaShop/pull/7183): Add app/config/config.php to gitignore, by @antoin-m.
* [#7194](https://github.com/PrestaShop/PrestaShop/pull/7194): Fix issue on translations without params, by @Quetzacoalt91.
* [#7211](https://github.com/PrestaShop/PrestaShop/pull/7211): Add missing SQL alias, by @antoin-m.
* [#7222](https://github.com/PrestaShop/PrestaShop/pull/7222): Fixed method Order::isVirtual, by @maximebiloe.
* [#7225](https://github.com/PrestaShop/PrestaShop/pull/7225): Fix missing subfolder in Repository namespace, by @Quetzacoalt91.
* [#7235](https://github.com/PrestaShop/PrestaShop/pull/7235): Fix getImageLink for watermark module, by @aleeks.
* [#7237](https://github.com/PrestaShop/PrestaShop/pull/7237): Fix pack price calc when using non-default attributes, by @aleeks.
* [#7241](https://github.com/PrestaShop/PrestaShop/pull/7241): Add native email missing, by @aleeks.
* [#7255](https://github.com/PrestaShop/PrestaShop/pull/7255): Remove hardcoded version from help links, by @Quetzacoalt91.
* [#7257](https://github.com/PrestaShop/PrestaShop/pull/7257): Impossible to uninstall module when overridden file is missing. Thank you @psandmore!
* [#7265](https://github.com/PrestaShop/PrestaShop/pull/7265): Product.php optimization if not $id_cart. Thank you @psandmore!
* [#7298](https://github.com/PrestaShop/PrestaShop/pull/7298): Add file line number where the error occured. Thank you @psandmore!
* [#7311](https://github.com/PrestaShop/PrestaShop/pull/7311): Introduce new hooks filtered & use it for product/category/brand/supplier/cms & html content, by @aleeks.
* [#7313](https://github.com/PrestaShop/PrestaShop/pull/7313): Add actionSearch hook on ProductSearchProvider, by @aleeks.
* [#7321](https://github.com/PrestaShop/PrestaShop/pull/7321): Improved translator performances, by @mickaelandrieu.
* [#7328](https://github.com/PrestaShop/PrestaShop/pull/7328): Fix store image & implement generation, by @aleeks.


### Installer

* [#7064](https://github.com/PrestaShop/PrestaShop/pull/7064): Install.txt file & documentation link update, by @aleeks.
* [#7082](https://github.com/PrestaShop/PrestaShop/pull/7082): Small fixes for installer, by @Quetzacoalt91.
* [#7083](https://github.com/PrestaShop/PrestaShop/pull/7083): Updated tabs in FR, by @AlexEven.
* [#7085](https://github.com/PrestaShop/PrestaShop/pull/7085): Update configuration.xml in SV, by @aleeks.
* [#7138](https://github.com/PrestaShop/PrestaShop/pull/7138): Fix wrong extension in the install.txt. Thank you @PrestanceDesign!
* [#7283](https://github.com/PrestaShop/PrestaShop/pull/7283): Do not launch install wizard if no write access to the cache folder, by @Quetzacoalt91.
* [#7302](https://github.com/PrestaShop/PrestaShop/pull/7302): Refacto 1.7.1.0.sql & remove 1.7.1.x.sql, by @aleeks.
* [#7306](https://github.com/PrestaShop/PrestaShop/pull/7306): Add installed modules to quick access, by @aleeks.


### Tests

* [#7145](https://github.com/PrestaShop/PrestaShop/pull/7145): Use preview environment of travis, by @Quetzacoalt91.
* [#7220](https://github.com/PrestaShop/PrestaShop/pull/7220): Remove old stuff in travis content, by @Quetzacoalt91.
* [#7245](https://github.com/PrestaShop/PrestaShop/pull/7245): Make the travis script easier to read, by @Quetzacoalt91.

See all the PRs merged into the 'develop' codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20merged%3A2016-10-24..2017-01-15%20is%3Aclosed%20base%3Adevelop%20sort%3Acreated-asc%20).


## Code changes in '1.6.1.x' branch (for 1.6 patch versions) 

And now, the merged pull-requests on the ['1.6.1.x' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!


### Front office

* [#4344](https://github.com/PrestaShop/PrestaShop/pull/4344): Re-instate default id for product list. Thank you @tucinfo!
* [#4487](https://github.com/PrestaShop/PrestaShop/pull/4487): Accessory product names are not the product name (Schema.org). Thank you @dkarvounaris!
* [#5154](https://github.com/PrestaShop/PrestaShop/pull/5154): Removed sensor parameter from Google Maps JS API. Thank you @gwarnants!
* [#5156](https://github.com/PrestaShop/PrestaShop/pull/5156): Removed sensor parameter from Google Maps JS API. Thank you @gwarnants!
* [#5503](https://github.com/PrestaShop/PrestaShop/pull/5503): Missing IF for HOOK\_PRODUCT\_TAB. Thank you @ZiZuu-store!
* [#5504](https://github.com/PrestaShop/PrestaShop/pull/5504): Fixed duplicated ID in pagination. Thank you @ZiZuu-store!
* [#5594](https://github.com/PrestaShop/PrestaShop/pull/5594): Remove pagination override in ManufacturersController. Thank you @icedocemile!
* [#5969](https://github.com/PrestaShop/PrestaShop/pull/5969): Fixed the default country every time the address form is submitted. Thank you @Rolige!
* [#6225](https://github.com/PrestaShop/PrestaShop/pull/6225): Fixed bug when adding to cart from a page with different token. Thank you @idnovate!
* [#6835](https://github.com/PrestaShop/PrestaShop/pull/6835): Reset country in address page after error. Thank you @mcdado!
* [#6869](https://github.com/PrestaShop/PrestaShop/pull/6869): Removed search param orderway duplication. Thank you @sarjon!


### Back office

* [#5333](https://github.com/PrestaShop/PrestaShop/pull/5333): Fix admin email translations. Thank you @gskema!
* [#5723](https://github.com/PrestaShop/PrestaShop/pull/5723): Don't trim() the $\_POST values if it's an array. Thank you @axometeam!
* [#6073](https://github.com/PrestaShop/PrestaShop/pull/6073): Fixed bug when prestashop xml md5 is not valid. Thank you @tonyyb!
* [#6749](https://github.com/PrestaShop/PrestaShop/pull/6749): Fix synchronous loaded scripts, by @Shudrum.
* [#6827](https://github.com/PrestaShop/PrestaShop/pull/6827): Orders amount currency fixed. Thank you @Casper-O!
* [#7005](https://github.com/PrestaShop/PrestaShop/pull/7005): Harmonize wording tab.xml. Thank you @Nobodaddy!
* [#7059](https://github.com/PrestaShop/PrestaShop/pull/7059): Display mcrypt extension warning fix. Thank you @hubiktomas!
* [#7099](https://github.com/PrestaShop/PrestaShop/pull/7099): Fixed product customization duplication, by @aleeks.
* [#7103](https://github.com/PrestaShop/PrestaShop/pull/7103): Fix grid view payment methods on small devices. Thank you @thecb1!
* [#7179](https://github.com/PrestaShop/PrestaShop/pull/7179): Fixed category search in product association tab. Thank you @Uebix!
* [#7209](https://github.com/PrestaShop/PrestaShop/pull/7209): Fix date filter when entering BO, by @aleeks.
* [#7213](https://github.com/PrestaShop/PrestaShop/pull/7213): Fix & optimize search::find queries, by @aleeks.
* [#7217](https://github.com/PrestaShop/PrestaShop/pull/7217): Remove synchronous javascript call in translations, by @antoin-m.

 
### Core

* [#5511](https://github.com/PrestaShop/PrestaShop/pull/5511): Performance opt on scandir() usage. Thank you @ZiZuu-store!
* [#5560](https://github.com/PrestaShop/PrestaShop/pull/5560): Cast id\_cart to int to keep it in the SQL query. Thank you @roja45!
* [#6128](https://github.com/PrestaShop/PrestaShop/pull/6128): Fix misuse of getimagesize returned informations. Thank you @olivier-monaco!
* [#6207](https://github.com/PrestaShop/PrestaShop/pull/6207): Can't get original picture link if watermark is enable. Thank you @Shagshag!
* [#6819](https://github.com/PrestaShop/PrestaShop/pull/6819): Fixed method Order::isVirtual. Thank you @debuss!
* [#6915](https://github.com/PrestaShop/PrestaShop/pull/6915): Fix for MySQL error 1093 in generating the invoice number. Thank you @ventuc!
* [#7006](https://github.com/PrestaShop/PrestaShop/pull/7006): Harmonize wording cms.xml. Thank you @Nobodaddy!
* [#7036](https://github.com/PrestaShop/PrestaShop/pull/7036): Fix pack price calc when using non-default attributes. Thank you @firstred!
* [#7092](https://github.com/PrestaShop/PrestaShop/pull/7092): Update Mail::Send() doc comment. Thank you @mcdado!
* [#7117](https://github.com/PrestaShop/PrestaShop/pull/7117): Fixed some ASM problems, by @aleeks.
* [#7155](https://github.com/PrestaShop/PrestaShop/pull/7155): Uploader helper multiple files undefined \_max\_files. Thank you @gabdara!
* [#7167](https://github.com/PrestaShop/PrestaShop/pull/7167): Fix detection of APCu on Performance page, by @maximebiloe.
* [#7219](https://github.com/PrestaShop/PrestaShop/pull/7219): Fix multiple configuration entry for PERCENT\_PRODUCT\_OUT\_OF\_STOCK\_EXPIRE, by @julienbourdeau.
* [#7232](https://github.com/PrestaShop/PrestaShop/pull/7232): PHP 7.1 Fatal error: operator not supported in DbQuery.php. Thank you @remotehelp!


### Installer

* [#7084](https://github.com/PrestaShop/PrestaShop/pull/7084): Update configuration.xml in SV, by @aleeks.


See all the PRs merged into the '1.6.1.x' codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+is%3Amerged+merged%3A2016-10-23..2017-01-15+base%3A1.6.1.x+sort%3Acreated-asc).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @amazzing, @axometeam, @casper-o, @debuss, @dkarvounaris, @dralbert, @firstred, @flowster, @gabdara, @gskema, @gwarnants, @hubiktomas, @icedocemile, @idnovate, @kpodemski, @martinfojtik, @mcdado, @nobodaddy, @olivier-monaco, @prestamodule, @prestancedesign, @psandmore, @remotehelp, @roja45, @rolige, @sarjon, @shagshag, @shakaran, @simonchik, @thecb1, @tonyyb, @tucinfo, @uebix, @ventuc, and @zizuu-store!

Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/browse/BOOM/?selectedTab=com.atlassian.jira.jira-projects-plugin:summary-panel)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
