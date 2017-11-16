---
layout: archive
author_profile: true 
permalink: /project 
title: "My Side Projects"
---

{% include base_path %}

The following are a few of the data science/data analytics projects that I have
worked on in my spare time. 

<div class="grid__wrapper">
  {% for post in site.projects %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
