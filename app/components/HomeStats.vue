<template>
  <section class="stats section--light">
    <div class="container">
      <ul class="stats__grid">
        <li v-for="s in stats" :key="s.label" class="stats__item">
          <span class="stats__value"><span :data-counter="s.value">0</span>{{ s.suffix }}</span>
          <span class="stats__label">{{ s.label }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: 5, suffix: 'h00', label: 'Première ouverture des portes, chaque matin' },
  { value: 23, suffix: 'h00', label: 'Dernières séries, chaque soir' },
  { value: 7, suffix: 'j/7', label: "Accès libre, toute l'année" },
  { value: 40, suffix: '+', label: 'Cours collectifs et cross chaque semaine' },
]
</script>
