---
layout: post
title:  "Introducing a new Form Theme for 1.7.8"
subtitle: "An easy way to render Symfony forms"
date:   2021-11-12
authors:  [ matks ]
icon: icon-lab
tags: 
 - 1.7.8.x
 - feature
 - development
---

In PrestaShop 1.7.8, we have carried out a [refactoring project](https://github.com/PrestaShop/PrestaShop/issues/16482) that modifies how we render forms in Symfony pages thanks to a new Form Theme. In this article, we'll see the benefits of this system and how it can be used in modules.

## What is a Form Theme?

In PrestaShop 1.7.8, most Symfony Back office pages that feature forms are powered by the PrestaShop UI Kit Form theme.

What exactly is a Form Theme?

To answer this question, let's dig a little bit into how [Symfony forms](https://symfony.com/doc/3.4/forms.html) are structured.

Symfony decouples how forms are rendered from how forms are being constructed.

Each form in Symfony is built using an object FormType. This object carries the structure of the form, here's an example:

```php
class ContactType extends FormType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TranslatableType::class, [
                'label' => $this->trans('Title', 'Admin.Global'),
                'options' => [
                    'constraints' => [
                        new Length([
                            'max' => $maxLength,
                            'maxMessage' => sprintf('This field cannot be longer than %limit% characters', $maxLength)
                        ])
                    ]
                ]
            ])
            ->add('email', EmailType::class, [
                'label' => $this->trans('Email address', 'Admin.Global'),
                'required' => false,
                'constraints' => [
                    new Email(['message' => '%s is invalid.'])
                ],
            ])
        ;
```

The above PHP code basically states that this form contains:
- a 'title' input that has an upper limit length
- an 'email' input that must contain a valid email

Here we have the structure of our form. However, this does not specify the HTML structure of the form, such as how inputs should be rendered, should they be wrapped in div, what CSS class to apply...

In Symfony, you can define the HTML structure of a form either by writing it down, tag by tag, or you can delegate this responsibility to a Form Theme.

The Form Theme is a set of macros that describes how each form item is rendered into HTML. It will state how one form field, properly specified, should be rendered as an HTML structure. For example, it controls how to render in HTML a 'textarea' field with a validation message and a label.

You could compare a Symfony Form Theme to a PrestaShop theme: a PrestaShop theme 'skins' the Front office but does not hold its logic. It defines how the Front office looks but does not dictate how it behaves. The same principle can be followed for the Form Theme: it defines how a form looks but does not dictate its features.

Diving deeper in details, in the Symfony Bootstrap Form Theme, file inputs are for example being rendered following this macro:
{% raw %}
```html
{% block file_widget -%}
    <{{ element|default('div') }} class="custom-file">
        {%- set type = type|default('file') -%}
        {{- block('form_widget_simple') -}}
        {%- set label_attr = label_attr|merge({ class: (label_attr.class|default('') ~ ' custom-file-label')|trim })|filter((value, key) => key != 'id') -%}
        <label for="{{ form.vars.id }}" {% with { attr: label_attr } %}{{ block('attributes') }}{% endwith %}>
            {%- if attr.placeholder is defined and attr.placeholder is not none -%}
                {{- translation_domain is same as(false) ? attr.placeholder : attr.placeholder|trans({}, translation_domain) -}}
            {%- endif -%}
        </label>
    </{{ element|default('div') }}>
{% endblock %}
```
{% endraw %}

The main benefit of this system is that, since 'what is my form structure' and 'how is my form rendered' are completely separated, you can modify one without altering the other.

Hence rendering the Symfony forms being used in PrestaShop 1.7.8 can be done with a simple Twig statement:
```html
{{ form_widget(contactForm) }}
```

All the rendering logic happens inside the Form Theme. Upon calling `form_widget`, the Form Theme will analyze the structure of `contactForm` and render each input following the type of this input, its option, its labels.

## Benefits

### If you need a form in your module, you do not need to write HTML

The Form Theme we built is available in PrestaShop 1.7.8. This means you can use it to render your own Symfony forms. Just like the `HelperForm` before, if you want to quickly add forms that fit with PrestaShop visual identity in your module, you can focus on defining your form structure (inputs, validation rules, options...) and let the Form Theme style it for you.

### Customizing the forms in your whole shop

Also since almost all Symfony forms now rely on the Form Theme, if tomorrow you wish to modify how every Symfony form from PrestaShop is being rendered, you could create your own Form Theme, inherit PrestaShop default Form Theme and customize the parts you want to.

This means you could, in a few lines, modify how every radio button in PrestaShop Symfony pages looks like. Add a wrapper `<div>` around all text types, adjust the colors of all popovers, or replace every dropdown with something else.

As the Back office visual identity is gathered in a single piece of logic, modifying this piece of logic allows you to modify the entire Back office at once.

## Links

You will find the related documentation on [this page](https://devdocs.prestashop.com/1.7/development/components/form/form-theme/form-theme/).
