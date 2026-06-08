# CV — Christ Assié
## Instructions pour Windsurf

### Fichiers du projet
```
cv_christ_assie/
├── cv-data.js     ← Toutes les données du CV (à ne pas modifier)
├── index.html     ← À créer par Windsurf
├── style.css      ← À créer par Windsurf
└── README.md      ← Ce fichier
```

---

### Ce que Windsurf doit générer

#### `index.html`
- Charger `cv-data.js` en tant que script
- Construire le HTML du CV dynamiquement (ou statiquement) en utilisant les données de `cvData`
- Structure en deux colonnes :
  - **Colonne gauche (principale)** : profil, projets académiques, compétences méthodologiques
  - **Colonne droite (barre latérale)** : contact, disponibilité, formation, logiciels/outils, savoir-être, centres d'intérêt

#### `style.css`
- Format A4 (210mm × 297mm), imprimable avec `@media print`
- Palette suggérée : fond blanc/gris clair, accent vert (#2e9e7a), en-tête sombre (#1a2744)
- Typographie lisible : titres en serif ou semi-serif, corps en sans-serif
- Sections séparées par des labels en majuscules avec accent couleur
- Tags/badges pour les outils et compétences
- CV adapté à l'impression (pas de couleurs de fond trop lourdes)

---

### Structure des données (`cvData`)

| Clé              | Type     | Contenu                                          |
|------------------|----------|--------------------------------------------------|
| `identity`       | object   | Prénom, nom, titre, initiales, **photo** (`photo.jpeg`)  |
| `disponibilite`  | object   | Type de stage, dates, label                      |
| `contact`        | object   | Téléphone, email, adresse                        |
| `profil`         | string   | Accroche / résumé de présentation                |
| `formation`      | array    | Diplômes avec établissement, période, mention    |
| `projets`        | array    | Titre, outils utilisés, points descriptifs       |
| `competences`    | object   | `logiciels[]` (catégorie + outils) + `methodologiques[]` |
| `savoirEtre`     | array    | Qualités personnelles                            |
| `interets`       | array    | Centres d'intérêt                                |

---

### Rendu attendu de l'en-tête

```
┌─────────────────────────────────────────────────────────────┐
│  Christ Assié                                    [ C A ]     │
│  MODÉLISATION STATISTIQUE, ÉCONOMÉTRIQUE & FINANCIÈRE        │
│  🟢 Stage disponible · 1er juil. – 30 sept. 2025            │
│  📞 +225 07 67 55 44 88  ✉ christassie1@gmail.com           │
└─────────────────────────────────────────────────────────────┘
```

---

### Notes
- Le fichier `cv-data.js` expose un objet global `cvData` (pas d'import/export requis si chargé via `<script>`)
- Pour un rendu statique pur HTML, Windsurf peut aussi inliner les données directement dans `index.html`
- Format cible : page unique, imprimable en A4
