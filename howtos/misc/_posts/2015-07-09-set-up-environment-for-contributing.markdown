---
layout: post
title:  "Set up your local environment for contributing"
subtitle: "Set up your git and code editor to follow standards"
date:   2015-07-09 11:21:00
author: julienbourdeau
icon: fa-laptop
tags: [git, psr-2, env, Sublime Text]
---

There are few rules to follow if you want to contribute to any open source project. Usually the guidelines
are described in a [CONTRIBUTING.md](https://github.com/PrestaShop/PrestaShop/blob/develop/CONTRIBUTING.md) file
inside the project root directory.

This walkthrough is meant to help you set up your development environment in order to get your contribution
validated quickly and without further modifications.

We'll be talking about PrestaShop but what you'll read here applies for most PHP open srouce projects.

# Git configuration

PrestaShop is version with Git and hosted in GitHub. If you intend to make a Pull Request you should make sure your
git configuration is well set so you don't run into issue (like having commits that are not yours in your PR).


We recommend you to use the settings below for your `~/.gitconfig` file.

{% gist julienbourdeau/be21f43006244234675e %}

Like I said, this configuration will also be useful if you contribute to other open source projects.

This config is widely inspired by [this one](https://gist.github.com/tdd/470582).



# Your code

## Code editor

PrestaShop recently moved [from its own coding standards to PSR-2](http://build.prestashop.com/news/prestashop-moves-to-psr-2/)
so you shoud tell your editor to do some work for you. **Even so, you must have a look at the
[PSR-2 requirements](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md) before you start coding.**

Below, the few PSR-2 rules related to files and lines that your editor has to take care of.
Have a look at your editor's settings, there must be an option for each of them.

- **Code MUST use 4 spaces for indenting, not tabs.**
- PHP code MUST use only UTF-8 without BOM.
- All PHP files MUST use the Unix LF (linefeed) line ending.
- All PHP files MUST end with a single blank line.
- There MUST NOT be trailing whitespace at the end of non-blank lines.
- There MUST NOT be a hard limit on line length; the soft limit MUST be 120
  characters; lines SHOULD be 80 characters or less.


### Config pour Sublime Text

If you are a Sublime Text user you can use the following configuration file.

{% gist julienbourdeau/db791f7424b59532363e %}

An even more better version is available [here](https://gist.github.com/julienbourdeau/47cbd09d1a73bd6c4546).


## PHP CodeSniffer

Once it's done you might want to take a look at [_Php CodeSniffer_](https://github.com/squizlabs/PHP_CodeSniffer) and a plugin for your IDE.
It will highlight your code if it does follow PSR-2 requirements. Personnaly, I'm not a big fan but it's probably worth the try.

I prefer the _fixer approach_. Php CodeSniffer will identify the code that does follow the standards and
[php-cs-fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer) will fix it for you, so you don't have to edit your file by hand.

We convert the whole code base with this tool (have a look at [this commit](https://github.com/PrestaShop/PrestaShop/commit/f0b3faebeb4e713b13dc7fda88d6d9acb28230fd)
or [this one](https://github.com/PrestaShop/PrestaShop/commit/c98a9bbc38fbcb186e0a3339f7ae494fa2a06c32)).

{% alert important %}
When you fix it, please make sure you commit only fixes related to your code.
{% endalert %}

The best way will be to fix each file one by one with the following command line:

{% highlight bash %}
php php-cs-fixer.phar fix /path/to/modified/file --level=psr2
{% endhighlight %}


That's it ! Once you read [this](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message) and [this](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop),
you are now ready to contribute to PrestaShop.

