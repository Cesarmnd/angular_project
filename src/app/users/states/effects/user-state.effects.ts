import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, concatMap } from 'rxjs/operators';
import { addUserState, deleteUserState, loadUserState, modifyUserState, usersLoaded } from '../actions/user-state.actions'; 
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/core/models/user';


@Injectable()
export class UserEffects {

  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUserState),
      concatMap(() => {
        return this.users.getUsers().pipe(
          map((obj: User[]) => usersLoaded({ users: obj }))
        )
      })
    )
  });

  addUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addUserState),
      concatMap(({user}) => {
        return this.users.addUser(user).pipe(
          map(( user: User ) => {
            this.snackBar.open(`${user.user} successfully added!`, 'Close', {
              duration: 3000
            }) 
            return loadUserState()
          })
        )
      })
    )
  });

  modifyUser$ = createEffect( ()=> {
    return this.actions$.pipe(
      ofType(modifyUserState),
      concatMap(({user}) => {
        return this.users.modifyUser(user).pipe(
          map(( user: User ) => {
            this.snackBar.open(`${user.user} successfully modified!`, 'Close', {
              duration: 3000
          }) 
            return loadUserState()
          })
        )
      })
    )
  });

  deleteUser$ = createEffect(()=> {
    return this.actions$.pipe(
      ofType(deleteUserState),
      concatMap(({user}) => {
        return this.users.removeUser(user).pipe(
          map(( user: User ) => {
            return loadUserState()
          })
        )
      })
      )
  }); 

  constructor(
    private users: UserService,
    private actions$: Actions,
    private snackBar: MatSnackBar
  ) {}
}
