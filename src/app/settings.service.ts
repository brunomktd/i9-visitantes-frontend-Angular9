import { Injectable } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  getLocale(){
    return 'pt';
  }
}
