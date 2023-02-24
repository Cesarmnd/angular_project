import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../models/course';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courses:Course[], filter: string): Course[] {
    return courses.filter( (obj) => {
      obj.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    })
  }

}
