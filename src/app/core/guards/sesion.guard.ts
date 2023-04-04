import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { SesionService } from '../services/sesion.service';
import { Sesion } from '../models/sesion';

@Injectable({
  providedIn: 'root'
})

export class SesionGuard implements CanActivate, CanActivateChild {

  constructor(
    private sesion: SesionService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.sesion.getSesion().pipe(
      map(( sesion:Sesion ) => {
        if (sesion.activeSesion) {
          return true
        } else {
          this.router.navigate(['auth/login'])
          return false
        }
      })
    );
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.sesion.getSesion().pipe(
        map(( sesion:Sesion ) => {
          if (sesion.activeSesion) {
            return true
          } else {
            this.router.navigate(['auth/login'])
            return false
          }
        })
      );
  }
}
