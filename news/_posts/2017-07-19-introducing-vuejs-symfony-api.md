---
layout: post
title:  "How we're introducing Vue JS & a Symfony API"
subtitle: "Great oaks from little acorns grow"
date:   2017-07-19 09:12:11
authors: [ maximebiloe ]
icon: icon-blaster
tags:
 - 1.7
 - 1.7.2.x
 - development
---

If you follow the [Core Weekly](http://build.prestashop.com/tag/core-weekly/) or our recent GitHub activity, you may have seen that we introduced a new front-end technology in the PrestaShop back office: [Vue.js](https://vuejs.org). So, let’s talk a little about it to see what’s coming up.


## Vue.JS késako?

![Vue.js logo](/assets/images/2017/07/vuejs-logo.png)

As it describes itself, "Vue is a progressive framework for building user interfaces." It is component-driven, meaning that you have one file per component (=html element). You can create your own components, as many as you want.

It can be compared to some other JavaScript frameworks such as Angular or React but we chose to use Vue.JS because we think it’s much simpler and it was fully meeting our needs.


## Why are we using it?

The main idea was to improve the User Experience in an iterative way. Vue.js allows the interface to work as a Single Page Application, which removes the need to reload the page at each user action.

We also wanted to think in "Single File Components", meaning that you have one HTML component per file (standard or custom). This way, you’ll be able to re-use them everywhere in your modules’ interface, and have the same UI easily.

Also, when we revamped the Product Creation page in PrestaShop 1.7.0.0, we were confronted with some issues when synchronizing fields. For example, when you modify the base price or the tax rate of your product, this modification needs to be propagated to all the price fields. Doing it with vanilla JavaScript and jQuery was not easy to make and it’s not really adapted. As everything needs to be in-sync, it may cause an infinite loop propagation of events. 

So, we needed to better manage the state of data: we needed to use a finite state machine. Using a finite state machine will prevent the error described above and help us write more maintainable code. This way, we are able to easily synchronize fields. 

There are several state management systems like Redux or Flux, but we chose to use Vue.js and its state management library, [Vuex](https://github.com/vuejs/vuex). You can [read more about state management](https://vuejs.org/v2/guide/state-management.html) if you with to.

For now, we are taking advantage of this new way of building pages by introducing the brand new Stock feature, and reworking the Translation page. The Product Creation page may be reworked at a later time.


## How have we implemented it?

### Finite State Machine

Complementary to Vue.js, we are using Vuex for managing the state of data. It provides a centralized store for the PrestaShop components, and makes sure that the state can only be mutated in a predictable way.

It can be illustrated by the following schema (from the [Vuex GitHub repository](https://github.com/vuejs/vuex))

![Finite state](/assets/images/2017/07/vuejs-finitestate.png)


### Architecture

We decided to work a little bit differently from what we are used to do, but with something pretty standard today. We’ve written an API in Symfony, so that it could be used by the front part written in Vue.js.

We didn’t do anything really exotic, but something pretty common: just make a standard request and it returns a JSON response. For example, to get the suppliers list just call `/api/suppliers` or to edit a translation call `/translation/edit` with POST parameters

Contrary to the webservices, the API is private; meaning that you have to be authenticated in to the back office to be able to call it. In the future, we may implement something similar with a public token to authenticate the call and let the ERP interact with it. 


### Components

To build the templates for these new pages, we work with Vue.js components. It means that we extend standard HTML elements to encapsulate reusable code. For example, we’ve created an element named "PSButton" that you can use simply by using the "<PSButton>" tag.

Here is the Vue code for the `<PSButton>` component:

![PSButton](/assets/images/2017/07/vuejs-psbutton.png)

And here is how we use it:

![PSButton use](/assets/images/2017/07/vuejs-psbutton-use.png)

And how it looks like:

![Reset button](/assets/images/2017/07/vuejs-reset.png)

You can pass parameters, such as the level you want (primary, secondary). That way, when we’ll update the layout of the component, it will update everywhere it is used and it will improve the User Experience and the User Interface consistency.


### Current status

All these changes will be introduced for the next minor version to come: 1.7.2.0.<br/>
As you may know, this version will introduce a new [Stock Management](http://build.prestashop.com/news/stock-management-in-prestashop-1-7-part-3/) system, so we took advantage of this opportunity to use the Vue.js & Symfony API duo.<br/>

We wanted to start by making at least two pages use Vue.js, to really think in a component way as much as we could, and to mutualize as much code as possible. Since we noticed some performance issues on the Translations page, we revamped this page using Vue.js as well.

If you want to take a look at what we’ve done, you can browse the files on [GitHub](https://github.com/PrestaShop/PrestaShop/tree/1.7.2.x/admin-dev/themes/new-theme/js/app).

* In the "pages" folder you’ll find the specific code for each page, arranged by page.
* In the "widgets" folder, you will find all the shared components that we created so far.

The structure may still evolve while we do some refactoring, so we don’t encourage you the use of the components for a third-party module **yet**.

![Vue.js structure](/assets/images/2017/07/vuejs-arbo.png)

We are also working on writing the tests for this part. It’s not complete yet, but we aim to improve them for the finale release on PrestaShop 1.7.2.0.


## Lessons learned

It’s not always easy to implement a new technology or a new way of doing.

In the beginning we only planned to make the new Stock page with Vue.js, but to make sure we were going on the good road, with centralized components shared between pages, we chose to also rework the Translations page. And that was the right decision to take, because it forced us to do some refactoring, and to mutualize a lot of components and files (there is still some work to do ;) ) between the pages.<br>
So, remember that when you start a work like that, you really have to take the time to think about the architecture and how you want to build your app.

Regarding the Symfony API, it was easier to approach as there are a lot of resources on the Internet on the API-building best practices. We followed [this article](http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api) as much as we could. Making an API for two different pages helped to standardize the responses. Indeed, a good API must always return the same response structure whatever the source of the query.


## What’s next?

In the next releases of PrestaShop, we would like to create more components, use Vue.js on more pages, write more tests… We also aim to introduce the finite state machine on the Product Creation page to improve the field synchronization and overcome some bugs.

In parallel, we are working on a new version of our UI Kit (more information coming soon) and we would like to provide the Vue.js components in it as the HTML snippets. It may take some time to reach this point, but that’s what we aim to do in the end :wink:
