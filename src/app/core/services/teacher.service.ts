import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'src/app/enviroments/enviroment';
import { teacher } from 'src/app/core/models/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
    private http: HttpClient
  ) { }

  getTeachers(): Observable<teacher[]> {
    return this.http.get<teacher[]>(`${env.apiURL}/teachers`)
  }
}
