---
layout: post
title:  "PrestaShop Core Weekly - Week 19 & 20"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-05-20 18:29:47
author: xavierborderie
icon: fa-calendar
tags:
 - core-weekly
---

Another set of short weeks here in Paris, which means another edition of the Core Weekly report that spans two weeks of change to the PrestaShop codebase.

This edition of the Core Weekly report highlights changes in PrestaShop core codebase during the last two weeks, from Monday 4th of May to Sunday 17th of May, 2015.


## Milestones

The PSR-2 survey is still running, [and you can still vote](https://www.prestashop.com/forums/topic/434831-psr2-development-norm-for-prestashop/). It seems pretty settled, though. More updates about this soon!

Of note among the merged PRs in the last two weeks:

 * In [3007](https://github.com/PrestaShop/PrestaShop/pull/3007), core dev jeromenadaud we introduce a new style to the back-office and login form of PrestaShop, in accordance to the rebranding currently under way at PrestaShop. More about that very soon! The design work was done by PrestaShop UX designer syswarren.
 * In [2967](https://github.com/PrestaShop/PrestaShop/pull/2967), core dev Shudrum kept on modifying the email template, removing order_changed.


## Code changes

Let's review last week's merged pull-requests!

As always, click on the PR's number to open its page on GitHub.

#### Text fixes

 * [2990](https://github.com/PrestaShop/PrestaShop/pull/2990): Invoice controller - wording, by AlexEven.
 * [3009](https://github.com/PrestaShop/PrestaShop/pull/3009): AdminTaxRulesGroupController - wording dissociation (All), by AlexEven.
 
#### Front office

 * [2983](https://github.com/PrestaShop/PrestaShop/pull/2983): input label and input title enhancements. Thank you inetbiz!
 * [2994](https://github.com/PrestaShop/PrestaShop/pull/2994): wrong compass font folder for default-bootstrap. Thank you inetbiz!
 * [3017](https://github.com/PrestaShop/PrestaShop/pull/3017): Remove old 404 image, by jeromenadaud.
 
#### Back office

 * [2975](https://github.com/PrestaShop/PrestaShop/pull/2975): Fix memory leak during thumbnail generation, by jocel1.
 * [2976](https://github.com/PrestaShop/PrestaShop/pull/2976): Fix generation of exported themes, by sfroment42.
 * [2989](https://github.com/PrestaShop/PrestaShop/pull/2989): Fix error when adding customized product from BO order process. Thank you MaX3315!
 * [2997](https://github.com/PrestaShop/PrestaShop/pull/2997): More detailed error message on themes export, by sfroment42.
 * [3010](https://github.com/PrestaShop/PrestaShop/pull/3010): Improved adding to Quick Access. Thank you kpodemski!
 * 
 
#### Core

 * [2969](https://github.com/PrestaShop/PrestaShop/pull/2969): Optimize tag count computation, by jocel1.
 * [2967](https://github.com/PrestaShop/PrestaShop/pull/2967): Remove the order_changed email and replace it by a hook, by Shudrum.
 * [2972](https://github.com/PrestaShop/PrestaShop/pull/2972): Better function and variable naming, by jeromenadaud.
 * [2978](https://github.com/PrestaShop/PrestaShop/pull/2978): Flush cache option was not being fully applied within some Cart methods. Thank you eric-rouvier!
 * [2870](https://github.com/PrestaShop/PrestaShop/pull/2870): Fix duplicate $customer object declaration. Thank you samy!
 * [2998](https://github.com/PrestaShop/PrestaShop/pull/2998): Before setting a carrier free you need to check if the cart rule is in the cart, by sfroment42.
 * [2993](https://github.com/PrestaShop/PrestaShop/pull/2993): parser error in ajaxProcessProductManufacturers. Thank you el-tenkova!
 * [2992](https://github.com/PrestaShop/PrestaShop/pull/2992): PHPDoc for controller methods. Thank you gskema!
 * [2991](https://github.com/PrestaShop/PrestaShop/pull/2991): Fix minimal quantity calculation in CartController::processDeleteProductInCart. Thank you djbuch!
 * [2929](https://github.com/PrestaShop/PrestaShop/pull/2929): Adding getter for DB link. Thank you iNem0o!

 
#### Modules

 * [2988](https://github.com/PrestaShop/PrestaShop/pull/2988): Images were not shown for bought products, by maximebiloe.
 * [2877](https://github.com/PrestaShop/PrestaShop/pull/2877): Make Module installation handle class constants correctly. Thank you tiennou!

#### CSS

 * [3007](https://github.com/PrestaShop/PrestaShop/pull/3007): Rebranding project, by jeromenadaud, with design input by syswarren.
 * [3015](https://github.com/PrestaShop/PrestaShop/pull/3015): Fix navigation hover on active menu, by jeromenadaud.
 
#### PDF

 * [2985](https://github.com/PrestaShop/PrestaShop/pull/2985): Update supply-order-footer.tpl. Thank you Nobodaddy!
 * [3000](https://github.com/PrestaShop/PrestaShop/pull/3000): Revert "[-] PDF : Update supply-order-footer.tpl", by jeromenadaud.
 * [3005](https://github.com/PrestaShop/PrestaShop/pull/3005): Fix supply order PDF generation, by julienbourdeau.
 * [3011](https://github.com/PrestaShop/PrestaShop/pull/3011): Add sprintf capability to {l} for PDF, by julienbourdeau.
 * [3012](https://github.com/PrestaShop/PrestaShop/pull/3012): supply-order-footer.tpl is now translatable, by julienbourdeau.
 
#### Multishop

 * [2962](https://github.com/PrestaShop/PrestaShop/pull/2962): Fix bad results when filtering items in a multishop context, by gRoussac.
 * [2996](https://github.com/PrestaShop/PrestaShop/pull/2996): Fix situations where customizations could be errased when updating in multishop context. Thank you djbuch!

 
#### Importer

 * [2959](https://github.com/PrestaShop/PrestaShop/pull/2959): Improve import performances, by jocel1.
 

See all the PRs merged into the codebase since May the 4th (be with you!) [here](https://github.com/PrestaShop/PrestaShop/pulls?page=1&pulls_only=true&q=is%3Apr+merged%3A%3E2015-05-04+is%3Aclosed+sort%3Aupdated&utf8=%E2%9C%93).

Thank you to our contributors for their Pull Requests: [djbuch](https://github.com/djbuch), [el-tenkova](https://github.com/el-tenkova), [eric-rouvier](https://github.com/eric-rouvier), [gskema](https://github.com/gskema), [iNem0o](https://github.com/iNem0o), [inetbiz](https://github.com/inetbiz), [kpodemski](https://github.com/kpodemski), [MaX3315](https://github.com/MaX3315), [Nobodaddy](https://github.com/Nobodaddy), [samy](https://github.com/samy), and [tiennou](https://github.com/tiennou). Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

Remember: if you want to contribute to PrestaShop with code, read those:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Until the next Core Weekly report, let me know if I forgot something here, or if you have ideas about how to improve this report!

Happy contributin' everyone!
