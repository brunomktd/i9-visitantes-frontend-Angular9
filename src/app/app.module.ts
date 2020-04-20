import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitasComponent } from './visitas/visitas.component';
import { CadastroComponent } from './visitas/cadastro/cadastro.component';
import { ListaComponent } from './visitas/lista/lista.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VisitasComponent,
    CadastroComponent,
    ListaComponent,
    RelatoriosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
