<img src="src/assets/logo.svg" width="80px" align="right">

### `GeoTrainr`

### Le site est disponible en ligne et gartuitement ici : [GeoTrainr](https://geotrainr-jet.vercel.app/)

## Présentation du projet

GeoTrainr est une plateforme interactive d'entraînement pour les amateurs de géographie et les joueurs de GeoGuessr.
Le jeu propose deux modes d'entraînement basés sur la reconnaissance des drapeaux et des langues.

## Fonctionnalités

- **Quiz des Drapeaux** : Testez vos connaissances des drapeaux du monde en identifiant le bon pays parmi plusieurs options.
- **Quiz des Langues** : Trouvez la langue d'une phrase affichée, en choisissant parmi des réponses plausibles basées sur des regroupements logiques.
- **Mode sombre** : Une interface adaptée aux préférences des utilisateurs.
- **Responsive** : Interface entièrement adaptée aux mobiles, tablettes et ordinateurs.
- **Minuteur** : Possibilité de mettre un minuteur sur les questions

## Modes de jeu

### Mode Drapeaux

Dans ce mode, une image de drapeau s'affiche, et vous devez identifier le pays correspondant parmi cinq propositions.

#### Génération des questions

- Les drapeaux sont obtenus dynamiquement via l'API [FlagCDN](https://flagcdn.com/).
- Une liste de pays est stockée dans un fichier JSON (`countries.json`).
- Un pays est sélectionné aléatoirement comme bonne réponse.
- Quatre autres pays sont choisis au hasard comme fausses réponses.
- Les cinq options sont mélangées pour garantir l'équité du jeu.

### Mode Langues

Dans ce mode, une phrase est affichée, et vous devez identifier la langue dans laquelle elle est écrite.

#### Génération des questions

- Les phrases sont stockées dans `languages.json`, un fichier structuré par régions linguistiques.
- Une langue est choisie aléatoirement, et une phrase associée est affichée.
- Les fausses réponses sont sélectionnées parmi les langues du même groupe régional, garantissant que toutes les options semblent plausibles.
- Les cinq choix sont mélangés pour éviter toute répétition prévisible.

## Interface et accessibilité

- Interface moderne et épurée.
- Mode sombre pour une meilleure lisibilité.
- Navigation fluide entre les différents modes.

## Contribution

Toutes les contributions sont les bienvenues ! Pour contribuer :

### Prérequis

- [Node.js](https://nodejs.org/fr)
- npm ou yarn

1. Clonez le projet

```sh
# Cloner le projet
git clone https://github.com/GautierPicon/GeoTrainr.git
cd GeoTrainr

# Installer les dépendances
npm install
```

### Démarrer l'application

```sh
npm run dev
```

L'application sera accessible sur `http://localhost:5173/`, a moins qu'un autre site utilise déjà cet emplacement. Dans ce cas referez-vous au lien que le terminal vous affiche.

2. Créez une branche spécifique (`feature-nouvelle-fonctionnalite`)
3. Faites vos modifications et **testez-les**
4. Soumettez une pull request

Si vous trouvez un bug ou souhaitez suggérer une amélioration, vous pouvez ouvrir une issue [ici](https://github.com/Gautierpicon/GeoTrainr/issues/new).
