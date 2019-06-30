---
layout: post
title:  "Better Developer eXperience for everyone"
subtitle: "Introducing the Developer Tools module"
date:   2019-07-03 11:10:00
authors: [ mandrieu ]
icon: icon-blaster
tags:
 - 1.7
 - DX
---

Working with PrestaShop should be a delightful experience no matter who you are: e-merchants, designers or developers.

Today, I want to focus on what we have done, what we do and what we are going to do to make the Developer eXperience great again with PrestaShop 1.7.

# Do you (really) know PrestaShop 1.7 ?

Most of the you are aware that we have decided to use the Symfony framework for the new Back Office
and that we are migrating gradually: Symfony 3.4, Bootstrap 4, and Webpack were introduced.

While we all agree these tools are awesome, we also all agree this make the mastering of PrestaShop a little bit difficult.

Symfony is the best PHP framework for developers if you're looking for information while debugging or discovering your application.

Once the *Developer Mode* is enabled in the Back Office, you have access to the **[Web Profiler](https://symfonycasts.com/screencast/symfony/debug-toolbar-profiler)**: a complete application to help you figure out what happens with your shop.

## The (Symfony) Web Profiler

This application will collect many information about your application everytime a page is rendered.
You won't need again to "var_dump/die" for basic information like the PHP Globals or your PHP configuration:

(here a first capture)

The Web Profiler is embed with a debug toolbar, summaring the most relevant informations:

* You need to know which templates have been rendered? Take a look at the **Twig** tab.
* You need to know which databases queries have been executed? Take a look at the **Doctrine** tab.
* You need to figure out the value of something without interrupt the application ? Use ``dump()`` and take a look at the **Debug** tab;
* And so on...

## Transforming the Symfony Web Profiler into a PrestaShop Profiler!

While the previous information are already useful for every PrestaShop developer, some specific informations were missing. Most of you were sad that we have broken the (find the github issue link)previous profiler from PrestaShop 1.6.

"Bring back the Hooks profiler !" you said, and this was introduced in the Web Profiler in the version 1.7.3, then improved in 1.7.4 with a better design.

(prévoir screenshots ici)

Not only, you got informations of the called hooks like before but we have improved the overall developer experience:

* you have access to the informations passed to the hooks, and received by the modules;
* you know in which order the modules are executed;
* you have access to the list of "not executed" hooks: you don't need to learn every hook of PrestaShop anymore ;)

We also updated the Debug Toolbar to show the logo of PrestaShop and its version.
As a Core Team, we could probably do better but not as fast as we could expect from us (2 minor releases/year).

This is why I've started to work on a Community module to bring more features to the developers.

# Introducing the Developer Tools module

The Developer Tools module main objective is to make the PrestaShop Developer eXperience great again.

## Did you see that Hook?

One of the most painful experience I had with PrestaShop was when I had to figure out what hooks of display were available on the page and where they were located "for real".

This is why I've created a "Hook Displayer":

![Back Office Hooks displayer](https://i.imgur.com/Rvk6sfg.png)

![Front Office Hooks displayer](https://i.imgur.com/cvizNCp.png)

This feature can be disabled in the Performance Page:

(prévoir capture)

> The version 1.x of this module is also compatible with PrestaShop 1.6.1.x.

## Grids, grids everywhere!

Since PrestaShop 1.7.4, we have introduced a new Grid Component used to create the listing pages for each resource of the Back Office.

While the experience is already good when we need to customize the existing grids, I wanted to increase (again) the productivity of everyone.

This is why the new major version of the module provide a **Grid Profiler**.

In this profiler, you'll retrieve every useful information about the Grids that have been rendered by the application:

* Grid common information like id, name, columns (with their information);
* Grid data with the SQL query used to retrieve this data, and the number of items;
* and... the templates for every available hooks with documentation;

![Grid dev toolbar](https://user-images.githubusercontent.com/1247388/58739700-07645280-840c-11e9-9b38-4b6082e44c0e.png)

![Grid Columns collector](https://user-images.githubusercontent.com/1247388/58739701-07645280-840c-11e9-823e-28ecb3bd7e8e.png)

![Grid Hooks Templating](https://user-images.githubusercontent.com/1247388/58739703-07fce900-840c-11e9-8ba0-9215bf241a7e.png)

## Who am I?

It's not easy to provide the right support when you can't reproduce the bug described by the customer
and when he refuses to provide its credentials.

Thanks to the Symfony framework, you have already access to an [impersonation system](https://symfony.com/doc/3.4/security/impersonating_user.html). I've just made it easier to use in the Debug Toolbar:

![User selector](https://user-images.githubusercontent.com/1247388/58739704-07fce900-840c-11e9-8787-a5844c2a4652.png)

# What's next?

Creating these features was not difficult or time consuming for me.
What I need to improve it is **MORE FEEDBACKS** and more developers that use it!

If you can help with new features, you're also warmly welcome :)