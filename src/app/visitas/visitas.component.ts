import { VisitService } from './visit.service';
import { Component, OnInit } from '@angular/core';
import { Visit } from './visit';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.css']
})
export class VisitasComponent implements OnInit {

  visitPrimary: Visit;
  visitsPrimary = [];

  constructor(private visitService: VisitService) { }

  ngOnInit(): void {
    this.getVisit();
  }

  getVisit() {
    this.visitService.getVisits().subscribe(
      (visits: Visit[]) => {
        this.visitsPrimary = visits;
        console.log('Esse é o elemento pai: ', this.visitsPrimary);
      }
    );
  }

  // visitHandler(newVisit: Visit) {
  //   console.log('A nova visita recebida é: ', newVisit);
  //   this.visitsPrimary.push(newVisit);
  // }

  visitHandler(event: any) {
    if (event === true) {
      console.log(event);
      this.getVisit();
    } else {
      const obj = {
        id: event.id,
        id_representative: event.representative,
        name: event.name,
        address: event.address,
        dt_visit: event.date,
        cost: event.cost
      }
      this.visitPrimary = obj;
      console.log('esse é o objeto ', this.visitPrimary);
    }
  }

}
