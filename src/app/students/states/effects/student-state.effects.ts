import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, concatMap } from 'rxjs/operators';
import { loadStudentState, studentsLoaded } from '../actions/student-state.actions';
import { StudentService } from '../../services/student.service';
import { Student } from 'src/app/core/models/students';


@Injectable()
export class StudentEffects {
  loadStudent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadStudentState),
      concatMap(() => {
        return this.students.getStudents().pipe(
          map((obj: Student[]) => studentsLoaded({ students: obj }))
        )
      })
    )
  });

  constructor(
    private students: StudentService,
    private actions$: Actions
    ) {

    }
}
