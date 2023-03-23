import { TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseService } from '../../services/course.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ModifyCourseComponent } from './modify-course.component';


describe('ModifyCourseComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyCourseComponent ],
      imports: [
        MaterialModule,
        SharedModule,
        HttpClientTestingModule
      ], 
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
        CourseService
      ]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ModifyCourseComponent)
    const component = fixture.componentInstance
    expect(component).toBeTruthy();
  });
});
