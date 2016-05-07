import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Fireslack2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Fireslack2AppComponent);
