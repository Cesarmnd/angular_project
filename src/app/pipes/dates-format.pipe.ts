import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datesFormat'
})
export class DatesFormatPipe implements PipeTransform {
  months: string[] = [ 'January', 'February', 'March', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];

  transform( value: Date ): string {
    let date: string;
    date =  `${this.months[value.getUTCMonth() + 1 ]} ${value.getDate()}, ${value.getFullYear()}`

    return date;
  }

}
