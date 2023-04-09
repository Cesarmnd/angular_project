import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Sesion } from 'src/app/core/models/sesion';
import { User } from 'src/app/core/models/user';
import { env } from 'src/app/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor (  
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

  login(user: User): Observable<Sesion> {
    return this.http.get<User[]>(`${env.jsonURL}/users`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      map( (users: User[]) => {
        let isValid = users.find((obj:User) => obj.user === user.user && obj.pass === user.pass)
        if(isValid) {
          const session: Sesion = {
            activeSesion: true,
            activeUser: isValid
          }
          return session
        } else {
          const session: Sesion = {
            activeSesion: false,
            activeUser: undefined            
          }
          return session
        }
      }),
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
