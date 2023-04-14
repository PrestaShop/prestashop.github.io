---
layout: post
title:  A new organization for the Open Source project
subtitle: "A clearer, more transparent, more collaborative organization"
date:   2023-04-17
authors: [ PabloBorowicz ]
icon: icon-compass
tags: [ news, contribute, community ]
---

Today, I’m going to share the new organization for decision-making that will be set up for the PrestaShop project. We think this organization will help our community grow, get even more involved, and work together in building a better PrestaShop, faster.

## Why do we need a new organization?

During the last years, we have been observing a steady growth in the number of community Pull Requests being merged every year. 

![Community PRs merged yearly](/assets/images/2023/04/community-prs-yearly.png)

Seeing the chart above fills me with joy and a sense of accomplishment. By the looks of it, we're doing good, and things are looking great for the future. In fact, the current trend puts 2023 as another record year for community contributions for the fourth year in a row. We can be proud.

We have to ask ourselves though: is this growth sustainable? Is this the best the project can do, or could it do even better? And if it could do better, why _isn't it_ doing better?

I'm convinced that it could do even better. Based on observation, I know for a fact that for every idea that succeeds its journey into the project, dozens don't. Why is that so? 

Currently, the #1 pain that contributors complain about is that their **contributions regularly get stuck for a very long time** at one stage or another, either waiting for PMs, code review, or QA validation. They are frustrated, and understandably.

In general, whenever a contribution is submitted, several different decisions need to be made and discussed:

* Does this belong in the project?
* How should this solution work?
* Which technical implementation is best for this solution?
* How do I assess that this solution works as expected?

The higher the volume of contributions, the larger the number of decisions that need to be made in the same timeframe. Successful open-source projects like PrestaShop all suffer from the same problem: the volume of contributions quickly exceeds the capacity of project members to process them all quickly. 

Facing this situation, project members will prioritize the subjects that seem the most important for them, or the ones that are easiest to decide on. But naturally, opinions on what's the priority often differ from one person to the next. In consequence, many feature requests, issues and Pull Requests pile up, waiting for decisions to be made, frustrating contributors and discouraging them from participating in the project.

This leads me to believe that today, **the key to increasing contribution is lifting the main barrier to it: time to decision**. 

To achieve that, we need to:

1. Clarify who is authorized to make decisions within the project
2. Facilitate the integration of community members in those roles (more people = more decisions)
3. Streamline the decision-making processes to make them as fast and seamless as possible
4. Do all the above, while preventing the project from becoming chaotic. 

## Introducing the project's new organization

During the last few months, we have been building a new organization to address these problems in the project. 

This new organization is built around new groups of people that replace and expand the scope of what until now was known as project maintainers. We call them **project councils**. 

Councils are meant as self-organized, lightweight groups whose mission is to facilitate decision-making. Each council has authority over a defined domain:

* **Technical Council** – decides on technical subjects, including architecture and implementation choices.
* **Product Council** – decides on product management subjects, including what features belong in the project, specifications, UI/UX guidelines, and wordings.
* **Quality Council** – decides on quality assurance subjects, including quality processes, verification of pull requests, and bug triage.
* **Leadership Council** – oversees the other councils, decides on strategy matters and provides alignment.

Councils are not meant to pronounce themselves on every single tiny decision, but rather **be summoned when an important decision needs to be made**, then produce guidelines and recommendations for contributors to follow from that point on. 

Councils are generally **free to organize themselves independently as they see fit** in order to perform efficiently. For example, a Council might grant day-to-day decisions to a delegate group, like maintainers currently do with committers for code review and merge. Another Council might choose to self-divide into working groups by expertise or project.

Existing groups like committers, QA Functional, and other similar groups will become delegate groups to their respective Council, but otherwise continue functioning as before. Once the new organization will have been rolled out, these groups may be subject to change, or new ones may be created.

{{< figure src="/assets/images/2023/04/council-delegate.png" caption="Example of Council and delegate group" >}}

Membership to councils is invite-only, but not necessarily based on employer affiliation. Contributors may get invited in (or out) of councils mainly on the basis of trust, reputation, and engagement level. Depending on their skills, a person may be invited and seat in more than one Council at a time.

Each Council has a lead. Council leads are responsible for ensuring that the Council is effectively pronouncing on decisions, providing guidance for his or her council colleagues, and guaranteeing that subjects move forward coherently. For that, **leads benefit from a power of veto and override** over their own Council's decisions – to be used sparingly, of course.

The Leadership Council is in charge of providing structure and a general direction for the project. To that end, it oversees the other Councils and has final authority over them and their decisions, including the right to appoint and remove leads. With great power comes great responsibility, and so its authority is to be exercised wisely.

For the time being, the project's main sponsor, PrestaShop SA, reserves the right to appoint the Leadership Council's lead.

{{< figure src="/assets/images/2023/04/council-org.png" caption="Councils' structure with example groups" >}}

### Working principles

This new organization delegates most of the decision-making to individuals that are expected to make decisions together. The key to Councils working efficiently is avoiding the _committee's trap_, where the more members there are in a group, the harder and slower it is to reach a consensus and make a decision that satisfies everyone. 

With that in mind, and inspired on the first principle of the agile manifesto, _"individuals and interactions over processes and tools"_, a small number of ground rules, or "working principles" have been set up:

* Admittance in a Council or delegate group is mainly based on good will, mutual trust, reputation, engagement, and convergence toward common goals. We work in small groups and we trust each other to work in the project's best interest.
* We optimize for efficacy and not for thoroughness. We set up lean processes, only when such processes are a necessity. Not everything needs to be written in stone for an action to take place.
* We use [lazy consensus](https://community.apache.org/committers/lazyConsensus.html) to accelerate decision-making, notably by specifically stating short (but reasonable) timeframes for providing feedback on a proposal.
* We cherish the humility to ask when we don't know, recognize when we are wrong, accept when we have made a mistake, learn from it, and improve.
* Less is more. We strive not to overthink things!

## Initial composition of Project Councils

The initial composition of the project's Councils is largely based on the established roles from our previous structure. Current maintainers (including scoped maintainers) will automatically join the Technical Council. The rest of the Councils will be initially populated with the people currently performing similar roles.

As we roll out the new structure out and Councils begin to function, new members may be invited, and inactive members may be removed.

**Leadership Council**

* Pablo Borowicz (@eternoendless) **– Project Lead**
* Fabien Vallon (@fabienvallon)
* Mathieu Ferment (@matks)
* Robin Fischer (@Robin-Fischer-PS)

**Technical Council**

* Jonathan Lelièvre (@jolelievre) **– Lead**
* Daniel Hlavacek (@Hlavtox)
* Ibrahima Sow (@sowbiba)
* Krystian Podemski (@kpodemski)
* Mathieu Ferment (@matks)
* Matthieu Rolland (@matthieu-rolland)
* Pablo Borowicz (@eternoendless)
* Pululu Kinanga André (@PululuK)
* Thomas Baccelli (@atomiix)
* Valentin Szczupak (@NeOMakinG)

**Product Council**

* Fabien Vallon (@fabienvallon) **– Lead**
* Mateus Shirlaw (@MatShir)
* Rosa Benouamer (@RosaBenouamer)
* Zoé Finders (@Zoefinders)

**Quality Council**

* Robin Fischer (@Robin-Fischer-PS) **– Lead**
* Boubker Bribri (@boubkerbribri)

## Advantages of the new organization

We think that this structure will provide many advantages:

It will **facilitate decision-making**, thanks to a clearly-defined project structure, including the people responsible for each domain, that clears out any misunderstanding as to who is responsible for what decision (and especially who has the "final-final-final" word on it).

It will **enable more people to participate in the project,** by opening decision-making roles that were previously closed to community members, including the creation of new lower-stakes roles that are easier to join to.

It will **progressively accelerate decision-making,** by the means of simplified processes, and above all, more people to make them!

All while **lowering the risk of project instability** due to diverging opinions.

## Final words

This new organization will progressively roll out in the coming weeks.

Our objective is to accelerate time-to-decision to prevent contributors from getting stuck, and through that help more contributors succeed in participating in the project. Remember, **the more people contribute, the better PrestaShop becomes.**

To that end, we intend to invite as many people in Councils (or delegate groups) as we can. The idea is to reach a point where if enough community members think a feature is interesting and are willing to contribute it, they will be able to self-organize to work on it, and Councils will be numerous enough to quickly react and provide guidance on the best way to include it. 

We expect this new organization to be a key enabler for this kind of collaboration, that we call _community initiatives_. This subject will be covered in a dedicated article soon. 

Until then, let me stress one thing: **this new organization is a starting point, not a finish line.** We will learn what works well and what doesn't, and improve it as we go. 

Now we have the tools to do it together!
