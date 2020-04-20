import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.css']
})
export class VisitasComponent implements OnInit {


  visits = [];

  constructor() { }

  ngOnInit(): void { }

  onMudouValor(visits) {
    console.log("O valor é ");
    this.visits = visits;
    console.log(visits);
  }
}
