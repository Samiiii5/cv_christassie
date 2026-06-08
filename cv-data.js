// ============================================================
//  CV — Christ Assié
//  Fichier de données structurées pour la génération du CV
//  À importer dans index.html ou utiliser avec un framework
// ============================================================

const cvData = {

  // ── IDENTITÉ ──────────────────────────────────────────────
  identity: {
    prenom: "Christ",
    nom: "Assié",
    titre: "Modélisation Statistique, Économétrique & Financière",
    initiales: "CA",
    photo: "photo.jpeg", // photo de profil — même dossier que index.html
  },

  // ── DISPONIBILITÉ ─────────────────────────────────────────
  disponibilite: {
    type: "Stage de qualification",
    duree: "3 mois",
    debut: "1er juillet 2025",
    fin: "30 septembre 2025",
    label: "Disponible du 1er juillet au 30 septembre 2025",
  },

  // ── CONTACT ───────────────────────────────────────────────
  contact: {
    telephone: "+225 07 67 55 44 88",
    email: "christassie1@gmail.com",
    adresse: "Abidjan, Côte d'Ivoire",
  },

  // ── PROFIL / ACCROCHE ─────────────────────────────────────
  profil:
    "Récemment diplômé d'une Licence en Modélisation Statistique, Économétrique et Financière (MOSEF), passionné d'économie, de finance et d'analyse de données, je souhaite rejoindre votre équipe pour un stage de qualification de 3 mois.",

  // ── FORMATION ─────────────────────────────────────────────
  formation: [
    {
      diplome: "Licence MOSEF",
      intitule:
        "Modélisation Statistique, Économétrique et Financière",
      etablissement: "Université Jean Lorougnon Guédé",
      periode: "2023 – 2026",
      mention: "Assez-Bien",
      matieres: [
        "Économie",
        "Mathématiques",
        "Statistiques",
        "Finance",
        "Économétrie",
      ],
    },
    {
      diplome: "Baccalauréat Série D",
      intitule: "Sciences expérimentales",
      etablissement: "Lycée Classique d'Abidjan",
      periode: "2020 – 2023",
      mention: "Assez-Bien",
      matieres: [],
    },
  ],

  // ── PROJETS ACADÉMIQUES ───────────────────────────────────
  projets: [
    {
      titre: "Analyse du risque de crédit des entreprises par le scoring",
      outils: ["Excel", "Modèle Credit Men", "Modèle BCEAO", "Modèle Beaver"],
      points: [
        "Construction et application des modèles de scoring Credit Men, BCEAO et Beaver à partir d'une base de données de 404 entreprises et de ratios financiers.",
        "Classification des entreprises selon leur niveau de risque de défaillance, analyse comparative des résultats et formulation de recommandations d'aide à la décision de crédit.",
      ],
    },
    {
      titre: "Simulation d'une politique économique sous GAMS",
      outils: ["GAMS", "Modèle CGE"],
      points: [
        "Analyse de l'impact d'une hausse de 8 % du travail qualifié dans le secteur du BTP à l'aide d'un modèle d'équilibre général calculable (CGE).",
        "Évaluation des effets sur l'emploi, la production, les prix et les principaux indicateurs macroéconomiques.",
      ],
    },
    {
      titre: "Étude sur la vulnérabilité des ménages à Daloa",
      outils: ["Google Forms", "Sondage", "Analyse statistique"],
      points: [
        "Élaboration d'un questionnaire Google Forms, collecte de données par sondage.",
        "Analyse statistique des facteurs socio-économiques influençant la vulnérabilité des ménages.",
      ],
    },
    {
      titre: "Application VBA de gestion des attestations foncières",
      outils: ["Excel", "VBA"],
      points: [
        "Développement en équipe d'une application Excel/VBA automatisant la création et la gestion des attestations foncières.",
      ],
    },
  ],

  // ── COMPÉTENCES ───────────────────────────────────────────
  competences: {
    logiciels: [
      {
        categorie: "Analyse de données",
        outils: ["R / RStudio", "Stata", "EViews"],
      },
      {
        categorie: "Programmation",
        outils: ["Python", "VBA Excel"],
      },
      {
        categorie: "Modélisation économique",
        outils: ["GAMS"],
      },
      {
        categorie: "Pack Office",
        outils: ["Excel", "Word", "PowerPoint"],
      },
    ],

    methodologiques: [
      "Analyse et traitement de données",
      "Modélisation économétrique et prévision de séries temporelles",
      "Machine learning et classification",
      "Analyse des marchés financiers et gestion des risques",
      "Notions en comptabilité générale et analytique",
    ],
  },

  // ── SAVOIR-ÊTRE ───────────────────────────────────────────
  savoirEtre: [
    "Sens de l'écoute et du relationnel",
    "Rigoureux et curieux",
    "Capacité à synthétiser",
    "Esprit critique et d'analyse",
  ],

  // ── CENTRES D'INTÉRÊT ─────────────────────────────────────
  interets: ["Actualité", "Football"],
};

// Export pour usage en module ES6 ou Node.js
// export default cvData;        // ES modules
// module.exports = cvData;      // CommonJS

