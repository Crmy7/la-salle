<template>
  <section class="acces section--light">
    <div class="container">
      <h2 class="section-title" data-title-reveal>Une offre accessible<br >et adaptée à tous</h2>
      <ul class="acces__list">
        <li v-for="l in regles" :key="l" class="acces__item" data-reveal-up>
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
