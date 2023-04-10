import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { confirmPassCheck } from 'src/app/shared/validators/password-validator';
import { SignupService } from '../../services/signup.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  form!: FormGroup;

  constructor(
    private router: Router,
    private signUp: SignupService,
    private snackBar: MatSnackBar
  ) {

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

  signup(){
    let user: User = {
      user: this.form.value.user,
      pass: this.form.value.pass,
      admin: false,
    }

    this.signUp.addUser(user).subscribe(data => {
      this.snackBar.open(`User ${user.user} successfully created!`, 'Close', {
        duration: 3000
      }) 
      this.router.navigate(['./auth/login'])
    })
  }

}
