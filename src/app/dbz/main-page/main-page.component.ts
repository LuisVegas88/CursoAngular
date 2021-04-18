import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {

  //getter para obtener datos de personajes del servicio
  // get personajes():Personaje[]{
  //   return this.dbzService.personajes;
  // }

  nuevo: Personaje = {
    nombre: '', 
    poder: 0
  }
  
}
