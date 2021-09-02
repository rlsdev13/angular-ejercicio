import { Component } from '@angular/core';
import { Numbers } from '../interfaces/numeros.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  constructor() {
    this.obtenerDatos();
    this.media();
    this.minimo();
    this.maximo();
  }
  
  arrayNumbers : Numbers[] = [];

  nuevo : Numbers = {
    index : 0,
    value : 0
  }

  valMinimo : number = 0;
  valMaximo : number = 0
  valMedia : number = 0;
  

  obtenerDatos(){
    let data = localStorage.getItem('numbers');

    if (data != null) {
      this.arrayNumbers = JSON.parse(data);
      console.log(this.arrayNumbers)
    }
    
  }

  agregarNumero( event : Numbers ){
    event.index = this.arrayNumbers.length +1; 
    this.arrayNumbers.push( event )
    this.guardarLocal();
    this.media();
    this.minimo();
    this.maximo();
  }

  guardarLocal(){
    localStorage.setItem('numbers', JSON.stringify(this.arrayNumbers) )
  }

  ordenarAscendente(){
    this.arrayNumbers.sort(( v1 , v2 ) => {
      if(v1.value > v2.value){
        return 1;
      }
      if(v1.value < v2.value){
        return -1;
      }
      return 0;
    })
  }

  ordenarDescendente(){
    this.arrayNumbers.sort(( v1 , v2 ) => {
      if(v1.value > v2.value){
        return -1;
      }
      if(v1.value < v2.value){
        return 1;
      }
      return 0;
    })
  }

  limpiarLocal(){
    localStorage.clear();
    this.arrayNumbers = [];
    this.valMinimo = 0;
    this.valMaximo = 0;
    this.valMedia = 0;
  }

  media(){
    if (this.arrayNumbers.length > 0) {
      let suma = 0;
      this.arrayNumbers.map( item => {
        suma += item.value;
      });
      this.valMedia = suma/this.arrayNumbers.length;
    }
  }

  minimo(){
    if (this.arrayNumbers.length > 0) {
      this.valMinimo = Math.min.apply(Math, this.arrayNumbers.map( item => item.value))
    }
  }

  maximo(){
    if (this.arrayNumbers.length > 0) {
      this.valMaximo = Math.max.apply(Math, this.arrayNumbers.map( item => item.value))
    }
  }
  
}
