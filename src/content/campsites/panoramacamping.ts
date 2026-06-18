import type { CampsiteConfig } from "../types";

/**
 * Panoramacamping Westendorf — honest, source-grounded config (caged build).
 * Inhalte zu 100 % aus raw/digest abgeleitet. Du-Anrede. Original-Palette (kein theme), Hero zentriert.
 */
const IMG = "/campsites/panoramacamping";

const panoramacamping: CampsiteConfig = {
  name: "Panoramacamping Westendorf",
  shortName: "Panorama",
  slug: "panoramacamping",
  ort: "Westendorf",
  region: "Tirol",
  brandKind: "Camping in Tirol",
  regionLong: "Brixental · Kitzbüheler Alpen · Tirol",

  heroVariant: "center",

  claim: "Dein Bergurlaub im Herzen der Kitzbüheler Alpen",
  claimEmphasis: "Kitzbüheler Alpen",
  emailDetail: "euer Panoramablick zur Choralpe",
  intro:
    "Bei uns campst du auf 22.000 m² mit Blick zur Choralpe: 140 voll ausgestattete Stellplätze, Sauna und Wellness, Restaurant und Gratis-Skibus — familiengeführt mitten im Brixental.",

  logo: { src: `${IMG}/logo.png`, alt: "Panoramacamping Westendorf Logo" },

  statement: {
    text: "Sommer wie Winter beginnt dein Tag hier mit freiem Blick zur Choralpe.",
    emphasis: "Sommer wie Winter",
  },

  pillars: [
    {
      title: "Mitten in den Kitzbüheler Alpen",
      text: "Vom ganzen Platz blickst du frei zur Choralpe und auf die Gipfel der Kitzbüheler Alpen.",
      image: { src: `${IMG}/panorama-brixental.webp`, alt: "Blick über das grüne Brixental bei Westendorf" },
    },
    {
      title: "Familiär geführt",
      text: "Seit Jahren führt eine Familie den Platz persönlich — vom Empfang bis zum Skibus kennt man dich.",
      image: { src: `${IMG}/rezeption.webp`, alt: "Rezeptionsgebäude des Panoramacamping Westendorf" },
    },
    {
      title: "Großzügig auf 22.000 m²",
      text: "Auf 22.000 m² verteilen sich 140 ebene Stellplätze mit viel Wiese, Bäumen und Bergblick.",
      image: { src: `${IMG}/stellplaetze-baeume.webp`, alt: "Stellplätze mit Bäumen und Bergkulisse am Panoramacamping" },
    },
  ],

  usps: [
    "140 Stellplätze",
    "Sauna & Wellness",
    "Restaurant Campingstüberl",
    "Gratis Skibus zur Gondel",
    "WLAN am ganzen Platz",
  ],

  trust: {
    heading: "Darauf ist am Panoramacamping Verlass",
    headingEmphasis: "Verlass",
    intro:
      "Seit Jahren in Familienhand: ein sonniger, windgeschützter Platz mit kurzen Wegen, freiem Bergblick und einem Team, das dich vom Tow-Service bis zum Skibus persönlich umsorgt.",
  },

  awards: [],

  saison: { von: "18. Dezember", bis: "11. Oktober" },

  hero: {
    aerial: { src: `${IMG}/hero-sommer.webp`, alt: "Bergsee-Panorama mit Spiegelung bei Westendorf" },
  },

  breather: {
    image: { src: `${IMG}/wilder-kaiser-abend.webp`, alt: "Abendrot über dem Wilden Kaiser bei Westendorf" },
    line: "Abendrot über dem Wilden Kaiser.",
  },

  camping: {
    heading: "Camping mit Panoramablick",
    intro:
      "Vom Stellplatz schaust du auf die Choralpe: 140 ebene Plätze mit Strom, Gas, Wasser, Abwasser und TV — dazu Sauna, Wellness und das Campingstüberl direkt am Platz.",
    features: [
      {
        title: "140 Stellplätze mit Vollanschluss",
        text: "140 ebene Plätze mit Strom, Gas, Wasser, Abwasser und Kabel-TV — sonnig und windgeschützt gelegen.",
        image: { src: `${IMG}/stellplaetze-sonne.webp`, alt: "Sonnige Stellplätze am Panoramacamping Westendorf" },
      },
      {
        title: "Restaurant Campingstüberl",
        text: "Im Campingstüberl gibt es Tiroler und internationale Küche, dazu eine Sonnenterrasse mit Bergblick.",
        image: { src: `${IMG}/restaurant-terrasse.webp`, alt: "Restaurant Campingstüberl mit Sonnenterrasse" },
      },
      {
        title: "Sauna & Solarium",
        text: "Zum Aufwärmen nach dem Skitag wartet die Sauna mit Relaxraum und Solarium direkt im Haus.",
        image: { src: `${IMG}/sauna.webp`, alt: "Finnische Sauna im Wellnessbereich des Panoramacamping" },
      },
      {
        title: "Wellness-Relaxraum",
        text: "Im Wellnessbereich kannst du auf gemütlichen Liegen zur Ruhe kommen und den Tag ausklingen lassen.",
        image: { src: `${IMG}/wellness-liege.webp`, alt: "Relaxraum mit Liegen im Wellnessbereich" },
      },
      {
        title: "Gemütliche Tiroler Stube",
        text: "Die gemütliche Tiroler Stube lädt zu Frühstück, einer Bar mit Dart und Tischfußball und einem Musikabend.",
        image: { src: `${IMG}/tiroler-stube.webp`, alt: "Gemütliche Tiroler Stube im Campingstüberl" },
      },
      {
        title: "Ruhige Lage unter Bäumen",
        text: "Unter alten Bäumen findest du Platz für Wohnwagen, Wohnmobil und Zelt — entspannt und ohne Hektik.",
        image: { src: `${IMG}/camperleben.webp`, alt: "Wohnwagen und Zelt auf einem schattigen Stellplatz" },
      },
    ],
  },

  kinder: {
    heading: "Hier wird Kindern nie langweilig",
    intro:
      "Trampolin, Spielplatz und ein Spielraum für Regentage — auf unserem Platz dürfen die Kleinen den ganzen Tag draußen sein.",
    features: [
      {
        title: "Großer Spielplatz",
        text: "Mitten am Platz warten Trampolin, Schaukeln, Rutsche und ein Tor auf große und kleine Entdecker.",
        image: { src: `${IMG}/spielplatz.webp`, alt: "Spielplatz mit Schaukel, Rutsche und Trampolin" },
      },
      {
        title: "Trampolinspaß",
        text: "Auf dem großen Trampolin springen sich die Kinder den ganzen Sommertag lang die Energie aus den Beinen.",
        image: { src: `${IMG}/trampolin.webp`, alt: "Kinder springen auf dem Trampolin am Panoramacamping" },
      },
      {
        title: "Spielraum für Regentage",
        text: "Bei Regen geht es in den Spielraum mit Tischtennis, Airhockey, Kletterwand und Computerspiel.",
        image: { src: `${IMG}/spielraum.webp`, alt: "Spielraum mit Airhockey und Kletterwand" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Berge, Pisten und Wege vor dem Vorzelt",
    intro:
      "Im Winter die SkiWelt Brixental und die Kitzbüheler Alpen, im Sommer Wanderwege und Gipfeltouren — alles startet direkt am Platz.",
    items: [
      {
        title: "Ski-Eldorado SkiWelt Brixental",
        text: "Der Gratis-Skibus bringt dich in Minuten zur Gondel der SkiWelt Brixental und Kitzbüheler Alpen.",
        image: { src: `${IMG}/ski-skiwelt.webp`, alt: "Skifahrer mit Blick auf den verschneiten Wilden Kaiser" },
      },
      {
        title: "Wandern & Gipfeltouren",
        text: "Im Sommer starten Wanderungen und Gipfeltouren mit weitem Blick direkt vor deinem Vorzelt.",
        image: { src: `${IMG}/gipfeltour-panorama.webp`, alt: "Gipfelkreuz mit Panorama über die Kitzbüheler Alpen" },
      },
      {
        title: "Winterzauber im Brixental",
        text: "Rundherum verschneite Hänge und Loipen — das Brixental zeigt sich von seiner ruhigen Seite.",
        image: { src: `${IMG}/winter-panorama.webp`, alt: "Verschneites Winterpanorama über dem Brixental" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Brixental",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A12 Inntalautobahn bis Wörgl-Ost, dann auf der B170 durchs Brixental nach Westendorf — der Platz liegt im Mühltal am Ortsrand.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Westendorf an der Linie Wörgl–Hochfilzen, von dort wenige Minuten mit Bus oder Taxi zum Platz.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Flughafen Innsbruck rund 70 km, Salzburg etwa 110 km — weiter mit Mietwagen oder Bahn ins Brixental.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Brixental",
    headingEmphasis: "Brixental",
    intro:
      "Grüne Wiesen im Sommer, verschneite Gipfel im Winter — ein paar Eindrücke von Platz und Umgebung.",
    tag: "Sommer & Winter",
    moreCount: 40,
    images: [
      { src: `${IMG}/westendorf-tal.webp`, alt: "Blick über Westendorf und den Campingplatz im Tal" },
      { src: `${IMG}/einfahrt-abend.webp`, alt: "Beleuchtetes Panoramacamping-Eingangsschild bei Abenddämmerung" },
      { src: `${IMG}/rose-detail.webp`, alt: "Blühende Rose am Panoramacamping Westendorf" },
      { src: `${IMG}/gedeckte-tafel.webp`, alt: "Gedeckte Tafel im Campingstüberl" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Panoramaplatz",
    headingEmphasis: "Panoramaplatz",
    intro:
      "Wähle Zeitraum und Personen — wir melden uns persönlich mit deiner Verfügbarkeit und allen Details zur Anreise.",
    pricesArePlaceholder: false,
    priceNote:
      "Hauptsaison-Richtpreise: Stellplatz + 2 Personen inkl. Anschlüsse, zzgl. Ortstaxe (Sommer € 3,50 · Winter € 2,00 p. P./Nacht). Vorsaison-Pauschale ab € 28, ACSI ab € 26 — Stand Quelle, bitte bestätigen.",
    highlight: {
      title: "ACSI & Vorsaison",
      text: "In der Nebensaison ab € 26 pro Nacht — Pauschale für 2 Personen inklusive Strom.",
    },
    categories: [
      { id: "sommer", label: "Stellplatz Sommer", perNight: 42, perExtraGuest: 13.5 },
      { id: "winter", label: "Stellplatz Winter", perNight: 45, perExtraGuest: 14.5 },
    ],
  },

  kontakt: {
    tel: "+43 5334 6166",
    telHref: "tel:+4353346166",
    mail: "info@panoramacamping.at",
    adresse: "Mühltal 70 · 6363 Westendorf · Tirol",
    coords: { lat: 47.432623, lng: 12.202171 },
  },

  languages: ["DE", "EN", "NL"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Sauna & Wellness", href: "#camping" },
      ],
    },
    { label: "Familie", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten" },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default panoramacamping;
