import { Injectable } from '@angular/core';
import { Student } from '../models/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private students: Student[] = [
    {
      user: 'alfredo21',
      name: 'Alfredo',
      lastname: 'Novoa',
      grade: 15,
      email: 'alfredo.n@gmail.com'
    },
    {
      user: 'esteban281',
      name: 'Esteban',
      lastname: 'Sotomayor',
      grade: 17,
      email: 'esteban.s@gmail.com'
    },
    {
      user: 'romina_1lr1',
      name: 'Romina',
      lastname: 'Otiniano',
      grade: 8,
      email: 'romina.o@gmail.com'
    },
    {
      user: 'valeria1996',
      name: 'Valeria',
      lastname: 'Mejia',
      grade: 20,
      email: 'valeria.m@gmail.com'
    },
    {
      user: 'sebavgp63',
      name: 'Sebastian',
      lastname: 'Guevara',
      grade: 6,
      email: 'sebastian.g@gmail.com'
    },
    {
      user: 'estef_85',
      name: 'Estefania',
      lastname: 'Sagardi',
      grade: 16,
      email: 'estefania.s@gmail.com'
    },
    {
      user: 'carlos2601',
      name: 'Carlos',
      lastname: 'Campos',
      grade: 8,
      email: 'carlos.c@gmail.com'
    },
    {
      user: 'enrique.n25',
      name: 'Enrique',
      lastname: 'Ninapaitan',
      grade: 13,
      email: 'enrique.n@gmail.com'
    },
    {
      user: 'liss_j19',
      name: 'Lisset',
      lastname: 'Revilla',
      grade: 19,
      email: 'lisset.r@gmail.com'
    },
    {
      user: 'aram_yumi5',
      name: 'Yumi',
      lastname: 'Morita',
      grade: 14,
      email: 'yumi.m@gmail.com'
    },
    {
      user: 'isab_189',
      name: 'Isabel',
      lastname: 'Esquivel',
      grade: 6,
      email: 'isabel.e@gmail.com'
    },
    {
      user: 'lily_26',
      name: 'Liliana',
      lastname: 'Figueroa',
      grade: 17,
      email: 'liliana.f@gmail.com'
    },
    {
      user: 'oscar_45',
      name: 'Oscar',
      lastname: 'Santiesteban',
      grade: 11,
      email: 'oscar.s@gmail.com'
    }
  ]

  constructor() {
   }

  getStudents(): Promise<Student[]> {
    return new Promise((resolve, reject) => {
      if (this.students.length > 0) {
        resolve(this.students)
      } else {
        reject('')
      }
    })
  }
}
