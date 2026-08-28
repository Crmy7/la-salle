<template>
  <main class="page">
    <PageHeader
      title="Contact"
      intro="Une question, une demande d'information, l'envie de venir essayer ? Passez nous voir, appelez-nous ou écrivez-nous."
      image="/assets/img/bw/halteres-rack.jpg"
      image-alt="Le plateau de musculation de La Salle"
    />

    <section class="contact section--light">
      <div class="container contact__grid">
        <div class="contact__infos">
          <div class="cblock" data-reveal-up>
            <h2 class="cblock__label">Adresse</h2>
            <p class="cblock__big">
              {{ SALLE.adresse[0] }}<br >{{ SALLE.adresse[1] }}<br >{{ SALLE.adresse[2] }}
            </p>
            <a
              :href="mapsUrl"
              target="_blank"
              rel="noopener"
              class="link-arrow"
              data-hover-line
            >Ouvrir dans Maps</a>
          </div>

          <div class="cblock" data-reveal-up>
            <h2 class="cblock__label">Téléphone</h2>
            <a :href="`tel:${SALLE.telHref}`" class="cblock__big cblock__big--link">{{ SALLE.tel }}</a>
          </div>

          <div class="cblock" data-reveal-up>
            <h2 class="cblock__label">E-mail</h2>
            <a :href="`mailto:${SALLE.email}`" class="cblock__mail" data-hover-line>{{ SALLE.email }}</a>
          </div>

          <div class="cblock" data-reveal-up>
            <h2 class="cblock__label">Horaires de l'accueil</h2>
            <ul class="cblock__hours">
              <li v-for="h in SALLE.accueil" :key="h">{{ h }}</li>
            </ul>
            <p class="cblock__access">{{ SALLE.accesLibre }}, tous les jours</p>
          </div>

          <div class="cblock" data-reveal-up>
            <h2 class="cblock__label">Instagram</h2>
            <a
              :href="SALLE.instagramUrl"
              target="_blank"
              rel="noopener"
              class="cblock__mail"
              data-hover-line
            >{{ SALLE.instagram }}</a>
          </div>
        </div>

        <div class="contact__form" data-reveal-up>
          <h2 class="cform__title">Écrivez-nous</h2>

          <form class="cform" @submit.prevent="envoyer">
            <div class="cform__row">
              <label class="cfield">
                <span class="cfield__label">Nom</span>
                <input v-model="form.nom" type="text" name="nom" required autocomplete="family-name" >
              </label>
              <label class="cfield">
                <span class="cfield__label">Prénom</span>
                <input v-model="form.prenom" type="text" name="prenom" required autocomplete="given-name" >
              </label>
            </div>

            <label class="cfield">
              <span class="cfield__label">E-mail</span>
              <input v-model="form.email" type="email" name="email" required autocomplete="email" >
            </label>

            <label class="cfield">
              <span class="cfield__label">Objet</span>
              <input v-model="form.objet" type="text" name="objet" required >
            </label>

            <label class="cfield">
              <span class="cfield__label">Message <em>(facultatif)</em></span>
              <textarea v-model="form.message" name="message" rows="5" />
            </label>

            <button type="submit" class="btn btn--primary btn--full" data-magnetic>
              <span class="btn__label">Envoyer le message</span>
            </button>

            <p class="cform__hint">
              Le formulaire ouvre votre messagerie avec le message pré-rempli. Pour une réponse
              immédiate, appelez le {{ SALLE.tel }}.
            </p>
          </form>
        </div>
      </div>
    </section>

    <SiteCta title="Ou venez simplement pousser la porte." cta="Voir les tarifs" to="/tarifs" />
  </main>
</template>

<script setup lang="ts">
import { SALLE } from '~/composables/useSiteData'

const form = reactive({ nom: '', prenom: '', email: '', objet: '', message: '' })

const mapsUrl = computed(
  () => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SALLE.adresse.join(' '))}`
)

/* Pas de back-end sur ce site : on prépare le mail côté client
   plutôt que de simuler un envoi qui n'aurait jamais lieu. */
function envoyer() {
  const corps = [
    `Nom : ${form.nom} ${form.prenom}`,
    `E-mail : ${form.email}`,
    '',
    form.message,
  ].join('\n')
  window.location.href =
    `mailto:${SALLE.email}?subject=${encodeURIComponent(form.objet)}&body=${encodeURIComponent(corps)}`
}

useHead({
  title: 'Contact · La Salle',
  meta: [{ name: 'description', content: `Contactez La Salle à La Roche-sur-Foron : ${SALLE.tel}, ${SALLE.adresse.join(', ')}.` }],
})

usePageMotion()
</script>
