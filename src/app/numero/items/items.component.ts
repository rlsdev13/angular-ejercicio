import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Numbers } from '../interfaces/numeros.interface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
})

export class ItemsComponent{
  @Input() arrayNumbers : Numbers[] = [];

  @Output() onUpdateNumber : EventEmitter<Numbers> = new EventEmitter();



  changeValue( event : Numbers){
    if ( event.value > 0 ) {
      // this.onUpdateNumber.emit( event );
      
    }
  }
}
