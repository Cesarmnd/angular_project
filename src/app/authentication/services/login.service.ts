import { Injectable } from '@angular/core';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Sesion } from 'src/app/models/sesion';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor (  
    private sesion: SesionService
    ) { }

  login(user: User) {
    let sesion: Sesion = {
      activeSesion: true,
      activeUser: user
    }

    this.sesion.createSesion(sesion)
  }
}
