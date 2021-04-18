import { Component, EventEmitter, Input, Output} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

  
})
export class AgregarComponent {

 //coger informacion del padre MainComponent
  @Input('data') new: Personaje = {
    nombre:'',
    poder:0
  }
 //Mandar información al padre mediante la escucha de un evento
  // @Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzService: DbzService){}
  agregar(){
    if(!this.new.nombre.length){ // si No hay nada escrito no hacemos nada 
      return;
    }
    console.log(this.new);

    this.dbzService.agregarPersona(this.new);

    this.new={
      nombre:'', 
      poder:0
    }
    
  }
}


