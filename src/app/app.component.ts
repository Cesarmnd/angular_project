import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sesion } from './core/models/sesion';
import { SesionService } from './core/services/sesion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sesion$!: Observable<Sesion>;
  title = 'Angular_project';

  constructor(
    private sesion: SesionService
  ) {

  }

  ngOnInit(): void {
    this.sesion$ = this.sesion.getSesion();
  }
}
