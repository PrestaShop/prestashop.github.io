---
layout: post
title:  "Meet the new API Platform-based API in PrestaShop 9"
subtitle: "Read how to use the new API in PrestaShop 9"
date:   2024-05-21
authors:  [ kpodemski ]
icon: icon-laptop
tags: [api, tutorial, "9.0", "9.x", "9.0"]
---

A new feature in PrestaShop 9 provides the community a new, secure, modern, and extensible API based on the API Platform. In this article I will show you how to start using it.

## New API in PrestaShop 9

As [it was announced last year](https://youtu.be/jzKBQM3fprY?t=1341), one of the most significant projects for PrestaShop 9 has been the start of work on a new API that will eventually replace the currently available [Web Services](https://devdocs.prestashop-project.org/8/webservice/). Current web services are an outdated solution based on ObjectModel (which is expected to eventually disappear from PrestaShop in the next few years) and, apart from other flaws, are also complicated to maintain (no tests, spaghetti code).

The new solution is based on the popular [API Platform](https://api-platform.com/) version 3 and fully takes advantage of its benefits. Using a solution popular in the Symfony ecosystem should not only make it easier for developers to work with the API but also allow them to use all the complementary tools available in it.

The new API utilizes the OAuth authorization protocol and CQRS commands for its endpoints. CQRS-based endpoints are more domain-oriented and enhance business logic management compared to traditional web services connected to ObjectModel. This approach allows us to better separate concerns, align API operations closely with business requirements, and improve maintainability and scalability.

{{% notice %}}
For an in-depth understanding of API implementation in PrestaShop 9, I recommend [viewing Jonathan Lelievre's presentation](https://youtu.be/7CQ2Sg-v4XQ?t=1216). Jonathan is the Tech Lead at PrestaShop, and he offered a comprehensive overview of the new API during the PrestaShop Project Live Update.

The video linked above is outdated in a few places. We plan to release extensive developer documentation for the API soon.
{{% /notice %}}

## Setting up PrestaShop 9

To test the new API, you need to have PrestaShop 9 installed and available. [PrestaShop 9 Alpha 1 is now available](#), which means you can follow the normal installation process as with any other version of PrestaShop. You are also free to use a [local environment](https://devdocs.prestashop-project.org/9/basics/installation/) to work with PrestaShop and the API. This will be similar to creating a working version of PrestaShop locally from sources available on GitHub or a downloaded ZIP.

Keep in mind that PrestaShop 9.0 requires a minimal PHP version of 8.1. You can check the [system requirements](https://devdocs.prestashop-project.org/9/basics/installation/system-requirements/) page in the developer documentation.

You may want to disable checking for HTTPS with TLSv1.2. You can do that by going to Advanced Parameters -> Admin AP -> Configuration and disabling "Force security in debug mode" option. If you don't see this option make sure to enable *Debug mode* first in Advanced Parameters -> Performance.

{{% notice warning %}}
You can disable the forced secured protocol in the configuration but **only** with the debug mode enabled, production mode is strictly secured and you need HTTPS to connect to the API.
{{% /notice %}}

![PrestaShop 9 API Configuration](/assets/images/2024/05/api/api_ssl_configuration.jpeg)

## Ouath2 terminology

Before I continue with the tutorial, below you will find a helpful table that should help you understand some of the terms used in this article.

![PrestaShop 9 API terminology](/assets/images/2024/05/api/terminology.png)

Now, let's proceed to the next step.

## Create API client

Let's create our first application. You can add as many applications to API as you want. In the real-world scenario, you probably want to create separate applications for each service you want to integrate. You will probably have clients like “My ERP integration”, “Some marketing automation tool client”, etc.

To add a new API client, navigate to Advanced Parameters -> Admin API page. Here you can see a list of all API clients, you can add a new one by clicking the “Add new API Client” button.

![PrestaShop 9 API Client](/assets/images/2024/05/api/api_add_new_client1.jpeg)

If you want to add a new client you need to provide information about it. In the form below you have to provide all the necessary information about the client. After you do that, you can click the "Generate client secret and save" button. This will generate a client secret for you and save the client in the database. **It's important to save the client secret because you won't be able to see it again.**

![PrestaShop 9 Form for adding a new API client](/assets/images/2024/05/api/api_add_new_client2.jpeg)
<p class="text-center text-muted small">Form for adding a new API client</p>

* **Client name** - the name of the client, it can be anything you want. It's just for your reference.
* **Client ID** - the ID of the client, it's a unique identifier for the client. It should be written without spaces or special characters.
* **Description** - a description of the client, it can be anything you want. It's just for your reference.
* **Lifetime** - the lifetime of the client. It's the time after which the client access token will expire. In seconds.
* **Enabled** - if the client is enabled or not. If it's not enabled, the client won't be able to use the API.
* **Scopes** - the scopes the client can use. You can enable multiple scopes. Each time you add a new scope, you will have to adjust client's settings.

{{% notice %}}
As part of API extensibility, you can add new scopes to the API. This will allow you to create more granular permissions for your clients. You can find [example module here](https://github.com/PrestaShop/example-modules/tree/master/api_module) and in [ps_apiresources](https://github.com/PrestaShop/ps_apiresources) repository.
{{% /notice %}}

After you save the client, you will see the client secret, but you won't be able to see it again. You can only see it once when you generate it. It's important to save it because you will need it to authenticate your client.

![PrestaShop 9 API client secret](/assets/images/2024/05/api/api_add_new_client3.jpeg)
<p class="text-center text-muted small">Remember to copy secret for your API Client</p>

## Client credentials grant

Now that you created your first API client, you can test the connection to the API. You can do this by sending a GET request to the `/admin-api` endpoint. You need to provide the client ID and client secret you generated earlier. You can use Postman or any other tool that allows you to make HTTP requests.

{{% notice %}}You have number of tools to debug APIs. You can use Postman, [curl](https://curl.se/), or any other tool (even open source like [Insomnia](https://insomnia.rest/)) that allows you to make HTTP requests. In this tutorial, I will use [Postman API client](https://www.postman.com/api-platform/api-client/), so that you can easily test the API with a user-friendly interface.
{{% /notice %}}

First we are going to do is to get the access token. To do that you need to send a POST request to the `/admin-api/access_token` endpoint. You need to provide the following parameters:

* **client_id** - the ID of the client you created
* **client_secret** - the secret of the client you created
* **grant_type** - the type of grant you want to use. In this case, it's `client_credentials`
* **scope** - the scopes you want to use. You can provide multiple scopes. In this case, we are going to use `api_client_read`, `api_client_write`, `customer_group_read`, `customer_group_write`

Example request using curl:

```bash
curl --location 'http://yourdomain.test/admin-api/access_token' \
--form 'grant_type="client_credentials"' \
--form 'client_id="your_client_id"' \
--form 'client_secret="your_client_secret"' \
--form 'scope[]="api_client_read"' \
--form 'scope[]="api_client_write"' \
--form 'scope[]="customer_group_read"' \
--form 'scope[]="customer_group_write"'
```

Example request using Postman:

![PrestaShop 9 API Access Token request using Postman](/assets/images/2024/05/api/postman_access_token.png)
<p class="text-center text-muted small">Screenshot from Postman where we retrieve access token for our client</p>

{{% notice %}}
As you can see on the screenshot, I am using project variables in Postman. This way you can easily switch between different environments (like development, staging, production) and you don't have to change the request data (URL, client_id, etc.) every time you switch the environment.
{{% /notice %}}

Now, after you send the request, you should receive a response with the access token. If you receive information saying "Use HTTPS response", it means that you need to use HTTPS to connect to the API. You can disable this check in the PrestaShop back office as mentioned earlier.

If you still have problems with the connection, make sure that the API is enabled in the PrestaShop back office. You can check this in the Advanced Parameters -> Admin API -> Configuration page.

If everything goes well, the response should look like similar to this:

```json
{
    "token_type": "Bearer",
    "expires_in": 3600,
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ0ZXN0X2NsaWVudCIsImp0aSI6ImQ5OTQzYWQzNDgwNDA3N2QyZGQ5MTBmM2E3YTVmYTdiZTQ1YmMyNzZmM2VmMjA2MGJmZjg2MzhlMzA4ZWE3OWY1ZWI1NzQ0ZmI0N2Y4MDU2IiwiaWF0IjoxNzE2Mjg2MjE5LjQ2NDA3OCwibmJmIjoxNzE2Mjg2MjE5LjQ2NDA4LCJleHAiOjE3MTYyODk4MTkuNDYzMDEsInN1YiI6IiIsInNjb3BlcyI6WyJpc19hdXRoZW50aWNhdGVkIiwiYXBpX2NsaWVudF9yZWFkIiwiYXBpX2NsaWVudF93cml0ZSIsImN1c3RvbWVyX2dyb3VwX3JlYWQiLCJjdXN0b21lcl9ncm91cF93cml0ZSJdfQ.Q6kK0Pl1HVAVrzn5xUrzRO1VSUaw-ygTn9D_rKlfjW3gllUWJiWRaA_pM53RtLId1LkcAfW8nW27CFhQH7TQqLCn4vUPD2t6_s7-3WX_HIqe6MHExib2mW7u_ZXT3bSOyPUOjWIcZsISQR1-noZfOEYDkvgnKDC250zieVqMELgxclMFXKdiLhn83GJnCW35llB1TwAACxdV1uJ_emZGCR3Tsy2IK1pSKPRAb2h-gBre8hqtCmUZ5pdM_L6D_EuUM-aB6iQENiCD6ECmSvqvsqkd3RB73s7PntwniUUafD2GHap1Ttw8pOF7omtT3X0ZLssSX1eQMPDw6JGLFz9caw"
}
```

You can now use the access token to authenticate your client in the next requests. You can use it by providing the `Authorization` header with the value `Bearer YOUR_ACCESS_TOKEN`.

Remember that the access token is valid for a limited time. After it expires, you need to get a new one. It is also crucial to provide scopes that your client can use. If you don't provide the correct scopes, you won't be able to access some endpoints.

## Information about the API Client

Now that we have the access token, we can use it to get information about the API client. To do that, you need to send a GET request to the `/admin-api/api-client/info` endpoint. You need to provide the access token in the `Authorization` header.

Example request using curl:

```bash
curl --location 'http://yourdomain.test/admin-api/api-client/infos' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```

Example request using Postman:

![PrestaShop 9 API Client Info request using Postman](/assets/images/2024/05/api/postman_client_info.png)

If everything goes well, you should receive a response with information about the API client. The response should look like this:

```json
{
    "apiClientId": 1,
    "clientId": "test_client",
    "clientName": "Test client",
    "description": "",
    "enabled": true,
    "lifetime": 3600,
    "scopes": [
        "api_client_read",
        "api_client_write",
        "cart_rule_write",
        "customer_group_read",
        "customer_group_write",
        "hook_read",
        "hook_write",
        "module_read",
        "module_write",
        "product_read",
        "product_write"
    ]
}
```

Congrats! You have successfully authenticated your client and retrieved information about it. You can now use the access token to access other endpoints in the API.

Please note, that list of scopes may vary depending on the client you created. It is also important to note that the list of scopes here is the list of all scopes the client can use, not the list of scopes the client is using at the moment, with the generated access token.

If you request for an endpoint without the required scope, you will receive an error message. For example, if you try to access the `/admin-api/products` endpoint without the `product_read` scope, you will receive the following response:

```json
{
    "type": "https://tools.ietf.org/html/rfc2616#section-10",
    "title": "An error occurred",
    "status": 403,
    "detail": "Invalid scope.",
    "class": "Symfony\\Component\\HttpKernel\\Exception\\AccessDeniedHttpException",
    "trace": []
}
```

## Retrieve a single resource

Now that you have a better understanding of how to authenticate your client and retrieve information about it, you can try to retrieve other resources from the API. You can use the access token you generated earlier to authenticate your client.

In the following example we will try to retrieve, and save, information about user groups. To do that, you need to send a `GET` request to the `/admin-api/customers/group/{customerGroupId}` endpoint, where `{customerGroupId}` is the ID of the user group you want to retrieve. You need to provide the access token in the `Authorization` header.

```bash
curl --location 'http://yourdomain.test/admin-api/customers/group/1' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```

If everything goes well, you should receive a response with information about the user group. The response should look like this:

```json
{
    "customerGroupId": 1,
    "localizedNames": {
        "1": "Odwiedzający",
        "2": "Visitor"
    },
    "reductionPercent": 0.0,
    "displayPriceTaxExcluded": false,
    "showPrice": true,
    "shopIds": [
        1
    ]
}
```

Notice, that you can have access to the localized names of the user group and all other relevant information.

If you access the endpoint with the wrong ID, you will receive an error message. For example, if you try to access the `/admin-api/customers/group/999999` endpoint, you will receive the following response:

```json
{
    "type": "https://tools.ietf.org/html/rfc2616#section-10",
    "title": "An error occurred",
    "status": 500,
    "detail": "Group #4 was not found",
    "class": "PrestaShop\\PrestaShop\\Core\\Domain\\Customer\\Group\\Exception\\GroupNotFoundException",
    "trace": []
}
```

The endpoint will return 404 status code and an error message saying that the group was not found.

{{% notice success %}}
If you search for a list of all available resources, you can use the http://yourdomain.test/admin-api/docs.html URL to access the API documentation. The documentation is generated automatically and provides information about all available endpoints, request methods, and parameters.
{{% /notice %}}

## Editing a single resource

Now that you know how to retrieve information about a single resource, you can try to edit it. To do that, you need to send a `PUT` request to the `/admin-api/customers/group/{customerGroupId}` endpoint, where `{customerGroupId}` is the ID of the user group you want to edit. You need to provide the access token in the `Authorization` header and the data you want to change in the request body.

You can send following JSON data to change the user group name:

```json
{
    "localizedNames": {
        "1": "Odwiedzający - Edytowany",
        "2": "Visitor - Edited"
    }
}
```

Full `curl` request:

```bash
curl --location --request PUT 'http://yourdomain.test/admin-api/customers/group/1' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data '{
    "localizedNames": {
        "1": "Odwiedzający - Edytowany",
        "2": "Visitor - Edited"
    }
}'
```

If everything goes well, you should receive a response with information about the user group. The response should look like this:

```json
{
    "customerGroupId": 1,
    "localizedNames": {
        "1": "Odwiedzający - Edytowany",
        "2": "Visitor - Edited"
    },
    "reductionPercent": 0.0,
    "displayPriceTaxExcluded": false,
    "showPrice": true,
    "shopIds": [
        1
    ]
}
```

Notice, that the user group name has been changed. You can now use the same method to edit other resources in the API. Let's now proceed to the next step.

## Adding a new resource

Now that you know how to retrieve and edit information about a single resource, you can try to add a new resource. To do that, you need to send a `POST` request to the `/admin-api/customers/group` endpoint. You need to provide the access token in the `Authorization` header and the data you want to add in the request body.

You can send following JSON data to add a new user group:

```json
{
    "localizedNames": {
        "1": "Nowa grupa",
        "2": "New group"
    },
    "reductionPercent": 0.0,
    "displayPriceTaxExcluded": false,
    "showPrice": true,
    "shopIds": [
        1
    ]
}
```

Full `curl` request:

```bash
curl --location 'http://yourdomain.test/admin-api/customers/group' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data '{
    "localizedNames": {
        "1": "Nowa grupa",
        "2": "New group"
    },
    "reductionPercent": 0.0,
    "displayPriceTaxExcluded": false,
    "showPrice": true,
    "shopIds": [
        1
    ]
}'
```

This time you should receive a response with information about the newly created user group. The response should look like this:

```json
{
    "customerGroupId": 4,
    "localizedNames": {
        "1": "Nowa grupa",
        "2": "New group"
    },
    "reductionPercent": 0.0,
    "displayPriceTaxExcluded": false,
    "showPrice": true,
    "shopIds": [
        1
    ]
}
```

and you will see the new user group in the PrestaShop back office.

![New group added via the API available in the back office](/assets/images/2024/05/api/bo_groups.jpeg)

If you don't provide all the necessary information, you will receive an error message. For example, if you try to add a new user group without providing the `localizedNames` parameter, you will receive the following response:

![Error when adding a new resource without providing required information](/assets/images/2024/05/api/postman_add_group_error.png)

## Deleting a single resource

To delete a resource, you need to send a `DELETE` request to the `/admin-api/customers/group/{customerGroupId}` endpoint, where `{customerGroupId}` is the ID of the user group you want to delete.

```bash
curl --location --request DELETE 'http://yourdomain.test/admin-api/customers/group/4' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```

## Importing API collection to your API client

Thanks to the automatically generated documentation, you can easily import the API collection into Postman or other API client of your choice. You can find the collection in the `http://yourdomain.test/admin-api/docs.json` URL. The collection is available in the OpenAPI format, which is compatible with Postman and other API clients.

## Extending API

The new API in PrestaShop 9 is designed to be extensible. You can add new endpoints, scopes, and other features to the API. We plan to release extensive developer documentation for the API soon. In the meantime, you can check the [example module](#) and the [ps_apiresources](#).

{{% notice %}}
The new API in PrestaShop 9 is still in development. We are working on adding new features, improving performance, and fixing bugs. We encourage you to test the new API and provide feedback to help us improve it further.
{{% /notice %}}

## Get involved

The new API in PrestaShop 9 is a significant step forward for the platform. It will provide developers with a modern, secure, and extensible API that will allow them to create new integrations and services. We encourage you to test the new API and provide feedback to help us improve it further.

If you are motivated to contribute to the development of the new API, we encourage you to join the PrestaShop community. You can find more information about contributing to PrestaShop on the [Contribute to PrestaShop](https://devdocs.prestashop-project.org/9/contribute/) page.

### Let's keep in touch on Slack

If you have any questions or feedback, come [talk with us on Slack](https://www.prestashop-project.org/slack/).
