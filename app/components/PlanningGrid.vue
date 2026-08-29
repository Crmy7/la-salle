<template>
  <div class="tt-wrap">
    <!-- Grille alignée. Une ligne regroupe les cours d'une même plage horaire,
         chaque case portant son heure exacte : c'est ce qui rend la grille
         dense et lisible plutôt qu'une échelle de lignes presque vides. -->
    <div class="tt" role="table" :aria-label="legende">
      <div class="tt__row tt__row--head" role="row">
        <span v-for="j in JOURS" :key="j" class="tt__day" role="columnheader">{{ j }}</span>
      </div>

      <div
        v-for="(bande, i) in bandes"
        :key="i"
        class="tt__row"
        :class="{ 'tt__row--alt': i % 2 === 1 }"
        role="row"
      >
        <div v-for="j in JOURS" :key="j + i" class="tt__cell" role="cell">
          <span
            v-for="c in coursDansBande(j, bande)"
            :key="c.h + c.nom"
            class="tt__c"
            :class="`tt__c--${c.type}`"
          >
            <span class="tt__top">
              <span class="tt__h">{{ c.h }}</span>
              <span class="tt__cat">{{ LABELS[c.type] }}</span>
            </span>
            <span class="tt__nom">{{ c.nom }}</span>
            <span v-if="surReservation(c.nom)" class="tt__resa">Réservation</span>
          </span>
        </div>
      </div>
    </div>

    <!-- Sous 1000px la grille ne tient pas : cartes par jour -->
    <div class="tt-cards">
      <div v-for="j in JOURS" :key="j" class="pday">
        <h3 class="pday__name">{{ j }}</h3>
        <ul v-if="grille[j]?.length" class="pday__list">
          <li v-for="c in grille[j]" :key="c.h + c.nom" class="pslot" :class="`pslot--${c.type}`">
            <span class="pslot__top">
              <span class="pslot__h">{{ c.h }}</span>
              <span class="pslot__cat">{{ LABELS[c.type] }}</span>
            </span>
            <span class="pslot__nom">{{ c.nom }}</span>
            <span v-if="surReservation(c.nom)" class="pslot__resa">Sur réservation</span>
          </li>
        </ul>
        <p v-else class="pday__empty">Pas de cours</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { JOURS, surReservation, type Creneau } from '~/composables/useSiteData'

const props = defineProps<{
  grille: Record<string, Creneau[]>
  legende?: string
}>()

const legende = computed(() => props.legende ?? 'Planning des cours')

/* Un tri de chaînes placerait 9h15 après 12h15. */
const enMinutes = (h: string) => {
  const [a, b] = h.split('h')
  return Number(a) * 60 + Number(b || 0)
}

/** Regroupe les horaires proches en plages : les cours d'un même moment de la
 *  journée tombent sur la même ligne, au lieu d'une ligne par minute distincte. */
const AMPLITUDE = 45

const bandes = computed(() => {
  const heures = [
    ...new Set(JOURS.flatMap((j) => (props.grille[j] ?? []).map((c) => c.h))),
  ].sort((a, b) => enMinutes(a) - enMinutes(b))

  const out: string[][] = []
  let courante: string[] = []
  for (const h of heures) {
    if (!courante.length || enMinutes(h) - enMinutes(courante[0]!) <= AMPLITUDE) courante.push(h)
    else {
      out.push(courante)
      courante = [h]
    }
  }
  if (courante.length) out.push(courante)
  return out
})

const coursDansBande = (jour: string, bande: string[]) =>
  (props.grille[jour] ?? [])
    .filter((c) => bande.includes(c.h))
    .sort((a, b) => enMinutes(a.h) - enMinutes(b.h))

const LABELS: Record<Creneau['type'], string> = {
  cross: 'Cross Training',
  cardio: 'Cardio',
  renfo: 'Renforcement',
  danse: 'Zumba',
  douceur: 'Gym douce',
  kids: 'Enfants & ados',
}
</script>
