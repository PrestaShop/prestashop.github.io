---
layout: post
title:  "PrestaShop 1.7 & performances"
subtitle: "Hey! Not so fast!"
date:   2016-10-28 11:00:00
authors: [ maximebiloe ]
icon: icon-lightning
tags: [1.7]
---

With PrestaShop 1.7, our main purposes were to improve the user experience on the Product Creation page and the Modules page, and also to make it easier to create a front office theme.

As you may know, version 1.7 now includes the Symfony2 framework. If you were afraid that it may slow PrestaShop down, be sure we wanted to avoid that and even do better than PrestaShop 1.6.1.x in terms of Performances! In order to prove that, here are a few statistics.

To make the comparison, we took PrestaShop 1.6.1.7 and PrestaShop 1.7 from GitHub, with data from a real shop:

* 1,827 categories
* 10,843 cart rules
* 1,904 products
* 2 million product attributes
* 16.5 million attribute

The server configuration used is the same as in [our v1.6.1.0 performances article from July 2015](http://build.prestashop.com/news/prestashop-1-6-1-0-performances/#the-configuration).

## Front office

Why is it interesting to compare the front office performances? Because we made a lot of changes there!

We have completely rewritten the .tpl files as well as many of the front controllers. We also changed the way assets are managed. For instance, there is now only one CSS file and only one JS file by default for the theme, in order to reduce the number of HTTP requests. Modules can always load their own CSS files, and it's up to theme developers to compile the assets (using Webpack, for instance).

Let's look at some figures comparing PrestaShop 1.6.1.7 and PrestaShop 1.7.0.0 RC3:

<table>
  <tr>
    <td style="border:0;">&nbsp;</td>
    <td style="text-align:center;font-weight:bold;">1.6.1.7<br />(default-bootstrap)</td>
    <td style="text-align:center;font-weight:bold;">1.7.0.0 RC3<br />(classic)</td>
    <td style="text-align:center;font-weight:bold;">Results</td>
  </tr>
  <tr>
    <td colspan="4" style="text-align:center;font-weight:bold;">Number of lines</td>
  </tr>
  <tr>
    <td style="font-weight:bold;">php</td>
    <td style="text-align:center;">8437</td>
    <td style="text-align:center;">5795</td>
    <td style="text-align:center;color:#78D07D;">-31%</td>
  </tr>
  <tr>
    <td style="font-weight:bold;">tpl</td>
    <td style="text-align:center;">10902</td>
    <td style="text-align:center;">4799</td>
    <td style="text-align:center;color:#78D07D;">-56%</td>
  </tr>
  <tr>
    <td style="font-weight:bold;">js</td>
    <td style="text-align:center;">7452</td>
    <td style="text-align:center;">18181</td>
    <td style="text-align:center;color:#C45C67;">+143%</td>
  </tr>
  <tr>
    <td style="font-weight:bold;">css</td>
    <td style="text-align:center;">14449</td>
    <td style="text-align:center;">8196</td>
    <td style="text-align:center;color:#78D07D;">-43%</td>
  </tr>
  <tr>
    <td colspan="4" style="text-align:center;font-weight:bold;">Number of files</td>
  </tr>
  <tr>
    <td style="font-weight:bold;">tpl</td>
    <td style="text-align:center;">69</td>
    <td style="text-align:center;">115</td>
    <td style="text-align:center;color:#78D07D;">+88%</td>
  </tr>
  <tr>
    <td style="font-weight:bold;">js</td>
    <td style="text-align:center;">24</td>
    <td style="text-align:center;">1</td>
    <td style="text-align:center;color:#78D07D;">-96%</td>
  </tr>
  <tr>
    <td style="font-weight:bold;">css</td>
    <td style="text-align:center;">23</td>
    <td style="text-align:center;">1</td>
    <td style="text-align:center;color:#78D07D;">-95%</td>
  </tr>
  <tr>
    <td colspan="4" style="text-align:center;font-weight:bold;">Size of files (kb)</td>
  </tr>
  <tr>
    <td style="font-weight:bold;">js</td>
    <td style="text-align:center;">314</td>
    <td style="text-align:center;">698</td>
    <td style="text-align:center;color:#C45C67;">+122%</td>
  </tr>
  <tr style="font-weight:bold;">
    <td>css</td>
    <td style="text-align:center;">385</td>
    <td style="text-align:center;">224</td>
    <td style="text-align:center;color:#78D07D;">-42%</td>
  </tr>
</table>


While showing the number or size of PHP files is not a very useful in terms of performances, the decrease in number of PHP files shows that team has worked hard in simplifying controllers and removing old code.

Likewise, the size of TPL files does not speak much in terms of performances since they will be compiled, but the increase of their number shows they are better subdivised.

By removing and rewriting a lot of code lines, we have succeeded in getting the following results to load these front office pages:

### Homepage

We can see here an increase of server memory consumption (+33%) and loading time (+48%, but it's just 40 milliseconds :wink:).

| 1.6.1.7 | 1.7.0.0 RC3 |
|---|---|
| [![Perfs home - 1.6 ](/assets/images/2016/10/perfs-home-1.6.png)](/assets/images/2016/10/perfs-home-1.6-full.png) | [![Perfs home - 1.7](/assets/images/2016/10/perfs-home-1.7.png)](/assets/images/2016/10/perfs-home-1.7-full.png) |

It's not necessarily a bad thing because we know where it comes from and it's for the best: we now send the same product on every page type, with the same data (product listing, product page, cart, etc.). Thus, we now have a consistency of product data available across all pages, and we can now focus on optimizing that part.

Also, we now load all the CSS files for the entire website. The homepage is the first one we see, which explains why the loading time is higher here. It will be faster afterwards, since the necessary JS and CSS files are from now on in the browser cache.

### Category page

| 1.6.1.7 | 1.7.0.0 RC3 |
|---|---|
| [![Perfs category - 1.6](/assets/images/2016/10/perfs-category-1.6.png)](/assets/images/2016/10/perfs-category-1.6-full.png) | [![Perfs category - 1.7](/assets/images/2016/10/perfs-category-1.7.png)](/assets/images/2016/10/perfs-category-1.7-full.png) |

Here the results are almost even, except for a slight increase of server memory consumption (+9%). The reason for this is the same as on the homepage: we now load all the products' data.

### Product page

| 1.6.1.7 | 1.7.0.0 RC3 |
|---|---|
| [![Perfs product - 1.6](/assets/images/2016/10/perfs-product-1.6.png)](/assets/images/2016/10/perfs-product-1.6-full.png) | [![Perfs product - 1.7](/assets/images/2016/10/perfs-product-1.7.png)](/assets/images/2016/10/perfs-product-1.7-full.png) |

It's the most important part, the one you want to be indexed by the search engines. We are 17% faster, which [may improve your SEO ranking](https://moz.com/learn/seo/page-speed).

Globally, the number of rendered pages in 20 seconds with a variable number of connections have been increased.

![Perfs 1.6 Vs 1.7](/assets/images/2016/10/perfs-1.6vs1.7.png)

## Product page in back office

The front office was not our only focus. We wanted to put a definitive end to the “spinning save button” issue on the Product Creating page, which was caused by the loading of all the product's combinations.

To prevent that, we chose to load the combinations 5 by 5 in Ajax. You can still edit the loaded combinations even if they are not all loaded the bulk action is simply disabled while the rest of the combinations are loading.

## Modules page

Because we completely reworked the Modules page, we can't easily compare with the 1.6 version of this page.

Nevertheless, we improved the behavior when the user is trying to install a module causing a fatal error: simply put, it shouldn't break your shop anymore! PrestaShop now analyzes the code to detect parsing errors, and if an error occurs during the installation, the module will be kept on your disk but it won't be installed.

## What to make of this

One of our objectives with 1.7 and its technical changes (the inclusion of the Symfony, the new way Themes work, etc.) was to give users AT LEAST the same performances on the three upgraded areas: the front office, the Product Creation page, and the Modules page.

As the above graphics show you, we mostly succeeded in having not only equal, but sometimes BETTER performances overall! There are situations where the percentage are slightly not in our favor, but they can be explained by features in favor of developers, and therefore, in the end, in favor of merchants and users.

We're not done improving the performances of PrestaShop 1.7.0.0, and we'll keep looking at bottlenecks in order to fix them!
