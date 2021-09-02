import { Component } from '@angular/core';
import { DogsService } from '../services/dogs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent {

  get resultado() {
    return this.dogService.resultado;
  }

  get arrayResultados() {
    return this.dogService.arrayResultados;
  }

  constructor( private dogService : DogsService ) { }


}
