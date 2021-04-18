import { Component, EventEmitter, Input, Output} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

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
  @Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(!this.new.nombre.length){ // si No hay nada escrito no hacemos nada 
      return;
    }
    console.log(this.new);

    this.onNewPersonaje.emit(this.new);

    this.new={
      nombre:'', 
      poder:0
    }
    
  }
}


