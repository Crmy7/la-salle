# La Salle v2

Refonte du site de La Salle, salle de sport à La Roche-sur-Foron (lasalle-gym.com).

## Stack
- **Nuxt 4** (4.5.x), Vue 3, TypeScript, structure `app/`
- GSAP 3 (ScrollTrigger + SplitText, plugins libres depuis la 3.13)
- Lenis (smooth scroll, synchronisé avec ScrollTrigger via gsap.ticker)
- motion.dev (ressorts physiques : boutons magnétiques)
- Archivo variable (axe wdth 62..125) via Google Fonts, famille unique

## Structure
- `app/app.vue` : preloader, header, menu, NuxtPage, footer
- `app/pages/index.vue` : accueil, orchestre les animations dans onMounted
- `app/components/` : Site* (header, menu, footer, preloader) et Home* (une par section)
- `app/composables/`
  - `useScroll.ts` : enregistrement GSAP, Lenis, prefersReducedMotion
  - `useAnimations.ts` : preloader, hero, marquee, reveals, compteurs, galerie, footer
  - `useMagnetic.ts` : boutons magnétiques motion.dev
  - `useMenu.ts` : état du menu overlay (useState)
  - `useOpeningStatus.ts` : statut ouvert/fermé calculé sur 5h-23h
  - `useSiteData.ts` : contenus réels du club (source unique)
- `app/assets/css/style.css` : design system complet (tokens en `:root`)
- `app/plugins/scroll.client.ts` : init GSAP + Lenis côté client
- `public/assets/img/` : photos, logo, tuile SVG squash

## Règles client (à respecter partout)
- Palette : rouge principal **#DD0026**, puis #600C1C #842B1D #D53B27 #E56140 #231F20
  (fond chaud #171314, clair #F2EDE4)
- #DD0026 est un ton médian : son contraste est insuffisant avec le noir (3,60) comme
  avec le crème (4,39). Sur fond rouge, le texte est donc **toujours en crème**, et les
  survols basculent sur #842B1D (brique) et non sur le corail, trop clair.
- INTERDIT : tirets cadratins, labels "eyebrow", `border-left`, typo monospace,
  grain/bruit en overlay, chips/badges bordés, clichés fitness, rendu "IA générique"
- Tailles de texte maîtrisées, aucun élément qui dépasse du viewport
- Galerie : toutes les images au même format (largeur et hauteur identiques)
- **C'est une SALLE de sport, jamais un « club »** : le mot club est proscrit dans
  toute la copie. Accorder au féminin (« une salle indépendante », « toute la salle »).
  La constante des contenus s'appelle `SALLE` dans `useSiteData.ts`.
- Contenus réels du site actuel : ne pas inventer de prix
- Accès libre : 5h00 à 23h00, 7j/7 · Accueil : lun-jeu 8h30-20h30, ven 8h30-13h30, sam 9h-12h
- Tél 04 50 03 96 63 · lasalle.laroche@yahoo.fr · 480 av. Jean Morin, Z.I des Dragiez, 74800

## Pages (toutes construites)
- `index.vue` — accueil
- `prestations/index.vue` — liste, `prestations/[slug].vue` — page single (5 slugs :
  musculation, cross-training, cours-collectifs, squash, kids). Le contenu propre à
  chaque single est dans `DETAILS` (useSiteData) : sections éditoriales, galerie,
  config du planning et du tarif. Les horaires ne sont **jamais** ressaisis, ils sont
  filtrés depuis les plannings réels par `creneauxPrestation()`.
- `tarifs.vue`, `planning.vue`, `blog.vue`, `contact.vue`

## Architecture des animations
- Le preloader vit dans `app.vue` et ne joue qu'une fois : `setPreloaderGate()` expose
  sa promesse, chaque page l'attend via `usePageMotion()`.
- `usePageMotion(extra?)` initialise les révélations communes puis `extra(reduced)`
  pour le spécifique à la page. `killAll()` au démontage.
- Composants partagés : `PageHeader` (en-tête de page intérieure), `SiteCta` (CTA de bas
  de page, props `title` / `cta` / `image`).

## Source des données
Tout est dans `useSiteData.ts`. Les tarifs et les plannings ont été relevés sur les
images officielles du site actuel (grilles PNG) : ne pas les modifier sans la source.
Le blog n'a aucun article réel côté client — la page affiche la seule information
réelle disponible (horaires d'été) et renvoie vers Instagram.

## Planning
`PlanningGrid.vue` rend une grille alignée : une ligne par **plage horaire**, une
colonne par jour. Les horaires proches (moins de 45 min d'écart) sont regroupés sur
une même ligne, sinon la grille devient un escalier de lignes presque vides. Chaque
cellule porte son heure exacte et sa famille en haut à droite : pas de légende à
décoder. Sous 1000px, bascule en cartes par jour (les deux structures sont dans le
composant, l'une masquée en CSS). Rien n'est ressaisi : tout vient des données.

## Page prestations
Index en mosaïque (`.pmos__grid`) : 12 colonnes, **hauteurs de rangée explicites**
et tuiles sans `aspect-ratio` sur desktop, pour qu'elles remplissent leur cellule et
s'alignent bord à bord. Ne pas réintroduire de `margin-top` décalés : ça transforme
la composition en îlots flottants séparés par du vide.

## Hauteur du hero sur mobile
Masquer la barre du navigateur agrandit la fenêtre en plein défilement. Deux
verrous : `lockViewportHeight()` pose `--vh-lock` une seule fois sur appareil
tactile et ne la recalcule qu'à la rotation, et `ScrollTrigger.config({
ignoreMobileResize: true })` empêche le recalcul des positions de parallaxe.
Ne pas remplacer `var(--vh-lock, 100svh)` par `100vh` ou `100dvh`.

## Navigation et défilement
Lenis tient sa propre position de défilement : sans remise à zéro explicite, un
changement de page laisse le visiteur au milieu du document. `plugins/scroll.client.ts`
remet à zéro sur `router.afterEach` (et gère les ancres réelles après `nextTick`).
Ne pas créer de lien vers une ancre qui n'existe pas : la page ne défile alors nulle
part. `SiteCta` a une prop `to` — le libellé et la destination doivent concorder.

## Typographie
Échelle relevée d'un cran (corps à 17px, micro-labels à 12-13px) : la version
précédente était jugée trop petite sur un écran de portable. Ne pas redescendre.

## Performance (contraintes à ne pas casser)
Le site est passé de 26 à ~110 fps au scroll. Quatre règles en découlent :
1. **Aucun `filter` sur une grande image.** Le noir et blanc est cuit dans les
   fichiers (`public/assets/img/bw/`). Un `grayscale()` au rendu sur une image en
   parallaxe force une re-rastérisation à chaque frame.
2. **Aucun `backdrop-filter`.** Très coûteux sur une surface repeinte au scroll.
   Utiliser un rgba opaque à la place.
3. **`will-change` réservé aux éléments animés en continu** (`.band__track`,
   `.gallery__track`). Sur un simple survol il crée une couche permanente inutile.
4. **Dégradés sobres sur les grands blocs.** `.dark-run` fait plus de 1700px :
   2 foyers et 6 arrêts, pas plus.

5. **Tout conteneur `[data-mask]` doit être `overflow: hidden`.** L'image y attend
   son animation en `scale(1.25)` : sans clipping de mise en page elle élargit le
   document, ce qui étire le header et le menu fixes.

Tout écouteur `window` ou callback `gsap.ticker` posé dans `useAnimations.ts` doit
être enregistré via `onDispose()`, sinon il survit au changement de page.
`killAll()` tue les ScrollTriggers **avant** de vider les disposers.

## Dev
`npm run dev` (port 3000) · `npm run build` · `npm run generate` (statique)
Audit visuel : scripts Playwright dans le scratchpad (playwright global + chromium installés)
