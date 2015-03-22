---
layout: post
title:  "How to write on this blog"
subtitle: "Markdown, snippets, directory structure, how to set it up locally... All you need to know."
date:   2015-03-04 15:12:00
author: julienbourdeau
icon: fa-pencil
tags: [help]
published: true
---

When we started talking about a dev blog, we thought about who can write, what we want to talk about, 
who's going to review the articles...

Technically, WordPress was the first solution we reviewed 
but after giving it more thought we realised it would be too much hassle to maintain it: 
plugin updates, core updates, database backups, security issues etc.

We then came up with a better idea: [Jekyll](http://jekyllrb.com/). Jekyll uses a set of configuration and data files, 
articles, and resources (CSS, images, font,...) to generate a **fully static website, made only of plain HTML files**. 
Since you can version everything with *Git* and you don't have to set any database, it seems like the easiest 'CMS'.

This blog is also meant to become the 'place to be' for the PrestaShop tech community and Jekyll is definitely the 
best option out there. **You can actually make a *Pull Request* on GitHub to edit any content.**

![Jekyll Logo](/assets/images/2015/04/jekyll.png)

## Set everything up locally

### Install required software

In order to get the blog working you will need a few (command line) tools. I'll let you find out how to do so
on their website, according to your OS.

* [Ruby](https://www.ruby-lang.org/en/documentation/installation/) (I use Ruby 2.0.0)
* [NPM](https://www.npmjs.com/)
* [Bower](http://bundler.io/)
* [Bundler](http://bundler.io/)


### Fork and clone

Next, fork the repo into your GitHub account then clone it on your local machine.
If you don't know how to do this, please [check out the GitHub Help](https://help.github.com/articles/fork-a-repo/).


### Install dependencies and build Jekyll

*Bundler* will install Jekyll and all the ruby dependencies. Then *Bower* will install all the front-end required libraries
like 'bootstrap-sass' or 'fontawesome'. Finally we use bundler to build jekyll and watch any file change.

{% highlight bash %}
bundle install
bower install
bundle exec jekyll build --watch
{% endhighlight %}

{% alert note %}
When you're using the `--watch` option, it's only watching content or styles. So if you are changing
any plugin or some line in your `_config.yml`, you'll have to quit (`ctrl+C`) and rebuild.
{% endalert %}

## Create a new article


### Directory structure

![Jekyll Logo](/assets/images/2015/04/directory_structure.png)

### Article directories

With Jekyll, the location of your files matter. On this blog we have two kinds of articles:

* **News** : They live in the `news/_posts` folder and they show up on the home page.
* **How-Tos** : They live in the `_howtos` folder and are sorted by topic. These posts are displayed on the How-Tos 
page and they are sorted by topic.

If you need to create a new topic, create a subfolder in `_howtos` and edit the `page_collections` configuration in `config.yml`.

{% alert note %}
The topics are displayed in the same order as shown in the `_config.yml` file.
{% endalert %}


### File name

Any article of any type has to be in a file named by following the pattern below. If it doesn't, Jekyll won't recognize it.

{% highlight bash %}
YYYY-MM-DD-some-hyphen-separated-name.markdown
{% endhighlight %}



### File header (*YAML Front Matter*)

Jekyll makes it really easy to set your post meta. The top of your file has to include some information like 'author' or 'layout'.

Copy and paste the following line at the top of your new file and change the relevant values.

{% highlight yaml %}
---
layout: post
title:  "How to write on this blog"
subtitle: "Markdown, snippets, directory structure, how to set it up locally... All you need to know."
date:   2015-03-04 15:12:00
author: julienbourdeau
icon: fa-pencil
tags: [sample, tags, example]
---
{% endhighlight %}

I assume you will understand what you are supposed to change. *Icon* can be any icon from FontAwesome.

{% alert info %}
If you haven't finish your article or if it's pending for review, simply add `published: false` in your file header.
Jekyll will then ignore the file.
{% endalert %}



## Make sure you're an author

If it's your first article you will have to add yourself to the author list. Open up the `_data/authors.yml` file and add your personal details. The first line is your ID and that's what you have to use in your article header.

Now fill up as much info as you can. `display_name` and `avatar` are mandatory

Exemple:
{% highlight yaml %}
julienbourdeau:
    display_name: Julien Bourdeau
    avatar: https://avatars1.githubusercontent.com/u/1525636
    email: julien@prestashop.com
    twitter: julienbourdeau
    github: julienbourdeau
{% endhighlight %}





## Write your article

### Markdown & Liquid

* https://github.com/Shopify/liquid/wiki/Liquid-for-Designers
* https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

### Images

Images have to be `assets/images/YYYY/MM` folder, find or create the subdirectory according to the date of the article.

With markdown your image should look like this:

{% highlight liquid %}
{% raw %}
![Jekyll Logo](/assets/images/2015/04/jekyll.png)
{% endraw %}
{% endhighlight %}


### Code

#### Inline code

When you need to refer to a CSS property, a specific file, a function name or anything similar, use the following syntax to highlight it in your text.

{% highlight text %}
`define('_PS_DEV_MODE_')` in file  `config.inc.php` or  `Tools::getValue()`
{% endhighlight %}

Will render: `define('_PS_DEV_MODE_')` in file  `config.inc.php` or  `Tools::getValue()`


#### Block code

When it comes to serious code block, it's always better to use syntax highlighting, with Jekyll it works a bit differently compared to GitHub. 
You will have to use a liquid tag: {% raw %}`{% highlight LANG OPT_1 OPT_2 ... %}`{% endraw %}

<pre><code>{% raw %}{% highlight php startinline=true linenos %}
class IndexControllerCore extends FrontController
{
	// SAMPLE CODE
	public function initContent()
	{
		// SAMPLE CODE
	}
}
{% endhighlight %}
{% endraw %}</code></pre>

Will render:

{% highlight php startinline=true linenos %}
class IndexControllerCore extends FrontController
{
	public $php_self = 'index';
	/**
	 * Assign template vars related to page content
	 * @see FrontController::initContent()
	 */
	public function initContent()
	{
		parent::initContent();
		$this->addJS(_THEME_JS_DIR_.'index.js');
		$this->context->smarty->assign(array('HOOK_HOME' => Hook::exec('displayHome'),
			'HOOK_HOME_TAB' => Hook::exec('displayHomeTab'),
			'HOOK_HOME_TAB_CONTENT' => Hook::exec('displayHomeTabContent')
		));
		$this->setTemplate(_PS_THEME_DIR_.'index.tpl');
	}
}
{% endhighlight %}

**Parameters:**

| Parameter | Description |
|-----------|-------------|
| `LANG` | **Mandatory**. Can take almost any language: html, php, ruby, javascript,... |
| `startinline=true` | **Optional**. Only used for php, this way you don't have to write `<?php` and  `?>`. If you are mixing up PHP and HTML don't set this parameter.|
| `lineos` | **Optional**. Display line number. Default: false |



#### Embed gist

If your code will or may be updated you can easily embed a gist using the gist liquid tag.

{% highlight liquid %}
{% raw %}
{% gist YOUR_GIST_USER_ID/YOUR_GIST_ID %}
{% endraw %}
{% endhighlight %}

For exemple, this is the mixin we use for fonts with SASS.

{% gist julienbourdeau/1235f357d4da4d69d330 %}


### Icons

We use a simple FontAwesome plugin that lets you display any icon using the following syntax:

{% highlight liquid %}
{% raw %}
{% icon ICON_NAME OPTIONS %}
{% icon fa-coffee fa-2x %}
{% endraw %}
{% endhighlight %}


