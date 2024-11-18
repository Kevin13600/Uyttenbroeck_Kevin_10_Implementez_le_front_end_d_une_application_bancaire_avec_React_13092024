# Argent Bank - Application Bancaire React/Redux

## Présentation
Application bancaire permettant aux utilisateurs de se connecter et de gérer leurs comptes et profils.

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
- Swagger pour la documentation API

## Installation

### Prérequis
- Node.js v12
- MongoDB Community Server
- Fichier `.env` configuré (voir `.env.example`)

### Backend
```bash
cd ArgentBank-Backend
npm install
npm run dev:server
npm run populate-db  # Pour ajouter les utilisateurs de test
```
L'API est disponible sur http://localhost:3001/api-docs

### Frontend
```bash
cd ArgentBank-Frontend/argent-bank-front
npm install
npm start
```
L'application est accessible sur http://localhost:3000

## Fonctionnalités

### Phase 1 - Authentification & Profil
- Authentification utilisateur
- Gestion de profil
- Navigation sécurisée
- Modification du profil utilisateur

### Phase 2 - Gestion des Transactions
- Visualisation des transactions mensuelles par compte
- Affichage détaillé des transactions
- Modification des informations de transaction

## Points de Terminaison API

### Authentification & Profil
- `POST /api/v1/user/login`
  - Connexion utilisateur
  - Corps : `{ email: string, password: string }`

- `POST /api/v1/user/signup`
  - Création d'un nouvel utilisateur
  - Corps : `{ email: string, password: string, firstName: string, lastName: string }`

- `POST /api/v1/user/profile`
  - Obtenir le profil utilisateur
  - Nécessite un token Bearer

- `PUT /api/v1/user/profile`
  - Mettre à jour le profil utilisateur
  - Nécessite un token Bearer
  - Corps : `{ firstName: string, lastName: string }`

### Transactions
- `GET /api/v1/accounts/{accountId}/transactions`
  - Obtenir les transactions mensuelles d'un compte
  - Nécessite un token Bearer
  - Paramètres de requête : `month` (format YYYY-MM, optionnel)

- `GET /api/v1/transactions/{transactionId}`
  - Obtenir les informations détaillées d'une transaction
  - Nécessite un token Bearer

- `PUT /api/v1/transactions/{transactionId}`
  - Mettre à jour les informations d'une transaction
  - Nécessite un token Bearer
  - Corps : `{ category?: string, notes?: string }`


```

## Redux Store
- Authentification
  - Gestion du token JWT
  - État de connexion
- Profil utilisateur
  - Informations personnelles
  - Préférences
- Transactions
  - Liste des transactions
  - Détails des transactions
- Gestion des erreurs
  - Messages d'erreur
  - États de chargement

## Green Code
- Images optimisées (compression, formats adaptés)
- Composants réutilisables
- State management optimisé avec Redux
- Lazy loading des composants
- Minimisation des requêtes API

## Tests
Lancer les tests :
```bash
npm test
```

Types de tests :
- Tests unitaires (Jest)
- Tests d'intégration
- Tests des reducers Redux
- Tests des composants React

## Sécurité
- Authentification JWT
- Protection des routes sensibles
- Validation des entrées utilisateur
- Headers de sécurité configurés

## Documentation
- API Swagger : http://localhost:3001/api-docs
- Issues GitHub pour le suivi
- Documentation des composants React
- Documentation Redux Store

## Codes d'Erreur
- `400` : Requête invalide
- `401` : Non autorisé
- `403` : Accès interdit
- `404` : Ressource non trouvée
- `500` : Erreur serveur

