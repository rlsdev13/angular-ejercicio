import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DogsService {

  private _historial : string[] = [];

  
  public resultado : any = '';

  public arrayResultados : any[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor( private http : HttpClient ){

  } 

  buscarImagenes( query : string = ''){
    query = query.toLocaleLowerCase();
    this._historial.unshift( query );
    this._historial = this._historial.splice(0,10);

    this.http.get(`https://dog.ceo/api/breed/${ query }/images/random`)
        .subscribe( ( resp : any ) => {
          console.log(resp);
          this.resultado = resp;
        }); 
  }

  busqueda5() {
    
    const razas = ['african','beagle','boxer','chihuahua','malinois'];

    for (let index = 0; index < razas.length; index++) {
      this.http.get(`https://dog.ceo/api/breed/${ razas[index] }/images/random`)
      .subscribe( (resp : any) => {
        this.arrayResultados.push( resp )
      });    
      
    }
  }
}
