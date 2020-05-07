import { VisitService } from './../visit.service';
import { Visit } from './../visit';
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { parseISO } from 'date-fns';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnChanges {

  @Input() visit: Visit;
  visits = [];
  @Output() visitHandlerChild = new EventEmitter();
  update: boolean;


  constructor(private visitService: VisitService) {
    this.visit = new Visit();
  }

  ngOnChanges(): void {
    this.visitHandler(this.visit);
  }

  visitHandler(visit: Visit): void {
    if (visit !== undefined) {
      this.visit = {...visit};
    } else {
      this.update = true;
      this.visit = {
        id_representative: null,
        name : '',
        address : '',
        dt_visit : null,
        cost : null,
      };
    }
  }

  formatField(event) {
    const valor = event.control.value;
    if (event.name === 'date' && valor != null) {
      const data = (event.valueAccessor._inputValue);
      const [dia, mes, ano] = data.split('/');
      this.visit.dt_visit = parseISO(`${ano}-${mes}-${dia}`);
    } else if (event.name === 'cost' && valor != null) {
      let [reais, centavos] = valor.split(',');
      reais = reais.replace(/\D+/g, '');
      this.visit.cost = parseFloat(`${reais}.${centavos}`);
    }
  }

  updateVisit(visit: Visit) {
    this.visitService.updateVisit(this.visit).subscribe(
      (dados) => {
        this.visitHandlerChild.emit(true);
      }, error => console.log(error)
    );
  }

  saveVisit(visit: Visit) {
    this.visitService.saveVisit(this.visit).subscribe(
      (dados) => {
        this.visitHandlerChild.emit(true);
      }, error => console.log(error)
    );
  }

  sendForm(visit: Visit, form: NgForm) {
    console.log(visit);
    if (visit.id) {
      console.log('update');
      this.updateVisit(visit);
      this.cleanForm(form);
    } else {
      console.log('created');
      this.saveVisit(visit);
      this.cleanForm(form);
    }
  }

  cleanForm(form: NgForm) {
    form.resetForm();
    this.visit = {} as Visit;
  }

}
