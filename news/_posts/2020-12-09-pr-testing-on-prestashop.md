---
layout: post
title:  "PR Testing on PrestaShop"
subtitle: ""
date:   2020-12-08 16:00:00
authors: [ RobinFischer ]
icon: icon-airplane
tags:
 - 
---

Prestashop created a Quality Assurance team 4 years ago, in order to improve the quality of the solution.
For more than a year now, the team has grown quickly, allowing it to take quality to the next level ! The field of action is widening (test of new services like [Prestashop Checkout](https://www.prestashop.com/en/prestashop-checkout), specification test and review…), but the core of the manual testers activity remains the same; testing the Pull Requests (“PR”) on Github, and testing every release.


# I. Some questions you may have in mind

### Why do you test every PR ?

First question that might come to your mind : Why is there QA on each PR ? Why not testing only during build release ?

- The earlier a bug is detected in the process, the easier it is to fix it
- Test each PR allows us to make more detailed tests, and to improve the overall quality of the PrestaShop solution
- There can be several months between the merge of a PR and the first test of the release, enough time for the author of the PR to have “forgotten” what he did exactly.

### How do you choose which PR should be tested first ?

This is a legitimate question that pops regularly. It might be frustrating for a contributor to see his PR blocked in “Waiting for QA” for weeks, while other PR are validated and merged the same day they are created.

There are some rules to sort PRs. The QA team uses the following criteria (in order of importance) :

1. The branch on which PR is based : the oldest branch has the highest priority. We will test 1.7.6.x PR before 1.7.7.x PR, and 1.7.7.x PR before Develop PR. Modules’s PR usually have the lowest priority.
2. The priority of the issue linked to the PR : A “must-have” issue should be tested before a “nice-to-have”, and before an issue without any priority (remember that the priority is displayed with a label in Github).
3. The oldest PR should be tested before the newest.

These are the theoretical rules to rank PRs. However, sometimes the context forces the QA team to bypass it... For example, we test not only the Core Pull Requests, but also the Pull Requests for PrestaShop open source modules. If the quantity of Modules Pull Requests waiting for us is too high, we might test some of the oldest Modules Pull Requests even if there are 1.7.7.x PR to test as well.
And sometimes, the PrestaShop developers Team might ask us to test a PR as it is required for other topics.

### How long does it take to test a PR ?

It highly depends on the complexity of the PR ! A small fix, with a clear issue and a clear “How to Test” can take only fifteen minutes to test, while a huge Migration PR can take several days.

If a PR is really complex, or if the feature being implemented is large, there might be a second or even a third test by another QA analyst to validate it fully.

### Why does my PR have both the “Waiting for author” and “Waiting for QA” labels  ?

If the tester in charge has a question on your PR (for example ask for a more explicit “How to test”), he will add the “Waiting for author” label, but without removing the “Waiting for QA” ones (in order to be able to check easily what are the PR waiting for a response from the author). So this means more information is needed, check the last comments on the PR !

# II. Test of bug fix PR

PR can be classified into 3 main categories (with a few special cases) :
- Bug fix
- Improvement
- Migration

I will first focus on the bug fix PR, since it’s the most common type there is, then detail the difference for improvement and migration PR.

### Requirements

Several things are required in order to have a PR being tested on our Github repository.
First of all, the PR template must be followed, and all questions should be answered:
- An issue should be linked to the PR. Each bug has to be analyzed before fixing it. This helps the team to answer several questions : Is this really a bug ? What is the severity (see [Severity Classification](https://build.prestashop.com/news/severity-classification/)) ? What behavior is expected ? On which branch should it be fixed ?
Of course, you’re welcome to fix issues submitted by another contributor (as long as the issue is linked to the PR) : This is the magic of open source !
- The “How to test” field must be filled. It must contain the steps to check the bug is indeed fixed. If possible, it should also contain some information about the possible side-effects of the PR, in order to help check if the PR does not introduce regressions. Without a clear “how to test”, it’s impossible for us to know what to check on the PR.
The most important thing about this part is that it must be a functional “How to test” :  PR are tested by functional manual testers, not technical ones. If your PR needs to make some technical changes in order to be tested (use a certain hook in the code for example): either make a test module allowing us to test it, or your PR will be tested by the dev team.

![alt text](https://github.com/PrestaShop/prestashop.github.io/assets/images/2020/12/clear_howtotest.png "Clear How to Test in a PR")

Other important things :
- The PR needs to have been reviewed by the maintainers team, and without requested changes.
- All automatic checks must have passed
- The PR is made on the good branch

If there is some information missing, the author and/or the dev team is pinged and the tester waits for this information to test the PR.

### Reproduce the bug

The first step of PR testing is reproducing the bug (on the branch, without the PR) : This allows the tester to make sure that the “How to test” is clear and also helps to see what are the possible regressions introduced by the PR. 
This is why a complete issue is necessary : the more information it contains, the easier it is to reproduce it, and to test it.

### Check if the PR fixes the bug in the issue

This is the most logical part of PR Testing : after reproducing the bug on the branch, the tester installs the PR and checks if the bug is indeed fixed, following the “How to test”.

If the feature is a bit complex, or if the “How to test” is not complete enough, the tester will also test some edge cases in order to make sure that the PR fixes the issue completely.

### Regression testing

This is the most important part of our work : Usually, the nominal test is OK, and has already been tested by the author.
But the PR might have introduced some regressions somewhere else in Prestashop. This is where our functional knowledge of the solution is really important :

With the PR, the issue, and the information we can have by looking at the code (for the testers who have a technical background and know how to “read” the code), we must identify the possible side-effects of the PR, and test them all, or at least, the most important of them (since we cannot pass hours and hours on each PR).

### What happens if we find some bugs ?

If, during the test phase, we find some bugs, we try to give as much information as possible to the dev, in order to help him reproduce the bug, and find what causes it :
- Reproduction steps
- Screenshots or screen records
Then a comment is posted on the PR with all this information, and the labels are changed. If we have a question on the PR (a behavior or a display we’re not sure of, for example) we can ping the dev, the product or the UX team as well.

![alt text](https://github.com/PrestaShop/prestashop.github.io/assets/images/2020/12/qa_return_pr.png "Return with bug on a PR")

### And if everything is OK ?

If we did not find any bug during our test, then we change the label to “QA Approved”. This allows the dev team to finally merge the PR in the branch, and the PR will be available on Prestashop in the next build of the branch !

![alt text](https://github.com/PrestaShop/prestashop.github.io/assets/images/2020/12/qa_approved.png "QA Approved !")

Note that everything we test is tracked on an internal tool : it allows us, for example, to resume a test started by another member of the QA team, or to have the detail of what we checked on a specific PR.

# III. Improvement PR

The process for testing PR that adds an improvement to the solution is quite similar to that of bug fixing PR.

### Requirements

The requirements are almost the same for a bug fix. The main difference is that the issue should be validated by our Product or Dev Team : we do not accept every improvement, so it is rather important to have it validated by PrestaShop before submitting a PR.

The “How to test” field should describe the new behavior, the nominal test cases, possible errors and how they should be handled, etc…
If there are specifications written for the improvement, these should be linked to the PR too.

All other information is the same.

If there is some information missing, the tester pings the author, the product and/or the dev team and waits for this information to test the PR.

### Check that the improvement works accordingly to the issue and specification

This step is simple : the tester takes the issue, the how to test, and, if there is one, the specification, and then tries every new behavior to make sure it works as expected and described.

### Regression testing

For improvement, the regression test part is even more important than for bug fix : the tester must make sure everything in the feature on which the improvement is added is still working fine.

To do so, he generally compares two installs, one on the branch and one with the PR, performs the same actions on each one and checks that the result is strictly identical. He can also use some parts of the test campaign usually used to test build releases

### What happens next ?

As for bug fix, if the tester finds any bug, he will comment the PR with all useful indicators to help the author to fix the bug.
If he notices a missing behavior not specified (for example, a case where, in his opinion, an error should be displayed) he will ping the Product and Dev Team to discuss this particular point.

And if everything is fine, he changes the label to “QA Approved”, the PR is merged in the branch and will be available on Prestashop in the next build of the branch !

As for bug fix, these tests are tracked on an internal tool. The tester might also update some of the test campaigns to add or modify test cases related to this improvement.

# IV. Migration PR

Migration PR are quite different to other ones : the purpose of these PR is to move from a Legacy framework to a Symfony framework, while keeping the same functionalities (and some minor improvements).

This makes the QA work on these PR quite longer and harder than on other PR.

### Requirements

The main difference here is that the issue linked to the PR might be just an Epic listing all the items that should be migrated.

For the “How to Test”, it’s sometimes only “Everything should work as in Legacy”. If there is a specification linked to this page, it should be added to the “How to Test”, to help the tester check everything. If the migrated page is “hidden”, the “How to Test” must also contain the URL to access it.

The other requirements are the same.

### Test of a Migration PR

The test of a Migration PR is quite long : The tester must compare the Legacy page and Migrated page, and verify that there are no errors or missing information, missing link, missing button... on the Migrated page, with every configuration he thinks of (multi-currencies, multi-languages, multishop, with different parameters).

If there is a specification, he will follow every point and check it’s working fine. If there is not, he must find every detail by himself.

During this run the tester might use the test campaign created for build releases, and also update these same tests if necessary.
That’s why a test on a Migration PR takes more time than a “classic” one (sometimes several days).

# Conclusion

QA's work on PR can be really time consuming, but it allows PrestaShop to maintain and even improve the quality of the solution.
You can help us by submitting Pull Requests and issues as complete as possible, it will facilitate and speed up the processing of your PR !

Thanks for your contributions :)
