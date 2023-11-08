"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockWords = exports.Word = void 0;
class Word {
    word;
    hide;
}
exports.Word = Word;
exports.MockWords = [
    { word: "cornedrue", hide: "#o######e" },
    { word: "cognards", hide: "c######s" },
    { word: "fourchelang", hide: "########a#g" },
    { word: "gringotts", hide: "######tts" },
    { word: "hyppogriffes", hide: "####o######s" },
];
// Enum 
var Status;
(function (Status) {
    Status[Status["Winner"] = 0] = "Winner";
    Status[Status["Loser"] = 1] = "Loser";
    Status[Status["Progress"] = 2] = "Progress";
})(Status || (Status = {}));
let status; // définition d'une variable  de type Status
status = Status.Winner; // on assigne une valeur
// Pour la comparaison utiliser l'alias "as" sinon erreur de type lors de la transpilation
// vers le code JS
Status.Progress == status;
Status.Winner == status;
Status.Loser == status;
