# PrestaShop Build

Official blog for PrestaShop development straight from the product and core dev team.

https://build.prestashop-project.org

## About

This devblog is where the PrestaCrew communicates directly with the community. It's especially targeted at those who contribute (Core, translations, documentation, modules/themes, etc.)

It is about everything that has to do with PrestaShop development. The whole PrestaShop product team contributes: developers, product managers, designers, tech writers, etc. [We welcome your contributions](#contribute)!

We write about everything that happens to the PrestaShop software:

* New releases,
* Code activity in the past week,
* The upcoming improvement in the codebase,
* Current and future architectures,

...and all behavior changes that might affect you as a developer, a module/theme author, or simply as a Open Source fan :)

This devblog also hosts How-Tos on certain features, before they find their way in the Developer Guide or the Designer Guide.

## Rendering the site locally

### Setup

1. [Install Hugo](https://gohugo.io/getting-started/installing). You will need v0.154.2 (extended binary).
2. Clone the repository somewhere on your system

   ```
   git clone https://github.com/PrestaShop/prestashop.github.io.git
   ```

### Launching the site

1. Make sure you're at the root of the project.

   ```
   cd /path/to/repository/
   ```
2. Launch Hugo server:

   ```
   hugo server
   ```

   Note: You may need to change the path to the `hugo` binary depending on where it is on your system
3. Done! You can open up the site on your browser.

   It's usually available at http://localhost:1313

   Any change you perform on your data will be updated almost instantly.

### Launching the site with Docker

1. Make sure you're at the root of the project.

   ```
   cd /path/to/repository/
   ```
2. Launch Hugo server:

   ```
   docker compose up server
   ```

3. Done! You can open up the site on your browser.

   It's usually available at http://localhost:1313

   Any change you perform on your data will be updated almost instantly.

## Contribute

How about writing a guest post here? Maybe you've been working with PrestaShop for a while and you want to write about how you use it? Or you feel a cool feature could use a highlight with sample code? Go ahead, [suggest a new article](https://build.prestashop-project.org/howtos/misc/how-to-write-on-this-blog/) — that might even inspire other people in the community to write too!

Before you start writing, please send us a short proposal by opening a GitHub issue. Once we have agreed with you on the topic, you can submit your article [using a simple pull request](https://github.com/PrestaShop/prestashop.github.io).

Also, if we merge one of your cool pull requests on [the PrestaShop project](http://github.com/PrestaShop/PrestaShop), we may invite you to tell us more about it here.

All content on the build.prestashop-project.org site is licensed under the [CC-BY-SA license](https://creativecommons.org/licenses/by-sa/4.0/) -- meaning that you can redistribute, remix, adapt, and build upon the content, so long as you give attribution and license the modified content under identical terms.

<img alt="CC-BY-SA" src="static/assets/images/theme/cc-by-sa.png" width="120" style="margin-right:auto;margin-left:auto;display:block;" />

## Guidelines

**Support**

This blog is not for support. If you need help, you can search [our forum](http://www.prestashop.com/forums) or open a new thread there.

**Feature requests**

If you want to see some feature added to PrestaShop, please open an 'Improvement' ticket on [Github](https://github.com/PrestaShop/PrestaShop/discussions/new?category=ideas).

**Bug report**

If you find a bug or something that doesn't work as expected, please open a 'Bug' ticket on [Github](https://github.com/PrestaShop/PrestaShop/issues/new?template=1_bug_report.yml).
