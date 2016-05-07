import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { AuthRouteHelperService } from './auth-route-helper.service';

describe('AuthRouteHelper Service', () => {
  beforeEachProviders(() => [AuthRouteHelperService]);

  it('should ...',
      inject([AuthRouteHelperService], (service: AuthRouteHelperService) => {
    expect(service).toBeTruthy();
  }));
});
