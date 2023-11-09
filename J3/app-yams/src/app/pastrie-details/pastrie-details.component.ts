// Component enfant
// la classe Input est nécessaire
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pastrie } from '../pastrie';
import { List } from '../pastrie';
import { INGREDIENTS_LISTS } from '../mock-pastries';

@Component({
    selector: 'app-pastrie-details',
    templateUrl: './pastrie-details.component.html',
    styleUrls: ['./pastrie-details.component.scss']
})
export class PastrieDetailsComponent implements OnInit {
    
    // Classe Input permet de récupérer les data de l'enfant
    // pastrie est liée à une entrée [pastrie] du parent dans le sélecteur
    @Input() pastrie: Pastrie|null=null;

    ingredients: List[] = INGREDIENTS_LISTS;
    
    constructor() { }

    ngOnInit() {
        console.log(this.pastrie); // pour l'instant c'est undefined ... C'est normal
    }

    getIngredients(id: string): string[] | null {
        const i = this.ingredients.find(i => i.id == id) ;
    
        if(i) return i.list ;
        
        return null ;
    }
    @Output() changePreference: EventEmitter<string> = new EventEmitter();

    preference(id: string) {
        this.changePreference.emit(id); // émettre l'id de la pâtisserie vers le parent
    }
}