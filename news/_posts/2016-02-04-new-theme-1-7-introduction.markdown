---
layout: post
title:  "New default theme for PrestaShop 1.7"
subtitle: "What will the new PrestaShop look like?"
date:   2016-02-04 15:00:00
author:  maximebiloe
icon: icon-wand
tags: [1.7]
---

The first beta version for PrestaShop 1.7 is approaching quickly, so we have started to work on the new 1.7 default theme, currently named "He who must be named". It is based on the [StarterTheme](http://build.prestashop.com/tag/starter-theme/) that we've been telling you about here on Build -- what best way to test what we've worked on for a while?

As a reminder, the StarterTheme is a minimal theme for PrestaShop with all the features but without any style and the minimal JavaScript. If you want to know more about it, keep reading!

## Working methods

We have decided to work on a [dedicated branch](https://github.com/PrestaShop/PrestaShop/tree/feat/classic) on the main PrestaShop GitHub repository. This branch is frequently rebased on the `feat/starter-theme` branch, which is then itself rebased on the `develop` branch -- where all the 1.7 fun happens. This way, we get all the evolutions without disturbing the other projects.

Don't hesitate to get involved and contribute! We're available on [Gitter](https://gitter.im/PrestaShop/StarterTheme) and can follow the work on [Trello](https://trello.com/b/FPwYidfj/prestashop-startertheme).

The project team is composed of [Léa](https://www.behance.net/leamendes) (UI/UX), [Jessica](https://www.behance.net/jessicagantier) (UI/UX), [Nicolas](https://github.com/nihco2) (Front-End Developer), [Ivan](https://github.com/ishcherbakov) (Front-End Developer), [François-Marie](https://github.com/djfm) (Project Manager) and [myself](https://github.com/maximebiloe) (coordinating with the StarterTheme team).

## Let's talk about technic

In the new Prestashop 1.7 default theme, we will minify all the media files by compiling them into one single file per media type: `theme.css` and `theme.js`.
In order to do that, we are using [webpack](https://webpack.github.io), a module bundler, working with Node.js.
It prevents us from making too many HTTP(S) requests to the webserver to load all the assets when you access to the website.

### CSS

We are including the [Bootstrap 4](http://v4-alpha.getbootstrap.com) framework and using [Sass](http://sass-lang.com) in association with [Bourbon](http://bourbon.io) to generate all the CSS assets. Bourbon eases the front-end developer's life by providing some helpers to automatically generate all the prefixes needed by the browsers.

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

Also, we have decided to structure our CSS-naming according to rscss guidelines.
Here are some of its recommandations:

* The CSS content should be thought in components: each piece of UI is an individual CSS component.

* Components will be named with at least two words, separated by a dash (`.default-input`, `.radio-field`...)

* Prefer to use the > child selector whenever possible (`dropup > .btn > .caret`, `.table-active > th`)

* Helpers must be prefixed by an underscore (`.\_relative`, `.\_margin-left-small`, `.\_shadow`...)

Those are just a few examples, we invite you to read more [here](http://rscss.io).


### JavaScript

We have chosen to use jQuery 2.2 and the [Babel](https://babeljs.io) compiler for our JavaScript code. We are following the [ES2015 standard](https://babeljs.io/docs/learn-es2015) (EcmaScript 6).

**What about compatibility?**
Of course, we will support all the modern browsers and we will be IE9+ compliant.

## What about UI/UX?

The main guideline we wanted to follow when we designed the theme is that it must be able easily adapted to any kind of products sold on the website. We chose to make something visually lighter than usual, so the real stars of the shop will be the products!

To help our front-ends developers, our designers have made a style guide. It allows us to ensure a graphical consistency in the new default theme.

Here is a preview of the **style guide** for the new default theme:

[![PrestaShop Style Guide New Default Theme](/assets/images/2016/02/style-guide-new-default-theme-mini.png)](/assets/images/2016/02/style-guide-new-default-theme.png)

Now, I'm sure you want to see what this new default theme looks like :wink: Here it is!

![PrestaShop New Default Theme Home](/assets/images/2016/02/new-default-theme-home.png)
![PrestaShop New Default Theme Product](/assets/images/2016/02/new-default-theme-product.png)

## What's next?

The new default theme is still work in progress. It will be released in beta at the same time that PrestaShop 1.7 beta version. All your comments and feedbacks are welcome and we will be glad to hear them.
