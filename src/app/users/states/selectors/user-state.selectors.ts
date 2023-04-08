import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUserState from '../reducers/user-state.reducer';

export const selectUserState = createFeatureSelector<fromUserState.UserState>(
  fromUserState.userStateFeatureKey
);


export const LoadingUserSelector = createSelector(
  selectUserState,
  ( state: fromUserState.UserState ) => state.loading
); 


export const LoadedUserSelector = createSelector(
  selectUserState,
  ( state: fromUserState.UserState ) => state.users
) 