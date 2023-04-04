import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ModifyStudentComponent } from './components/modify-student/modify-student.component';
import { StudentsComponent } from './components/students/students.component';
import { MaterialModule } from '../material.module';
import { StudentsRoutingModule } from './students-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StudentService } from './services/student.service';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from './states/effects/student-state.effects';
import { StoreModule } from '@ngrx/store';
import { studentStateFeatureKey, reducer } from './states/reducers/student-state.reducer';


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
    StudentsRoutingModule,
    StoreModule.forFeature( studentStateFeatureKey, reducer),
    EffectsModule.forFeature([StudentEffects])
  ],
  providers: [
    StudentService
  ]
})
export class StudentsModule { }
