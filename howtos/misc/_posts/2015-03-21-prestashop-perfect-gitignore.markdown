---
layout: post
title:  "Create the perfect .gitignore file for your PrestaShop projects"
subtitle: "Commit only the right files"
date:   2015-04-20 11:21:00
disqus_url: "http://build.prestashop.com/misc/prestashop-perfect-gitignore/"
author: julienbourdeau
icon: fa-code-fork
tags: [git, gitignore]
published: true
---

As a serious developer, you need to use versioning (or "[revision control](http://en.wikipedia.org/wiki/Revision_control)") for your projects, in order to track changes to your files... and be able to travel back in time when a disaster happens. There are many CVS ([_Concurrent Versions System_](http://en.wikipedia.org/wiki/Concurrent_Versions_System)) available out there today, but **Git** is by far [the most popular in 2015](http://stackoverflow.com/research/developer-survey-2015#tech-sourcecontrol), and [one of the most used in the Open Source world](https://www.openhub.net/repositories/compare), right behind Subversion (svn).

PrestaShop moved from Subversion to Git more than 2 years ago, [and made the switch from our own SVN server to GitHub](https://www.prestashop.com/blog/en/prestashop-is-now-on-github/), in order to make contribution easier for everyone. While doing so, we created a PrestaShop-specific `.gitignore` file. A [gitignore file](http://git-scm.com/docs/gitignore) is a must-have for any Git-versioned project, as it specifies intentionally untracked files that Git should ignore.

We created that file to help you better version your PrestaShop project. Let's dive into that!


### What to ignore

Generally, you shouldn't version the following types of files:

* Temporary files (such as cache)
* Generated files (such as minified CSS or retrieved XMLs)
* Files with credentials or personal information (such as `settings.inc.php`)


### Versioning core files

The first thing you need to decide is whether you want to keep track of the PrestaShop core files changes or not. If you're using PrestaShop correctly, you shouldn't modify core files to suit your needs -- you should [override the core classes in order to modify PrestaShop's behavior](http://doc.prestashop.com/display/PS16/Overriding+default+behaviors).

If you don't want to version the core files, you have to clone your repo then drop the PrestaShop files (from a stable release) into the folder.

But in my opinion, **it is better to version core files**.

Indeed, even if you don't intend to modify the core files, you might have to apply specific patches. It's always **better to make sure that all your environments are exactly the same**. This way, it's much easier to deploy a new environment.

Even better: if you create a branch which tracks PrestaShop/PrestaShop (1.6 branch), **you will be able to [cherry-pick](http://git-scm.com/docs/git-cherry-pick) the patches you need**.

## With core files

![.gitignore from GitHub](/assets/images/2015/04/github-new-repo-gitignore.jpg)

If you host your project on GitHub, you can choose to initialize your project with a `.gitignore` file.

We recently [updated it](https://github.com/github/gitignore/pull/1479), as a result you'll get the file below ([direct link](https://github.com/github/gitignore/blob/master/Prestashop.gitignore)):

{% gist julienbourdeau/0f7d629cb7f9bc6995fc %}

## Without core files

If you don't want to version the core files, PrestaShop contributor Adonis Karavokyros (also known as [prestarocket](https://github.com/prestarocket)) wrote this file instead:

{% gist prestarocket/1070872 %}

### Generate your own `.gitignore` file with gitignore.io

[gitignore.io](http://gitignore.io) is a great tool, based on the official [GitHub/gitignore](https://github.com/github/gitignore) repo. You can generate a perfect `.gitignore` file simply by listing the technologies you use in your project.

The website offers an easy-to-use interface, but if (like me) you want to show off, you can use the following Git alias in your configuration:

{% highlight bash %}
$ git config --global alias.ignore "!gi() { curl -L -s https://www.gitignore.io/api/$@ >> .gitignore ;}; gi"
{% endhighlight %}

Next, the following command will generate a `.gitignore` file inside the current directory [containing these lines](https://www.gitignore.io/api/prestashop,osx,phpstorm).

{% highlight bash %}
$ git ignore prestashop,osx,phpstorm
{% endhighlight %}

There you go! All of this should give a cleaner Git repository for your PrestaShop projects.

Do you have ideas on how to improve this? Do you use alternate files? Tell us your story in the comments!
