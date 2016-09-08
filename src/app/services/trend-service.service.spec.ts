/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { TrendServiceService } from './trend-service.service';

describe('Service: TrendService', () => {
  beforeEach(() => {
    addProviders([TrendServiceService]);
  });

  it('should ...',
    inject([TrendServiceService],
      (service: TrendServiceService) => {
        expect(service).toBeTruthy();
      }));
});
