import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { User } from 'src/app/core/models/user';
import { confirmPassCheck } from 'src/app/shared/validators/password-validator';
import { addUserState } from '../../states/actions/user-state.actions';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private store: Store
  ){

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      user: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required]),
      confirmpass: new FormControl('', [Validators.required])
    }, { validators: confirmPassCheck('pass', 'confirmpass') })
  }

  passCheck(){
    if(this.form.hasError('mismatch')) {
      this.form.get('confirmpass')?.setErrors({ mismatch: true })
    } else {
      this.form.get('confirmpass')?.setErrors( null )
    }
  }

  addUser() {
    let user: User = {
      user: this.form.value.user,
      pass: this.form.value.pass,
      admin: false,
    }

    this.store.dispatch(addUserState({ user:user }))
    this.dialogRef.close()
  }
}
