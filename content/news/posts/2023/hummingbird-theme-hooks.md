---
layout: post
title:  "Hooks in the Hummingbird theme"
subtitle: "Visual representation of the hooks in the Hummingbird theme"
date:   2023-12-20 09:00:00
authors: [ elodieprokhoroff ]
icon: icon-laptop
tags: [news, theme, hummingbird, hook]
---


[Hummingbird](https://github.com/PrestaShop/hummingbird) is the new theme set to be introduced in PrestaShop 9. This theme represents a complete overhaul of the Classic theme, featuring a fresh design and new functionalities. The Product Design team at PrestaShop has developed a visual guide to the hooks available in this theme, aimed at simplifying customization for front-end developers who want to work with it.

## What is a hook?

As described in the [developer documentation](https://devdocs.prestashop-project.org/8/modules/concepts/hooks/):

> Hooks are a way to associate your code to some specific PrestaShop events.

Primarily, hooks are utilized for embedding content into various page sections, such as the header, footer, or side columns, based on the chosen hook. Additionally, hooks can trigger specific actions under particular conditions, like sending an email when an order is created. This project will concentrate on the display hooks in the front office of your store.

## The Hook Mapping Project

The hook mapping project was initiated by the Product Design team from PrestaShop. The aim is to list all the hooks present in the front office. This project is a good complement to the [existing documentation](https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/).

Hook mapping has been created based on the upcoming default theme for PrestaShop - Hummingbird.

## Why create it?

The project’s goal is to provide a visual and accurate guide to front office hook locations for the community. For beginners, identifying and locating hooks can be challenging due to the complex naming that doesn’t always clearly indicate the hook's position. This expertise typically requires a deep understanding of PrestaShop.

By making hooks more accessible to contributors and module developers, this project seeks to enhance the development and customization experience for PrestaShop stores.

## Project Overview

To simplify hook identification, we have created a visual map using Figma, interacting directly with the Hummingbird theme templates. This map can be accessed [here](https://www.figma.com/file/HKGzVBx5p2JaFrFocGe6p0/Hook-Cartography?type=design&node-id=0%3A1&mode=design&t=VhQey8OlJv2UkDuf-1) or in the [developer documentation](https://devdocs.prestashop-project.org/8/themes/hummingbird/hooks/).

Each hook location is marked by a blue zone corresponding to its name.

To locate a specific hook, you have two options: 
 * **If you know the front office page you want to modify:** find the corresponding mock-up in the file, either in the left-hand column, or directly in the central area. You can then browse the hooks available for the page.
 * **If you know the hook's name but not its location:** use the shortcut Ctrl+F or Cmd+F and enter the name of the hook you're looking for. You can also display the search bar using the magnifying glass icon at the top left of the interface. **Note:** if your search is unsuccessful, make sure your search applies to all pages in the file. If you still can't find what you're looking for, it may be because the hook hasn't yet been added to the map. Feel free to contribute to the project!

For further guidance on navigating the Figma file, visit the [Read me page](https://www.figma.com/file/HKGzVBx5p2JaFrFocGe6p0/Hook-Cartography?type=design&node-id=128-15445&mode=design&t=lnfRmcHsGwpqfBK1-0).

## Contributing

Have you spotted an error in the file? Would you like to update it, or do you have an idea for improving the resource? Just like all the other PrestaShop resources, your ideas are welcome! All you have to do is [join the dedicated GitHub Discussion](https://github.com/PrestaShop/PrestaShop/discussions/34884) and let us know. Share your thoughts and add screenshots or your own mock-ups.

{{< cta "https://devdocs.prestashop-project.org/8/themes/hummingbird/hooks/" >}}Visit the project page in the DevDocs{{< /cta >}}
