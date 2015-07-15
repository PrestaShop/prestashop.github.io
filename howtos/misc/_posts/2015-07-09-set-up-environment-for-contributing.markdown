---
layout: post
title:  "Set up your Git for contributing"
subtitle: "Tweak your git configuration to work better"
date:   2015-07-09 11:21:00
author: julienbourdeau
icon: fa-laptop
tags: [git, env, github]
---

Any open source project comes with its own set of rules to harmonize everybody's contributions.
Usually the guidelines are described in a [CONTRIBUTING.md](https://github.com/PrestaShop/PrestaShop/blob/develop/CONTRIBUTING.md)
file inside the project root directory.

Find here all you need to know to set up your development environment! This will help your contribution
to get validated more quickly and without further modifications.

We'll be talking about PrestaShop but what you'll read here applies for most PHP open srouce projects.

## The Git configuration

PrestaShop is version with Git and hosted in GitHub. If you intend to make a Pull Request you should make sure your
git configuration is well set so you don't run into issue (like having commits that are not yours in your PR).


Below are the recommended settings for your `~/.gitconfig` file.
It's widely inspired by [this great git config](https://gist.github.com/tdd/470582) by Christophe Porteneuve.

{% gist julienbourdeau/be21f43006244234675e %}

Like I said, this configuration will also be useful if you contribute to other open source projects.


## Some details

### Aliases

All git alias will add a new command (like bash aliases), so you can type `git br` to see all branches instead of
`git branch -avv`.

The few aliases we added are pretty standard but it's up to you to add it or not.

### Fetch

When you fetch data from the remote repository git will also fetch every submodules. With `recurseSubmodules=on-demand` git
will only fetch submodule data if the parent project have a commit that update its reference.

Considering PrestaShop has 50+ submodules, you will save a lot of time when you use `git pull`.

### Merge

When Git runs into a conflict because one of your teammate change the same bit of code both versions are displayed in the file
and they are separated with makers like `<<<<<<<`. With `conflictStyle = diff3` you will see your version, their version
and the common ancestors.

I recommend to read [this short part of the documentation](http://git-scm.com/docs/git-merge#_how_conflicts_are_presented)
for further information.

### Pull

This one is the most important. When you pull the remote branch your modifications we'll be moved on top so you don't have
any merge commits. If you are the only one working on your branch, you'll be fine but as soon as you work on someone else's
branch, this will keep your history cleaner.

If you want more details about **the difference between _Pull_ and _Rebase_** you should
[read this tutorial from Atlassian](https://www.atlassian.com/git/tutorials/merging-vs-rebasing).

The following schema explain the difference between merge and rebase
(Credit: [Atlassian](https://www.atlassian.com/git/tutorials/merging-vs-rebasing/workflow-walkthrough)).

![](/assets/images/2015/07/git-pull-merge-vs-rebase.svg)

### Push

Before Git 2.0, when the command `git push` would push every branch with a matching name to the remote. Now the default
settings will only push the current branche to the remote branche with the matching name.

We recommand using `default = upstream` so you will have to set the remote branch explicitly the first time you push.

### Status

| Setting | Description |
|:-------:|-------------|
| submoduleSummary=true | PrestaShop uses a lot of submodules, this setting will show you more details about changes in submodules. |
| showUntrackedFiles=all | By default if you add a folder with subfolders and files your git status will only show the root folder as untracked. With `all` you will see each new files. |


## That's it !

If you have any questions or remarks, please let us know in the comments.

Also, the [official Git documentation](http://git-scm.com/doc) is very detailled and well written, you will always
find the answer to your question there. _Just sayin'._
