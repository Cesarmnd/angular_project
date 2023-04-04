import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { LoginService } from '../../services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  subscription!: Subscription;
  form!: FormGroup;
  hide = true;
  
  constructor(
    private loginService: LoginService,
    private router: Router,
    private session: SesionService,
    private snackBar: MatSnackBar
  ) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      user: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required])
    })
  }

  login() {
    let user: User = {
      user: this.form.value.user,
      pass: this.form.value.pass,
      admin: true,
    }
    this.loginService.login(user).subscribe(obj => {
      if(obj.activeUser === undefined) {
        this.snackBar.open('Incorrect username or password!', 'Close', {
          duration: 3000
        })
      } else {
        this.session.createSesion(obj)
        this.router.navigate(['home'])
      }
    })
  }
}
