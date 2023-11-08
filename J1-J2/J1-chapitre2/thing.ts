interface Duck {
    name: string;
    swim(): string;
}

class Thing implements Duck {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    swim() {
        return (`nage comme un canard`) ;
    }
}
let pato  = new Thing ("pato")

console.log(pato.swim())