# Redline Frontend

Projet React initialisé avec Vite.

## Installation
```bash
git clone 
cd redline-frontend
cp .env.example .env
npm install
npm run dev
```

## Structure du projet
```
src/
├── assets/              # Images, fonts, fichiers importés
├── components/          # Composants UI réutilisables (Button, Modal, Table...)
├── constants/           # Constantes (endpoints, regex, routes)
├── contexts/            # Contextes React (AuthContext...)
├── features/            # Modules métier
│   ├── auth/
│   ├── users/
│   ├── filieres/
│   ├── programmes/
│   ├── matieres/
│   ├── classes/
│   ├── cours/
│   ├── evaluations/
│   └── notes/
│       ├── components/  # Composants spécifiques aux notes
│       ├── hooks/       # Hooks spécifiques aux notes
│       └── services/    # Appels API notes
├── hooks/               # Hooks génériques
├── layouts/             # Layouts partagés (AuthLayout, DashboardLayout)
├── pages/               # Pages (une page = une route)
├── services/            # Services génériques
├── utils/               # Fonctions utilitaires
├── router.jsx           # Configuration des routes
├── main.jsx             # Point d'entrée
└── index.css            # Importation de tailwind
```

## Architecture

| Dossier | Rôle |
|---------|------|
| `components/` | Composants génériques réutilisables partout |
| `features/` | Logique métier par domaine (composants, hooks, services) |
| `pages/` | Assemblage des features pour chaque route |
| `layouts/` | Structure commune entre plusieurs pages |