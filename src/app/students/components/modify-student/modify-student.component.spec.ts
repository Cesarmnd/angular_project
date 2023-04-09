import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentService } from '../../services/student.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ModifyStudentComponent } from './modify-student.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ModifyStudentComponent', () => {
  let component: ModifyStudentComponent;
  let fixture: ComponentFixture<ModifyStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyStudentComponent ],
      imports: [
        MaterialModule,
        SharedModule,
        StoreModule.forRoot({})
      ], 
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
        {provide: Store},
        StudentService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
