import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { Contador } from './contador/contador.component';

@NgModule({
    declarations:[
        Contador
    ],
    //cosas visibles fuera de este modulo
    exports:[
       Contador
    ], 
})

export class ContadorModule {};