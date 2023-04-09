import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from 'src/app/material.module';
import { UserService } from '../../services/user.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModifyUserComponent } from './modify-user.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store, StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ModifyUserComponent', () => {
  let component: ModifyUserComponent;
  let fixture: ComponentFixture<ModifyUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ 
      declarations: [ ModifyUserComponent ],
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        SharedModule,
        StoreModule.forRoot({})
      ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
        {provide: Store},
        UserService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
