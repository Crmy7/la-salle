<template>
  <section class="hero" data-hero>
    <div class="hero__media" data-hero-media>
      <img
        src="/assets/img/bw/coach.jpg"
        alt="Athlète en squat barre sur le plateau"
        class="hero__img"
        data-hero-img
      >
      <div class="hero__veil" />
    </div>
    <div class="hero__content">
      <h1 class="hero__title" aria-label="La Salle">
        <span class="hero__title-line"><span class="hero__title-word" data-hero-line>LA</span></span>
        <span class="hero__title-line hero__title-line--indent">
          <span class="hero__title-word" data-hero-line>SALLE<em class="hero__dot" aria-hidden="true">.</em></span>
        </span>
      </h1>
      <div class="hero__desc" data-hero-desc>
        <p>
          Salle de sport indépendante à La&nbsp;Roche-sur-Foron.
        </p>
        <div class="hero__actions">
          <NuxtLink to="/contact" class="btn btn--primary" data-magnetic>
            <span class="btn__label">Réserver une séance d'essai</span>
          </NuxtLink>
          <NuxtLink to="/prestations" class="link-arrow" data-hover-line>Découvrir la salle</NuxtLink>
        </div>
      </div>
    </div>
    <div class="hero__bar" data-hero-bar>
      <span class="hero__bar-item">La Roche-sur-Foron, Haute-Savoie</span>
      <span class="hero__bar-item hero__bar-item--live">
        <span class="live-dot" :class="{ 'is-closed': !isOpen }" />
        <span>{{ status }}</span>
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
const { isOpen, status } = useOpeningStatus()
</script>
