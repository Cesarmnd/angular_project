import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthHomeComponent } from './components/auth-home/auth-home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', component: AuthHomeComponent, children: [
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent}
  ]} 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthenticationRoutingModule { }
