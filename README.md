# Application éducative – Architecture Microservices

## 1. Présentation générale

Ce projet consiste à la réalisation d’une **application académique** basée sur une **architecture microservices**, développée dans le cadre d’un projet pédagogique. L’objectif principal est de concevoir une application distribuée moderne permettant la gestion des **étudiants**, des **cours** et des **examens**, tout en respectant les bonnes pratiques de conception logicielle et les standards de **Spring Cloud**.

L’application met en œuvre une séparation claire des responsabilités entre les microservices, une communication inter-services maîtrisée, ainsi qu’une interface web moderne développée en **React**.

---

## 2. Objectifs du projet

Les objectifs principaux de ce projet sont :

* Comprendre et appliquer les principes d’une architecture microservices
* Mettre en place une infrastructure Spring Cloud complète
* Centraliser la configuration des services
* Implémenter la découverte dynamique des services
* Utiliser une API Gateway comme point d’entrée unique
* Développer une interface front-end moderne pour l’accès aux fonctionnalités
* Travailler en équipe avec un versionnement Git collaboratif

---

## 3. Architecture globale

L’architecture de l’application est organisée autour des composants suivants :

### 3.1 Microservices métier

* **MS Étudiants** : gestion des étudiants et de leurs profils
* **MS Cours** : gestion des cours et des examens associés

Chaque microservice :

* est indépendant,
* possède sa propre base de données,
* expose des API REST,
* est enregistré dynamiquement dans Eureka.

### 3.2 Microservice Interface (MS-Interface)

Le microservice **MS-Interface** joue le rôle de portail d’accès.
Il agrège les données provenant des microservices métier afin de fournir une API simplifiée destinée au front-end.

### 3.3 Services d’infrastructure

* **Spring Cloud Config Server** : configuration centralisée (mode Git)
* **Eureka Server** : découverte des services
* **Spring Cloud Gateway** : point d’entrée unique et routage dynamique

### 3.4 Front-end

* Application web développée en **React**
* Interface utilisateur moderne (portail académique)
* Consommation des API via la Gateway

---

## 4. Technologies utilisées

### Backend

* Java 17
* Spring Boot 3.x
* Spring Cloud 2023.x
* Spring Cloud Config Server
* Spring Cloud Netflix Eureka
* Spring Cloud Gateway
* Spring Data JPA
* Base de données H2 (in-memory)
* Maven

### Frontend

* React
* JavaScript (ES6)
* HTML5 / CSS3

### Outils

* Git & GitHub (versionnement)
* Postman (tests des API)
* IntelliJ IDEA / VS Code

---

## 5. Description des microservices

### 5.1 Config Server

Le Config Server permet de centraliser les fichiers de configuration de tous les microservices.

* Mode : Git
* Avantages :

  * configuration versionnée
  * modification sans recompilation
  * cohérence entre les environnements

Les fichiers de configuration sont stockés dans un dépôt Git sous forme de fichiers YAML.

---

### 5.2 Eureka Server

Le serveur Eureka assure la découverte dynamique des services.

Fonctionnalités :

* enregistrement automatique des microservices
* supervision de leur état (UP / DOWN)
* support du load balancing

Accès :

```
http://localhost:8761
```

---

### 5.3 API Gateway

L’API Gateway constitue le **point d’entrée unique** de l’application.

Rôles principaux :

* routage dynamique des requêtes
* masquage des ports internes
* préparation à l’intégration de la sécurité

Toutes les requêtes du front-end transitent par la Gateway.

---

### 5.4 Microservice MS Étudiants

Responsabilités :

* gestion CRUD des étudiants
* gestion des profils étudiants

Fonctionnalités principales :

* ajouter un étudiant
* consulter la liste des étudiants
* consulter un étudiant par ID
* modifier ou supprimer un étudiant

---

### 5.5 Microservice MS Cours

Responsabilités :

* gestion des cours
* gestion des examens associés

Modèle de données :

* **Course** : id, titre, description
* **Exam** : id, titre, date

Relation :

* Course (1) → (N) Exam

Architecture interne :

* couche Entity
* couche Repository
* couche Service
* couche Controller REST

---

### 5.6 Microservice MS-Interface

Rôle :

* agrégation des données des microservices Étudiants et Cours
* simplification de l’accès pour le front-end

Avantages :

* réduction du nombre d’appels côté client
* séparation claire entre logique métier et présentation

---

## 6. Front-end React (Portail académique)

L’interface web permet :

* l’affichage du tableau de bord académique
* la gestion des étudiants (liste, ajout, profil)
* la gestion des cours (liste, ajout)
* la consultation des examens

L’application communique exclusivement avec le backend via l’API Gateway.

---

## 7. Démarrage du projet

### Ordre de lancement (important)

1. Config Server

```bash
cd config-server
mvn spring-boot:run
```

2. Eureka Server

```bash
cd eureka-server
mvn spring-boot:run
```

3. Microservices métier

```bash
cd ms-etudiants
mvn spring-boot:run

cd ms-cours
mvn spring-boot:run
```

4. MS-Interface

```bash
cd ms-interface
mvn spring-boot:run
```

5. API Gateway

```bash
cd gateway-service
mvn spring-boot:run
```

6. Front-end React

```bash
cd frontend-react
npm install
npm start
```

---

## 8. Tests et validation

* Tests des API REST réalisés avec Postman
* Vérification du routage via la Gateway
* Vérification de l’enregistrement des services dans Eureka
* Validation de l’interface React et de l’affichage des données

---

## 9. Gestion du versionnement

Le projet est géré via un dépôt GitHub commun.

* mono-repository
* un dossier par microservice
* commits réguliers
* collaboration entre les membres de l’équipe

---

## 10. Conclusion

Ce projet d’application académique a permis de mettre en pratique les concepts fondamentaux des architectures microservices à l’aide de Spring Boot et Spring Cloud.

L’architecture mise en place est :

* modulaire
* évolutive
* maintenable

Elle constitue une base solide pour des évolutions futures telles que :

* l’ajout de la sécurité (JWT)
* la persistance avec une base de données relationnelle
* la dockerisation et l’orchestration

Ce travail répond pleinement aux objectifs pédagogiques fixés pour le projet.

Réalisé par : SEDRATI Salma & GAROUAT NADA & BOUTGHANBOUT Safa
