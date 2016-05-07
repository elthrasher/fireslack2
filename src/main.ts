import { bootstrap } from '@angular/platform-browser-dynamic';
import { ComponentRef, enableProdMode, provide } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';
import { Fireslack2AppComponent, environment } from './app/';
import { FIREBASE_APP_PROVIDERS } from './app/firebase';
import { AuthService, AuthRouteHelperService, AUTH_PROVIDERS } from './app/shared';

if (environment.production) {
  enableProdMode();
}

const providers: any[] = [
  AUTH_PROVIDERS,
  FIREBASE_APP_PROVIDERS,
  ROUTER_PROVIDERS
  //, provide(APP_BASE_HREF, {useValue: '/'})
];

bootstrap(Fireslack2AppComponent, providers)
  .then((appRef: ComponentRef<any>) => AuthRouteHelperService.injector(appRef.injector))
  .catch((error: Error) => console.error(error));

