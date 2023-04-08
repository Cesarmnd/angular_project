import { teacher } from "./teacher";

export interface Course {
  id: string,
  name: string,
  img: string,
  teacher: teacher,
  startDate: Date,
  endDate: Date,
  open: boolean
}