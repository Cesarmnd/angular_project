import { Component, OnInit } from '@angular/core';
import { SesionService } from '../../services/sesion.service';
import { Observable } from 'rxjs';
import { Sesion } from '../../models/sesion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  sesion$!: Observable<Sesion>;

  constructor(
    private sesion: SesionService
  ){

  }

  ngOnInit(): void {
    this.sesion$ = this.sesion.getSesion();
  }
}
