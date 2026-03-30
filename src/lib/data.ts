// ═══════════════════════════════════════════════════════════════
// Friseur Legende - Business Data & Configuration
// ═══════════════════════════════════════════════════════════════

export const business = {
  name: "Friseur Legende",
  tagline: "Dein Premium Barbershop in Nürnberg",
  description: "Friseur Legende - Der exklusive Herrenfriseur in Nürnberg. Hochwertige Haarschnitte, professionelle Bartpflege und erstklassiges Styling in luxuriösem Ambiente.",
  phone: "0911 81676357",
  whatsapp: "015168634550",
  email: null,
  address: {
    street: "",
    city: "Nürnberg",
    zip: "",
    country: "Deutschland"
  },
  hours: {
    weekdays: "09:00 - 19:00",
    saturday: "09:00 - 19:00",
    sunday: "Geschlossen"
  },
  socialLinks: {
    instagram: "#",
    facebook: "#",
    tiktok: "#"
  },
  radius: 50, // km
  foundedYear: 2020
};

// ═══════════════════════════════════════════════════════════════
// Main Services
// ═══════════════════════════════════════════════════════════════
export const services = [
  {
    id: "herrenhaarschnitt",
    slug: "herrenhaarschnitt",
    name: "Herrenhaarschnitt",
    shortName: "Haarschnitt",
    description: "Moderne und klassische Haarschnitte für Herren mit höchster Präzision und Detailgenauigkeit.",
    longDescription: "Unsere Herrenhaarschnitte vereinen modernste Techniken mit klassischer Handwerkskunst. Jeder Schnitt wird individuell auf Ihre Gesichtsform, Ihren Stil und Ihre Wünsche abgestimmt. Von klassischen Looks bis zu trendigen Fades – wir garantieren ein perfektes Ergebnis.",
    features: ["Klassische Schnitte", "Moderne Fades", "Skin Fades", "Scissor Cuts", "Textured Cuts"],
    icon: "scissors",
    price: "Ab 25€"
  },
  {
    id: "bartpflege",
    slug: "bartpflege-konturen",
    name: "Bartpflege & Konturen",
    shortName: "Bartpflege",
    description: "Professionelle Bartpflege mit präzisen Konturen für einen gepflegten, maskulinen Look.",
    longDescription: "Unsere Bart-Experten formen und pflegen Ihren Bart mit höchster Präzision. Von der klassischen Rasur bis zum perfekt konturierten Vollbart – wir bringen Ihren Bart in Bestform. Inklusive Pflege mit hochwertigen Produkten.",
    features: ["Bart-Trimming", "Kontur-Schnitt", "Hot Towel Rasur", "Bart-Styling", "Pflege-Behandlung"],
    icon: "beard",
    price: "Ab 15€"
  },
  {
    id: "styling",
    slug: "styling-waschen-komplettpflege",
    name: "Styling, Waschen & Komplettpflege",
    shortName: "Styling",
    description: "Vollständige Haarpflege mit Waschen, Styling und professioneller Behandlung.",
    longDescription: "Das Rundum-Paket für den perfekten Auftritt. Entspannendes Waschen mit Premium-Produkten, professionelles Styling und Pflege-Behandlungen für gesundes, glänzendes Haar. Ideal für besondere Anlässe oder als regelmäßige Verwöhnung.",
    features: ["Premium Haarwäsche", "Styling", "Kopfmassage", "Haarpflege", "Finishing"],
    icon: "styling",
    price: "Ab 20€"
  }
];

// Sub-Services für erweiterte SEO
export const subServices = [
  // Herrenhaarschnitt Sub-Services
  { id: "fade-haarschnitt", parentId: "herrenhaarschnitt", name: "Fade Haarschnitt", slug: "fade-haarschnitt" },
  { id: "skin-fade", parentId: "herrenhaarschnitt", name: "Skin Fade", slug: "skin-fade" },
  { id: "undercut", parentId: "herrenhaarschnitt", name: "Undercut", slug: "undercut" },
  { id: "buzz-cut", parentId: "herrenhaarschnitt", name: "Buzz Cut", slug: "buzz-cut" },
  { id: "pompadour", parentId: "herrenhaarschnitt", name: "Pompadour", slug: "pompadour" },
  { id: "crew-cut", parentId: "herrenhaarschnitt", name: "Crew Cut", slug: "crew-cut" },
  { id: "taper-fade", parentId: "herrenhaarschnitt", name: "Taper Fade", slug: "taper-fade" },
  { id: "high-fade", parentId: "herrenhaarschnitt", name: "High Fade", slug: "high-fade" },
  { id: "low-fade", parentId: "herrenhaarschnitt", name: "Low Fade", slug: "low-fade" },
  { id: "mid-fade", parentId: "herrenhaarschnitt", name: "Mid Fade", slug: "mid-fade" },
  { id: "textured-crop", parentId: "herrenhaarschnitt", name: "Textured Crop", slug: "textured-crop" },
  { id: "klassischer-herrenschnitt", parentId: "herrenhaarschnitt", name: "Klassischer Herrenschnitt", slug: "klassischer-herrenschnitt" },

  // Bartpflege Sub-Services
  { id: "vollbart-pflege", parentId: "bartpflege", name: "Vollbart Pflege", slug: "vollbart-pflege" },
  { id: "bart-trimmen", parentId: "bartpflege", name: "Bart Trimmen", slug: "bart-trimmen" },
  { id: "nassrasur", parentId: "bartpflege", name: "Nassrasur", slug: "nassrasur" },
  { id: "bart-konturen", parentId: "bartpflege", name: "Bart Konturen", slug: "bart-konturen" },
  { id: "bart-styling", parentId: "bartpflege", name: "Bart Styling", slug: "bart-styling" },
  { id: "hot-towel-rasur", parentId: "bartpflege", name: "Hot Towel Rasur", slug: "hot-towel-rasur" },
  { id: "3-tage-bart", parentId: "bartpflege", name: "3-Tage-Bart Pflege", slug: "3-tage-bart" },

  // Styling Sub-Services
  { id: "hochzeit-styling", parentId: "styling", name: "Hochzeit Styling", slug: "hochzeit-styling" },
  { id: "event-styling", parentId: "styling", name: "Event Styling", slug: "event-styling" },
  { id: "haarpflege-behandlung", parentId: "styling", name: "Haarpflege Behandlung", slug: "haarpflege-behandlung" },
  { id: "kopfmassage", parentId: "styling", name: "Kopfmassage", slug: "kopfmassage" }
];

// Alle Services kombiniert für SEO
export const allServices = [...services, ...subServices.map(s => ({
  ...s,
  description: `Professionelle ${s.name} bei Friseur Legende in Nürnberg.`,
  longDescription: `${s.name} vom Experten. Höchste Qualität und Präzision in unserem Premium Barbershop.`
}))];

// ═══════════════════════════════════════════════════════════════
// Cities - Nürnberg + 50km Radius
// ═══════════════════════════════════════════════════════════════
export interface City {
  name: string;
  slug: string;
  distance: number;
  population: number;
  region: string;
  isMain?: boolean;
  zipCodes?: string[];
}

export const mainCity: City = {
  name: "Nürnberg",
  slug: "nuernberg",
  distance: 0,
  zipCodes: ["90402", "90403", "90408", "90409", "90411", "90419", "90425", "90427", "90429", "90431", "90439", "90441", "90443", "90449", "90451", "90453", "90455", "90459", "90461", "90469", "90471", "90473", "90475", "90478", "90480", "90482", "90489", "90491"],
  region: "Mittelfranken",
  population: 520000,
  isMain: true
};

// Städte im 50km Umkreis von Nürnberg
export const surroundingCities: City[] = [
  // Große Städte
  { name: "Fürth", slug: "fuerth", distance: 7, population: 130000, region: "Mittelfranken" },
  { name: "Erlangen", slug: "erlangen", distance: 17, population: 115000, region: "Mittelfranken" },
  { name: "Schwabach", slug: "schwabach", distance: 14, population: 42000, region: "Mittelfranken" },
  { name: "Roth", slug: "roth", distance: 25, population: 25000, region: "Mittelfranken" },
  { name: "Zirndorf", slug: "zirndorf", distance: 10, population: 26000, region: "Mittelfranken" },
  { name: "Oberasbach", slug: "oberasbach", distance: 11, population: 18000, region: "Mittelfranken" },
  { name: "Stein", slug: "stein", distance: 9, population: 14000, region: "Mittelfranken" },
  { name: "Herzogenaurach", slug: "herzogenaurach", distance: 22, population: 24000, region: "Mittelfranken" },
  { name: "Neumarkt i.d.OPf.", slug: "neumarkt-oberpfalz", distance: 35, population: 40000, region: "Oberpfalz" },
  { name: "Ansbach", slug: "ansbach", distance: 40, population: 42000, region: "Mittelfranken" },
  { name: "Forchheim", slug: "forchheim", distance: 30, population: 32000, region: "Oberfranken" },
  { name: "Lauf a.d.Pegnitz", slug: "lauf-pegnitz", distance: 12, population: 27000, region: "Mittelfranken" },
  { name: "Wendelstein", slug: "wendelstein", distance: 15, population: 16000, region: "Mittelfranken" },
  { name: "Feucht", slug: "feucht", distance: 10, population: 14000, region: "Mittelfranken" },
  { name: "Altdorf bei Nürnberg", slug: "altdorf-nuernberg", distance: 20, population: 15000, region: "Mittelfranken" },
  { name: "Langenzenn", slug: "langenzenn", distance: 18, population: 11000, region: "Mittelfranken" },
  { name: "Cadolzburg", slug: "cadolzburg", distance: 15, population: 11000, region: "Mittelfranken" },
  { name: "Roßtal", slug: "rosstal", distance: 16, population: 10000, region: "Mittelfranken" },
  { name: "Heroldsberg", slug: "heroldsberg", distance: 10, population: 9000, region: "Mittelfranken" },
  { name: "Röthenbach a.d.Pegnitz", slug: "roethenbach-pegnitz", distance: 14, population: 12000, region: "Mittelfranken" },
  { name: "Burgthann", slug: "burgthann", distance: 18, population: 12000, region: "Mittelfranken" },
  { name: "Schwarzenbruck", slug: "schwarzenbruck", distance: 15, population: 9000, region: "Mittelfranken" },
  { name: "Kornburg", slug: "kornburg", distance: 10, population: 5000, region: "Mittelfranken" },
  { name: "Winkelhaid", slug: "winkelhaid", distance: 16, population: 4000, region: "Mittelfranken" },
  { name: "Buckenhof", slug: "buckenhof", distance: 14, population: 4000, region: "Mittelfranken" },
  { name: "Uttenreuth", slug: "uttenreuth", distance: 18, population: 5000, region: "Mittelfranken" },
  { name: "Eckental", slug: "eckental", distance: 15, population: 14000, region: "Mittelfranken" },
  { name: "Kalchreuth", slug: "kalchreuth", distance: 12, population: 3000, region: "Mittelfranken" },
  { name: "Neunkirchen am Sand", slug: "neunkirchen-sand", distance: 18, population: 8000, region: "Mittelfranken" },
  { name: "Schnaittach", slug: "schnaittach", distance: 22, population: 8000, region: "Mittelfranken" },
  { name: "Simmelsdorf", slug: "simmelsdorf", distance: 25, population: 3000, region: "Mittelfranken" },
  { name: "Reichenschwand", slug: "reichenschwand", distance: 20, population: 2500, region: "Mittelfranken" },
  { name: "Happurg", slug: "happurg", distance: 25, population: 4000, region: "Mittelfranken" },
  { name: "Pommelsbrunn", slug: "pommelsbrunn", distance: 28, population: 5000, region: "Mittelfranken" },
  { name: "Vorra", slug: "vorra", distance: 26, population: 1500, region: "Mittelfranken" },
  { name: "Alfeld", slug: "alfeld-mittelfranken", distance: 28, population: 2000, region: "Mittelfranken" },
  { name: "Offenhausen", slug: "offenhausen", distance: 30, population: 2000, region: "Mittelfranken" },
  { name: "Engelthal", slug: "engelthal", distance: 24, population: 1500, region: "Mittelfranken" },
  { name: "Henfenfeld", slug: "henfenfeld", distance: 20, population: 2000, region: "Mittelfranken" },
  { name: "Leinburg", slug: "leinburg", distance: 22, population: 7000, region: "Mittelfranken" },
  { name: "Diepersdorf", slug: "diepersdorf", distance: 20, population: 1500, region: "Mittelfranken" },
  { name: "Postbauer-Heng", slug: "postbauer-heng", distance: 28, population: 8000, region: "Oberpfalz" },
  { name: "Pyrbaum", slug: "pyrbaum", distance: 25, population: 5000, region: "Oberpfalz" },
  { name: "Sengenthal", slug: "sengenthal", distance: 32, population: 4000, region: "Oberpfalz" },
  { name: "Berg bei Neumarkt", slug: "berg-neumarkt", distance: 30, population: 8000, region: "Oberpfalz" },
  { name: "Freystadt", slug: "freystadt", distance: 38, population: 9000, region: "Oberpfalz" },
  { name: "Berching", slug: "berching", distance: 45, population: 9000, region: "Oberpfalz" },
  { name: "Dietfurt a.d.Altmühl", slug: "dietfurt-altmuehl", distance: 50, population: 6000, region: "Oberpfalz" },
  { name: "Parsberg", slug: "parsberg", distance: 48, population: 7000, region: "Oberpfalz" },
  { name: "Hemau", slug: "hemau", distance: 50, population: 9000, region: "Oberpfalz" },
  { name: "Deining", slug: "deining", distance: 35, population: 4000, region: "Oberpfalz" },
  { name: "Mühlhausen", slug: "muehlhausen-oberpfalz", distance: 32, population: 3500, region: "Oberpfalz" },
  { name: "Lauterhofen", slug: "lauterhofen", distance: 38, population: 4000, region: "Oberpfalz" },
  { name: "Pilsach", slug: "pilsach", distance: 35, population: 3000, region: "Oberpfalz" },
  { name: "Velburg", slug: "velburg", distance: 42, population: 5000, region: "Oberpfalz" },
  { name: "Lupburg", slug: "lupburg", distance: 45, population: 2500, region: "Oberpfalz" },
  { name: "Batzhausen", slug: "batzhausen", distance: 28, population: 1500, region: "Oberpfalz" },
  { name: "Georgensgmünd", slug: "georgensmuend", distance: 28, population: 7000, region: "Mittelfranken" },
  { name: "Allersberg", slug: "allersberg", distance: 25, population: 8000, region: "Mittelfranken" },
  { name: "Hilpoltstein", slug: "hilpoltstein", distance: 30, population: 14000, region: "Mittelfranken" },
  { name: "Heideck", slug: "heideck", distance: 35, population: 5000, region: "Mittelfranken" },
  { name: "Greding", slug: "greding", distance: 40, population: 7000, region: "Mittelfranken" },
  { name: "Thalmässing", slug: "thalmaessing", distance: 35, population: 5000, region: "Mittelfranken" },
  { name: "Abenberg", slug: "abenberg", distance: 22, population: 6000, region: "Mittelfranken" },
  { name: "Spalt", slug: "spalt", distance: 32, population: 6000, region: "Mittelfranken" },
  { name: "Rednitzhembach", slug: "rednitzhembach", distance: 18, population: 7000, region: "Mittelfranken" },
  { name: "Schwanstetten", slug: "schwanstetten", distance: 16, population: 8000, region: "Mittelfranken" },
  { name: "Kammerstein", slug: "kammerstein", distance: 20, population: 3000, region: "Mittelfranken" },
  { name: "Büchenbach", slug: "buechenbach", distance: 22, population: 5000, region: "Mittelfranken" },
  { name: "Ellingen", slug: "ellingen", distance: 45, population: 4000, region: "Mittelfranken" },
  { name: "Weißenburg i.Bay.", slug: "weissenburg-bayern", distance: 48, population: 18000, region: "Mittelfranken" },
  { name: "Treuchtlingen", slug: "treuchtlingen", distance: 50, population: 13000, region: "Mittelfranken" },
  { name: "Gunzenhausen", slug: "gunzenhausen", distance: 45, population: 17000, region: "Mittelfranken" },
  { name: "Pleinfeld", slug: "pleinfeld", distance: 42, population: 8000, region: "Mittelfranken" },
  { name: "Höchstadt a.d.Aisch", slug: "hoechstadt-aisch", distance: 32, population: 14000, region: "Mittelfranken" },
  { name: "Adelsdorf", slug: "adelsdorf", distance: 28, population: 8000, region: "Mittelfranken" },
  { name: "Vestenbergsgreuth", slug: "vestenbergsgreuth", distance: 30, population: 2500, region: "Mittelfranken" },
  { name: "Lonnerstadt", slug: "lonnerstadt", distance: 28, population: 2000, region: "Mittelfranken" },
  { name: "Mühlhausen", slug: "muehlhausen-mittelfranken", distance: 30, population: 3000, region: "Mittelfranken" },
  { name: "Heßdorf", slug: "hessdorf", distance: 20, population: 4000, region: "Mittelfranken" },
  { name: "Großenseebach", slug: "grossenseebach", distance: 22, population: 3500, region: "Mittelfranken" },
  { name: "Aurachtal", slug: "aurachtal", distance: 18, population: 3000, region: "Mittelfranken" },
  { name: "Oberreichenbach", slug: "oberreichenbach", distance: 16, population: 1800, region: "Mittelfranken" },
  { name: "Baiersdorf", slug: "baiersdorf", distance: 18, population: 8000, region: "Mittelfranken" },
  { name: "Bubenreuth", slug: "bubenreuth", distance: 16, population: 5000, region: "Mittelfranken" },
  { name: "Möhrendorf", slug: "moehrendorf", distance: 16, population: 5000, region: "Mittelfranken" },
  { name: "Marloffstein", slug: "marloffstein", distance: 15, population: 2000, region: "Mittelfranken" },
  { name: "Spardorf", slug: "spardorf", distance: 14, population: 5000, region: "Mittelfranken" },
  { name: "Hemhofen", slug: "hemhofen", distance: 22, population: 5000, region: "Mittelfranken" },
  { name: "Röttenbach", slug: "roettenbach", distance: 18, population: 4000, region: "Mittelfranken" },
  { name: "Eggolsheim", slug: "eggolsheim", distance: 35, population: 6000, region: "Oberfranken" },
  { name: "Hallerndorf", slug: "hallerndorf", distance: 32, population: 4000, region: "Oberfranken" },
  { name: "Hirschaid", slug: "hirschaid", distance: 35, population: 12000, region: "Oberfranken" },
  { name: "Strullendorf", slug: "strullendorf", distance: 38, population: 8000, region: "Oberfranken" },
  { name: "Poxdorf", slug: "poxdorf", distance: 28, population: 1500, region: "Oberfranken" },
  { name: "Effeltrich", slug: "effeltrich", distance: 26, population: 2500, region: "Oberfranken" },
  { name: "Langensendelbach", slug: "langensendelbach", distance: 22, population: 3500, region: "Oberfranken" },
  { name: "Dormitz", slug: "dormitz", distance: 20, population: 3000, region: "Oberfranken" },
  { name: "Neunkirchen am Brand", slug: "neunkirchen-brand", distance: 22, population: 8000, region: "Oberfranken" },
  { name: "Hetzles", slug: "hetzles", distance: 20, population: 2000, region: "Oberfranken" },
  { name: "Kleinsendelbach", slug: "kleinsendelbach", distance: 18, population: 2000, region: "Oberfranken" },
  { name: "Gräfenberg", slug: "graefenberg", distance: 28, population: 4000, region: "Oberfranken" },
  { name: "Igensdorf", slug: "igensdorf", distance: 25, population: 5000, region: "Oberfranken" },
  { name: "Weißenohe", slug: "weissenohe", distance: 22, population: 1500, region: "Oberfranken" },
  { name: "Kirchehrenbach", slug: "kirchehrenbach", distance: 30, population: 2500, region: "Oberfranken" },
  { name: "Wiesenthau", slug: "wiesenthau", distance: 32, population: 2000, region: "Oberfranken" },
  { name: "Weilersbach", slug: "weilersbach", distance: 30, population: 3000, region: "Oberfranken" },
  { name: "Pretzfeld", slug: "pretzfeld", distance: 35, population: 3000, region: "Oberfranken" },
  { name: "Ebermannstadt", slug: "ebermannstadt", distance: 38, population: 7000, region: "Oberfranken" },
  { name: "Unterleinleiter", slug: "unterleinleiter", distance: 40, population: 1500, region: "Oberfranken" },
  { name: "Gößweinstein", slug: "goessweinstein", distance: 42, population: 4000, region: "Oberfranken" },
  { name: "Egloffstein", slug: "egloffstein", distance: 35, population: 2000, region: "Oberfranken" },
  { name: "Obertrubach", slug: "obertrubach", distance: 38, population: 2500, region: "Oberfranken" },
  { name: "Betzenstein", slug: "betzenstein", distance: 32, population: 2500, region: "Oberfranken" },
  { name: "Pottenstein", slug: "pottenstein", distance: 40, population: 5000, region: "Oberfranken" },
  { name: "Pegnitz", slug: "pegnitz", distance: 48, population: 14000, region: "Oberfranken" },
  { name: "Creußen", slug: "creussen", distance: 50, population: 5000, region: "Oberfranken" },
  { name: "Auerbach i.d.OPf.", slug: "auerbach-oberpfalz", distance: 50, population: 9000, region: "Oberpfalz" },
  { name: "Vilseck", slug: "vilseck", distance: 50, population: 6000, region: "Oberpfalz" },
  { name: "Hirschau", slug: "hirschau", distance: 50, population: 6000, region: "Oberpfalz" },
  { name: "Schnaittenbach", slug: "schnaittenbach", distance: 50, population: 4000, region: "Oberpfalz" },
  { name: "Sulzbach-Rosenberg", slug: "sulzbach-rosenberg", distance: 45, population: 20000, region: "Oberpfalz" },
  { name: "Amberg", slug: "amberg", distance: 50, population: 44000, region: "Oberpfalz" },
  { name: "Hersbruck", slug: "hersbruck", distance: 30, population: 12000, region: "Mittelfranken" },
  { name: "Hartenstein", slug: "hartenstein", distance: 35, population: 1500, region: "Mittelfranken" },
  { name: "Velden", slug: "velden-pegnitz", distance: 32, population: 2500, region: "Mittelfranken" },
  { name: "Neuhaus a.d.Pegnitz", slug: "neuhaus-pegnitz", distance: 40, population: 4000, region: "Mittelfranken" },
  { name: "Kirchensittenbach", slug: "kirchensittenbach", distance: 28, population: 2500, region: "Mittelfranken" },
  { name: "Offenhausen", slug: "offenhausen-mittelfranken", distance: 26, population: 2500, region: "Mittelfranken" },
  { name: "Etzelwang", slug: "etzelwang", distance: 38, population: 1500, region: "Oberpfalz" },
  { name: "Weigendorf", slug: "weigendorf", distance: 40, population: 1500, region: "Oberpfalz" },
  { name: "Birgland", slug: "birgland", distance: 42, population: 2000, region: "Oberpfalz" },
  { name: "Königstein", slug: "koenigstein", distance: 35, population: 2000, region: "Oberpfalz" },
  { name: "Edelsfeld", slug: "edelsfeld", distance: 40, population: 2500, region: "Oberpfalz" },
  { name: "Neukirchen b.Sulzbach-Rosenberg", slug: "neukirchen-sulzbach", distance: 42, population: 3000, region: "Oberpfalz" },
  { name: "Illschwang", slug: "illschwang", distance: 38, population: 2000, region: "Oberpfalz" },
  { name: "Kastl", slug: "kastl-oberpfalz", distance: 45, population: 3000, region: "Oberpfalz" },
  { name: "Ursensollen", slug: "ursensollen", distance: 48, population: 4000, region: "Oberpfalz" },
  { name: "Ensdorf", slug: "ensdorf-oberpfalz", distance: 48, population: 2500, region: "Oberpfalz" },
  { name: "Rieden", slug: "rieden-oberpfalz", distance: 50, population: 2500, region: "Oberpfalz" },
  { name: "Vilshofen", slug: "vilshofen-oberpfalz", distance: 50, population: 1500, region: "Oberpfalz" },
  { name: "Freihung", slug: "freihung", distance: 50, population: 2500, region: "Oberpfalz" },
  { name: "Gebenbach", slug: "gebenbach", distance: 50, population: 2000, region: "Oberpfalz" },
  { name: "Hahnbach", slug: "hahnbach", distance: 48, population: 5000, region: "Oberpfalz" },
  { name: "Poppenricht", slug: "poppenricht", distance: 50, population: 5000, region: "Oberpfalz" },
  { name: "Kümmersbruck", slug: "kuemmersbruck", distance: 48, population: 10000, region: "Oberpfalz" },
  { name: "Ebermannsdorf", slug: "ebermannsdorf", distance: 50, population: 3000, region: "Oberpfalz" }
];

// Alle Städte kombiniert
export const allCities: City[] = [mainCity, ...surroundingCities];

// ═══════════════════════════════════════════════════════════════
// Testimonials / Reviews
// ═══════════════════════════════════════════════════════════════
export const testimonials = [
  {
    id: 1,
    name: "Michael S.",
    city: "Nürnberg",
    rating: 5,
    text: "Der beste Barbershop in Nürnberg! Perfekter Fade und super Atmosphäre. Hier fühlt man sich wie ein König.",
    service: "Fade Haarschnitt"
  },
  {
    id: 2,
    name: "Thomas K.",
    city: "Fürth",
    rating: 5,
    text: "Endlich ein Friseur, der versteht was ich will. Die Bartpflege ist erstklassig und das Ambiente ist unglaublich.",
    service: "Bartpflege"
  },
  {
    id: 3,
    name: "Alexander M.",
    city: "Erlangen",
    rating: 5,
    text: "Premium Qualität zu fairen Preisen. Die Jungs hier sind echte Profis. Fahre extra aus Erlangen hierher!",
    service: "Herrenhaarschnitt"
  }
];

// ═══════════════════════════════════════════════════════════════
// Statistics
// ═══════════════════════════════════════════════════════════════
export const stats = [
  { value: "5+", label: "Jahre Erfahrung", icon: "experience" },
  { value: "10.000+", label: "Zufriedene Kunden", icon: "customers" },
  { value: "50km", label: "Einzugsgebiet", icon: "area" },
  { value: "100%", label: "Qualität", icon: "quality" }
];

// ═══════════════════════════════════════════════════════════════
// Features / Why Us
// ═══════════════════════════════════════════════════════════════
export const features = [
  {
    title: "Premium Ambiente",
    description: "Luxuriöses Interieur mit modernster Ausstattung für ein unvergessliches Erlebnis.",
    icon: "crown"
  },
  {
    title: "Erfahrene Barbiere",
    description: "Unser Team besteht aus ausgebildeten Experten mit jahrelanger Erfahrung.",
    icon: "scissors"
  },
  {
    title: "Beste Produkte",
    description: "Wir verwenden ausschließlich hochwertige Pflegeprodukte für optimale Ergebnisse.",
    icon: "sparkles"
  },
  {
    title: "Pünktlich & Zuverlässig",
    description: "Keine langen Wartezeiten. Ihr Termin wird respektiert.",
    icon: "clock"
  },
  {
    title: "Faire Preise",
    description: "Premium Qualität muss nicht teuer sein. Transparente Preise ohne versteckte Kosten.",
    icon: "tag"
  },
  {
    title: "Zentrale Lage",
    description: "Leicht erreichbar in Nürnberg mit guten Parkmöglichkeiten.",
    icon: "location"
  }
];

// ═══════════════════════════════════════════════════════════════
// Process Steps
// ═══════════════════════════════════════════════════════════════
export const processSteps = [
  {
    step: 1,
    title: "Termin buchen",
    description: "Rufen Sie uns an oder schreiben Sie uns auf WhatsApp für Ihren Wunschtermin."
  },
  {
    step: 2,
    title: "Beratung",
    description: "Wir besprechen Ihre Wünsche und empfehlen den perfekten Style für Sie."
  },
  {
    step: 3,
    title: "Perfektion",
    description: "Genießen Sie unseren Service und verlassen Sie uns mit einem perfekten Look."
  }
];

// ═══════════════════════════════════════════════════════════════
// Gallery Images (Placeholder URLs - Replace with real images)
// ═══════════════════════════════════════════════════════════════
export const galleryImages = [
  { id: 1, src: "/images/gallery/salon-1.jpg", alt: "Friseur Legende Salon Interior", category: "salon" },
  { id: 2, src: "/images/gallery/haircut-1.jpg", alt: "Professioneller Herrenhaarschnitt", category: "haircut" },
  { id: 3, src: "/images/gallery/beard-1.jpg", alt: "Bartpflege und Konturen", category: "beard" },
  { id: 4, src: "/images/gallery/salon-2.jpg", alt: "Luxuriöses Barbershop Ambiente", category: "salon" },
  { id: 5, src: "/images/gallery/haircut-2.jpg", alt: "Moderner Fade Haarschnitt", category: "haircut" },
  { id: 6, src: "/images/gallery/styling-1.jpg", alt: "Professionelles Styling", category: "styling" }
];

// ═══════════════════════════════════════════════════════════════
// Navigation Items
// ═══════════════════════════════════════════════════════════════
export const navigation = [
  { name: "Startseite", href: "/" },
  { name: "Leistungen", href: "/leistungen" },
  { name: "Städte", href: "/staedte" },
  { name: "Galerie", href: "/galerie" },
  { name: "Kontakt", href: "/kontakt" }
];

// ═══════════════════════════════════════════════════════════════
// Footer Links
// ═══════════════════════════════════════════════════════════════
export const footerLinks = {
  services: services.map(s => ({ name: s.name, href: `/service/${s.slug}` })),
  cities: [mainCity, ...surroundingCities.slice(0, 5)].map(c => ({ name: c.name, href: `/${c.slug}` })),
  legal: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" }
  ]
};

// ═══════════════════════════════════════════════════════════════
// Helper Functions
// ═══════════════════════════════════════════════════════════════
export function getAllServiceSlugs() {
  return [...services.map(s => s.slug), ...subServices.map(s => s.slug)];
}

export function getAllCitySlugs() {
  return allCities.map(c => c.slug);
}

export function getServiceBySlug(slug: string) {
  return services.find(s => s.slug === slug) || subServices.find(s => s.slug === slug);
}

export function getCityBySlug(slug: string) {
  return allCities.find(c => c.slug === slug);
}

// Generate all possible city x service combinations
export function generateAllPages() {
  const pages: Array<{ city: string; service: string; path: string }> = [];

  for (const city of allCities) {
    // City page
    pages.push({ city: city.slug, service: "", path: `/${city.slug}` });

    // City x Service pages
    for (const service of [...services, ...subServices]) {
      pages.push({
        city: city.slug,
        service: service.slug,
        path: `/${city.slug}/${service.slug}`
      });
    }
  }

  // Service-only pages
  for (const service of [...services, ...subServices]) {
    pages.push({ city: "", service: service.slug, path: `/service/${service.slug}` });
  }

  return pages;
}

// SEO Meta Generator
export function generateMeta(type: "city" | "service" | "cityService", city?: string, service?: string) {
  const cityData = city ? getCityBySlug(city) : null;
  const serviceData = service ? getServiceBySlug(service) : null;

  // Get description from service (main services have description, sub-services need parent)
  const getServiceDescription = (svc: typeof serviceData) => {
    if (!svc) return "";
    if ("description" in svc) return svc.description;
    const parent = services.find(s => s.id === (svc as typeof subServices[0]).parentId);
    return parent?.description || `Professionelle ${svc.name} bei Friseur Legende.`;
  };

  if (type === "city" && cityData) {
    return {
      title: `Herrenfriseur in ${cityData.name} | Friseur Legende`,
      description: `Premium Barbershop für ${cityData.name} und Umgebung. Professionelle Haarschnitte, Bartpflege & Styling. ☎ ${business.phone}`
    };
  }

  if (type === "service" && serviceData) {
    return {
      title: `${serviceData.name} | Friseur Legende Nürnberg`,
      description: `${getServiceDescription(serviceData)} Jetzt Termin vereinbaren! ☎ ${business.phone}`
    };
  }

  if (type === "cityService" && cityData && serviceData) {
    return {
      title: `${serviceData.name} in ${cityData.name} | Friseur Legende`,
      description: `${serviceData.name} vom Profi in ${cityData.name}. ${getServiceDescription(serviceData)} ☎ ${business.phone}`
    };
  }

  return {
    title: "Friseur Legende | Premium Barbershop Nürnberg",
    description: business.description
  };
}
