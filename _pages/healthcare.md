---
layout: archive
title: "Healthcare"
permalink: healthcare/
author_profile: true
---
{% include base_path %}


*Designed a care pathway for sleep apnea patients, improved operation efficiency at the Stanford Children's Hospital,redesigned Sierra Leone's nationwide post-Ebola infectious disease surveillance system, and built low cost tech tools to deliver basic healthcare to underserved people*

<!-- <figure class="half">
  <a href="/healthcare" target="_blank">
    <img src="/images/koldokta.png">
  </a>
   <a href="/healthcare" target="_blank">
    <img src="/images/teamimage2.jpg">
   </a>
</figure>  -->

<div class="grid__wrapper">
  {% for post in site.healthcare %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
