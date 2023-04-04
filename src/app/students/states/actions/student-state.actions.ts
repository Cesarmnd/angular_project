import { createAction, props } from '@ngrx/store';
import { Student } from 'src/app/core/models/students';

export const loadStudentState = createAction(
  '[StudentState] Load StudentStates'
);


export const studentsLoaded = createAction(
  '[StudentState] Students loaded',
  props<{ students: Student[] }>()
)

export const addStudentState = createAction(
  '[StudentState] Add student',
  props<{ student: Student }>()
);

export const modifyStudentState = createAction(
  '[StudentState] Modify student',
  props<{ student: Student }>()
);

export const deleteStudentState = createAction(
  '[StudentState] Delete student',
  props<{ student: Student }>()
);