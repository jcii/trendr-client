import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TweetCountPercentageService {

  constructor() { }
  pushDataEvent = new EventEmitter<number>()

  pushData(count: number) {
    console.log('********************')
    console.log(count)
    this.pushDataEvent.emit(count)
  }

}
