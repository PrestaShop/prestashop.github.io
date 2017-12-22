---
layout: post
title:  "Video: Last from PHP Forum with love"
subtitle: "Because elephpants is not the only thing we brought back"
date:   2017-12-22 09:10:11
authors: [ thomasn ]
icon: icon-laptop
tags:
 - development
 - event
 - video
---

Remember I told you about weird blue elephpants? You got it, it was our dream team of developers that attended the AFUP’s annual conference in Paris! As agreed, they came back with a lot to share on Build. Here, @Quetzacoalt91 will told you about Nicolas Grekas and the lecture he gave at the PHP Forum:


## Quality processes: the Symfony case

"You may have heard about Nicolas Grekas, a core team member of the Symfony project and CTO of Blackfire. We had the chance to see him last October in Paris where he presented the quality process in Symfony. He talked about several subjects, all around the maintainability of this huge project.

We have already borrowed some good ideas from them, and this is why you have to fill a table when you submit a pull-request on the PrestaShop project. Without it, we could still receive new pull-requests “without description”, sometimes even with a non-explicit title. Quite hard to guess what the contributor wants to fix in this case, right?

<iframe width="796" height="448" src="https://www.youtube.com/embed/9QtvhR93zJI" frameborder="0" allowfullscreen></iframe>

Anyway, several of the topics covered in this presentation were familiar to us. Not only because we have an open-source project in common, but also because we share a complex architecture: a main project with several dependencies gravitating all around it (in our case, modules).

Nicolas explained how they manage their dependencies (contributions & releases) in the main project. And that was really interesting! We learnt that we could keep an eye on the global activity using a single repository and then manage releases of each dependency using subtrees and read-only repositories.

We have to admit that sometimes we miss the PRs you submit on the native modules, there always contains good ideas to reproduce somewhere else when it works. So if one day you see some improvement to bring in our module management, you will know this presentation was one of the reasons. :)


### Want to go further?

Here is a non-exhaustive list of what we saw:

**Pull-request management**
- How to make them easier to understand?
- What is required before merging a PR?

**Applying changes application on all compatible Symfony versions**
- Manual cherry picks by the merger

**Release definition**
- What can be included in a major / minor / patch version?


Note that the AFUP put videos of all lectures given at the last PHP Forum online, on their [YouTube channel](https://www.youtube.com/user/afupPHP/featured). How kind!
