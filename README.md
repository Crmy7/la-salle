# La Salle

Refonte du site de [La Salle](https://lasalle-gym.com), salle de sport indépendante
à La Roche-sur-Foron (Haute-Savoie).

## Stack

- **Nuxt 4** · Vue 3 · TypeScript
- **GSAP** (ScrollTrigger, SplitText) pour les animations au défilement
- **Lenis** pour le défilement lissé
- **motion.dev** pour les boutons magnétiques
- Archivo variable via Google Fonts

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm run preview  # prévisualiser le build
```

## Pages

| Route | Contenu |
| --- | --- |
| `/` | Accueil |
| `/prestations` | Index des cinq prestations |
| `/prestations/[slug]` | Fiche détaillée (musculation, cross-training, cours-collectifs, squash, kids) |
| `/tarifs` | Grilles d'abonnement, pass à la séance, squash, enfants |
| `/planning` | Planning des cours collectifs et du cross training |
| `/blog` | Actualités de la salle |
| `/contact` | Coordonnées, horaires et formulaire |

## Données

Tout le contenu éditorial, les tarifs et les plannings sont centralisés dans
`app/composables/useSiteData.ts`. Les tarifs et horaires ont été relevés sur les
documents officiels du site actuel : ne pas les modifier sans la source.

## ⚠️ Indexation désactivée

Le site est actuellement en **`noindex, nofollow`** (voir `nuxt.config.ts` et
`public/robots.txt`). **Retirer les deux avant la mise en ligne**, sinon le site
ne sera jamais référencé.

## Conventions

Les règles de direction artistique et les contraintes techniques à ne pas casser
sont documentées dans `CLAUDE.md`.
