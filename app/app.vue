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
import { prefersReducedMotion, getLenis } from '~/composables/useScroll'
import { setPreloaderGate } from '~/composables/usePageMotion'

/* Le rideau appartient à l'application, pas à une page :
   il ne doit pas rejouer à chaque navigation interne. */
onMounted(() => {
  const el = document.querySelector('.preloader') as HTMLElement | null
  const lenis = getLenis()

  /* Le défilement est bloqué tant que le rideau est là. La classe couvre
     le cas sans Lenis (mouvement réduit) et le défilement tactile, que
     `pointer-events: none` sur le rideau laisserait passer. */
  document.documentElement.classList.add('is-loading')
  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'
  lenis?.stop()

  const relacher = () => {
    const html = document.documentElement
    html.classList.remove('is-loading')
    /* Le style en ligne est posé avant l'hydratation : Vue ne le gère pas,
       c'est ce qui le rend fiable là où une classe peut être écrasée. */
    html.style.overflow = ''
    document.body.style.overflow = ''
    lenis?.start()
  }

  /* Le défilement n'est rendu qu'une fois le rideau totalement disparu,
     pas dès que la promesse se résout. */
  setPreloaderGate(playPreloader(el, prefersReducedMotion(), relacher))
})
</script>
