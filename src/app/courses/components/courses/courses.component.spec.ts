import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseService } from '../../services/course.service';

import { CoursesComponent } from './courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';

describe('TestCoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  let dialogSpy: jasmine.Spy;
  let dialogRefSpyObj = jasmine.createSpyObj({afterClosed: of({}), close: null})

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesComponent ],
      imports: [
        MaterialModule,
        SharedModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatSelectModule
      ],
      providers: [
        CourseService
      ]
    })
    .compileComponents();

    dialogSpy = spyOn(TestBed.inject(MatDialog), 'open').and.returnValue(dialogRefSpyObj);
  });

  it('Component created', () => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Should open add-course dialog', () => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    component.add()
    expect(dialogSpy).toHaveBeenCalled()

  })  

  it('Should open modify-course dialog', () => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    const date = new Date()

    component.modify(
      {
        name: "Reactjs",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207",
        teacher: {
         user: "Fred.Gulgowski27",
         name: "Sylvester",
         course: "Refined Frozen Tuna",
         id: "4"
        },
        startDate: date,
        endDate: date,
        open: false,
        time: 3,
        id: "11"
       }
    )
    
    expect(dialogSpy).toHaveBeenCalled()
  })  
});
