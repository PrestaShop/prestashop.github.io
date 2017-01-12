---
layout: post
title:  "How to contribute to the User Guide and help translate it"
subtitle: "A quick guide to writing PrestaShop Documentation on Confluence"
date:   2017-01-12 06:09:47
author: alexeven
icon: icon-book-tag
tags: [contribute, documentation]
---

Some of you contacted us to help translate the [PrestaShop User Guide](http://doc.prestashop.com/display/PS17/User+Guide) into their language. To make things easier for anyone who wants to help write some user documentation, here is a quick guide on how to use Confluence, on which our [user documentation](http://doc.prestashop.com/) is hosted.

## Anatomy of a documentation page

These elements are important and/or recurring in the PrestaShop documentation and here's what you should know about it.

### Page title
It will define the page URL (most of the time), and is repeated each time at the beginning of the page.

### Children display
When the page is a chapter with children page, it often begins with a list of its children, as an entry point to these pages.

<img style="border: 1px solid #CCC; padding: 10px;" width="500" src="/assets/images/2017/01/Build_PrestaShop_Documentation_Title.png">

This is done using a macro (see below), so you don't have to list manually all the children pages :)


### Table of contents
When there are no children pages, but the page has a rather long content, there can be a table of contents to display the main sections.

<img style="border: 1px solid #CCC; padding: 10px;" width="500" src="/assets/images/2017/01/Build_PrestaShop_Documentation_Table.png">

Again, this can be done using a macro, convenient, isn't it?

### Tips, Warning, Notes and Info
The documentation is scattered with tips, warning, notes and info inserts which all have the same structure. They stand out of the main content with a colored insert, with an icon, and if you choose to have one, its own title.

Tips are in green and give you hints to go further with the feature described in the page.
![Tip in PrestaShop documentation](/assets/images/2017/01/Build_PrestaShop_Documentation_Tip.png)

Info inserts, in blue, give more precision about a certain point discussed on the page, for your information.
![Info in PrestaShop documentation](/assets/images/2017/01/Build_PrestaShop_Documentation_Info.png)

Notes, in yellow, are more important and give details on something you should pay attention too.
![Notes in PrestaShop documentation](/assets/images/2017/01/Build_PrestaShop_Documentation_Note.png)

Warnings, in red, are must-reads and provide critical information.
![Warnings in PrestaShop documentation](/assets/images/2017/01/Build_PrestaShop_Documentation_Warning.png)

### Images and GIFs

To visually guide the user when explaining the interface, the User Guide presents screenshots of the PrestaShop interface. You can use the English images at first, and then update it with screenshots of the interface in your own language, for more accuracy.
We’ve been introducing GIF images more recently, to show more precisely what can be done in the back office.

### Code quotes

Sometimes when referring to files, folders or pieces of code, some pieces of content use the monospace font, to differentiate it from the regular content.

<img style="border: 1px solid #CCC; padding: 10px;" width="650" src="/assets/images/2017/01/Build_PrestaShop_Documentation_Code.png">

### All the rest
The rest of the content is mere text and you can use the WYSIWYG editor provided by Confluence to format it.

The user documentation is mostly about listing the available options and explaining what they are for, and how to use it. For this reason, the content is often a succession of lists, describing each features:

<img style="border: 1px solid #CCC; padding: 10px;" width="500" src="/assets/images/2017/01/Build_PrestaShop_Documentation_List.png">

## Quick tips

If you are contributing to the PrestaShop User Guide, here are a few tips that could save you some time :)

### How to create a page

When starting a chapter, once you have translated the page, you will need to create children pages. For this:

* Make sure you’re on the page whose children you want to create
* Click on "Create"
* In the new form, check that you are in the right space (PrestaShop 1.6 or 1.7, depending on which documentation you are translating)
* Select “Blank page”
* Click on Create
* Give the page a title
* Edit it if needed, or simply save it

There you go, the page is created!
To see all the children of a page, you can add the Children Display macro.


### How to add a macro (Children Display, Table of contents, tips)

If you need to add a table of contents, a list of children pages, a tip, note, warning or info insert, it all works using macros.

When editing your page:

* Click on Insert
* Select the macro you want, and fill in the necessary details
* If the macro you are looking for isn’t available, click on “Other macros”
* Use the search bar or menu to find the macro yo need
* Fill in the necessary details


### How to order your children pages
When you have created all the children of a page, their order will not necessarily be the one you expect. To edit it, click on the menu ("...") at the top of the page, then click on “View in Hierarchy”.

<img style="border: 1px solid #CCC; padding: 10px;" width="500" src="/assets/images/2017/01/Build_PrestaShop_Documentation_Hierarchy.png">

There you have the whole tree for the space you’re editing and you can order the children pages by dragging it where you want.

### How to add an image

If you’re not using the existing images of the English documentation, but want to show the interface in your own language (which we recommend), you’ll have to upload your own images.

To add an image:

* Click on “Insert”
* Click on “Files and images”
* Upload the file(s) you need on the page
* Click insert

The image will insert where your cursor was located on the page - if this not the right place for the picture, you can drag it to where you want.
Most of the images of the documentation are centered on the page. If its borders are white, you should add a border to the image, so that it would stand out from the content.

<img style="border: 1px solid #CCC; padding: 10px;" width="500" src="/assets/images/2017/01/Build_PrestaShop_Documentation_Image.png">


The image size depends on its content and how visible it should be. Try to follow what’s been done in the English documentation, if you’re not sure.

### How to copy content from the English documentation

Sometimes you might want to copy the whole English content in your page to translate it afterward. That implies copying images and tips (warning or notes).
If you copy the English content as-is, you will end up having some troubles in the display of macros.

It is recommended to:

* “Edit” the English page first,
* Copy from there the whole page,
* Paste in the page your are editing in your language,
* Then don’t forget to close the English page.


### How to link to another page of the documentation

Sometimes you will need to add links to other pages of the documentation. The most convenient way to do it is to:

* Open the page to which you want to link to
* Go back to your current page
* Create the link by clicking on “Link”
* In “Recently viewed”, you should see the page you just opened before
* Click on “Insert”

And here it is!

### How to write in RTL languages

Confluence is not fully adapted to right-to-left languages, but we found a workaround to have something decent.
If you need to create pages in an RTL language, select all the content of the page, then click on the right-align button. The main content will switch to an RTL display. However, the macros, titles and the whole page structure will stay LTR unfortunately.
For the time being, we haven’t found any better solution, but if you hear about something, do let us know!

### How to join the team of contributors

If you want to help translate the PrestaShop documentation into your language, simply drop us a line at <a href="mailto:documentation@prestashop.com?subject=Contribute%to%PrestaShop%Documentation">documentation@prestashop.com</a>.
We’ll create an account for you and provide all the details you need to know.
Thanks for your involvement!

## More resources

Should you need more information, you can also find some help on Confluence's own website:

* [Getting Started Guide](https://confluence.atlassian.com/display/DOC/Confluence+Getting+Started)
* [Confluence Knowledge Base](https://confluence.atlassian.com/kb)

If you have a question or a comment, let us know!









