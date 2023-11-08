"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
const selectWord = data_1.MockWords[Math.floor(Math.random() * data_1.MockWords.length)];
// const wordChosen 
const maxAttemps = 7;
let attemps = 0;
console.log('Voici un jeu du pendu, vous devez deviner le mot caché en 7 coups au plus, vous pouvez uniquement proposer un mot, certaines lettres du mot à trouver sont affichées. Bonne chance! Mot:', selectWord.hide);
while (attemps < 7 && !status) {
    console.log('Nombre de coups restants:');
}
