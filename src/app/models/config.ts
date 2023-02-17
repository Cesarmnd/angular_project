import { CourseService } from "../services/course.service";
import { StudentsService } from "../services/students.service";

export interface Config {
  urlAPI: string,
  services: {
    courseService: CourseService,
    studentService: StudentsService
  }
}