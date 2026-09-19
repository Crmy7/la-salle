import { animate } from 'motion'

/** Boutons magnétiques : ressorts physiques motion.dev.
 *  Amortissement critique (damping ≥ 2√stiffness) : le bouton suit le curseur
 *  et revient en place sans dépasser ni rebondir. */
export function initMagnetic(reduced: boolean) {
  if (reduced || !window.matchMedia('(pointer: fine)').matches) return

  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    const node = el as HTMLElement
    const label = node.querySelector('.btn__label')

    node.addEventListener('mousemove', (e) => {
      const r = node.getBoundingClientRect()
      const dx = ((e as MouseEvent).clientX - r.left - r.width / 2) / (r.width / 2)
      const dy = ((e as MouseEvent).clientY - r.top - r.height / 2) / (r.height / 2)
      animate(node, { x: dx * 10, y: dy * 8 }, { type: 'spring', stiffness: 300, damping: 36 })
      if (label) animate(label, { x: dx * 5, y: dy * 4 }, { type: 'spring', stiffness: 320, damping: 36 })
    })

    node.addEventListener('mouseleave', () => {
      animate(node, { x: 0, y: 0 }, { type: 'spring', stiffness: 220, damping: 30 })
      if (label) animate(label, { x: 0, y: 0 }, { type: 'spring', stiffness: 240, damping: 31 })
    })
  })
}
