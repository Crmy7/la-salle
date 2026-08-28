<template>
  <section class="gallery" data-gallery>
    <div class="gallery__pin" data-gallery-pin>
      <div class="gallery__head">
        <h2 class="section-title section-title--light" data-title-reveal>La salle<br >en images</h2>
        <span class="gallery__progress"><span class="gallery__progress-bar" data-gallery-progress /></span>
      </div>
      <div class="gallery__track" data-gallery-track>
        <figure v-for="g in GALERIE" :key="g.img" class="gallery__item">
          <img :src="g.img" :alt="g.alt" >
          <figcaption>{{ g.legende }}</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GALERIE } from '~/composables/useSiteData'
</script>
