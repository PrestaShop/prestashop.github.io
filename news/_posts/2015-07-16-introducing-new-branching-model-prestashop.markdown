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

PrestaShop has recently moved towards a [more semantic versioning scheme](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/), which is impacting the way we release new versions, and how we work on our GitHub repositories. If you want to contribute code, here's a full explanation on how you should do it from now on.

Basically, we follow the [SemVer 2.0.0 specification](http://semver.org/), which means that, as of version 1.6.1.0:

* 'patch' releases include bug fixes only. This means version 1.6.1.1 ([already released](http://build.prestashop.com/news/1611-maintenance-release/)), and potentially, versions 1.6.1.2, 1.6.1.3 and so on. 
* 'minor' releases introduce retrocompatible, new features, along with bug fixes. This means that we could potentially have version 1.6.2.0, 1.6.3.0, and so on.
* 'major' releases introduce new features that can break backward compatibility, along with retrocompatible, new features and bug fixes. The means that we could potentially have versions 1.7.0.0, 1.8.0.0, and so on. 

Because we changed the way we manage our version numbers, we had to adapt our workflow to match these requirements. Please make sure you follow our recommendations in this article, in order to place your pull requests on the correct branch! 

If you, as a contributor, want to submit a pull request, you have to choose the branch you will work with wisely, since it will determine the branch you will fork and set as a destination of your pull request.


## TL;DR

Long story short:

* Bug fix > next 'patch' branch (currently: the '1.6.1.x' branch).
* Backward compatible new feature > next 'minor' branch (always: the 'develop' branch).
* Backward **incompatible** new feature > next 'major' branch (always: the 'develop' branch).

To make it simple: the 'develop' branch results in a minor or a major version depending on the compatibility of its new features.

Other branches might exist. They are used by the PrestaShop Core team, and you should not use them unless asked by the team. 
**Remember not to use '1.6' branch anymore**, or the 'master' branch.

The diagram below should help you choose the correct branch for your pull request:

![Choose your branch]({{ '/assets/images/2015/08/prestashop-choose-branch.png' | prepend: site.baseurl }})


## PrestaShop's new branching model

### A bit of history

Before we adopted the [current SemVer-like versioning](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/), we used to have only one branch, '1.6', and developers would commit whatever they had to do on it. We would then make a release out of it, including all of its changes (new feature, bug fixes, etc.) in the new version. 

This was simply the legacy of our days when we used the Subversion system, which we had been using for years. It turned out confusing and not very stable, resulting in inconsistent version numbers.

We looked around to understand how other open-source projects manage their code with Git, and we came up with the following model.

{% alert info %}
I'm writing this article in August 2015, as PrestaShop 1.6.1.1 just came out. All version numbers and branch names are based on the current situation. They might have changed as you're reading this article, so be sure to check what the current situation is.
{% endalert %}


### Two branches to understand

Two main branches will now live side by side: 'develop' for the next minor/major release, and the latest minor release's branch (currently: '1.6.1.x').

The 'develop' branch is always the next release. Depending on the PrestaShop roadmap, it can be the next minor version or the next major version. If you don't know where to commit, it's always safer to commit to this branch.

The '1.6.1.x' branch is the latest version released (as of August 2015). It should be used to apply bug fixes for future 'patch' versions. 

When contributing, you have to choose which branch to fork according to what you want to do. The following table shows what you can do in each branch.

<table>
  <tr>
    <th rowspan="2">What can be done<br></th>
    <th>patch</th>
    <th>minor</th>
    <th>major</th>
  </tr>
  <tr>
    <td>1.6.1.x</td>
    <td colspan="2">develop<br></td>
  </tr>
  <tr>
    <td>Fix bugs</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
  </tr>
    <tr>
    <td>Fix security issues</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
  </tr>
  <tr>
    <td>Fix wording issues</td>
    <td>x</td>
    <td>x</td>
    <td>x</td>
  </tr>
  <tr>
    <td>Add backward compatible new features</td>
    <td>&nbsp;</td>
    <td>x</td>
    <td>x</td>
  </tr>
  <tr>
    <td>Add new database tables/rows</td>
    <td>&nbsp;</td>
    <td>x</td>
    <td>x</td>
  </tr>
  <tr>
    <td>Mark anything as 'deprecated'</td>
    <td>&nbsp;</td>
    <td>x</td>
    <td>x</td>
  </tr>
  <tr>
    <td>Add backward **incompatible** new features</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>x</td>
  </tr>
  <tr>
    <td>Remove existing feature(s)</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>x</td>
  </tr>
  <tr>
    <td>Remove anything marked as 'deprecated'</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>x</td>
  </tr>
  <tr>
    <td>Change/remove existing database tables/rows</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>x</td>
  </tr>
</table>

Note that the Core team uses the same decision table for its own pull requests.


### The model

I heard that _a picture is worth a thousand words_, I hope they didn't lie to me:

![PrestaShop Branching Model]({{ '/assets/images/2015/08/prestashop-branching-model.png' | prepend: site.baseurl }})

**N.B.:** No one should commit directly on PrestaShop's 'develop' and release branches. Instead, you should submit pull requests based on your own fork of these forks. This is not shown on the graph for simplicity's sake.


### About the next release

The next release of PrestaShop is being worked on in the 'develop' branch. Depending on whether it contains changes which are backward compatible or not, it may result in a minor **or** a major release.

If your pull request breaks backward compatibility, the Core Team can only merge your changes if the next release is a major one. There is therefore a risk that your branch may become a long-running branch, and at some point it might bring some issues: merge conflicts, outdated contribution, already-fixed issue, target branch has changed from '1.6.1.x' to '1.6.2.x', etc.

Before making such a ground-breaking pull request, check the planned version number for the next release from the 'develop' branch. You can use the [install_version.php file](https://github.com/PrestaShop/PrestaShop/blob/develop/install-dev/install_version.php#L27) to see what kind of version is the next version (if it's a major one, go ahead!) -- it is updated according to PrestaShop's roadmap. Make sure you [rebase your branch](https://git-scm.com/book/en/v2/Git-Branching-Rebasing) often in order to keep it up to date!


### Maintaining multiple minor versions

At some point there will be many simultaneous release branches. For example, 1.6.1.x next to 1.6.2.x, next to 1.6.3.x.

We don't intend to maintain multiple versions of PrestaShop at the same time, but by keep those branches, if a major bug or security issue appears, we can easily and quickly make a new 'patch' release for many minor versions. This will definitely improve our process for [security patches](https://www.prestashop.com/blog/en/prestashop-security-release/).


## FAQ


#### I want to fix a bug. It can be merged into all the branches, which branch should I use?

This isn't an easy question, you'll have to make the call, as it depends on what kind of bug you are fixing. 

If it's a small bug, it can probably be easily integrated in the next 'patch' version. So, currently, that would be the '1.6.1.x' branch (check for yourself which is the latest stable version.

If it's a massive bug, like on `PaymentModule.php`for instance, you might want to play it safe and include it in the next minor version, as it will probably require more testing. This goes to the 'develop' branch. 


#### I want to change some wording, is it a bug fix?

If the change you want to make is really improving the user experience, and it cannot wait for a next major or minor release, then go ahead and do it on the current release's branch. We'll consider it as a bug fix.

However, to make sure your wording is included in the [translation project on Crowdin](http://crowdin.net/project/prestashop-official), and for the sake of our workflow (and our sanity), it is better to submit it on the 'develop' branch.


#### What about the modules?

We'll keep the current way of working with modules. We use only 2 branches: 'master' for stable release, and 'dev' for the work in progress.

If you want to **contribute to a module, make your pull request on the 'dev' branch.** When doing so, please do not update the version number in your pull request.


#### Why is the '1.6' branch still out there?

The '1.6' branch is no longer active. **Please do not open a pull request on this branch.**

The reason for its existence is pragmatic. We still have a lot of open pull requests on '1.6' branch which we need to rework in order to move them to our active branches. 

Deleting this branch would mean losing all these pull requests -- GitHub doesn't make it possible to change the target branch of a PR ([voice your opinion here](https://github.com/isaacs/github/issues/18)!). Because of this, we must manually port each PR onto the 'develop' branch. As long as we are not done with this, the '1.6' branch will still be open. Eventually, it will disappear.

#### What's the point of the 'master' branch?

As of today, we merge the latest stable release into 'master'. This is a kind of safeguard, and some of our internal tools still rely on this branch. Its future is unsure though. Therefore, just like the '1.6' branch, please do not use the 'master' branch either.


## Going further

It you want to go further with branching models, you must read this legendary article from nvie.com: [a-successful-git-branching-model](http://nvie.com/posts/a-successful-git-branching-model/).

Also, I particularly enjoyed Symfony's versioning strategy and branching model. Fabien Potencier (Founder of Symfony) [speaks about it in a keynote](https://youtu.be/pAFdmBxmt5Y?t=10m30s) -- unfortunately it's in French. You can find similar information in English [in this video](https://www.youtube.com/watch?v=pAFdmBxmt5Y&feature=youtu.be&t=10m30s).

We'll update you whenever a change occurs in our branching model. In the meantime, if you have any question, don't hesitate!
