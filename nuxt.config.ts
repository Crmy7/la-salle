export default defineNuxtConfig({
  compatibilityDate: '2026-08-26',
  devtools: { enabled: false },

  css: ['~/assets/css/style.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'La Salle · Salle de sport à La Roche-sur-Foron',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            "Salle de sport indépendante à La Roche-sur-Foron. Musculation, cross training, cours collectifs, squash et cours enfants. Accès libre de 5h00 à 23h00, tous les jours.",
        },
        /* ⚠️ Site en préproduction : indexation bloquée.
           À RETIRER À LA MISE EN LIGNE, avec public/robots.txt. */
        { name: 'robots', content: 'noindex, nofollow, noarchive, nosnippet' },
        { name: 'googlebot', content: 'noindex, nofollow' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,100..900;1,62..125,100..900&display=swap',
        },
      ],
    },
    pageTransition: false,
    layoutTransition: false,
  },
})
