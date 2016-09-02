import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms} from '@angular/forms'
import { AppComponent, environment } from './app/';
import { APP_ROUTES_PROVIDER } from './app/app.routes'
import {HTTP_PROVIDERS} from '@angular/http';
import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts'

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
    disableDeprecatedForms(), 
    provideForms(),
    APP_ROUTES_PROVIDER, 
    HTTP_PROVIDERS
    ]);
