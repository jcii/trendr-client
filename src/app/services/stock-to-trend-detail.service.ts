import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class StockToTrendDetailService {

  constructor() { }
  pushDataEvent = new EventEmitter<Object>()

  pushData(number: number) {
    this.pushDataEvent.emit(number)
  }
}
