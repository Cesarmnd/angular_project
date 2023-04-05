import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, concatMap } from 'rxjs/operators';
import { addStudentState, deleteStudentState, loadStudentState, modifyStudentState, studentsLoaded } from '../actions/student-state.actions';
import { StudentService } from '../../services/student.service';
import { Student } from 'src/app/core/models/students';
import { MatSnackBar } from '@angular/material/snack-bar';


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

  addStudent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addStudentState),
      concatMap(({student}) => {
        return this.students.addStudent(student).pipe(
          map(( student: Student ) => {
            this.snackBar.open(`${student.name} ${student.lastname} successfully added!`, 'Close', {
              duration: 3000
            }) 
            return loadStudentState()
          })
        )
      })
    )
  });

  modifyStudent$ = createEffect( ()=> {
    return this.actions$.pipe(
      ofType(modifyStudentState),
      concatMap(({student}) => {
        return this.students.modifyStudent(student).pipe(
          map(( student: Student ) => {
            this.snackBar.open(`${student.name} ${student.lastname} successfully modified!`, 'Close', {
              duration: 3000
          }) 
            return loadStudentState()
          })
        )
      })
    )
  });

  deleteStudent$ = createEffect(()=> {
    return this.actions$.pipe(
      ofType(deleteStudentState),
      concatMap(({student}) => {
        return this.students.removeStudent(student).pipe(
          map(( student: Student ) => {
            return loadStudentState()
          })
        )
      })
      )
  }); 

  constructor(
    private students: StudentService,
    private actions$: Actions,
    private snackBar: MatSnackBar
    ) {

    }
}
