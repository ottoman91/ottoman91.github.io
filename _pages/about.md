---
layout: world
title: About Me!
permalink: /about
urdu: true
author_profile: true
---

{% include base_path %}

<div class="about-top">
  <div>
    <p class="urdu-stamp" lang="ur" dir="rtl">وراثت</p>
    <p class="urdu-note">Virasat: heritage. It is also the name of the bronze heirloom I cast at Stanford.{% for p in site.projects %}{% if p.title contains 'Virasat' %} <a href="{{ base_path }}{{ p.url }}">See the heirloom.</a>{% endif %}{% endfor %}</p>
    <h1>About</h1>
    <p>I'm a Staff Data Scientist at <a href="https://www.intuit.com/" target="_blank" rel="noopener">Intuit</a>. My interests lie in using data science and human-centered design to create equitable outcomes. Three lives got me here.</p>
  </div>
  <figure class="polaroid">
    <img src="{{ base_path }}/images/usmanbio.gif" alt="Usman Khaliq">
    <figcaption>the one who walked the road</figcaption>
  </figure>
</div>

<ol class="journey">
  <li class="life">
    <div class="scrap">
      <span class="stamp">life one</span>
      <h2>ICTD in West Africa</h2>
      <p>In a prior life, I worked in the information, communication and technology for development (ICTD) space in West Africa, particularly in Sierra Leone and Liberia, on projects in the <strong>healthcare</strong>, <strong>open government</strong> and <strong>financial inclusion</strong> sectors.</p>
      <ul class="scraps">
        <li><a href="{{ base_path }}/healthcare"><img src="{{ base_path }}/images/healthcare.png" alt="" loading="lazy"><span>healthcare</span></a></li>
        <li><a href="{{ base_path }}/opendata"><img src="{{ base_path }}/images/open_data.png" alt="" loading="lazy"><span>open data</span></a></li>
        <li><a href="{{ base_path }}/fin"><img src="{{ base_path }}/images/fin_inclusion_1.png" alt="" loading="lazy"><span>fin. inclusion</span></a></li>
      </ul>
      <p><a href="{{ base_path }}/portfolio#ictd-h">Open these rooms in Work</a></p>
    </div>
  </li>

  <li class="life">
    <div class="scrap">
      <span class="stamp">life two</span>
      <h2>Stanford Design Impact</h2>
      <p>I graduated from the <a href="http://designimpact.stanford.edu/" target="_blank" rel="noopener">Design Impact</a> program at Stanford, where I was mentored by <a href="https://www.ideo.com/people/david-kelley" target="_blank" rel="noopener">David Kelley</a> on improving the transition of care process for pediatric patients at the Stanford Children's Hospital. You can read more about my thesis <a href="http://www.thekiteproject.info/" target="_blank" rel="noopener">here</a>.</p>
      <p>At Stanford, I was a part of the <a href="https://datalab.stanford.edu/" target="_blank" rel="noopener">Data Lab</a> (taught by Hadley Wickham, Chief Data Scientist at RStudio), where I gained extensive proficiency in using the <a href="https://www.tidyverse.org/" target="_blank" rel="noopener">tidyverse</a> packages in R on close to 50 data science projects.</p>
      <p><a href="{{ base_path }}/project">Open the project rooms</a></p>
    </div>
  </li>

  <li class="life">
    <div class="scrap">
      <span class="stamp">life three</span>
      <h2>Industry data science</h2>
      <p>Today I'm a Staff Data Scientist at Intuit, using machine learning and human-centered design to create product experiences that solve knotty problems.</p>
      <p><a href="{{ base_path }}/portfolio#industry-h">Open the industry rooms in Work</a></p>
    </div>
  </li>
</ol>

<p><a href="{{ base_path }}/pdfs/CV_Usman_Khaliq.pdf" target="_blank" rel="noopener">Find my CV here</a></p>



























