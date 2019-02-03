---
layout: archive
author_profile: true 
permalink: /project 
title: "Design Projects"
---

{% include base_path %}

<p>
  <i>A collection of projects related to design, data visualization and prototyping</i>
</p>

<div class="grid__wrapper">
  {% for post in site.projects %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
