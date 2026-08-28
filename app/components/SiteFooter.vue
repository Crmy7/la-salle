<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__col footer__col--brand">
          <img src="/assets/img/logo-noir.png" alt="La Salle, Stronger Everyday" class="footer__logo" >
        </div>
        <div class="footer__col">
          <h4 class="footer__head">La salle</h4>
          <nav class="footer__nav">
            <NuxtLink v-for="l in nav" :key="l.to" :to="l.to" data-hover-line>{{ l.label }}</NuxtLink>
          </nav>
        </div>
        <div class="footer__col">
          <h4 class="footer__head">Contact</h4>
          <p>{{ SALLE.adresse[0] }}<br >{{ SALLE.adresse[1] }}<br >{{ SALLE.adresse[2] }}</p>
          <p>
            <a :href="`tel:${SALLE.telHref}`" data-hover-line>{{ SALLE.tel }}</a><br >
            <a :href="`mailto:${SALLE.email}`" data-hover-line>{{ SALLE.email }}</a><br >
            <a :href="SALLE.instagramUrl" target="_blank" rel="noopener" data-hover-line>{{ SALLE.instagram }}</a>
          </p>
        </div>
        <div class="footer__col">
          <h4 class="footer__head">Horaires accueil</h4>
          <p><span v-for="(h, i) in SALLE.accueil" :key="i">{{ h }}<br ></span></p>
          <p class="footer__access">{{ SALLE.accesLibre }}<br >tous les jours</p>
        </div>
      </div>
      <div class="footer__legal">
        <span>© 2026 La Salle · Stronger Everyday</span>
        <span><a href="#" data-hover-line>Mentions légales</a> · <a href="#" data-hover-line>Politique de confidentialité</a></span>
      </div>
      <div class="footer__wordmark" aria-hidden="true">
        <span data-footer-wordmark>LA SALLE</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { SALLE } from '~/composables/useSiteData'

const nav = [
  { to: '/prestations', label: 'Prestations' },
  { to: '/tarifs', label: 'Tarifs' },
  { to: '/planning', label: 'Planning' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]
</script>
