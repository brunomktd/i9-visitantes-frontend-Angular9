import { VisitService } from './../visit.service';
import { Component, OnInit, Input } from '@angular/core';
import { Visit } from '../visit';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  colunas: Array<string>;

  visit = {} as Visit;
  @Input() visits = [];

  constructor(private visitService: VisitService) {
    this.colunas = [
      '#', 'Representante', 'Cliente', 'Endereço', 'Data da visita',
      'Custo', 'Editar', 'Excluir'];
   }

  ngOnInit() {
    this.getVisit();
  }


  getVisit() {
    this.visitService.getVisits().subscribe(
      (visits: Visit[]) => {
        console.log(visits);
        this.visits = visits;
      }
    );
  }

  deleteVisit(visit: Visit) {
    this.visitService.deleteVisit(visit).subscribe(
      () => {
        this.getVisit();
      }
    );
  }

  editVisit(visit: Visit) {
    this.visit = {... visit};
    console.log(visit);
  }
}
