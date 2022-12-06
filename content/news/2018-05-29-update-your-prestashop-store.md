---
layout: post
title:  "Update your store for GDPR"
subtitle: "Modules and PrestaShop core have been updated"
date: 2018-05-29 19:00:00
authors: [ ColineGinestet, PrestaShop ]
icon: icon-store
tags:
 - 1.7.3.3
 - 1.6.1.19
 - theme
---

Almost all of our merchants have to comply with the law. That’s why we have released the GDPR official module by PrestaShop (1.6 and 1.7 live, 1.5 to be released very soon), helping merchants and contributors to comply with the law. 

Do you have a PrestaShop version 1.7 store? The module is already available in your back-office 


### Introduction

As already explained on our Prestashop.com blog and on build.prestashop.com, the GDPR has and ready to be installed. It is also published on Github in the [PrestaShop/psgdpr](https://github.com/PrestaShop/psgdpr) repository.
For more information and help on how to use  it, we invite you to consult the  [1.7 user documentation](http://doc.prestashop.com/display/PS17/Complying+with+the+GDPR).

**Do you have a store in PrestaShop version 1.6?** We have developed an official GDPR module, compatible with PrestaShop version 1.6. Installing this module on your store just takes a few clicks. See our [Official GDPR Compliance by PrestaShop (1.6) module](https://addons.prestashop.com/en/legal/32323-official-gdpr-compliance-by-prestashop-16.html) available on the PrestaShop Addons Marketplace.
For any questions you may have related to its configuration, we invite you to consult the [1.6 user documentation](http://doc.prestashop.com/display/PS16/Complying+with+the+GDPR) and contact the Addons team for support.


### Core changes

We also have had to update several core features and native modules so that they become compliant with the new law. Indeed, on those forms, a consent checkbox becomes mandatory to be able to send an email and/or a message :
Contact form feature
Newsletter subscription feature 
Email alert feature for out-of-stock products

To be able to update those native modules, we have had to modify their TPLs but also the classic theme as it overrides the modules.  This is the reason why 2 new PrestaShop versions - dedicated to GDPR compliance are released:

* [1.7.3.3](https://download.prestashop.com/download/releases/prestashop_1.7.3.3.zip)
* [1.6.1.19](https://download.prestashop.com/download/releases/prestashop_1.6.1.19.zip)

We have published a dedicated [release note](http://build.prestashop.com/news/prestashop-1-7-3-3-1-6-1-19-maintenance-releases/) if you need details.


### What to do

**If you are a theme developer**

As a theme developer, you need to update your themes to add the same changes we applied on the native modules and on the classic theme, to be GDPR compliant. 

To do so, add the following line in the module TPLs of your theme:

```php
{if isset($id_module)}
           {hook h='displayGDPRConsent' id_module=$id_module}
{/if}
```

Just be sure you add it in **inside a form**.

If you need an example, just check on the PrestaShop Github in [Theme folder > classic > modules > ps_emailsubscribtion](https://github.com/PrestaShop/PrestaShop/blob/3c1b63e06cee1f3c767cb3f46f09cb19bfa62161/themes/classic/modules/ps_emailsubscription/views/templates/hook/ps_emailsubscription.tpl#L66-L68) how the classic theme has been updated to add a consent checkbox below the email field.


**If you are a developer or a merchant**

To be fully compliant, you need to install the GDPR module **and** apply updates on your store :

1/ For 1.7 stores
* Update the 3 following native modules : contactform, ps_emailsubscription and ps_emailalerts
* Update your store to the latest version (1.7.3.3) if you use the classic theme or update your custom theme with GDPR changes or add directly in your Theme folder (for each module) the line indicated above.   


2/ For 1.6 stores
* Update the 2 following native modules : Blocknewsletter, mailalerts. The contact form is not a module in this version, so its update is directly brought by the GDPR module itself.
* Update your store to the latest version (1.6.1.19) if you use the classic theme or update your custom theme with GDPR changes or add directly in your Theme folder (for each module) the line indicated above.  
