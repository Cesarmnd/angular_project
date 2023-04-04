import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SesionGuard } from '../core/guards/sesion.guard';
import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [
  { path: '', children: [ 
    { path: 'list', component: StudentsComponent },
  ]} 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
