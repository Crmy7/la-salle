<template>
  <main class="page">
    <PageHeader
      title="Prestations"
      intro="Un plateau de musculation en accès libre, une box de cross training, plus de vingt cours collectifs par semaine, une salle de squash et des cours pour les enfants dès la marche."
      image="/assets/img/bw/hero-plateau.jpg"
      image-alt="Le plateau de musculation de La Salle"
    />

    <section class="pmos section--light">
      <div class="container">
        <!-- Mosaïque asymétrique : les tuiles n'ont ni la même taille ni le
             même alignement vertical, ce qui compose la page au lieu de
             dérouler cinq blocs identiques. -->
        <div class="pmos__grid">
          <NuxtLink
            v-for="p in PRESTATIONS"
            :key="p.slug"
            :to="`/prestations/${p.slug}`"
            class="ptile"
            :class="`ptile--${p.slug}`"
            data-reveal-up
          >
            <span class="ptile__media">
              <img :src="p.img" :alt="p.nom" loading="lazy" >
              <span class="ptile__veil" />
            </span>

            <span class="ptile__num">{{ p.num }}</span>

            <span class="ptile__foot">
              <span class="ptile__name">{{ p.nom }}</span>
              <span class="ptile__meta">{{ p.meta }}</span>
            </span>

            <span class="ptile__go" aria-hidden="true">→</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <SiteCta title="Venez essayer, on vous fait visiter." />
  </main>
</template>

<script setup lang="ts">
import { PRESTATIONS } from '~/composables/useSiteData'

useHead({
  title: 'Prestations · La Salle',
  meta: [{ name: 'description', content: 'Musculation, cross training, cours collectifs, squash et cours enfants à La Roche-sur-Foron.' }],
})

usePageMotion()
</script>
