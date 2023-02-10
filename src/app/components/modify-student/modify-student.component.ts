import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/models/students';

@Component({
  selector: 'app-modify-student',
  templateUrl: './modify-student.component.html',
  styleUrls: ['./modify-student.component.css']
})
export class ModifyStudentComponent {
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ModifyStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student
  ) {
    this.form = new FormGroup(
      {
        user: new FormControl(data.user),
        name: new FormControl(data.name),
        lastname: new FormControl(data.lastname),
        grade: new FormControl(data.grade),
        email: new FormControl(data.email)
      }
    )
  }

  saveChanges() {
    alert('Changes has been saved successfully.')
  }
}
