<img src="src/assets/logo.svg" width="80px" align="right">

### `GeoTrainr`

### The site is available online and for free here: [GeoTrainr](https://geotrainr-jet.vercel.app/)

## Project Overview

GeoTrainr is an interactive training platform for geography enthusiasts and GeoGuessr players.
The game offers two training modes based on flag and language recognition.

## Features

- **Flags Quiz**: Test your knowledge of world flags by identifying the correct country among several options.
- **Languages Quiz**: Identify the language of a displayed sentence, choosing from plausible answers based on logical groupings.
- **Dark Mode**: An interface adapted to user preferences.
- **Responsive**: Fully responsive interface for mobile, tablet, and desktop devices.
- **Timer**: Option to add a timer to questions
- **Multilingual**: Available in French and English

## Game Modes

### Flags Mode

In this mode, a flag image is displayed, and you must identify the corresponding country from five options.

#### Question Generation

- Flags are obtained dynamically via the [FlagCDN](https://flagcdn.com/) API.
- A list of countries is stored in a JSON file (`countries.json`).
- A country is randomly selected as the correct answer.
- Four other countries are randomly chosen as incorrect answers.
- The five options are shuffled to ensure fairness.

### Languages Mode

In this mode, a sentence is displayed, and you must identify the language it is written in.

#### Question Generation

- Sentences are stored in `languages.json`, a file structured by linguistic regions.
- A language is randomly selected, and an associated sentence is displayed.
- Incorrect answers are selected from languages in the same regional group, ensuring all options appear plausible.
- The five choices are shuffled to avoid any predictable repetition.

## Interface and Accessibility

- Modern and clean interface.
- Dark mode for better readability.
- Smooth navigation between different modes.

## Contributing

All contributions are welcome! To contribute:

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm or yarn

1. Clone the project

```sh
# Clone the project
git clone https://github.com/GautierPicon/GeoTrainr.git
cd GeoTrainr

# Install dependencies
npm install
```

### Start the website

```sh
npm run dev
```

The application will be accessible at `http://localhost:5173/`, unless another site is already using this location. In that case, refer to the link displayed in your terminal.

If you find a bug or want to suggest an improvement, you can open an issue [here](https://github.com/Gautierpicon/GeoTrainr/issues/new).
