import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course';
import { CourseService } from '../../services/course.service';
import { AddCourseComponent } from '../add-course/add-course.component';
import { ModifyCourseComponent } from '../modify-course/modify-course.component';

@Component({
  selector: 'app-courses', 
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {
  filter!: '';
  courses!: Course[];
  courses$!: Observable<Course[]>;

  constructor(
    private dialog: MatDialog,
    private courseService: CourseService,
    private router: Router
  ) {

  }
  
  ngOnInit(): void {
    this.courses$ = this.courseService.getCourses();
  }
  
  add() {
    const dialogRef = this.dialog.open(AddCourseComponent)
  }

  modify( course: Course ) {
    const dialogRef = this.dialog.open(ModifyCourseComponent, {
      data: course
    })
  }

  remove( course: Course ) {
    this.courseService.removeCourse(course)
  }
}
