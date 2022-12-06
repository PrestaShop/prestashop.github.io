---
layout: post
title:  "User tests are not enough"
subtitle: "We created Lean Feedback, a collaborative workshop to help you deal with user tests results"
date: 2016-11-30
authors: [guillaumebruere, leamendes]
icon: icon-guy-big-smile
tags: [design,product]
---


As a designer, product manager or entrepreneur you’ve probably been told countless times that user feedback is gold (and that’s true!). There’s no shortage of books and articles that describe the benefits of testing your product with your users. While these documents provide good advice on how the test is done, they often lack explanations on how to make sense of this feedback and how this process fits inside a team.

That’s why we wanted to share our experience of user tests at PrestaShop. When we’ve set up user tests at PrestaShop, we’ve overcome many challenges, summarized a lot of advice and built our own methodology. To us, one critical aspect was to collect truly useful and actionable feedback from these tests: that’s how we came up with the idea of the **Lean Feedback workshop**.


## Background


At PrestaShop, our baseline is “WeCommerce is better eCommerce”, a sentence which reflects that our community is our biggest asset and how much we value the voice of our users. PrestaShop is an Open Source e-commerce solution that powers more than 250,000 online stores worldwide and has a community of 1 million members (merchants, developers, partners, web agencies…).
With our new [1.7 version](https://www.prestashop.com/1.7/index.php) focused on helping the merchants be more efficient in their daily tasks, user tests have played a key role in validating our product choices and refining the UX of PrestaShop back-office (merchants' administration panel).


We’re also convinced that everyone should be involved in user testing: not only designers or product managers but also developers, QA or members of other teams. Like Jeff Gothelf explains in [Lean UX](http://www.jeffgothelf.com/lean-ux-book/), it’s an opportunity for everyone to see where your efforts are paying (or not) and that’s an excellent source of motivation. What we’ve seen is that this good practice also raised a collaboration challenge that led us to the creation of Lean Feedback (more on this later).


## Iterative Design

When working on a new user journey, we organize a test session that consists in testing a part of the product with 5 individual testers. What we’ve experienced is that we don’t actually need 10 people to identify an issue. With 5 tests, we can already see what the recurring problems are, which corroborates [Nielsen’s graph](https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/).

![Nielsen's graph](/assets/images/2016/11/nielsens-graph.png)

We usually invite the testers to come to our office, and install them in front of an interface in order to see how they complete a given mission. While we could argue that having a user come to our office creates a bias, we’ve also seen it’s a good way to create a lasting relationship. To limit this bias, we carefully set the level of expectations right from the beginning.
The tester is not alone in the room: two members of PrestaShop assist her/him, and the whole session is recorded for later use.

This face-to-face discovery gives invaluable feedback on what we’ve done so far, and shows us what is left to do in order to be as close to perfection as possible. From these weekly real-life feedback, we iterate between UX designers, product managers and developers, and the next batch of testers can already see our improvements.


Now, let’s go through our recipe!


## Preparation


A good preparation is essential to make the most out of the user tests. Here are the key 6 steps:


### Set your learning goals

Testing just for the sake of testing is not enough, at best the tester would give you a Christmas feature list. Each time we prepare a new user test session, the product manager and UX designer meet to define the learning goals, i.e. assumptions that need to be be verified or might be proven wrong. For instance, when we redesigned the page dedicated to product creation, one assumption we had to test was that every essential information was easily accessible in the first tab.


![Product page test](/assets/images/2016/11/product-page-test.png)

<div style="color:grey;font-size:14px;text-align:center;">The test should prove that a simple product can be created using only basic settings. Our tests showed us that the product’s reference number was lacking here.</div>


### Define your target population

A test result is reliable only if it has been performed with the right kind of users. In our case, many different profiles may interact with the back office (merchant’s administration panel) of PrestaShop: managers, interns, accountants, fulfillment operators… so we make sure to target the right persona. If you don’t follow this rule and ask a tester to play a role, you’ll only get hypothetical answers to hypothetical problems.

For instance, at first we tested the creation of new products (above screenshot) with e-commerce managers. We then realized that it’s mostly the job of interns and then refined our screening in later iterations.


### Prepare a medium
The medium might be a clickable prototype that looks real (we use Sketch+Invision) or a development version. You should make sure to use the same version during the 5 tests. It might be tempting to fix a seemingly small issue between two tests but that leads to inconsistent results.


### Source and invite testers
One of the challenges being an Open Source on-premise software is that we don’t have a list of all of our users, unlike full-SaaS products. So we take advantage of e-commerce events like trade show or Meetups to collect emails of people interested in participating. Screening the testers over the phone and setting up the appointments is the most time-consuming part of our preparation.


![Managing interviews](/assets/images/2016/11/managing-interviews.png)
<div style="color:grey;font-size:14px;text-align:center;">An example of the kind of spreadsheet we use to manage face-to-face or remote interviews. We’ve kept it simple!</div>


### Write a script
Before the test, the product manager or UX designer writes a script that will serve as a roadmap and that can be shared with all the PrestaShop members who will lead the tests. It is a way to have consistent and comparable results. This script consists in:

* A reminder of the learning goals.
* A check-list of the set-up elements that should be available for the test.
* A “mission”: the job the tester has to complete. It generally implies achieving smaller tasks related to the learning goals.
* A few demographic questions to ask at the end.


### Choose examiners roles

Two members of PrestaShop assist the tester during the interview and each one has a role:

* A “**guide**”, who leads the test and makes sure it sticks to the script. It is recommended to choose a person who’s been involved in the writing of the script or has a good knowledge of the new product to test.
* A “**scribe**”, who sees, hears and writes down everything silently during the test. It can be any team member, as long as she/he is volunteering and motivated.

Therefore, the examiners are not always the same UX designer + product manager duo. We try to have 5 different examiner duos so that up to 10 different PrestaShop members have the opportunity to see a user test the product.


### Bonus: Set up a recording device
Sometimes it can be useful to [record the test](https://hackernoon.com/how-to-build-your-own-diy-user-testing-setup-for-just-129-9ead745a6a74#.s2fu80kkj). You may watch it again if you’ve forgotten something that slipped through the notes. We also used these videos internally to share some feedbacks with stakeholders or the developer team during sprint meetings. If you choose to record the test, don’t forget to ask permission and ask the user to sign an agreement.




## Test process


Like we explained earlier, there’s little mystery here. There are [really good books](http://build.prestashop.com/news/user-tests-are-not-enough/#Bonus) that suggest efficient scripts of test processes and our own method is mainly a summary of lots of advice. The test itself generally last 30 minutes, which can be split as follow:


### Welcome and brief (5’)

Start by thanking the user for taking the time to talk with you and break the ice with small chit-chat.
Reassure the interviewee about the test. For some people, it can feel like an exam! So dispel any stress and set the right level of expectation by explaining that:

* The tester is not here to be judged, but instead to judge the product
* There is no wrong or right answer
* If it doesn’t work that’s always the product’s fault (not the tester’s nor even your fault!)
* They might get blocked or lost and that’s perfectly normal because that’s the kind of issue you want to identify

You then can describe the context and introduce the testers with their mission.
Choose a general goal that is close to the job the users do in their routine instead of making a list of small tasks that tests every single feature.
Don’t forget to ask the testers to think aloud at any time.


### Testing (20’)
During the test, let the users progress towards their mission without indications. If there are feature they didn’t test spontaneously, you can still go back to it at the end.
Be aware that in the tester’s mind, everything’s new. So give them time to observe and analyze your product. Let them get lost and stop them only if you feel you’re deviating too much from the script.
The less you speak, the better. You’re not here to pitch your product or to convince the tester.


### Debrief (5’ or more)
Once the mission is completed (or not!), you may take time to ask open questions about the overall experience or about the testers’ routine. Generally, they feel more confident telling you about their life at this point.
You can then thank them again and give them a compensation. Many companies offer a gift card, at PrestaShop we chose to offer a tote bag full of goodies.


### Just after the test
Take time to put your notes in a shared document (like Google Sheets) and make it clean. It might seem a tedious job but you get many advantages from this task: now your notes can easily be shared, it can’t be lost and it’s easy to search anything in it. Bonus thing: when making it clean, you’ll even remember a few things you didn’t have the time to write down.


![Gathering feedback](/assets/images/2016/11/feedback.png)
<div style="color:grey;font-size:14px;text-align:center;">An example of spreadsheet we use to put our notes - in French, so allow us to explain it ;). Each line represents an individual task, which is part a global mission. We fill in three columns: if the feature was tested or not, how the user completed the task (easy/with difficulties/failed), and additional comments giving context.</div>




## Lean Feedback


It’s a good thing to get feedback from your users, but it’s even better to do something with it! You can’t afford to let your feedbacks rot inside an excel sheet and be forgotten in a few weeks. And at this point you probably ask yourself:
*“How do we make the most of these feedbacks?”*
*“How can we prioritize what to do next?”*


At PrestaShop, we try to bring everyone together around our users’ needs. It might seem obvious but in reality it’s not always easy to raise awareness on UX topics among the technical or marketing teams. That’s why we involve everyone in the test process either as guide or scribe. However, involving so many team members during the tests (up to 10) comes with an additional challenge:
*“How do we centralize and summarize all these feedbacks when many different team members have led the tests?”*

There is a significant quantity of data, collected as notes or videos, and for us it seemed a too tedious task for one single person (designer or product manager) to absorb it and summarize it. In addition to this problem, some important clues might also get lost between the lines.

To solve this challenge, we thus have come up with the idea of a workshop that would allow everyone to share their feedbacks and prioritize the tasks to do afterwards. We call it Lean Feedback. Once all 5 tests are finished, we gather all examiners duos during 40’ for a workshop consisting in two steps.


### 1. Sort the feedbacks (30’)
In the first 5’, each examiner duo sorts their notes into 4 categories. For each feedback they write down a post-it note.

The 4 categories are:

* **UX problems**
Any issue related to the user’s experience that might have mislead or confused her/him and prevented her/him from completing a task partially or totally. It also includes UI  and wording issues.

* **Bugs**
Any technical bug, when the product doesn’t work like it’s supposed to work.

* **Feature requests**
When the user suggests a feature to fulfill a job. In that case, the “guide” examiner should have followed up with questions to make sure there is a real problem behind this feature request.

* **“Aha” moments**
The things the user particularly enjoyed. It’s the kind of moment when the tester has a “click” in her/his head and suddenly understands your product’s added value. It’s important to identify these moments to preserve it and put it as early as you can in the global experience.


Then each duo comes in turn to a whiteboard or a craft paper where the 4 categories are mapped and sticks the feedbacks in the corresponding category. During 5’, the examiners duo has the opportunity to describe how the issue (or “aha” moment) occurred and what the tester’s background is. Each time another duo recognizes a feedback they’ve seen in their test, they can upvote (stick a +1 post-it note) and explain how their feedback is similar.


By the end of this first step, the board may look like this:



![Sorting the feedback](/assets/images/2016/11/feedback-priorization.png)

Thanks to this exercise, it has become easy to see what the most frequent feedback are and in the process we’ve created a shared understanding of our user’s issues among all team members.


### 2. Prioritize (10’)
Now that we’ve identified the main issues, it’s time for the product lead (either product manager or UX designer) to choose what to do next.

The product lead can move the post-it notes created in the previous step in a simplified backlog with 2 columns:

* To Do
Issues that require an immediate action for the next iteration. For instance, technical bugs, UX elements to iterate on, features to add, or even “aha” moments to bring early in the process.

* To Check
Issues that did not exactly make unanimity between the examiners. Here the product lead puts feedbacks that should be further investigated before taking action.

A good rule of thumb is to put the most frequent feedback in “To Do” and the less frequent ones in “To Check”, but it’s the product lead’s role to take other inputs (business requirements, marketing…) into account and estimate the importance of a given feedback. When the product lead chooses to put a single feedback in “To Do” or a recurrent feedback in “To Check”, the other team members have the opportunity to challenge her/his decision and the product lead may explain the reasons.


At the end of this step, the backlog looks like this:

![Prioritization](/assets/images/2016/11/backlog.png)

Be aware that you don’t have to move every post-it note from the previous step in the backlog, the idea here is to focus on the essential issues.


Thanks to this step, there is a clear list of issues to work on in the next iteration, which can either feed the dev backlog or design backlog. And everyone understands why we tackle these specific issues.

For the next test session, you also know what to look out for and how you can change the script to check uncertain issues.


### There’s only one rule

Never talk about solutions during this workshop!

![Don't talk about solutions](/assets/images/2016/11/dont-talk-about-it.gif)

The purpose of Lean Feedback is to identify and prioritize **problems**. Searching for solutions comes afterwards and should involve a smaller dedicated team. If you allow people to talk directly about solutions, you’ll spend 3 hours of inefficient discussion.


## The lessons we learned


### Benefits

We have seen numerous positive impacts of implementing user testing at PrestaShop and setting up Lean Feedback, namely:

* Save a lot of time. In less than 1 hour, you’ve summarized and prioritized the issues and created consensus among the team.
* A great motivation among the teams (product guys, developers and QA) and a stronger user-centric culture
* The end of conflicts on why we choose to deal with some specific issues
* Dozens of key-learnings on what we got wrong or right for the users
* We even identified and built an essential feature
* It helped us have a clearer product vision and fed our roadmap


### Traps we’ve felt into

![It's a trap](/assets/images/2016/11/trap.gif)

Of course, we’ve also done many things wrong and learned a lot from our failures. Here’s our list:

* Never test two different versions of an interface during a session. When we didn’t resist the temptation to do a few “quick fixes” between two tests, we actually ended up with new unexpected bugs and inconsistent results.
* Don’t wait too long to debrief the test session with Lean Feedback. 1 or 2 days is ideal after the tests, but after 1 week you’ll have forgotten too many things.
* Screen carefully the testers to avoid “consultant-testers”. These persons try to be nice by explaining what they would do if they were you (as a product manager or UX designer). It’s not their job and this kind of feedback is useless. If you can, gently refocus them on their mission. Otherwise just end the test.
* Too many or too few testers. We tried test user sessions with only 3 testers or 8 testers. In the first case it was too few to draw clear conclusions and in the second case the Lean Feedback workshop was too long and many people lost focus. Our magic number is 5 testers.
* Don’t deviate from the test script. Sometimes you’ll hear something very interesting from a tester but not exactly related to the topic you’re testing. Just write it down and wait till the end of the test to follow up with questions. Every time we took a break inside the script, we didn’t have time to finish the test.
* Never try to justify your choices. When you’re doing so, you’re basically explaining it’s the tester’s fault if she/he did not understand something. As a consequence, she/he will be too afraid to speak freely until the end of the test. If you hear an irritating critique about a specific item, resist the urge to explain why you designed it this way. Instead, follow up with a question like “I’m aware I can improve this point. What are your needs about this?”


### It’s never finished


The road towards perfection never ends! There are still a few things we’ll be working on to improve our user test process.


#### Remote and international testing
It’s great to meet testers in face-to-face interviews in our office. But it also implies a fair amount of logistics. In the future we’ll try to mix more remote-testing in our test sessions.

Another challenge we also want to tackle is how to take advantage of our international community. With more than [70 PrestaShop ambassadors](https://ambassadors.prestashop.com/) worldwide, we believe we could outsource some tests to identify even more issues and opportunities.


#### Internal video database
Finding an easy way to record the tests was not an easy task. After trying several recording software we’ve settled with Screencast-O-Matic. We’ve also ended up with a lot of videos dispatched on many computers. One of our projects today is to create a private YouTube channel where the team can easily access the feedbacks from our users.


## One final word


We neither pretend to have found the ultimate recipe for user testing, nor to have invented it. We merely absorbed and digested many good practices found elsewhere and tried to summarize it into our own process. What worked for our organization’s size and product might not work “as is” for yours, but we hope it will help you get started with user tests or maybe serve as an inspiration for improvements.

When we presented Lean Feedback for the first time at the [FLUPA UX days](http://uxday.flupa.eu/) (a French UX conference) in June 2016, we were thrilled to see how the audience applied and adapted the workshop in their respective organizations. So let us know what you think of it and how it worked for you!


## Bonus


If you want to go further, we recommend our favorite books:

* [Lean UX](http://leanuxbook.com/), Jeff Gothelf with Josh Seiden
* Running Lean, Ash Maurya
* [The Mom Test](http://momtestbook.com/), Rob Fitzpatrick
* Inspired, Marty Cagan
* [Sprint](http://www.thesprintbook.com/), Jake Knapp
* Value Proposition Design, Alex Osterwalder

And this [excellent video from Arthur Bodolec](https://www.youtube.com/watch?v=5azTk_QY9kY).

If you want to reach out, feel free to connect with us at [@guillaumebruere](https://twitter.com/guillaumebruere) and [@Leamendesign](https://twitter.com/leamendesign) or tweet this article with the #LeanFeedback tag :)

