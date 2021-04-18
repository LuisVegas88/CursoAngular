import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Contador } from './Contador/contador/contador.component';

import { HeroesModule } from './Heroes/heroes.module';
import { ContadorModule } from './Contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule, 
    DbzModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
