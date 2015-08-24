---
layout: post
title:  "Introducing a new branching model for PrestaShop"
subtitle: "eeee"
date:   2015-07-16 10:13:37
author: julienbourdeau
icon: fa-fork
tags:
 - releases
 - contributing
---

PrestaShop has recently moved towards a [more semantic versioning scheme](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/), which is impacting the way we relase new version, and how we work on our GitHub repositories. Basically, patch releases include bug fixes only (1.6.1.1, 1.6.1.2, 1.6.1.3 and so on), minor releases introduce new features (1.6.1.0, 1.6.2.0, etc) and major version break backward compatibility (1.7, 1.8, etc). We had to adapt our workflow to match these requirements and it impacts the way you interact with PrestaShop too.


## TL;DR

If you want to submit a pull request, as a contributor, you will have to decide which branch to fork and set has a destination of your pull request.
The schema below should help you with that.

Long story made short:
* Small bug fix > patch branch (1.6.1.x)
* New feature > next minor branch (develop)
* Break the backward compatibility > next major version branch (develop)

**Remember not to use _1.6_ or _master_ branches.** Ever.

![Choose your branch]({{ '/assets/images/2015/08/prestashop-choose-branch.png' | prepend: site.baseurl }})




## PrestaShop new branching model

Before that, we used to have only one branch (1.6) and each developer would commit whatever they had to do on it.
Then we would make a release out of it, including everything (new feature, bug fixes...). This was simply the legacy of SVN, which we had been using for years. It turned out confusing and not very stable.

We looked around to understand how many open-source projects manage their code with Git and we came up with the following model.


{% alert info %}
I'm writing this article as PrestaShop 1.6.1.1 just came out. All version numbers and branch names are based on the current situation, they might have changed as you're reading this article.
{% endalert %}


### 2 branches to understand

Two main branches will now live side by side: _develop_ and the current _release_ branch.

The _develop_ branch is always the next release. According to the roadmap, it can be the next minor version or the next major version. If you don't know where to commit, it's always safer to commit to this branch.

The _release_ branch is the last version released. Currently it's 1.6.1.x and it should be used to apply bug fixes for future patch versions. 

When contributing, you have to choose which branch to fork according to what you want to do. The following table shows what you can do in each branch.


<table>
  <tr>
    <th>Branch name</th>
    <th>Type of release</th>
    <th>What you're allowed to do</th>
  </tr>
  <tr>
    <td rowspan="2" class="text-center">develop</td>
    <td class="text-center">Major</td>
    <td>
        <ul>
            <li>Add new feature breaking backward compatibility</li>
            <li>Add new feature fully backward compatible</li>
            <li>Add bug fixes</li>
            <li>Remove feature</li>
            <li>Remove anything deprecated</li>
            <li>Change wording</li>
        </ul>
    </td>
  </tr>
  <tr>
    <td class="text-center">Minor</td>
    <td>
        <ul>
            <li>Add new feature fully backward compatible</li>
            <li>Add bug fixes</li>
            <li>Change wording</li>
        </ul>
    </td>
  </tr>
  <tr>
    <td class="text-center">1.6.1.x</td>
    <td class="text-center">Patch</td>
    <td>
        <ul>
            <li>Bug fixes only !</li>
            <li>WORDING ?</li>
        </ul>
    </td>
  </tr>
</table>


### The model

I heard _a picture is worth a thousand words_, I hope they didn't lie to me:

![PrestaShop Branching Model]({{ '/assets/images/2015/08/prestashop-branching-model.png' | prepend: site.baseurl }})

**NB:** No one should commit directly on PrestaShop develop and release branches, but submit pull requests. This is not shown on the graph for simplicity's sake.


### Next release matter

The _develop_ branch will receive commits for the next release. 
If your PR breaks backward compatibility (BC), we can only merge it if the next release is a major one. Your branch can then become a long live branch and at some point it will bring some issues: merge conflicts, outdated contribution, etc.
Before merging such a PR, check the version.php file to see what kind of version is the next version (if it's a major one, go ahead!), and make sure you rebase your branch often.

// Parler de version.php et comment rebaser ?

### Maintaining multiple minor versions

At some point there will be many release branches simultaneously. For example 1.6.1.x next to 1.6.2.x, next to 1.6.3.x.

We don't intend to maintained multiple versions at the same time but at least, if a major bug appears, we can easily and quickly make a new patch release for many minor versions. This will definitely improve our process for [security patches](https://www.prestashop.com/blog/en/prestashop-security-release/).


## FAQ


#### I want to fix a bug. It can be merged into all the branches, how do I choose?

This isn't an easy question, you'll have to make the call.

It depends what kind of bug your are fixing. If it's a small bug, it probably can be easily integrated in the next patch version. So that would be the 1.6.1.x branch.
If it's a massive bug, like on `PaymentModule.php`for instance, you might want to play it safe and include it in the next minor version, as it will probably require more testing. This goes to the develop branch. 


#### I want to change some wording, is it a bug fix?

If the change you want to make is really improving the user experience, and it cannot wait a next major or minor release, then go ahead and do it on the release branch. We'll consider it as a bug fix.

However, to make sure your wording is included in the translation project on Crowdin, and for the sake of our workflow, it is better to submit it on the develop branch.


#### What about the modules?

We'll keep the current way of working with modules. We use only 2 branches _master_ for stable release and _dev_ for work in progress.

If you want to **contribute to a module, make your PR on the dev branch.** When doing so, please do not update the version number in your PR.


#### Why is `1.6` branch still out there?

The 1.6 is no longer active. **Please do not open a pull-request on 1.6 branch.**

We still have a lot of open pull requests on 1.6 branch which we need to forward to active branches. 
Deleting this branch means losing all these PRs. As we cannot automatically change the target branch of an open pull request, we are manually porting each PR onto _develop_ branch. As long it as we are not done with this, the 1.6 branch will still be open.


#### What's the point of _master_ branch?

As of today we merge the latest stable release into master.This is a kind of safeguard, and some of our internal tools still rely on this branch. Its future is unsure though. Please do not use PrestaShop master branch either.

## To go further

It you want to go further with branching model you must read this legendary article from nvie.com: [a-successful-git-branching-model](http://nvie.com/posts/a-successful-git-branching-model/).

Also I particularily enjoyed Symfony's versioning strategy and branching model. Fabien Potencier (Founder of Symfony) [speaks about it in a keynote](https://youtu.be/pAFdmBxmt5Y?t=10m30s), unfortunately it's in French. You can find similar information in english [in this video](https://www.youtube.com/watch?v=pAFdmBxmt5Y&feature=youtu.be&t=10m30s).

We'll update you whenever a change occurs in our branching model. In the meantime, if you have any question, don't hesitate!


