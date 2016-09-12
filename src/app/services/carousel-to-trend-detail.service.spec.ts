/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { CarouselToTrendDetailService } from './carousel-to-trend-detail.service';

describe('Service: CarouselToTrendDetail', () => {
  beforeEach(() => {
    addProviders([CarouselToTrendDetailService]);
  });

  it('should ...',
    inject([CarouselToTrendDetailService],
      (service: CarouselToTrendDetailService) => {
        expect(service).toBeTruthy();
      }));
});
