---
layout: post
title:  "PrestaShop theme documentation first draft is out"
subtitle: "Read it and tell us what else you want to know"
date:   2016-04-25 09:00:00
author: julienbourdeau
icon: icon-book
---

With PrestaShop 1.7 we completely rewrote the way shop theme works.
Along with these changes, we intended to publish a full documentation that would help you create an amazing and creative new theme or adapt your theme to PrestaShop 1.7.

Throughout the development process we wrote [many articles](/tag/starter-theme/) to keep you up-to-date with our progresses on the _StarterTheme_. We talked about the introduction of new features and also deprecation/removal of existing features.

With the Starter Theme, we introduce many new ways of developing themes, we reorganized the whole directory, moved templates, changed module override folders and deleted assets. Hence there is no backward-compatibility with PrestaShop 1.5/1.6 themes.

Obviously we had to provide documentation since all you already knew about theme development with prestashop might have changed. Don't worry, there is nothing crazy about it, it still relies on Smarty and (pretty much) the same front controller list. **After 15 minutes you will feel at home again**.


[Read PrestaShop Theme Documentation](https://github.com/PrestaShop/docs){: .btn .btn-lg .btn-default}
{: .text-center}



## The state of the documentation

We wanted to publish the documentation as soon as possible, so today we made the [GitHub repository](https://github.com/PrestaShop/docs) public. We hope you'll read it through and tell us what's missing and what else you'd like to find in it.

Please keep in mind that **the content is far from being finished** (is a documentation ever finished?).

As of today, the documentation is a collection of text files, without any rendering system (see [below](#adopting-sphynx-and-restructuredtext)).

It includes [JSON files](https://github.com/PrestaShop/docs/tree/master/themes/templates/datasets/side-wide), which hold an example of the data passed to the templates like: `$customer`, `$page`, `$breadcrumb`, `$cart`... These data will be irrevocable when PrestaShop 1.7 final is released, and they will be maintained during the whole 1.7 life cycle. **Trust these datasets**.

<img style="border: 1px solid #CCC; padding: 10px;" src="/assets/images/2016/04/doc-sphynx-screenshot.png">


## Adopting Sphynx and reStructuredText

We decided to move from _Atlassian Confluence_ to _Sphynx_ (at least for the developer documentation), and use [reStructuredText](http://docutils.sourceforge.net/docs/user/rst/quickref.html) files, available on our GitHub repository.

> reStructuredText is a lightweight markup language designed to be both (a) processable by documentation-processing software such as Docutils, and (b) easily readable by human programmers.
> -- [Wikipedia](https://en.wikipedia.org/wiki/ReStructuredText))

We now have a bunch of nice reStructuredText files, so we can enjoy the power of Git for our documentation: compared to the Confluence system, it's much more flexible. 

> Sphinx converts reStructuredText files into HTML websites and other formats including PDF, EPub and man.
>
>reStructuredText is extensible, and Sphinx exploits its extensible nature through a number of extensions -- for autogenerating documentation from source code, writing mathematical notation or highlighting source code, etc.
> -- [Wikipedia](https://en.wikipedia.org/wiki/Sphinx_(documentation_generator))

Then, of course, anyone can contribute through pull-requests on the GitHub repository. That is another big advantage compare to Confluence.

Finally, this stack is also used for [Symfony documentation](https://github.com/symfony/symfony-docs), so if you're already a Symfony contributor: there is nothing new to learn. Easier for everybody, as we're using Symfony in PrestaShop 1.7.


## How to contribute

Contribution guidelines can be easily summarized: **Use the power of GitHub!**

The documentation is fully managed on GitHub (exactly like this blog) so don't hesitate to open an issue or a pull-request.

#### If you want more details about something

Open an [issue](https://github.com/PrestaShop/docs/issues/new) here and **detail as much as possible** what you are trying to do. You can also join us on [Gitter](https://gitter.im/PrestaShop/docs).

#### If you want to edit the doc

If you want to modify content or fix a typo, please do it through a pull-request. We will soon publish the guidelines for writing the doc :)

#### Don't use "workarounds"

If you are trying to do something in particular with your theme or module, **please, please, please don't try to find a workaround on your own!** Tell us about it on [Gitter](https://gitter.im/PrestaShop/docs) (ping us) or open a [GitHub issue](https://github.com/PrestaShop/docs/issues/new) where we can have a conversation about it. You are probably not the only one in the community who need this feature or this change of behavior.


Enjoy!
