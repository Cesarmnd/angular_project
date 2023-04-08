import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TeacherService } from 'src/app/core/services/teacher.service';
import { Course } from 'src/app/core/models/course';
import { teacher } from 'src/app/core/models/teacher';
import { CourseService } from '../../services/course.service';
import { addCourseState } from '../../states/actions/course-state.actions';
import { CourseState } from '../../states/reducers/course-state.reducer';

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
    private courseService: CourseService,
    private teachers: TeacherService,
    private store: Store<CourseState>,
  
  ) { }

  ngOnInit(): void {
    this.teacher$ = this.teachers.getTeachers()
    this.form = new FormGroup(
      {
        name: new FormControl('', [ Validators.required ]),
        img: new FormControl('', [ Validators.required ]),
        teacher: new FormControl({}, [ Validators.required ]),
        time: new FormControl('', 
        [ Validators.required,
          Validators.maxLength(2)  
        ]),
        startDate: new FormControl('', [ Validators.required ]),
        endDate: new FormControl('', [ Validators.required ]),
        open: new FormControl(false)
      }
    )
  }

  addCourse() {
    let course: Course = { 
      id: '',
      name: this.form.value.name,
      img: this.form.value.img,
      teacher: this.form.value.teacher,
      startDate: this.form.value.startDate,
      endDate: this.form.value.endDate,
      open: this.form.value.open
    }

    this.store.dispatch(addCourseState( {course:course}))
    this.dialogRef.close(course)
  } 
}
