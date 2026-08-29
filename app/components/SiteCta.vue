<template>
  <section class="cta">
    <div class="cta__media">
      <img :src="image" :alt="imageAlt" data-parallax-img >
    </div>
    <div class="cta__veil" />

    <div class="container cta__inner">
      <h2 class="cta__title" data-title-reveal>{{ title }}</h2>

      <div class="cta__panel" data-reveal-up>
        <NuxtLink :to="to" class="btn btn--primary btn--full" data-magnetic>
          <span class="btn__label">{{ cta }}</span>
        </NuxtLink>

        <p>
          <span class="cta__phone-label">Ou appelez-nous</span>
          <a :href="`tel:${SALLE.telHref}`" class="cta__phone">{{ SALLE.tel }}</a>
        </p>

        <p class="cta__addr">
          {{ SALLE.adresse[0] }}<br >{{ SALLE.adresse[1] }}<br >{{ SALLE.adresse[2] }}
          <span class="cta__access">
            <em>Horaires d'accueil</em>
            <span v-for="h in SALLE.accueil" :key="h">{{ h }}</span>
          </span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SALLE } from '~/composables/useSiteData'

withDefaults(
  defineProps<{
    title?: string
    cta?: string
    to?: string
    image?: string
    imageAlt?: string
  }>(),
  {
    title: "Le plus dur, c'est de pousser la porte.",
    cta: "Réserver une séance d'essai",
    to: '/contact',
    image: '/assets/img/bw/squash-site.jpg',
    imageAlt: 'Séance de cross training dans la box de La Salle',
  }
)
</script>
