---
layout: post
title:  "New developer documentation for PrestaShop 1.7"
subtitle: "It's online and focusing on differences between 1.6 and 1.7"
date:   2016-09-28 10:00:00
author:  julienbourdeau
icon: icon-penknife
tags: [1.7, documentation]
---

PrestaShop 1.7 is a major release, a lot of code has been refactored, new features have been introduced. So very early in the development release cycle, we decided to write more doc. The documentation very first draft is now online: [http://developers.prestashop.com/](http://developers.prestashop.com/)

## New website

Historically, PrestaShop hosted itsdocumentation on [http://doc.prestashop.com](http://doc.prestashop.com), powered by Atlassian Confluence.  We thought it was no longer developer friendly  - you can't contribute easily, the design is outdated, it's too many clicks - so we decided to move to another software.

As of today, the former website is still online and basically, we split the developer and end-users documentation.

* Merchant doc: [http://doc.prestashop.com](http://doc.prestashop.com)
* Developer doc: [http://developers.prestashop.com](http://developers.prestashop.com)

## Contribute!

We're an open source company, so it was important this new doc would reflect that spirit. We want you to be part of it. We hope to achieve this simply by making the doc feels more like code. Contributing to the documentation is not so different from contributing to PrestaShop!

### The software

About the stack: it's powered by [Sphinx](http://www.sphinx-doc.org/en/stable/). This engine was built to power the Python documentation and became very popular. It's pretty similar to Jekyll (used by this blog): it takes a set of plain files and generates a static website.

Documentation has to be written in restructuredText.

### Available on GitHub (with GitHub Issues)

Since it's plain text files, it's versioned with Git and hosted on GitHub. Is there an easier way for you, as developers, to contribute?!

Please open a pull request to fix or add anything. You canopen an issue if you want to request documentation about anything specific. For example: _"how to use the new product page hooks"_, or _"how to use the theme template in a module"_.

### State of the documentation

#### No design yet

If you already clicked on the link and looked at the documentation you might be thinking that it's ugly. We're still using one of the default themes of Sphinx, but don't worry, our wonderful Product Designer @leadesign will make it nicer.

#### PrestaShop new theme first

One of the main projects of PrestaShop 1.7 was to redo everything about the front office. Since we broke backward compatibility and rewrite so much, we focused on this part in the documentation, explaining what’s different and how you need to adapt your code.

Of course more content is coming soon, here is a list of what we intend to write soon:

* New hooks for carrier and product page
* The best way to upgrade a (front) module from 1.6 to 1.7
* Why and how to use theme template in modules
* How to prepare a zip to release your theme

Much more will follow, and even more if you create GitHub Issues!

## Final words: Ask before hacking

Sometimes when you develop with PrestaShop, you'll want to override something or change some behavior and you don't know how to do it. There is a pretty good chance that you're not the only one trying to do this. Even if you find a hack to do it and it works for you, please open a GitHub issue so we can either document a nice way to do it (if possible) or maybe think about it for a next release.

We hope you'll enjoy it and we are waiting from some feedbacks. Join the community on [Gitter](https://gitter.im/PrestaShop/General) to discuss it.
