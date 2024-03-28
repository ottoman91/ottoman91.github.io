---
layout: archive
author_profile: true
permalink: /coding
title: "Coding Scratch Pad"
---

{% include base_path %}

<p><i>Blog posts around programming, data science and ML ops escapades.
</i></p>
<div class="grid__wrapper">
  {% for post in site.coding %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>




