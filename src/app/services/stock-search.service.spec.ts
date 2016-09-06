/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { StockSearchService } from './stock-search.service';

describe('Service: StockSearch', () => {
  beforeEach(() => {
    addProviders([StockSearchService]);
  });

  it('should ...',
    inject([StockSearchService],
      (service: StockSearchService) => {
        expect(service).toBeTruthy();
      }));
});
