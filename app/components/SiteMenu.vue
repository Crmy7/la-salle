<template>
  <div ref="root" class="menu" :class="{ 'is-open': menu.open.value }" :aria-hidden="String(!menu.open.value)">
    <div class="menu__bg" />
    <div class="menu__inner">
      <nav class="menu__nav" aria-label="Menu">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="menu__link"
          @click="menu.close()"
        >
          <span class="menu__word">{{ link.label }}</span>
        </NuxtLink>
      </nav>
      <div class="menu__footer">
        <div class="menu__col menu__col--status">
          <p>{{ status }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from '~/composables/useScroll'

const menu = useMenu()
const { status } = useOpeningStatus()
const root = ref<HTMLElement | null>(null)
let tl: gsap.core.Timeline | null = null

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/prestations', label: 'Prestations' },
  { to: '/tarifs', label: 'Tarifs' },
  { to: '/planning', label: 'Planning' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

onMounted(() => {
  const el = root.value
  if (!el) return

  const bg = el.querySelector('.menu__bg')
  const words = el.querySelectorAll('.menu__word')
  const foot = el.querySelector('.menu__footer')

  gsap.set(words, { yPercent: 120 })
  gsap.set(foot, { opacity: 0 })

  tl = gsap
    .timeline({ paused: true })
    .to(bg, { yPercent: 100, duration: 0.85, ease: 'expo.inOut' })
    .to(words, { yPercent: 0, duration: 0.75, stagger: 0.055, ease: 'expo.out' }, '-=0.25')
    .to(foot, { opacity: 1, duration: 0.5 }, '<0.3')

  watch(menu.open, (isOpen) => {
    if (isOpen) tl?.timeScale(1).play()
    else tl?.timeScale(1.45).reverse()
  })

  window.addEventListener('keydown', onKey)
})

const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && menu.open.value) menu.close()
}

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  tl?.kill()
})
</script>
