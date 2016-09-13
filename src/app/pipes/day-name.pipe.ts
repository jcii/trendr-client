import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayName'
})
export class DayNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let days = {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday'
    }
    return days[new Date(value).getDay()]
  }

}
