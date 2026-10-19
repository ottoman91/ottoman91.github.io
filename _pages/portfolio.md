---
layout: world
title: "Work"
permalink: /portfolio
intro:
  - excerpt: '**My Work In The Technology For Development Space In West Africa**'
feature_row:
  - image_path: healthcare.png
    alt: "Healthcare"
    title: "Healthcare"
    url: /healthcare
    btn_label: "Read More"
    btn_class: "btn--info"
  - image_path: fin_inclusion_1.png
    alt: "Financial Inclusion"
    title: "Financial Inclusion"
    url: /fin
    btn_label: "Read More"
    btn_class: "btn--info"
  - image_path: civic_media_2.png
    title: "Civic Media"
    url: /civicmedia
    btn_label: "Read More"
    btn_class: "btn--info"
feature_row2:
  - image_path: open_data.png
    alt: "Open Data"
    title: "Open Data"
    url: /opendata
    btn_label: "Read More"
    btn_class: "btn--info"
  - image_path: water_sanitation.png
    alt: "Water and Sanitation"
    title: "Water & Sanitation"
    url: /watersanitation
    btn_label: "Read More"
    btn_class: "btn--info"
  - image_path: e-gov.png
    alt: "E Government"
    title: "E Government"
    url: /egov
    btn_label: "Read More"
    btn_class: "btn--info"
---

{% include base_path %}

<!-- {% include feature_row id="intro" type="center" %}
 -->

<div class="page-head">
  <h1>Work</h1>
  <p>My work in the United States, West Africa and Pakistan. Every room opens with the outcome and the stack; the depth folds out underneath. <a href="{{ base_path }}/pdfs/CV_Usman_Khaliq.pdf" target="_blank" rel="noopener">Resume (PDF)</a></p>
</div>

<section class="section" aria-labelledby="industry-h">
  <h2 id="industry-h">Industry</h2>
  <p class="lede">Data science in product teams.</p>

  <article class="room" id="intuit" style="--hue: var(--a-blue)">
    <div class="room__head">
      <h3>Intuit</h3>
      <p class="room__role">Staff Data Scientist</p>
    </div>
    <div>
      <p class="room__outcome">Using machine learning and human-centered design to create product experiences that solve knotty problems.</p>
      <dl class="facts">
        <dt>stack</dt><dd><span class="pending">[stack pending]</span></dd>
      </dl>
      <details>
        <summary>Inside the room</summary>
        <p>Before Intuit I studied at Stanford's Design Impact program and worked in ICTD in West Africa. <a href="{{ base_path }}/about">The three lives are on the About page.</a></p>
        <p><span class="pending">[project detail pending]</span></p>
      </details>
    </div>
  </article>

  <article class="room" id="coinbase" style="--hue: var(--a-yellow)">
    <div class="room__head">
      <h3>Coinbase</h3>
      <p class="room__role"><span class="pending">[role and dates pending]</span></p>
    </div>
    <div>
      <p class="room__outcome"><span class="pending">[outcome pending]</span></p>
      <dl class="facts">
        <dt>stack</dt><dd><span class="pending">[stack pending]</span></dd>
      </dl>
      <details>
        <summary>Inside the room</summary>
        <p><span class="pending">[project detail pending]</span></p>
      </details>
    </div>
  </article>

  <article class="room" id="overjet" style="--hue: var(--a-red)">
    <div class="room__head">
      <h3>Overjet</h3>
      <p class="room__role"><span class="pending">[role and dates pending]</span></p>
    </div>
    <div>
      <p class="room__outcome"><span class="pending">[outcome pending]</span></p>
      <dl class="facts">
        <dt>stack</dt><dd><span class="pending">[stack pending]</span></dd>
      </dl>
      <details>
        <summary>Inside the room</summary>
        <p><span class="pending">[project detail pending]</span></p>
      </details>
    </div>
  </article>
</section>

<section class="section" aria-labelledby="ictd-h">
  <h2 id="ictd-h">ICTD in West Africa and Pakistan</h2>
  <p class="lede">Information, communication and technology for development, in the healthcare, open government and financial inclusion sectors.</p>

  <article class="room" id="healthcare">
    <div class="room__head"><h3>Healthcare</h3><p class="room__role">Sierra Leone and Stanford Children's Hospital</p></div>
    <div>
      <p class="room__outcome">Designed a care pathway for sleep apnea patients, improved operation efficiency at the Stanford Children's Hospital, redesigned Sierra Leone's nationwide post-Ebola infectious disease surveillance system, and built low cost tech tools to deliver basic healthcare to underserved people.</p>
      <dl class="facts"><dt>focus</dt><dd>Care pathways, disease surveillance, low-cost health tools</dd></dl>
      <details>
        <summary>Inside the room</summary>
        <ul class="plain">
          {% for p in site.healthcare %}<li><a href="{{ base_path }}{{ p.url }}">{{ p.title }}</a></li>{% endfor %}
        </ul>
        <p><a href="{{ base_path }}/healthcare">All healthcare projects</a></p>
        <img class="room-thumb" src="{{ base_path }}/images/healthcare.png" alt="" loading="lazy">
      </details>
    </div>
  </article>

  <article class="room" id="fin-inclusion">
    <div class="room__head"><h3>Financial Inclusion</h3><p class="room__role">West Africa</p></div>
    <div>
      <p class="room__outcome">Designed feature phone applications that provided financial services to unbanked individuals, and conducted research to understand financial behaviour of the end users in West Africa.</p>
      <dl class="facts"><dt>focus</dt><dd>Feature phone apps, user research</dd></dl>
      <details>
        <summary>Inside the room</summary>
        <ul class="plain">
          {% for p in site.fin %}<li><a href="{{ base_path }}{{ p.url }}">{{ p.title }}</a></li>{% endfor %}
        </ul>
        <p><a href="{{ base_path }}/fin">All financial inclusion projects</a></p>
        <img class="room-thumb" src="{{ base_path }}/images/fin_inclusion_1.png" alt="" loading="lazy">
      </details>
    </div>
  </article>

  <article class="room" id="civic-media">
    <div class="room__head"><h3>Civic Media</h3><p class="room__role">Country Lead, Code for Sierra Leone</p></div>
    <div>
      <p class="room__outcome">Built citizen engagement tools that aimed to empower civic society by providing platforms for people to report civic issues to their elected representatives.</p>
      <dl class="facts"><dt>focus</dt><dd>Citizen reporting platforms</dd></dl>
      <details>
        <summary>Inside the room</summary>
        <ul class="plain">
          {% for p in site.civicmedia %}<li><a href="{{ base_path }}{{ p.url }}">{{ p.title }}</a></li>{% endfor %}
        </ul>
        <p><a href="{{ base_path }}/civicmedia">All civic media projects</a></p>
        <img class="room-thumb" src="{{ base_path }}/images/civic_media_2.png" alt="" loading="lazy">
      </details>
    </div>
  </article>

  <article class="room" id="open-data">
    <div class="room__head"><h3>Open Data</h3><p class="room__role">Sierra Leone and Liberia</p></div>
    <div>
      <p class="room__outcome">Consulted the governments of Sierra Leone and Liberia on running nationwide open data programs, and worked under the Code for Africa umbrella to encourage uptake of open data processes amongst government departments in West Africa.</p>
      <dl class="facts"><dt>focus</dt><dd>Open data programs, government consulting</dd></dl>
      <details>
        <summary>Inside the room</summary>
        <ul class="plain">
          {% for p in site.opendata %}<li><a href="{{ base_path }}{{ p.url }}">{{ p.title }}</a></li>{% endfor %}
        </ul>
        <p><a href="{{ base_path }}/opendata">All open data projects</a></p>
        <img class="room-thumb" src="{{ base_path }}/images/open_data.png" alt="" loading="lazy">
      </details>
    </div>
  </article>

  <article class="room" id="water-sanitation">
    <div class="room__head"><h3>Water &amp; Sanitation</h3><p class="room__role">Pakistan and Sierra Leone</p></div>
    <div>
      <p class="room__outcome">Designed and implemented services for enhancing access to water and sanitation in Pakistan and Sierra Leone.</p>
      <dl class="facts"><dt>focus</dt><dd>Service design and implementation</dd></dl>
      <details>
        <summary>Inside the room</summary>
        <ul class="plain">
          {% for p in site.sanitation %}<li><a href="{{ base_path }}{{ p.url }}">{{ p.title }}</a></li>{% endfor %}
        </ul>
        <p><a href="{{ base_path }}/watersanitation">All water and sanitation projects</a></p>
        <img class="room-thumb" src="{{ base_path }}/images/water_sanitation.png" alt="" loading="lazy">
      </details>
    </div>
  </article>

  <article class="room" id="e-government">
    <div class="room__head"><h3>E Government</h3><p class="room__role">Government ministries</p></div>
    <div>
      <p class="room__outcome">Developed a portal to track freedom of information requests sent to various government ministries.</p>
      <dl class="facts"><dt>focus</dt><dd>Freedom of information tracking portal</dd></dl>
      <details>
        <summary>Inside the room</summary>
        <ul class="plain">
          {% for p in site.egov %}<li><a href="{{ base_path }}{{ p.url }}">{{ p.title }}</a></li>{% endfor %}
        </ul>
        <p><a href="{{ base_path }}/egov">All e-government projects</a></p>
        <img class="room-thumb" src="{{ base_path }}/images/e-gov.png" alt="" loading="lazy">
      </details>
    </div>
  </article>
</section>
