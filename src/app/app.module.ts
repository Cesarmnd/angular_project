import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesComponent } from './components/courses/courses.component';
import { MaterialModule } from './material.module';
import { StudentsComponent } from './components/students/students.component';
import { ModifyCourseComponent } from './components/modify-course/modify-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatesFormatPipe } from './pipes/dates-format.pipe';
import { BooleanToTextPipe } from './pipes/boolean-to-text.pipe';
import { BooleanStyleDirective } from './directives/boolean-style.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterCoursePipe } from './pipes/filter-course.pipe';
import { FilterStudentPipe } from './pipes/filter-student.pipe';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModifyStudentComponent } from './components/modify-student/modify-student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { NameShowerPipe } from './pipes/name-shower.pipe';
import { ColorPickerDirective } from './directives/color-picker.directive';
import { FontSizeDirective } from './directives/font-size.directive';
import { config, token } from './config';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    StudentsComponent,
    ModifyCourseComponent,
    DatesFormatPipe,
    BooleanToTextPipe,
    BooleanStyleDirective,
    FilterPipe,
    FilterCoursePipe,
    FilterStudentPipe,
    ToolbarComponent,
    NavbarComponent,
    ModifyStudentComponent,
    AddStudentComponent,
    NameShowerPipe,
    ColorPickerDirective,
    FontSizeDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
