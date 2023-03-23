import { createFeature, createReducer, on } from '@ngrx/store';
import { Course } from '../models/course';
import * as CourseStateActions from './course-state.actions';

export const courseStateFeatureKey = 'courseState';

export interface CourseState {
  loading: boolean,
  courses: Course[]
}

export const initialState: CourseState = {
  loading: false,
  courses: []
};

export const reducer = createReducer(
  initialState,
  on(CourseStateActions.loadCourseState, (state) => {
    return { ...state , loading: true }
  }),

  on(CourseStateActions.coursesLoaded, (state, { courses }) => {
    return { ...state , loading: false, courses }
  }),

);

export const courseStateFeature = createFeature({
  name: courseStateFeatureKey,
  reducer,
});

