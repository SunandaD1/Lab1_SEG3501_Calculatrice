# Lab1Calculator

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.24.

# Description du travail réalisé
Nous avons développé une application Angular qui fonctionne comme une calculatrice de base, tel que demandé dans l'exercice du laboratoire. L'utilisateur entre deux nombres et choisit une opération (+, −, ×, ÷), puis le résultat s'affiche.
Un composant Calculator qui contient les quatre opérations (addition, soustraction,
multiplication, division).
Les valeurs saisies sont transmises aux méthodes à l'aide de variables de référence de modèle (#n1, #n2).
Le résultat est affiché avec le pipe number, formaté à deux décimales.
La division par zéro est gérée : un message (« Division par zéro impossible ») s'affiche au lieu d'un
résultat invalide.
Un peu de style basic CSS (couleurs, coins arrondis, effet au survol des boutons) et des tests unitaires pour chaque opération.

# Installation et Exécution
Installer Node.js (version 20 ou plus) et npm, puis l'Angular CLI :
npm install -g @angular/cli
Cloner le dépôt GitHub :
git clone https://github.com/SunandaD1/Lab1_SEG3501_Calculatrice.git
cd Lab1_SEG3501_Calculatrice
Installer les dépendances :
npm install
 Démarrer l'application :
ng serve
Ouvrir http://localhost:4200 dans un navigateur.
(Facultatif) Exécuter les tests unitaires :
ng test

################################################
###############################################
##############################################
## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
