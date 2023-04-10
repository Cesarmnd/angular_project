import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TeacherService } from 'src/app/core/services/teacher.service';
import { Course } from 'src/app/core/models/course';
import { teacher } from 'src/app/core/models/teacher';
import { modifyCourseState } from '../../states/actions/course-state.actions';

@Component({
  selector: 'app-modify-course',
  templateUrl: './modify-course.component.html',
  styleUrls: ['./modify-course.component.css']
})

export class ModifyCourseComponent implements OnInit {
  form!: FormGroup;
  teacher$!: Observable<teacher[]>
  selected!: string
  chosenTeacher!: teacher[]
  
  constructor(
    private dialogRef: MatDialogRef<ModifyCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course,
    private teachers: TeacherService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.teacher$ = this.teachers.getTeachers();
    this.teachers.getTeachers().subscribe(
      teachers => {
        this.chosenTeacher = teachers as teacher[]
      }
    )
    this.form = new FormGroup(
      {
        name: new FormControl(this.data.name, [ Validators.required ]),
        img: new FormControl(this.data.img, [ Validators.required ]),
        teacher: new FormControl(this.data.teacher.id, [ Validators.required ]),
        startDate: new FormControl(this.data.startDate, [ Validators.required ]),
        endDate: new FormControl(this.data.endDate, [ Validators.required ]),
        open: new FormControl(this.data.open)
      }
    )
  }

  saveChanges() {
    let course: Course = {
      id: this.data.id,
      name: this.form.value.name,
      img: this.form.value.img,
      teacher: this.chosenTeacher[this.form.value.teacher - 1],
      startDate: this.form.value.startDate,
      endDate: this.form.value.endDate,
      open: this.form.value.open
    }
    this.store.dispatch(modifyCourseState({course}))
    this.dialogRef.close(course);
  } 
}
