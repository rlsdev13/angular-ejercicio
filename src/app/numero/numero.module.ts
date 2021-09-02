import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';

import { FormsModule } from '@angular/forms';
import { ItemsComponent } from './items/items.component';
import { AgregarComponent } from './agregar/agregar.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ItemsComponent,
    AgregarComponent
  ],
  exports : [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class NumeroModule { }
