---
layout: archive
author_profile: true 
permalink: /blog 
title: "Blog"
---

{% include base_path %}

<h3 class="archive__subtitle">{{ site.data.ui-text[site.locale].recent_posts }}</h3>

<!-- {% for post in paginator.posts %}
  {% include archive-single.html %}
{% endfor %} 

{% include paginator.html %} -->

{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}

