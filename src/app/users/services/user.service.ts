import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { env } from 'src/app/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${env.jsonURL}/users`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.handleError)
    )
  }

  addUser( user: User ): Observable<User> {
    return this.http.post<User>(`${env.jsonURL}/users`, user, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.handleError)
    )
  }

  modifyUser( user: User ): Observable<User> {
    return this.http.put<User>(`${env.jsonURL}/users/${user.id}`, user , { 
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.handleError)
    )
  }

  removeUser( user: User ): Observable<User> {
    return this.http.delete<User>(`${env.jsonURL}/users/${user.id}`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.handleError)
    )
  }


  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      alert(`Client side error: ${error.message}`)
    } else {
      alert(`Server side error: ${error.message}`)
    }

    return throwError(() => new Error('Error while loading courses'))
  }
}
