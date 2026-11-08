# Bérenger SESSOU — Portfolio

Portfolio personnel : une page éditoriale continue, dupliquée en français et en anglais, avec un ruban 3D chromé qui accompagne la sortie du hero.

**En ligne :** [berenger-sessou.vercel.app](https://berenger-sessou.vercel.app/)

## Stack

- **Framework** : [TanStack Start](https://tanstack.com/start) (SSR React 19) + [Vite 8](https://vite.dev/)
- **Rendu 3D** : [Three.js](https://threejs.org/) via `@react-three/fiber` et `@react-three/drei` (ruban Möbius généré en géométrie)
- **Animations** : [Framer Motion](https://motion.dev/) (scroll-linked)
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
  routes/           # index (portfolio) et __root (shell, head, polices)
  components/       # Hero, About, Projects, Experience, Contact, Portfolio (nav, i18n, modales)
  components/HeroScene.tsx  # ruban 3D (three.js)
  data/             # translations.ts (fr/en), skills.ts
  styles.css        # design system (tokens oklch, @font-face, layout éditorial)
public/             # images des projets, CV FR/EN, polices Colasta, favicon
```

## Notes

- Les ponctuations de Colasta ne sont dessinées que dans la graisse Bold ; les autres graisses déclarent un `unicode-range` restreint pour retomber sur Satoshi (`src/styles.css`).
- Le ruban 3D est chargé côté client uniquement (`SculptureStage`), pour ne pas peser sur le SSR.
- Déploiement Vercel : framework preset **TanStack Start** (voir `vercel.json`).
