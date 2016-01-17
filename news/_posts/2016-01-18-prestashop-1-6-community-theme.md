---
layout: post
title:  "Introducing PrestaShop 1.6 community theme project"
subtitle: A way to jump-start your custom projects
date:   2016-01-18 12:00:00
author: gskema
icon: icon-scissors
tags:
 - community theme
 - theme
 - open source dev
---

Have you ever tried to make a new, custom theme by modifying the **default-bootstrap** theme? It's a lot of work, but we may have a solution for you.
We are collaborating on [GitHub](https://github.com/PrestaShop/community-theme-16) trying to create a simple, extensible Bootstrap theme which you can use to easily create a new theme or develop a custom theme for your shop.

Since PrestaShop is all about **open source community**, a dedicated repository under **PrestaShop** team has been created, where people can contribute and make a theme that they want. Power to the people!

### Problems with the default theme

When PrestaShop 1.6 was first released, it came with a pretty awesome responsive, Bootstrap theme that was full of features.
But let's be honest here. The theme hasn't seen much attention since then. Bootstrap hasn't been updated since and the stylesheet has only gained weight.
This was very frustrating for the developers who wanted to contribute changes to the theme, but couldn't. The theme was essentially locked.

The problem with this theme is that it has accumulated a lot of overburden. It already has inherited a bunch of compatibility styles from PrestaShop 1.5 theme,
introduced Bootstrap, and on top of all that, has a lot of custom style rules.
The result is that simple page element has a whole stack of rules, when actually only a few rules are needed.

As for theme developers, this doesn't make a very good (starter / base) theme to fork from. They have to remove layers upon layers of unnecessary styles while worrying
about not breaking things and keeping the style compatibility for templates that come from third party modules.

Most of the third party themes customize the `default-bootstrap` theme by either modifying the existing styles only by a little
or by putting their styles on top of what already exists. Again, this creates a stack of style rules.

Why build custom styles on top, when you can actually customize the **base** styles? The `default-bootstrap` theme
already includes the source code for Bootstrap - `bootstrap-sass`, which you can customize and compile to css,
which is included in `global.css`.

These problems made it difficult for someone to create a new theme from scratch or from `.psd` design files.
Most of the development time would be spent trying to remove or clean up the default styles.
We wanted to change that.


### The idea

The idea behind this theme is to create simple, extensible and functional Bootstrap theme.

First of all, existing styles will have to be removed as much as possible, leaving the bare Bootstrap only.
Then, we will be able to override/customize Bootstrap variables, which will create a solid style base.
We won't have to declare rules twice just to override the Bootstrap rules.

The nice thing about customizing Bootstrap is that overridden variables propagate to all Bootstrap components,
meaning less work and more consistency. Another bonus is that there are thousands of plugins available, which can
be used to make new, awesome interfaces really quickly.

We also think that Bootstrap components are utilized not nearly enough in the default theme. The components are
well tested and thought through, and they integrate together very well.

Besides all this, we intend to clean up, refactor, improve the theme files and even provide a prepared theme
development workflow to get you started.

### The challenges

Obviously, a refactoring effort like this does not come without challenges. To change things, sometimes you have to break things.
We won't be able to keep 100% compatibility with 3rd party modules which copied elements (classes, HTML markup) from the
`default-bootstrap` theme, but we will try to keep as much as possible without actually slowing down the refactoring effort.
In other words, we will try to find balance. This also why we like to say that this theme is more oriented towards the
**developers**, who can take care of these issues.

Since we run this project by ourselves, we will have to come to an agreement about what to change, what to decline.
Currently, we already have a [gitter chat room](https://gitter.im/PrestaShop/community-theme-16) chat room and we are
considering different tools for issue management.

You might ask: why all this effort when PrestaShop 1.7 is already on the horizon?
First of all, we don't know when exactly 1.7 will be out and ready for production. It might even take a couple of iterations
before it becomes production ready.
For any projects that we going to start between now and the future, we can make use of this starting theme.
This is why we are going to focus on refactoring first, and then smoothing out any compatibility issues.
There is simple no time or manpower to be do this in baby steps.

### What has been done so far

Some work has already been done and pushed to the repository:

- setting up the project
- setting up theme development workflow with `gulp.js`
- formatting of files
- small bugfixes, clean up
- updated `Bootstrap`, `Font Awesome`, removed `uniform.js`
- refactoring of fonts, variables, buttons in the `dev` branch (currently in progress)

Currently, the latest version is `0.3.0`. These early versions enable you to pick
a different starting point for your project depending on whether
you want just the updated libraries, you want the `gulpfile.js`,
or you want all of the above that and the cleaned up theme files.

The coming versions will "partial" releases,
because there is a lot of refactoring to be done, and it can't be all done in one go.
This will also be what you may call the "ugly phase", where we will be taking things
away from the default theme, which is make it look (arguably) worse until we finished the
refactoring process.

That's why we will assign issues and PRs to milestones, which you can think
of as "sprints". The next release will be `0.4.0`, which will focus on remove overburden styles, but without refactoring
any of the page elements (unless necessary). That will be done in `0.5.0`.

### Contributing

We invite you all to contribute! Join our [gitter chat room](https://gitter.im/PrestaShop/community-theme-16)
before you make a pull request though! We will be able to discuss your idea before pushing it.

### Goodbye uniform.js

And finally, a farewell to our friend `uniform.js`, which has been removed in `0.3.0`:

![](/assets/images/2016/01/goodbye.gif)
