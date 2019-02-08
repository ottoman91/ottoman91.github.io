---
layout: archive
title: "E Government"
permalink: egov/
author_profile: true
---
{% include base_path %}


*Developed a portal to track freedom of information requests sent to various 
government ministries*

<!-- <figure class="half">
  <a href="/healthcare" target="_blank"> 
    <img src="/images/koldokta.png">
  </a>
   <a href="/healthcare" target="_blank">
    <img src="/images/teamimage2.jpg">
   </a>
</figure>  -->

<div class="grid__wrapper">
  {% for post in site.egov %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>