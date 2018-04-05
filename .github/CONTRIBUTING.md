Je veux les instructions en [français](#fr)

## `@ulaval\modul-components`
# Contributing Guide

Before submitting your contribution, please read the following guidelines.

-

# Project Structure

# <a name="fr"></a>Instructions à suivre pour les contributeurs

Avant de soumettre votre contribution, veuillez prendre note de ces quelques lignes directrices.

- Lire à propos de la [structure du projet](#psfr).
- Créer une *feature branch* à partir de la branche désirée (typiquement `develop`). Le projet `modul-components` suit la convention [Git Flow](http://nvie.com/posts/a-successful-git-branching-model/). Le nom de votre branche devrait débuter par *feature-* ou *feature/*.
- À moins d'avoir à modifier la structure même tu projet, le code touché par le *pull request* (PR) ne devrait concerner que le répertoire `src`.
- S'assurer que votre code compile (`npm run dev` ou `npm run buildWebpack`).
- S'assurer que les tests s'exécutent avec succès (`npm run unitall`).
- S'il s'agit d'une correction de bogue:
    - Avoir préalablement créé un billet (*issue*) dans Github*.
    - Indiquer le # du billet dans le nom du PR.
    - Lier le problème dans le contenu du PR.
    - Ajouter la couverture de code nécessaire.
- S'il s'agit d'une nouvelle fonctionnalité:
    - Suivre les mêmes indications que pour la correction de bogues. Les nouvelles fonctionnalités devraient avoir été préalablement approuvées via un billet de type **Suggestion**.
- Si possible, identifier une ou plusieurs ressources pour procéder à la revue de code.
- Plusieurs *commits* peuvent être effectués au cours du processus d'approbation d'un PR. Un *squash merge* est effectué lorsque le code est rapporté dans la branche `develop`.

*Pour les contributeurs internes au projet, le billet sera créé dans JIRA.

# <a name="psfr"></a>Structure du projet
