import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { User } from 'src/app/core/models/user';
import { modifyUserState } from '../../states/actions/user-state.actions';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css']
})
export class ModifyUserComponent implements OnInit{
  form!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ModifyUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private store: Store
  ){

  }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        id: new FormControl({value: this.data.id, disabled: true }),
        user: new FormControl(this.data.user, [Validators.required]),
        pass: new FormControl(this.data.pass, [Validators.required]),
        admin: new FormControl(this.data.admin),
      }
    )
  }

  saveChanges() {
    let user: User = {
      id: this.form.controls['id'].value,
      user: this.form.value.user,
      pass: this.form.value.pass,
      admin: this.form.value.admin,
    }
    this.store.dispatch(modifyUserState({user}));
    this.dialogRef.close();
  }
}
