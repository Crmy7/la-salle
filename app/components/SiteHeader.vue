<template>
  <header class="header" data-header>
    <div class="header__inner">
      <NuxtLink to="/" class="header__logo" aria-label="La Salle, retour à l'accueil">
        <img src="/assets/img/logo-noir.png" alt="La Salle" class="header__logo-img" >
      </NuxtLink>
      <nav class="header__nav" aria-label="Navigation principale">
        <NuxtLink
          v-for="link in nav"
          :key="link.to"
          :to="link.to"
          class="header__link"
          data-hover-line
        >{{ link.label }}</NuxtLink>
      </nav>
      <div class="header__right">
        <NuxtLink to="/contact" class="btn btn--small" data-magnetic>
          <span class="btn__label">Nous rejoindre</span>
        </NuxtLink>
        <button
          class="header__burger"
          aria-label="Ouvrir le menu"
          :aria-expanded="String(menu.open.value)"
          @click="menu.toggle()"
        >
          <span class="header__burger-line" />
          <span class="header__burger-line" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { getLenis } from '~/composables/useScroll'

const menu = useMenu()

const nav = [
  { to: '/prestations', label: 'Prestations' },
  { to: '/tarifs', label: 'Tarifs' },
  { to: '/planning', label: 'Planning' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

let lastY = 0
let detach: (() => void) | null = null

onMounted(() => {
  const header = document.querySelector('[data-header]')
  if (!header) return

  const onScroll = (y: number) => {
    header.classList.toggle('is-solid', y > 60 && !menu.open.value)
    if (y > 200 && y > lastY + 4) header.classList.add('is-hidden')
    else if (y < lastY - 4 || y <= 200) header.classList.remove('is-hidden')
    lastY = y
  }

  const lenis = getLenis()
  if (lenis) {
    const cb = ({ scroll }: { scroll: number }) => onScroll(scroll)
    lenis.on('scroll', cb)
    detach = () => lenis.off('scroll', cb)
  } else {
    const cb = () => onScroll(window.scrollY)
    window.addEventListener('scroll', cb, { passive: true })
    detach = () => window.removeEventListener('scroll', cb)
  }

  watch(menu.open, (isOpen) => {
    if (isOpen) header.classList.remove('is-hidden', 'is-solid')
  })
})

onBeforeUnmount(() => detach?.())
</script>
