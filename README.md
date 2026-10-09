# Assembly: Endgame

A browser-based word guessing game built with React and Vite. The player tries to solve a hidden programming-related word before the "Assembly" civilization is wiped out.

## Overview

This project is a themed hangman-style game where:

- A random word is selected from a curated list
- The player guesses letters from a virtual keyboard
- Correct guesses reveal characters in the word
- Incorrect guesses progress the game toward failure
- The player wins by completing the word before reaching the limit

## Gameplay

The game presents a sequence of language-themed "characters" that are progressively eliminated as mistakes are made. The goal is to guess the hidden word before all attempts are used.

## Getting started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run the app in development mode

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project scripts

- `npm run dev` — starts the development server
- `npm run build` — creates a production build
- `npm run preview` — serves the built app locally
- `npm run lint` — runs the project linter

## Stack

- React
- Vite
- Oxlint

## Project structure

```text
src/
  App.jsx
  components/
  data/
  index.css
public/
README.md
package.json
vite.config.js
```

## Notes

The app is intentionally lightweight, interactive, and easy to extend. You can expand the word list, add new themes, or adjust the difficulty and keyboard behavior.
