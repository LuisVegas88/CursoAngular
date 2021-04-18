import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  
})
export class PersonajesComponent {

  //para mandar datos desde el componente padre en este caso el main-page
  // @Input('data')personajes:Personaje[]=[]

  get personajes() {
    return this.dbzService.personajes;
  }
  
  constructor(private dbzService:DbzService){

  }
}
