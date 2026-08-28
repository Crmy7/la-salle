import {
  initReveals,
  initCounters,
  initFooter,
  fitFooterWordmark,
  killAll,
} from './useAnimations'
import { prefersReducedMotion, ScrollTrigger } from './useScroll'
import { initMagnetic } from './useMagnetic'

/* Le preloader ne joue qu'une fois, au tout premier rendu.
   Les pages suivantes attendent simplement qu'il soit terminé. */
let gate: Promise<void> = Promise.resolve()
export function setPreloaderGate(p: Promise<void>) {
  gate = p
}
export function preloaderGate() {
  return gate
}

/** Animations communes à toutes les pages. `extra` reçoit l'état reduced-motion. */
export function usePageMotion(extra?: (reduced: boolean) => void) {
  const onLoad = () => ScrollTrigger.refresh()

  onMounted(async () => {
    const reduced = prefersReducedMotion()

    initMagnetic(reduced)
    await document.fonts.ready
    await gate

    initReveals(reduced)
    initCounters(reduced)
    initFooter(reduced)
    fitFooterWordmark()
    extra?.(reduced)

    ScrollTrigger.refresh()
    window.addEventListener('load', onLoad)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('load', onLoad)
    killAll()
  })
}
