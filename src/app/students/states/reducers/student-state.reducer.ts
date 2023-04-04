import { createFeature, createReducer, on } from '@ngrx/store';
import { Student } from 'src/app/core/models/students';
import * as StudentStateActions from '../actions/student-state.actions';

export const studentStateFeatureKey = 'studentState';

export interface StudentState {
  loading: boolean,
  students: Student[]
}

export const initialState: StudentState = {
  loading: false,
  students: []
};

export const reducer = createReducer(
  initialState,
  on(StudentStateActions.loadStudentState, (state) => {
    return { ...state , loading: true }
  }),

  on(StudentStateActions.studentsLoaded, (state, { students }) => {
    return { ...state , loading: false, students }
  }),

  on(StudentStateActions.addStudentState, (state, { student: Student }) => {
    return state
  }),

  on(StudentStateActions.modifyStudentState, (state, { student: Student }) => {
    return state
  }),

  on(StudentStateActions.deleteStudentState, (state, { student: Student }) => {
    return  state
  }), 
);

export const studentStateFeature = createFeature({
  name: studentStateFeatureKey,
  reducer,
});

