import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooleanStyleDirective } from './directives/boolean-style.directive';
import { BooleanToTextPipe } from './pipes/boolean-to-text.pipe';
import { ColorPickerDirective } from './directives/color-picker.directive';
import { FontSizeDirective } from './directives/font-size.directive';
import { DatesFormatPipe } from './pipes/dates-format.pipe';
import { FilterCoursePipe } from './pipes/filter-course.pipe';
import { FilterStudentPipe } from './pipes/filter-student.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { NameShowerPipe } from './pipes/name-shower.pipe';



@NgModule({
  declarations: [
    BooleanStyleDirective,
    BooleanToTextPipe,
    ColorPickerDirective,
    FontSizeDirective,
    DatesFormatPipe,
    FilterCoursePipe,
    FilterStudentPipe,
    FilterPipe,
    NameShowerPipe
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    BooleanStyleDirective,
    BooleanToTextPipe,
    ColorPickerDirective,
    FontSizeDirective,
    DatesFormatPipe,
    FilterCoursePipe,
    FilterStudentPipe,
    FilterPipe,
    NameShowerPipe
  ]
})
export class SharedModule { }
