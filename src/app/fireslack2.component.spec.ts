import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Fireslack2AppComponent } from '../app/fireslack2.component';

beforeEachProviders(() => [Fireslack2AppComponent]);

describe('App: Fireslack2', () => {
  it('should create the app',
      inject([Fireslack2AppComponent], (app: Fireslack2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'fireslack2 works!\'',
      inject([Fireslack2AppComponent], (app: Fireslack2AppComponent) => {
    expect(app.title).toEqual('fireslack2 works!');
  }));
});
