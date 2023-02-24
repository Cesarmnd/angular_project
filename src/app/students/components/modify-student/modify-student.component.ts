import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/models/students';
import { StudentsService } from '../../services/student.service';

@Component({
  selector: 'app-modify-student',
  templateUrl: './modify-student.component.html',
  styleUrls: ['./modify-student.component.css']
})

export class ModifyStudentComponent implements OnInit{
  form!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ModifyStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student,
    private studentService: StudentsService
  ) { }


  ngOnInit(): void {
    this.form = new FormGroup(
      {
        user: new FormControl(this.data.user),
        name: new FormControl(this.data.name),
        lastname: new FormControl(this.data.lastname),
        grade: new FormControl(this.data.grade),
        email: new FormControl(this.data.email)
      }
    )
  }

   saveChanges() {
    let student: Student = {
      user: this.form.value.user,
      name: this.form.value.name,
      lastname: this.form.value.lastname,
      grade: this.form.value.grade,
      email: this.form.value.email
    }
    this.studentService.modifyStudent(student);
    this.dialogRef.close();
  } 
}
