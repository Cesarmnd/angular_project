import { TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseService } from '../../services/course.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AddCourseComponent } from './add-course.component';
import { MatSelectModule } from '@angular/material/select';
import { Store, StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddCourseComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseComponent ],
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        SharedModule,
        HttpClientTestingModule,
        MatDialogModule,
        MatSelectModule,
        StoreModule.forRoot({})
      ], 
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
        {provide: Store},
        CourseService
      ]
    }).compileComponents();
  });

  it('Component correctly created', () => {
    const fixture = TestBed.createComponent(AddCourseComponent)
    const component = fixture.componentInstance
    expect(component).toBeTruthy();
  });

  it('Invalid form when inputs arent completed', () => {
    const fixture = TestBed.createComponent(AddCourseComponent)
    const component = fixture.componentInstance
    fixture.detectChanges()

    const form = component.form
    const name = form.controls['name']

    name.setValue('Angular') 

    expect(form.invalid).toBeTrue()
  })

  it('Valid form when all inputs are filled', () => {
    const fixture = TestBed.createComponent(AddCourseComponent)
    const component = fixture.componentInstance
    fixture.detectChanges()

    const form = component.form
    const name = form.controls['name']
    const img = form.controls['img']
    const teacher = form.controls['teacher']
    const startDate = form.controls['startDate']
    const endDate = form.controls['endDate']

    name.setValue('Angular') 
    img.setValue('img')
    teacher.setValue('Oscar')
    startDate.setValue(new Date())
    endDate.setValue(new Date())

    expect(component.form.valid).toBeTrue()
  })
})
