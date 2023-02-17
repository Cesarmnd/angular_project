import { InjectionToken } from "@angular/core";
import { Config } from "./models/config";
import { CourseService } from "./services/course.service";
import { StudentsService } from "./services/students.service";

export const config: Config = {
  urlAPI: ' ',
  services: {
    courseService: new CourseService(),
    studentService: new StudentsService()
  }
}

export const token = new InjectionToken<Config>('config')