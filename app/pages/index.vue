<template>
  <main class="page">
    <HomeHero />
    <HomeBand />
    <HomeManifesto />
    <HomeStats />
    <HomeAcces />
    <HomePrestations />
    <HomeGallery />
    <HomePlanning />
    <div class="dark-run">
      <HomeQuote />
      <HomeTarifs />
    </div>
    <SiteCta />
  </main>
</template>

<script setup lang="ts">
import {
  setHeroInitial,
  heroIntro,
  initMarquee,
  initPrestations,
  initGallery,
} from '~/composables/useAnimations'
import { prefersReducedMotion } from '~/composables/useScroll'

/* Le hero est masqué avant même l'ouverture du rideau */
if (import.meta.client && !prefersReducedMotion()) {
  onMounted(() => setHeroInitial())
}

usePageMotion((reduced) => {
  heroIntro(reduced)
  initMarquee(reduced)
  initPrestations(reduced)
  initGallery(reduced)
})
</script>
