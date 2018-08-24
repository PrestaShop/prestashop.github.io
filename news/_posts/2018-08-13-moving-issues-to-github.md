---
layout: post
title:  "We are moving Issues to GitHub"
subtitle: "A big move from the good old Forge in order to have everything in one place for everyone."
date:   2018-08-13 11:15:00
authors: [ AntoineThomas, PrestaShop ]
icon: icon-code
tags:
 - community
 - contribution
 - forge
---

Next week, we will enable issues on [PrestaShop project’s GitHub repository](https://github.com/PrestaShop/PrestaShop). This is going to be the new way to report bugs and to open feature requests. This way, the roadmap, issues, pull requests and source code will all be in the same platform.

## Introducing issues

There will be two templates for creating issues: one for bug reports, and one for feature requests. Of course, please search if your issue has already been reported, before opening a new one.


### Bug report

As usual, a bug report must be detailed, include steps to reproduce, and eventually screenshots or other useful resources. That part doesn’t really change. For non developer people, you might have to learn a bit how to use Markdown to add style to your messages on GitHub, but you will see that this very easy. And that’s why it’s a great platform to develop a project. If you are not familiar with it, I recommend you to read the very interesting [Mastering Issues](https://guides.github.com/features/issues/) and [Mastering Markdown](https://guides.github.com/features/mastering-markdown/) documentations.

There will be one place to create issue for the core and for the modules: everything has to be created on the main project, [PrestaShop’s Core repository ](https://github.com/PrestaShop/PrestaShop). It should make it easy both for project maintainers and the community at large to track issues and then for developers and contributors to link them to pull requests.


### Feature request

If your ticket is not a bug, but instead you want to ask for a new feature, use the dedicated template. Same as for a bug, please give details about your idea, and do not hesitate to provide some mockups.


### Linking issues and pull requests

If you are submitting a PR to fix an issue, don’t forget to mention it in the description or in the commit message. It’s easy, just add a reference to the number of the issue (e.g “#123” or Organisation/repository/#123) and GitHub will create a link.


## Steps before opening the Issues feature on GitHub

Of course, the current Forge, based on Jira, will not be closed right away. Below is a checklist of different steps we need to complete in order to keep the information available at all time:

* Check all issues and feature requests in the current Forge and close the ones that are no longer valid (done)
 *On GitHub, create [Labels](https://github.com/PrestaShop/PrestaShop/labels) so it is possible to keep all the sorting information and fields from Jira (done)
* Prepare a migration script to import the open tickets from the Forge to GitHub issues, with cross links and comment history (done)
* When GitHub issues are open, freeze the Forge and import the history (BOOM, FF, BOGOSS done)
* Update links on documentations and websites or provide redirections **(work in progress)**
* The Forge will become a read-only resource and it will stay available until its content becomes useless (done)

Once done, all new issues must be open on GitHub. The aim is to finish this work before the end of the summer.

Last update: 2018-08-24 10:15


## Please, be patient

We started speaking with people inside and outside the company about moving to GitHub Issues during Spring and at PrestaShop Day Paris. The feedback was very positive, with a lot of enthusiasm and interest. We really hope that this will allow contributors to become more active, and that the overall development process will to be more efficient and more open.

However, it seems that some people are a bit hasty. Recently, we saw some off-topic questions and comments on pull requests, in order to discuss with developers. Please, don’t do that, and continue using the Forge until the move to GitHub is complete. And then, create issues. **Pull requests are about code and development, it’s not the place to ask questions**.

In order to keep everyone up to date with this migration, this article will be updated as the migration moves forward.

## PrestaShop 1.6.x

Tickets open on the Forge for v1.6.x will not be migrated to GitHub. Of course, like the other projects, they will still be available as a read-only resource. If you discover a new bug, please open a new bug report directly on GitHub.
