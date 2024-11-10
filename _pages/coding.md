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
  {% for post in site.codes %}
    {% include archive-single.html %}
  {% endfor %}
</div>




