# Argent Bank - Application Bancaire React/Redux

## Structure du projet
```
argent-bank/
├── ArgentBank-Backend/
└── ArgentBank-Frontend/
    ├── argent-bank-front/
    │   ├── public/
    │   ├── src/
    │   ├── package.json
    │   └── package-lock.json
    └── .github/
```

## Technologies
- React 
- Redux/Redux Toolkit
- React Router
- Node.js/MongoDB (Backend)

## Installation

### Backend
```bash
cd ArgentBank-Backend
npm install
npm run dev:server
```
L'API est disponible sur http://localhost:3001/api-docs

### Frontend
```bash
cd ArgentBank-Frontend/argent-bank-front
npm install
npm start
```

## Fonctionnalités
- Authentification utilisateur
- Gestion de profil
- Navigation sécurisée
- Modification du profil utilisateur

## API Endpoints
- POST /api/v1/user/login
- POST /api/v1/user/signup
- POST /api/v1/user/profile
- PUT /api/v1/user/profile

## Green Code
- Images optimisées
- Composants réutilisables
- State management optimisé

## Redux Store
- Authentification
- Profil utilisateur
- Gestion des erreurs

## Tests
Lancer les tests :
```bash
npm test
```

## Documentation
- API Swagger : http://localhost:3001/api-docs
- Issues GitHub pour le suivi