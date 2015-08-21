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

![Choose your branch]({{ '/assets/images/2015/08/prestashop-choose-branch.png' | prepend: site.baseurl }})




## PrestaShop new branching model

Before we use to have only one branch (1.6) and each dev would commit whatever they had to do on it.
Then we would make a release out of it, including everything (new feature, bug fixes...). This was simply the inheritage of SVN that we used to use for years.

We looked around to understand how many open source projects manage their code with Git and we came up with the following model.


{% alert info %}
I chose to write this article as PrestaShop 1.6.1.1 just came out. All version numbers and branch names are based on the current situation, they might have changed as you're reading this article.
{% endalert %}


### 2 branches to understand

2 main branches will now live side by side.


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


## Next release matter

Develop will receive commits for the next release, so if you want to break the backward compatibility we will only merge your PR if the next release is a major one. This may result in a long live branch and all the releated problems: merge conflicts, your contribution became useless, the API has changed and so on.

If you want to introduce a BC break, you better wait for the development of the next major release to start. Or if you want to you can also rebase your branch often.


## Maintaining multiple minor versions

parler du probleme de secu et ocmment maintennt on pourra faire une nouvell version 1.6.1, 1.6.2, 1.7.0 !


## FAQ


#### Since I can add a bug fix to any branch, how do I choose ?

This isn't an easy question, you'll have a to make the call.

Then, you have to take into account the risk like if this bug fix on `PaymentModule.php` you should play it safe and avoid trying to add it in the next patch version, it probably need more testing.


#### Why `1.6` branch is still out there ?

We still have a lot of pull requests open on 1.6 branch and GitHub will close all PR if we delete this branch. Unfortunalty we cannot change the target branch of an open pull request. We are manully porting each PR onto _develop_ branch.

**Please do not use 1.6 branch**

#### How can I can easily setup my git ?

Good question ! I'm glad you asked. I recently wrote a little how-to about configuring your git, you may want to give it a look. LINK


