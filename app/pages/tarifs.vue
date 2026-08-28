<template>
  <main class="page">
    <PageHeader
      title="Tarifs"
      intro="Trois formules d'abonnement, des pass à la séance et des tarifs enfants. Frais d'inscription de 25 €, comprenant l'accès à l'application de la salle et la création de votre compte."
      image="/assets/img/bw/rack-sombre.jpg"
      image-alt="Le plateau de musculation"
    />

    <section class="tgrids section--light">
      <div class="container">
        <div v-for="g in ABONNEMENTS" :key="g.slug" class="tgrid" data-reveal-up>
          <div class="tgrid__head">
            <h2 class="tgrid__title" :class="{ 'tgrid__title--premium': g.premium }">{{ g.titre }}</h2>
            <p class="tgrid__desc">{{ g.desc }}</p>
          </div>
          <div class="tgrid__scroll">
            <table class="ttable">
              <thead>
                <tr>
                  <th scope="col">Durée</th>
                  <th v-for="c in g.colonnes" :key="c" scope="col">{{ c }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="l in g.lignes" :key="l.duree">
                  <th scope="row">Abonnement {{ l.duree }}</th>
                  <td v-for="(p, i) in l.prix" :key="i"><span>{{ p }}</span> <em>/ mois</em></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="tscroll-hint">Faites glisser le tableau pour voir toutes les colonnes</p>
        </div>
      </div>
    </section>

    <section class="tpass">
      <div class="container">
        <h2 class="section-title section-title--light" data-title-reveal>À la séance</h2>

        <div class="tpass__grid">
          <div class="tpass__block" data-reveal-up>
            <h3 class="tpass__title">Fitness Musculation & Cross Training</h3>
            <div class="tgrid__scroll">
              <table class="ttable ttable--dark">
                <thead>
                  <tr>
                    <th scope="col" />
                    <th v-for="c in PASS_SEANCE.colonnes" :key="c" scope="col">{{ c }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="l in PASS_SEANCE.lignes" :key="l.duree">
                    <th scope="row">{{ l.duree }}<em v-if="l.note">{{ l.note }}</em></th>
                    <td v-for="(p, i) in l.prix" :key="i"><span>{{ p }}</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="tscroll-hint tscroll-hint--dark">Faites glisser le tableau pour voir toutes les colonnes</p>
            <p class="tpass__note">{{ PASS_SEANCE.mention }}</p>
          </div>

          <div class="tpass__block" data-reveal-up>
            <h3 class="tpass__title">Squash</h3>
            <div class="tgrid__scroll">
              <table class="ttable ttable--dark">
                <thead>
                  <tr>
                    <th scope="col" />
                    <th v-for="c in PASS_SQUASH.colonnes" :key="c" scope="col">{{ c }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="l in PASS_SQUASH.lignes" :key="l.duree">
                    <th scope="row">{{ l.duree }}<em v-if="l.note">{{ l.note }}</em></th>
                    <td v-for="(p, i) in l.prix" :key="i"><span>{{ p }}</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="tscroll-hint tscroll-hint--dark">Faites glisser le tableau pour voir toutes les colonnes</p>
            <p class="tpass__note">{{ PASS_SQUASH.mention }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="tother section--light">
      <div class="container">
        <h2 class="section-title" data-title-reveal>Enfants & saison</h2>
        <ul class="tother__grid">
          <li v-for="a in AUTRES_ABOS" :key="a.titre" class="ocard" data-reveal-up>
            <h3 class="ocard__title">{{ a.titre }}</h3>
            <p class="ocard__periode">{{ a.periode }}</p>
            <ul class="ocard__lines">
              <li v-for="l in a.lignes" :key="l">{{ l }}</li>
            </ul>
          </li>
        </ul>
        <p class="tother__note">
          Frais d'inscription : {{ SALLE.inscription }} €, comprenant l'accès à l'application
          de la salle et la création de votre compte.
        </p>
      </div>
    </section>

    <SiteCta title="Une question sur les formules ?" cta="Nous contacter" />
  </main>
</template>

<script setup lang="ts">
import { ABONNEMENTS, PASS_SEANCE, PASS_SQUASH, AUTRES_ABOS, SALLE } from '~/composables/useSiteData'

useHead({
  title: 'Tarifs · La Salle',
  meta: [{ name: 'description', content: "Abonnements Fitness Musculation, Cross Training et Premium, pass à la séance, squash et tarifs enfants à La Roche-sur-Foron." }],
})

usePageMotion()
</script>
