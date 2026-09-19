import { gsap, ScrollTrigger, SplitText } from './useScroll'

/* Tout ce qui survit à un démontage de page (écouteurs window, callbacks du
   ticker GSAP, instances SplitText) doit être enregistré ici, sinon chaque
   navigation en empile une nouvelle copie qui tourne pour toujours. */
const disposers: Array<() => void> = []
function onDispose(fn: () => void) {
  disposers.push(fn)
}

/* ============================================================
   PRELOADER
   ============================================================ */
/** `onFini` est appelé quand le rideau a totalement disparu. La promesse,
 *  elle, se résout un peu avant : l'intro du hero doit recouvrir la sortie. */
export function playPreloader(
  el: HTMLElement | null,
  reduced: boolean,
  onFini?: () => void
): Promise<void> {
  if (!el) {
    onFini?.()
    return Promise.resolve()
  }

  if (reduced) {
    el.style.display = 'none'
    onFini?.()
    return Promise.resolve()
  }

  const marks = el.querySelectorAll('[data-preloader-mark]')
  const fill = el.querySelector('[data-preloader-fill]')
  const city = el.querySelector('[data-preloader-city]')

  return new Promise((resolve) => {
    const WIPE_AT = 0.62
    const WIPE = 0.95
    const out = WIPE_AT + WIPE + 0.22

    /* Le translateY(105%) du CSS est lu en pixels par GSAP : on reprend la main
       sur la transformation avant d'animer, sinon le décalage n'est jamais annulé. */
    gsap.set(marks, { y: 0, yPercent: 105 })

    gsap
      .timeline()
      /* Le nom se lève derrière son masque */
      .to(marks, { yPercent: 0, duration: 0.85, ease: 'expo.out' }, 0.05)
      .to(city, { opacity: 1, duration: 0.5, ease: 'power2.out' }, 0.35)
      /* Le rouge balaie le nom et le passe en négatif */
      .to(fill, { clipPath: 'inset(0 0% 0 0)', duration: WIPE, ease: 'expo.inOut' }, WIPE_AT)
      /* Sortie : le nom file vers le haut, la surface se retire */
      .to(marks, { yPercent: -105, duration: 0.8, ease: 'power3.in' }, out)
      .to(city, { opacity: 0, duration: 0.3, ease: 'power2.in' }, out)
      .to(el, { clipPath: 'inset(0 0 100% 0)', duration: 0.9, ease: 'expo.inOut' }, out + 0.18)
      .call(resolve as () => void, [], out + 0.55)
      .set(el, { display: 'none' })
      .call(() => onFini?.())
  })
}

/* ============================================================
   HERO
   ============================================================ */
export function setHeroInitial() {
  gsap.set('[data-hero-line]', { yPercent: 112 })
  gsap.set('[data-hero-desc]', { opacity: 0 })
  gsap.set('[data-hero-bar]', { opacity: 0 })
}

export function heroIntro(reduced: boolean) {
  const lines = document.querySelectorAll('[data-hero-line]')
  if (!lines.length || reduced) return

  gsap
    .timeline()
    .to('[data-hero-img]', { scale: 1.04, duration: 2.4, ease: 'expo.out' }, 0)
    .to(lines, { yPercent: 0, duration: 1.25, stagger: 0.14, ease: 'expo.out' }, 0.05)
    .to('[data-hero-desc]', { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 0.75)
    .to('[data-hero-bar]', { opacity: 1, duration: 0.8 }, 1.05)

  gsap.to('[data-hero-media]', {
    yPercent: 18,
    ease: 'none',
    scrollTrigger: { trigger: '[data-hero]', start: 'top top', end: 'bottom top', scrub: true },
  })
  gsap.to('.hero__content', {
    yPercent: -8,
    ease: 'none',
    scrollTrigger: { trigger: '[data-hero]', start: '40% top', end: 'bottom top', scrub: true },
  })
}

/* ============================================================
   RÉVÉLATIONS
   ============================================================ */
export function initReveals(reduced: boolean) {
  if (reduced) return

  document.querySelectorAll('[data-title-reveal]').forEach((el) => {
    const split = new SplitText(el, { type: 'lines', mask: 'lines', linesClass: 'line' })
    onDispose(() => split.revert())
    gsap.set(split.lines, { yPercent: 115 })
    gsap.to(split.lines, {
      yPercent: 0,
      duration: 1.1,
      stagger: 0.09,
      ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    })
  })

  /* Aucune révélation ne joue sur l'opacité : le texte reste à plein
     contraste à chaque instant, c'est le masque qui le cache. */
  document.querySelectorAll('[data-reveal-lines]').forEach((el) => {
    const split = new SplitText(el, { type: 'lines', mask: 'lines' })
    onDispose(() => split.revert())
    gsap.set(split.lines, { yPercent: 110 })
    gsap.to(split.lines, {
      yPercent: 0,
      duration: 0.9,
      stagger: 0.07,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    })
  })

  document.querySelectorAll('[data-mask]').forEach((el) => {
    const img = el.querySelector('img')
    gsap
      .timeline({ scrollTrigger: { trigger: el, start: 'top 80%', once: true } })
      .to(el, { clipPath: 'inset(0% 0 0% 0)', duration: 1.3, ease: 'expo.inOut' })
      .to(img, { scale: 1, duration: 1.3, ease: 'expo.inOut' }, '<')
  })

  document.querySelectorAll('[data-parallax-img]').forEach((img) => {
    gsap.fromTo(
      img,
      { yPercent: -6 },
      {
        yPercent: 6,
        ease: 'none',
        scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: true },
      }
    )
  })

  const rows = [
    ...document.querySelectorAll('[data-planning-row]'),
    ...document.querySelectorAll('[data-plist-item]'),
    ...document.querySelectorAll('[data-tcard]'),
    ...document.querySelectorAll('[data-reveal-up]'),
  ]
  /* Le bloc monte et se découvre du haut vers le bas. Le clip ne coupe
     que verticalement (un tableau qui déborde à l'écran reste entier) et
     il est retiré à la fin pour ne rien rogner (focus, survols). */
  rows.forEach((row) => {
    gsap.fromTo(
      row,
      { y: 44, clipPath: 'inset(0% -50vw 100% -50vw)' },
      {
        y: 0,
        clipPath: 'inset(0% -50vw 0% -50vw)',
        duration: 0.85,
        ease: 'power3.out',
        clearProps: 'clipPath',
        scrollTrigger: { trigger: row, start: 'top 92%', once: true },
      }
    )
  })
}

/* ============================================================
   PRESTATIONS · aperçu qui suit le curseur
   ============================================================ */
export function initPrestations(reduced: boolean) {
  const list = document.querySelector('[data-plist]')
  const preview = document.querySelector('[data-plist-preview]') as HTMLElement
  const previewImg = document.querySelector('[data-plist-preview-img]') as HTMLImageElement
  if (!list || !preview) return

  const fine = window.matchMedia('(pointer: fine)').matches
  if (reduced || !fine || window.innerWidth < 761) return

  list.querySelectorAll('[data-plist-item]').forEach((item) => {
    const src = (item as HTMLElement).dataset.img
    if (src) new Image().src = src
  })

  const xTo = gsap.quickTo(preview, 'x', { duration: 0.55, ease: 'power3.out' })
  const yTo = gsap.quickTo(preview, 'y', { duration: 0.55, ease: 'power3.out' })
  let visible = false

  /* Dernière position connue du curseur. Le scroll peut faire passer une ligne
     sous une souris immobile : sans ces coordonnées, l'aperçu s'ouvrirait
     depuis 0,0, c'est-à-dire en haut à gauche de l'écran. */
  let lastX = window.innerWidth / 2
  let lastY = window.innerHeight / 2

  const cible = (x: number, y: number) => [x + 30, y - preview.offsetHeight / 2] as const

  const onMove = (e: MouseEvent) => {
    lastX = e.clientX
    lastY = e.clientY
    const [tx, ty] = cible(lastX, lastY)
    xTo(tx)
    yTo(ty)
  }
  window.addEventListener('mousemove', onMove)
  onDispose(() => window.removeEventListener('mousemove', onMove))

  list.querySelectorAll('[data-plist-item]').forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
      const src = (item as HTMLElement).dataset.img
      if (src && previewImg.getAttribute('src') !== src) previewImg.setAttribute('src', src)

      const me = e as MouseEvent
      if (typeof me.clientX === 'number' && me.clientX !== 0) {
        lastX = me.clientX
        lastY = me.clientY
      }

      if (!visible) {
        visible = true
        /* Le second argument de quickTo fixe aussi la valeur de départ :
           l'aperçu se place d'un coup sous le curseur au lieu d'y voler. */
        const [tx, ty] = cible(lastX, lastY)
        xTo(tx, tx)
        yTo(ty, ty)
        gsap.to(preview, { autoAlpha: 1, duration: 0.3, ease: 'power2.out' })
      }
    })
  })

  list.addEventListener('mouseleave', () => {
    visible = false
    gsap.to(preview, { autoAlpha: 0, duration: 0.25, ease: 'power2.in' })
  })

  gsap.set(preview, { autoAlpha: 0 })
}

/* ============================================================
   GALERIE HORIZONTALE ÉPINGLÉE
   ============================================================ */
export function initGallery(reduced: boolean) {
  const section = document.querySelector('[data-gallery]')
  const track = document.querySelector('[data-gallery-track]') as HTMLElement
  const progress = document.querySelector('[data-gallery-progress]') as HTMLElement
  if (!section || !track) return
  if (reduced || window.innerWidth < 761) return

  const getDistance = () => track.scrollWidth - window.innerWidth

  gsap.to(track, {
    x: () => -getDistance(),
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: () => `+=${getDistance()}`,
      pin: '[data-gallery-pin]',
      scrub: 0.8,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        if (progress) progress.style.transform = `scaleX(${self.progress})`
      },
    },
  })
}

/* ============================================================
   FOOTER : le mot « LA SALLE » occupe toute la largeur
   ============================================================ */
export function fitFooterWordmark() {
  const mark = document.querySelector('[data-footer-wordmark]') as HTMLElement
  if (!mark) return

  const fit = () => {
    const parent = mark.closest('.footer__wordmark') as HTMLElement
    if (!parent) return
    const avail = parent.clientWidth
    mark.style.fontSize = '100px'
    const w = mark.getBoundingClientRect().width
    if (w > 0) mark.style.fontSize = `${Math.floor((avail / w) * 100 * 0.995)}px`
    ScrollTrigger.refresh()
  }

  fit()
  let timer: ReturnType<typeof setTimeout>
  const onResize = () => {
    clearTimeout(timer)
    timer = setTimeout(fit, 250)
  }
  window.addEventListener('resize', onResize)
  onDispose(() => {
    window.removeEventListener('resize', onResize)
    clearTimeout(timer)
  })
}

/* ============================================================
   NETTOYAGE
   ============================================================ */
export function killAll() {
  /* L'ordre compte : chaque ScrollTrigger pose son propre écouteur resize et ne
     le retire que si son élément déclencheur existe encore. Revertir les
     SplitText d'abord détruirait ces éléments et laisserait les écouteurs
     derrière. On tue donc les ScrollTriggers en premier. */
  ScrollTrigger.getAll().forEach((t) => t.kill())
  gsap.globalTimeline.clear()

  disposers.splice(0).forEach((fn) => {
    try {
      fn()
    } catch {
      /* un disposer en échec ne doit pas bloquer les suivants */
    }
  })
}
