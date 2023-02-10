import { teacher } from "./teacher";

export interface Course {
  id: number,
  name: string,
  teacher: teacher ,
  time: number, 
  startDate: Date,
  endDate: Date,
  open: boolean
}