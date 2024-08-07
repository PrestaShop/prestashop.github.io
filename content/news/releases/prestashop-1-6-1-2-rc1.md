---
layout: post
aliases: ["/news/prestashop-1-6-1-2-rc1"]
title:  "Test PrestaShop 1.6.1.2 RC1"
subtitle: "Check, one two, one two, check check"
date:   2015-09-23 18:00:41
authors: [ xavierborderie ]
icon: icon-mic
tags:
 - version
 - rc
 - releases
 - development
 - "1.6.1.x"
 - "1.6"
---

As mentionned in the [previous Core Weekly report](http://build.prestashop.com/news/coreweekly-35-36/), the team is working on version 1.6.1.2, which after v1.6.1.1 is the second patch version of 1.6.1.0.

Like we did for v1.6.1.1, we want to give v1.6.1.2 a solid testing phase: we are planning two weeks for feedback on the issues that were fixed. This testing phase starts today, with the availability of the first Release Candidate version, or RC1 for short.

A month after the release of 1.6.1.1 and more than 2 months after the release of version 1.6.1.0, this forthcoming patch version is further proof of our willingness to continually improve your e-commerce experience, both as a merchant and as a customer. With this in mind, 150 pull-requests were closed and merged in the codebase since the release of version 1.6.1.1. That's 5 more than for v1.6.1.1 so far, in much less time! Congratualions are due to the whole team as well as the growing team of regular contributors!

As this is a [patch version](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/), 1.6.1.2 will only fix issues -- patch version are not meant to add features, only to make them work better! Therefore, it will be a very easy upgrade from 1.6.1.0 and 1.6.1.1.

Of particular interest is the fact that **this version fixes a long-standing issue of slowness in the back-office**. We really, really, really need your feedback on this one! Is it really fixed in all situations? Does your slowness issue remain the same? Let us know!

Remember! This is the first release candidate for 1.6.1.2, NOT the final, production-ready code! <b>This is a test version</b>, and is therefore not yet deemed suitable for production use. Hence, do not upgrade your store just yet! Install the RC1 on your server (on as many server configurations as possible), or upgrade from a clone of your real store.

{{< cta "https://www.prestashop.com/versions" >}}Download and test PrestaShop 1.6.1.2 RC1 now!{{< /cta >}}

You can also use the 1-Click Upgrade module, on the Release Candidate channel -- from a test shop, of course :)

Remember: if you have any feedback to give or issue to raise, [create a ticket on the Forge](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop)!

Here is the [list of pull-requests that the team has merged into 1.6.1.2](https://github.com/PrestaShop/PrestaShop/pulls?page=1&q=is%3Apr+base%3A1.6.1.x+is%3Aclosed+merged%3A%3E2015-08-17&utf8=%E2%9C%93) so far:

 * [3655](https://github.com/PrestaShop/PrestaShop/pull/3655): [-] TR : Fix emails not copied into theme folder
 * [3669](https://github.com/PrestaShop/PrestaShop/pull/3669): [-] FO : Fix bug while specific price start to 1 quantity and initial price to 0
 * [3714](https://github.com/PrestaShop/PrestaShop/pull/3714): [-] IN : Fix adding id_cart to id_product_2 key in specific_price.
 * [3718](https://github.com/PrestaShop/PrestaShop/pull/3718): [*] BO : New module categories "Customer Reviews", "Social & Community".
 * [3725](https://github.com/PrestaShop/PrestaShop/pull/3725): [-] CORE : Fix notices
 * [3731](https://github.com/PrestaShop/PrestaShop/pull/3731): [*] BO: wording for gross margin KPIs
 * [3736](https://github.com/PrestaShop/PrestaShop/pull/3736): [-] PDF: Order slip Tax detail computation fix.
 * [3741](https://github.com/PrestaShop/PrestaShop/pull/3741): [-] BO : Fix issue with multiple trees loaded on the same page
 * [3742](https://github.com/PrestaShop/PrestaShop/pull/3742): [-] BO : Fix memcached test
 * [3744](https://github.com/PrestaShop/PrestaShop/pull/3744): [*] MO : Fix no h2 in blockcart
 * [3746](https://github.com/PrestaShop/PrestaShop/pull/3746): [-] FO : Fix undefined var
 * [3750](https://github.com/PrestaShop/PrestaShop/pull/3750): [-] PDF : Could not translate "Free Shipping" in pdf
 * [3755](https://github.com/PrestaShop/PrestaShop/pull/3755): [-] BO : Fix issue with cover image
 * [3756](https://github.com/PrestaShop/PrestaShop/pull/3756): [-] BO: Fix product import dates
 * [3758](https://github.com/PrestaShop/PrestaShop/pull/3758): [-] CORE : could not load bootstrap-sortable.js with Chrome
 * [3761](https://github.com/PrestaShop/PrestaShop/pull/3761): [-] FO : could not change currency with PS_DETECT_COUNTRY
 * [3762](https://github.com/PrestaShop/PrestaShop/pull/3762): // Fix notices
 * [3771](https://github.com/PrestaShop/PrestaShop/pull/3771): [-] FO : Search alias for words containing hyphens fail
 * [3772](https://github.com/PrestaShop/PrestaShop/pull/3772): [-] BO : Duplicate currencies in AdminCountries in multishop
 * [3774](https://github.com/PrestaShop/PrestaShop/pull/3774): [-] FO : 404 on images on small screens
 * [3776](https://github.com/PrestaShop/PrestaShop/pull/3776): [*] BO : Add search_contains in chosen init
 * [3786](https://github.com/PrestaShop/PrestaShop/pull/3786): [-] FO : Fix issue with multishop / multilanguage tags
 * [3788](https://github.com/PrestaShop/PrestaShop/pull/3788): [-] CORE : Stock synchronization fails in case of shared warehouse
 * [3793](https://github.com/PrestaShop/PrestaShop/pull/3793): [-] CORE: Fix code typos
 * [3827](https://github.com/PrestaShop/PrestaShop/pull/3827): [-] FO : Avoid displaying payment message
 * [3832](https://github.com/PrestaShop/PrestaShop/pull/3832): [-] BO : Fix notices on order statuses
 * [3835](https://github.com/PrestaShop/PrestaShop/pull/3835): [-] BO : Fix issue with smarty lazy cache & timestamp
 * [3836](https://github.com/PrestaShop/PrestaShop/pull/3836): [-] BO : Fix issue with smarty lazy cache & timestamp
 * [3863](https://github.com/PrestaShop/PrestaShop/pull/3863): [-] FO : #Fix customized images duplication when re-order
 * [3866](https://github.com/PrestaShop/PrestaShop/pull/3866): [*] BO : Fix removing extra space at end of product names and url rewrite
 * [3870](https://github.com/PrestaShop/PrestaShop/pull/3870): [-] FO : Avoid possible undefined vars in global.js
 * [3878](https://github.com/PrestaShop/PrestaShop/pull/3878): [-] FO : Fix possible fatal error in products-comparison
 * [3879](https://github.com/PrestaShop/PrestaShop/pull/3879): [-] FO : Fix new products name in columns
 * [3881](https://github.com/PrestaShop/PrestaShop/pull/3881): [-] FO : Fix $errors_discount dead code.
 * [3891](https://github.com/PrestaShop/PrestaShop/pull/3891): [-] BO : Fix modules logo witdh
 * [3893](https://github.com/PrestaShop/PrestaShop/pull/3893): [-] BO : undefined var in AdminProducts
 * [3898](https://github.com/PrestaShop/PrestaShop/pull/3898): [-] BO : Impossible to add products via StockManager
 * [3903](https://github.com/PrestaShop/PrestaShop/pull/3903): [-] CORE : Fix incorrect cart total
 * [3904](https://github.com/PrestaShop/PrestaShop/pull/3904): [-] BO : wrong escaping in helpers/form/form.tpl
 * [3907](https://github.com/PrestaShop/PrestaShop/pull/3907): [-] FO : Possible undefined function binduniform
 * [3925](https://github.com/PrestaShop/PrestaShop/pull/3925) & [3926](https://github.com/PrestaShop/PrestaShop/pull/3926): [-] BO : Fix performance issue with tags
 * [3932](https://github.com/PrestaShop/PrestaShop/pull/3932): [-] CORE: Bad norm function getCountry
 * [3936](https://github.com/PrestaShop/PrestaShop/pull/3936): [-] CORE : Fix inconsistent cart rule country restriction
 * [3938](https://github.com/PrestaShop/PrestaShop/pull/3938): [-] CORE : Fix property StockAvailable->id_product is empty
 * [3939](https://github.com/PrestaShop/PrestaShop/pull/3939): [-] BO : Fix commas in carrier prices wizard
 * [3940](https://github.com/PrestaShop/PrestaShop/pull/3940): [-] BO : Bad invoice creation if delivery slip already exists
 * [3941](https://github.com/PrestaShop/PrestaShop/pull/3941): [-] FO : Table 'ps_product_reductions' already exists
 * [3942](https://github.com/PrestaShop/PrestaShop/pull/3942): [-] IN : Could not install in Czech
 * [3950](https://github.com/PrestaShop/PrestaShop/pull/3950): [-] FO : Fix notice on customizedDatas
 * [3953](https://github.com/PrestaShop/PrestaShop/pull/3953): [-] BO : Fix virtual product Duplicate entry
 * [3954](https://github.com/PrestaShop/PrestaShop/pull/3954): [-] BO : could not re enable module on devices
 * [3955](https://github.com/PrestaShop/PrestaShop/pull/3955): [-] BO : Fix possible Exception in product tabs loading
 * [3958](https://github.com/PrestaShop/PrestaShop/pull/3958): [-] FO :  gets the carrier available with weight attribute
 * [3967](https://github.com/PrestaShop/PrestaShop/pull/3967): [-] BO : Fix bad id for email translations toggle
 * [3968](https://github.com/PrestaShop/PrestaShop/pull/3968): [-] FO : Top menu not always active on mobile
 * [3970](https://github.com/PrestaShop/PrestaShop/pull/3970): [-] CORE : fix bad cache_default_attribute, + bad clear cache on colors
 * [3971](https://github.com/PrestaShop/PrestaShop/pull/3971): [-] BO : Could not bulk delete attributes
 * [3972](https://github.com/PrestaShop/PrestaShop/pull/3972): [-] CORE : Fix notice: Undefined variable: delivery_address in classes/pdf/HTMLTemplateOrderSlip.php on line 165
 * [3973](https://github.com/PrestaShop/PrestaShop/pull/3973): [-] BO : Fix parse serror when quotes in import file name
 * [3975](https://github.com/PrestaShop/PrestaShop/pull/3975): [-] FO : Fix OrderHistory multishop getCustomerOrders shared orders
 * [3982](https://github.com/PrestaShop/PrestaShop/pull/3982): [-] Bo : Fix bad action display when sub categories disabled
 * [3986](https://github.com/PrestaShop/PrestaShop/pull/3986): [-] CORE : Order::hasDelivery new return type
 * [3987](https://github.com/PrestaShop/PrestaShop/pull/3987): [-] CORE : Fix bad sql query in Lanqguage::loadUpdateSQL()
 * [3991](https://github.com/PrestaShop/PrestaShop/pull/3991): [*] BO : makes picking products easier
 * [3993](https://github.com/PrestaShop/PrestaShop/pull/3993): [-] FO : Fix bad redirection to my account in accordion footer
 * [4001](https://github.com/PrestaShop/PrestaShop/pull/4001): [-] BO : Fix Catalog Rule for a specific shop do not save
 * [4003](https://github.com/PrestaShop/PrestaShop/pull/4003): [-] CORE : Fix hard coded table name in configuration class
 * [4005](https://github.com/PrestaShop/PrestaShop/pull/4005): [-] BO : Fix AdminBackupControllerCore and timeout
 * [4006](https://github.com/PrestaShop/PrestaShop/pull/4006): [*] BO Some controllers may want to use Filters without an objectModel
 * [4007](https://github.com/PrestaShop/PrestaShop/pull/4007): [-] CORE: Add index on search_index table
 * [4009](https://github.com/PrestaShop/PrestaShop/pull/4009): [-] CORE : Allow invoice template override
 * [4011](https://github.com/PrestaShop/PrestaShop/pull/4011): [*] CORE : add category thumbnail
 * [4012](https://github.com/PrestaShop/PrestaShop/pull/4012): [*] MO : Blocklanguages add hreflang and rel alternate to the links for a better SEO and avoid duplicate content
 * [4014](https://github.com/PrestaShop/PrestaShop/pull/4014): [*] CORE : Enable invoice number reset
 * [4015](https://github.com/PrestaShop/PrestaShop/pull/4015): [*] BO : Meta title and description use textarea
 * [4016](https://github.com/PrestaShop/PrestaShop/pull/4016): [*] CORE : DbMySQLi and socket + add driver in AdminInformation
 * [4017](https://github.com/PrestaShop/PrestaShop/pull/4017): [*] BO : Fix id_connections in last connections
 * [4021](https://github.com/PrestaShop/PrestaShop/pull/4021): [*] MO : Add rel attribut for google plus link in blocksocial
 * [4022](https://github.com/PrestaShop/PrestaShop/pull/4022): [-] MO : Correct points on product load in loyalty
 * [4024](https://github.com/PrestaShop/PrestaShop/pull/4024): [-] FO : Add to cart button for accessories
 * [4025](https://github.com/PrestaShop/PrestaShop/pull/4025): [*] BO: Fix max width 96px on module logo on "not trusted module" popin.
 * [4026](https://github.com/PrestaShop/PrestaShop/pull/4026): [-] FO: Footer fix in default-bootstrap theme: nocache on copyright year
 * [4027](https://github.com/PrestaShop/PrestaShop/pull/4027): [-] FO: fix when clicking filters labels, not checkbox.
 * [4028](https://github.com/PrestaShop/PrestaShop/pull/4028): [*] CORE : Media::getMediaPath improved
 * [4029](https://github.com/PrestaShop/PrestaShop/pull/4029): [-] BO : Fix e-mail preview
 * [4034](https://github.com/PrestaShop/PrestaShop/pull/4034): [-] FO : Show correct amount of earnable loyalty points.
 * [4037](https://github.com/PrestaShop/PrestaShop/pull/4037): [-] CORE: Fixed currency convertion
 * [4043](https://github.com/PrestaShop/PrestaShop/pull/4043): [-] BO : Enable product pack and product dematerialized for accessories
 * [4059](https://github.com/PrestaShop/PrestaShop/pull/4059): [-] MO: Fix related to problems with product sort and nb_item on Internet Explorer
 * [4065](https://github.com/PrestaShop/PrestaShop/pull/4065): [-] BO : Bad sql association for date_upd of product and categories, could not reorder
 * [4067](https://github.com/PrestaShop/PrestaShop/pull/4067): [-] CORE : Error in foreign field name
 * [4068](https://github.com/PrestaShop/PrestaShop/pull/4068): [-] CORE : Adding few casts to ValidateOrder

The [PrestaShop 1.6.1.2 RC1 changelog](https://www.prestashop.com/en/developers-versions/changelog/1.6.1.2-rc1) is also available.

This release was made possible by the hard work of the PrestaShop Core Team, with the essential help of the following contributors: Alfonso Jiménez, Amazzing, BMS-fenaille, David-Julian BUCH, DogSports, Eolia, Eric Rouvier, Gytis Skema, Krystian Podemski, Marius, Presta Module, PrestaEdit, cgordenne, hiousi, quadrateam. Thank you all!

If you too want to be part of the PrestaShop contributors, [please read this](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)!

And now, let's test this thing!
