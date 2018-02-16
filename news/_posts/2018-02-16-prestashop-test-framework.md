---
layout: post
title:  "The PrestaShop Test Framework"
subtitle: "Why this will make development easier"
date:   2018-02-16 09:10:11
authors: [ MehdiBadrani ]
icon: icon-lightning
tags:
 - 1.7
 - development
---

Last time our beloved Product Content Manager announced a new suite of functional tests to ensure our software quality.

Today we are proud to present you our new feature, the PrestaShop Test Framework, a cool toolkit like a Swiss knife which will help to save a lot of time by running at least 50 automated functional tests on your browser... and this is only the beginning! It makes easier to create basic acceptance testing when adding Addons, submitting pull requests or making some customizations on your Prestashop.

*"So many ways... the only limit is your imagination"*

This project is based on the famous feature-rich JavaScript test framework [Mocha](https://mochajs.org) running on [Node.js](https://nodejs.org/en) and making asynchronous testing. This new feature has been initially used by (and recently included in) Prestashop in order to improve the quality of regular implementations. And after some interesting modifications, we are proud to present the details below!

For more technical information, have a look at the [documentation](---).


## Introduction to PrestaShop Testing Framework

You’ve just written a feature and (hopefully) want to test it. Or you've decided that an existing feature doesn't have enough tests and want to contribute some. But where and how do you start? Let’s make PrestaShop testing easier and resilient together!


### Architecture

Let's see how do the technologies work together for local setup, with the local Selenium setup - note that all softwares run on your local computer :

- **Node** runs **Mocha** framework and all test scripts
- **Should** is the assertion library & **Chaï** is the BDD assertion library
- **WebdriverIO** communicates with Selenium Server using JSON Wire Protocol
- **Selenium Server** invokes local browser using a driver to test our shop

![PS Test Framework](/assets/images/2018/01/PS_Test_Framework.png)


### Configuration

To run these tests you have to install [Node.js](https://nodejs.org/en/download), [Npm](https://www.npmjs.com/get-npm), [Java](https://java.com/fr/download) and [Google Chrome](https://www.google.com/chrome/browser/desktop/index.html?brand=CHBD&gclid=EAIaIQobChMIva2UgZTN2AIVjjgbCh2kcA9MEAAYASAAEgKC8fD_BwE).

To use the following test suites, you need to install PrestaShop in **English** with setting country to France (or you may change some assertions like the separator “,” or “.”, “€” or “$” or “£” or …). You need to create a user in Back Office with **SuperAdmin** rights and the following information:

**Login:** demo@prestashop.com<br>
**Password:** prestashop_demo

Look at <prestashop_root_dir>/tests/E2E/ directory, this is where the test automation project is located!


### Installation

To install this awesome framework, you just have to this simple command on the root directory of the functional tests:

➜  `cd tests/E2E`<br>
➜  `npm install`

Launch Selenium-standalone with this command:

➜  `npm run start-selenium`

![PS Test Framework Selenium](/assets/images/2018/02/PS_Test_Framework_Selenium.png)

➜  `npm run high-test -- --URL=FrontOfficeURL --DIR=DownloadDirectory`

**URL**: Front office URL of your Prestashop website (without the “http://”)<br>
**DIR**: Your download directory (exp: /home/toto/Downloads/) so we can check the downloaded invoice

If you want to run test only on specific parts (for example products), you have to run this command:

➜  `path=high/02_product npm run specific-test -- --URL=FrontOfficeURL`

![PS Test Framework 1](/assets/images/2018/02/PS_Test_Framework_1.png)
![PS Test Framework 2](/assets/images/2018/02/PS_Test_Framework_2.png)


## Create a test

This basic suite of tests cover the CRUD functionality for the simple entities (CRUD is an abbreviation for “create”, “read”, “update” and “delete” actions).

**All the power of tests in the JS**

Create a script_scenario.js located in \tests\E2E\test\campaigns\high\custom_directory\ - in a new directory, or choose a category if you want to complete some tests in [BDD](http://chaijs.com/api/bdd/) style (Behavior Driven Development). But before continuing, let's see an example of how it appears in the code:

*scenario('Create Standard Product in the Back Office', client => {*<br>
*test('should open browser', () => client.open());*<br>
*test('should log in successfully in BO', () => client.signInBO(AccessPageBO));*<br>
*test('should go to "Catalog"', () => client.waitForExistAndClick(AddProductPage.products_subtab));*<br>
*test('should click on "NEW PRODUCT"', () => client.waitForExistAndClick(AddProductPage.new_product_button));*<br>
*});*

As you can see, every line calls to action scripted in client file located in \tests\E2E\test\clients.


## Conclusion

These technologies worked much better than we expected, however there was learning curve involved. Once understood how all the components worked together, everybody is able to write complicated test scripts in a very short time.

For our part, using these technologies has definitely motivated us to sharpen our JavaScript skills so we hope you'll find this article useful and motivating to contribute all together and to build a more reliable solution.

Please let us know if you have any questions or comments on this test automation framework.

From QA with love!
