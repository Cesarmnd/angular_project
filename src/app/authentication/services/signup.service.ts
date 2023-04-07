import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/app/enviroments/enviroment';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from 'src/app/core/models/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http: HttpClient
  ) { }

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

  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      alert(`Client side error: ${error.message}`)
    } else {
      alert(`Server side error: ${error.message}`)
    }

    return throwError(() => new Error('Error while loading courses'))
  }
}
