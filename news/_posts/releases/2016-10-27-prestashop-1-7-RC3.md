---
layout: post
title:  "PrestaShop 1.7.0.0 RC3: Getting there!"
subtitle: "Another RC for you to like :)"
date:   2016-10-27 09:10:11
author: xavierborderie
icon: icon-leaf
tags:
 - 1.7
 - 1.7.0.0
 - version
 - rc
 - releases
 - development
---

We're getting closer! With this new Release Candidate, we deliver a strong RC, which is closer than ever to our quality objectives.

A lot has been done to stabilize and enhance most of the details of the future version 1.7.0.0, and we expect you to be able to work with it as if it was a regular release. Are you feeling it? :)

[Test PrestaShop 1.7.0.0 RC3 now!](https://www.prestashop.com/en/developers-versions ){: .btn .btn-lg .btn-success}
{: .text-center}

Found an issue? [Create a Forge ticket](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1)!


* TOC
{:toc}

 
## What's new in RC3?

In the two weeks since RC2, here is what landed in the codebase:

 * Many many bugfixes and performances improvements!

See at the bottom of this article for the full list.


## How far are we from a stable 1.7 release?

We know many of you are waiting for The Answer: when is 1.7.0.0 going to be released? We know it is important to all professionals: merchants waiting to use the new features, agencies waiting to start selling 1.7 projects, developers and designers waiting to sell their creations on the Addons marketplace...

Our answer remains the same: we want to release a quality 1.7. And we're getting there!


## So, what's next?

Granted no major issue arises from the QA tests around this RC3, well, let's just say that things could heat up sooner that later ;)

## Thank you to our contributors!

This wouldn't be a community project without pull-requests from our contributors:

@ecomm360, @prestamodule, @martinfojtik, @hubiktomas, @firstred, @true0r, @Nobodaddy. Thank you all!

This doesn't take into account all those who are active even without code changes: comments on PR, tickets on the Forge, translations on Crowdin, etc. PrestaShop is better thanks to you all!


## Full list of changes between RC2 and RC3

Here is the whole deal:

 - Back Office:
   - New feature:
     - [6675](https://github.com/PrestaShop/PrestaShop/pull/6675): New keyboard shortcut in product page
   - Improvement:
     - [6724](https://github.com/PrestaShop/PrestaShop/pull/6724): Integrate edit translations view
     - [6715](https://github.com/PrestaShop/PrestaShop/pull/6715): Wording update - remove 'CMS' to use 'page' only
     - [6683](https://github.com/PrestaShop/PrestaShop/pull/6683): Reuse SQL result for module history
     - [6629](https://github.com/PrestaShop/PrestaShop/pull/6629): Automatically fill link_rewrite on new CMS category page (1.7)
     - [6467](https://github.com/PrestaShop/PrestaShop/pull/6467): Fixed wording AdminInvoicesController.php
     - [6586](https://github.com/PrestaShop/PrestaShop/pull/6586): Remove PS_LOGO_MOBILE variable from AdminThemesController
     - [6602](https://github.com/PrestaShop/PrestaShop/pull/6602): Ensured product has default combination
     - [6600](https://github.com/PrestaShop/PrestaShop/pull/6600): Add translation domains to Adv. param controllers 1
     - [6603](https://github.com/PrestaShop/PrestaShop/pull/6603): Make customer required fields translatable
     - [6589](https://github.com/PrestaShop/PrestaShop/pull/6589): Wording update - 'Attachment' becomes 'Files'
     - [6583](https://github.com/PrestaShop/PrestaShop/pull/6583): Improve label wording for cart rule creation
   - Bug fix:
     - [6736](https://github.com/PrestaShop/PrestaShop/pull/6736): Fix broken element selection
     - [6731](https://github.com/PrestaShop/PrestaShop/pull/6731): Fix fatal in 5.4 due to concatenate in declaration
     - [6725](https://github.com/PrestaShop/PrestaShop/pull/6725): Fix logo display in customer groups
     - [6721](https://github.com/PrestaShop/PrestaShop/pull/6721): Fixed generate htaccess
     - [6690](https://github.com/PrestaShop/PrestaShop/pull/6690): Provided with theme translations and overrides
     - [6700](https://github.com/PrestaShop/PrestaShop/pull/6700): Add js strings of module page to translations
     - [6714](https://github.com/PrestaShop/PrestaShop/pull/6714): Fixed translation BO Emails
     - [6678](https://github.com/PrestaShop/PrestaShop/pull/6678): Fixed errors on product form & duplicate menu
     - [6693](https://github.com/PrestaShop/PrestaShop/pull/6693): Remove wrong module from module page
     - [6711](https://github.com/PrestaShop/PrestaShop/pull/6711): Fixed show price display on Customer Groups back office
     - [6668](https://github.com/PrestaShop/PrestaShop/pull/6668): Fixed security problem on translation interface
     - [6695](https://github.com/PrestaShop/PrestaShop/pull/6695): Added email translation on BO
     - [6702](https://github.com/PrestaShop/PrestaShop/pull/6702): Fixed Employees back-office default page
     - [6677](https://github.com/PrestaShop/PrestaShop/pull/6677): Fix links to legacy module page
     - [6705](https://github.com/PrestaShop/PrestaShop/pull/6705): Fix broken links related to token on module page
     - [6698](https://github.com/PrestaShop/PrestaShop/pull/6698): Fix bulk actions on module page
     - [6686](https://github.com/PrestaShop/PrestaShop/pull/6686): Bring back addon card on search
     - [6670](https://github.com/PrestaShop/PrestaShop/pull/6670): Fixed call to action buttons in Read More
     - [6667](https://github.com/PrestaShop/PrestaShop/pull/6667): Fix the combinations bulk action with TI price
     - [6666](https://github.com/PrestaShop/PrestaShop/pull/6666): Module page small fixes
     - [6687](https://github.com/PrestaShop/PrestaShop/pull/6687): Fix "back" link in module configuration page
     - [6658](https://github.com/PrestaShop/PrestaShop/pull/6658): Do not fallback on english value on translation page and tokenize the edit URL
     - [6665](https://github.com/PrestaShop/PrestaShop/pull/6665): Fixed title CMS page KO
     - [6661](https://github.com/PrestaShop/PrestaShop/pull/6661): Fix the product quantity selector
     - [6662](https://github.com/PrestaShop/PrestaShop/pull/6662): Fix the final retail price update
     - [6614](https://github.com/PrestaShop/PrestaShop/pull/6614): Fix module import
     - [6632](https://github.com/PrestaShop/PrestaShop/pull/6632): Fix filtering on state in monitoring BO page
     - [6659](https://github.com/PrestaShop/PrestaShop/pull/6659): Fixed hint tooltip on template
     - [6606](https://github.com/PrestaShop/PrestaShop/pull/6606): Fixed wording for BO
     - [6654](https://github.com/PrestaShop/PrestaShop/pull/6654): Fix the customer threads status change
     - [6650](https://github.com/PrestaShop/PrestaShop/pull/6650): CSV Import: Prevent default category reset when already defined (1.7)
     - [6657](https://github.com/PrestaShop/PrestaShop/pull/6657): Fixed feature change ajax
     - [6655](https://github.com/PrestaShop/PrestaShop/pull/6655): Fix the caption display language on the product page
     - [6633](https://github.com/PrestaShop/PrestaShop/pull/6633): Fix multilang link rewrite import (1.7)
     - [6645](https://github.com/PrestaShop/PrestaShop/pull/6645): Fix menu layout for IE
     - [6646](https://github.com/PrestaShop/PrestaShop/pull/6646): Fixed string additional (hook, sql)
     - [6644](https://github.com/PrestaShop/PrestaShop/pull/6644): Fixed hook position display
     - [6529](https://github.com/PrestaShop/PrestaShop/pull/6529): Disabled module and product actions in demo
     - [6642](https://github.com/PrestaShop/PrestaShop/pull/6642): Added tab ids to navigation menu
     - [6601](https://github.com/PrestaShop/PrestaShop/pull/6601): Fixed add/edit click quick access on 2 system controllers
     - [6612](https://github.com/PrestaShop/PrestaShop/pull/6612): Fixed positions dragable on list
     - [6637](https://github.com/PrestaShop/PrestaShop/pull/6637): Fixed retrieval of customer KPI
     - [6639](https://github.com/PrestaShop/PrestaShop/pull/6639): Fixed link to product in order
     - [6638](https://github.com/PrestaShop/PrestaShop/pull/6638): Fix double slash for supplier combination request
     - [6546](https://github.com/PrestaShop/PrestaShop/pull/6546): Fixed wording for BO
     - [6592](https://github.com/PrestaShop/PrestaShop/pull/6592): Fixed missing button when adding countries in a taxe rule
     - [6593](https://github.com/PrestaShop/PrestaShop/pull/6593): Fixed hint tooltip on template
     - [6539](https://github.com/PrestaShop/PrestaShop/pull/6539): Check parent permissions when not ticked
     - [6568](https://github.com/PrestaShop/PrestaShop/pull/6568): Fixed attribute color picker in BO
     - [6596](https://github.com/PrestaShop/PrestaShop/pull/6596): Fixed newsletter, optin, shop columns
     - [6587](https://github.com/PrestaShop/PrestaShop/pull/6587): Fix theme preview in BO

 - Front Office:
   - Improvement:
     - [6656](https://github.com/PrestaShop/PrestaShop/pull/6656): Rework asset management
     - [6691](https://github.com/PrestaShop/PrestaShop/pull/6691): Allow to display a full width menu
     - [6609](https://github.com/PrestaShop/PrestaShop/pull/6609): Move facets update behaviour
     - [6547](https://github.com/PrestaShop/PrestaShop/pull/6547): Rendered manufacturer in product details
   - Bug fix:
     - [6733](https://github.com/PrestaShop/PrestaShop/pull/6733): Keep sending email if legacy lang file not found
     - [6728](https://github.com/PrestaShop/PrestaShop/pull/6728): Allow JS to get $product - thanks @Simonchik
     - [6674](https://github.com/PrestaShop/PrestaShop/pull/6674): Fix ajax refresh for listing pages
     - [6660](https://github.com/PrestaShop/PrestaShop/pull/6660): Fixed minimal quantity check in cart
     - [6509](https://github.com/PrestaShop/PrestaShop/pull/6509): Separate gifts from product manually added
     - [6648](https://github.com/PrestaShop/PrestaShop/pull/6648): Fix flags position on product page
     - [6605](https://github.com/PrestaShop/PrestaShop/pull/6605): Fix combination selection in StarterTheme
     - [6540](https://github.com/PrestaShop/PrestaShop/pull/6540): Fixed vouchers values rendering

 - Core:
   - Improvement:
     - [6718](https://github.com/PrestaShop/PrestaShop/pull/6718): Add two new hooks actionAttributeCombinationSave/Delete
     - [6692](https://github.com/PrestaShop/PrestaShop/pull/6692): Clear 1.7.0.0.sql
     - [6701](https://github.com/PrestaShop/PrestaShop/pull/6701): Let developer export themes easily
     - [6319](https://github.com/PrestaShop/PrestaShop/pull/6319): Improved password hashing
     - [6688](https://github.com/PrestaShop/PrestaShop/pull/6688): Enable cache on guzzle requests
     - [6622](https://github.com/PrestaShop/PrestaShop/pull/6622): Remove index.php in upload folder
     - [6235](https://github.com/PrestaShop/PrestaShop/pull/6235): Improve validator birthday date
     - [6559](https://github.com/PrestaShop/PrestaShop/pull/6559): Doc + update Upgrader class
     - [6560](https://github.com/PrestaShop/PrestaShop/pull/6560): Doc + update Supplier class
     - [6561](https://github.com/PrestaShop/PrestaShop/pull/6561): Doc + update Tab class
     - [6617](https://github.com/PrestaShop/PrestaShop/pull/6617): Simple ObjectModel performance improvement
     - [6569](https://github.com/PrestaShop/PrestaShop/pull/6569): Doc + update Risk class
     - [6562](https://github.com/PrestaShop/PrestaShop/pull/6562): Doc + update Tag class
     - [6552](https://github.com/PrestaShop/PrestaShop/pull/6552): Doc + update Zone class
     - [6565](https://github.com/PrestaShop/PrestaShop/pull/6565): Doc + update Store class
     - [6573](https://github.com/PrestaShop/PrestaShop/pull/6573): Doc + update ProductDownload class
     - [6575](https://github.com/PrestaShop/PrestaShop/pull/6575): Doc + update ProductSale class
     - [6580](https://github.com/PrestaShop/PrestaShop/pull/6580): Doc + update RequestSql class
     - [6558](https://github.com/PrestaShop/PrestaShop/pull/6558): Doc + update Translate class
     - [6556](https://github.com/PrestaShop/PrestaShop/pull/6556): Doc + update Uploader class
     - [6571](https://github.com/PrestaShop/PrestaShop/pull/6571): Doc + update ProductAssembler class
     - [6577](https://github.com/PrestaShop/PrestaShop/pull/6577): Doc + update Profile class
     - [6579](https://github.com/PrestaShop/PrestaShop/pull/6579): Doc + update Referrer class
     - [6564](https://github.com/PrestaShop/PrestaShop/pull/6564): Doc + update State class
     - [6555](https://github.com/PrestaShop/PrestaShop/pull/6555): Doc + update TranslatedConfiguration class
   - Bug fix:
     - [6735](https://github.com/PrestaShop/PrestaShop/pull/6735): Update default catalog
     - [6732](https://github.com/PrestaShop/PrestaShop/pull/6732): Ignore node modules on theme export
     - [6523](https://github.com/PrestaShop/PrestaShop/pull/6523): Add current robots.txt content in controller
     - [6730](https://github.com/PrestaShop/PrestaShop/pull/6730): Move clear cache on controller (theme update)
     - [6729](https://github.com/PrestaShop/PrestaShop/pull/6729): Fixed constant array
     - [6726](https://github.com/PrestaShop/PrestaShop/pull/6726): Cleared cache when enable a theme
     - [6720](https://github.com/PrestaShop/PrestaShop/pull/6720): Add or update language with the new packs
     - [6709](https://github.com/PrestaShop/PrestaShop/pull/6709): Use _PARENT_THEME_NAME_ constant for consistency
     - [6684](https://github.com/PrestaShop/PrestaShop/pull/6684): Added prestashop version to exceptions
     - [6676](https://github.com/PrestaShop/PrestaShop/pull/6676): Make encryption system backward compatible with old 0.98 openssl versions
     - [6647](https://github.com/PrestaShop/PrestaShop/pull/6647): Added position default 1 to registerHook
     - [6682](https://github.com/PrestaShop/PrestaShop/pull/6682): Fixed search alias for a namespace from a empty string
     - [6635](https://github.com/PrestaShop/PrestaShop/pull/6635): Fix feature update parent call
     - [6618](https://github.com/PrestaShop/PrestaShop/pull/6618): Invalidate Product cache on time
     - [6608](https://github.com/PrestaShop/PrestaShop/pull/6608): Fix wrong domains
     - [6542](https://github.com/PrestaShop/PrestaShop/pull/6542): Added intl requirements


## Parting words

Ready? Set? Go! Create new themes and update your modules! :)

Thank you for your feedback!


