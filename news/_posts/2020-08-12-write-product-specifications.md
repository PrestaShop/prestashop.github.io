---
layout: post
title:  "Help us write product specifications"
subtitle: "Contribute without typing a single code line"
date:  2020-08-12 09:10:11
authors: [LouiseBonnard]
icon: icon-github-alt
image: /assets/images/2020/08/prestashop-specs-product-page.png
tags: [community, contribution, github, contribute]
---

Contribution is not only about code. As an open source project, we make a point to encourage everyone to participate in the construction of PrestaShop: you can [translate the software](https://crowdin.com/project/prestashop-official) in your native language, [suggest a new feature](https://github.com/PrestaShop/PrestaShop/issues/new/choose), [sign up to the User Club](https://www.prestashop.com/en/club) and share your experience with the product teams, [become an ambassador](http://ambassadors.prestashop.com)... and also write specifications!

Hosted on a [dedicated GitHub repository](https://github.com/PrestaShop/prestashop-specs), product specifications are meant to formally describe how features should work on a given page. Different from the technical specifications (that aim to describe the internal implementation of the features), product specifications express the functional scope of PrestaShop’s pages.

For instance, product specifications can describe what action is performed when this button is clicked, what characters are considered invalid for this field, what notification pops up in this case, etc. See the example below, related to the product page.

![PrestaShop Product Page Specifications](/assets/images/2020/08/prestashop-specs-product-page.png)


:point_right: Read the product page specifications IRL [here](https://github.com/PrestaShop/prestashop-specs/blob/master/back-office/catalog/products/catalog-products-add-edit.md)

So if you, as a passionate PrestaShop user, would like to share your expertise on some features that do not have any secrets for you anymore, let’s join forces and write the software’s functional specifications together! It is no code, it is just precise writing to describe how features are expected to behave.


## Directory structure

Several directories are to be found in the repository, among which the following four main folders:

- the **back office** directory, where any Back Office (BO) page should be specified, e.g. the product page ;
- the **broader topics** directory, where widely impacted features should be specified, e.g. the SEO strategy throughout the software ;
- the **front office** directory, where any Front Office (FO) page should be specified, e.g. the product images ;
- and the **modules** directory, where all built-in (“native”) modules should be specified, e.g. the Faceted Search module.

One page of the back office equals one page of specifications. Being exhaustive is key: any feature that does not work as described in the specifications is considered as a bug! Writing down specifications is essential to making sure features work as expected on the latest available stable version of PrestaShop.

Right now, many features have not been formally specified but, better late than never, we make a point to specify any new feature or change before the system is modified. It helps get relevant developments but also limits the software functional debt by keeping a history of the decisions made so far.


## Workflow

As written just above, specifications are key to development as they describe the expected system behavior for any given feature. So when developers work on the PrestaShop code, in fact, they translate those functional specifications to code. Each development made must be linked to the corresponding specification.

You can either improve existing specifications, add missing specifications, or even specify new features.


### Improve existing specifications

Did you notice missing elements when reading a specification page? Well, I guess it is time to complete it! It might be minor fixes such as fixing typos, improving an unclear syntax, adding screenshots, etc. If it concerns any missing behavior, you should read the next paragraph. 😉


### Add missing specifications

Many existing features have not been formally specified yet so there is still a lot to do. Adding missing specifications about the current behavior will help to provide the PrestaShop ecosystem with a precise view of the software’s functional scope.


### Specify new features

When a new feature is suggested or planned, it is essential to define its scope and therefore specify its use since it will guide its developments.


### How-to

Now let us focus on the practical side! For starters, you have two choices: either the page already exists in the specifications repository and you just have to edit it to complete it, or it does not exist yet and then you will have to create it to suggest your specifications.

Whether it is an edition or addition, a pull request (PR) will have to be created – just like for any development! You will learn more about the detailed steps in the `CONTRIBUTING.md` file [here](https://github.com/PrestaShop/prestashop-specs/blob/master/CONTRIBUTING.md#process-to-follow) and the suggested template to use in the next section of this post.

![PrestaShop Product Specifications Management](/assets/images/2020/08/prestashop-specs-management.jpg)

Once your specifications have been submitted, the pull request is reviewed by the core team and validated by the product team. If you specify a new feature, specifications will have to be validated by the core team (product, dev, and QA if need be) and merged before starting the development. If any behavior is redefined during the development phase, the specifications must be updated accordingly following the same workflow: PR > validation > merge > development.


## Anatomy of the product specifications

Writing product specifications requires using Git and GitHub, it works pretty much the same as a code contribution. You can read the detailed steps in the `CONTRIBUTING.md` file right [here](https://github.com/PrestaShop/prestashop-specs/blob/master/CONTRIBUTING.md). You can refer to the template below to structure your contribution, and obviously you are greatly encouraged to have a look at the already written product specifications. 😉

![PrestaShop Product Specifications Template](/assets/images/2020/08/prestashop-specs-template.jpg)

And that’s it! Product specifications are a nice way to contribute to PrestaShop and writing it is accessible to everyone who has a deep knowledge of PrestaShop: developers who need the functional scope of a feature to start working on it, merchants who use the software every day and have a deep understanding of how pages work, all kinds of contributors who want to get familiar with the PrestaShop open source project and reinforce the knowledge (and the business) around the software. 
