import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value > 1) {
      return '%' + (0).toFixed(2)
    } else {
      return '%' + (value * 100).toFixed(2)
    } 
  }

}
