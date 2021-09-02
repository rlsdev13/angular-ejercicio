import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DogApiModule } from './dog-api/dog-api.module';
import { NumeroModule } from './numero/numero.module';


@NgModule({
  declarations: [
    AppComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NumeroModule,
    DogApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
