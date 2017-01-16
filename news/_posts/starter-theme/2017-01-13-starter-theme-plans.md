---
layout: post
title:  "Our plans for the Starter Theme"
subtitle: "Building on what we learnt since the 1.7.0.0 release"
date:   2017-01-13 09:10:11
author:  xavierborderie
icon: icon-lego
tags: [starter-theme]
---

With PrestaShop 1.7, theme designers have the choice to either start their work from scratch, rework the Classic theme, or build upon the foundations laid by the Starter Theme. Based on feedback from our community, we want to improve the Starter Theme into something that fits them best.

The idea behind the Starter Theme was pretty simple: make life easier for theme designers, and give them more freedom. <br/>
Their work process is usually thus: because recreate all the necessary files is complex, they tend to work with the default theme.<br/>
This meant that designers had to work with the Core team's technical choices, or had to rip the guts out of the default theme if they wanted more freedom.

Enters 1.7's Start Theme! Feature-complete but with minimal styling, it had nothing to take away. We wanted to make no assumption about which technologies designers will use, so we decided to implement no layout at all.

That seemed like the best choice for our community: a clean theme that freelancers and agencies can use to quickly create custom themes for their clients.<br/>
Turns out, there was more to take into account. Community usage pointed in the direction of a more ready-to-use skeleton theme, even if that meant more constraints.


## Stylus

Stylus was chosen by the Core team in order to show that there is more to life than Sass -- and also because it was fun to use it at the time.

We agreed that theme designers nowadays preferred Sass, since it's more popular and has a better ecosystem. We therefore plan on using Sass instead of Stylus -- and Sass will be optional.


## Sass/Webpack

We will keep building upon Webpack, which to us is a must-have for professionals, and make it use Sass.

But, to make it useful to more people, we will also provide a basic CSS file, compiled from its Sass files. This way, designers who do not want to use Sass (or do not know how to use it) can just edit that file directly, without having to compile anything.

The basic styling will remain very minimalistic: just a couple of compiled styles in order to have a proper Sass file (or CSS file for those who want one).


## Bootstrap

Bootstrap was not included in the Starter Theme because we wanted agencies and freelancers to be free to use whichever CSS framework they preferred.

Most theme and module developers in our community are used to have Bootstrap since v1.6. In order to keep the ecosystem consistent, **we will add Bootstrap 4 to the Starter Theme**.

It will be included in a minimalistic way. All the template files will be updated in order to have the necessary markup to have a functional rendering -- we are not aiming for pretty, only functional.

Theme creators will therefore be able to work using a much more functional and responsive basic theme from the get-go.

<div class="alert alert-info" role="alert">
<p><b>Which version of Bootstrap should you use?</b></p>

<p>The Core team decided to use Bootstrap 4 from the start of the project. Because it seemed stable enough.<br/>
Since then, the Bootstrap team has released two more alpha versions; the latest of which, <a href="http://blog.getbootstrap.com/2017/01/06/bootstrap-4-alpha-6/">alpha 6</a>, entirely rewrites its grid system in order to use Flexbox -- currently a <a href="https://www.w3.org/TR/css-flexbox-1/">W3C Candidate Recommendation</a>. <br/>
Bootstrap 4 will soon reach Beta stage, which makes that a truly stable version is still months away (according to their current release frequency).</p>

<p>There have been talks within the team and with the community about how to best approach this. We decided it was better for the whole community (and ourselves) to just keep to the latest version. We think the changes in alpha 5 and 6 are excellent additions, and that it should be easy for designers to update their creation from the previous alphas. We will make sure to document the best way to have compatible modules, and compatibility can even be achieved by simply adding both Bootstrap 4 classes.</p>

<p>The project will upgrade its use of Bootstrap as soon as new versions are released, and so should theme and module designers.</p>

<p><b>The recommended version of Bootstrap 4 for PrestaShop 1.7 is therefore Bootstrap 4 alpha 6 as of this writing (January 13th, 2017), and will be Bootstrap 4 beta 1 once it is available.</b></p>
</div>


## Differences between Classic theme and Starter Theme

The Starter Theme was designed as a minimal skeleton theme, and it therefore has less feature than the Classic theme. For instance, a lot of the Classic theme currently relies on Ajax, whereas the Starter Theme is more bare-bones.

We received a lot of feedback from designers who want to have those features in the Starter Theme too. So, well, we're going to add them!


## More helpful templates

The Starter Theme's template files were spread into many sub-files in order to be more flexible. This can make it hard for some designers find their way in there.

We will therefore add a lot more help (in the form of commented code) in all the template files in order to help our community better work with the Starter Theme.

Grouping many small files into fewer bigger files is not an option, since that would break the compatibility that is already in place. The best we can do is to put as much helpful comment as we possibly can.


## When will the new Starter Theme be available?

Soon! There's no set date yet, but if you want to contribute, let us know!


## Your feedback is needed!

A lot of the decisions we are making around the Starter Theme (and PrestaShop in general) are the result of feedback from the community.

So what do you think of this plan? Is it too much, too little? How can we make the Starter Theme the best skeleton them for any type of project? Please tell us in the comments!
