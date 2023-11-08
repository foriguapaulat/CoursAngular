export class Pastrie {
    constructor() {
        this.id = id;
        this.ref = ref;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.order = order;  
    }

    id: string;
    ref: string;
    name: string;	
    description: string;
    quantity: number;
    order: number;
    url?: string;
    tags?: Array;
    like?: string;
    
    
    
}

const psastrie = new Pastrie; 