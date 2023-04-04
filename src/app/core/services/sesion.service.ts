import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sesion } from 'src/app/core/models/sesion';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  sesion$!: BehaviorSubject<Sesion>

  constructor() {
    let sesion: Sesion = {
      activeSesion: false
    };

    this.sesion$ = new BehaviorSubject<Sesion>(sesion)
  }

  createSesion( sesion: Sesion) {
    this.sesion$.next(sesion)
  }

  getSesion(): Observable<Sesion> {
    return this.sesion$.asObservable()
  }

  logout(sesion: Sesion) {
    this.sesion$.next(sesion)
  }
}
