---
layout: post
title:  "PrestaShop Core Weekly - Weeks 32-33"
subtitle: "An inside look at PrestaShop's codebase"
date:   2016-08-24 09:10:11
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the previous two weeks, from Monday 8th to Sunday 21st of August 2016.


## General messages

Are your modules 1.7-ready? Have a tried to create a 1.7 theme? [Check the current tech doc](https://github.com/PrestaShop/docs)!

You can find an up-to-date thread about the 1.7 development [in the forum](https://www.prestashop.com/forums/topic/480580-want-to-know-more-about-17/).<br/>
The 1.7 Project FAQ is always available here: [http://build.prestashop.com/news/prestashop-1-7-faq/](http://build.prestashop.com/news/prestashop-1-7-faq/).


## Code changes in branch develop (for version 1.7.0.0)

Let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!



### Text changes

 * [6009](https://github.com/PrestaShop/PrestaShop/pull/6009): Fix some wording and typos, by @alexeven.
 * [6011](https://github.com/PrestaShop/PrestaShop/pull/6011): Adding missing space, by @alexeven.

 
### Front office (including the default theme, named "Classic", based upon the [Starter Theme](https://github.com/PrestaShop/PrestaShop/tree/develop/themes/classic))

 * [5809](https://github.com/PrestaShop/PrestaShop/pull/5809): Improve template hierarchy, by @julienbourdeau.
 * [5894](https://github.com/PrestaShop/PrestaShop/pull/5894): New Hook after Login form, by @paeddl.
 * [5959](https://github.com/PrestaShop/PrestaShop/pull/5959): Product images in front office are now filtered by combination, by @mickaelandrieu.
 * [5962](https://github.com/PrestaShop/PrestaShop/pull/5962): Refactor order-return and order-follow, by @julienbourdeau.
 * [5975](https://github.com/PrestaShop/PrestaShop/pull/5975): Bring product features in quickview when combinations exist, by @quetzacoalt91.
 * [5981](https://github.com/PrestaShop/PrestaShop/pull/5981): Fix undefined shipping data on virtual cart, by @quetzacoalt91.
 * [5999](https://github.com/PrestaShop/PrestaShop/pull/5999): Display discounts by quantity table when applied to combination, by @mickaelandrieu.
 * [6002](https://github.com/PrestaShop/PrestaShop/pull/6002): Filled single customization field at file upload, by @thierrymarianne.
 * [6007](https://github.com/PrestaShop/PrestaShop/pull/6007): Fix displaying products of the new product page when no product is new, by @fatmabouchekoua.
 * [6017](https://github.com/PrestaShop/PrestaShop/pull/6017): Fix 404 errors for category, by @julienbourdeau.
 * [6020](https://github.com/PrestaShop/PrestaShop/pull/6020): Fixed all listing pages, by @julienbourdeau.
 * [6022](https://github.com/PrestaShop/PrestaShop/pull/6022): Responsive header, by @ishcherbakov.
 * [6029](https://github.com/PrestaShop/PrestaShop/pull/6029): Move forbidden template to errors folder, by @julienbourdeau.
 * [6039](https://github.com/PrestaShop/PrestaShop/pull/6039): Fix the discount amount in product details page, by @fatmabouchekoua.
 

### Back office

 * [4703](https://github.com/PrestaShop/PrestaShop/pull/4703): Align \<select\> in table headers accordingly. Thank you @mcdado!
 * [5805](https://github.com/PrestaShop/PrestaShop/pull/5805): Update validate function for catalog price rule name. Thank you @antho-girard!
 * [5937](https://github.com/PrestaShop/PrestaShop/pull/5937): Adapt product page for 13 inches screens, by @nihco2.
 * [5950](https://github.com/PrestaShop/PrestaShop/pull/5950): Fix unexpected JS behaviour when fixing price decimals on product page, by @quetzacoalt91.
 * [5952](https://github.com/PrestaShop/PrestaShop/pull/5952): Fix module install from an upload, by @quetzacoalt91.
 * [5961](https://github.com/PrestaShop/PrestaShop/pull/5961): Make the buttons and dropdown aligned in the module page, by @quetzacoalt91.
 * [5963](https://github.com/PrestaShop/PrestaShop/pull/5963): Add password reset url in mail for employee. Thank you @antho-girard!
 * [5964](https://github.com/PrestaShop/PrestaShop/pull/5964): Moved reference field to first tab (merchant experience), by @mickaelandrieu.
 * [5966](https://github.com/PrestaShop/PrestaShop/pull/5966): Add "No tax" option in the list of tax rules. Thank you @antho-girard!
 * [5967](https://github.com/PrestaShop/PrestaShop/pull/5967): Auto-fill filename input for virtual product. Thank you @antho-girard!
 * [5970](https://github.com/PrestaShop/PrestaShop/pull/5970): Module catalog version updated to 1.7, by @shudrum.
 * [5974](https://github.com/PrestaShop/PrestaShop/pull/5974): Apply reset actions on specific prices form, by @mickaelandrieu.
 * [5977](https://github.com/PrestaShop/PrestaShop/pull/5977): Remove getCurrentUrtrans() typo, by @xborderie.
 * [5982](https://github.com/PrestaShop/PrestaShop/pull/5982): Enabled edition of translations messages, by @thierrymarianne.
 * [5983](https://github.com/PrestaShop/PrestaShop/pull/5983): Remove the translations of Attribute and Attribute group after deleting the language, by @fatmabouchekoua.
 * [5984](https://github.com/PrestaShop/PrestaShop/pull/5984): Improved specific prices form, by @mickaelandrieu.
 * [5985](https://github.com/PrestaShop/PrestaShop/pull/5985): Refresh KPI when needed in new BO theme, by @quetzacoalt91.
 * [6000](https://github.com/PrestaShop/PrestaShop/pull/6000): Fix recommended modules popup on old theme, by @quetzacoalt91.
 * [6001](https://github.com/PrestaShop/PrestaShop/pull/6001): Refresh the combination list on specific rule form, by @mickaelandrieu.
 * [6003](https://github.com/PrestaShop/PrestaShop/pull/6003): Add translation domains to controllers, by @alexeven.
 * [6004](https://github.com/PrestaShop/PrestaShop/pull/6004): Fixed reset behavior on Product form, by @mickaelandrieu.
 * [6006](https://github.com/PrestaShop/PrestaShop/pull/6006): Improved product type selector, by @mickaelandrieu.
 * [6010](https://github.com/PrestaShop/PrestaShop/pull/6010): Fixed store selection on product creation, by @thierrymarianne.
 * [6013](https://github.com/PrestaShop/PrestaShop/pull/6013): Catalog / Product page (modules) & Module page integration, by @shudrum.
 * [6025](https://github.com/PrestaShop/PrestaShop/pull/6025): Adding tooltip to minimum quantity field, by @fatmabouchekoua.
 * [6032](https://github.com/PrestaShop/PrestaShop/pull/6032): Fixed product save when product type field is disabled, by @mickaelandrieu.
 * [6033](https://github.com/PrestaShop/PrestaShop/pull/6033): Fix trans() parameters number in AdminStores, by @maximebiloe.
 * [6035](https://github.com/PrestaShop/PrestaShop/pull/6035): Remove useless BO options for stores page, by @julienbourdeau.
 * [6040](https://github.com/PrestaShop/PrestaShop/pull/6040): Enabled translations search, by @thierrymarianne.
 
 
### Core

 * [5971](https://github.com/PrestaShop/PrestaShop/pull/5971): When combination have no images, display all available for the product, by @mickaelandrieu.
 * [5972](https://github.com/PrestaShop/PrestaShop/pull/5972): A price fixed using a specific price rule shouldnt be treated as a discount, by @mickaelandrieu.
 * [5980](https://github.com/PrestaShop/PrestaShop/pull/5980): Fix the no duplication of category's information in all shop languages, by @fatmabouchekoua.
 * [5986](https://github.com/PrestaShop/PrestaShop/pull/5986): Document Alias class. Thank you @firstred!
 * [5987](https://github.com/PrestaShop/PrestaShop/pull/5987): Document AddressChecksumCore class. Thank you @firstred!
 * [5988](https://github.com/PrestaShop/PrestaShop/pull/5988): Document AddressFormat class. Thank you @firstred!
 * [5989](https://github.com/PrestaShop/PrestaShop/pull/5989): Document Address class. Thank you @firstred!
 * [5990](https://github.com/PrestaShop/PrestaShop/pull/5990): Document Access class. Thank you @firstred!
 * [5991](https://github.com/PrestaShop/PrestaShop/pull/5991): Document Attachment class. Thank you @firstred!
 * [5993](https://github.com/PrestaShop/PrestaShop/pull/5993): Document AttributeGroup class. Thank you @firstred!
 * [5994](https://github.com/PrestaShop/PrestaShop/pull/5994): Document BlowFish class. Thank you @firstred!
 * [5996](https://github.com/PrestaShop/PrestaShop/pull/5996): Fixed undefined real value in front/ProductController, by @mickaelandrieu.
 * [6005](https://github.com/PrestaShop/PrestaShop/pull/6005): Create all PrestaShop cache folders on warmup, by @julienbourdeau.
 * [6012](https://github.com/PrestaShop/PrestaShop/pull/6012): Fix id_carrier check on module. Thank you @firstred!
 * [6015](https://github.com/PrestaShop/PrestaShop/pull/6015): Document Carrier class. Thank you @firstred!
 * [6016](https://github.com/PrestaShop/PrestaShop/pull/6016): Document Cart class. Thank you @firstred!
 * [6018](https://github.com/PrestaShop/PrestaShop/pull/6018): Replace parameters.yml with parameters.php, by @thierrymarianne.
 * [6019](https://github.com/PrestaShop/PrestaShop/pull/6019): moving the call to the function renderwidget. Thank you @frederic-benoist!
 * [6027](https://github.com/PrestaShop/PrestaShop/pull/6027): Introduce trans method into Module class, by @maximebiloe.
 * [6030](https://github.com/PrestaShop/PrestaShop/pull/6030): Drop ALL the tables during install, even with foreign key contraints, by @maximebiloe.
 * [6036](https://github.com/PrestaShop/PrestaShop/pull/6036): Fix $with_quotes ignored in ObjectModel::formatValue. Thank you @shagshag!

 
### Web Service

 * [5960](https://github.com/PrestaShop/PrestaShop/pull/5960): Fix fatal error when uploading product image. Thank you @gerdus!
 
 
### Tests
 
 * [6038](https://github.com/PrestaShop/PrestaShop/pull/6038): Add StarterTheme to PrestaShop test suite, by @maximebiloe.
 

### Installer

 * [5958](https://github.com/PrestaShop/PrestaShop/pull/5958): Check if settings.inc.php has default values. Thank you @martinfojtik!
 * [5997](https://github.com/PrestaShop/PrestaShop/pull/5997): Add primary key to carriers2payments table. Thank you @firstred!
 * [6021](https://github.com/PrestaShop/PrestaShop/pull/6021): Insert the right module name for default orders, by @maximebiloe.

 
See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20is%3Aclosed%20merged%3A2016-08-08..2016-08-21%20sort%3Acreated-asc%20base%3Adevelop%20).

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @antho-girard, @firstred, @frederic-benoist, @gerdus, @martinfojtik, @mcdado, and @shagshag!  
Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/browse/BOOM/?selectedTab=com.atlassian.jira.jira-projects-plugin:summary-panel)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
