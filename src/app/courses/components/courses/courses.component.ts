import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { AppState } from 'src/app/models/app.state';
import { Course } from 'src/app/models/course';
import { Sesion } from 'src/app/models/sesion';
import { coursesLoaded, loadCourseState } from '../../course-state.actions';
import { CourseState } from '../../course-state.reducer';
import { LoadedCourseSelector, LoadingCourseSelector } from '../../course-state.selectors';
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
  loading$!: Observable<Boolean>

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private sesion: SesionService,
    private courseService: CourseService,
    private store: Store<CourseState>
  ) {

  }
  
  ngOnInit(): void {
    this.loading$ = this.store.select(LoadingCourseSelector)

    this.store.dispatch(loadCourseState())
    
    // Validating if a session is active
    this.sesion.getSesion().subscribe( (sesion: Sesion) => {
      if(!sesion.activeSesion) {
        this.router.navigate(['auth/login'])
      }
    })
    this.sesion$ = this.sesion.getSesion();
    //  Storage info in store
    this.courseService.getCourses().subscribe((courses: Course[]) => {
    this.store.dispatch(coursesLoaded({ courses }))
    });
    // Getting data for cards
    this.courses$ = this.store.select(LoadedCourseSelector)
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
