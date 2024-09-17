---
layout: post
title:  "PrestaShop Back Office rebranding with PrestaShop 9"
subtitle: "PrestaShop 9 Embarks The Newly Rebranded Back Office Themes"
date:   2024-09-17
author: [ ThibaultBlivet ]
icon: icon-leaf
tags: [ "9.0", design, ux ]
---

By the end of 2023, PrestaShop unveiled a new brand identity to strengthen its position, enhance credibility, and build trust. [We already announced]({{< relref "/news/posts/2023/new-project-branding" >}}) the new branding for the project, and the PrestaShop back office is one of the last assets to follow this change. The release of PrestaShop 9 provided the perfect opportunity for this update. The rebranding involved significant changes to the PrestaShop back office, focusing on its two themes.

![Back Office rebrand](/assets/images/2024/08/bo_rebrand.png)

## Back office rebranding

### Anatomy of the PrestaShop back office

The PrestaShop back office consists of two themes, both of which were modified to achieve the rebranding:

#### Theme: default
- Used for legacy controllers
- Based on **Bootstrap 3**
- Now includes the `_root.scss` file from the **PrestaShop UI Kit**

#### Theme: new-theme
- Used for Symfony controllers
- Based on **Bootstrap 4**
- Utilizes the **PrestaShop UI Kit**

While the **new-theme** already incorporated the PrestaShop UI Kit, the **default** theme did not. To unify the appearance across both themes, we introduced the `_root.scss` file to the **default** theme in PrestaShop v9, ensuring both themes now share the same design foundation. This update involved a substantial refactoring effort, particularly around the use of CSS variables, to standardize and centralize design elements.

## Need for refactoring

Updating both themes was essential to providing a consistent user experience throughout the back office. This harmonization effort focused on integrating CSS variables from the UI Kit, offering a centralized method to define design elements like colors, backgrounds, and shadows. The `_root.scss` file serves as a single source of truth for these variables, enabling efficient application style across both themes.

## Developer tool for the default theme

To assist developers in visualizing these changes, we have created a tool that showcases the components in the default theme, which, unlike the new-theme, does not include the full UI Kit.

**To use this tool:**

- Open your terminal
- Navigate to the `admin-dev/themes/default directory`
- Ensure npm packages are installed
- Run the following command: `npm run example`
- This command will open a browser page that lists most of the components available in the default theme

## PrestaShop UI Kit v2

A key element of the back office rebranding is the update to the PrestaShop UI Kit, which ensures visual consistency and provides a modern design framework for developers. With the version **2.0.1**, the UI Kit includes the `_root.scss` file, defining CSS variables that align both the **default** and **new-theme** with the new PrestaShop brand design.

These updates were crucial for ensuring that the UI Kit components adhere to the new brand guidelines, thus providing a cohesive look across the entire back office. By updating the UI Kit components to use these CSS variables, we ensure that the rebranded design is applied consistently, making future updates easier to manage and more scalable.

- [Exposed CSS variables](https://github.com/PrestaShop/prestashop-ui-kit/blob/1c255d96d79c69e2d3e0dd1712f76379941c06bb/scss/_root.scss#L122)
- [PrestaShop UI Kit (Storybook)](https://build.prestashop-project.org/prestashop-ui-kit/)

## The role of CSS variables

CSS variables play a critical role in both the rebranding and the long-term maintainability of PrestaShop’s back office. They not only facilitate current design needs but also lay the foundation for future enhancements.

### Why CSS variables?

CSS variables offer several advantages, especially for large-scale projects like PrestaShop:

1. **Avoiding Naming Conflicts:** In complex projects with multiple themes or libraries, variable names can easily overlap. Using prefixes like `cdk-` (Core Design Kit) ensures that variables are unique, preventing conflicts with other parts of the project or third-party libraries.
2. **Maintaining Consistency:** A consistent naming convention, such as the `cdk` prefix, helps developers easily identify and manage variables related to the UI Kit, ensuring a cohesive design language.
3. **Foundation for Future Developments:** CSS variables provide a scalable solution, allowing for customizable back-office interface colors and enhancing flexibility for future developments.

## Summary 

The rebranding of PrestaShop’s back office with version 9 was a significant step towards enhancing its brand identity, credibility, and trust. This update involved comprehensive changes to the back office’s themes, **default** and **new-theme**, to achieve a unified and modern design. By introducing CSS variables and the `_root.scss` file from the updated PrestaShop UI Kit, we ensured consistency and maintainability across both themes. These changes not only improve the visual appeal of the back office but also provide a robust framework for future developments, enabling developers to maintain a cohesive and scalable design throughout the platform.
