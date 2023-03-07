import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      user: new FormControl(),
      pass: new FormControl(),
      admin: new FormControl(false)
    })
  }

  login() {
    let user: User = {
      user: this.form.value.user,
      pass: this.form.value.pass,
      admin: this.form.value.admin,
    }
    this.loginService.login(user)
    this.router.navigate(['home'])
  }
}
