import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifyCourseComponent } from './components/modify-course/modify-course.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { MaterialModule } from '../material.module';
import { CourseService } from './services/course.service';
import { SharedModule } from '../shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';



@NgModule({
  declarations: [
    AddCourseComponent,
    ModifyCourseComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    CoursesRoutingModule
  ],
  providers: [
    CourseService
  ]
})
export class CoursesModule { }
