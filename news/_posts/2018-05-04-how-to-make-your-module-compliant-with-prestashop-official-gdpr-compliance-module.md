---
layout: post
title:  "How to make your module compliant with PrestaShop’s Official GDPR Compliance Module"
subtitle: "Discover our module and get prepared!"
date: 2018-05-03 14:00:00
authors: [ PrestaShop ]
icon: check
tags:
 - team
 - legal
 - gdpr
---

Everybody must already know, there are a few steps to follow in order to make your module compliant with the **General Data Protection Regulation (GDPR)**

1. Add a consent confirmation checkbox if the module collects personal data
2. Allow users to ask for total removal of their personal data
3. Allow users to ask for a comprehensive export of their personal data owned by the site

The Official GDPR Compliance Module by PrestaShop will be available soon, and it provides you with 4 new hooks to help you meet these requirements.


### Hook 1: Register your module into the GDPR module

```php
$this->registerHook('registerGDPRConsent')
```

The first step is to register your module into our Official GDPR Compliance Module with the hooks. We recommend to do it during its install process:

```php
/**
 * Executed at the install of your module
 *
 * @return void
 */
public function install()
{
    // register hook used by the module
    if (parent::install()
        && $this->registerHook('registerGDPRConsent')
        && $this->registerHook('actionDeleteGDPRCustomer’)
        && $this->registerHook('actionExportGDPRData')
)
 {
        return true;
    } else { // if something wrong during installation return false
        $this->_errors[] = $this->l('There was an error during the installation. Please contact us through Addons website.');
        return false;
    }
}
```

This operation is very simple but mandatory, so that the Official GDPR Compliance Module registers the list of modules it handles.


### Hook 2: Delete customer personal data

```php
$this->registerHook('actionDeleteGDPRCustomer’)
```

When a customer asks for his personal data to be removed from the store, the store owner can either accept or decline the request (for legal obligation requirement for instance). If the store owner accepts the customer’s request, all personal data collected by PrestaShop can be removed (with the “Delete” feature available in the module).

Furthermore, since nobody else knows your module better than you, we also allow you to hook your module to the data removal process in order to delete the personal data **collected by your module**. 

This hook allows to delete the customer’s data and **return true** if everything went well. Obviously, the hook must return an **array or a string encoded to json** (```json_encode``` function) of errors if not:

```php
 public function hookActionDeleteGDPRCustomer ($customer)
   {
       if (!empty($customer['email']) && Validate::isEmail($customer['email'])) {
           $sql = "DELETE FROM "._DB_PREFIX_."popnewsletter_subcribers WHERE email = '".pSQL($customer['email'])."'";
           if (Db::getInstance()->execute($sql)) {
               return json_encode(true);
           }
           return json_encode($this->l('Newsletter Popup : Unable to delete customer using email.'));
       }
   }
```

The Official GDPR Compliance Module triggers the deletion hook with the customer (array) as parameter.

### HOOK 3: Export personal data

```php
$this->registerHook('actionExportGDPRData')
```

Lastly, if a customer asks for an export of his personal data, this hook allows to select all his data and return them in a csv or pdf format. It works the same way as the deletion hook, but instead of removing data (delete from…) you need to return data to export in json:

```php
public function hookActionExportGDPRData ($customer)
   {
       if (!Tools::isEmpty($customer['email']) && Validate::isEmail($customer['email'])) {
           $sql = "SELECT * FROM "._DB_PREFIX_."popnewsletter_subcribers WHERE email = '".pSQL($customer['email'])."'";
           if ($res = Db::getInstance()->ExecuteS($sql)) {
               return json_encode($res);
           }
           return json_encode($this->l('Newsletter Popup : Unable to export customer using email.'));
       }
   }
```

If any error occurs, it returns the error. As for the hook 3, it must return an array or a string encoded to json (```json_encode``` function) of errors.


### Hook 4: Display user consent checkboxes

```php
{hook h='displayGDPRConsent' mod='psgdpr' id_module=$id_module}
```

The hook must be used inside your module’s template files (.tpls). Calling this hook will simply display a checkbox + a text block. So place it where you need it. However please read the 2 requirements below :
*  The hook must be inside a html form (```<form></form>```)
*  You must smarty assign the module’s ID:  ```$this->context->smarty->assign(array('id_module' => $this->id));```

```php
<form action="{$urls.pages.index}#footer" method="post">
               <div class="row">
                   <input class="btn btn-primary float-xs-right hidden-xs-down" name="submitNewsletter" type="submit" value="{l s='Subscribe' d='Shop.Theme.Actions'}">
                   <div class="input-wrapper">
                       <input name="email" type="text" value="{$value}" placeholder="{l s='Your email address' d='Shop.Forms.Labels'}" aria-labelledby="block-newsletter-label">
                   </div>
               </div>
               {hook h='displayGDPRConsent' mod='psgdpr' id_module=$id_module}
           </form>
```

The Official GDPR Compliance Module provides an interface listing all the registered modules (using the hook 1). For each checkbox, you can define the text in multiple languages. 

![Setting messages for your module](/assets/images/2018/05/gdpr-howto.png)

Good thing is, if the checkbox is not checked, the form cannot be submitted!


### Extra information

```$customer``` could be either an array equivalent to the Customer Object or simply an email. Why? Some modules can save personal data that aren’t coming from a regular PrestaShop Customer. In such cases, we provide the user’s email so you can still delete the data.

Once you have submitted your module and declared it is compliant with the law, our validation team:
* Checks the presence of hooks necessary to plug your module to the official GRPD module;
* Checks the hooks integrity, meaning checks that your code does not imply any PrestaShop data, but only data collected by your module.


### Support & Questions
Do you have any questions?
* Comment this article to let us know
* If your modules are already on Addons, you can also get support via the Help Center.
* If you are developing custom modules that are not available on Addons, you can get support on the Forum.

