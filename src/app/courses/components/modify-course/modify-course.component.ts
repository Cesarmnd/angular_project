import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Course } from 'src/app/models/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-modify-course',
  templateUrl: './modify-course.component.html',
  styleUrls: ['./modify-course.component.css']
})

export class ModifyCourseComponent implements OnInit {
  form!: FormGroup;
  
  constructor(
    private dialogRef: MatDialogRef<ModifyCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course,
    private courseService: CourseService,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        id: new FormControl(this.data.id),
        name: new FormControl(this.data.name),
        img: new FormControl(this.data.img),
        teacher: new FormControl(this.data.teacher.name),
        time: new FormControl(this.data.time),
        startDate: new FormControl(this.data.startDate),
        endDate: new FormControl(this.data.endDate),
        open: new FormControl(this.data.open)
      }
    )
  }

  saveChanges() {
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
    this.courseService.modifyCourse(course);
    this.dialogRef.close();
  } 
}
