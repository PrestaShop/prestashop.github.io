---
layout: post
aliases: ["/news/prestashop-1-7-8-4-maintenance-release"]
title:  "Release of PrestaShop 1.7.8.4"
subtitle: "Maintenance version of the 1.7.8.x branch"
date:   2022-03-09
authors: [ PrestaShop ]
image: /assets/images/2022/03/1.7.8.4_banner.jpg
icon: icon-checked
tags:
 - version
 - patch
 - releases
 - "1.7.8.x"
 - "1.7"

---

PrestaShop 1.7.8.4 is now available. This maintenance release fixes 23 bugs and feature request.

![1.7.8.4 is available!](/assets/images/2022/03/1.7.8.4_banner.jpg)


We suggest upgrading your store quickly to benefit from these bug fixes. Make sure to perform a full manual backup before, so you can roll back the upgrade if something goes wrong.

Reminder: the latest version of the 1-Click Upgrade module is v4.14.0, don't forget to upgrade it.

## Bug fixes and improvements

- [Reverts the integration of Symfony kernel in the webservice dispatcher](https://github.com/PrestaShop/PrestaShop/issues/27411)
- [Update links to docs : docs.prestashop-project.org instead of doc.prestashop.com](https://github.com/PrestaShop/PrestaShop/issues/27493)
- [Fix translations installation broken by prefix](https://github.com/PrestaShop/PrestaShop/issues/27029)
- [Fix the category dropdown on the module catalog page](https://github.com/PrestaShop/PrestaShop/issues/27747)
- [Align checkboxes of multistore widget](https://github.com/PrestaShop/PrestaShop/issues/26904)
- [Fix php notices while loading subtotals](https://github.com/PrestaShop/PrestaShop/issues/27447)
- [Removed double escape for Tree Node template  to fix an error in some  BO legacy pages](https://github.com/PrestaShop/PrestaShop/issues/27616)
- [Fix the product grade not displayed in the list page](https://github.com/PrestaShop/PrestaShop/issues/27252)
- [Fix an error while adding product to cart in quantity check](https://github.com/PrestaShop/PrestaShop/issues/27505)
- [Remove duplicate shopping carts and  make sure carts are linked](https://github.com/PrestaShop/PrestaShop/issues/27450)
- [Fix Entities Mapping error on debug mode](https://github.com/PrestaShop/PrestaShop/issues/27218)
- [Fix the padding left of the header of the stock page](https://github.com/PrestaShop/PrestaShop/issues/27356)
- [Fix an unclear alert with an invalid address on FO](https://github.com/PrestaShop/PrestaShop/issues/26833)
- [Fix product sorting on new product page](https://github.com/PrestaShop/PrestaShop/issues/27146)
- [Make the progress bar percentage visible on bulk actions on product page](https://github.com/PrestaShop/PrestaShop/issues/27386)
- [Fix scrollbar position in sidebar menu in BO for RTL version](https://github.com/PrestaShop/PrestaShop/issues/27325)
- [Fix customer grid data factory](https://github.com/PrestaShop/PrestaShop/issues/27235)
- [Add class on light display layout and remove padding top](https://github.com/PrestaShop/PrestaShop/issues/27266)
- [Fix default value for jQuery colorpicker](https://github.com/PrestaShop/PrestaShop/issues/27249)
- [Reduce the number of queries on one by page by 50 - 150](https://github.com/PrestaShop/PrestaShop/issues/26747)
- [Fix display of download button on credit slip page](https://github.com/PrestaShop/PrestaShop/issues/26779)
- [Improve CMS edit page footer](https://github.com/PrestaShop/PrestaShop/issues/26633)
- [Fix login when debug mode is activated and severity of logs is 2](https://github.com/PrestaShop/PrestaShop/issues/26680)


## Acknowledgments

Contributors to this patch version:

[PrestaEdit](https://github.com/PrestaEdit), [NeOMakinG](https://github.com/NeOMakinG), [Progi1984](https://github.com/Progi1984), [okom3pom](https://github.com/okom3pom), [atomiix](https://github.com/atomiix), [mparvazi](https://github.com/mparvazi), [rsoulard-prolaser](https://github.com/rsoulard-prolaser), [sowbiba](https://github.com/sowbiba), [Hlavtox](https://github.com/Hlavtox), [eternoendless](https://github.com/eternoendless),[vladikk007](https://github.com/vladikk007), [saulaski](https://github.com/saulaski), [matks](https://github.com/matks), [PierreRambaud](https://github.com/PierreRambaud), [lmeyer1](https://github.com/lmeyer1), [jolelievre](https://github.com/jolelievre), [jf-viguier](https://github.com/jf-viguier), [nesrineabdmouleh](https://github.com/nesrineabdmouleh)

Thank you!

{{< cta "https://www.prestashop.com/versions" >}}Download PrestaShop 1.7.8.4 now!{{< /cta >}}

Since version 1.7.8.4 is a “patch” update to version 1.7.8.3, upgrading from any 1.7.8 version will be easy: features will work better, and modules & themes which worked fine on 1.7.8.x will work just as well with 1.7.8.3. Upgrades from a standard 1.7.x version should work just as well.
