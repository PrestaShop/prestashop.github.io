---
layout: post
title:  "PrestaShop Core Weekly - Week 9"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-03-07 14:37:41
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 29th of February to Sunday 6th of March 2016.


## Milestones

Pull request with notable information this week:

 * [5080](https://github.com/PrestaShop/PrestaShop/pull/5080): Introduces a brand new template for your pull request. Improve your PR by following the presented best-practices!
 * [5105](https://github.com/PrestaShop/PrestaShop/pull/5105): Introduces a way to display the template name within the markup, in order to help find the problematic template.
 * [5115](https://github.com/PrestaShop/PrestaShop/pull/5115): Since jQzoom and FancyBox have been removed, this removes their back office option.
 

The team is hard at work on PrestaShop 1.7, the next major version of the most complete e-commerce software solution there is. You can find an up-to-date thread about it [in the forum](https://www.prestashop.com/forums/topic/480580-want-to-know-more-about-17/).

_Please note that finishing the [planned projects for 1.7](http://build.prestashop.com/news/meet-prestashop-team-prestashop-1-7/) and delivering a quality beta version soon is the top priority for the PrestaShop Core developers at the moment. Merging community pull requests has therefore slowed down until then, but will be back_ with a vengeance _once we have a first beta to release to you! So please keep testing, and keep sending patches our way: it's the_ raison d'être _of this community project!_

Do you want to encourage us? **[Give us a star on GitHub](https://github.com/PrestaShop/PrestaShop)**! :)


## Code changes in 1.7.0.0-develop

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!


### Text changes

 * [5080](https://github.com/PrestaShop/PrestaShop/pull/5080): Pull Request template proposal, by @xBorderie.
 

### Front office (default theme, named "Classic" for now, based upon the [Starter Theme](https://github.com/PrestaShop/PrestaShop/tree/develop/themes/classic))

 * [5071](https://github.com/PrestaShop/PrestaShop/pull/5071): product page improvements, by @nihco2.
 * [5085](https://github.com/PrestaShop/PrestaShop/pull/5085): Delete address from checkout, by @maximebiloe.
 * [5101](https://github.com/PrestaShop/PrestaShop/pull/5101): Remove module placeholders, by @julienbourdeau.
 * [5103](https://github.com/PrestaShop/PrestaShop/pull/5103): OrderPresenter now use products from order to preserve prices consistency, by @mickaelandrieu.
 * [5105](https://github.com/PrestaShop/PrestaShop/pull/5105): Introducing Smarty for dev, by @julienbourdeau.
 * [5107](https://github.com/PrestaShop/PrestaShop/pull/5107): Missing variables in core js. Thank you @fojtcz!
 * [5113](https://github.com/PrestaShop/PrestaShop/pull/5113): order confirmation redesign, by @nihco2.
 * [5120](https://github.com/PrestaShop/PrestaShop/pull/5120): Fix input number on product page, by @nihco2.
 * [5121](https://github.com/PrestaShop/PrestaShop/pull/5121): Added customizations product info on order confirmation page, by @mickaelandrieu.
 * [5122](https://github.com/PrestaShop/PrestaShop/pull/5122): Add texture URL for combination, by @maximebiloe.
 * [5126](https://github.com/PrestaShop/PrestaShop/pull/5126): Add textures preview, by @nihco2.

 
### Back office

 * [5096](https://github.com/PrestaShop/PrestaShop/pull/5096): Display "Debug Mode" in the navbar, by @maximebiloe, based on an idea by @PiotrKaczor (thank you!).
 * [5097](https://github.com/PrestaShop/PrestaShop/pull/5097): Navigation updates, by @Shudrum.
 * [5117](https://github.com/PrestaShop/PrestaShop/pull/5117): Fix CLDR & Globalize javascripts, by @Shudrum.


### Core

 * [5077](https://github.com/PrestaShop/PrestaShop/pull/5077): Missing variable in CartPresenter. Thank you @fojtcz!
 * [5098](https://github.com/PrestaShop/PrestaShop/pull/5098): Update default mail templates, by @julienbourdeau.
 * [5110](https://github.com/PrestaShop/PrestaShop/pull/5110): Fix swiftMailer class conflict for legacy version, by @xGouley.
 * [5115](https://github.com/PrestaShop/PrestaShop/pull/5115): remove PS_DISPLAY_JQZOOM option, by @julienbourdeau.
 * [5119](https://github.com/PrestaShop/PrestaShop/pull/5119): Remove unused variable and use product minimal quantity, by @maximebiloe.
 
 
## Installer
 
 * [5127](https://github.com/PrestaShop/PrestaShop/pull/5127): delete cache files on reinstallation, by @mickaelandrieu.
 
 
### Test
 
 * [5094](https://github.com/PrestaShop/PrestaShop/pull/5094): added tests for theme validator, by @mickaelandrieu.
 

See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Amerged+merged%3A2016-02-29..2016-03-06+).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @fojtcz and @PiotrKaczor! Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
