export class Word {
    word: string;
    hide: string;
}

export const MockWords: Word[] = [
    { word: "cornedrue", hide: "#o######e" },
    { word: "cognards", hide: "c######s" },
    { word: "fourchelang", hide: "########a#g" },
    { word: "gringotts", hide: "######tts" },
    { word: "hyppogriffes", hide: "####o######s" },
];

// Enum 
enum Status {
    Winner,
    Loser,
    Progress,
}

let status: Status; // définition d'une variable  de type Status
status = Status.Winner; // on assigne une valeur

// Pour la comparaison utiliser l'alias "as" sinon erreur de type lors de la transpilation
// vers le code JS
Status.Progress as Status == status;
Status.Winner as Status == status;
Status.Loser as Status == status;
