import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ModifyStudentComponent } from './components/modify-student/modify-student.component';
import { StudentsComponent } from './components/students/students.component';
import { MaterialModule } from '../material.module';
import { StudentsRoutingModule } from './students-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StudentsService } from './services/student.service';


@NgModule({
  declarations: [
    AddStudentComponent,
    ModifyStudentComponent,
    StudentsComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    StudentsRoutingModule
  ],
  providers: [
    StudentsService
  ]
})
export class StudentsModule { }
