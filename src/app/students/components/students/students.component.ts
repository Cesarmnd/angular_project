import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/core/models/sesion';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/core/models/students';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from '../../services/student.service';
import { SesionService } from 'src/app/core/services/sesion.service';
import { AddStudentComponent } from '../add-student/add-student.component';
import { StudentState } from '../../states/reducers/student-state.reducer';
import { ModifyStudentComponent } from '../modify-student/modify-student.component';
import { deleteStudentState, loadStudentState } from '../../states/actions/student-state.actions';
import { LoadedStudentSelector, LoadingStudentSelector } from '../../states/selectors/student-state.selectors';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  sesion$!: Observable<Sesion>;
  students!: Student[];
  datasource!: MatTableDataSource<Student>;
  columns: string[] = ['user', 'name', 'grade', 'email', 'actions'];
  loading$!: Observable<Boolean>

  constructor (
    private router: Router, 
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private sesion: SesionService,
    private store: Store<StudentState>,
    private studentService: StudentService
  ) {
  }
  
  ngOnInit(): void {
    this.sesion.getSesion().subscribe( (sesion: Sesion) => {
      if(!sesion.activeSesion) {
        this.router.navigate(['auth/login'])
      }
    })
    this.sesion$ = this.sesion.getSesion(); // Verifying active Sesion

    this.datasource = new MatTableDataSource<Student>();
    this.loading$ = this.store.select(LoadingStudentSelector)
    this.store.dispatch(loadStudentState()) // Loading students

    this.store.select(LoadedStudentSelector).subscribe((students: Student[]) => {
      this.students = students
      this.datasource.data = this.students
    }) // Passing students to table
  }

  add() {          
    const dialogRef = this.dialog.open(AddStudentComponent).afterClosed().subscribe((student: Student) => {
      this.studentService.getStudents().subscribe( (students: Student[]) => {
        this.students = students
        this.datasource.data = this.students
      });
    });
  }

  modify(student: Student) {
    const dialogRef = this.dialog.open(ModifyStudentComponent, {
      data: student
    }).afterClosed().subscribe((student: Student) => {
      this.studentService.getStudents().subscribe( (students: Student[]) => {
        this.students = students
        this.datasource.data = this.students
      });
    });
  }

  remove( student: Student ) {
    this.snackBar.open(`${student.name} ${student.lastname} successfully removed`, 'Close', {
      duration: 3000
    })
    this.store.dispatch(deleteStudentState({ student }))
  }
}
 