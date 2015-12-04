---
layout: page
title: Authors and contributors
permalink: /authors/
---

{% assign contributors = site.github.contributors %}

<div class="row">
{% for contributor in contributors %}
  <div class="col-xs-4 col-md-3">
    <a href="{{ contributor.html_url }}" class="thumbnail contributor">
      <img src="{{ contributor.avatar_url }}" class="img-responsive img-circle" alt="{{ contributor.login }}">
    </a>
  </div>
{% endfor %}
</div>
