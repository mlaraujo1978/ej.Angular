import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ej.Angular';
 
  items: { nombre: string, costo: number }[] = [];
  
  ngOnInit() {
   
    this.items = [
      { nombre: 'Item1', costo: 100 },
      { nombre: 'Item2', costo: 150 },
      { nombre: 'Item3', costo: 200 },
      { nombre: 'Item4', costo: 250 },
    ];
  }
 
  showList = false;

  showHiddenList() {
    this.showList = !this.showList;}
}


