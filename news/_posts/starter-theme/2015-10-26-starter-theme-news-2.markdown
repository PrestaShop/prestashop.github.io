---
layout: post
title:  "Starter Theme: fresh news from the front #2"
subtitle: "What's up about Starter Theme"
date:   2015-10-26 15:00:00
authors:  julienbourdeau
icon: icon-lego
tags: [starter-theme]
---

We already have more exciting news about the StarterTheme.

Last week, @djfm came up with a photo to summarize what we aim to do with the StarterTheme:

![PrestaShop StarterTheme Test Suite](/assets/images/2015/10/default-bootstrap-vs-starter-theme.gif)


## The StarterTheme is now part of [PrestaShop/PrestaShop](https://github.com/PrestaShop/PrestaShop/tree/feat/starter-theme/themes/StarterTheme)

When we started this project, we wanted to start from scratch so bad that we
even wanted to have a standalone Git repository. After few days, we realized it wasn't so
easy, because we constantly needed to have the Core repository in sync with the StarterTheme repo.

So we merged the StarterTheme repo into the PrestaShop-develop (1.7) repo. The best part is that @djfm worked out a
way to keep the whole commit history.

Basically, we had to move the StarterTheme repo into a subdirectory, then we merged it
into the PrestaShop repo. For those looking to do the same in their own project, enjoy the command we used:

{% highlight bash %}
git filter-branch --tree-filter 'mkdir -p themes/StarterTheme; for f in *; do if ! [ $f = themes ]; then mv $f themes/StarterTheme; fi; done;' HEAD
{% endhighlight %}



## Minimal CSS for developers

We decided from that the StarterTheme will ship with no CSS at all.

As we were developing various section of the theme, we needed some styles, at least to understand what we were looking at when testing.
It also helps us improve the markup.

Those styles are only here to help developers get a better view of their work-in-progress. They are are inside the `_dev` folder, which will be removed from the *"release package"*.


## The product page

The product page has been fully reworked. It's now split into multiple _partials_ (bits of code that can be reused), and all the logic in the templates
has been removed!

We introduced a ProductPresenter object that prepares a `$product` array for the template. The product will be consistent through
all the pages (product page, home page, category page, etc.).

Do you remember all the issues with the product page we used to have, such as
[this](http://forge.prestashop.com/browse/PSCSX-2359) or [this](http://forge.prestashop.com/browse/PSCSX-3607)? **It's all over**.

Here is a nice example for you.

### Before

{% highlight smarty %}
{if $product->show_price && !isset($restricted_country_mode) && !$PS_CATALOG_MODE}
    <!-- prices -->
    <div>
        <p class="our_price_display" itemprop="offers" itemscope itemtype="https://schema.org/Offer">{strip}
            {if $product->quantity > 0}<link itemprop="availability" href="https://schema.org/InStock"/>{/if}
            {if $priceDisplay >= 0 && $priceDisplay <= 2}
                <span id="our_price_display" class="price" itemprop="price" content="{$productPrice}">{convertPrice price=$productPrice|floatval}</span>
                {if $tax_enabled  && ((isset($display_tax_label) && $display_tax_label == 1) || !isset($display_tax_label))}
                    {if $priceDisplay == 1} {l s='tax excl.'}{else} {l s='tax incl.'}{/if}
                {/if}
                <meta itemprop="priceCurrency" content="{$currency->iso_code}" />
                {hook h="displayProductPriceBlock" product=$product type="price"}
            {/if}
        {/strip}</p>
        <p id="reduction_percent" {if $productPriceWithoutReduction <= 0 || !$product->specificPrice || $product->specificPrice.reduction_type != 'percentage'} style="display:none;"{/if}>{strip}
            <span id="reduction_percent_display">
                {if $product->specificPrice && $product->specificPrice.reduction_type == 'percentage'}-{$product->specificPrice.reduction*100}%{/if}
            </span>
        {/strip}</p>
        <p id="reduction_amount" {if $productPriceWithoutReduction <= 0 || !$product->specificPrice || $product->specificPrice.reduction_type != 'amount' || $product->specificPrice.reduction|floatval ==0} style="display:none"{/if}>{strip}
            <span id="reduction_amount_display">
            {if $product->specificPrice && $product->specificPrice.reduction_type == 'amount' && $product->specificPrice.reduction|floatval !=0}
                -{convertPrice price=$productPriceWithoutReduction|floatval-$productPrice|floatval}
            {/if}
            </span>
        {/strip}</p>
        <p id="old_price"{if (!$product->specificPrice || !$product->specificPrice.reduction)} class="hidden"{/if}>{strip}
            {if $priceDisplay >= 0 && $priceDisplay <= 2}
                {hook h="displayProductPriceBlock" product=$product type="old_price"}
                <span id="old_price_display"><span class="price">{if $productPriceWithoutReduction > $productPrice}{convertPrice price=$productPriceWithoutReduction|floatval}{/if}</span>{if $productPriceWithoutReduction > $productPrice && $tax_enabled && $display_tax_label == 1} {if $priceDisplay == 1}{l s='tax excl.'}{else}{l s='tax incl.'}{/if}{/if}</span>
            {/if}
        {/strip}</p>
        {if $priceDisplay == 2}
            <br />
            <span id="pretaxe_price">{strip}
                <span id="pretaxe_price_display">{convertPrice price=$product->getPrice(false, $smarty.const.NULL)}</span> {l s='tax excl.'}
            {/strip}</span>
        {/if}
    </div>
    <!-- end prices -->

    {if $packItems|@count && $productPrice < $product->getNoPackPrice()}
        <p class="pack_price">{l s='Instead of'} <span style="text-decoration: line-through;">{convertPrice price=$product->getNoPackPrice()}</span></p>
    {/if}
    {if $product->ecotax != 0}
        <p class="price-ecotax">{l s='Including'} <span id="ecotax_price_display">{if $priceDisplay == 2}{$ecotax_tax_exc|convertAndFormatPrice}{else}{$ecotax_tax_inc|convertAndFormatPrice}{/if}</span> {l s='for ecotax'}
            {if $product->specificPrice && $product->specificPrice.reduction}
            <br />{l s='(not impacted by the discount)'}
            {/if}
        </p>
    {/if}
    {if !empty($product->unity) && $product->unit_price_ratio > 0.000000}
        {math equation="pprice / punit_price" pprice=$productPrice  punit_price=$product->unit_price_ratio assign=unit_price}
        <p class="unit-price"><span id="unit_price_display">{convertPrice price=$unit_price}</span> {l s='per'} {$product->unity|escape:'html':'UTF-8'}</p>
        {hook h="displayProductPriceBlock" product=$product type="unit_price"}
    {/if}
{/if}
{% endhighlight %}

### After

{% highlight smarty %}
{block name="product_prices"}
  {if $product.show_price}
    <div class="product-prices">
      {block name="product_price"}
        <p class="product-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
          <link itemprop="availability" href="https://schema.org/InStock"/>
          <span itemprop="price" content="{$productPrice}">{$product.price}</span>
          {if $display_taxes_label}
           {if $priceDisplay} {l s='tax excl.'}{else} {l s='tax incl.'}{/if}
          {/if}
          <meta itemprop="priceCurrency" content="{$currency.iso_code}" />
          {hook h="displayProductPriceBlock" product=$product type="price"}
        </p>
      {/block}

      {block name="product_discount"}
        {if $product.has_discount}
          <p class="product-discount">
            <span class="regular-price">{$product.regular_price}</span>
            {if $product.discount_type === 'percentage'}
              <span class="discount-percentage">{$product.discount_percentage}</span>
            {/if}
            {hook h="displayProductPriceBlock" product=$product type="old_price"}
          </p>
        {/if}
      {/block}

      {block name="product_without_taxes"}
        {if $priceDisplay == 2}
          <p calss="product-without-taxes">{$product.price_tax_exc}</span> {l s='tax excl.'}</p>
        {/if}
      {/block}

      {block name="product_pack_price"}
        {if $displayPackPrice}
          <p class="product-pack-price">{l s='Instead of %s' sprintf=$noPackPrice}</span></p>
        {/if}
      {/block}

      {block name="product_ecotax"}
        {if $displayEcotax}
          <p class="price-ecotax">{l s='Including %s for ecotax' sprintf=$ecotax}
            {if $product.has_discount}
              {l s='(not impacted by the discount)'}
            {/if}
          </p>
        {/if}
      {/block}

      {block name="product_unit_price"}
        {if $displayUnitPrice}
          <p class="product-unit-price">{convertPrice price=$unit_price} {l s='per %s' sprintf=$product.unity}</p>
          {hook h="displayProductPriceBlock" product=$product type="unit_price"}
        {/if}
      {/block}

      {hook h="displayProductPriceBlock" product=$product type="weight" hook_origin='product_sheet'}
      {hook h="displayProductPriceBlock" product=$product type="after_price"}
    </div>
  {/if}
{/block}
{% endhighlight %}

Soon we'll start using Ajax and [Rivets.js](http://rivetsjs.com/) to improve this page.



## Notifications

If you ever worked with PrestaShop, surely you know `$this->errors`, the array where we
store all error messages across the whole software. We now have introduced the
same thing for `success`, `info`, `warning`.
This may look like a small improvement but it's actually a big step forward.

If you look at many templates in `default-bootstrap`, you'll find a lot of pieces of code like this:

{% highlight smarty  %}
{if $category->id AND $category->active}
  // Do something
{elseif $category->id}
  <p class="alert alert-warning">{l s='This category is currently unavailable.'}</p>
{/if}
{% endhighlight %}

Hence the new notification arrays will help remove A LOT of logic from the templates.

Plus, now that messages are set in the controllers, they won't change, which means that they can be translated easily.



## Smarty

You may have noticed that **Twig** appeared in the back office. @xgouley and @kelu95 worked
out a way to have both Twig and Smarty working side by side.

As of today, we don't plan on using Twig for the front office, which means that **all 1.7 frontend templates will be written in Smarty**. No worries, your 1.6 theme will be adaptable to 1.7.


### Secure by default

We told you [from the begining](http://build.prestashop.com/news/starter-theme-kickoff/) that we wanted to escape all Smarty variables in PrestaShop 1.7.0.0. [It's done](https://github.com/PrestaShop/PrestaShop/commit/2a4118947e2a9b1d0cf3d039d5c28a63ddfe7a69)!
If you want NOT to escape your Smarty vars, you'll have to use `nofilter`.

{% highlight smarty  %}
<section id="content" class="page-content page-cms page-cms-{$cms.id}">
  {$cms.content nofilter}
</section>
{% endhighlight %}


### New functions and modifiers

We recently introduced a few Smarty helpers. They will be described in the upcoming theme documentation
(_yeah I swear there will be one!_).

In the meantime, here is a little preview.


### `{url}` function

`{url}` will help you generate any URL you need.

{% highlight smarty %}
{url entity=cms id=2}
{url entity=category id=3}
{url entity=address id=1 params=['delete' => true]}

...will generate, respectively:

http://prestashop.ps/en/content/2-legal-notice
http://prestashop.ps/en/3-women
http://prestashop.ps/en/address?id_address=1&delete=1

{% endhighlight %}



### `classname` and `classnames` modifiers

The `classname` modifier will sanitize any string into a nice CSS class or id.

The `classnames` modifier will transform an array into class names (see example below).

{% highlight php %}
// PHP
$classes = [
  'class1' => true,
  'nice_layout' => true,
  'another-class' => false,
]

// Smarty
class="{$classes|classnames}"

...will generate:

class="class1 nice-layout"

{% endhighlight %}



### Integration tests

We are writing tests for the StarterTheme! You'll be able to use them for your theme to ensure full-compatibilty.

Tests are written in JavaScript on top of [Selenium](http://www.seleniumhq.org/), [WebdriverIO](http://webdriver.io/) and [Chai](http://chaijs.com/).

If you want to launch the test suite or even write some new ones, you should [read the existing documentation](https://github.com/PrestaShop/PrestaShop/blob/feat/starter-theme/tests/StarterTheme/README.md).

![PrestaShop StarterTheme Test Suite](/assets/images/2015/10/starter-theme-test-suite.png)

See you soon for more on the growth of the StarterTheme!
