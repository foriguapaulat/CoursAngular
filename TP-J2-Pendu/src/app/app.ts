import { MockWords } from  "../data";
import* as readlineSync from 'readline-sync';

const selectWord = MockWords[Math.floor(Math.random()*MockWords.length)];
// const wordChosen 
const maxAttemps: number = 7;
let attemps: number = 0;

console.log('Voici un jeu du pendu.')

const enteredWord = readlineSync.question('Vous devez deviner le mot caché en 7 coups au plus, vous pouvez uniquement proposer un mot, certaines lettres du mot à trouver sont affichées. Bonne chance! Mot:',selectWord.hide).toLowerCase();

if (enteredWord ===selectWord){
    // status=winner;
    console.log('Vous avez deviné le mot caché')
}else{
    console.log("Bien essayé, mais votre mot: ", enteredWord," n'est pas le message caché... Recommencez:", selectWord )
}
// while (attemps<7 && !status){
//     let resultat= maxAttemps - attemps;
//     console.log('Nombre de coups restants:',resultat)
// }