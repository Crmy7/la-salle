<template>
  <main class="page">
    <PageHeader
      title="Les news"
      intro="Les actualités de la salle : informations pratiques, horaires exceptionnels, événements et nouveautés."
      image="/assets/img/bw/salle-interieur.jpg"
      image-alt="L'intérieur de La Salle"
    />

    <section class="news section--light">
      <div class="container">
        <article class="nitem" data-reveal-up>
          <div class="nitem__meta">
            <span class="nitem__tag">Information pratique</span>
          </div>
          <div class="nitem__body">
            <h2 class="nitem__title">Horaires d'été</h2>
            <ul class="nitem__list">
              <li><strong>3 au 9 août</strong> · accueil fermé de 13h30 à 17h00.</li>
              <li><strong>10 au 16 août</strong> · fermeture complète pour travaux.</li>
              <li><strong>17 au 30 août</strong> · fermeture estivale, accès libre uniquement pour les adhérents actifs.</li>
            </ul>
          </div>
        </article>

        <div class="news__empty" data-reveal-up>
          <p>
            Les prochains articles paraîtront ici. En attendant, l'actualité du jour le jour est
            publiée sur notre compte Instagram.
          </p>
          <a :href="SALLE.instagramUrl" target="_blank" rel="noopener" class="btn btn--dark" data-magnetic>
            <span class="btn__label">Suivre {{ SALLE.instagram }}</span>
          </a>
        </div>
      </div>
    </section>

    <SiteCta title="Une question ? Passez nous voir." cta="Nous contacter" />
  </main>
</template>

<script setup lang="ts">
import { SALLE } from '~/composables/useSiteData'

useHead({
  title: 'Les news · La Salle',
  meta: [{ name: 'description', content: "Les actualités de La Salle, salle de sport à La Roche-sur-Foron." }],
})

usePageMotion()
</script>
