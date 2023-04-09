import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { Component, OnInit } from '@angular/core';
import { Sesion } from 'src/app/core/models/sesion';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { AddUserComponent } from '../add-user/add-user.component';
import { SesionService } from 'src/app/core/services/sesion.service';
import { UserState } from '../../states/reducers/user-state.reducer';
import { ModifyUserComponent } from '../modify-user/modify-user.component';
import { deleteUserState, loadUserState } from '../../states/actions/user-state.actions';
import { LoadedUserSelector, LoadingUserSelector } from '../../states/selectors/user-state.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  sesion$!: Observable<Sesion>;
  users!: User[];
  datasource!: MatTableDataSource<User>;
  columns: string[] = ['user', 'password', 'admin', 'actions'];
  loading$!: Observable<Boolean>

  constructor (
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private sesion: SesionService,
    private store: Store<UserState>,
    private userService: UserService
  ) {

  }

  ngOnInit(): void {
    this.sesion.getSesion().subscribe( ( sesion: Sesion) => {
      if(!sesion.activeSesion) {
        this.router.navigate(['auth/login'])
      }
    });
    this.sesion$ = this.sesion.getSesion(); 

    this.datasource = new MatTableDataSource<User>();
    this.loading$ = this.store.select(LoadingUserSelector);
    this.store.dispatch(loadUserState())

    this.store.select(LoadedUserSelector).subscribe(( users: User[] ) => {
      this.users = users
      this.datasource.data = this.users
    })

    this.datasource.filterPredicate = function(data, filter) {
      return data.user.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) 
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();
  }

  add() {          
    const dialogRef = this.dialog.open(AddUserComponent).afterClosed().subscribe((user: User) => {
      this.userService.getUsers().subscribe( (users: User[]) => {
        this.users = users
        this.datasource.data = this.users
      });
    });
  }

  modify(user: User) {
    const dialogRef = this.dialog.open(ModifyUserComponent, {
      data: user
    }).afterClosed().subscribe((user: User) => {
      this.userService.getUsers().subscribe( (users: User[]) => {
        this.users = users
        this.datasource.data = this.users
      });
    });
  }

  remove( user: User ) {
    this.snackBar.open(`${user.user} ${user.pass} successfully removed`, 'Close', {
      duration: 3000
    })
    this.store.dispatch(deleteUserState({ user }))
  }
}
