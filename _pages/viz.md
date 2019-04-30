---
layout: archive
author_profile: true
permalink: /visualization
title: "Visualization Projects"
---

{% include base_path %}

<p>
  <i>A series of visualizations and data projects</i>
</p>

<div class="grid__wrapper">
  {% for post in site.vizs %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>

