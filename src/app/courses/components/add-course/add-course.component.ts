import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})

export class AddCourseComponent implements OnInit {
  form!: FormGroup;
  
  constructor (
    private dialogRef: MatDialogRef<AddCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course,
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        id: new FormControl(),
        name: new FormControl(),
        img: new FormControl(),
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
      id: this.form.value.id,
      name: this.form.value.name,
      img: this.form.value.img,
      teacher: {
        user: '',
        name: this.form.value.teacher,
        course: '',
      },
      time: this.form.value.time,
      startDate: this.form.value.startDate,
      endDate: this.form.value.endDate,
      open: this.form.value.open
    }
    this.courseService.addCourse(course);
    this.dialogRef.close();
  } 
}
