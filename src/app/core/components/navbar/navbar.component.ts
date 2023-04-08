import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Sesion } from '../../models/sesion';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  sesion$!: Observable<Sesion>;
  showFiller = false;

  constructor (
    private sesion: SesionService
  ) {

  }

  ngOnInit(): void {
    this.sesion$ = this.sesion.getSesion();
  }
}
