---
layout: archive
author_profile: true 
permalink: /project 
title: "Projects"
---

{% include base_path %}


<div class="grid__wrapper">
  {% for post in site.projects %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
