/** Contenus réels de la salle, source unique pour toutes les pages.
 *  Tarifs et plannings relevés sur la brochure officielle de septembre 2026 :
 *  aucun prix ni horaire n'est inventé ici. */

export const SALLE = {
  nom: 'La Salle',
  ville: 'La Roche-sur-Foron',
  adresse: ['480 avenue Jean Morin', 'Z.I des Dragiez', '74800 La Roche-sur-Foron'],
  tel: '04 50 03 96 63',
  telHref: '+33450039663',
  email: 'lasalle.laroche@yahoo.fr',
  instagram: '@lasalle.74',
  instagramUrl: 'https://www.instagram.com/lasalle.74',
  accueil: [
    'Lundi à jeudi · 8h30 → 20h30',
    'Vendredi · 8h30 → 13h30',
    'Samedi · 9h00 → 12h00',
  ],
  accesLibre: 'Accès libre · 5h00 → 23h00',
  inscription: 25,
}

/* ============================================================
   PRESTATIONS
   ============================================================ */

export interface Cours {
  nom: string
  desc: string
  resa?: boolean
  age?: string
}

export interface Prestation {
  slug: string
  imgBw?: string
  num: string
  nom: string
  meta: string
  img: string
  intro: string
  faits: { label: string; valeur: string }[]
  coursTitre?: string
  cours?: Cours[]
}

export const PRESTATIONS: Prestation[] = [
  {
    slug: 'musculation',
    num: '01',
    nom: 'Musculation',
    meta: 'Charges libres, cardio, machines guidées · dès 17 ans',
    img: '/assets/img/musculation.jpg',
    imgBw: '/assets/img/bw/musculation.jpg',
    intro:
      "La Salle est équipée d'un plateau de musculation comprenant un espace de charges libres, de cardio et d'abdos, et des machines guidées. Suivant le type d'abonnement choisi, des programmes personnalisés peuvent être réalisés avec nos éducateurs sportifs.",
    faits: [
      { label: 'Accès', valeur: '5h00 → 23h00, tous les jours' },
      { label: 'Âge minimum', valeur: '17 ans révolus' },
      { label: 'Équipement', valeur: 'Charges libres, cardio, abdos, machines guidées' },
      { label: 'Suivi', valeur: 'Programmes personnalisés selon l’abonnement' },
    ],
  },
  {
    slug: 'cours-collectifs',
    num: '02',
    nom: 'Cours collectifs',
    meta: 'Du pilâtes à la zumba, tous niveaux',
    img: '/assets/img/cross-training-site.jpg',
    imgBw: '/assets/img/bw/cross-training-site.jpg',
    intro:
      "La Salle propose une variété de cours collectifs pour les adhérents qui cherchent des entraînements à plusieurs et à améliorer leur forme physique globale. Les cours incluent des options pour tous les niveaux et tous les intérêts, animés par des coachs professionnels expérimentés.",
    faits: [
      { label: 'Niveaux', valeur: 'Tous, du débutant au confirmé' },
      { label: 'Encadrement', valeur: 'Coachs professionnels expérimentés' },
      { label: 'Inclus', valeur: 'Abonnements Fitness Musculation et Premium' },
    ],
    coursTitre: 'Les cours collectifs',
    cours: [
      {
        nom: 'Abdos Flash',
        resa: true,
        desc: "Cours spécial renforcement de la ceinture abdominale, sans impact, avec un travail cardio d'intensité modérée. Ce cours vous aide en outre à conserver un bon maintien du dos et à éliminer les douleurs qui sont la cause des mauvaises postures.",
      },
      {
        nom: 'Abdos Fessiers',
        resa: true,
        desc: 'Cours spécial permettant de renforcer les muscles de la ceinture abdominale et des fessiers.',
      },
      {
        nom: 'Animal Flow',
        resa: true,
        desc: "Technique fonctionnelle d'entraînement quadrupédique qui améliore la force et l'endurance du corps entier, l'équilibre dynamique et l'amplitude des mouvements.",
      },
      {
        nom: 'Baby Gym',
        resa: true,
        age: 'De la marche à 3 ans',
        desc: "Gymnastique récréative favorisant la socialisation, l'autonomie et le développement des aptitudes motrices de base : équilibre, sauts. Présence d'un adulte indispensable. Le cours se déroule dans la salle des cours collectifs.",
      },
      {
        nom: 'Biking',
        resa: true,
        desc: "Programme de cyclisme en salle, dans lequel vous roulez au rythme d'une musique entraînante. Le biking améliore la capacité cardiovasculaire, brûle les graisses, sculpte les membres inférieurs, augmente la force des jambes et l'endurance musculaire.",
      },
      {
        nom: 'Cardio Training',
        resa: true,
        desc: "Entraînement qui permet d'améliorer l'endurance de base, la fréquence cardiaque, brûler des calories et de rester en forme.",
      },
      {
        nom: 'Core Training',
        resa: true,
        desc: 'Cours ciblé sur le renforcement de la sangle abdominale et du dos, pour améliorer posture, stabilité et équilibre. Idéal pour un tronc solide et fonctionnel.',
      },
      {
        nom: 'Full Body',
        resa: true,
        desc: "Travail de l'ensemble des muscles, des articulations et du système cardio-respiratoire.",
      },
      {
        nom: 'Gym Ball',
        resa: true,
        desc: "Technique de gym douce avec des gros ballons. Les mouvements sont inspirés du pilâtes, du yoga et du stretching. Le gym ball permet de renforcer les muscles profonds et stabilisateurs, mais aussi de développer la souplesse.",
      },
      {
        nom: 'Gym Douce',
        resa: true,
        desc: "Activité corporelle douce améliorant la circulation énergétique et offrant du bien-être autant dans son corps que dans son esprit.",
      },
      {
        nom: 'Hiit',
        resa: true,
        desc: 'Entraînement court et intense ponctué de phases de récupération réduites, permet de tonifier la silhouette rapidement.',
      },
      {
        nom: 'Pilâtes',
        resa: true,
        desc: "Technique de gym douce. Programme d'entraînement permettant de rééquilibrer les muscles du corps en se concentrant sur les principaux muscles qui interviennent dans l'équilibre du corps et le maintien de la colonne vertébrale. Renforcer et allonger les muscles.",
      },
      {
        nom: 'Renfo Mobilité',
        resa: true,
        desc: 'Cours complet alliant renforcement global et mobilité pour réveiller le corps, améliorer souplesse et tonus.',
      },
      {
        nom: 'Step',
        resa: true,
        desc: "Programme cardio-vasculaire avec l'utilisation d'une plateforme. Permet d'augmenter l'endurance, la coordination et permet de définir les membres inférieurs.",
      },
      {
        nom: 'Stretching / Mobilité',
        resa: true,
        desc: 'Technique de gym douce qui vise à étirer les muscles en douceur et à améliorer la souplesse.',
      },
      {
        nom: 'Strong Nation',
        resa: true,
        desc: 'Entraînement au poids du corps alternant renforcement musculaire et activités cardio sur le rythme de la musique.',
      },
      {
        nom: 'Yoga',
        resa: true,
        desc: 'Discipline qui unit le physique et le mental par la posture et la respiration et vise à apporter un bien-être général.',
      },
      {
        nom: 'Yin Yoga',
        resa: true,
        desc: 'Pratique douce et lente composée de postures maintenues plusieurs minutes. Elle favorise la détente, la souplesse, la mobilité et le relâchement des tensions.',
      },
      {
        nom: 'Yogalates',
        resa: true,
        desc: "Gym douce à mi-chemin entre le yoga et le pilâtes. Basé sur le souffle et la concentration. Le cours est composé d'exercices de renforcement musculaire, phases de détente et de relaxation, postures de yoga et mouvements de pilâtes.",
      },
      {
        nom: 'Zumba',
        resa: true,
        desc: "Discipline sportive qui allie à la fois des mouvements chorégraphiques d'inspiration latine et des gestes toniques destinés à renforcer la musculature.",
      },
    ],
  },
  {
    slug: 'cross-training',
    num: '03',
    nom: 'Cross Training',
    meta: 'Box dédiée, cours encadrés · sur réservation',
    img: '/assets/img/boxe-sombre.jpg',
    imgBw: '/assets/img/bw/boxe-sombre.jpg',
    intro:
      "Une box dédiée, des séances à haute intensité encadrées par des éducateurs sportifs qualifiés. Les cours sont sur réservation, et la box reste en accès libre en dehors des créneaux encadrés.",
    faits: [
      { label: 'Réservation', valeur: 'Obligatoire pour les cours encadrés' },
      { label: 'Accès libre', valeur: 'Box ouverte en dehors des cours' },
      { label: 'Encadrement', valeur: 'Éducateurs sportifs qualifiés' },
    ],
    coursTitre: 'Les cours de Cross Training',
    cours: [
      {
        nom: 'Cardio Training',
        resa: true,
        desc: "Activité physique qui permet une augmentation de la masse musculaire et permet de brûler les graisses tout en sollicitant le système cardio-vasculaire. La pratique vous aide à vous affiner en allant puiser directement dans vos cellules graisseuses.",
      },
      {
        nom: 'Core Training',
        resa: true,
        desc: 'Cours ciblé sur le renforcement de la sangle abdominale et du dos, pour améliorer posture, stabilité et équilibre. Idéal pour un tronc solide et fonctionnel.',
      },
      {
        nom: 'Cross Training',
        resa: true,
        desc: "Discipline à haute intensité. Des mouvements d'haltérophilie, de gymnastique et d'athlétisme sont ainsi réalisés dans le cadre d'un entraînement dit fonctionnel.",
      },
      {
        nom: 'Functional Training',
        resa: true,
        desc: "Entraînement physique visant à améliorer les mouvements utilisés dans la vie quotidienne, le travail et le sport. Sollicite plusieurs groupes musculaires simultanément afin de développer la force, l'équilibre, la coordination, l'endurance et la mobilité.",
      },
      {
        nom: 'Gym',
        resa: true,
        desc: 'Fondamental de la pratique reposant sur des exercices au poids de corps utilisant barres de traction, anneaux et cordes. Parfait pour développer force, contrôle, agilité et souplesse.',
      },
      {
        nom: 'Haltéro',
        resa: true,
        desc: "Sport de force consistant à soulever des poids grâce à la maîtrise d'une technique particulière combinant vitesse dans l'exécution, souplesse, coordination et équilibre.",
      },
      {
        nom: 'Mobilité',
        resa: true,
        desc: 'Permet de renforcer la flexibilité et la stabilité en axant sur la mobilité corporelle. Des exercices améliorant votre amplitude de mouvement et renforçant les muscles.',
      },
      {
        nom: 'Team WOD',
        resa: true,
        desc: "Séance de Cross Training par équipe. La motivation et l'effort sont différents dans la mesure où vous ne faites plus les efforts pour vous uniquement mais aussi pour vos coéquipiers.",
      },
      {
        nom: 'TRX',
        resa: true,
        desc: "Méthode de renforcement musculaire général tirée de l'armée américaine. Les exercices se font à poids de corps et en suspension sur des sangles. Le TRX permet de développer la force, l'endurance, l'explosivité et l'équilibre.",
      },
    ],
  },
  {
    slug: 'squash',
    num: '04',
    nom: 'Squash',
    meta: 'Sessions de 40 minutes · sur réservation',
    img: '/assets/img/squash.jpg',
    imgBw: '/assets/img/bw/squash.jpg',
    intro:
      "La Salle propose l'accès sur réservation à une salle de squash, pour des sessions de 40 minutes. Location de raquettes et prêt de balles sur place.",
    faits: [
      { label: 'Durée', valeur: 'Sessions de 40 minutes' },
      { label: 'Réservation', valeur: 'Obligatoire' },
      { label: 'Location raquette', valeur: '2 €' },
      { label: 'Balles', valeur: 'Prêtées sur place' },
      { label: 'Équipement', valeur: 'Chaussures à semelles blanches obligatoires' },
    ],
  },
  {
    slug: 'kids',
    num: '05',
    nom: 'Cours enfants / ados',
    meta: 'Baby gym, cross kids, cross teens · de la marche à 17 ans',
    img: '/assets/img/enfants.jpg',
    imgBw: '/assets/img/bw/enfants.jpg',
    intro:
      "Nous accueillons vos enfants de la marche à 17 ans, de la gymnastique récréative au Cross Training adapté aux adolescents.",
    faits: [
      { label: 'Âges', valeur: 'De la marche à 17 ans' },
      { label: 'Baby Gym', valeur: 'Présence d’un adulte indispensable' },
      { label: 'Saison', valeur: 'Septembre à juin' },
    ],
    coursTitre: 'Les cours enfants et ados',
    cours: [
      {
        nom: 'Baby Gym',
        resa: true,
        age: 'De la marche à 3 ans',
        desc: "Gymnastique récréative favorisant la sociabilisation, l'autonomie et le développement des aptitudes motrices de base : équilibres, sauts. Présence d'un adulte indispensable.",
      },
      {
        nom: 'Cross Mini Kids',
        resa: true,
        age: '4 à 6 ans',
        desc: 'Cours de Cross Training adapté aux plus jeunes.',
      },
      {
        nom: 'Cross Kids',
        resa: true,
        age: '6 à 11 ans',
        desc: 'Cours de Cross Training adaptés aux enfants.',
      },
      {
        nom: 'Cross Mini Teens',
        resa: true,
        age: '11 à 14 ans',
        desc: 'Cours de Cross Training adaptés aux préadolescents.',
      },
      {
        nom: 'Cross Teens',
        resa: true,
        age: '14 à 17 ans',
        desc: 'Cours de Cross Training adaptés aux adolescents.',
      },
    ],
  },
]

/* ============================================================
   TARIFS · relevés sur les grilles officielles
   ============================================================ */

export interface GrilleAbo {
  titre: string
  slug: string
  desc: string
  colonnes: string[]
  lignes: { duree: string; prix: string[] }[]
  premium?: boolean
}

export const ABONNEMENTS: GrilleAbo[] = [
  {
    titre: 'Fitness Musculation',
    slug: 'fitness-musculation',
    desc: "Le plateau de musculation et l'ensemble des cours collectifs. La Baby Gym n'est pas incluse dans cet abonnement.",
    colonnes: ['Individuel', 'Couple / Duo', 'Étudiant / Sénior +65 ans'],
    lignes: [
      { duree: '12 mois', prix: ['41 €', '38 €', '32 €'] },
      { duree: '6 mois', prix: ['51 €', '45 €', '38 €'] },
      { duree: '3 mois', prix: ['59 €', '53 €', '47 €'] },
      { duree: '1 mois', prix: ['66 €', '60 €', '57 €'] },
    ],
  },
  {
    titre: 'Cross Training',
    slug: 'cross-training',
    desc: "L'ensemble des cours de Cross Training adulte, et la box en accès libre en dehors des cours.",
    colonnes: ['Individuel', 'Couple / Duo', 'Étudiant / Sénior +65 ans'],
    lignes: [
      { duree: '12 mois', prix: ['47 €', '44 €', '32 €'] },
      { duree: '6 mois', prix: ['57 €', '51 €', '38 €'] },
      { duree: '3 mois', prix: ['65 €', '59 €', '47 €'] },
      { duree: '1 mois', prix: ['72 €', '66 €', '57 €'] },
    ],
  },
  {
    titre: 'Premium',
    slug: 'premium',
    desc: 'Les avantages des abonnements Fitness Musculation et Cross Training réunis.',
    premium: true,
    colonnes: ['Individuel', 'Couple / Duo', 'Étudiant / Sénior +65 ans'],
    lignes: [
      { duree: '12 mois', prix: ['58 €', '55 €', '47 €'] },
      { duree: '6 mois', prix: ['68 €', '65 €', '53 €'] },
      { duree: '3 mois', prix: ['76 €', '73 €', '57 €'] },
      { duree: '1 mois', prix: ['83 €', '80 €', '67 €'] },
    ],
  },
]

export const PASS_SEANCE = {
  colonnes: ['Pass Fitness Musculation', 'Pass Cross Training'],
  lignes: [
    { duree: '10 séances', note: 'Valable 1 an', prix: ['90 €', '140 €'] },
    { duree: '1 séance', note: '', prix: ['10 €', '15 €'] },
  ],
  mention: 'Cross Training : cours sur réservation et accès libre.',
}

export const PASS_SQUASH = {
  colonnes: ['Non adhérent', 'Adhérent', 'Étudiant'],
  lignes: [
    { duree: '10 séances', note: 'Valable 6 mois', prix: ['54 €', '46 €', '43 €'] },
    { duree: '1 séance', note: '', prix: ['6 €', '5 €', '4,50 €'] },
  ],
  mention:
    'Sur réservation. Location de raquettes 2 €, prêt de balles. Chaussures à semelles blanches obligatoires.',
}

export const AUTRES_ABOS = [
  {
    titre: 'Cross Kids / Teens',
    periode: 'Abonnement 10 mois, septembre à juin',
    lignes: ['25 € / mois · 1 cours par semaine', '40 € / mois · 2 cours par semaine'],
  },
  {
    titre: 'Baby Gym',
    periode: 'Septembre à juin, hors vacances scolaires',
    lignes: ['190 €'],
  },
  {
    titre: 'Zumba Strong',
    periode: 'Septembre à juillet',
    lignes: ['260 €'],
  },
]

/* ============================================================
   PLANNING · relevé sur les grilles officielles
   ============================================================ */

export const JOURS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']

export interface Creneau {
  h: string
  nom: string
  type: 'cardio' | 'renfo' | 'douceur' | 'cross' | 'kids' | 'danse'
}

export const PLANNING_COLLECTIFS: Record<string, Creneau[]> = {
  Lundi: [
    { h: '9h00', nom: 'Yogalates', type: 'douceur' },
    { h: '10h15', nom: 'Gym Ball', type: 'douceur' },
    { h: '12h15', nom: 'Biking', type: 'cardio' },
    { h: '17h15', nom: 'Abdos Flash', type: 'renfo' },
    { h: '17h40', nom: 'Hiit', type: 'cardio' },
    { h: '18h15', nom: 'Step Inter', type: 'cardio' },
    { h: '19h15', nom: 'Zumba', type: 'danse' },
    { h: '20h15', nom: 'Strong Nation', type: 'danse' },
  ],
  Mardi: [
    { h: '8h30', nom: 'Renfo Mobilité', type: 'renfo' },
    { h: '9h30', nom: 'Full Body', type: 'renfo' },
    { h: '10h30', nom: 'Gym Douce', type: 'douceur' },
    { h: '12h15', nom: 'Full Body', type: 'renfo' },
    { h: '18h00', nom: 'Pilâtes', type: 'douceur' },
    { h: '18h45', nom: 'Yoga', type: 'douceur' },
    { h: '19h45', nom: 'Pilâtes', type: 'douceur' },
  ],
  Mercredi: [
    { h: '9h15', nom: 'Baby Gym', type: 'kids' },
    { h: '10h00', nom: 'Baby Gym', type: 'kids' },
    { h: '11h15', nom: 'Pilâtes', type: 'douceur' },
    { h: '12h15', nom: 'Yin Yoga', type: 'douceur' },
    { h: '17h00', nom: 'Cardio Training', type: 'cardio' },
    { h: '18h00', nom: 'Biking', type: 'cardio' },
    { h: '19h00', nom: 'Biking', type: 'cardio' },
    { h: '20h00', nom: 'Zumba', type: 'danse' },
  ],
  Jeudi: [
    { h: '8h30', nom: 'Renfo Mobilité', type: 'renfo' },
    { h: '9h30', nom: 'Full Body', type: 'renfo' },
    { h: '10h30', nom: 'Stretching Mobilité', type: 'douceur' },
    { h: '12h15', nom: 'Step Débutant', type: 'cardio' },
    { h: '17h30', nom: 'Abdos Fessiers', type: 'renfo' },
    { h: '18h00', nom: 'Step Inter', type: 'cardio' },
    { h: '19h00', nom: 'Full Body', type: 'renfo' },
    { h: '19h45', nom: 'Stretching Mobilité', type: 'douceur' },
  ],
  Vendredi: [
    { h: '8h30', nom: 'Animal Flow', type: 'renfo' },
    { h: '9h45', nom: 'Biking', type: 'cardio' },
    { h: '11h15', nom: 'Gym Ball', type: 'douceur' },
    { h: '12h15', nom: 'Pilâtes', type: 'douceur' },
    { h: '14h00', nom: 'Yoga', type: 'douceur' },
    { h: '17h30', nom: 'Core Training', type: 'renfo' },
    { h: '18h00', nom: 'Cardio Training', type: 'cardio' },
    { h: '19h00', nom: 'Renfo Mobilité', type: 'renfo' },
  ],
  Samedi: [
    { h: '9h15', nom: 'Full Body', type: 'renfo' },
    { h: '10h15', nom: 'Step Inter', type: 'cardio' },
  ],
}

export const PLANNING_CROSS: Record<string, Creneau[]> = {
  Lundi: [
    { h: '9h15', nom: 'Cross Training', type: 'cross' },
    { h: '12h15', nom: 'Cross Training', type: 'cross' },
    { h: '17h00', nom: 'Gym', type: 'cross' },
    { h: '18h00', nom: 'Cross Training', type: 'cross' },
    { h: '19h00', nom: 'Haltéro', type: 'renfo' },
    { h: '20h00', nom: 'Cross Training', type: 'cross' },
  ],
  Mardi: [
    { h: '12h15', nom: 'Cross Training', type: 'cross' },
    { h: '17h00', nom: 'Functional Training', type: 'cross' },
    { h: '18h00', nom: 'TRX', type: 'renfo' },
    { h: '19h00', nom: 'Cross Training', type: 'cross' },
    { h: '20h00', nom: 'Cross Training', type: 'cross' },
  ],
  Mercredi: [
    { h: '10h00', nom: 'Cross Mini Kids', type: 'kids' },
    { h: '11h00', nom: 'Cross Kids', type: 'kids' },
    { h: '12h15', nom: 'Cross Training', type: 'cross' },
    { h: '16h00', nom: 'Cross Mini Teens', type: 'kids' },
    { h: '17h00', nom: 'Cross Teens', type: 'kids' },
    { h: '18h00', nom: 'Cross Training', type: 'cross' },
    { h: '19h00', nom: 'Gym', type: 'cross' },
    { h: '20h00', nom: 'Cross Training', type: 'cross' },
  ],
  Jeudi: [
    { h: '12h15', nom: 'TRX', type: 'renfo' },
    { h: '17h00', nom: 'Mobilité', type: 'douceur' },
    { h: '18h00', nom: 'Haltéro', type: 'renfo' },
    { h: '19h00', nom: 'Cardio Training', type: 'cardio' },
    { h: '20h00', nom: 'Cardio Training', type: 'cardio' },
  ],
  Vendredi: [
    { h: '9h15', nom: 'Cross Training', type: 'cross' },
    { h: '12h15', nom: 'Cross Training', type: 'cross' },
    { h: '17h00', nom: 'Functional Training', type: 'cross' },
    { h: '18h00', nom: 'Cross Training', type: 'cross' },
    { h: '19h00', nom: 'Cross Training', type: 'cross' },
    { h: '20h00', nom: 'Core Training', type: 'renfo' },
  ],
  Samedi: [
    { h: '9h00', nom: 'Cross Kids', type: 'kids' },
    { h: '10h00', nom: 'Cross Mini Teens', type: 'kids' },
    { h: '11h00', nom: 'Cross Teens', type: 'kids' },
    { h: '12h15', nom: 'Team WOD', type: 'cross' },
  ],
}

/* Aperçu affiché sur l'accueil */
export const COURS_APERCU = [
  { nom: 'Hiit', type: 'Cardio', resa: true },
  { nom: 'Biking', type: 'Cardio', resa: true },
  { nom: 'Cross Training', type: 'Cross Training', resa: true },
  { nom: 'Pilâtes', type: 'Gym douce', resa: true },
  { nom: 'Team WOD', type: 'Cross Training', resa: true },
  { nom: 'Zumba', type: 'Zumba', resa: true },
  { nom: 'TRX', type: 'Renforcement', resa: true },
  { nom: 'Stretching / Mobilité', type: 'Gym douce', resa: true },
]

export const FORMULES = [
  {
    num: '01',
    nom: 'Fitness\nMusculation',
    desc: "Le plateau de musculation en accès libre de 5h00 à 23h00, et l'ensemble des cours collectifs.",
    premium: false,
  },
  {
    num: '02',
    nom: 'Cross\nTraining',
    desc: 'Tous les cours de Cross Training adulte, et la box en accès libre en dehors des cours.',
    premium: false,
  },
  {
    num: '03',
    nom: 'Premium',
    desc: 'Toute la salle. Musculation, cours collectifs et Cross Training réunis dans une seule formule.',
    premium: true,
  },
]

export const GALERIE = [
  { img: '/assets/img/hero-plateau.jpg', alt: "Rangée d'haltères sur le plateau de musculation", legende: 'Le plateau' },
  { img: '/assets/img/salle-interieur.jpg', alt: 'Le plateau cardio de La Salle', legende: 'Cardio & machines guidées' },
  { img: '/assets/img/boxe-sombre.jpg',
    imgBw: '/assets/img/bw/boxe-sombre.jpg', alt: 'Développé militaire à la barre dans la box', legende: 'La box de cross training' },
  { img: '/assets/img/crossfit-rope.jpg', alt: 'Travail à la corde ondulatoire', legende: 'Conditioning' },
  { img: '/assets/img/barbell.jpg', alt: 'Tractions à la barre fixe', legende: 'À la force des bras' },
  { img: '/assets/img/kettlebell.jpg', alt: 'Coaching personnalisé pendant une séance', legende: 'Coaching personnalisé' },
]

/* ============================================================
   DÉTAIL DES PRESTATIONS
   Contenu propre à chaque page single. Les horaires ne sont pas ressaisis :
   ils sont extraits des plannings réels ci-dessus par `creneauxPrestation`.
   ============================================================ */

export interface DetailPrestation {
  sections: { titre: string; texte: string }[]
  galerie: { img: string; alt: string }[]
  planning?: {
    titre: string
    sources: ('collectifs' | 'cross')[]
    types?: Creneau['type'][]
    exclure?: Creneau['type'][]
  }
  acces?: { titre: string; lignes: string[] }
  tarif: { grille?: string; squash?: boolean; autres?: string[]; note?: string }
}

export const DETAILS: Record<string, DetailPrestation> = {
  musculation: {
    sections: [
      {
        titre: 'Trois espaces sur un même plateau',
        texte:
          "Un espace de charges libres pour le travail à la barre et aux haltères, un espace cardio et abdos, et des machines guidées pour apprendre les mouvements en sécurité ou isoler un groupe musculaire.",
      },
      {
        titre: "Vous n'êtes pas laissé seul devant la machine",
        texte:
          "Suivant le type d'abonnement choisi, nos éducateurs sportifs établissent avec vous un programme personnalisé, corrigent vos placements et adaptent les charges au fil des semaines.",
      },
    ],
    galerie: [
      { img: '/assets/img/hero-plateau.jpg', alt: "Rangée d'haltères sur le plateau" },
      { img: '/assets/img/home-training.jpg', alt: 'Prise des haltères sur le rack' },
      { img: '/assets/img/halteres-rack.jpg', alt: 'Travail à la barre au rack' },
    ],
    acces: {
      titre: 'Une offre accessible et adaptée à tous',
      lignes: [
        "Un accès à nos différents espaces et activités selon la formule d'abonnement choisie.",
        'Accessible dès 17 ans révolus pour le plateau de musculation et les cours collectifs.',
        "Accès libre dès 18 ans, hors horaires d'accueil, sur réservation et dans la limite de 19 personnes simultanément.",
      ],
    },
    tarif: { grille: 'fitness-musculation' },
  },

  'cross-training': {
    sections: [
      {
        titre: 'Une box dédiée, pas un coin de salle',
        texte:
          "L'espace de Cross Training est un espace à part entière. En dehors des créneaux encadrés, la box reste accessible en accès libre aux abonnés Cross Training et Premium.",
      },
      {
        titre: 'Des séances encadrées du début à la fin',
        texte:
          "Chaque cours est mené par un éducateur sportif qualifié : échauffement, explication des mouvements, correction technique et adaptation des charges. Les cours se réservent depuis l'application adhérent de La Salle.",
      },
    ],
    galerie: [
      { img: '/assets/img/boxe-sombre.jpg', alt: 'Développé militaire à la barre' },
      { img: '/assets/img/duo-halteres.jpg', alt: 'Travail au kettlebell à deux' },
      { img: '/assets/img/crossfit-rope.jpg', alt: 'Corde ondulatoire' },
    ],
    planning: { titre: 'Les créneaux de la semaine', sources: ['cross'], exclure: ['kids'] },
    tarif: { grille: 'cross-training' },
  },

  'cours-collectifs': {
    sections: [
      {
        titre: 'De nombreuses disciplines au planning',
        texte:
          "Du cardio pur au travail de mobilité, en passant par le renforcement et la danse. Chaque cours a son intensité et son objectif propres : il y a de quoi construire une semaine complète sans jamais répéter la même séance.",
      },
      {
        titre: 'Tous les niveaux dans la même salle',
        texte:
          "Les coachs proposent systématiquement une version adaptée des mouvements. Débuter en Step ou en Pilâtes ne demande aucun prérequis, et un créneau Step Débutant est prévu au planning.",
      },
    ],
    galerie: [
      { img: '/assets/img/cross-training-site.jpg', alt: 'Cours collectif en groupe' },
      { img: '/assets/img/salle-sombre.jpg', alt: 'La salle de cours collectifs' },
      { img: '/assets/img/kettlebell.jpg', alt: 'Coaching pendant un cours' },
    ],
    planning: { titre: 'Les cours de la semaine', sources: ['collectifs'], exclure: ['kids'] },
    tarif: {
      grille: 'fitness-musculation',
      note: "Les cours collectifs sont compris dans les abonnements Fitness Musculation et Premium, sans supplément. La Baby Gym fait l'objet d'un abonnement à part.",
    },
  },

  squash: {
    sections: [
      {
        titre: 'Des sessions de 40 minutes',
        texte:
          "Le court se réserve par créneau de 40 minutes. C'est le format qui permet d'enchaîner les échanges sans temps mort, et de libérer le court pour les suivants.",
      },
      {
        titre: "Ce qu'il faut prévoir",
        texte:
          "Les balles sont prêtées sur place et une raquette se loue 2 €. Chaussures à semelles blanches obligatoires.",
      },
    ],
    galerie: [{ img: '/assets/img/squash-court.svg', alt: 'Schéma du court de squash' }],
    acces: {
      titre: 'Uniquement sur réservation',
      lignes: [
        "Le court se réserve à l'accueil ou par téléphone au 04 50 03 96 63.",
        'Une session dure 40 minutes.',
        "Le squash se paie à la séance ou par pass de 10 séances, il n'entre pas dans les abonnements.",
      ],
    },
    tarif: { squash: true },
  },

  kids: {
    sections: [
      {
        titre: 'Cinq groupes, de la marche à 17 ans',
        texte:
          "Baby Gym pour les tout-petits, puis quatre niveaux de Cross Training adaptés : Mini Kids, Kids, Mini Teens et Teens. Chaque groupe travaille avec du matériel et des charges pensés pour son âge.",
      },
      {
        titre: 'La Baby Gym se fait accompagné',
        texte:
          "Pour les enfants de la marche à 3 ans, la présence d'un adulte est indispensable pendant toute la séance. L'objectif est la sociabilisation, l'autonomie et les aptitudes motrices de base : équilibres, sauts, déplacements.",
      },
    ],
    galerie: [
      { img: '/assets/img/baby-gym.jpg', alt: 'Séance enfants' },
      { img: '/assets/img/squash-site.jpg', alt: 'Travail sur box' },
    ],
    planning: { titre: 'Les créneaux enfants et ados', sources: ['collectifs', 'cross'], types: ['kids'] },
    tarif: { autres: ['Cross Kids / Teens', 'Baby Gym'] },
  },
}

/** Extrait les créneaux réels des plannings, sans jamais les ressaisir. */
export function creneauxPrestation(cfg: DetailPrestation['planning']) {
  const out: Record<string, Creneau[]> = {}
  if (!cfg) return out

  for (const jour of JOURS) {
    const tout: Creneau[] = []
    for (const src of cfg.sources) {
      const grille = src === 'cross' ? PLANNING_CROSS : PLANNING_COLLECTIFS
      tout.push(...(grille[jour] ?? []))
    }
    /* Tri chronologique : un tri de chaînes placerait 9h15 après 12h15. */
    const minutes = (h: string) => {
      const [a, b] = h.split('h')
      return Number(a) * 60 + Number(b || 0)
    }
    const filtres = tout
      .filter((c) => (cfg.types ? cfg.types.includes(c.type) : true))
      .filter((c) => (cfg.exclure ? !cfg.exclure.includes(c.type) : true))
      .sort((a, b) => minutes(a.h) - minutes(b.h))
    if (filtres.length) out[jour] = filtres
  }
  return out
}

/** Tous les cours sont sur réservation, sans exception. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function surReservation(_c: Creneau) {
  return true
}
