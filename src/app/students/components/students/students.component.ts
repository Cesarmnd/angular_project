import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/core/models/students';
import { MatTableDataSource } from '@angular/material/table';
import { ModifyStudentComponent } from '../modify-student/modify-student.component';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentComponent } from '../add-student/add-student.component';
import { StudentService } from '../../services/student.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Sesion } from 'src/app/core/models/sesion';
import { SesionService } from 'src/app/core/services/sesion.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StudentState } from '../../states/reducers/student-state.reducer';
import { Store } from '@ngrx/store';
import { LoadedStudentSelector, LoadingStudentSelector } from '../../states/selectors/student-state.selectors';
import { loadStudentState } from '../../states/actions/student-state.actions';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students!: Student[];
  sesion$!: Observable<Sesion>
  // students$!: Observable<Student[]>;
  datasource!: MatTableDataSource<Student>;
  columns: string[] = ['user', 'name', 'grade', 'email', 'actions'];
  loading$!: Observable<Boolean>

  constructor (
    private dialog: MatDialog,
    private router: Router, 
    private sesion: SesionService,
    private route: ActivatedRoute,
    private studentService: StudentService,
    private snackBar: MatSnackBar,
    private store: Store<StudentState>,
  ) {
  }
  
  ngOnInit(): void {
    this.datasource = new MatTableDataSource<Student>();
    this.loading$ = this.store.select(LoadingStudentSelector)
    this.store.dispatch(loadStudentState()) 

    this.store.select(LoadedStudentSelector).subscribe((students: Student[]) => {
      this.students = students
      this.datasource.data = this.students
    }) //---> getting data for Mat-Table

    // Validating active session
    this.sesion.getSesion().subscribe( (sesion: Sesion) => {
      if(!sesion.activeSesion) {
        this.router.navigate(['auth/login'])
      }
    })
    this.sesion$ = this.sesion.getSesion();
  }


  add(student: Student) {          
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
    this.studentService.removeStudent(student).subscribe(( student:Student ) => {
      this.studentService.getStudents().subscribe( (students: Student[]) => {
        this.students = students
        this.datasource.data = this.students
      });
    })
  }
}
 