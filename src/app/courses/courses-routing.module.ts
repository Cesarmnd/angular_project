import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SesionGuard } from '../core/guards/sesion.guard';
import { CoursesComponent } from './components/courses/courses.component';

const routes: Routes = [
  { path: '', canActivateChild: [SesionGuard], children: [
    { path: 'list', component: CoursesComponent }
  ]} 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CoursesRoutingModule { }
