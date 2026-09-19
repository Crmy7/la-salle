<template>
  <main class="page">
    <HomeHero />
    <HomeManifesto />
    <HomeStats />
    <HomeAcces />
    <HomePrestations />
    <!-- Galerie masquée en attendant les photos définitives de la salle.
         Le composant et son CSS restent en place : décommenter cette ligne
         pour la réafficher, rien d'autre à faire. -->
    <!-- <HomeGallery /> -->
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
  initPrestations(reduced)
  initGallery(reduced)
})
</script>
