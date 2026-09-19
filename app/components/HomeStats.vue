<template>
  <section class="stats section--light">
    <div class="container stats__inner">
      <p class="stats__lead" data-reveal-lines>Accès libre de 5h00 à 23h00, 7 jours sur 7.</p>
      <div data-reveal-up>
        <h2 class="stats__label">Horaires de l'accueil</h2>
        <ul class="stats__hours">
          <li v-for="h in SALLE.accueil" :key="h">{{ h }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SALLE } from '~/composables/useSiteData'
</script>
