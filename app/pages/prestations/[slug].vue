<template>
  <main v-if="presta" class="page">
    <PageHeader
      :title="presta.nom"
      :intro="presta.intro"
      :image="presta.imgBw || presta.img"
      :image-alt="presta.nom"
    />

    <!-- Faits pratiques + éditorial -->
    <section class="pdetail section--light">
      <div class="container pdetail__grid">
        <div class="pdetail__facts">
          <h2 class="pdetail__label">En pratique</h2>
          <dl>
            <div v-for="f in presta.faits" :key="f.label" class="pdetail__fact" data-reveal-up>
              <dt>{{ f.label }}</dt>
              <dd>{{ f.valeur }}</dd>
            </div>
          </dl>
        </div>

        <div class="pdetail__side">
          <article v-for="sec in detail.sections" :key="sec.titre" class="pnote" data-reveal-up>
            <h3 class="pnote__title">{{ sec.titre }}</h3>
            <p class="pnote__text">{{ sec.texte }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Galerie propre à la prestation -->
    <section v-if="detail.galerie.length" class="pgal">
      <div class="container">
        <ul class="pgal__grid" :class="{ 'pgal__grid--solo': detail.galerie.length === 1 }">
          <li v-for="g in detail.galerie" :key="g.img" data-reveal-up>
            <img :src="g.img" :alt="g.alt" loading="lazy" >
          </li>
        </ul>
      </div>
    </section>

    <!-- Horaires réels, extraits du planning -->
    <section v-if="detail.planning" class="phoraires section--light">
      <div class="container">
        <h2 class="section-title" data-title-reveal>{{ detail.planning.titre }}</h2>
        <PlanningGrid :grille="creneaux" :legende="detail.planning.titre" />

        <NuxtLink to="/planning" class="link-arrow" data-hover-line>Voir le planning complet</NuxtLink>
      </div>
    </section>

    <!-- Modalités d'accès quand il n'y a pas de créneau -->
    <section v-else-if="detail.acces" class="pacces section--light">
      <div class="container pacces__inner">
        <h2 class="section-title" data-title-reveal>{{ detail.acces.titre }}</h2>
        <ul class="pacces__list">
          <li v-for="(l, i) in detail.acces.lignes" :key="i" data-reveal-up>
            <span class="pacces__num">{{ String(i + 1).padStart(2, '0') }}</span>
            <p>{{ l }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Les cours -->
    <section v-if="presta.cours?.length" class="courses">
      <div class="container">
        <h2 class="section-title section-title--light" data-title-reveal>
          {{ presta.coursTitre }}
        </h2>
        <ul class="courses__grid">
          <li v-for="c in presta.cours" :key="c.nom" class="ccard" data-reveal-up>
            <h3 class="ccard__name">{{ c.nom }}</h3>
            <span v-if="c.age" class="ccard__age">{{ c.age }}</span>
            <span v-if="c.resa" class="ccard__resa">Sur réservation</span>
            <p class="ccard__desc">{{ c.desc }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Tarif correspondant -->
    <section class="ptarif" :class="{ 'section--light': !presta.cours?.length }">
      <div class="container">
        <h2
          class="section-title"
          :class="{ 'section-title--light': presta.cours?.length }"
          data-title-reveal
        >Le tarif</h2>

        <div class="ptarif__box" data-reveal-up>
          <template v-if="grille">
            <h3 class="ptarif__name">{{ grille.titre }}</h3>
            <div class="tgrid__scroll">
              <table class="ttable" :class="{ 'ttable--dark': presta.cours?.length }">
                <thead>
                  <tr>
                    <th scope="col">Durée</th>
                    <th v-for="c in grille.colonnes" :key="c" scope="col">{{ c }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="l in grille.lignes" :key="l.duree">
                    <th scope="row">Abonnement {{ l.duree }}</th>
                    <td v-for="(p, i) in l.prix" :key="i"><span>{{ p }}</span> <em>/ mois</em></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="tscroll-hint" :class="{ 'tscroll-hint--dark': presta.cours?.length }">
              Faites glisser le tableau pour voir toutes les colonnes
            </p>
          </template>

          <template v-else-if="detail.tarif.squash">
            <h3 class="ptarif__name">Pass Squash</h3>
            <div class="tgrid__scroll">
              <table class="ttable">
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
            <p class="tscroll-hint">Faites glisser le tableau pour voir toutes les colonnes</p>
          </template>

          <template v-else-if="autres.length">
            <ul class="ptarif__autres">
              <li v-for="a in autres" :key="a.titre" class="ocard">
                <h3 class="ocard__title">{{ a.titre }}</h3>
                <p class="ocard__periode">{{ a.periode }}</p>
                <ul class="ocard__lines">
                  <li v-for="l in a.lignes" :key="l">{{ l }}</li>
                </ul>
              </li>
            </ul>
          </template>

          <p v-if="detail.tarif.note" class="ptarif__note">{{ detail.tarif.note }}</p>

          <NuxtLink to="/tarifs" class="link-arrow" data-hover-line>Voir tous les tarifs</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Navigation entre prestations -->
    <section class="pnav section--light">
      <div class="container pnav__inner">
        <NuxtLink v-if="prev" :to="`/prestations/${prev.slug}`" class="pnav__link pnav__link--prev">
          <span class="pnav__dir">Précédent</span>
          <span class="pnav__name">{{ prev.nom }}</span>
        </NuxtLink>
        <NuxtLink to="/prestations" class="pnav__all" data-hover-line>Toutes les prestations</NuxtLink>
        <NuxtLink v-if="next" :to="`/prestations/${next.slug}`" class="pnav__link pnav__link--next">
          <span class="pnav__dir">Suivant</span>
          <span class="pnav__name">{{ next.nom }}</span>
        </NuxtLink>
      </div>
    </section>

    <SiteCta
      :title="`Envie d'essayer ${article} ?`"
      :image="presta.imgBw || presta.img"
      :image-alt="presta.nom"
    />
  </main>
</template>

<script setup lang="ts">
import {
  PRESTATIONS,
  DETAILS,
  ABONNEMENTS,
  PASS_SQUASH,
  AUTRES_ABOS,
  creneauxPrestation,
} from '~/composables/useSiteData'

const route = useRoute()
const slug = computed(() => String(route.params.slug))
const index = computed(() => PRESTATIONS.findIndex((p) => p.slug === slug.value))
const presta = computed(() => PRESTATIONS[index.value])

if (!presta.value) {
  throw createError({ statusCode: 404, statusMessage: 'Prestation introuvable', fatal: true })
}

const detail = computed(() => DETAILS[slug.value])
const creneaux = computed(() => creneauxPrestation(detail.value.planning))
const grille = computed(() =>
  detail.value.tarif.grille ? ABONNEMENTS.find((g) => g.slug === detail.value.tarif.grille) : undefined
)
const autres = computed(() =>
  detail.value.tarif.autres
    ? AUTRES_ABOS.filter((a) => detail.value.tarif.autres!.includes(a.titre))
    : []
)

const prev = computed(() => PRESTATIONS[index.value - 1])
const next = computed(() => PRESTATIONS[index.value + 1])

/* « le squash », « la musculation », « les cours collectifs » */
const article = computed(() => {
  const feminin = ['musculation']
  const pluriel = ['cours-collectifs', 'kids']
  const nom = presta.value.nom.toLowerCase()
  if (pluriel.includes(presta.value.slug)) return `les ${nom}`
  return `${feminin.includes(presta.value.slug) ? 'la' : 'le'} ${nom}`
})

useHead({
  title: `${presta.value.nom} · La Salle`,
  meta: [{ name: 'description', content: presta.value.intro.slice(0, 155) }],
})

usePageMotion()
</script>
