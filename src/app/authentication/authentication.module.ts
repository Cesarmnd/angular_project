import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthHomeComponent } from './components/auth-home/auth-home.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AuthHomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MaterialModule,
    SharedModule
  ],
  providers: [

  ]
})
export class AuthenticationModule { }
