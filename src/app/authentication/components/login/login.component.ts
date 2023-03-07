import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor() {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      user: new FormControl(),
      pass: new FormControl(),
      admin: new FormControl()
    })
  }

  login() {
    let user = {
      user: this.form.value.user,
      pass: this.form.value.pass,
      admin: this.form.value.admin,
    }
    console.log(user)
  }

}
