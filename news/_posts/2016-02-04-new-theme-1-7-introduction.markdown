---
layout: post
title:  "New default theme for PrestaShop 1.7"
subtitle: "What will the new PrestaShop look like?"
date:   2016-02-04 09:00:00
author:  maximebiloe
icon: icon-wand
tags: [1.7]
---

The first beta version for PrestaShop 1.7 is approaching quickly, so we have started to work on the new 1.7 default theme, currently named "He who must *be* named" — tentatively named "classic" for now, for lack of a better name :) It is based on the [StarterTheme](http://build.prestashop.com/tag/starter-theme/) that we've been telling you about here on Build — what best way to test what we've been working on for a while?

As a reminder, the StarterTheme is a minimal theme for PrestaShop with all the necessary features for a proper ecommerce theme, but without any style and as little JavaScript as possible, so that theme designers can build their theme upon a strong foundation. If you want to know more about it, keep reading!

## Working methods

We have decided to work on a [dedicated branch](https://github.com/PrestaShop/PrestaShop/tree/feat/classic) on the main PrestaShop GitHub repository. This branch is frequently rebased (or 'updated', if you will) on the [`feat/starter-theme` branch](https://github.com/PrestaShop/PrestaShop/tree/feat/starter-theme), which is then itself rebased on the main `develop` branch — where all the 1.7 fun happens. This way, we get all the evolutions without disturbing the other projects.

Don't hesitate to get involved and contribute to the Starter Theme! We have a [dedicated Gitter discussion channel](https://gitter.im/PrestaShop/StarterTheme), and you can follow the planned work on [our Trello board](https://trello.com/b/FPwYidfj/prestashop-startertheme).

The project team is composed of [Léa](https://www.behance.net/leamendes) (UI/UX), [Jessica](https://www.behance.net/jessicagantier) (UI/UX), [Nicolas](https://github.com/nihco2) (Front-End Developer), [Ivan](https://github.com/ishcherbakov) (Front-End Developer), [François-Marie](https://github.com/djfm) (Product Manager) and [myself](https://github.com/maximebiloe) (coordinating with the StarterTheme team).

## Let's talk about technic

In the new Prestashop 1.7 default theme, we will minify all the media files by compiling them into one single file per media type: `theme.css` and `theme.js`.
In order to do that, we are using [webpack](https://webpack.github.io), a module bundler, working with Node.js.
It prevents us from making too many HTTP(S) requests to the webserver to load all the assets when you access to the website.

<div class="alert alert-note" role="alert">
This section describes our CSS and JavaScript toolchains when creating the default theme.

Note that of all these are used in the default theme only: the Starter Theme has none of those, making it possible for you to use any framework or tool you prefer when building YOUR theme on top of it.
</div>

### CSS

The default theme includes the [Bootstrap 4](http://v4-alpha.getbootstrap.com) framework, and uses [Sass](http://sass-lang.com) in association with [Bourbon](http://bourbon.io) to generate all the CSS assets. Bourbon eases the front-end developer's life by providing some helpers to automatically generate all the prefixes needed by the browsers.

An example is better than a long speech:

{% highlight smarty %}
section {
  {% raw %}@{% endraw %}include linear-gradient(to top, red, orange);
}
{% endhighlight %}

becomes:

{% highlight smarty %}
section {
  background-color: red;
  background-image: -webkit-linear-gradient(bottom, red, orange);
  background-image:         linear-gradient(to top, red, orange);
}
{% endhighlight %}

Also, we have decided to structure our CSS-naming according to the rscss guidelines.
Here are some of its recommandations:

* The CSS content should be thought in components: each piece of UI is an individual CSS component.
* Components will be named with at least two words, separated by a dash (`.default-input`, `.radio-field`...)
* Prefer to use the > child selector whenever possible (`dropup > .btn > .caret`, `.table-active > th`)
* Helpers must be prefixed by an underscore (`.\_relative`, `.\_margin-left-small`, `.\_shadow`...)

Those are just a few examples, we invite you to read more [here](http://rscss.io).


### JavaScript

We have chosen to use jQuery 2.2 and the [Babel](https://babeljs.io) compiler for our JavaScript code. We are following the [ES2015 standard](https://babeljs.io/docs/learn-es2015) (EcmaScript 6).

**What about compatibility?**

Of course, we will support all the modern browsers, and we will be IE9+ compliant.


## What about UI/UX?

The main guideline we wanted to follow when we designed the default theme is that it must be able easily adapted to any kind of products sold on the website. We chose to make something visually lighter than usual, so that the real stars of the shop will be the products!

To help our front-ends developers, our designers have made a style guide. It allows us to ensure a graphical consistency in the new default theme.

Here is a preview of the **style guide** for the new default theme:

[![PrestaShop Style Guide New Default Theme](/assets/images/2016/02/style-guide-new-default-theme-mini.png)](/assets/images/2016/02/style-guide-new-default-theme.png)

Now, I'm sure you want to see what this new default theme looks like :wink: Here it is!

![PrestaShop New Default Theme Home](/assets/images/2016/02/new-default-theme-home.png)
![PrestaShop New Default Theme Product](/assets/images/2016/02/new-default-theme-product.png)


## What's next?

The new default theme is still work in progress — and the Starter Theme is being fine-tuned throughout its development. Both will be released in beta at the same time that PrestaShop 1.7 beta version. Soon, then!

We want this to be a community effort! All your comments and feedbacks are welcome, and we will be glad to hear them. Come talk to use on the Gitter channel, and if you have a good idea for [the Starter Theme](https://github.com/PrestaShop/PrestaShop/tree/feat/starter-theme) or [the default theme](https://github.com/PrestaShop/PrestaShop/tree/feat/classic), don't hesitate to make a PR on their respective GitHub repository!

<div class="alert alert-note" role="alert">
Currently, the two themes are in their own branches, which is not ideal for contributors who work from the main `develop` branch. We're doing our best to get everything merged into the `develop` as soon as possible. It should happen over the coming days. 
If you want to work on the default theme, it is now relatively easy: just install it as if it were the `develop` branch. The default theme will be installed by default (as expected!) and set up with all the modules at the right positions.
</div>
