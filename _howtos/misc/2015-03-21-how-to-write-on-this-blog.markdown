---
layout: post
title:  "How to write on this blog"
subtitle: "Markdown, snippets, directory structure, how to set it up locally... All you need to know."
date:   2015-03-04 15:12:00
author: julienbourdeau
icon: fa-pencil
tags: [help]
published: false
---

When we started talking about a dev blog from we thought about who can write, what we want to talk about, 
who's going to review articles,... Technically, WordPress was the first solution we reviewed 
but after giving it more thought we realised it would be too much pain to maintain it: 
plugins updates, core updates, database backup, security issues,...

We then came up with a better idea: [Jekyll](http://jekyllrb.com/). Jekyll uses a set of configuration and data files, 
articles and resources (CSS, images, font,...) to generate a **fully static website, only made of plain HTML files**. 
Since you can version everything with *Git* and you don't have to set any database, it seems like the easiest 'CMS'.

Also this blog is meant to become the place to be for the PrestaShop tech community and Jekyll is definitely the 
best option out there. **You can actually make a *Pull Request* on GitHub to edit any content.**

![Jekyll Logo](/assets/images/2015/04/jekyll.png)

## Set everything up locally

### Install required software

In order to get the blog working you will need few (command line) software. I'll let you find out how to do so
on their webside, according to your OS.

* [Ruby](https://www.ruby-lang.org/en/documentation/installation/) (I use Ruby 2.0.0)
* [NPM](https://www.npmjs.com/)
* [Bower](http://bundler.io/)
* [Bundler](http://bundler.io/)


### Fork and clone

Then, fork the repo into your GitHub account then clone it on your local machine.
If you don't know how to do, please [check out the GitHub Help](https://help.github.com/articles/fork-a-repo/).


bundle install
bower install
bundle exec jekyll build --watch




## Create a new article


### Directory structure

![Jekyll Logo](/assets/images/2015/04/directory_structure.png)

### Article directories

With Jekyll, the location of your files matter. On this blog we have to kinds of articles:

* **News** : They live in the `news/_posts` folder and they show up on the home page.
* **How-Tos** : They live in the `_howtos` folder and are sorted by topic. These posts are displayed on the How-Tos 
page and they are sorted by topic.

If you need to create new topic, create a subfolder in `_howtos` and edit the `page_collections` configuration in `config.yml`.

**NOTE:** The topic are display in the same order as shown in the `_config.yml` file.


### File name

Any article of any type has to be in a file named following the pattern below. If it doesn't, Jekyll won't recognize your article.

{% highlight bash %}
YYYY-MM-DD-some-hyphen-separated-name.markdown
{% endhighlight %}



### File header (*YAML Front Matter*)

Jekyll makes it really easy to set your post meta. The top of your file has to include few information like author or layout.

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

I assume you will undertand what you are supposed to change. *Icon* can be any icon from font awesome.

#### Working with Drafts

If you haven't finish your article or if it's pending for a review, simply add `published: false` in your file header.
Jekyll will then ignore the file.



## Make sure your an author

It it's your first article you will have to add yourself to the author list. Open up the `_data/authors.yml` file and add your personal details. The first line is your ID and that's what you have to use in your article header.

Then fill up as much info as you can. `display_name` and `avatar` are mandatory

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

When you need to refer to a css property, a specific file, a function name or anything similar, use the following syntax to highlight it in your text.

{% highlight text %}
`define('_PS_DEV_MODE_')` in file  `config.inc.php` or  `Tools::getValue()`
{% endhighlight %}

Will render: `define('_PS_DEV_MODE_')` in file  `config.inc.php` or  `Tools::getValue()`


#### Block code

When it comes to serious code block, it's always better to use syntax highlighting, it Jekyll it works a bit differently than GitHub. 
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

If your code might be updated you can easily embed a gist using the gist liquid tag.

{% highlight liquid %}
{% raw %}
{% gist YOUR_GIST_USER_ID/YOUR_GIST_ID %}
{% endraw %}
{% endhighlight %}

For exemple, this is the mixin we use for fonts with SASS.

{% gist julienbourdeau/1235f357d4da4d69d330 %}


### Icons

We use simple Font Awesome plugin that let you display any icon using the following syntax:

{% highlight liquid %}
{% raw %}
{% icon ICON_NAME OPTIONS %}
{% icon fa-coffee fa-2x %}
{% endraw %}
{% endhighlight %}


