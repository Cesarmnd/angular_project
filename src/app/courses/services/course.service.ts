import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from 'src/app/models/course';

@Injectable()
export class CourseService {
  private courses$: BehaviorSubject<Course[]>
  private courses: Course[] = [
    { 
      id: 0,
      name: 'JavaScript',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
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
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png',
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
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
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
      img: 'https://img.freepik.com/iconos-gratis/html5_318-903450.jpg',
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
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/500px-CSS3_logo.svg.png',
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
      img: 'https://vuejs.org/images/logo.png',
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
  
  constructor() { 
    this.courses$ = new BehaviorSubject<Course[]>(this.courses);
  }

  getCourses(): Observable<Course[]> {
    return this.courses$.asObservable();
  }

  addCourse( course: Course ): void {
    this.courses.push(course);
    this.courses$.next(this.courses);
  }

  modifyCourse(course: Course): void {
    let index = this.courses.findIndex( (obj: Course) => obj.id === course.id );

    if ( index > -1 ) {
      this.courses[index] = course;
      this.courses$.next(this.courses)
    }
  }

  removeCourse( course: Course ): void {
    let index = this.courses.findIndex( (obj: Course) => obj.id === course.id );

    if ( index > -1 ) {
      this.courses.splice( index,1 );
      this.courses$.next(this.courses);
    }
  }
}
