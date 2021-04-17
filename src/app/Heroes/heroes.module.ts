import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';

import { HeroeComponent } from './heroe/heroes.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        //los componentes que tiene este modulo
        HeroeComponent,
        ListadoComponent
    ],
    //cosas visibles fuera de este modulo
    exports:[
        HeroeComponent,
        ListadoComponent
    ], 
    //modulos importados
    imports:[
        //CommonModule es para usar ngIf ngfor entre otras cosas
        CommonModule
    ]
})

export class HeroesModule {};

