---
layout: post
title:  "An update on the 1.7 RTL project"
subtitle: "(: tcejorp LTR eht no etadpu nA"
date:   2017-08-04 09:10:11
authors: [ alexeven ]
icon: icon-align-right
tags:
 - i18n
 - localization
 - 1.7
 - contribute
---

Some time ago we announced the launch of a project to [better adapt PrestaShop to right-to-left (RTL) languages](http://build.prestashop.com/news/PrestaShop-RTL-project/). We already have a small community overviewing what is going on (thank you!). To make sure everybody shares the same level of information, here is where we stand so far.


## Choosing a method: RTL script

We had to figure out which method to use to adapt PrestaShop to RTL languages. Here are the many methods that have been reviewed, and why we’ve chosen to go for a script.


### 1.6 method

In PrestaShop 1.6, the method that was chosen was to use [bi-app](https://github.com/anasnakawa/bi-app-less) to adapt the Sass files (preprocessed CSS files) for RTL. It relies on a third-party application with scripts that don’t meet all of our needs, and furthermore needs some customization.


<table style="width:100%">
  <tr>
    <th>Pros</th>
    <td><ul>
  			<li>We’ve been using this for PrestaShop 1.6</li>
		</ul>
    </td>
  </tr>
  <tr>
    <th>Cons</th>
    <td><ul>
  			<li>Requires some additional development</li>
  			<li>If we customize it, it will be hard to maintain and update</li>
  			<li>All SCSS and UI Kit files will need to have bidirectional support (but that will be the case anyway)</li>
            <li>Requires either duplicated files or overrides</li>
		</ul>
	</td>
  </tr>
</table>


### Manual method

Another method would be to manually create SCSS files for RTL. That implies heavy maintenance, as each time a SCSS file is changed, it must be duplicated on the RTL SCSS file too.

<table style="width:100%">
  <tr>
    <th>Pros</th>
    <td><ul>
  			<li>Full control over what is being done</li>
		</ul>
    </td>
  </tr>
  <tr>
    <th>Cons</th>
    <td><ul>
  			<li>Each time a modification is made to a CSS file, it must be made twice (on LRT and RTL files)</li>
		</ul>
	</td>
  </tr>
</table>


### Script method

The last method is to use a PHP script to adapt the final CSS files to RTL. The related library will be included in the PrestaShop Core dependencies to be always available. We will use it everytime we install or enable a RTL language to generate the RTL CSS files.
**This is the chosen method for PrestaShop 1.7.**

<table style="width:100%">
  <tr>
    <th>Pros</th>
    <td><ul>
  			<li>One script to handle all the files</li>
            <li>RTL files are generated only if needed (and not the LTR files)</li>
            <li>Less maintenance</li>
            <li>Contributor’s theme can benefit from it in order to be RTL-compatible</li>
		</ul>
    </td>
  </tr>
  <tr>
    <th>Cons</th>
    <td><ul>
  			<li>Script must answer to all cases</li>
            <li>We must avoid generating duplicated code</li>
		</ul>
	</td>
  </tr>
</table>

For instance, we'll have a theme.css file and a theme_rtl.css file. When theme_rtl.css is loaded, the theme.css will not be loaded. Right now as we suggested in past, PrestaShop will load any file which has _rtl.css instead of the original one.


<img width="500" src="/assets/images/2017/08/BO-prestashop-RTL.png">


## Font choices

RTL languages use different scripts (set of written characters - for instance Hebrew isn’t written the same as Farsi), and each script is better read with a proper font made to match it. Thus we would need to adapt the font to the selected RTL language, both on back-office and the Classic theme.

The font suggestions right now are:

* For Persian: [Vazir](https://github.com/rastikerdar/vazir-font)
* For Arabic: [Droid Arabic Kufi](https://fonts.google.com/earlyaccess#Droid+Arabic+Kufi), or maybe [Noto Kufi Arabic](https://fonts.google.com/earlyaccess#Noto+Kufi+Arabic)?

For the other languages, if no font is defined, we fall back to [Noto sans](https://www.google.com/get/noto/#sans-lgc), used today on the Classic theme.

If you want to suggest a font for a specific RTL language, or for Arabic where nothing is decided yet, please comment on our [Trello board](https://trello.com/c/FI0ri5Ev/1-fonts) or leave a comment here! We’re open to suggestions :)


## Icons

PrestaShop 1.7 uses [Material Icons](https://material.io/icons/), where icons are identified by their content instead of a specific class ID. This makes it much harder to identify an icon in CSS when we need to know whether it should be reversed or not.
Given this, we’ll create a CSS class which will gather all the icons that need to be kept in a LTR style for RTL languages.


## Jalali calendar (for Iran)

Iran has its own calendar, the [Jalali calendar](https://en.wikipedia.org/wiki/Jalali_calendar). For users in Iran, we will thus add a new calendar type. The calendar choice will be determined by the country of the merchants (= if the shop country is set to Iran, the default calendar will be Jalali).

An option in the Localization page will be added to allow the merchant to select which calendar they want to display on their shop. At the same time, employees will be able to choose which calendar to display in the administration interface via the Employee page - in case they’d like it to be different from the default setting (= Jalali calendar in Iran, Gregorian calendar otherwise).

If you too need a specific calendar to be added to PrestaShop, now is a good time to talk about it!

A new class will be introduced (named “pdate”, for “Persian date”) to convert date between the two calendars and save them in the database. This conversion will be applied once for saving Jalalil dates to Gregorian and once for showing saved dates from Gregorian to Jalali.


## Developments on Github

The RTL project is open and anyone can see how it goes on a dedicated RTL branch: [https://github.com/PrestaShop/PrestaShop/tree/rtl](https://github.com/PrestaShop/PrestaShop/tree/rtl).
If you wish to contribute, you are most welcome. Please don’t hesitate to open a pull-request. Remember, we are following method 3: the PHP script method.

The proposed script should be available on GitHub today (or in the coming days), and you are all invited to comment and send commits to improve it, should you see anything.

We have a lot of contributors involved from Iran, some from Tunisia, and we’d like to hear from other countries too - for the Hebrew and Malay languages for instance :)

So please let us know what you think!







