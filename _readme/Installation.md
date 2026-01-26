# Installation

## Prérequis

- Node.js (v18+)
- npm ou yarn

## Installation
```bash
# Cloner le dépôt
git clone <url-du-repo>
cd redline-frontend

# Copier les variables d'environnement
cp .env.example .env

# Installer les dépendances
npm install
```

## Lancer le projet
```bash
# Mode développement (hot reload)
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run preview` | Prévisualisation du build |

## Configuration

Modifier le fichier `.env` selon ton environnement :
```dotenv
VITE_APP_NAME=Redline
VITE_API_URL=http://localhost:8080/api
```