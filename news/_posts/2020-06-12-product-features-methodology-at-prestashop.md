---
layout: post
title: "Product development at PrestaShop"
subtitle: "What happens in the team when working on new features"
date: 2020-06-12 9:00:00
authors: [SamuelPires]
image: /assets/images/theme/meta-logo-build.png
icon: icon-lab
tags:
- design
- feature
- process
- product
---

In March 2020, the Core product team at PrestaShop, in charge of building and prioritizing new features, decided to work with a new tool: Productboard.

The team thought it was the right occasion to talk more about the product development at PrestaShop, the steps, the roles and responsibilities and what happens behind the scenes before a new feature is added to PrestaShop.


## PrestaShop’s product development cycle

### Core product team

In the PrestaShop company, a cross-functional team is dedicated to maintaining the PrestaShop open source project: the Core team.

Its mission is to make sure the software is stable, usable, and valuable to all of its users while following the industry standards. All this requires many people and several different skills. Currently, the Core team counts 9 developers, 5 QA engineers, 2 designers, 1 content manager, and 4 product managers.

Editing and maintaining a software like PrestaShop means fixing bugs but also adding improvements and new features.

Fixing a bug does not require the same skills that defining a new feature. Most of the time, the functional scope of a bug is obvious: the 'save' button does not work, let's fix it so that it can save. Adding a feature is a bit more complex: in-depth search must be done to specify the functional scope.

Why so? Because **the goal of any feature is to solve a problem**. So we need to answer the following questions get a better definition of the issue: what exactly is the problem? how many users encounter it? how painful is it? is there any workaround?

But each added feature makes the software more complex again - more complex to maintain and in some cases more complex to use... So, on one hand, we cannot afford to add useless features and, on the other hand, we must make sure that any added feature will be usable. And that’s where our product team is needed!

Our product managers are responsible for delivering value to all PrestaShop users. And the first step to do so is to decide which features must be improved or built. How? By getting insights on the users’ needs and issues to solve.

Once we know what problem to address, it is time to design the feature. It will allow us to create a tangible and usable solution, coherent with the software. That is the designers’ and the product content manager's responsibility.

While the product manager’s job is to identify the problem to solve, the designer's job is to design the best solution. Of course, this is done in collaboration with everyone. And then the whole team can start building the feature.


### How to know what to focus on?

Everything starts with feedback. Without feedback, without talking with users, we are blind, lost in the fog.

PrestaShop being an open source project, the team can rely on its tremendous community to gather feedback, identify pain points, and discuss many topics. So collecting feedback is not that difficult, GitHub is probably the main source, but there are also events such as [ambassadors' meetups](http://ambassadors.prestashop.com/ambassadors), [PrestaShop events](https://events.prestashop.com/), user interviews regularly conducted by the product team, and the [community Slack](https://github.com/PrestaShop/open-source/blob/master/slack/readme.md). We also keep an eye on what happens around in the e-commerce and CMS industries to make sure the software goes in the right direction regarding the market's evolutions and expectations.

Collecting feedback is easy. What is more difficult is to centralize and analyze it in order to identify the users’ needs lying behind.

Productboard will help the team here. By making it easier and automatic to centralize feedback directly in the same place. Wherever it comes from. We call these feedback **insights**. On Productboard, product managers can create topics to group **insights** together, this step helps form a first **expression of needs**. Sometimes the expression of needs already gives the best solution, sometimes it is still a bit early to know how it could be solved.

How interesting is it for the community? Well, Productboard allows us to share this work externally! This is great to inform the community about the problems the team has identified and to keep collecting more information about them. It is crucial to help us understand all the possible use cases of a problem.

**You will soon be able to see these expressions of needs on the PrestaShop Feedback website.**


### How to go from a need to a feature?

Centralizing and analyzing insights is difficult. But the next step of our product development is even more difficult: prioritizing the users' needs.

PrestaShop is used on 300k+ online stores around the world, and its community gathers more than 1 million people.
There are hundreds of needs out there, waiting to be solved. So how does the team decide what to build next?

The Core product team uses several criteria to evaluate the importance of a need. There is no scientific, or magical, formula. It is a list of aspects that the team reviews in light of the research and analysis previously run. Among these aspects are:

- legal requirements,
- the impact on the merchants’ businesses,
- the impact on merchant productivity,
- the impact on the developer experience,
- and many more...

As you can see, it is important for the team to take into account all the impacts of solving a need and building features. It is also crucial for us to keep in touch with the users at all steps, especially while doing some research and during the conception phase, so that we can never lose sight of the initial need.


### Designing a feature

Lastly, once you know what to focus on, and what you should work on next, it is actually time to design the feature, to define what to build.

All the product development process at PrestaShop is summarized in the following chart.

![Product development steps at PrestaShop](/assets/images/2020/05/product-development-steps.png)

Designing a feature means defining what is the best solution to a problem, a need.
There are many ways to solve a problem. But design is not about solving a problem, it is about solving a problem the best way possible and with elegance.

The usual process to design and build a feature is the following:
- User Research
- Prototyping and design
- Specifications
- Development
- QA testing
- Release

And sometimes there are several iterations in between to reach a complete feature.

Once the prototyping and design phases approved, we create an EPIC on [GitHub](https://github.com/PrestaShop/PrestaShop/labels/Epic) including the feature description and all of the related user stories (each US being a specific issue) that need to be addressed. It can also contain a few bugs to fix in the meantime. 

In parallel, we write down functional specifications and add it to the dedicated [repository](https://github.com/PrestaShop/prestashop-specs) with all prototypes screenshots and links to the mockups.

If all the stakeholders of the feature (PM, CM, designer, developer, and QA engineer) agree on it, the development phase starts. Step by step, the user stories reach the [version kanban](https://github.com/PrestaShop/PrestaShop/projects). When all issues are developed and their pull requests merged, we close the EPIC.

This process stays the same, whether the development is done internally or with the help of the community. We do so to ensure alignment before the development phase.

Here is how feature development goes at the Core product team, dealing with feedback and skills from both the external and the internal contributors! Product development on such a huge project is quite challenging, that is why the team makes a point of keeping this workflow clear and available for all. As usual, feel free to comment and let us know what you think about it. Even better, tell us about how do you prioritize, organize your own development process... we would love to have your feedback!
