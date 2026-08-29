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
      script: [
        {
          /* Posé avant le premier rendu : sans cela, le visiteur peut faire
             défiler la page pendant les quelques centaines de millisecondes
             qui précèdent l'hydratation, alors que le rideau est affiché.
             Le minuteur est un filet : si l'application ne démarrait pas,
             le défilement serait rendu malgré tout. */
          innerHTML:
            "var h=document.documentElement;" +
            "h.classList.add('is-loading');h.style.overflow='hidden';" +
            /* Selon le navigateur, l'élément qui défile est html ou body */
            "var v=function(){if(document.body)document.body.style.overflow='hidden'};v();" +
            "document.addEventListener('DOMContentLoaded',v);" +
            "setTimeout(function(){h.classList.remove('is-loading');h.style.overflow='';" +
            "if(document.body)document.body.style.overflow=''},8000);",
          tagPosition: 'head',
        },
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
