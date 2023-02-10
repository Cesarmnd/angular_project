import { Component } from '@angular/core';
import { Student } from 'src/app/models/students';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  courses: Student[] = [
    {
      user: 'alfredo21',
      name: 'Alfredo',
      grade: 15,
      email: 'alfredo.n@gmail.com'
    },
    {
      user: 'alfredo21',
      name: 'Alfredo',
      grade: 15,
      email: 'alfredo.n@gmail.com'
    },    
    {
      user: 'alfredo21',
      name: 'Alfredo',
      grade: 15,
      email: 'alfredo.n@gmail.com'
    },    
    {
      user: 'alfredo21',
      name: 'Alfredo',
      grade: 15,
      email: 'alfredo.n@gmail.com'
    },
    {
      user: 'alfredo21',
      name: 'Alfredo',
      grade: 15,
      email: 'alfredo.n@gmail.com'
    },
    {
      user: 'alfredo21',
      name: 'Alfredo',
      grade: 15,
      email: 'alfredo.n@gmail.com'
    }
  ]
  datasource: MatTableDataSource<Student> = new MatTableDataSource<Student>(this.courses);
  columns: string[] = ['user', 'name', 'grade', 'email', 'actions'];
}
