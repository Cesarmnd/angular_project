import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/core/models/students';
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
    private store: Store<StudentState>
  ) {

  }

  ngOnInit(): void {
    let emailVaidator: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    this.form = new FormGroup(
      {
        id: new FormControl({value: this.data.id, disabled: true}),
        user: new FormControl(this.data.user, [Validators.required]),
        name: new FormControl(this.data.name, [ Validators.required ]),
        lastname: new FormControl(this.data.lastname, [ Validators.required ]),
        grade: new FormControl(this.data.grade, 
          [ Validators.required, 
            Validators.pattern(/^(0|[1-9]|1\d|20)$/),
            Validators.minLength(1),
            Validators.maxLength(2) 
          ]),
        email: new FormControl(this.data.email, 
          [ Validators.required, 
            Validators.email, 
            Validators.pattern(emailVaidator) 
          ]
        )
      }
    )
  }

   saveChanges() {
    let student: Student = {
      id: this.form.controls['id'].value,
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
