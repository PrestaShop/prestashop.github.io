---
layout: post
aliases: ["/news/starter-theme-news"]
title:  "Starter Theme: fresh news from the front"
subtitle: "What's up about Starter Theme"
date:   2015-10-01 18:00:00
authors:  [ alexsegura ]
icon: icon-lego
tags: [starter-theme]
---

It's been a month since PrestaShop announced a <a href="http://build.prestashop.com/news/starter-theme-kickoff/" target="_blank">new Starter Theme project</a>.

It's an important project, both because it touches on something that's been tricky for many years, namely being able to quickly build a quality and standard-respecting theme from scratch, and because it's truly a project built for and with the community, with [a dedicated branch](https://github.com/PrestaShop/PrestaShop/tree/feat/starter-theme), its [own Gitter channel](https://gitter.im/PrestaShop/StarterTheme) for discussions, and even [its own Trello board](https://trello.com/b/FPwYidfj/prestashop-startertheme) (yes, outside of the Forge!).

Hence, the project is indeed led by a handful of PrestaShop's Core developers, in parallel of PS 1.7's development, but they are trying new ways to reach the Community and make us participate -- like with this article, which is not written by a PrestaShop staff member but a Community member. Come participate!

Now, with that in mind, here are some news about the work in progress: what is being discussed, what has been implemented, what's next...


### Template inheritance

This is the most important change since the 1.6 Theme API: starting from version 1.7.x, PrestaShop themes need to be written using **template inheritance**.

Template inheritance is a common concept shared among all major template engines ([among which Smarty](http://www.smarty.net/inheritance)), so it should make no difference when PrestaShop starts supporting other template engines, like [Twig](http://twig.sensiolabs.org/) (see [Twig's documentation](http://twig.sensiolabs.org/doc/templates.html#template-inheritance)).

Rendering is now performed in a single step, and the `header.tpl` & `footer.tpl` files are no longer mandatory.

It means it is now the template rendered by the controller which chooses the layout.

```smarty {linenos=true}
{extends "{$layout}"}

{block "content"}
  Hello, world!
{/block}
```

In the layout file, template blocks are used to define the content areas.

```smarty {linenos=true}
<!DOCTYPE html>
<html lang="en">
  <head>
    {include "_partials/head.tpl"}
  </head>
  <body>
    {block "content"}{/block}
  </body>
</html>
```

The `$layout` variable will always be available, but you can always change the layout if you want.

```smarty {linenos=true}
{extends "path/to/crazy_layout.tpl"}

{block "content"}
  Hello, world!
{/block}
```

### Relative template path

You can now include a template without using the `$tpl_dir` variable.

Templates will be resolved starting from the current theme root directory.

```smarty {linenos=true}
{include "_partials/head.tpl"}
```

### New directory structure

Templates have been reorganized into functional (and more logical) subfolders:

<pre>
└── templates
    ├── _partials
    │   ├── footer.tpl
    │   ├── head.tpl
    │   ├── header.tpl
    │   └── search.tpl
    ├── catalog
    │   ├── _partials
    │   │   └── ...
    │   ├── category.tpl
    │   └── product.tpl
    ├── checkout
    │   ├── _partials
    │   │   └── ...
    │   └── cart.tpl
    ├── cms
    │   ├── _partials
    │   │   └── ...
    │   └── ...
    ├── customer
    │   ├── _partials
    │   │   └── ...
    │   └── ...
    ├── errors
    │   └── ...
    └── index.tpl
</pre>

### Widgetizable modules

The `WidgetInterface` has been introduced: any module implementing this interface can be rendered **anywhere**, even outside of the hooks it was designed to work with.

Right now, only a few modules implement this interface, but more and more modules will be "widgetized".

```php {linenos=true}
interface WidgetInterface {
    public function renderWidget($hookName, array $configuration);
    public function getWidgetVariables($hookName, array $configuration);
}
```

The `{widget_block}` block function allows to customize the HTML code even more.
Really handy when you need to prototype a theme quickly without knowing anything about the hooks for a module!

```smarty {linenos=true}
{widget_block name="blocklanguages"}
<div>
  <div>{$current_language.name}</div>
  {foreach $languages as $language}
    {$language.name}
  {/foreach}
</div>
{/widget_block}
```

If you want to have a further look, these two modules have been widgetized:

* [blocklanguages](https://github.com/PrestaShop/blocklanguages/tree/feat/starter-theme)
* [blocktopmenu](https://github.com/PrestaShop/blocktopmenu/tree/feat/starter-theme)

### Custom Smarty plugins

You can now embed your own custom [Smarty plugins](http://www.smarty.net/docs/en/plugins) in a theme.

Just add files following the <a href="http://www.smarty.net/docs/en/plugins.naming.conventions.tpl" target="_blank">naming conventions</a> in the `plugins` folder of your theme.

For example, to have a modifier that adds stars to a string, create a file named `plugins/modifier.stars.php`

```php {linenos=true}
function smarty_modifier_stars($string)
{
  return "*{$string}*";
}
```

Then, you can use it in your theme:

```smarty {linenos=true}
{"Hello, world!"|stars}
```

### Deprecations

As expected with major releases, some features will no longer be supported or available in 1.7

#### Mobile theme

The Starter Theme will be considered responsive by default, so the mobile theme feature has been <a href="https://github.com/PrestaShop/PrestaShop/pull/3931">removed</a>.

#### Live edit

As the new Starter Theme will be more frontend developer oriented, the _Live Edit_ feature will be dropped. Plus, the PrestaShop product team is currently working
on a brand new theme builder!

#### Scenes

Scenes will be removed in the next major version.


Some more features may be added to this list as the project evolves. Keep an eye on Build :)

And remember, it's still time to get involved and contribute. Join the party on the [Trello board](https://trello.com/b/FPwYidfj/prestashop-startertheme) and [Gitter](https://gitter.im/PrestaShop/StarterTheme)!
