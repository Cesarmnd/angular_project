import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TeacherService } from 'src/app/core/services/teacher.service';
import { Course } from 'src/app/core/models/course';
import { teacher } from 'src/app/core/models/teacher';
import { CourseService } from '../../services/course.service';
import { modifyCourseState } from '../../states/actions/course-state.actions';

@Component({
  selector: 'app-modify-course',
  templateUrl: './modify-course.component.html',
  styleUrls: ['./modify-course.component.css']
})

export class ModifyCourseComponent implements OnInit {
  form!: FormGroup;
  teacher$!: Observable<teacher[]>
  
  constructor(
    private dialogRef: MatDialogRef<ModifyCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course,
    private courseService: CourseService,
    private teachers: TeacherService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.teacher$ = this.teachers.getTeachers();
    this.form = new FormGroup(
      {
        id: new FormControl(this.data.id),
        name: new FormControl(this.data.name),
        img: new FormControl(this.data.img),
        teacher: new FormControl(this.data.teacher.name),
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
      teacher:this.form.value.teacher,
      startDate: this.form.value.startDate,
      endDate: this.form.value.endDate,
      open: this.form.value.open
    }

    this.store.dispatch(modifyCourseState({course}))
    this.dialogRef.close(course);
  } 
}
