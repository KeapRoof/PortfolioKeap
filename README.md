# Portfolio — Haithem

Portfolio personnel développé avec **React 18** et **Tailwind CSS**.

## Stack

- React 18
- Tailwind CSS 3
- Lucide React (icônes)
- Create React App

## Installation

```bash
npm install
npm start
```

Ouvre [http://localhost:3000](http://localhost:3000) dans le navigateur.

## Build

```bash
npm run build
```

Génère le dossier `build/` optimisé pour la production.

## Structure

```
src/
├── App.jsx                  # Composant racine
├── index.js                 # Point d'entrée
├── index.css                # Styles globaux + Tailwind
├── components/
│   ├── Navigation.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Experience.jsx
│   ├── ExperienceItem.jsx
│   ├── Education.jsx
│   ├── EducationCard.jsx
│   └── Footer.jsx
└── data/
    └── portfolioData.js     # Données centralisées
```