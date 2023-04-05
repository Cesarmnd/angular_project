import { Component, Inject, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/core/models/students';
import { Store } from '@ngrx/store';
import { addStudentState } from '../../states/actions/student-state.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit{
  form!: FormGroup;

  constructor (
    private dialogRef: MatDialogRef<AddStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student,
    private store: Store
  ) {

  }
  ngOnInit(): void {
    let emailVaidator: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    this.form = new FormGroup(
      {
        id: new FormControl(''),
        user: new FormControl('', [ Validators.required ]),
        name: new FormControl('', [ Validators.required ]),
        lastname: new FormControl('', [ Validators.required ]),
        grade: new FormControl('', 
        [ Validators.required, 
          Validators.pattern(/^[0-9]\d*$/),
          Validators.minLength(1),
          Validators.maxLength(2) 
        ]),
        email: new FormControl('', 
          [ Validators.required, 
            Validators.email, 
            Validators.pattern(emailVaidator) 
          ])
      }
    )
  }

  AddStudent() {
    let student: Student = {
      id: this.form.value.id,
      user: this.form.value.user,
      name: this.form.value.name,
      lastname: this.form.value.lastname,
      grade: this.form.value.grade,
      email: this.form.value.email
    }
    console.log(student)
    this.store.dispatch(addStudentState( {student:student}))
    this.dialogRef.close();
  }
}
