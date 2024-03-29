---
layout: post
slug: "how-to-write-on-this-blog"
title:  "How to write on this blog"
subtitle: "or: How we tried to ensure that only developers could write on the devblog :)"
date:   2015-03-04 15:12:00
disqus_url: "http://build.prestashop.com/misc/how-to-write-on-this-blog/"
authors:  [ julienbourdeau ]
icon: icon-pen
tags: [help]
published: true
---

When we started talking about a dev blog among us, we thought about who could write, what we wanted to talk about,
who was going to review the articles...

Technically, WordPress was the first solution we reviewed but after giving it more thought we realized it would be too much of a hassle to maintain: plugin updates, core updates, database backups, security issues, etc.

We then came up with a better idea: [Jekyll](http://jekyllrb.com/).

![Jekyll Logo](/assets/images/2015/04/jekyll.png)

Jekyll uses a set of configuration and data files, article files (written in [Markdown](http://daringfireball.net/projects/markdown/) or pretty much [any other format](http://jekyllrb.com/docs/posts/)), and resources (CSS, images, fonts, etc.) to generate a **fully static website, made only of plain HTML files**.
Since you can version everything with *Git* and you don't have to set up any database, it seems like the easiest 'CMS'. So that's what we're reading now: plain HTML generated from Markdown markup through Jekyll!

This blog is also meant to become the 'place to be' for the PrestaShop tech community, and Jekyll is definitely the
best option out there -- and **you can actually make a *Pull Request* on GitHub to edit any content.** Actually, [GitHub's Pages](https://pages.github.com/) features is powered by Jekyll too, so we're not really choosing in the blind here :)

## TL;DR

{{% notice type=note title="Note" icon=file %}}
First: tell us what you want to write about! We won't accept just about any submission :)

Write to us with your idea (we can be reached at build@prestashop.com), with a rough idea or the whole thing ready, and let's talk about it. Once we agree on the subject, then you are good to go!
{{% /notice %}}

You don’t have to read all the details below: if you want to write an article right away, you can simply follow those steps:

1. Fork [the repo](https://github.com/PrestaShop/prestashop.github.io) (see [GitHub doc](https://help.github.com/articles/fork-a-repo/))
1. Download [this sample file](https://gist.githubusercontent.com/julienbourdeau/98a944e00c3ceb5dff5e/raw/a7d6c292ca501c66cb24e34ff805630f1289c306/2015-12-31-demo-post.markdown).
1. Rename it according to the date and your topic **(NOTE: the date in the file name is mandatory)**.
1. Move it to the right folder: `news/_posts` for a blog post, `howtos/CATEGORY` for a tutorial.
1. Write it.
1. Make a [Pull-Request](https://help.github.com/articles/creating-a-pull-request/) on the initial project you forked.

{{< cta "https://gist.githubusercontent.com/julienbourdeau/98a944e00c3ceb5dff5e/raw/a7d6c292ca501c66cb24e34ff805630f1289c306/2015-12-31-demo-post.markdown" >}}Download a demo article{{< /cta >}}

You can even get GitHub to do most of the work for you: see the video below.

<iframe width="797" height="598" src="https://www.youtube.com/embed/vU4pj0-3Odc?rel=0" frameborder="0" allowfullscreen></iframe>


## The whole #!

You only need this section if you intend to set everything up locally. You don’t have to do that, but let’s be honest, when you write your article, you want to preview how it will render, before sending it over to us :)

Still, this is pretty much developer-targetted, so beware: technical stuffs ahead! :trollface:

### Installing the required software

In order to get the blog working locally, you will need a few (command line) tools. I'll let you find out how to do so
on their respective websites, according to your OS.

* [Ruby](https://www.ruby-lang.org/en/documentation/installation/) (I use Ruby 2.0.0)
* [Bundler](http://bundler.io/)

Download them, install them, then come back here for more! Of course you can also read their doc and get acquainted about the awesome Bundler tools -- they might be of great use for your other web projects!


### Forking and cloning

Next, [fork](https://help.github.com/articles/fork-a-repo/) [the prestashop.github.io repo](https://github.com/PrestaShop/prestashop.github.io) into your GitHub account, then [clone it](https://help.github.com/articles/fetching-a-remote/) on your local machine.


### Installing dependencies and running Jekyll

*Bundler* will install Jekyll and all the Ruby dependencies. We'll also use it to run the blog on a local server.

```bash
$ bundle install
$ bundle exec jekyll serve
---
Server address: http://0.0.0.0:4000/
Server running... press ctrl-c to stop.
```

Open a browser window, and go to `http://0.0.0.0:4000/`, and you should see the blog running.

{{% notice type=note title="Note" icon="file" %}}
The `jekyll serve` command only watches content and styles. So if you are changing any plugin or any line in your `_config.yml`, you'll have to quit (`ctrl+C`) and rebuild.
{{% /notice %}}

## Creating your article

### Directory structure

As a contributing writer on the Build blog, you are mostly interested in **/assets**, **/howtos** and **/news** folders.

![Jekyll Logo](/assets/images/2015/04/directory_structure.png)


### Article directories

With Jekyll, the location of your files matter. On this blog, we have two kinds of articles:

* **News**: They live in the `news/_posts` folder and they show up on the home page.
* **How-Tos**: They live in the `howtos` folder and are sorted by topic. These posts are displayed on the home page as well as the How-Tos
page which is sorted by topic.

{{% notice type=note title="Note" icon=file %}}
If you need to create a new topic, create a subfolder in `howtos` and edit the `howtos` configuration in `_config.yml`.

The topics are displayed in the same order as shown in the `_config.yml` file.

Please ask us before creating a brand new topic!
{{%/ notice %}}


### File name

Any article of any type has to be in a file named using the following the time-based pattern. Make sure to follow that convention: if you do not, Jekyll won't recognize your file.

```bash
YYYY-MM-DD-some-hyphen-separated-name.markdown
```


### File header (*YAML Front Matter*)

Jekyll makes it really easy to set your post meta information. The top of your file has to include some information like 'author' or 'layout', [in YAML format](http://jekyllrb.com/docs/frontmatter/).

Copy and paste the following lines at the top of your new file, and customize the relevant values.

```yaml
---
layout: post
title:  "Here goes the title of your article"
subtitle: "This text will be displayed below your title"
date:   2015-03-04 15:12:00
authors:  [ julienbourdeau ]
icon: icon-pen
tags: [sample, tags, example]
published: false
---
```

I assume you will understand what you are supposed to change. *Icon* can be [any icon from FontAwesome](http://fortawesome.github.io/Font-Awesome/icons/). You can also find available icons on the [PrestaShop Icon Font Documentation](http://build.prestashop.com/prestashop-icon-font/documentation.html) page.

{{% notice type="important" title="Important" icon="fire" %}}
Articles must be submitted with the 'published' setting set to false. We will only publish it after review.
{{% /notice %}}


## Making sure you're an author

If this is your first article, you will have to add yourself to the author list. Open up the `_data/authors.yml` file and add your personal details. The first line is your ID and that's what you have to use in your article header.

Now fill up as much info as you can. `display_name` and `avatar` are mandatory.

Exemple:
```yaml
julienbourdeau:
    display_name: Julien Bourdeau
    role: Core developer
    avatar: https://avatars1.githubusercontent.com/u/1525636
    email: julien@prestashop.com
    twitter: julienbourdeau
    github: julienbourdeau
    forum: 761923-julien-bourdeau
    crowdin: julienbourdeau
    website: http://www.example.com
    description: >
        This is a description of the author with details about what he really does
        and the cool thing is: it's multiline.
```


## Writing your article

### Markdown & Liquid

All article must be written using the Markdown syntax. With Jekyll, we use [Kramdown](http://kramdown.gettalong.org/index.html) as a markdown converter, and the [Liquid template engine](https://github.com/Shopify/liquid).

If you are struggling to get the result you want, you can still use pure HTML.

**References:**

* [Official Kramdown documentation](http://kramdown.gettalong.org/quickref.html)
* [Official Liquid documentation](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)
* [A good Markdown CheetSheat](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)



## Tips and tricks

This part describes some important tricks to write a good article.


### Images

Images have to be in the `assets/images/YYYY/MM` folder (with a custom YYYY and MM, of course): find or create the subdirectory according to the date of the article.

Using Markdown, your image should look like this:

```liquid
![Jekyll Logo](/assets/images/2015/04/jekyll.png)
```


### Code

#### Inline code

When you need to refer to a `CSS property`, a `specific file`, a `function name` or anything similar, use the following syntax to highlight it in your text:

```text
`define('_PS_DEV_MODE_')` in file  `config.inc.php` or  `Tools::getValue()`
```


#### Block of code

When it comes to serious code blocks, it's always better to use syntax highlighting. With Jekyll, it works a bit differently compared to GitHub (because GitHub uses their own [GitHub-flavored Markdown](https://help.github.com/articles/github-flavored-markdown/)): you have to use a [Liquid tag](https://github.com/Shopify/liquid): `{% highlight LANG OPT_1 OPT_2 %}`

<pre><code>{% highlight php startinline=true linenos %}
class IndexControllerCore extends FrontController
{
	// SAMPLE CODE
	public function initContent()
	{
		// SAMPLE CODE
	}
}
```
</code></pre>

**Parameters:**

| Parameter | Description |
|-----------|-------------|
| `LANG`    | **Mandatory**. Can take almost any language: html, php, ruby, javascript, etc. |
| `startinline=true` | **Optional**. Only used for PHP, this way you don't have to write `<?php` and  `?>`. If you are mixing up PHP and HTML, don't set this parameter. |
| `lineos`  | **Optional**. Display line number. Default: false. |



#### Embed a GitHub gist

If your code will or may be updated, you can easily embed a a [GitHub gist](https://gist.github.com/) using the embeded HTML code.

```html
<script src="https://gist.github.com/your-username/your-gist-id.js"></script>
```



### Icons

We use a simple FontAwesome plugin that lets you display any icon using the following syntax:

```html
<i class="icon-store"></i>
```

You can find available icons on the [PrestaShop Icon Font Documentation](http://build.prestashop.com/prestashop-icon-font/documentation.html) page.


### Alerts

If you want to highlight some content (hint, note, tip, alert, etc.), we have few types of highlighting available. They are based on [alerts from Bootstrap](http://getbootstrap.com/components/#alerts).

```html
{{%/* notice type="note" */%}}
You content goes here. **Markdown** _is_ `supported`.
{{%/* /notice */%}}
```

You can use: `note`, `info`, `important`, `tips`.
