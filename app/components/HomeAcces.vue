<template>
  <section class="acces section--light">
    <div class="container">
      <h2 class="section-title" data-title-reveal>Une offre accessible<br >et adaptée à tous</h2>
      <ul class="acces__list">
        <li v-for="(l, i) in regles" :key="i" class="acces__item" data-reveal-up>
          <span class="acces__num">{{ String(i + 1).padStart(2, '0') }}</span>
          <p>{{ l }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const regles = [
  "Un accès à nos différents espaces et activités selon la formule d'abonnement choisie.",
  'Accessible dès 17 ans révolus pour le plateau de musculation et les cours collectifs.',
  "Accès libre dès 18 ans, hors horaires d'accueil, sur réservation et dans la limite de 19 personnes simultanément.",
]
</script>
