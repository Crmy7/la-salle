import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'

let lenis: Lenis | null = null
let registered = false

export function registerGsap() {
  if (registered || import.meta.server) return
  gsap.registerPlugin(ScrollTrigger, SplitText)

  /* Sur mobile, masquer la barre d'adresse ou la barre d'outils change la
     hauteur de la fenêtre. Sans ce réglage, ScrollTrigger recalcule toutes
     ses positions à ce moment-là et le hero comme sa parallaxe sautent. */
  ScrollTrigger.config({ ignoreMobileResize: true })

  registered = true
}

export function initSmoothScroll(reduced: boolean) {
  if (import.meta.server || reduced) return null

  lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })

  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => lenis?.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)

  return lenis
}

export function destroySmoothScroll() {
  lenis?.destroy()
  lenis = null
}

export function getLenis() {
  return lenis
}

export function prefersReducedMotion() {
  if (import.meta.server) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export { gsap, ScrollTrigger, SplitText }
