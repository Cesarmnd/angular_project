import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TeacherService } from 'src/app/core/services/teacher.service';
import { Course } from 'src/app/models/course';
import { teacher } from 'src/app/models/teacher';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})

export class AddCourseComponent implements OnInit {
  form!: FormGroup;
  teacher$!: Observable<teacher[]>

  constructor (
    private dialogRef: MatDialogRef<AddCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course,
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private teachers: TeacherService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.teacher$ = this.teachers.getTeachers()
    this.form = new FormGroup(
      {
        name: new FormControl(),
        teacher: new FormControl(),
        time: new FormControl(),
        startDate: new FormControl(),
        endDate: new FormControl(),
        open: new FormControl()
      }
    )
  }

  addCourse() {
    let course: Course = { 
      id: '',
      name: this.form.value.name,
      img: this.form.value.img,
      teacher: this.form.value.teacher,
      time: this.form.value.time,
      startDate: this.form.value.startDate,
      endDate: this.form.value.endDate,
      open: this.form.value.open
    }
    this.courseService.addCourse(course).subscribe((course:Course) => {
      this.dialogRef.close(course);
    });
  } 
}
