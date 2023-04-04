import { Injectable } from "@angular/core";
import { CourseService } from "../../services/course.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addCourseState, coursesLoaded, deleteCourseState, loadCourseState, modifyCourseState } from "../actions/course-state.actions";
import { concatMap, map } from "rxjs";
import { Course } from "src/app/core/models/course";

@Injectable()

export class CourseEffects {
  loadCourse$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadCourseState),
      concatMap(() => {
        return this.courses.getCourses().pipe(
          map((obj: Course[]) => coursesLoaded({ courses: obj }))
        )
      })
    )
  });

  addCourse$ = createEffect(() => {
    return this.action$.pipe(
      ofType(addCourseState),
      concatMap(({ course }) => {
        return this.courses.addCourse(course).pipe(
          map((course: Course) => {
            return loadCourseState()
          })
        )
      })
    )
  });

  deleteCourse$ = createEffect(()=> {
    return this.action$.pipe(
      ofType(deleteCourseState),
      concatMap(({course}) => {
        return this.courses.removeCourse(course).pipe(
          map((course: Course) => {
            // cualquier otra accion que se desee agregar
            return loadCourseState()
          })
        )
      })
      )
  }); 

  modifyCourse$ = createEffect( ()=> {
    return this.action$.pipe(
      ofType(modifyCourseState),
      concatMap( ( {course} ) => {
        return this.courses.modifyCourse(course).pipe(
          map(( course: Course ) => {
            return loadCourseState()
          })
        )
      })
    )
  });

  constructor(    
    private courses: CourseService,
    private action$: Actions
    ){

  }
}