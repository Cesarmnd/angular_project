import { createAction, props } from '@ngrx/store';
import { Course } from '../models/course';

export const loadCourseState = createAction(
  '[CourseState] Load CourseStates'
);

export const coursesLoaded = createAction(
  '[CourseState] Courses loaded',
  props<{ courses: Course[] }>()
)

