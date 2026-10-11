// Tout le contenu du site est ici. Modifier ce fichier suffit pour mettre à jour les textes, les photos et les contacts.

export const site = {
  name: "Omar Bader",
  first: "Omar",
  last: "Bader",
  tagline: "Mannequin · Maroc",
  lead: "Mannequin basé à Casablanca. Mode, publicité, shootings photo, campagnes et cinéma.",
  city: "Casablanca · Maroc",
  year: 2026,
  bio: [
    "Je suis un modèle basé à Casablanca, avec 2 ans d’expérience dans le domaine du mannequinat et de la publicité. J’ai participé à des publicités télévisées pour des marques telles que Decathlon, Orange, NARSA et Oreo, ainsi qu’à des projets cinématographiques.",
    "Je suis ouvert à tous types de projets : mode, publicité, shootings photo, campagnes commerciales et cinéma. Je souhaite collaborer avec des marques telles que Zara, Adidas et Decathlon, ainsi qu’avec des photographes, afin de développer davantage mon expérience et mon univers artistique.",
  ],
  credits: ["Decathlon", "Orange", "NARSA", "Oreo"],
  instagram: { handle: "@omar._bader", url: "https://www.instagram.com/omar._bader" },
  whatsapp: "+212 6 13 55 86 18",
  email: "badrddineomar@gmail.com",
  whatsappLink: "https://wa.me/212613558618",
};

// Ajouter une photo : la placer dans /public/photos puis ajouter une ligne ici (largeur et hauteur en pixels).
// `series` sert aux filtres de la galerie, `tag` s'affiche sur la photo.
// L'ordre ci-dessous est celui de l'onglet « Tout » : une photo de chaque série à tour de rôle.
export const photos = [
  { id: "orange-standing", src: "/photos/orange-standing.jpg", w: 1067, h: 1600, series: "Editorial", tag: "Editorial", alt: "Omar Bader en costume orange croisé, valise verte sous le bras, fond gris studio" },
  { id: "portrait-hand", src: "/photos/portrait-hand.jpg", w: 900, h: 1600, series: "Portrait", tag: "Portrait", alt: "Portrait d’Omar Bader en chemise blanche, la main posée sur un panneau noir" },
  { id: "summer-sit-shorts", src: "/photos/summer-sit-shorts.jpg", w: 1080, h: 1350, series: "Lifestyle", tag: "Lifestyle", alt: "Omar Bader assis sur un tabouret blanc, polo rayé, short crème et lunettes rondes" },
  { id: "blue-cake-head", src: "/photos/blue-cake-head.jpg", w: 1280, h: 1600, series: "Couleur", tag: "Concept", alt: "Omar Bader en veste bleue, un petit gâteau d’anniversaire en équilibre sur la tête, fond jaune" },
  { id: "orange-walk", src: "/photos/orange-walk.jpg", w: 1080, h: 1350, series: "Editorial", tag: "Mouvement", alt: "Omar Bader de profil en pleine marche, valise verte à la main" },
  { id: "blue-headshot", src: "/photos/blue-headshot.jpg", w: 1008, h: 1600, series: "Portrait", tag: "Headshot", alt: "Headshot d’Omar Bader en veste bleue, regard face caméra, fond jaune" },
  { id: "terrace", src: "/photos/terrace.jpg", w: 1199, h: 1600, series: "Lifestyle", tag: "Lifestyle", alt: "Omar Bader en chemise crème sur une terrasse, la main contre la tempe" },
  { id: "blue-cake-candles", src: "/photos/blue-cake-candles.jpg", w: 1066, h: 1600, series: "Couleur", tag: "Concept", alt: "Omar Bader souriant devant un petit gâteau aux bougies allumées, veste bleue, fond jaune" },
  { id: "orange-chair", src: "/photos/orange-chair.jpg", w: 1080, h: 1350, series: "Editorial", tag: "Editorial", alt: "Omar Bader assis sur un fauteuil vert, regard face caméra" },
  { id: "portrait-profile", src: "/photos/portrait-profile.jpg", w: 900, h: 1600, series: "Portrait", tag: "Portrait", alt: "Portrait d’Omar Bader de profil en chemise blanche contre un fond noir et gris" },
  { id: "summer-sit-chin", src: "/photos/summer-sit-chin.jpg", w: 1080, h: 1350, series: "Lifestyle", tag: "Lifestyle", alt: "Omar Bader assis, la main sous le menton, lunettes rondes et pantalon de lin" },
  { id: "blue-object", src: "/photos/blue-object.jpg", w: 1083, h: 1600, series: "Couleur", tag: "Concept", alt: "Omar Bader en veste bleue regardant un objet translucide posé sur sa paume" },
  { id: "orange-tilt", src: "/photos/orange-tilt.jpg", w: 1080, h: 1350, series: "Editorial", tag: "Editorial", alt: "Omar Bader la tête penchée, mains dans le dos, valise posée au sol" },
  { id: "portrait-panel", src: "/photos/portrait-panel.jpg", w: 1080, h: 1350, series: "Portrait", tag: "Portrait", alt: "Portrait d’Omar Bader en chemise blanche, main sur un panneau noir, cadrage serré" },
  { id: "summer-lean", src: "/photos/summer-lean.jpg", w: 1067, h: 1600, series: "Lifestyle", tag: "Lifestyle", alt: "Omar Bader en mouvement, polo rayé, short crème et ceinture noire, fond blanc" },
  { id: "orange-lean", src: "/photos/orange-lean.jpg", w: 1067, h: 1600, series: "Editorial", tag: "Editorial", alt: "Omar Bader en appui sur une jambe, valise verte sous le bras" },
  { id: "orange-profile", src: "/photos/orange-profile.jpg", w: 1080, h: 1350, series: "Editorial", tag: "Profil", alt: "Omar Bader de profil, regard vers l’objectif, valise au sol" },
];

export const photo = (id) => photos.find((p) => p.id === id);

export const series = ["Tout", ...Array.from(new Set(photos.map((p) => p.series)))];

// Les mesures marquées null s'affichent comme « à confirmer ».
export const measurements = [
  { label: "Âge", value: "20 ans" },
  { label: "Ville", value: "Casablanca" },
  { label: "Taille", value: "180 cm" },
  { label: "Poids", value: "62 kg" },
  { label: "Tour de taille", value: "≈ 72 cm" }, // à confirmer avec le client
  { label: "Pointure", value: "40" },
  { label: "Cheveux", value: "Noisette" },
  { label: "Yeux", value: "Noisette" },
];
