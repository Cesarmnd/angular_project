import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/students';
import { MatTableDataSource } from '@angular/material/table';
import { ModifyStudentComponent } from '../modify-student/modify-student.component';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentComponent } from '../add-student/add-student.component';
import { StudentService } from '../../services/student.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from 'src/app/core/services/sesion.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students!: Student[];
  sesion$!: Observable<Sesion>
  students$!: Observable<Student[]>;
  datasource!: MatTableDataSource<Student>;
  columns: string[] = ['user', 'name', 'grade', 'email', 'actions'];

  constructor (
    private dialog: MatDialog,
    private router: Router, 
    private sesion: SesionService,
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {
  }
  
  ngOnInit(): void {
    // Validating if a session is active
    this.sesion.getSesion().subscribe( (sesion: Sesion) => {
      if(!sesion.activeSesion) {
        this.router.navigate(['auth/login'])
      }
    })
    this.sesion$ = this.sesion.getSesion();
    // Getting data for Mat-Table
    this.datasource = new MatTableDataSource<Student>();
    this.studentService.getStudents().subscribe( (students: Student[]) => {
      this.students = students
    });
    this.datasource.data = this.students
  }

  add(student: Student) {          
    const dialogRef = this.dialog.open(AddStudentComponent, {
      data: student
    })
    dialogRef.afterClosed().subscribe(() => this.datasource.data = this.students);
  }

  modify(student: Student) {
    const dialogRef = this.dialog.open(ModifyStudentComponent, {
      data: student
    })
    dialogRef.afterClosed().subscribe(() => this.datasource.data = this.students);
  }

  remove( student: Student ) {
    this.studentService.removeStudent(student)
    this.datasource.data = this.students
  }
}
 