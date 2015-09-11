---
layout: post
title:  "Set up your Git for contributing"
subtitle: "Tweak your git configuration to work better"
date:   2015-07-30 11:21:00
author:  [ julienbourdeau ]
icon: fa-laptop
tags: [git, env, github]
---

Any open source project comes with its own set of rules to harmonize everybody's contributions.
Usually the guidelines are described in a [CONTRIBUTING.md](https://github.com/PrestaShop/PrestaShop/blob/develop/CONTRIBUTING.md)
file inside the project root directory.

To follow these guidelines, you often need to adapt your development environment.
You will find here all you need to know to set up your development environment! This will help your contribution
get validated more quickly and without further modifications.

We'll be talking about working with the PrestaShop project, but what you'll read here applies to most PHP open source projects.

## The Git configuration

PrestaShop is versioned with Git and hosted in GitHub. If you intend to make a Pull Request, you should make sure your Git configuration is well set, so you don't run into issues (like having commits that are not yours in your PR).

Below are the recommended settings for your `~/.gitconfig` file.
It's widely inspired by [this great git config](https://gist.github.com/tdd/470582) by [Christophe Porteneuve](https://twitter.com/porteneuve).

<script src="https://gist.github.com/julienbourdeau/be21f43006244234675e.js"></script>

Like I said, this configuration will also be useful if you contribute to other open source projects.


## Some details

### Aliases

A Git alias adds a new command (like bash aliases), so that you can type `git br` to see all branches instead of having to type `git branch -avv`.

The few aliases we add are pretty standard, but it's up to you to add them or not.

### Fetch

When you fetch data from the remote repository, Git will also fetch every submodules. With the `recurseSubmodules=on-demand` setting, Git
will only fetch submodule data if the parent project has a commit that updates its reference.

Considering PrestaShop has 50+ submodules, this will save you a lot of time when you use `git pull`.

### Merge

When Git runs into a conflict because one of your teammate changed the same bit of code than you did, both versions are displayed in the file and they are separated with markers like `<<<<<<<`.
With the `conflictStyle=diff3` setting, you will see your version, their version, and the common ancestors.

I recommend to read [this short part of the documentation](http://git-scm.com/docs/git-merge#_how_conflicts_are_presented)
for further information.

### Pull

This one is the most important part. There are two ways to pull: you can either **_rebase_** or **_merge_**. As soon as you work with someone else on one branch,
we prefer that you use the rebase strategy, as it will keep your history cleaner (showing one straight line).

When you pull the remote branch, your changes will be moved on top so that you don't have any merge commits.

If you want more details about **the difference between _Pull_ and _Rebase_** you should
[read this tutorial from Atlassian](https://www.atlassian.com/git/tutorials/merging-vs-rebasing).

The following schema explains the difference between merge and rebase
(Credit: [Atlassian](https://www.atlassian.com/git/tutorials/merging-vs-rebasing/workflow-walkthrough)).

![](/assets/images/2015/07/git-pull-merge-vs-rebase.png)

### Push

Before Git 2.0, the command `git push` would push **every** branch with a matching name to the remote. Now, the default
settings will only push the current branch to the remote branch with the matching name.

We recommend using the `default=upstream` setting, which makes that you have to set the remote branch explicitly the first time you push.

### Status

| Setting | Description |
|:-------:|-------------|
| `submoduleSummary=true` | PrestaShop uses a lot of submodules. This setting will show you more details about changes in submodules. |
| `showUntrackedFiles=all` | By default, if you add a folder with subfolders and files, your `git status` will only show the root folder as untracked. With `all`, you will see all the new files. |


## That's it!

If you have any questions or remarks, please let us know in the comments.

Also, the [official Git documentation](http://git-scm.com/doc) is very detailed and well written, you will always
find the answer to your question there. _Just sayin'._
