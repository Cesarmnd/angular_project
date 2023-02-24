import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datesFormat'
})
export class DatesFormatPipe implements PipeTransform {
  months: string[] = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  transform( value: Date ): string {
    let date: string;
    date =  `${this.months[value.getUTCMonth()]} ${value.getDate()}, ${value.getFullYear()}`

    return date;
  }

}
