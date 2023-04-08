import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/models/user';

export const loadUserState = createAction(
  '[UserState] Load UserStates'
);

export const usersLoaded = createAction(
  '[UserState] Users loaded',
  props<{ users: User[] }>()
)

export const addUserState = createAction(
  '[UserState] Add user',
  props<{ user: User }>()
);

export const modifyUserState = createAction(
  '[UserState] Modify user',
  props<{ user: User }>()
);

export const deleteUserState = createAction(
  '[UserState] Delete user',
  props<{ user: User }>()
);
