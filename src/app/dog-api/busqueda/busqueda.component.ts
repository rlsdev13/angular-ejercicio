import { Component, ElementRef, ViewChild } from '@angular/core';
import { DogsService } from '../services/dogs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})

export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor( private dogsService : DogsService ){
    this.busqueda5();
  }

  buscar(){
    const value = this.txtBuscar.nativeElement.value;

    if (value.trim().length === 0) {
      return;
    }
    this.dogsService.buscarImagenes( value );
    
    this.txtBuscar.nativeElement.value = '';
  }

  busqueda5(){
    this.dogsService.busqueda5();
  }

}
