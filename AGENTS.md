# Conventions du portfolio

- Toutes les sections sont rendues ensemble sous des identifiants stables (`home`, `about`, `projects`, `experience`, `contact`) : la navigation scrolle au lieu de changer de vue, pour que tout le contenu reste accessible sur une seule page.
- Les surfaces, le texte, les contrôles et les couleurs des matériaux Three.js viennent des tokens sémantiques globaux (`src/styles.css`). Utiliser `--font-display` / `--font-sans`, et le mécanisme d'`unicode-range` pour les glyphes absents de Colasta.
- Le ruban 3D reste chargé côté navigateur uniquement, en `lazy` derrière l'hydratation dans `SculptureStage` ; ses transformations au scroll sont isolées du contenu pour que les sections restent lisibles et accessibles.
- Le contenu éditorial (textes, projets, expériences) vit dans `src/data/translations.ts`, en français et en anglais. Toute nouvelle section doit être ajoutée aux deux langues.

- Le dépôt a deux remotes (`origin` = portfolio/Vercel, `lovable` = project-migration-studio). Ils doivent rester au même commit : après chaque commit, pousser sur les deux.
