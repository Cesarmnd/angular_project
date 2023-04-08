import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { UserService } from './services/user.service';
import { UsersRoutingModule } from './users-routing.module';
import { ModifyUserComponent } from './components/modify-user/modify-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userStateFeatureKey, reducer  } from './states/reducers/user-state.reducer';
import { UserEffects } from './states/effects/user-state.effects';


@NgModule({
  declarations: [
    UsersComponent,
    ModifyUserComponent,
    AddUserComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    UsersRoutingModule,
    StoreModule.forFeature( userStateFeatureKey, reducer),
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
