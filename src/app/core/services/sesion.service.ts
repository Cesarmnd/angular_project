import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';

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

  createSesion( sesison: Sesion) {
    this.sesion$.next(sesison)
  }

  getSesion(): Observable<Sesion> {
    return this.sesion$.asObservable()
  }

  logout(sesion: Sesion) {
    this.sesion$.next(sesion)
  }
}
