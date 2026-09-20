<template>
  <main class="page">
    <PageHeader
      title="Mentions légales"
      intro="Mentions légales et politique de confidentialité de ce site. La Salle ne dépose aucun cookie et ne mesure pas l'audience de ce site."
      image="/assets/img/bw/halteres-rack.jpg"
      image-alt="Le plateau de musculation de La Salle"
    />

    <section class="legal section--light">
      <div class="container legal__grid">
        <nav class="legal__nav" aria-label="Sommaire">
          <h2 class="legal__nav-title">Sommaire</h2>
          <ul>
            <li v-for="s in MENTIONS" :key="s.titre">
              <a
                :href="`#${ancre(s.titre)}`"
                data-ancre
                data-hover-line
                @click.prevent="versSection(ancre(s.titre))"
              >{{ s.titre }}</a>
            </li>
          </ul>
        </nav>

        <div class="legal__inner">
          <article v-for="s in MENTIONS" :id="ancre(s.titre)" :key="s.titre" class="legal__block" data-reveal-up>
            <h2 class="legal__title">{{ s.titre }}</h2>
            <p v-for="(para, i) in s.texte.split('\n\n')" :key="i"><template v-for="(m, j) in morceaux(para)" :key="j"><a v-if="m.lien" :href="m.lien" data-hover-line>{{ m.texte }}</a><template v-else>{{ m.texte }}</template></template></p>
            <ul v-if="s.liste" class="legal__list">
              <li v-for="l in s.liste" :key="l"><template v-for="(m, j) in morceaux(l)" :key="j"><a v-if="m.lien" :href="m.lien" data-hover-line>{{ m.texte }}</a><template v-else>{{ m.texte }}</template></template></li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { MENTIONS, SALLE } from '~/composables/useSiteData'
import { getLenis, prefersReducedMotion } from '~/composables/useScroll'

/** « Éditeur du site » → « editeur-du-site ». Même règle côté WordPress. */
const ancre = (titre: string) =>
  titre
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

/** `{email}` et `{tel}` deviennent des liens, le reste du texte est rendu tel quel */
const morceaux = (texte: string) =>
  texte
    .split(/(\{email\}|\{tel\})/)
    .filter(Boolean)
    .map((part) => {
      if (part === '{email}') return { texte: SALLE.email, lien: `mailto:${SALLE.email}` }
      if (part === '{tel}') return { texte: SALLE.tel, lien: `tel:${SALLE.telHref}` }
      return { texte: part, lien: '' }
    })

/** Position de mise en page, insensible au décalage d'animation d'une section
 *  qui n'est pas encore révélée (un rectangle mesuré le serait). */
const positionY = (el: HTMLElement) => {
  let y = 0
  for (let n: HTMLElement | null = el; n; n = n.offsetParent as HTMLElement | null) y += n.offsetTop
  return y
}

/* Lenis tient sa propre position : un saut d'ancre natif le désynchronise, et
   sa résolution d'élément se trompe de plusieurs centaines de pixels ici. */
const versSection = (id: string) => {
  const cible = document.getElementById(id)
  if (!cible) return
  const y = positionY(cible) - 100
  const lenis = getLenis()
  if (lenis) lenis.scrollTo(y)
  else window.scrollTo({ top: y, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
}

useHead({
  title: 'Mentions légales · La Salle',
  meta: [
    {
      name: 'description',
      content:
        "Mentions légales et politique de confidentialité du site de La Salle, salle de sport à La Roche-sur-Foron.",
    },
  ],
})

usePageMotion()
</script>
