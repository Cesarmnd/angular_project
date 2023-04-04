import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Course } from 'src/app/core/models/course';

import { CourseService } from './course.service';

describe('CourseService', () => {
  let service: CourseService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        CourseService
      ] 
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new CourseService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('List of courses loaded', (done: DoneFn) => {
    let date = new Date;
    const data: Course[]= [
      {
       "name": "Reactjs",
       "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207",
       "teacher": {
        "user": "Fred.Gulgowski27",
        "name": "Sylvester",
        "course": "Refined Frozen Tuna",
        "id": "4"
       },
       "startDate": date,
       "endDate": date,
       "open": false,
       "time": 3,
       "id": "11"
      },
      {
       "name": "Java",
       "img": "https://cdn.worldvectorlogo.com/logos/java.svg",
       "teacher": {
        "user": "Gerda17",
        "name": "Aaron",
        "course": "Handcrafted Steel Table",
        "id": "3"
       },
       "startDate": date,
       "endDate": date,
       "open": true,
       "time": 3,
       "id": "12"
      },
      {
       "name": "Angular",
       "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png",
       "teacher": {
        "user": "Nicklaus.Bergstrom",
        "name": "Florine",
        "course": "Licensed Metal Pants",
        "id": "2"
       },
       "startDate": date,
       "endDate": date,
       "open": false,
       "time": 6,
       "id": "13"
      },
      {
       "name": "HTML / CSS",
       "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png?20170517184425",
       "teacher": {
        "user": "Nicklaus.Bergstrom",
        "name": "Florine",
        "course": "Licensed Metal Pants",
        "id": "2"
       },
       "startDate": date,
       "endDate": date,
       "open": false,
       "time": 2,
       "id": "14"
      },
      {
       "name": "Javascript",
       "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902",
       "teacher": {
        "user": "Nicklaus.Bergstrom",
        "name": "Florine",
        "course": "Licensed Metal Pants",
        "id": "2"
       },
       "startDate": date,
       "endDate": date,
       "open": true,
       "time": 5,
       "id": "15"
      },
      {
       "name": "VueJs",
       "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png?20170919082558",
       "teacher": {
        "user": "Rose_Moen35",
        "name": "Terence",
        "course": "Awesome Wooden Fish",
        "id": "1"
       },
       "startDate": date,
       "endDate": date,
       "open": false,
       "time": 3,
       "id": "16"
      }
    ];

    httpClientSpy.get.and.returnValue(of(data));

    service.getCourses().subscribe((courses: Course[]) => {
       expect(courses).toEqual(data)
       done();
    });
  })
});
