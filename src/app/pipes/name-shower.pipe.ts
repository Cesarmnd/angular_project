import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameShower'
})
export class NameShowerPipe implements PipeTransform {

  transform(value: string, lastname: string[]): string {
    return `${value} ${lastname}`;
  }

}
