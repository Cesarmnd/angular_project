import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from 'src/app/models/course';
import { ModifyCourseComponent } from '../modify-course/modify-course.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  constructor(
    private dialog: MatDialog
  ) {

  }

 courses: Course[] = [
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
  }
]

modify(course: Course) {
  const dialogRef = this.dialog.open(ModifyCourseComponent, {
    data: course
  })
}
}
