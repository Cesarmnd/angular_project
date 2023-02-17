import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, from, map, Observable, of, Subscription } from 'rxjs';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';
import { ModifyCourseComponent } from '../modify-course/modify-course.component';

@Component({
  selector: 'app-courses', 
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy{
  sub!: Subscription;
  courses!: Course[]
  courses$!: Observable<Course[]>
  filter:string = '';

  constructor(
    private dialog: MatDialog,
    private courseService: CourseService
  ) {

  }
  
  ngOnInit(): void {
    this.courses$ = this.courseService.getCourses();
    this.sub = this.courses$.subscribe((courses: Course[]) => {
      this.courses = courses;
    })
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe
  }

  modify(course: Course) {
    const dialogRef = this.dialog.open(ModifyCourseComponent, {
      data: course
    })
  }

  filterList(event: Event){
    const element = event.target as HTMLInputElement;
    of (this.courses).pipe(
      map((courses: Course[]) => {
        return (courses.filter((course:Course) => {
          return course.name.toLocaleLowerCase().includes(element.value.toLocaleLowerCase())
        }))
      })
    ).subscribe((courses: Course[]) => {
      this.courses = courses;
      console.log('filter applied', element.value)
    })
  }
}
