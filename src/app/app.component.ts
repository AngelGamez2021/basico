import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, OnDestroy{

  // INTERPOLACION
//   titulo = 'Vamos angelito tu puedes con esto';
// url="https://pbs.twimg.com/media/FMtXH75XsAELkOg.jpg"

// NGMODEL

// name!: string;

// NGFOR & NGIF

// cities = ['Barranquilla','Cartagena', 'Santa Marta']

// name!: string;
// //////////////NGCLASS/////////////////////

cities = ['Barranquilla','Cartagena', 'Santa Marta']
name!: string;
selection!:string;

// para ejecutar los ciclos de vida, en la clase debemos poner implements y ponerlos

ngOnChanges(changes: SimpleChanges): void {
    console.log('Change ->', changes );
        
}

ngOnInit(): void {
    console.log('OnInit ->', );
    
}

ngOnDestroy(): void {
    console.log('');
    
}

click (city: string){
  console.log('city ->', city);
  this.selection = city;
  }

  addNewCity(city: string){

    this.cities.push(city);

  }

Onclear(){
  this.selection = '';
  // acá dice que si presionamos el boton de este metodo, automanticamente se pondra vacion
}





}