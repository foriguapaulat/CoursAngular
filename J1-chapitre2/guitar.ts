abstract class Music {
    
    protected _instrument: string;
    abstract makeSound(): string;
    
    play(): string {
        return "play music";
    }
}

// Classe étendue
class Guitar extends Music {
    constructor(){
        super();
        this._instrument = "guitar"; 
    }

    get instrument():string {
        return this._instrument;
    }
}


let instrumento = new Guitar;

console.log(instrumento.play())