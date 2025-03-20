---
layout: post
title:  "Adapting to PrestaShop 9: Guzzle is gone, what's next?"
subtitle: "PrestaShop 9 no longer includes Guzzle by default. Here's how to adapt your module."
date:   2025-03-20
authors: [ JonathanLelievre ]
icon: icon-code
tags: [autoupgrade, module, beta, releases, community, contribution, development, qa]
---

PrestaShop 9 is a major release, meaning it [introduces breaking changes](https://devdocs.prestashop-project.org/9/modules/core-updates/9.0/), including the removal of certain dependencies. One of the most impactful changes for module developers is the removal of Guzzle, a popular HTTP client that many modules relied on.

If your module depends on Guzzle, it will no longer be available by default in PrestaShop 9. In this article, we’ll explain why Guzzle was removed, what this means for your module, and how to migrate to a suitable alternative.

## Why remove Guzzle in the first place?

For many years, PrestaShop included Guzzle as a core dependency, allowing modules to use it for external HTTP requests. However, the core and PrestaShop tools used in it have gradually moved to using Symfony's HTTP Client instead, leaving Guzzle largely unused.

Since PrestaShop no longer relies on Guzzle, keeping it in the core is unnecessary. Additionally, dependency management has been a recurring issue. In PrestaShop 8, upgrading Guzzle from version 5 to 7 already caused compatibility problems for modules. Some developers had to bundle their own Guzzle version, but when multiple modules included different versions, it led to conflicts. To prevent such issues and improve overall stability, we decided to remove Guzzle entirely.

## How can I adapt my module?

With Guzzle no longer available by default, you must adjust your module. Here are a few solutions to replace it effectively.

### Use Symfony HTTP client (recommended)

The best way to avoid conflicts is to minimize external dependencies and rely on core libraries whenever possible. Since Symfony is the foundation of PrestaShop and will continue to be in the future, it's a safe and stable dependency that won't be removed.

Symfony includes an HTTP client component, which has been integrated into PrestaShop since version 1.7.7. If your module targets PrestaShop 1.7.7 or later, you can safely use the Symfony HTTP client. You can find more details on how to implement it in the [Symfony documentation](https://symfony.com/doc/current/http_client.html).

```php
use Symfony\Component\HttpClient\HttpClient;

$client = HttpClient::create();
$response = $client->request('GET', 'https://api.domain.com');
```

### Use a custom HTTP client implementation

You can create your own HTTP client, ensuring complete control and eliminating the risk of conflicts with other modules using different library versions.

However, the downside is that you'll need to maintain it yourself, which can lead to unnecessary complexity and duplicating existing solutions.

Here's an example of a custom HTTP client used in the PrestaShop EventBus module: [PrestaShop EventBus HTTP Client](https://github.com/PrestaShopCorp/ps_eventbus/blob/27ca0e360d88345e57e945ad6369a215f4e615d0/src/Api/HttpClient.php)

### Forcefully include Guzzle in my module's vendors (not recommended)

This is the **quick and dirty solution** - it allows you to keep your existing code without modifications. However, as mentioned earlier, we strongly discourage this approach because it increases the risk of conflicts with other modules that may include different Guzzle versions.

If you're developing a custom module for a specific shop with a controlled environment and a limited set of modules, this might work as a short-term fix. But if you distribute your module (e.g., on the PrestaShop Marketplace) for multiple shops, avoid this solution, as it can lead to unpredictable compatibility issues.

## What if I want my module to work across multiple PrestaShop versions?

Since the Symfony HTTP client is only available from PrestaShop 1.7.7 onward, you'll need to adapt your code based on the PrestaShop version your module is running on.

Here's a very quick and simple example:

```php
if (version_compare(_PS_VERSION_, '1.7.7', '>=')) {
    $clientOptions = [];
    $client = call_user_func('Symfony\\Component\\HttpClient\\HttpClient::create', $clientOptions);
    $response = $client->request('GET', 'https://api.domain.com');
} else {
    $client = new GuzzleHttp\Client();
    $response = $client->get('https://api.domain.com');
}
```

If your module makes more HTTP calls around the code, you might consider adding an abstraction layer to simplify maintenance and improve code organization.

## Preparing for PrestaShop 9

The removal of Guzzle is just one of the many changes introduced in PrestaShop 9. It may not be immediately obvious but it can impact module compatibility. As PrestaShop evolves, adapting to these updates ensures your modules remain functional and future-proof.

In this article, we focused on migrating away from Guzzle, but we'll be covering other important changes in separate articles to help you smoothly transition your modules to PrestaShop 9.

We would love to hear from you if you have any feedback, questions, or specific challenges while adapting your module! Your input helps us improve our guidance and support the community through these changes.
