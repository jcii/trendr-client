import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TweetCountPercentageService {

  constructor() { }
  pushDataEvent = new EventEmitter<number>()

  pushData(count: number) {
    this.pushDataEvent.emit(count)
  }
  
}
