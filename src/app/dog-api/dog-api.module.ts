import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsPageComponent } from './dogs-page/dogs-page.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { BusquedaComponent } from './busqueda/busqueda.component';



@NgModule({
  declarations: [
    DogsPageComponent,
    ResultadosComponent,
    BusquedaComponent
  ],
  exports : [
    DogsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DogApiModule { }
