import { VisitService } from './../visit.service';
import { Visit } from './../visit';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  visit = {} as Visit;
  @Input() visitOld: Visit;
  visits = [];
  @Output() visitHandlerChild = new EventEmitter();


  constructor(private visitService: VisitService) { }

  ngOnInit(): void {
  }

  ngOnChanges(visitOld: Visit): void {
    this.validUpdate(this.visitOld);
  }

  validUpdate(visit: Visit): void {
    console.log("updateVisit: ", visit);
    if (visit !== undefined) {
      this.visit = visit;
    }
  }

  updateVisit(visit: Visit) {
    this.visitService.updateVisit(this.visit).subscribe(
      (dados) => {
        this.visitHandlerChild.emit(true);
      }, error => console.log(error)
    )
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
