import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../core/models/course';

@Pipe({
  name: 'filterCourse'
})
export class FilterCoursePipe implements PipeTransform {

  transform(courses:Course[], filter: string): Course[] {
    return courses.filter( (obj) => {
      return obj.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    })
  }

}
