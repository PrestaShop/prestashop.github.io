---
layout: post
title:  "PrestaShop is now available on Composer"
subtitle: "A new way to kickstart your projects"
date:   2021-05-24
authors:  [ PrestaShop ]
icon: icon-gift
tags:
- news
- composer
- development
---

Released almost 10 years ago, [Composer](https://getcomposer.org/) is the most popular package manager for the PHP ecosystem. PrestaShop has been using it since 1.7.0 to manage its dependencies, including [all the native modules](https://devdocs.prestashop.com/1.7/development/native-modules/).

Today we are announcing the general availability of PrestaShop itself through Composer. Thanks to this, it is now possible to easily create a new PrestaShop project from the command line, like this:

```
composer create-project prestashop/prestashop
```

Or, if you want to download a specific version instead of the latest release:

```
composer create-project prestashop/prestashop:1.7.7.0
```

Now you have more flexibility to kickstart your PrestaShop projects from the command line. Enjoy!
