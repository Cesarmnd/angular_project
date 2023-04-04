import { createAction, props } from '@ngrx/store';
import { Course } from '../../../core/models/course';

export const loadCourseState = createAction(
  '[CourseState] Load CourseStates'
);

export const coursesLoaded = createAction(
  '[CourseState] Courses loaded',
  props<{ courses: Course[] }>()
)

export const addCourseState = createAction(
  '[CourseState] Add course',
  props<{ course: Course }>()
);

export const modifyCourseState = createAction(
  '[CourseState] Modify course',
  props<{ course: Course }>()
);

export const deleteCourseState = createAction(
  '[CourseState] Delete course',
  props<{ course: Course }>()
);