import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core'

@Injectable()
export class CarouselToTrendDetailService {

  constructor() { }
  pushDataEvent = new EventEmitter<Object>()

  pushData(trendStats: any) {
    this.pushDataEvent.emit(trendStats)
  }
}
