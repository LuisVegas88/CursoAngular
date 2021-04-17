import { Component } from "@angular/core";

@Component({
    selector:'app-contador', 
    template: `
        <h1>{{title}}</h1>
        <h2>La base es: {{base}}</h2>

        <button (click)="acumulador(base)">+{{base}}</button>
        <span>{{number}}</span>
        <button (click)="acumulador(-base)">-{{base}}</button>
    `
})

export class Contador{
    title:string = 'Contador App';
    number:number = 0;
    base:number = 5;

    acumulador(base:number){
        this.number+=base;
    }
}