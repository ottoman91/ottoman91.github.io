---
layout: archive
title: "eHealth"
permalink: healthcare/
author_profile: true
---
{% include base_path %}


*Built low cost tech tools to deliver basic healthcare to underserved people, 
and redesigned the nationwide infectious disease surveillance system 
during the post Ebola recovery period in Sierra Leone*

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