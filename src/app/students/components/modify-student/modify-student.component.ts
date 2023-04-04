import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/core/models/students';
import { StudentService } from '../../services/student.service';
import { Store } from '@ngrx/store';
import { StudentState } from '../../states/reducers/student-state.reducer';
import { modifyStudentState } from '../../states/actions/student-state.actions';

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
    private studentService: StudentService,
    private store: Store<StudentState>
  ) { }


  ngOnInit(): void {
    this.form = new FormGroup(
      {
        id: new FormControl(this.data.id),
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
      id: this.form.value.id,
      user: this.form.value.user,
      name: this.form.value.name,
      lastname: this.form.value.lastname,
      grade: this.form.value.grade,
      email: this.form.value.email
    }
    this.store.dispatch(modifyStudentState({student}))
    this.dialogRef.close();
  } 
}
