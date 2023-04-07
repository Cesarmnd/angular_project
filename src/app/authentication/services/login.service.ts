import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Sesion } from 'src/app/core/models/sesion';
import { User } from 'src/app/core/models/user';
import { SesionService } from 'src/app/core/services/sesion.service';
import { env } from 'src/app/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor (  
    private sesion: SesionService,
    private http: HttpClient
    ) { }

  login(user: User): Observable<Sesion> {
    return this.http.get<User[]>(`${env.jsonURL}/users`).pipe(
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
      })
    )
  }
  
}
