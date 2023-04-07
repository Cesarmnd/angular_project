import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Student } from 'src/app/core/models/students';
import { env } from 'src/app/enviroments/enviroment';

@Injectable()

export class StudentService {

  constructor(
    private http: HttpClient
  ) {

  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${env.jsonURL}/students`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.handleError)
    )
  }

  addStudent( student: Student ): Observable<Student> {
    return this.http.post<Student>(`${env.jsonURL}/students`, student, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.handleError)
    )
  }

  modifyStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${env.jsonURL}/students/${student.id}`, student , {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.handleError)
    )
  }

  removeStudent( student: Student ): Observable<Student> {
    return this.http.delete<Student>(`${env.jsonURL}/students/${student.id}`, {
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
