import { Component, Input, Output,EventEmitter} from '@angular/core';
import { Numbers } from '../interfaces/numeros.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Output() OnNewNumber : EventEmitter<Numbers> = new EventEmitter();

  @Input() nuevo : Numbers = {
    index : 0,
    value : 0
  }

  agregar(){

    if ( this.nuevo.value > 0 ) {
      this.OnNewNumber.emit( this.nuevo );
      
      this.nuevo = {
        index : 0,
        value : 0,
      }

    }else{
      this.nuevo = {
        index : 0,
        value : 0,
      }
    }

  }
  
}
