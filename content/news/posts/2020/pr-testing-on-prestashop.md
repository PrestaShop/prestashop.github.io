---
layout: post
aliases: ["/news/pr-testing-on-prestashop"]
title:  "Testing Pull Requests on PrestaShop"
subtitle: "How does the QA team handle the testing of Pull Requests?"
date:   2020-12-15 18:00:00
authors: [ RobinFischer ]
icon: icon-bug
tags: [tests, community, contribute]
---

The PrestaShop company created a Quality Assurance team 4 years ago, in 2016, to improve the quality of the open source project – but also of its products and services. Over the last year, the team has grown quickly, taking quality to the next level! Its field of action has been widening (tests of new services like [Prestashop Checkout](https://www.prestashop.com/en/prestashop-checkout), specifications reviews, etc.) but the core of the manual testers' activity remains the same: verifying Pull Requests (“PRs”) on GitHub, and testing every release.


## I. Some questions you may have in mind

### Why test every Pull Request?

The first question that might come to your mind: why is there a QA verification on each Pull Request? Why not test the release build only?

- The earlier a bug is detected in the process, the easier it is to find the source of the problem and fix it
- Testing each Pull Request allows the QA analysts to perform more detailed tests, improving the overall software quality
- There can be several months between the moment a PR is merged and the time the build is first tested, enough for the author of the PR to have “forgotten” what they did exactly.

![The cost of fixing a bug rises over time](/assets/images/2020/12/cost_bug_time.jpg)

### How do you choose which Pull Request should be tested first?

This is a legitimate question that pops up regularly. It might be frustrating for a contributor to see its Pull Request waiting for weeks on GitHub with the “Waiting for QA” label, while other PRs are validated and merged the same day they are created.

The QA team uses the following criteria to sort Pull Requests (in order of importance):

1. **The target branch on which the Pull Request is based**: the oldest [supported branch](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/supported-branches/) has the highest priority.
We will test `1.7.6.x` PRs before `1.7.7.x` PRs, and `1.7.7.x` PRs before `develop` PRs. Pull Requests submitted to module repositories usually have the lowest priority.
2. **The priority of the issue** the Pull Request is linked to: A PR solving a “must-have” issue should be tested before a “nice-to-have”, and before an issue without any priority (remember that the priority is displayed with labels in Github).
3. Pull Requests should be tested by **submission date**, from oldest to most recent.

The above rules is the theoretical policy to rank Pull Requests.

However, it happens that the QA team has to bypass this policy. For example, in addition to Pull Requests submitted to the Core, we also test Pull Requests submitted to PrestaShop's open source modules. If the number of Module Pull Requests waiting for QA is too high, we might test some of the oldest Modules Pull Requests in priority. We monitor the Pull Request waiting queues and act accordingly.

And sometimes, the maintainers might ask us to test a PR that is required to unblock other tasks.

### How long does it take to test a Pull Request?

It highly depends on the complexity of the Pull Request! A small fix, related to a straightforward issue and a detailed “How to Test” description can take as little as fifteen minutes to test, while a large migration PR can require several days.

If a PR is really complex, or if the feature being implemented is complex, there might be a second or even a third test by another QA specialist to validate it fully.

### Why does my Pull Request have both the “Waiting for author” and “Waiting for QA” labels?

If the QA analyst in charge asks a question on your Pull Request (for example requiring more details on “How to test”), they will add the “Waiting for author” label, but without removing the “Waiting for QA” one. The latter is kept in order to be able to easily search for the PRs waiting for a response from its author.

So if you see the "Waiting for author" label, it means more information is needed – check the last comments on the PR! The QA team need your help to fully comprehend the PR.

## II. Test of a bug fix Pull Request

Pull Requests can be classified into 3 main categories (with a few special cases):

- Bug fix
- Improvement
- Migration

I will first focus on the bug fix Pull Request since it’s the most common type, then detail the differences between a bug fix, an improvement, and a migration PR.

### Requirements

Several things are required in order to have a Pull Request being tested on our Github repository.

First of all, the [Pull Request template](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/pull-requests/) must be followed, and all questions should be answered:

- A PR should be linked to an issue, so it can be [reproduced and qualified](https://build.prestashop.com/news/how-bug-reports-are-handled/) before being fixed. This helps the team to answer several questions: is this really a bug? What is its [severity](https://build.prestashop.com/news/severity-classification/)? What is the expected behavior?
Of course, you’re welcome to fix issues submitted by another contributor (as long as the issue is linked to the PR): this is the magic of open source!
- The “How to test” field must be filled. It must contain the steps needed to verify the bug is indeed fixed. If possible, it should also contain some information about the possible side-effects of the PR, to help check if there are regressions. _Without a clear “how to test”, it’s impossible for us to know what to check on the PR._
The most important thing about this part is that it must be a _functional_ “How to test”:  PRs are tested by functional QA analysts, not by developers. Although QA analysts have a technical background, we do not work in the code everyday. If your PR requires making technical changes in order to be tested (use a certain hook in the code for example), either attach a test module allowing us to test it, or your PR will need to be tested by the maintainers.

*An example of a clear "How to Test" in a Pull Request:*
![Example of a clear "How to Test" in a PR](/assets/images/2020/12/clear_howtotest.png)

**Other important things:**

- The Pull Request needs to have been reviewed and approved by at least two maintainers (for a PR on the Core, only one approval for a PR on a module)
- All [automated checks](https://build.prestashop.com/news/the-review-process/#automatic-tasks-when-you-open-a-pull-request) must have passed
- The PR targets the right branch

If there is some information missing, the author, the maintainers or the product team is pinged and the QA analyst waits for this information to start testing the PR.

### Reproduce the bug

The first step of Pull Request testing is reproducing the original bug (on the branch, without the PR): this allows the QA analyst to make sure that the “How to test” is clear and also helps to see what are the possible regressions introduced by the PR.

This is why a complete GitHub issue, related to the PR, is necessary: the more information it contains, the easier it is to reproduce and test it.

### Check if the Pull Request fixes the bug in the issue

This is the most logical part of Pull Request Testing: after reproducing the bug on the branch, the QA analyst checks out the PR locally and verifies if the bug is indeed fixed, following the instructions in “How to test”.

If the feature is complex enough, or if the “How to test” is not exhaustive, the QA analyst will also test some edge cases in order to make sure that the PR fixes the issue completely.

### Regression testing

This is the most important part of our work: usually, the nominal test is OK, and has already been tested by the author.

**But the PR might have introduced some regressions somewhere else in PrestaShop.** This is unfortunately a common issue in software development: modifying a part of the code might introduce side-effects to other parts that are related, directly or not, to the modified part. **This is where our functional knowledge of the solution is really important.**

With the PR, the issue, and the information we can get by looking at the code (for the QA analysts who have a technical background and know how to “read” code), we must be able to identify possible side effects of the PR, and test them all – or at least, the most important of them (since we cannot spend hours and hours on each PR).

### What happens if the QA analyst finds bugs?

If we find a bug during the test phase, we will try to provide as much information as possible to the author so that they can reproduce it and fix it:

- Reproduction steps
- Screenshots or screen records

The QA analyst will post a comment on the Pull Request with the above information, and change the PR labels. If we have a question on the PR (a behavior or a display we’re not sure of, for example) we may ping the maintainers, the product team, or the UX designers.

![A comment about a bug on a PR](/assets/images/2020/12/qa_return_pr.png)

### And if everything is OK?

If we don't find any issue during our test, then we change the label to “QA Approved”. This allows the maintainers to finally merge the Pull Request in the branch. The change will be available on PrestaShop in the next build of the branch!

![QA approved!](/assets/images/2020/12/qa_approved.png)

Note that everything the QA specialists test is tracked on an internal tool (we use [TestRail](https://www.gurock.com/testrail/)): it allows us, for example, to resume a test started by another member of the QA team, or to have the detail of what was checked on a specific PR.

## III. Improvement Pull Request

Testing an improvement Pull Request is quite similar to the bug fix Pull Request.

### Requirements

The requirements are almost the same for a bug fix. The main difference is that the new feature should be adequately [specified in writing](https://github.com/PrestaShop/prestashop-specs/) and greenlighted by the product team or the maintainers: not all improvements are necessarily accepted, so it is important to discuss them with the team in an issue before submitting a Pull Request.

The “How to test” field should describe the new behavior, nominal test cases, possible errors, and how they should be handled, etc. Unless formal acceptance tests have been included in the specifications.
Written specifications should be linked in the PR as well.

If some information is missing, the QA analyst will ping the author, the product team and/or the maintainers and wait for this information to be completed before starting to work on the PR.

### Check that the improvement works accordingly to the issue and specifications

This step is simple: using the information in the issue, the "How to test" instructions, and the specification (if there is one), then the QA analyst proceeds to check out the Pull Request and try out each new behavior to make sure it works as expected and described.

### Regression testing

For improvements, the regression test part is even more important than for bug fixes: the QA analyst must make sure that the original features the Pull Request improves are still working as expected.

To do so, we generally compare two shops (one on the branch with the PR and one without), then perform the same actions on each install, and verify that the result is strictly identical. We can also carry out parts of the test campaign usually performed to verify build releases.

### What happens next?

Like with bug fixes, if the QA analyst finds any bug, they will comment on the Pull Request with all useful tips to help the author fix the bug.
If the QA analyst notices an unspecified behavior (if the expected behavior is unclear, or for example, if it could be argued that an error should be displayed in a given scenario) they will ping the product team and/or the maintainers to discuss this particular issue.

If everything is fine, the QA analyst changes the label to “QA Approved” and the PR is merged by a maintainer, making it available on PrestaShop in the next build of the branch!

Same as for bug fixes, these tests are tracked on an internal tool. The QA analyst might also update some of the test campaigns to add or modify test cases related to this improvement.

## IV. Migration Pull Requests

Migration Pull Requests are quite different to other ones: the purpose of these PRs is to move a page from the Legacy framework to the Symfony framework, while keeping the same features (and optionally adding some minor improvements).

This makes the QA's work on these Pull Requests quite longer and harder compared to other PRs.

### Requirements

The main difference here is that the issue linked to the Pull Request might be just an [EPIC](https://github.com/PrestaShop/PrestaShop/labels/Epic) listing all the items that should be migrated.

For the “How to Test”, it’s sometimes only “Everything in this page should work as in previous page”. If there is a specification linked to this page, it should be added to the “How to Test”, to help the QA analyst make sure to check everything.

### Test of a Migration Pull Request

The test of a Migration Pull Request is quite long: the QA analyst must compare the Legacy page and Migrated page and verify that there are no errors nor missing components (information, links, buttons, etc.), using every configuration they can think of (multi-currencies, multi-languages, multi-store, using different parameters...).

If there is a specification, the QA analyst will follow every point and check that it’s working fine (an example of a migration specification: ["Product listing" BO page](https://github.com/PrestaShop/prestashop-specs/blob/master/back-office/catalog/products/catalog-products-listing.md)). If there is not, they must find every detail by themselves.

During this run the QA analyst might use the test campaign created for build releases, and also update these same tests if necessary.
That’s why a test on a Migration PR takes longer than a “classic” one (sometimes several days).

## Conclusion

Quality Assurance work on Pull Requests can be really time-consuming, but it is critical to ensure the quality of PrestaShop software keeps on increasing.

Make sure that the Pull Requests and issues you submit are thoroughly described, it will help to process them quickly and seamlessly!

Thanks for your contributions :smile:
