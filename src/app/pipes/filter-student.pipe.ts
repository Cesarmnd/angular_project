import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStudent'
})
export class FilterStudentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
