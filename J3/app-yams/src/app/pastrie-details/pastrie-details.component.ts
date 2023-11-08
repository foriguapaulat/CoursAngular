// Component enfant
// la classe Input est nécessaire
import { Component, OnInit, Input } from '@angular/core';
import { Pastrie } from '../pastrie';

@Component({
    selector: 'app-pastrie-details',
    templateUrl: './pastrie-details.component.html',
    styleUrls: ['./pastrie-details.component.scss']
})
export class PastrieDetailsComponent implements OnInit {
    
    // Classe Input permet de récupérer les data de l'enfant
    // pastrie est liée à une entrée [pastrie] du parent dans le sélecteur
    @Input() pastrie: Pastrie|null=null;
    
    constructor() { }

    ngOnInit() {
        console.log(this.pastrie); // pour l'instant c'est undefined ... C'est normal
    }
}