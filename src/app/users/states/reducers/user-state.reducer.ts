import { createFeature, createReducer, on } from '@ngrx/store';
import * as UserStateActions from '../actions/user-state.actions';
import { User } from 'src/app/core/models/user';

export const userStateFeatureKey = 'userState';

export interface UserState {
  loading: boolean,
  users: User[]
}

export const initialState: UserState = {
  loading: false,
  users: []
};

export const reducer = createReducer(
  initialState,
  on(UserStateActions.loadUserState, (state) => {
    return { ...state , loading: true }
  }),

  on(UserStateActions.usersLoaded, (state, { users }) => {
    return { ...state , loading: false, users }
  }),

  on(UserStateActions.addUserState, (state, { user: User }) => {
    return state
  }),

  on(UserStateActions.modifyUserState, (state, { user: User }) => {
    return state
  }),

  on(UserStateActions.deleteUserState, (state, { user: User }) => {
    return  state
  }), 
);

export const userStateFeature = createFeature({
  name: userStateFeatureKey,
  reducer,
});

