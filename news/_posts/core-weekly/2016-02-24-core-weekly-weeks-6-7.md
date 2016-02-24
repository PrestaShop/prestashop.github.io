---
layout: post
title:  "PrestaShop Core Weekly - Weeks 6 & 7"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-02-24 19:37:41
author: xavierborderie
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last two weeks, from Monday 8th to Sunday 21st of February 2016.


## Milestones

We reached PR number 5000! Congrats to the whole community! \o/

The team is hard at work on PrestaShop 1.7, the next major version of the most complete e-commerce software solution there is. You can find an up-to-date thread about it [in the forum](https://www.prestashop.com/forums/topic/480580-want-to-know-more-about-17/).

_Please note that finishing the [planned projects for 1.7](http://build.prestashop.com/news/meet-prestashop-team-prestashop-1-7/) and delivering a quality beta version soon is at the moment the top priority for the PrestaShop Core developers. Merging community pull requests has therefore slowed down until then, but will be back_ with a vengeance _once we have a first beta to release to you! So please keep testing, and keep sending patches our way: it's the_ raison d'être _of this community project!_

Do you want to encourage us? **[Give us a star on GitHub](https://github.com/PrestaShop/PrestaShop)**! :)


## Code changes in 1.7.0.0-develop

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!


### Text changes

 * [4352](https://github.com/PrestaShop/PrestaShop/pull/4352): Missing translation in shipping tab content. Thank you @jorgevrgs!
 * [4653](https://github.com/PrestaShop/PrestaShop/pull/4653): Fix robots.txt typo. Thank you @firstred.
 * [4934](https://github.com/PrestaShop/PrestaShop/pull/4934): There's no BAN,only Zuul... err, EAN!, by @xBorderie.
 * [4996](https://github.com/PrestaShop/PrestaShop/pull/4996): Improve Dutch meta info. Thank you @firstred!
 

### Product page

 * [4904](https://github.com/PrestaShop/PrestaShop/pull/4904): Read more popin ID unique on recommended modules / Product page, by @xGouley.
 * [4912](https://github.com/PrestaShop/PrestaShop/pull/4912): Improve product page design, by @nihco2.
 * [4923](https://github.com/PrestaShop/PrestaShop/pull/4923): Fix add a category from product form, by @maximebiloe.
 * [4924](https://github.com/PrestaShop/PrestaShop/pull/4924): Improve product form link rewrite, by @kelu95.
 * [4927](https://github.com/PrestaShop/PrestaShop/pull/4927): fixed notice on product with no variants, by @djfm.
 * [4930](https://github.com/PrestaShop/PrestaShop/pull/4930): Made pack products available to template, by @djfm.
 * [4944](https://github.com/PrestaShop/PrestaShop/pull/4944): modify tax rule on first tab on product page, by @xGouley.
 * [4947](https://github.com/PrestaShop/PrestaShop/pull/4947): apply new theme on product form step1, by @kelu95.
 * [4948](https://github.com/PrestaShop/PrestaShop/pull/4948): Security patch for URL injection on product catalog page, by @xGouley.
 * [4953](https://github.com/PrestaShop/PrestaShop/pull/4953): apply new theme on product form step2, by @kelu95.
 * [4957](https://github.com/PrestaShop/PrestaShop/pull/4957): UI Kit integration, by @Shudrum.
 * [4936](https://github.com/PrestaShop/PrestaShop/pull/4936): product pack redesign, by @nihco2.
 * [4970](https://github.com/PrestaShop/PrestaShop/pull/4970): UI Kit integration & some JS fixes, by @kelu95.
 * [4971](https://github.com/PrestaShop/PrestaShop/pull/4971): fix pagination on quick nav on product form, by @kelu95.
 * [4977](https://github.com/PrestaShop/PrestaShop/pull/4977): Fix broken JS behaviors on catalog page, by @xGouley.
 * [4983](https://github.com/PrestaShop/PrestaShop/pull/4983): product form title standardization, by @kelu95.
 * [4985](https://github.com/PrestaShop/PrestaShop/pull/4985): button icons on catalog product page, by @xGouley.
 * [4987](https://github.com/PrestaShop/PrestaShop/pull/4987): re-add side actions on product catalog (export, import, sql), by @xGouley.
 * [4988](https://github.com/PrestaShop/PrestaShop/pull/4988): apply select2 on lang switcher, by @kelu95.
 * [5007](https://github.com/PrestaShop/PrestaShop/pull/5007): shortcut to create product from catalog, by @xGouley.
 * [5008](https://github.com/PrestaShop/PrestaShop/pull/5008): Fix quick nav pagination when only 1 page available, by @xGouley.
 
 
### Modules page

 * [4883](https://github.com/PrestaShop/PrestaShop/pull/4883): Module Page BO, fixes and improvements, by @tchauviere.
 * [4911](https://github.com/PrestaShop/PrestaShop/pull/4911): fix layout/header/menu selection, by @kelu95.
 * [4916](https://github.com/PrestaShop/PrestaShop/pull/4916): Add category block and pagination design, by @djfm.
 * [4918](https://github.com/PrestaShop/PrestaShop/pull/4918): Modules card actions in js and product page event integration, by @xGouley.
 * [4932](https://github.com/PrestaShop/PrestaShop/pull/4932): Module page graphical fixes, by @Quetzacoalt91.
 * [4935](https://github.com/PrestaShop/PrestaShop/pull/4935): Module Upload on BO page, by @tchauviere.
 * [4952](https://github.com/PrestaShop/PrestaShop/pull/4952): More stable BO Page since UI integrations, by @tchauviere.
 * [4954](https://github.com/PrestaShop/PrestaShop/pull/4954): Implement new UI kit on module page, by @Quetzacoalt91.
 * [4964](https://github.com/PrestaShop/PrestaShop/pull/4964): Fix missing $.growl and new UI integration, by @Quetzacoalt91.
 * [4968](https://github.com/PrestaShop/PrestaShop/pull/4968): Fixes for BO Module page related to new UI integration, by @tchauviere.
 * [4994](https://github.com/PrestaShop/PrestaShop/pull/4994): get username_addons of $addonsEmail var. Thank you @PrestaEdit!
 * [4998](https://github.com/PrestaShop/PrestaShop/pull/4998): Multiple fixes on BO Module page, by @tchauviere.
 * [4999](https://github.com/PrestaShop/PrestaShop/pull/4999): Remove unecessary calls on JS and CSS files in module page, by @Quetzacoalt91.
 * [5018](https://github.com/PrestaShop/PrestaShop/pull/5018): Fix bad dependency injection on module upgrade, by @tchauviere.
 * [5026](https://github.com/PrestaShop/PrestaShop/pull/5026): More improvements on module page !, by @Quetzacoalt91.
 * [5046](https://github.com/PrestaShop/PrestaShop/pull/5046): UI and JS improvements on Module Page in BO, by @tchauviere.
 

### Front office (default theme)

 * [4903](https://github.com/PrestaShop/PrestaShop/pull/4903): postcss-flexibility was missing in devDependencies, by @djfm.
 * [4907](https://github.com/PrestaShop/PrestaShop/pull/4907): Add New hook display after opening body tag (usefull for mktg tag). Thank you @prestarocket!
 * [4909](https://github.com/PrestaShop/PrestaShop/pull/4909): the cart summary is updated according to delivery costs, by @djfm.
 * [4914](https://github.com/PrestaShop/PrestaShop/pull/4914): Cart modal is displayed when adding product from product sheet, by @djfm.
 * [4933](https://github.com/PrestaShop/PrestaShop/pull/4933): Include meta info used by some social nets, by @djfm.
 * [4936](https://github.com/PrestaShop/PrestaShop/pull/4936): correct class in addresses block. Thank you @prestarocket!
 * [4938](https://github.com/PrestaShop/PrestaShop/pull/4938): theme has a left column on category page, by @djfm.
 * [4943](https://github.com/PrestaShop/PrestaShop/pull/4943): add to cart modal, by @nihco2.
 * [4949](https://github.com/PrestaShop/PrestaShop/pull/4949): Customers can log-in from checkout page, by @djfm.
 * [4950](https://github.com/PrestaShop/PrestaShop/pull/4950): make the order available in order confirmation step, by @mickaelandrieu.
 * [4958](https://github.com/PrestaShop/PrestaShop/pull/4958): Use a PNG logo for Classic, by @maximebiloe.
 * [4960](https://github.com/PrestaShop/PrestaShop/pull/4960): Checkout form CSS, by @mmoustai.
 * [4961](https://github.com/PrestaShop/PrestaShop/pull/4961): Update contact form, client area according to new guidelines, by @ishcherbakov.
 * [4969](https://github.com/PrestaShop/PrestaShop/pull/4969): 404 page, by @ishcherbakov.
 * [4972](https://github.com/PrestaShop/PrestaShop/pull/4972): search block should not be available in 404, by @mickaelandrieu.
 * [4973](https://github.com/PrestaShop/PrestaShop/pull/4973): Implement social sharing design, by @nihco2.
 * [4978](https://github.com/PrestaShop/PrestaShop/pull/4978): Add shopping cart, by @maximebiloe.
 * [4980](https://github.com/PrestaShop/PrestaShop/pull/4980): classic: design improvements, by @nihco2.
 * [4986](https://github.com/PrestaShop/PrestaShop/pull/4986): Checkout cleanup, by @ishcherbakov.
 * [5009](https://github.com/PrestaShop/PrestaShop/pull/5009): 'all products' link belongs outside the flex container, by @djfm.
 * [5010](https://github.com/PrestaShop/PrestaShop/pull/5010): define image type in theme.yml, by @maximebiloe.
 * [5013](https://github.com/PrestaShop/PrestaShop/pull/5013): Cart summary redesign, by @nihco2.
 * [5024](https://github.com/PrestaShop/PrestaShop/pull/5024): hook blockmyaccount to the footer, by @djfm.
 * [5025](https://github.com/PrestaShop/PrestaShop/pull/5025): redesign checkout address step, by @nihco2.
 * [5028](https://github.com/PrestaShop/PrestaShop/pull/5028): Complete address boxes design, by @nihco2.
 * [5031](https://github.com/PrestaShop/PrestaShop/pull/5031): Ajax in cart-detailed and cart-summary, by @maximebiloe.
 * [5034](https://github.com/PrestaShop/PrestaShop/pull/5034): design delivery step, by @nihco2.
 * [5036](https://github.com/PrestaShop/PrestaShop/pull/5036): blockmyaccount wording, by @maximebiloe.
 * [5038](https://github.com/PrestaShop/PrestaShop/pull/5038): Hook displayReassurance, by @maximebiloe.
 * [5039](https://github.com/PrestaShop/PrestaShop/pull/5039): Fix checkout process, by @maximebiloe.
 * [5045](https://github.com/PrestaShop/PrestaShop/pull/5045): Fix address form and hp, by @nihco2.
 
 
### UI Kit

 * [4937](https://github.com/PrestaShop/PrestaShop/pull/4937): New pages theme with Bootstrap 4 & PrestaShop UI Kit, by @Shudrum and @kelu95.

 
### Back office

 * [4928](https://github.com/PrestaShop/PrestaShop/pull/4928): fix getadminlink that generate php error if called from front, by @kelu95.
 * [4929](https://github.com/PrestaShop/PrestaShop/pull/4929): disable configuration for dashboard demo mode, by @kelu95.
 * [4967](https://github.com/PrestaShop/PrestaShop/pull/4967): New KPI style for the new theme, by @Shudrum.
 * [4997](https://github.com/PrestaShop/PrestaShop/pull/4997): Remove node_modules direct link using Webpack, by @Shudrum.
 * [5022](https://github.com/PrestaShop/PrestaShop/pull/5022): Small fixes for module page header, by @Quetzacoalt91.
 * [5033](https://github.com/PrestaShop/PrestaShop/pull/5033): Added new tab system with yaml for SF2 architecture, by @tchauviere.


### Core

 * [4470](https://github.com/PrestaShop/PrestaShop/pull/4470): Added zip extension as requirement, by @mickaelandrieu.
 * [4638](https://github.com/PrestaShop/PrestaShop/pull/4638): Add missing variable declarations in ProductController. Thank you @mcdado!
 * [4730](https://github.com/PrestaShop/PrestaShop/pull/4730): Implement monolog for app logging, by @Quetzacoalt91.
 * [4770](https://github.com/PrestaShop/PrestaShop/pull/4770): display the prefered modules popin, by @mickaelandrieu.
 * [4902](https://github.com/PrestaShop/PrestaShop/pull/4902): Use classic and not StarterTheme, by @maximebiloe.
 * [4917](https://github.com/PrestaShop/PrestaShop/pull/4917): Use available_now message, by @djfm.
 * [4926](https://github.com/PrestaShop/PrestaShop/pull/4926): Refactor theme system, by @mickaelandrieu.
 * [4939](https://github.com/PrestaShop/PrestaShop/pull/4939): Rename translator call function, by @mmoustai.
 * [4940](https://github.com/PrestaShop/PrestaShop/pull/4940): Add npm post install script, by @Shudrum.
 * [4942](https://github.com/PrestaShop/PrestaShop/pull/4942): ThemeRepository should only use json configuration file when available, by @mickaelandrieu.
 * [4945](https://github.com/PrestaShop/PrestaShop/pull/4945): Updated presenters for "Add to cart" scenario, by @mickaelandrieu.
 * [4959](https://github.com/PrestaShop/PrestaShop/pull/4959): put theme json configuration file into config/themes, by @mickaelandrieu.
 * [4990](https://github.com/PrestaShop/PrestaShop/pull/4990): Fix undefined getThemeList, by @maximebiloe.
 * [5001](https://github.com/PrestaShop/PrestaShop/pull/5001): Replaced logical operators. Thank you, @Newman101!
 * [5003](https://github.com/PrestaShop/PrestaShop/pull/5003): Do not overwrite module on theme install, by @maximebiloe.
 * [5004](https://github.com/PrestaShop/PrestaShop/pull/5004): Fix some URLs without friendly URLs, by @maximebiloe.
 * [5019](https://github.com/PrestaShop/PrestaShop/pull/5019): Replaced one more logical operator. Thank you, @Newman101!
 * [5049](https://github.com/PrestaShop/PrestaShop/pull/5049): Move generator-bundle from dev to prod deps, by @julienbourdeau.

 
### Installer

 * [4919](https://github.com/PrestaShop/PrestaShop/pull/4919): add better error management for SF2 CLI schema update, by @kelu95.
 * [4962](https://github.com/PrestaShop/PrestaShop/pull/4962): dd write permission on app/config folder, by @kelu95.
 * [4975](https://github.com/PrestaShop/PrestaShop/pull/4975): Change permissions on config/theme for installer, by @tchauviere.
 * [4981](https://github.com/PrestaShop/PrestaShop/pull/4981): Check if apache mod_rewrite is enabled, by @kelu95.
 * [5006](https://github.com/PrestaShop/PrestaShop/pull/5006): Temporary fix windows php.ini conf error, by @kelu95.
 * [5027](https://github.com/PrestaShop/PrestaShop/pull/5027): Webpack normalization and remove the tests install from the npm install, by @Shudrum.

 
### Tests

 * [4965](https://github.com/PrestaShop/PrestaShop/pull/4965): isVisible doesn't throw, false positive , by @djfm.
 * [5047](https://github.com/PrestaShop/PrestaShop/pull/5047): Fix click target to fix tests, by @maximebiloe.
 
 
 
## Code changes in the Starter Theme -- the foundation of 1.7 themes

These are the merged pull-requests on the ['feat/starter-theme' branch](https://github.com/PrestaShop/PrestaShop/tree/feat/starter-theme) since the last Core Weekly Report!

 * [4879](https://github.com/PrestaShop/PrestaShop/pull/4879): define image type in theme.yml, by @julienbourdeau.
 * [4888](https://github.com/PrestaShop/PrestaShop/pull/4888): the cart summary is updated according to delivery costs, by @mickaelandrieu.
 * [4898](https://github.com/PrestaShop/PrestaShop/pull/4898): Do not overwrite module on theme install, by @julienbourdeau.
 * [4905](https://github.com/PrestaShop/PrestaShop/pull/4905): Adapt socialsharing for StarterTheme, by @maximebiloe.
 * [4910](https://github.com/PrestaShop/PrestaShop/pull/4910): Use available_now message, by @maximebiloe.
 * [4913](https://github.com/PrestaShop/PrestaShop/pull/4913): Cart modal is displayed when adding product from product sheet, by @djfm.
 * [4922](https://github.com/PrestaShop/PrestaShop/pull/4922): Fix add a category from product form, by @maximebiloe.
 * [4931](https://github.com/PrestaShop/PrestaShop/pull/4931): Made pack products available to template, by @djfm.
 * [4941](https://github.com/PrestaShop/PrestaShop/pull/4941): Rename translator call function, by @maximebiloe.
 * [4951](https://github.com/PrestaShop/PrestaShop/pull/4951): Add voucher feature and ajax in cart-detailed and cart-summary, by @maximebiloe.
 * [4989](https://github.com/PrestaShop/PrestaShop/pull/4989): Fix some URLs without friendly URLs, by @maximebiloe.
 
 
 
## Code changes in the Classic Theme -- the default theme of PrestaShop 1.7, based on the Starter Theme

The new default theme was merged into the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) with PR [4895](https://github.com/PrestaShop/PrestaShop/pull/4895).

Work is now done on the main 'develop' branch (see above, "Front Office" section).


See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+merged%3A2016-02-08..2016-02-21+is%3Aclosed+).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @firstred, @jorgevrgs, @mcdado, @Newman101, @PrestaEdit, and @prestarocket! Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
