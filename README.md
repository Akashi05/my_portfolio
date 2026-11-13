# Bérenger SESSOU · Portfolio

Portfolio personnel : une page éditoriale continue, en français et en anglais, construite autour d'un ruban 3D chromé que le visiteur peut faire tourner et qui accompagne la lecture.

**En ligne :** [berenger-sessou.vercel.app](https://berenger-sessou.vercel.app/)

## Aperçu

- **Hero en diagonale** : accroche en haut à gauche (« Bonjour à toi, »), ruban 3D au centre, signature « Je suis Bérenger SESSOU » en bas à droite avec un texte qui s'écrit lettre par lettre (domaines d'intervention). Sur mobile, tout s'empile verticalement.
- **Ruban interactif** : il descend et glisse sous « Qui suis-je » pendant le scroll. À la souris on le fait tourner en glissant (avec inertie), un clic ou un tap lui donne une impulsion. Le texte, les boutons et les liens restent cliquables devant lui.
- **Projets en carrousel horizontal** : 8 projets mis en avant qui défilent seuls jusqu'à la carte « Voir plus de projets », puis reviennent au début. Les bords sont flous avec des flèches au survol, le défilement se met en pause au survol ou au toucher. « Voir plus » déroule les 8 autres projets à la suite, chacun ouvrant sa fiche détaillée.
- **Motion** : titres de section qui sortent du bas, mots du « Qui suis-je » qui s'allument au scroll, lignes de l'expérience qui se tracent, compétences qui apparaissent en se précisant, fil de lecture en haut de l'écran. Les animations se rejouent à chaque retour sur une section.
- **Survol en projecteur** (compétences et expérience) : la ligne survolée s'éclaire, les autres s'estompent. Halo clair en mode sombre, halo noir en mode clair.
- **Navigation** : en-tête transparent intégré à la mise en page, avec un voile flou sous le texte. Il reste visible dans le hero, puis se range en descendant et revient en remontant.
- **Thème** : sombre par défaut dès le premier affichage (script dans `__root.tsx`, sans flash clair). Un choix clair enregistré dans le navigateur est respecté.
- **Accessibilité** : avec `prefers-reduced-motion`, le texte animé, le carrousel, le ruban et les révélations passent en version statique.

## Stack

- **Framework** : [TanStack Start](https://tanstack.com/start) (SSR React 19) + [Vite 8](https://vite.dev/)
- **Rendu 3D** : [Three.js](https://threejs.org/) via `@react-three/fiber` et `@react-three/drei` (ruban Möbius généré en géométrie)
- **Animations** : [Framer Motion](https://motion.dev/) (scroll, entrées, carrousel)
- **Styles** : [Tailwind CSS 4](https://tailwindcss.com/) + tokens sémantiques dans `src/styles.css`
- **Polices** : Colasta (display, fichiers locaux) et Satoshi (texte, Fontshare)
- **Formulaire** : [Formspree](https://formspree.io/) (`xdapdrpv`)
- **Déploiement** : [Vercel](https://vercel.com/), build Nitro (`nitro` détecte `VERCEL=1` et produit `.vercel/output`)

## Développement

```bash
npm install
npm run dev        # http://localhost:5173
```

Autres commandes :

```bash
npm run build      # build de production (sortie Nitro dans .output ou .vercel/output)
npm run preview    # sert le build local
npm run lint
npm run test
npm run format
```

## Structure

```
src/
  routes/               # index (portfolio, SEO) et __root (shell, head, polices, thème initial)
  components/
    Portfolio.tsx       # page, navigation, langue, thème, modale projet, pied de page
    Hero.tsx            # composition en diagonale, texte animé (Typewriter), liens CV/réseaux
    About.tsx           # Qui suis-je, formation, langues, compétences
    Projects.tsx        # carrousel horizontal (auto-défilement, flèches, « Voir plus »)
    Experience.tsx      # parcours
    Contact.tsx         # coordonnées et formulaire
    SculptureStage.tsx  # calque du ruban 3D (position au scroll, interaction souris/tactile)
    HeroScene.tsx       # scène three.js du ruban (matériaux et lumières par thème)
    Reveal.tsx          # révélation « depuis le bas » des titres
    ScrollWords.tsx     # texte dont les mots s'allument au scroll
    ScrollProgress.tsx  # fil de lecture
    ui/                 # composants shadcn
  data/
    translations.ts     # tous les textes FR/EN : hero, about, projets, expérience, contact, pied de page
    skills.ts           # compétences par niveau d'autonomie
  lib/
    ribbonInput.ts      # état partagé entre le pointeur et la scène 3D (glisser, inertie)
  styles.css            # design system (tokens oklch, @font-face, layout éditorial, voile de nav, survol projecteur)
  test/                 # tests (routage)
public/                 # images des projets, CV FR/EN, polices Colasta, favicon
```

## Modifier le contenu

Tout le texte éditorial vit dans `src/data/translations.ts`, en français (`fr`) et en anglais (`en`). Toute nouvelle clé doit exister dans les deux langues.

- **Domaines du hero** : `hero.domains` (texte animé) et `hero.domains_static` (version fixe, lecteurs d'écran et animations réduites).
- **Projets en avant** : `projects_data`, triés par `date` (le plus récent en premier). Un projet sans `media` affiche son titre en grand à la place de l'image.
- **Autres projets** : `other_projects`, même structure que `projects_data` ; ils se déroulent à la suite des autres via « Voir plus ».
- **Expérience** : `experience_data`, du plus récent au plus ancien.
- **Compétences** : `src/data/skills.ts` (groupes « En autonomie » et « Déjà pratiqué ») et libellés de groupes dans `about.skill_cats`.
- **CV** : remplacer `public/CV_Bérenger_Sessou_FR.pdf` et `public/CV_Berenger_Sessou_EN.pdf` en gardant exactement ces noms (ils sont référencés dans `Hero.tsx`).
- **SEO** : titre et description dans `src/routes/index.tsx`.

Les conventions de structure (sections rendues ensemble sous les identifiants `home`, `about`, `projects`, `experience`, `contact`) sont détaillées dans `AGENTS.md`.

## Synchronisation des dépôts

Le même code vit dans deux dépôts qui partagent la même histoire :

| remote | dépôt | usage |
| --- | --- | --- |
| `origin` | [Akashi05/my_portfolio](https://github.com/Akashi05/my_portfolio) | déploiement Vercel |
| `lovable` | [Akashi05/project-migration-studio](https://github.com/Akashi05/project-migration-studio) | éditeur Lovable |

Chaque modification doit être poussée vers les deux, sinon ils divergent :

```bash
git remote add lovable https://github.com/Akashi05/project-migration-studio.git  # une seule fois
git push origin main
git push lovable main
```

Si Lovable a produit des commits en premier, les récupérer puis repousser partout :

```bash
git pull lovable main
git push origin main
git push lovable main
```

## Notes

- Les ponctuations de Colasta ne sont dessinées que dans la graisse Bold ; les autres graisses déclarent un `unicode-range` restreint pour retomber sur Satoshi (`src/styles.css`).
- Le ruban 3D est chargé côté client uniquement (`SculptureStage`), pour ne pas peser sur le SSR.
- Le ruban est plus clair en mode clair (graphite clair, lumières blanches) pour garder des reflets ; en mode sombre il est ivoire.
- Déploiement Vercel : framework preset **TanStack Start** (voir `vercel.json`).
