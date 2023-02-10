import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-modify-course',
  templateUrl: './modify-course.component.html',
  styleUrls: ['./modify-course.component.css']
})
export class ModifyCourseComponent {
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ModifyCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course
  ) {
    this.form = new FormGroup(
      {
        id: new FormControl(data.id),
        name: new FormControl(data.name),
        teacher: new FormControl(data.teacher),
        time: new FormControl(data.time)
      }
    )
  }

}
