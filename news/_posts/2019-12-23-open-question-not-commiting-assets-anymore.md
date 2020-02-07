---
layout: post
title:  "Open Question: What about not committing generated files anymore?"
subtitle: "Let’s talk assets, we want your opinion!"
date:   2020-01-17 08:00:00
authors: [ PierreRambaud, PrestaShop ]
icon: icon-chat
image: /assets/images/theme/meta-logo-build.png
tags: [1.7, development, community]
---


This post is the first of a new kind.
We decided to open up more with you about technical questioning and decisions for the PrestaShop project.
This one is about generated asset files.


## Generated files?

In a library context, generated files would be what users will have in the final application.
Files in the script tags or css for example.

These files are the concatenated, compiled and minified versions of our library files.
These files are called “Generated files” or “assets”.

In the PrestaShop context, using a tool like Webpack to compile our files and make sure we distribute the fewest files as possible is mandatory. It makes the installation as fast as it could be.
**We must use this kind of tools** for the following reasons :
- Some browsers are not supporting ES6 yet
- Our dependencies
- The huge lines of code


## Problem

There are two kinds of problems we have every time someone is working on these files.

### 1. Git diff:

![What we see everytime in the git diff](/assets/images/2019/12/open-question-assets-git-diff.png)

It is impossible to review, and it's dangerous, we can’t be sure no one adds malicious code.


### 2. Git rebase:

![These nice conflicting files...](/assets/images/2019/12/open-question-assets-git-rebase.png)

Every time someone merges a pull request with a compiled file, we must do a  “git rebase”.

The more contributors we have, the more rebase we will have to do.


## Our proposition

Because GitHub is a tool to centralize our “sources” files and allow anybody to compile and install our dependencies, and finally run PrestaShop, we would remove generated files and add simple command lines to help our contributors.

Currently, we already have everything to compile our dependencies, it is even mandatory with Composer (for PHP). So the idea is to do the same thing for NodeJS now.

To make it easy for contributors, we would add a `make install` command, making everything works fine.


## Benefits

Removing these files would:
- Reduce back and forths between the Core team and the QA team
- Reduce our review time
- And reduce our merge time


## Drawbacks

- Assets won't be present any more when you clone the repository
- Node needs to be installed and available on your development machine


## The release process

This would not change the way release archives are built, the assets will be built during the release creation so it changes nothing for people who want an out of the box PrestaShop archive. But at least we will be 100% sure that the assets in the release are the most recent ones since they will be built along with PHP dependencies, and not fetched from an old PR.

Do you agree? Did we miss something? Do you have questions? Let’s talk about it in the comments!
Let us know what you think about it!

<br>
<div class="alert alert-info" role="alert">
<h4><i class='icon-chat'> </i>Let's talk</h4>
  The goal of this kind of article, "Open question", is to discuss technical topics with you.
  <br>So please, let us know what you think and feel free to ask questions in the comments below.
  <br><br>Oh, and we are also looking for a name for this kind of post, we went with “Open question”, but if you have other ideas feel free to share them!
</div>
