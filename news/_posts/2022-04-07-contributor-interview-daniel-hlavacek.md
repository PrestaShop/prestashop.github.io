---
layout: post
title: "Merchant, freelance developer, and top contributor: Daniel Hlaváček’s experience with the PrestaShop project"
subtitle: "Discover the faces behind the commits"
date: 2022-04-07
authors: [JulieVarisellaz]
icon: icon-world
image: /assets/images/2022/04/daniel.jpg
tags:
 - contribute
 - community
 - contribution
---
Have you ever wondered who was hiding behind a GitHub username? It’s time to find out! Contributor interviews are a great way of getting to know the people who participate in the PrestaShop project. This month, meet Daniel Hlaváček, aka [Hlavtox](https://github.com/Hlavtox).

<img style="border: 1px solid #CCC; float: left; margin: 0 1em 1em 0;" width="517" height="388" src="/assets/images/2022/04/daniel.jpg">

Daniel spends most of his time managing his family business’ online stores. The rest of the time, he works as a freelance developer for 10 clients, whose stores are all based on PrestaShop.

Despite his busy schedule, Daniel also takes time to contribute to the PrestaShop open-source project, with more than [300 contributions](https://contributors.prestashop.com/). 

<div style="clear:both"></div>

Dear readers, meet Daniel!

**Hi Daniel, can you tell us more about yourself?**

Hi, I’m Daniel. I’m 28. I live in Pardubice, Czech Republic.

70% of my job is to take care of my family’s online stores. The rest of the time, I work as a freelancer. I have about 10 other clients for whom I’ve built online stores. I won’t share my website here, as I’m not taking on any new clients at the moment. My hands are full! :relaxed:

My family has been selling kitchen appliances online since 2006. Our main website is [Trendo.cz](https://www.trendo.cz/). My role in the family business is to take care of our stores, product catalog, network, hardware, and everything related.

I have always loved computers: building and repairing laptops, making websites, setting up networks, etc. My ecommerce journey started in 2008. I was about 15 years old when I started working for my family business - managing products and content on our website. Gradually, I took on more and more responsibilities.

Around 2014, we switched from an external provider to PrestaShop. We wanted to be in control and customize our stores to better suit our needs. At the time, a developer friend of mine was in charge of modifications. Gradually, I improved my skills and became more comfortable with PrestaShop software and PHP to some extent. We have not needed outside help for several years.

I also developed our complete custom ERP system that allows us to manage all our stores and orders in one place: packing from handheld devices, shipping and label printing, package delivery, tasks, supplier data sources, etc.

**When did you get involved in contributing to the PrestaShop project?** 

We launched our first PrestaShop store in 2014 on the 1.6 version. Back then, I only reported some bugs on Forge[^1] .

In 2018, PrestaShop [moved issues to Github[(https://build.prestashop.com/news/moving-issues-to-github/), and around that time, we migrated to the 1.7 version. During the migration to 1.7, I encountered many bugs, so I reported them on Github. When I realized that the PrestaShop team couldn’t fix them all, I motivated myself and decided to contribute. So, I stopped complaining and took action.

[^1]: <em> Former web-based collaborative software platform based on Jira. </em>

**As a freelancer, why do you contribute to the open-source project?**

Honestly? So I have less work when upgrading my stores. The more things I fix, the less work will everybody have when upgrading. I also like the feeling of doing something good: new merchants who create a PrestaShop store will get much better software than the one I started with.

Also, if something is implemented in the core, all modules will count on it and automatically include it in their data. For example, the MPN field: I added it to my PrestaShop build, but all other modules needed to be modified: XML export to Google, marketing modules, etc.

I learned so much by contributing to the open-source project. I was a beginner in PHP back then. I could write some basic things and mostly submitted one-line pull requests. After 5 years, I think I can do almost anything and make complex pull requests on stuff I was afraid to touch, such as the faceted search and others.

**You also take part in the translation of PrestaShop into Czech. What motivates you?**

Translations needed to be improved. There weren’t many active Czech translators and I couldn’t get in contact with any of them. I studied translation and interpretation in high school, so I thought I’d give it a hand! It’s nice to see that PrestaShop is now fully available in Czech. 

**Do you have any advice for first-time contributors?**

First of all, I think the process could be improved. It would be nice to have more people approving and checking pull requests. Right now, if I submit a pull request, it can take several days before I get an answer. Then there are a lot of back and forths and different people taking turns. In the end, it can take a long time for a pull request to be merged and that's a bit discouraging. I think it’s a governance issue. 

That said, I don't think new contributors should be afraid of the process. Many of them submit a pull request, get angry at the process and stop contributing. This is unfortunate because if they held on, they could learn new things and get something positive out of it. 

As contributors, we can help make the process faster. If the pull request’s description is just one line long and nobody understands what it does, it’s very difficult to approve it. So, try to be as descriptive as possible. Try to think wider and not only about your use case.

Remember that even though you’re just modifying 2 lines of code, it can have repercussions elsewhere. To prevent this, you need to test your pull request with every related setting to make sure nothing is broken. Also, search the codebase for every place where this piece of code is used, and check the behavior. You could also help the QA team with some use tests they could check.

**Would you like to add anything?**

Well, yes! First of all, I’d like to thank the developer team for accepting me as I am. I tend to say what I think and I’m not always very diplomatic. (:innocent:) No hard feelings. I may be a bit grumpy one minute and laugh the next. 

I also want to thank Valentin ([NeOMakinG](https://github.com/NeOMakinG)) for teaching me JavaScript, putting up with my empty lines (:joy:), and being so patient with me.

I also wanted to mention something about contributing. Many module developers don’t want to contribute because it doesn’t generate money. I want them to try to have a second thought… I think contributing will make their lives easier in the end if they fix things that bring them trouble (the need for workarounds, overrides, missing hooks). They will be able to bring better solutions, faster modules, and fewer customer tickets with doubled overrides.

I have a friend, a module developer. Sometimes he complains that he’s missing something, a hook for example. So, I always ask him: “Why don’t you at least open an issue for that?”. The maintainer team can’t guess people’s needs. If you think something is missing, or if you notice a bug, at least report it, so that we know about it! :relaxed:

**Thank you, Daniel!**

If Daniel’s experience has inspired you and you want to get more involved in the project, don’t hesitate to [contribute](https://github.com/PrestaShop)! 


