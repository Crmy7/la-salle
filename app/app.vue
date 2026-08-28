<template>
  <div>
    <SitePreloader />
    <SiteHeader />
    <SiteMenu />
    <NuxtPage />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { playPreloader } from '~/composables/useAnimations'
import { prefersReducedMotion } from '~/composables/useScroll'
import { setPreloaderGate } from '~/composables/usePageMotion'

/* Le rideau appartient à l'application, pas à une page :
   il ne doit pas rejouer à chaque navigation interne. */
onMounted(() => {
  const el = document.querySelector('.preloader') as HTMLElement | null
  setPreloaderGate(playPreloader(el, prefersReducedMotion()))
})
</script>
