# Portfolio de Bouchra Miloudy

Ce projet est un portfolio personnel moderne construit avec React, Vite et Tailwind CSS. Il met en avant l’expérience professionnelle, les compétences, les projets, les certifications et les coordonnées de Bouchra Miloudy.

## Fonctionnalités

- Page d’accueil avec présentation personnelle
- Section À propos
- Parcours académique et professionnel
- Section compétences structurée par domaine
- Galerie de projets avec détails
- Section certifications
- Section de contact avec liens vers les réseaux sociaux
- Design responsive et animations modernes

## Stack technique

- React 19
- Vite
- React Router DOM
- Tailwind CSS
- Framer Motion
- Lucide React
- React Three Fiber / Drei

## Installation

1. Cloner le projet
   ```bash
   git clone <url-du-projet>
   cd portfolio_miloudy_bouchra
   ```

2. Installer les dépendances
   ```bash
   npm install
   ```

3. Lancer le projet en mode développement
   ```bash
   npm run dev
   ```

4. Ouvrir l’application dans votre navigateur à l’adresse affichée par Vite.

## Scripts disponibles

- `npm run dev` : démarre le serveur de développement
- `npm run build` : génère la version de production
- `npm run preview` : prévisualise la build
- `npm run lint` : exécute ESLint

## Structure du projet

- `src/components` : composants réutilisables et sections du portfolio
- `src/data` : données statiques (projets, compétences, expériences, certifications)
- `src/pages` : pages principales de l’application
- `public/assets` : ressources statiques et documents

## Notes

- Le CV peut être ajouté dans le dossier `public/assets/documents` et renommé en `cv.pdf` pour l’afficher dans la page dédiée.
- Les informations de contact et de contenu sont centralisées dans les fichiers du dossier `src/data` et dans les composants associés.
