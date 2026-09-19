<template>
  <section class="tarifs">
    <div class="container">
      <h2 class="section-title section-title--light" data-title-reveal>Les formules</h2>
      <div class="tarifs__grid">
        <NuxtLink
          v-for="f in FORMULES"
          :key="f.nom"
          to="/tarifs"
          class="tcard"
          :class="{ 'tcard--premium': f.premium }"
          data-tcard
        >
          <h3 class="tcard__name" v-html="f.nom.replace('\n', '<br>')" />
          <p class="tcard__desc">{{ f.desc }}</p>
          <span class="tcard__cta">Voir le tarif <span aria-hidden="true">→</span></span>
        </NuxtLink>
      </div>
      <p class="tarifs__note">
        Frais d'inscription : 25&nbsp;€, application de la salle et création de compte comprises.
        Formules squash, kids et ados sur la page tarifs.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FORMULES } from '~/composables/useSiteData'
</script>
