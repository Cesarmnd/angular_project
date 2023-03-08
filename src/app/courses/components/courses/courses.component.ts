import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Course } from 'src/app/models/course';
import { Sesion } from 'src/app/models/sesion';
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
  sesion$!: Observable<Sesion>

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private sesion: SesionService,
    private courseService: CourseService
  ) {

  }
  
  ngOnInit(): void {
    // Validating if a session is active
    this.sesion.getSesion().subscribe( (sesion: Sesion) => {
      if(!sesion.activeSesion) {
        this.router.navigate(['auth/login'])
      }
    })
    this.sesion$ = this.sesion.getSesion();
    // Getting data for cards
    this.courses$ = this.courseService.getCourses();
  }
  
  add() {
    const dialogRef = this.dialog.open(AddCourseComponent).afterClosed().subscribe((course: Course) => {
      this.courses$ = this.courseService.getCourses()
    });;
  }

  modify( course: Course ) {
    const dialogRef = this.dialog.open(ModifyCourseComponent, {
      data: course
    }).afterClosed().subscribe((course: Course) => {
      this.courses$ = this.courseService.getCourses()
    });
  }

  remove( course: Course ) {
    this.courseService.removeCourse(course).subscribe((course: Course)=> {
      this.courses$ = this.courseService.getCourses()
    } )
  }
}
