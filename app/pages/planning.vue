<template>
  <main class="page">
    <PageHeader
      title="Planning"
      intro="Des cours du matin au soir, six jours sur sept. Réservez votre place depuis l'application de la salle. En dehors des cours, le plateau et la box restent en accès libre de 5h00 à 23h00."
      image="/assets/img/bw/anneaux.jpg"
      image-alt="La salle de La Salle"
    />

    <section class="planning-page section--light">
      <div class="container">
        <div class="ptabs" role="tablist" aria-label="Type de planning">
          <button
            v-for="t in onglets"
            :key="t.id"
            class="ptab"
            :class="{ 'is-active': actif === t.id }"
            role="tab"
            :aria-selected="actif === t.id"
            @click="actif = t.id"
          >
            {{ t.label }}
          </button>
        </div>

        <PlanningGrid :key="actif" :grille="grille" :legende="`Planning ${actif}`" />

        <p class="planning-page__note">
          Planning susceptible d'évoluer d'une saison à l'autre. Les cours collectifs et
          de Cross Training sont sur réservation, depuis l'application adhérent de La Salle.
          Les cours enfants et ados se prennent à l'année.
        </p>
      </div>
    </section>

    <SiteCta title="Réservez votre première séance." />
  </main>
</template>

<script setup lang="ts">
import { PLANNING_COLLECTIFS, PLANNING_CROSS } from '~/composables/useSiteData'

const onglets = [
  { id: 'collectifs', label: 'Cours collectifs' },
  { id: 'cross', label: 'Cross Training' },
]
const actif = ref('collectifs')
const grille = computed(() => (actif.value === 'cross' ? PLANNING_CROSS : PLANNING_COLLECTIFS))

useHead({
  title: 'Planning · La Salle',
  meta: [{ name: 'description', content: "Le planning des cours collectifs et de Cross Training de La Salle, à La Roche-sur-Foron." }],
})

usePageMotion()
</script>
