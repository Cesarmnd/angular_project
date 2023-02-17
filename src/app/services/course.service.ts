import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    { 
      id: 0,
      name: 'JavaScript',
      teacher: {
        user: 'ricalv01',
        name: 'Ricardo',
        course: 'JavaSript'
      },
      time: 3,
      startDate: new Date(2023, 5, 4),
      endDate: new Date(2023, 7, 31), 
      open: true
    },
    { 
      id: 2,
      name: 'Angular',
      teacher: {
        user: 'ricalv01',
        name: 'Ricardo',
        course: 'JavaSript'
      },
      time: 3,
      startDate: new Date(2023, 5, 4),
      endDate: new Date(2023, 7, 31), 
      open: true
    },
    { 
      id: 3,
      name: 'ReactJs',
      teacher: {
        user: 'ricalv01',
        name: 'Ricardo',
        course: 'JavaSript'
      },
      time: 3,
      startDate: new Date(2023, 5, 4),
      endDate: new Date(2023, 7, 31), 
      open: true
    },
    { 
      id: 4,
      name: 'HTML',
      teacher: {
        user: 'ricalv01',
        name: 'Ricardo',
        course: 'JavaSript'
      },
      time: 3,
      startDate: new Date(2023, 5, 4),
      endDate: new Date(2023, 7, 31), 
      open: true
    },
    { 
      id: 5,
      name: 'Css',
      teacher: {
        user: 'ricalv01',
        name: 'Ricardo',
        course: 'JavaSript'
      },
      time: 3,
      startDate: new Date(2023, 5, 4),
      endDate: new Date(2023, 7, 31), 
      open: true
    },
    { 
      id: 6,
      name: 'VueJs',
      teacher: {
        user: 'ricalv01',
        name: 'Ricardo',
        course: 'JavaSript'
      },
      time: 3,
      startDate: new Date(2023, 5, 4),
      endDate: new Date(2023, 7, 31), 
      open: true
    }
  ]

  private course$: Observable<Course[]>

  constructor() { 
    this.course$ = new Observable<Course[]>((sub) => {
      sub.next(this.courses);
    })
  }

  getCourses(): Observable<Course[]> {
    return this.course$
  }

  addCourse(course: Course) {
    this.courses.push(course)
  }
}
