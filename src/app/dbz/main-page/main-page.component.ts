import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {

  personajes: Personaje[] = [
    {
      nombre:'Goku', 
      poder:15000
    }, 
    {
      nombre:'Vegeta', 
      poder:7500
    }
  ]
  nuevo: Personaje = {
    nombre: '', 
    poder: 0
  }

  agregarNuevoPersonaje(data:Personaje){
    this.personajes.push(data);
    
  }
  //inyectar dependencias de servicio
  constructor(private dbzService:DbzService){

  }
}
