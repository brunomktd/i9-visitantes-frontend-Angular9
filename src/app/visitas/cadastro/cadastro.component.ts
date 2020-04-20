import { VisitService } from './../visit.service';
import { Visit } from './../visit';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  visit = {} as Visit;
  visits = [];

  @Output() mudouValor = new EventEmitter();

  constructor(private visitService: VisitService) { }

  ngOnInit(): void {
    this.getVisit();
  }


  getVisit() {
    this.visitService.getVisits().subscribe(
      (visits: Visit[]) => {
        this.visits = visits;
        this.mudouValor.emit(visits);
      }
    );
  }

  saveVisit(form: NgForm) {
    this.visitService.saveVisit(this.visit).subscribe(
      dados => {
        this.cleanForm(form);
        this.getVisit();
      }, error => console.log(error)
    );
  }

  cleanForm(form: NgForm) {
    this.getVisit();
    form.resetForm();
    this.visit = {} as Visit;
  }
}
