import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesComponent } from './components/courses/courses.component';
import { MaterialModule } from './material.module';
import { StudentsComponent } from './components/students/students.component';
import { ModifyCourseComponent } from './components/modify-course/modify-course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatesFormatPipe } from './pipes/dates-format.pipe';
import { BooleanToTextPipe } from './pipes/boolean-to-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    StudentsComponent,
    ModifyCourseComponent,
    DatesFormatPipe,
    BooleanToTextPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
