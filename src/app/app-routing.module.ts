import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { SesionGuard } from './core/guards/sesion.guard';

const routes: Routes = [
  { path: 'home', canActivate: [SesionGuard],component: HomeComponent },
  { path: 'courses',
    loadChildren: () => import('./courses/courses.module').then((obj) => obj.CoursesModule )
  },
  { path: 'students',
    loadChildren: () => import('./students/students.module').then((obj) => obj.StudentsModule )
  },
  { path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then((obj) => obj.AuthenticationModule )
  },
  { path:'', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component:NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }