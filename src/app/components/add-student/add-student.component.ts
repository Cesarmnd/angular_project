import { Component, Inject} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/models/students';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  addStudentForm: FormGroup;  

  constructor (
    private dialogRef: MatDialogRef<AddStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student
  ) {
    let emailVaidator: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    let controls: any = {
      user: new FormControl('', [ Validators.required ]),
      firstName: new FormControl('', [ Validators.required ]),
      lastName: new FormControl('', [ Validators.required ]),
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

    this.addStudentForm = new FormGroup(controls)
  }

  AddStudent() {
     alert('This student was added successfully')
  }
}
