import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from 'src/app/core/models/course';
import { Sesion } from 'src/app/core/models/sesion';
import { deleteCourseState, loadCourseState } from '../../states/actions/course-state.actions';
import { CourseState } from '../../states/reducers/course-state.reducer';
import { LoadedCourseSelector, LoadingCourseSelector } from '../../states/selectors/course-state.selectors';
import { CourseService } from '../../services/course.service';
import { AddCourseComponent } from '../add-course/add-course.component';
import { ModifyCourseComponent } from '../modify-course/modify-course.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SesionService } from 'src/app/core/services/sesion.service';

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
    private snackBar: MatSnackBar,
    private sesion: SesionService,
    private store: Store<CourseState>,
    private courseService: CourseService,
  ) {

  }
  
  ngOnInit(): void {
    this.loading$ = this.store.select(LoadingCourseSelector)
    this.store.dispatch(loadCourseState())
    this.courses$ = this.store.select(LoadedCourseSelector)   // Getting data for cards
    
    this.sesion.getSesion().subscribe( (sesion: Sesion) => {  // Validating if a session is active
      if(!sesion.activeSesion) {
        this.router.navigate(['auth/login'])
      }
    })
    this.sesion$ = this.sesion.getSesion();

  }
  
  add() {
    const dialogRef = this.dialog.open(AddCourseComponent).afterClosed().subscribe((course: Course) => {
      this.courses$ = this.courseService.getCourses()
    });
  }

  modify( course: Course ) {
    const dialogRef = this.dialog.open(ModifyCourseComponent, {
      data: course
    }).afterClosed().subscribe((course: Course) => {
      this.courses$ = this.courseService.getCourses()
    });
  }

  remove( course: Course ) {
    this.snackBar.open(`${course.name} successfully removed`, 'Close', {
      duration: 3000
    })
    this.store.dispatch(deleteCourseState({ course }))
  }
}
