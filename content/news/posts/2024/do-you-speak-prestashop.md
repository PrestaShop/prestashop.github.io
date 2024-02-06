---
layout: post
title: "PSDevCon 2023: Do you speak PrestaShop"
subtitle: "How the community works to translate the software into multiple languages."
date:   2024-02-05
authors: [ JulieVarisellaz, NicolasLoeuillet ]
icon: icon-leaf
tags: [ news, event, community ]
---

## Do you speak PrestaShop?

On November 30, Nicolas Lœuillet and Julie Varisellaz gave a presentation about the project’s translations at the first-ever PrestaShop Developer Conference.

Their presentation aimed to explain the path of a translation string, from the code to the merchant’s back office. The presentation was in French, but we’re happy to share a summary in English on the blog. Let’s get started!

## Crowdin: Localization management platform

There are 2 ways of translating your PrestaShop store.
You can translate strings directly from your back office. In that case, your translations will only affect your store. It’s useful if you want to use specific vocabulary or tone to address your customers.
You can also decide to contribute to Crowdin. If you choose this option, your translations will benefit the whole community.

There are 82 languages open to translation on Crowdin. 12 languages are fully available, meaning that they are 100% translated and validated. About 15 are almost complete (completion rate between 97% and 99%).

## The path of a translation string: from code to the merchant’s back office 

New versions of PrestaShop mean new content to translate. A few weeks before the release of a new version, maintainers publish the new strings to Crowdin. This way, translators can do their magic so that as many translations as possible are ready when the version is released.

A string must be validated by a proofreader to be sent to PrestaShop. Proofreaders are translators with validation rights. Their role is to ensure translations’ quality.

Once a proofreader has translated and validated a string, it is sent to PrestaShop stores. Synchronization takes place every day. You can retrieve the latest translations from your store. To do this, don't forget to update the language in your back office (In the International menu > Translations > Update a language). Translations you have customized won’t be overwritten.

## Contributions 

Coding isn't the only way to contribute to an open source project. Translation is another way to contribute!
Join the translator community [on Crowdin](https://crowdin.com/project/prestashop-official). Either your language is already 100% translated and you can suggest improvements or the language is not yet 100% translated and you can contribute to help achieve this goal.

If you're interested, you can check our monthly blog post on the blog. We also have a [Slack channel]([prestashop.slack.com](http://prestashop.slack.com/)) dedicated to translations.

## How we used to handle translations

Everything was done manually. The steps were:

1. Clone the tool locally
2. Set up and install
3. Find the last person who had managed to get the tool to work because "it doesn't work ©"
4. Execute command to export files from code
5. Copy files into PrestaShop
6. Create a pull request manually
7. Get feedback from the Content team in the pull request’s comment section
8. Apply feedback locally in PrestaShop
9. Go to step 4 again

In the end, it was really hard work and time-consuming.

## How we handle translations now

Thanks to GitHub actions!

What’s a GitHub action?

> “GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline. You can create workflows that build and test every pull request to your repository, or deploy merged pull requests to production.” 

(Read more in [GitHub documentation](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions))

These actions can be triggered manually or automatically, following an event: when you open a pull request, when you assign it to someone, when you start a discussion, etc. In other words, as soon as you do something on Github, you can trigger an action.

An action is configured via a YML file in your project's **.github/workflows** directory.

At PrestaShop, we use it in many cases:

- Updates of internal dependencies (PrestaShop modules)
- In pull requests: nearly 40 checks are launched via Github Actions (tests, pull request validation, JS or PHP linter, UI or integration tests, etc.)
- Nightly
- Builds of our Docker images
- Update and deployment of our “Top contributors” and “Top translators” sites

And of course... for translation management!

Several months ago, a code rewriting project was launched to facilitate the work of the Content and Developer teams. This rewriting was done on our translation tool. For now, this repository is private as it contains sensitive data.

Last September, we worked again on this tool to make it compatible with Crowdin's API V2. This repository should be open to the community in the coming weeks, now that all the clean-up has been done.

As you can probably guess, this rewriting was done thanks to GitHub actions.

The first 2 steps of our process are launched manually. These actions only concern the project's default language, English:

1. We update the default catalog repository by extracting the new text strings from the sources. Then we open a pull request on the PrestaShop/PrestaShop repository so that the Content team can review it and ask for changes if necessary.
2. When the pull request is validated, the new text strings are pushed to Crowdin. Translators can translate the new strings directly via Crowdin.
3. Catalogs are then used to generate .xlf files. These are the files used by PrestaShop. In Crowdin, files are organized in a tree structure by domain. For example, there's an **Admin/Catalog/** folder containing the **Feature.xlf** file.
4. Every day, a Github action downloads all these XLF files (i.e. all the translations), then adapts them to what is expected by PrestaShop, i.e. in our example, a single translations/default/AdminCatalogFeature.xlf file.
5. They are then pushed to the public TranslationFiles repository. This repository contains all translations for all versions of PrestaShop. Each time a modification (a push) is made to this repository, another action takes over and creates an archive for each language, then pushes it to a Google Cloud Platform bucket. These archives are stored on Google Cloud Platform to avoid the download limits imposed by GitHub.

💡 There’s an archive available for each PrestaShop version and each language. The URL respects the following format: `https://i18n.prestashop-project.org/translations/VERSION/LOCALE/LOCALE.zip`
For example, for the French language, the URL is: https://i18n.prestashop-project.org/translations/8.1.0/fr-FR/fr-FR.zip

6. Merchants can now download and use the translations they want. 🎉

In conclusion, the work we've done has saved PrestaShop teams and the community an enormous amount of time. There's certainly room for improvement, especially with Crowdin API V2 features. But we haven't delved into this issue yet. Perhaps we're still missing out on interesting features that could help us: your feedback is most welcome!