<template>
  <section class="prestations">
    <div class="container">
      <h2 class="section-title" data-title-reveal>Prestations</h2>
    </div>
    <ul class="plist" data-plist>
      <li v-for="p in PRESTATIONS" :key="p.slug" class="plist__item" data-plist-item :data-img="p.img">
        <NuxtLink :to="`/prestations/${p.slug}`" class="plist__row">
          <span class="plist__num">{{ p.num }}</span>
          <span class="plist__name">{{ p.nom }}</span>
          <span class="plist__meta">{{ p.meta }}</span>
          <span class="plist__arrow" aria-hidden="true">→</span>
        </NuxtLink>
      </li>
    </ul>
    <div class="plist__preview" data-plist-preview aria-hidden="true">
      <img src="/assets/img/training-femme.jpg" alt="" data-plist-preview-img >
    </div>
  </section>
</template>

<script setup lang="ts">
import { PRESTATIONS } from '~/composables/useSiteData'
</script>
