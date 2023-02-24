import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ModifyCourseComponent } from './components/modify-course/modify-course.component';

const routes: Routes = [
  { path: 'courses', children: [
    { path: 'list', component: CoursesComponent },
    { path: 'add', component: AddCourseComponent },
    { path: 'edit', component: ModifyCourseComponent },
  ]} 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CoursesRoutingModule { }
