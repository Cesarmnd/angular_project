import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { env } from 'src/app/enviroments/enviroment';
import { Course } from 'src/app/core/models/course';

@Injectable()

export class CourseService {

  
  constructor(
    private http: HttpClient
  ) { 

  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${env.apiURL}/courses`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.handleError)
    )
  }

  addCourse( course: Course ): Observable<Course> {
    return this.http.post<Course>(`${env.apiURL}/courses`, course , {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.handleError)
    )
  }

  modifyCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${env.apiURL}/courses/${course.id}`, course , {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.handleError)
    )
  }

  removeCourse( course: Course ): Observable<Course> {
    return this.http.delete<Course>(`${env.apiURL}/courses/${course.id}`, {
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
