import { Component} from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent {

  heroes:string[]=['Hulk','Thor','Spiderman', 'IronMan']
  heroeBorrado:string ='';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '' //.shift borra el primer elemento del array
    // creamos una propiedad heroeBorrado que le decimos que va ser el que se borre
  }

}
