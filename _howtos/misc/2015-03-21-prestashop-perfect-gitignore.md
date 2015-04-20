---
layout: post
title:  "Create the perfect .gitignore file for your PrestaShop project"
subtitle: "Commit only the right files"
date:   2015-12-31 15:00:00
author: julienbourdeau
icon: fa-fork
tags: [git, gitignore]
published: false
---

As a developer you need to version your projects. There are many CVS (_Concurrent Versions System_)
available out there today, but **git** is by far the most popular.

This article only take interest in git, since PrestaShop moved from svn to git nearly 3 years ago.

### What to ignore

Generally you shouldn't version the following type of files:

* Temporary files (such as cache)
* Generated files (such as minified CSS or retrived XML's)
* Credentials (such as settings.inc.php)


### Versioning core files

The first thing you need to decide is whether you want to keep track of the core change or not. If
you're using PrestaShop correctly you wouldn't modify core files to suit your needs, you should override core classes to
modify PrestaShop's behavior.

If you don't track the core, you'll have to clone your repo then drop PrestaShop files (from a stable release)
into the folder.

In my opinion it's **better to version core files**.

Even if you don't intend to modify the core file, you might have to
apply specific patches. It's always **better to make sure that all your environnements are exactly the same**. Therefor it's much easier to deploy a new environnement.

Even better, if you create a branch which tracks PrestaShop/PrestaShop (1.6 branch) you **will be able to cherry-pick the
patches you need**.

## With core files

![.gitignore from GitHub](/assets/images/2015/04/github-new-repo-gitignore.jpg)

If you host your project on GitHub you can choose to initialize your project with a .gitignore file.

We recently [updated it](https://github.com/github/gitignore/pull/1479) as a result you'll get the file below.

{% gist julienbourdeau/0f7d629cb7f9bc6995fc %}

## Without core files

If you don't want to version the core files, [@PrestaRocket](https://twitter.com/prestarocket) wrote this file instead.

{% gist prestarocket/1070872 %}

## Generate `.gitignore` with [gitignore.io](http://gitignore.io)

[gitignore.io](http://gitignore.io) is a great tool based on [GitHub/gitignore](https://github.com/github/gitignore) repo.
You can generate a perfect .gitignore file simply by listing the technologies you use in your project.
The website offers an easy-to-use interface, but if like me you want to show off, you can use the
following git alias in your config.

{% highlight bash %}
$ git config --global alias.ignore '"gi() { curl -L -s https://www.gitignore.io/api/$@ >> .gitignore ;}; gi"
{% endhighlight %}

Next the following command will generate a .gitignore file inside the current directory
[containing these lines](https://www.gitignore.io/api/prestashop,osx,phpstorm).

{% highlight bash %}
$ git ignore prestashop,osx,phpstorm
{% endhighlight %}

