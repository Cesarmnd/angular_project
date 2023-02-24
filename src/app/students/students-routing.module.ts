import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ModifyStudentComponent } from './components/modify-student/modify-student.component';
import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [
  { path: 'students', children: [
    { path: 'list', component: StudentsComponent },
    { path: 'add', component: AddStudentComponent },
    { path: 'edit', component: ModifyStudentComponent },
  ]} 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
