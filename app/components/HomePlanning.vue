<template>
  <section class="planning section--light">
    <div class="container planning__grid">
      <div class="planning__left">
        <h2 class="section-title" data-title-reveal>Le planning</h2>
        <p data-reveal-lines>
          Des cours du matin au soir, six jours sur sept. Réservez votre place depuis
          l'application de la salle.
        </p>
        <NuxtLink to="/planning" class="btn btn--dark" data-magnetic>
          <span class="btn__label">Voir le planning complet</span>
        </NuxtLink>
      </div>
      <ul class="planning__list">
        <li v-for="c in COURS_APERCU" :key="c.nom" class="planning__row" data-planning-row>
          <span class="planning__course">{{ c.nom }}</span>
          <span class="planning__type">{{ c.type }}</span>
          <span class="planning__tag" :class="{ 'planning__tag--resa': c.resa }">
            {{ c.resa ? 'Sur réservation' : 'Accès libre' }}
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { COURS_APERCU } from '~/composables/useSiteData'
</script>
