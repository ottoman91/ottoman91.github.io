---
layout: archive
author_profile: true 
permalink: /civic-tech 
title: "Insights from Code for Sierra Leone"
---

{% include base_path %}

<h3 class="archive__subtitle">{{ site.data.ui-text[site.locale].recent_posts }}</h3>

<!-- {% for post in paginator.posts %}
  {% include archive-single.html %}
{% endfor %} 

{% include paginator.html %} -->

{% for post in site.civic-tech %}
  {% include archive-single.html %}
{% endfor %}