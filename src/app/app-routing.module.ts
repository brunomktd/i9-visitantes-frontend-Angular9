import { RelatoriosComponent } from './relatorios/relatorios.component';
import { VisitasComponent } from './visitas/visitas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'visitas', pathMatch: 'full' },
  { path: 'visitas', component: VisitasComponent },
  { path: 'relatorios', component: RelatoriosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
