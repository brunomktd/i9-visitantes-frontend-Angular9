import { VisitService } from './../visit.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() visitHandlerChild = new EventEmitter();

  constructor(private visitService: VisitService) {
    this.colunas = [
      '#', 'Representante', 'Cliente', 'Endereço', 'Data da visita',
      'Custo', 'Editar', 'Excluir'];
  }

  ngOnInit() { }

  deleteVisit(visit: Visit) {
    this.visitService.deleteVisit(visit).subscribe(
      () => {
        this.visitHandlerChild.emit(true);
      }
    );
  }

  editVisit(visit: Visit) {
    // this.visit = { ...visit };

    this.visitHandlerChild.emit({...visit});
  }
}
