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

  @Input() visit = {} as Visit;
  visits = [];
  @Output() visitHandlerChild = new EventEmitter();

  constructor(private visitService: VisitService) { }

  ngOnInit(): void {
  }

  // saveVisit(form: NgForm) {
  //   this.visitService.saveVisit(this.visit).subscribe(
  //     dados => {
  //       this.visitHandlerChild.emit(dados);
  //       this.cleanForm(form);
  //     }, error => console.log(error)
  //   );
  // }

  saveVisit(form: NgForm) {
    this.visitService.saveVisit(this.visit).subscribe(
      (dados) => {
        this.visitHandlerChild.emit(true);
        this.cleanForm(form);
      }, error => console.log(error)
    );
  }

  cleanForm(form: NgForm) {
    form.resetForm();
    this.visit = {} as Visit;
  }
}
