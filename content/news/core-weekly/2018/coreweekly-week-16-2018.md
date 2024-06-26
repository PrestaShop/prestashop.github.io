---
layout: post
aliases: ["/news/coreweekly-week-16-2018"]
title:  "PrestaShop Core Weekly - Week 16 of 2018"
subtitle: "An inside look at the PrestaShop codebase"
date:   2018-04-23 17:00:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 16th to Sunday 22th of April 2018.

![Core Weekly banner](/assets/images/2017/04/core_weekly_banner.jpg)


## General messages

Last week, Pablo and many colleagues attended the PrestaShop Day in Madrid. More than 1,000 merchants, agencies, freelances and other enthusiasts gathered in La Nave conference center. We do hope you enjoyed it as much as we did, it was great, thanks! If you are French, don't forget to register for [PrestaShop Day Paris in June](https://prestashopday.com/fr/): this will be a great opportunity to learn what's new about PrestaShop and discuss with the community. If you are in Lyon, there is a local event the 15th of May: [Dejital Day](https://dejital.itis-commerce.com/). I will be there and I will enjoy meeting some of you in real life.


## Code changes in the 'develop' branch (for v1.7.4.0)

### Back office

* [#8918](https://github.com/PrestaShop/PrestaShop/pull/8918): Add unlimited timeout to dropzone configuration. Thank you @PrestaMagician!


### Core

* [#8600](https://github.com/PrestaShop/PrestaShop/pull/8600): Fix fatal on array_merge if query in addMissingProductFields returns no result, by @jocel1.
* [#8882](https://github.com/PrestaShop/PrestaShop/pull/8882): Migrate import page. Thank you @sarjon!
* [#8942](https://github.com/PrestaShop/PrestaShop/pull/8942): Tell if a currency is installed, get a list of installed currencies, by @LittleBigDev.
* [#8960](https://github.com/PrestaShop/PrestaShop/pull/8960): Fixed undefined class constant. Thank you @GuillaumeKadolis!
* [#8962](https://github.com/PrestaShop/PrestaShop/pull/8962): Properly handle set of the PK value in the EntityMapper, by @jocel1.


### Test

* [#8950](https://github.com/PrestaShop/PrestaShop/pull/8950): Fix regular tests, by @fatmaBouchekoua.
* [#8961](https://github.com/PrestaShop/PrestaShop/pull/8961): Add some missing elements ids, by @fatmaBouchekoua.


## Code changes in the '1.7.3.x' branch (for v1.7.3.1)

### Back office

* [#8517](https://github.com/PrestaShop/PrestaShop/pull/8517): Fixed bug when using 2 swap in 1 form. Thank you @AliShareei!
* [#8948](https://github.com/PrestaShop/PrestaShop/pull/8948): Fixed update of combinations, by @mickaelandrieu.


### Core

* [#8850](https://github.com/PrestaShop/PrestaShop/pull/8850): Fix profile permission array construction. Thank you @loicsapone!
* [#8965](https://github.com/PrestaShop/PrestaShop/pull/8965): Fix theme install with prestatrust modules. Thank you @marionf!


### Front Office

* [#8940](https://github.com/PrestaShop/PrestaShop/pull/8940): Check product availability in order step, by @tomlev.
* [#8946](https://github.com/PrestaShop/PrestaShop/pull/8946): Fix button show password height on Safari, by @eternoendless.
* [#8951](https://github.com/PrestaShop/PrestaShop/pull/8951): fix error display on cart quantity edition, by @tomlev.


Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @AliShareei, @GuillaumeKadolis, @loicsapone, @PrestaMagician, @sarjon!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
