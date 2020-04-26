import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitasComponent } from './visitas/visitas.component';
import { CadastroComponent } from './visitas/cadastro/cadastro.component';
import { ListaComponent } from './visitas/lista/lista.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SettingsService } from './settings.service';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

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
    FormsModule,
    NgxMaskModule.forRoot(maskConfig),

  ],
  providers: [
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt-BR',
    // }
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (setttingsService: SettingsService) => setttingsService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
