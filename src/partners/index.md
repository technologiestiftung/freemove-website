---
layout: layouts/wrapper.liquid
title: Projektpartner:innen
permalink: /partners/
---

<h1 class="text-green"> Projektpartner:innen </h1>

<div class="relative text-green">

<div class="hidden md:block absolute h-full w-36 pt-18" style="right: 105%">
  <div class="sticky" style="top: 6rem;">
  <a href="#dlr">
    <p class="text-green mb-4 text-right text-base">{{ schools.dlr.de }}</p>
  </a>
  <a href="#htw">
    <p class="text-green mb-4 text-right text-base">{{ schools.htw.de }}</p>
  </a>
  <a href="#tub">
    <p class="text-green mb-4 text-right text-base">{{ schools.tub.de }}</p>
  </a>
  <a href="#udk">
    <p class="text-green mb-4 text-right text-base">{{ schools.udk.de }}</p>
  </a>
  <a href="#tsb">
    <p class="text-green mb-4 text-right text-base">{{ schools.tsb.de }}</p>
  </a>
</div>
</div>

{% include ./dlr/school.md %}
{% include ./htw/school.md %}
{% include ./tub/school.md %}
{% include ./udk/school.md %}
{% include ./tsb/school.md %}

</div>
