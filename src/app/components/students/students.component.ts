import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/students';
import { MatTableDataSource } from '@angular/material/table';
import { ModifyStudentComponent } from '../modify-student/modify-student.component';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentComponent } from '../add-student/add-student.component';
import { StudentsService } from 'src/app/services/students.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{
  students!: Student[];
  datasource!: MatTableDataSource<Student>;
  columns: string[] = ['user', 'name', 'grade', 'email', 'actions'];

  constructor (
    private dialog: MatDialog,
    private studentService: StudentsService
  ) {
  }
  
  ngOnInit(): void {
    this.datasource = new MatTableDataSource<Student>();
    this.studentService.getStudents().then((students: Student[]) => {
      this.datasource.data = students
    }).catch((error: any) => {
      console.log(error)
    })
  }

  modify(student: Student) {
    const dialogRef = this.dialog.open(ModifyStudentComponent, {
      data: student
    })
  }

  add(student: Student) {
    const dialogRef = this.dialog.open(AddStudentComponent, {
      data: student
    })
  }

  delete() {
    alert('Usuario eliminado.')
  }
}
 