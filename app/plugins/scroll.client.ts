import {
  registerGsap,
  initSmoothScroll,
  destroySmoothScroll,
  prefersReducedMotion,
  getLenis,
  lockViewportHeight,
} from '~/composables/useScroll'

export default defineNuxtPlugin((nuxtApp) => {
  document.documentElement.classList.add('js')
  registerGsap()
  lockViewportHeight()
  initSmoothScroll(prefersReducedMotion())

  /* Lenis tient sa propre position de défilement : sans remise à zéro
     explicite, un changement de page peut laisser le visiteur au milieu
     du document. Filet de sécurité pour tous les liens du site. */
  const router = useRouter()
  router.afterEach((to, from) => {
    if (to.path === from.path) return

    const haut = () => {
      const lenis = getLenis()
      if (lenis) lenis.scrollTo(0, { immediate: true })
      else window.scrollTo(0, 0)
    }

    haut()
    /* La cible d'une ancre n'existe qu'après le rendu de la nouvelle page */
    if (to.hash) {
      nextTick(() => {
        const cible = document.querySelector(to.hash) as HTMLElement | null
        if (!cible) return
        const lenis = getLenis()
        if (lenis) lenis.scrollTo(cible, { immediate: true, offset: -90 })
        else cible.scrollIntoView()
      })
    }
  })

  if (import.meta.hot) import.meta.hot.dispose(() => destroySmoothScroll())
})
