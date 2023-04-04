import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudentState from '../reducers/student-state.reducer';

export const selectStudentState = createFeatureSelector<fromStudentState.StudentState>(
  fromStudentState.studentStateFeatureKey
);


export const LoadingStudentSelector = createSelector(
  selectStudentState,
  ( state: fromStudentState.StudentState ) => state.loading
); 


export const LoadedStudentSelector = createSelector(
  selectStudentState,
  ( state: fromStudentState.StudentState ) => state.students
) 