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

PrestaShop has recently moved towards a [more semantic versioning scheme](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/). Basically we want bug fixes only in patch releases (1.6.1.1, 1.6.1.2, 1.6.1.3 and so on), we introduce new features in minor releases (1.6.1.0, 1.6.2.0, etc) and we can break backward compatibility in major version (1.7, 1.8, etc), we had to adapt our workflow to match these requirements.


## TL;DR

If you want to submit a pull request, as a contributor, will have to decide which branch to fork and set has a destination of your pull request.
The schema above should help you with that.

**Remember to not use _1.6_ or _master_ branches.** Ever.

![Choose your branch]({{ '/assets/images/2015/08/prestashop-choose-branch.png' | prepend: site.baseurl }})




## PrestaShop new branching model

Before we use to have only one branch (1.6) and each dev would commit whatever they had to do on it.
Then we would make a release out of it, including everything (new feature, bug fixes...). This was simply the inheritage of SVN that we used to use for years.

We looked around to understand how many open source projects manage their code with Git and we came up with the following model.


{% alert info %}
I'm writing this article as PrestaShop 1.6.1.1 just came out. All version numbers and branch names are based on the current situation, they might have changed as you're reading this article.
{% endalert %}


### 2 branches to understand

2 main branches will now live side by side: _develop_ and the current _release_ branch.

The _develop_ branch is always the next release. According to the roadmap, it can be the next minor version or the next major version.

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

I heard _a picture is worth a thousand words_, I hope they didn't lie to me.

![PrestaShop Branching Model]({{ '/assets/images/2015/08/prestashop-branching-model.png' | prepend: site.baseurl }})

**NB:** No one commit directly develop and release branches, everything goes through pull requests. This is not shown on the scheme for simplicity sake.


### Next release matter

The _develop_ branch will receive commits for the next release, so if you want to break the backward compatibility we will only merge your PR if the next release is a major one. This may result in a long live branch and all the releated problems: merge conflicts, your contribution became useless, the API has changed and so on.

If you want to introduce a BC break, you better wait for the development of the next major release to start. Or if you want to you can also rebase your branch often.


### Maintaining multiple minor versions

At some point there will be many release branches simultaneously. For exemple 1.6.1.x next to 1.6.3.x, next to 1.6.3.x.

We don't intend to maintained multiple version at the same time but at least, if a major bug apprears, we can easily and quickly make a new patch release for many minor versions.


## FAQ


#### Since I can add a bug fix to any branch, how do I choose ?

This isn't an easy question, you'll have a to make the call.

Then, you have to take into account the risk like if this bug fix on `PaymentModule.php` you should play it safe and avoid trying to add it in the next patch version, it probably need more testing.


#### Why `1.6` branch is still out there ?

We still have a lot of pull requests open on 1.6 branch and GitHub will close all PR if we delete this branch. Unfortunalty we cannot change the target branch of an open pull request. We are manually porting each PR onto _develop_ branch.

**Please do not use 1.6 branch**


#### I want to change wording, is it a bug fix ?

Fait ce que ce tu veux personne comprend... :troll:


#### What about the modules ?

We'll keep the current way to work with modules. We use only 2 branches _master_ for stable release and _dev_ for work in progress.

If you want to **contribute to a module, make your pr on dev branch.** Also, you should not update the version number in your PR.


#### What's the point of _master_ branch ?

As of today we merge the latest stable release into master. Some of our internal tools still rely on this branch. Its future is unsure though, I wouldn't recommend to use it.

## To go further

It you want to go further with branching model you must read the legendary article from nvie.com: [a-successful-git-branching-model](http://nvie.com/posts/a-successful-git-branching-model/). The schemes

Also I particularily enjoyed Symfony's versioning strategy and branching model. Fabien Potencier (Founder of Symfony) [speaks about it in a keynote](https://youtu.be/pAFdmBxmt5Y?t=10m30s), unfortunately it's in French. You can find similar information in english [in this video](https://www.youtube.com/watch?v=pAFdmBxmt5Y&feature=youtu.be&t=10m30s).




